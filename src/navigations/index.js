import React from 'react';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import StackNav from './StackNav';
import useToggleTheme from '../context/useToggleTheme';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    postBack: '#eee',
    inputBackground: '#eee',
    inputPlaceholder: 'gray',
  },
};
const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    postBack: 'rgb(0, 0, 30)',
    inputBackground: '#333333',
    inputPlaceholder: '#eee',
  },
};

const Index = () => {
  const {isDark} = useToggleTheme();
  return (
    <NavigationContainer theme={isDark ? MyDarkTheme : MyTheme}>
      <StackNav />
    </NavigationContainer>
  );
};

export default Index;
