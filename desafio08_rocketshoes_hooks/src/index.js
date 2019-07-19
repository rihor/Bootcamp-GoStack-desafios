import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';
import store from './store';
import NavigationService from './services/navigation';
import color from './theme/color';

export default function src() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={color.dark} barStyle="light-content" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
