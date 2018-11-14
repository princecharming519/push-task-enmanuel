import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import {
    Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text
} from 'native-base';


export default class Contact extends React.Component {

    render() {
        const {title, note} = this.props;
        return (
            <View>

                <ListItem avatar>
                    <Left>
                        <Thumbnail source={require('../images/12.png')} />
                    </Left>
                    <Body>
                        <Text>{title}</Text>
                        <Text note>{note}</Text>
                    </Body>
                    {/* <Right>
                                            <Text note>3:43 pm</Text>
                                        </Right> */}
                </ListItem>

            </View>
        );
    }
}
