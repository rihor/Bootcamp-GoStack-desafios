import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import color from './theme/color';
import Routes from './routes';

const App = () => (
  <Fragment>
    <StatusBar barStyle="light-content" backgroundColor={color.dark} />
    <Routes />
  </Fragment>
);

export default App;
