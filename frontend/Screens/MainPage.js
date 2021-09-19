// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable, ScrollView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Import screens
import LeadershipBoard from '../Screens/LeadershipBoard';

const MainPage = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.resize} source={require('../Images/avatar.png')} />
                    <View style={{flex: 1, flexDirection: 'column', paddingLeft: windowWidth * 0.05}}>
                        <Text style={{color: '#7F7F7F', fontSize: windowWidth * 0.045}}>Hello Linh!</Text>
                        <Text style={{color: 'black', fontSize: windowWidth * 0.04}}>{getCurrentDate()}</Text>
                    </View>
                    <Pressable
                        onPress={() => {navigation.navigate('Friendly Battle')}}
                    >
                        <Image style={styles.resize1} source={require('../Images/blue.png')} />
                    </Pressable>
                </View>
                <View style={styles.calories}>
                    <Text style={{color: 'black', fontSize: windowWidth * 0.115, fontStyle: 'italic'}}>1 883 kcal</Text>
                    <Text style={styles.label}>Total kilocalories</Text>
                </View>
                <View style={styles.statistics}>
                    <View>
                        <Text style={styles.label1}>7580 m</Text>
                        <Text style={{color: '#7F7F7F', ...styles.label1}}>Distance</Text>
                    </View>
                    <View>
                        <Text style={styles.label1}>9832</Text>
                        <Text style={{color: '#7F7F7F', ...styles.label1}}>Steps</Text>
                    </View>
                    <View>
                        <Text style={styles.label1}>1248</Text>
                        <Text style={{color: '#7F7F7F', ...styles.label1}}>Points</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
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

    return day + ', ' + month + " " + date
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flex: 1
    },
    top: {
        marginTop: windowHeight * 0.05,
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: windowWidth * 0.05,
        marginRight: windowWidth * 0.05
    },
    calories: {
        flex: 1,
        marginTop: windowHeight * 0.05,
        alignItems: 'center'
    },
    label: {
        marginTop: windowHeight * 0.015,
        color: '#7F7F7F',
        fontSize: windowWidth * 0.05,
        fontStyle: 'italic'
    },
    label1: {
        marginTop: windowHeight * 0.015,
        marginRight: windowHeight * 0.045,
        marginLeft: windowHeight * 0.045,
        fontSize: windowWidth * 0.045,
        fontStyle: 'italic',
    },
    resize: {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        borderRadius: 100
    },
    resize1: {
        width: windowWidth * 0.16,
        height: windowWidth * 0.16,
        borderRadius: 100
    },
    statistics: {
        flex: 3,
        flexDirection: 'row',
        marginTop: windowHeight * 0.07
    }
});

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Main"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: '#373856' }}
      >
        <Tab.Screen 
            name="Main" 
            component={MainPage} 
            options={{
                tabBarLabel: 'Main',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Leadership Board"
            component={LeadershipBoard}
            options={{
                tabBarLabel: 'Leadership',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
      </Tab.Navigator>
    );
}

export default MyTabs;

/*
From Figma demo phone:
Height: 812
Width: 375
*/