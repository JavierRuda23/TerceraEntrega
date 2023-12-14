import { FlatList, StyleSheet, Text, View } from 'react-native'
import categorias from "./Data/categorias.json"
import CategoryItem from "./CategoryItem"


const Categories = () => {
  return (
    <FlatList 
      style={styles.container}
      data={categorias}
      keyExtractor={item => item}
      renderItem={({item}) => <CategoryItem category={item}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    width: "100%",
  
  }
})