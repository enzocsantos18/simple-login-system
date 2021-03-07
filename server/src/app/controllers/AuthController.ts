import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/User';

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
      'JSONWEBTOKEN',
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

      return res.send();
    } catch (e) {
      return res
        .status(400)
        .send({ error: 'Error on forgot password, try again' });
    }
  }
}

export default new AuthController();
