import React, {useEffect,useState} from "react"
import Cards from "../card/card"
import "./movieList.css"
import { Link } from "react-router-dom"

const MovieList = ({type}) => {
    
    const [movieList, setMovieList] = useState([])


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "now_playing"}?api_key=7407d55e14c441efa2f8194397789423&language=en-US&page=1`).then(res=>res.json()).then(data=>setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{type.replace("_"," ").toUpperCase()}
            <Link to={`/movies/${type}`} className="list_all" style={{textDecoration:"none", color:"white", fontSize:"smaller", marginTop:"auto"}}>see all</Link>
            </h2>
            
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList