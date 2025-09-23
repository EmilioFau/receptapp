import { View, Text, Image, ScrollView } from "react-native";
import { Recipe } from "../types/Recipe";
import { styles } from "../styles";

export default function DetailsScreen({ route }: { route: { params: { recipe: Recipe } } }) {
    const { recipe } = route.params;

  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Image
                source={{ uri: recipe.imageUrl }} 
                style={styles.image}
                resizeMode="contain" />
            <View style={styles.recipeDetails}>
                <Text style={styles.name}>{recipe.name}</Text>
                <Text style={styles.description}>{recipe.description}</Text>
                <Text style={styles.time}>{recipe.time}</Text>
                <Text style={styles.ingredients}>{recipe.ingredients.join(", ")}</Text>
            </View>
        </View>
    </ScrollView>   
  );
}