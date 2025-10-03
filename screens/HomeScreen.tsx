import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import RecipeCard from "../components/RecipeCard";
import SearchModal from "../components/SearchModal";
import { mockRecipes } from "../data/mockedRecipes";
import type { RootStackParamList } from "../navigation/types";
import { styles } from "../styles";

export default function HomeScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}) {
  const recipes = mockRecipes;
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  function handleSearchPress() {
    setIsSearchModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.scrollView}>
        <FlatList
          data={recipes}
          renderItem={({ item }) => {
            return (
              <RecipeCard key={item.id} recipe={item} navigation={navigation} />
            );
          }}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Alla recept</Text>
              <Pressable
                style={styles.searchButton}
                onPress={() => {
                  handleSearchPress();
                }}
              >
                <Text style={styles.searchButtonText}>Sök</Text>
              </Pressable>
              <SearchModal
                visible={isSearchModalVisible}
                onClose={() => setIsSearchModalVisible(false)}
              />
            </View>
          }
        />
      </View>
    </View>
  );
}
