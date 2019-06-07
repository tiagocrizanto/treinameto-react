import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput 
        underlineColorAndroid="transparent"
        {...props} 
        style={[styles.input, props.style ]} //array de styles para permitir o override do style do componente
        //A ordem é importante porque se os styles.input vier na posição 1 vai sobrescrever o style de props.style
    />
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8
    }
});

export default defaultInput;