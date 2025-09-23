import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { RootStackParamList } from './navigation/types';
import Constants from 'expo-constants';
import { Text } from 'react-native';
import { styles } from './styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const version =
  Constants.expoConfig?.version ||
  Constants.manifest?.version ||
  'okänd';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ 
          title: 'Recept App',
          headerStyle: { backgroundColor: '#E8DFCA' },
          headerTintColor: '#6D94C5',
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => (<Text style={styles.searchButtonText}>v {version}</Text>)
         }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={{ 
          title: 'Detaljer',
          headerStyle: { backgroundColor: '#E8DFCA' },
          headerTintColor: '#6D94C5',
          headerTitleStyle: { fontWeight: 'bold' },
         }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}