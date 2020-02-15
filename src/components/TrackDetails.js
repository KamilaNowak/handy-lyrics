import React from "react"
import ReactDOM from "react-dom"
import { ThemeConsumer } from "styled-components"
import DetailsInfo from '../components/DetailsInfo'
const CORS ="https://cors-anywhere.herokuapp.com/"
const TOKEN = process.env.REACT_APP_API_KEY
const SITE="https://api.ksoft.si/lyrics/search?q="

class TrackDetails extends React.Component{

    constructor(){
        super()
        this.state={
            tracks: [],
            finalTrack: []
        }
        
    }
    componentDidMount= async () =>{
        const trackID = this.props.location.state.trackID
        const trackName= this.props.location.state.trackName

        console.log(trackID + " "+ trackName)

        const req = await fetch(`${CORS}${SITE}${trackName}`,
        {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + `${TOKEN}`
            },
        });
    
        const trackList = await req.json()
    
        trackList.data.forEach(element => {
            if(element.id === trackID) {
               this.setState( {
                   finalTrack: element
               })
            }
        });
        
    }
        
    render(){
        return(
            <div>
                <DetailsInfo key={this.state.finalTrack.id}
                            artist={this.state.finalTrack.artist}
                            album={this.state.finalTrack.album}
                            album_year={this.state.finalTrack.album}
                            name={this.state.finalTrack.name}
                            lyrics={this.state.finalTrack.lyrics}
                            album_art={this.state.finalTrack.album_art}/>
            </div>
        )
    }
}
export default TrackDetails