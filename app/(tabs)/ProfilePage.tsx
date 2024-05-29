import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const ProfilePage = () => {
return (
    <View style={styles.container}>
        <View style={styles.container2}>
            <Image
                source={{
                    uri:
                        'https://pbs.twimg.com/profile_images/1626227212918878208/UKkwlHtS_400x400.jpg',
                }}
                style={styles.image1}
            />
            <Text style={styles.heading1}>General Budi</Text>
            <Text style={styles.heading2}>Calgary, Alberta</Text>
            <Text style={styles.bodyText}>
                Hello, I am General Budi, a seasoned veteran and commander.
            </Text>
        </View>
        <View style={styles.container3}>
            <View style={styles.body1}>
                <Text style={styles.bodyText}>Contributions</Text>
                <Text style={styles.bodyText}>7,951,000,000{"\n"}Followers</Text>
                <Text style={styles.bodyText}>About</Text>
            </View>
            <View style={styles.body2}>
                <Text style={styles.HeaderText}>About Me:</Text>
                <Text>
                    {"\n"}I am a seasoned veteran and commander with a wealth of experience
                    in the Monke Wars.
                </Text>
            </View>
        </View>
    </View>
);
}

export default ProfilePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightyellow',
    },
    container2: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'blue'
    },
    container3: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    heading1: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'darkgreen',
        fontFamily: 'Arial',
        marginTop: 10,
        textAlign: 'center'
    },
    image1: {
        width: 100,
        height: 100,
        borderRadius: 200,
        overflow: 'hidden',
        alignSelf: 'center'
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
        fontFamily: 'Arial',
        marginTop: 10,
        textAlign: 'center'
    },
    body1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'red',
        margin: 10,
    },
    body2: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        backgroundColor:'yellow',
    },
    bodyText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Arial',
        margin: 10,
        textAlign: 'center'
    },
    HeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Arial',
        margin: 10,
        textAlign: 'center'
    },

});