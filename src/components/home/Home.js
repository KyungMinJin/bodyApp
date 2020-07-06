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
        <TouchableOpacity style={styles.leftLogo} onPress={() => navigation.navigate('Guide')}>
          <Image style={styles.leftLogoImg} source={p2} />
        </TouchableOpacity>
        <View style={styles.innerMenu}>
          <View style={styles.innerMenuRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Bone')} style={styles.innerLogo}>
              <Image style={styles.innerLogoImg} source={p3} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Digest')} style={styles.innerLogo}>
              <Image style={styles.innerLogoImg} source={p4} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Breathe')} style={styles.innerLogo}>
              <Image style={styles.innerLogoImg} source={p5} />
            </TouchableOpacity>
          </View>
          <View style={styles.innerMenuRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Excret')} style={styles.innerLogo}>
              <Image style={styles.innerLogoImg} source={p6} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Percept')} style={styles.innerLogo}>
              <Image style={styles.innerLogoImg} source={p7} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Circular')} style={styles.innerLogo}>
              <Image style={styles.innerLogoImg} source={p8} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Homes: {
    backgroundColor: '#FFF2CC',
    flex: 1,
    paddingLeft: '15%',
    paddingRight: '15%',
    paddingTop: '5%',
    paddingBottom: '5%',
    alignItems: 'center',
  },
  logo: {
    flex: 1.5,
    resizeMode: 'center',
  },
  menu: {
    flex: 4,
    flexDirection: 'row',
  },
  leftLogo: {
    padding: '1%',
    flex: 1.4,
  },
  leftLogoImg: {
    resizeMode: 'center',
    height: '100%',
    width: '100%',
    flex: 1,
  },
  innerMenu: {
    flex: 4,
  },
  innerMenuRow: {
    flex: 1,
    flexDirection: 'row',
  },
  innerLogo: {
    padding: '1%',
    flex: 1,
  },
  innerLogoImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
  },
});

export default Home;
