import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import color from './theme/color';

const Routes = createAppContainer(
  createStackNavigator(
    { Home, Cart },
    {
      defaultNavigationOptions: navigator => ({
        header: <Header {...navigator} />,
      }),
      cardStyle: {
        backgroundColor: color.dark,
      },
    }
  )
);

export default Routes;
