import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    };

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Log In</HeadingText>
                    </MainText>
                    <ButtonWithBackground color="#29eef4" onPress={() => alert("ok")}>
                            Switch to log in
                    </ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your email address" />
                        <DefaultInput placeholder="Password" />
                        <DefaultInput placeholder="Confirm Password" />
                    </View>
                    <ButtonWithBackground color="#29eef4" onPress={this.loginHandler}>
                        Submit
                    </ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    }
});

export default AuthScreen;