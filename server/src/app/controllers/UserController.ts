import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import User from '../models/User';

interface UserInterface {
  name: string;
  email: string;
  password: string;
  isConfirmed: boolean;
}

class UserController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userSchema = Yup.object().shape({
      name: Yup.string().required(),
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

    const UserRepository = getRepository(User);

    const userExists = await UserRepository.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = UserRepository.create({
      name,
      email,
      password,
      isConfirmed: false,
    } as UserInterface);

    await UserRepository.save(user);

    return res.json({
      id: user.id,
      email: user.email,
    });
  }
}

export default new UserController();
