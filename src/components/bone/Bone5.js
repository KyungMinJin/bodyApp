import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import p15 from '../../images/그림15.png';
import p11 from '../../images/그림11.png';
import p12 from '../../images/그림12.png';
import p16 from '../../images/그림16.png';
import p23 from '../../images/그림29.png';
import p18 from '../../images/그림30.png';
import p19 from '../../images/그림31.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Tab from '../common/Tab';
const Bone5 = ({navigation}) => {
  return (
    <View style={styles.homes}>
      <View style={styles.main}>
        <View style={styles.back}>
          <Image source={p15} style={styles.ui} />
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
            <TouchableOpacity onPress={() => navigation.navigate('Bone6')}>
              <Image source={p23} />
            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
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

export default Bone5;
