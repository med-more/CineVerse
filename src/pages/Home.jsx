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
    <div></div>
  )
}

export default Home