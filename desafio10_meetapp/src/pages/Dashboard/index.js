import React, { useEffect, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { format, formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import Header from '~/components/Header';
import Background from '~/components/Background';
import DatePicker from '~/components/DateInput';
import Card from '~/components/Card';
import { Container, MeetupsList } from './styles';

function Dashboard({ isFocused }) {
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      const { data } = await api.get('meetup', {
        params: { date: format(date, 'yyyy-MM-dd'), page },
      });
      if (!data) {
        setLoading(false);
        return;
      }
      const formattedMeetups = data.map(meetup => ({
        ...meetup,
        formattedDate: formatRelative(parseISO(meetup.date), new Date(), {
          locale: pt,
        }),
      }));

      if (page > 1) {
        setMeetups([...meetups, ...formattedMeetups]);
      } else {
        setMeetups(formattedMeetups);
      }
      setLoading(false);
    }
    loadMeetups();
    // eslint-disable-next-line
  }, [isFocused, page, date]);

  function handleNextPage() {}

  async function handleSubscribe(id) {
    try {
      await api.post(`/meetup/${id}/subscribe`);
      Alert.alert('Sucesso', 'Inscrição feita com sucesso!');
    } catch (error) {
      Alert.alert('Error', 'Inscrição não pode ser feita!');
    }
  }

  return (
    <Background>
      <Header />
      {loading ? (
        <ActivityIndicator style={{ flex: 1 }} size={60} color="#fff" />
      ) : (
        <Container>
          <DatePicker date={date} onChange={setDate} />
          <MeetupsList
            data={meetups}
            keyExtractor={item => String(item.id)}
            onEndReached={handleNextPage}
            renderItem={({ item }) => (
              <Card
                meetup={item}
                buttonAction={() => handleSubscribe(item.id)}
              />
            )}
          />
        </Container>
      )}
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="format-list-bulleted" size={25} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon,
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

// recebe props de react-navigation, permite escutar o foco
export default withNavigationFocus(Dashboard);
