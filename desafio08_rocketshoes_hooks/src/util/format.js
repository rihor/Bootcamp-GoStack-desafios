import numeral from 'numeral';
import 'numeral/locales/pt-br';

numeral.locale('pt-br');

export const formatPrice = num => `R$ ${numeral(num).format('0,0.00')}`;
// creditos:
// https://github.com/luizbatanero/gostack-rocketshoes-react-native/blob/master/src/util/format.js
