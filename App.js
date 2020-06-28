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
import Percept from './src/components/percept/Percept';
import Guide from './src/components/guide/Guide';
import Bone2 from './src/components/bone/Bone2';
import Bone3 from './src/components/bone/Bone3';
import Bone4 from './src/components/bone/Bone4';
import Bone5 from './src/components/bone/Bone5';
import Bone6 from './src/components/bone/Bone6';
import Excret from './src/components/excret/Excret';
import Excret2 from './src/components/excret/Excret2';
import Circular2 from './src/components/circular/Circular2';
import Digest2 from './src/components/digest/Digest2';
import Digest3 from './src/components/digest/Digest3';
import Digest4 from './src/components/digest/Digest4';
import Digest5 from './src/components/digest/Digest5';
import Digest6 from './src/components/digest/Digest6';
import Digest7 from './src/components/digest/Digest7';
import Breathe2 from './src/components/breathe/Breathe2';
import Breathe3 from './src/components/breathe/Breathe3';
import Breathe4 from './src/components/breathe/Breathe4';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Guide" component={Guide} />
      <Stack.Screen name="Digest" component={Digest} />
      <Stack.Screen name="Digest2" component={Digest2} />
      <Stack.Screen name="Digest3" component={Digest3} />
      <Stack.Screen name="Digest4" component={Digest4} />
      <Stack.Screen name="Digest5" component={Digest5} />
      <Stack.Screen name="Digest6" component={Digest6} />
      <Stack.Screen name="Digest7" component={Digest7} />
      <Stack.Screen name="Bone" component={Bone} />
      <Stack.Screen name="Bone2" component={Bone2} />
      <Stack.Screen name="Bone3" component={Bone3} />
      <Stack.Screen name="Bone4" component={Bone4} />
      <Stack.Screen name="Bone5" component={Bone5} />
      <Stack.Screen name="Bone6" component={Bone6} />
      <Stack.Screen name="Breathe" component={Breathe} />
      <Stack.Screen name="Breathe2" component={Breathe2} />
      <Stack.Screen name="Breathe3" component={Breathe3} />
      <Stack.Screen name="Breathe4" component={Breathe4} />
      <Stack.Screen name="Circular" component={Circular} />
      <Stack.Screen name="Excret" component={Excret} />
      <Stack.Screen name="Excret2" component={Excret2} />
      <Stack.Screen name="Circular2" component={Circular2} />
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
