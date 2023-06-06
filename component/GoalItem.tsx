import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
const img = require('./../assets/chev.png');

const GoalItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View>
          <Text style={styles.label1}>{item.goal}</Text>
          <Text style={styles.label2}>{item.amount}</Text>
        </View>
        <View style={styles.rightItem}>
          <Text style={styles.txt}>Finish Goal</Text>
        </View>
      </View>
      <View style={styles.verticleLine} />
      <Image source={img} style={styles.img} />
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 6,
    alignItems: 'center',
    paddingLeft: 10,
    marginVertical: 5,
  },
  verticleLine: {
    width: 1,
    backgroundColor: '#909090',
  },
  leftSide: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightItem: {
    backgroundColor: '#00e68a',
    paddingHorizontal: 2,
    borderRadius: 4,
    alignSelf: 'center',
  },
  img: {
    width: 24,
    height: 24,
    tintColor: 'black',
    marginHorizontal: 5,
  },
  label1: {
    color: 'black',
    fontWeight: '600',
    marginVertical: 3,
  },
  label2: {
    color: 'gray',
    marginVertical: 2,
  },
  txt: {
    color: 'white',
  },
});
