import React from "react"
import ReactDOM from "react-dom"
import {Link} from 'react-router-dom'
import { render } from "@testing-library/react"
import TrackWrapper from '../styled-components/TrackWrapper'

const TrackComponent = (props) =>{
        return(
            <TrackWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-4">
                <div className="track-card">
                    <div className="track-container p-5">
                        <img src={props.track.album_art} alt="single-track-album" className="card-img-top"/>
                    </div>
                    <div className="card-footer">
                        <h2 className="align-self-center "> {props.track.name}</h2>
                        <h4>{props.track.artist}</h4>
                        <h4>{props.track.album}</h4>
                    </div>
                </div>
            </TrackWrapper>

        )   
}
export default TrackComponent