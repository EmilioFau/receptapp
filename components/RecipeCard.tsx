import { View, Text, StyleSheet, Platform, Image, TouchableOpacity} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';


export default function RecipeCard({
    id = 0,
    name = "Default Recipe Title", 
    imageUrl = "https://via.placeholder.com/150", 
    description = "Default Recipe Description",
    time = "30 minutes", 
    ingredients = ["Ingredient 1", "Ingredient 2"],

 }) {


    return (
        <View style={styles.card}>
            <Image
                source={{ uri: imageUrl }} 
                style={ styles.image} 
            />
            <View style={styles.nameContainer}>
                <TouchableOpacity onPress={() => alert(`You pressed on ${name}`)}>
                <Text style={styles.name}>{name}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.time}>Tid: {time}</Text>
            </View>

            <View>
                <Text style={styles.ingredients}>Ingredienser: {ingredients.join(", ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowColor: '#333',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 12,
        resizeMode: 'contain',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },  
    infoContainer: {
        marginVertical: 8,
    },
    description: {
        fontSize: 16,
    },
    time: {
        fontSize: 14,
    },
    ingredients: {
        fontSize: 14,
    },
});