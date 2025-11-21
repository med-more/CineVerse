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
    <section className="details">
      <div className="details-card">
        <div className="details-media">
          <img src={poster} className="details-img" alt={movie.title} />
          <span className="badge rating-badge">{rating} IMDb</span>
          <span className="badge duration-badge">{duration}</span>
        </div>

        <div className="details-body">
          <p className="section-label">Film en vedette</p>
          <h1>{movie.title}</h1>
          <p className="details-meta">
            {movie.year} • {tags.join(" • ")}
          </p>

          <p className="details-desc">{movie.description}</p>

          <div className="details-team">
            <h3>Équipe</h3>
            <ul>
              {movie.team.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="details-actions">
            <Link to="/" className="btn-back">← Retour</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails