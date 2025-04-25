"use client";

import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  FlatList,
  Modal,
  Platform,
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { bible } from "../data/bible/bible";
import { bibleBooks } from "../data/bibleBooks";

// const mockVersesData: Record<string, { id: string; verse: number; text: string; french: string }[]> = {
//   // Genesis 1
//   "1-1": [
//     {
//       "id": "1-1-1",
//       "verse": 1,
//       "text": "Lona gijaŋŋa ay jewni li huulona, li ndaŋgara.",
//       "french": "Au commencement, Dieu créa les cieux et la terre."
//     },
//     {
//       "id": "1-1-2",
//       "verse": 2,
//       "text": "Ndaŋgara ay ka liiɗi, va ay ka kaɗɗi lay. Lina ay kuluɓi, ndufunda kay mbo ŋgolna, Musuk Lonara mbusuk kolo kay mbona.",
//       "french": "La terre était informe et vide: il y avait des ténèbres à la surface de l'abîme, et l'esprit de Dieu se mouvait au-dessus des eaux."
//     },
//     {
//       "id": "1-1-3",
//       "verse": 3,
//       "text": "Lona di ana, «Ko kiɗikka liya!» ndaɗ li gaw.",
//       "french": "Dieu dit: Que la lumière soit! Et la lumière fut."
//     },
//     {
//       "id": "1-1-4",
//       "verse": 4,
//       "text": "Lona wi ana kiɗikka jiviya ni, nam ɓorow duk kiɗikka ki u ndufunda.",
//       "french": "Dieu vit que la lumière était bonne; et Dieu sépara la lumière d'avec les ténèbres."
//     },
//     {
//       "id": "1-1-5",
//       "verse": 5,
//       "text": "Lona yi kiɗikka ana faalira, nam yi ndufunda ana njeŋgera. Njeŋgera liya, maɗiira fo may, ni buu dew.",
//       "french": "Dieu appela la lumière jour, et il appela les ténèbres nuit. Ainsi, il y eut un soir, et il y eut un matin: ce fut le premier jour."
//     },
//     {
//       "id": "1-1-6",
//       "verse": 6,
//       "text": "Lona di ana, «Ko va ma ŋgol li a ɓorow duk hoŋ mbona ki mba'!»",
//       "french": "Dieu dit: Qu'il y ait une étendue entre les eaux, et qu'elle sépare les eaux d'avec les eaux."
//     },
//     {
//       "id": "1-1-7",
//       "verse": 7,
//       "text": "Lona hin li va namma ɓorow duk ɦoŋ mbo ma kaŋgana ki u ma kolona. Nam hin li na gaw may.",
//       "french": "Et Dieu fit l'étendue, et il sépara les eaux qui sont au-dessous de l'étendue d'avec les eaux qui sont au-dessus de l'étendue. Et cela fut ainsi."
//     },
//     {
//       "id": "1-1-8",
//       "verse": 8,
//       "text": "Lona yi va namma ana huulona. Njeŋgera liya, maɗiira fo may, ni buu ma mbana.",
//       "french": "Dieu appela l'étendue ciel. Ainsi, il y eut un soir, et il y eut un matin: ce fut le second jour."
//     },
//     {
//       "id": "1-1-9",
//       "verse": 9,
//       "text": "Lona di olo ana, «Mbo ma kaŋgana tok ki hu lina dew, kay yam ndaŋgara tak ki kiɗiki!» ndaɗ hin li na gaw may.",
//       "french": "Dieu dit: Que les eaux qui sont au-dessous du ciel se rassemblent en un seul lieu, et que le sec paraisse. Et cela fut ainsi."
//     },
//     {
//       "id": "1-1-10",
//       "verse": 10,
//       "text": "Lona yi li ki sooyna ana ndaŋgara, li ma mbona huna nam yam ana lum ŋgolna. Lona wi ana dla ndaɗta ni jiviya.",
//       "french": "Dieu appela le sec terre, et il appela l'amas des eaux mers. Dieu vit que cela était bon."
//     },
//     {
//       "id": "1-1-11",
//       "verse": 11,
//       "text": "Lona hin di ɗaŋŋi ana, «Tlena day kay ndaŋgara, tlesuu dayna zul njafasi ha ki kay ndaŋgara, guguni suu tira vuɗ njafasi hu zeɗ zeɗ may!» Asi hin li na may.",
//       "french": "Puis Dieu dit: Que la terre produise de la verdure, de l'herbe portant de la semence, des arbres fruitiers donnant du fruit selon leur espèce et ayant en eux leur semence sur la terre. Et cela fut ainsi."
//     },
//     {
//       "id": "1-1-12",
//       "verse": 12,
//       "text": "Ni kay ndaɗta tlena zul kay ndaŋgara, tlena day ki u njafasi zeɗ zeɗ, guguni suu vuɗusi tina day u ii njafasi hu zeɗ zeɗ may. Lona wi ana dla ndaɗta ni jiviya.",
//       "french": "La terre produisit de la verdure, de l'herbe portant de la semence selon son espèce, et des arbres donnant du fruit et ayant en eux leur semence selon leur espèce. Dieu vit que cela était bon."
//     },
//     {
//       "id": "1-1-13",
//       "verse": 13,
//       "text": "Njeŋgera liya, maɗiira fo may, ni buu ma hindina.",
//       "french": "Ainsi, il y eut un soir, et il y eut un matin: ce fut le troisième jour."
//     },
//     {
//       "id": "1-1-14",
//       "verse": 14,
//       "text": "Lona di ana, «Ko tlesuu ɓo lina li kolo huulona, kay a ɓorow duk njeŋgera ki u faalira, kay a tak ki kay luuna u buuna u basara,",
//       "french": "Dieu dit: Qu'il y ait des luminaires dans l'étendue du ciel, pour séparer le jour d'avec la nuit; que ce soient des signes pour marquer les époques, les jours et les années;"
//     },
//     {
//       "id": "1-1-15",
//       "verse": 15,
//       "text": "a asi ay kolo huulona li kiɗikka kay ndaŋgara!» Asi hin li na may.",
//       "french": "et qu'ils servent de luminaires dans l'étendue du ciel, pour éclairer la terre. Et cela fut ainsi."
//     },
//     {
//       "id": "1-1-16",
//       "verse": 16,
//       "text": "Lona li tlesuu ŋgolo suu li kiɗikka mba', ta ŋgolla li a mul kiɗikka faalira, ma goona li a mul kiɗikka njeŋgera may. Nam li ki ciciwra may.",
//       "french": "Dieu fit les deux grands luminaires, le plus grand luminaire pour présider au jour, et le plus petit luminaire pour présider à la nuit; il fit aussi les étoiles."
//     },
//     {
//       "id": "1-1-17",
//       "verse": 17,
//       "text": "Lona njarasi ay kolo a li kiɗikka kay ndaŋgara.",
//       "french": "Dieu les plaça dans l'étendue du ciel, pour éclairer la terre,"
//     },
//     {
//       "id": "1-1-18",
//       "verse": 18,
//       "text": "Kay a ti mulla kay faalira u njeŋgera, kay a ɓorow ii kiɗikka ki u ndufunda. Lona wi ana dla ndaɗta ni jiviya.",
//       "french": "pour présider au jour et à la nuit, et pour séparer la lumière d'avec les ténèbres. Dieu vit que cela était bon."
//     },
//     {
//       "id": "1-1-19",
//       "verse": 19,
//       "text": "Njeŋgera liya, maɗiira fo may, ni buu ma fiɗina.",
//       "french": "Ainsi, il y eut un soir, et il y eut un matin: ce fut le quatrième jour."
//     },
//     {
//       "id": "1-1-20",
//       "verse": 20,
//       "text": "Lona di ana, «Ko tlesuu iirina li duk mbona na ŋgamat ŋgamat, layagina pii kolo kay ndaŋgara huulona may!»",
//       "french": "Dieu dit: Que les eaux produisent en abondance des animaux vivants, et que des oiseaux volent sur la terre vers l'étendue du ciel."
//     },
//     {
//       "id": "1-1-21",
//       "verse": 21,
//       "text": "Lona li vabak ma duk mbona u tlesuu iirina lus duk mbona ŋgamat ŋgamat, njafasi zeɗ zeɗ, nam li layagi suu piira u njafasi zeɗ zeɗ may. Lona wi ana dla ndaɗta ni jiviya.",
//       "french": "Dieu créa les grands poissons et tous les animaux vivants qui se meuvent, et que les eaux produisirent en abondance selon leur espèce; il créa aussi tout oiseau ailé selon son espèce. Dieu vit que cela était bon."
//     },
//     {
//       "id": "1-1-22",
//       "verse": 22,
//       "text": "Lona paɗ vunum kasiya, ɦasi saɓakŋa ana asi vuɗa, zul duk mbona, oy lumma ŋgolna ki lay, layagina zul kay ndaŋgara na may.",
//       "french": "Dieu les bénit, en disant: Soyez féconds, multipliez, et remplissez les eaux des mers; et que les oiseaux multiplient sur la terre."
//     },
//     {
//       "id": "1-1-23",
//       "verse": 23,
//       "text": "Njeŋgera liya, maɗiira fo may, ni buu ma vadlna.",
//       "french": "Ainsi, il y eut un soir, et il y eut un matin: ce fut le cinquième jour."
//     },
//     {
//       "id": "1-1-24",
//       "verse": 24,
//       "text": "Lona di ana, «Ko ndaŋgara zul tlesuu iirina u njafasi zeɗ zeɗ, tlesuu tuɗ u sesina, tlesuu ɦaram kaŋgana, u mburi suu bagina lay!» Asi hin li na may.",
//       "french": "Dieu dit: Que la terre produise des animaux vivants selon leur espèce, du bétail, des reptiles et des animaux terrestres, selon leur espèce. Et cela fut ainsi."
//     },
//     {
//       "id": "1-1-25",
//       "verse": 25,
//       "text": "Lona li mburi suu kay ndaŋgarana u njafasi zeɗ zeɗ, u tlesuu ɦaram kaŋgana, u njafasi zeɗ zeɗ u tlesuu tuɗ u sesina u njafasi zeɗ zeɗ may. Lona wi ana tle asina irim jiviya.",
//       "french": "Dieu fit les animaux de la terre selon leur espèce, le bétail selon son espèce, et tous les reptiles de la terre selon leur espèce. Dieu vit que cela était bon."
//     },
//     {
//       "id": "1-1-26",
//       "verse": 26,
//       "text": "Lona di olo ana, «Laygi sana tli tam ko aygi na. Kay nam a ti mulla kay kulufna duk lum ŋgolna, kay layagi suu pii kolona, kay tlesuu tuɗ u sesina halaŋ, u ndaŋgara lay, kay tlesuu ɦaram kaŋga kay ndaŋgara na halaŋ!»",
//       "french": "Puis Dieu dit: Faisons l'homme à notre image, selon notre ressemblance, et qu'il domine sur les poissons de la mer, sur les oiseaux du ciel, sur le bétail, sur toute la terre, et sur tous les reptiles qui rampent sur la terre."
//     },
//     {
//       "id": "1-1-27",
//       "verse": 27,
//       "text": "Lona li sana ko tamba na. Nam lammi tli tam u Lona. Nam li sa njufna may li cara may.",
//       "french": "Dieu créa l'homme à son image, il le créa à l'image de Dieu, il créa l'homme et la femme."
//     },
//     {
//       "id": "1-1-28",
//       "verse": 28,
//       "text": "Lona paɗ vunum ki kasi dasi ana, «Vuɗugiya, zulugiya, oyogi yam ndaŋgara. Tagi mulla kaɗu, tagi mulla kay kulufna duk lum ŋgolna may, kay layagi suu pii kolona may, kay tlesuu ɦaram kay ndaŋgara halaŋ.»",
//       "french": "Dieu les bénit, et Dieu leur dit: Soyez féconds, multipliez, remplissez la terre, et l'assujettissez; et dominez sur les poissons de la mer, sur les oiseaux du ciel, et sur tout animal qui se meut sur la terre."
//     },
//     {
//       "id": "1-1-29",
//       "verse": 29,
//       "text": "Lona di ana, «Gola an ɦagi tlesuu ŋgolom suu kay ndaŋgara u irisi hu halaŋ, u guguni suu tira u vuɗusi halaŋ lay, asi hinni a tiigina.",
//       "french": "Et Dieu dit: Voici, je vous donne toute herbe portant de la semence et qui est à la surface de toute la terre, et tout arbre ayant en lui du fruit d'arbre et portant de la semence: ce sera votre nourriture."
//     },
//     {
//       "id": "1-1-30",
//       "verse": 30,
//       "text": "Ni kay ndaɗta an ɦal usu ma ŋgolomma maŋ mburina kay ndaŋgara u layagina suu kolo huulona, u tlesuu iiri suu ɦaram kay ndaŋgara halaŋ a tiisina, ni maŋ tlesuu iirina halaŋ.» Dla ndaɗta hin li na gaw may.",
//       "french": "Et à tout animal de la terre, à tout oiseau du ciel, et à tout ce qui se meut sur la terre, ayant en soi un souffle de vie, je donne toute herbe verte pour nourriture. Et cela fut ainsi."
//     },
//     {
//       "id": "1-1-31",
//       "verse": 31,
//       "text": "Lona wi ana tlesuu nam lasina halaŋ jivi cocoo. Njeŋgera liya, maɗiira fo may, ni buu ma karkiyana.",
//       "french": "Dieu vit tout ce qu'il avait fait et voici, cela était très bon. Ainsi, il y eut un soir, et il y eut un matin: ce fut le sixième jour."
//     }
//   ],
//   // Genesis 2
//   "1-2": [
//     {
//       id: "1-2-1",
//       verse: 1,
//       text: "Ainsi furent achevés les cieux et la terre, et toute leur armée.",
//       french:
//         "Thus the heavens and the earth were completed in all their vast array.",
//     },
//     {
//       id: "1-2-2",
//       verse: 2,
//       text: "Dieu acheva au septième jour son œuvre, qu'il avait faite: et il se reposa au septième jour de toute son œuvre, qu'il avait faite.",
//       french:
//         "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work.",
//     },
//     {
//       id: "1-2-3",
//       verse: 3,
//       text: "Dieu bénit le septième jour, et il le sanctifia, parce qu'en ce jour il se reposa de toute son œuvre qu'il avait créée en la faisant.",
//       french:
//         "Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done.",
//     },
//   ],
//   // Matthew 1
//   "40-1": [
//     {
//       id: "40-1-1",
//       verse: 1,
//       text: "Généalogie de Jésus-Christ, fils de David, fils d'Abraham.",
//       french:
//         "This is the genealogy of Jesus the Messiah the son of David, the son of Abraham.",
//     },
//     {
//       id: "40-1-2",
//       verse: 2,
//       text: "Abraham engendra Isaac; Isaac engendra Jacob; Jacob engendra Juda et ses frères;",
//       french:
//         "Abraham was the father of Isaac, Isaac the father of Jacob, Jacob the father of Judah and his brothers,",
//     },
//     {
//       id: "40-1-3",
//       verse: 3,
//       text: "Juda engendra de Thamar Pharès et Zara; Pharès engendra Esrom; Esrom engendra Aram;",
//       french:
//         "Judah the father of Perez and Zerah, whose mother was Tamar, Perez the father of Hezron, Hezron the father of Ram,",
//     },
//   ],
//   // Matthew 5
//   "40-5": [
//     {
//       id: "40-5-1",
//       verse: 1,
//       text: "Voyant la foule, Jésus monta sur la montagne; et, après qu'il se fut assis, ses disciples s'approchèrent de lui.",
//       french:
//         "Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him,",
//     },
//     {
//       id: "40-5-2",
//       verse: 2,
//       text: "Puis, ayant ouvert la bouche, il les enseigna, et dit:",
//       french: "and he began to teach them.",
//     },
//     {
//       id: "40-5-3",
//       verse: 3,
//       text: "Heureux les pauvres en esprit, car le royaume des cieux est à eux!",
//       french:
//         "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
//     },
//     {
//       id: "40-5-4",
//       verse: 4,
//       text: "Heureux les affligés, car ils seront consolés!",
//       french: "Blessed are those who mourn, for they will be comforted.",
//     },
//   ],
//   // John 3
//   "43-3": [
//     {
//       id: "43-3-1",
//       verse: 1,
//       text: "Mais il y eut un homme d'entre les pharisiens, nommé Nicodème, un chef des Juifs,",
//       french:
//         "Now there was a Pharisee, a man named Nicodemus who was a member of the Jewish ruling council.",
//     },
//     {
//       id: "43-3-2",
//       verse: 2,
//       text: "qui vint, lui, auprès de Jésus, de nuit, et lui dit: Rabbi, nous savons que tu es un docteur venu de Dieu; car personne ne peut faire ces miracles que tu fais, si Dieu n'est avec lui.",
//       french:
//         'He came to Jesus at night and said, "Rabbi, we know that you are a teacher who has come from God. For no one could perform the signs you are doing if God were not with him."',
//     },
//     {
//       id: "43-3-16",
//       verse: 16,
//       text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
//       french:
//         "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
//     },
//   ],
//   // Psalms 23
//   "19-23": [
//     {
//       id: "19-23-1",
//       verse: 1,
//       text: "L'Éternel est mon berger: je ne manquerai de rien.",
//       french: "The LORD is my shepherd, I lack nothing.",
//     },
//     {
//       id: "19-23-2",
//       verse: 2,
//       text: "Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles.",
//       french:
//         "He makes me lie down in green pastures, he leads me beside quiet waters,",
//     },
//     {
//       id: "19-23-3",
//       verse: 3,
//       text: "Il restaure mon âme, Il me conduit dans les sentiers de la justice, A cause de son nom.",
//       french:
//         "he refreshes my soul. He guides me along the right paths for his name's sake.",
//     },
//   ],
//   // Romans 8
//   "45-8": [
//     {
//       id: "45-8-1",
//       verse: 1,
//       text: "Il n'y a donc maintenant aucune condamnation pour ceux qui sont en Jésus-Christ.",
//       french:
//         "Therefore, there is now no condemnation for those who are in Christ Jesus,",
//     },
//     {
//       id: "45-8-28",
//       verse: 28,
//       text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",
//       french:
//         "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
//     },
//     {
//       id: "45-8-31",
//       verse: 31,
//       text: "Que dirons-nous donc à l'égard de ces choses? Si Dieu est pour nous, qui sera contre nous?",
//       french:
//         "What, then, shall we say in response to these things? If God is for us, who can be against us?",
//     },
//   ],
// };

// Function to flatten the structure

function flattenBibleData(bible: {
  old: Record<string, any>;
  new: Record<string, any>;
}) {
  const result: Record<
    string,
    Array<{
      id: string;
      verse: number;
      text: string;
      french: string;
    }>
  > = {};

  // Process Old Testament
  for (const [bookName, chapters] of Object.entries(bible.old)) {
    for (const [chapterId, chapterData] of Object.entries(chapters)) {
      // The chapter data is an object with a single key matching the chapterId
      if (typeof chapterData === "object" && chapterData !== null) {
        result[chapterId] = (chapterData as Record<string, any>)[chapterId];
      }
    }
  }

  // Process New Testament
  for (const [bookName, chapters] of Object.entries(bible.new)) {
    for (const [chapterId, chapterData] of Object.entries(chapters)) {
      if (typeof chapterData === "object" && chapterData !== null)
        result[chapterId] = (chapterData as Record<string, any>)[chapterId];
    }
  }

  return result;
}

// Type definition for TypeScript
type Verse = {
  id: string;
  verse: number;
  text: string;
  french: string;
};

type FlattenedBible = Record<string, Verse[]>;

// With proper typing
const data: FlattenedBible = flattenBibleData(bible);

// Create a comprehensive collection of all verses for search functionality
const allMockVerses = Object.entries(data).flatMap(([key, verses]) => {
  const [bookId, chapterId] = key.split("-").map(Number);
  const book = bibleBooks.find((b) => Number(b.id) === bookId)?.name || "";

  return verses.map((verse) => ({
    ...verse,
    book,
    chapter: chapterId,
  }));
});

// Replace the static recent readings and bookmarks with empty arrays
const initialRecentReadings: {
  id: string;
  book: string;
  chapter: number;
  verse: number;
}[] = [];
const initialBookmarks: {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  note?: string;
}[] = [];

// Translation options
type TranslationOption = "moussey" | "french" | "both";

export default function BibleScreen() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [activeTab, setActiveTab] = useState("books"); // 'books', 'recent', 'bookmarks'
  const [translationOption, setTranslationOption] =
    useState<TranslationOption>("both");
  const [showVerseOptions, setShowVerseOptions] = useState<string | null>(null);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);
  const [bookmarkNote, setBookmarkNote] = useState("");
  const [selectedVerse, setSelectedVerse] = useState<any>(null);
  const [showJumpToModal, setShowJumpToModal] = useState(false);
  const [jumpToChapter, setJumpToChapter] = useState("");
  const [jumpToVerse, setJumpToVerse] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState("medium"); // small, medium, large
  const [nightMode, setNightMode] = useState(false);
  const [testament, setTestament] = useState<"all" | "ancien" | "nouveau">(
    "all"
  );

  // Add state for recent readings and bookmarks
  const [recentReadings, setRecentReadings] = useState(initialRecentReadings);
  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  // Add state for verse search
  const [showVerseSearch, setShowVerseSearch] = useState(false);
  const [verseSearchQuery, setVerseSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Animation values
  const searchBarAnim = useRef(new Animated.Value(0)).current;
  const verseScaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const verseSearchAnim = useRef(new Animated.Value(0)).current;

  // Refs
  const scrollViewRef = useRef<ScrollView>(null);
  const flatListRef = useRef<FlatList>(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const recentData = await AsyncStorage.getItem("recentReadings");
        if (recentData) {
          setRecentReadings(JSON.parse(recentData));
        }

        const bookmarksData = await AsyncStorage.getItem("bookmarks");
        if (bookmarksData) {
          setBookmarks(JSON.parse(bookmarksData));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadData();
  }, []);

  // Toggle search bar
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    Animated.timing(searchBarAnim, {
      toValue: showSearch ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // Toggle verse search
  const toggleVerseSearch = () => {
    setShowVerseSearch(!showVerseSearch);
    Animated.timing(verseSearchAnim, {
      toValue: showVerseSearch ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    if (showVerseSearch) {
      setVerseSearchQuery("");
      setSearchResults([]);
    }
  };

  // Search verses by keyword
  const searchVerses = (query: string) => {
    setVerseSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const normalizedQuery = query.toLowerCase().trim();

    // Search in all mock verses
    const results = allMockVerses.filter(
      (verse) =>
        verse.text.toLowerCase().includes(normalizedQuery) ||
        verse.french.toLowerCase().includes(normalizedQuery)
    );

    setSearchResults(results);
  };

  // Filter books based on search query and testament
  const filteredBooks = bibleBooks.filter(
    (book) =>
      (testament === "all" || book.testament === testament) &&
      (searchQuery === "" ||
        book.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Save recent reading
  const saveRecentReading = async (
    book: string,
    chapter: number,
    verse: number
  ) => {
    try {
      // Create new recent reading
      const newReading = {
        id: Date.now().toString(),
        book,
        chapter,
        verse,
      };

      // Add to beginning of array and limit to 10 items
      const updatedReadings = [
        newReading,
        ...recentReadings.filter(
          (r) =>
            !(r.book === book && r.chapter === chapter && r.verse === verse)
        ),
      ].slice(0, 10);

      // Update state
      setRecentReadings(updatedReadings);

      // Save to AsyncStorage
      await AsyncStorage.setItem(
        "recentReadings",
        JSON.stringify(updatedReadings)
      );
    } catch (error) {
      console.error("Error saving recent reading:", error);
      if (Platform.OS === "android") {
        ToastAndroid.show("Error saving recent reading", ToastAndroid.SHORT);
      } else {
        Alert.alert("Error", "Could not save recent reading");
      }
    }
  };

  // Add a function to remove recent reading after the saveRecentReading function
  const removeRecentReading = async (id: string) => {
    try {
      const updatedReadings = recentReadings.filter(
        (reading) => reading.id !== id
      );
      setRecentReadings(updatedReadings);
      await AsyncStorage.setItem(
        "recentReadings",
        JSON.stringify(updatedReadings)
      );

      if (Platform.OS === "android") {
        ToastAndroid.show("Lecture récente supprimée", ToastAndroid.SHORT);
      } else {
        Alert.alert("Succès", "Lecture récente supprimée");
      }
    } catch (error) {
      console.error("Error removing recent reading:", error);
      if (Platform.OS === "android") {
        ToastAndroid.show("Erreur lors de la suppression", ToastAndroid.SHORT);
      } else {
        Alert.alert("Erreur", "Impossible de supprimer la lecture récente");
      }
    }
  };

  // Update the handleVersePress function to work with the new data structure
  const handleVersePress = (verse: any) => {
    setSelectedVerse(verse);
    setShowVerseOptions(verse.id);

    // Save as recent reading if we have a book and chapter
    if (selectedBook && selectedChapter) {
      const book = bibleBooks.find((b) => b.id === selectedBook);
      if (book) {
        saveRecentReading(book.name, selectedChapter, verse.verse);
      }
    }

    // Animate the verse
    Animated.sequence([
      Animated.timing(verseScaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(verseScaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Copy verse to clipboard
  const copyVerse = (verse: any) => {
    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    const verseText =
      translationOption === "french"
        ? verse.french
        : translationOption === "moussey"
        ? verse.text
        : `${verse.text}\n${verse.french}`;

    const reference = `${book.name} ${selectedChapter}:${verse.verse}`;
    const fullText = `${reference}\n${verseText}`;

    Clipboard.setString(fullText);

    // Show toast or alert
    if (Platform.OS === "android") {
      ToastAndroid.show("Verse copied to clipboard", ToastAndroid.SHORT);
    } else {
      Alert.alert("Copied", "Verse copied to clipboard");
    }

    setShowVerseOptions(null);
  };

  // Fix the shareVerse function
  const shareVerse = (verse: any) => {
    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    const verseText =
      translationOption === "french"
        ? verse.french
        : translationOption === "moussey"
        ? verse.text
        : `${verse.text}\n${verse.french}`;

    const reference = `${book.name} ${selectedChapter}:${verse.verse}`;
    const fullText = `${reference}\n${verseText}`;

    Share.share({
      message: fullText,
      title: reference,
    });

    setShowVerseOptions(null);
  };

  // Update the addBookmark function
  const addBookmark = async () => {
    if (!selectedVerse) return;

    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    try {
      // Create new bookmark
      const newBookmark = {
        id: Date.now().toString(),
        book: book.name,
        chapter: selectedChapter || 1,
        verse: selectedVerse.verse,
        note: bookmarkNote,
      };

      // Add to bookmarks
      const updatedBookmarks = [...bookmarks, newBookmark];

      // Update state
      setBookmarks(updatedBookmarks);

      // Save to AsyncStorage
      await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

      // Close modal and reset
      setShowBookmarkModal(false);
      setBookmarkNote("");
      setShowVerseOptions(null);

      // Show confirmation
      if (Platform.OS === "android") {
        ToastAndroid.show("Bookmark added", ToastAndroid.SHORT);
      } else {
        Alert.alert("Success", "Bookmark added");
      }
    } catch (error) {
      console.error("Error saving bookmark:", error);
      if (Platform.OS === "android") {
        ToastAndroid.show("Error saving bookmark", ToastAndroid.SHORT);
      } else {
        Alert.alert("Error", "Could not save bookmark");
      }
    }
  };

  // Add function to remove bookmark
  const removeBookmark = async (id: string) => {
    try {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

      if (Platform.OS === "android") {
        ToastAndroid.show("Bookmark removed", ToastAndroid.SHORT);
      } else {
        Alert.alert("Success", "Bookmark removed");
      }
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  };

  // Jump to specific verse
  const handleJumpTo = () => {
    const chapter = Number.parseInt(jumpToChapter);
    const verse = Number.parseInt(jumpToVerse);

    if (isNaN(chapter) || chapter < 1) {
      Alert.alert("Invalid Chapter", "Please enter a valid chapter number");
      return;
    }

    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    if (chapter > book.chapters) {
      Alert.alert(
        "Invalid Chapter",
        `${book.name} only has ${book.chapters} chapters`
      );
      return;
    }

    setSelectedChapter(chapter);
    setShowJumpToModal(false);

    // In a real app, we would scroll to the specific verse
    // For now, just simulate with a timeout
    setTimeout(() => {
      if (verse && !isNaN(verse)) {
        // Scroll to verse logic would go here
        if (Platform.OS === "android") {
          ToastAndroid.show(`Scrolled to verse ${verse}`, ToastAndroid.SHORT);
        }
      }
    }, 500);
  };

  // Navigate to search result
  const navigateToSearchResult = (result: any) => {
    // Find the book
    const book = bibleBooks.find((b) => b.name === result.book);
    if (!book) return;

    // Set the book and chapter
    setSelectedBook(book.id);
    setSelectedChapter(result.chapter);

    // Close search
    setShowVerseSearch(false);
    setVerseSearchQuery("");

    // Reset animation
    verseSearchAnim.setValue(0);

    // In a real app, we would scroll to the specific verse
    // For now, just simulate with a timeout
    setTimeout(() => {
      // Highlight the verse
      setSelectedVerse(result);
      setShowVerseOptions(result.id);
    }, 500);
  };

  // Apply font size
  const getFontSize = () => {
    switch (fontSize) {
      case "small":
        return { verse: 14, text: 16 };
      case "large":
        return { verse: 18, text: 20 };
      default:
        return { verse: 16, text: 18 };
    }
  };

  // Update the renderVerses function to use the correct verses based on selected book and chapter
  const renderVerses = () => {
    if (!selectedBook || !selectedChapter) return;

    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    const fontSizes = getFontSize();

    // Get the correct verses for the selected book and chapter
    const verseKey = `${selectedBook}-${selectedChapter}`;
    const verses = data[verseKey as keyof typeof data] || [];

    // If no verses are available for this book/chapter, show a placeholder
    const noVersesAvailable = verses.length === 0;

    return (
      <Animated.View
        style={[
          styles.versesContainer,
          { backgroundColor: colors.card },
          { opacity: fadeAnim },
        ]}
      >
        <View style={styles.versesHeader}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              }).start(() => {
                setSelectedChapter(null);
                fadeAnim.setValue(1);
              });
            }}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.versesTitle, { color: colors.text }]}>
            {book.name} {selectedChapter}
          </Text>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.headerAction}
              onPress={toggleVerseSearch}
            >
              <Ionicons
                name={showVerseSearch ? "close" : "search"}
                size={24}
                color={colors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerAction}
              onPress={() => setShowSettings(true)}
            >
              <Ionicons name="text" size={24} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerAction}>
              <Ionicons name="bookmark-outline" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Verse Search Bar */}
        <Animated.View
          style={[
            styles.verseSearchContainer,
            {
              height: verseSearchAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
              }),
              opacity: verseSearchAnim,
              marginTop: verseSearchAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 10],
              }),
            },
          ]}
        >
          <View
            style={[
              styles.verseSearchInputContainer,
              {
                backgroundColor: colors.background,
                borderColor: colors.border,
              },
            ]}
          >
            <Ionicons
              name="search"
              size={20}
              color={colors.text}
              style={styles.searchIcon}
            />
            <TextInput
              style={[styles.verseSearchInput, { color: colors.text }]}
              placeholder="Rechercher dans les versets..."
              placeholderTextColor={colors.inactive}
              value={verseSearchQuery}
              onChangeText={searchVerses}
              autoFocus={showVerseSearch}
            />
            {verseSearchQuery.length > 0 && (
              <TouchableOpacity onPress={() => searchVerses("")}>
                <Ionicons
                  name="close-circle"
                  size={20}
                  color={colors.inactive}
                />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>

        {/* Search Results */}
        {showVerseSearch && verseSearchQuery.length > 0 && (
          <View
            style={[
              styles.searchResultsContainer,
              { backgroundColor: colors.background },
            ]}
          >
            {searchResults.length > 0 ? (
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.searchResultItem,
                      { borderBottomColor: colors.border },
                    ]}
                    onPress={() => navigateToSearchResult(item)}
                  >
                    <Text
                      style={[
                        styles.searchResultReference,
                        { color: colors.primary },
                      ]}
                    >
                      {item.book} {item.chapter}:{item.verse}
                    </Text>
                    <Text
                      style={[styles.searchResultText, { color: colors.text }]}
                      numberOfLines={2}
                    >
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <View style={styles.emptySearchResults}>
                <Text
                  style={[
                    styles.emptySearchResultsText,
                    { color: colors.inactive },
                  ]}
                >
                  Aucun résultat trouvé
                </Text>
              </View>
            )}
          </View>
        )}

        {!showVerseSearch && (
          <>
            <View style={styles.translationToggle}>
              <TouchableOpacity
                style={[
                  styles.translationOption,
                  translationOption === "moussey" && {
                    backgroundColor: colors.primary,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                  },
                ]}
                onPress={() => setTranslationOption("moussey")}
              >
                <Text
                  style={[
                    styles.translationOptionText,
                    {
                      color:
                        translationOption === "moussey" ? "white" : colors.text,
                    },
                  ]}
                >
                  Moussey
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.translationOption,
                  translationOption === "both" && {
                    backgroundColor: colors.primary,
                  },
                ]}
                onPress={() => setTranslationOption("both")}
              >
                <Text
                  style={[
                    styles.translationOptionText,
                    {
                      color:
                        translationOption === "both" ? "white" : colors.text,
                    },
                  ]}
                >
                  Les deux
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.translationOption,
                  translationOption === "french" && {
                    backgroundColor: colors.primary,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  },
                ]}
                onPress={() => setTranslationOption("french")}
              >
                <Text
                  style={[
                    styles.translationOptionText,
                    {
                      color:
                        translationOption === "french" ? "white" : colors.text,
                    },
                  ]}
                >
                  Français
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.versesList}
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}
            >
              {noVersesAvailable ? (
                <View style={styles.emptyVersesContainer}>
                  <Text
                    style={[styles.emptyVersesText, { color: colors.inactive }]}
                  >
                    Aucun verset disponible pour {book.name} {selectedChapter}
                  </Text>
                </View>
              ) : (
                verses.map((verse) => (
                  <TouchableOpacity
                    key={verse.id}
                    style={[
                      styles.verseItem,
                      showVerseOptions === verse.id && {
                        backgroundColor: `${colors.primary}10`,
                      },
                    ]}
                    onPress={() => handleVersePress(verse)}
                    onLongPress={() => handleVersePress(verse)}
                  >
                    <View style={styles.verseHeader}>
                      <Text
                        style={[
                          styles.verseNumber,
                          { color: colors.primary, fontSize: fontSizes.verse },
                        ]}
                      >
                        {verse.verse}
                      </Text>
                      {showVerseOptions === verse.id && (
                        <View style={styles.verseActions}>
                          <TouchableOpacity
                            style={[
                              styles.verseAction,
                              { backgroundColor: colors.primary },
                            ]}
                            onPress={() => copyVerse(verse)}
                          >
                            <Ionicons
                              name="copy-outline"
                              size={16}
                              color="white"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[
                              styles.verseAction,
                              { backgroundColor: colors.primary },
                            ]}
                            onPress={() => shareVerse(verse)}
                          >
                            <Ionicons
                              name="share-social-outline"
                              size={16}
                              color="white"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[
                              styles.verseAction,
                              { backgroundColor: colors.primary },
                            ]}
                            onPress={() => {
                              setSelectedVerse(verse);
                              setShowBookmarkModal(true);
                            }}
                          >
                            <Ionicons
                              name="bookmark-outline"
                              size={16}
                              color="white"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[
                              styles.verseAction,
                              { backgroundColor: colors.primary },
                            ]}
                            onPress={() => setShowVerseOptions(null)}
                          >
                            <Ionicons name="close" size={16} color="white" />
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>

                    {(translationOption === "moussey" ||
                      translationOption === "both") && (
                      <Text
                        style={[
                          styles.verseText,
                          { color: colors.text, fontSize: fontSizes.text },
                        ]}
                      >
                        {verse.text}
                      </Text>
                    )}

                    {translationOption === "both" && (
                      <View
                        style={[
                          styles.divider,
                          { backgroundColor: colors.border },
                        ]}
                      />
                    )}

                    {(translationOption === "french" ||
                      translationOption === "both") && (
                      <Text
                        style={[
                          styles.verseTranslation,
                          {
                            color:
                              translationOption === "both"
                                ? colors.inactive
                                : colors.text,
                            fontSize:
                              fontSizes.text -
                              (translationOption === "both" ? 2 : 0),
                          },
                        ]}
                      >
                        {verse.french}
                      </Text>
                    )}
                  </TouchableOpacity>
                ))
              )}
              <View style={{ height: 20 }} />
            </ScrollView>

            <View
              style={[
                styles.navigationControls,
                { backgroundColor: colors.card },
              ]}
            >
              <TouchableOpacity
                style={[styles.navButton, { backgroundColor: colors.primary }]}
                onPress={() => {
                  if (selectedChapter && selectedChapter > 1) {
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 200,
                      useNativeDriver: true,
                    }).start(() => {
                      setSelectedChapter(selectedChapter - 1);
                      fadeAnim.setValue(1);
                    });
                  }
                }}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
                <Text style={styles.navButtonText}>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.jumpButton, { borderColor: colors.border }]}
                onPress={() => setShowJumpToModal(true)}
              >
                <Ionicons name="search" size={20} color={colors.primary} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.navButton, { backgroundColor: colors.primary }]}
                onPress={() => {
                  const book = bibleBooks.find((b) => b.id === selectedBook);
                  if (
                    book &&
                    selectedChapter &&
                    selectedChapter < book.chapters
                  ) {
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 200,
                      useNativeDriver: true,
                    }).start(() => {
                      setSelectedChapter(selectedChapter + 1);
                      fadeAnim.setValue(1);
                    });
                  }
                }}
              >
                <Text style={styles.navButtonText}>Next</Text>
                <Ionicons name="chevron-forward" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </Animated.View>
    );
  };

  // Render chapter grid
  const renderChapterGrid = () => {
    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return null;

    return (
      <Animated.View
        style={[
          styles.chapterContainer,
          { backgroundColor: colors.card },
          { opacity: fadeAnim },
        ]}
      >
        <View style={styles.chapterHeader}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              }).start(() => {
                setSelectedBook(null);
                fadeAnim.setValue(1);
              });
            }}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.chapterTitle, { color: colors.text }]}>
            {book.name}
          </Text>
          <TouchableOpacity onPress={() => setShowJumpToModal(true)}>
            <Ionicons name="search" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.chaptersGrid}>
          {Array.from({ length: book.chapters }, (_, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.chapterItem,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                },
                selectedChapter === i + 1 && {
                  backgroundColor: colors.primary,
                },
              ]}
              onPress={() => {
                Animated.timing(fadeAnim, {
                  toValue: 0,
                  duration: 200,
                  useNativeDriver: true,
                }).start(() => {
                  setSelectedChapter(i + 1);
                  fadeAnim.setValue(1);
                });
              }}
            >
              <Text
                style={[
                  styles.chapterNumber,
                  { color: selectedChapter === i + 1 ? "white" : colors.text },
                ]}
              >
                {i + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    );
  };

  // Update the renderRecentReadings function to navigate to the correct verse
  const renderRecentReadings = () => {
    return (
      <View style={[styles.recentContainer, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Lectures Récentes
        </Text>
        {recentReadings.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.inactive }]}>
              Aucune lecture récente
            </Text>
          </View>
        ) : (
          recentReadings.map((item) => (
            <View
              key={item.id}
              style={[styles.recentItem, { borderBottomColor: colors.border }]}
            >
              <TouchableOpacity
                style={styles.recentItemContent}
                onPress={() => {
                  const book = bibleBooks.find((b) => b.name === item.book);
                  if (book) {
                    setSelectedBook(book.id);
                    setSelectedChapter(item.chapter);
                    setActiveTab("books");

                    // Set a timeout to allow the verses to render before scrolling
                    setTimeout(() => {
                      // Find the verse element and scroll to it
                      if (scrollViewRef.current) {
                        // We'll use a ref to track the verse we want to scroll to
                        const verseToScrollTo = item.verse;

                        // Get the verses for this book and chapter
                        const verseKey = `${book.id}-${item.chapter}`;
                        const verses = data[verseKey] || [];

                        // Set the selected verse to highlight it
                        const verseObj = verses.find(
                          (v) => v.verse === verseToScrollTo
                        );
                        if (verseObj) {
                          setSelectedVerse(verseObj);
                          setShowVerseOptions(verseObj.id);
                        }

                        // Calculate approximate position (this would be more precise with actual measurements)
                        const approximateVerseHeight = 150; // average height of a verse container
                        const scrollPosition =
                          (verseToScrollTo - 1) * approximateVerseHeight;

                        scrollViewRef.current.scrollTo({
                          y: scrollPosition,
                          animated: true,
                        });
                      }
                    }, 500); // Give time for rendering
                  }
                }}
              >
                <Text style={[styles.recentItemTitle, { color: colors.text }]}>
                  {item.book} {item.chapter}:{item.verse}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.inactive}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteRecentButton}
                onPress={() => removeRecentReading(item.id)}
              >
                <Ionicons
                  name="trash-outline"
                  size={20}
                  color={colors.inactive}
                />
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    );
  };

  // Modify the renderRecentReadings function to include delete functionality and store verse information
  // const renderRecentReadings = () => {
  //   return (
  //     <View style={[styles.recentContainer, { backgroundColor: colors.card }]}>
  //       <Text style={[styles.sectionTitle, { color: colors.text }]}>Lectures Récentes</Text>
  //       {recentReadings.length === 0 ? (
  //         <View style={styles.emptyContainer}>
  //           <Text style={[styles.emptyText, { color: colors.inactive }]}>Aucune lecture récente</Text>
  //         </View>
  //       ) : (
  //         recentReadings.map((item) => (
  //           <View key={item.id} style={[styles.recentItem, { borderBottomColor: colors.border }]}>
  //             <TouchableOpacity
  //               style={styles.recentItemContent}
  //               onPress={() => {
  //                 const book = bibleBooks.find((b) => b.name === item.book)
  //                 if (book) {
  //                   setSelectedBook(book.id)
  //                   setSelectedChapter(item.chapter)
  //                   setActiveTab("books")

  //                   // Set a timeout to allow the verses to render before scrolling
  //                   setTimeout(() => {
  //                     // Find the verse element and scroll to it
  //                     if (scrollViewRef.current) {
  //                       // We'll use a ref to track the verse we want to scroll to
  //                       const verseToScrollTo = item.verse

  //                       // Set the selected verse to highlight it
  //                       const verseObj = mockVerses.find((v) => v.verse === verseToScrollTo)
  //                       if (verseObj) {
  //                         setSelectedVerse(verseObj)
  //                         setShowVerseOptions(verseObj.id)
  //                       }

  //                       // Calculate approximate position (this would be more precise with actual measurements)
  //                       const approximateVerseHeight = 150 // average height of a verse container
  //                       const scrollPosition = (verseToScrollTo - 1) * approximateVerseHeight

  //                       scrollViewRef.current.scrollTo({ y: scrollPosition, animated: true })
  //                     }
  //                   }, 500) // Give time for rendering
  //                 }
  //               }}
  //             >
  //               <Text style={[styles.recentItemTitle, { color: colors.text }]}>
  //                 {item.book} {item.chapter}:{item.verse}
  //               </Text>
  //               <Ionicons name="chevron-forward" size={20} color={colors.inactive} />
  //             </TouchableOpacity>
  //             <TouchableOpacity style={styles.deleteRecentButton} onPress={() => removeRecentReading(item.id)}>
  //               <Ionicons name="trash-outline" size={20} color={colors.inactive} />
  //             </TouchableOpacity>
  //           </View>
  //         ))
  //       )}
  //     </View>
  //   )
  // }

  // Update the bookmarks rendering to include delete functionality
  const renderBookmarks = () => {
    return (
      <View
        style={[styles.bookmarksContainer, { backgroundColor: colors.card }]}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Signets
        </Text>
        {bookmarks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.inactive }]}>
              Aucun signet
            </Text>
          </View>
        ) : (
          bookmarks.map((item) => (
            <View
              key={item.id}
              style={[
                styles.bookmarkItem,
                { borderBottomColor: colors.border },
              ]}
            >
              <TouchableOpacity
                style={styles.bookmarkItemContent}
                onPress={() => {
                  const book = bibleBooks.find((b) => b.name === item.book);
                  if (book) {
                    setSelectedBook(book.id);
                    setSelectedChapter(item.chapter);
                    setActiveTab("books");
                  }
                }}
              >
                <View>
                  <Text
                    style={[styles.bookmarkItemTitle, { color: colors.text }]}
                  >
                    {item.book} {item.chapter}:{item.verse}
                  </Text>
                  {item.note && (
                    <Text
                      style={[
                        styles.bookmarkItemNote,
                        { color: colors.inactive },
                      ]}
                    >
                      {item.note}
                    </Text>
                  )}
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => removeBookmark(item.id)}
                  >
                    <Ionicons
                      name="trash-outline"
                      size={20}
                      color={colors.inactive}
                    />
                  </TouchableOpacity>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.inactive}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    );
  };

  // Replace the FlatList in the books tab with this updated version that includes testament sections
  const renderBooksContent = () => {
    if (selectedChapter) {
      return renderVerses();
    } else if (selectedBook) {
      return renderChapterGrid();
    } else {
      return (
        <>
          {/* Testament selector */}
          <View style={styles.testamentSelector}>
            <TouchableOpacity
              style={[
                styles.testamentOption,
                testament === "all" && { backgroundColor: colors.primary },
              ]}
              onPress={() => setTestament("all")}
            >
              <Text
                style={{ color: testament === "all" ? "white" : colors.text }}
              >
                Tous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.testamentOption,
                testament === "ancien" && { backgroundColor: colors.primary },
              ]}
              onPress={() => setTestament("ancien")}
            >
              <Text
                style={{
                  color: testament === "ancien" ? "white" : colors.text,
                }}
              >
                Ancien Testament
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.testamentOption,
                testament === "nouveau" && { backgroundColor: colors.primary },
              ]}
              onPress={() => setTestament("nouveau")}
            >
              <Text
                style={{
                  color: testament === "nouveau" ? "white" : colors.text,
                }}
              >
                Nouveau Testament
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredBooks}
            keyExtractor={(item) => item.id}
            ref={flatListRef}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.bookItem,
                  {
                    borderBottomColor: colors.border,
                    backgroundColor: colors.card,
                  },
                ]}
                onPress={() => {
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                  }).start(() => {
                    setSelectedBook(item.id);
                    fadeAnim.setValue(1);
                  });
                }}
              >
                <Text style={[styles.bookName, { color: colors.text }]}>
                  {item.name}
                </Text>
                <Text style={[styles.chapterCount, { color: colors.inactive }]}>
                  {item.chapters} chapitres
                </Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={[styles.emptyText, { color: colors.inactive }]}>
                  Aucun livre trouvé
                </Text>
              </View>
            }
            stickyHeaderIndices={[]}
          />
        </>
      );
    }
  };

  // Update the activeTab === "books" section in the return statement
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={colors.headerBackground as [string, string]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Bible</Text>
          <TouchableOpacity onPress={toggleSearch}>
            <Ionicons
              name={showSearch ? "close" : "search"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <Animated.View
          style={[
            styles.searchContainer,
            {
              height: searchBarAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
              }),
              opacity: searchBarAnim,
              marginTop: searchBarAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 10],
              }),
            },
          ]}
        >
          <View
            style={[
              styles.searchInputContainer,
              { backgroundColor: "rgba(255,255,255,0.2)" },
            ]}
          >
            <Ionicons
              name="search"
              size={20}
              color="white"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher un livre..."
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons name="close-circle" size={20} color="white" />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      </LinearGradient>

      {/* Tabs */}
      <View style={[styles.tabsContainer, { backgroundColor: colors.card }]}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "books" && styles.activeTab,
            activeTab === "books" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setActiveTab("books")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: activeTab === "books" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Livres
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "recent" && styles.activeTab,
            activeTab === "recent" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setActiveTab("recent")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  activeTab === "recent" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Récents
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "bookmarks" && styles.activeTab,
            activeTab === "bookmarks" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setActiveTab("bookmarks")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  activeTab === "bookmarks" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Signets
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on selected tab */}
      {activeTab === "books" && renderBooksContent()}
      {activeTab === "recent" && renderRecentReadings()}
      {activeTab === "bookmarks" && renderBookmarks()}

      {/* Bookmark Modal */}
      <Modal
        visible={showBookmarkModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowBookmarkModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowBookmarkModal(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.modalContainer, { backgroundColor: colors.card }]}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Add Bookmark
            </Text>

            {selectedVerse && selectedBook && (
              <Text style={[styles.modalSubtitle, { color: colors.inactive }]}>
                {bibleBooks.find((b) => b.id === selectedBook)?.name}{" "}
                {selectedChapter}:{selectedVerse.verse}
              </Text>
            )}

            <TextInput
              style={[
                styles.noteInput,
                {
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.border,
                },
              ]}
              placeholder="Add a note (optional)"
              placeholderTextColor={colors.inactive}
              value={bookmarkNote}
              onChangeText={setBookmarkNote}
              multiline
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { borderColor: colors.border }]}
                onPress={() => setShowBookmarkModal(false)}
              >
                <Text
                  style={[styles.modalButtonText, { color: colors.inactive }]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={addBookmark}
              >
                <Text style={styles.modalButtonTextPrimary}>Save</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Jump To Modal */}
      <Modal
        visible={showJumpToModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowJumpToModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowJumpToModal(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.modalContainer, { backgroundColor: colors.card }]}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Jump To
            </Text>

            {selectedBook && (
              <Text style={[styles.modalSubtitle, { color: colors.inactive }]}>
                {bibleBooks.find((b) => b.id === selectedBook)?.name}
              </Text>
            )}

            <View style={styles.jumpInputRow}>
              <View style={styles.jumpInputContainer}>
                <Text style={[styles.jumpInputLabel, { color: colors.text }]}>
                  Chapter
                </Text>
                <TextInput
                  style={[
                    styles.jumpInput,
                    {
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.border,
                    },
                  ]}
                  placeholder="1"
                  placeholderTextColor={colors.inactive}
                  value={jumpToChapter}
                  onChangeText={setJumpToChapter}
                  keyboardType="number-pad"
                />
              </View>

              <View style={styles.jumpInputContainer}>
                <Text style={[styles.jumpInputLabel, { color: colors.text }]}>
                  Verse (optional)
                </Text>
                <TextInput
                  style={[
                    styles.jumpInput,
                    {
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.border,
                    },
                  ]}
                  placeholder="1"
                  placeholderTextColor={colors.inactive}
                  value={jumpToVerse}
                  onChangeText={setJumpToVerse}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { borderColor: colors.border }]}
                onPress={() => setShowJumpToModal(false)}
              >
                <Text
                  style={[styles.modalButtonText, { color: colors.inactive }]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={handleJumpTo}
              >
                <Text style={styles.modalButtonTextPrimary}>Go</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Settings Modal */}
      <Modal
        visible={showSettings}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSettings(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowSettings(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.modalContainer, { backgroundColor: colors.card }]}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Display Settings
            </Text>

            <View style={styles.settingsSection}>
              <Text
                style={[styles.settingsSectionTitle, { color: colors.text }]}
              >
                Font Size
              </Text>
              <View style={styles.fontSizeOptions}>
                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "small" && { backgroundColor: colors.primary },
                  ]}
                  onPress={() => setFontSize("small")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "small" ? "white" : colors.text },
                    ]}
                  >
                    Small
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "medium" && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                  onPress={() => setFontSize("medium")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "medium" ? "white" : colors.text },
                    ]}
                  >
                    Medium
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "large" && { backgroundColor: colors.primary },
                  ]}
                  onPress={() => setFontSize("large")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "large" ? "white" : colors.text },
                    ]}
                  >
                    Large
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.settingsButton,
                { backgroundColor: colors.primary },
              ]}
              onPress={() => setShowSettings(false)}
            >
              <Text style={styles.settingsButtonText}>Done</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: StatusBar.currentHeight || 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    overflow: "hidden",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "white",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  bookItem: {
    padding: 15,
    borderBottomWidth: 1,
  },
  bookName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  chapterCount: {
    fontSize: 12,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
  },
  chapterContainer: {
    flex: 1,
  },
  recentContainer: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  recentItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  recentItemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentItemTitle: {
    fontSize: 16,
  },
  deleteRecentButton: {
    padding: 10,
    position: "absolute",
    right: 30,
    top: 10,
  },
  bookmarksContainer: {
    flex: 1,
    padding: 15,
  },
  bookmarkItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  bookmarkItemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookmarkItemTitle: {
    fontSize: 16,
  },
  bookmarkItemNote: {
    fontSize: 14,
    marginTop: 4,
  },
  chapterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    padding: 5,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  chaptersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
  },
  chapterItem: {
    width: "18%",
    aspectRatio: 1,
    margin: "1%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  chapterNumber: {
    fontSize: 16,
    fontWeight: "500",
  },
  versesContainer: {
    flex: 1,
  },
  versesHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  versesTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  headerActions: {
    flexDirection: "row",
  },
  headerAction: {
    marginLeft: 15,
  },
  translationToggle: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  translationOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "transparent",
  },
  translationOptionText: {
    fontSize: 14,
    fontWeight: "500",
  },
  versesList: {
    flex: 1,
    padding: 15,
  },
  verseItem: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  verseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  verseNumber: {
    fontWeight: "bold",
    marginRight: 8,
  },
  verseText: {
    lineHeight: 24,
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
  verseTranslation: {
    lineHeight: 24,
    fontStyle: "italic",
  },
  verseActions: {
    flexDirection: "row",
  },
  verseAction: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  navigationControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  navButtonText: {
    color: "white",
    fontWeight: "500",
  },
  jumpButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 14,
    marginBottom: 15,
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    textAlignVertical: "top",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 1,
  },
  modalButtonText: {
    fontWeight: "500",
  },
  modalButtonTextPrimary: {
    color: "white",
    fontWeight: "500",
  },
  jumpInputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jumpInputContainer: {
    width: "48%",
  },
  jumpInputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  jumpInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  settingsSection: {
    marginBottom: 20,
  },
  settingsSectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  fontSizeOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontSizeOption: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  fontSizeOptionText: {
    fontWeight: "500",
  },
  settingsButton: {
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  settingsButtonText: {
    color: "white",
    fontWeight: "500",
  },
  testamentSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  testamentOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  verseSearchContainer: {
    overflow: "hidden",
    paddingHorizontal: 15,
  },
  verseSearchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 40,
  },
  verseSearchInput: {
    flex: 1,
    height: 40,
  },
  searchResultsContainer: {
    flex: 1,
    padding: 10,
  },
  searchResultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  searchResultReference: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  searchResultText: {
    fontSize: 14,
  },
  emptySearchResults: {
    padding: 20,
    alignItems: "center",
  },
  emptySearchResultsText: {
    fontSize: 16,
  },
  emptyVersesContainer: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyVersesText: {
    fontSize: 16,
    textAlign: "center",
  },
});
