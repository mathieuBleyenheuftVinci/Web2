interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieContext {
  movies: Movie[];
  onMovieAdded: (newMovie: NewMovie) => void;
  onMovieDeleted: (id: number) => void;
}

type NewMovie = Omit<Movie, "id">;

export type { Movie, MovieContext, NewMovie };
