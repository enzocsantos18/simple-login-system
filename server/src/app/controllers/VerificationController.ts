import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import mailer from '../services/mailer';
import User from '../models/User';

interface UserInterface {
  name: string;
  email: string;
  password: string;
  isConfirmed: boolean;
}

class VerificationCotroller {
  async sendVerificationEmail(req: Request, res: Response) {
    const id = req.userId;

    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOne({ id });

      if (!user) {
        return res.status(400).send({ error: 'User not found' });
      }

      mailer.sendMail(
        {
          to: user.email,
          from: 'enzocsantos18@gmail.com',
          html: `<p>Click <a href="http://localhost:3333/users/emailConfirmation?token=${user.emailVerificationToken}">here</a> to confirm your email </p>`,
        },
        err => {
          return res
            .status(400)
            .send({ error: 'Cannot send confirmation email.' });
        },
      );

      return res.send();
    } catch (e) {
      return res
        .status(400)
        .send({ error: 'Error on email confirmation, try again' });
    }
  }

  async confirmEmail(req: Request, res: Response) {
    const emailVerificationToken = req.query.token as string;
    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOne({
        emailVerificationToken,
      });

      if (!user) {
        return res.status(400).send({ error: 'User not found' });
      }

      const { id } = user;

      await userRepository.update(id, {
        emailVerificationToken: '',
        isConfirmed: true,
      });

      return res.redirect('http://localhost:3000/user/emailConfirmation');
    } catch (e) {
      return res
        .status(400)
        .send({ error: 'Error on email confirmation, try again' });
    }
  }
}

export default new VerificationCotroller();
