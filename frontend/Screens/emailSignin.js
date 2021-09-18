// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { Formik } from 'formik';

import FormInput from '../Components/customInput';

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowDiagonal = Math.sqrt(Math.pow(windowHeight, 2) + Math.pow(windowWidth, 2));

const emailSignin = ({ navigation }) => {
    const authenticateUser = async (values) => {

    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>Log in with email</Text>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                }}
                onSubmit={(values, actions) => {
                    authenticateUser(values);
                    actions.resetForm();
                }}
            >
                {(props) => (
                    <>
                        <FormInput
                            iconType='mail'
                            placeholderText='Email'
                            secure={false}
                            enablePeekOption={false}
                            enableMarginBottom={true}
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            error={props.errors.email}
                            enableError={props.touched.email && props.errors.email} 
                        />
                        <FormInput
                            iconType='lock-closed'
                            placeholderText='Password'
                            secure={true}
                            enablePeekOption={props.values.password !== ''}
                            enableMarginBottom={true}
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            onBlur={props.handleBlur('password')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            error={props.errors.password}
                            enableError={props.touched.password && props.errors.password} 
                        />

                        <Pressable 
                            style={styles.signupButton}
                            onPress={() => {props.handleSubmit}}
                            disabled={!props.isValid}
                        >
                            <Text style={{color: 'white', ...styles.buttonText}}>Log In</Text>
                        </Pressable>
                    </>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
}

// Sign Up Page Style
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6eaf2',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: windowHeight * 0.0524,
        paddingBottom: windowHeight * 0.0505,
        fontStyle: 'italic'
    },

    signupButton: {
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
});

export default emailSignin;