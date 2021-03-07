import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
}

export default new AuthController();
