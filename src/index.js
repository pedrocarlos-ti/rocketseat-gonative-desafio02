import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import './config/ReactotronConfig';

import Welcome from '~/components/Welcome';

const bgColor = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
  },
});

export default class App extends Component {
  state = {
    message: 'Welcome to React Native!',
  };

  render() {
    const { message } = this.state;

    return (
      <View style={styles.container}>
        <Welcome title={message} />
      </View>
    );
  }
}
