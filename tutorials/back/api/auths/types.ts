import { Request } from "express";

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

type NewDrink = Omit<Drink, "id">;

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

type PotentialUSer = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number;
  iat: number;
}

export type { Pizza, NewPizza, PizzaToUpdate, Drink, NewDrink, AuthenticatedUser, User,  PotentialUSer, AuthenticatedRequest, JwtPayload };
