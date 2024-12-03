import {Router} from 'express';
import {PotentialUSer} from "../types";
import {login, register} from "../services/users";

const router = Router();

router.post("/register", (req, res) => {
    const body = req.body as { username: string; password: string };
    if (!body || typeof body !== "object" || !("username" in body) || !("password" in body) 
        || typeof body.username !== "string" || typeof body.password !== "string" 
        || !body.username.trim() || !body.password.trim()) {
        return res.status(400).send("Invalid body");
    }

    const {username, password} = body as PotentialUSer;

    const authenticatedUser = register(username, password);

    if(!authenticatedUser) {
        return res.status(409)
    }

    return res.json(authenticatedUser);
});

router.post("/login", (req, res) => {
    const body = req.body as { username: string; password: string };
    if (!body || typeof body !== "object" || !("username" in body) || !("password" in body) 
        || typeof body.username !== "string" || typeof body.password !== "string" 
        || !body.username.trim() || !body.password.trim()) {
        return res.status(400).send("Invalid body");
    }

    const {username, password} = body as PotentialUSer;

    const authenticatedUser = login(username, password);

    if(!authenticatedUser) {
        return res.status(401)
    }

    return res.json(authenticatedUser);
});

export default router;