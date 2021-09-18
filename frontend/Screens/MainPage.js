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
            <Text>Main Page (To be implemented)</Text>
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
});

export default MainPage;

/*
From Figma demo phone:
Height: 812
Width: 375
*/