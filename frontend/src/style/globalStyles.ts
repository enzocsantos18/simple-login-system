import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .container{
    background-color: #F4F4F4;
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    padding: 40px;  
  }

  main{
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 30px -16px rgba(9,9,16,0.2)!important;
  }

  main h1{
    margin-bottom: 30px;
  }

  form label{
    display: block;
    color: #696969;
  }

  form input{
    width: 100%;
    height: 50px;
    font-size: 16px;
    background: #FFF;
    border: 1px solid #babaca;
    color: black;
    margin: 8px 0px 16px 0px;
    padding: 0px 1em 0px;
    border-radius: 5px;
  }

  form button{
    border-radius: 5px;
    border: 0;
    background-color: #ffce2b;
    font-weight: bold;
    height: 50px;
    width: 100%;

    font-size: 16px;
  }

  form a{
    display: block;
    color: #696969;
    margin: 10px 0px;
  }
`;
 
export default GlobalStyle;