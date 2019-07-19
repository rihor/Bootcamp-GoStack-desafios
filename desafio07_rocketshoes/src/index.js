import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import color from './theme/color';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor={color.dark} />
    <Routes />
  </Provider>
);

export default App;
