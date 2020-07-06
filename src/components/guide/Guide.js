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
          <Image source={p52} style={styles.balloon4} />
        </View>
      </View>

      <Tab navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  balloon: {
    width: '55%',
    resizeMode: 'contain',
    left: '35%',
    bottom: '150%',
  },
  balloon2: {
    width: '55%',
    resizeMode: 'contain',
    left: '25%',
    bottom: '170%',
  },
  balloon3: {
    width: '65%',
    resizeMode: 'contain',
    left: '13%',
    bottom: '300%',
  },
  balloon4: {
    width: '65%',
    resizeMode: 'contain',
    left: '20%',
    bottom: '130%',
  },
  video: {
    left: '65%',
    bottom: '95%',
  },
  vr: {
    left: '67%',
    bottom: '95%',
  },
  ui: {
    left: '40%',
    bottom: '52%',
  },
  ui2: {
    left: '36%',
    bottom: '102%',
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
    height: '98%',
    resizeMode: 'contain',
  },
  homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
    height: '80%',
  },
});

export default Guide;
