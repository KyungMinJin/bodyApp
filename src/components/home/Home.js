import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import p1 from '../../images/그림1.png';
import p2 from '../../images/그림2.png';
import p3 from '../../images/그림3.png';
import p4 from '../../images/그림4.png';
import p5 from '../../images/그림5.png';
import p6 from '../../images/그림6.png';
import p7 from '../../images/그림7.png';
import p8 from '../../images/그림8.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.Homes}>
      <Image style={styles.logo} source={p1} />
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
          <Image style={styles.logo} source={p2} />
        </TouchableOpacity>
        <View style={styles.innerMenu}>
          <TouchableOpacity onPress={() => navigation.navigate('Bone')}>
            <Image style={styles.logo} source={p3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Digest')}>
            <Image style={styles.logo} source={p4} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Breathe')}>
            <Image style={styles.logo} source={p5} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Breathe')}>
            <Image style={styles.logo} source={p6} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Breate')}>
            <Image style={styles.logo} source={p7} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Circular')}>
            <Image style={styles.logo} source={p8} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerMenu: {
    justifyContent: 'space-between',
    width: 1000,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
