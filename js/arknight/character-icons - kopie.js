const RESONANCE_BASE = "assets/wuwa/resonance";
const PLACEHOLDER_ICON = `${RESONANCE_BASE}/placeholder.png`;

/**
 * Geeft het icon pad terug (bestaat het niet → placeholder via onerror)
 */
function getResonanceIcon(charId, n){
  return `${RESONANCE_BASE}/${charId}/${n}.png`;
}

/**
 * Fallback als icon niet bestaat
 */
function onResonanceError(img){
  img.onerror = null;
  img.src = PLACEHOLDER_ICON;
}