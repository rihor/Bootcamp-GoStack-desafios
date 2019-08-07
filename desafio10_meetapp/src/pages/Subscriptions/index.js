import React, { useEffect, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import Background from '~/components/Background';
import Card from '~/components/Card';
import Header from '~/components/Header';
import { Container, MeetupsList } from './styles';

function Registrations({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      const { data } = await api.get('subscriptions');
      // filtrar os dados
      const meetupsData = data.map(({ Meetup: meetup }) => ({
        subscribed: true,
        ...meetup,
        formattedDate: formatRelative(parseISO(meetup.date), new Date(), {
          locale: pt,
        }),
      }));
      setMeetups(meetupsData);
      setLoading(false);
    }
    loadMeetups();
  }, [isFocused]);

  async function handleUnsubscribe(id) {
    try {
      await api.delete(`/meetup/${id}/unsubscribe`);
      Alert.alert('Sucesso', 'Você se desinscreveu com sucesso!');
    } catch (error) {
      Alert.alert('Error', 'Você não pôde se desinscrever!');
    }
  }

  return (
    <Background>
      <Header />
      {loading ? (
        <ActivityIndicator style={{ flex: 1 }} size={60} color="#fff" />
      ) : (
        <Container>
          <MeetupsList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card
                meetup={item}
                buttonAction={() => handleUnsubscribe(item.id)}
              />
            )}
          />
        </Container>
      )}
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="local-offer" size={25} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Registrations.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon,
};

Registrations.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

// recebe props de react-navigation, permite escutar o foco
export default withNavigationFocus(Registrations);
