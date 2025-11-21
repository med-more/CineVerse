import { useRef } from "react"
import { Link } from "react-router-dom"
import { movies } from "../data/movies"
import poster from "../assets/images/fastx.jpeg"
const Home = () => {
    const trendingRef = useRef(null);

    const handleExplore = () =>{
        if(trendingRef.current){
            trendingRef.current.scrollIntoView({behavior: "smooth"});
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
    </div>
  )
}

export default Home