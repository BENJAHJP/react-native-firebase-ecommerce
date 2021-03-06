/*
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

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
*/

import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;