import React from 'react';
import {Button, View, StyleSheet, Image, Dimensions} from 'react-native';
import p9 from '../../images/그림9.png';
import Tab from '../common/Tab';

var {width} = Dimensions.get('window');

const Guide = ({navigation}) => {
  return (
    <View style={styles.homes}>
      <View style={styles.main}>
        <View style={styles.thumbContainer}>
          <Image source={p9} style={styles.thumbnail} />
        </View>
        <View style={styles.thumbContainer}>
          <Image source={p9} style={styles.thumbnail} />
        </View>
      </View>

      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Tab />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
  thumbContainer: {
    width: '50%',
    // height: '80%',
  },
  thumbnail: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'center',
  },
  homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
  },
});

export default Guide;
