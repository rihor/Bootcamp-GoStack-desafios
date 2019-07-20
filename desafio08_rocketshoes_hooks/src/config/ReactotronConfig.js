/**
 * configuração do Reactotron
 * objetivo é permitir o uso de console.tron.log() em toda a aplicação
 */
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  // insira o ip do celular aqui
  const tron = Reactotron.configure({ host: '192.168.100.6' })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
  console.tron.log('Conectado!');
}
