/*
  characters.js staat in:
  js/wuwa/characters.js

  Afbeeldingen staan in:
  assets/wuwa/
*/

const SCRIPT_URL =
  document.currentScript?.src ||
  new URL("js/wuwa/characters.js", document.baseURI).href;

const BASE = new URL("../../assets/wuwa/", SCRIPT_URL).href;

function assetPath(...parts) {
  return new URL(parts.join("/"), BASE).href;
}

function uniquePaths(paths) {
  return [...new Set(paths.filter(Boolean))];
}

function resonance(id) {
  return [1, 2, 3, 4, 5, 6].map(number =>
    assetPath("resonance", id, `${number}.png`)
  );
}

/*
  Mogelijke paden voor de algemene weapon-icon.

  Bijvoorbeeld:
  assets/wuwa/weapon/icons/sword.png
  assets/wuwa/weapon/icons/sword.jpg
*/
function weaponTypeCandidates(weaponType) {
  const type = weaponType.toLowerCase();

  const extensions = [
    "png"
  ];

  const folders = [
    ["Weapon", "icons"],
    ["Weapon", "icon"],
    ["Weapons", "icons"]
  ];

  const paths = [];

  folders.forEach(folder => {
    extensions.forEach(extension => {
      paths.push(
        assetPath(
          ...folder,
          `${type}.${extension}`
        )
      );
    });
  });

  return uniquePaths(paths);
}

/*
  Mogelijke paden voor het eigen 5★ weapon.

  Bijvoorbeeld:
  assets/wuwa/weapon/aemeath-weapon.png
  assets/wuwa/weapon/aemeath.png
*/
function signatureWeaponCandidates(
  id,
  signatureWeapon
) {
  const extensions = [
    "png"
  ];

  const folders = [
    ["weapon"],
    ["weapons"],
    ["weapon", "signature"],
    ["weapon", "signatures"]
  ];

  const explicitName = signatureWeapon
    ? signatureWeapon.replace(
        /\.(png|jpg|jpeg|webp)$/i,
        ""
      )
    : null;

  const names = uniquePaths([
    explicitName,
    `${id}-weapon`,
    id
  ]);

  const paths = [];

  folders.forEach(folder => {
    names.forEach(fileName => {
      extensions.forEach(extension => {
        paths.push(
          assetPath(
            ...folder,
            `${fileName}.${extension}`
          )
        );
      });
    });
  });

  return uniquePaths(paths);
}

function char(
  id,
  name,
  rarity,
  weaponType,
  standard = false,
  signatureWeapon = null,
  collab = false
) {
  /*
    Het eerste onderdeel bevat de mogelijke
    algemene weapon-type-icons.
  */
  const weapons = [
    weaponTypeCandidates(weaponType)
  ];

  /*
    Alleen characters met een signatureWeapon
    krijgen een tweede weapon-icon.
  */
  if (signatureWeapon) {
    weapons.push(
      signatureWeaponCandidates(
        id,
        signatureWeapon
      )
    );
  }

  return {
    id,
    name,
    rarity,
    standard,
    collab,

    image: assetPath(
      "icons",
      `${id}.png`
    ),

    icons: resonance(id),

    weapons
  };
}

const CHARACTERS = [
  char("aalto","Aalto","4★","pistol"),
  char("aemeath","Aemeath","5★","sword",false,"aemeath-weapon.png"),
  char("augusta","Augusta","5★","broadblade",false,"augusta-weapon.png"),

  char("baizhi","Baizhi","4★","rectifier"),
  char("brant","Brant","5★","sword",false,"brant-weapon.png"),
  char("buling","Buling","4★","rectifier"),

  char("calcharo","Calcharo","5★","broadblade",true),
  char("camellya","Camellya","5★","sword",false,"camellya-weapon.png"),
  char("cantarella","Cantarella","5★","rectifier",false,"cantarella-weapon.png"),
  char("carlotta", "Carlotta","5★","pistol",false,"carlotta-weapon.png"),
  char("cartethyia","Cartethyia","5★","sword",false,"cartethyia-weapon.png"),
  char("changli","Changli","5★","sword",false,"changli-weapon.png"),
  char("chisa","Chisa","5★","broadblade",false,"chisa-weapon.png"),
  char("chixia","Chixia","4★","pistol"),
  char("ciaccona","Ciaccona","5★","pistol",false,"ciaccona-weapon.png"),

  char("danjin","Danjin","4★","sword"),
  char("denia","Denia","5★","rectifier"),

  char("encore","Encore","5★","rectifier",true),

  char("galbrena","Galbrena","5★","pistol",false,"galbrena-weapon.png"),

  char("hiyuki","Hiyuki","5★","sword",false,"hiyuki-weapon.png"),

  char("iuno","Iuno","5★","gauntlet",false,"iuno-weapon.png"),

  char("jianxin","Jianxin","5★","gauntlet",true),

  char(
    "jinhsi",
    "Jinhsi",
    "5★",
    "broadblade",
    false,
    "jinhsi-weapon.png"
  ),

  char(
    "jiyan",
    "Jiyan",
    "5★",
    "broadblade",
    false,
    "jiyan-weapon.png"
  ),

  char(
    "lingyang",
    "Lingyang",
    "5★",
    "gauntlet",
    true
  ),

  char(
    "lucilla",
    "Lucilla",
    "5★",
    "rectifier",
    false,
    "lucilla-weapon.png"
  ),

  char(
    "lucy",
    "Lucy",
    "5★",
    "pistol",
    false,
    "lucy-weapon.png",
    true
  ),

  char(
    "lumi",
    "Lumi",
    "4★",
    "broadblade"
  ),

  char(
    "lupa",
    "Lupa",
    "5★",
    "broadblade",
    false,
    "lupa-weapon.png"
  ),

  char(
    "luuk",
    "Luuk Herssen",
    "5★",
    "sword",
    false,
    "luuk-weapon.png"
  ),

  char(
    "lynae",
    "Lynae",
    "5★",
    "pistol",
    false,
    "lynae-weapon.png"
  ),

  char(
    "mornye",
    "Mornye",
    "5★",
    "broadblade",
    false,
    "mornye-weapon.png"
  ),

  char(
    "mortefi",
    "Mortefi",
    "4★",
    "pistol"
  ),

  char(
    "phoebe",
    "Phoebe",
    "5★",
    "rectifier",
    false,
    "phoebe-weapon.png"
  ),

  char(
    "phrolova",
    "Phrolova",
    "5★",
    "rectifier",
    false,
    "phrolova-weapon.png"
  ),

  char(
    "qiuyuan",
    "Qiuyuan",
    "5★",
    "sword",
    false,
    "qiuyuan-weapon.png"
  ),

  char(
    "rebecca",
    "Rebecca",
    "5★",
    "pistol",
    false,
    "rebecca-weapon.png",
    true
  ),

  char(
    "roccia",
    "Roccia",
    "5★",
    "gauntlet",
    false,
    "roccia-weapon.png"
  ),

  char(
    "sanhua",
    "Sanhua",
    "4★",
    "sword"
  ),

  char(
    "shorekeeper",
    "Shorekeeper",
    "5★",
    "rectifier",
    false,
    "shorekeeper-weapon.png"
  ),

  char(
    "sigrika",
    "Sigrika",
    "5★",
    "gauntlet",
    false,
    "sigrika-weapon.png"
  ),

  char(
    "taoqi",
    "Taoqi",
    "4★",
    "broadblade"
  ),

  char(
    "verina",
    "Verina",
    "5★",
    "rectifier",
    true
  ),

  char(
    "xiangli-yao",
    "Xiangli Yao",
    "5★",
    "gauntlet",
    false,
    "xiangli-yao-weapon.png"
  ),

  char(
    "yangyang",
    "Yangyang",
    "4★",
    "sword"
  ),

  char(
    "yangyang-x",
    "Yangyang: Xuanling",
    "5★",
    "sword",
    false,
    "yangyang-x-weapon.png"
  ),

  char(
    "yinlin",
    "Yinlin",
    "5★",
    "rectifier",
    false,
    "yinlin-weapon.png"
  ),

  char(
    "youhu",
    "Youhu",
    "4★",
    "gauntlet"
  ),

  char(
    "yuanwu",
    "Yuanwu",
    "4★",
    "gauntlet"
  ),

  char(
    "zani",
    "Zani",
    "5★",
    "gauntlet",
    false,
    "zani-weapon.png"
  ),

  char(
    "zhezhi",
    "Zhezhi",
    "5★",
    "rectifier",
    false,
    "zhezhi-weapon.png"
  )
];

window.CHARACTERS = CHARACTERS;