import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FCF8E8',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#76549A',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: '#76549A',
    borderWidth: 2,
    borderRadius: 5,
  },
});
