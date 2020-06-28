import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p15 from '../../images/그림68.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림70.png';
import p18 from '../../images/그림80.png';
import p17 from '../../images/그림76.png';
import p19 from '../../images/그림81.png';
import Tab from '../common/Tab';
const Breathe3 = ({navigation}) => {
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;
    // 코
    if (x > 255 && x < 356 && y > 163 && y < 223) {
      navigation.navigate('Breathe');
    }
    //기관
    else if (x > 311 && x < 375 && y > 243 && y < 470) {
      navigation.navigate('Breathe2');
    }
    //기관지
    else if (x > 257 && x < 489 && y > 401 && y < 502) {
      navigation.navigate('Breathe3');
    }
    // 폐
    else if (x > 203 && y > 374 && x < 520 && y < 740) {
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
            <Image source={p18} style={{resizeMode: 'contain', width: 150}} />
            <View>
              <Image
                source={p17}
                style={{resizeMode: 'contain', height: 350}}
              />
            </View>
          </View>
          <Image source={p19} style={{resizeMode: 'contain', width: 600}} />
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
    backgroundColor: '#ec7093',
    flexDirection: 'row',
    borderRadius: 100,
    margin: 30,
    width: '50%',
  },
  back2: {
    borderColor: '#ec7093',
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
    width: 794,
    height: 794,
    marginRight: -40,
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

export default Breathe3;
