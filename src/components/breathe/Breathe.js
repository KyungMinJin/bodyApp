import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const Breathe = ({navigation}) => {
  return (
    <View style={styles.Homes}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Bone')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Homes: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Breathe;
