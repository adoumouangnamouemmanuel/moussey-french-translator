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
];
