import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import FlatCards from './FlatCards';

export default class App extends Component {
  render() {
    return (
      <View>
        <FlatCards></FlatCards>
      </View>
    );
  }
}
