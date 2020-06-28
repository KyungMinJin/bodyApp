import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p15 from '../../images/그림1111.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림100.png';
import p17 from '../../images/그림101.png';
import Tab from '../common/Tab';
const Percept = ({navigation}) => {
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;
    // 신경
    if (x > 52 && x < 507 && y > 56 && y < 440) {
      navigation.navigate('Percept2');
    }
    //감각
    else {
      navigation.navigate('Percept');
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
            <View>
              <Image
                source={p17}
                style={{
                  resizeMode: 'contain',
                  marginTop: -230,
                  width: 600,
                  height: 650,
                }}
              />
            </View>
          </View>
        </View>
      </View>

      <Tab navigation={navigation} style={styles.tab} active="Percept" />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 330,
  },
  back: {
    backgroundColor: '#e7c753',
    flexDirection: 'row',
    borderRadius: 100,
    margin: 30,
    width: '50%',
  },
  back2: {
    borderColor: '#e7c753',
    borderWidth: 20,
    backgroundColor: '#ffe699',
    width: '50%',
    margin: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    marginLeft: -190,
    marginTop: 350,
  },
  vr: {
    marginLeft: -180,
  },
  ui: {
    resizeMode: 'contain',
    width: 794,
    height: 794,
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

export default Percept;
