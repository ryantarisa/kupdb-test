import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import logo from "./KupDB.png"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header_icon" src={logo}/></Link>
                {/* <Link to="/movies/now_playing" style={{textDecoration: "none"}}><span>Now Playing</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link> */}
            </div>
        </div>
    )
}

export default Header