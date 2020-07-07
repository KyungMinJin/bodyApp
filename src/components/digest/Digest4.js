import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import p15 from '../../images/그림120.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림39.png';
import p18 from '../../images/그림53.png';
import p17 from '../../images/그림54.png';
import p19 from '../../images/그림55.png';
import p43 from '../../images/그림56.png';
import Tab from '../common/Tab';
const Digest = ({navigation}) => {
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;
    // 입
    if (x > 380 && x < 439 && y > 127 && y < 144) {
      navigation.navigate('Digest');
    }
    //식도
    else if (x > 449 && x < 477 && y > 149 && y < 241) {
      navigation.navigate('Digest2');
    }
    //위
    else if (x > 432 && x < 522 && y > 250 && y < 317) {
      navigation.navigate('Digest3');
    }
    // 소장
    else if (x > 407 && y > 355 && x < 494 && y < 396) {
      navigation.navigate('Digest4');
    }
    //대장
    else if (x > 384 && y > 327 && x < 515 && y < 420) {
      navigation.navigate('Digest5');
    }
    // 항문
    else if (x > 445 && y > 416 && x < 481 && y < 452) {
      navigation.navigate('Digest6');
    }
    //간
    else if (x > 381 && x < 421 && y > 256 && y < 318) {
      navigation.navigate('Digest7');
    }

    console.log(
      `x coord = ${evt.nativeEvent.locationX} ycoord = ${evt.nativeEvent.locationY}`,
    );
  };
  return (
    <View style={styles.homes}>
      <View style={styles.main}>
        <View style={styles.back}>
          <TouchableOpacity onPress={(evt) => handlePress(evt)}>
            <Image source={p15} style={styles.ui} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.video} onPress={() => Linking.openURL('https://youtu.be/AnmHhWsGQdA')}>
              <Image source={p11} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.vr} onPress={() => Linking.openURL('https://youtu.be/r8-6Z1Efgzg')}>
              <Image source={p12} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.back2}>
          <Image source={p16} style={styles.balloonInner} />
          <View style={{flexDirection: 'row'}}>
            <Image
              source={p18}
              style={{resizeMode: 'contain', height: '23%'}}
            />
            <View>
              <Image
                source={p17}
                style={{
                  resizeMode: 'contain',
                  right: '10%',
                  bottom: '6%',
                  width: '43%',
                }}
              />
              <Image
                source={p19}
                style={{
                  resizeMode: 'contain',
                  height: '33%',
                  right: '53%',
                  bottom: '6%',
                }}
              />
            </View>
          </View>
          <Image
            source={p43}
            style={{
              resizeMode: 'contain',
              width: '80%',
              left: '10%',
              bottom: '16%',
            }}
          />
        </View>
      </View>

      <Tab navigation={navigation} style={styles.tab} active="Digest" />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#a0d066',
    width: '50%',
    margin: 30,
    flexDirection: 'row',
    borderRadius: 100,
  },
  back2: {
    borderColor: '#a0d066',
    borderWidth: 20,
    backgroundColor: '#ffe699',
    width: '50%',
    margin: 30,
    marginLeft: 0,
    borderRadius: 100,
  },
  video: {
    top: '30%',
    right: '265%',
  },
  vr: {
    top: '30%',
    right: '260%',
  },
  ui: {
    resizeMode: 'contain',
    height: '98%',
    right: '14%',
  },
  homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
  },
  balloonInner: {
    height: '25%',
    right: '26%',
    marginBottom: '4%',
    resizeMode: 'contain',
  },
  main: {
    width: '93%',
    flex: 1,
    flexDirection: 'row',
  },
});
export default Digest;
