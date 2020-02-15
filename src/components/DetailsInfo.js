import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import Title from '../bootstrap-components/Title'

const DetailsInfo = ({artist, album, album_year, name, lyrics,album_art}) =>{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4">
                <h2>{name}</h2>
                <h3>{artist}</h3>
    

                    <img className="img-fluid" className="rounded" 
                    src={album_art==="https://cdn.ksoft.si/images/Logo1024%20-%20W.png"
                    ? "https://i.dlpng.com/static/png/6331252_preview.png" 
                    : album_art } style={{width:'250px', height:'250px'}}/>
                 <br/>
                 <h4>{album}</h4>
                <h5>{album_year}</h5>
               
                </div>
                <div className="col-sm-8 mb-4">
                    <span className="lyrics-text">{lyrics}</span>
                </div>
            </div>
        </div>
    )
}
export default DetailsInfo