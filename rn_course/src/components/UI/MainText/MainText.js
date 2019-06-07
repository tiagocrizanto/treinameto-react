import React from 'react';
import { Text, StyleSheet } from 'react-native';

const maintText = props => (
    <Text style={styles.mainText}>{props.children}</Text>
);

const styles = StyleSheet.create({
    mainText: {
        color: "#bbb",
        backgroundColor: "transparent"
    }
});

export default maintText;
