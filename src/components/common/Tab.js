import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p3 from '../../images/그림118.png';
import p4 from '../../images/그림113.png';
import p5 from '../../images/그림114.png';
import p6 from '../../images/그림115.png';
import p7 from '../../images/그림116.png';
import p8 from '../../images/그림117.png';
import p112 from '../../images/그림112.png';

const Tab = ({navigation, active}) => {
  return (
    <View style={styles.home}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.logo} source={p112} />
        </TouchableOpacity>
        {active !== 'Bone' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Bone')}>
            <Image style={styles.logo} source={p3} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {active !== '' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Digest')}>
            <Image style={styles.logo} source={p4} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {active !== '' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Breate')}>
            <Image style={styles.logo} source={p5} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {active !== '' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Circular')}>
            <Image style={styles.logo} source={p6} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {active !== '' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Excret')}>
            <Image style={styles.logo} source={p7} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {active !== '' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Percept')}>
            <Image style={styles.logo} source={p8} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'center',
  },
  menu: {
    width: '60%',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Tab;
