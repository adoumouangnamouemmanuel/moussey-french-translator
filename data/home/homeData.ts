// Daily word data
export const dailyWords = [
  { id: "1", moussey: "buwa", french: "bonjour", pronunciation: "/bou.wa/" },
  {
    id: "2",
    moussey: "Ay tuwa",
    french: "au revoir",
    pronunciation: "/ay touwa/",
  },
  { id: "3", moussey: "gaŋ deɓpa", french: "merci", pronunciation: "/gang-deppa/" },
];

// Recent activity data
export const recentActivities = [
  { id: "1", type: "search", word: "bonjour", time: "Il y a 2h" },
  {
    id: "2",
    type: "practice",
    score: "8/10",
    lesson: "Salutations",
    time: "Il y a 5h",
  },
  { id: "3", type: "favorite", word: "merci", time: "Hier" },
];

// Feature categories
export const featureCategories = [
  {
    title: "Outils",
    items: [
      {
        id: "1",
        title: "Dictionnaire",
        icon: "book-outline",
        screen: "Dictionary",
      },
      {
        id: "2",
        title: "Traducteur",
        icon: "language-outline",
        screen: "Translator",
      },
    ],
  },
  {
    title: "Apprentissage",
    items: [
      {
        id: "3",
        title: "Phrases",
        icon: "chatbubbles-outline",
        screen: "Phrases",
      },
      {
        id: "4",
        title: "Verbes Irréguliers",
        icon: "create-outline",
        screen: "IrregularVerbs",
      },
      {
        id: "5",
        title: "Verbes Phrasaux",
        icon: "git-branch-outline",
        screen: "PhrasalVerbs",
      },
      {
        id: "6",
        title: "Histoires Moussey",
        icon: "book-outline",
        screen: "HistoiresMoussey",
      },
    ],
  },
  {
    title: "Personnel",
    items: [
      { id: "6", title: "Favoris", icon: "star-outline", screen: "Favorites" },
      { id: "7", title: "Historique", icon: "time-outline", screen: "History" },
    ],
  },
];
