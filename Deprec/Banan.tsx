import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const Custom_text = () => {
  return (
    <View style={styles.BG}>
      <Text style={styles.heading1}>Banan</Text>
      <Text style={styles.heading}>High in Potassium!</Text>
      <Image source={{uri:'https://product-images.metro.ca/images/hcd/h4d/8874222256158.jpg'}} style={styles.image1} />
      <Text style={styles.body}>A banan, with its distinctive crescent shape and vibrant yellow peel, is a tropical fruit beloved monke wide for its sweet flavor and creamy texture. Encased within its easily peelable exterior lies a soft, succulent flesh, dotted with tiny seeds, offering a burst of energy and essential nutrients. Whether enjoyed fresh as a convenient snack or incorporated into various culinary delights, the banan's versatility knows no bounds, adding a touch of sunshine to smoothies, desserts, and savory dishes alike. Its wholesome goodness extends beyond its delightful taste, as it boasts a wealth of potassium, vitamin C, and fiber, those who control the Banan control the universe.</Text>

    </View>
  )
}

export default Custom_text

const styles = StyleSheet.create({
  heading:{
    fontSize:10,
    fontWeight:'bold',
    color:'darkgreen',
    fontFamily:'Arial',
    margin:10,
    textAlign:'center'
  },
  heading1:{
    fontSize:25,
    fontWeight:'bold',
    color:'darkgreen',
    fontFamily:'Arial',
    marginTop:50,
    textAlign:'center'
  },
  image1:{
    width:400,
    height:400,
    borderRadius:200,
    overflow:'hidden',
    alignSelf:'center'
  },
  body:{
    fontSize:12,
    fontWeight:'bold',
    color:'darkgreen',
    fontFamily:'Arial',
    marginTop:50,
    textAlign:'center'
  },
  BG:{
    backgroundColor:'lightyellow',
    flex:1,
  },

});