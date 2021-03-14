import styled from 'styled-components';

export const Container = styled.div`
  background: #fc280340;
  max-width: 85%;
  margin: 10px auto;
  padding: 20px;
  border-radius: 8px;

  button{
    padding: 10px;
    border-radius: 8px;
    border: 0;
    margin-top: 10px;
    background: #fc280370;
    transition: 0.3s ease-in all;
    :hover{
      background: #fc2803;
      cursor: pointer;
    }
  }
`