// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable } from 'react-native';

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FriendlyBattle = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.top}>Friendly Battle</Text>
            <Image style={styles.resize} source={require('../Images/videoGame.png')} />
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate('')}>
                <Text style={styles.buttonText}>Push-Up Challenge</Text>
                <Text style={styles.description}>See who can do more push-ups in 1 minute</Text>
            </Pressable>
            <Image style={styles.pushup} source={require('../Images/pushup.png')} />

            <Pressable 
                style={styles.button1}
                onPress={() => navigation.navigate('')}>
                <Text style={styles.buttonText1}>Sit-Up Challenge</Text>
                <Text style={styles.description1}>See who can do more push-ups in 1 minute</Text>
            </Pressable>
            <Image style={styles.situp} source={require('../Images/situp.png')} />

            <Pressable 
                style={styles.button2}
                onPress={() => navigation.navigate('')}>
                <Text style={styles.buttonText2}>Plank Challenge</Text>
                <Text style={styles.description2}>See who can do more push-ups in 1 minute</Text>
            </Pressable>
            <Image style={styles.plank} source={require('../Images/plank.png')} />

            <Pressable 
                style={styles.button3}
                onPress={() => navigation.navigate('')}>
                <Text style={styles.buttonText3}>Bicycle Kicks</Text>
                <Text style={styles.description3}>See who can do more push-ups in 1 minute</Text>
            </Pressable>
            <Image style={styles.bicycle} source={require('../Images/bicycle.png')} />

            <Pressable 
                style={styles.play}
                onPress={() => navigation.navigate('')}>
                <Text style={styles.text}>Play</Text>
            </Pressable>
            <Pressable 
                style={styles.play1}
                onPress={() => navigation.navigate('')}>
                <Text style={styles.tt}>Play</Text>
            </Pressable>
            <Pressable 
                style={styles.play2}
                onPress={() => navigation.navigate('')}>
                <Text style={styles.ty}>Play</Text>
            </Pressable>
            <Pressable 
                style={styles.play3}
                onPress={() => navigation.navigate('')}>
                <Text style={styles.lay}>Play</Text>
            </Pressable>
            
            
        </View>
      
    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    play: {
        bottom: 395,
        left: 130,
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.03,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#E4057E',
        borderRadius: 50,

    },
    play1: {
        bottom: 340,
        left: 130,
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.03,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#E4057E',
        borderRadius: 50,

    },
    play2: {
        bottom: 280,
        left: 130,
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.03,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#E4057E',
        borderRadius: 50,

    },
    play3: {
        bottom: 225,
        left: 130,
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.03,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#E4057E',
        borderRadius: 50,

    },
    resize: {
        width: 90,
        right: 100,
        height: 71,
        bottom: -60
    },
    top: {
        fontSize: 25,
        left: 50,
        top: 120  
    },
    button: {
        bottom: -80,
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.025,
        paddingHorizontal: windowWidth * 0.275,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F5F5F5',
        borderRadius: 50
    },
    buttonText: {
        fontSize: 16,
        bottom: 10,
        right: 15,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.25,
        color: 'black',
    },
    description: {
        fontSize: 10,
        color: "purple",
        right: 14,
        
    },
    pushup: {
        width: 70,
        height: 50,
        bottom: -10,
        right: 145,
        alignItems: "center"
        
    },
    situp: {
        width: 70,
        height: 40,
        bottom: 15,
        right: 145,
        alignItems: "center"
        
    },
    plank: {
        width: 80,
        height: 20,
        bottom: 22,
        right: 145,
        alignItems: "center"
        
    },
    bicycle: {
        width: 70,
        height: 50,
        bottom: 40,
        right: 140,
        alignItems: "center"
        
    },
    button1: {
        bottom: -50,
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.025,
        paddingHorizontal: windowWidth * 0.275,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F5F5F5',
        borderRadius: 50
    },
    buttonText1: {
        fontSize: 16,
        bottom: 10,
        right: 15,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.25,
        color: 'black',
    },
    description1: {
        fontSize: 10,
        color: "purple",
        right: 17,
        
    },
    button2: {
        bottom: -30,
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.025,
        paddingHorizontal: windowWidth * 0.275,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F5F5F5',
        borderRadius: 50
    },
    buttonText2: {
        fontSize: 16,
        bottom: 10,
        right: 15,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.25,
        color: 'black',
    },
    description2: {
        fontSize: 10,
        color: "purple",
        right: 15,
        
    },
    button3: {
        bottom: -30,
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.025,
        paddingHorizontal: windowWidth * 0.275,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F5F5F5',
        borderRadius: 50
    },
    buttonText3: {
        fontSize: 16,
        bottom: 10,
        right: 15,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.25,
        color: 'black',
    },
    description3: {
        fontSize: 10,
        color: "purple",
        right: 17,
        
    },


});

export default FriendlyBattle;

/*
From Figma demo phone:
Height: 812
Width: 375
*/