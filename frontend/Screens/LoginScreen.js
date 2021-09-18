// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowDiagonal = Math.sqrt(Math.pow(windowHeight, 2) + Math.pow(windowWidth, 2));

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Pressable 
                style={styles.button}
            >
                <Icon
                    name='logo-apple'
                    size={windowDiagonal * 0.03233}
                />
                <Text style={{color: 'black', ...styles.buttonText}}>    Sign in with Apple</Text>
            </Pressable>
            <Pressable 
                style={styles.button}
            >
                <Icon
                    name='logo-google'
                    size={windowDiagonal * 0.03233}
                />
                <Text style={{color: 'blue', ...styles.buttonText}}>  Sign in with Google</Text>
            </Pressable>
            <Pressable 
                style={styles.button}
                onPress={() => {navigation.navigate('Email Signin')}}
            >
                <Icon
                    name='mail-sharp'
                    size={windowDiagonal * 0.03233}
                />
                <Text style={{color: 'red', ...styles.buttonText}}>     Sign in with Email</Text>
            </Pressable>
            <View style={styles.signup}>
                <Text style={styles.message}>Don't have an account?</Text>
                <Pressable 
                    style={styles.signupButton}
                    onPress={() => {navigation.navigate('Email Signup')}}
                >
                    <Text style={{color: 'white', ...styles.buttonText}}>Sign up</Text>
                </Pressable>
            </View>
            <View style={styles.privacyMessage}>
                <Text style={{color: 'black'}}>You're completely safe</Text>
                <Text style={{color: '#7041EE', fontStyle: 'italic'}}>Read our terms and conditions</Text>
                <Button title="Access to main page" onPress={() => {navigation.navigate('Main Page')}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6eaf2',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: windowHeight * 0.0524,
        paddingTop: windowHeight * 0.115,
        paddingBottom: windowHeight * 0.0505,
        fontStyle: 'italic'
    },
    button: {
        marginTop: windowHeight * 0.0197,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: windowHeight * 0.026,
        paddingHorizontal: windowWidth * 0.20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    signupButton: {
        marginTop: windowHeight * 0.0197,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: windowHeight * 0.026,
        paddingHorizontal: windowWidth * 0.36,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#7041EE',
        borderRadius: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.25,
        fontStyle: 'italic'
    },
    message: {
        color: '#9ca7b5',
        fontSize: 16,
        paddingTop: windowHeight * 0.08,
        alignItems: 'center'
    },
    signup: {
        alignItems: 'center'
    },
    privacyMessage: {
        alignItems: 'center',
        marginTop: windowHeight * 0.08,
    }
});

export default LoginScreen;

/*
From Figma demo phone:
Height: 812
Width: 375
*/