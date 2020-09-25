import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

interface ButtonProps {
    color: string
    title: string
    onButtonClick: () => void
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        const {title, color, onButtonClick} = this.props
        return (
            <TouchableOpacity onPress={onButtonClick} style={{...styles.button, backgroundColor: color}}>
                <Text style={styles.textButton}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        height: 52,
        width: 252,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textButton: {
        color: '#ffffff',
        flex: 1,
        fontSize: 18,
        textAlignVertical: 'center'
    }
});
