import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index'; //action creator
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import imagePlaceholder from '../../assets/img-001.png';

class SharePlaceScreen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
            this.props.navigator.toggleDrawer({
                side: "left"
            });
        }
    };

    //a propriedade placeName vem do PlaceInput.js que emite através do onPlaceAdded(this.state.placeName)
    placeAddedHandler = placeName => {
        //onAddPlace - está no mapDispatchToProps
        this.props.onAddPlace(placeName);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a place with us!</HeadingText>
                    </MainText>

                    <View style={styles.placeholder}>
                        <Image source={imagePlaceholder} style={styles.previewImage} />
                    </View>

                    <View style={styles.button}>
                        <Button title="Pic image"></Button>
                    </View>

                    <View style={styles.placeholder}>
                        <Text>Map</Text>
                    </View>

                    <View style={styles.button}>
                        <Button title="Locate me"></Button>
                    </View>

                    <DefaultInput placeholder="Place Name" />

                    <View style={styles.button}>
                        <Button title="Share the place!"></Button>
                    </View>
                    {/* onPlaceAdded é um propriedade de dentro do placeInput this.props.onPlaceAdded */}
                    {/* <PlaceInput onPlaceAdded={this.placeAddedHandler} /> */}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);