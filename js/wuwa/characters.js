const BASE = "assets/wuwa";

function resonance(id){
  return [1,2,3,4,5,6].map(n => `${BASE}/resonance/${id}/${n}.png`);
}

function char(id, name, rarity, weaponType, standard = false, extraWeapon = false, collab = false){
  return {
    id,
    name,
    rarity,
    standard,
    collab, 
    image: `${BASE}/icons/${id}.png`,
    icons: resonance(id),
    weapons: extraWeapon
      ? [
          `${BASE}/weapon/icons/${weaponType}.png`,
          `${BASE}/weapon/${id}.png`
        ]
      : [
          `${BASE}/weapon/icons/${weaponType}.png`
        ]
  };
}

const CHARACTERS = [
  char("aalto", "Aalto", "4★", "pistol"),
  char("aemeath", "Aemeath", "5★", "sword", false, true),
  char("augusta", "Augusta", "5★", "broadblade", false, true),

  char("baizhi", "Baizhi", "4★", "rectifier"),
  char("brant", "Brant", "5★", "sword", false, true),
  char("buling", "Buling", "4★", "rectifier"),

  char("calcharo", "Calcharo", "5★", "broadblade", true),
  char("camellya", "Camellya", "5★", "sword", false, true),
  char("cantarella", "Cantarella", "5★", "rectifier", false, true),
  char("carlotta", "Carlotta", "5★", "pistol", false, true),
  char("cartethyia", "Cartethyia", "5★", "sword", false, true),
  char("changli", "Changli", "5★", "sword", false, true),
  char("chisa", "Chisa", "5★", "broadblade", false, true),
  char("chixia", "Chixia", "4★", "pistol"),
  char("ciaccona", "Ciaccona", "5★", "pistol", false, true),

  char("danjin", "Danjin", "4★", "sword"),
  char("denia", "Denia", "5★", "rectifier"),

  char("encore", "Encore", "5★", "rectifier", true),

  char("galbrena", "Galbrena", "5★", "pistol", false, true),

  char("hiyuki", "Hiyuki", "5★", "sword", false, true),

  char("iuno", "Iuno", "5★", "gauntlet", false, true),

  char("jianxin", "Jianxin", "5★", "gauntlet", true),
  char("jinhsi", "Jinhsi", "5★", "broadblade", false, true),
  char("jiyan", "Jiyan", "5★", "broadblade", false, true),

  char("lingyang", "Lingyang", "5★", "gauntlet", true),
  char("lucilla", "Lucilla", "5★", "rectifier", false, true),
  char("lucy", "Lucy", "5★", "pistol", false, true, true),
  char("lumi", "Lumi", "4★", "broadblade"),
  char("lupa", "Lupa", "5★", "broadblade", false, true),
  char("luuk", "Luuk Herssen", "5★", "sword", false, true),
  char("lynae", "Lynae", "5★", "pistol", false, true),

  char("mornye", "Mornye", "5★", "broadblade", false, true),
  char("mortefi", "Mortefi", "4★", "pistol"),

  char("phoebe", "Phoebe", "5★", "rectifier", false, true),
  char("phrolova", "Phrolova", "5★", "rectifier", false, true),

  char("qiuyuan", "Qiuyuan", "5★", "sword", false, true),

  char("rebecca", "Rebecca", "5★", "pistol", false, true, true),
  char("roccia", "Roccia", "5★", "gauntlet", false, true),

  char("sanhua", "Sanhua", "4★", "sword"),
  char("shorekeeper", "Shorekeeper", "5★", "rectifier", false, true),
  char("sigrika", "Sigrika", "5★", "gauntlet", false, true),

  char("taoqi", "Taoqi", "4★", "broadblade"),

  char("verina", "Verina", "5★", "rectifier", true),

  char("xiangli-yao", "Xiangli Yao", "5★", "gauntlet", false, true),

  char("yangyang", "Yangyang", "4★", "sword"),
  char("yinlin", "Yinlin", "5★", "rectifier", false, true),
  char("youhu", "Youhu", "4★", "gauntlet"),
  char("yuanwu", "Yuanwu", "4★", "gauntlet"),

  char("zani", "Zani", "5★", "gauntlet", false, true),
  char("zhezhi", "Zhezhi", "5★", "rectifier", false, true),
];