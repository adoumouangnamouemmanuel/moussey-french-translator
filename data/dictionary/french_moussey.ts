export interface Translation {
  word: string;
  example?: string;
  exampleTranslation?: string;
}

export interface FrenchToMousseyEntry {
  word: string;
  translations: Translation[];
}

export const mousseyToFrenchDictionary: FrenchToMousseyEntry[] = [
  {
    word: "à",
    translations: [
      {
        word: "a",
        example: "Nam gi jaŋ a ti funa",
        exampleTranslation: "Il commence à manger",
      },
      {
        word: "ay",
        example: "Nam ɦal ɦura maŋ kunumma",
        exampleTranslation: "Il donne la chèvre à son beau-père",
      },
      {
        word: "maŋ",
      },
    ],
  },
  {
    word: "à (possessif)",
    translations: [
      {
        word: "vi",
        example: "Ni velew vi gi ge?",
        exampleTranslation: "À qui est ce vélo?",
      },
      {
        word: "ɦu",
        example: "Ni velew ɦu gi ge?",
        exampleTranslation: "À qui est ce vélo?",
      },
    ],
  },
  {
    word: "abandonner",
    translations: [{ word: "hinda" }, { word: "noyra" }],
  },
  {
    word: "abattre",
    translations: [{ word: "ŋgaɗta" }],
  },
  {
    word: "abcès",
    translations: [{ word: "balla" }, { word: "vevegena" }],
  },
  {
    word: "abeille",
    translations: [{ word: "yumma" }],
  },
  {
    word: "aboyer",
    translations: [{ word: "bura" }],
  },
  {
    word: "abri",
    translations: [
      { word: "bargana" },
      { word: "guɗukka" },
      { word: "mbudluɓma" },
    ],
  },
  {
    word: "abri rectangulaire en paille",
    translations: [{ word: "cugurina" }],
  },
  {
    word: "accabler",
    translations: [{ word: "dumba" }],
  },
  {
    word: "accepter",
    translations: [{ word: "vi kamba" }, { word: "ŋgaffa" }],
  },
  {
    word: "accorder",
    translations: [{ word: "hal humba" }],
  },
  {
    word: "accorder un tambour",
    translations: [
      {
        word: "sewel della",
      },
    ],
  },
  {
    word: "accrocher",
    translations: [{ word: "gaɓpa" }],
  },
  {
    word: "accroupissement",
    translations: [{ word: "cukculukka" }],
  },
  {
    word: "accusation",
    translations: [{ word: "yakka" }],
  },
  {
    word: "accuser",
    translations: [{ word: "yakka" }],
  },
  {
    word: "achat",
    translations: [{ word: "gussa" }],
  },
  {
    word: "acheter",
    translations: [{ word: "gussa" }],
  },
  {
    word: "acide",
    translations: [{ word: "dlayra" }],
  },
  {
    word: "acné",
    translations: [{ word: "cemetlna" }, { word: "dliɗta" }],
  },
  {
    word: "adorer",
    translations: [{ word: "goɓpa" }],
  },
  {
    word: "adolescence",
    translations: [{ word: "go zoŋŋa" }],
  },
  {
    word: "adultère",
    translations: [{ word: "zoŋga" }],
  },
  {
    word: "affûter",
    translations: [{ word: "guura" }],
  },
  {
    word: "se agenouiller",
    translations: [{ word: "giriffa" }, { word: "yoroɗta" }],
  },
  {
    word: "agiter",
    translations: [{ word: "galaŋga" }],
  },
  {
    word: "agrandir",
    translations: [{ word: "mbuɗ ŋgolo" }, { word: "ɓeera" }],
  },
  {
    word: "agriculture",
    translations: [{ word: "horokŋa" }, { word: "baraɗna" }],
  },
  {
    word: "ah! (oui)",
    translations: [{ word: "ɦaa" }],
  },
  {
    word: "aider",
    translations: [{ word: "njunda" }],
  },
  {
    word: "aigre, se aigrir",
    translations: [{ word: "dlayra" }],
  },
  {
    word: "aiguille",
    translations: [{ word: "liɓirina" }],
  },
  {
    word: "aiguiser",
    translations: [{ word: "guura" }],
  },
  {
    word: "ail",
    translations: [{ word: "tumba" }],
  },
  {
    word: "aile",
    translations: [{ word: "garaŋŋa" }],
  },
  {
    word: "aimer",
    translations: [{ word: "minda" }],
  },
  {
    word: "alêne",
    translations: [{ word: "lelewna" }, { word: "lewnena" }],
  },
  {
    word: "alcool distillé",
    translations: [{ word: "bigirna" }, { word: "ergena" }],
  },
  {
    word: "aligner",
    translations: [{ word: "njaara" }],
  },
  {
    word: "aller",
    translations: [
      { word: "ira" },
      { word: "ɓira" },
      { word: "kalla" },
      { word: "tuɗta" },
    ],
  },
  {
    word: "alliance",
    translations: [{ word: "banara" }, { word: "galamba" }],
  },
  {
    word: "alliance pour la guerre",
    translations: [{ word: "ɓaraŋga" }],
  },
  {
    word: "allumer un feu",
    translations: [{ word: "do kura" }, { word: "ŋgal kura" }],
  },
  {
    word: "allumette",
    translations: [{ word: "asaana" }, { word: "elmeɗta" }],
  },
  {
    word: "aluminium",
    translations: [{ word: "tusuna" }],
  },
  {
    word: "améliorer",
    translations: [{ word: "mbuɗ jiviya" }, { word: "hinda" }],
  },
  {
    word: "amertume",
    translations: [{ word: "doomba" }, { word: "galaara" }],
  },
  {
    word: "ami",
    translations: [
      {
        word: "banara",
        example: "Bananna, aŋ nana ge?",
        exampleTranslation: "Mon ami, comment allez-vous?",
      },
      { word: "galara" },
    ],
  },
  {
    word: "amitié",
    translations: [
      {
        word: "banara",
        example: "Bana maygira ka tuɗ jiviɗi",
        exampleTranslation: "Notre amitié ne marche plus",
      },
    ],
  },
  {
    word: "amour",
    translations: [{ word: "minda" }],
  },
  {
    word: "avoir ampoule",
    translations: [{ word: "kolomba" }],
  },
  {
    word: "ampoule électrique",
    translations: [{ word: "ampulna" }],
  },
  {
    word: "amusement",
    translations: [{ word: "lawra" }],
  },
  {
    word: "an, année",
    translations: [{ word: "basara" }, { word: "kimba" }],
  },
  {
    word: "âne",
    translations: [{ word: "korra" }],
  },
  {
    word: "grand animal sauvage",
    translations: [{ word: "mbuuna" }, { word: "vaɓakŋa" }],
  },
  {
    word: "petits animaux sauvages",
    translations: [{ word: "tle bagina" }],
  },
  {
    word: "cette année",
    translations: [{ word: "cuguni" }],
  },
  {
    word: "année dernière",
    translations: [{ word: "gasamba" }],
  },
  {
    word: "année prochaine",
    translations: [{ word: "daara" }, { word: "daari" }],
  },
  {
    word: "anone",
    translations: [{ word: "kosona" }],
  },
  {
    word: "antre",
    translations: [{ word: "zulla" }],
  },
  {
    word: "anus",
    translations: [{ word: "zul ura soɗna" }],
  },
  {
    word: "apaiser",
    translations: [{ word: "ɗigilla" }, { word: "njalaɓma" }],
  },
  {
    word: "apparaître",
    translations: [{ word: "golla" }, { word: "ndi iira" }],
  },
  {
    word: "appeler",
    translations: [{ word: "yira" }],
  },
  {
    word: "apporter",
    translations: [
      {
        word: "tlira",
        example: "Mbaan goo namma aya",
        exampleTranslation: "Apporte-moi cet enfant",
      },
      { word: "mbara" },
    ],
  },
  {
    word: "approcher",
    translations: [{ word: "ɦuɗta" }],
  },
  {
    word: "appuyer contre",
    translations: [{ word: "deŋga" }],
  },
  {
    word: "après",
    translations: [
      {
        word: "dagan",
        example: "Nam hin mbay dagan tuwa",
        exampleTranslation: "Il viendra après",
      },
      {
        word: "ŋgoo dagan",
        example: "Nam ay coli ŋgoron ni namu",
        exampleTranslation: "C’est lui qui était après moi",
      },
    ],
  },
  {
    word: "après-demain",
    translations: [{ word: "siwi" }],
  },
  {
    word: "arête",
    translations: [{ word: "sokŋa" }],
  },
  {
    word: "arabe",
    translations: [{ word: "araɓma" }],
  },
  {
    word: "arachide",
    translations: [{ word: "zoy mbulla" }],
  },
  {
    word: "arachides grillées",
    translations: [
      { word: "mandawara" },
      { word: "zoyra hawira" },
      { word: "zoyra cufira" },
    ],
  },
  {
    word: "araignée",
    translations: [{ word: "mbambaraŋŋa" }],
  },
  {
    word: "arbre",
    translations: [{ word: "guna" }, { word: "ŋgusna" }],
  },
  {
    word: "jeune arbre",
    translations: [{ word: "bubura" }],
  },
  {
    word: "arc",
    translations: [{ word: "gu mburura" }],
  },
  {
    word: "arc-en-ciel",
    translations: [{ word: "su lona" }],
  },
  {
    word: "ardoise",
    translations: [{ word: "arɗuwassa" }],
  },
  {
    word: "argent",
    translations: [{ word: "gursuna" }, { word: "suŋgura" }],
  },
  {
    word: "argile",
    translations: [{ word: "luɓuna" }],
  },
  {
    word: "armes",
    translations: [{ word: "ɓagiina" }],
  },
  {
    word: "arrêter",
    translations: [{ word: "colla" }, { word: "hinda" }, { word: "seŋga" }],
  },
  {
    word: "arracher",
    translations: [{ word: "paɗta" }],
  },
  {
    word: "arranger",
    translations: [{ word: "njaara" }],
  },
  {
    word: "arriver",
    translations: [{ word: "mbara" }, { word: "cara" }, { word: "tewra" }],
  },
  {
    word: "arrivée",
    translations: [{ word: "mbara" }, { word: "cara" }, { word: "tewra" }],
  },
  {
    word: "articulation de l'épaule",
    translations: [{ word: "pella" }],
  },
  {
    word: "s’assembler",
    translations: [{ word: "mokka" }, { word: "molla" }],
  },
  {
    word: "s’asseoir",
    translations: [{ word: "kakŋa" }],
  },
  {
    word: "assiéger",
    translations: [{ word: "nduk zina" }],
  },
  {
    word: "assiette",
    translations: [{ word: "aseɗna" }, { word: "peleŋgeɗena" }],
  },
  {
    word: "la grande assiette",
    translations: [{ word: "parandina" }, { word: "sufrana" }],
  },
  {
    word: "assurément",
    translations: [{ word: "gasi" }, { word: "na ɗaŋ may" }],
  },
  {
    word: "asticot",
    translations: [{ word: "ziira" }],
  },
  {
    word: "attacher",
    translations: [{ word: "ɗakka" }, { word: "saraɗta" }],
  },
  {
    word: "atteindre",
    translations: [{ word: "tewra" }],
  },
  {
    word: "attelle",
    translations: [{ word: "birdiɗna" }],
  },
  {
    word: "attention!",
    translations: [{ word: "ana ba!" }, { word: "ɦay!" }],
  },
  {
    word: "attentivement",
    translations: [{ word: "en" }],
  },
  {
    word: "attraper",
    translations: [{ word: "vira" }, { word: "duura" }, { word: "ŋguffa" }],
  },
  {
    word: "attraper au vol",
    translations: [{ word: "dlakka" }],
  },
  {
    word: "aube",
    translations: [{ word: "ŋgarapiira" }, { word: "piipiira" }],
  },
  {
    word: "augmenter",
    translations: [{ word: "ɗugulla" }, { word: "suɓuura" }],
  },
  {
    word: "aujourd'hui",
    translations: [{ word: "iinira" }, { word: "karamba" }, { word: "koyni" }],
  },
  {
    word: "auriculaire",
    translations: [{ word: "dleɗeŋga" }],
  },
  {
    word: "aussi",
    translations: [{ word: "lay" }, { word: "may" }],
  },
  {
    word: "autorité",
    translations: [{ word: "eŋga" }],
  },
  {
    word: "autorité administrative",
    translations: [{ word: "palaɗta" }],
  },
  {
    word: "autre",
    translations: [
      { word: "daŋ" },
      { word: "hiniŋ" },
      { word: "hiŋ" },
      { word: "niŋ" },
    ],
  },
  {
    word: "avaler",
    translations: [{ word: "likka" }],
  },
  {
    word: "avant",
    translations: [
      {
        word: "fokka",
        example: "Nam mbay fogonu ɗowba nam mbay jewenu",
        exampleTranslation: "Il est venu avant moi",
      },
      { word: "jew" },
    ],
  },
  {
    word: "avec",
    translations: [
      {
        word: "u",
        example: "Nam li sunda u wayamma",
        exampleTranslation: "Il travaille avec son frère",
      },
    ],
  },
  {
    word: "avec un soupir",
    translations: [{ word: "ɦilif" }],
  },
  {
    word: "averse",
    translations: [{ word: "mborohoyra" }],
  },
  {
    word: "avertir",
    translations: [{ word: "gaɗta" }, { word: "nera" }],
  },
  {
    word: "avidité",
    translations: [{ word: "godlomba" }, { word: "ɦirigimba" }],
  },
  {
    word: "avion",
    translations: [{ word: "jirgina" }, { word: "aviyoŋŋa" }],
  },

  // b entree du dictionnaire
  {
    word: "babouin",
    translations: [{ word: "vii bakŋa" }],
  },
  {
    word: "bâiller",
    translations: [{ word: "hawra" }],
  },
  {
    word: "baisser la tête",
    translations: [{ word: "cok yamba" }],
  },
  {
    word: "balafon",
    translations: [{ word: "ŋgeŋgeŋŋa" }],
  },
  {
    word: "balafrer",
    translations: [{ word: "ɓis iira" }],
  },
  {
    word: "balai",
    translations: [{ word: "samaɗna" }],
  },
  {
    word: "balai à meule",
    translations: [{ word: "seseɗta" }],
  },
  {
    word: "balayer",
    translations: [{ word: "toora" }],
  },
  {
    word: "ballon",
    translations: [{ word: "balla" }],
  },
  {
    word: "banane",
    translations: [{ word: "bananna" }],
  },
  {
    word: "banc",
    translations: [{ word: "baŋŋa" }, { word: "zaŋŋa" }, { word: "layna" }],
  },
  {
    word: "banc de poissons",
    translations: [{ word: "selena" }],
  },
  {
    word: "banlieue",
    translations: [{ word: "del kaana" }],
  },
  {
    word: "baobab",
    translations: [{ word: "koŋgona" }],
  },
  {
    word: "baptême",
    translations: [{ word: "batemma" }],
  },
  {
    word: "baratter",
    translations: [{ word: "gutlukka" }],
  },
  {
    word: "barbe",
    translations: [{ word: "jeɓeera" }],
  },
  {
    word: "barbe du maïs",
    translations: [{ word: "belessa" }],
  },
  {
    word: "barbes de lance ou de flèche",
    translations: [{ word: "jaraŋga" }],
  },
  {
    word: "barrage",
    translations: [{ word: "mbura" }],
  },
  {
    word: "barrière en terre pour pêcher",
    translations: [{ word: "daamma" }],
  },
  {
    word: "barrière utilisée pour diriger des poissons vers un piège",
    translations: [
      { word: "camakka" },
      { word: "koɗoora" },
      { word: "ŋgiriŋga" },
      { word: "payra" },
    ],
  },
  {
    word: "barrir",
    translations: [{ word: "bayra" }],
  },
  {
    word: "bas, en bas",
    translations: [{ word: "gaa" }, { word: "kaŋga" }],
  },
  {
    word: "base du toit de la case qu'on attache avec de la corde",
    translations: [{ word: "biɗiina" }],
  },
  {
    word: "bâtir",
    translations: [{ word: "minda" }],
  },
  {
    word: "bâton",
    translations: [{ word: "togolora" }, { word: "zugulla" }],
  },
  {
    word: "bâton pour remuer la boule",
    translations: [{ word: "salagana" }],
  },
  {
    word: "battre",
    translations: [
      { word: "cira" },
      { word: "liɓpa" },
      { word: "poŋga" },
      { word: "tora" },
    ],
  },
  {
    word: "battre les ailes",
    translations: [{ word: "kisik garaŋga" }],
  },
  {
    word: "se battre",
    translations: [{ word: "kiriɓpa" }],
  },
  {
    word: "bavardage",
    translations: [{ word: "babarra" }, { word: "vunna" }],
  },
  {
    word: "bavarder",
    translations: [{ word: "ndalla" }, { word: "li vunna" }],
  },
  {
    word: "beaucoup",
    translations: [{ word: "coco" }],
  },
  {
    word: "beaucoup, nombreux",
    translations: [{ word: "bolow" }],
  },
  {
    word: "beau-frère",
    translations: [{ word: "kunura" }, { word: "kunura goora" }],
  },
  {
    word: "beau-frère du mari",
    translations: [{ word: "tanara" }],
  },
  {
    word: "beau-père",
    translations: [{ word: "kunura" }, { word: "kunura ŋgolla" }],
  },
  {
    word: "beauté",
    translations: [{ word: "jivira" }, { word: "jiffa" }],
  },
  {
    word: "becqueter",
    translations: [{ word: "koɓpa" }],
  },
  {
    word: "bélier",
    translations: [{ word: "gamlana" }],
  },
  {
    word: "belle-mère",
    translations: [{ word: "kunura" }, { word: "kunura ŋgolla" }],
  },
  {
    word: "belle-sœur du mari",
    translations: [{ word: "tanara" }],
  },
  {
    word: "bénédiction",
    translations: [{ word: "paɗta" }],
  },
  {
    word: "bénir",
    translations: [{ word: "paɗ vunna" }],
  },
  {
    word: "benjamin",
    translations: [{ word: "toɓona" }],
  },
  {
    word: "béquilles",
    translations: [{ word: "dumuuna" }],
  },
  {
    word: "bétail",
    translations: [{ word: "yoona" }],
  },
  {
    word: "bêtise",
    translations: [{ word: "laɓara" }],
  },
  {
    word: "beurre",
    translations: [{ word: "mbul mbiira" }],
  },
  {
    word: "bière",
    translations: [{ word: "summa" }],
  },
  {
    word: "le mélange utilisé pour préparer la bière",
    translations: [{ word: "gumba" }],
  },
  {
    word: "biche",
    translations: [{ word: "dukka" }],
  },
  {
    word: "biche-cochon",
    translations: [{ word: "mboora" }],
  },
  {
    word: "bidon",
    translations: [
      { word: "biɗoŋŋa" },
      { word: "goŋgoŋŋa" },
      { word: "guura" },
    ],
  },
  {
    word: "bien",
    translations: [
      {
        word: "jiviya",
        example: "Nam li sunda jiviya",
        exampleTranslation: "Il travaille bien",
      },
      {
        word: "ɦawa",
        example: "Aŋ ka ɦawa su?",
        exampleTranslation: "Tu vas bien?",
      },
    ],
  },
  {
    word: "bifurcation",
    translations: [{ word: "garak voɗta" }],
  },
  {
    word: "bifurquer",
    translations: [{ word: "garakka" }],
  },
  {
    word: "bile",
    translations: [{ word: "mayawna" }],
  },
  {
    word: "bilharziose",
    translations: [{ word: "ɦooɗomona" }],
  },
  {
    word: "billet de mille francs CFA",
    translations: [{ word: "birimma" }],
  },
  {
    word: "blanc",
    translations: [{ word: "haɓ" }, { word: "haɓi" }],
  },
  {
    word: "blennorragie",
    translations: [{ word: "bajalna" }],
  },
  {
    word: "blesser",
    translations: [{ word: "dakka" }],
  },
  {
    word: "blessure",
    translations: [{ word: "mbilna" }],
  },
  {
    word: "se blottir",
    translations: [{ word: "hewra" }],
  },
  {
    word: "bocal",
    translations: [{ word: "damsaana" }],
  },
  {
    word: "boire",
    translations: [{ word: "cira" }],
  },
  {
    word: "faire boire l’enfant avec le doigt",
    translations: [{ word: "ciira" }],
  },
  {
    word: "boire une substance épaisse",
    translations: [{ word: "goroɓpa" }],
  },
  {
    word: "bois",
    translations: [{ word: "guna" }],
  },
  {
    word: "bois fourchu",
    translations: [{ word: "gaffa" }, { word: "gu garakŋa" }],
  },
  {
    word: "bois, pièce qui joint le tuyau de fer et le fourneau d'une pipe",
    translations: [{ word: "mbaalina" }],
  },
  {
    word: "boisson à base de graines",
    translations: [{ word: "cuvura" }],
  },
  {
    word: "boisson alcoolique",
    translations: [{ word: "ergena" }],
  },
  {
    word: "boisson fermentée",
    translations: [
      { word: "bibilna" },
      { word: "koseɗna" },
      { word: "manbornona" },
      { word: "maybornona" },
    ],
  },
  {
    word: "boisson préparée avec les ingrédients d'un brassage antérieur",
    translations: [{ word: "selegewna" }],
  },
  {
    word: "boîte",
    translations: [{ word: "koɓma" }],
  },
  {
    word: "bol attaché au côté d'un petit grenier intérieur",
    translations: [{ word: "fuɗuk veera" }],
  },
  {
    word: "bon",
    translations: [{ word: "jiviya" }],
  },
  {
    word: "le bon travail",
    translations: [{ word: "sunda jivira" }],
  },
  {
    word: "bonheur",
    translations: [{ word: "ayra" }, { word: "heɓpa" }],
  },
  {
    word: "bonjour",
    translations: [{ word: "deɓpa" }],
  },
  {
    word: "bonté",
    translations: [{ word: "jivira" }],
  },
  {
    word: "bord",
    translations: [
      { word: "della" },
      { word: "doŋga" },
      { word: "funda" },
      { word: "hagara" },
      { word: "keŋ" },
    ],
  },
  {
    word: "bosse",
    translations: [{ word: "jigilla" }],
  },
  {
    word: "bouc",
    translations: [{ word: "ɦuna" }, { word: "ŋgekŋa" }],
  },
  {
    word: "bouche",
    translations: [{ word: "vunna" }],
  },
  {
    word: "boucher",
    translations: [{ word: "nereɗta" }, { word: "tossa" }],
  },
  {
    word: "boucle",
    translations: [{ word: "ŋgokŋa" }],
  },
  {
    word: "bouclier",
    translations: [{ word: "mbarina" }],
  },
  {
    word: "bouclier en peau",
    translations: [{ word: "polna" }],
  },
  {
    word: "boue",
    translations: [{ word: "doroɓma" }, { word: "doroɓoɓma" }],
  },
  {
    word: "boue pour construire une case",
    translations: [{ word: "jemma" }],
  },
  {
    word: "boue moulée dans une forme cylindrique pour construire une case",
    translations: [{ word: "calana" }],
  },
  {
    word: "bouger",
    translations: [
      { word: "ɦuɗta" },
      { word: "jokka" },
      { word: "mbusukka" },
      { word: "ŋgenda" },
    ],
  },
  {
    word: "bouillie",
    translations: [{ word: "haɓpa" }],
  },
  {
    word: "bouillie faite avec du riz, des arachides, et du tamarin",
    translations: [{ word: "morɗomba" }],
  },
  {
    word: "bouillir, faire cuire",
    translations: [{ word: "zalla" }],
  },
  {
    word: "bouilloire",
    translations: [{ word: "baraɗna" }, { word: "sakkanna" }],
  },
  {
    word: "boule",
    translations: [{ word: "funa" }],
  },
  {
    word: "bouleverser",
    translations: [{ word: "kora" }, { word: "ɓeŋga" }, { word: "ɓelekka" }],
  },
  {
    word: "bourgeon",
    translations: [{ word: "gogoɗta" }],
  },
  {
    word: "bousier",
    translations: [{ word: "ŋgoŋgorgona" }],
  },
  {
    word: "bouteille",
    translations: [{ word: "gaasana" }, { word: "koloɓona" }],
  },
  {
    word: "bouton",
    translations: [{ word: "jarara" }, { word: "jararara" }],
  },
  {
    word: "brèche",
    translations: [{ word: "ɦoloɗta" }],
  },
  {
    word: "brûler",
    translations: [{ word: "ŋgalla" }, { word: "saara" }, { word: "zakka" }],
  },
  {
    word: "bras",
    translations: [{ word: "bikŋa" }],
  },
  {
    word: "brasero",
    translations: [{ word: "ganunna" }],
  },
  {
    word: "brebis",
    translations: [{ word: "timina" }],
  },
  {
    word: "briller",
    translations: [{ word: "tira" }, { word: "weleɗta" }],
  },
  {
    word: "brique",
    translations: [{ word: "birikka" }],
  },
  {
    word: "brosser les dents",
    translations: [{ word: "ɦokka" }],
  },
  {
    word: "brouillard",
    translations: [{ word: "kuɗna" }],
  },
  {
    word: "brousse",
    translations: [{ word: "bagira" }, { word: "ŋgoora" }],
  },
  {
    word: "en brousse",
    translations: [{ word: "bagi" }, { word: "ŋgoo" }, { word: "ŋgoro" }],
  },
  {
    word: "bruit",
    translations: [{ word: "babarra" }, { word: "vunna" }],
  },
  {
    word: "brume",
    translations: [
      { word: "mbelembelera" },
      { word: "mborohoyra" },
      { word: "kuɗna" },
    ],
  },
  {
    word: "bubale",
    translations: [{ word: "goŋga" }],
  },
  {
    word: "buffle",
    translations: [{ word: "vunda" }],
  },
  {
    word: "burin",
    translations: [{ word: "dlodlora" }],
  },
  {
    word: "buter",
    translations: [{ word: "daɓta" }],
  },

  // c entree du dictionnaire
  {
    word: "cacher",
    translations: [{ word: "ŋgayra" }],
  },
  {
    word: "cacher sur quelque chose",
    translations: [{ word: "ɦuura" }],
  },
  {
    word: "cadavre",
    translations: [{ word: "ɦaana" }, { word: "maɗna" }],
  },
  {
    word: "cadeau donné au messager qui apporte des nouvelles d'un mort",
    translations: [{ word: "gerɓeɗekka" }],
  },
  {
    word: "cadeau que les gendres doivent donner après la mort de leur beau-père",
    translations: [{ word: "cayna" }],
  },
  {
    word: "donner cadeau",
    translations: [{ word: "ŋgomba" }],
  },
  {
    word: "donner à qqn qui part pour un voyage",
    translations: [{ word: "puura" }],
  },
  {
    word: "donner pour faire plaisir",
    translations: [{ word: "kunda" }],
  },
  {
    word: "cadenas",
    translations: [{ word: "kuɓilira" }],
  },
  {
    word: "café",
    translations: [{ word: "kaffena" }],
  },
  {
    word: "cahier",
    translations: [{ word: "kaayeera" }, { word: "magaara" }],
  },
  {
    word: "caïlcédrat",
    translations: [{ word: "gamma" }],
  },
  {
    word: "caillou",
    translations: [{ word: "gogoyra" }, { word: "jeremma" }],
  },
  {
    word: "cal",
    translations: [{ word: "hamma" }, { word: "togorokŋa" }],
  },
  {
    word: "calao",
    translations: [{ word: "jomba" }],
  },
  {
    word: "calao à bec noir",
    translations: [{ word: "toli ɦoora" }],
  },
  {
    word: "calao longibande",
    translations: [{ word: "ɗokɗogora" }],
  },
  {
    word: "calebasse",
    translations: [{ word: "ŋgoɗta" }, { word: "ŋguɗta" }],
  },
  {
    word: "morceau de calebasse",
    translations: [{ word: "pepeɗena" }],
  },
  {
    word: "morceau de calebasse pour ramasser la boule dans la marmite",
    translations: [{ word: "dlimiɗta" }],
  },
  {
    word: "caleçon",
    translations: [{ word: "kalsoŋga" }],
  },
  {
    word: "calmement",
    translations: [{ word: "en" }],
  },
  {
    word: "calmer",
    translations: [{ word: "ɗigilla" }, { word: "heɓpa" }],
  },
  {
    word: "calomnie",
    translations: [{ word: "ŋgeŋŋa" }],
  },
  {
    word: "calomnier",
    translations: [{ word: "tum ura" }],
  },
  {
    word: "caméléon",
    translations: [{ word: "ŋgalira" }],
  },
  {
    word: "campagne",
    translations: [{ word: "bagira" }],
  },
  {
    word: "canard casqué",
    translations: [{ word: "koorona" }],
  },
  {
    word: "canard domestique",
    translations: [{ word: "lay hakka" }, { word: "njuvulna" }],
  },
  {
    word: "canne",
    translations: [{ word: "dumuuna" }],
  },
  {
    word: "canne à sucre",
    translations: [{ word: "jamakka" }],
  },
  {
    word: "cantharide",
    translations: [{ word: "ŋgoŋgoloora" }],
  },
  {
    word: "cantine",
    translations: [{ word: "biɗoŋŋa" }],
  },
  {
    word: "caoutchouc",
    translations: [{ word: "kawsuura" }],
  },
  {
    word: "caresser",
    translations: [{ word: "saɗta" }],
  },
  {
    word: "carquois",
    translations: [{ word: "zi mburura" }],
  },
  {
    word: "carquois pour les couteaux de jet",
    translations: [{ word: "dogolora" }],
  },
  {
    word: "cartes",
    translations: [{ word: "ɓeelera" }, { word: "karɗiira" }],
  },
  {
    word: "case",
    translations: [{ word: "goŋga" }, { word: "zira" }],
  },
  {
    word: "case avec le toit en terre",
    translations: [{ word: "dudurna" }],
  },
  {
    word: "case pour cuisiner",
    translations: [{ word: "dagira" }],
  },
  {
    word: "casque aux plumes porté par les danseurs",
    translations: [{ word: "belna" }],
  },
  {
    word: "casse-croûte frit fait avec de la farine de mil et de riz",
    translations: [{ word: "oriyona" }],
  },
  {
    word: "casser",
    translations: [{ word: "kussa" }, { word: "tora" }, { word: "dakka" }],
  },
  {
    word: "casser en morceaux",
    translations: [{ word: "bitla" }],
  },
  {
    word: "catéchiste",
    translations: [{ word: "katasisna" }],
  },
  {
    word: "cauris",
    translations: [{ word: "danara" }],
  },
  {
    word: "causer",
    translations: [{ word: "lira" }, { word: "ndalla" }, { word: "njaɗta" }],
  },
  {
    word: "cavité dans la meule de pierre dans laquelle la farine écrasée tombe",
    translations: [{ word: "fuɗukŋa" }],
  },
  {
    word: "cavité dans une brique",
    translations: [{ word: "ii Kada" }],
  },
  {
    word: "ce",
    translations: [
      {
        word: "namma",
        example: "goo njuf namma",
        exampleTranslation: "ce garçon",
      },
      {
        word: "wan",
        example: "goo njuf wanna",
        exampleTranslation: "ce garçon",
      },
    ],
  },
  {
    word: "ceinture",
    translations: [{ word: "gandina" }, { word: "sentirna" }],
  },
  {
    word: "ceinture de cuir tissé portée dans une bataille",
    translations: [{ word: "tlagara" }],
  },
  {
    word: "ceinture pour des femmes mariées",
    translations: [{ word: "keena" }],
  },
  {
    word: "célébration de la récolte",
    translations: [{ word: "koɗomma" }, { word: "koɗom ma vun tilna" }],
  },
  {
    word: "cellule",
    translations: [{ word: "zululna" }],
  },
  {
    word: "cendre",
    translations: [{ word: "buɗna" }],
  },
  {
    word: "cendre non éteinte",
    translations: [{ word: "murusna" }],
  },
  {
    word: "cent",
    translations: [{ word: "kis" }],
  },
  {
    word: "cependant",
    translations: [{ word: "doli" }],
  },
  {
    word: "cerceau",
    translations: [{ word: "sirsona" }],
  },
  {
    word: "certains",
    translations: [
      {
        word: "ɦiw",
        example: "Kemba lekol suu ɦiw ka mbaɗi",
        exampleTranslation: "Certains élèves ne viennent pas",
      },
    ],
  },
  {
    word: "cerveau",
    translations: [{ word: "totoonda" }],
  },
  {
    word: "ces",
    translations: [
      {
        word: "asina",
        example: "boyogi suu asina, njufi suu asina",
        exampleTranslation: "ces femmes, ces hommes",
      },
    ],
  },
  {
    word: "cesser",
    translations: [{ word: "aara" }, { word: "hinda" }, { word: "noyra" }],
  },
  {
    word: "c'est",
    translations: [
      {
        word: "ni",
        example: "Ni anu",
        exampleTranslation: "C’est moi",
      },
    ],
  },
  {
    word: "cet",
    translations: [
      {
        word: "namma",
        example: "sa namma",
        exampleTranslation: "cet homme",
      },
    ],
  },
  {
    word: "cette",
    translations: [
      {
        word: "ndaɗta",
        example: "goo tama ndaɗta",
        exampleTranslation: "cette fille",
      },
    ],
  },
  {
    word: "chacun",
    translations: [{ word: "gi ge lay" }],
  },
  {
    word: "chaîne",
    translations: [{ word: "galina" }],
  },
  {
    word: "chair",
    translations: [{ word: "tliwna" }, { word: "issa" }],
  },
  {
    word: "chaise",
    translations: [{ word: "sessa" }],
  },
  {
    word: "chaleur",
    translations: [{ word: "kura" }, { word: "zamalla" }],
  },
  {
    word: "chambre à air",
    translations: [{ word: "sampireera" }],
  },
  {
    word: "champ",
    translations: [{ word: "senena" }],
  },
  {
    word: "champ en jachère",
    translations: [{ word: "leɓena" }],
  },
  {
    word: "champ non sarclé",
    translations: [{ word: "ŋgoyna" }],
  },
  {
    word: "champignon",
    translations: [{ word: "bikka" }, { word: "bigira" }],
  },
  {
    word: "changement",
    translations: [{ word: "mbuɗta" }],
  },
  {
    word: "changer",
    translations: [{ word: "mbuɗta" }],
  },
  {
    word: "chanson des femmes au vun tilna",
    translations: [{ word: "yooyora" }],
  },
  {
    word: "chanter",
    translations: [{ word: "gi soolla" }],
  },
  {
    word: "chanter (coq)",
    translations: [{ word: "hella" }],
  },
  {
    word: "chapeau",
    translations: [{ word: "jumba" }],
  },
  {
    word: "charbon de bois",
    translations: [{ word: "kimilna" }],
  },
  {
    word: "charrette",
    translations: [{ word: "pupusna" }],
  },
  {
    word: "chas de l'aiguille",
    translations: [{ word: "ŋgil liɓirina" }],
  },
  {
    word: "chasse",
    translations: [{ word: "ɓeera" }, { word: "ndoonda" }],
  },
  {
    word: "chasser",
    translations: [{ word: "dikka" }, { word: "pora" }, { word: "ndoonda" }],
  },
  {
    word: "chassie",
    translations: [{ word: "taawna" }],
  },
  {
    word: "chat",
    translations: [{ word: "batura" }],
  },
  {
    word: "chat sauvage",
    translations: [{ word: "yarawna" }],
  },
  {
    word: "chatouillement",
    translations: [{ word: "gigilikka" }],
  },
  {
    word: "chatouiller",
    translations: [{ word: "cok gigilikka" }],
  },
  {
    word: "chauffer",
    translations: [
      { word: "ɗukka" },
      { word: "holla" },
      { word: "zamalla" },
      { word: "zalla" },
      { word: "ɗura" },
    ],
  },
  {
    word: "chaume",
    translations: [{ word: "malna" }],
  },
  {
    word: "chaussure",
    translations: [{ word: "tuɓurura" }],
  },
  {
    word: "chaussures de tennis",
    translations: [{ word: "tenissa" }],
  },
  {
    word: "chauve-souris",
    translations: [{ word: "papayra" }],
  },
  {
    word: "chaux",
    translations: [{ word: "lasora" }],
  },
  {
    word: "chéchia",
    translations: [{ word: "jagawra" }],
  },
  {
    word: "chef",
    translations: [{ word: "mulna" }],
  },
  {
    word: "chemin",
    translations: [{ word: "bulna" }, { word: "voɗta" }],
  },
  {
    word: "chenille",
    translations: [{ word: "njuvulna" }],
  },
  {
    word: "chercher",
    translations: [{ word: "halla" }],
  },
  {
    word: "cheval",
    translations: [{ word: "kulumma" }],
  },
  {
    word: "cheveu",
    translations: [{ word: "tumussa" }, { word: "tlimiɗta" }],
  },
  {
    word: "cheveux",
    translations: [{ word: "tumus yamba" }, { word: "tlimiɗ yamba" }],
  },
  {
    word: "cheveux blancs",
    translations: [{ word: "hussa" }],
  },
  {
    word: "cheville",
    translations: [{ word: "kokoɗta" }],
  },
  {
    word: "chèvre",
    translations: [{ word: "ɦura" }],
  },
  {
    word: "chez",
    translations: [
      {
        word: "voo",
        example: "Nam i vo varanu",
        exampleTranslation: "Il est parti chez moi",
      },
      {
        word: "vi",
        example: "Nam i vi wayamma",
        exampleTranslation: "Il est parti chez son frère",
      },
      { word: "ɦu" },
    ],
  },
  {
    word: "chien",
    translations: [{ word: "dina" }],
  },
  {
    word: "chien sauvage",
    translations: [{ word: "bolina" }],
  },
  {
    word: "choisir",
    translations: [{ word: "manda" }, { word: "vaara" }],
  },
  {
    word: "chorale",
    translations: [{ word: "koralla" }],
  },
  {
    word: "chose",
    translations: [{ word: "dlara" }, { word: "vana" }],
  },
  {
    word: "choses",
    translations: [{ word: "tle suu" }, { word: "tlegina" }, { word: "tlena" }],
  },
  {
    word: "cicatrice",
    translations: [{ word: "huɗukka" }, { word: "cayna" }],
  },
  {
    word: "faire des petites cicatrices",
    translations: [{ word: "cal cayna" }],
  },
  {
    word: "cicatriser",
    translations: [{ word: "cilla" }, { word: "jiira" }],
  },
  {
    word: "ciel",
    translations: [{ word: "huu lona" }],
  },
  {
    word: "cigarette",
    translations: [{ word: "segereɗta" }],
  },
  {
    word: "ciment",
    translations: [{ word: "simora" }],
  },
  {
    word: "cinq",
    translations: [{ word: "vatl" }],
  },
  {
    word: "cinquante",
    translations: [{ word: "dok vatl" }],
  },
  {
    word: "cirage de chaussure",
    translations: [{ word: "mbul tuɓuruna" }],
  },
  {
    word: "circonscire",
    translations: [{ word: "caw ɗiwra" }],
  },
  {
    word: "ciseaux",
    translations: [{ word: "maŋgassa" }],
  },
  {
    word: "civette",
    translations: [{ word: "murugumma" }, { word: "toniina" }],
  },
  {
    word: "clair de lune",
    translations: [{ word: "haɓ tilna" }, { word: "ɓo tilna" }],
  },
  {
    word: "clairière",
    translations: [{ word: "kiɗik" }],
  },
  {
    word: "clan",
    translations: [{ word: "njafna" }, { word: "deera" }],
  },
  {
    word: "claquer les mains",
    translations: [{ word: "po kona" }],
  },
  {
    word: "clavicule",
    translations: [{ word: "fefekka" }],
  },
  {
    word: "clé",
    translations: [
      { word: "kelera" },
      { word: "laklera" },
      { word: "ii vun goŋga" },
    ],
  },
  {
    word: "cligner l'oeil",
    translations: [{ word: "cemek iira" }],
  },
  {
    word: "clitoris",
    translations: [{ word: "doŋŋa" }],
  },
  {
    word: "cloche",
    translations: [{ word: "belna" }, { word: "karvana" }],
  },
  {
    word: "clochette",
    translations: [{ word: "geeleŋga" }],
  },
  {
    word: "clôture en secco autour de la concession",
    translations: [{ word: "liwra" }],
  },
  {
    word: "clou",
    translations: [{ word: "pondina" }],
  },
  {
    word: "co-épouse",
    translations: [{ word: "henera" }],
  },
  {
    word: "coaguler",
    translations: [{ word: "nekka" }],
  },
  {
    word: "cobra",
    translations: [{ word: "ɦeenekŋa" }],
  },
  {
    word: "cochon",
    translations: [{ word: "kosoŋŋa" }],
  },
  {
    word: "coeur",
    translations: [{ word: "mugulna" }],
  },
  {
    word: "coiffe",
    translations: [{ word: "mandilla" }],
  },
  {
    word: "coin",
    translations: [{ word: "huulukka" }],
  },
  {
    word: "colère",
    translations: [{ word: "honira" }],
  },
  {
    word: "colle",
    translations: [{ word: "kolla" }],
  },
  {
    word: "collecter",
    translations: [{ word: "taara" }],
  },
  {
    word: "coller",
    translations: [{ word: "nereɗta" }],
  },
  {
    word: "collier",
    translations: [{ word: "galina" }, { word: "heɗewra" }, { word: "kesena" }],
  },
  {
    word: "colline",
    translations: [{ word: "ɦinira" }],
  },
  {
    word: "côlon",
    translations: [{ word: "guluɗuŋŋa" }],
  },
  {
    word: "combattre",
    translations: [{ word: "kiriɓpa" }],
  },
  {
    word: "combien",
    translations: [{ word: "ga" }, { word: "ga ge" }],
  },
  {
    word: "commérage",
    translations: [{ word: "ɦalira" }],
  },
  {
    word: "commandement",
    translations: [{ word: "gaɗta" }],
  },
  {
    word: "commander",
    translations: [{ word: "gaɗta" }],
  },
  {
    word: "comme",
    translations: [
      {
        word: "ko",
        example: "Nam war ko kimilna naa",
        exampleTranslation: "Il est noir comme le charbon",
      },
    ],
  },
  {
    word: "commencement",
    translations: [{ word: "ura tin ayra" }],
  },
  {
    word: "commencer",
    translations: [
      {
        word: "gi jaŋŋa",
        example: "Asi gi jaŋ sunda ni karami",
        exampleTranslation: "Ils ont commencé le travail aujourd’hui",
      },
      {
        word: "tin ura",
        example: "Asi tin u sunda ni karami",
        exampleTranslation: "Ils ont commencé le travail aujourd’hui",
      },
    ],
  },
  {
    word: "commencer tout d'un coup",
    translations: [{ word: "paɗta" }, { word: "colla" }],
  },
  {
    word: "commerce",
    translations: [{ word: "jiŋgira" }],
  },
  {
    word: "comparer",
    translations: [{ word: "ŋgara" }],
  },
  {
    word: "comprendre",
    translations: [{ word: "humba" }],
  },
  {
    word: "comprimer",
    translations: [{ word: "deɓpa" }],
  },
  {
    word: "compter",
    translations: [{ word: "ndumba" }],
  },
  {
    word: "concerner",
    translations: [{ word: "ndolla" }],
  },
  {
    word: "concession",
    translations: [{ word: "zina" }],
  },
  {
    word: "concombre",
    translations: [{ word: "kuusira" }],
  },
  {
    word: "condoléances",
    translations: [{ word: "yoora" }],
  },
  {
    word: "conduire",
    translations: [
      { word: "jaŋŋa" },
      { word: "koɗta" },
      { word: "taɗta" },
      { word: "tinda" },
    ],
  },
  {
    word: "conduire les bêtes",
    translations: [{ word: "taara" }],
  },
  {
    word: "confesser",
    translations: [{ word: "homba" }, { word: "di cora" }],
  },
  {
    word: "confession",
    translations: [{ word: "homba" }],
  },
  {
    word: "confiture",
    translations: [{ word: "doɓora" }],
  },
  {
    word: "conforter",
    translations: [{ word: "ɦal eŋga" }],
  },
  {
    word: "connaissance",
    translations: [{ word: "humba" }, { word: "wira" }],
  },
  {
    word: "connaître",
    translations: [{ word: "humba" }, { word: "wira" }],
  },
  {
    word: "conseil",
    translations: [{ word: "gaɗta" }],
  },
  {
    word: "conservation",
    translations: [{ word: "ɗokka" }, { word: "ŋgomba" }],
  },
  {
    word: "conserver",
    translations: [{ word: "ɗokka" }, { word: "ŋgomba" }],
  },
  {
    word: "consoler",
    translations: [{ word: "ɦura" }],
  },
  {
    word: "consolider",
    translations: [{ word: "gissa" }, { word: "mbura" }],
  },
  {
    word: "être constipé",
    translations: [{ word: "ɗeɓpa" }],
  },
  {
    word: "constipation",
    translations: [{ word: "ɗeɓpa" }],
  },
  {
    word: "construction",
    translations: [{ word: "minda" }],
  },
  {
    word: "construire",
    translations: [{ word: "minda" }],
  },
  {
    word: "construire une case avec des briques",
    translations: [{ word: "jak goŋga" }],
  },
  {
    word: "construire une fondation",
    translations: [{ word: "ɓal ura" }],
  },
  {
    word: "conte",
    translations: [{ word: "njunjunda" }],
  },
  {
    word: "continuellement",
    translations: [{ word: "gak gak" }],
  },
  {
    word: "au contraire",
    translations: [{ word: "ɗow" }],
  },
  {
    word: "convenir à",
    translations: [{ word: "camba" }],
  },
  {
    word: "converser",
    translations: [{ word: "njaɗta" }],
  },
  {
    word: "convoiter",
    translations: [{ word: "filiwra" }],
  },
  {
    word: "copain",
    translations: [{ word: "ndarana" }],
  },
  {
    word: "coq",
    translations: [{ word: "gogolokŋa" }, { word: "tlekŋa" }],
  },
  {
    word: "coque",
    translations: [{ word: "ɓolokŋa" }],
  },
  {
    word: "coqueluche",
    translations: [{ word: "heeweɗna" }],
  },
  {
    word: "coquetterie",
    translations: [{ word: "mbelekŋa" }],
  },
  {
    word: "coquille",
    translations: [{ word: "ɓolokŋa" }],
  },
  {
    word: "corbeau pie",
    translations: [{ word: "gagawna" }],
  },
  {
    word: "corde",
    translations: [{ word: "zewna" }],
  },
  {
    word: "corde à linge",
    translations: [{ word: "lewna" }, { word: "welna" }],
  },
  {
    word: "corde à sauter",
    translations: [{ word: "mboɗina" }],
  },
  {
    word: "corde mise au cou pendant le deuil",
    translations: [{ word: "zew doona" }],
  },
  {
    word: "corde utilisée pour transporter des poissons",
    translations: [{ word: "njelna" }],
  },
  {
    word: "cordon ombilical",
    translations: [{ word: "zew fukka" }],
  },
  {
    word: "corne",
    translations: [{ word: "mekka" }],
  },
  {
    word: "corps",
    translations: [{ word: "tara" }, { word: "tliwna" }],
  },
  {
    word: "corral",
    translations: [{ word: "kadlaŋga" }],
  },
  {
    word: "correct",
    translations: [{ word: "u voɗta" }],
  },
  {
    word: "corriger",
    translations: [{ word: "gaɗta" }, { word: "minda" }],
  },
  {
    word: "cosse",
    translations: [
      {
        word: "ɓolokŋa",
        example: "Nam ɦoɓ luɓuna u ɓolok zoyra",
        exampleTranslation: "Il mélange la boue avec la cosse d’arachide",
      },
    ],
  },
  {
    word: "cosse de arachide qui n'a pas encore produit des graines",
    translations: [{ word: "heelewna" }, { word: "hoolina" }],
  },
  {
    word: "côté",
    translations: [{ word: "funda" }, { word: "keŋŋa" }, { word: "payna" }],
  },
  {
    word: "à côté de",
    translations: [{ word: "ek" }, { word: "keŋ" }],
  },
  {
    word: "côté intérieur de la cuisse",
    translations: [{ word: "dlaana" }],
  },
  {
    word: "côte",
    translations: [{ word: "payna" }],
  },
  {
    word: "cotiser",
    translations: [{ word: "taɓpa" }, { word: "taara" }],
  },
  {
    word: "coton",
    translations: [{ word: "barawra" }],
  },
  {
    word: "cou",
    translations: [{ word: "della" }],
  },
  {
    word: "coucher",
    translations: [{ word: "buura" }],
  },
  {
    word: "se coucher (le soleil)",
    translations: [{ word: "ɓaɗta" }, { word: "ɗikka" }, { word: "nikka" }],
  },
  {
    word: "coude",
    translations: [{ word: "ŋgolof kona" }],
  },
  {
    word: "coudre",
    translations: [{ word: "cilla" }, { word: "duɓpa" }, { word: "ɗeera" }],
  },
  {
    word: "couler",
    translations: [{ word: "cuɗta" }, { word: "lawra" }],
  },
  {
    word: "couper",
    translations: [
      { word: "kara" },
      { word: "ŋgaɗta" },
      { word: "talla" },
      { word: "yikka" },
      { word: "zira" },
      { word: "cawra" },
      { word: "feɗta" },
      { word: "jara" },
    ],
  },
  {
    word: "couper en deux",
    translations: [{ word: "wakka" }],
  },
  {
    word: "couper en morceaux",
    translations: [
      { word: "ɗogolla" },
      { word: "tegessa" },
      { word: "palawra" },
    ],
  },
  {
    word: "couper les cheveux",
    translations: [{ word: "cawra" }],
  },
  {
    word: "cour de la concession",
    translations: [{ word: "taraŋga" }, { word: "huu zina" }],
  },
  {
    word: "courage",
    translations: [{ word: "ɦiŋga" }],
  },
  {
    word: "courir",
    translations: [{ word: "liŋŋa" }],
  },
  {
    word: "course",
    translations: [{ word: "liŋŋa" }],
  },
  {
    word: "court",
    translations: [{ word: "geɗeŋ" }],
  },
  {
    word: "coussin",
    translations: [{ word: "wasaɗana" }],
  },
  {
    word: "coussinet servant à caler un fardeau sur la tête",
    translations: [{ word: "tikŋa" }],
  },
  {
    word: "couteau",
    translations: [{ word: "ŋgewra" }],
  },
  {
    word: "couteau avec une large lame",
    translations: [{ word: "ŋgew ma digiina" }],
  },
  {
    word: "couteau de jet",
    translations: [{ word: "bilna" }],
  },
  {
    word: "couteau de jet en bois pour les enfants",
    translations: [{ word: "jojokka" }],
  },
  {
    word: "coûter",
    translations: [{ word: "gussa" }],
  },
  {
    word: "couvercle",
    translations: [{ word: "vunna" }],
  },
  {
    word: "couverture",
    translations: [
      { word: "baara" },
      { word: "bajawna" },
      { word: "borgona" },
      { word: "goɗoŋŋa" },
    ],
  },
  {
    word: "couvrir",
    translations: [{ word: "baara" }, { word: "boɗta" }],
  },
  {
    word: "crabe",
    translations: [{ word: "mahalaŋga" }, { word: "maalaŋga" }],
  },
  {
    word: "cracher",
    translations: [{ word: "ceɗta" }, { word: "tovoɗta" }],
  },
  {
    word: "craie",
    translations: [{ word: "lakrena" }],
  },
  {
    word: "crampe",
    translations: [{ word: "jijira" }],
  },
  {
    word: "crâne",
    translations: [{ word: "ŋgoɗ yamba" }],
  },
  {
    word: "crapaud",
    translations: [{ word: "luura" }],
  },
  {
    word: "crayon",
    translations: [{ word: "kreyewna" }],
  },
  {
    word: "crépiter",
    translations: [{ word: "issa" }, { word: "munda" }],
  },
  {
    word: "creuser",
    translations: [{ word: "njogoɗta" }, { word: "paara" }, { word: "vekka" }],
  },
  {
    word: "creusoir",
    translations: [{ word: "jaɗaŋaana" }],
  },
  {
    word: "creux dans un arbre",
    translations: [{ word: "ŋgilna" }],
  },
  {
    word: "crever",
    translations: [{ word: "holoɗta" }, { word: "cokka" }],
  },
  {
    word: "cri",
    translations: [{ word: "luluura" }, { word: "sa walla" }],
  },
  {
    word: "crier",
    translations: [
      { word: "cira" },
      { word: "sa walla" },
      { word: "soora" },
      { word: "tiira" },
    ],
  },
  {
    word: "crier fortement",
    translations: [{ word: "bayra" }],
  },
  {
    word: "crinière",
    translations: [{ word: "belesna" }],
  },
  {
    word: "cris des femmes",
    translations: [{ word: "yiyira" }],
  },
  {
    word: "se crisper",
    translations: [{ word: "cemekka" }, { word: "homba" }],
  },
  {
    word: "crocodile",
    translations: [{ word: "hurumma" }],
  },
  {
    word: "croire",
    translations: [{ word: "vira" }, { word: "ɦal huuna" }],
  },
  {
    word: "croiser",
    translations: [
      { word: "dlaŋaɗta" },
      { word: "hewra" },
      { word: "ɦaɗalla" },
    ],
  },
  {
    word: "croissance",
    translations: [{ word: "ɦaɗalla" }],
  },
  {
    word: "croix",
    translations: [{ word: "gu garakŋa" }],
  },
  {
    word: "croquer",
    translations: [{ word: "muɗta" }],
  },
  {
    word: "croupe",
    translations: [{ word: "ɦokŋa" }],
  },
  {
    word: "cueillir",
    translations: [{ word: "duɗta" }, { word: "ndoɗta" }, { word: "paɗta" }],
  },
  {
    word: "cuillère",
    translations: [{ word: "kiyorna" }],
  },
  {
    word: "cuillère taillée d'une gourde",
    translations: [{ word: "hokka" }],
  },
  {
    word: "cuir",
    translations: [{ word: "ɗikŋa" }],
  },
  {
    word: "cuire (faire longtemps)",
    translations: [{ word: "ɗuura" }],
  },
  {
    word: "cuire la sauce ou la bouillie",
    translations: [{ word: "daffa" }],
  },
  {
    word: "cuisse",
    translations: [{ word: "ɓalna" }],
  },
  {
    word: "culot",
    translations: [{ word: "peɗewra" }],
  },
  {
    word: "cultiver",
    translations: [{ word: "horokŋa" }, { word: "zumma" }],
  },
  {
    word: "culture",
    translations: [{ word: "horokŋa" }, { word: "baraɗna" }],
  },
  {
    word: "cuvette pour attraper les poissons",
    translations: [{ word: "fuɗuk camakka" }],
  },

  // d entree dictionnaire
  {
    word: "damer",
    translations: [{ word: "deɓpa" }, { word: "mbura" }, { word: "ceŋga" }],
  },
  {
    word: "dans",
    translations: [
      {
        word: "ɦu",
        example: "Nam buri ɦu goŋ mamba",
        exampleTranslation: "Il est couché dans sa chambre",
      },
      { word: "ɦuwa" },
    ],
  },
  {
    word: "danse funèbre des femmes",
    translations: [{ word: "caana" }],
  },
  {
    word: "sorte de danse",
    translations: [
      { word: "koɗomma" },
      { word: "ndalaŋga" },
      { word: "ndulla" },
      { word: "njoŋŋa" },
    ],
  },
  {
    word: "danser",
    translations: [
      { word: "luu njoŋga" },
      { word: "koɗomma" },
      { word: "ɦaana" },
    ],
  },
  {
    word: "dattier",
    translations: [{ word: "tumura" }],
  },
  {
    word: "dattier du désert",
    translations: [{ word: "conora" }],
  },
  {
    word: "de",
    translations: [
      {
        word: "a",
        example: "Nam col ay ni Gaya",
        exampleTranslation: "Il vient de Gaya",
      },
      { word: "ay" },
    ],
  },
  {
    word: "de (possessif)",
    translations: [
      {
        word: "vi",
        example: "Ni velew ma vi wayannana",
        exampleTranslation: "C’est le vélo de mon frère",
      },
    ],
  },
  {
    word: "débordement",
    translations: [{ word: "sululla" }],
  },
  {
    word: "déborder",
    translations: [{ word: "sululla" }],
  },
  {
    word: "début",
    translations: [{ word: "tin ura" }, { word: "gi jaŋŋa" }],
  },
  {
    word: "déchirer",
    translations: [{ word: "haara" }, { word: "hawra" }],
  },
  {
    word: "décision",
    translations: [{ word: "zariyara" }, { word: "sok boyna" }],
  },
  {
    word: "déclaration",
    translations: [{ word: "ɓakŋa" }],
  },
  {
    word: "déconseil",
    translations: [{ word: "cakka" }],
  },
  {
    word: "déconseiller",
    translations: [{ word: "cakka" }],
  },
  {
    word: "décorer",
    translations: [{ word: "ndalla" }, { word: "ndolla" }],
  },
  {
    word: "décortiquer dans un mortier",
    translations: [{ word: "cakka" }, { word: "jokka" }],
  },
  {
    word: "découper la viande ou la peau en lanières",
    translations: [{ word: "ɓassa" }],
  },
  {
    word: "dedans",
    translations: [
      {
        word: "ɦu",
        example: "Nam ɦu lay",
        exampleTranslation: "Il est aussi dedans",
      },
      {
        word: "kalavi",
        example: "Nam buri kalaviya",
        exampleTranslation: "Il est couché dedans",
      },
    ],
  },
  {
    word: "déféquer",
    translations: [{ word: "ora" }],
  },
  {
    word: "défaut",
    translations: [{ word: "ŋgulla" }],
  },
  {
    word: "défendre",
    translations: [{ word: "doora" }],
  },
  {
    word: "défense",
    translations: [{ word: "siina" }, { word: "doora" }],
  },
  {
    word: "dehors",
    translations: [{ word: "buru" }, { word: "bunju" }, { word: "kiɗik" }],
  },
  {
    word: "déjà",
    translations: [
      {
        word: "da",
        example: "Nam ti da",
        exampleTranslation: "Il a déjà mangé",
      },
      {
        word: "paŋ",
        example: "Nam vaɗ ay ki u wiina paŋ",
        exampleTranslation: "Il l’a trouvé déjà en grossesse",
      },
    ],
  },
  {
    word: "délayer",
    translations: [{ word: "guura" }],
  },
  {
    word: "délice",
    translations: [
      { word: "burɗumba" },
      { word: "fayaɗta" },
      { word: "hinikka" },
    ],
  },
  {
    word: "délier",
    translations: [{ word: "buɗta" }, { word: "garaɗta" }, { word: "baraɗta" }],
  },
  {
    word: "délivrer",
    translations: [{ word: "buɗta" }, { word: "gira" }],
  },
  {
    word: "délivrer un message",
    translations: [{ word: "jokka" }],
  },
  {
    word: "demain",
    translations: [{ word: "vin" }, { word: "vini" }],
  },
  {
    word: "demande",
    translations: [{ word: "joɓpa" }],
  },
  {
    word: "demander",
    translations: [{ word: "joɓpa" }, { word: "saara" }, { word: "cenda" }],
  },
  {
    word: "démanger",
    translations: [{ word: "eɗta" }],
  },
  {
    word: "déménager",
    translations: [{ word: "mbeera" }],
  },
  {
    word: "demeurer",
    translations: [{ word: "kakka" }],
  },
  {
    word: "demi-hectare",
    translations: [{ word: "pikina" }, { word: "zewna" }],
  },
  {
    word: "dénouer",
    translations: [{ word: "buɗta" }, { word: "fokka" }],
  },
  {
    word: "dent",
    translations: [{ word: "siina" }],
  },
  {
    word: "dépasser",
    translations: [
      { word: "dumba" },
      { word: "jakka" },
      { word: "kalla" },
      { word: "sura" },
      { word: "doora" },
    ],
  },
  {
    word: "dépenser",
    translations: [{ word: "bassa" }],
  },
  {
    word: "déplier",
    translations: [{ word: "homba" }],
  },
  {
    word: "dépouiller",
    translations: [{ word: "zira" }],
  },
  {
    word: "derrière",
    translations: [
      {
        word: "ŋgoona",
        example: "Nam coli ŋgoo goŋga dagani",
        exampleTranslation: "Il est resté derrière la case",
      },
      { word: "ŋgoo daganda" },
      {
        word: "ura",
        example: "Nam gol u cara kal tuɗta",
        exampleTranslation: "Il regarde les derrières de cette femme qui passe",
      },
    ],
  },
  {
    word: "descendre",
    translations: [{ word: "ɗiŋga" }, { word: "fulla" }],
  },
  {
    word: "désintéressement",
    translations: [{ word: "lalassa" }],
  },
  {
    word: "désir sexuel",
    translations: [{ word: "dalamba" }],
  },
  {
    word: "désirer",
    translations: [{ word: "minda" }],
  },
  {
    word: "dessus du mur d'une case ou d'un grenier",
    translations: [{ word: "dawlaana" }],
  },
  {
    word: "déstruction",
    translations: [{ word: "ɓeŋga" }],
  },
  {
    word: "détériorer",
    translations: [{ word: "ɓalakka" }],
  },
  {
    word: "détacher",
    translations: [{ word: "garaɗta" }, { word: "buɗta" }],
  },
  {
    word: "détester",
    translations: [{ word: "noyra" }],
  },
  {
    word: "détruire",
    translations: [{ word: "ɓeŋga" }, { word: "hawaɗta" }, { word: "tora" }],
  },
  {
    word: "deuil",
    translations: [{ word: "ɦoona" }, { word: "zuuruna" }],
  },
  {
    word: "deux",
    translations: [{ word: "mba" }],
  },
  {
    word: "devant",
    translations: [
      {
        word: "fokka",
        example: "Nam col fogomu",
        exampleTranslation: "Il est resté devant lui",
      },
    ],
  },
  {
    word: "devenir",
    translations: [{ word: "mbuɗta" }],
  },
  {
    word: "avoir diarrhée",
    translations: [{ word: "soɗna ora" }],
  },
  {
    word: "différent",
    translations: [{ word: "zeɗ" }],
  },
  {
    word: "être difficile, difficulté",
    translations: [{ word: "loɓma" }],
  },
  {
    word: "digue",
    translations: [{ word: "mbura" }],
  },
  {
    word: "dimanche",
    translations: [{ word: "damassa" }],
  },
  {
    word: "dire",
    translations: [{ word: "dira" }],
  },
  {
    word: "diriger",
    translations: [{ word: "takka" }],
  },
  {
    word: "discours",
    translations: [{ word: "bolla" }],
  },
  {
    word: "faire un discours",
    translations: [{ word: "paɗ bolla" }],
  },
  {
    word: "discussion",
    translations: [{ word: "wayra" }],
  },
  {
    word: "discuter",
    translations: [{ word: "ci wayra" }, { word: "ŋga vunna" }],
  },
  {
    word: "disparaître",
    translations: [{ word: "bulumba" }],
  },
  {
    word: "dispensaire",
    translations: [{ word: "dokdorra" }],
  },
  {
    word: "disperser",
    translations: [{ word: "njayra" }],
  },
  {
    word: "dispute",
    translations: [{ word: "honira" }],
  },
  {
    word: "disputer",
    translations: [{ word: "ci wayra" }],
  },
  {
    word: "dissoudre",
    translations: [{ word: "loɗta" }],
  },
  {
    word: "distiller",
    translations: [{ word: "soora" }],
  },
  {
    word: "divination",
    translations: [{ word: "garira" }],
  },
  {
    word: "diviser",
    translations: [
      { word: "ɓorowna" },
      { word: "wergessa" },
      { word: "ɓeɗta" },
    ],
  },
  {
    word: "division",
    translations: [
      { word: "iira" },
      { word: "wal iira" },
      { word: "ka iira" },
      { word: "ɓorowna" },
    ],
  },
  {
    word: "divorcer",
    translations: [{ word: "bussa" }],
  },
  {
    word: "dix",
    translations: [{ word: "doogo" }],
  },
  {
    word: "docilité",
    translations: [{ word: "saɓurra" }],
  },
  {
    word: "don",
    translations: [{ word: "ɦalla" }, { word: "ɦira" }],
  },
  {
    word: "donc",
    translations: [
      {
        word: "na ni",
        example: "Na ni, an hin i ni anu",
        exampleTranslation: "C’est moi donc qui ira",
      },
    ],
  },
  {
    word: "donner",
    translations: [{ word: "ɦalla" }, { word: "ɦira" }],
  },
  {
    word: "donner des coups de tête",
    translations: [{ word: "ci gamaara" }],
  },
  {
    word: "donner du fruit",
    translations: [{ word: "vuɗta" }],
  },
  {
    word: "dormir",
    translations: [{ word: "buu senna" }],
  },
  {
    word: "dos",
    translations: [{ word: "ceena" }, { word: "u fuuna" }, { word: "ŋgoona" }],
  },
  {
    word: "dos supérieur",
    translations: [{ word: "hoyokŋa" }],
  },
  {
    word: "dot",
    translations: [{ word: "begena" }],
  },
  {
    word: "douceur",
    translations: [{ word: "jemeɗta" }],
  },
  {
    word: "être douloureux",
    translations: [{ word: "saara" }],
  },
  {
    word: "rendre doux",
    translations: [{ word: "ɗigilla" }],
  },
  {
    word: "drague",
    translations: [{ word: "taroona" }],
  },
  {
    word: "drap",
    translations: [{ word: "ladarna" }],
  },
  {
    word: "drapeau",
    translations: [{ word: "drapora" }],
  },
  {
    word: "droit",
    translations: [{ word: "ɗegee" }],
  },
  {
    word: "maintenir droit",
    translations: [{ word: "ɗegeera" }],
  },
  {
    word: "rendre droit",
    translations: [
      {
        word: "ɗoɓpa",
        example: "An hin ɗoɓom kiyo",
        exampleTranslation: "Je vais le rendre droit",
      },
    ],
  },
  {
    word: "droite",
    translations: [{ word: "njufna" }, { word: "sugulna" }],
  },
  {
    word: "droiture",
    translations: [{ word: "ɗegeera" }, { word: "duk gayra" }],
  },
  {
    word: "dromadaire",
    translations: [{ word: "jamballa" }],
  },
  {
    word: "duplicité",
    translations: [{ word: "mbambara" }, { word: "mbeleweɗta" }],
  },
  {
    word: "dur, durement",
    translations: [{ word: "eŋ" }],
  },
  {
    word: "dureté",
    translations: [{ word: "dereŋga" }, { word: "eŋga" }],
  },
  {
    word: "durillon",
    translations: [{ word: "hamma" }],
  },

  // // e entree dictionnaire
  {
    word: "eau",
    translations: [{ word: "mboona" }, { word: "yoona" }],
  },
  {
    word: "éblouir",
    translations: [{ word: "biliwiɗta" }],
  },
  {
    word: "écaille de poisson",
    translations: [{ word: "ɓolok kulufna" }],
  },
  {
    word: "écarter",
    translations: [{ word: "waara" }, { word: "walla" }],
  },
  {
    word: "échange",
    translations: [{ word: "mbuɗta" }],
  },
  {
    word: "en échange de",
    translations: [{ word: "kay" }],
  },
  {
    word: "échanger",
    translations: [{ word: "mbuɗta" }],
  },
  {
    word: "échapper",
    translations: [{ word: "piira" }, { word: "puruɗta" }, { word: "siira" }],
  },
  {
    word: "échelle pour le grenier",
    translations: [{ word: "jaŋlana" }],
  },
  {
    word: "éclaire",
    translations: [{ word: "ɓoora" }],
  },
  {
    word: "éclairer",
    translations: [{ word: "wira" }, { word: "weleɗta" }, { word: "ɓoora" }],
  },
  {
    word: "éclore",
    translations: [{ word: "etla" }],
  },
  {
    word: "école",
    translations: [{ word: "lekolla" }],
  },
  {
    word: "écorce",
    translations: [{ word: "ɓolokŋa" }],
  },
  {
    word: "écorce de l'arbre",
    translations: [{ word: "ɓolok guna" }],
  },
  {
    word: "écorcher",
    translations: [{ word: "zira" }, { word: "talla" }],
  },
  {
    word: "écosser",
    translations: [{ word: "polokka" }],
  },
  {
    word: "écouler goutte à goutte",
    translations: [{ word: "tolla" }],
  },
  {
    word: "écouter",
    translations: [{ word: "humba" }],
  },
  {
    word: "écouter attentivement",
    translations: [{ word: "jeɓeera" }],
  },
  {
    word: "écraser",
    translations: [{ word: "gulukka" }],
  },
  {
    word: "écrire",
    translations: [{ word: "ɓiira" }, { word: "merekka" }],
  },
  {
    word: "écriture",
    translations: [{ word: "ɓiira" }, { word: "merekka" }],
  },
  {
    word: "écumer",
    translations: [{ word: "carawra" }],
  },
  {
    word: "écureuil",
    translations: [{ word: "ɦina" }],
  },
  {
    word: "effacer",
    translations: [{ word: "bulumba" }],
  },
  {
    word: "effondrer",
    translations: [{ word: "bowra" }, { word: "nduruvuɗta" }],
  },
  {
    word: "s’efforcer",
    translations: [{ word: "biriɗta" }],
  },
  {
    word: "eglise",
    translations: [{ word: "zira lamsoŋga" }, { word: "zira tokka" }],
  },
  {
    word: "égratigner",
    translations: [{ word: "kirikka" }],
  },
  {
    word: "égrener par main",
    translations: [{ word: "hossa" }],
  },
  {
    word: "éléphant",
    translations: [{ word: "tlokŋa" }],
  },
  {
    word: "élève",
    translations: [{ word: "gogoo ma lekolla" }],
  },
  {
    word: "élever",
    translations: [{ word: "wulla" }],
  },
  {
    word: "elle",
    translations: [{ word: "ndaɗta" }],
  },
  {
    word: "elles",
    translations: [{ word: "asi" }],
  },
  {
    word: "éloigné",
    translations: [{ word: "ha" }, { word: "day" }],
  },
  {
    word: "embarquer",
    translations: [{ word: "fulla" }, { word: "yowra" }],
  },
  {
    word: "embellir",
    translations: [{ word: "jiffa" }],
  },
  {
    word: "embrasser",
    translations: [{ word: "mboɗta" }],
  },
  {
    word: "se mettre en embuscade",
    translations: [{ word: "baara" }, { word: "cegeɗta" }],
  },
  {
    word: "émoussement des lames",
    translations: [{ word: "dogolora" }],
  },
  {
    word: "empêcher",
    translations: [{ word: "doora" }, { word: "seŋŋa" }],
  },
  {
    word: "empiler",
    translations: [{ word: "mbura" }, { word: "coŋga" }],
  },
  {
    word: "empreinte",
    translations: [{ word: "semma" }],
  },
  {
    word: "emprunt",
    translations: [{ word: "balna" }],
  },
  {
    word: "devenir enceinte",
    translations: [{ word: "vi wiina" }],
  },
  {
    word: "encercler",
    translations: [{ word: "ŋguffa" }, { word: "ŋguyra" }],
  },
  {
    word: "faire enclos avec des épines",
    translations: [{ word: "dlaɓ wayra" }],
  },
  {
    word: "enclume",
    translations: [{ word: "caffa" }, { word: "do caffa" }],
  },
  {
    word: "encombrer",
    translations: [{ word: "ɗella" }, { word: "zul tlegina" }],
  },
  {
    word: "encore",
    translations: [{ word: "olo" }, { word: "tu" }],
  },
  {
    word: "encourager",
    translations: [
      { word: "ɗilla" },
      { word: "ɦal eŋga" },
      { word: "so huuna" },
    ],
  },
  {
    word: "enfant",
    translations: [{ word: "gogoona" }, { word: "goora" }],
  },
  {
    word: "enfant illégitime",
    translations: [{ word: "mboyomora" }],
  },
  {
    word: "enfanter",
    translations: [{ word: "vuɗta" }, { word: "cukka" }],
  },
  {
    word: "enfants",
    translations: [{ word: "kemba" }],
  },
  {
    word: "enfler",
    translations: [{ word: "balla" }],
  },
  {
    word: "enflure",
    translations: [{ word: "kolla" }],
  },
  {
    word: "enflure de la jambe",
    translations: [{ word: "hoɓpa" }],
  },
  {
    word: "enfoncer",
    translations: [{ word: "ŋgaara" }],
  },
  {
    word: "s’enfoncer",
    translations: [{ word: "tluɓpa" }],
  },
  {
    word: "enfumer",
    translations: [{ word: "ɗussa" }],
  },
  {
    word: "enfumer un animal dans un terrier",
    translations: [{ word: "biira" }],
  },
  {
    word: "énigme",
    translations: [{ word: "gan yamba" }],
  },
  {
    word: "s’enivrer",
    translations: [{ word: "guruɗta" }],
  },
  {
    word: "enlever",
    translations: [{ word: "holoɗta" }, { word: "paɗta" }, { word: "pekka" }],
  },
  {
    word: "enlever le contenu d'un récipient pour le nettoyer",
    translations: [{ word: "haɗakka" }],
  },
  {
    word: "enlever les vêtements",
    translations: [{ word: "fokka" }],
  },
  {
    word: "ennemi",
    translations: [{ word: "babalina" }],
  },
  {
    word: "enrouler",
    translations: [{ word: "ɗuɗta" }],
  },
  {
    word: "ensorceler",
    translations: [{ word: "dluɓpa" }, { word: "luguɗta" }],
  },
  {
    word: "entasser",
    translations: [{ word: "mbura" }, { word: "tokka" }],
  },
  {
    word: "entendre",
    translations: [{ word: "humba" }],
  },
  {
    word: "enterrer",
    translations: [{ word: "pira" }, { word: "tossa" }],
  },
  {
    word: "entourer",
    translations: [{ word: "kelewra" }, { word: "ŋguffa" }, { word: "ŋguyra" }],
  },
  {
    word: "entourer pour cacher",
    translations: [{ word: "dluɓpa" }],
  },
  {
    word: "entrailles",
    translations: [{ word: "huuna" }, { word: "yoroɗna" }],
  },
  {
    word: "entrave",
    translations: [{ word: "dalana" }],
  },
  {
    word: "entrave en bois",
    translations: [{ word: "larina" }, { word: "yarina" }],
  },
  {
    word: "entraves",
    translations: [{ word: "kegeɗkegeɗna" }, { word: "kinjiŋŋa" }],
  },
  {
    word: "entre",
    translations: [
      {
        word: "duk",
        example: "Duk ɦoŋzi ma Djaraona u ma Gayana ki day",
        exampleTranslation: "La distance entre Djarao et Gaya est longue",
      },
    ],
  },
  {
    word: "entrée",
    translations: [{ word: "vunna" }],
  },
  {
    word: "entrer",
    translations: [{ word: "kalla" }, { word: "sella" }, { word: "cukka" }],
  },
  {
    word: "s’entretenir",
    translations: [{ word: "ndalla" }],
  },
  {
    word: "envelopper",
    translations: [
      { word: "ɗuɗta" },
      { word: "dluɓpa" },
      { word: "ganda" },
      { word: "kelewra" },
      { word: "njunda" },
      { word: "homba" },
    ],
  },
  {
    word: "envie de manger de la viande",
    translations: [{ word: "jenna" }],
  },
  {
    word: "envoyer",
    translations: [{ word: "sunda" }],
  },
  {
    word: "envoyer en commission",
    translations: [{ word: "gi sunda" }],
  },
  {
    word: "devenir épais",
    translations: [{ word: "nekka" }],
  },
  {
    word: "épargner",
    translations: [{ word: "ɗokka" }, { word: "aara" }, { word: "hinda" }],
  },
  {
    word: "éparpiller",
    translations: [{ word: "njayra" }],
  },
  {
    word: "épaule",
    translations: [{ word: "kella" }, { word: "pel bikŋa" }],
  },
  {
    word: "épée",
    translations: [{ word: "ŋgew garaɗna" }],
  },
  {
    word: "éperon",
    translations: [{ word: "njalaŋŋa" }],
  },
  {
    word: "épervier",
    translations: [{ word: "brikera" }],
  },
  {
    word: "épier",
    translations: [{ word: "cegeɗta" }, { word: "ŋgisiɗta" }],
  },
  {
    word: "épine",
    translations: [{ word: "wayra" }, { word: "siina" }],
  },
  {
    word: "épingle de sûreté",
    translations: [{ word: "peŋgesna" }],
  },
  {
    word: "éplucher",
    translations: [{ word: "hora" }],
  },
  {
    word: "époque",
    translations: [{ word: "cogira" }],
  },
  {
    word: "épouser",
    translations: [{ word: "ɗumba" }],
  },
  {
    word: "être épuisé",
    translations: [{ word: "sayra" }],
  },
  {
    word: "épuisement",
    translations: [
      { word: "njorona" },
      { word: "sayra" },
      { word: "ndakka" },
      { word: "kawra" },
    ],
  },
  {
    word: "errer",
    translations: [{ word: "ɦululla" }],
  },
  {
    word: "escargot, coquille qui sert comme toupie",
    translations: [{ word: "kociina" }],
  },
  {
    word: "sorte d’escargot",
    translations: [{ word: "kiina" }],
  },
  {
    word: "escarpolette",
    translations: [{ word: "seeselewra" }],
  },
  {
    word: "esclave",
    translations: [{ word: "gomma" }, { word: "mbaaɓuna" }],
  },
  {
    word: "esclaves",
    translations: [{ word: "mborɓiina" }],
  },
  {
    word: "esprit",
    translations: [{ word: "fulna" }, { word: "ŋgussa" }],
  },
  {
    word: "esprit de l'eau",
    translations: [{ word: "mununda" }],
  },
  {
    word: "essai",
    translations: [{ word: "dukka" }],
  },
  {
    word: "essayer",
    translations: [
      { word: "dukka" },
      { word: "jukka" },
      { word: "sayra" },
      { word: "ŋgenda" },
      { word: "tukka" },
    ],
  },
  {
    word: "essuyer",
    translations: [{ word: "saɗta" }, { word: "seɗta" }, { word: "vaara" }],
  },
  {
    word: "est",
    translations: [{ word: "faɗta maɗira" }, { word: "ko ma maɗina" }],
  },
  {
    word: "estomac",
    translations: [{ word: "birbirna" }, { word: "huuna" }],
  },
  {
    word: "deuxième poche de l'estomac des ruminants",
    translations: [{ word: "zoroɓpa" }],
  },
  {
    word: "estropié",
    translations: [{ word: "dali" }],
  },
  {
    word: "et",
    translations: [
      {
        word: "lay",
        example: "Nam may, an may",
        exampleTranslation: "Lui et moi",
      },
      { word: "may" },
    ],
  },
  {
    word: "établir",
    translations: [{ word: "cukka" }, { word: "ŋgomba" }, { word: "minda" }],
  },
  {
    word: "établir une loi",
    translations: [{ word: "njun gaɗta" }],
  },
  {
    word: "étaler",
    translations: [{ word: "baɗaara" }],
  },
  {
    word: "étang",
    translations: [{ word: "mugumba" }],
  },
  {
    word: "éteindre",
    translations: [{ word: "tewra" }],
  },
  {
    word: "étendre",
    translations: [
      { word: "baara" },
      { word: "baɗaara" },
      { word: "boɗta" },
      { word: "ɓeera" },
      { word: "maɗta" },
    ],
  },
  {
    word: "étirer",
    translations: [{ word: "maɗta" }],
  },
  {
    word: "étoffe",
    translations: [{ word: "fardana" }],
  },
  {
    word: "étoile",
    translations: [{ word: "ciwciwra" }],
  },
  {
    word: "étoile du matin",
    translations: [{ word: "velna" }],
  },
  {
    word: "étoile filante",
    translations: [{ word: "Ciciwra ɓis saɓpa" }],
  },
  {
    word: "étouffer",
    translations: [{ word: "muruɗta" }],
  },
  {
    word: "étranglement",
    translations: [{ word: "mootlokŋa" }],
  },
  {
    word: "étrangler",
    translations: [{ word: "cok mootlokŋa" }, { word: "muruɗta" }],
  },
  {
    word: "être",
    translations: [
      {
        word: "ni",
        example: "Ni gi ge?",
        exampleTranslation: "C’est qui?",
      },
      {
        word: "ka",
        example: "Nam kaa",
        exampleTranslation: "Il est là",
      },
    ],
  },
  {
    word: "européen",
    translations: [{ word: "nasaana" }],
  },
  {
    word: "s’évanouir",
    translations: [{ word: "sayra" }],
  },
  {
    word: "éveillé",
    translations: [{ word: "iirira" }],
  },
  {
    word: "éventail",
    translations: [{ word: "veveɗta" }],
  },
  {
    word: "éventer",
    translations: [{ word: "veɗta" }],
  },
  {
    word: "évider une substance épaisse",
    translations: [{ word: "jora" }],
  },
  {
    word: "excrément",
    translations: [{ word: "soɗna" }],
  },
  {
    word: "excroissance",
    translations: [{ word: "gelewna" }],
  },
  {
    word: "extraire de l'huile",
    translations: [{ word: "yoo mbulna" }],
  },
  {
    word: "en face de",
    translations: [{ word: "fok" }],
  },

  // // f entree dictionnaire
  {
    word: "facilité",
    translations: [{ word: "feɗta" }, { word: "zakka" }],
  },
  {
    word: "façon de faire",
    translations: [{ word: "dlara" }],
  },
  {
    word: "façonner en forme de boule",
    translations: [{ word: "galagaɗta" }],
  },
  {
    word: "être fâché",
    translations: [{ word: "ɓeŋga" }, { word: "haɗta" }, { word: "zalla" }],
  },
  {
    word: "faible",
    translations: [{ word: "maŋga" }],
  },
  {
    word: "devenir faible",
    translations: [{ word: "soora" }, { word: "maŋ ki" }, { word: "kawra" }],
  },
  {
    word: "faiblesse",
    translations: [{ word: "huɗussa" }, { word: "maŋga" }],
  },
  {
    word: "faire",
    translations: [{ word: "lira" }],
  },
  {
    word: "famine",
    translations: [
      { word: "mayra" },
      { word: "baktarra" },
      { word: "bindimba" },
    ],
  },
  {
    word: "fardeau",
    translations: [{ word: "nekka" }],
  },
  {
    word: "farine",
    translations: [{ word: "farina" }, { word: "fuɗta" }],
  },
  {
    word: "fatigue",
    translations: [{ word: "loɓma" }, { word: "ndakka" }, { word: "kawra" }],
  },
  {
    word: "être fatigué",
    translations: [{ word: "sayra" }, { word: "ndakka" }, { word: "kawra" }],
  },
  {
    word: "fatiguer",
    translations: [{ word: "loɓma" }],
  },
  {
    word: "se fatiguer",
    translations: [{ word: "ci tara" }, { word: "kawra" }, { word: "ndakka" }],
  },
  {
    word: "faucille",
    translations: [{ word: "maragamba" }],
  },
  {
    word: "faufiler",
    translations: [{ word: "ɦaramba" }, { word: "siira" }],
  },
  {
    word: "se faufiler",
    translations: [{ word: "daramba" }],
  },
  {
    word: "feindre",
    translations: [{ word: "li ko" }],
  },
  {
    word: "femme",
    translations: [{ word: "cara" }],
  },
  {
    word: "femmes",
    translations: [{ word: "boyogina" }],
  },
  {
    word: "fémur",
    translations: [{ word: "sok ciwilna" }],
  },
  {
    word: "fenêtre",
    translations: [{ word: "feneterra" }],
  },
  {
    word: "fennec",
    translations: [{ word: "bayakka" }],
  },
  {
    word: "fer",
    translations: [
      { word: "ɓalaŋŋa" },
      { word: "kawina" },
      { word: "ŋgamina" },
    ],
  },
  {
    word: "fer-de-lance avec des barbes non-symétriques",
    translations: [{ word: "kergewra" }],
  },
  {
    word: "fermer",
    translations: [{ word: "ndukka" }],
  },
  {
    word: "fermer l'oeil",
    translations: [{ word: "mbekba" }],
  },
  {
    word: "fermier",
    translations: [{ word: "saa horokŋa" }],
  },
  {
    word: "fers",
    translations: [{ word: "kegeɗkegeɗna" }, { word: "kinjiŋŋa" }],
  },
  {
    word: "fesses",
    translations: [
      { word: "cifin ura" },
      { word: "njiŋnjiŋ ura" },
      { word: "ŋgeŋgeŋ ura" },
      { word: "ura" },
    ],
  },
  {
    word: "fête",
    translations: [{ word: "feɗna" }],
  },
  {
    word: "fête annuelle de la récolte",
    translations: [{ word: "vun tilna" }],
  },
  {
    word: "féticheur",
    translations: [{ word: "saa kumuna" }],
  },
  {
    word: "feu",
    translations: [{ word: "kura" }],
  },
  {
    word: "sur le feu",
    translations: [{ word: "kuŋgu" }],
  },
  {
    word: "feuillage",
    translations: [{ word: "tlaɓma" }],
  },
  {
    word: "feuille",
    translations: [{ word: "humba" }],
  },
  {
    word: "figuier (sorte de)",
    translations: [
      { word: "bawna" },
      { word: "deegera" },
      { word: "gor ŋgusurira" },
      { word: "goloona" },
      { word: "ndimma" },
      { word: "seweena" },
      { word: "tulumma" },
    ],
  },
  {
    word: "figure",
    translations: [{ word: "iira" }],
  },
  {
    word: "fil",
    translations: [{ word: "keɗta" }],
  },
  {
    word: "fil métallique",
    translations: [{ word: "zew ŋgamina" }],
  },
  {
    word: "filaire",
    translations: [{ word: "gamjirgina" }],
  },
  {
    word: "filer, tresser",
    translations: [{ word: "gira" }, { word: "paara" }],
  },
  {
    word: "filet",
    translations: [{ word: "bayna" }],
  },
  {
    word: "filet porté sur la taille pour transporter des choses qui étaient capturées pendant une chasse",
    translations: [{ word: "jarakŋa" }],
  },
  {
    word: "filet pour chasser des animaux",
    translations: [{ word: "njaana" }],
  },
  {
    word: "fille",
    translations: [
      { word: "go tamara" },
      { word: "go cara" },
      { word: "goora" },
    ],
  },
  {
    word: "film de la boule qui reste à l'intérieur d'une marmite",
    translations: [{ word: "heɓelekŋa" }],
  },
  {
    word: "fils",
    translations: [{ word: "gogoona" }, { word: "goora" }],
  },
  {
    word: "filtrer",
    translations: [{ word: "soora" }, { word: "emba" }],
  },
  {
    word: "fin",
    translations: [{ word: "daɓpa" }, { word: "vaɗta" }, { word: "ɦoɗta" }],
  },
  {
    word: "finir",
    translations: [{ word: "daɓpa" }, { word: "vaɗta" }, { word: "ɦoɗta" }],
  },
  {
    word: "flâner",
    translations: [{ word: "ɦululla" }, { word: "dolla" }],
  },
  {
    word: "flatter",
    translations: [{ word: "mbaɗta" }, { word: "njalaɓma" }],
  },
  {
    word: "flatterie",
    translations: [{ word: "njalaɓma" }],
  },
  {
    word: "flèche",
    translations: [{ word: "mburura" }],
  },
  {
    word: "fleure",
    translations: [{ word: "ɓora" }],
  },
  {
    word: "fleurir",
    translations: [{ word: "ɓora" }, { word: "ɦussa" }],
  },
  {
    word: "fleuve",
    translations: [{ word: "lumma" }],
  },
  {
    word: "flotter",
    translations: [{ word: "dolla" }],
  },
  {
    word: "flûte",
    translations: [{ word: "togolomma" }],
  },
  {
    word: "flûte faite d'une corne de gazelle",
    translations: [{ word: "diffa" }],
  },
  {
    word: "foie",
    translations: [{ word: "dudukka" }],
  },
  {
    word: "fois",
    translations: [
      {
        word: "lina",
        example: "Äu li ma nam ti funa ay vo varanda, nam gan deɓ kaɗi",
        exampleTranslation:
          "La dernière fois qu’il a mangé chez moi, il ne m’a pas remercié",
      },
      {
        word: "semma",
        example: "Nam li sunda sem ga ge?",
        exampleTranslation: "Il a travaillé combien de fois?",
      },
      {
        word: "yamba",
        example: "Nam li sunda yam ga ge?",
        exampleTranslation: "Il a travaillé combien de fois?",
      },
    ],
  },
  {
    word: "fond",
    translations: [{ word: "ura" }],
  },
  {
    word: "fondation",
    translations: [{ word: "siina" }],
  },
  {
    word: "fondre",
    translations: [{ word: "loɗta" }, { word: "yoora" }],
  },
  {
    word: "fonio",
    translations: [{ word: "dana" }],
  },
  {
    word: "fontanelle",
    translations: [{ word: "ɦuɗukhuɗukka" }],
  },
  {
    word: "forêt",
    translations: [{ word: "gura" }],
  },
  {
    word: "force",
    translations: [
      { word: "bayna" },
      { word: "eŋga" },
      { word: "gaaraŋga" },
      { word: "sukŋa" },
    ],
  },
  {
    word: "forcer",
    translations: [{ word: "ɦeɓpa" }],
  },
  {
    word: "forger",
    translations: [{ word: "dlira" }],
  },
  {
    word: "forgeron",
    translations: [{ word: "saa caffa" }],
  },
  {
    word: "fort",
    translations: [
      {
        word: "eŋ",
        example: "Bay eŋe!",
        exampleTranslation: "Crie fort!",
      },
      {
        word: "saɓak",
        example: "Nam saɓagi",
        exampleTranslation: "Il est fort",
      },
    ],
  },
  {
    word: "fortement",
    translations: [{ word: "eŋe" }, { word: "saɓaki" }],
  },
  {
    word: "rendre fou",
    translations: [{ word: "puluɗta" }],
  },
  {
    word: "fouet",
    translations: [{ word: "balafna" }, { word: "njewɗekka" }],
  },
  {
    word: "fouint",
    translations: [{ word: "zogolna" }],
  },
  {
    word: "foulard de tête",
    translations: [{ word: "mandilla" }],
  },
  {
    word: "fourche d'un arbre à 3 branches où on place un pot ou une jarre",
    translations: [{ word: "cagaɗta" }],
  },
  {
    word: "fourneau de pipe en métal",
    translations: [{ word: "mburu koloŋga" }],
  },
  {
    word: "fourrage",
    translations: [{ word: "haɗna" }, { word: "zogolna" }],
  },
  {
    word: "foyer en terre dans lequel le grain est séché",
    translations: [{ word: "jokka" }],
  },
  {
    word: "fraîcheur",
    translations: [
      { word: "heɓpa" },
      { word: "ŋgolomba" },
      { word: "logomba" },
    ],
  },
  {
    word: "francs CFA, mille",
    translations: [{ word: "mbumbuna" }],
  },
  {
    word: "frapper",
    translations: [{ word: "cira" }, { word: "daɓpa" }, { word: "poŋga" }],
  },
  {
    word: "frapper avec un instrument",
    translations: [{ word: "waɗta" }],
  },
  {
    word: "frapper avec quelque chose de pointue",
    translations: [{ word: "cikka" }],
  },
  {
    word: "frapper la main",
    translations: [{ word: "kora" }],
  },
  {
    word: "frauder",
    translations: [{ word: "dossa" }, { word: "ɓelekka" }],
  },
  {
    word: "frisson",
    translations: [{ word: "dlakka" }],
  },
  {
    word: "frissonner",
    translations: [{ word: "dlakka" }],
  },
  {
    word: "froid",
    translations: [{ word: "semeɗna" }],
  },
  {
    word: "front",
    translations: [{ word: "vokŋa" }],
  },
  {
    word: "frontière",
    translations: [{ word: "ii keleŋga" }],
  },
  {
    word: "frotter",
    translations: [{ word: "saɗta" }, { word: "hassa" }],
  },
  {
    word: "fuir",
    translations: [{ word: "piira" }, { word: "puruɗta" }, { word: "siira" }],
  },
  {
    word: "fumée",
    translations: [{ word: "ndoosna" }],
  },
  {
    word: "fumer",
    translations: [{ word: "cira" }, { word: "ɗussa" }],
  },
  {
    word: "fumer une pipe",
    translations: [{ word: "soɓ koloŋga" }, { word: "ci koloŋga" }],
  },
  {
    word: "fumier",
    translations: [{ word: "zirgiɗna" }],
  },
  {
    word: "funérailles",
    translations: [{ word: "maɗna" }],
  },
  {
    word: "les deuxièmes funérailles après une certaine période de temps",
    translations: [{ word: "guguɗura" }],
  },
  {
    word: "fusil",
    translations: [{ word: "bulukka" }],
  },
  {
    word: "fut",
    translations: [{ word: "birmilna" }, { word: "doroŋŋa" }],
  },

  // // g entree dictionnaire
  {
    word: "gâchette du fusil",
    translations: [{ word: "ndeŋ bulukka" }],
  },
  {
    word: "gâchette d'un piège",
    translations: [{ word: "ndeŋŋa" }],
  },
  {
    word: "gagner",
    translations: [{ word: "fira" }, { word: "ɗoɓpa" }],
  },
  {
    word: "gagner contre",
    translations: [{ word: "tira" }],
  },
  {
    word: "gale filarienne",
    translations: [{ word: "gamjirgina" }],
  },
  {
    word: "garçon",
    translations: [{ word: "go njufna" }],
  },
  {
    word: "garder",
    translations: [
      { word: "golla" },
      { word: "taara" },
      { word: "ossa" },
      { word: "ziira" },
    ],
  },
  {
    word: "gaspillage",
    translations: [{ word: "ɓeŋga" }],
  },
  {
    word: "gaspiller",
    translations: [{ word: "boɗta" }, { word: "ɓeŋga" }],
  },
  {
    word: "gâteau frit",
    translations: [{ word: "vaŋgasana" }],
  },
  {
    word: "gauche",
    translations: [{ word: "gulla" }],
  },
  {
    word: "gaule",
    translations: [{ word: "gegelewna" }],
  },
  {
    word: "gazelle",
    translations: [{ word: "dukka" }, { word: "laffa" }],
  },
  {
    word: "gémir",
    translations: [{ word: "oyra" }, { word: "ti tara" }, { word: "giriffa" }],
  },
  {
    word: "gendarme",
    translations: [{ word: "asgaana" }],
  },
  {
    word: "gêner",
    translations: [{ word: "tuɗ tara" }],
  },
  {
    word: "genou",
    translations: [
      { word: "gifna" },
      { word: "vok gifna" },
      { word: "vun gifna" },
    ],
  },
  {
    word: "gens",
    translations: [{ word: "suuna" }],
  },
  {
    word: "germer",
    translations: [{ word: "dayra" }],
  },
  {
    word: "gésier",
    translations: [{ word: "fefekka" }],
  },
  {
    word: "geste fait avec les yeux",
    translations: [{ word: "vavalira" }],
  },
  {
    word: "girafe",
    translations: [{ word: "ŋgaana" }],
  },
  {
    word: "glaire",
    translations: [{ word: "kililiwna" }],
  },
  {
    word: "glanage",
    translations: [{ word: "ɦelena" }],
  },
  {
    word: "glaner",
    translations: [{ word: "cil ɦelena" }],
  },
  {
    word: "glissade",
    translations: [{ word: "dlaraɗaɗta" }],
  },
  {
    word: "glisse",
    translations: [{ word: "keleɓeɗta" }],
  },
  {
    word: "glisser",
    translations: [{ word: "soroɓpa" }],
  },
  {
    word: "gloire",
    translations: [{ word: "bibiŋilla" }],
  },
  {
    word: "goïtre",
    translations: [{ word: "ɦukŋa" }],
  },
  {
    word: "gombo",
    translations: [{ word: "dloonora" }],
  },
  {
    word: "gonfler",
    translations: [
      { word: "balla" },
      { word: "geera" },
      { word: "gissa" },
      { word: "kolla" },
      { word: "suɓuura" },
    ],
  },
  {
    word: "se gonfler",
    translations: [{ word: "goŋga" }, { word: "o tara" }],
  },
  {
    word: "gorge",
    translations: [{ word: "hohoo della" }],
  },
  {
    word: "gourde",
    translations: [{ word: "guura" }],
  },
  {
    word: "gourmandise",
    translations: [{ word: "lelemba" }, { word: "yelemba" }],
  },
  {
    word: "goût",
    translations: [{ word: "hinikka" }],
  },
  {
    word: "goûter",
    translations: [{ word: "jukka" }],
  },
  {
    word: "gouverner",
    translations: [{ word: "ti mulla" }],
  },
  {
    word: "goyave",
    translations: [{ word: "goyofna" }],
  },
  {
    word: "grain",
    translations: [{ word: "gemena" }],
  },
  {
    word: "graine, grains",
    translations: [{ word: "iira" }],
  },
  {
    word: "graines de l'oseille",
    translations: [{ word: "ŋgiina" }],
  },
  {
    word: "graines de néré préparées pour la sauce",
    translations: [{ word: "kaykayra" }],
  },
  {
    word: "graines utilisées comme des condiments pour les bouillies et les sauces",
    translations: [{ word: "njeɓena" }],
  },
  {
    word: "graisse",
    translations: [{ word: "mbulna" }, { word: "mbolna" }],
  },
  {
    word: "graminée",
    translations: [{ word: "uusuna" }],
  },
  {
    word: "grandeur",
    translations: [{ word: "ŋgolla" }],
  },
  {
    word: "grandir",
    translations: [{ word: "ɗugulla" }, { word: "suɓuura" }, { word: "wulla" }],
  },
  {
    word: "grand-mère",
    translations: [{ word: "su ŋgolora" }],
  },
  {
    word: "grand-père",
    translations: [{ word: "bu ŋgolora" }],
  },
  {
    word: "grand-route",
    translations: [{ word: "voɗ bulna" }],
  },
  {
    word: "gras",
    translations: [{ word: "ɗoora" }, { word: "mbulna" }],
  },
  {
    word: "gratitude",
    translations: [{ word: "deɓpa" }],
  },
  {
    word: "gratter",
    translations: [{ word: "ɦokka" }, { word: "ɦirikka" }, { word: "kirikka" }],
  },
  {
    word: "gravier",
    translations: [{ word: "jeremma" }],
  },
  {
    word: "grêle",
    translations: [{ word: "dlaŋmagina" }],
  },
  {
    word: "grélotement",
    translations: [{ word: "dlakka" }],
  },
  {
    word: "grenier",
    translations: [{ word: "veena" }],
  },
  {
    word: "grenier en paille pour garder les arachides et les pois de terre",
    translations: [{ word: "kuɓma" }],
  },
  {
    word: "grenier, petit",
    translations: [{ word: "mbogora" }],
  },
  {
    word: "grenouille",
    translations: [{ word: "luuna" }],
  },
  {
    word: "griffer",
    translations: [{ word: "ɦokka" }],
  },
  {
    word: "griller",
    translations: [{ word: "cuffa" }, { word: "waara" }],
  },
  {
    word: "grincer les dents",
    translations: [{ word: "muɗ siina" }],
  },
  {
    word: "grogner",
    translations: [{ word: "ɦoora" }],
  },
  {
    word: "grommeler",
    translations: [{ word: "gurnira" }],
  },
  {
    word: "grondement",
    translations: [{ word: "bayra" }, { word: "ŋgoɓpa" }],
  },
  {
    word: "gronder",
    translations: [{ word: "bayra" }, { word: "ŋgoɓpa" }, { word: "yalla" }],
  },
  {
    word: "gronder de l'hyène",
    translations: [{ word: "ɦoora" }],
  },
  {
    word: "gros grillon qui crie fort pendant le soir",
    translations: [{ word: "njeena" }],
  },
  {
    word: "gros intestin",
    translations: [{ word: "guluɗuŋŋa" }, { word: "tawlana" }],
  },
  {
    word: "grossesse",
    translations: [{ word: "wiina" }],
  },
  {
    word: "grossir",
    translations: [{ word: "ɗoora" }],
  },
  {
    word: "groupe",
    translations: [{ word: "gruɓma" }, { word: "suu molina" }],
  },
  {
    word: "grue couronnée",
    translations: [{ word: "ŋgakŋa" }],
  },
  {
    word: "grumeau",
    translations: [{ word: "ɓuɓutla" }],
  },
  {
    word: "gué",
    translations: [{ word: "ɦeɗegeera" }],
  },
  {
    word: "guépard",
    translations: [{ word: "huhuuna" }, { word: "lufuɦuuna" }],
  },
  {
    word: "guêpe",
    translations: [{ word: "viŋviŋŋa" }],
  },
  {
    word: "guérir",
    translations: [{ word: "garaɗta" }, { word: "hinda" }, { word: "suɗta" }],
  },
  {
    word: "guérison",
    translations: [{ word: "garaɗta" }, { word: "hinda" }, { word: "suɗta" }],
  },
  {
    word: "guérisseur",
    translations: [{ word: "saa kumuna" }],
  },
  {
    word: "guerre",
    translations: [{ word: "duuna" }],
  },
  {
    word: "guider",
    translations: [{ word: "taɗta" }, { word: "takka" }],
  },
  {
    word: "guidon",
    translations: [{ word: "mek velewna" }],
  },

  // // h entree dictionnaire
  {
    word: "se habituer à",
    translations: [
      {
        word: "haɗta",
        example: "Nam gi haɗi a li dla ndaɗta",
        exampleTranslation: "Il s’est habitué à faire cela",
      },
    ],
  },
  {
    word: "hache",
    translations: [{ word: "njeɗna" }],
  },
  {
    word: "haine",
    translations: [{ word: "gonokka" }],
  },
  {
    word: "haïr",
    translations: [{ word: "noyra" }],
  },
  {
    word: "hameçon",
    translations: [{ word: "jambaɗta" }, { word: "kadarra" }],
  },
  {
    word: "hanche",
    translations: [{ word: "ciwilna" }],
  },
  {
    word: "hangar pour le grain",
    translations: [{ word: "gina" }, { word: "zaŋŋa" }],
  },
  {
    word: "Haoussa",
    translations: [{ word: "hawzira" }],
  },
  {
    word: "happer au vol",
    translations: [{ word: "dlakka" }],
  },
  {
    word: "harangue",
    translations: [{ word: "bolla" }],
  },
  {
    word: "haricot",
    translations: [{ word: "liɗna" }],
  },
  {
    word: "feuilles des haricots",
    translations: [{ word: "samaɗna" }],
  },
  {
    word: "harpon à plusieurs fourchons",
    translations: [{ word: "kergewra" }],
  },
  {
    word: "harpe à deux ou trois cordes",
    translations: [{ word: "diŋŋa" }, { word: "diŋdiliŋŋa" }],
  },
  {
    word: "harpon à trois fourchons",
    translations: [{ word: "yagara" }],
  },
  {
    word: "en haut",
    translations: [{ word: "kooloo" }],
  },
  {
    word: "hauteur",
    translations: [{ word: "feekka" }],
  },
  {
    word: "haveneau semi-circulaire",
    translations: [
      { word: "bay dena" },
      { word: "dena" },
      { word: "dulugira" },
    ],
  },
  {
    word: "hennir",
    translations: [{ word: "bayra" }],
  },
  {
    word: "herbe",
    translations: [{ word: "uusuna" }],
  },
  {
    word: "hérisson",
    translations: [{ word: "cemcemma" }],
  },
  {
    word: "héron cendré",
    translations: [{ word: "garamma" }],
  },
  {
    word: "heure",
    translations: [{ word: "faɗta" }, { word: "lerra" }],
  },
  {
    word: "heurter",
    translations: [{ word: "daɓpa" }],
  },
  {
    word: "hibou",
    translations: [{ word: "hikŋa" }],
  },
  {
    word: "hier",
    translations: [{ word: "kaa" }, { word: "kaari" }],
  },
  {
    word: "hippopotame",
    translations: [{ word: "gariyamba" }],
  },
  {
    word: "hirondelle",
    translations: [{ word: "dlemerekka" }],
  },
  {
    word: "homme",
    translations: [{ word: "sa njufna" }, { word: "njufna" }, { word: "sana" }],
  },
  {
    word: "homonyme",
    translations: [{ word: "mbeegera" }],
  },
  {
    word: "honneur",
    translations: [{ word: "ŋgara" }],
  },
  {
    word: "honorer",
    translations: [
      { word: "li ura" },
      { word: "tli yamba" },
      { word: "hal ŋgara" },
    ],
  },
  {
    word: "honte",
    translations: [{ word: "zolona" }],
  },
  {
    word: "avoir honte",
    translations: [{ word: "goŋga" }],
  },
  {
    word: "hôpital",
    translations: [{ word: "dokdorra" }],
  },
  {
    word: "hoquet",
    translations: [{ word: "hiɗiŋiɗta" }],
  },
  {
    word: "houe",
    translations: [{ word: "kawira" }],
  },
  {
    word: "houe en bois pour faire les sillons",
    translations: [{ word: "banaŋŋa" }],
  },
  {
    word: "huile",
    translations: [{ word: "mbulna" }],
  },
  {
    word: "huit",
    translations: [{ word: "kalavandi" }],
  },
  {
    word: "humidité",
    translations: [{ word: "ŋgolomba" }, { word: "logomba" }],
  },
  {
    word: "hyène",
    translations: [{ word: "goonira" }],
  },

  // // i entree dictionnaire
  {
    word: "ici",
    translations: [
      {
        word: "tan",
        example: "Nam ka tani",
        exampleTranslation: "Il est ici",
      },
      {
        word: "tani",
        example: "Aŋ juɓun ka tani!",
        exampleTranslation: "Tu m’attend ici!",
      },
    ],
  },
  {
    word: "idiotie",
    translations: [{ word: "giniŋga" }],
  },
  {
    word: "igname",
    translations: [{ word: "dawna" }],
  },
  {
    word: "il, lui",
    translations: [{ word: "nam" }, { word: "namu" }],
  },
  {
    word: "il y a",
    translations: [
      {
        word: "ka",
        example: "Tina kaa",
        exampleTranslation: "Il y a à manger",
      },
    ],
  },
  {
    word: "île",
    translations: [{ word: "ɗaara" }],
  },
  {
    word: "illuminer",
    translations: [{ word: "ɓoora" }],
  },
  {
    word: "ils",
    translations: [
      {
        word: "asi",
        example: "Asi ka mbaɗi",
        exampleTranslation: "Ils ne viendront pas",
      },
    ],
  },
  {
    word: "immédiatement",
    translations: [{ word: "gaw" }, { word: "zak" }],
  },
  {
    word: "impatience",
    translations: [{ word: "kokotla" }],
  },
  {
    word: "importance",
    translations: [{ word: "ŋgolla" }],
  },
  {
    word: "imposer",
    translations: [{ word: "ɦeɓpa" }],
  },
  {
    word: "impôt",
    translations: [{ word: "lamporra" }, { word: "taara" }],
  },
  {
    word: "imprimer",
    translations: [{ word: "huɓpa" }],
  },
  {
    word: "inceste",
    translations: [{ word: "yowna" }],
  },
  {
    word: "incisive",
    translations: [{ word: "cegera" }],
  },
  {
    word: "infirmière",
    translations: [{ word: "saa dokdorna" }, { word: "cara dokdorra" }],
  },
  {
    word: "informer",
    translations: [{ word: "jokka" }],
  },
  {
    word: "inhaler",
    translations: [{ word: "ɗussa" }],
  },
  {
    word: "inonder",
    translations: [{ word: "tlira" }, { word: "kuluɓpa" }],
  },
  {
    word: "insecticide",
    translations: [{ word: "fuɗurna" }],
  },
  {
    word: "instituteur",
    translations: [{ word: "meterna" }],
  },
  {
    word: "instrument de musique à percussion fabriqué d'une calebasse",
    translations: [{ word: "cagayawra" }],
  },
  {
    word: "instrument de musique traditionnel fait d'une gourde",
    translations: [{ word: "buɗumma" }],
  },
  {
    word: "insulte",
    translations: [{ word: "ŋgulla" }, { word: "panda" }],
  },
  {
    word: "insulter",
    translations: [{ word: "ŋgulla" }, { word: "panda" }],
  },
  {
    word: "avoir intention",
    translations: [
      {
        word: "gin",
        example: "Nam hoɗ gin voo",
        exampleTranslation: "Il a l’intention de rentrer chez lui",
      },
    ],
  },
  {
    word: "intercéder",
    translations: [{ word: "ɦura" }, { word: "cenda" }, { word: "saɗawra" }],
  },
  {
    word: "interdire",
    translations: [{ word: "doora" }],
  },
  {
    word: "intérieur d'une case",
    translations: [{ word: "kalaffa" }],
  },
  {
    word: "à l’intérieur",
    translations: [{ word: "kalavi" }],
  },
  {
    word: "interpréter",
    translations: [{ word: "ŋgara" }, { word: "gi ura" }],
  },
  {
    word: "intestin",
    translations: [{ word: "yoroɗna" }],
  },
  {
    word: "intestin de chèvre",
    translations: [{ word: "guy ndulna" }],
  },
  {
    word: "intestins grilés avec l’huile",
    translations: [{ word: "mararana" }],
  },
  {
    word: "intimité",
    translations: [{ word: "kosokosora" }],
  },
  {
    word: "inutilité",
    translations: [{ word: "dadawira" }],
  },
  {
    word: "ivresse",
    translations: [{ word: "guruɗta" }],
  },

  // // // j entree dictionnaire
  {
    word: "jalousie",
    translations: [{ word: "yoomusna" }],
  },
  {
    word: "jambe",
    translations: [{ word: "gayna" }],
  },
  {
    word: "jardin",
    translations: [{ word: "zardeŋŋa" }],
  },
  {
    word: "jarre à eau",
    translations: [{ word: "doyna" }, { word: "gegelna" }],
  },
  {
    word: "fond de jarre",
    translations: [{ word: "ŋgiɗiŋŋa" }],
  },
  {
    word: "jarre pour faire du sel",
    translations: [{ word: "zekŋa" }],
  },
  {
    word: "jaune",
    translations: [{ word: "beebeena" }, { word: "bunuffa" }],
  },
  {
    word: "je",
    translations: [
      {
        word: "an",
        example: "Ni anu",
        exampleTranslation: "C’est moi",
      },
      {
        word: "anu",
        example: "An minɗi",
        exampleTranslation: "Je ne veux pas",
      },
    ],
  },
  {
    word: "jeter",
    translations: [{ word: "gira" }, { word: "gikka" }, { word: "cukka" }],
  },
  {
    word: "jeter dans l'air",
    translations: [{ word: "haara" }],
  },
  {
    word: "jeter un sort",
    translations: [{ word: "luguɗta" }],
  },
  {
    word: "jeudi",
    translations: [{ word: "zedi" }],
  },
  {
    word: "jeune homme",
    translations: [{ word: "go zoŋŋa" }],
  },
  {
    word: "jeûner",
    translations: [{ word: "saŋga" }],
  },
  {
    word: "joie",
    translations: [{ word: "ayra" }, { word: "furira" }],
  },
  {
    word: "joindre",
    translations: [{ word: "dlaɓpa" }, { word: "jakka" }, { word: "taɓpa" }],
  },
  {
    word: "joint",
    translations: [{ word: "ii teŋella" }],
  },
  {
    word: "jou",
    translations: [{ word: "luuna" }],
  },
  {
    word: "joue",
    translations: [{ word: "kiriŋŋa" }, { word: "ŋgotlna" }],
  },
  {
    word: "jouer",
    translations: [{ word: "cira" }, { word: "luura" }],
  },
  {
    word: "jouer aux osselets",
    translations: [{ word: "li dlakka" }],
  },
  {
    word: "jouer un instrument",
    translations: [{ word: "bura" }],
  },
  {
    word: "jour",
    translations: [{ word: "buuna" }, { word: "faalira" }, { word: "faɗta" }],
  },
  {
    word: "autre jour",
    translations: [{ word: "buu ma daŋŋa" }, { word: "faɗta" }],
  },
  {
    word: "journée",
    translations: [{ word: "buuna" }],
  },
  {
    word: "jugement",
    translations: [{ word: "ɓakŋa" }, { word: "zariyara" }],
  },
  {
    word: "juger",
    translations: [{ word: "ka ɓakŋa" }],
  },
  {
    word: "jumeaux",
    translations: [{ word: "ŋgonira" }],
  },
  {
    word: "jusqu'à",
    translations: [{ word: "gak gak" }],
  },
  {
    word: "juste",
    translations: [{ word: "ɗegee" }, { word: "u voɗta" }],
  },
  {
    word: "justice",
    translations: [{ word: "ɗegeera" }],
  },
  {
    word: "kapokier aux fleurs rouges",
    translations: [{ word: "gandurna" }],
  },
  {
    word: "karité",
    translations: [{ word: "guɗira" }],
  },

  // // k entree dictionnaire
  {
    word: "labret",
    translations: [{ word: "tusuna" }, { word: "yurɓuura" }],
  },
  {
    word: "laisser",
    translations: [
      { word: "aara" },
      { word: "cukka" },
      { word: "hinda" },
      { word: "noyra" },
    ],
  },
  {
    word: "laisser faire",
    translations: [{ word: "tlira" }],
  },
  {
    word: "lait",
    translations: [{ word: "mbiira" }],
  },
  {
    word: "lait de la mère",
    translations: [{ word: "pona" }],
  },
  {
    word: "lame",
    translations: [{ word: "siina" }],
  },
  {
    word: "lame de la houe avec un cou qui s'attache à la manche de la houe",
    translations: [{ word: "kawi gayna" }],
  },
  {
    word: "lame de la houe ronde",
    translations: [{ word: "kawi dora" }],
  },
  {
    word: "lame de la houe triangulaire",
    translations: [{ word: "kawi daɓina" }],
  },
  {
    word: "lame du rasoir",
    translations: [{ word: "vella" }],
  },
  {
    word: "se lamenter",
    translations: [
      { word: "gi ɦoona" },
      { word: "ndalla" },
      { word: "tii tara" },
    ],
  },
  {
    word: "lampe",
    translations: [
      { word: "lambara" },
      { word: "lalamba" },
      { word: "pindilla" },
    ],
  },
  {
    word: "lampe de poche",
    translations: [{ word: "torossa" }, { word: "tossa" }],
  },
  {
    word: "lance",
    translations: [{ word: "saɓpa" }],
  },
  {
    word: "lance à trois fourchons utilisée pour la chasse",
    translations: [{ word: "jojoona" }],
  },
  {
    word: "lance-pierres",
    translations: [{ word: "kewrekka" }],
  },
  {
    word: "lancer",
    translations: [{ word: "gikka" }],
  },
  {
    word: "langue",
    translations: [{ word: "sinda" }, { word: "vunna" }],
  },
  {
    word: "lapin",
    translations: [{ word: "veɗta" }],
  },
  {
    word: "large",
    translations: [{ word: "bubura" }],
  },
  {
    word: "largeur",
    translations: [{ word: "bubura" }, { word: "hayra" }],
  },
  {
    word: "larme",
    translations: [{ word: "simina" }],
  },
  {
    word: "larve",
    translations: [{ word: "njuvulna" }, { word: "goo njuvulna" }],
  },
  {
    word: "lasser",
    translations: [{ word: "kawra" }, { word: "ndakka" }, { word: "loɓma" }],
  },
  {
    word: "latrines",
    translations: [{ word: "zulla soɗna" }],
  },
  {
    word: "laver",
    translations: [{ word: "mbussa" }],
  },
  {
    word: "laver des graines ou des grains",
    translations: [{ word: "salla" }],
  },
  {
    word: "lécher",
    translations: [{ word: "peɗta" }, { word: "talakka" }, { word: "tanaɗta" }],
  },
  {
    word: "leçon",
    translations: [{ word: "haɗta" }],
  },
  {
    word: "légèreté",
    translations: [{ word: "feɗta" }],
  },
  {
    word: "léger",
    translations: [{ word: "feɗ" }],
  },
  {
    word: "léopard",
    translations: [{ word: "sindilna" }],
  },
  {
    word: "lèpre",
    translations: [
      { word: "kuturuna" },
      { word: "liɓina" },
      { word: "ndondona" },
    ],
  },
  {
    word: "lépreux",
    translations: [
      { word: "saa kuturuna" },
      { word: "saa liɓina" },
      { word: "saa ndondona" },
    ],
  },
  {
    word: "un lépreux à la phase initiale de sa maladie",
    translations: [{ word: "saa busuna" }],
  },
  {
    word: "lever",
    translations: [{ word: "tlira" }, { word: "poŋga" }],
  },
  {
    word: "se lever",
    translations: [
      {
        word: "colla",
        example: "Col koolo!",
        exampleTranslation: "Lèves-toi!",
      },
      {
        word: "dayra",
        example: "Faɗta daya",
        exampleTranslation: "Le soleil s’est levé",
      },
      {
        word: "yowra",
        example: "Yowogi koolo!",
        exampleTranslation: "Levez-vous!",
      },
    ],
  },
  {
    word: "libération",
    translations: [{ word: "buɗta" }, { word: "suɗta" }],
  },
  {
    word: "libérer",
    translations: [{ word: "buɗta" }, { word: "suɗta" }],
  },
  {
    word: "lier",
    translations: [
      { word: "ɗikka" },
      { word: "ganda" },
      { word: "kelewra" },
      { word: "korossa" },
      { word: "njunda" },
      { word: "saraɗta" },
    ],
  },
  {
    word: "lier avec une corde",
    translations: [{ word: "ɗakka" }],
  },
  {
    word: "lieu",
    translations: [{ word: "balamma" }, { word: "lina" }],
  },
  {
    word: "lieu non habité",
    translations: [{ word: "bagira" }],
  },
  {
    word: "lieu où le coton est apporté, pesé, et vendu",
    translations: [{ word: "kamkamma" }],
  },
  {
    word: "ligne",
    translations: [{ word: "darra" }],
  },
  {
    word: "ligoter",
    translations: [{ word: "saraɗta" }],
  },
  {
    word: "limite",
    translations: [{ word: "hagara" }],
  },
  {
    word: "limiter",
    translations: [{ word: "cakka" }],
  },
  {
    word: "linceul blanc",
    translations: [{ word: "baktana" }],
  },
  {
    word: "lion",
    translations: [{ word: "dlona" }],
  },
  {
    word: "lit",
    translations: [
      { word: "arŋgawna" },
      { word: "aŋgreɓma" },
      { word: "layna" },
      { word: "zaŋŋa" },
    ],
  },
  {
    word: "lit, le pied de",
    translations: [{ word: "njaw layna" }],
  },
  {
    word: "litre",
    translations: [{ word: "lidirna" }],
  },
  {
    word: "loi",
    translations: [{ word: "gaɗta" }],
  },
  {
    word: "loin",
    translations: [
      {
        word: "day",
        example: "Nam ha ki egen day",
        exampleTranslation: "Il est loin de moi",
      },
    ],
  },
  {
    word: "loir (petit)",
    translations: [{ word: "gemesna" }],
  },
  {
    word: "longueur",
    translations: [{ word: "feekka" }],
  },
  {
    word: "longtemps",
    translations: [{ word: "gak gak" }],
  },
  {
    word: "louange",
    translations: [{ word: "geleɗta" }, { word: "ŋgara" }],
  },
  {
    word: "louer",
    translations: [{ word: "geleɗta" }, { word: "ŋgara" }],
  },
  {
    word: "être lourd",
    translations: [
      {
        word: "nekka",
        example: "Nam nek ɦay",
        exampleTranslation: "Il est très lourd",
      },
    ],
  },
  {
    word: "lourdeur",
    translations: [{ word: "nekka" }],
  },
  {
    word: "lubrifiant",
    translations: [{ word: "mbulna" }],
  },
  {
    word: "luire",
    translations: [{ word: "weleɗta" }],
  },
  {
    word: "lumière",
    translations: [{ word: "kiɗikka" }],
  },
  {
    word: "lundi",
    translations: [{ word: "lendi" }],
  },
  {
    word: "lune",
    translations: [{ word: "tilna" }],
  },
  {
    word: "lutter",
    translations: [{ word: "njogoɗta" }],
  },
  {
    word: "luxure",
    translations: [{ word: "dalamba" }],
  },

  // // m entree dictionnaire
  {
    word: "mâcher",
    translations: [{ word: "patla" }, { word: "tegeɗta" }],
  },
  {
    word: "machette",
    translations: [{ word: "boŋgorna" }, { word: "kukuɓma" }],
  },
  {
    word: "machin",
    translations: [{ word: "vaɗina" }],
  },
  {
    word: "machine",
    translations: [{ word: "masinna" }],
  },
  {
    word: "mâchoire",
    translations: [{ word: "kiriŋŋa" }],
  },
  {
    word: "magasin",
    translations: [{ word: "maŋgasara" }],
  },
  {
    word: "maigrir",
    translations: [{ word: "iɗna" }],
  },
  {
    word: "maïs",
    translations: [{ word: "saytokka" }],
  },
  {
    word: "main",
    translations: [{ word: "kona" }],
  },
  {
    word: "maintenant",
    translations: [{ word: "cecem" }],
  },
  {
    word: "mais",
    translations: [{ word: "may" }],
  },
  {
    word: "à la maison",
    translations: [
      {
        word: "voo",
        example: "Nam i voo",
        exampleTranslation: "Il est parti à la maison",
      },
    ],
  },
  {
    word: "à la maison de",
    translations: [
      {
        word: "vi",
        example: "Nam buu vi Matthias",
        exampleTranslation: "Il dort à la maison de Matthias",
      },
    ],
  },
  {
    word: "mal",
    translations: [{ word: "cora" }, { word: "cuvuɗna" }, { word: "gaŋawna" }],
  },
  {
    word: "mal aux reins",
    translations: [{ word: "diŋriŋŋa" }],
  },
  {
    word: "avoir mal",
    translations: [
      {
        word: "tira",
        example: "Hurun tanu",
        exampleTranslation: "J’ai mal au ventre",
      },
      {
        word: "cira",
        example: "Yan canu",
        exampleTranslation: "J’ai mal à la tête",
      },
    ],
  },
  {
    word: "faire mal, être malade",
    translations: [
      {
        word: "li tara",
        example: "Tam lamu",
        exampleTranslation: "Il est malade",
      },
      {
        word: "lira",
        example: "Hurun lan cocoo",
        exampleTranslation: "Mon coeur me fait très mal",
      },
      {
        word: "saara",
        example: "Mbilin saranu",
        exampleTranslation: "Ma plaie me fait mal",
      },
    ],
  },
  {
    word: "maladie",
    translations: [{ word: "tuguɗira" }, { word: "tara tira" }],
  },
  {
    word: "avoir maladie",
    translations: [{ word: "tara lira" }],
  },
  {
    word: "malaxer",
    translations: [{ word: "ɦoɓpa" }],
  },
  {
    word: "mâle",
    translations: [{ word: "njufna" }],
  },
  {
    word: "malheur qui vient à cause d'un fait adultère",
    translations: [{ word: "mesewna" }],
  },
  {
    word: "malle",
    translations: [{ word: "sandukka" }],
  },
  {
    word: "malnutrition",
    translations: [{ word: "ŋgokka" }],
  },
  {
    word: "maltraiter",
    translations: [{ word: "li iira" }],
  },
  {
    word: "maman",
    translations: [{ word: "aya" }, { word: "mama" }, { word: "sunu" }],
  },
  {
    word: "mamelle",
    translations: [{ word: "pona" }],
  },
  {
    word: "manche d'un outil",
    translations: [{ word: "meena" }],
  },
  {
    word: "mangeoire",
    translations: [{ word: "bulla" }],
  },
  {
    word: "mangeoire du cheval",
    translations: [{ word: "giŋga" }],
  },
  {
    word: "manger",
    translations: [{ word: "tira" }, { word: "muɗta" }, { word: "seɗta" }],
  },
  {
    word: "manger de la viande",
    translations: [{ word: "komba" }],
  },
  {
    word: "manger des substances poudrées",
    translations: [{ word: "offa" }],
  },
  {
    word: "manger la boule sans sauce",
    translations: [{ word: "lossa" }],
  },
  {
    word: "mangouste",
    translations: [{ word: "seenekŋa" }],
  },
  {
    word: "mangue",
    translations: [{ word: "moŋgora" }],
  },
  {
    word: "manioc",
    translations: [{ word: "ŋgalina" }],
  },
  {
    word: "mante religieuse",
    translations: [{ word: "ŋgaŋgarawra" }],
  },
  {
    word: "marécage",
    translations: [{ word: "fulla" }],
  },
  {
    word: "marché",
    translations: [{ word: "sukŋa" }],
  },
  {
    word: "marchandage",
    translations: [{ word: "wayra" }, { word: "gussa" }],
  },
  {
    word: "marche",
    translations: [{ word: "tuɗta" }],
  },
  {
    word: "marcher furtivement",
    translations: [{ word: "kuɗukka" }],
  },
  {
    word: "mardi",
    translations: [{ word: "mardi" }],
  },
  {
    word: "mare qui se forme pendant la saison des pluies",
    translations: [{ word: "hurugukka" }, { word: "lokka" }],
  },
  {
    word: "mari",
    translations: [{ word: "njufna" }],
  },
  {
    word: "mari de la soeur de votre femme, mari d'une femme du même clan que votre femme",
    translations: [{ word: "yagiina" }],
  },
  {
    word: "mariage",
    translations: [{ word: "ɗumba" }],
  },
  {
    word: "marier, se marier",
    translations: [{ word: "ɗumba" }, { word: "kakka" }],
  },
  {
    word: "margouillat",
    translations: [
      { word: "hooloŋŋa" },
      { word: "horloŋŋa" },
      { word: "hoɗoŋolla" },
    ],
  },
  {
    word: "marmite de terre (petite)",
    translations: [{ word: "degelena" }],
  },
  {
    word: "marmite de terre pour cuisiner",
    translations: [{ word: "ŋgalna" }],
  },
  {
    word: "marmite en aluminium",
    translations: [{ word: "giɗirna" }],
  },
  {
    word: "marquer",
    translations: [{ word: "ɓissa" }],
  },
  {
    word: "marteau",
    translations: [{ word: "martora" }],
  },
  {
    word: "Massa",
    translations: [{ word: "zuɗna" }],
  },
  {
    word: "matin",
    translations: [{ word: "maɗira" }],
  },
  {
    word: "maudire",
    translations: [{ word: "gi vunna" }],
  },
  {
    word: "médecin",
    translations: [{ word: "dokdorna" }],
  },
  {
    word: "médicament traditionnel",
    translations: [{ word: "kumuna" }, { word: "kumu ma saɗina" }],
  },
  {
    word: "médire",
    translations: [{ word: "tum ura" }],
  },
  {
    word: "médisance",
    translations: [{ word: "ŋgeŋŋa" }, { word: "kolokŋa" }],
  },
  {
    word: "mélanger",
    translations: [{ word: "gasira" }, { word: "ɦoɓpa" }, { word: "tlumba" }],
  },
  {
    word: "mélanger la farine avec de l'eau",
    translations: [{ word: "gasaara" }],
  },
  {
    word: "mélanger la farine des pousses de sorgho avec de l’eau pour préparer la bière",
    translations: [{ word: "bukka" }],
  },
  {
    word: "mélanger une substance avec un liquide",
    translations: [{ word: "larassa" }],
  },
  {
    word: "melon",
    translations: [{ word: "bubura" }],
  },
  {
    word: "mendier",
    translations: [{ word: "cenda" }, { word: "saara" }],
  },
  {
    word: "mentir",
    translations: [{ word: "ka boyna" }],
  },
  {
    word: "menton",
    translations: [{ word: "u ɗumma" }],
  },
  {
    word: "même",
    translations: [{ word: "dew" }],
  },
  {
    word: "mépris",
    translations: [{ word: "noyra" }, { word: "panda" }, { word: "saawra" }],
  },
  {
    word: "mépriser",
    translations: [{ word: "noyra" }, { word: "panda" }, { word: "saawra" }],
  },
  {
    word: "merci",
    translations: [{ word: "deɓpa" }],
  },
  {
    word: "mercredi",
    translations: [{ word: "merkredi" }],
  },
  {
    word: "mère",
    translations: [{ word: "sura" }],
  },
  {
    word: "message",
    translations: [{ word: "vun sunda" }],
  },
  {
    word: "messager",
    translations: [{ word: "saa sunda" }],
  },
  {
    word: "mesurer",
    translations: [{ word: "ŋgara" }],
  },
  {
    word: "mettre",
    translations: [
      { word: "cukka" },
      { word: "ɗagalla" },
      { word: "tinda" },
      { word: "gira" },
    ],
  },
  {
    word: "mettre côte à côte",
    translations: [{ word: "jakka" }],
  },
  {
    word: "mettre (des habits)",
    translations: [{ word: "cukka" }],
  },
  {
    word: "mettre en botte ou fagot",
    translations: [{ word: "cemba" }],
  },
  {
    word: "mettre en ordre",
    translations: [{ word: "njaara" }],
  },
  {
    word: "mètre",
    translations: [{ word: "meterra" }],
  },
  {
    word: "meule de pierre",
    translations: [{ word: "ɦinira" }],
  },
  {
    word: "midi",
    translations: [{ word: "faalira" }],
  },
  {
    word: "miel",
    translations: [{ word: "mbul yumma" }],
  },
  {
    word: "mieux",
    translations: [{ word: "mariyaɗ" }],
  },
  {
    word: "mil",
    translations: [{ word: "wana" }],
  },
  {
    word: "le premier mil mûr de la saison",
    translations: [{ word: "guɗuura" }],
  },
  {
    word: "mil pénicillaire",
    translations: [{ word: "sayra" }],
  },
  {
    word: "milieu",
    translations: [{ word: "gayra" }],
  },
  {
    word: "au milieu de",
    translations: [{ word: "duk gayra" }],
  },
  {
    word: "mille",
    translations: [{ word: "buɓ" }],
  },
  {
    word: "mille-pattes",
    translations: [
      { word: "danagira" },
      { word: "darŋasira" },
      { word: "sandalina" },
    ],
  },
  {
    word: "minerai de fer",
    translations: [{ word: "mbaadlara" }],
  },
  {
    word: "minuit",
    translations: [{ word: "duk ŋgikka" }],
  },
  {
    word: "minute",
    translations: [{ word: "miniɗna" }],
  },
  {
    word: "miroir",
    translations: [{ word: "kotoromma" }],
  },
  {
    word: "misère",
    translations: [{ word: "hahawra" }],
  },
  {
    word: "mite",
    translations: [{ word: "piipiira" }],
  },
  {
    word: "mobylette",
    translations: [{ word: "mobaleɗna" }],
  },
  {
    word: "moelle",
    translations: [{ word: "mbul sokŋa" }],
  },
  {
    word: "moi",
    translations: [{ word: "an" }, { word: "anu" }],
  },
  {
    word: "mois",
    translations: [{ word: "tilna" }],
  },
  {
    word: "moisir",
    translations: [{ word: "guvuura" }],
  },
  {
    word: "moitié",
    translations: [{ word: "nusna" }],
  },
  {
    word: "molaire",
    translations: [{ word: "giŋga" }],
  },
  {
    word: "mollet",
    translations: [{ word: "huluguɗna" }, { word: "luguɗuk semma" }],
  },
  {
    word: "monde",
    translations: [
      { word: "duliyara" },
      { word: "duniyara" },
      { word: "ndaŋgara" },
    ],
  },
  {
    word: "pièce de monnaie",
    translations: [{ word: "koɓona" }, { word: "silira" }, { word: "sisira" }],
  },
  {
    word: "montagne",
    translations: [{ word: "ɦinira" }],
  },
  {
    word: "monter",
    translations: [{ word: "ɗiŋga" }, { word: "ɗaŋga" }, { word: "fulla" }],
  },
  {
    word: "montre",
    translations: [{ word: "mondorra" }],
  },
  {
    word: "montrer",
    translations: [{ word: "mekka" }],
  },
  {
    word: "se moquer",
    translations: [{ word: "davaɗta" }, { word: "panda" }, { word: "sanda" }],
  },
  {
    word: "moquerie",
    translations: [{ word: "davaɗta" }, { word: "panda" }, { word: "sanda" }],
  },
  {
    word: "morceaux brisés des grains de céréales ou d’arachide",
    translations: [{ word: "njetla" }],
  },
  {
    word: "mordre",
    translations: [{ word: "eɗta" }],
  },
  {
    word: "morse",
    translations: [{ word: "njamara" }],
  },
  {
    word: "mort",
    translations: [{ word: "maɗna" }, { word: "miɗna" }],
  },
  {
    word: "mortier",
    translations: [{ word: "zuzura" }],
  },
  {
    word: "motocyclette",
    translations: [{ word: "motoona" }],
  },
  {
    word: "mouche",
    translations: [{ word: "loloona" }],
  },
  {
    word: "se moucher",
    translations: [{ word: "fenda" }],
  },
  {
    word: "moudre",
    translations: [{ word: "degeɗta" }, { word: "luɗta" }],
  },
  {
    word: "mouiller",
    translations: [{ word: "ɗereɗta" }, { word: "loɗta" }],
  },
  {
    word: "mouler",
    translations: [{ word: "beɗta" }],
  },
  {
    word: "mourir",
    translations: [{ word: "miɗta" }],
  },
  {
    word: "moustache",
    translations: [{ word: "jeɓeera" }],
  },
  {
    word: "moustiquaire",
    translations: [{ word: "seŋgena" }, { word: "saŋgina" }],
  },
  {
    word: "moustique",
    translations: [{ word: "vuruɗna" }],
  },
  {
    word: "mouton",
    translations: [{ word: "timina" }],
  },
  {
    word: "mouton castré",
    translations: [{ word: "mbaraŋŋa" }],
  },
  {
    word: "mucus nasal",
    translations: [{ word: "doyra" }],
  },
  {
    word: "muer",
    translations: [
      {
        word: "polokka",
        example: "Guyra polok taɗ kiyo",
        exampleTranslation: "Le serpent s’est mué",
      },
    ],
  },
  {
    word: "multiplier",
    translations: [{ word: "zulla" }],
  },
  {
    word: "multiplication",
    translations: [{ word: "zulla" }],
  },
  {
    word: "mur",
    translations: [{ word: "gulumuna" }],
  },
  {
    word: "mûrir",
    translations: [{ word: "jeŋga" }, { word: "nera" }, { word: "ndakka" }],
  },
  {
    word: "murmur",
    translations: [{ word: "gurnira" }],
  },
  {
    word: "murmurer",
    translations: [{ word: "gurnira" }],
  },
  {
    word: "muscle",
    translations: [{ word: "sisilira" }],
  },
  {
    word: "musulman",
    translations: [{ word: "palaɗta" }],
  },

  // // n entree dictionnaire
  {
    word: "nageoire",
    translations: [{ word: "jiina" }],
  },
  {
    word: "nager",
    translations: [{ word: "lussa" }],
  },
  {
    word: "narine",
    translations: [{ word: "zul cinna" }],
  },
  {
    word: "nasse en entonnoir pour la pêche",
    translations: [{ word: "liŋga" }],
  },
  {
    word: "natron",
    translations: [{ word: "kiliɓina" }],
  },
  {
    word: "natte",
    translations: [{ word: "birissa" }],
  },
  {
    word: "natte épaisse",
    translations: [{ word: "dlaɗta" }],
  },
  {
    word: "ne ... pas",
    translations: [
      {
        word: "ɗi",
        example: "Nam ka mbaɗi",
        exampleTranslation: "Il ne viendra pas",
      },
      {
        word: "ɗi",
        example: "Col kooloɗi",
        exampleTranslation: "Ne te lève pas!",
      },
    ],
  },
  {
    word: "nénuphar",
    translations: [{ word: "dayra" }],
  },
  {
    word: "néré",
    translations: [{ word: "jijira" }],
  },
  {
    word: "nerf",
    translations: [{ word: "saɗina" }],
  },
  {
    word: "nettoyer",
    translations: [{ word: "ɦokka" }],
  },
  {
    word: "nettoyer le champ avant de le semer",
    translations: [{ word: "po senena" }],
  },
  {
    word: "neuf",
    translations: [{ word: "dleeŋe" }],
  },
  {
    word: "nez",
    translations: [{ word: "cinna" }],
  },
  {
    word: "dos du nez",
    translations: [{ word: "gu cinna" }],
  },
  {
    word: "nim",
    translations: [{ word: "gaayana" }],
  },
  {
    word: "n'importe qui",
    translations: [{ word: "gi ge lay" }],
  },
  {
    word: "n'importe quoi",
    translations: [{ word: "me ge lay" }],
  },
  {
    word: "devenir noir",
    translations: [{ word: "ziwin" }],
  },
  {
    word: "noirceur",
    translations: [{ word: "warra" }],
  },
  {
    word: "noix de kola",
    translations: [{ word: "gorra" }],
  },
  {
    word: "noix de la karité",
    translations: [{ word: "ii guɗira" }],
  },
  {
    word: "nom",
    translations: [{ word: "semma" }],
  },
  {
    word: "nombre",
    translations: [{ word: "lomorora" }, { word: "ndumba" }],
  },
  {
    word: "nombril",
    translations: [{ word: "fukka" }],
  },
  {
    word: "nommer",
    translations: [{ word: "yira" }],
  },
  {
    word: "non",
    translations: [{ word: "ɦawa" }],
  },
  {
    word: "nord",
    translations: [{ word: "mbayawi" }, { word: "faɗta mbayawra" }],
  },
  {
    word: "nous",
    translations: [{ word: "ami" }, { word: "aygi" }],
  },
  {
    word: "nous deux",
    translations: [{ word: "ay" }],
  },
  {
    word: "nouveau-né avant de lui donner un nom",
    translations: [
      { word: "maaɗina" },
      { word: "oohona" },
      { word: "matawiira" },
    ],
  },
  {
    word: "nouveauté",
    translations: [{ word: "wilira" }],
  },
  {
    word: "nouvelle lune",
    translations: [{ word: "vun tilna" }],
  },
  {
    word: "nuage",
    translations: [{ word: "ɗugulla" }],
  },
  {
    word: "nudité",
    translations: [{ word: "gandalara" }, { word: "siilira" }],
  },
  {
    word: "nuit",
    translations: [{ word: "njeŋgera" }],
  },
  {
    word: "numéro",
    translations: [{ word: "lomorora" }],
  },

  // m entree dictionnaire
  {
    word: "obéir",
    translations: [{ word: "ŋgomba" }],
  },
  {
    word: "obscurité",
    translations: [{ word: "nduvunda" }],
  },
  {
    word: "observer",
    translations: [{ word: "golla" }, { word: "beleera" }],
  },
  {
    word: "obstruer",
    translations: [{ word: "cakka" }, { word: "cikka" }, { word: "tossa" }],
  },
  {
    word: "occasion",
    translations: [
      {
        word: "voɗta",
        example: "Aŋ fi voɗta kaɗi su?",
        exampleTranslation: "Est-ce que tu a trouvé l’occasion?",
      },
    ],
  },
  {
    word: "occident",
    translations: [{ word: "palaɗna" }],
  },
  {
    word: "occuper",
    translations: [{ word: "ɗella" }],
  },
  {
    word: "ocre jaune",
    translations: [{ word: "beena" }],
  },
  {
    word: "ocre rouge",
    translations: [{ word: "sira" }],
  },
  {
    word: "odeur très mauvaise",
    translations: [{ word: "eelekka" }],
  },
  {
    word: "oeil",
    translations: [{ word: "iira" }],
  },
  {
    word: "oesophage",
    translations: [{ word: "peeɗewra" }],
  },
  {
    word: "oeuf",
    translations: [{ word: "sena" }],
  },
  {
    word: "oignon",
    translations: [{ word: "pasaara" }],
  },
  {
    word: "oindre d'huile",
    translations: [{ word: "fuura" }],
  },
  {
    word: "oiseau",
    translations: [{ word: "layna" }],
  },
  {
    word: "ombre",
    translations: [{ word: "ŋgussa" }],
  },
  {
    word: "omoplate",
    translations: [{ word: "domjokŋa" }, { word: "sok ma pel bikŋana" }],
  },
  {
    word: "oncle maternel",
    translations: [{ word: "ndusuna" }],
  },
  {
    word: "oncle paternel",
    translations: [{ word: "bu mbara" }],
  },
  {
    word: "ongle",
    translations: [{ word: "civiɗta" }],
  },
  {
    word: "opprimer",
    translations: [{ word: "lassa" }],
  },
  {
    word: "or",
    translations: [{ word: "lorra" }],
  },
  {
    word: "orage de vent",
    translations: [
      { word: "babaana" },
      { word: "baŋaana" },
      { word: "buɗukŋa" },
    ],
  },
  {
    word: "ordre",
    translations: [{ word: "gaɗta" }],
  },
  {
    word: "oreille",
    translations: [{ word: "humba" }],
  },
  {
    word: "oreiller",
    translations: [{ word: "wasaɗana" }],
  },
  {
    word: "oreillons",
    translations: [{ word: "buŋyuŋŋa" }],
  },
  {
    word: "orgueil",
    translations: [{ word: "ŋga tara" }],
  },
  {
    word: "être orgueilleux",
    translations: [{ word: "ŋga tara" }],
  },
  {
    word: "orphelin",
    translations: [
      {
        word: "kuyuna",
        example: "Nam ni kuyuwa",
        exampleTranslation: "Il est orphelin",
      },
      {
        word: "kuyuna",
        example: "Ni saa kuyuna",
        exampleTranslation: "C’est un orphelin",
      },
    ],
  },
  {
    word: "orphelinat",
    translations: [{ word: "kuyura" }, { word: "zira wul suu kuyura" }],
  },
  {
    word: "os",
    translations: [{ word: "sokŋa" }],
  },
  {
    word: "oseille",
    translations: [{ word: "dlemma" }],
  },
  {
    word: "ôter",
    translations: [{ word: "pekka" }, { word: "ɦuɗta" }],
  },
  {
    word: "où",
    translations: [{ word: "ara" }, { word: "ar ge" }],
  },
  {
    word: "oublier",
    translations: [{ word: "viɗta" }, { word: "maara" }],
  },
  {
    word: "ouest",
    translations: [{ word: "faɗta fiɗigira" }],
  },
  {
    word: "oui",
    translations: [{ word: "ɦaa" }],
  },
  {
    word: "ouverture",
    translations: [{ word: "vunna" }, { word: "ŋgora" }],
  },
  {
    word: "ouvrir",
    translations: [{ word: "malla" }, { word: "ŋgora" }],
  },

  // // p entree dictionnaire
  {
    word: "pagaie",
    translations: [{ word: "pereŋŋa" }],
  },
  {
    word: "paiement",
    translations: [{ word: "warakŋa" }],
  },
  {
    word: "paille",
    translations: [{ word: "uusuna" }, { word: "baara" }],
  },
  {
    word: "pain",
    translations: [{ word: "mappana" }, { word: "peŋŋa" }],
  },
  {
    word: "paix",
    translations: [{ word: "heɓpa" }],
  },
  {
    word: "palabre",
    translations: [{ word: "ɓakŋa" }],
  },
  {
    word: "palais",
    translations: [{ word: "yiriɗta" }],
  },
  {
    word: "palissade",
    translations: [{ word: "kaana" }, { word: "kaŋaana" }],
  },
  {
    word: "palmier doum",
    translations: [{ word: "bawra" }],
  },
  {
    word: "fruit de palmier doum",
    translations: [{ word: "kokoɗta" }, { word: "mbitla" }, { word: "ŋgitla" }],
  },
  {
    word: "paludisme",
    translations: [{ word: "paliira" }],
  },
  {
    word: "panier",
    translations: [{ word: "kaalamma" }, { word: "kooliina" }],
  },
  {
    word: "grand panier",
    translations: [{ word: "gelna" }],
  },
  {
    word: "panier pour transporter des grains ou des haricots",
    translations: [{ word: "kalawkalawna" }],
  },
  {
    word: "panier qui est grand et large",
    translations: [{ word: "koolii tamara" }],
  },
  {
    word: "panier qui est long et étroit",
    translations: [{ word: "koolii njufna" }],
  },
  {
    word: "panier utilisé comme couverture en haut d'un grenier",
    translations: [{ word: "jugulina" }],
  },
  {
    word: "panse des ruminants",
    translations: [{ word: "burgusumma" }],
  },
  {
    word: "pantalon",
    translations: [{ word: "pantaloŋŋa" }],
  },
  {
    word: "papa",
    translations: [
      { word: "aɗta" },
      { word: "aɗa" },
      { word: "baba" },
      { word: "bunu" },
    ],
  },
  {
    word: "papaye",
    translations: [{ word: "kosona" }],
  },
  {
    word: "papillon",
    translations: [{ word: "piipiira" }],
  },
  {
    word: "Pâques",
    translations: [{ word: "pakŋa" }],
  },
  {
    word: "paquet",
    translations: [{ word: "pakeɗta" }],
  },
  {
    word: "parabole",
    translations: [{ word: "ndal boyna" }],
  },
  {
    word: "paralysie",
    translations: [{ word: "guguvura" }],
  },
  {
    word: "parasite (nombreux)",
    translations: [{ word: "dagakŋa" }],
  },
  {
    word: "parc",
    translations: [{ word: "kadlaŋga" }],
  },
  {
    word: "parce que",
    translations: [{ word: "kay me" }],
  },
  {
    word: "pardon",
    translations: [{ word: "kamba" }],
  },
  {
    word: "pardonner",
    translations: [
      { word: "bulumba" },
      { word: "daɓpa" },
      { word: "vaɗ cora" },
    ],
  },
  {
    word: "parents",
    translations: [{ word: "semira" }, { word: "somira" }],
  },
  {
    word: "paresse",
    translations: [{ word: "zolomba" }],
  },
  {
    word: "parfum",
    translations: [
      { word: "iɗirna" },
      { word: "urɗina" },
      { word: "mbul ma ɦisna" },
    ],
  },
  {
    word: "parler",
    translations: [{ word: "ɓakka" }, { word: "dira" }, { word: "njaɗta" }],
  },
  {
    word: "parmi",
    translations: [
      {
        word: "duk",
        example: "Nam duk suu doogona",
        exampleTranslation: "Il est parmi les dix personnes",
      },
    ],
  },
  {
    word: "parole",
    translations: [
      { word: "boyna" },
      { word: "vunna" },
      { word: "dira" },
      { word: "ɓakŋa" },
    ],
  },
  {
    word: "partage",
    translations: [{ word: "ɓorowna" }],
  },
  {
    word: "partager",
    translations: [{ word: "ɓorowna" }, { word: "walla" }],
  },
  {
    word: "partie",
    translations: [{ word: "iira" }, { word: "keŋŋa" }],
  },
  {
    word: "partir",
    translations: [{ word: "ira" }, { word: "kalla" }],
  },
  {
    word: "pas encore",
    translations: [
      {
        word: "bay ... tuwa",
        example: "Nam bay mba tuwa",
        exampleTranslation: "Il n’est pas encore arrivé",
      },
    ],
  },
  {
    word: "passé récent",
    translations: [{ word: "goffa" }],
  },
  {
    word: "passer",
    translations: [{ word: "jakka" }],
  },
  {
    word: "passer la journée",
    translations: [{ word: "basara" }, { word: "ci faɗta" }],
  },
  {
    word: "passer la nuit",
    translations: [{ word: "buuna" }],
  },
  {
    word: "pasteur",
    translations: [{ word: "pasterna" }],
  },
  {
    word: "patate douce",
    translations: [{ word: "baŋgawna" }],
  },
  {
    word: "patience",
    translations: [{ word: "juɓpa" }],
  },
  {
    word: "patienter",
    translations: [{ word: "juɓpa" }],
  },
  {
    word: "patte arrière de la sauterelle",
    translations: [{ word: "njalaŋŋa" }],
  },
  {
    word: "paume",
    translations: [{ word: "duɓuk kona" }],
  },
  {
    word: "paupière",
    translations: [{ word: "bak iira" }],
  },
  {
    word: "pauvreté",
    translations: [{ word: "hahawra" }, { word: "hawra" }],
  },
  {
    word: "peau",
    translations: [{ word: "bakka" }],
  },
  {
    word: "pêche",
    translations: [{ word: "ciwna" }],
  },
  {
    word: "péché",
    translations: [{ word: "cora" }, { word: "gaŋawna" }, { word: "sulukŋa" }],
  },
  {
    word: "pêcher",
    translations: [{ word: "ciwna" }],
  },
  {
    word: "pêcheur",
    translations: [{ word: "saa ciwna" }],
  },
  {
    word: "peigne",
    translations: [{ word: "payna" }, { word: "sagana" }],
  },
  {
    word: "peigner",
    translations: [{ word: "sakka" }],
  },
  {
    word: "peler",
    translations: [{ word: "hora" }, { word: "talla" }],
  },
  {
    word: "pélican",
    translations: [{ word: "ɦukŋa" }],
  },
  {
    word: "pelle",
    translations: [{ word: "pelna" }],
  },
  {
    word: "pelotonner",
    translations: [{ word: "ɗuɗta" }, { word: "homba" }],
  },
  {
    word: "se pencher",
    translations: [{ word: "gomoɗta" }, { word: "goɓpa" }],
  },
  {
    word: "pendre",
    translations: [{ word: "gaɓpa" }],
  },
  {
    word: "pénis",
    translations: [{ word: "ɗiwra" }],
  },
  {
    word: "pensée",
    translations: [{ word: "fagaara" }, { word: "saara" }],
  },
  {
    word: "penser",
    translations: [
      { word: "fagaara" },
      { word: "gol tara" },
      { word: "saara" },
    ],
  },
  {
    word: "pépinière",
    translations: [{ word: "tumurura" }],
  },
  {
    word: "perce-oreille",
    translations: [{ word: "ɓarina" }],
  },
  {
    word: "percer",
    translations: [
      { word: "cora" },
      { word: "duɓpa" },
      { word: "furuɗta" },
      { word: "kussa" },
    ],
  },
  {
    word: "percnoptère brun",
    translations: [{ word: "kokolora" }],
  },
  {
    word: "perdition",
    translations: [{ word: "bara" }],
  },
  {
    word: "perdre",
    translations: [{ word: "bara" }, { word: "ɓaɗta" }, { word: "viɗta" }],
  },
  {
    word: "perdrix",
    translations: [{ word: "cegera" }],
  },
  {
    word: "père",
    translations: [{ word: "bura" }],
  },
  {
    word: "période",
    translations: [{ word: "cogira" }],
  },
  {
    word: "perroquet",
    translations: [{ word: "kekelenna" }],
  },
  {
    word: "persécuter",
    translations: [{ word: "lassa" }],
  },
  {
    word: "personne",
    translations: [{ word: "sana" }, { word: "sa warna" }],
  },
  {
    word: "pesanteur",
    translations: [{ word: "nekka" }],
  },
  {
    word: "petitesse",
    translations: [{ word: "geɗeŋga" }, { word: "goora" }],
  },
  {
    word: "un peu",
    translations: [{ word: "ew" }],
  },
  {
    word: "peur",
    translations: [{ word: "ndaana" }],
  },
  {
    word: "peut-être",
    translations: [{ word: "kala" }],
  },
  {
    word: "phacochère",
    translations: [{ word: "zeŋŋa" }],
  },
  {
    word: "photographie",
    translations: [{ word: "fotona" }],
  },
  {
    word: "piac-piac",
    translations: [{ word: "gogolina" }],
  },
  {
    word: "pic",
    translations: [{ word: "koŋgilla" }],
  },
  {
    word: "picorer",
    translations: [{ word: "koɓpa" }],
  },
  {
    word: "pied",
    translations: [{ word: "semma" }],
  },
  {
    word: "piège",
    translations: [{ word: "diŋiɗna" }, { word: "gonoɗna" }],
  },
  {
    word: "piège à antilopes",
    translations: [{ word: "deŋessa" }],
  },
  {
    word: "piège à gros gibier",
    translations: [{ word: "soɗna" }],
  },
  {
    word: "piège à oiseaux",
    translations: [{ word: "dawna" }],
  },
  {
    word: "piège à poisson en entonnoir avec une petite ouverture",
    translations: [{ word: "ɗawyara" }],
  },
  {
    word: "piège à poissons",
    translations: [{ word: "njoɗira" }],
  },
  {
    word: "piège à rats en fer",
    translations: [{ word: "ŋgeɓma" }],
  },
  {
    word: "piège à rats en osier",
    translations: [{ word: "kawalara" }],
  },
  {
    word: "pierre",
    translations: [{ word: "gogoyra" }, { word: "goyra" }, { word: "ɦinira" }],
  },
  {
    word: "pierre à feu",
    translations: [{ word: "keŋŋa" }, { word: "njeleɗna" }],
  },
  {
    word: "pierres utilisées pour soutenir des marmites sur le feu",
    translations: [{ word: "givinna" }],
  },
  {
    word: "piétiner",
    translations: [{ word: "tayra" }],
  },
  {
    word: "pieux qui sont placés autour de la tombe d'un homme influent",
    translations: [{ word: "goɓolna" }],
  },
  {
    word: "pigeon",
    translations: [{ word: "gukka" }],
  },
  {
    word: "pile de lampe de poche",
    translations: [{ word: "ii tossa" }],
  },
  {
    word: "piler",
    translations: [{ word: "cakka" }, { word: "gulukka" }, { word: "liɓpa" }],
  },
  {
    word: "piler dans un mortier en mélangeant avec un peu d'eau",
    translations: [{ word: "ɗara" }],
  },
  {
    word: "piler des fruits dans un mortier",
    translations: [{ word: "kuruɓpa" }],
  },
  {
    word: "piler du mil dans un mortier",
    translations: [{ word: "dura" }],
  },
  {
    word: "pilon",
    translations: [{ word: "goo zuzuna" }],
  },
  {
    word: "piment rouge",
    translations: [{ word: "patlawra" }],
  },
  {
    word: "pinacle d'une hutte",
    translations: [{ word: "asgaa zira" }],
  },
  {
    word: "pince",
    translations: [{ word: "mbomboɗta" }],
  },
  {
    word: "pincer",
    translations: [{ word: "pekka" }],
  },
  {
    word: "pintade",
    translations: [{ word: "garina" }],
  },
  {
    word: "pioche",
    translations: [{ word: "ɗikŋa" }],
  },
  {
    word: "pipe",
    translations: [{ word: "koloŋga" }],
  },
  {
    word: "piquer",
    translations: [
      { word: "cokka" },
      { word: "eɗta" },
      { word: "kussa" },
      { word: "saara" },
    ],
  },
  {
    word: "pirogue",
    translations: [{ word: "lumba" }],
  },
  {
    word: "pirouette",
    translations: [{ word: "cecelekka" }],
  },
  {
    word: "pirouette des femmes aux funérailles",
    translations: [{ word: "gayra" }],
  },
  {
    word: "pirouetter",
    translations: [{ word: "gi gayra" }],
  },
  {
    word: "avoir pitié",
    translations: [{ word: "wi hahawra" }],
  },
  {
    word: "place",
    translations: [{ word: "balamma" }],
  },
  {
    word: "placenta",
    translations: [{ word: "toomma" }],
  },
  {
    word: "partie de placenta",
    translations: [{ word: "ɗeffa" }],
  },
  {
    word: "placer",
    translations: [{ word: "ɗagalla" }],
  },
  {
    word: "plaie",
    translations: [{ word: "mbilna" }],
  },
  {
    word: "se plaindre",
    translations: [{ word: "oyra" }, { word: "yoo tara" }],
  },
  {
    word: "plante",
    translations: [{ word: "duɓuk semma" }],
  },
  {
    word: "plante (sorte de)",
    translations: [{ word: "derekka" }],
  },
  {
    word: "planter",
    translations: [{ word: "pira" }],
  },
  {
    word: "plastron en cuir",
    translations: [{ word: "koroŋŋa" }],
  },
  {
    word: "plat",
    translations: [{ word: "parandina" }, { word: "sufrana" }],
  },
  {
    word: "plateau rond en paille tressée",
    translations: [{ word: "taɓakka" }],
  },
  {
    word: "plâtrer",
    translations: [{ word: "duura" }],
  },
  {
    word: "plâtrer les murs d'une case",
    translations: [{ word: "haɓpa" }],
  },
  {
    word: "Pléiades",
    translations: [{ word: "dumussa" }],
  },
  {
    word: "pleurer",
    translations: [{ word: "tiira" }],
  },
  {
    word: "pleurer le mort aux funérailles",
    translations: [{ word: "tii maɗna" }],
  },
  {
    word: "pleurer sans cesse",
    translations: [{ word: "gun iira" }],
  },
  {
    word: "pleurnicher",
    translations: [{ word: "hitlikka" }],
  },
  {
    word: "pleuvoir",
    translations: [{ word: "sira" }, { word: "yakka" }],
  },
  {
    word: "pleuvoir lourdement",
    translations: [{ word: "cukka" }, { word: "waɗta" }],
  },
  {
    word: "pleuvoir sans cesse",
    translations: [{ word: "bissa" }],
  },
  {
    word: "plier",
    translations: [{ word: "homba" }, { word: "kara" }],
  },
  {
    word: "plonger",
    translations: [{ word: "tluɓpa" }],
  },
  {
    word: "plume",
    translations: [{ word: "tlimiɗta" }],
  },
  {
    word: "plus",
    translations: [
      {
        word: "saɓak",
        example: "Nam co saɓaki",
        exampleTranslation: "Il est plus mauvais",
      },
    ],
  },
  {
    word: "plutôt",
    translations: [
      {
        word: "ɗow",
        example: "Nam hin mba ni vin tuwa",
        exampleTranslation: "Il viendra plutôt demain",
      },
    ],
  },
  {
    word: "pneu",
    translations: [{ word: "pinina" }],
  },
  {
    word: "poche",
    translations: [{ word: "ŋgil barawna" }, { word: "posna" }],
  },
  {
    word: "poids",
    translations: [{ word: "nekka" }],
  },
  {
    word: "poignée du bouclier",
    translations: [{ word: "dumina" }],
  },
  {
    word: "poignarder",
    translations: [{ word: "cokka" }],
  },
  {
    word: "poignet",
    translations: [{ word: "del kona" }],
  },
  {
    word: "poil",
    translations: [{ word: "tumussa" }, { word: "tlimiɗta" }],
  },
  {
    word: "poinçon",
    translations: [{ word: "lelewna" }, { word: "lewnena" }],
  },
  {
    word: "poinçon utilisé pour nettoyer une pipe",
    translations: [{ word: "veveɗna" }],
  },
  {
    word: "poing",
    translations: [{ word: "goɗoɓoŋga" }],
  },
  {
    word: "pointe",
    translations: [{ word: "pondina" }],
  },
  {
    word: "points de beauté",
    translations: [{ word: "cayra" }],
  },
  {
    word: "pois chiche",
    translations: [{ word: "zoy eŋga" }],
  },
  {
    word: "poison",
    translations: [{ word: "kumuna" }],
  },
  {
    word: "poisson",
    translations: [{ word: "kulufna" }],
  },
  {
    word: "poisson torpille",
    translations: [{ word: "lumunda" }],
  },
  {
    word: "poitrine",
    translations: [{ word: "gu dikŋa" }, { word: "ŋgaffa" }],
  },
  {
    word: "polir",
    translations: [{ word: "saɗta" }, { word: "guluɗta" }],
  },
  {
    word: "pomme d'Adam",
    translations: [{ word: "hoo della" }],
  },
  {
    word: "pompe à bicyclette",
    translations: [{ word: "pomba" }],
  },
  {
    word: "pont",
    translations: [{ word: "yam mbura" }],
  },
  {
    word: "porc",
    translations: [{ word: "kosoŋŋa" }],
  },
  {
    word: "porc-épic",
    translations: [{ word: "jikŋa" }],
  },
  {
    word: "porte",
    translations: [{ word: "bakŋa" }, { word: "cogoromma" }],
  },
  {
    word: "porter",
    translations: [{ word: "ŋgomba" }, { word: "tlira" }, { word: "ziira" }],
  },
  {
    word: "porter sur le dos",
    translations: [{ word: "giɗta" }],
  },
  {
    word: "portion",
    translations: [{ word: "iira" }, { word: "keŋŋa" }],
  },
  {
    word: "poser",
    translations: [{ word: "tinda" }],
  },
  {
    word: "pot en verre",
    translations: [{ word: "damzaana" }],
  },
  {
    word: "morceau de poterie cassée",
    translations: [{ word: "dliŋgiɗta" }],
  },
  {
    word: "morceau de vieille poterie",
    translations: [{ word: "kaŋiina" }],
  },
  {
    word: "accepter des pots-de-vin",
    translations: [{ word: "vi ŋgomba" }],
  },
  {
    word: "pou",
    translations: [{ word: "ndaara" }],
  },
  {
    word: "poule",
    translations: [{ word: "tlekka" }],
  },
  {
    word: "poumon de chèvre",
    translations: [{ word: "bufu fuluuna" }],
  },
  {
    word: "poumons",
    translations: [{ word: "barvakŋa" }],
  },
  {
    word: "pour",
    translations: [
      {
        word: "a",
        example: "Nam hal va a tiya",
        exampleTranslation: "Il cherche quelque chose pour manger",
      },
      {
        word: "kay",
        example: "Ni kay tam dew",
        exampleTranslation: "C’est pour lui seul",
      },
      {
        word: "maŋ",
        example: "Ni maŋ wayamma",
        exampleTranslation: "C’est pour son frère",
      },
    ],
  },
  {
    word: "pour toujours",
    translations: [{ word: "fafaɗta" }],
  },
  {
    word: "pourquoi",
    translations: [
      {
        word: "kay me",
        example: "Kay me ge?",
        exampleTranslation: "Pourquoi?",
      },
      { word: "a mege" },
    ],
  },
  {
    word: "pourrir",
    translations: [{ word: "bura" }, { word: "cimba" }, { word: "dlayra" }],
  },
  {
    word: "poursuite",
    translations: [{ word: "gaara" }],
  },
  {
    word: "poursuivre",
    translations: [{ word: "cuɗta" }, { word: "gaara" }],
  },
  {
    word: "poursuivre en justice",
    translations: [{ word: "duura" }, { word: "sekka" }],
  },
  {
    word: "pousse",
    translations: [{ word: "gogoɗta" }],
  },
  {
    word: "pousser",
    translations: [
      { word: "dayra" },
      { word: "ɗuffa" },
      { word: "sira" },
      { word: "wulla" },
      { word: "zuɗta" },
    ],
  },
  {
    word: "pousses de sorgho",
    translations: [
      { word: "ciŋgiɗna" },
      { word: "ŋgiɗna" },
      { word: "ŋgiina" },
    ],
  },
  {
    word: "poussière",
    translations: [{ word: "gugumma" }],
  },
  {
    word: "poussière du mil pilé",
    translations: [{ word: "barra" }],
  },
  {
    word: "poutre transversale d'un abri",
    translations: [{ word: "mbalna" }],
  },
  {
    word: "poutre transversale d'un banc",
    translations: [{ word: "galaŋŋa" }, { word: "laarana" }],
  },
  {
    word: "pouvoir",
    translations: [{ word: "wira" }, { word: "tewra" }],
  },
  {
    word: "préférer",
    translations: [
      {
        word: "min su",
        example: "Nam min mbiira suu sayna",
        exampleTranslation: "Il préfère le lait plus que le thé",
      },
    ],
  },
  {
    word: "premier",
    translations: [
      { word: "gigiŋga" },
      { word: "ma jewna" },
      { word: "ma fokŋa" },
    ],
  },
  {
    word: "prendre",
    translations: [
      { word: "tayra" },
      { word: "tlira" },
      { word: "vira" },
      { word: "yowra" },
    ],
  },
  {
    word: "prendre la place de l'autre",
    translations: [{ word: "varakka" }],
  },
  {
    word: "prendre par force",
    translations: [{ word: "ɓaɗta" }],
  },
  {
    word: "prendre soin de",
    translations: [{ word: "ossa" }, { word: "golla" }],
  },
  {
    word: "préparer",
    translations: [{ word: "minda" }],
  },
  {
    word: "préparer la boule",
    translations: [{ word: "yira" }],
  },
  {
    word: "prépuce",
    translations: [{ word: "bak ɗiwra" }],
  },
  {
    word: "près de",
    translations: [
      {
        word: "ek",
        example: "Ndaɗ col ek njuvuɗ tok",
        exampleTranslation: "Elle est restée près de son mari",
      },
    ],
  },
  {
    word: "presser",
    translations: [{ word: "emba" }],
  },
  {
    word: "prêter",
    translations: [{ word: "ka balla" }],
  },
  {
    word: "prêtre",
    translations: [{ word: "perna" }],
  },
  {
    word: "prévenir",
    translations: [{ word: "doora" }, { word: "nera" }],
  },
  {
    word: "prier",
    translations: [{ word: "cenda" }, { word: "saɗawra" }],
  },
  {
    word: "prière",
    translations: [{ word: "cenda" }, { word: "saɗawra" }],
  },
  {
    word: "prison",
    translations: [{ word: "daŋgayna" }],
  },
  {
    word: "prix",
    translations: [{ word: "gussa" }, { word: "suŋgura" }],
  },
  {
    word: "prix payé pour une mariée",
    translations: [{ word: "begena" }],
  },
  {
    word: "produire abondamment",
    translations: [{ word: "dotloora" }],
  },
  {
    word: "profit",
    translations: [{ word: "mboona" }, { word: "yona" }, { word: "yoona" }],
  },
  {
    word: "profondeur",
    translations: [{ word: "feekka" }],
  },
  {
    word: "se promener",
    translations: [{ word: "poyra" }],
  },
  {
    word: "prostituée",
    translations: [{ word: "gawlaŋga" }],
  },
  {
    word: "protecteur",
    translations: [{ word: "salanna" }],
  },
  {
    word: "protéger",
    translations: [{ word: "doora" }],
  },
  {
    word: "protoptère",
    translations: [{ word: "soyra" }],
  },
  {
    word: "proverbe",
    translations: [{ word: "ndal boyna" }],
  },
  {
    word: "pubis",
    translations: [{ word: "digiina" }],
  },
  {
    word: "puce",
    translations: [{ word: "yalira" }],
  },
  {
    word: "puer",
    translations: [{ word: "hissa" }],
  },
  {
    word: "puiser",
    translations: [{ word: "gora" }],
  },
  {
    word: "puissance",
    translations: [{ word: "bayna" }, { word: "saɓakŋa" }],
  },
  {
    word: "puits",
    translations: [{ word: "goloŋga" }, { word: "kaara" }],
  },
  {
    word: "puits bas-fond",
    translations: [{ word: "deena" }, { word: "ɦorokŋa" }],
  },
  {
    word: "pupille",
    translations: [{ word: "wawal iira" }, { word: "wal iira" }],
  },
  {
    word: "être pur",
    translations: [{ word: "ɗigilla" }],
  },
  {
    word: "purée",
    translations: [{ word: "lora" }],
  },
  {
    word: "purée de haricot",
    translations: [{ word: "duruɓira" }],
  },
  {
    word: "pureté",
    translations: [{ word: "ɗigilira" }],
  },
  {
    word: "pus",
    translations: [{ word: "loora" }],
  },
  {
    word: "python de Séba",
    translations: [{ word: "muɗuura" }],
  },
  {
    word: "python royal",
    translations: [{ word: "titikka" }],
  },

  // // q entree dictionnaire
  {
    word: "quand",
    translations: [{ word: "saɓa" }],
  },
  {
    word: "quarante",
    translations: [{ word: "dok fiɗi" }],
  },
  {
    word: "quatre",
    translations: [{ word: "fiɗi" }],
  },
  {
    word: "quatre-vingt",
    translations: [{ word: "dok kalavandi" }],
  },
  {
    word: "quatre-vingt-dix",
    translations: [{ word: "dok dleeŋe" }],
  },
  {
    word: "que",
    translations: [
      {
        word: "an",
        example: "Nam saa ana nam hin mbaa",
        exampleTranslation: "Il pense qu’il viendra",
      },
      { word: "ana" },
    ],
  },
  {
    word: "que (en début de phrase)",
    translations: [
      {
        word: "ko",
        example: "Ko Lona njunuŋu",
        exampleTranslation: "Que Dieu t’aide",
      },
    ],
  },
  {
    word: "quelque",
    translations: [
      {
        word: "ɦiw",
        example: "Suu ɦiw hin mbaa",
        exampleTranslation: "Quelques uns viendront",
      },
    ],
  },
  {
    word: "quelque chose",
    translations: [
      {
        word: "vana",
        example: "Nam hal vaa",
        exampleTranslation: "Il cherche quelque chose",
      },
    ],
  },
  {
    word: "quelqu'un",
    translations: [
      {
        word: "gi ge lay",
        example: "ɗowba gi ge lay hin mbaa",
        exampleTranslation: "Quelqu’un viendra",
      },
      {
        word: "sa",
        example: "Sa hin mbaa",
        exampleTranslation: "Quelqu’un viendra",
      },
    ],
  },
  {
    word: "querelle",
    translations: [{ word: "honira" }, { word: "jeregekŋa" }],
  },
  {
    word: "queue",
    translations: [{ word: "njawra" }],
  },
  {
    word: "qui",
    translations: [
      {
        word: "gi",
        example: "Ni gi ge?",
        exampleTranslation: "C’est qui?",
      },
    ],
  },
  {
    word: "quoi",
    translations: [
      {
        word: "me",
        example: "Ni me ge?",
        exampleTranslation: "C’est quoi?",
      },
    ],
  },
  {
    word: "quoique",
    translations: [
      {
        word: "mege lay",
        example: "Li ni an me ge lay ni, nam hin hoɗ ay tani",
        exampleTranslation: "Quoiqu’il fasse, il reviendra ici",
      },
    ],
  },

  // // // r entree dictionnaire
  {
    word: "raboter",
    translations: [{ word: "saɗta" }, { word: "talakka" }],
  },
  {
    word: "racine",
    translations: [{ word: "sarina" }, { word: "saɗina" }],
  },
  {
    word: "racler",
    translations: [{ word: "holoɗta" }, { word: "ɦirikka" }],
  },
  {
    word: "raconter",
    translations: [{ word: "cuɗta" }],
  },
  {
    word: "radio",
    translations: [{ word: "radiyona" }],
  },
  {
    word: "ramasser",
    translations: [{ word: "vaara" }, { word: "yowra" }],
  },
  {
    word: "ramper",
    translations: [{ word: "daramba" }, { word: "ɦaramba" }],
  },
  {
    word: "rancune",
    translations: [{ word: "gonokka" }, { word: "yoomussa" }],
  },
  {
    word: "rangée",
    translations: [{ word: "darra" }],
  },
  {
    word: "rappeler",
    translations: [{ word: "gi humba" }],
  },
  {
    word: "avoir des rapports avec une femme",
    translations: [{ word: "unda" }, { word: "buu u" }],
  },
  {
    word: "rapprocher",
    translations: [{ word: "jakka" }, { word: "ɦeɓ duk" }],
  },
  {
    word: "raser",
    translations: [{ word: "wella" }, { word: "koora" }],
  },
  {
    word: "rassasier",
    translations: [{ word: "hoɓpa" }],
  },
  {
    word: "rassembler",
    translations: [{ word: "molla" }, { word: "taara" }, { word: "taɓpa" }],
  },
  {
    word: "rassembler du bois pour faire un fagot",
    translations: [{ word: "njun guna" }],
  },
  {
    word: "rassembler en troupeau",
    translations: [{ word: "koɗta" }, { word: "taara" }],
  },
  {
    word: "se rassembler",
    translations: [{ word: "ci yamba" }, { word: "lakka" }],
  },
  {
    word: "râteau",
    translations: [{ word: "ratona" }],
  },
  {
    word: "rayon de miel",
    translations: [{ word: "si yumma" }],
  },
  {
    word: "recevoir",
    translations: [{ word: "fira" }],
  },
  {
    word: "récolte",
    translations: [{ word: "feɗta" }],
  },
  {
    word: "récolter",
    translations: [{ word: "feɗta" }],
  },
  {
    word: "réconforter",
    translations: [{ word: "ɗilla" }, { word: "soo huuna" }],
  },
  {
    word: "reculer",
    translations: [{ word: "dagaara" }, { word: "ŋgaara" }],
  },
  {
    word: "redresser",
    translations: [{ word: "ɗegee" }, { word: "ɗoɓ" }],
  },
  {
    word: "réfléchir",
    translations: [
      { word: "gol tara" },
      { word: "saara" },
      { word: "jeɓeera" },
    ],
  },
  {
    word: "refus d’obéir",
    translations: [{ word: "ŋgaŋgaɗta" }],
  },
  {
    word: "regarder",
    translations: [{ word: "golla" }, { word: "beleera" }],
  },
  {
    word: "regarder avec attention",
    translations: [
      {
        word: "ɓal iira kay",
        example: "Nam ɓal irim kay sa namma",
        exampleTranslation: "Il a fixé le regard sur cet homme",
      },
    ],
  },
  {
    word: "regarder avec discrétion",
    translations: [{ word: "ci polira" }],
  },
  {
    word: "regarder fixement",
    translations: [{ word: "ŋgarassa" }],
  },
  {
    word: "règles",
    translations: [{ word: "saŋŋa" }],
  },
  {
    word: "avoir ses règles",
    translations: [{ word: "fi busuna" }, { word: "saŋ" }],
  },
  {
    word: "régner",
    translations: [{ word: "ti mulla" }],
  },
  {
    word: "regretter",
    translations: [{ word: "haɗta" }],
  },
  {
    word: "rein",
    translations: [{ word: "gilissa" }],
  },
  {
    word: "rejeter",
    translations: [{ word: "zuɗta" }],
  },
  {
    word: "réjouissance",
    translations: [{ word: "furira" }],
  },
  {
    word: "remboursement",
    translations: [{ word: "warakŋa" }],
  },
  {
    word: "remercier",
    translations: [{ word: "gi deɓpa" }],
  },
  {
    word: "remettre un os",
    translations: [{ word: "jak sokŋa" }, { word: "gi sokŋa" }],
  },
  {
    word: "remplacer",
    translations: [{ word: "varakka" }],
  },
  {
    word: "remplir",
    translations: [{ word: "hoɓpa" }, { word: "ɦenda" }, { word: "oyra" }],
  },
  {
    word: "remuer",
    translations: [{ word: "gasira" }, { word: "geŋeɗta" }],
  },
  {
    word: "rencontrer",
    translations: [{ word: "ŋgaffa" }],
  },
  {
    word: "renforcer",
    translations: [{ word: "gissa" }],
  },
  {
    word: "renfort",
    translations: [{ word: "ɓaraŋga" }],
  },
  {
    word: "renifler",
    translations: [{ word: "taɗta" }],
  },
  {
    word: "renverser",
    translations: [{ word: "kora" }],
  },
  {
    word: "renvoyer",
    translations: [{ word: "dikka" }],
  },
  {
    word: "répandre",
    translations: [{ word: "njayra" }],
  },
  {
    word: "réparer",
    translations: [{ word: "minda" }, { word: "koɗta" }],
  },
  {
    word: "répéter",
    translations: [{ word: "dokka" }, { word: "tagaɗta" }],
  },
  {
    word: "répétition",
    translations: [{ word: "dokka" }],
  },
  {
    word: "répondre",
    translations: [{ word: "hoɗ dira" }, { word: "hoŋ dira" }],
  },
  {
    word: "se reposer",
    translations: [{ word: "koɗta" }],
  },
  {
    word: "réprimande",
    translations: [{ word: "gaɗta" }, { word: "yalla" }],
  },
  {
    word: "réprimander",
    translations: [{ word: "gaɗta" }, { word: "yalla" }, { word: "bayra" }],
  },
  {
    word: "résidu",
    translations: [{ word: "njagina" }],
  },
  {
    word: "résidu du sel fabriqué de tiges de mil",
    translations: [{ word: "tumuɗta" }],
  },
  {
    word: "résidu qui reste dans le tamis",
    translations: [{ word: "yam njekŋa" }],
  },
  {
    word: "résonner",
    translations: [{ word: "tiira" }],
  },
  {
    word: "respecter",
    translations: [{ word: "hal ŋgara" }],
  },
  {
    word: "respiration",
    translations: [{ word: "musukka" }],
  },
  {
    word: "respirer",
    translations: [{ word: "musukka" }],
  },
  {
    word: "respirer avec difficulté",
    translations: [{ word: "heleffa" }],
  },
  {
    word: "prendre responsabilité",
    translations: [{ word: "ziira" }],
  },
  {
    word: "ressembler",
    translations: [
      {
        word: "tli tara",
        example: "Nam tli tam u bumu",
        exampleTranslation: "Il ressemble à son père",
      },
    ],
  },
  {
    word: "reste",
    translations: [{ word: "ura" }],
  },
  {
    word: "rester",
    translations: [{ word: "aara" }, { word: "hinda" }],
  },
  {
    word: "restes",
    translations: [{ word: "soɗna" }],
  },
  {
    word: "retour",
    translations: [{ word: "hoŋga" }, { word: "hoɗta" }],
  },
  {
    word: "retourner",
    translations: [{ word: "hoŋga" }, { word: "hoɗta" }],
  },
  {
    word: "réunion",
    translations: [{ word: "tokka" }],
  },
  {
    word: "réunion religieuse",
    translations: [{ word: "njaɓara" }],
  },
  {
    word: "réunir",
    translations: [{ word: "taɓpa" }, { word: "tokka" }],
  },
  {
    word: "réussir",
    translations: [{ word: "camba" }],
  },
  {
    word: "rêve",
    translations: [{ word: "doyra" }],
  },
  {
    word: "réveiller",
    translations: [{ word: "dliɗta" }],
  },
  {
    word: "revenir",
    translations: [{ word: "hoŋga" }, { word: "hoɗta" }],
  },
  {
    word: "rêver",
    translations: [{ word: "doyra di" }],
  },
  {
    word: "rhinocéros",
    translations: [{ word: "gayra" }],
  },
  {
    word: "rhumatisme aux poignets",
    translations: [{ word: "geŋleŋŋa" }],
  },
  {
    word: "rhume",
    translations: [{ word: "doyra" }],
  },
  {
    word: "devenir riche",
    translations: [{ word: "lawra" }],
  },
  {
    word: "être riche, devenir riche",
    translations: [{ word: "ɦissa" }],
  },
  {
    word: "richesse",
    translations: [{ word: "begera" }, { word: "genewra" }, { word: "ɦissa" }],
  },
  {
    word: "rideau",
    translations: [{ word: "gonjolina" }],
  },
  {
    word: "ridiculiser",
    translations: [{ word: "sanda" }],
  },
  {
    word: "rincement",
    translations: [{ word: "kotla" }],
  },
  {
    word: "rincer",
    translations: [{ word: "kotla" }, { word: "curuɓpa" }],
  },
  {
    word: "rire",
    translations: [{ word: "sanda" }],
  },
  {
    word: "haute rive",
    translations: [{ word: "ɦoŋŋa" }],
  },
  {
    word: "rivière",
    translations: [{ word: "lokka" }],
  },
  {
    word: "riz",
    translations: [
      { word: "ŋgilisina" },
      { word: "risna" },
      { word: "wirisna" },
    ],
  },
  {
    word: "riz cuit",
    translations: [{ word: "ŋgasina" }],
  },
  {
    word: "robe",
    translations: [{ word: "goɓoɗta" }],
  },
  {
    word: "roc",
    translations: [{ word: "ɦinira" }],
  },
  {
    word: "rognon",
    translations: [{ word: "gilissa" }],
  },
  {
    word: "rompre",
    translations: [{ word: "mbulukka" }],
  },
  {
    word: "rompre une alliance ou une amitié",
    translations: [{ word: "bussa" }],
  },
  {
    word: "ronfler",
    translations: [{ word: "ɦoora" }],
  },
  {
    word: "ronger",
    translations: [{ word: "hayra" }],
  },
  {
    word: "rongeur",
    translations: [{ word: "sisilira" }],
  },
  {
    word: "ronier",
    translations: [{ word: "manawna" }],
  },
  {
    word: "rosée",
    translations: [{ word: "mbaɗagiira" }],
  },
  {
    word: "roter",
    translations: [{ word: "gitla" }],
  },
  {
    word: "rôtir",
    translations: [{ word: "cuffa" }, { word: "hawra" }],
  },
  {
    word: "rougeole",
    translations: [{ word: "keesena" }, { word: "kersena" }],
  },
  {
    word: "rougeur",
    translations: [{ word: "tlawra" }],
  },
  {
    word: "rougir",
    translations: [{ word: "ka kura" }, { word: "gi tlawra" }],
  },
  {
    word: "rouler",
    translations: [{ word: "ɗuɗta" }],
  },
  {
    word: "rouler dans la poussière",
    translations: [{ word: "bulumba" }],
  },
  {
    word: "roussette",
    translations: [{ word: "jujugumma" }],
  },
  {
    word: "route",
    translations: [{ word: "bulna" }, { word: "voɗta" }],
  },
  {
    word: "ruche",
    translations: [{ word: "zi yumma" }],
  },
  {
    word: "ruer",
    translations: [{ word: "njeɗta" }],
  },
  {
    word: "rugir",
    translations: [{ word: "ŋgoɓpa" }],
  },
  {
    word: "rugissement",
    translations: [{ word: "ŋgomba" }, { word: "ŋgoɓpa" }],
  },
  {
    word: "ruine",
    translations: [{ word: "ɓeŋga" }, { word: "ɓelekka" }],
  },
  {
    word: "ruiner",
    translations: [
      { word: "ɓeŋga" },
      { word: "ɓelekka" },
      { word: "ndi kaŋga" },
    ],
  },
  {
    word: "ruminant sauvage",
    translations: [{ word: "zaana" }],
  },
  {
    word: "ruminer",
    translations: [
      { word: "degeɗta" },
      { word: "hoɗ haɗna" },
      { word: "tegeɗta" },
    ],
  },

  // // // s entree dictionnaire
  {
    word: "sable",
    translations: [{ word: "buɗufna" }, { word: "lesna" }, { word: "ŋgetlna" }],
  },
  {
    word: "sac",
    translations: [
      { word: "birimma" },
      { word: "mbumbuna" },
      { word: "sakŋa" },
      { word: "sawalna" },
    ],
  },
  {
    word: "sacrifice",
    translations: [{ word: "ɓi vunna" }, { word: "togolla" }],
  },
  {
    word: "faire un sacrifice",
    translations: [{ word: "ɓi vunna" }, { word: "togolla" }],
  },
  {
    word: "sagesse",
    translations: [{ word: "nera" }],
  },
  {
    word: "saigner",
    translations: [{ word: "cuɗta" }],
  },
  {
    word: "Saint-Esprit",
    translations: [{ word: "Musuk Lonara" }],
  },
  {
    word: "saisir",
    translations: [
      { word: "vira" },
      { word: "kawra" },
      { word: "mbekka" },
      { word: "nduk kona" },
      { word: "bowra" },
    ],
  },
  {
    word: "saisir avec des pinces",
    translations: [{ word: "mboɗta" }],
  },
  {
    word: "saison",
    translations: [{ word: "tilna" }],
  },
  {
    word: "saison chaude pendant mars et avril",
    translations: [{ word: "ɗuuguna" }],
  },
  {
    word: "saison des pluies",
    translations: [{ word: "ndolla" }, { word: "til ndolla" }],
  },
  {
    word: "saison sèche",
    translations: [{ word: "til walla" }, { word: "walla" }],
  },
  {
    word: "salaire",
    translations: [{ word: "warakŋa" }],
  },
  {
    word: "saleté",
    translations: [{ word: "galakka" }, { word: "zozoɗta" }],
  },
  {
    word: "salir",
    translations: [{ word: "gossa" }, { word: "zoɗta" }],
  },
  {
    word: "salive",
    translations: [{ word: "yoyoona" }],
  },
  {
    word: "saliver avant de vomir",
    translations: [{ word: "vunna em" }],
  },
  {
    word: "saluer",
    translations: [{ word: "gi deɓpa" }],
  },
  {
    word: "salut",
    translations: [{ word: "suɗta" }],
  },
  {
    word: "salutation",
    translations: [{ word: "deɓpa" }],
  },
  {
    word: "samedi",
    translations: [{ word: "samadi" }],
  },
  {
    word: "sang",
    translations: [{ word: "busuna" }],
  },
  {
    word: "sangsue",
    translations: [{ word: "ndandaliira" }],
  },
  {
    word: "sans",
    translations: [{ word: "bay" }],
  },
  {
    word: "sarclage",
    translations: [{ word: "horokŋa" }, { word: "kuruffa" }, { word: "jara" }],
  },
  {
    word: "sarcler",
    translations: [{ word: "horokŋa" }, { word: "kuruffa" }],
  },
  {
    word: "sarcler un champ",
    translations: [{ word: "ja ŋgoyna" }],
  },
  {
    word: "sauce",
    translations: [{ word: "mbalara" }],
  },
  {
    word: "saupoudrer",
    translations: [{ word: "faɗta" }],
  },
  {
    word: "sauter",
    translations: [{ word: "weɗta" }],
  },
  {
    word: "sauterelle",
    translations: [{ word: "baara" }, { word: "dladlakŋa" }],
  },
  {
    word: "sauver",
    translations: [{ word: "suɗta" }],
  },
  {
    word: "saveur succulente",
    translations: [{ word: "hinikka" }, { word: "yulumba" }],
  },
  {
    word: "savoir",
    translations: [{ word: "wira" }],
  },
  {
    word: "savon",
    translations: [{ word: "sabunna" }],
  },
  {
    word: "scie",
    translations: [{ word: "siina" }],
  },
  {
    word: "scorpion",
    translations: [{ word: "huuɗura" }],
  },
  {
    word: "seau",
    translations: [{ word: "soona" }],
  },
  {
    word: "sécher",
    translations: [{ word: "saɗta" }, { word: "sora" }],
  },
  {
    word: "sécher des graines à côté d'un feu",
    translations: [{ word: "haɗta" }],
  },
  {
    word: "sécheresse",
    translations: [{ word: "kerna" }],
  },
  {
    word: "secco",
    translations: [{ word: "heena" }],
  },
  {
    word: "secco où on met de la nourriture",
    translations: [{ word: "ɗiiwilla" }],
  },
  {
    word: "secco rond",
    translations: [{ word: "ɗumurukka" }],
  },
  {
    word: "secco utilisé comme un rideau dans l'encadrement de la porte",
    translations: [{ word: "farfarra" }],
  },
  {
    word: "secouer",
    translations: [{ word: "galaŋga" }, { word: "kisikka" }, { word: "pora" }],
  },
  {
    word: "secouer la tête",
    translations: [{ word: "kisik yamba" }],
  },
  {
    word: "secret",
    translations: [{ word: "newna" }],
  },
  {
    word: "sein",
    translations: [{ word: "pona" }],
  },
  {
    word: "séjourner",
    translations: [{ word: "buura" }],
  },
  {
    word: "sel",
    translations: [{ word: "vuvuna" }],
  },
  {
    word: "sel raffiné",
    translations: [{ word: "vuvu waawna" }, { word: "waawna" }],
  },
  {
    word: "sel rouge",
    translations: [{ word: "vuvu galakka" }],
  },
  {
    word: "sélection",
    translations: [{ word: "manda" }, { word: "vaara" }],
  },
  {
    word: "selle",
    translations: [{ word: "dlamba" }],
  },
  {
    word: "les selles",
    translations: [{ word: "soɗna" }],
  },
  {
    word: "semaine",
    translations: [{ word: "damassa" }, { word: "sukŋa" }],
  },
  {
    word: "sembler",
    translations: [{ word: "golla" }, { word: "tli tara" }],
  },
  {
    word: "semence",
    translations: [{ word: "zaara" }],
  },
  {
    word: "semer",
    translations: [{ word: "ɦassa" }, { word: "zaara" }],
  },
  {
    word: "semer la discorde",
    translations: [{ word: "ceɓeɗta" }],
  },
  {
    word: "semer en éparpillant",
    translations: [{ word: "bukka" }, { word: "waɗta" }],
  },
  {
    word: "sentier",
    translations: [{ word: "voɗta" }],
  },
  {
    word: "sentir",
    translations: [{ word: "hissa" }],
  },
  {
    word: "séparer",
    translations: [{ word: "hawra" }, { word: "hololla" }, { word: "walla" }],
  },
  {
    word: "se séparer",
    translations: [{ word: "garakka" }],
  },
  {
    word: "sept",
    translations: [{ word: "kiɗisiya" }],
  },
  {
    word: "serment",
    translations: [{ word: "suura" }],
  },
  {
    word: "sermon",
    translations: [{ word: "bolla" }],
  },
  {
    word: "serpent",
    translations: [{ word: "guyna" }],
  },
  {
    word: "serrer",
    translations: [{ word: "emba" }, { word: "ɦeɓpa" }, { word: "ŋguruffa" }],
  },
  {
    word: "serrer le poing",
    translations: [{ word: "dumba" }],
  },
  {
    word: "serval",
    translations: [{ word: "cegemcegemba" }],
  },
  {
    word: "serviette mise sur le repas avant de le servir",
    translations: [{ word: "naɓpa" }],
  },
  {
    word: "servir",
    translations: [{ word: "sunda" }],
  },
  {
    word: "serviteur",
    translations: [{ word: "gaŋŋa" }, { word: "saa sunda" }],
  },
  {
    word: "sésame blanc",
    translations: [{ word: "dagalawna" }],
  },
  {
    word: "sésame rouge",
    translations: [{ word: "ɗeewera" }],
  },
  {
    word: "seul",
    translations: [{ word: "hol" }],
  },
  {
    word: "seule",
    translations: [{ word: "dew" }],
  },
  {
    word: "seulement",
    translations: [
      {
        word: "bas",
        example: "An hoŋ ay ni vin bas",
        exampleTranslation: "Je reviens demain seulement",
      },
      {
        word: "dew daŋ",
        example: "An min goo ndaɗta dew daŋ",
        exampleTranslation: "J’aime seulement cette fille",
      },
      {
        word: "ɦawa",
        example: "Nam li sunda ni u kom ɦawa",
        exampleTranslation: "Il travaille seulement avec les mains",
      },
    ],
  },
  {
    word: "sève",
    translations: [{ word: "daɓaŋga" }, { word: "tiina" }],
  },
  {
    word: "siffler",
    translations: [{ word: "feɗta" }, { word: "soora" }],
  },
  {
    word: "signaler avec la main",
    translations: [{ word: "feɗekka" }],
  },
  {
    word: "signature",
    translations: [{ word: "sentirna" }],
  },
  {
    word: "signe",
    translations: [{ word: "takka" }],
  },
  {
    word: "similarité",
    translations: [{ word: "ndarana" }, { word: "tlira tli tara" }],
  },
  {
    word: "singe",
    translations: [{ word: "viina" }],
  },
  {
    word: "singe jeune",
    translations: [{ word: "vii kokora" }],
  },
  {
    word: "singe mâle dominant",
    translations: [{ word: "vii gaɓalina" }],
  },
  {
    word: "singe rouge",
    translations: [{ word: "vii tlawna" }],
  },
  {
    word: "six",
    translations: [{ word: "kargiya" }],
  },
  {
    word: "soi",
    translations: [{ word: "tara" }],
  },
  {
    word: "soif",
    translations: [{ word: "laara" }],
  },
  {
    word: "soir (les heures entre l'après-midi et le crépuscule)",
    translations: [{ word: "fiɗigira" }],
  },
  {
    word: "soixante",
    translations: [{ word: "dok kargiya" }],
  },
  {
    word: "soixante-dix",
    translations: [{ word: "dok kiɗisiya" }],
  },
  {
    word: "soja",
    translations: [{ word: "sojana" }],
  },
  {
    word: "soldat",
    translations: [{ word: "asgaana" }],
  },
  {
    word: "soleil",
    translations: [{ word: "faɗta" }],
  },
  {
    word: "solidité",
    translations: [{ word: "dereŋga" }, { word: "eŋga" }],
  },
  {
    word: "sommeil",
    translations: [{ word: "senna" }],
  },
  {
    word: "son du grain",
    translations: [{ word: "banana" }],
  },
  {
    word: "sorcellerie",
    translations: [{ word: "dawra" }, { word: "kumuna" }],
  },
  {
    word: "pousses de sorgho utilisé pour préparer des boissons",
    translations: [
      { word: "ciŋgiɗna" },
      { word: "ŋgiɗna" },
      { word: "ŋgiina" },
    ],
  },
  {
    word: "sorgho (variété de)",
    translations: [
      { word: "borokka" },
      { word: "diriŋga" },
      { word: "doŋloŋŋa" },
      { word: "ɗawyara" },
      { word: "gaarana" },
      { word: "gagaɓana" },
      { word: "galaŋŋa" },
      { word: "gurumba" },
      { word: "jeɗeŋŋa" },
      { word: "jella" },
      { word: "korna" },
      { word: "ndawna" },
      { word: "weleerena" },
    ],
  },
  {
    word: "sortir",
    translations: [{ word: "kalla" }, { word: "sella" }, { word: "cukka" }],
  },
  {
    word: "sot",
    translations: [{ word: "saa lafaɗina" }],
  },
  {
    word: "sottise",
    translations: [
      { word: "davaɗta" },
      { word: "giniŋga" },
      { word: "puluɗta" },
    ],
  },
  {
    word: "souffle",
    translations: [{ word: "musukka" }],
  },
  {
    word: "souffler",
    translations: [{ word: "bura" }, { word: "fora" }],
  },
  {
    word: "soufflet",
    translations: [{ word: "vugumma" }],
  },
  {
    word: "fonctionner le soufflet",
    translations: [{ word: "bura" }],
  },
  {
    word: "souffrance",
    translations: [
      { word: "cuvuɗna" },
      { word: "wi hawra" },
      { word: "ndakka" },
    ],
  },
  {
    word: "soulever",
    translations: [{ word: "cukka" }, { word: "poŋga" }, { word: "taɗta" }],
  },
  {
    word: "soupçonner",
    translations: [{ word: "ŋgisiɗta" }],
  },
  {
    word: "soupe",
    translations: [{ word: "suɓpa" }],
  },
  {
    word: "soupirer",
    translations: [{ word: "hitlikka" }],
  },
  {
    word: "rendre sourd",
    translations: [{ word: "ŋgella" }],
  },
  {
    word: "sourire",
    translations: [{ word: "sanda" }],
  },
  {
    word: "souris",
    translations: [{ word: "kolomba" }],
  },
  {
    word: "sorte de souris",
    translations: [{ word: "laɓanakka" }, { word: "gonoŋga" }],
  },
  {
    word: "sous-vêtements",
    translations: [{ word: "kalsoŋga" }],
  },
  {
    word: "soutenir",
    translations: [{ word: "gissa" }],
  },
  {
    word: "souvent",
    translations: [{ word: "tew tew" }],
  },
  {
    word: "sperme",
    translations: [{ word: "vovora" }, { word: "sumuura" }],
  },
  {
    word: "être stérile",
    translations: [{ word: "geɗta" }],
  },
  {
    word: "stérilité",
    translations: [
      { word: "gendergera" },
      { word: "geɗta" },
      { word: "ndeɓeŋga" },
    ],
  },
  {
    word: "striga",
    translations: [{ word: "himiina" }],
  },
  {
    word: "être stupéfié",
    translations: [{ word: "viɗta" }],
  },
  {
    word: "stylo",
    translations: [{ word: "bikŋa" }],
  },
  {
    word: "subjuguer",
    translations: [{ word: "tora" }],
  },
  {
    word: "submerger",
    translations: [{ word: "dotlomba" }],
  },
  {
    word: "sucer",
    translations: [{ word: "soɓpa" }],
  },
  {
    word: "sucre",
    translations: [{ word: "sugurna" }, { word: "suɓuuna" }],
  },
  {
    word: "sud",
    translations: [{ word: "dalira" }, { word: "faɗta dalira" }],
  },
  {
    word: "sueur",
    translations: [{ word: "zamalla" }],
  },
  {
    word: "suie",
    translations: [{ word: "bondina" }],
  },
  {
    word: "suinter",
    translations: [{ word: "issa" }, { word: "cuɗta" }, { word: "soora" }],
  },
  {
    word: "suivre",
    translations: [{ word: "cukka" }, { word: "cuɗta" }],
  },
  {
    word: "au sujet de",
    translations: [
      {
        word: "kay",
        example: "Asi ɓak kay dla sunda",
        exampleTranslation: "Ils parlent au sujet de travail",
      },
    ],
  },
  {
    word: "supériorité",
    translations: [{ word: "daŋga" }],
  },
  {
    word: "supplier",
    translations: [{ word: "cenda" }, { word: "ɦura" }],
  },
  {
    word: "sur",
    translations: [
      {
        word: "kay",
        example: "Nam tin sakŋa kamu",
        exampleTranslation: "Il a mis le sac sur sa tête",
      },
    ],
  },
  {
    word: "surface extérieure d'un récipient",
    translations: [{ word: "ŋgoona" }],
  },
  {
    word: "surpasser",
    translations: [{ word: "daŋga" }, { word: "sura" }],
  },
  {
    word: "suspendre",
    translations: [{ word: "gaɓpa" }, { word: "waara" }],
  },
  {
    word: "syphilis",
    translations: [{ word: "elewna" }],
  },

  // // // t entree dictionnaire
  {
    word: "tabac",
    translations: [{ word: "pana" }, { word: "taaɓana" }],
  },
  {
    word: "tabac en boule",
    translations: [{ word: "mokŋa" }],
  },
  {
    word: "table",
    translations: [{ word: "tabulla" }],
  },
  {
    word: "tabouret",
    translations: [{ word: "dlamba" }],
  },
  {
    word: "taie",
    translations: [{ word: "tewra" }],
  },
  {
    word: "taille moyenne",
    translations: [{ word: "ganina" }],
  },
  {
    word: "tailler",
    translations: [{ word: "ceɗta" }, { word: "feɗta" }, { word: "talla" }],
  },
  {
    word: "se taire",
    translations: [
      { word: "ba vunna" },
      { word: "il tara" },
      { word: "seŋ vunna" },
    ],
  },
  {
    word: "talon",
    translations: [{ word: "u ɗumma" }],
  },
  {
    word: "tamarinier",
    translations: [{ word: "cinda" }],
  },
  {
    word: "tambour",
    translations: [{ word: "dadarina" }, { word: "gaŋgana" }],
  },
  {
    word: "jouer tambour",
    translations: [{ word: "sewella" }],
  },
  {
    word: "tamis conique en paille",
    translations: [{ word: "bewra" }],
  },
  {
    word: "tamis pour la farine",
    translations: [{ word: "demena" }],
  },
  {
    word: "tamiser",
    translations: [{ word: "yikka" }],
  },
  {
    word: "tam-tam",
    translations: [{ word: "dadarina" }, { word: "gaŋgana" }],
  },
  {
    word: "tanière",
    translations: [{ word: "zulla" }],
  },
  {
    word: "taquiner",
    translations: [{ word: "luu laɓara" }, { word: "pan" }],
  },
  {
    word: "taro",
    translations: [{ word: "gunduura" }],
  },
  {
    word: "tas de débris d'un sarclage qu'on fait dans le champ pour le brûler",
    translations: [{ word: "haramba" }],
  },
  {
    word: "tas d'ordures",
    translations: [{ word: "del buɗna" }, { word: "didiŋga" }],
  },
  {
    word: "tasse",
    translations: [{ word: "tasna" }],
  },
  {
    word: "tasse servant pour mesurer",
    translations: [{ word: "agoɗona" }],
  },
  {
    word: "tasser",
    translations: [{ word: "ceŋga" }, { word: "deɓpa" }, { word: "molla" }],
  },
  {
    word: "taureau",
    translations: [{ word: "mbutlna" }],
  },
  {
    word: "taureau, grand",
    translations: [{ word: "mbutl ŋguruna" }],
  },
  {
    word: "taxe",
    translations: [{ word: "taara" }],
  },
  {
    word: "teindre",
    translations: [{ word: "coora" }],
  },
  {
    word: "tel",
    translations: [{ word: "vaɗina" }],
  },
  {
    word: "témoin",
    translations: [{ word: "vovoɗta" }],
  },
  {
    word: "temporiser",
    translations: [{ word: "legeɗta" }, { word: "ɦek tara" }],
  },
  {
    word: "temps",
    translations: [{ word: "lina" }],
  },
  {
    word: "tenaille",
    translations: [{ word: "mbomboɗta" }],
  },
  {
    word: "tenailles du forgeron",
    translations: [{ word: "dewna" }],
  },
  {
    word: "tendon",
    translations: [{ word: "diŋdiliŋŋa" }],
  },
  {
    word: "tendre",
    translations: [{ word: "baa" }, { word: "ɓal" }],
  },
  {
    word: "tendre un piège ou un filet",
    translations: [{ word: "gunda" }],
  },
  {
    word: "ténia",
    translations: [{ word: "susugura" }],
  },
  {
    word: "tenir",
    translations: [{ word: "kawra" }, { word: "vira" }],
  },
  {
    word: "tenter",
    translations: [{ word: "ndemba" }],
  },
  {
    word: "terminer",
    translations: [{ word: "daɓpa" }, { word: "vaɗta" }],
  },
  {
    word: "termite",
    translations: [{ word: "toɓora" }, { word: "aŋgaratla" }],
  },
  {
    word: "termite ailée",
    translations: [{ word: "ɦussa" }],
  },
  {
    word: "termitière",
    translations: [{ word: "ɗagaara" }, { word: "siwna" }],
  },
  {
    word: "Terre",
    translations: [{ word: "duliyara" }, { word: "duniyara" }],
  },
  {
    word: "terre",
    translations: [{ word: "ndaŋgara" }],
  },
  {
    word: "terrier",
    translations: [{ word: "zulla" }],
  },
  {
    word: "testicules",
    translations: [{ word: "huɗta" }],
  },
  {
    word: "tétrodon",
    translations: [{ word: "mbumbukka" }],
  },
  {
    word: "thé",
    translations: [{ word: "sayna" }],
  },
  {
    word: "feuilles de thé",
    translations: [{ word: "gesna" }],
  },
  {
    word: "thé vert",
    translations: [{ word: "akdarna" }],
  },
  {
    word: "thermos",
    translations: [{ word: "termusna" }],
  },
  {
    word: "tige",
    translations: [{ word: "sokŋa" }],
  },
  {
    word: "tige de mil",
    translations: [{ word: "kaayara" }, { word: "kayra" }, { word: "ŋgayra" }],
  },
  {
    word: "timidité",
    translations: [{ word: "heɓpa" }, { word: "zolona" }],
  },
  {
    word: "tique",
    translations: [{ word: "segenewna" }],
  },
  {
    word: "tirer",
    translations: [{ word: "gikka" }, { word: "taɗta" }, { word: "munda" }],
  },
  {
    word: "tissage",
    translations: [{ word: "cilla" }, { word: "salaɓpa" }],
  },
  {
    word: "tisser",
    translations: [{ word: "cilla" }, { word: "salaɓpa" }],
  },
  {
    word: "toile de deuil",
    translations: [{ word: "doona" }],
  },
  {
    word: "tole",
    translations: [{ word: "tolna" }],
  },
  {
    word: "tomate",
    translations: [{ word: "tomaɗta" }],
  },
  {
    word: "tombe",
    translations: [{ word: "ussa" }, { word: "zulla" }],
  },
  {
    word: "tomber",
    translations: [
      { word: "bowra" },
      { word: "ndira" },
      { word: "pukka" },
      { word: "cukka" },
    ],
  },
  {
    word: "tomber en plusieurs directions",
    translations: [{ word: "yakka" }],
  },
  {
    word: "tongs",
    translations: [{ word: "papaɗta" }],
  },
  {
    word: "tonner",
    translations: [{ word: "bayra" }],
  },
  {
    word: "tonner au loin",
    translations: [{ word: "ɦissa" }],
  },
  {
    word: "torche de paille",
    translations: [{ word: "dolla" }],
  },
  {
    word: "tordre",
    translations: [
      { word: "guluɗta" },
      { word: "gunda" },
      { word: "pereɗta" },
      { word: "homba" },
    ],
  },
  {
    word: "tortue",
    translations: [{ word: "ɦulla" }],
  },
  {
    word: "grosse tortue",
    translations: [{ word: "ɦul gimma" }],
  },
  {
    word: "toucher",
    translations: [{ word: "ŋgenda" }],
  },
  {
    word: "toucher légèrement",
    translations: [{ word: "dora" }],
  },
  {
    word: "toujours",
    translations: [{ word: "tew tew" }],
  },
  {
    word: "touque pour la bière",
    translations: [{ word: "tukŋa" }],
  },
  {
    word: "tourbillon",
    translations: [{ word: "birwinda" }, { word: "mbirvinda" }],
  },
  {
    word: "tourner",
    translations: [{ word: "essa" }, { word: "pereɗta" }],
  },
  {
    word: "tourner contre",
    translations: [{ word: "cukka" }],
  },
  {
    word: "tourteau d’arachide",
    translations: [
      { word: "bakurra" },
      { word: "kukulira" },
      { word: "soɗ zoyra" },
    ],
  },
  {
    word: "tourterelle",
    translations: [{ word: "gugukka" }],
  },
  {
    word: "tout",
    translations: [{ word: "halaŋ" }, { word: "bel" }, { word: "peɗ" }],
  },
  {
    word: "tout de suite",
    translations: [{ word: "cecem" }, { word: "gaw" }],
  },
  {
    word: "toux",
    translations: [{ word: "doyra" }, { word: "otlna" }],
  },
  {
    word: "trace",
    translations: [{ word: "semma" }, { word: "u dumma" }],
  },
  {
    word: "traduire",
    translations: [{ word: "jokka" }],
  },
  {
    word: "traîner",
    translations: [{ word: "ɦiira" }, { word: "taɗta" }, { word: "tanda" }],
  },
  {
    word: "traire",
    translations: [{ word: "em mbiira" }],
  },
  {
    word: "être tranquille",
    translations: [
      {
        word: "ɗilla",
        example: "Nam ɗiliya",
        exampleTranslation: "Il est tranquille",
      },
    ],
  },
  {
    word: "tranquillité",
    translations: [{ word: "ɗilla" }],
  },
  {
    word: "transmettre",
    translations: [{ word: "jokka" }],
  },
  {
    word: "travail",
    translations: [{ word: "sunda" }],
  },
  {
    word: "travail fait en groupe",
    translations: [{ word: "jugumba" }],
  },
  {
    word: "travailler",
    translations: [{ word: "li sunda" }],
  },
  {
    word: "traverser",
    translations: [{ word: "calaɗta" }, { word: "ɗuŋga" }, { word: "tiɓira" }],
  },
  {
    word: "tremblement",
    translations: [{ word: "dlakka" }],
  },
  {
    word: "trembler",
    translations: [{ word: "cemekka" }, { word: "dlakka" }],
  },
  {
    word: "tremper",
    translations: [{ word: "ɗereɗta" }, { word: "loɗta" }],
  },
  {
    word: "tremper dans la sauce",
    translations: [{ word: "dora" }, { word: "duvunda" }],
  },
  {
    word: "trente",
    translations: [{ word: "dok hindi" }],
  },
  {
    word: "trépider",
    translations: [{ word: "dlakka" }],
  },
  {
    word: "très, beaucoup",
    translations: [
      {
        word: "ɦay",
        example: "Yoo namma ku ɦay",
        exampleTranslation: "Cette eau est très chaude",
      },
      { word: "coco" },
    ],
  },
  {
    word: "très (chaud)",
    translations: [{ word: "keŋ" }],
  },
  {
    word: "très (rouge)",
    translations: [
      {
        word: "hol",
        example: "Sii ŋgewra mbuɗ tlawra naa hol hol",
        exampleTranslation: "Le couteau est devenu très rouge",
      },
      {
        word: "keŋ",
        example: "Birik mamba ki tlawra naa keŋ keŋ",
        exampleTranslation: "Ses briques sont très rouges",
      },
    ],
  },
  {
    word: "très tôt dans la matinée",
    translations: [{ word: "feɗeɗ" }],
  },
  {
    word: "tressage",
    translations: [{ word: "cilla" }, { word: "salaɓpa" }],
  },
  {
    word: "tresser",
    translations: [{ word: "cilla" }, { word: "cukka" }, { word: "salaɓpa" }],
  },
  {
    word: "tribu",
    translations: [{ word: "njafna" }, { word: "deera" }],
  },
  {
    word: "tribunal",
    translations: [{ word: "zariyara" }],
  },
  {
    word: "tricher",
    translations: [{ word: "dossa" }, { word: "ɓelekka" }],
  },
  {
    word: "tricoter",
    translations: [{ word: "cilla" }],
  },
  {
    word: "trier",
    translations: [{ word: "vaara" }],
  },
  {
    word: "tripes",
    translations: [{ word: "fufura" }],
  },
  {
    word: "trois",
    translations: [{ word: "hindi" }],
  },
  {
    word: "tromper",
    translations: [
      { word: "gan yamba" },
      { word: "mbaɗta" },
      { word: "viɗta" },
    ],
  },
  {
    word: "tromperie",
    translations: [
      { word: "gan yamba" },
      { word: "mbaɗta" },
      { word: "viɗta" },
    ],
  },
  {
    word: "tronc de hoyna sec",
    translations: [{ word: "gaŋlaŋŋa" }],
  },
  {
    word: "tronc de l'arbre",
    translations: [{ word: "sok guna" }, { word: "sogol guna" }],
  },
  {
    word: "trou",
    translations: [{ word: "giriŋŋa" }, { word: "zulla" }],
  },
  {
    word: "trouver",
    translations: [{ word: "fira" }],
  },
  {
    word: "truc",
    translations: [{ word: "vaɗina" }],
  },
  {
    word: "tsétsé",
    translations: [{ word: "dliɓma" }],
  },
  {
    word: "tu",
    translations: [
      { word: "aŋ" },
      { word: "aŋu" },
      { word: "ndak" },
      { word: "ndaku" },
    ],
  },
  {
    word: "tubercule indigène",
    translations: [{ word: "keena" }],
  },
  {
    word: "tuer",
    translations: [{ word: "cira" }, { word: "ci maɗna" }],
  },
  {
    word: "tuerie",
    translations: [{ word: "cira" }, { word: "ci maɗna" }],
  },
  {
    word: "tumeur",
    translations: [{ word: "gelewna" }],
  },
  {
    word: "faire un tumulte",
    translations: [{ word: "soora" }],
  },
  {
    word: "tuteur",
    translations: [{ word: "salanna" }],
  },
  {
    word: "tuyau de pipe en fer",
    translations: [{ word: "lawna" }],
  },
  {
    word: "tuyau d'une pipe",
    translations: [{ word: "jagawna" }],
  },

  // // // u entree dictionnaire
  {
    word: "ulcère",
    translations: [{ word: "gagaɓina" }],
  },
  {
    word: "un",
    translations: [{ word: "dew" }],
  },
  {
    word: "uniforme",
    translations: [{ word: "teniina" }],
  },
  {
    word: "unir",
    translations: [{ word: "dlaɓpa" }],
  },
  {
    word: "univers",
    translations: [{ word: "duliyara" }, { word: "duniyara" }],
  },
  {
    word: "urine",
    translations: [{ word: "sumuura" }],
  },
  {
    word: "uriner",
    translations: [{ word: "coo sumura" }],
  },

  // // v entree dictionnaire
  {
    word: "vache",
    translations: [{ word: "mbutlna" }],
  },
  {
    word: "vagabond",
    translations: [{ word: "saa ɦawgara" }],
  },
  {
    word: "vagabonder",
    translations: [{ word: "ɦululla" }],
  },
  {
    word: "vagin",
    translations: [{ word: "delna" }],
  },
  {
    word: "vague",
    translations: [{ word: "bilna" }],
  },
  {
    word: "vaincre",
    translations: [{ word: "tira" }, { word: "su kay" }],
  },
  {
    word: "vapeur",
    translations: [{ word: "ndoosna" }],
  },
  {
    word: "vaporiser avec la bouche",
    translations: [{ word: "purussa" }],
  },
  {
    word: "varan terrestre",
    translations: [{ word: "buuruna" }],
  },
  {
    word: "vaste",
    translations: [{ word: "bubura" }],
  },
  {
    word: "vautour",
    translations: [{ word: "bakŋa" }],
  },
  {
    word: "veiller un mort",
    translations: [{ word: "buu maɗna" }],
  },
  {
    word: "veine",
    translations: [{ word: "saɗina" }],
  },
  {
    word: "vélo",
    translations: [{ word: "kekena" }, { word: "velewna" }],
  },
  {
    word: "vendre des marchandises en les montrant au public",
    translations: [{ word: "ɓaara" }],
  },
  {
    word: "vendredi",
    translations: [{ word: "vandredi" }],
  },
  {
    word: "venin",
    translations: [{ word: "ŋgisna" }, { word: "njiira" }, { word: "ziira" }],
  },
  {
    word: "venir",
    translations: [{ word: "mbara" }, { word: "tuɗta" }, { word: "kalla" }],
  },
  {
    word: "vent",
    translations: [{ word: "semeɗna" }],
  },
  {
    word: "vente",
    translations: [{ word: "gussa" }],
  },
  {
    word: "ventre",
    translations: [{ word: "hayra" }],
  },
  {
    word: "ver",
    translations: [{ word: "njuvulna" }],
  },
  {
    word: "ver de Guinée",
    translations: [{ word: "njayra" }],
  },
  {
    word: "ver de terre",
    translations: [{ word: "njolgoɗina" }],
  },
  {
    word: "verdict",
    translations: [{ word: "zariyara" }],
  },
  {
    word: "vérité",
    translations: [{ word: "gasira" }],
  },
  {
    word: "verge",
    translations: [{ word: "jewdekka" }],
  },
  {
    word: "verre",
    translations: [{ word: "ferra" }, { word: "koɓma" }],
  },
  {
    word: "verrou",
    translations: [{ word: "kolna" }],
  },
  {
    word: "vers",
    translations: [
      {
        word: "ay",
        example: "Lo namma col ay siira ni mbayaw naa ɗow",
        exampleTranslation: "Cette pluie a commencé à pleuvoir vers le nord",
      },
      {
        word: "ɓal",
        example: "Nam tuɗ ɓal Tagal",
        exampleTranslation: "Il est parti vers Tagal",
      },
      {
        word: "ii",
        example: "ɗowba nam tuɗ ii Tagal",
        exampleTranslation: "Il est parti vers Tagal",
      },
    ],
  },
  {
    word: "verser",
    translations: [
      { word: "ɗeera" },
      { word: "pora" },
      { word: "sella" },
      { word: "vora" },
    ],
  },
  {
    word: "verset",
    translations: [{ word: "ɓereɗta" }],
  },
  {
    word: "vert",
    translations: [
      {
        word: "guy vunna",
        example: "Hum moŋgora guy vunu",
        exampleTranslation: "Les feuilles de manguier sont vertes",
      },
    ],
  },
  {
    word: "vessie",
    translations: [{ word: "zi sumuura" }],
  },
  {
    word: "vêtement",
    translations: [{ word: "barawra" }],
  },
  {
    word: "veuf",
    translations: [{ word: "saa donora" }],
  },
  {
    word: "veuvage",
    translations: [{ word: "donora" }],
  },
  {
    word: "veuve",
    translations: [{ word: "cara donora" }],
  },
  {
    word: "viande",
    translations: [{ word: "issa" }, { word: "tliwna" }],
  },
  {
    word: "morceau de viande",
    translations: [{ word: "dokka" }],
  },
  {
    word: "pièce de viande",
    translations: [{ word: "muɗulla" }],
  },
  {
    word: "viande pilée dans un mortier",
    translations: [{ word: "gandara" }],
  },
  {
    word: "victoire",
    translations: [{ word: "baŋŋa" }],
  },
  {
    word: "vider",
    translations: [{ word: "suɗta" }],
  },
  {
    word: "vie",
    translations: [{ word: "iirira" }],
  },
  {
    word: "vieillesse",
    translations: [{ word: "maa" }],
  },
  {
    word: "vieillesse (spécifiquement des femmes)",
    translations: [{ word: "dora" }],
  },
  {
    word: "village",
    translations: [{ word: "zina" }],
  },
  {
    word: "ville",
    translations: [{ word: "ɦoŋzina" }],
  },
  {
    word: "vingt",
    translations: [{ word: "dok mba" }],
  },
  {
    word: "vipère",
    translations: [{ word: "guy magira" }, { word: "magira" }],
  },
  {
    word: "vipère heurtante",
    translations: [{ word: "bondorra" }],
  },
  {
    word: "virer",
    translations: [{ word: "essa" }, { word: "caara" }],
  },
  {
    word: "visage",
    translations: [{ word: "iira" }],
  },
  {
    word: "viscosité",
    translations: [{ word: "goloɓoɗta" }],
  },
  {
    word: "viser",
    translations: [{ word: "beleera" }, { word: "saara" }],
  },
  {
    word: "visite",
    translations: [{ word: "porokka" }, { word: "koyra" }],
  },
  {
    word: "rendre visite",
    translations: [{ word: "golla" }, { word: "heella" }],
  },
  {
    word: "vite",
    translations: [{ word: "zak" }],
  },
  {
    word: "vivant",
    translations: [{ word: "iirira" }],
  },
  {
    word: "voir",
    translations: [{ word: "wira" }],
  },
  {
    word: "voisin",
    translations: [{ word: "ndarana" }, { word: "saa zina" }],
  },
  {
    word: "voiture",
    translations: [{ word: "moɗta" }],
  },
  {
    word: "voix",
    translations: [{ word: "della" }],
  },
  {
    word: "vol",
    translations: [{ word: "kulna" }, { word: "ɦulla" }],
  },
  {
    word: "voler",
    translations: [
      {
        word: "kulna",
        example: "Nam kul gursuna",
        exampleTranslation: "Il a volé de l’argent",
      },
      { word: "ɦulla" },
      { word: "cumukka" },
    ],
  },
  {
    word: "voler (dans les airs)",
    translations: [
      {
        word: "piira",
        example: "Garira pii koolo",
        exampleTranslation: "La pintade a volé en haut",
      },
    ],
  },
  {
    word: "voleur",
    translations: [{ word: "saa ɦulla" }, { word: "saa kulna" }],
  },
  {
    word: "vomir",
    translations: [{ word: "vinda" }],
  },
  {
    word: "vomissement",
    translations: [{ word: "vinda" }],
  },
  {
    word: "vouloir",
    translations: [{ word: "minda" }],
  },
  {
    word: "vous",
    translations: [
      { word: "aŋ" },
      { word: "aŋu" },
      { word: "ndak" },
      { word: "ndaku" },
    ],
  },
  {
    word: "vous (pluriel)",
    translations: [{ word: "agi" }],
  },
  {
    word: "voyage",
    translations: [{ word: "porokka" }, { word: "koyra" }],
  },
  {
    word: "vraiment",
    translations: [{ word: "gasi" }, { word: "say" }, { word: "naa daŋ may" }],
  },
];
