export function renderGame(game){
  document.getElementById('gameTitle').textContent = game.name;
  document.getElementById('gameMeta').textContent = 'Characters: ' + game.characters.length;

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  game.characters.forEach(c=>{
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<strong>${c.name}</strong> <span class="muted">${c.rarity||''}</span>`;
    grid.appendChild(div);
  });
}
