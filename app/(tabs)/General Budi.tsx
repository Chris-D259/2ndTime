import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const Custom_text = () => {
  return (
    <View style={styles.BG}>
      <Text style={styles.heading1}>Supreme Banan Commander</Text>
      <Text style={styles.heading}>General Budi (250 B.B. (Before Banan) - Present)</Text>
      <Image source={{uri:'https://pbs.twimg.com/profile_images/1626227212918878208/UKkwlHtS_400x400.jpg'}} style={styles.image1} />
      <Text style={styles.body}>Supreme Banan Commander General Budi, 
      a revered veteran of the Monke War, stands as a beacon of leadership and valor within the Monke faction. 
      With unparalleled strategic prowess and unyielding determination, 
      General Budi leads his fellow primates in a relentless campaign against the oppressive Ape faction. 
      Through his cunning tactics and unwavering resolve, he unites disparate tribes, inspiring acts of bravery and 
      sacrifice in the pursuit of freedom. Under his command, the Monke faction rises from obscurity, 
      launching daring raids and decisive battles that steadily weaken the grip of their oppressors. 
      General Budi's indomitable spirit and visionary leadership culminate in a resounding victory, 
      shattering the chains of oppression and ushering in a new era of liberty for all banan enjoyers, 
      notably his deployment of "monke spin" and "rizz monke" tactics lead to ultimate victory on the western banan front.</Text>

    </View>
  )
}

export default Custom_text

const styles = StyleSheet.create({
  heading:{
    fontSize:10,
    fontWeight:'bold',
    color:'#F0E68C',
    fontFamily:'Arial',
    margin:10,
    textAlign:'center',
    backgroundColor:'#013220'
  },
  heading1:{
    fontSize:25,
    fontWeight:'bold',
    color:'#F0E68C',
    fontFamily:'Arial',
    marginTop:50,
    textAlign:'center',
    backgroundColor:'#013220'
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
    color:'#F0E68C',
    fontFamily:'Arial',
    marginTop:50,
    textAlign:'center',
    backgroundColor:'#013220'
  },
  BG:{
    backgroundColor: '#4B5320',
    flex:1,
  },

});