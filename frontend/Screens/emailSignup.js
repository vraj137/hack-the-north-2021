// Import Modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import FormInput from '../Components/customInput';

// Get window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowDiagonal = Math.sqrt(Math.pow(windowHeight, 2) + Math.pow(windowWidth, 2));

const emailSignup = ({ navigation }) => {
    const createUser = async (values) => {

    }

    // Regex constants
    const usernameRegex = /^[\w]+( +[\w]+)*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;

    const loginValidationSchema = yup.object().shape({
        // Validity of username
        username: yup
            .string()
            .min(2, "Must be at least 2 characters")
            .max(32, "Exceeds maximum of 32 characters")
            .matches(usernameRegex, "No special character, with no space at the beginning or end.")
            .required('Username is Required'),

        // Validity of email
        email: yup
            .string()
            .email("Please enter a valid email")
            .required('Email is Required'),

        // Validity of password
        password: yup
            .string()
            .min(8, "Must be at least 8 characters")
            .matches(passwordRegex, "At least one upper case letter, one lower case letter, and one number.")
            .required('Password is Required'),

        // Password confirmation
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Password confirmation is Required'),
    });

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>Sign up with email</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                }}
                onSubmit={(values, actions) => {
                    createUser(values);
                    actions.resetForm();
                }}
            >
                {(props) => (
                    <>
                        <FormInput
                            iconType='person'
                            placeholderText='Username'
                            secure={false}
                            enablePeekOption={false}
                            enableMarginBottom={true}
                            onChangeText={props.handleChange('username')}
                            value={props.values.username}
                            onBlur={props.handleBlur('username')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            error={props.errors.username}
                            enableError={props.touched.username && props.errors.username} 
                        />
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
                        <FormInput
                            iconType='lock-closed'
                            placeholderText='Confirm Password'
                            secure={true}
                            enablePeekOption={props.values.passwordConfirm !== ''}
                            enableMarginBottom={true}
                            onChangeText={props.handleChange('passwordConfirm')}
                            value={props.values.passwordConfirm}
                            onBlur={props.handleBlur('passwordConfirm')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            error={props.errors.passwordConfirm}
                            enableError={props.touched.passwordConfirm && props.errors.passwordConfirm}
                        />

                        <Pressable 
                            style={styles.signupButton}
                            onPress={() => {props.handleSubmit}}
                            disabled={!props.isValid}
                        >
                            <Text style={{color: 'white', ...styles.buttonText}}>Continue</Text>
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

export default emailSignup;