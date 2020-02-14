import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import SearchBar from '../bootstrap-components/SearchBar'
import TrackComponent from "../components/TrackComponent"
import Search from "../composed-pages/Search"

const CORS ="https://cors-anywhere.herokuapp.com/"
const TOKEN=process.env.REACT_APP_API_KEY
class TrackList extends React.Component{
   
    constructor(){
        super()
        this.state={
            trackList:[]
        }
        this.getSearch = this.getSearch.bind(this)
    }

    async getSearch(event){
        console.log(TOKEN)
        event.preventDefault()
        const trackName = event.target.searchBar.value
        const request = await fetch(`${CORS}https://api.ksoft.si/lyrics/search?q=${trackName}`,
        {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + `${TOKEN}`
            },
        });
        const result = await request.json()
        console.log(result)

        this.setState({
            trackList: result.data
        })
    }

    render(){
        return(
            <div className="app">
                <Search />
                <SearchBar getSearch={this.getSearch}/>
               
                    {this.state.trackList.map(track => (
                         <TrackComponent 
                         key ={track.id}
                         album_art= {track.album_art}
                         album={track.album}
                         artist={track.artist}
                         name ={track.name}/>
                            // <h1>{track.artist}</h1>
                    ))}
                   
                
              
            </div>
        )
    }
}
export default TrackList