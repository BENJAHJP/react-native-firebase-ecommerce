import React, { View, Text } from 'react';
import { StyleSheet } from 'react-native';

export default function SuggestionScreen(){
    return(
        <View styles={styles.text}>
            <Text>
                suggestionscreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1
    }
})