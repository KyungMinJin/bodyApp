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
        <TouchableOpacity
          style={{
            width: '15%',
            height: '70%',
            marginTop: '5%',
            marginRight: '5%',
          }}
          onPress={() => navigation.navigate('Guide')}>
          <Image style={styles.leftLogo} source={p2} />
        </TouchableOpacity>
        <View style={styles.innerMenu}>
          <View style={styles.innerMenuRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Bone')}>
              <Image style={styles.innerLogo} source={p3} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Digest')}>
              <Image style={styles.innerLogo} source={p4} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Breathe')}>
              <Image style={styles.innerLogo} source={p5} />
            </TouchableOpacity>
          </View>
          <View style={styles.innerMenuRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Excret')}>
              <Image style={styles.innerLogo} source={p6} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Percept')}>
              <Image style={styles.innerLogo} source={p7} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Circular')}>
              <Image style={styles.innerLogo} source={p8} />
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
    padding: '5%',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
  },
  menu: {
    flex: 4,
    flexDirection: 'row',
  },
  leftLogo: {
    resizeMode: 'contain',
    flex: 1,
  },
  innerMenu: {
    flex: 4,
  },
  innerMenuRow: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: '30%',
    padding: '1%',
    maxHeight: '30%',
    marginTop: '6%',
  },
  innerLogo: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Home;
