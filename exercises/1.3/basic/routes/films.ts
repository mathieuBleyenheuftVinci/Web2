import { Router } from "express";
import {Film, NewFilm} from "../types";

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

  router.get("/", (req, res) => {
    if (!req.query["minimum-duration"]) {
      return res.json(defaultFilms);
    }
    const minDuration = Number(req.query["minimum-duration"]);
    const filteredFilms = defaultFilms.filter((film) => {
      return film.duration >= minDuration;
    });
    return res.json(filteredFilms);
  });

  router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = defaultFilms.find((film) => film.id === id);
    if (!film) {
      return res.sendStatus(404);
    }
    return res.json(film);
  });

  router.post("/", (req,res) => {
    const body: unknown = req.body;
    if (!body ||
       typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) || 
        !("duration" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number" ||
        !body.title.trim() ||
        !body.director.trim() ||
        body.duration <= 0 ||
        ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) || 
        ("description" in body && typeof body.description !== "string") ||
        ("imageURL" in body && typeof body.imageURL !== "string")
    ) {
      return res.sendStatus(400);
    }

    const { title, director, duration, budget, description, imageURL } = body as NewFilm;

    const nextId = 
    defaultFilms.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

    const newFilm : Film = {
      id:nextId,
      title,
      director,
      duration,
      budget,
      description,
      imageURL,
    };
    
    defaultFilms.push(newFilm);
    return res.json(newFilm);

  });

  
export default router;