// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Import screens
import LoginScreen from '../Screens/LoginScreen';
import MainPage from '../Screens/MainPage';

const LaunchScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Pratice whenever you want.</Text>
            <Image style={styles.resize} source={require('../Images/launch.png')} />
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    headerText: {
        width: '80%',
        color: '#090A0A',
        fontSize: windowWidth * 0.085,
        fontWeight: 'bold',
        textAlign: "center",
        paddingBottom: windowHeight * 0.1268,
        // paddingTop: windowHeight * 0.1429,
    },
    resize: {
        width: windowWidth * 0.9227,
        height: windowHeight * 0.2845,
        borderRadius: 50
    },
    button: {
        marginTop: windowHeight * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: windowHeight * 0.026,
        paddingHorizontal: windowWidth * 0.3,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 50
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
});

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Launch" component={LaunchScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Main Page" component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;

/*
From Figma demo phone:
Height: 812
Width: 375
*/