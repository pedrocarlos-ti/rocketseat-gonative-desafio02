import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import Header from '~/components/Header';

import styles from './styles';

export default class Repositories extends Component {
  state = {
    inputValue: '',
  };

  addRepository = () => {};

  renderItems = () => {};

  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.group}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar novo repositório"
            value={inputValue}
            onChangeText={({ text }) => this.setState({ inputValue: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
