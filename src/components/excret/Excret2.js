import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p15 from '../../images/그림90.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림92.png';
import p18 from '../../images/그림97.png';
import p17 from '../../images/그림95.png';
import p19 from '../../images/그림96.png';
import Tab from '../common/Tab';
const Excret2 = ({navigation}) => {
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
                // marginRight: 100,
              }}
            />
            <View>
              <Image
                source={p17}
                style={{resizeMode: 'contain', width: 400, height: 350}}
              />
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
  tab: {
    position: 'absolute',
    bottom: 330,
  },
  back: {
    backgroundColor: '#61cfdd',
    flexDirection: 'row',
    borderRadius: 100,
    margin: 30,
    width: '50%',
  },
  back2: {
    borderColor: '#61cfdd',
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
    width: 674,
    height: 674,
    marginTop: 65,
    marginLeft: 50,
    marginRight: 40,
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

export default Excret2;
