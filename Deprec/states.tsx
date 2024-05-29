import { Button, Text, View } from 'react-native'
import React, { useState } from 'react'

const states= () =>{
const[count, setCount] = useState(0);
    return (
      <View>
        <Text>states</Text>
        <Button title="Click me" onPress={() => setCount(count + 1)} />
        <Text>{count}</Text>
        <Button title="Click me" onPress={() => setCount(count - 1)} />
      </View>
    );
  };


export default states