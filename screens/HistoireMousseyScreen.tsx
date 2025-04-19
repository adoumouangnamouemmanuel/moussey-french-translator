"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  TextInput,
  ScrollView,
  Animated,
  Share,
  Alert,
  Modal,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext";
import * as Clipboard from "expo-clipboard";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Mock stories data
const stories = [
  {
    id: "1",
    title: "Les Origines du Peuple Moussey",
    shortDescription:
      "L'histoire de la création et des origines du peuple Moussey.",
    fullDescription:
      "Cette histoire raconte comment le peuple Moussey est venu à exister, leurs migrations historiques et les légendes qui entourent leur création. Transmise de génération en génération, elle forme la base de l'identité culturelle Moussey.",
    imageUrl: "origins",
    duration: "15 min",
    level: "Débutant",
    hasAudio: true,
    categories: ["Culture", "Histoire"],
    content: [
      {
        paragraph:
          "Il y a très longtemps, dans une terre lointaine, vivait un peuple nomade guidé par un chef sage nommé Mouss. Après des années de voyage à travers les plaines arides, ils découvrirent une vallée fertile bordée de rivières.",
        translation:
          "Long ago, in a distant land, there lived a nomadic people led by a wise chief named Mouss. After years of traveling across arid plains, they discovered a fertile valley bordered by rivers.",
      },
      {
        paragraph:
          "Mouss déclara que c'était l'endroit parfait pour s'installer. Le peuple construisit des maisons, cultiva la terre et prospéra. Ils devinrent connus sous le nom de 'Moussey', les enfants de Mouss.",
        translation:
          "Mouss declared it was the perfect place to settle. The people built houses, cultivated the land, and prospered. They became known as 'Moussey', the children of Mouss.",
      },
      {
        paragraph:
          "Au fil des générations, le peuple Moussey développa sa propre langue, ses traditions et sa culture unique. Ils étaient connus pour leur hospitalité, leur sagesse et leur connexion profonde avec la nature.",
        translation:
          "Over generations, the Moussey people developed their own language, traditions, and unique culture. They were known for their hospitality, wisdom, and deep connection with nature.",
      },
    ],
  },
  {
    id: "2",
    title: "La Légende du Lac Sacré",
    shortDescription:
      "Un conte sur le lac mystérieux qui protège le village Moussey.",
    fullDescription:
      "Cette légende parle d'un lac sacré qui aurait des pouvoirs magiques et qui protège le village Moussey contre les dangers. Les villageois font des offrandes au lac pour assurer leur protection et leur prospérité.",
    imageUrl: "lake",
    duration: "10 min",
    level: "Intermédiaire",
    hasAudio: true,
    categories: ["Légendes", "Nature"],
    content: [
      {
        paragraph:
          "Au cœur du territoire Moussey se trouve un lac aux eaux cristallines qui brille sous la lumière de la lune. Les anciens racontent que ce lac est habité par des esprits protecteurs.",
        translation:
          "In the heart of Moussey territory lies a lake with crystal-clear waters that shines under the moonlight. The elders say this lake is inhabited by protective spirits.",
      },
      {
        paragraph:
          "Un jour, des envahisseurs tentèrent d'attaquer le village. La nuit précédant l'attaque, le lac commença à bouillonner et un épais brouillard s'en éleva, enveloppant tout le village.",
        translation:
          "One day, invaders attempted to attack the village. The night before the attack, the lake began to bubble and a thick fog rose from it, enveloping the entire village.",
      },
      {
        paragraph:
          "Les envahisseurs, perdus dans le brouillard, errèrent en cercles jusqu'à l'aube, puis s'enfuirent, terrifiés. Depuis ce jour, les Moussey célèbrent chaque année la protection du lac sacré.",
        translation:
          "The invaders, lost in the fog, wandered in circles until dawn, then fled in terror. Since that day, the Moussey celebrate the protection of the sacred lake every year.",
      },
    ],
  },
  {
    id: "3",
    title: "Le Premier Roi Moussey",
    shortDescription:
      "L'histoire du premier roi qui a unifié les tribus Moussey.",
    fullDescription:
      "Ce récit historique raconte comment le premier roi Moussey a réussi à unifier les différentes tribus et à établir un royaume prospère. Son règne est considéré comme l'âge d'or de la civilisation Moussey.",
    imageUrl: "king",
    duration: "12 min",
    level: "Avancé",
    hasAudio: false,
    categories: ["Histoire", "Politique"],
    content: [
      {
        paragraph:
          "Avant l'unification, les Moussey vivaient en petites tribus dispersées, souvent en conflit les unes avec les autres. Un jeune homme nommé Koulou, connu pour sa sagesse et son éloquence, rêvait d'unir son peuple.",
        translation:
          "Before unification, the Moussey lived in small, scattered tribes, often in conflict with one another. A young man named Koulou, known for his wisdom and eloquence, dreamed of uniting his people.",
      },
      {
        paragraph:
          "Koulou voyagea de village en village, résolvant les conflits et gagnant le respect de tous. Il organisa un grand conseil où toutes les tribus se réunirent pour discuter de l'avenir.",
        translation:
          "Koulou traveled from village to village, resolving conflicts and earning everyone's respect. He organized a great council where all tribes gathered to discuss the future.",
      },
      {
        paragraph:
          "Impressionnés par sa vision et son leadership, les chefs de tribus décidèrent unanimement de le couronner comme le premier roi Moussey. Sous son règne, le royaume connut paix et prospérité pendant de nombreuses années.",
        translation:
          "Impressed by his vision and leadership, the tribal chiefs unanimously decided to crown him as the first Moussey king. Under his reign, the kingdom experienced peace and prosperity for many years.",
      },
    ],
  },
  {
    id: "4",
    title: "Les Contes de la Forêt Enchantée",
    shortDescription:
      "Histoires magiques de la forêt qui entoure les villages Moussey.",
    fullDescription:
      "Une collection de contes populaires sur la forêt enchantée qui entoure les villages Moussey. Ces histoires sont racontées aux enfants pour leur enseigner des leçons morales et les mettre en garde contre les dangers de la forêt.",
    imageUrl: "forest",
    duration: "20 min",
    level: "Débutant",
    hasAudio: true,
    categories: ["Contes", "Nature"],
    content: [
      {
        paragraph:
          "La forêt qui entoure les villages Moussey n'est pas une forêt ordinaire. Les arbres y sont plus grands, les fleurs plus colorées, et les animaux plus sages que partout ailleurs.",
        translation:
          "The forest surrounding the Moussey villages is no ordinary forest. The trees are taller, the flowers more colorful, and the animals wiser than anywhere else.",
      },
      {
        paragraph:
          "On raconte que si l'on entre dans la forêt avec un cœur pur et respectueux, les esprits de la forêt peuvent exaucer un vœu. Mais ceux qui entrent avec de mauvaises intentions se perdent à jamais.",
        translation:
          "It is said that if one enters the forest with a pure and respectful heart, the forest spirits may grant a wish. But those who enter with bad intentions become lost forever.",
      },
      {
        paragraph:
          "Une jeune fille nommée Lia, dont la mère était malade, entra dans la forêt pour chercher des herbes médicinales. Un cerf blanc apparut et la guida vers une clairière remplie de plantes rares qui guérirent sa mère.",
        translation:
          "A young girl named Lia, whose mother was ill, entered the forest to look for medicinal herbs. A white deer appeared and guided her to a clearing filled with rare plants that cured her mother.",
      },
    ],
  },
  {
    id: "5",
    title: "Les Traditions de Mariage Moussey",
    shortDescription:
      "Les rituels et traditions entourant le mariage dans la culture Moussey.",
    fullDescription:
      "Cette histoire décrit les rituels complexes et les traditions qui entourent le mariage dans la culture Moussey. De la demande en mariage aux célébrations qui durent plusieurs jours, ces traditions sont riches en symbolisme et en signification.",
    imageUrl: "wedding",
    duration: "18 min",
    level: "Intermédiaire",
    hasAudio: true,
    categories: ["Culture", "Traditions"],
    content: [
      {
        paragraph:
          "Dans la tradition Moussey, le mariage n'est pas simplement l'union de deux personnes, mais celle de deux familles entières. Le processus commence lorsque le jeune homme envoie des émissaires respectés pour demander la main de la jeune femme à sa famille.",
        translation:
          "In Moussey tradition, marriage is not simply the union of two people, but of two entire families. The process begins when the young man sends respected emissaries to ask for the young woman's hand from her family.",
      },
      {
        paragraph:
          "Si la famille de la jeune femme accepte, une période de fiançailles commence, durant laquelle le futur marié doit prouver sa valeur en travaillant dans les champs de la famille de sa fiancée et en offrant des cadeaux symboliques.",
        translation:
          "If the young woman's family accepts, an engagement period begins, during which the future groom must prove his worth by working in his fiancée's family fields and offering symbolic gifts.",
      },
      {
        paragraph:
          "Le jour du mariage, le village entier se réunit pour une célébration qui dure trois jours. Des danses traditionnelles, des chants et des festins marquent cette occasion joyeuse, et les anciens bénissent le couple pour une vie de bonheur et de fertilité.",
        translation:
          "On the wedding day, the entire village gathers for a celebration that lasts three days. Traditional dances, songs, and feasts mark this joyous occasion, and the elders bless the couple for a life of happiness and fertility.",
      },
    ],
  },
];

// Types
type TranslationLanguage = "french" | "english" | "both";
type Bookmark = {
  id: string;
  storyId: string;
  title: string;
  date: string;
  note?: string;
};
type RecentReading = {
  id: string;
  storyId: string;
  title: string;
  date: string;
  lastPosition?: number;
};
type HighlightedText = {
  id: string;
  storyId: string;
  paragraphIndex: number;
  text: string;
  color: string;
  date: string;
};

export default function HistoiresMousseyScreen() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [translationLanguage, setTranslationLanguage] =
    useState<TranslationLanguage>("both");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [advancedSearchQuery, setAdvancedSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [recentReadings, setRecentReadings] = useState<RecentReading[]>([]);
  const [highlights, setHighlights] = useState<HighlightedText[]>([]);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);
  const [bookmarkNote, setBookmarkNote] = useState("");
  const [selectedParagraph, setSelectedParagraph] = useState<{
    index: number;
    text: string;
  } | null>(null);
  const [showParagraphOptions, setShowParagraphOptions] = useState(false);
  const [showHighlightOptions, setShowHighlightOptions] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "stories" | "bookmarks" | "recent"
  >("stories");
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [showSettings, setShowSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Animation for story details
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const searchBarAnim = useRef(new Animated.Value(0)).current;
  const paragraphOptionsAnim = useRef(new Animated.Value(0)).current;

  // Load data from AsyncStorage on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const bookmarksData = await AsyncStorage.getItem("moussey_bookmarks");
        if (bookmarksData) {
          setBookmarks(JSON.parse(bookmarksData));
        }

        const recentData = await AsyncStorage.getItem("moussey_recent");
        if (recentData) {
          setRecentReadings(JSON.parse(recentData));
        }

        const highlightsData = await AsyncStorage.getItem("moussey_highlights");
        if (highlightsData) {
          setHighlights(JSON.parse(highlightsData));
        }

        const fontSizeData = await AsyncStorage.getItem("moussey_fontSize");
        if (fontSizeData) {
          setFontSize(JSON.parse(fontSizeData));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadData();
  }, []);

  // Save recent reading
  const saveRecentReading = async (storyId: string) => {
    try {
      const story = stories.find((s) => s.id === storyId);
      if (!story) return;

      const newReading: RecentReading = {
        id: Date.now().toString(),
        storyId,
        title: story.title,
        date: new Date().toISOString(),
      };

      // Add to beginning of array and limit to 10 items
      const updatedReadings = [
        newReading,
        ...recentReadings.filter((r) => r.storyId !== storyId),
      ].slice(0, 10);

      // Update state
      setRecentReadings(updatedReadings);

      // Save to AsyncStorage
      await AsyncStorage.setItem(
        "moussey_recent",
        JSON.stringify(updatedReadings)
      );
    } catch (error) {
      console.error("Error saving recent reading:", error);
      showToast("Erreur lors de l'enregistrement de la lecture récente");
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
        "moussey_recent",
        JSON.stringify(updatedReadings)
      );
      showToast("Lecture récente supprimée");
    } catch (error) {
      console.error("Error removing recent reading:", error);
      showToast("Erreur lors de la suppression");
    }
  };

  // Add bookmark
  const addBookmark = async () => {
    try {
      const story = stories.find((s) => s.id === selectedStory);
      if (!story) return;

      const newBookmark: Bookmark = {
        id: Date.now().toString(),
        storyId: selectedStory!,
        title: story.title,
        date: new Date().toISOString(),
        note: bookmarkNote,
      };

      const updatedBookmarks = [...bookmarks, newBookmark];
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem(
        "moussey_bookmarks",
        JSON.stringify(updatedBookmarks)
      );

      setShowBookmarkModal(false);
      setBookmarkNote("");
      showToast("Signet ajouté avec succès");
    } catch (error) {
      console.error("Error adding bookmark:", error);
      showToast("Erreur lors de l'ajout du signet");
    }
  };

  // Remove bookmark
  const removeBookmark = async (id: string) => {
    try {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem(
        "moussey_bookmarks",
        JSON.stringify(updatedBookmarks)
      );
      showToast("Signet supprimé");
    } catch (error) {
      console.error("Error removing bookmark:", error);
      showToast("Erreur lors de la suppression du signet");
    }
  };

  // Add highlight
  const addHighlight = async (color: string) => {
    if (!selectedParagraph || !selectedStory) return;

    try {
      const newHighlight: HighlightedText = {
        id: Date.now().toString(),
        storyId: selectedStory,
        paragraphIndex: selectedParagraph.index,
        text: selectedParagraph.text,
        color,
        date: new Date().toISOString(),
      };

      const updatedHighlights = [...highlights, newHighlight];
      setHighlights(updatedHighlights);
      await AsyncStorage.setItem(
        "moussey_highlights",
        JSON.stringify(updatedHighlights)
      );

      setShowHighlightOptions(false);
      setSelectedParagraph(null);
      showToast("Texte surligné");
    } catch (error) {
      console.error("Error adding highlight:", error);
      showToast("Erreur lors du surlignage");
    }
  };

  // Remove highlight
  const removeHighlight = async (id: string) => {
    try {
      const updatedHighlights = highlights.filter(
        (highlight) => highlight.id !== id
      );
      setHighlights(updatedHighlights);
      await AsyncStorage.setItem(
        "moussey_highlights",
        JSON.stringify(updatedHighlights)
      );
      showToast("Surlignage supprimé");
    } catch (error) {
      console.error("Error removing highlight:", error);
      showToast("Erreur lors de la suppression du surlignage");
    }
  };

  // Save font size preference
  const saveFontSize = async (size: "small" | "medium" | "large") => {
    try {
      setFontSize(size);
      await AsyncStorage.setItem("moussey_fontSize", JSON.stringify(size));
    } catch (error) {
      console.error("Error saving font size:", error);
    }
  };

  // Show toast message
  const showToast = (message: string) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert("", message);
    }
  };

  // Toggle advanced search
  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
    Animated.timing(searchBarAnim, {
      toValue: showAdvancedSearch ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    if (showAdvancedSearch) {
      setAdvancedSearchQuery("");
      setSearchResults([]);
    }
  };

  // Search in story content
  const searchInContent = () => {
    if (!advancedSearchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const query = advancedSearchQuery.toLowerCase();
    const results: any[] = [];

    stories.forEach((story) => {
      story.content.forEach((paragraph, index) => {
        const matchesFrench = paragraph.paragraph.toLowerCase().includes(query);
        const matchesEnglish = paragraph.translation
          .toLowerCase()
          .includes(query);

        if (matchesFrench || matchesEnglish) {
          results.push({
            id: `${story.id}-${index}`,
            storyId: story.id,
            storyTitle: story.title,
            paragraphIndex: index,
            text: matchesFrench ? paragraph.paragraph : paragraph.translation,
            isEnglish: !matchesFrench && matchesEnglish,
          });
        }
      });
    });

    setSearchResults(results);
    setIsSearching(false);
  };

  // Filter stories based on search query and category
  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      story.categories.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === null || story.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  // Get all unique categories
  const categories = Array.from(
    new Set(stories.flatMap((story) => story.categories))
  );

  // Handle story selection
  const handleSelectStory = (id: string) => {
    setSelectedStory(id);
    saveRecentReading(id);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Handle back from story details
  const handleBackFromStory = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSelectedStory(null);
    });
  };

  // Handle paragraph press
  const handleParagraphPress = (index: number, text: string) => {
    setSelectedParagraph({ index, text });
    setShowParagraphOptions(true);

    Animated.timing(paragraphOptionsAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // Close paragraph options
  const closeParagraphOptions = () => {
    Animated.timing(paragraphOptionsAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShowParagraphOptions(false);
      setSelectedParagraph(null);
    });
  };

  // Copy paragraph text
  const copyParagraphText = () => {
    if (!selectedParagraph) return;

    Clipboard.setString(selectedParagraph.text);
    closeParagraphOptions();
    showToast("Texte copié");
  };

  // Share paragraph text
  const shareParagraphText = () => {
    if (!selectedParagraph || !selectedStory) return;

    const story = stories.find((s) => s.id === selectedStory);
    if (!story) return;

    Share.share({
      message: `"${selectedParagraph.text}" - ${story.title}`,
      title: story.title,
    });

    closeParagraphOptions();
  };

  // Navigate to search result
  const navigateToSearchResult = (result: any) => {
    setSelectedStory(result.storyId);
    setShowAdvancedSearch(false);
    searchBarAnim.setValue(0);

    // Highlight the paragraph after navigation
    setTimeout(() => {
      setSelectedParagraph({
        index: result.paragraphIndex,
        text: result.text,
      });
      setShowParagraphOptions(true);
    }, 500);
  };

  // Check if story is bookmarked
  const isBookmarked = (storyId: string) => {
    return bookmarks.some((bookmark) => bookmark.storyId === storyId);
  };

  // Get highlight for paragraph
  const getHighlightForParagraph = (
    storyId: string,
    paragraphIndex: number
  ) => {
    return highlights.find(
      (h) => h.storyId === storyId && h.paragraphIndex === paragraphIndex
    );
  };

  // Toggle audio playback
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    showToast(isPlaying ? "Audio en pause" : "Lecture audio démarrée");
  };

  // Share story
  const shareStory = () => {
    if (!selectedStory) return;

    const story = stories.find((s) => s.id === selectedStory);
    if (!story) return;

    Share.share({
      message: `Découvrez cette histoire Moussey: "${story.title}" - ${story.shortDescription}`,
      title: story.title,
    });
  };

  // Get font size values
  const getFontSize = () => {
    switch (fontSize) {
      case "small":
        return { paragraph: 14, title: 18, subtitle: 16 };
      case "large":
        return { paragraph: 18, title: 22, subtitle: 20 };
      default:
        return { paragraph: 16, title: 20, subtitle: 18 };
    }
  };

  // Render story icon based on category
  const renderStoryIcon = (imageUrl: string) => {
    switch (imageUrl) {
      case "origins":
        return <Ionicons name="people" size={40} color={colors.primary} />;
      case "lake":
        return <Ionicons name="water" size={40} color={colors.primary} />;
      case "king":
        return (
          <Ionicons name="trophy-outline" size={40} color={colors.primary} />
        );
      case "forest":
        return <Ionicons name="leaf" size={40} color={colors.primary} />;
      case "wedding":
        return <Ionicons name="heart" size={40} color={colors.primary} />;
      default:
        return <Ionicons name="book" size={40} color={colors.primary} />;
    }
  };

  // Render story details
  const renderStoryDetails = () => {
    const story = stories.find((s) => s.id === selectedStory);
    if (!story) return null;

    const fontSizes = getFontSize();
    const storyBookmarked = isBookmarked(story.id);

    return (
      <Animated.View
        style={[
          styles.storyDetailsContainer,
          { backgroundColor: colors.background, opacity: fadeAnim },
        ]}
      >
        <View style={styles.storyDetailsHeader}>
          <TouchableOpacity
            onPress={handleBackFromStory}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.storyTitleContainer}>
            <Text
              style={[
                styles.storyTitle,
                { color: colors.text, fontSize: fontSizes.title },
              ]}
            >
              {story.title}
            </Text>
            <View style={styles.storyMetaContainer}>
              <View
                style={[
                  styles.levelBadge,
                  { backgroundColor: `${colors.primary}20` },
                ]}
              >
                <Text style={[styles.levelText, { color: colors.primary }]}>
                  {story.level}
                </Text>
              </View>
              <Text style={[styles.durationText, { color: colors.inactive }]}>
                {story.duration}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => {
              if (storyBookmarked) {
                const bookmark = bookmarks.find((b) => b.storyId === story.id);
                if (bookmark) removeBookmark(bookmark.id);
              } else {
                setShowBookmarkModal(true);
              }
            }}
          >
            <Ionicons
              name={storyBookmarked ? "bookmark" : "bookmark-outline"}
              size={24}
              color={storyBookmarked ? colors.primary : colors.text}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.storyScrollView}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.storyImageContainer,
              { backgroundColor: `${colors.primary}10` },
            ]}
          >
            <View
              style={[
                styles.storyImagePlaceholder,
                { backgroundColor: `${colors.primary}20` },
              ]}
            >
              {renderStoryIcon(story.imageUrl)}
            </View>
          </View>

          <View style={styles.storyDescriptionContainer}>
            <Text
              style={[
                styles.storyDescriptionTitle,
                { color: colors.text, fontSize: fontSizes.subtitle },
              ]}
            >
              Description
            </Text>
            <Text
              style={[
                styles.storyDescription,
                { color: colors.inactive, fontSize: fontSizes.paragraph - 2 },
              ]}
            >
              {story.fullDescription}
            </Text>
          </View>

          <View style={styles.translationOptionsContainer}>
            <Text
              style={[
                styles.translationTitle,
                { color: colors.text, fontSize: fontSizes.subtitle },
              ]}
            >
              Options de traduction
            </Text>
            <View style={styles.translationButtons}>
              <TouchableOpacity
                style={[
                  styles.translationButton,
                  translationLanguage === "both" && {
                    backgroundColor: `${colors.primary}20`,
                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => setTranslationLanguage("both")}
              >
                <Text
                  style={[
                    styles.translationButtonText,
                    {
                      color:
                        translationLanguage === "both"
                          ? colors.primary
                          : colors.inactive,
                    },
                  ]}
                >
                  Les deux
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.translationButton,
                  translationLanguage === "french" && {
                    backgroundColor: `${colors.primary}20`,
                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => setTranslationLanguage("french")}
              >
                <Text
                  style={[
                    styles.translationButtonText,
                    {
                      color:
                        translationLanguage === "french"
                          ? colors.primary
                          : colors.inactive,
                    },
                  ]}
                >
                  Français
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.translationButton,
                  translationLanguage === "english" && {
                    backgroundColor: `${colors.primary}20`,
                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => setTranslationLanguage("english")}
              >
                <Text
                  style={[
                    styles.translationButtonText,
                    {
                      color:
                        translationLanguage === "english"
                          ? colors.primary
                          : colors.inactive,
                    },
                  ]}
                >
                  Anglais
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.storyContentContainer}>
            <Text
              style={[
                styles.storyContentTitle,
                { color: colors.text, fontSize: fontSizes.subtitle },
              ]}
            >
              Histoire
            </Text>
            {story.content.map((paragraph, index) => {
              const highlight = getHighlightForParagraph(story.id, index);

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.paragraphContainer,
                    { backgroundColor: colors.card },
                    highlight && {
                      borderLeftWidth: 4,
                      borderLeftColor: highlight.color,
                    },
                  ]}
                  onLongPress={() =>
                    handleParagraphPress(index, paragraph.paragraph)
                  }
                >
                  {(translationLanguage === "both" ||
                    translationLanguage === "french") && (
                    <Text
                      style={[
                        styles.paragraph,
                        {
                          color: colors.text,
                          fontSize: fontSizes.paragraph,
                          backgroundColor: highlight
                            ? `${highlight.color}20`
                            : "transparent",
                        },
                      ]}
                    >
                      {paragraph.paragraph}
                    </Text>
                  )}
                  {translationLanguage === "both" && (
                    <View
                      style={[
                        styles.divider,
                        { backgroundColor: colors.border },
                      ]}
                    />
                  )}
                  {(translationLanguage === "both" ||
                    translationLanguage === "english") && (
                    <Text
                      style={[
                        styles.translation,
                        {
                          color:
                            translationLanguage === "both"
                              ? colors.inactive
                              : colors.text,
                          fontSize:
                            translationLanguage === "both"
                              ? fontSizes.paragraph - 2
                              : fontSizes.paragraph,
                          fontStyle:
                            translationLanguage === "both"
                              ? "italic"
                              : "normal",
                          backgroundColor: highlight
                            ? `${highlight.color}10`
                            : "transparent",
                        },
                      ]}
                    >
                      {paragraph.translation}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.storyActionsContainer}>
          {story.hasAudio && (
            <TouchableOpacity
              style={[
                styles.storyActionButton,
                { backgroundColor: colors.primary },
              ]}
              onPress={toggleAudio}
            >
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={20}
                color="white"
                style={styles.actionIcon}
              />
              <Text style={styles.actionText}>
                {isPlaying ? "Pause" : "Écouter"}
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[
              styles.storyActionButton,
              { backgroundColor: colors.primary },
            ]}
            onPress={() => setShowBookmarkModal(true)}
          >
            <Ionicons
              name="bookmark"
              size={20}
              color="white"
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Sauvegarder</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.storyActionButton,
              { backgroundColor: colors.primary },
            ]}
            onPress={shareStory}
          >
            <Ionicons
              name="share-social"
              size={20}
              color="white"
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Partager</Text>
          </TouchableOpacity>
        </View>

        {/* Paragraph Options Modal */}
        {showParagraphOptions && (
          <Animated.View
            style={[
              styles.paragraphOptionsContainer,
              {
                opacity: paragraphOptionsAnim,
                transform: [
                  {
                    translateY: paragraphOptionsAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <View
              style={[
                styles.paragraphOptionsContent,
                { backgroundColor: colors.card },
              ]}
            >
              <TouchableOpacity
                style={styles.paragraphOption}
                onPress={copyParagraphText}
              >
                <Ionicons
                  name="copy-outline"
                  size={24}
                  color={colors.primary}
                />
                <Text
                  style={[styles.paragraphOptionText, { color: colors.text }]}
                >
                  Copier
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.paragraphOption}
                onPress={shareParagraphText}
              >
                <Ionicons
                  name="share-outline"
                  size={24}
                  color={colors.primary}
                />
                <Text
                  style={[styles.paragraphOptionText, { color: colors.text }]}
                >
                  Partager
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.paragraphOption}
                onPress={() => setShowHighlightOptions(true)}
              >
                <Ionicons
                  name="color-fill-outline"
                  size={24}
                  color={colors.primary}
                />
                <Text
                  style={[styles.paragraphOptionText, { color: colors.text }]}
                >
                  Surligner
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.paragraphOption}
                onPress={closeParagraphOptions}
              >
                <Ionicons
                  name="close-circle-outline"
                  size={24}
                  color={colors.inactive}
                />
                <Text
                  style={[
                    styles.paragraphOptionText,
                    { color: colors.inactive },
                  ]}
                >
                  Annuler
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}

        {/* Highlight Color Options */}
        {showHighlightOptions && (
          <View
            style={[
              styles.highlightOptionsContainer,
              { backgroundColor: colors.card },
            ]}
          >
            <Text style={[styles.highlightTitle, { color: colors.text }]}>
              Choisir une couleur
            </Text>
            <View style={styles.colorOptions}>
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: "#FFEB3B" }]}
                onPress={() => addHighlight("#FFEB3B")}
              />
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: "#4CAF50" }]}
                onPress={() => addHighlight("#4CAF50")}
              />
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: "#2196F3" }]}
                onPress={() => addHighlight("#2196F3")}
              />
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: "#F44336" }]}
                onPress={() => addHighlight("#F44336")}
              />
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: "#9C27B0" }]}
                onPress={() => addHighlight("#9C27B0")}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.cancelHighlightButton,
                { borderColor: colors.border },
              ]}
              onPress={() => setShowHighlightOptions(false)}
            >
              <Text
                style={[styles.cancelHighlightText, { color: colors.inactive }]}
              >
                Annuler
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    );
  };

  // Render bookmarks tab
  const renderBookmarksTab = () => {
    return (
      <View style={[styles.tabContent, { backgroundColor: colors.background }]}>
        <Text style={[styles.tabTitle, { color: colors.text }]}>
          Mes Signets
        </Text>
        {bookmarks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="bookmark" size={50} color={colors.inactive} />
            <Text style={[styles.emptyText, { color: colors.inactive }]}>
              Aucun signet enregistré
            </Text>
            <Text style={[styles.emptySubtext, { color: colors.inactive }]}>
              Ajoutez des signets en lisant des histoires
            </Text>
          </View>
        ) : (
          <FlatList
            data={bookmarks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.bookmarkItem, { backgroundColor: colors.card }]}
                onPress={() => handleSelectStory(item.storyId)}
              >
                <View style={styles.bookmarkContent}>
                  <Text style={[styles.bookmarkTitle, { color: colors.text }]}>
                    {item.title}
                  </Text>
                  {item.note && (
                    <Text
                      style={[styles.bookmarkNote, { color: colors.inactive }]}
                      numberOfLines={2}
                    >
                      {item.note}
                    </Text>
                  )}
                  <Text
                    style={[styles.bookmarkDate, { color: colors.inactive }]}
                  >
                    {new Date(item.date).toLocaleDateString()}
                  </Text>
                </View>
                <View style={styles.bookmarkActions}>
                  <TouchableOpacity
                    style={styles.bookmarkAction}
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
            )}
            contentContainerStyle={styles.bookmarksList}
          />
        )}
      </View>
    );
  };

  // Update the renderRecentTab function to include delete functionality
  const renderRecentTab = () => {
    return (
      <View style={[styles.tabContent, { backgroundColor: colors.background }]}>
        <Text style={[styles.tabTitle, { color: colors.text }]}>
          Lectures Récentes
        </Text>
        {recentReadings.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="time" size={50} color={colors.inactive} />
            <Text style={[styles.emptyText, { color: colors.inactive }]}>
              Aucune lecture récente
            </Text>
            <Text style={[styles.emptySubtext, { color: colors.inactive }]}>
              Les histoires que vous lisez apparaîtront ici
            </Text>
          </View>
        ) : (
          <FlatList
            data={recentReadings}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[styles.recentItem, { backgroundColor: colors.card }]}
              >
                <TouchableOpacity
                  style={styles.recentContent}
                  onPress={() => handleSelectStory(item.storyId)}
                >
                  <Text style={[styles.recentTitle, { color: colors.text }]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.recentDate, { color: colors.inactive }]}>
                    {new Date(item.date).toLocaleDateString()}
                  </Text>
                </TouchableOpacity>
                <View style={styles.recentActions}>
                  <TouchableOpacity
                    style={styles.recentAction}
                    onPress={() => removeRecentReading(item.id)}
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
              </View>
            )}
            contentContainerStyle={styles.recentsList}
          />
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={colors.headerBackground as [string, string]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Histoires Moussey</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity
              onPress={toggleAdvancedSearch}
              style={styles.headerAction}
            >
              <Ionicons
                name={showAdvancedSearch ? "close" : "search"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowSettings(true)}
              style={styles.headerAction}
            >
              <Ionicons name="settings-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Basic Search bar */}
        {!showAdvancedSearch && (
          <View
            style={[
              styles.searchContainer,
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
              placeholder="Rechercher une histoire..."
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
        )}

        {/* Advanced Search bar */}
        <Animated.View
          style={[
            styles.advancedSearchContainer,
            {
              height: searchBarAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100],
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
              styles.advancedSearchInputContainer,
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
              placeholder="Rechercher dans le contenu des histoires..."
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={advancedSearchQuery}
              onChangeText={setAdvancedSearchQuery}
              onSubmitEditing={searchInContent}
            />
            {advancedSearchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setAdvancedSearchQuery("")}>
                <Ionicons name="close-circle" size={20} color="white" />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={[
              styles.searchButton,
              { backgroundColor: "rgba(255,255,255,0.3)" },
            ]}
            onPress={searchInContent}
          >
            <Text style={styles.searchButtonText}>Rechercher</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>

      {/* Search Results */}
      {showAdvancedSearch && searchResults.length > 0 && (
        <View
          style={[
            styles.searchResultsContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Text style={[styles.searchResultsTitle, { color: colors.text }]}>
            {searchResults.length} résultat{searchResults.length > 1 ? "s" : ""}
          </Text>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.searchResultItem,
                  { backgroundColor: colors.card },
                ]}
                onPress={() => navigateToSearchResult(item)}
              >
                <Text
                  style={[styles.searchResultStory, { color: colors.primary }]}
                >
                  {item.storyTitle}
                </Text>
                <Text
                  style={[
                    styles.searchResultText,
                    {
                      color: colors.text,
                      fontStyle: item.isEnglish ? "italic" : "normal",
                    },
                  ]}
                  numberOfLines={2}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.searchResultsList}
          />
        </View>
      )}

      {selectedStory ? (
        renderStoryDetails()
      ) : showAdvancedSearch && searchResults.length === 0 ? (
        <View style={styles.emptySearchContainer}>
          <Ionicons name="search" size={50} color={colors.inactive} />
          <Text style={[styles.emptyText, { color: colors.inactive }]}>
            {advancedSearchQuery.length > 0
              ? "Aucun résultat trouvé"
              : "Recherchez dans le contenu des histoires"}
          </Text>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          {/* Tabs */}
          <View
            style={[styles.tabsContainer, { backgroundColor: colors.card }]}
          >
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === "stories" && styles.activeTab,
                activeTab === "stories" && {
                  borderBottomColor: colors.primary,
                },
              ]}
              onPress={() => setActiveTab("stories")}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color:
                      activeTab === "stories"
                        ? colors.primary
                        : colors.inactive,
                  },
                ]}
              >
                Histoires
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === "bookmarks" && styles.activeTab,
                activeTab === "bookmarks" && {
                  borderBottomColor: colors.primary,
                },
              ]}
              onPress={() => setActiveTab("bookmarks")}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color:
                      activeTab === "bookmarks"
                        ? colors.primary
                        : colors.inactive,
                  },
                ]}
              >
                Signets
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
          </View>

          {/* Tab Content */}
          {activeTab === "stories" && (
            <>
              {/* Categories */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesContainer}
              >
                <TouchableOpacity
                  style={[
                    styles.categoryChip,
                    {
                      backgroundColor:
                        selectedCategory === null
                          ? colors.primary
                          : `${colors.primary}20`,
                    },
                  ]}
                  onPress={() => setSelectedCategory(null)}
                >
                  <Text
                    style={[
                      styles.categoryChipText,
                      {
                        color:
                          selectedCategory === null ? "white" : colors.primary,
                      },
                    ]}
                  >
                    Tous
                  </Text>
                </TouchableOpacity>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryChip,
                      {
                        backgroundColor:
                          selectedCategory === category
                            ? colors.primary
                            : `${colors.primary}20`,
                      },
                    ]}
                    onPress={() =>
                      setSelectedCategory(
                        category === selectedCategory ? null : category
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.categoryChipText,
                        {
                          color:
                            selectedCategory === category
                              ? "white"
                              : colors.primary,
                        },
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Stories list */}
              <FlatList
                data={filteredStories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.storyItem, { backgroundColor: colors.card }]}
                    onPress={() => handleSelectStory(item.id)}
                  >
                    <View
                      style={[
                        styles.storyIconContainer,
                        { backgroundColor: `${colors.primary}20` },
                      ]}
                    >
                      {renderStoryIcon(item.imageUrl)}
                    </View>
                    <View style={styles.storyItemContent}>
                      <Text
                        style={[styles.storyItemTitle, { color: colors.text }]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          styles.storyItemDescription,
                          { color: colors.inactive },
                        ]}
                        numberOfLines={2}
                      >
                        {item.shortDescription}
                      </Text>
                      <View style={styles.storyItemFooter}>
                        <View style={styles.storyItemMeta}>
                          <View
                            style={[
                              styles.levelBadge,
                              { backgroundColor: `${colors.primary}20` },
                            ]}
                          >
                            <Text
                              style={[
                                styles.levelText,
                                { color: colors.primary },
                              ]}
                            >
                              {item.level}
                            </Text>
                          </View>
                          <Text
                            style={[
                              styles.durationText,
                              { color: colors.inactive },
                            ]}
                          >
                            {item.duration}
                          </Text>
                        </View>
                        <View style={styles.storyItemIcons}>
                          {isBookmarked(item.id) && (
                            <Ionicons
                              name="bookmark"
                              size={18}
                              color={colors.primary}
                              style={styles.storyItemIcon}
                            />
                          )}
                          {item.hasAudio && (
                            <Ionicons
                              name="volume-medium"
                              size={18}
                              color={colors.primary}
                              style={styles.storyItemIcon}
                            />
                          )}
                        </View>
                      </View>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color={colors.inactive}
                    />
                  </TouchableOpacity>
                )}
                contentContainerStyle={styles.storiesList}
                ListEmptyComponent={
                  <View style={styles.emptyContainer}>
                    <Ionicons name="book" size={50} color={colors.inactive} />
                    <Text
                      style={[styles.emptyText, { color: colors.inactive }]}
                    >
                      Aucune histoire trouvée
                    </Text>
                  </View>
                }
              />
            </>
          )}

          {activeTab === "bookmarks" && renderBookmarksTab()}
          {activeTab === "recent" && renderRecentTab()}
        </View>
      )}

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
              Ajouter un signet
            </Text>

            {selectedStory && (
              <Text style={[styles.modalSubtitle, { color: colors.inactive }]}>
                {stories.find((s) => s.id === selectedStory)?.title}
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
              placeholder="Ajouter une note (optionnel)"
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
                  Annuler
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={addBookmark}
              >
                <Text style={styles.modalButtonTextPrimary}>Enregistrer</Text>
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
              Paramètres
            </Text>

            <View style={styles.settingsSection}>
              <Text
                style={[styles.settingsSectionTitle, { color: colors.text }]}
              >
                Taille du texte
              </Text>
              <View style={styles.fontSizeOptions}>
                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "small" && { backgroundColor: colors.primary },
                  ]}
                  onPress={() => saveFontSize("small")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "small" ? "white" : colors.text },
                    ]}
                  >
                    Petit
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "medium" && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                  onPress={() => saveFontSize("medium")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "medium" ? "white" : colors.text },
                    ]}
                  >
                    Moyen
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "large" && { backgroundColor: colors.primary },
                  ]}
                  onPress={() => saveFontSize("large")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "large" ? "white" : colors.text },
                    ]}
                  >
                    Grand
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
              <Text style={styles.settingsButtonText}>Terminé</Text>
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
    marginBottom: 15,
  },
  headerActions: {
    flexDirection: "row",
  },
  headerAction: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
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
  advancedSearchContainer: {
    overflow: "hidden",
  },
  advancedSearchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  searchButtonText: {
    color: "white",
    fontWeight: "500",
  },
  searchResultsContainer: {
    flex: 1,
    padding: 15,
  },
  searchResultsTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  searchResultsList: {
    paddingBottom: 15,
  },
  searchResultItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchResultStory: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  searchResultText: {
    fontSize: 14,
    lineHeight: 20,
  },
  emptySearchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
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
  tabContent: {
    flex: 1,
    padding: 15,
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  categoriesContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 60,
  },
  categoryChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: "500",
  },
  storiesList: {
    padding: 15,
  },
  storyItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  storyIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  storyItemContent: {
    flex: 1,
  },
  storyItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storyItemDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  storyItemFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  storyItemMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  storyItemIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  storyItemIcon: {
    marginLeft: 8,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 10,
  },
  levelText: {
    fontSize: 12,
    fontWeight: "500",
  },
  durationText: {
    fontSize: 12,
  },
  audioIcon: {
    marginLeft: 10,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 10,
  },
  emptySubtext: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  storyDetailsContainer: {
    flex: 1,
  },
  storyScrollView: {
    flex: 1,
    padding: 15,
  },
  storyDetailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    marginRight: 15,
  },
  storyTitleContainer: {
    flex: 1,
  },
  storyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storyMetaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteButton: {
    padding: 5,
  },
  storyImageContainer: {
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  storyImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  storyDescriptionContainer: {
    marginBottom: 15,
  },
  storyDescriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storyDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  translationOptionsContainer: {
    marginBottom: 15,
  },
  translationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  translationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  translationButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  translationButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },
  storyContentContainer: {
    marginBottom: 15,
  },
  storyContentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraphContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    marginVertical: 10,
  },
  translation: {
    fontSize: 14,
    lineHeight: 22,
    fontStyle: "italic",
  },
  storyActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  storyActionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  actionIcon: {
    marginRight: 5,
  },
  actionText: {
    color: "white",
    fontWeight: "500",
  },
  paragraphOptionsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  paragraphOptionsContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    padding: 15,
  },
  paragraphOption: {
    alignItems: "center",
    padding: 10,
  },
  paragraphOptionText: {
    marginTop: 5,
    fontSize: 12,
  },
  highlightOptionsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  highlightTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
  },
  colorOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cancelHighlightButton: {
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
  },
  cancelHighlightText: {
    fontSize: 14,
  },
  bookmarksList: {
    paddingBottom: 15,
  },
  bookmarkItem: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookmarkContent: {
    flex: 1,
  },
  bookmarkTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  bookmarkNote: {
    fontSize: 14,
    marginBottom: 5,
  },
  bookmarkDate: {
    fontSize: 12,
  },
  bookmarkActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookmarkAction: {
    padding: 10,
    marginRight: 5,
  },
  recentsList: {
    paddingBottom: 15,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  recentContent: {
    flex: 1,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  recentDate: {
    fontSize: 12,
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
  recentActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentAction: {
    padding: 10,
    marginRight: 5,
  },
});