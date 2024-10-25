import "./Movie.css"

interface MovieProps {
    title : string;
    director: string;
    description: string;
}

const Movie = ({title, director, description}:MovieProps) => {
    return(
        <div>
            <p>{title}</p>
            <p>{director}</p>
            <p>{description}</p>
        </div>
    )
}

export default Movie;