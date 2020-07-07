import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import p9 from '../../images/그림9.png';
import p50 from '../../images/그림50.png';
import p51 from '../../images/그림51.png';
import p52 from '../../images/그림52.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p13 from '../../images/그림13.png';
import p13_2 from '../../images/그림13_2.png';
import p13_3 from '../../images/그림13_3.png';
import p13_4 from '../../images/그림13_4.png';
import p13_5 from '../../images/그림13_5.png';
import p39 from '../../images/그림39.png';
import p111 from '../../images/그림111.png';
import Tab from '../common/Tab';

const Guide4 = ({navigation}) => {
  let tabctn = 0;
  let balloon_d = [0,0,0,1,0];
  return (
    <View style={styles.homes}>
      <View style={styles.main}>
        <TouchableOpacity style={styles.thumbContainer} onPress={() => navigation.navigate('Guide5')}>
          <Image source={p9} style={styles.thumbnail} />
          <Image source={p50} style={styles.ui} />
          <Image source={p11} style={styles.video} />
          <Image source={p12} style={styles.vr} />
          <Image source={p13} style={[styles.balloon, {opacity: balloon_d[0]}]} />
          <Image source={p13_2} style={[styles.balloon_2, {opacity: balloon_d[1]}]} />
          <Image source={p13_3} style={[styles.balloon_3, {opacity: balloon_d[2]}]} />
          <Image source={p13_4} style={[styles.balloon_4, {opacity: balloon_d[3]}]} />
          <Image source={p13_5} style={[styles.balloon_5, {opacity: balloon_d[4]}]} />
        </TouchableOpacity>
        <View style={styles.thumbContainer2}>
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
    position: 'absolute',
    resizeMode: 'center',
    right: '0%',
    top: '0%',
  },
  balloon_2: {
    width: '55%',
    position: 'absolute',
    resizeMode: 'center',
    right: '-10%',
    top: '20%',
  },
  balloon_3: {
    width: '55%',
    position: 'absolute',
    resizeMode: 'center',
    right: '-30%',
    top: '0%',
  },
  balloon_4: {
    width: '55%',
    position: 'absolute',
    resizeMode: 'center',
    left: '100%',
    top: '65%',
  },
  balloon_5: {
    width: '55%',
    position: 'absolute',
    resizeMode: 'center',
    left: '40%',
    top: '65%',
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
    zIndex: 9
  },
  thumbContainer2: {
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

export default Guide4;
