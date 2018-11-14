import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import {
  Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Row, Col
} from 'native-base';

import ContactItem from '../components/ContactItem'
import {Actions} from 'react-native-router-flux';


export default class Home extends React.Component {

  pushAlert() {
    Alert.alert(
      'Success!',
      'Push Notification was sent successfully.',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  getPersons() {
    Actions.push('contactlist');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentView} >
          <Text>
            Web Content from Backend Server
          </Text>
        </View>

        <View style={styles.contactView}>
          <Container>
            <Content>
              <List>
                <ContactItem
                  title="Paul Lelsjkd"
                  note="7894564321"
                  thumbnail=""
                />
                <ContactItem
                  title="Happy Happy"
                  note="123456489"
                />
                <ContactItem
                  title="John Doe"
                  note="5643786453"
                />
              </List>
            </Content>
          </Container>

          <View>
            <Button title="Add Contact" onPress={this.getPersons} />
          </View>
        </View>

        <View style={styles.pushView}>
          <TextInput style={{ fontSize: 20 }}>pushView</TextInput>
          <Button style={{ position: 'absolute', left: 0 }} title="PUSH" onPress={this.pushAlert} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentView: {
    flex: 1,
    width: '100%',

    backgroundColor: '#005500',
  },
  contactView: {
    flex: 6,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'grey',
  },
  addContactBtn: {
    position: 'absolute',
    padding: '10',
  },
  pushView: {
    flex: 1,
    width: '100%',

    backgroundColor: '#055a64',
  }
});