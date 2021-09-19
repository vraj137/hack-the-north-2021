// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable, ScrollView } from 'react-native';

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LeaderBoard = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Leaderboard</Text>
            <View style={styles.rankingContainer}>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>1st</Text>
                    <Text>               Linh Robertson</Text>
                    <Text>               1248</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>2nd</Text>
                    <Text>               Arlene Webb</Text>
                    <Text>                  1231</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>3rd</Text>
                    <Text>               Jerome Warren</Text>
                    <Text>              1194</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>4th</Text>
                    <Text>               Greg McKinney</Text>
                    <Text>              1163</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>5th</Text>
                    <Text>               Victoria Bell</Text>
                    <Text>                    1101</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>6th</Text>
                    <Text>               Leslie Howard</Text>
                    <Text>                986</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>7th</Text>
                    <Text>               Francisco Flores</Text>
                    <Text>            976</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>8th</Text>
                    <Text>               Aubrey Alexander</Text>
                    <Text>          950</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>9th</Text>
                    <Text>               Guy Watson</Text>
                    <Text>                   942</Text>
                </View>
                <View style={styles.ranking}>
                    <Text style={{marginLeft: windowWidth * 0.07}}>10th</Text>
                    <Text>               Tanya Mccoy</Text>
                    <Text>                941</Text>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        marginTop: windowHeight * 0.1,
        fontSize: 25,
    },
    rankingContainer: {

    },
    ranking: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f0faf5',
        marginTop: windowHeight * 0.02,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: windowHeight * 0.07,
        width: windowWidth * 0.85,
        borderRadius: 50,
    }
});

export default LeaderBoard;

/*
From Figma demo phone:
Height: 812
Width: 375
*/