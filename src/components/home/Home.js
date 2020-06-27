import React from 'react';
import {Button, View, StyleSheet, Image} from 'react-native';
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
        <Image style={styles.logo} source={p2} />
        <View style={styles.innerMenu}>
          <Image style={styles.logo} source={p3} />
          <Image style={styles.logo} source={p4} />
          <Image style={styles.logo} source={p5} />

          <Image style={styles.logo} source={p6} />
          <Image style={styles.logo} source={p7} />
          <Image style={styles.logo} source={p8} />
        </View>
      </View>

      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Bone')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Homes: {
    backgroundColor: '#fff',
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
