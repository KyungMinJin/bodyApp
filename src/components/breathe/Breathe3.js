import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p15 from '../../images/그림68.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림70.png';
import p18 from '../../images/그림77.png';
import p17 from '../../images/그림76.png';
import p19 from '../../images/그림78.png';
import Tab from '../common/Tab';
const Breathe3 = ({navigation}) => {
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;
    // 코
    if (x > 440 && x < 508 && y > 102 && y < 135) {
      navigation.navigate('Breathe');
    }
    //기관
    else if (x > 498 && x < 520 && y > 199 && y < 291) {
      navigation.navigate('Breathe2');
    }
    //기관지
    else if (x > 448 && x < 597 && y > 239 && y < 306) {
      navigation.navigate('Breathe3');
    }
    // 폐
    else if (x > 431 && y > 240 && x < 611 && y < 452) {
      navigation.navigate('Breathe4');
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
            <Image
              source={p18}
              style={{
                resizeMode: 'contain',
                width: '20%',
              }}
            />
            <View>
              <Image
                source={p17}
                style={{resizeMode: 'contain', height: '70%'}}
              />
            </View>
          </View>
          <Image
            source={p19}
            style={{
              resizeMode: 'contain',
              width: '70%',
              bottom: '24%',
              left: '20%',
            }}
          />
        </View>
      </View>

      <Tab navigation={navigation} style={styles.tab} active="Breathe" />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#ec7093',
    width: '50%',
    margin: 30,
    flexDirection: 'row',
    borderRadius: 100,
  },
  back2: {
    borderColor: '#ec7093',
    borderWidth: 20,
    backgroundColor: '#ffe699',
    width: '50%',
    margin: 30,
    marginLeft: 0,
    borderRadius: 100,
  },
  video: {
    top: '30%',
    right: '345%',
  },
  vr: {
    right: '340%',
    top: '30%',
  },
  ui: {
    resizeMode: 'contain',
    height: '98%',
    top: '6%',
    right: '20%',
  },
  homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
  },
  balloonInner: {
    height: '25%',
    right: '26%',
    top: '4%',
    resizeMode: 'contain',
  },
  main: {
    width: '93%',
    flex: 1,
    flexDirection: 'row',
  },
});

export default Breathe3;
