import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;

  img {
    width: 200px;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
`;
