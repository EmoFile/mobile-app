import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Colors, Header} from "react-native/Libraries/NewAppScreen";
import React from "react";
// @ts-ignore
import R from 'res/R';
// import {Button} from 'res/R';

// import Button from "./component/Button";

interface LogoutProps {
    onDeconnexion: () => void;

}

export default class Home extends React.Component<LogoutProps> {
    render() {
        return (
            <>
                <View style={styles.view}><Text style={styles.text}>{R.i18n.t('login.welcome')}</Text>
                    <R.component.Button onButtonClick={this.props.onDeconnexion} title="Deconnexion"
                                      color={R.colors.red}/>
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
        width: '100%'
    },
});