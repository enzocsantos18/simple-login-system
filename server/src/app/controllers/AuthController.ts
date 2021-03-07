import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import * as Yup from 'yup';
import User from '../models/User';
import mailer from '../services/mailer';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ email });

    if (!user) {
      return res.sendStatus(401);
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.sendStatus(401);
    }

    const token = await jwt.sign(
      { id: user.id, name: user.name, isConfirmed: user.isConfirmed },
      String(process.env.JWT_SECRET),
      { expiresIn: '7d' },
    );

    return res.json({
      id: user.id,
      email,
      token,
    });
  }

  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;

    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOne({ email });

      if (!user) {
        return res.status(400).send({ error: 'User not found' });
      }

      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);

      await userRepository.update(
        { email },
        { passwordResetToken: token, passwordResetExpires: now },
      );

      mailer.sendMail(
        {
          to: email,
          from: 'enzocsantos18@gmail.com',
          html: `<p>Para trocar sua senha <a href="http://localhost:3000/auth/reset?token=${token}">Clique aqui</a></p>`,
        },
        err => {
          return res
            .status(400)
            .send({ error: 'Cannot send password reset email' });
        },
      );

      return res.send();
    } catch (e) {
      return res
        .status(400)
        .send({ error: 'Error on forgot password, try again' });
    }
  }

  async resetPassword(req: Request, res: Response) {
    const { email, token, password } = req.body;

    const userSchema = Yup.object().shape({
      email: Yup.string().required('Email is required').email(),
      password: Yup.string().required('Password is required').min(8).max(16),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required(),
    });

    try {
      await userSchema.validate(req.body);
    } catch (e) {
      return res.json(e);
    }

    const repository = getRepository(User);
    try {
      const user = await repository.findOneOrFail(
        { email },
        { select: ['passwordResetExpires', 'passwordResetToken'] },
      );

      if (!user) {
        return res.status(400).send({ error: 'User not found' });
      }

      if (token !== user.passwordResetToken)
        return res.status(400).send({ error: 'Invalid token' });

      const now = new Date();

      if (now > user.passwordResetExpires)
        return res
          .status(400)
          .send({ error: 'Token expired, generate a new one' });

      const newPassword = await bcrypt.hash(password, 8);

      await repository.update(
        { email },
        {
          password: newPassword,
          isConfirmed: true,
          passwordResetExpires: undefined,
          passwordResetToken: undefined,
        },
      );

      return res.send();
    } catch (err) {
      return res
        .status(400)
        .send({ error: 'Error on password reset, try again' });
    }
  }
}

export default new AuthController();
