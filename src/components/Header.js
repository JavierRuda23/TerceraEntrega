import { StyleSheet, Text, View } from 'react-native'
import {colors} from "./Global/colors"
import React from 'react'

const Header = ({title = "pokemon"}) => {
  return (
    <View style= {styles.container}>
      <Text style= {styles.Text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.grey1,
        width : "100%",
        height : 80,
        justifyContent: "center",
        alignItems: "center"

    }
})
