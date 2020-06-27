/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/home/Home';
import Bone from './src/components/bone/Bone';
import Digest from './src/components/digest/Digest';
import Breathe from './src/components/breathe/Breathe';
import Circular from './src/components/circular/Circular';
import Excert from './src/components/excret/Excret';
import Percept from './src/components/percept/Percept';
import Guide from './src/components/guide/Guide';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Guide" component={Guide} />
      <Stack.Screen name="Digest" component={Digest} />
      <Stack.Screen name="Bone" component={Bone} />
      <Stack.Screen name="Breathe" component={Breathe} />
      <Stack.Screen name="Circular" component={Circular} />
      <Stack.Screen name="Excert" component={Excert} />
      <Stack.Screen name="Percept" component={Percept} />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
