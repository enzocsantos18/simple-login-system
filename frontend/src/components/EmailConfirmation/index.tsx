import React from 'react';

import { Container } from './styles';

const EmailConfirmation: React.FC = () => {
  return (

    <Container>
      <h3>Please Confirm your email</h3>
      <p>Your email is not confirmed, click in the button bellow and check your email 😃</p>
      <button>Send email</button>
    </Container>
  );
}

export default EmailConfirmation;