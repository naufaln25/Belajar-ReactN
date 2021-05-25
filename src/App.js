import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './pages/SampleComponent/index';
import StylingComponent from './pages/StylingComponent/index';
import FlexBox from './pages/FlexBox/index';
import PositionRN from './pages/Position/index';

//functional component
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <PositionRN />
      </ScrollView>
    </View>
  );
};

export default App;
