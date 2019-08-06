import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const MeetupsList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
