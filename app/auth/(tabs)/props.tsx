// pass data props to the tabs

//create component named wallahi
import { View, Text, Button, Modal,Image } from 'react-native'
import React from 'react'

const props = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const eventhandler1 = () => {
        setModalVisible(true);
    }
    const rizz= "Wallahi Im Finished";
    let a=10;
  return (
    <View>
      <Text style={{fontSize:40}}>{rizz}</Text>
      <Children rizz={rizz}/>
        <Children2 onPress={eventhandler1}/>
        <Modal animationType='slide'transparent={true} visible={modalVisible} onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://qph.cf2.quoracdn.net/main-qimg-afef71370d28d3b966ad766ff8e5407d' }}
            style={{ width: 200, height: 200 }}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const Children = (x:any) => {
  return (
    <View>
      <Text>Throughout Heaven alone I Alone am the Honored One {x.rizz}</Text>
    </View>
  );
};

const Children2 = (x:any) => {
  return (
    <View>
      <Button title="ばかみたい" onPress={x.onPress}/>
    </View>
  );
}

export default props