import {StyleSheet, Text} from 'react-native';
import React from 'react';

const AppHero = () => {
  return (
    <>
      <Text style={styles.header}>Afternoon JO</Text>
      <Text style={styles.text}>Here is the latest</Text>
      <Text style={[styles.header, {color: '#00e68a'}]}>KES 42, 000</Text>
      <Text style={styles.text}>Total funds</Text>
    </>
  );
};

export default AppHero;

const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  text: {
    color: 'white',
  },
});
