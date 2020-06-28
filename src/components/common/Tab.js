import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p3 from '../../images/그림3.png';
import p4 from '../../images/그림4.png';
import p5 from '../../images/그림5.png';
import p6 from '../../images/그림6.png';
import p7 from '../../images/그림7.png';
import p8 from '../../images/그림8.png';

const Tab = ({navigation}) => {
  return (
    <View style={styles.home}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('Bone')}>
          <Image style={styles.logo} source={p3} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Digest')}>
          <Image style={styles.logo} source={p4} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Breate')}>
          <Image style={styles.logo} source={p5} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Circular')}>
          <Image style={styles.logo} source={p6} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Excert')}>
          <Image style={styles.logo} source={p7} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Percept')}>
          <Image style={styles.logo} source={p8} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    //height: 150,
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
