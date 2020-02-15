import React from "react"
import ReactDOM from "react-dom"
import {TrackWrapper} from '../styled-components/TrackWrapper'
import {Link} from "react-router-dom"
import Title from '../bootstrap-components/Title'

const Recommended  = ({album_art,album,artist,name,id}) =>{
    return(
        <div className="row">
            <h5> <Title title=" top list recommendations"/></h5>
            <TrackWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-4">
                <Link to={{pathname: `/lyrics/${id}`,
                        state: {trackID: id, trackName:name}}}>
            <div className="track-card">
                <div className="track-container p-0">
                        <img src={album_art==="https://cdn.ksoft.si/images/Logo1024%20-%20W.png"
                        ? "https://i.dlpng.com/static/png/6331252_preview.png" 
                        : album_art } style={{width:'100%', height:'100%'}} alt="single-track-image" className="card-img-top"/>
                </div>
                <div className="card-footer">
                    <h2 className="align-self-center "> <b>{name}</b></h2>
                    <h4>{artist}</h4>
                    <h4>{album}</h4>
                </div>
            </div>
            </Link>
        </TrackWrapper>
        </div>
       

    )   
}
export default Recommended