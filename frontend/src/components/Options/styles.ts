import styled from 'styled-components';
export const OptionsContainer = styled.div`
  position: relative;

  span{

    background-color: red;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #f0bd18;
    transition: 0.2s ease-in;

    :hover{
      background-color: #ffe387;
      cursor: pointer;
    }
  }
`;
 
export const OptionsModal = styled.div`
  position:  absolute;
  top: 50px;
  right: 0px;
  border-radius: 8px;
  width: 180px;
  padding: 20px;
  background-color: #F4F4F4;
  border: 2px solid #00000020;
  box-shadow: 0 20px 30px -16px rgba(9,9,16,0.2)!important;

  a{
    text-decoration: none;
    color: black;
  }
  li{
    padding: 16px;
    list-style: none;
    margin: 5px 0px;
    background-color: white;
    border-radius: 8px;
    transition: 0.2s ease-in;

    :hover{
      background-color: #ffce2b;
      cursor: pointer;
    }
  }


`;