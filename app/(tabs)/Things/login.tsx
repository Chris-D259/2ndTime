import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '@/components/LoginForm'
import SampleModal from '@/components/SampleModal'

const login = () => {
    return (
        <View style={styles.container}>
            <LoginForm />
            <SampleModal />
        </View>
        
      )
    }

    
    

export default login

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'purple',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    });

