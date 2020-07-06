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
    if (x > 173 && x < 198 && y > 22 && y < 64) {
      navigation.navigate('Bone');
    }
    // 척추
    else if (x > 180 && x < 194 && y > 65 && y < 157) {
      navigation.navigate('Bone2');
    }
    //갈비
    else if (x > 163 && x < 214 && y > 73 && y < 136) {
      navigation.navigate('Bone3');
    }
    //팔
    else if (
      (x > 103 && x < 152 && y > 76 && y < 212) ||
      (x > 276 && x < 274 && y > 217 && y < 223)
    ) {
      navigation.navigate('Bone4');
    }
    //다리
    else if (x > 155 && x < 221 && y > 155 && y < 380) {
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
            <Image source={p17} style={{resizeMode: 'contain', width: '40%'}} />
            <View style={{top: '10%'}}>
              <Image
                source={p18}
                style={{resizeMode: 'contain', height: '20%'}}
              />
              <Image
                source={p19}
                style={{resizeMode: 'contain', height: '40%', right: '20%'}}
              />
            </View>
          </View>
        </View>
      </View>

      <Tab navigation={navigation} active="Bone" />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#ec7728',
    width: '50%',
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
    marginLeft: 0,
    borderRadius: 100,
  },
  video: {
    top: '90%',
    right: '95%',
  },
  vr: {
    top: '90%',
    right: '90%',
  },
  ui: {
    resizeMode: 'contain',
    marginTop: 80,
    marginLeft: 20,
    height: '80%',
    marginRight: 10,
  },
  homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
  },
  balloonInner: {
    height: '30%',
    right: '26%',
    resizeMode: 'contain',
  },
  main: {
    width: '93%',
    flex: 1,
    flexDirection: 'row',
  },
});

export default Bone;
