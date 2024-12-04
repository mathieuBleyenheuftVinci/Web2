import jwt from 'jsonwebtoken';
import { readOneUserFromUsername } from '../services/users';
import { NextFunction, RequestHandler, Response } from 'express';
import {AuthenticatedRequest, JwtPayload, User} from '../types';

const jwtSecret = "ilovemypizza";

const authorize = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
    const {username} = decoded;

    const existingUser = readOneUserFromUsername(username);

    if (!existingUser) {
      return res.status(401).send('Unauthorized');
    }
    req.user = existingUser;
    return next();
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }
}

const isAdmin: RequestHandler = (req: AuthenticatedRequest, res: Response, next) => {
    const {username} = req.user as User;

    if(username !== "admin") {
        return res.status(403).send('Forbidden');
    }
    return next();
}

export { authorize, isAdmin };