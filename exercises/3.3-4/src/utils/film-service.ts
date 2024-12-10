import {Movie, NewMovie} from "../types";

const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const response = await fetch("/api/films");
        if(!response.ok){
            throw new Error("Failed to fetch movies" + response.statusText);
        }
        const data = await response.json();
        if(!data || !Array.isArray(data)){
            throw new Error("Failed to parse movies");
        }
        return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const addMovie = async (newMovie: NewMovie): Promise<Movie> => {
        try {
            const response = await fetch("/api/films", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newMovie),
            });
            if(!response.ok){
                throw new Error("Failed to add movie" + response.statusText);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const removeMovie = async (id: number): Promise<void> => {
        try{
            const response = await fetch(`/api/films/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id}),  
            });
            if(!response.ok){
                throw new Error("Failed to remove movie" + response.statusText);
            }
            const data = await response.json();
            return data;
        }catch(error) {
            console.error(error);
            throw error;
        }
    };

    export {fetchMovies, addMovie, removeMovie};
