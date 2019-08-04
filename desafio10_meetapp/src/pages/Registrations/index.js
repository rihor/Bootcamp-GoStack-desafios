import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api, { ip } from '~/services/api';
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
        ...meetup,
        formattedDate: formatRelative(parseISO(meetup.date), new Date(), {
          locale: pt,
        }),
        banner: {
          ...meetup.banner,
          url: meetup.banner.url.replace(/localhost/, ip),
        },
      }));
      setMeetups(meetupsData);
      setLoading(false);
    }
    loadMeetups();
  }, [isFocused]);

  return (
    <Background>
      <Header />
      <Container>
        {/* {loading ? null : ( */}
        <MeetupsList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Card meetup={item} />}
        />
        {/* )} */}
      </Container>
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
