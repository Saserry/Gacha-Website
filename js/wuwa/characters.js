// =====================================================
// WUTHERING WAVES - CHARACTERS.JS
// =====================================================

// Hoofdmap voor alle Wuthering Waves afbeeldingen.
// Let op: jouw map heet "Weapon" met hoofdletter W.
const BASE = "./assets/wuwa";


// =====================================================
// RESONANCE ICONS
// =====================================================

function resonance(id) {
  return [1, 2, 3, 4, 5, 6].map(
    number => `${BASE}/resonance/${id}/${number}.png`
  );
}


// =====================================================
// CHARACTER FUNCTIE
// =====================================================

function char(
  id,
  name,
  rarity,
  weaponType,
  standard = false,
  extraWeapon = false,
  collab = false
) {

  // Elk character krijgt altijd zijn weapon type icon.
  // Bijvoorbeeld:
  // assets/wuwa/Weapon/icons/sword.png
  const weapons = [
    `${BASE}/Weapon/icons/${weaponType}.png`
  ];


  // Wanneer extraWeapon true is,
  // krijgt het character zijn eigen signature weapon.
  //
  // Bijvoorbeeld:
  // aemeath -> aemeath-weapon.png
  if (extraWeapon) {
    weapons.push(
      `${BASE}/Weapon/${id}-weapon.png`
    );
  }


  return {
    id: id,
    name: name,
    rarity: rarity,

    standard: standard,
    collab: collab,

    // Character afbeelding
    image: `${BASE}/icons/${id}.png`,

    // Resonance 1 t/m 6
    icons: resonance(id),

    // Weapon type + eventueel eigen weapon
    weapons: weapons
  };
}


// =====================================================
// CHARACTERS
// =====================================================

const CHARACTERS = [

  // ===================================================
  // A
  // ===================================================

  char("aalto","Aalto","4★","pistol"),

  char("aemeath","Aemeath","5★","sword",false,true),

  char("augusta","Augusta","5★","broadblade",false,true),


  // ===================================================
  // B
  // ===================================================

  char("baizhi","Baizhi","4★","rectifier"),

  char("brant","Brant","5★","sword",false,true),

  char("buling","Buling","4★","rectifier"),


  // ===================================================
  // C
  // ===================================================

  char("calcharo","Calcharo","5★","broadblade",true),

  char("camellya","Camellya","5★","sword",false,true),

  char("cantarella","Cantarella","5★","rectifier",false,true),

  char("carlotta","Carlotta","5★","pistol",false,true),

  char("cartethyia","Cartethyia","5★","sword",false,true),

  char("changli","Changli","5★","sword",false,true),

  char("chisa","Chisa","5★","broadblade",false,true),

  char("chixia","Chixia","4★","pistol"),

  char("ciaccona","Ciaccona","5★","pistol",false,true),


  // ===================================================
  // D
  // ===================================================

  char("danjin","Danjin","4★","sword"),

  char("denia","Denia","5★","rectifier",false,true),


  // ===================================================
  // E
  // ===================================================

  char("encore","Encore","5★","rectifier",true),


  // ===================================================
  // G
  // ===================================================

  char("galbrena","Galbrena","5★","pistol",false,true),


  // ===================================================
  // H
  // ===================================================

  char("hiyuki","Hiyuki","5★","sword",false,true),


  // ===================================================
  // I
  // ===================================================

  char("iuno","Iuno","5★","gauntlet",false,true),


  // ===================================================
  // J
  // ===================================================

  char("jianxin","Jianxin","5★","gauntlet",true),

  char("jinhsi","Jinhsi","5★","broadblade",false,true),

  char("jiyan","Jiyan","5★","broadblade",false,true),


  // ===================================================
  // L
  // ===================================================

  char("lingyang","Lingyang","5★","gauntlet",true),

  char("lucilla","Lucilla","5★","rectifier",false,true),

  char("lucy","Lucy","5★","pistol",false,true,true),

  char("lumi","Lumi","4★","broadblade"),

  char("lupa","Lupa","5★","broadblade",false,true),

  char("luuk","Luuk Herssen","5★","sword",false,true),

  char("lynae","Lynae","5★","pistol",false,true),


  // ===================================================
  // M
  // ===================================================

  char("mornye","Mornye","5★","broadblade",false,true),

  char("mortefi","Mortefi","4★","pistol"),


  // ===================================================
  // P
  // ===================================================

  char("phoebe","Phoebe","5★","rectifier",false,true),

  char("phrolova","Phrolova","5★","rectifier",false,true),


  // ===================================================
  // Q
  // ===================================================

  char("qiuyuan","Qiuyuan","5★","sword",false,true),


  // ===================================================
  // R
  // ===================================================

  char("rebecca","Rebecca","5★","pistol",false,true,true),

  char("roccia","Roccia","5★","gauntlet",false,true),


  // ===================================================
  // S
  // ===================================================

  char("sanhua","Sanhua","4★","sword"),

  char("shorekeeper","Shorekeeper","5★","rectifier",false,true),

  char("sigrika","Sigrika","5★","gauntlet",false,true),


  // ===================================================
  // T
  // ===================================================

  char("taoqi","Taoqi","4★","broadblade"),


  // ===================================================
  // V
  // ===================================================

  char("verina","Verina","5★","rectifier",true),


  // ===================================================
  // X
  // ===================================================

  char("xiangli-yao","Xiangli Yao","5★","gauntlet",false,true),


  // ===================================================
  // Y
  // ===================================================

  char("yangyang","Yangyang","4★","sword"),

  char("yangyang x","Yangyang: Xuanling","5★","sword",false,true),

  char("yinlin","Yinlin","5★","rectifier",false,true),

  char("youhu","Youhu","4★","gauntlet"),

  char("yuanwu","Yuanwu","4★","gauntlet"),


  // ===================================================
  // Z
  // ===================================================

  char("zani","Zani","5★","gauntlet",false,true),

  char("zhezhi","Zhezhi","5★","rectifier",false,true)
];


// =====================================================
// BESCHIKBAAR MAKEN VOOR DE HTML
// =====================================================

window.CHARACTERS = CHARACTERS;