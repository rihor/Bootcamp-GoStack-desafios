import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const SignOutButton = styled.button`
  background: #d44059;
  padding: 5px 15px;
  border: 0;
  border-radius: 4px;
  color: #fff;
`;
