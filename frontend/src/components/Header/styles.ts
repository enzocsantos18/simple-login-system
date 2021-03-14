import styled from 'styled-components';
export const HeaderStyle = styled.header`
  width: 100%;
  height: 50px;
  background-color: #ffce2b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  a{
    text-decoration: none;
    color: black;
  }

  h1{
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: 0.1s all ease-in;

    :hover{
      transform: scale(0.95);
    }
  }
`;
 