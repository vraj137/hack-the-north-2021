// Import Modules
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TextInput, StyleSheet, Text, Dimensions } from 'react-native';

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowDiagonal = Math.sqrt(Math.pow(windowHeight, 2) + Math.pow(windowWidth, 2));

// formInput({iconType, placeholderText, placeholderColor, secure, enablePeekingOption, ...rest})
//   creates a Text Input with an icon, "iconType"; some placeholder text, "placeholderText";
//   placeholder text color, "placeholderColor"; a security state, "secure"; an optional
//   show/hide button based on "enablePeekOption"; and additional properities "...rest"
export default function FormInput({
    iconType,
    placeholderText,
    placeholderColor,
    secure,
    enablePeekOption,
    enableMarginBottom,
    error,
    enableError,
    ...rest }) {

    // Show/Hide Button Constants
    const turnPeekOn = 'eye-outline';
    const turnPeekOff = 'eye-off-outline';

    // State Variables
    const [peekingIcon, setPeekingIcon] = useState(turnPeekOn);

    // Reset Show/Hide Button to Default when Show/Hide Button is Disabled
    if (enablePeekOption === false && peekingIcon === turnPeekOff) {
        setPeekingIcon(turnPeekOn);
    }

    // peekingIconHandler() toggles peekingIcon between "turnPeekOn" and "turnPeekOff"
    const peekingIconHandler = () => {
        if (peekingIcon === turnPeekOn) {
            setPeekingIcon(turnPeekOff);
        } else {
            setPeekingIcon(turnPeekOn);
        }
    };

    return (
        <View style={[styles.outerContainer, { marginBottom: (windowHeight * 0.008417) * enableMarginBottom }]}>
            <View style={styles.innerContainer}>
                <View style={styles.leftIcon}>
                    <Icon
                        name={iconType}
                        size={windowDiagonal * 0.02371}
                    />
                </View>
                <TextInput
                    style={styles.text}
                    numberOfLines={1}
                    placeholder={placeholderText}
                    secureTextEntry={secure && peekingIcon === turnPeekOn}
                    {...rest}
                />
                {enablePeekOption &&
                    <View style={styles.rightIconContainer}>
                        <View style={styles.rightIcon}>
                            <Icon
                                name={peekingIcon}
                                size={windowDiagonal * 0.02371}
                                onPress={peekingIconHandler}
                            />
                        </View>
                    </View>
                }
            </View>
            {enableError ?
                <Text style={styles.inputWarning}>{error}</Text> :
                <Text style={styles.inputWarning}></Text>}
        </View>
    );
};

// Form Input Style
const styles = StyleSheet.create({
    outerContainer: {
        width: '90%',
        flexDirection: 'column',
    },
    innerContainer: {
        backgroundColor: 'white',
        paddingVertical: windowHeight * 0.015,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: windowDiagonal * 0.0016
    },
    leftIcon: {
        paddingLeft: windowWidth * 0.05,
        paddingRight: windowWidth * 0.04
    },
    rightIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rightIcon: {
        paddingHorizontal: windowWidth * 0.03038,
    },
    text: {
        flex: 1,
        fontSize: windowDiagonal * 0.02
    },
    inputWarning: {
        paddingLeft: windowWidth * 0.035,
        fontSize: windowDiagonal * 0.015,
        color: 'red'
    }
});