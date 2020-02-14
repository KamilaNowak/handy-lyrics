import React from "react"
import ReactDOM from "react-dom"
import {Link} from 'react-router-dom'
import { render } from "@testing-library/react"
import {TrackWrapper} from '../styled-components/TrackWrapper'

const TrackComponent = ({album_art,album,artist,name}) =>{
        return(
            <div>
                <TrackWrapper className="col-3 mx-auto col-md-6 col-lg-3 my-4">
                <div className="track-card">
                    <div className="track-container p-5">
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
            </TrackWrapper>
            </div>
           

        )   
}
export default TrackComponent