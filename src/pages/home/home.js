import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList.js";

const Home = () => {

    const [ nowPlaying, setNowPlaying ] = useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7407d55e14c441efa2f8194397789423&language=en-US&page=1").then(res=>res.json()).then(data=>setNowPlaying(data.results))
    }, [])
    return (
        <>
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                {
                        nowPlaying.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
            </Carousel>
            <MovieList type={"now_playing"}/>
            <MovieList type={"upcoming"}/>
            <MovieList type={"popular"}/>
            <MovieList type={"top_rated"}/>
        </div>
        </>
    )
}

export default Home