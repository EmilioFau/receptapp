import { View, Text, StyleSheet, Platform, Image, TouchableOpacity} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Recipe } from '../types/Recipe';
import { styles } from '../styles';


type RecipeCardProps = {
    recipe: Recipe
    navigation?: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function RecipeCard({
    recipe,
    navigation,
}: RecipeCardProps) {

    const { id, name, shortDescription, time, ingredients, imageUrl } = recipe;
 {

    const handlePress = () => {
        if (navigation && id) {
            navigation.navigate('Details', { recipe });
        }
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={handlePress}>
                <Image
                    source={{ uri: recipe.imageUrl }}
                    style={{ width: '100%', height: 200, marginBottom: 8 }}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{recipe.name}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <Text style={styles.shortDescription}>{recipe.shortDescription}</Text>
                <Text style={styles.time}>Tid: {recipe.time}</Text>
            </View>

            <View>
                <Text style={styles.ingredients}>Ingredienser: {recipe.ingredients.join(", ")}</Text>
            </View>
        </View>
    );
}
}