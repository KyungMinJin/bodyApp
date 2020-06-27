import React from 'react';
import {Button, View, StyleSheet, Image} from 'react-native';
import p1 from '../../images/그림1.png';

const Percept = ({navigation}) => {
  return (
    <View style={styles.homes}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  homes: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Percept;
