// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable } from 'react-native';

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LeadershipBoard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>leadership board page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

export default LeadershipBoard;

/*
From Figma demo phone:
Height: 812
Width: 375
*/