import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Body,
  Title,
  Info,
  StyledText,
  StyledButton,
  TextWrapper,
} from './styles';

export default function Card({ meetup }) {
  return (
    <Container>
      <Banner source={{ uri: meetup.banner.url }} />
      <Body>
        <Title>{meetup.title}</Title>
        <Info>
          <TextWrapper>
            <Icon name="event" size={15} color="#999" />
            <StyledText>{meetup.formattedDate}</StyledText>
          </TextWrapper>
          <TextWrapper>
            <Icon name="place" size={15} color="#999" />
            <StyledText>{meetup.location}</StyledText>
          </TextWrapper>
          <TextWrapper>
            <Icon name="person" size={15} color="#999" />
            <StyledText>Organizador: {meetup.User.name}</StyledText>
          </TextWrapper>
        </Info>
        <StyledButton>
          {/* {registered ? 'Cancelar inscrição' : 'Realizar inscrição'} */}
          Cancelar inscrição
        </StyledButton>
      </Body>
    </Container>
  );
}

Card.propTypes = {
  meetup: PropTypes.shape({
    title: PropTypes.string,
    banner: PropTypes.shape({ url: PropTypes.string.isRequired }),
    formattedDate: PropTypes.string,
    location: PropTypes.string,
    User: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

Card.defaultProps = {
  meetup: PropTypes.shape({
    title: 'sem título',
    formattedDate: 'sem data',
    location: 'sem local',
    User: PropTypes.shape({
      name: 'sem autor',
    }).isRequired,
  }),
};
