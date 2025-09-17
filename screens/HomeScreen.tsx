import { FlatList, View, Text, StyleSheet } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { mockRecipes } from "../data/mockedRecipes";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';


export default function HomeScreen({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> }) {

    const recipes = mockRecipes;

  return (
 <View style={styles.container}>
        <View style={styles.scrollView}>
          <FlatList
            data={recipes}
            renderItem={({ item }) => {
              return(
                <RecipeCard key={item.id} {...item} />
              );
            }}
            ListHeaderComponent={
                <Text style={styles.headerText}>
                  Alla recept
                </Text>
          }
            />
      </View>
    </View>
  );
}

    const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});