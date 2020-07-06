import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p15 from '../../images/그림15.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림16.png';
import p17 from '../../images/그림17.png';
import p18 from '../../images/그림18.png';
import p19 from '../../images/그림19.png';
import Tab from '../common/Tab';
const Bone = ({navigation}) => {
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;
    // 머리
    if (x > 116 && x < 161 && y > 30 && y < 94) {
      navigation.navigate('Bone');
    }
    // 척추
    else if (x > 132 && x < 153 && y > 94 && y < 241) {
      navigation.navigate('Bone2');
    }
    //갈비
    else if (x > 103 && x < 187 && y > 108 && y < 206) {
      navigation.navigate('Bone3');
    }
    //팔
    else if (
      (x > 18 && x < 92 && y > 118 && y < 334) ||
      (x > 181 && x < 274 && y > 113 && y < 342)
    ) {
      navigation.navigate('Bone4');
    }
    //다리
    else if (x > 90 && x < 191 && y > 234 && y < 566) {
      navigation.navigate('Bone5');
    }
    //근육
    else {
      navigation.navigate('Bone6');
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
            <TouchableOpacity>
              <Image source={p11} style={styles.video} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={p12} style={styles.vr} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.back2}>
          <Image source={p16} style={styles.balloonInner} />
          <View style={{flexDirection: 'row'}}>
            <Image source={p17} />
            <View>
              <Image source={p18} />
              <Image source={p19} style={{resizeMode: 'contain', width: 400}} />
            </View>
          </View>
        </View>
      </View>

      <Tab navigation={navigation} style={styles.tab} active="Bone" />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 330,
  },
  back: {
    backgroundColor: '#ec7728',
    width: '50%',
    height: '80%',
    margin: 30,
    flexDirection: 'row',
    borderRadius: 100,
  },
  back2: {
    borderColor: '#ec7728',
    borderWidth: 20,
    backgroundColor: '#ffe699',
    width: '50%',
    margin: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    marginTop: 350,
  },
  vr: {
    marginLeft: 10,
  },
  ui: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 10,
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

export default Bone;
