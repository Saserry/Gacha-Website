import { renderGame } from './renderer.js';

const GAMES = [
  { id:'wuthering_waves', name:'Wuthering Waves', url:'js/games/wuthering_waves.html' },
  { id:'genshin', name:'Genshin Impact', url:'js/games/genshin.html' },
  { id:'star_rail', name:'Honkai: Star Rail', url:'js/games/star_rail.html' },
  { id:'zenless', name:'Zenless Zone Zero', url:'js/games/zenless.html' },
  { id:'nikke', name:'NIKKE', url:'js/games/nikke.html' },
];

const nav = document.getElementById('navbar');

// ALWAYS render navbar first
GAMES.forEach(g => {
  const btn = document.createElement('button');
  btn.textContent = g.name;
  btn.onclick = () => loadGame(g);
  nav.appendChild(btn);
});

async function loadGame(game){
  document.querySelectorAll('#navbar button').forEach(b=>b.classList.remove('active'));
  [...nav.children].find(b=>b.textContent===game.name)?.classList.add('active');

  try{
    const res = await fetch(game.url);
    if(!res.ok) throw new Error('Fetch failed');
    const text = await res.text();

    const match = text.match(/<script[^>]*id=["']gameData["'][^>]*>([\s\S]*?)<\/script>/i);
    if(!match) throw new Error('gameData not found');

    const data = JSON.parse(match[1]);
    renderGame(data);
  }catch(err){
    document.getElementById('gameTitle').textContent = game.name;
    document.getElementById('gameMeta').textContent = 'Kon game data niet laden';
    document.getElementById('grid').innerHTML = '<p class="muted">Fout bij laden</p>';
    console.error(err);
  }
}

// Auto-load first game
loadGame(GAMES[0]);
