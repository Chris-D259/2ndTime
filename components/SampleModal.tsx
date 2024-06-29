import { Button, StyleSheet, Text, View,Modal, TextInput } from 'react-native'
import React, { useState } from 'react'


const SampleModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    const searchBar = () => {

    }
    };
  return (
    <View style={styles.container}>
      <Button title="Register a New Account" onPress={toggleModal} />
      <View style={styles.container}>
        <Modal visible={modalVisible} animationType='fade' >
            <View style={styles.modalContent}>           
            <Text style={styles.modalText}>Sign In</Text>
            <TextInput placeholder="Username" style={styles.textInputColor}/>
            <TextInput placeholder="First Name" style={styles.textInputColor}/>
            <TextInput placeholder="Last Name" style={styles.textInputColor}/>
            <TextInput placeholder="Phone Number" style={styles.textInputColor}/>
            <TextInput placeholder="Address" style={styles.textInputColor}/>
            <TextInput placeholder="Email" style={styles.textInputColor}/>
            <TextInput placeholder="Confirm Email" style={styles.textInputColor}/>
            <TextInput placeholder="Password" style={styles.textInputColor} secureTextEntry/>
            <TextInput placeholder="Confirm Password" style={styles.textInputColor} secureTextEntry/>
            <View style={styles.button}>
            <Button title="Sign Up" onPress={toggleModal}  />
            </View>
            <View style={styles.button}>
            <Button title="Go Back" onPress={toggleModal}/> 
            </View>
            </View>
        </Modal>
      </View>
</View>
  )
}

export default SampleModal

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'purple',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    modalContent: {
        backgroundColor: 'purple',
        padding: 22,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'black',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
      },
      button: {
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 4,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
     },
     textInputColor: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        width: 200,
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1,
     },

})