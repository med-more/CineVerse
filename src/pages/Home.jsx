import { useRef } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";
import defaultPoster from "../assets/images/fastx.jpeg";

export default function Home() {
  const trendingRef = useRef(null);

  const handleExplore = () => {
    if (trendingRef.current) {
      trendingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <p className="hero-kicker">Nouveautés en avant-première</p>
          <h1>Choisissez vos meilleurs films et explorez CineVerse</h1>
          <p className="hero-description">
            Sam Worthington, Zoe Saldana et toute l&apos;équipe vous transportent dans des mondes incroyables.
            Plongez dans des histoires épiques et découvrez de nouvelles émotions.
          </p>

          <div className="hero-actions">
            <button type="button" className="btn-explore" onClick={handleExplore}>
              Explorer
            </button>
          </div>
        </div>
      </section>

      <section className="trending" ref={trendingRef}>
        <div className="trending-header">
          <div>
            <p className="section-label">Trending</p>
            <h2>Films populaires</h2>
          </div>
        </div>

        <div className="movies-grid">
          {movies.map((movie) => {
            const rating = movie.rating ?? "8.0";
            const duration = movie.duration ?? "2h 05";
            const posterSrc = movie.image || defaultPoster;

            return (
              <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
                <div className="movie-thumb">
                  <img src={posterSrc} alt={movie.title} />
                  <span className="movie-rating">{rating}</span>
                  <span className="movie-duration">{duration}</span>
                  <span className="play-btn">▶</span>
                </div>

                <div className="movie-info">
                  <div className="movie-top">
                    <h3>{movie.title}</h3>
                    <span className="movie-year">{movie.year}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
