import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
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
    if (x > 342 && x < 532 && y > 120 && y < 254) {
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
            <TouchableOpacity
              style={styles.video}
              onPress={() => Linking.openURL('https://youtu.be/rXpIcsg5Vcc')}>
              <Image source={p11} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vr}
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=s7FQbjzE_GU ')
              }>
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
                  right: '25%',
                  height: '100%',
                  bottom: '35%',
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

export default Percept;
