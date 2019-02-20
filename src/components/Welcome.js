import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
  },
});

const Todo = ({ title }) => (
  <View>
    <Text style={styles.message}>{title}</Text>
  </View>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Todo;
