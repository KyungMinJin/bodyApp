import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p15 from '../../images/그림90.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림92.png';
import p18 from '../../images/그림93.png';
import p17 from '../../images/그림91.png';
import p19 from '../../images/그림94.png';
import Tab from '../common/Tab';
const Excret = ({navigation}) => {
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;
    // 심장
    if (x > 172 && x < 518 && y > 18 && y < 264) {
      navigation.navigate('Excret');
    }
    //혈관
    else {
      navigation.navigate('Excret2');
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
                width: 150,
                marginRight: 100,
              }}
            />
            <View>
              <Image source={p17} style={{resizeMode: 'contain', width: 300}} />
            </View>
          </View>
          <Image
            source={p19}
            style={{
              marginTop: -80,
              resizeMode: 'contain',
              width: 550,
            }}
          />
        </View>
      </View>

      <Tab navigation={navigation} style={styles.tab} active="Excret" />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#e7c753',
    width: '50%',
    margin: 30,
    flexDirection: 'row',
    borderRadius: 100,
  },
  back2: {
    borderColor: '#e7c753',
    borderWidth: 20,
    backgroundColor: '#ffe699',
    width: '50%',
    margin: 30,
    marginLeft: 0,
    borderRadius: 100,
  },
  video: {
    top: '30%',
    right: '275%',
  },
  vr: {
    top: '30%',
    right: '270%',
  },
  ui: {
    resizeMode: 'contain',
    height: '98%',
    right: '18%',
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
export default Excret;
