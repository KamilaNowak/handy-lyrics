import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import SearchBar from '../bootstrap-components/SearchBar'
import TrackComponent from "../components/TrackComponent"
import Search from "../composed-pages/Search"
import Recommdender from './Recommended'
import Recommended from "./Recommended"
import Title from "../bootstrap-components/Title"

const CORS ="https://cors-anywhere.herokuapp.com/"
const TOKEN=process.env.REACT_APP_API_KEY
const TOP_LIST_TOKEN= process.env.REACT_APP_TOP_KEY
const URL =`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=4&apikey=`
class TrackList extends React.Component{
   
    constructor(){
        super()
        this.state={
            topTrackList:[],
            trackList:[],
            top:[],
        }
        this.getSearch = this.getSearch.bind(this)
    }

    async getSearch(event){
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

        this.setState({
            trackList: result.data,
            topTrackList: []
        })
    }

    async getRecomendations(){
        let topsFinal =[]
        for(let i=0 ;i< this.state.top.length;i++){
            let singleTrackName =this.state.top[i]
            const request = await fetch(`${CORS}https://api.ksoft.si/lyrics/search?q=${singleTrackName}`,
            {
                method: 'GET',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                    Authorization: 'Bearer ' + `${TOKEN}`
                },
            });
            const result = await request.json()
            topsFinal.push(result.data[0])
        }
       this.setState({
           topTrackList: topsFinal,
           trackList: [],
           top: []
       })
    }
    componentDidMount = async () =>{
        const request = await fetch(`${CORS}${URL}${TOP_LIST_TOKEN}`)
        const top = await request.json()
        
        var tempArr= []
        top.message.body.track_list.forEach(song => {
            tempArr.push(song.track.track_name + " " + song.track.artist_name)
        });
       
        this.setState({
            top:tempArr
        })
        this.getRecomendations()
    }

    render(){
        return(
            <div className="app">
                <Search />
                <SearchBar getSearch={this.getSearch}/>

                             {this.state.topTrackList.map(topTrack =>(
                            <Recommended 
                                key={topTrack.id}
                                album_art={topTrack.album_art}
                                album={topTrack.album}
                                artist={topTrack.artist}
                                name={topTrack.name}
                                id={topTrack.id}
                            />
                        ))}
                            {this.state.trackList.map(track => (
                                <TrackComponent 
                                key ={track.id}
                                album_art= {track.album_art}
                                album={track.album}
                                artist={track.artist}
                                name ={track.name}
                                id={track.id}
                                />
                            ))}              
            </div>
        )
    }
}
export default TrackList