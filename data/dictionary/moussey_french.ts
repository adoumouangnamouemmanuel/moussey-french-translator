export interface DictionaryEntry {
  word: string;
  phonetic?: string;
  partsOfSpeech: string[];
  definitions: {
    definition: string;
    example?: string;
    exampleTranslation?: string;
  }[];
  relatedWords?: string[];
}

export const mousseyToFrenchDictionary: DictionaryEntry[] = [
  /// A entrée de dictionnaire
  {
    word: "a",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "à, de",
        example: "Nam gi jay a ti tiena",
        exampleTranslation: "Il commence à manger",
      },
      {
        definition: "pour",
        example: "Nam hal va a tira",
        exampleTranslation: "Il cherche quelque chose pour manger",
      },
      {
        definition: "marque du futur",
        example: "Nam a ti funa",
        exampleTranslation: "Il va manger",
      },
    ],
  },
  {
    word: "arra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "laisser",
      },
      {
        definition: "rester",
      },
    ],
  },
  {
    word: "abanakka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de souris",
      },
    ],
  },
  {
    word: "adta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "papa",
      },
    ],
    relatedWords: ["ada", "baba"],
  },
  {
    word: "agi",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "vous (pluriel)",
      },
    ],
  },
  {
    word: "agodona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tasse servant pour mésurer",
      },
    ],
  },
  {
    word: "akdarna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le thé vert",
      },
    ],
  },
  {
    word: "ami",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "nous",
      },
    ],
  },
  {
    word: "ampulna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'ampoule électrique",
      },
    ],
  },
  {
    word: "an",
    partsOfSpeech: ["pronoun", "conjunction", "verb"],
    definitions: [
      {
        definition: "je, moi (pronoun)",
      },
      {
        definition: "que (conjunction, suit un verbe de parole ou pensée)",
        example: "Nam saa ana suuna hin mbaa",
        exampleTranslation: "Il pense que les gens vont venir",
      },
      {
        definition: "appeler, être nommé (verb)",
        example: "Sem ana David",
        exampleTranslation: "Son nom est David",
      },
      {
        definition: "écoutez!, votre attention! (interjection - ana ba)",
      },
    ],
    relatedWords: ["ana", "anu"],
  },
  {
    word: "au",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "vous, tu (masculin)",
      },
    ],
    relatedWords: ["aqu"],
  },
  {
    word: "ar",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "où",
        example: "Nam tud ni ara?",
        exampleTranslation: "Où va-t-il?",
      },
    ],
    relatedWords: ["ara"],
  },
  {
    word: "arabma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'arabe",
      },
    ],
  },
  {
    word: "arduvassa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'ardoise",
      },
    ],
  },
  {
    word: "argawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lit",
      },
    ],
  },
  {
    word: "asaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'allumette",
      },
    ],
    relatedWords: ["elmedta"],
  },
  {
    word: "asedna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'assiette",
      },
    ],
    relatedWords: ["pelegeedena", "parandina"],
  },
  {
    word: "asgaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le soldat, le gendarme",
      },
      {
        definition: "le pinacle d'un hutte (asgaa zira)",
      },
    ],
  },
  {
    word: "asi",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "ils, elles",
      },
    ],
  },
  {
    word: "ayra",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "se réjouir (verb)",
      },
      {
        definition: "la joie, le bonheur (noun)",
      },
    ],
    relatedWords: ["ay"],
  },
  {
    word: "ay",
    partsOfSpeech: ["preposition", "pronoun"],
    definitions: [
      {
        definition: "vers (preposition)",
        example: "An humum delen bak ay voo",
        exampleTranslation: "J'écoute sa voix de la maison",
      },
      {
        definition: "nous deux (pronoun)",
      },
    ],
    relatedWords: ["ayra", "aygi"],
  },
  {
    word: "aya",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "maman",
      },
    ],
  },
  {
    word: "aygi",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "nous",
      },
    ],
    relatedWords: ["ami"],
  },

  // // B entrée de dictionnaire
  // B entries
  {
    word: "baara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "couvrir (verb)",
      },
      {
        definition: "la couverture (noun)",
      },
      {
        definition: "étendre, tendre (verb)",
      },
      {
        definition: "se mettre en embuscade (verb)",
      },
      {
        definition: "la sauterelle (noun)",
      },
    ],
  },
  {
    word: "baba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "papa",
      },
    ],
    relatedWords: ["adta", "bura"],
  },
  {
    word: "babaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'orage de vent",
      },
    ],
    relatedWords: ["baqaana"],
  },
  {
    word: "babalina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'ennemi",
      },
    ],
  },
  {
    word: "babarra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bruit, le bavardage",
      },
    ],
  },
  {
    word: "badaara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "étaler, étendre",
      },
    ],
  },
  {
    word: "bagira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lieu non habité, la campagne",
      },
    ],
  },
  {
    word: "bajalna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la blemorragie",
      },
    ],
  },
  {
    word: "bajawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la couverture",
      },
    ],
    relatedWords: ["baara", "borgona"],
  },
  {
    word: "bakka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la peau",
      },
      {
        definition: "la paupière (bak iira)",
      },
    ],
  },
  {
    word: "baktana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le linceul blanc",
      },
    ],
  },
  {
    word: "baktarra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la famine",
      },
    ],
    relatedWords: ["mayra", "bindimba"],
  },
  {
    word: "bakya",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la porte",
      },
      {
        definition: "le vautour",
      },
    ],
  },
  {
    word: "bakurra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tourteau d'arachide dont on fait des baguettes frites",
      },
    ],
  },
  {
    word: "balafna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fouet",
      },
    ],
    relatedWords: ["njewdekka"],
  },
  {
    word: "balamma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lieu, la place, les traces",
      },
    ],
  },
  {
    word: "balla",
    partsOfSpeech: ["noun", "verb"],
    definitions: [
      {
        definition: "le ballon (noun)",
      },
      {
        definition: "gonfler, enfler (verb)",
      },
      {
        definition: "le gonflement, l'enflement, l'abcès (noun)",
      },
    ],
  },
  {
    word: "balna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'emprunt",
      },
      {
        definition: "la cuisse",
      },
    ],
  },
  {
    word: "banana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le son du grain",
      },
      {
        definition: "la banane",
      },
    ],
  },
  {
    word: "bananya",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grande houe en bois pour faire les sillons",
      },
    ],
    relatedWords: ["bananga"],
  },
  {
    word: "banara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'amitié, l'alliance, l'ami",
      },
    ],
  },
  {
    word: "banga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le banc",
      },
      {
        definition: "la victoire",
      },
    ],
  },
  {
    word: "baqana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'orage de vent",
      },
    ],
    relatedWords: ["babaana"],
  },
  {
    word: "baqawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la patate douce",
      },
    ],
  },
  {
    word: "bara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "perdre (verb)",
      },
      {
        definition: "la perdition (noun)",
      },
      {
        definition: "se taire (ba vunna)",
      },
    ],
  },
  {
    word: "baradna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bouilloire",
      },
      {
        definition: "la culture, l'agriculture",
      },
    ],
    relatedWords: ["sakkanna"],
  },
  {
    word: "barawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le vêtement",
      },
    ],
  },
  {
    word: "barawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le coton",
      },
      {
        definition: "la chemise, le tricot",
      },
    ],
  },
  {
    word: "bargana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'abri",
      },
    ],
    relatedWords: ["gudukka", "mbudlufma"],
  },
  {
    word: "barra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la poussière du mil pilé",
      },
    ],
  },
  {
    word: "barvakya",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les poumons",
      },
    ],
    relatedWords: ["bubu fuluuna"],
  },
  {
    word: "bas",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "seulement",
      },
    ],
  },
  {
    word: "basara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "passer la journée (verb)",
      },
      {
        definition: "passer l'année (verb)",
      },
      {
        definition: "l'an, l'année (noun)",
      },
    ],
    relatedWords: ["kimba"],
  },
  {
    word: "bassa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "dépenser (verb)",
      },
      {
        definition: "la dépense (noun)",
      },
      {
        definition: "découper la viande ou la peau en lanières",
      },
    ],
  },
  {
    word: "batemma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le baptême",
      },
    ],
  },
  {
    word: "batura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le chat",
      },
    ],
  },
  {
    word: "bawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de figuier",
      },
    ],
    relatedWords: ["deegera", "goloona"],
  },
  {
    word: "bawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le palmier doum",
      },
    ],
  },
  {
    word: "bay",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "sans",
        example: "Nam hod vo bay ti funa",
        exampleTranslation: "Il est rentré sans manger la boule",
      },
    ],
  },
  {
    word: "bayakka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fennec",
      },
    ],
  },
  {
    word: "bayna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le filet",
      },
      {
        definition: "la force, la puissance",
      },
    ],
  },
  {
    word: "bayra",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "tonner (verb)",
      },
      {
        definition: "crier fortement, gronder, hennir, barrir (verb)",
      },
      {
        definition: "le cri, le grondement (noun)",
      },
      {
        definition: "réprimander (verb)",
      },
    ],
  },
  {
    word: "bedta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "applaudir",
      },
      {
        definition: "diviser une chose ronde pour ouvrir",
      },
    ],
  },
  {
    word: "beebeena",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "jaune",
      },
    ],
    relatedWords: ["bunuffa"],
  },
  {
    word: "beena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'ocre jaune",
      },
    ],
  },
  {
    word: "begena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la dot, le prix payé pour une mariée",
      },
    ],
  },
  {
    word: "begera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la richesse",
      },
    ],
    relatedWords: ["genewra"],
  },
  {
    word: "bel",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "tout",
        example: "Nam ti funa ki bel",
        exampleTranslation: "Il a tout mangé la boule",
      },
    ],
  },
  {
    word: "beleera",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "regarder attentivement, observer",
      },
      {
        definition: "viser",
      },
    ],
  },
  {
    word: "belesna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la crinière",
      },
    ],
  },
  {
    word: "belessa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la barbe du maïs",
      },
    ],
  },
  {
    word: "belna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le casque aux plumes porté par les danseurs",
      },
      {
        definition: "la cloche",
      },
    ],
  },
  {
    word: "bewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tamis conique en paille",
      },
    ],
  },
  {
    word: "bibilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une boisson fermentée",
      },
    ],
    relatedWords: ["summa"],
  },
  {
    word: "bibinilla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gloire",
      },
      {
        definition: "l'honneur",
      },
    ],
  },
  {
    word: "bidilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la base du toit de la case qu'on attache avec de la corde",
      },
    ],
  },
  {
    word: "bidonga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bidon",
      },
    ],
    relatedWords: ["birmilna", "gongonga"],
  },
  {
    word: "bigirma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la première partie de l'alcool distillé",
      },
    ],
    relatedWords: ["ergena"],
  },
  {
    word: "biira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "enfumer un animal hors d'un terrier",
      },
      {
        definition: "écrire",
      },
    ],
  },
  {
    word: "bikka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le champignon",
      },
    ],
  },
  {
    word: "bikpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le stylo",
      },
      {
        definition: "le bras",
      },
    ],
    relatedWords: ["kreyewna"],
  },
  {
    word: "biliwidta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "éblouir",
      },
    ],
  },
  {
    word: "bilha",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le couteau de jet",
      },
      {
        definition: "la vague",
      },
    ],
  },
  {
    word: "bindimba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la famine",
      },
    ],
    relatedWords: ["baktarra", "mayra"],
  },
  {
    word: "birbima",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'estomac",
      },
    ],
    relatedWords: ["huuna"],
  },
  {
    word: "birdidna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'attelle",
      },
    ],
  },
  {
    word: "biridta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "s'efforcer",
      },
    ],
  },
  {
    word: "birikka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la brique",
      },
    ],
  },
  {
    word: "birimma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sac",
      },
      {
        definition: "le billet de mille francs CFA",
      },
    ],
    relatedWords: ["mbumbuna"],
  },
  {
    word: "birissa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la natte en feuille de palmier doum ou de ronier",
      },
    ],
  },
  {
    word: "birmilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bidon, le fût",
      },
    ],
    relatedWords: ["bidonga", "doronga"],
  },
  {
    word: "birwinda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tourbillon",
      },
    ],
    relatedWords: ["mbirvinda"],
  },
  {
    word: "bissa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pleuvoir sans cesse",
      },
      {
        definition: "marquer",
      },
    ],
  },
  {
    word: "billa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "casser en morceaux",
      },
    ],
  },
  {
    word: "bodta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "gaspiller (verb)",
      },
      {
        definition: "étendre, couvrir (verb)",
      },
      {
        definition: "la couverture (noun)",
      },
    ],
  },
  {
    word: "bolina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le chien sauvage",
      },
    ],
    relatedWords: ["dina"],
  },
  {
    word: "bolla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la harangue, le discours, le sermon",
      },
    ],
  },
  {
    word: "bolow",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "beaucoup, nombreux",
      },
    ],
  },
  {
    word: "bondina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la suie",
      },
    ],
  },
  {
    word: "bondorra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la vipère heurtante",
      },
    ],
    relatedWords: ["magira"],
  },
  {
    word: "bongorna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la machette",
      },
    ],
    relatedWords: ["kukuôma"],
  },
  {
    word: "borgona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la couverture",
      },
    ],
    relatedWords: ["bajawna"],
  },
  {
    word: "borokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "bowra",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "tomber, s'effondrer (verb)",
      },
      {
        definition: "l'effondrement (noun)",
      },
      {
        definition: "saisir (verb)",
      },
    ],
  },
  {
    word: "boyna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la parole",
        example: "Boy ma nam dam karamma ni ka boyna",
        exampleTranslation: "La parole prononcée aujourd'hui est un mensonge",
      },
      {
        definition: "le problème",
        example: "Boy mamma lobo",
        exampleTranslation: "Son problème est difficile",
      },
    ],
  },
  {
    word: "boyogina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les femmes",
      },
    ],
    relatedWords: ["cara"],
  },
  {
    word: "brikera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'épervier",
      },
    ],
  },
  {
    word: "bubu fuluuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le poumon",
      },
    ],
    relatedWords: ["barvakya"],
  },
  {
    word: "bubura",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "le melon (noun)",
      },
      {
        definition: "le jeune arbre (noun)",
      },
      {
        definition: "la largeur, large, vaste (adjective)",
      },
    ],
  },
  {
    word: "buf",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "mille",
      },
    ],
  },
  {
    word: "budta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "dénouer, déplier (verb)",
      },
      {
        definition: "le dénouement (noun)",
      },
      {
        definition: "libérer, délier, délivrer (verb)",
      },
      {
        definition: "la libération, la délivrance (noun)",
      },
    ],
  },
  {
    word: "budna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cendre",
      },
    ],
    relatedWords: ["murusna"],
  },
  {
    word: "budufna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sable, l'argile pulverisé",
      },
    ],
    relatedWords: ["lesna"],
  },
  {
    word: "budukpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'orage de vent",
      },
    ],
    relatedWords: ["babaana"],
  },
  {
    word: "budumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "un instrument de musique traditionnel fait d'une gourde",
      },
    ],
  },
  {
    word: "bukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "semer en éparpillant",
      },
      {
        definition:
          "mélanger la farine des pousses de sorgho avec de l'eau pour préparer la bière",
      },
    ],
  },
  {
    word: "bulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mangeoire",
      },
    ],
  },
  {
    word: "bulha",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grand-route (vod bulha)",
      },
    ],
  },
  {
    word: "bulukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fusil",
      },
    ],
  },
  {
    word: "bulumba",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "effacer (verb)",
      },
      {
        definition: "pardonner (verb)",
      },
      {
        definition: "le pardon (noun)",
      },
      {
        definition: "disparaître (verb)",
      },
      {
        definition: "la disparition (noun)",
      },
      {
        definition: "se rouler dans la poussière (verb)",
      },
    ],
  },
  {
    word: "bura",
    partsOfSpeech: ["noun", "verb"],
    definitions: [
      {
        definition: "le père (noun)",
        example: "bu mbara (l'oncle paternel), bu ugolora (le grand-père)",
      },
      {
        definition: "souffler, fonctionner le soufflet de la forge (verb)",
        example: "Saa caffa bu vugumma",
        exampleTranslation: "Le forgeron fonctionne le soufflet de la forge",
      },
      {
        definition: "jouer un instrument (verb)",
        example: "Nam bu timma",
        exampleTranslation: "Il joue au tambour",
      },
      {
        definition: "aboyer (verb)",
        example: "Dina buwa",
        exampleTranslation: "Le chien aboie",
      },
      {
        definition: "pourrir (verb)",
      },
      {
        definition: "enfler (verb)",
      },
    ],
  },
  {
    word: "bunuffa",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "le jaune",
      },
    ],
    relatedWords: ["beebeena"],
  },
  {
    word: "bunyunga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les oreillons",
      },
    ],
  },
  {
    word: "burdumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le délice",
      },
    ],
    relatedWords: ["fayadta"],
  },
  {
    word: "burgusumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la panse des ruminants",
      },
    ],
  },
  {
    word: "buru",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "dehors, à l'extérieur",
        example: "Nam kaki buruwa",
        exampleTranslation: "Il est resté dehors",
      },
    ],
  },
  {
    word: "bussa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "rompre une alliance ou une amitié (verb)",
      },
      {
        definition: "divorcer (verb)",
      },
      {
        definition: "la divorce (noun)",
      },
    ],
  },
  {
    word: "busuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sang",
      },
      {
        definition: "le lépreux à la phase initiale de sa maladie (saa busuna)",
      },
    ],
  },
  {
    word: "buuna",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "passer la nuit, séjourner, coucher (verb)",
      },
      {
        definition: "le jour, la journée (noun)",
      },
      {
        definition: "dormir (buu senna)",
      },
    ],
  },
  {
    word: "buuruna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le varan terrestre",
      },
      {
        definition: "le varan aquatique (buuru zinna)",
      },
    ],
  },

  // ɓ entrée de dictionnaire
  {
    word: "ɓaara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "vendre des marchandises en les montrant au public",
      },
    ],
  },
  {
    word: "ɓaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couler",
      },
      {
        definition: "marcher rapidement",
      },
      {
        definition: "se coucher (le soleil)",
      },
      {
        definition: "perdre, tomber de la main",
      },
      {
        definition: "prendre par force",
      },
    ],
  },
  {
    word: "ɓagiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les armes",
      },
    ],
  },
  {
    word: "ɓakŋa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "parler",
      },
      {
        definition: "la parole",
      },
    ],
    relatedWords: ["boyna"],
  },
  {
    word: "ɓalaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fer",
      },
    ],
  },
  {
    word: "ɓalla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "attacher, clouer",
      },
      {
        definition: "tendre, étendre en étirant",
      },
      {
        definition: "regarder avec attention",
        example: "ɓal iira kay",
        exampleTranslation: "Regarder avec attention",
      },
      {
        definition: "construire une fondation",
        example: "ɓal ura",
        exampleTranslation: "Construire une fondation",
      },
    ],
  },
  {
    word: "ɓalna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cuisse",
      },
    ],
    relatedWords: ["balna"],
  },
  {
    word: "ɓaraŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'alliance pour la guerre, le renfort",
      },
    ],
    relatedWords: ["banara"],
  },
  {
    word: "ɓarina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le perce-oreille",
      },
    ],
  },
  {
    word: "ɓassa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "découper la viande ou la peau en lanières",
      },
    ],
    relatedWords: ["bassa"],
  },
  {
    word: "ɓeɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "diviser une chose ronde pour ouvrir",
      },
    ],
    relatedWords: ["bedta"],
  },
  {
    word: "ɓeelera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les cartes",
      },
    ],
  },
  {
    word: "ɓeera",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "envoyer",
      },
      {
        definition: "agrandir, étendre",
      },
      {
        definition: "aller faire la chasse",
      },
      {
        definition: "la chasse",
      },
    ],
  },
  {
    word: "ɓeŋga",
    partsOfSpeech: ["verb", "noun", "adjective"],
    definitions: [
      {
        definition: "gaspiller",
      },
      {
        definition: "le gaspillage",
      },
      {
        definition: "ruiner, détruire",
      },
      {
        definition: "la ruine, la destruction",
      },
      {
        definition: "être fâché",
      },
    ],
    relatedWords: ["bodta"],
  },
  {
    word: "ɓereɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le verset",
      },
    ],
  },
  {
    word: "ɓi vunna",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "faire un sacrifice",
      },
      {
        definition: "le sacrifice",
      },
    ],
  },
  {
    word: "ɓiira",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "écrire",
      },
      {
        definition: "l’écriture",
      },
    ],
    relatedWords: ["biira"],
  },
  {
    word: "ɓira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "aller",
      },
    ],
  },
  {
    word: "ɓissa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "marquer",
      },
      {
        definition: "balafrer",
        example: "ɓis iira",
        exampleTranslation: "Balafrer",
      },
      {
        definition: "il y a une étoile filante",
        example: "Ciciwra ɓis saɓpa",
        exampleTranslation: "Il y a une étoile filante",
      },
    ],
    relatedWords: ["bissa"],
  },
  {
    word: "ɓolokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'écorce, la coque, la coquille, la cosse",
      },
      {
        definition: "l'écorce de l'arbre",
        example: "ɓolok guna",
        exampleTranslation: "L'écorce de l'arbre",
      },
      {
        definition: "l'écaille de poisson",
        example: "ɓolok kulufna",
        exampleTranslation: "L'écaille de poisson",
      },
    ],
  },
  {
    word: "ɓoora",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "illuminer, éclairer",
      },
      {
        definition: "l’éclaire",
      },
    ],
  },
  {
    word: "ɓora",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "fleurir",
      },
      {
        definition: "la fleur",
      },
    ],
  },
  {
    word: "ɓorowna",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "diviser, partager",
      },
      {
        definition: "la division, le partage",
      },
    ],
  },
  {
    word: "ɓuɓutla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grumeau",
      },
    ],
  },

  // // C entrée de dictionnaire
  {
    word: "caa voɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire une erreur en prenant une autre route",
      },
    ],
  },
  {
    word: "caa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "arracher, cueillir",
      },
      {
        definition: "se battre",
      },
    ],
  },
  {
    word: "caana",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "danser",
      },
      {
        definition: "la danse funèbre des femmes",
      },
    ],
    relatedWords: ["caa"],
  },
  {
    word: "caara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "virer",
      },
    ],
  },
  {
    word: "cafa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "forger, fabriquer",
      },
      {
        definition: "le forgeron",
      },
    ],
    relatedWords: ["caffa", "do caffa", "saa caffa"],
  },
  {
    word: "caffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l’enclume",
      },
      {
        definition: "le forgeron",
      },
    ],
    relatedWords: ["cafa", "do caffa", "saa caffa"],
  },
  {
    word: "cagaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la fourche d’un arbre à 3 branches où on place un pot ou une jarre",
      },
    ],
  },
  {
    word: "cagayawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "instrument de musique à percussion fabriqué d’une calebasse",
      },
    ],
  },
  {
    word: "cakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "piler, décortiquer dans un mortier",
      },
      {
        definition: "limiter",
      },
      {
        definition: "obstruer",
      },
      {
        definition: "déconseiller",
      },
    ],
    relatedWords: ["cikka"],
  },
  {
    word: "calla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire des petites cicatrices",
      },
    ],
  },
  {
    word: "calaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "traverser",
      },
    ],
  },
  {
    word: "calana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "boue moulée dans une forme cylindrique pour construire une case",
      },
    ],
  },
  {
    word: "camakka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la barrière en terre ou avec des seccos pour pêcher",
      },
    ],
    relatedWords: ["fuduk camakka"],
  },
  {
    word: "camba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "convenir à",
      },
      {
        definition: "réussir",
      },
    ],
  },
  {
    word: "cara",
    partsOfSpeech: ["noun", "verb"],
    definitions: [
      {
        definition: "la femme",
      },
      {
        definition: "arriver",
        example: "Asi ca Berem u madira",
        exampleTranslation: "Ils sont arrivés à Berem le matin",
      },
      {
        definition: "l’arrivée",
      },
    ],
    relatedWords: ["ca dora", "cara donora"],
  },
  {
    word: "ca dora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la vieille femme",
      },
    ],
    relatedWords: ["cara", "dora"],
  },
  {
    word: "cara donora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la veuve",
      },
    ],
    relatedWords: ["cara", "donora", "saa donora"],
  },
  {
    word: "carawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "écumer",
      },
    ],
  },
  {
    word: "cawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couper les cheveux, se coiffer",
      },
      {
        definition: "couper la viande",
      },
      {
        definition: "circonscire",
      },
    ],
  },
  {
    word: "cayna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le cadeau que les gendres doivent donner après la mort de leur beau-père",
      },
    ],
  },
  {
    word: "cayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les points de beauté",
      },
    ],
  },
  {
    word: "cefeɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "semer la discorde",
      },
    ],
  },
  {
    word: "cecelekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pirouette",
      },
    ],
    relatedWords: ["gayra", "gi gayra"],
  },
  {
    word: "cecem",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "maintenant, tout à l’heure",
      },
    ],
  },
  {
    word: "ceɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cracher entre les dents",
      },
      {
        definition: "tailler",
      },
    ],
  },
  {
    word: "ceena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le dos",
      },
    ],
    relatedWords: ["fuuna"],
  },
  {
    word: "cegeɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "épier",
      },
      {
        definition: "se mettre en embuscade",
      },
    ],
    relatedWords: ["baara"],
  },
  {
    word: "cegemcegemba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le serval",
      },
    ],
  },
  {
    word: "cegera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la perdrix",
      },
      {
        definition: "l’incisive",
      },
    ],
  },
  {
    word: "cemba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mettre en botte ou fagot",
      },
    ],
  },
  {
    word: "cemcemma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le hérisson",
      },
    ],
  },
  {
    word: "cemek iira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cligner l’oeil",
      },
    ],
  },
  {
    word: "cemeter",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l’acné",
      },
    ],
    relatedWords: ["dlidta"],
  },
  {
    word: "cenda",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "mendier, supplier, prier",
      },
      {
        definition: "la prière",
      },
    ],
    relatedWords: ["sadawra"],
  },
  {
    word: "cenga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tasser",
      },
    ],
    relatedWords: ["defpa", "molla"],
  },
  {
    word: "cira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "boire",
      },
      {
        definition: "manger de la nourriture dont le plupart est liquide",
      },
      {
        definition: "fumer",
      },
      {
        definition: "frapper, battre",
      },
      {
        definition: "tuer",
      },
      {
        definition: "jouer",
      },
      {
        definition: "crier",
      },
    ],
    relatedWords: ["cu"],
  },
  {
    word: "ci faɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "passer la journée",
      },
    ],
    relatedWords: ["basara"],
  },
  {
    word: "ci polira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "regarder avec discrétion",
      },
    ],
    relatedWords: ["golla", "beleera"],
  },
  {
    word: "ci gamaara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "donner des coups de tête",
      },
    ],
  },
  {
    word: "ci tara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se fatiguer",
      },
    ],
    relatedWords: ["tira"],
  },
  {
    word: "ci wayra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "discuter, disputer",
      },
    ],
    relatedWords: ["honira"],
  },
  {
    word: "ci yamba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se rassembler",
      },
    ],
    relatedWords: ["lakka", "molla"],
  },
  {
    word: "cifinna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les fesses",
      },
    ],
    relatedWords: ["cifin ura"],
  },
  {
    word: "cifin ura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les fesses",
      },
    ],
    relatedWords: ["cifinna", "njingjin ura", "ygengen ura", "ura"],
  },
  {
    word: "ciira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire boire l’enfant avec le doigt",
      },
    ],
  },
  {
    word: "cikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "frapper avec quelque chose de pointu",
      },
      {
        definition: "obstruer",
      },
    ],
    relatedWords: ["cakka"],
  },
  {
    word: "cilla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "coudre",
      },
      {
        definition: "tricoter",
      },
      {
        definition: "tisser, tresser",
      },
      {
        definition: "le tissage, le tressage",
      },
      {
        definition: "cicatriser",
      },
    ],
    relatedWords: ["salafpa"],
  },
  {
    word: "cil fielena",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "glaner",
      },
    ],
    relatedWords: ["fielena"],
  },
  {
    word: "cimba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pourrir",
      },
    ],
    relatedWords: ["bura", "dlayra"],
  },
  {
    word: "cinda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tamarinier",
      },
    ],
  },
  {
    word: "cinna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le nez",
      },
      {
        definition: "dos du nez",
        example: "gu cinna",
        exampleTranslation: "le dos du nez",
      },
    ],
    relatedWords: ["gu cinna", "zul cinna"],
  },
  {
    word: "ciŋidna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les pousses de sorgho utilisé pour préparer des boissons",
      },
      {
        definition: "pousses de sorgho",
      },
    ],
    relatedWords: ["ŋidna", "ŋiina"],
  },
  {
    word: "civiɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l’ongle",
      },
    ],
  },
  {
    word: "ciwciwra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l’étoile",
      },
    ],
    relatedWords: ["ciwciw velna"],
  },
  {
    word: "ciwciw velna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l’étoile du matin",
      },
    ],
    relatedWords: ["ciwciwra"],
  },
  {
    word: "ciwilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la hanche",
      },
      {
        definition: "le fémur",
        example: "sok ciwilna",
        exampleTranslation: "le fémur",
      },
    ],
    relatedWords: ["sok ciwilna"],
  },
  {
    word: "ciwna",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "pêcher",
      },
      {
        definition: "la pêche",
      },
    ],
    relatedWords: ["saa ciwna"],
  },
  {
    word: "co",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "mauvais",
      },
    ],
  },
  {
    word: "coco",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "beaucoup",
      },
    ],
    relatedWords: ["fiay"],
  },
  {
    word: "cogira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l’époque, la période",
      },
    ],
    relatedWords: ["tilna"],
  },
  {
    word: "cogoromma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la porte taillée dans un tronc",
      },
    ],
    relatedWords: ["bakya"],
  },
  {
    word: "cokka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "poignarder",
      },
      {
        definition: "piquer",
      },
      {
        definition: "baisser la tête",
      },
    ],
    relatedWords: ["cikka"],
  },
  {
    word: "colla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se lever",
      },
      {
        definition: "arrêter, s’arrêter",
      },
      {
        definition: "partir",
      },
      {
        definition: "commencer",
      },
    ],
    relatedWords: ["dayra", "yowra"],
  },
  {
    word: "conora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le dattier du désert",
      },
    ],
  },
  {
    word: "coora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "teindre",
      },
    ],
  },
  {
    word: "cora",
    partsOfSpeech: ["noun", "verb"],
    definitions: [
      {
        definition: "le mal",
      },
      {
        definition: "percer",
      },
    ],
    relatedWords: ["cuvudna", "ganawna"],
  },
  {
    word: "cuɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couler, suinter",
      },
      {
        definition: "saigner",
      },
      {
        definition: "suivre, poursuivre",
      },
      {
        definition: "raconter",
      },
    ],
    relatedWords: ["issa", "soora"],
  },
  {
    word: "cuffa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "griller, rôtir",
      },
    ],
    relatedWords: ["hawra", "waara"],
  },
  {
    word: "cuguni",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "cette année",
      },
    ],
    relatedWords: ["basara"],
  },
  {
    word: "cugurina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l’abri rectangulaire en paille",
      },
    ],
    relatedWords: ["gudukka"],
  },
  {
    word: "cukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mettre",
      },
      {
        definition: "mettre (des habits)",
      },
      {
        definition: "jeter",
      },
      {
        definition: "laisser",
      },
      {
        definition: "tomber",
      },
      {
        definition: "arriver, entrer",
      },
      {
        definition: "sortir, partir",
      },
      {
        definition: "pleuvoir lourdement",
      },
      {
        definition: "construire, établir",
      },
      {
        definition: "tourner contre, soulever",
      },
      {
        definition: "enfanter plusieurs enfants",
      },
      {
        definition: "tresser",
      },
      {
        definition: "faire un billon",
      },
    ],
    relatedWords: ["gira", "tinda"],
  },
  {
    word: "cukculukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l’accroupissement",
      },
    ],
  },
  {
    word: "curuɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rincer",
      },
    ],
    relatedWords: ["kotla"],
  },
  {
    word: "cuvuɓna",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "avoir mal",
      },
      {
        definition: "le mal, la souffrance",
      },
    ],
    relatedWords: ["cora", "ganawna"],
  },
  {
    word: "cuvura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la boisson à base de graines",
      },
    ],
  },

  // // D entrée de dictionnaire
  {
    word: "da",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "déjà",
        example: "Asi ti funa ki da",
        exampleTranslation: "Ils ont déjà mangé",
      },
    ],
  },
  {
    word: "daa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'année prochaine",
        example: "An hin hoŋ ay daari",
        exampleTranslation: "Je reviendrai l’année prochaine",
      },
    ],
  },
  {
    word: "daɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      { definition: "finir, terminer" },
      { definition: "heurter, buter" },
      { definition: "frapper" },
      { definition: "pardonner" },
    ],
  },
  {
    word: "daɓaŋga",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "la sève" }],
  },
  {
    word: "dadarina",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le tambour, le tam-tam" }],
  },
  {
    word: "dadawira",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "l'inutilité, la faiblesse" }],
  },
  {
    word: "daffa",
    partsOfSpeech: ["verb"],
    definitions: [{ definition: "cuire la sauce ou la bouillie" }],
  },
  {
    word: "dagaara",
    partsOfSpeech: ["verb"],
    definitions: [{ definition: "reculer" }],
  },
  {
    word: "dagakŋa",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le petit parasite nombreux" }],
  },
  {
    word: "dagalawna",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le sésame blanc" }],
  },
  {
    word: "dagan",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "derrière, après, ensuite",
        example: "Nam hin mbay ni dagan tuwa",
        exampleTranslation: "Il viendra après",
      },
      {
        definition: "Nam col dagani",
        exampleTranslation: "Il est resté derrière",
      },
    ],
  },
  {
    word: "dagira",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "la case pour cuisiner" }],
  },
  {
    word: "dakka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      { definition: "blesser (verb)" },
      { definition: "casser (verb)" },
      { definition: "le culte d’église (noun)" },
    ],
  },
  {
    word: "dalamba",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "la luxure, le désir sexuel" }],
  },
  {
    word: "dalana",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "l'entrave" }],
  },
  {
    word: "dalira",
    partsOfSpeech: ["noun"],
    definitions: [
      { definition: "estropié, les boîteux" },
      {
        definition: "le sud",
        example: "Asi col ay faɗta dalira",
        exampleTranslation: "Ils viennent du sud",
      },
    ],
  },
  {
    word: "damassa",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le dimanche" }, { definition: "la semaine" }],
  },
  {
    word: "damma",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "la barrière en terre pour pêcher" }],
  },
  {
    word: "damsaana",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le pot en verre, le bocal" }],
  },
  {
    word: "dana",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le fonio" }],
  },
  {
    word: "danagira",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le mille-pattes" }],
  },
  {
    word: "danara",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le cauris" }],
  },
  {
    word: "daŋ",
    partsOfSpeech: ["adjective"],
    definitions: [{ definition: "autre" }],
  },
  {
    word: "daŋga",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      { definition: "surpasser (verb)" },
      { definition: "la supériorité (noun)" },
      { definition: "le reste non payé de la dot (noun)" },
    ],
  },
  {
    word: "daŋgayna",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "la prison" }],
  },
  {
    word: "daramba",
    partsOfSpeech: ["verb"],
    definitions: [{ definition: "ramper, se faufiler" }],
  },
  {
    word: "darŋasira",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "le mille-pattes" }],
  },
  {
    word: "darra",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "la ligne, la rangée" }],
  },
  {
    word: "davaɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      { definition: "se moquer (verb)" },
      { definition: "s'ennuyer (verb)" },
      { definition: "la sottise (noun)" },
    ],
  },
  {
    word: "dawira",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "l'inutilité, la faiblesse" }],
  },
  {
    word: "dawlaana",
    partsOfSpeech: ["noun"],
    definitions: [
      { definition: "le dessus du mur d'une case ou d’un grenier" },
    ],
  },
  {
    word: "dawna",
    partsOfSpeech: ["noun"],
    definitions: [
      { definition: "l’igname (plante à tubercule douce)" },
      { definition: "le piège à oiseaux" },
    ],
  },
  {
    word: "dawra",
    partsOfSpeech: ["noun"],
    definitions: [{ definition: "la sorcellerie" }],
  },
  {
    word: "day",
    partsOfSpeech: ["adverb"],
    definitions: [{ definition: "loin dans le temps ou l’espace" }],
  },
  {
    word: "dayra",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      { definition: "se lever (verb)" },
      { definition: "arriver (le soleil) (verb)" },
      { definition: "germer, pousser (verb)" },
      { definition: "le nénuphar (noun)" },
    ],
  },
  {
    word: "deɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "damer, tasser, comprimer",
      },
    ],
  },
  {
    word: "deɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la salutation, le bonjour",
      },
      {
        definition: "la gratitude, le merci",
      },
    ],
  },
  {
    word: "deegera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de figuier",
      },
    ],
  },
  {
    word: "deera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tribu, le clan",
      },
    ],
  },
  {
    word: "degeɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "moudre",
      },
      {
        definition: "ruminer",
      },
    ],
  },
  {
    word: "degelena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la petite marmite de terre",
      },
    ],
  },
  {
    word: "della",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gorge",
        example: "hoo della",
        exampleTranslation: "la pomme d'Adam",
      },
      {
        definition: "la voix",
      },
      {
        definition: "le cou",
      },
      {
        definition: "le bord",
        example: "del buɗna",
        exampleTranslation: "le tas d'ordures",
      },
      {
        definition: "la banlieue",
        example: "del kaana",
        exampleTranslation: "la banlieue",
      },
      {
        definition: "le poignet",
        example: "del kona",
        exampleTranslation: "le poignet",
      },
    ],
    relatedWords: ["hoo della", "del buɗna", "del kaana", "del kona"],
  },
  {
    word: "delna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le vagin",
      },
    ],
  },
  {
    word: "demena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tamis pour la farine",
      },
    ],
  },
  {
    word: "dena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le haveneau semi-circulaire",
      },
    ],
  },
  {
    word: "deŋga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "appuyer contre",
      },
    ],
  },
  {
    word: "deŋessa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piège à antilopes",
      },
    ],
  },
  {
    word: "derekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de plante servant à faire la sauce",
      },
    ],
  },
  {
    word: "dereŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la dureté, la solidité",
      },
    ],
  },
  {
    word: "dew",
    partsOfSpeech: ["adjective", "adverb"],
    definitions: [
      {
        definition: "un",
      },
      {
        definition: "même",
      },
      {
        definition: "seule",
      },
    ],
  },
  {
    word: "dewdeŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'adhérence",
      },
    ],
  },
  {
    word: "dewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les tenailles du forgeron",
      },
    ],
  },
  {
    word: "dira",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "dire, parler",
      },
      {
        definition: "la parole",
      },
    ],
  },
  {
    word: "didiŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tas d'ordures",
      },
    ],
  },
  {
    word: "diffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la flûte faite d'une corne",
      },
    ],
  },
  {
    word: "digiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les poils pubiens, le pubis",
      },
    ],
  },
  {
    word: "dikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "chasser",
      },
      {
        definition: "renvoyer",
      },
    ],
  },
  {
    word: "dina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le chien",
      },
    ],
  },
  {
    word: "diŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la harpe à deux ou trois cordes",
        example: "diŋdiliŋŋa",
        exampleTranslation: "la harpe à deux ou trois cordes",
      },
    ],
  },
  {
    word: "diŋdiliŋ semma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tendon d’Achille",
      },
    ],
  },
  {
    word: "diŋiɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piège",
      },
    ],
  },
  {
    word: "diŋriŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lombalgie",
      },
    ],
  },
  {
    word: "diriŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho blanc",
      },
    ],
  },
  {
    word: "diwna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fouet",
      },
    ],
  },
  {
    word: "ɗlaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le côté intérieur de la cuisse",
      },
    ],
  },
  {
    word: "ɗlaɓpa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "joindre, unir",
      },
      {
        definition: "l’union",
        example: "ɗlaɓ wayra",
        exampleTranslation: "faire l’enclos avec des épines",
      },
      {
        definition: "faire une barrière en terre pour pêcher",
        example: "ɗlaɓ damma",
        exampleTranslation: "faire une barrière en terre pour pêcher",
      },
    ],
    relatedWords: ["ɗlaɓ wayra", "ɗlaɓ damma"],
  },
  {
    word: "ɗladlakŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sauterelle",
      },
    ],
  },
  {
    word: "ɗlaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la natte",
      },
    ],
  },
  {
    word: "ɗlakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "attraper au vol, happer au vol",
      },
    ],
  },
  {
    word: "ɗlakka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "trembler, trépider, frissonner",
      },
      {
        definition: "le tremblement, le frisson, le grélotement",
      },
    ],
  },
  {
    word: "ɗlamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tabouret, la selle, le trone",
      },
    ],
  },
  {
    word: "ɗlaŋaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "croiser",
      },
    ],
  },
  {
    word: "ɗlaŋmagina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grêle",
      },
    ],
  },
  {
    word: "ɗlara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chose, la coûtume, la façon de faire, l'être",
      },
    ],
  },
  {
    word: "ɗlaraɗaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la glissade",
      },
    ],
  },
  {
    word: "ɗlarina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'argile pour construire la case ou le grenier",
        example: "luɓu ɗlarina",
        exampleTranslation: "l'argile pour construire la case ou le grenier",
      },
    ],
  },
  {
    word: "dlayra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pourrir, aigrir (lait)",
      },
    ],
  },
  {
    word: "dlayra",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "l’acidité",
      },
      {
        definition: "acide, aigre",
      },
    ],
  },
  {
    word: "ɗleɗeŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'auriculaire",
      },
    ],
  },
  {
    word: "ɗleeŋe",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "neuf",
      },
    ],
  },
  {
    word: "ɗlemerekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'hirondelle",
      },
    ],
  },
  {
    word: "ɗlemma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'oseille",
      },
    ],
  },
  {
    word: "ɗliɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mouche tsétsé",
      },
    ],
  },
  {
    word: "ɗliɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "réveiller",
      },
      {
        definition: "le réveil",
      },
    ],
  },
  {
    word: "ɗliɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "avoir de l'acné",
      },
      {
        definition: "l'acné, les eruptions cutanées",
      },
    ],
    relatedWords: ["cemeter"],
  },
  {
    word: "ɗlimiɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "morceau de calebasse pour ramasser la boule dans la marmite",
      },
    ],
  },
  {
    word: "ɗliŋgiɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "morceau de poterie cassée",
      },
    ],
  },
  {
    word: "dlira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "forger",
      },
    ],
  },
  {
    word: "ɗlodlora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le burin",
      },
    ],
  },
  {
    word: "ɗlona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lion",
      },
    ],
  },
  {
    word: "ɗloonora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le gombo",
      },
    ],
  },
  {
    word: "ɗluɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "envelopper, entourer pour cacher",
      },
      {
        definition: "ensorceler",
      },
    ],
  },
  {
    word: "dora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "toucher légèrement",
      },
      {
        definition: "tremper dans la sauce",
      },
    ],
  },
  {
    word: "dora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "allumer un feu",
      },
    ],
  },
  {
    word: "doɓora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la confiture",
      },
    ],
  },
  {
    word: "dotloora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "produire abondamment",
      },
    ],
  },
  {
    word: "dodomora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sauce préparée avec des entrailles de chèvre",
      },
    ],
  },
  {
    word: "dogolora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'émoussement des lames",
        example: "U ŋgew dogolora mbutlna zi ka komiɗi",
        exampleTranslation:
          "Avec ce couteau non tranchant nous n’avons pas pu dépouiller ce boeuf",
      },
      {
        definition: "le carquois pour les couteaux de jet",
        example: "Nam cuk bili mamsina ɦu dogolora",
        exampleTranslation: "Il a mis ses couteaux de jet dans le carquois",
      },
    ],
  },
  {
    word: "dok",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "indique que le numero suivant est multiplié par dix",
        example:
          "dok mba, dok hindi, dok fiɗi, dok vatl, dok kargiya, dok kiɗisiya, dok kalavandi, dok ɗleeŋe",
        exampleTranslation:
          "vingt, trente, quarante, cinquante, soixante, soixante-dix, quatre-vingt, quatre-vingt-dix",
      },
    ],
  },
  {
    word: "dokdorna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le médecin",
      },
    ],
    relatedWords: ["dokdorra", "saa dokdorra", "cara dokdorra"],
  },
  {
    word: "dokdorra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'hôpital, le dispensaire",
        example: "saa dokdorra, cara dokdorra",
        exampleTranslation: "personnel de santé",
      },
    ],
    relatedWords: ["dokdorna"],
  },
  {
    word: "dokka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "répéter",
      },
      {
        definition: "la répétition",
      },
    ],
  },
  {
    word: "dokka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "abattre",
      },
      {
        definition: "le morceau de viande",
      },
    ],
  },
  {
    word: "doli",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "cependant",
      },
    ],
  },
  {
    word: "dolla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "flotter",
      },
    ],
  },
  {
    word: "dolla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la torche de paille",
      },
    ],
  },
  {
    word: "domjokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'omoplate",
      },
    ],
  },
  {
    word: "donora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le veuvage",
        example: "saa donora, cara donora",
        exampleTranslation: "le veuf, la veuve",
      },
    ],
    relatedWords: ["saa donora", "cara donora"],
  },
  {
    word: "doŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bord",
      },
    ],
  },
  {
    word: "doŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le clitoris",
      },
    ],
  },
  {
    word: "doŋloŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho cultivée en saison sèche",
      },
    ],
  },
  {
    word: "doogo",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "dix",
      },
    ],
  },
  {
    word: "doomba",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "l'amertume",
      },
      {
        definition: "amer",
      },
    ],
  },
  {
    word: "doona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la toile de deuil",
        example: "zew doona",
        exampleTranslation: "la corde mise au cou pendant le deuil",
      },
    ],
  },
  {
    word: "doonokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sauce préparée avec de pâte d’arachide",
      },
    ],
  },
  {
    word: "doora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "protéger, défendre",
      },
      {
        definition: "interdire, empêcher",
      },
    ],
  },
  {
    word: "dora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la vieillesse, spécifiquement des femmes et des femelles",
        example: "do caffa, cara dora",
        exampleTranslation: "l'enclume, la vieille femme",
      },
    ],
    relatedWords: ["do caffa", "cara dora"],
  },
  {
    word: "doroɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la boue",
      },
    ],
  },
  {
    word: "doroɓoɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la boue",
      },
    ],
  },
  {
    word: "doroŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bidon, le fût",
      },
    ],
  },
  {
    word: "dossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tricher, frauder",
      },
    ],
  },
  {
    word: "dotlomba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "submerger",
      },
    ],
  },
  {
    word: "doyra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mucus nasal, le rhume, la toux",
      },
    ],
  },
  {
    word: "doyra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le rêve",
        example: "doyra di",
        exampleTranslation: "rêver",
      },
    ],
  },
  {
    word: "doyra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la jarre à eau",
      },
    ],
  },
  {
    word: "duɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "coudre",
      },
      {
        definition: "percer",
      },
    ],
  },
  {
    word: "duɓukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la paume",
        example: "duɓuk kona, duɓuk semma",
        exampleTranslation: "la paume, la plante",
      },
    ],
  },
  {
    word: "dudukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le foie",
      },
    ],
  },
  {
    word: "dudurna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "case avec le toit en terre",
      },
    ],
  },
  {
    word: "duɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cueillir",
      },
    ],
  },
  {
    word: "duk",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "entre, parmi",
        example: "duk gayra, duk ŋgikka, duk yamba",
        exampleTranslation:
          "au milieu de, le minuit, le milieu de la tête, le fontanelle",
      },
    ],
    relatedWords: ["dukka"],
  },
  {
    word: "duk",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition:
          "indique que le numero suivant est ajouté au multiple de cent ou mille précédant",
        example: "kis duk doogo, buɓ buɓ mba duk doogo",
        exampleTranslation: "cent dix, deux milles dix",
      },
    ],
  },
  {
    word: "dukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le milieu",
      },
    ],
    relatedWords: ["duk"],
  },
  {
    word: "dukka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "essayer",
      },
      {
        definition: "l’essai",
      },
    ],
  },
  {
    word: "dukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la biche, la gazelle",
      },
    ],
  },
  {
    word: "dulugira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le petit haveneau semi-circulaire",
      },
    ],
  },
  {
    word: "dumba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "serrer le poing",
      },
    ],
  },
  {
    word: "dumba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "accabler, dépasser",
      },
    ],
  },
  {
    word: "dumina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la poignée du bouclier",
      },
    ],
  },
  {
    word: "dumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le menton, le talon, la trace de pied",
        example: "u dumma",
        exampleTranslation: "le menton, le talon, la trace de pied",
      },
    ],
  },
  {
    word: "dumussa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les Pléiades",
      },
    ],
  },
  {
    word: "dumuuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la canne de vieillards, les béquilles",
      },
    ],
  },
  {
    word: "duniyara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la Terre, le monde, l'univers",
        example: "duliyara",
        exampleTranslation: "la Terre, le monde, l'univers",
      },
    ],
  },
  {
    word: "dura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "piler du mil dans un mortier",
      },
    ],
  },
  {
    word: "duruɓira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de purée de haricot",
      },
    ],
  },
  {
    word: "duuna",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "battre, faire la guerre",
      },
      {
        definition: "la guerre",
      },
      {
        definition: "poursuivre en justice",
      },
    ],
  },
  {
    word: "duura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "plâtrer, crépir",
      },
    ],
  },
  {
    word: "duvunda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tremper dans la sauce",
      },
    ],
  },

  // // ɗ entrée de dictionnaire
  {
    word: "ɗaara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'île",
      },
    ],
  },
  {
    word: "ɗagaara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grande termitière encore habitée",
      },
    ],
  },
  {
    word: "ɗagalla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mettre, placer, rattraper",
      },
    ],
  },
  {
    word: "ɗakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lier avec une corde, attacher",
      },
    ],
  },
  {
    word: "ɗara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "piler dans un mortier en mélangeant avec un peu d'eau",
      },
    ],
  },
  {
    word: "ɗawyara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piège à poisson en entonnoir avec une petite ouverture",
      },
    ],
  },
  {
    word: "ɗeɓpa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "être constipé",
      },
      {
        definition: "la constipation",
      },
    ],
  },
  {
    word: "ɗeera",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "verser",
      },
    ],
  },
  {
    word: "ɗeera",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "coudre",
      },
      {
        definition: "la façon de coudre",
      },
    ],
  },
  {
    word: "ɗeewera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sésame rouge",
      },
    ],
  },
  {
    word: "ɗeffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une partie du placenta",
      },
    ],
  },
  {
    word: "ɗegeera",
    partsOfSpeech: ["verb", "noun", "adjective"],
    definitions: [
      {
        definition: "redresser, maintenir droit",
      },
      {
        definition: "la droiture, la justice",
      },
      {
        definition: "droit, juste",
      },
    ],
  },
  {
    word: "ɗella",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "occuper",
      },
      {
        definition: "encombrer",
      },
      {
        definition: "retenir",
      },
    ],
  },
  {
    word: "ɗereɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mouiller, tremper",
      },
    ],
  },
  {
    word: "ɗi",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "ne ... pas",
        example: "Mbay ɗi! Nam kaɗi",
        exampleTranslation: "Ne viens pas! Il n’est pas là",
      },
    ],
  },
  {
    word: "ɗigilla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "apaiser, rendre doux",
      },
      {
        definition: "calmer, décanter, être pur",
      },
    ],
  },
  {
    word: "ɗiiwilla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le petit secco où on met de la nourriture",
      },
    ],
  },
  {
    word: "ɗikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lier, attacher",
      },
      {
        definition: "coucher",
      },
    ],
  },
  {
    word: "ɗikŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pioche",
      },
    ],
  },
  {
    word: "ɗikŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cuir, la lanière, la ceinture",
      },
    ],
  },
  {
    word: "ɗilla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "réconforter",
      },
      {
        definition: "encourager",
      },
    ],
  },
  {
    word: "ɗilla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "être tranquille",
      },
      {
        definition: "la tranquillité",
      },
    ],
  },
  {
    word: "ɗiŋga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "monter",
      },
      {
        definition: "descendre",
      },
    ],
  },
  {
    word: "ɗiwra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pénis",
        example: "bak ɗiwra",
        exampleTranslation: "le prépuce",
      },
    ],
    relatedWords: ["bak ɗiwra"],
  },
  {
    word: "ɗoɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rendre droit, redresser",
      },
      {
        definition: "gagner",
      },
    ],
  },
  {
    word: "ɗogolla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couper en morceaux",
      },
    ],
  },
  {
    word: "ɗokka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "conserver, épargner",
      },
    ],
  },
  {
    word: "ɗokɗogora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le calao longibande",
      },
    ],
  },
  {
    word: "ɗoora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "grossir",
      },
    ],
  },
  {
    word: "ɗow",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "seulement, donc, au contraire, plutôt",
        example: "Mba ka tokkaɗi ni Pierre ɗow",
        exampleTranslation:
          "C’est plutôt Pierre qui n’etait pas venu à la reunion",
      },
    ],
  },
  {
    word: "ɗuɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rouler, enrouler, envelopper, se pelotonner",
      },
    ],
  },
  {
    word: "ɗuffa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pousser, germer",
      },
    ],
  },
  {
    word: "ɗugulla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "grandir, augmenter",
      },
    ],
  },
  {
    word: "ɗugulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le nuage",
      },
    ],
  },
  {
    word: "ɗukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "chauffer",
      },
    ],
  },
  {
    word: "ɗumba",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "épouser, se marier",
      },
      {
        definition: "le mariage",
      },
    ],
  },
  {
    word: "ɗumurukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grand secco rond",
      },
    ],
  },
  {
    word: "ɗussa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "enfumer",
      },
      {
        definition: "fumer, inhaler",
      },
      {
        definition: "être triste, être en colère",
      },
    ],
  },
  {
    word: "ɗuura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire cuire longtemps",
      },
    ],
  },
  {
    word: "ɗuuguna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la saison très chaude pendant mars et avril",
      },
    ],
  },

  // // e entrée de dictionnaire
  {
    word: "eɗna",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mordre",
      },
      {
        definition: "piquer",
      },
      {
        definition: "démanger",
      },
      {
        definition: "agrandir",
      },
    ],
  },
  {
    word: "eelekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'odeur très mauvaise",
      },
    ],
  },
  {
    word: "ek",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "près de, à côté de",
        example: "Nam coli ek moɗta tok",
        exampleTranslation: "Il est près de la voiture",
      },
    ],
  },
  {
    word: "elewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la syphilis",
      },
    ],
  },
  {
    word: "elmeɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'allumette",
      },
    ],
  },
  {
    word: "emba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "presser, serrer",
        example: "em mbiira",
        exampleTranslation: "traire",
      },
      {
        definition: "avoir la nausée",
        example: "em vunna",
        exampleTranslation: "avoir la nausée",
      },
    ],
    relatedWords: ["em mbiira", "em vunna"],
  },
  {
    word: "en",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "calmement",
      },
      {
        definition: "attentivement",
      },
    ],
  },
  {
    word: "eŋga",
    partsOfSpeech: ["noun", "verb", "adjective", "adverb"],
    definitions: [
      {
        definition: "la force, la dureté, l'autorité",
      },
      {
        definition: "encourager, confier",
        example: "ɦal eŋga",
        exampleTranslation: "encourager, confier",
      },
      {
        definition: "fort, dur",
      },
      {
        definition: "fortement, durement",
        example: "eŋ",
        exampleTranslation: "fort, dur; fortement, durement",
      },
    ],
    relatedWords: ["ɦal eŋga"],
  },
  {
    word: "ergena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'alcool distillé",
      },
    ],
  },
  {
    word: "essa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tourner, virer",
      },
    ],
  },
  {
    word: "etla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "éclore",
      },
      {
        definition: "mettre bas",
      },
    ],
  },
  {
    word: "ew",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "un peu",
      },
    ],
  },

  // // f entrée de dictionnaire
  {
    word: "faalira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le midi, le jour",
      },
    ],
  },
  {
    word: "faɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "saupoudrer, épondre",
      },
    ],
  },
  {
    word: "faɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le soleil",
      },
      {
        definition: "le jour",
      },
      {
        definition: "l'heure",
      },
    ],
  },
  {
    word: "faɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'autre jour",
        example: "Nam mba faɗta",
        exampleTranslation: "Il est venu l’autre jour",
      },
    ],
  },
  {
    word: "fafaɗta",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "pour jamais",
      },
    ],
  },
  {
    word: "fagaara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "penser, croire",
      },
      {
        definition: "la pensée",
      },
    ],
  },
  {
    word: "fardana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'étoffe",
      },
    ],
  },
  {
    word: "farfarra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le secco utilisé comme un rideau dans l'encadrement de la porte",
      },
    ],
  },
  {
    word: "farina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la farine",
      },
    ],
  },
  {
    word: "fayaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le délice",
      },
    ],
  },
  {
    word: "feɗeɗ",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "très tôt dans le matin",
      },
    ],
  },
  {
    word: "feɗekka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "signaler avec la main",
      },
    ],
  },
  {
    word: "feɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la fête",
      },
    ],
  },
  {
    word: "feɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "récolter le mil",
      },
      {
        definition: "la récolte",
      },
    ],
  },
  {
    word: "feɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "siffler",
      },
    ],
  },
  {
    word: "feɗta",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "la légèreté, léger",
      },
      {
        definition: "la facilité",
      },
    ],
  },
  {
    word: "feekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la longueur",
      },
      {
        definition: "la hauteur",
      },
      {
        definition: "la profondeur",
      },
    ],
  },
  {
    word: "fefekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le gésier",
      },
    ],
  },
  {
    word: "fefekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la clavicule",
      },
    ],
  },
  {
    word: "fenda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se moucher",
      },
    ],
  },
  {
    word: "feneterra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la fenêtre",
      },
    ],
  },
  {
    word: "ferra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le verre",
      },
    ],
  },
  {
    word: "fiɗi",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "quatre",
      },
    ],
  },
  {
    word: "fiɗigira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les heures entre l'après-midi et le crépuscule",
        example: "faɗta fiɗigira",
        exampleTranslation: "l'ouest",
      },
    ],
    relatedWords: ["faɗta fiɗigira"],
  },
  {
    word: "filiwra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "convoiter",
      },
    ],
  },
  {
    word: "fira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "trouver",
      },
      {
        definition: "recevoir",
      },
      {
        definition: "gagner",
        example: "fi busuna",
        exampleTranslation: "avoir ses règles",
      },
    ],
    relatedWords: ["fi busuna"],
  },
  {
    word: "fok",
    partsOfSpeech: ["preposition", "adverb"],
    definitions: [
      {
        definition: "devant, avant",
        example: "Nam fi dlona coli fokomu. Nam mba ki fok jewe",
        exampleTranslation: "Il a trouvé le lion devant lui. Il est venu avant",
      },
    ],
  },
  {
    word: "fokka",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "prochainement",
        example: "A fokka ni, an ka min ana aŋ kal varanɗi",
        exampleTranslation:
          "Prochainement, je ne veux pas que tu mette pied chez moi",
      },
    ],
  },
  {
    word: "fokka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "enlever les vêtements",
      },
    ],
  },
  {
    word: "fora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "souffler",
      },
    ],
  },
  {
    word: "fora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition:
          "arriver, commencer, spécifiquement le matin ou la saison sèche",
      },
    ],
  },
  {
    word: "fotona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la photographie",
      },
    ],
  },
  {
    word: "fuɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la farine",
      },
    ],
  },
  {
    word: "fuɗukŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la cavité dans la meule de pierre dans laquelle la farine écrasée tombe",
        example: "fuɗuk camakka, fuɗuk veera",
        exampleTranslation:
          "la cuvette placée sur un barrage au-dessus d'un piège à poisson en entonnoir pour attraper les poissons qui sautent sur le piège, le bol attaché au côté d'un petit grenier intérieur",
      },
    ],
    relatedWords: ["fuɗuk camakka", "fuɗuk veera"],
  },
  {
    word: "fuɗurna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'insecticide, le poison",
      },
    ],
  },
  {
    word: "fufura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les tripes",
      },
    ],
  },
  {
    word: "fukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le nombril",
      },
    ],
  },
  {
    word: "fulla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "monter, embarquer",
      },
      {
        definition: "descendre",
      },
    ],
  },
  {
    word: "fulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le marécage",
      },
    ],
  },
  {
    word: "fulna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'esprit",
      },
    ],
  },
  {
    word: "funa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la boule, repas préparé à base de farine des céréales",
      },
    ],
  },
  {
    word: "funda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le côté, le bord",
        example: "Nam ha fun goloŋga",
        exampleTranslation: "Il est au bord du puit",
      },
    ],
  },
  {
    word: "furira",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "réjouir",
      },
      {
        definition: "la joie, la réjouissance",
      },
    ],
  },
  {
    word: "furuɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "percer",
      },
    ],
  },
  {
    word: "fuuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le dos, la région dorso-lombaire",
        example: "u fuuna, U furum tamu",
        exampleTranslation:
          "le dos, la région dorso-lombaire, Il a mal au rein ou il a une lombalgie",
      },
    ],
    relatedWords: ["u fuuna"],
  },
  {
    word: "fuura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "oindre d'huile",
      },
    ],
  },

  // // g entrée de dictionnaire
  {
    word: "ga",
    partsOfSpeech: ["interrogative"],
    definitions: [
      {
        definition: "combien",
        example: "Agi kalafi ɦu goŋga ga?",
        exampleTranslation: "Etes-vous combien dans le salle?",
      },
    ],
  },
  {
    word: "gaa",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "bas",
        example: "Gi namma gaa tok",
        exampleTranslation: "Ce hangar est très bas",
      },
    ],
  },
  {
    word: "gaara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "poursuivre",
      },
      {
        definition: "la poursuite",
      },
    ],
  },
  {
    word: "gaarana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "gaaraŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la force",
      },
    ],
  },
  {
    word: "gaasana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bouteille",
      },
    ],
  },
  {
    word: "gaayana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le nim",
      },
    ],
  },
  {
    word: "gaɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "accrocher, pendre, suspendre",
      },
    ],
  },
  {
    word: "gaɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "corriger, réprimander",
      },
      {
        definition: "la réprimande",
      },
      {
        definition: "avertir",
      },
      {
        definition: "commander",
      },
      {
        definition: "la loi, le conseil, le commandement",
      },
    ],
  },
  {
    word: "gaffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bois fourchu",
      },
    ],
  },
  {
    word: "gagaɓana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "gagaɓina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'ulcère",
      },
    ],
  },
  {
    word: "gagawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le corbeau pie",
      },
    ],
  },
  {
    word: "gage",
    partsOfSpeech: ["interrogative"],
    definitions: [
      {
        definition: "combien",
        example: "Moŋgo ndaɗta ni gage?",
        exampleTranslation: "Combien coûte cette mangue?",
      },
    ],
    relatedWords: ["ga"],
  },
  {
    word: "gak gak",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "longtemps, continuellement",
      },
      {
        definition: "jusqu'à",
      },
    ],
  },
  {
    word: "galaara",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "l'amertume, amer",
      },
    ],
  },
  {
    word: "galaɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte d'arbre",
      },
    ],
  },
  {
    word: "galagaɗ",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "façonner en forme de boule",
      },
    ],
  },
  {
    word: "galakka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la saleté",
      },
    ],
  },
  {
    word: "galamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'alliance",
      },
    ],
  },
  {
    word: "galaŋga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "secouer, agiter",
      },
    ],
  },
  {
    word: "galaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "galaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la poutre transversale d'un banc",
      },
    ],
  },
  {
    word: "galina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chaîne, le collier, la chaînette",
      },
    ],
  },
  {
    word: "gamjirgina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gale filarienne",
      },
      {
        definition: "la filaire",
      },
    ],
  },
  {
    word: "gamlana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bélier",
      },
    ],
  },
  {
    word: "gamma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le canard",
      },
    ],
  },
  {
    word: "gamma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le caïlcédrat",
      },
    ],
  },
  {
    word: "ganda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lier, envelopper",
        example: "gan yamba",
        exampleTranslation: "tromper",
      },
    ],
    relatedWords: ["gan yamba"],
  },
  {
    word: "gan yamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'énigme",
      },
    ],
  },
  {
    word: "ganda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gris-gris",
      },
    ],
  },
  {
    word: "gandalara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la nudité",
      },
    ],
  },
  {
    word: "gandara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la viande pilée dans un mortier",
      },
    ],
  },
  {
    word: "gandina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la ceinture",
      },
    ],
  },
  {
    word: "gandurna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le kapokier aux fleurs rouges",
      },
    ],
  },
  {
    word: "ganina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la taille moyenne",
      },
    ],
  },
  {
    word: "ganunna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le brasero",
      },
    ],
  },
  {
    word: "gaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le serviteur",
      },
    ],
  },
  {
    word: "gaŋawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mal, le péché",
      },
    ],
  },
  {
    word: "gaŋgana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tambour, le tam-tam",
      },
    ],
  },
  {
    word: "gaŋina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la terre noire utilisée pour enduire l'intérieur d'une calebasse",
      },
    ],
  },
  {
    word: "gaŋlaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tronc sec, généralement le tronc sec de ɦoyna",
      },
    ],
  },
  {
    word: "garaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "détacher, délier",
      },
      {
        definition: "guérir",
      },
    ],
  },
  {
    word: "garakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "bifurquer",
      },
      {
        definition: "se séparer",
        example: "gu garakŋa, garak voɗta",
        exampleTranslation:
          "bois fourchu, la croix, la bifurcation, le rond point",
      },
    ],
    relatedWords: ["gu garakŋa", "garak voɗta"],
  },
  {
    word: "garamma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le héron cendré",
      },
    ],
  },
  {
    word: "garaŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la force, la bravoure",
      },
    ],
  },
  {
    word: "garaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'aile",
      },
    ],
  },
  {
    word: "garina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pintade",
      },
    ],
  },
  {
    word: "garira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la divination",
      },
    ],
  },
  {
    word: "gariyamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'hippopotame",
      },
    ],
  },
  {
    word: "gasaara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mélanger la farine avec de l'eau",
      },
    ],
  },
  {
    word: "gasamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'année dernière",
      },
    ],
  },
  {
    word: "gasi",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "vrai, vraiment, assurément",
      },
    ],
  },
  {
    word: "gasira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "remuer, mélanger",
      },
    ],
  },
  {
    word: "gasira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la vérité",
      },
    ],
  },
  {
    word: "gaw",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "tout de suite, immédiatement, aussitôt",
        example: "I sukŋa gaw!",
        exampleTranslation: "Va tout de suite au marché",
      },
    ],
  },
  {
    word: "gawlaŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la prostituée",
      },
    ],
  },
  {
    word: "gayna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la jambe",
      },
    ],
  },
  {
    word: "gayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pirouette des femmes aux funérailles",
        example: "gi gayra",
        exampleTranslation: "pirouetter",
      },
    ],
    relatedWords: ["gi gayra"],
  },
  {
    word: "gayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le milieu",
      },
    ],
  },
  {
    word: "gayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le rhinocéros",
      },
    ],
  },
  {
    word: "ge",
    partsOfSpeech: ["interrogative"],
    definitions: [
      {
        definition: "qui",
        example: "Ni ge?",
        exampleTranslation: "C’est qui?",
      },
    ],
    relatedWords: ["gi"],
  },
  {
    word: "ge",
    partsOfSpeech: ["particle"],
    definitions: [
      {
        definition: "particule qui suit un mot interrogatif",
        example: "Ni gi ge?",
        exampleTranslation: "C’est qui?",
      },
    ],
  },
  {
    word: "geɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "être stérile",
      },
      {
        definition: "la stérilité",
      },
    ],
  },
  {
    word: "geɗeŋ",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "court",
      },
    ],
  },
  {
    word: "geɗeŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la petitesse, le court",
      },
    ],
  },
  {
    word: "geera",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "gonfler, enfler",
      },
    ],
  },
  {
    word: "geeleŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la clochette",
      },
    ],
  },
  {
    word: "gegelewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gaule",
      },
    ],
  },
  {
    word: "gegelna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la jarre à eau",
      },
    ],
  },
  {
    word: "geleɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "louer",
      },
      {
        definition: "la louange",
      },
    ],
  },
  {
    word: "gelewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'excroissance, la grosseur, la tumeur",
      },
    ],
  },
  {
    word: "gelna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grand panier",
      },
    ],
  },
  {
    word: "gemena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grain",
      },
    ],
  },
  {
    word: "gemesna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le petit loir",
      },
    ],
  },
  {
    word: "gendergera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la stérilité",
      },
    ],
  },
  {
    word: "genewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la richesse",
      },
    ],
  },
  {
    word: "geŋeɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "remuer",
      },
    ],
  },
  {
    word: "geŋleŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le rhumatisme aux poignets",
      },
    ],
  },
  {
    word: "gerɓeɗekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le cadeau donné au messager qui apporte des nouvelles d'un mort",
      },
    ],
  },
  {
    word: "gesna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les feuilles de thé",
      },
    ],
  },
  {
    word: "gi",
    partsOfSpeech: ["interrogative"],
    definitions: [
      {
        definition: "qui",
        example:
          "gi ge lay, Gi ge lay i go yoona aya, Gi ge lay col koolo, ɗowba suuna halaŋ col koolo",
        exampleTranslation:
          "chacun, n'importe qui, quelqu'un, tout le monde, Que chacun aille puiser de l’eau, N’importe qui puise de l’eau, Tout le monde se lève",
      },
    ],
    relatedWords: ["ge"],
  },
  {
    word: "giɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "porter sur le dos, envelopper",
      },
    ],
  },
  {
    word: "giɗirna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la marmite en aluminium",
      },
    ],
  },
  {
    word: "gigilikka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le chatouillement",
        example: "cok gigilikka",
        exampleTranslation: "chatouiller",
      },
    ],
    relatedWords: ["cok gigilikka"],
  },
  {
    word: "gigiŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le commencement, le début, le premier",
      },
    ],
  },
  {
    word: "gikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "jeter, lancer",
      },
      {
        definition: "tirer",
        example: "Nam gik saa kulna u bulukka",
        exampleTranslation: "Il a tiré le voleur à l’aide du fusil",
      },
    ],
  },
  {
    word: "gilissa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le rein, le rognon",
      },
    ],
  },
  {
    word: "gin",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "avoir l'intention de faire quelque chose",
      },
    ],
  },
  {
    word: "gina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le hangar",
      },
    ],
  },
  {
    word: "giniŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sottise, la bêtise, l'idiotie",
      },
    ],
  },
  {
    word: "giŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mangeoire du cheval",
      },
    ],
  },
  {
    word: "giŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la molaire",
      },
    ],
  },
  {
    word: "gira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "jeter, lancer",
        example:
          "gi deɓpa, gi humba, gi jaŋŋa, gi soolla, gi sunda, gi vunna, gi yamba",
        exampleTranslation:
          "saluer, remercier, rappeler, commencer, chanter, envoyer en commission, maudire, tresser",
      },
    ],
    relatedWords: [
      "gi deɓpa",
      "gi humba",
      "gi jaŋŋa",
      "gi soolla",
      "gi sunda",
      "gi vunna",
      "gi yamba",
    ],
  },
  {
    word: "giriffa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "s'agenouiller",
      },
    ],
  },
  {
    word: "giriŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le trou, la grande fosse",
      },
    ],
  },
  {
    word: "gissa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "soutenir",
      },
      {
        definition: "consolider, renforcer",
      },
    ],
  },
  {
    word: "gissa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "gonfler",
      },
    ],
  },
  {
    word: "gitla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "roter",
      },
    ],
  },
  {
    word: "gora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "puiser",
      },
    ],
  },
  {
    word: "givinna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "les pierres utilisées pour soutenir des marmites sur le feu",
      },
    ],
  },
  {
    word: "goɓoɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la robe",
      },
    ],
  },
  {
    word: "goɓolna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "les pieux qui sont placés autour de la tombe d'un homme influent",
        example: "ka goɓolna",
        exampleTranslation:
          "orner une tombe avec des pieux pour un homme ou avec des pots pour une femme",
      },
    ],
    relatedWords: ["ka goɓolna"],
  },
  {
    word: "goɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se pencher",
      },
      {
        definition: "s'agenouiller",
      },
      {
        definition: "adorer",
      },
    ],
  },
  {
    word: "godlokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sauce faite avec du poisson sec pilé",
      },
    ],
  },
  {
    word: "godlomba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'avidité",
      },
    ],
  },
  {
    word: "goɗoɓoŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le poing",
      },
    ],
  },
  {
    word: "goɗoŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la couverture",
      },
    ],
  },
  {
    word: "goffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le passé récent",
      },
    ],
  },
  {
    word: "gogoɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bourgeon, la pousse",
      },
    ],
  },
  {
    word: "gogolina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piac-piac",
      },
    ],
  },
  {
    word: "gogolokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le coq",
      },
    ],
  },
  {
    word: "gogoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'enfant, le fils, la fille",
        example: "go njufna, go zoŋŋa, go tamara, gogoo ma lekolla",
        exampleTranslation: "le garçon, le jeune homme, la fille, l'élève",
      },
      {
        definition: "le serviteur",
      },
    ],
    relatedWords: ["go njufna", "go zoŋŋa", "go tamara", "gogoo ma lekolla"],
  },
  {
    word: "gogoyra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pierre, le caillou",
      },
    ],
  },
  {
    word: "golla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "regarder",
      },
      {
        definition: "garder",
      },
      {
        definition: "rendre visite",
      },
      {
        definition: "apparaître, sembler",
        example: "gol tara",
        exampleTranslation: "réfléchir, penser",
      },
    ],
    relatedWords: ["gol tara"],
  },
  {
    word: "goloɓoɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la viscosité",
      },
    ],
  },
  {
    word: "goloŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le puits",
      },
    ],
  },
  {
    word: "goloona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de figuier",
      },
    ],
  },
  {
    word: "gomma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'esclave",
      },
    ],
  },
  {
    word: "gomoɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se pencher",
      },
    ],
  },
  {
    word: "gonjolina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le rideau",
      },
    ],
  },
  {
    word: "gonoɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piège",
      },
    ],
  },
  {
    word: "gonokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la haine, la rancune",
      },
    ],
  },
  {
    word: "gonoŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de souris",
      },
    ],
  },
  {
    word: "goŋga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se gonfler",
      },
      {
        definition: "avoir honte",
      },
    ],
  },
  {
    word: "goŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la case",
      },
    ],
  },
  {
    word: "goŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bubale",
      },
    ],
  },
  {
    word: "goŋgoŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bidon en fer",
      },
    ],
  },
  {
    word: "goona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'enfant, le fils, la fille",
      },
    ],
  },
  {
    word: "goonira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'hyène",
      },
    ],
  },
  {
    word: "goora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la petitesse, la petite fille",
        example: "Goora ay fun goloŋga. Goo mamba suu ndariyamma",
        exampleTranslation:
          "La fille était au puit. Sa petitesse est plus que celle de ses camarades",
      },
    ],
  },
  {
    word: "goroɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "boire une substance épaisse",
      },
    ],
  },
  {
    word: "gorra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la noix de kola",
        example: "gor ŋgusurira",
        exampleTranslation: "sorte de figuier",
      },
    ],
    relatedWords: ["gor ŋgusurira"],
  },
  {
    word: "gossa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "salir",
      },
      {
        definition: "la saleté",
      },
    ],
  },
  {
    word: "gossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "préparer le sel avec le cendre des tiges de mil",
      },
    ],
  },
  {
    word: "goyofna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la goyave",
      },
    ],
  },
  {
    word: "goyra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pierre",
      },
    ],
  },
  {
    word: "gruɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la groupe",
      },
    ],
  },
  {
    word: "guɗira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le karité",
        example: "ii guɗira",
        exampleTranslation: "la noix de la karité",
      },
    ],
    relatedWords: ["ii guɗira"],
  },
  {
    word: "guɗukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'abri",
      },
    ],
  },
  {
    word: "guɗuura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le premier mil mûr de la saison",
      },
    ],
  },
  {
    word: "guguɗura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "les deuxièmes funérailles après une certaine période de temps",
      },
    ],
  },
  {
    word: "gugukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tourterelle",
      },
    ],
  },
  {
    word: "gugumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la poussière",
      },
    ],
  },
  {
    word: "guguvura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la paralysie",
      },
    ],
  },
  {
    word: "gukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pigeon",
      },
    ],
  },
  {
    word: "gulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gauche",
      },
    ],
  },
  {
    word: "guluɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tordre",
      },
      {
        definition: "tuer en tordant le cou",
      },
    ],
  },
  {
    word: "guluɗuŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le gros intestin, le côlon",
      },
    ],
  },
  {
    word: "gulukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "écraser, piler",
      },
    ],
  },
  {
    word: "gulumuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mur",
      },
    ],
  },
  {
    word: "gumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le mélange d'eau, farine, et levure qui après la fermentation, est bouillie pour préparer la bière",
      },
    ],
  },
  {
    word: "gumunda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la derrière, la partie derrière",
      },
    ],
  },
  {
    word: "guna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "arbre, bois",
        example: "gu dikŋa",
        exampleTranslation: "la poitrine",
      },
    ],
    relatedWords: ["gu dikŋa"],
  },
  {
    word: "gunda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tordre",
      },
      {
        definition: "tendre un piège ou un filet",
        example: "gun iira",
        exampleTranslation: "pleurer sans cesse",
      },
    ],
    relatedWords: ["gun iira"],
  },
  {
    word: "gunda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une sorte de fétiche",
      },
    ],
  },
  {
    word: "gunduura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le taro",
      },
    ],
  },
  {
    word: "gura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la forêt, le bois",
      },
    ],
  },
  {
    word: "gurnira",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "murmurer, grommeler",
      },
      {
        definition: "le murmure, le grommelement",
      },
    ],
  },
  {
    word: "gursura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'argent",
      },
      {
        definition: "unité équivalente à cinq francs",
      },
    ],
  },
  {
    word: "guruɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "s'enivrer",
      },
      {
        definition: "l’ivresse",
      },
    ],
  },
  {
    word: "gurumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho jaune",
      },
    ],
  },
  {
    word: "gussa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "acheter, marchander",
      },
      {
        definition: "l’achat, le marchandage",
      },
      {
        definition: "coûter",
      },
      {
        definition: "le prix",
        example: "gus ki",
        exampleTranslation: "vendre; la vente",
      },
    ],
    relatedWords: ["gus ki"],
  },
  {
    word: "gutluk",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "baratter",
      },
    ],
  },
  {
    word: "guura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "aiguiser, affûter",
      },
    ],
  },
  {
    word: "guura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "délayer",
      },
    ],
  },
  {
    word: "guura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gourde",
      },
    ],
  },
  {
    word: "guvuura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "moisir",
      },
    ],
  },
  {
    word: "guy vun",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "le vert",
      },
    ],
  },
  {
    word: "guyna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le serpent",
        example: "guy magira, guy ndulna, guy vunna",
        exampleTranslation:
          "la vipère, partie de l'intestin d'une chèvre couvert de gras, le serpent vert; le vert",
      },
      {
        definition: "le vert",
        example: "Hum moŋgora guy vunu",
        exampleTranslation: "Les feuilles de manguier sont vertes",
      },
    ],
    relatedWords: ["guy magira", "guy ndulna", "guy vunna"],
  },

  // h entree du dictionnaire
  {
    word: "ha",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "être dans un lieu différent que le parleur",
        example: "Nam ha sukŋa",
        exampleTranslation: "Il est au marché",
      },
      {
        definition: "être dans une direction éloignée du parleur",
        example: "Nam tuɗ ha sukŋa",
        exampleTranslation: "Il est parti au marché",
      },
    ],
  },
  {
    word: "haara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "jeter dans l'air",
      },
      {
        definition: "déchirer",
      },
    ],
  },
  {
    word: "haɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "plâtrer les murs d'une case",
      },
    ],
  },
  {
    word: "haɓi",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "blanc",
        example: "haɓ tilna",
        exampleTranslation: "le clair de lune",
      },
    ],
    relatedWords: ["haɓ tilna"],
  },
  {
    word: "haɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le blanc, la blancheur",
      },
    ],
  },
  {
    word: "haɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bouillie",
      },
    ],
  },
  {
    word: "haɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "sécher des graines à côté d'un feu",
      },
    ],
  },
  {
    word: "haɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "être triste, regretter",
      },
      {
        definition: "être fâché",
      },
    ],
  },
  {
    word: "haɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "apprendre",
      },
      {
        definition: "la leçon",
      },
      {
        definition: "s'habituer à",
      },
    ],
  },
  {
    word: "haɗakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "enlever le contenu d'un récipient pour le nettoyer",
      },
    ],
  },
  {
    word: "haɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fourrage",
      },
    ],
  },
  {
    word: "hagara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bord, la limite",
      },
    ],
  },
  {
    word: "hahawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pauvreté, la misère, la tristesse",
      },
    ],
  },
  {
    word: "halla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "chercher",
        example: "Nam hal ɦuumba",
        exampleTranslation: "Il cherche sa chèvre",
      },
      {
        definition: "provoquer",
        example: "hal humba",
        exampleTranslation: "provoquer",
      },
      {
        definition: "chercher le problème",
        example: "hal humba",
        exampleTranslation: "chercher le problème",
      },
    ],
    relatedWords: ["hal humba"],
  },
  {
    word: "halaffa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "détériorer",
      },
    ],
  },
  {
    word: "halaŋ",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "tout",
      },
    ],
  },
  {
    word: "hamma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le durillon, le cal",
      },
    ],
  },
  {
    word: "haramba",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "ramasser",
      },
      {
        definition:
          "le tas de débris d'un sarclage qu'on fait dans le champ pour le brûler",
      },
    ],
  },
  {
    word: "hawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "bâiller",
      },
    ],
  },
  {
    word: "hawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "séparer, déchirer",
      },
    ],
  },
  {
    word: "hawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rôtir",
      },
    ],
  },
  {
    word: "hawaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "détruire",
      },
    ],
  },
  {
    word: "hawsira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le Haoussa",
      },
    ],
  },
  {
    word: "hayra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "ronger",
      },
    ],
  },
  {
    word: "hayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le ventre",
      },
      {
        definition: "la largeur",
        example: "Goŋ ndaɗta, hayaɗ ŋgolo",
        exampleTranslation: "Cette case est large",
      },
    ],
  },
  {
    word: "heɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "refroidir",
      },
    ],
  },
  {
    word: "heɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "calmer",
      },
    ],
  },
  {
    word: "heɓelekŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le film séché de la boule qui reste à l'intérieur d'une marmite",
      },
    ],
  },
  {
    word: "heɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la fraîcheur",
      },
    ],
  },
  {
    word: "heɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la timidité",
      },
      {
        definition: "la paix",
      },
    ],
  },
  {
    word: "heɗewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le collier",
      },
    ],
  },
  {
    word: "heera",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "gonfler",
      },
      {
        definition: "l’enflure",
      },
    ],
  },
  {
    word: "heella",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rendre visite",
      },
    ],
  },
  {
    word: "heelewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la cosse d’arachide qui n'a pas encore produit des graines",
      },
    ],
  },
  {
    word: "heelewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la terre salante trouvée dans le marécage",
      },
    ],
  },
  {
    word: "heena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le secco",
      },
    ],
  },
  {
    word: "heeweɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la coqueluche",
      },
    ],
  },
  {
    word: "hella",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "chanter (coq)",
      },
    ],
  },
  {
    word: "heleffa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "respirer avec difficulté",
      },
    ],
  },
  {
    word: "henera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la co-épouse",
      },
    ],
  },
  {
    word: "hewra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "croiser",
      },
      {
        definition: "se blottir",
      },
    ],
  },
  {
    word: "hiɗiŋiɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le hoquet",
      },
    ],
    relatedWords: ["hiiŋiɗta"],
  },
  {
    word: "hiiŋiɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le hoquet",
      },
    ],
    relatedWords: ["hiɗiŋiɗta"],
  },
  {
    word: "hikŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le hibou",
      },
    ],
  },
  {
    word: "himiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le striga, une plante parasitique",
      },
    ],
  },
  {
    word: "hinda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "laisser, abandonner",
      },
      {
        definition: "cesser, arrêter",
      },
      {
        definition: "améliorer, guérir",
      },
    ],
  },
  {
    word: "hin",
    partsOfSpeech: ["particle"],
    definitions: [
      {
        definition: "marque du futur",
        example: "Nam hin mba vini",
        exampleTranslation: "Il viendra demain",
      },
    ],
  },
  {
    word: "hindi",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "trois",
      },
    ],
  },
  {
    word: "hiniŋga",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "autre",
      },
    ],
  },
  {
    word: "hinikka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la saveur succulente, le goût",
      },
    ],
  },
  {
    word: "hiŋŋa",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "autre",
      },
    ],
  },
  {
    word: "hissa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "sentir, puer",
      },
    ],
  },
  {
    word: "hitlikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "soupirer, pleurnicher",
      },
    ],
  },
  {
    word: "hoɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "remplir",
      },
      {
        definition: "rassasier",
      },
      {
        definition: "enfler",
      },
    ],
  },
  {
    word: "hoɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'enflure de la jambe",
      },
    ],
  },
  {
    word: "hoɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "revenir, retourner",
        example: "hoɗ dira, hoɗ haɗna",
        exampleTranslation: "répondre, ruminer",
      },
      {
        definition: "le retour",
      },
    ],
    relatedWords: ["hoɗ dira", "hoɗ haɗna"],
  },
  {
    word: "hokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "cuillère taillée d'une gourde",
      },
    ],
    relatedWords: ["ka"],
  },
  {
    word: "holla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "chauffer",
      },
    ],
  },
  {
    word: "hol",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "seul",
        example: "Hin ni an hol",
        exampleTranslation: "C’est moi seul qui reste",
      },
    ],
  },
  {
    word: "hol",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "très (rouge)",
        example: "Doy maɗna ki tlawra naa hol hol",
        exampleTranslation: "Son canari est devenu très rouge",
      },
    ],
  },
  {
    word: "holoɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "crever, racler, gratter, enlever",
      },
    ],
  },
  {
    word: "hololla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "séparer",
      },
    ],
  },
  {
    word: "homba",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "pelotonner, plier",
      },
      {
        definition: "confesser",
      },
      {
        definition: "la confession",
      },
    ],
  },
  {
    word: "honira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la colère",
      },
      {
        definition: "la querelle, la dispute",
      },
    ],
  },
  {
    word: "hoŋga",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "revenir, retourner",
      },
      {
        definition: "le retour",
      },
    ],
  },
  {
    word: "hoolina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la cosse d’arachide qui n'a pas encore produit des graines",
      },
    ],
  },
  {
    word: "hooloŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le margouillat",
      },
    ],
    relatedWords: ["horloŋŋa"],
  },
  {
    word: "horloŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le margouillat",
      },
    ],
    relatedWords: ["hooloŋŋa"],
  },
  {
    word: "hora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "peler, éplucher",
      },
    ],
  },
  {
    word: "horokŋa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "cultiver, sarcler",
      },
      {
        definition: "la culture, le sarclage",
        example: "saa horokŋa",
        exampleTranslation: "le fermier",
      },
    ],
    relatedWords: ["saa horokŋa"],
  },
  {
    word: "hossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "égrener par main",
      },
    ],
  },
  {
    word: "hoyokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le dos supérieur",
      },
    ],
  },
  {
    word: "huɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "imprimer, faire une empreinte, dépression",
      },
      {
        definition: "écraser",
      },
    ],
  },
  {
    word: "huɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les testicules",
      },
    ],
  },
  {
    word: "huɗukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cicatrice",
      },
    ],
  },
  {
    word: "huɗussa",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "la faiblesse, faible",
      },
    ],
  },
  {
    word: "huhuuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le guépard",
      },
    ],
  },
  {
    word: "huluguɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mollet",
      },
    ],
  },
  {
    word: "humba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "entendre, écouter",
      },
      {
        definition: "comprendre",
      },
      {
        definition: "connaître, savoir",
      },
    ],
  },
  {
    word: "humba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'oreille",
      },
      {
        definition: "la feuille",
      },
    ],
  },
  {
    word: "hurugukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mare qui se forme pendant la saison des pluies",
      },
    ],
  },
  {
    word: "hurumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le crocodile",
      },
    ],
  },
  {
    word: "hussa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les cheveux blancs",
      },
    ],
  },
  {
    word: "huu lona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le ciel",
      },
    ],
  },
  {
    word: "huuɗura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le scorpion",
      },
    ],
  },
  {
    word: "huulukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le coin",
      },
    ],
  },
  {
    word: "huuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'estomac, les entrailles",
        example: "Hurum tamu. Nam ŋgay tam huu veena",
        exampleTranslation:
          "Il sent mal à l’estomac. Il s’est caché dans le grenier",
      },
    ],
  },

  // ɦ entree du dictionnaire
  {
    word: "ɦawa",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "seulement, juste",
      },
      {
        definition: "bien, non",
      },
    ],
  },
  {
    word: "ɦawgara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le vagabond",
      },
    ],
  },
  {
    word: "ɦay",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "très, beaucoup",
      },
    ],
  },
  {
    word: "ɦeɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "serrer",
      },
      {
        definition: "forcer, imposer",
      },
    ],
  },
  {
    word: "ɦeɗegeera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le gué",
      },
    ],
  },
  {
    word: "ɦeenekŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cobra",
      },
    ],
  },
  {
    word: "ɦelena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le glanage",
      },
    ],
  },
  {
    word: "ɦenda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "remplir",
      },
    ],
  },
  {
    word: "ɦilif",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "avec un soupir",
      },
    ],
  },
  {
    word: "ɦina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'écureuil fouisseur",
      },
    ],
  },
  {
    word: "ɦinira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pierre, le roc, le rocher",
      },
      {
        definition: "la colline, la montagne",
      },
      {
        definition: "la meule de pierre",
      },
    ],
  },
  {
    word: "ɦiŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le courage",
      },
    ],
  },
  {
    word: "ɦira",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "donner",
      },
      {
        definition: "le don",
      },
    ],
  },
  {
    word: "ɦirigimba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'avidité",
      },
    ],
  },
  {
    word: "ɦirikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "racler, gratter",
      },
    ],
  },
  {
    word: "ɦissa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tonner au loin",
      },
    ],
  },
  {
    word: "ɦissa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "être, devenir riche",
      },
    ],
  },
  {
    word: "ɦissa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la richesse",
      },
    ],
  },
  {
    word: "ɦiw",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "quelque, certains",
        example: "Suu ɦiw ka mbaɗi",
        exampleTranslation:
          "Certains ne viendront pas, ou quelques-uns ne viendront pas",
      },
    ],
  },
  {
    word: "ɦoɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "malaxer, mélanger",
      },
    ],
  },
  {
    word: "ɦoɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "finir",
      },
      {
        definition: "la fin",
      },
    ],
  },
  {
    word: "ɦokka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "gratter, griffer, nettoyer, se brosser les dents",
      },
    ],
  },
  {
    word: "ɦokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la croupe",
      },
    ],
  },
  {
    word: "ɦolna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la hémorragie nasale",
      },
    ],
  },
  {
    word: "ɦoloɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la brèche dans une clôture",
      },
    ],
  },
  {
    word: "ɦoŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la haute rive",
      },
    ],
  },
  {
    word: "ɦoŋzina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la ville",
      },
    ],
  },
  {
    word: "ɦoora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "ronfler",
      },
      {
        definition: "grogner",
      },
      {
        definition: "gronder de l'hyène",
      },
    ],
  },
  {
    word: "ɦooɗomona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bilharziose",
      },
    ],
  },
  {
    word: "ɦoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le deuil, les pleurs sur un mort",
        example: "gi ɦoona",
        exampleTranslation: "se lamenter",
      },
    ],
    relatedWords: ["gi ɦoona"],
  },
  {
    word: "ɦossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "semer",
      },
    ],
  },
  {
    word: "ɦu",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "dans, à l'intérieur, dedans",
        example: "Nam ka ɦuwa",
        exampleTranslation: "Il est dedans",
      },
    ],
  },
  {
    word: "ɦura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "supplier",
      },
      {
        definition: "intercéder",
      },
      {
        definition: "consoler, conforter",
      },
    ],
  },
  {
    word: "ɦuɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "bouger",
      },
      {
        definition: "approcher",
      },
    ],
  },
  {
    word: "ɦuɗukɦuɗukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la fontanelle",
      },
    ],
    relatedWords: ["ɦuɗuk yamba"],
  },
  {
    word: "ɦuɗuk yamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la fontanelle",
      },
    ],
    relatedWords: ["ɦuɗukɦuɗukka"],
  },
  {
    word: "ɦukŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le goître",
      },
      {
        definition: "le pélican",
      },
    ],
  },
  {
    word: "ɦulla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "voler",
      },
      {
        definition: "le vol",
        example: "saa ɦulla",
        exampleTranslation: "le voleur",
      },
    ],
    relatedWords: ["saa ɦulla"],
  },
  {
    word: "ɦulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tortue",
        example: "ɦul gimma",
        exampleTranslation: "la grosse tortue",
      },
    ],
    relatedWords: ["ɦul gimma"],
  },
  {
    word: "ɦululla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "errer, flâner, vagabonder",
      },
    ],
  },
  {
    word: "ɦura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bouc, la chèvre",
      },
    ],
  },
  {
    word: "ɦussa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la termite ailée",
      },
    ],
  },
  {
    word: "ɦussa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "fleurir",
      },
    ],
  },
  {
    word: "ɦuulukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la période de soudure",
      },
    ],
  },
  {
    word: "ɦuura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cacher sur quelque chose",
      },
    ],
  },

  // i entree du dictionnaire
  {
    word: "ira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "aller",
      },
    ],
  },
  {
    word: "iɗna",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "maigrir",
      },
    ],
  },
  {
    word: "iɗirna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le parfum",
      },
    ],
  },
  {
    word: "iinira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'aujourd'hui",
      },
    ],
  },
  {
    word: "iira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'oeil",
      },
      {
        definition: "le visage, la figure",
      },
    ],
  },
  {
    word: "iira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le trou",
        example: "ii Kada",
        exampleTranslation: "la cavité dans une brique",
      },
    ],
    relatedWords: ["ii Kada"],
  },
  {
    word: "iira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la partie, la portion, la division",
        example: "ii keleŋga, ii bikka",
        exampleTranslation: "la frontière, la longueur du bras",
      },
    ],
    relatedWords: ["ii keleŋga", "ii bikka"],
  },
  {
    word: "iira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la graine",
        example: "ii guɗira, ii tossa",
        exampleTranslation: "la noix de la karité, la pile de lampe de poche",
      },
      {
        definition: "les grains",
      },
    ],
    relatedWords: ["ii guɗira", "ii tossa"],
  },
  {
    word: "iirira",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "la vie",
      },
      {
        definition: "vivant",
        example: "Nam iiri ɗowba ki miɗi su?",
        exampleTranslation: "Est-ce qu’il est vivant ou mort?",
      },
      {
        definition: "éveillé",
        example: "Nam ki iirira",
        exampleTranslation: "Il est éveillé",
      },
      {
        definition: "frais",
        example: "Tliw namma iirira",
        exampleTranslation: "Cette viande est fraîche",
      },
      {
        definition: "pas encore mûr",
        example: "Ni moŋgora iirira",
        exampleTranslation: "C’est la mangue qui n’est pas encore mûre",
      },
    ],
  },
  {
    word: "illa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se taire",
      },
    ],
  },
  {
    word: "isna",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "crépiter",
      },
      {
        definition: "s'élargir",
      },
      {
        definition: "fuir",
      },
    ],
  },
  {
    word: "issa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la viande",
      },
    ],
  },

  // j entree du dictionnaire
  {
    word: "jaɗaŋaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le creusoir",
      },
    ],
  },
  {
    word: "jagawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tuyau d'une pipe",
      },
    ],
  },
  {
    word: "jagawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chéchia",
      },
    ],
  },
  {
    word: "jakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "passer, dépasser",
      },
      {
        definition: "rapprocher, joindre, mettre côté à côté",
        example: "jak goŋga, jak sokŋa",
        exampleTranslation:
          "construire une case avec des briques, remettre un os",
      },
    ],
    relatedWords: ["jak goŋga", "jak sokŋa"],
  },
  {
    word: "jamakka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la canne à sucre",
      },
    ],
  },
  {
    word: "jambaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'hameçon",
      },
    ],
  },
  {
    word: "jamballa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le dromadaire",
      },
    ],
  },
  {
    word: "jaŋŋa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "conduire",
      },
      {
        definition: "conduire les bêtes",
      },
    ],
  },
  {
    word: "jaŋlana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'échelle pour le grenier",
      },
    ],
  },
  {
    word: "jara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couper",
      },
      {
        definition: "sarcler",
      },
    ],
  },
  {
    word: "jarakŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le petit filet porté sur la taille pour transporter des choses qui étaient capturées pendant une chasse",
        example: "jarak mbotlona",
        exampleTranslation: "l'état d'avoir plus de graines que normale",
      },
    ],
    relatedWords: ["jarak mbotlona"],
  },
  {
    word: "jaraŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les barbes de lance ou de flèche",
      },
    ],
  },
  {
    word: "jarara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bouton",
      },
    ],
    relatedWords: ["jararara"],
  },
  {
    word: "jararara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bouton",
      },
    ],
    relatedWords: ["jarara"],
  },
  {
    word: "jeɓeera",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "écouter attentivement, prêter l'oreille",
      },
    ],
  },
  {
    word: "jeɓeera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la barbe, la moustache",
      },
    ],
  },
  {
    word: "jeɗeŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "jella",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "jemeɗta",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "doux, sucré",
        example: "Haɓpa, jemeɗ maɗta kal kaɗu. Jemeɗ mbul yumma ka jiviɗi",
        exampleTranslation:
          "La bouillie est trop sucré. La douceur du miel est mauvaise",
      },
    ],
  },
  {
    word: "jemma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "boue pour construire une case",
      },
    ],
  },
  {
    word: "jenna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'envie de manger de la viande",
      },
    ],
  },
  {
    word: "jeŋga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mûrir",
      },
    ],
  },
  {
    word: "jeregekŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la querelle",
      },
    ],
  },
  {
    word: "jeremma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le caillou, le gravier",
      },
    ],
  },
  {
    word: "jew",
    partsOfSpeech: ["adjective", "adverb"],
    definitions: [
      {
        definition: "premier, avant",
        example: "Sa mba jewna ni gi ge?",
        exampleTranslation: "Qui est le premier arrivant?",
      },
    ],
  },
  {
    word: "jewdekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la verge",
      },
    ],
  },
  {
    word: "jifna",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "embellir",
      },
      {
        definition: "produire bien",
      },
    ],
  },
  {
    word: "jiffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la beauté, la bonté",
      },
    ],
  },
  {
    word: "jigilla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bosse",
      },
    ],
  },
  {
    word: "jiira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cicatriser",
      },
    ],
  },
  {
    word: "jiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la nageoire",
      },
    ],
  },
  {
    word: "jijira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la crampe",
      },
    ],
  },
  {
    word: "jijira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le néré",
      },
    ],
  },
  {
    word: "jikŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le porc-épic",
      },
    ],
  },
  {
    word: "jiŋgira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le commerce",
      },
    ],
    relatedWords: ["jinigira"],
  },
  {
    word: "jinigira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le commerce",
      },
    ],
    relatedWords: ["jiŋgira"],
  },
  {
    word: "jirgina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'avion",
      },
    ],
  },
  {
    word: "jivi",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "bon, belle, beau",
      },
    ],
  },
  {
    word: "jivi",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "bien",
      },
    ],
  },
  {
    word: "joɓpa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "demander",
      },
      {
        definition: "la demande",
      },
    ],
  },
  {
    word: "jojokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le couteau de jet en bois pour les enfants",
      },
    ],
  },
  {
    word: "jojoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lance à trois fourchons utilisée pour la chasse",
      },
    ],
  },
  {
    word: "jokka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "décortiquer dans un mortier",
      },
    ],
  },
  {
    word: "jok",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "bouger",
      },
      {
        definition: "traduire",
      },
      {
        definition: "transmettre",
      },
      {
        definition: "délivrer un message, informer",
      },
    ],
  },
  {
    word: "jokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le petit foyer en terre dans lequel le grain est séché",
      },
    ],
  },
  {
    word: "jomba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grand calao d'Abyssinie",
      },
    ],
  },
  {
    word: "jora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "évider une substance épaisse",
      },
    ],
  },
  {
    word: "juɓpa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "attendre, patienter",
      },
      {
        definition: "la patience",
      },
    ],
  },
  {
    word: "jugulina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le panier utilisé comme couverture en haut d'un grenier",
      },
    ],
  },
  {
    word: "jugumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le travail fait en groupe",
      },
    ],
  },
  {
    word: "jujugumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la roussette, la chauve-souris",
      },
    ],
  },
  {
    word: "jukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "essayer, goûter",
      },
    ],
  },
  {
    word: "jumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le chapeau",
      },
    ],
  },

  // k entree du dictionnaire
  {
    word: "kara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couper",
        example: "ka boyna, ka ɓakŋa, ka kura, ka suŋgura",
        exampleTranslation:
          "mentir, juger; le jugement, la palabre, la déclaration, rougir, prêter",
      },
      {
        definition: "plier",
      },
    ],
    relatedWords: ["ka boyna", "ka ɓakŋa", "ka kura", "ka suŋgura"],
  },
  {
    word: "ka",
    partsOfSpeech: ["verb", "auxiliary"],
    definitions: [
      {
        definition: "être",
        example: "Nam ka voo",
        exampleTranslation: "Il est chez lui",
      },
      {
        definition: "il y a",
        example: "Sayna kaa",
        exampleTranslation: "Il y a du thé",
      },
      {
        definition: "indique un verbe d'action progressive",
        example: "Nam ka tiya",
        exampleTranslation: "Il est en train de manger",
      },
      {
        definition:
          "crée le négatif de la proposition avec le mot de négation ɗi",
        example: "Nam ka ti ɗi",
        exampleTranslation: "Il ne mange pas",
      },
    ],
  },
  {
    word: "kaalamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le panier",
      },
    ],
  },
  {
    word: "kaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la palissade autour d'une concession ou d'un village",
      },
    ],
  },
  {
    word: "kaara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le puits",
      },
    ],
  },
  {
    word: "kaayara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tige de mil",
      },
    ],
  },
  {
    word: "kaayeera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cahier",
      },
    ],
  },
  {
    word: "kaa",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "hier",
      },
    ],
    relatedWords: ["kaari"],
  },
  {
    word: "kaari",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "hier",
      },
    ],
    relatedWords: ["kaa"],
  },
  {
    word: "kadarra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'hameçon",
      },
    ],
  },
  {
    word: "kadlaŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le parc, le corral",
      },
    ],
  },
  {
    word: "kaffena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le café",
      },
    ],
  },
  {
    word: "kakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rester, demeurer",
      },
      {
        definition: "marier",
      },
    ],
  },
  {
    word: "kakŋa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "s'asseoir",
      },
    ],
  },
  {
    word: "kalla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "venir, entrer",
      },
      {
        definition: "aller, sortir, partir",
      },
      {
        definition: "dépasser",
      },
    ],
  },
  {
    word: "kala",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "peut-être, peut-être pas",
      },
    ],
  },
  {
    word: "kalaffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'intérieur d'une case",
      },
    ],
  },
  {
    word: "kalavandi",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "huit",
      },
    ],
  },
  {
    word: "kalavi",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "dedans, à l'intérieur",
      },
    ],
  },
  {
    word: "kalawkalawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le panier pour transporter des grains ou des haricots",
      },
    ],
  },
  {
    word: "kalsoŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "des sous-vêtements, le caleçon",
      },
    ],
  },
  {
    word: "kamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pardon",
      },
    ],
  },
  {
    word: "kamkamma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lieu où le coton est apporté, pesé, et vendu",
      },
    ],
  },
  {
    word: "kaŋaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la palissade autour du village",
      },
    ],
  },
  {
    word: "kaŋga",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "en bas, par terre",
        example: "Gursu mamba ndi kaŋgaa",
        exampleTranslation: "Son argent est tombé par terre",
      },
    ],
  },
  {
    word: "kaŋiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "morceau de vieille poterie",
      },
    ],
  },
  {
    word: "karamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'aujourd'hui",
      },
    ],
  },
  {
    word: "karɗiira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les cartes",
      },
    ],
  },
  {
    word: "kargiya",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "six",
      },
    ],
  },
  {
    word: "karvana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cloche",
      },
    ],
  },
  {
    word: "katasisna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le catéchiste",
      },
    ],
  },
  {
    word: "kawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "saisir, tenir",
      },
    ],
  },
  {
    word: "kawra",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "se fatiguer",
      },
      {
        definition: "la fatigue",
      },
    ],
  },
  {
    word: "kawalara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piège à rats en osier",
      },
    ],
  },
  {
    word: "kawina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fer",
      },
    ],
  },
  {
    word: "kawira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la houe",
        example: "kawi dora, kawi daɓina, kawi gayna",
        exampleTranslation:
          "la lame de la houe ronde, la lame de la houe triangulaire, la lame de la houe avec un cou qui s'attache à la manche de l'houe",
      },
    ],
    relatedWords: ["kawi dora", "kawi daɓina", "kawi gayna"],
  },
  {
    word: "kawsuura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le caoutchouc",
      },
    ],
  },
  {
    word: "kay",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "sur",
        example: "Tinim kay tabulla!",
        exampleTranslation: "Dépose sur la table!",
      },
      {
        definition: "pour",
        example: "Nam warakam kay sun mamba",
        exampleTranslation: "Il lui paie pour son travail",
      },
      {
        definition: "au sujet de, parce que, car",
        example: "Nam ɓak kay dla lekolla",
        exampleTranslation: "Il parle au sujet de l’école",
      },
      {
        definition: "pourquoi",
        example: "kay me",
        exampleTranslation: "pourquoi",
      },
    ],
    relatedWords: ["kay me"],
  },
  {
    word: "kaykayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les graines de néré préparées pour la sauce",
      },
    ],
  },
  {
    word: "keɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fil",
      },
    ],
  },
  {
    word: "keena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "ceinture pour des femmes mariées",
      },
    ],
  },
  {
    word: "keena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tubercule indigène qui produit une farine blanche",
      },
    ],
  },
  {
    word: "keesena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la rougeole",
      },
    ],
    relatedWords: ["kersena"],
  },
  {
    word: "kersena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la rougeole",
      },
    ],
    relatedWords: ["keesena"],
  },
  {
    word: "kegeɗkegeɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les entraves, les fers",
      },
    ],
  },
  {
    word: "kekelenna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le perroquet",
      },
    ],
  },
  {
    word: "kekena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le vélo",
      },
    ],
  },
  {
    word: "keleɓeɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la glisse",
      },
    ],
  },
  {
    word: "kelera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la clé",
      },
    ],
  },
  {
    word: "kelewra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lier, envelopper",
      },
      {
        definition: "entourer",
      },
    ],
  },
  {
    word: "kella",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'épaule",
      },
    ],
  },
  {
    word: "kemba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les enfants",
      },
    ],
  },
  {
    word: "keŋ",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "très (rouge)",
        example: "Nam mbuɗ ki tlaw keŋ keŋ",
        exampleTranslation: "Il est devenu très rouge",
      },
      {
        definition: "très (chaud)",
      },
    ],
  },
  {
    word: "keŋ",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "au bord de, à côté de",
        example: "Nam col keŋ voɗta naa tok. Ndaɗ col keŋ zira",
        exampleTranslation:
          "Il est resté au bord de la route. Elle est restée à côté de la maison",
      },
    ],
  },
  {
    word: "keŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le côté, le bord",
      },
      {
        definition: "la portion, la partie",
        example: "Keŋ sene mamma bay horok tuwa",
        exampleTranslation: "Une partie de son champ n’est pas encore sarclée",
      },
    ],
  },
  {
    word: "keŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pierre à feu",
      },
    ],
  },
  {
    word: "keŋgelibara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "kindéliba",
      },
    ],
  },
  {
    word: "kergewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fer-de-lance avec des barbes non-symétriques",
      },
    ],
  },
  {
    word: "kerna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sécheresse",
      },
    ],
  },
  {
    word: "kesena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le collier",
      },
    ],
  },
  {
    word: "kewrekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lance-pierres",
      },
    ],
  },
  {
    word: "ki",
    partsOfSpeech: ["particle"],
    definitions: [
      {
        definition: "mot qui marque l'achèvement d'une action",
        example: "Waamma daɓ kiyo",
        exampleTranslation: "Son mil est terminé",
      },
      {
        definition: "mot qui marque que le sujet va au loin du parleur",
        example: "Garira pii ki wa",
        exampleTranslation: "La pintade s’est envolée",
      },
      {
        definition:
          "mot qui marque l'achèvement quand il suit le sujet et précède un adjectif",
        example: "Nam ki gusiya",
        exampleTranslation: "Il est vendu",
      },
    ],
    relatedWords: ["kiyo"],
  },
  {
    word: "kiyo",
    partsOfSpeech: ["particle"],
    definitions: [
      {
        definition: "mot qui marque l'achèvement d'une action",
        example: "Waamma daɓ kiyo",
        exampleTranslation: "Son mil est terminé",
      },
    ],
    relatedWords: ["ki"],
  },
  {
    word: "kiɗik",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le dehors",
      },
    ],
  },
  {
    word: "kiɗikka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lumière",
      },
      {
        definition: "la clairière",
      },
    ],
  },
  {
    word: "kiɗisiya",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "sept",
      },
    ],
  },
  {
    word: "kiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte d'escargot aquatique",
      },
    ],
  },
  {
    word: "kiliɓina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le natron",
      },
    ],
  },
  {
    word: "kililiwna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la glaire",
      },
    ],
  },
  {
    word: "kimba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'an, l'année",
      },
    ],
  },
  {
    word: "kimilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le charbon de bois",
      },
    ],
  },
  {
    word: "kinjiŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les entraves, les fers",
      },
    ],
  },
  {
    word: "kiriɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se battre, combattre",
      },
    ],
  },
  {
    word: "kirikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "gratter, égratigner",
      },
    ],
  },
  {
    word: "kiriŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mâchoire",
      },
      {
        definition: "la joue",
      },
    ],
  },
  {
    word: "kis",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "cent",
      },
    ],
  },
  {
    word: "kisikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "secouer",
        example: "kisik yamba, kisik garaŋga",
        exampleTranslation: "secouer la tête, battre les ailes",
      },
    ],
    relatedWords: ["kisik yamba", "kisik garaŋga"],
  },
  {
    word: "kiyorna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cuillère",
      },
    ],
  },
  {
    word: "ko",
    partsOfSpeech: ["conjunction", "preposition"],
    definitions: [
      {
        definition: "comme",
        example: "Nam ɓak ko wayamma naa",
        exampleTranslation: "Il parle comme son frère",
      },
      {
        definition: "à cause de",
        example: "Asi njogoɗ gaɓuruna ko mayra",
        exampleTranslation: "Ils creusent les tubercules à cause de la famine",
      },
      {
        definition: "que, en début de phrase",
        example: "Ko Lona njunugiya",
        exampleTranslation: "Que Dieu vous aide",
      },
    ],
  },
  {
    word: "koɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "picorer, becqueter",
      },
    ],
  },
  {
    word: "koɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le verre, la boîte",
      },
    ],
  },
  {
    word: "koɓona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une pièce de monnaie",
      },
    ],
  },
  {
    word: "kociina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte d'escargot",
      },
      {
        definition: "la coquille d'escargot qui sert comme toupie",
      },
    ],
  },
  {
    word: "koɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "conduire, rassembler en troupeau",
      },
    ],
  },
  {
    word: "koɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se reposer",
        example: "Nam koɗ tamu",
        exampleTranslation: "Il se repose",
      },
      {
        definition: "réparer",
      },
    ],
  },
  {
    word: "koɗomma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de danse",
      },
      {
        definition: "la célébration de la récolte où cette danse est dansée",
      },
    ],
  },
  {
    word: "koɗoora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la barrière en secco utilisée pour diriger des poissons vers un piège",
      },
    ],
  },
  {
    word: "kokoɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fruit du palmier doum",
      },
    ],
    relatedWords: ["kokotla"],
  },
  {
    word: "kokotla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fruit du palmier doum",
      },
    ],
    relatedWords: ["kokoɗta"],
  },
  {
    word: "kokoɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cheville",
      },
    ],
  },
  {
    word: "kokolora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le percnoptère brun",
      },
    ],
  },
  {
    word: "kokotla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'impatience",
      },
    ],
  },
  {
    word: "kolla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "gonfler",
      },
      {
        definition: "l’enflure",
      },
    ],
  },
  {
    word: "kolla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la colle",
      },
    ],
  },
  {
    word: "kolna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le verrou",
      },
    ],
  },
  {
    word: "koloɓona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bouteille",
      },
    ],
  },
  {
    word: "kolomba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "avoir une ampoule",
      },
    ],
  },
  {
    word: "kolomba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la souris",
      },
    ],
  },
  {
    word: "koloŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pipe",
      },
    ],
  },
  {
    word: "komba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "manger de la viande",
      },
    ],
  },
  {
    word: "kona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la main",
      },
    ],
  },
  {
    word: "koŋgilla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pic",
      },
    ],
  },
  {
    word: "koŋgona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le baobab",
      },
    ],
  },
  {
    word: "kooliina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le panier qui sert à mettre le poisson",
        example: "koolii njufna, koolii tamara",
        exampleTranslation:
          "le panier qui est long et étroit, le panier qui est grand et large",
      },
    ],
    relatedWords: ["koolii njufna", "koolii tamara"],
  },
  {
    word: "koolo",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "en haut, vers le haut",
        example: "Gol iriŋ koolo",
        exampleTranslation: "Regard en haut",
      },
    ],
  },
  {
    word: "koorona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le canard casqué",
      },
    ],
  },
  {
    word: "kora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "frapper la main",
      },
      {
        definition: "renverser, bouleverser",
      },
    ],
  },
  {
    word: "koralla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chorale",
      },
    ],
  },
  {
    word: "korna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "koroŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le plastron en cuir",
      },
    ],
  },
  {
    word: "korossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lier, attacher",
      },
    ],
  },
  {
    word: "korossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "corriger",
      },
    ],
  },
  {
    word: "korra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'âne",
      },
    ],
  },
  {
    word: "koseɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une boisson fermentée",
      },
    ],
  },
  {
    word: "kosokosora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'intimité",
      },
    ],
  },
  {
    word: "kosona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la papaye",
      },
    ],
  },
  {
    word: "kosoŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cochon, le porc",
      },
    ],
  },
  {
    word: "kosora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'anone",
      },
    ],
  },
  {
    word: "kotla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "rincer",
      },
      {
        definition: "le rinçage",
      },
    ],
  },
  {
    word: "kotoromma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le verre, le miroir",
      },
    ],
  },
  {
    word: "kreyewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le crayon",
      },
    ],
  },
  {
    word: "ku",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "chaud",
      },
    ],
  },
  {
    word: "kuɓilira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cadenas",
      },
    ],
  },
  {
    word: "kuɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le grenier en paille pour les arachides et les pois chiches",
      },
    ],
  },
  {
    word: "kuɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le brouillard, le harmattan",
      },
    ],
  },
  {
    word: "kuɗuk",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "marcher furtivement",
      },
    ],
  },
  {
    word: "kukuɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la machette",
      },
    ],
  },
  {
    word: "kulna",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "voler",
      },
      {
        definition: "le vol",
        example: "saa kulna",
        exampleTranslation: "le voleur",
      },
    ],
    relatedWords: ["saa kulna"],
  },
  {
    word: "kulufna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le poisson",
      },
    ],
  },
  {
    word: "kulumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cheval",
      },
    ],
  },
  {
    word: "kumuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le poison, la sorcellerie, le médicament traditionnel",
        example: "saa kumuna",
        exampleTranslation: "le guérisseur, le féticheur",
      },
    ],
    relatedWords: ["saa kumuna"],
  },
  {
    word: "kununa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le beau-père",
        example: "Kununna mba wa",
        exampleTranslation: "Mon beau-père est arrivé",
      },
    ],
    relatedWords: ["kunura"],
  },
  {
    word: "kunura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la belle-mère",
      },
    ],
    relatedWords: ["kununa"],
  },
  {
    word: "kuŋgu",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "sur le feu",
        example: "Ndaɗ tin giɗirna kuŋguwa",
        exampleTranslation: "Elle a mis la marmite sur le feu",
      },
    ],
  },
  {
    word: "kura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le feu",
      },
      {
        definition: "la chaleur",
      },
      {
        definition: "la lampe de poche",
      },
    ],
  },
  {
    word: "kuruɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "piler des fruits dans un mortier",
      },
    ],
  },
  {
    word: "kuruffa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "sarcler",
      },
      {
        definition: "le sarclage",
      },
    ],
  },
  {
    word: "kussa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "casser",
      },
      {
        definition: "percer, piquer",
      },
      {
        definition:
          "produire d’huile en pilant dans un mortier les graines d’arachide",
      },
    ],
  },
  {
    word: "kuturuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lèpre",
      },
    ],
  },
  {
    word: "kuusira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le concombre",
      },
    ],
  },
  {
    word: "kuyura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'orphelinat",
      },
      {
        definition: "l'orphelin",
      },
    ],
  },

  // l entree du dictionnaire
  {
    word: "laara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la soif",
      },
    ],
  },
  {
    word: "laarana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la poutre transversale d'un banc",
      },
    ],
  },
  {
    word: "laɓanakka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de souris",
      },
    ],
  },
  {
    word: "ladarna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le drap",
      },
    ],
  },
  {
    word: "laffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gazelle",
      },
    ],
  },
  {
    word: "lagaɗaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sauce préparée avec des graines d'oseille",
      },
    ],
  },
  {
    word: "lakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se rassembler",
      },
    ],
  },
  {
    word: "laklera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la clé",
      },
    ],
  },
  {
    word: "lakrena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la craie",
      },
    ],
  },
  {
    word: "lalassa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le désintéressement",
      },
    ],
  },
  {
    word: "lambara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lampe",
      },
    ],
  },
  {
    word: "lamporra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'impôt",
      },
    ],
  },
  {
    word: "lamsoŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'église, la mission",
      },
    ],
  },
  {
    word: "larassa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mélanger une substance avec un liquide",
      },
    ],
  },
  {
    word: "larina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'entrave en bois",
      },
    ],
  },
  {
    word: "lassa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "persécuter, opprimer",
      },
    ],
  },
  {
    word: "lasora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chaux",
      },
    ],
  },
  {
    word: "laswara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le rasoir",
      },
    ],
  },
  {
    word: "lawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couler",
      },
      {
        definition: "fondre",
      },
      {
        definition: "devenir riche",
      },
    ],
  },
  {
    word: "lawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tuyau de pipe en fer",
      },
    ],
  },
  {
    word: "lawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'amusement",
      },
    ],
  },
  {
    word: "lay",
    partsOfSpeech: ["conjunction", "adverb"],
    definitions: [
      {
        definition: "et",
        example: "Agi lay, an lay",
        exampleTranslation: "Vous et moi",
      },
      {
        definition: "aussi",
        example: "Nam min a i sukŋa lay",
        exampleTranslation: "Il veut aller aussi au marché",
      },
    ],
  },
  {
    word: "layna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'oiseau",
        example: "lay hakka",
        exampleTranslation: "le canard domestique",
      },
    ],
    relatedWords: ["lay hakka"],
  },
  {
    word: "layna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le banc, le lit en bois",
        example: "lay terewna",
        exampleTranslation: "l'haut banc",
      },
    ],
    relatedWords: ["lay terewna"],
  },
  {
    word: "leɓena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le champ en jachère",
      },
    ],
  },
  {
    word: "legeɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire quelque chose lentement, temporiser",
      },
    ],
  },
  {
    word: "lekolla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'école",
      },
    ],
  },
  {
    word: "lelemba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gourmandise",
      },
    ],
  },
  {
    word: "lelewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'alêne, le poinçon",
      },
    ],
    relatedWords: ["lewnena"],
  },
  {
    word: "lemunna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le citron",
      },
    ],
  },
  {
    word: "lendi",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lundi",
      },
    ],
  },
  {
    word: "lerra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'heure",
      },
    ],
  },
  {
    word: "lesna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sable",
      },
    ],
  },
  {
    word: "lewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la corde à linge",
      },
    ],
  },
  {
    word: "lewnena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'alêne, le poinçon",
      },
    ],
    relatedWords: ["lelewna"],
  },
  {
    word: "lira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire",
        example: "Nam li sunda",
        exampleTranslation: "Il fait le travail",
      },
      {
        definition: "faire mal",
        example: "Tam lamu",
        exampleTranslation: "Il est malade ou il se sent mal",
      },
      {
        definition: "préférer, respecter, honorer",
        example: "li ura",
        exampleTranslation: "préférer, respecter, honorer",
      },
      {
        definition: "maltraiter, faire de l'injustice",
        example: "li iira",
        exampleTranslation: "maltraiter, faire de l'injustice",
      },
    ],
    relatedWords: ["li ura", "li iira"],
  },
  {
    word: "liɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "battre",
      },
      {
        definition: "piler",
      },
    ],
  },
  {
    word: "liɓina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lèpre",
      },
    ],
  },
  {
    word: "liɓirina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'aiguille",
      },
    ],
  },
  {
    word: "lidirna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le litre",
      },
    ],
  },
  {
    word: "liɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le haricot",
      },
    ],
  },
  {
    word: "likka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "avaler",
      },
    ],
  },
  {
    word: "lina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lieu",
        example: "Li namma ka jiviɗi",
        exampleTranslation: "Ce lieu n’est pas bon",
      },
      {
        definition: "le temps, la fois",
        example: "Lina hin ka kon ŋgolɗi",
        exampleTranslation: "Il ne me reste pas assez de temps",
      },
    ],
  },
  {
    word: "liŋŋa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "courir",
      },
      {
        definition: "la course",
      },
    ],
  },
  {
    word: "liŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le panier en entonnoir pour la pêche",
      },
    ],
  },
  {
    word: "liwra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la clôture en secco autour de la concession",
      },
    ],
  },
  {
    word: "loɓma",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "fatiguer",
      },
      {
        definition: "la fatigue",
      },
      {
        definition: "être difficile",
      },
      {
        definition: "la difficulté",
      },
    ],
  },
  {
    word: "loɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mouiller, tremper",
      },
      {
        definition: "fondre, perdre consistance",
      },
      {
        definition: "dissoudre",
      },
    ],
  },
  {
    word: "loloona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mouche",
      },
    ],
  },
  {
    word: "lomorora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le numéro, le nombre",
      },
    ],
  },
  {
    word: "loora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pus",
      },
    ],
  },
  {
    word: "lora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la purée",
      },
    ],
  },
  {
    word: "lorra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'or",
      },
    ],
  },
  {
    word: "lossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "manger la boule sans sauce",
      },
    ],
  },
  {
    word: "luɓuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'argile",
      },
    ],
  },
  {
    word: "luɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "moudre",
      },
    ],
  },
  {
    word: "lufuɦuuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le guépard",
      },
    ],
  },
  {
    word: "luguɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "ensorceler, jeter un sort",
        example: "saa luguɗina",
        exampleTranslation: "le sot",
      },
    ],
    relatedWords: ["saa luguɗina"],
  },
  {
    word: "luguɗukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mollet",
      },
    ],
    relatedWords: ["luguɗuk semma"],
  },
  {
    word: "luguɗuk semma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mollet",
      },
    ],
    relatedWords: ["luguɗukka"],
  },
  {
    word: "luluura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cri",
      },
    ],
  },
  {
    word: "lumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pirogue",
      },
    ],
  },
  {
    word: "lumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fleuve",
      },
    ],
  },
  {
    word: "lumunda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le poisson torpille",
      },
    ],
  },
  {
    word: "lussa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "nager",
      },
    ],
  },
  {
    word: "luura",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "jouer",
      },
      {
        definition: "le jeu",
        example: "luu njoŋga, luu laɓara",
        exampleTranslation: "danser, taquiner, s’amuser",
      },
    ],
    relatedWords: ["luu njoŋga", "luu laɓara"],
  },
  {
    word: "luuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grenouille",
      },
    ],
  },
  {
    word: "luura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le crapaud",
      },
    ],
  },

  // // m entree du dictionnaire
  {
    word: "maaɗina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le nouveau-né avant de lui donner un nom",
      },
    ],
  },
  {
    word: "maara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "oublier",
        example: "Humun maa kiyo",
        exampleTranslation: "J’ai oublié",
      },
    ],
  },
  {
    word: "maara",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "vieillesse, vieux, vieille",
      },
    ],
  },
  {
    word: "maɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "étirer, étendre",
      },
    ],
  },
  {
    word: "maɗira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le matin, l'est",
      },
    ],
    relatedWords: ["faɗta maɗira"],
  },
  {
    word: "maɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mort",
      },
      {
        definition: "le cadavre",
      },
      {
        definition: "les funérailles",
        example: "buu maɗna, tii maɗna, ci maɗna",
        exampleTranslation:
          "veiller un mort, pleurer le mort aux funérailles, tuer; la tuerie",
      },
    ],
    relatedWords: ["buu maɗna", "tii maɗna", "ci maɗna"],
  },
  {
    word: "magira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la vipère",
      },
    ],
  },
  {
    word: "mahalaŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le crabe",
      },
    ],
    relatedWords: ["maalaŋga"],
  },
  {
    word: "maalaŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le crabe",
      },
    ],
    relatedWords: ["mahalaŋga"],
  },
  {
    word: "malla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "ouvrir",
      },
    ],
  },
  {
    word: "malna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le chaume",
      },
    ],
  },
  {
    word: "manda",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "choisir",
      },
      {
        definition: "la sélection",
      },
    ],
  },
  {
    word: "manawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le ronier",
      },
    ],
  },
  {
    word: "manbornona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la boisson fermentée faite de la farine du mil",
      },
    ],
    relatedWords: ["maybornona"],
  },
  {
    word: "maybornona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la boisson fermentée faite de la farine du mil",
      },
    ],
    relatedWords: ["manbornona"],
  },
  {
    word: "mandawara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les arachides grillées",
      },
    ],
  },
  {
    word: "mandilla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le foulard de tête, la coiffe",
      },
    ],
  },
  {
    word: "maŋ",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "à, pour",
        example: "Nam ɦal gursura maŋ wayamma. Ni maŋ gi ge?",
        exampleTranslation: "Il donne de l’argent à son frère. C’est pour qui?",
      },
    ],
  },
  {
    word: "maŋga",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "la faiblesse, faible",
      },
    ],
  },
  {
    word: "maŋgasara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le magasin",
      },
    ],
  },
  {
    word: "maŋgassa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les ciseaux",
      },
    ],
  },
  {
    word: "mappana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pain",
      },
    ],
  },
  {
    word: "maragamba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la faucille",
      },
    ],
  },
  {
    word: "mararana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les intestins grillés avec l’huile",
      },
    ],
  },
  {
    word: "mardi",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mardi",
      },
    ],
  },
  {
    word: "mariyaɗ",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "mieux",
        example: "Mariyaɗ ni aŋ hoɗ voo",
        exampleTranslation: "C’est mieux que tu rentres",
      },
    ],
  },
  {
    word: "martora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le marteau",
      },
    ],
  },
  {
    word: "masinna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la machine",
      },
    ],
  },
  {
    word: "matalana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le matelas, l'oreiller",
      },
    ],
  },
  {
    word: "matawiira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la nouveau-née avant de lui donner un nom",
      },
    ],
  },
  {
    word: "may",
    partsOfSpeech: ["conjunction"],
    definitions: [
      {
        definition: "et, aussi",
      },
    ],
  },
  {
    word: "may",
    partsOfSpeech: ["conjunction"],
    definitions: [
      {
        definition: "mais",
        example: "Hurun a i sukŋa, may gursura ka konɗi",
        exampleTranslation:
          "Je voudrai bien aller au marché, mais je n’ai pas d’argent",
      },
    ],
  },
  {
    word: "mayawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bile",
      },
    ],
  },
  {
    word: "me",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "quoi",
        example: "a mege, mege lay",
        exampleTranslation: "pourquoi, quoique, n'importe quoi",
      },
      {
        definition: "quoiqu’il en soit",
        example: "Li ana mege lay ni, aŋ mba fan maɗiya",
        exampleTranslation:
          "Quoiqu’il en soit, viens me rencontrer demain matin",
      },
      {
        definition: "n’importe quoi",
        example: "An ka min gus mege lay mege layɗi",
        exampleTranslation: "Je ne veux pas acheter n’importe quoi",
      },
    ],
    relatedWords: ["a mege", "mege lay"],
  },
  {
    word: "meena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le manche d'un outil",
      },
    ],
  },
  {
    word: "mekka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "montrer",
      },
      {
        definition: "secouer la tête",
      },
    ],
  },
  {
    word: "mekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la corne",
        example: "mek velewna",
        exampleTranslation: "le guidon",
      },
    ],
    relatedWords: ["mek velewna"],
  },
  {
    word: "merekka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "écrire",
      },
      {
        definition: "l’écriture",
      },
    ],
  },
  {
    word: "merkredi",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mercredi",
      },
    ],
  },
  {
    word: "mesewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le malheur qui vient à cause d'un fait adultère",
      },
    ],
  },
  {
    word: "meterna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'instituteur",
      },
    ],
  },
  {
    word: "meterra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mètre",
      },
    ],
  },
  {
    word: "miɗna",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "mourir",
      },
      {
        definition: "la mort",
      },
    ],
  },
  {
    word: "minda",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "aimer",
      },
      {
        definition: "l’amour",
      },
      {
        definition: "vouloir, désirer",
      },
    ],
  },
  {
    word: "minda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "construire, bâtir",
      },
      {
        definition: "la construction",
      },
      {
        definition: "préparer",
      },
      {
        definition: "réparer",
      },
    ],
  },
  {
    word: "miniɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la minute",
      },
    ],
  },
  {
    word: "mobaleɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mobylette",
      },
    ],
  },
  {
    word: "moɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la voiture",
      },
    ],
  },
  {
    word: "mokka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "s'assembler",
      },
    ],
  },
  {
    word: "mokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tabac en boule",
      },
    ],
  },
  {
    word: "molla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "s'assembler, rassembler",
      },
    ],
  },
  {
    word: "mondorra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la montre",
      },
    ],
  },
  {
    word: "moŋgora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mangue",
      },
    ],
  },
  {
    word: "mootlokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'étranglement",
      },
    ],
  },
  {
    word: "morɗomba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la bouillie faite avec du riz, des arachides, et du tamarin",
      },
    ],
  },
  {
    word: "motoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la motocyclette",
      },
    ],
  },
  {
    word: "muɗna",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "croquer",
        example: "muɗ siina",
        exampleTranslation: "grincer les dents",
      },
    ],
    relatedWords: ["muɗ siina"],
  },
  {
    word: "muɗulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le morceau du tronc d’arbre",
      },
      {
        definition: "la pièce de viande",
      },
    ],
  },
  {
    word: "muɗuura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le python de Séba",
      },
    ],
  },
  {
    word: "mugumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'étang",
      },
    ],
  },
  {
    word: "mulna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le chef",
      },
    ],
  },
  {
    word: "mununda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'esprit de l'eau",
      },
    ],
  },
  {
    word: "muruɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "étouffer, étrangler",
      },
    ],
  },
  {
    word: "murugumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la civette",
      },
    ],
  },
  {
    word: "murusna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cendre non éteinte, la braise",
      },
    ],
  },
  {
    word: "musukka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "respirer",
      },
      {
        definition: "le souffle, la respiration, l'haleine",
        example: "Musuk Lonara",
        exampleTranslation: "Le Saint-Esprit",
      },
      {
        definition: "battre (cœur)",
      },
    ],
    relatedWords: ["Musuk Lonara"],
  },
  {
    word: "mba",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "deux",
      },
    ],
  },
  {
    word: "mbaaɓuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'esclave",
      },
    ],
  },
  {
    word: "mbaadlara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le minerai de fer",
      },
    ],
  },
  {
    word: "mbaalina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la pièce de bois qui joint le tuyau de fer et le fourneau d'une pipe",
      },
    ],
  },
  {
    word: "mbaɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "flatter, tromper",
      },
      {
        definition: "la tromperie",
      },
    ],
  },
  {
    word: "mbaɗagiira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la rosée",
      },
    ],
  },
  {
    word: "mbalara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sauce",
      },
      {
        definition: "les ingrédients pour une sauce",
      },
    ],
  },
  {
    word: "mbalna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une poutre transversale d'un abri",
      },
    ],
  },
  {
    word: "mbambara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la duplicité, la complicité",
      },
    ],
  },
  {
    word: "mbambaraŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété d'araignée",
      },
    ],
  },
  {
    word: "mbara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "venir, arriver",
      },
      {
        definition: "l’arrivée",
      },
    ],
  },
  {
    word: "mbaraŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mouton castré",
      },
    ],
  },
  {
    word: "mbarina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bouclier",
      },
    ],
  },
  {
    word: "mbayawi",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le nord",
      },
    ],
    relatedWords: ["faɗta mbayawra"],
  },
  {
    word: "mbeera",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "déménager",
      },
    ],
  },
  {
    word: "mbeegera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'homonyme",
      },
    ],
  },
  {
    word: "mbekka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "saisir",
      },
      {
        definition: "fermer l'œil",
      },
    ],
  },
  {
    word: "mbelekŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la coquetterie",
      },
    ],
  },
  {
    word: "mbelembelera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la brume",
      },
    ],
  },
  {
    word: "mbeleweɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la duplicité",
      },
    ],
  },
  {
    word: "mbiira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lait",
      },
    ],
  },
  {
    word: "mbilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la plaie, la blessure",
      },
    ],
  },
  {
    word: "mbirvinda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tourbillon",
      },
    ],
  },
  {
    word: "mboɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "embrasser",
      },
      {
        definition: "saisir avec des pinces",
      },
    ],
  },
  {
    word: "mboɗina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la corde à sauter",
      },
    ],
  },
  {
    word: "mbogora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le petit grenier",
      },
    ],
  },
  {
    word: "mbomboɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tenaille, la pince",
      },
    ],
  },
  {
    word: "mboona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le profit, le bénéfice",
      },
    ],
  },
  {
    word: "mboona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'eau",
      },
    ],
  },
  {
    word: "mboora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la biche-cochon",
      },
    ],
  },
  {
    word: "mborɓiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les esclaves",
      },
    ],
  },
  {
    word: "mborohoyra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la brume",
      },
      {
        definition: "l'averse",
      },
    ],
  },
  {
    word: "mboyomora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'enfant illégitime",
      },
    ],
  },
  {
    word: "mbudluɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'abri",
      },
    ],
  },
  {
    word: "mbuɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "devenir, changer",
      },
      {
        definition: "commencer",
      },
      {
        definition: "échanger",
      },
    ],
  },
  {
    word: "mbulna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le gras, la graisse",
      },
      {
        definition: "l'huile, la graisse",
      },
      {
        definition: "la graisse, le lubrifiant",
        example:
          "mbul mbiira, mbul sokŋa, mbul yumma, mbul furuɗna, mbul tuɓuruna",
        exampleTranslation:
          "le beurre, la moelle, le miel, l'anti-moustique, le cirage de chaussure",
      },
    ],
    relatedWords: [
      "mbul mbiira",
      "mbul sokŋa",
      "mbul yumma",
      "mbul furuɗna",
      "mbul tuɓuruna",
    ],
  },
  {
    word: "mbulukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rompre un morceau de nourriture",
      },
    ],
  },
  {
    word: "mbumbukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tétrodon",
      },
    ],
  },
  {
    word: "mbumbuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sac",
      },
      {
        definition: "mille francs CFA",
      },
    ],
  },
  {
    word: "mbura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "entasser, empiler",
      },
      {
        definition: "consolider",
      },
      {
        definition: "damer",
      },
      {
        definition: "construire la route",
      },
    ],
  },
  {
    word: "mbura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le barrage, la digue",
        example: "yam mbura",
        exampleTranslation: "le pont",
      },
    ],
    relatedWords: ["yam mbura"],
  },
  {
    word: "mburura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la flèche",
        example: "gu mburura, zi mburura, mburu koloŋga",
        exampleTranslation: "l'arc, le carquois, le fourneau de pipe en métal",
      },
    ],
    relatedWords: ["gu mburura", "zi mburura", "mburu koloŋga"],
  },
  {
    word: "mbussa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "laver",
      },
      {
        definition: "le lavage",
      },
    ],
  },
  {
    word: "mbutlna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le taureau, la vache",
        example: "mbutl ŋguruna",
        exampleTranslation: "le grand taureau",
      },
    ],
    relatedWords: ["mbutl ŋguruna"],
  },
  {
    word: "mbuuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "un grand animal sauvage",
      },
    ],
  },
  {
    word: "mbusukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "bouger",
      },
    ],
  },

  //  // n entree du dictionnaire
  {
    word: "naɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pièce d'étoffe mise sur le repas avant de le servir",
      },
    ],
  },
  {
    word: "namma",
    partsOfSpeech: ["demonstrative"],
    definitions: [
      {
        definition: "ce, celui-là",
      },
    ],
  },
  {
    word: "nam",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "il, lui",
      },
    ],
    relatedWords: ["namu"],
  },
  {
    word: "namu",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "il, lui",
      },
    ],
    relatedWords: ["nam"],
  },
  {
    word: "nasaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'européen, les occidentaux",
      },
    ],
  },
  {
    word: "nekka",
    partsOfSpeech: ["verb", "noun", "adjective"],
    definitions: [
      {
        definition: "être lourd",
      },
      {
        definition: "le poids, la lourdeur, la pesanteur, le fardeau, lourd",
      },
      {
        definition: "devenir épais, coaguler",
      },
    ],
  },
  {
    word: "nera",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mûrir",
      },
      {
        definition: "avertir",
      },
      {
        definition: "conseiller",
      },
      {
        definition: "goutter",
      },
    ],
  },
  {
    word: "nera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sagesse",
      },
      {
        definition: "le secret",
      },
    ],
  },
  {
    word: "nereɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "coller",
      },
      {
        definition: "boucher",
      },
    ],
  },
  {
    word: "newna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le secret",
      },
    ],
  },
  {
    word: "ni",
    partsOfSpeech: ["verb", "pronoun"],
    definitions: [
      {
        definition: "être",
        example: "Nam ni wari",
        exampleTranslation: "Il est noir",
      },
      {
        definition: "c'est",
        example: "Ni anu",
        exampleTranslation: "C’est moi",
      },
    ],
  },
  {
    word: "nikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "coucher (soleil)",
      },
    ],
  },
  {
    word: "niŋŋa",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "l’autre",
      },
    ],
  },
  {
    word: "noyra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "détester, haïr, mépriser",
      },
      {
        definition: "abandonner",
      },
      {
        definition: "cesser, laisser",
      },
    ],
  },
  {
    word: "nusna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la moitié",
      },
    ],
  },
  {
    word: "ndaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la peur",
      },
    ],
  },
  {
    word: "ndaara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pou",
      },
    ],
  },
  {
    word: "ndaɗta",
    partsOfSpeech: ["demonstrative"],
    definitions: [
      {
        definition: "cette, celle-là",
      },
    ],
  },
  {
    word: "ndaɗ",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "elle",
      },
    ],
    relatedWords: ["ndaɗu"],
  },
  {
    word: "ndaɗu",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "elle",
      },
    ],
    relatedWords: ["ndaɗ"],
  },
  {
    word: "ndak",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "vous, tu (féminin)",
      },
    ],
    relatedWords: ["ndaku"],
  },
  {
    word: "ndaku",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "vous, tu (féminin)",
      },
    ],
    relatedWords: ["ndak"],
  },
  {
    word: "ndakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se fatiguer",
      },
      {
        definition: "souffrir",
      },
    ],
  },
  {
    word: "ndalla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "s'entretenir, bavarder, causer",
      },
      {
        definition: "l’entretien",
      },
      {
        definition: "se lamenter",
        example: "ndal boyna",
        exampleTranslation: "le proverbe, la parabole",
      },
    ],
    relatedWords: ["ndal boyna"],
  },
  {
    word: "ndalaŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une sorte de danse",
      },
    ],
  },
  {
    word: "ndandaliira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la sangsue",
      },
    ],
  },
  {
    word: "ndaŋgara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la terre",
      },
      {
        definition: "le monde",
      },
    ],
  },
  {
    word: "ndarana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le voisin, le copain, le collègue",
        example: "Ndariyamma mba kaɗi",
        exampleTranslation: "Ses collègues ne sont pas venus",
      },
    ],
  },
  {
    word: "ndawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "ndeɓeŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la stérilité",
      },
    ],
  },
  {
    word: "ndemba",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "tenter, accuser",
      },
      {
        definition: "la tentation, l’accusation",
      },
    ],
  },
  {
    word: "ndeŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la gâchette d'un piège",
        example: "ndeŋ bulukka",
        exampleTranslation: "la gâchette du fusil",
      },
    ],
    relatedWords: ["ndeŋ bulukka"],
  },
  {
    word: "ndimma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de figuier",
      },
    ],
  },
  {
    word: "ndira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "aller",
      },
      {
        definition: "tomber",
      },
      {
        definition: "fermenter",
      },
    ],
  },
  {
    word: "ndoɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cueillir",
      },
    ],
  },
  {
    word: "ndolla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "concerner",
      },
    ],
  },
  {
    word: "ndolla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "décorer",
      },
    ],
  },
  {
    word: "ndolla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la saison des pluies",
      },
    ],
  },
  {
    word: "ndondona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lèpre",
      },
    ],
  },
  {
    word: "ndoonda",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "chasser",
      },
      {
        definition: "la chasse",
      },
    ],
  },
  {
    word: "ndoosna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la fumée",
      },
      {
        definition: "la vapeur",
      },
    ],
  },
  {
    word: "ndukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "fermer",
        example: "nduk zina, nduk kona",
        exampleTranslation: "assiéger, saisir la main",
      },
    ],
    relatedWords: ["nduk zina", "nduk kona"],
  },
  {
    word: "ndulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une danse",
      },
    ],
  },
  {
    word: "ndumba",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "compter",
      },
      {
        definition: "le nombre",
      },
      {
        definition: "lire",
      },
      {
        definition: "la lecture",
      },
    ],
  },
  {
    word: "ndumndurina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le petit enfant qui ne sait pas encore parler",
      },
    ],
  },
  {
    word: "ndumura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mutisme",
      },
    ],
  },
  {
    word: "nduruvuɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "s'effondrer",
      },
    ],
  },
  {
    word: "ndusura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'oncle maternel",
        example: "Nam i vi ndusumu",
        exampleTranslation: "Il est parti chez son oncle maternel",
      },
    ],
  },
  {
    word: "nduvunda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'obscurité",
      },
    ],
  },
  {
    word: "njaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grand filet pour chasser des animaux",
      },
    ],
  },
  {
    word: "njaara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "aligner, arranger, mettre en ordre",
      },
    ],
  },
  {
    word: "njaɓara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la réunion religieuse",
      },
      {
        definition: "la chapelle",
      },
    ],
  },
  {
    word: "njaɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "parler, converser, causer",
      },
      {
        definition: "la parole, la conversation, la causerie",
      },
    ],
  },
  {
    word: "njagina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le résidu",
      },
    ],
  },
  {
    word: "njalaɓma",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "flatter",
      },
      {
        definition: "la flatterie",
      },
      {
        definition: "apaiser",
      },
      {
        definition: "négocier",
      },
    ],
  },
  {
    word: "njalaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'éperon",
      },
    ],
  },
  {
    word: "njalaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grande patte arrière de la sauterelle",
      },
    ],
  },
  {
    word: "njamara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le morse",
      },
    ],
  },
  {
    word: "njawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la queue",
        example: "njaw lumba, njaw layna",
        exampleTranslation: "l'arrière d'un bateau, le pied du lit",
      },
    ],
    relatedWords: ["njaw lumba", "njaw layna"],
  },
  {
    word: "njayra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "répandre, disperser, éparpiller",
      },
    ],
  },
  {
    word: "njayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le ver de Guinée",
      },
    ],
  },
  {
    word: "njeŋgera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la nuit",
      },
    ],
  },
  {
    word: "njeɓena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "les graines utilisées comme des condiments pour les bouillies et les sauces comprenant des arachides, la sésame, et le concombre",
      },
    ],
  },
  {
    word: "njeɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "ruer, savater",
      },
    ],
  },
  {
    word: "njeɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la hache",
      },
    ],
  },
  {
    word: "njeena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le gros grillon qui crie fort pendant le soir",
      },
    ],
  },
  {
    word: "njekŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le résidu qui reste dans le tamis",
      },
    ],
    relatedWords: ["yam njekŋa"],
  },
  {
    word: "njeleɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pierre à feu",
      },
    ],
  },
  {
    word: "njelna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la corde utilisée pour transporter des poissons",
      },
    ],
  },
  {
    word: "njetla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "les morceaux brisés des graines des céréales ou d’arachide",
      },
    ],
  },
  {
    word: "njewɗekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fouet, la chicotte",
      },
    ],
  },
  {
    word: "njiira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le venin",
      },
    ],
  },
  {
    word: "njiŋnjiŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les fesses",
      },
    ],
    relatedWords: ["njiŋnjiŋ ura"],
  },
  {
    word: "njoɗira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piège à poissons",
      },
    ],
  },
  {
    word: "njogoɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "lutter",
      },
      {
        definition: "la lutte",
      },
    ],
  },
  {
    word: "njogoɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "creuser",
      },
    ],
  },
  {
    word: "njolgoɗina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le ver de terre",
      },
    ],
  },
  {
    word: "njoŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une sorte de danse",
      },
    ],
  },
  {
    word: "njorina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le tissage d'un panier en paille dont il y a une tige de paille entrelacé avec une autre tige de paille",
      },
    ],
  },
  {
    word: "njorona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'épuisement",
      },
    ],
  },
  {
    word: "njufna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'homme, le mâle",
      },
      {
        definition: "le mari, l'époux",
      },
      {
        definition: "la droite",
      },
    ],
  },
  {
    word: "njunda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lier, envelopper, attacher",
        example: "njun guna, njun gaɗta",
        exampleTranslation:
          "rassembler du bois pour faire un fagot, établir une loi",
      },
    ],
    relatedWords: ["njun guna", "njun gaɗta"],
  },
  {
    word: "njunda",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "aider",
      },
      {
        definition: "l’aide",
      },
    ],
  },
  {
    word: "njunjunda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le conte",
      },
    ],
  },
  {
    word: "njuvulna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le canard domestique",
      },
    ],
  },
  {
    word: "njuvulna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "terme général pour les vers, les chenilles, et les larves",
      },
    ],
  },

  // ŋ entree de dictionaire
  {
    word: "ŋgaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la girafe",
      },
    ],
  },
  {
    word: "ŋgaara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "enfoncer, forcer",
        example: "Moɗta ŋgaa kaŋgaa",
        exampleTranslation: "Le camion s’est enfoncé",
      },
      {
        definition: "reculer",
        example: "Asi ŋgaa usi dagani",
        exampleTranslation: "Ils reculent en arrière",
      },
    ],
  },
  {
    word: "ŋgaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couper",
      },
      {
        definition: "abattre",
      },
    ],
  },
  {
    word: "ŋgaffa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rencontrer",
        example: "An ŋgaf bananna ay voɗo",
        exampleTranslation: "J’ai rencontré mon ami en chemin",
      },
      {
        definition: "accepter",
        example: "i ŋgaffa",
        exampleTranslation: "aller pour rendre condoléance",
      },
    ],
  },
  {
    word: "ŋgaffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la poitrine",
      },
    ],
  },
  {
    word: "ŋgakŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grue couronnée",
      },
    ],
  },
  {
    word: "ŋgalla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "brûler",
        example: "ŋgal kura",
        exampleTranslation: "allumer un feu",
      },
    ],
    relatedWords: ["ŋgal kura"],
  },
  {
    word: "ŋgalina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le manioc",
      },
    ],
  },
  {
    word: "ŋgalira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le caméléon",
      },
    ],
  },
  {
    word: "ŋgalna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "marmite de terre pour cuisiner",
      },
    ],
  },
  {
    word: "ŋgamina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fer",
      },
    ],
  },
  {
    word: "ŋgaŋgaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le refus d’obéir",
      },
    ],
  },
  {
    word: "ŋgaŋgarawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mante religieuse",
      },
    ],
  },
  {
    word: "ŋgara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "mesurer",
      },
      {
        definition: "louer",
      },
      {
        definition: "la louange",
        example: "ŋga tara",
        exampleTranslation: "être orgueilleux; l’orgueille",
      },
      {
        definition: "interpréter",
        example: "ŋga vunna",
        exampleTranslation: "discuter",
      },
    ],
    relatedWords: ["ŋga tara", "ŋga vunna"],
  },
  {
    word: "ŋgarapiira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'aube",
      },
    ],
  },
  {
    word: "ŋgarassa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "regarder fixement",
      },
    ],
  },
  {
    word: "ŋgasina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le riz cuit",
      },
    ],
  },
  {
    word: "ŋgayra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cacher",
      },
    ],
  },
  {
    word: "ŋgayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tige de mil",
      },
    ],
  },
  {
    word: "ŋgeɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la piège pour les souris",
      },
    ],
  },
  {
    word: "ŋgella",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rendre sourd",
      },
    ],
  },
  {
    word: "ŋgeŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la calomnie, la médisance",
      },
    ],
  },
  {
    word: "ŋgeŋgeŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les fesses",
      },
    ],
    relatedWords: ["ŋgeŋgeŋ ura"],
  },
  {
    word: "ŋgeŋgeŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le balafon",
      },
    ],
  },
  {
    word: "ŋgetlna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sable",
      },
    ],
  },
  {
    word: "ŋgewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le couteau",
        example: "ŋgew garaɗna, ŋgew ma digiina",
        exampleTranslation: "l'épée, le couteau avec une large lame",
      },
    ],
    relatedWords: ["ŋgew garaɗna", "ŋgew ma digiina"],
  },
  {
    word: "ŋgiɗiŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fond de la jarre à eau",
      },
    ],
  },
  {
    word: "ŋgiɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les pousses de sorgho utilisé pour préparer des boissons",
      },
    ],
    relatedWords: ["ŋgiina"],
  },
  {
    word: "ŋgiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les pousses de sorgho utilisé pour préparer des boissons",
      },
    ],
    relatedWords: ["ŋgiɗna"],
  },
  {
    word: "ŋgiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les graines de l'oseille",
      },
    ],
  },
  {
    word: "ŋgilisina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le riz",
      },
    ],
  },
  {
    word: "ŋgilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le creux dans un arbre",
        example: "ŋgil barawna, ŋgil liɓirina",
        exampleTranslation: "la poche, le chas de l'aiguille",
      },
    ],
    relatedWords: ["ŋgil barawna", "ŋgil liɓirina"],
  },
  {
    word: "ŋgiriŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la barrière en secco utilisée pour diriger des poissons vers un piège",
      },
    ],
  },
  {
    word: "ŋgirifna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le trou trouvé dans un marécage pendant que l'eau baisse",
      },
    ],
  },
  {
    word: "ŋgisiɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "observer, épier",
      },
      {
        definition: "soupçonner",
      },
    ],
  },
  {
    word: "ŋgisna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le venin",
      },
    ],
  },
  {
    word: "ŋgoɓpa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "rugir, gronder",
      },
      {
        definition: "le rugissement",
      },
    ],
  },
  {
    word: "ŋgoɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la calebasse",
        example: "ŋgoɗ yamba",
        exampleTranslation: "le crâne",
      },
    ],
    relatedWords: ["ŋgoɗ yamba"],
  },
  {
    word: "ŋgokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la boucle",
      },
    ],
  },
  {
    word: "ŋgokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la malnutrition",
      },
    ],
  },
  {
    word: "ŋgolla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grandeur",
      },
      {
        definition: "l'importance",
      },
    ],
  },
  {
    word: "ŋgolofna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le coude",
      },
    ],
    relatedWords: ["ŋgolof kona"],
  },
  {
    word: "ŋgolomba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'humidité, la fraîcheur",
      },
    ],
  },
  {
    word: "ŋgomba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "porter",
      },
      {
        definition: "établir",
      },
      {
        definition: "observer, obéir",
      },
      {
        definition: "conserver",
      },
      {
        definition: "la conservation",
      },
    ],
  },
  {
    word: "ŋgomba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "donner un cadeau",
        example: "vi ŋgomba",
        exampleTranslation: "accepter des pots-de-vin",
      },
    ],
    relatedWords: ["vi ŋgomba"],
  },
  {
    word: "ŋgomba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le rugissement",
      },
    ],
  },
  {
    word: "ŋgonira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les jumeaux",
      },
      {
        definition:
          "l'animal tel comme un chien qui naît seul au contraire de naître dans une portée",
      },
    ],
  },
  {
    word: "ŋgoŋgoloora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cantharide",
      },
    ],
  },
  {
    word: "ŋgoŋgorgona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bousier",
      },
    ],
  },
  {
    word: "ŋgoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le dos",
        example: "Asi cam kay ŋgoromu",
        exampleTranslation: "Ils l’ont tapé sur le dos",
      },
      {
        definition: "la surface extérieure d'un récipient",
        example: "ŋgoo ŋgoɗta ki zoɗiya",
        exampleTranslation: "L’extérieure de la calebasse est sale",
      },
      {
        definition: "derrière",
        example: "Nam col ŋgoo goŋga",
        exampleTranslation: "Il est resté derrière la case",
      },
      {
        definition: "après",
        example: "Nam hin hoɗ ay ŋgoo dagani",
        exampleTranslation: "Il reviendra après",
      },
    ],
    relatedWords: ["ŋgoo"],
  },
  {
    word: "ŋgoora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la brousse",
      },
    ],
    relatedWords: ["ŋgoo", "ŋgoro"],
  },
  {
    word: "ŋgora",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "ouvrir",
      },
      {
        definition: "l’ouverture",
      },
    ],
  },
  {
    word: "ŋgotlna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la joue",
      },
    ],
  },
  {
    word: "ŋgoyna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le champ non sarclé",
        example: "ja ŋgoyna",
        exampleTranslation: "sarcler un champ",
      },
    ],
    relatedWords: ["ja ŋgoyna"],
  },
  {
    word: "ŋguɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la calebasse",
      },
    ],
  },
  {
    word: "ŋguffa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "encercler, entourer",
      },
      {
        definition: "attraper",
      },
    ],
  },
  {
    word: "ŋguffa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mil non pilé cuit",
      },
    ],
  },
  {
    word: "ŋgulla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "insulter",
      },
      {
        definition: "l’insulte",
      },
    ],
  },
  {
    word: "ŋguruffa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "serrer",
      },
    ],
  },
  {
    word: "ŋgusna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'arbre",
      },
    ],
  },
  {
    word: "ŋgussa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'esprit",
      },
      {
        definition: "l'ombre",
      },
    ],
  },
  {
    word: "ŋguyra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "entourer, encercler",
      },
    ],
  },

  // o entree de dictionaire
  {
    word: "offa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "manger des substances poudrées",
      },
    ],
  },
  {
    word: "olo",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "encore",
      },
    ],
  },
  {
    word: "oora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "avoir pitié de",
      },
    ],
  },
  {
    word: "oohona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le nouveau-né avant de lui donner un nom",
      },
    ],
  },
  {
    word: "ora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "déféquer",
        example: "soɗna o, Soɗna oom kaa day",
        exampleTranslation: "avoir la diarrhée, Il a la diarrhée depuis hier",
      },
    ],
    relatedWords: ["soɗna o"],
  },
  {
    word: "oriyona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le casse-croûte frit fait avec de la farine de mil et de riz",
      },
    ],
  },
  {
    word: "ossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "prendre soin de, garder",
      },
    ],
  },
  {
    word: "otla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tousser",
      },
    ],
  },
  {
    word: "otlna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la toux",
      },
    ],
  },
  {
    word: "oyra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "gémir, se plaindre",
      },
    ],
  },
  {
    word: "oyra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "remplir",
      },
    ],
  },

  // // p entree de dictionaire
  {
    word: "paara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "creuser",
      },
      {
        definition: "filer, tresser",
      },
    ],
  },
  {
    word: "paara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire le commerce",
      },
    ],
  },
  {
    word: "paɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "arracher, enlever",
      },
      {
        definition: "cueillir",
      },
      {
        definition: "commencer tout d'un coup",
        example: "paɗ bolla, paɗ vunna",
        exampleTranslation: "faire un discours, bénir; la bénédiction",
      },
    ],
    relatedWords: ["paɗ bolla", "paɗ vunna"],
  },
  {
    word: "pakŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le Pâques",
      },
    ],
  },
  {
    word: "pakeɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le paquet",
      },
    ],
  },
  {
    word: "palaɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'occident, la personne civilisée",
        example: "Kay, palaɗ namma!",
        exampleTranslation: "Vraiment, ce civilisé!",
      },
    ],
  },
  {
    word: "palaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "terme général pour désigner les musulmans",
        example: "Nam gus barawra ay ko palaɗta",
        exampleTranslation: "Il a payé cet habit chez les musulmans",
      },
      {
        definition: "l’autorité administrative",
        example: "Palaɗta Gayara gam magaara ay kamu",
        exampleTranslation:
          "Les autorités administratives de Gaya lui ont envoyé une convocation",
      },
    ],
  },
  {
    word: "palawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couper la viande en morceaux",
      },
    ],
  },
  {
    word: "paliira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le paludisme",
      },
    ],
  },
  {
    word: "pana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tabac",
      },
    ],
  },
  {
    word: "panda",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "se moquer, mépriser",
      },
      {
        definition: "la moquerie, le mépris",
      },
    ],
  },
  {
    word: "pantaloŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pantalon",
      },
    ],
  },
  {
    word: "papaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les tongs",
      },
    ],
  },
  {
    word: "papayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chauve-souris",
      },
    ],
  },
  {
    word: "parandina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le plat, la grande assiette",
      },
    ],
  },
  {
    word: "pasaara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'oignon",
      },
    ],
  },
  {
    word: "pasterna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pasteur",
      },
    ],
  },
  {
    word: "patla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mâcher",
      },
    ],
  },
  {
    word: "patlawra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piment rouge",
      },
    ],
  },
  {
    word: "pay",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "à côté de, près de",
        example: "Nam gis tam pay goŋga",
        exampleTranslation: "Il s’est adossé à côté de la case",
      },
    ],
  },
  {
    word: "payna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le peigne",
      },
    ],
  },
  {
    word: "payna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la côte, le côté",
        example: "pay guna",
        exampleTranslation: "tronc d'arbre",
      },
    ],
    relatedWords: ["pay guna"],
  },
  {
    word: "payra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la barrière en secco utilisée pour diriger des poissons vers un piège",
      },
    ],
  },
  {
    word: "peɗ",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "tout",
      },
    ],
  },
  {
    word: "peɗewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le culot",
      },
    ],
  },
  {
    word: "peɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lécher",
      },
    ],
  },
  {
    word: "peeɗewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'œsophage",
      },
    ],
    relatedWords: ["peeɗew della"],
  },
  {
    word: "pekka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pincer",
      },
      {
        definition: "ôter, enlever",
      },
      {
        definition: "couper une petite morceau",
      },
    ],
  },
  {
    word: "pelegewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le trou dans le plancher d'une case pour l’urine d’un cheval",
      },
    ],
  },
  {
    word: "peleŋgeɗena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'assiette",
      },
    ],
  },
  {
    word: "pella",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'articulation de l'épaule",
        example: "pel bikŋa, sok ma pel bikŋana",
        exampleTranslation: "l'épaule, l'omoplate",
      },
    ],
    relatedWords: ["pel bikŋa", "sok ma pel bikŋana"],
  },
  {
    word: "pelna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pelle",
      },
    ],
  },
  {
    word: "peŋgesna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'épingle de sûreté",
      },
    ],
  },
  {
    word: "pepeɗena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "morceau de calebasse",
      },
    ],
  },
  {
    word: "pereɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tourner, changer",
      },
    ],
  },
  {
    word: "pereŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pagaie",
      },
    ],
  },
  {
    word: "perna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le prêtre",
      },
    ],
  },
  {
    word: "piira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "voler",
      },
      {
        definition: "fuir, échapper",
      },
    ],
  },
  {
    word: "piipiira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'aube",
      },
    ],
  },
  {
    word: "piipiira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le papillon, la mite",
      },
    ],
  },
  {
    word: "pikina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le demi-hectare",
      },
    ],
  },
  {
    word: "pindilla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lampe",
      },
    ],
  },
  {
    word: "pinina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pneu",
      },
    ],
  },
  {
    word: "pira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "enterrer",
      },
      {
        definition: "planter",
      },
    ],
  },
  {
    word: "polna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grand bouclier en peau",
      },
    ],
  },
  {
    word: "polokka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "écosser",
      },
      {
        definition: "muer",
      },
    ],
  },
  {
    word: "pomba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pompe à bicyclette",
      },
    ],
  },
  {
    word: "pona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sein, la mamelle",
      },
      {
        definition: "le lait de la mère",
      },
    ],
  },
  {
    word: "pondina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le clou, la pointe",
      },
    ],
  },
  {
    word: "poŋga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lever, soulever",
      },
    ],
  },
  {
    word: "poŋga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "frapper, battre",
      },
    ],
  },
  {
    word: "pora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "nettoyer le champ avant de le semer",
      },
      {
        definition: "chasser",
      },
      {
        definition: "secouer",
      },
      {
        definition: "verser",
      },
      {
        definition: "claquer les mains",
      },
    ],
  },
  {
    word: "porokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le voyage, la visite",
      },
    ],
  },
  {
    word: "posna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la poche",
      },
    ],
  },
  {
    word: "poyra",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "se promener",
      },
      {
        definition: "la promenade",
      },
    ],
  },
  {
    word: "pukka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tomber",
      },
    ],
  },
  {
    word: "puluɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rendre fou",
      },
    ],
  },
  {
    word: "pupusna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la charrette",
      },
    ],
  },
  {
    word: "puruɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "fuir, échapper",
      },
    ],
  },
  {
    word: "purussa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "vaporiser avec la bouche",
      },
    ],
  },
  {
    word: "puura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "donner un cadeau à quelqu’un qui part pour un voyage",
      },
    ],
  },

  // r entree de dictionaire
  {
    word: "radiyona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la radio",
      },
    ],
  },
  {
    word: "ratona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le râteau",
      },
    ],
  },
  {
    word: "risna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le riz",
      },
    ],
  },

  // s entree de dictionaire
  {
    word: "sa walla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "crier",
      },
      {
        definition: "le cri",
      },
    ],
  },
  {
    word: "saara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "être douloureux, piquer, faire mal",
      },
      {
        definition: "la douleur",
      },
    ],
  },
  {
    word: "saara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mendier",
      },
    ],
  },
  {
    word: "saara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "regarder, observer",
      },
      {
        definition: "viser",
      },
      {
        definition: "penser, contempler",
      },
    ],
  },
  {
    word: "saawra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mépriser",
      },
    ],
  },
  {
    word: "sabunna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le savon",
      },
    ],
  },
  {
    word: "saɓa",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "quand",
      },
    ],
  },
  {
    word: "saɓak",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "très, plus",
        example: "Nam ɓii saɓak co ɦay. Nam ɓii saɓak jivi suunu",
        exampleTranslation: "Il écrit très mal. Il écrit plus bon que moi",
      },
    ],
  },
  {
    word: "saɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lance, la sagaie",
      },
    ],
  },
  {
    word: "saɓurra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la docilité, le pardon",
      },
    ],
  },
  {
    word: "saɗawra",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "prier",
      },
      {
        definition: "la prière",
      },
    ],
  },
  {
    word: "saɗina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la racine",
      },
      {
        definition: "la veine",
      },
    ],
  },
  {
    word: "saɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "essuyer, caresser, frotter",
      },
      {
        definition: "polir, raboter",
      },
      {
        definition: "sécher",
      },
    ],
  },
  {
    word: "sagana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le peigne",
      },
    ],
  },
  {
    word: "sakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "peigner",
      },
    ],
  },
  {
    word: "sakkanna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bouilloire",
      },
    ],
  },
  {
    word: "sakŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sac",
      },
    ],
  },
  {
    word: "salaɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tisser, tresser",
      },
    ],
  },
  {
    word: "salagana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "bâton pour remuer la boule",
      },
    ],
  },
  {
    word: "salanna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tuteur, le protecteur",
      },
    ],
  },
  {
    word: "salla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "laver des graines ou des grains",
      },
    ],
  },
  {
    word: "samadi",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le samedi",
      },
    ],
  },
  {
    word: "samaɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le balai",
      },
      {
        definition: "les feuilles des haricots",
      },
    ],
  },
  {
    word: "sampireera",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chambre à air",
      },
    ],
  },
  {
    word: "sana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la personne, l'homme",
      },
      {
        definition: "quelqu'un, n'importe qui, personne",
        example: "Sa ka mbaɗi",
        exampleTranslation: "Personne ne vient",
      },
    ],
  },
  {
    word: "sanda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "sourire",
      },
      {
        definition: "rire",
      },
      {
        definition: "ridiculiser, se moquer",
      },
    ],
  },
  {
    word: "sandalina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mille-pattes",
      },
    ],
  },
  {
    word: "sandukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la malle",
      },
    ],
  },
  {
    word: "saŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les règles",
      },
    ],
  },
  {
    word: "saraɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lier, ligoter, attacher",
      },
    ],
  },
  {
    word: "sarina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la racine",
      },
    ],
  },
  {
    word: "sawalna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sac",
      },
    ],
  },
  {
    word: "sayna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le thé",
      },
    ],
  },
  {
    word: "sayra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "être fatigué, être épuisé, s'évanouir",
      },
      {
        definition: "essayer",
      },
    ],
  },
  {
    word: "sayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mil pénicillaire",
      },
    ],
  },
  {
    word: "saytokka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le maïs",
      },
    ],
  },
  {
    word: "seɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "essuyer",
      },
      {
        definition: "manger en essuyant la nourriture avec le doigt",
      },
    ],
  },
  {
    word: "seenekŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mangouste",
      },
    ],
  },
  {
    word: "seeselewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'escarpolette",
      },
    ],
  },
  {
    word: "segenewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tique",
      },
    ],
  },
  {
    word: "segereɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cigarette",
      },
    ],
  },
  {
    word: "selegewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "la boisson préparée avec les ingrédients d'un brassage antérieur",
      },
    ],
  },
  {
    word: "selena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le banc de poissons",
      },
    ],
  },
  {
    word: "sella",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "entrer",
      },
      {
        definition: "sortir",
      },
      {
        definition: "verser",
      },
    ],
  },
  {
    word: "semeɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le vent",
      },
      {
        definition: "le froid",
      },
    ],
  },
  {
    word: "semira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les parents",
      },
    ],
    relatedWords: ["somira"],
  },
  {
    word: "semissa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chemise",
      },
    ],
  },
  {
    word: "semma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le nom, l’appel",
      },
    ],
  },
  {
    word: "semma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le pied",
      },
      {
        definition: "la trace, l'empreinte",
      },
      {
        definition: "la fois",
        example: "Nam dok Gaya sem vatl",
        exampleTranslation: "Il est parti cinq fois à Gaya",
      },
    ],
  },
  {
    word: "sena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'œuf",
      },
    ],
  },
  {
    word: "senena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le champ",
      },
    ],
  },
  {
    word: "senna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sommeil",
      },
    ],
  },
  {
    word: "sentirna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la signature",
      },
    ],
  },
  {
    word: "sentirna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la ceinture",
      },
    ],
  },
  {
    word: "seŋga",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "arrêter, empêcher",
        example: "seŋ vunna",
        exampleTranslation: "se taire",
      },
    ],
    relatedWords: ["seŋ vunna"],
  },
  {
    word: "seŋgena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la moustiquaire",
      },
    ],
  },
  {
    word: "seseɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le petit balai à meule",
      },
    ],
  },
  {
    word: "sessa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chaise",
      },
    ],
  },
  {
    word: "seweena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de figuier",
      },
    ],
  },
  {
    word: "sewel",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "jouer au tambour",
        example: "sewel della",
        exampleTranslation: "accorder un tambour",
      },
    ],
    relatedWords: ["sewel della"],
  },
  {
    word: "si yumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le rayon de miel",
      },
    ],
  },
  {
    word: "siilira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la nudité",
      },
    ],
  },
  {
    word: "siina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la scie",
      },
    ],
  },
  {
    word: "siina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la dent",
      },
      {
        definition: "la défense",
      },
      {
        definition: "la lame",
      },
      {
        definition: "l'épine",
      },
      {
        definition: "la fondation",
      },
    ],
  },
  {
    word: "siira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "fuir, échapper",
        example: "Caamba sii kam vi somiyoɗu",
        exampleTranslation: "Sa femme a fui chez ses parents",
      },
      {
        definition: "souffler",
        example: "Semeɗna siira",
        exampleTranslation: "Le vent souffle",
      },
      {
        definition: "vanner",
        example: "Cara sii ŋgilisina",
        exampleTranslation: "La femme vanne le riz",
      },
    ],
  },
  {
    word: "silira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une pièce de monnaie",
      },
    ],
  },
  {
    word: "simina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la larme",
      },
    ],
  },
  {
    word: "simora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le ciment",
      },
    ],
  },
  {
    word: "sinda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la langue, la parole",
      },
    ],
  },
  {
    word: "sindilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le léopard",
      },
    ],
  },
  {
    word: "sira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pleuvoir",
        example: "Lona siya",
        exampleTranslation: "Il pleut",
      },
    ],
  },
  {
    word: "sira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pousser",
        example: "Baŋgawna si cocoo",
        exampleTranslation: "La patate pousse beaucoup",
      },
    ],
  },
  {
    word: "sira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'ocre rouge",
      },
    ],
  },
  {
    word: "sirsona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cerceau",
      },
    ],
  },
  {
    word: "sisilira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le muscle en fuseau",
      },
    ],
  },
  {
    word: "sisilira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une sorte de rongeur",
      },
    ],
  },
  {
    word: "sisira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une pièce de monnaie",
      },
    ],
  },
  {
    word: "siwi",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "après-demain",
      },
    ],
  },
  {
    word: "soɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "sucer",
        example: "soɓ koloŋga",
        exampleTranslation: "fumer une pipe",
      },
    ],
    relatedWords: ["soɓ koloŋga"],
  },
  {
    word: "soɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'excrément, les selles",
      },
      {
        definition: "les restes",
      },
    ],
  },
  {
    word: "soɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la piège à gros gibier",
      },
    ],
  },
  {
    word: "sogolna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tronc de l'arbre",
      },
    ],
  },
  {
    word: "sojana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le soja",
      },
    ],
  },
  {
    word: "sokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'os, l'arête",
      },
      {
        definition: "la tige, le tronc",
      },
    ],
  },
  {
    word: "sora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "sécher",
      },
    ],
  },
  {
    word: "soora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "devenir faible",
        example: "Sumgirinda soron ki ɦay",
        exampleTranslation: "La fièvre jaune m’a rendu faible",
      },
    ],
  },
  {
    word: "soora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "filtrer",
        example: "Ndaɗ soo zoyra u bewra",
        exampleTranslation:
          "Elle filtre la pâte d’arachide avec le tamis traditionnel",
      },
      {
        definition: "distiller",
        example: "Cara soo ergena",
        exampleTranslation: "La femme distille de l’argi",
      },
    ],
  },
  {
    word: "soora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "crier, siffler, faire un tumulte",
        example: "Kemba tum soora",
        exampleTranslation: "Les enfants ont crié",
      },
    ],
  },
  {
    word: "soona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le seau",
      },
    ],
  },
  {
    word: "soroɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "glisser",
      },
    ],
  },
  {
    word: "soyra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la protoptère",
      },
    ],
  },
  {
    word: "su",
    partsOfSpeech: ["particle"],
    definitions: [
      {
        definition: "mot utilisé pour former une question de oui/non",
        example: "Ni nam su?",
        exampleTranslation: "Est-ce que c’est lui?",
      },
    ],
  },
  {
    word: "suɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la soupe",
      },
    ],
  },
  {
    word: "suɓuura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "grandir, augmenter, gonfler",
      },
    ],
  },
  {
    word: "suɓuuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sucre",
      },
    ],
  },
  {
    word: "suɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "sauver, guérir, libérer",
      },
      {
        definition: "le salut, la guérison, la libération",
      },
    ],
  },
  {
    word: "suɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "vider, évacuer",
      },
    ],
  },
  {
    word: "sufrana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le plat, la grande assiette",
      },
    ],
  },
  {
    word: "sugurna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sucre",
      },
    ],
  },
  {
    word: "sukŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la force",
      },
    ],
  },
  {
    word: "sukŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le marché",
      },
      {
        definition:
          "le jour de la semaine pendant lequel le marché d'un village spécifié a lieu",
      },
      {
        definition: "la semaine",
      },
    ],
  },
  {
    word: "sululla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "déborder",
      },
      {
        definition: "le débordement",
      },
    ],
  },
  {
    word: "summa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bière",
      },
    ],
  },
  {
    word: "sumuura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'urine, le sperme",
        example: "coo sumura, zi sumuura",
        exampleTranslation: "uriner, la vessie",
      },
    ],
    relatedWords: ["coo sumura", "zi sumuura"],
  },
  {
    word: "sunda",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "servir, travailler pour quelqu'un",
      },
      {
        definition: "le travail",
      },
      {
        definition: "envoyer",
      },
      {
        definition: "le message",
        example: "li sunda, vun sunda, saa sunda",
        exampleTranslation: "travailler, le message, le messager",
      },
    ],
    relatedWords: ["li sunda", "vun sunda", "saa sunda"],
  },
  {
    word: "suŋgura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'argent",
      },
      {
        definition: "le prix",
      },
    ],
  },
  {
    word: "sura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "dépasser, surpasser",
        example: "Nam su wayamma nde",
        exampleTranslation: "Il dépasse légèrement son frère",
      },
    ],
  },
  {
    word: "sura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la mère",
        example: "su ŋgolora, su lona",
        exampleTranslation: "la grand-mère, l'arc-en-ciel",
      },
    ],
    relatedWords: ["su ŋgolora", "su lona"],
  },
  {
    word: "susugura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le ténia",
      },
    ],
  },
  {
    word: "suuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les gens",
      },
    ],
  },
  {
    word: "suura",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "jurer",
      },
    ],
  },
  {
    word: "suura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le serment",
      },
    ],
  },

  // t entree de dictionaire
  {
    word: "taaɓana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tabac",
      },
    ],
  },
  {
    word: "taara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "rassembler en troupeau, garder",
      },
    ],
  },
  {
    word: "taara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "rassembler, collecter",
      },
      {
        definition: "lever l'impôt",
      },
      {
        definition: "l'impôt, la taxe",
      },
    ],
  },
  {
    word: "taawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chassie",
      },
    ],
  },
  {
    word: "tabulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la table",
      },
    ],
  },
  {
    word: "taɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "joindre, cotiser, réunir, rassembler",
      },
    ],
  },
  {
    word: "taɓakka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le plateau rond en paille tressée",
      },
    ],
  },
  {
    word: "taɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tirer, traîner",
      },
      {
        definition: "soulever",
      },
      {
        definition: "renifler",
      },
      {
        definition: "conduire, guider",
      },
    ],
  },
  {
    word: "tagaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "répéter",
      },
    ],
  },
  {
    word: "takka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "montrer",
      },
      {
        definition: "la signe",
      },
    ],
  },
  {
    word: "talakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lécher",
      },
      {
        definition: "raboter",
      },
    ],
  },
  {
    word: "talla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "peler",
      },
      {
        definition: "couper, tailler",
      },
    ],
  },
  {
    word: "tamara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la fille",
        example: "An fi goo tamara ay fun goloŋga",
        exampleTranslation: "J’ai trouvé une jeune fille au bord du puits",
      },
    ],
  },
  {
    word: "tanaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "lécher",
      },
    ],
  },
  {
    word: "tanara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le beau-frère ou la belle-sœur du mari",
      },
    ],
  },
  {
    word: "tan",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "ici",
      },
    ],
    relatedWords: ["tani"],
  },
  {
    word: "tara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le corps",
        example: "Tam wari",
        exampleTranslation: "Son corps est noir",
      },
      {
        definition: "le soi, utilisé comme la réfléxive ou la réciproque",
        example: "Nam ŋgay tamu. Asi gol ii tasiya",
        exampleTranslation: "Il se cache. Ils se regardent",
      },
    ],
  },
  {
    word: "taraŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cour de la concession",
      },
    ],
  },
  {
    word: "taroona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la drague",
      },
    ],
  },
  {
    word: "tasna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tasse",
      },
    ],
  },
  {
    word: "tavaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "se moquer, taquiner",
      },
    ],
  },
  {
    word: "tawlana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le gros intestin",
      },
    ],
  },
  {
    word: "tayra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "piétiner",
      },
      {
        definition: "prendre",
      },
    ],
  },
  {
    word: "tegeɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mâcher, ruminer",
      },
    ],
  },
  {
    word: "tegessa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couper en petits morceaux",
      },
    ],
  },
  {
    word: "teniina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'uniforme",
      },
    ],
  },
  {
    word: "tenissa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les chaussures de tennis",
      },
    ],
  },
  {
    word: "teŋella",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le segment",
        example: "ii teŋella",
        exampleTranslation: "le nœud",
      },
    ],
    relatedWords: ["ii teŋella"],
  },
  {
    word: "termusna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le thermos",
      },
    ],
  },
  {
    word: "tewra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "arriver dans un lieu",
      },
      {
        definition: "atteindre, arriver à faire quelque chose",
      },
      {
        definition: "pouvoir",
      },
    ],
  },
  {
    word: "tewra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "éteindre",
      },
    ],
  },
  {
    word: "tew tew",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "souvent, toujours, chaque",
      },
    ],
  },
  {
    word: "tewra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la taie",
      },
    ],
  },
  {
    word: "tiira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pleurer, résonner",
      },
      {
        definition: "crier",
      },
    ],
  },
  {
    word: "tikŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le coussinet servant à caler un fardeau sur la tête",
      },
    ],
    relatedWords: ["tiginna"],
  },
  {
    word: "tilna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lune",
        example: "vun tilna",
        exampleTranslation: "la nouvelle lune",
      },
      {
        definition: "le mois",
      },
      {
        definition: "la saison",
        example: "til walla, til ndolla",
        exampleTranslation: "la saison sèche, la saison des pluies",
      },
    ],
    relatedWords: ["vun tilna", "til walla", "til ndolla"],
  },
  {
    word: "timina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mouton, la brebis",
      },
    ],
  },
  {
    word: "tinda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mettre, poser",
      },
      {
        definition: "conduire",
      },
    ],
  },
  {
    word: "tira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "manger",
      },
      {
        definition: "briller",
        example: "Faɗta ti ɦay",
        exampleTranslation: "Le soleil brille beaucoup",
      },
      {
        definition: "gagner contre, vaincre",
      },
      {
        definition: "avoir mal, être malade",
        example: "Tam tamu",
        exampleTranslation: "Il est malade",
      },
      {
        definition: "gouverner, diriger, régner",
        example: "ti mulla",
        exampleTranslation: "gouverner, diriger, régner",
      },
    ],
    relatedWords: ["ti mulla"],
  },
  {
    word: "titikka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le python royal",
      },
    ],
  },
  {
    word: "tlaɓma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le feuillage",
      },
    ],
  },
  {
    word: "tlagara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la ceinture de cuir tissé portée dans une bataille",
      },
    ],
  },
  {
    word: "tlawra",
    partsOfSpeech: ["noun", "adjective"],
    definitions: [
      {
        definition: "la rougeur, rouge",
      },
    ],
  },
  {
    word: "tle suu",
    partsOfSpeech: ["pronoun"],
    definitions: [
      {
        definition: "ces choses",
        example: "An ka min tle suu asinaɗi. Tle suu nam minisina",
        exampleTranslation:
          "Je ne veux pas ces choses là. Les choses qu’il préfère",
      },
    ],
  },
  {
    word: "tlegina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les choses",
      },
    ],
  },
  {
    word: "tlekka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la poule",
      },
    ],
    relatedWords: ["tlekŋa"],
  },
  {
    word: "tlena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les choses",
        example: "tle bagina",
        exampleTranslation: "des petits animaux sauvages",
      },
    ],
    relatedWords: ["tle bagina"],
  },
  {
    word: "tlimiɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cheveu, le poil",
        example: "tlimiɗ yamba",
        exampleTranslation: "les cheveux",
      },
      {
        definition: "la plume",
      },
    ],
    relatedWords: ["tlimiɗ yamba"],
  },
  {
    word: "tlira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "prendre, apporter, porter",
        example: "tli tara",
        exampleTranslation: "ressembler",
      },
      {
        definition: "laisser faire",
      },
      {
        definition: "inonder",
      },
      {
        definition: "lever",
        example: "tli yamba",
        exampleTranslation: "honorer",
      },
    ],
    relatedWords: ["tli tara", "tli yamba"],
  },
  {
    word: "tliwna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la viande",
      },
      {
        definition: "la chair, le corps, la personne",
      },
    ],
  },
  {
    word: "tlokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'éléphant",
      },
    ],
  },
  {
    word: "tluɓpa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "s'enfoncer, plonger",
      },
    ],
  },
  {
    word: "tlumba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mélanger",
      },
    ],
  },
  {
    word: "toɓona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le benjamin",
      },
    ],
  },
  {
    word: "togolla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "faire un sacrifice",
      },
      {
        definition: "le sacrifice",
      },
    ],
  },
  {
    word: "togolomma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la flûte",
      },
    ],
  },
  {
    word: "togolora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bâton",
      },
    ],
  },
  {
    word: "togorokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cal",
      },
    ],
  },
  {
    word: "tokka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "rassembler",
      },
      {
        definition: "la réunion",
      },
    ],
  },
  {
    word: "toli ɦoora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le calao à bec noir",
      },
    ],
  },
  {
    word: "tolla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "écouler goutte à goutte",
      },
    ],
  },
  {
    word: "tolna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tôle",
      },
    ],
  },
  {
    word: "tomaɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tomate",
      },
    ],
  },
  {
    word: "toniina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la civette",
      },
    ],
  },
  {
    word: "toomma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le placenta",
      },
    ],
  },
  {
    word: "toora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "balayer",
      },
    ],
  },
  {
    word: "toora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le surnom donné depuis l'enfance décrivant une caractéristique positive de cette personne, que l’on crie à cas de danger",
      },
    ],
  },
  {
    word: "tora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "battre, casser, détruire",
      },
      {
        definition: "subjuguer",
      },
    ],
  },
  {
    word: "torossa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lampe de poche",
      },
    ],
    relatedWords: ["tossa"],
  },
  {
    word: "tossa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "enterrer",
      },
      {
        definition: "remplir, boucher",
      },
    ],
  },
  {
    word: "totoonda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cerveau",
      },
    ],
  },
  {
    word: "tovoɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cracher",
      },
    ],
  },
  {
    word: "tu",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "encore",
        example: "Nam ka tuwa. bay tuwa, Nam bay mba tuwa",
        exampleTranslation:
          "Il est encore là. pas encore, Il n’est pas encore venu",
      },
    ],
    relatedWords: ["bay tuwa"],
  },
  {
    word: "tuɓuruna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chaussure, le soulier",
      },
    ],
  },
  {
    word: "tuɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "venir, aller",
      },
      {
        definition: "la marche",
        example: "tuɗ tara",
        exampleTranslation: "gêner, déranger",
      },
    ],
    relatedWords: ["tuɗ tara"],
  },
  {
    word: "tuguɗira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la maladie",
      },
    ],
  },
  {
    word: "tukŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la touque pour la bière",
      },
    ],
  },
  {
    word: "tuluɓukka",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "l'adhérence résultante de quelque chose qui n'était pas bien cuisinée",
        example: "Fuuɗna yi tuluɓukka",
        exampleTranslation: "Sa boule est mal cuisinée",
      },
    ],
  },
  {
    word: "tulumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "sorte de figuier",
      },
    ],
  },
  {
    word: "tum joora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "semer le mil avec la houe",
      },
    ],
  },
  {
    word: "tumba",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire, employé avec un sujet au pluriel",
        example: "tum ura",
        exampleTranslation: "médire, calomnier",
      },
      {
        definition: "avoir une maladie",
      },
    ],
    relatedWords: ["tum ura"],
  },
  {
    word: "tumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'ail",
      },
    ],
  },
  {
    word: "tumuɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le résidu du sel fabriqué de tiges de mil",
      },
    ],
  },
  {
    word: "tumura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le dattier",
      },
    ],
  },
  {
    word: "tumurura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pépinière",
      },
    ],
  },
  {
    word: "tumussa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cheveu, le poil",
        example: "tumus yamba",
        exampleTranslation: "les cheveux",
      },
    ],
    relatedWords: ["tumus yamba"],
  },
  {
    word: "tusuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'aluminium",
      },
      {
        definition: "le labret",
      },
    ],
  },

  // u entree de dictionnaire
  {
    word: "unda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "avoir des rapports avec une femme",
      },
    ],
  },
  {
    word: "ura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les fesses, l'anus",
      },
      {
        definition: "la derrière",
      },
      {
        definition: "le reste",
      },
      {
        definition: "le fond",
        example: "u dumma",
        exampleTranslation: "le menton, le talon",
      },
    ],
    relatedWords: ["u dumma"],
  },
  {
    word: "urɗina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le parfum",
      },
    ],
  },
  {
    word: "ussa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la tombe",
      },
    ],
  },
  {
    word: "uusuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la graminée, l'herbe",
      },
    ],
  },

  // v entree de dictionnaire
  {
    word: "vaara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "trier, choisir, ramasser",
      },
      {
        definition: "la sélection",
      },
      {
        definition: "essuyer",
      },
    ],
  },
  {
    word: "vaɓakŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grand animal sauvage",
      },
    ],
  },
  {
    word: "vaɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "finir, terminer",
      },
    ],
  },
  {
    word: "vaɗina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le truc, le machin, le tel",
      },
    ],
  },
  {
    word: "valla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le piège à poisson en entonnoir",
      },
    ],
  },
  {
    word: "vana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la chose, quelque chose, n'importe quoi",
      },
    ],
  },
  {
    word: "vandredi",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le vendredi",
      },
    ],
  },
  {
    word: "vaŋgasana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le petit gâteau frit",
      },
    ],
  },
  {
    word: "varakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "remplacer, prendre la place de l'autre",
      },
    ],
  },
  {
    word: "vatl",
    partsOfSpeech: ["numeral"],
    definitions: [
      {
        definition: "cinq",
      },
    ],
  },
  {
    word: "vavalira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le geste fait avec les yeux",
      },
    ],
  },
  {
    word: "veɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "éventer",
      },
    ],
  },
  {
    word: "veɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le lapin",
      },
    ],
  },
  {
    word: "veena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le grenier",
      },
    ],
  },
  {
    word: "vekka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "gratter",
      },
      {
        definition: "creuser",
      },
    ],
  },
  {
    word: "velewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le vélo",
      },
    ],
  },
  {
    word: "vella",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la lame du rasoir",
      },
    ],
  },
  {
    word: "velna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'étoile du matin",
      },
    ],
  },
  {
    word: "veveɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le poinçon utilisé pour nettoyer une pipe",
      },
    ],
  },
  {
    word: "veveɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'éventail",
      },
    ],
  },
  {
    word: "vevegena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'abcès dur",
      },
    ],
  },
  {
    word: "vi",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "de, à (possessif)",
        example: "Ni velew vi gi ge?",
        exampleTranslation: "À qui est ce vélo?",
      },
      {
        definition: "à la maison de",
        example: "Nam ay vi wayamma",
        exampleTranslation: "Il était chez son frère",
      },
    ],
  },
  {
    word: "viɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "perdre",
      },
      {
        definition: "oublier",
      },
      {
        definition: "tromper",
      },
      {
        definition: "être stupéfié",
      },
    ],
  },
  {
    word: "viina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le singe",
        example: "vii bakŋa, vii gaɓalina, vii kokora, vii tlawna",
        exampleTranslation:
          "le babouin, le mâle dominant d'un groupe de singes, le singe jeune, le singe rouge",
      },
    ],
    relatedWords: ["vii bakŋa", "vii gaɓalina", "vii kokora", "vii tlawna"],
  },
  {
    word: "vin",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "demain",
      },
    ],
    relatedWords: ["vini"],
  },
  {
    word: "vinda",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "vomir",
      },
      {
        definition: "le vomissement",
      },
    ],
  },
  {
    word: "viŋviŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la guêpe",
      },
    ],
  },
  {
    word: "vira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "prendre, attraper, tenir, saisir",
      },
      {
        definition: "attraper, saisir",
      },
    ],
  },
  {
    word: "voɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la route, le sentier, le chemin",
        example: "voɗo",
        exampleTranslation: "sur la route",
      },
      {
        definition: "l’occasion",
        example: "An fi voɗta koɗ tan kaɗi",
        exampleTranslation: "Je n’ai pas eu l’occasion de me reposer",
      },
      {
        definition: "correct, juste, vrai",
        example: "Sun maŋga u voɗoɗu. Boy maŋŋa u voɗomu",
        exampleTranslation:
          "Ton travail est correct. Ta parole est juste ou vraie",
      },
    ],
    relatedWords: ["u voɗta"],
  },
  {
    word: "vogoɗona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "l'accompagnement d'une jeune mariée chez son mari par sa famille et amis",
      },
    ],
  },
  {
    word: "vokŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le front",
        example: "vok gifna",
        exampleTranslation: "le genou",
      },
    ],
    relatedWords: ["vok gifna"],
  },
  {
    word: "voo",
    partsOfSpeech: ["preposition"],
    definitions: [
      {
        definition: "chez, à la maison",
      },
    ],
  },
  {
    word: "vora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "verser",
      },
    ],
  },
  {
    word: "vovoɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le témoin",
      },
    ],
  },
  {
    word: "vovora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sperme",
      },
    ],
  },
  {
    word: "vuɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "enfanter, donner du fruit",
      },
    ],
  },
  {
    word: "vugumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le soufflet",
      },
    ],
  },
  {
    word: "vunda",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le buffle",
      },
    ],
  },
  {
    word: "vunna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la bouche",
      },
      {
        definition: "l'ouverture, l'entrée",
      },
      {
        definition: "la langue, la parole",
      },
      {
        definition: "le couvercle",
        example: "vun gifna, vun tilna",
        exampleTranslation: "le genou, la fête annuelle de la récolte",
      },
    ],
    relatedWords: ["vun gifna", "vun tilna"],
  },
  {
    word: "vuruɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le moustique",
      },
    ],
  },
  {
    word: "vuvuna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sel",
        example: "vuvu galakka, vuvu waawna",
        exampleTranslation:
          "le sel rouge fabriqué de tiges de mil, le sel raffiné",
      },
    ],
    relatedWords: ["vuvu galakka", "vuvu waawna"],
  },

  // w entree de dictionnaire
  {
    word: "wa",
    partsOfSpeech: ["particle"],
    definitions: [
      {
        definition: "particle qui indique que l'action du verbe est complète",
        example: "Nam daɓ wa",
        exampleTranslation: "Il a fini",
      },
    ],
  },
  {
    word: "waara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "griller",
      },
    ],
  },
  {
    word: "waara",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "étaler, écarter, suspendre",
      },
    ],
  },
  {
    word: "waawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le sel raffiné",
      },
    ],
  },
  {
    word: "waɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "frapper, battre avec un instrument",
      },
      {
        definition: "pleuvoir lourdement",
      },
    ],
  },
  {
    word: "wakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "couper en deux",
      },
      {
        definition: "faire une nouvelle route divergente de l'originale",
      },
    ],
  },
  {
    word: "wal iira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la pupille",
      },
    ],
    relatedWords: ["wawal iira"],
  },
  {
    word: "walla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le cri",
      },
    ],
  },
  {
    word: "walla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la saison sèche",
      },
    ],
  },
  {
    word: "wan",
    partsOfSpeech: ["determiner"],
    definitions: [
      {
        definition: "ce, cet, cette, ces",
        example: "Sa wanna",
        exampleTranslation: "cet homme là",
      },
    ],
  },
  {
    word: "wana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mil",
      },
    ],
  },
  {
    word: "warakŋa",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "payer, rembourser",
      },
      {
        definition: "le paiement, le remboursement, le salaire",
      },
    ],
  },
  {
    word: "warra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la noirceur",
        example: "sa warna",
        exampleTranslation: "la personne, l’Africain",
      },
    ],
    relatedWords: ["sa warna"],
  },
  {
    word: "wasaɗana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le coussinet servant à caler un fardeau sur la tête",
      },
      {
        definition: "le coussin",
      },
    ],
  },
  {
    word: "wayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la discussion, le marchandage",
      },
    ],
  },
  {
    word: "wayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la fille",
      },
    ],
  },
  {
    word: "wayra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le jujubier",
      },
    ],
  },
  {
    word: "weɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "sauter",
      },
    ],
  },
  {
    word: "weleɗta",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "briller, luire",
      },
      {
        definition: "sourire de grande joie, l'éclair",
      },
    ],
  },
  {
    word: "weleerena",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une variété de sorgho",
      },
    ],
  },
  {
    word: "wella",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "raser",
      },
    ],
  },
  {
    word: "welna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la corde à linge",
      },
    ],
  },
  {
    word: "wergessa",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "diviser, multiplier",
      },
    ],
  },
  {
    word: "wiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grossesse",
        example: "vi wiina",
        exampleTranslation: "devenir enceinte",
      },
    ],
    relatedWords: ["vi wiina"],
  },
  {
    word: "wilira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la nouveauté",
      },
    ],
  },
  {
    word: "wira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "voir",
      },
      {
        definition: "éclairer",
      },
      {
        definition: "savoir, connaître",
        example: "wi hahawra",
        exampleTranslation: "avoir pitié",
      },
      {
        definition: "pouvoir",
      },
    ],
    relatedWords: ["wi hahawra"],
  },
  {
    word: "wirisna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le riz",
      },
    ],
  },
  {
    word: "wulla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "grandir, pousser",
      },
      {
        definition: "élever",
      },
    ],
  },

  // y entree de dictionnaire
  {
    word: "yagara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le harpon à trois fourchons",
      },
    ],
  },
  {
    word: "yagiina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition:
          "le mari de la sœur de votre femme, mari d'une femme du même clan que votre femme",
      },
    ],
  },
  {
    word: "yakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tomber en plusieurs directions",
      },
    ],
  },
  {
    word: "yakka",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "accuser",
      },
      {
        definition: "l’accusation",
      },
    ],
  },
  {
    word: "yalira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la puce",
      },
    ],
  },
  {
    word: "yalla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "gronder, réprimander",
      },
    ],
  },
  {
    word: "yarawna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le chat sauvage",
      },
    ],
  },
  {
    word: "yarina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'entrave en bois",
      },
    ],
  },
  {
    word: "yikka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "tamiser",
      },
      {
        definition: "couper les herbes à l’aide d’une machette",
      },
    ],
  },
  {
    word: "yira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "préparer la boule",
      },
    ],
  },
  {
    word: "yira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "appeler",
      },
      {
        definition: "nommer",
      },
    ],
  },
  {
    word: "yiriɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le palais",
      },
    ],
  },
  {
    word: "yiyira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les cris des femmes",
      },
    ],
  },
  {
    word: "yoomusna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la jalousie",
      },
    ],
  },
  {
    word: "yoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le profit, le bénéfice",
      },
    ],
    relatedWords: ["yona"],
  },
  {
    word: "yoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'eau",
      },
    ],
    relatedWords: ["yona"],
  },
  {
    word: "yoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bétail",
      },
    ],
  },
  {
    word: "yoora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "condoléances",
        example: "ɦal yoora",
        exampleTranslation: "rendre condoléances",
      },
    ],
    relatedWords: ["ɦal yoora"],
  },
  {
    word: "yoora",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "fondre",
      },
      {
        definition: "extraire de l'huile avec de l'eau chaude",
      },
    ],
  },
  {
    word: "yooyora",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "une chanson des femmes au vun tilna",
      },
    ],
  },
  {
    word: "yoroɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'intestin",
      },
    ],
  },
  {
    word: "yoroɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "faire des génuflexions, s’agenouiller",
      },
    ],
  },
  {
    word: "yowra",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "prendre, ramasser",
      },
      {
        definition: "se lever",
        example: "yow liŋŋa",
        exampleTranslation: "commencer tout d'un coup à courir",
      },
    ],
    relatedWords: ["yow liŋŋa"],
  },
  {
    word: "yowna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'inceste",
      },
    ],
  },
  {
    word: "yoyoona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la salive",
      },
    ],
  },
  {
    word: "yulumba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le saveur succulente",
      },
    ],
  },
  {
    word: "yumma",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'abeille",
        example: "zi yumma",
        exampleTranslation: "la ruche",
      },
    ],
    relatedWords: ["zi yumma"],
  },
  {
    word: "yurɓuura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le labret",
      },
    ],
  },

  // z entree de dictionnaire
  {
    word: "zaana",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le ruminant sauvage",
      },
    ],
  },
  {
    word: "zaara",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "semer en poquets",
      },
      {
        definition: "la semence",
      },
    ],
  },
  {
    word: "zak",
    partsOfSpeech: ["adverb"],
    definitions: [
      {
        definition: "vite",
      },
    ],
  },
  {
    word: "zakka",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "brûler",
      },
    ],
  },
  {
    word: "zalla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "bouillir, faire cuire",
        example: "Nam zal tliwna",
        exampleTranslation: "Il fait bouillir la viande ou il cuit la viande",
      },
      {
        definition: "être fâché",
        example: "Hurum zal ɦay",
        exampleTranslation: "Il est très fâché",
      },
    ],
  },
  {
    word: "zamalla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "chauffer",
      },
      {
        definition: "le chaleur, la sueur, la transpiration",
      },
    ],
  },
  {
    word: "zaŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le hangar",
      },
      {
        definition: "le lit en bois",
      },
    ],
  },
  {
    word: "zardeŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le jardin",
      },
    ],
  },
  {
    word: "zariyara",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le tribunal",
      },
      {
        definition: "le jugement, le verdict, la décision",
      },
    ],
  },
  {
    word: "zedi",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le jeudi",
      },
    ],
  },
  {
    word: "zeɗ",
    partsOfSpeech: ["adjective"],
    definitions: [
      {
        definition: "différent",
      },
    ],
  },
  {
    word: "zekŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la grande jarre avec un trou au fond pour faire du sel",
      },
    ],
  },
  {
    word: "zeŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le phacochère",
      },
    ],
  },
  {
    word: "zewna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la corde",
      },
      {
        definition: "le demi-hectare",
        example: "zew fukka, zew ŋgamina",
        exampleTranslation: "le cordon ombilical, le fil métallique",
      },
    ],
    relatedWords: ["zew fukka", "zew ŋgamina"],
  },
  {
    word: "ziira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "porter quelque chose de lourd",
      },
      {
        definition: "prendre responsabilité pour",
      },
      {
        definition: "garder",
      },
    ],
  },
  {
    word: "ziira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le venin",
      },
      {
        definition: "l'asticot",
      },
    ],
  },
  {
    word: "zina",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le village, la concession",
      },
    ],
  },
  {
    word: "zira",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "dépouiller, couper",
      },
    ],
  },
  {
    word: "zira",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la case",
      },
    ],
  },
  {
    word: "zirgiɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fumier",
      },
    ],
  },
  {
    word: "ziwinda",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "devenir noir pendant le coucher du soleil",
      },
    ],
  },
  {
    word: "zoɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "salir",
      },
    ],
  },
  {
    word: "zogolna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le fourrage, le foin",
      },
    ],
  },
  {
    word: "zolomba",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la paresse",
      },
    ],
  },
  {
    word: "zolona",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la honte",
      },
      {
        definition: "la timidité",
      },
    ],
  },
  {
    word: "zoŋga",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "l'adultère",
      },
    ],
  },
  {
    word: "zoŋŋa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le garçon",
      },
    ],
  },
  {
    word: "zoroɓpa",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la deuxième poche de l'estomac des ruminants",
      },
    ],
  },
  {
    word: "zoyra",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "terme général pour les arachides et les pois de terre",
        example: "zoy mbulla, zoy eŋga",
        exampleTranslation: "l'arachide, le pois de terre",
      },
    ],
    relatedWords: ["zoy mbulla", "zoy eŋga"],
  },
  {
    word: "zozoɗta",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la saleté, l’impurité",
      },
    ],
  },
  {
    word: "zuɓulla",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "mélanger une masse pâteuse dans un liquide",
        example: "Ndaɗ zuɓul zoyra duk tlemma",
        exampleTranslation:
          "Elle mélange la pâte d’arachide dans la sauce de l’oseille",
      },
    ],
  },
  {
    word: "zuɗta",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "pousser",
      },
      {
        definition: "rejeter",
      },
    ],
  },
  {
    word: "zuɗna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "les Massa",
      },
    ],
  },
  {
    word: "zugulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le bâton",
      },
    ],
  },
  {
    word: "zulla",
    partsOfSpeech: ["verb", "noun"],
    definitions: [
      {
        definition: "multiplier",
      },
      {
        definition: "la multiplication",
      },
    ],
  },
  {
    word: "zulla",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le trou",
      },
      {
        definition: "le terrier, l'antre, la tanière",
      },
      {
        definition: "la tombe",
        example: "zul cinna, zul soɗna, zul ura soɗna, zulla soɗna",
        exampleTranslation: "la narine, l'anus, les latrines",
      },
    ],
    relatedWords: ["zul cinna", "zul soɗna", "zul ura soɗna", "zulla soɗna"],
  },
  {
    word: "zululna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "la cellule",
      },
    ],
  },
  {
    word: "zumma",
    partsOfSpeech: ["verb"],
    definitions: [
      {
        definition: "cultiver, faire des sillons",
      },
    ],
  },
  {
    word: "zuuruna",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le deuil",
      },
    ],
  },
  {
    word: "zuzura",
    partsOfSpeech: ["noun"],
    definitions: [
      {
        definition: "le mortier",
        example: "goo zuzuna",
        exampleTranslation: "le pilon",
      },
    ],
    relatedWords: ["goo zuzuna"],
  },
];