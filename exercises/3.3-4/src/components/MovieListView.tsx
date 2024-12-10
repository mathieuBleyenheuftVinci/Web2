import MovieCard from "./MovieCard";
import { Movie } from "../types";
import "./MovieListView.css";

interface MovieListViewProps {
  movies: Movie[];
}

const MovieListView = ({ movies, onMovieDeleted }: MovieListViewProps & { onMovieDeleted: (id: number) => void }) => {
  return (
    <div >
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} onMovieDeleted={onMovieDeleted} />
        ))}
      </ul>
    </div>
  );
};

export default MovieListView;
