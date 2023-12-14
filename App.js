import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Screens/Home';
import ItemListCategories from './src/components/Screens/ItemListCategories';
import ItemDetail from './src/components/Screens/ItemDetail';


export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
