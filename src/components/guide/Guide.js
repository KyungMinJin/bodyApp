import React from 'react';
import {Button, View, StyleSheet, Image, Dimensions} from 'react-native';
import p9 from '../../images/그림9.png';
import p50 from '../../images/그림50.png';
import p51 from '../../images/그림51.png';
import p52 from '../../images/그림52.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p13 from '../../images/그림13.png';
import p39 from '../../images/그림39.png';
import p111 from '../../images/그림111.png';
import Tab from '../common/Tab';

var {width} = Dimensions.get('window');

const Guide = ({navigation}) => {
  return (
    <View style={styles.homes}>
      <View style={styles.main}>
        <View style={styles.thumbContainer}>
          <Image source={p9} style={styles.thumbnail} />
          <Image source={p50} style={styles.ui} />
          <Image source={p11} style={styles.video} />
          <Image source={p12} style={styles.vr} />
          <Image source={p13} style={styles.balloon} />
        </View>
        <View style={styles.thumbContainer}>
          <Image source={p111} style={styles.thumbnail} />
          <Image source={p39} style={styles.balloon3} />
          <Image source={p50} style={styles.ui2} />
          <Image source={p51} style={styles.balloon2} />
          <Image source={p52} style={styles.balloon2} />
        </View>
      </View>

      <Tab navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  balloon: {
    width: 350,
    resizeMode: 'contain',
    left: 340,
    bottom: 450,
  },
  balloon2: {
    width: 550,
    resizeMode: 'contain',
    left: 160,
    bottom: 800,
  },
  balloon3: {
    width: 650,
    resizeMode: 'contain',
    left: 130,
    bottom: 800,
  },
  video: {
    position: 'absolute',
    left: 650,
    bottom: 150,
  },
  vr: {
    position: 'absolute',
    left: 660,
    bottom: -30,
  },
  ui: {
    position: 'absolute',
    left: 360,
    bottom: 120,
  },
  ui2: {
    left: 360,
    bottom: 820,
  },
  main: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
  thumbContainer: {
    width: '50%',
  },
  thumbnail: {
    width: '96%',
    marginHorizontal: 20,
    resizeMode: 'contain',
  },
  homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
  },
});

export default Guide;
