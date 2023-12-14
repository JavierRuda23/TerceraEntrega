import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from './Global/colors'
import CardShadow from './Wrappers/CardShadow'


const CategoryItem = ({category}) => {
  return (
    <Pressable onPress={()=>console.log(category)}>
    <CardShadow style={styles.container}>
      <Text style={styles.Text}>{category}</Text>
    </CardShadow>
    </Pressable>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width: "80%",
        marginHorizontal: "10%",
        backgroundColor: colors.red1,
        margin: 10,
        padding: 10,
        width: "80%",
        justifyContent : "center",
        alignItems: "center",


    }
})