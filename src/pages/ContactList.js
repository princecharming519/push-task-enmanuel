import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import Contacts from 'react-native-contacts';


import Logo from '../components/Logo';
import Form from '../components/Form';

import { Actions } from 'react-native-router-flux';



export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_list: []
    }
  }
  componentDidMount() {
    Contacts.getAll((err, contacts) => {
      try {
        this.setState({
          contact_list: contacts
        })
      } catch (error) {
        console.log(error);
      }
    })
  }

  selectedItem(){
    // Actions.pop();
    console.log('Item seleted');
  }

  renderRow = ({ item }) => {
    console.log('item==>', item)
    return (
      <TouchableOpacity onPress={this.selectedItem}>
        <ListItem
          roundAvatar
          title={item.familyName + " " + item.givenName}
          subtitle={item.phoneNumbers[0].number}
          avatar={{ uri: item.thumbnailPath }}
        />
      </TouchableOpacity>

    )
  }

  render() {
    console.log('ernderdata-===>', (this.state.contact_list.length));
    return (
      <List>
        <FlatList
          data={this.state.contact_list}
          renderItem={this.renderRow}
          keyExtractor={item => item.recordID}
        />
      </List>
    )
  }
}

