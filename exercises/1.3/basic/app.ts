import express from "express";


import filmsRouter from "./routes/films";
import {requestCounterMiddleware} from "./utils/counter";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let requestCount = 0;
app.use((req,_res,next) => {
    if (req.method === "GET") {
        requestCount++;
        console.log('GET COUNTER : ${requestCount}')
    }
    next();
});

app.use(requestCounterMiddleware);

app.use("/films", filmsRouter);

export default app;
