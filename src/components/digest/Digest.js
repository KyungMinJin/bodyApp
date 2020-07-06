import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p15 from '../../images/그림120.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림39.png';
import p17 from '../../images/그림41.png';
import p18 from '../../images/그림40.png';
import p19 from '../../images/그림42.png';
import p43 from '../../images/그림43.png';
import Tab from '../common/Tab';
const Digest = ({navigation}) => {
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;
    // 입
    if (x > 264 && x < 369 && y > 202 && y < 236) {
      navigation.navigate('Digest');
    }
    //식도
    else if (x > 368 && x < 405 && y > 239 && y < 373) {
      navigation.navigate('Digest2');
    }
    //위
    else if (x > 342 && x < 465 && y > 380 && y < 480) {
      navigation.navigate('Digest3');
    }
    // 소장
    else if (x > 307 && y > 554 && x < 416 && y < 624) {
      navigation.navigate('Digest4');
    }
    //대장
    else if (x > 265 && y > 518 && x < 472 && y < 626) {
      navigation.navigate('Digest5');
    }
    // 항문
    else if (x > 357 && y > 642 && x < 428 && y < 696) {
      navigation.navigate('Digest6');
    }
    //간
    else if (x > 262 && x < 321 && y > 412 && y < 485) {
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
            <TouchableOpacity style={styles.video}>
              <Image source={p11} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.vr}>
              <Image source={p12} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.back2}>
          <Image source={p16} style={styles.balloonInner} />
          <View style={{flexDirection: 'row'}}>
            <Image source={p18} />
            <View>
              <Image source={p17} />
              <Image
                source={p19}
                style={{resizeMode: 'contain', height: '40%', right: '20%'}}
              />
            </View>
          </View>
          <Image source={p43} style={{resizeMode: 'contain', width: 600}} />
        </View>
      </View>

      <Tab navigation={navigation} style={styles.tab} active="Digest" />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 330,
  },
  back: {
    backgroundColor: '#a0d066',
    flexDirection: 'row',
    borderRadius: 100,
    margin: 30,
    width: '50%',
  },
  back2: {
    borderColor: '#a0d066',
    borderWidth: 20,
    backgroundColor: '#ffe699',
    width: '50%',
    margin: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    marginLeft: -150,
    marginTop: 350,
  },
  vr: {
    marginLeft: -140,
  },
  ui: {
    width: 760,
    height: 760,
  },
  ui2: {
    resizeMode: 'contain',
    height: 300,
    width: 300,
  },
  ui3: {
    resizeMode: 'contain',
    height: 300,
    width: 230,
  },
  ui4: {
    resizeMode: 'contain',
    height: 300,
    width: 300,
  },
  ui6: {
    resizeMode: 'contain',
    height: 280,
    width: 280,
  },
  homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
  },
  balloon3: {
    position: 'absolute',
    left: 980,
    bottom: 420,
  },
  balloonInner: {
    width: 650,
    resizeMode: 'contain',
  },
  main: {
    width: '93%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
  },
});

export default Digest;
