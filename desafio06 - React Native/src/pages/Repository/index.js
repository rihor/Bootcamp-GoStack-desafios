import React from 'react';
import { View } from 'react-native';
// import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Repository({ navigation }) {
  const repository = navigation.getParam('repository');
  return (
    <>
      <View />
      {/* <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} /> */}
    </>
  );
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
