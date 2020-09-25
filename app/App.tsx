/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import Login from './Login';
import Home from './Home';
import AsyncStorage from "@react-native-community/async-storage";
import crashlytics from "@react-native-firebase/crashlytics";

declare const global: { HermesInternal: null | {} };


export default class App extends React.Component {
    state = {
        isConnected: null
    };

    Deconnexion = () => {
        this.setState({isConnected: false});

        try {
            AsyncStorage.setItem('@isConnected', 'false')
        } catch (e) {
            // saving error
        }
    };

    Connexion = () => {
        this.setState({isConnected: true});
        try {
            AsyncStorage.setItem('@isConnected', 'true')
        } catch (e) {
            // saving error
        }
    };

    async componentDidMount() {
        console.log("App ouverte")
        // crashlytics().log("App ouverte")
        // crashlytics().crash()
        // let x = 0
        // while (x)
        //     x = x+1
        //     console.log(x)
        let isConnected = (await AsyncStorage.getItem('@isConnected')) === 'true'
            console.log(isConnected)
        this.setState({isConnected: isConnected})
    }

    render() {
        let View = null;
        if (!this.state.isConnected) {
            View = <Login onConnexion={this.Connexion}/>

        } else {
            View = <Home onDeconnexion={this.Deconnexion}/>

        }
        return (
            View
        )

    }
}


