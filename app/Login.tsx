import {Alert, Button, StyleSheet, Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import React from "react";
// @ts-ignore
import R from "res/R";
import crashlytics from '@react-native-firebase/crashlytics';
import AsyncStorage from "@react-native-community/async-storage";

// import {Button, Logo} from 'res/R';


interface LoginProps {
    onConnexion: () => void;
}

export default class Login extends React.Component<LoginProps> {
    Crash = () => {
        Alert.alert("Crash","Button cliqué !!! " )
        console.log("Button cliqué !!! ")
        crashlytics().log("Button cliqué !!! ")
        crashlytics().crash()
    }

    render() {
        return (
            <>
                <View style={styles.view}>
                    <R.component.Logo size={72}/>
                    <Text style={styles.text}>Connecte toi connard !!!</Text>
                    <R.component.Button onButtonClick={this.props.onConnexion} title="Connexion" color={R.colors.green}/>
                    <R.component.Button onButtonClick={this.Crash} title="Test Crash" color={R.colors.red}/>
                    <Text style={styles.text}>Ca marche pas bordel de merde !!!</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: R.colors.white

    },
    view: {
        backgroundColor: R.colors.blue,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
});