import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayloadInterface {
  id: string;
  name: string;
  isConfirmed: string;
  iat: number;
  exp: number;
}

function authMiddlware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, 'JSONWEBTOKEN');

    const { id } = data as TokenPayloadInterface;
    req.userId = id;
  } catch {
    return res.sendStatus(401);
  }

  return next();
}

export default authMiddlware;
