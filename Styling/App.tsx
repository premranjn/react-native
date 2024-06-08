import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import FlatCards from './FlatCards';
import ElevatedCards from './ElevatedCards';
import FancyCard from './FancyCards';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards></FlatCards>
          <ElevatedCards></ElevatedCards>
          <ScrollView>
            <FancyCard/>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
