import { Router } from "express";
import {Film} from "../types";

const router = Router();

const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160, // en millions
      description: "Un film qui explore les rêves et la réalité.",
      imageURL: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "Interstellar",
      director: "Christopher Nolan",
      duration: 169,
      budget: 165, // en millions
      description: "Un voyage épique à travers l'espace et le temps.",
      imageURL: "https://example.com/interstellar.jpg"
    },
    {
      id: 3,
      title: "The Matrix",
      director: "The Wachowskis",
      duration: 136,
      budget: 63, // en millions
      description: "Un hacker découvre la réalité simulée du monde.",
      imageURL: "https://example.com/matrix.jpg"
    }
  ];

  router.get("/", (_req, res) => {
    res.json(defaultFilms);
  });

export default router;