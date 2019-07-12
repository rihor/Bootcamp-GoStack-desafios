import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // configuração do Reactotron
  // IP achado nas configurações de rede do windows
  const tron = Reactotron.configure({ host: '192.168.100.6' })
    .useReactNative()
    .connect();

  console.tron = tron;

  // limpa a timeline do reactotron sempre que der um refresh no app
  tron.clear();
}
