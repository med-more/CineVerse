import { useParams, Link } from "react-router-dom"
import { movies } from "../data/movies"
import poster from "../assets/images/fastx.jpeg"

const FALLBACK_TAGS = ["action", "Adventure"];
const MovieDetails = () => {
    const { id } = useParams();
    const movie = movies.find((m) =>m.id === Number(id));
    if(!movie) return <h2>Film non trouve</h2>

    const tags = movie.tags && movie.tags.length ? movie.tags : FALLBACK_TAGS;
    const rating = movie.rating ?? "8.0";
    const duration = movie.duration ?? "2h 05";
  return (
    <></>
  )
}

export default MovieDetails