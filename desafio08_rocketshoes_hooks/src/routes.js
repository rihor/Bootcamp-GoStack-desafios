import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import color from './theme/color';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    { Home, Cart },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: color.dark,
      },
    }
  )
);

export default Routes;
