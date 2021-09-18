// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable } from 'react-native';

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{getCurrentDate()}</Text>
            <Text style={styles.top}>Hello Linh!</Text>

            <Text></Text>
        </View>
    );
}

const getCurrentDate=()=>{
    var now = new Date()
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year =now.getFullYear();

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var day = days[ now.getDay() ];
    var month = months[ now.getMonth() ];

    return day + ', ' + month + " " + date + ", " + year
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    top: {
        paddingTop: windowHeight * 0.03,
        bottom: 290,
    }
});



export default MainPage;

/*
From Figma demo phone:
Height: 812
Width: 375
*/