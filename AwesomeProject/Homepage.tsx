import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'



const image = require('./images.png')

const Homepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.homepage}>Homepage</Text>
      <Image source={image} style={styles.image}/>
      <Button title='Go to detail' onPress={() => {navigation.navigate("Detail")}}/>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 26,
    },
    image: {
        height: 96,
        width: 96,
        mixBlendMode: 'multiply',
    },
    homepage: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})