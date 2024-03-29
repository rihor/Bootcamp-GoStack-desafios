import styled from 'styled-components';

export const Loading = styled.div`
  height: 100vh;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  padding-top: 30px;
  border-top: 1px solid #eee;

  button {
    border-radius: 4px;
    border: none;
    background: #7159c1;
    color: #fff;
    font-weight: bold;
    padding: 5px 10px;

    &:nth-child(${props => props.selected + 1}) {
      opacity: 0.6;
    }
  }
`;

export const PaginationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const PageButton = styled.button.attrs(props => ({
  type: 'button',
  disabled: !props.show,
}))`
  margin-bottom: 30px;
  background: #7159c1;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
