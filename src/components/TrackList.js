import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import SearchBar from '../bootstrap-components/SearchBar'
import TrackComponent from "../components/TrackComponent"
import Search from "../composed-pages/Search"

const CORS ="https://cors-anywhere.herokuapp.com/"
class TrackList extends React.Component{
    //https://api.ksoft.si/lyrics/search?q=better%20now
    constructor(){
        super()
        this.state={
            trackList:[]
        }
    }

    async getSearch(event){
        event.preventDefault()
        console.log(event)
        const trackName = event.target.searchBar.value
        const request = await fetch(`${CORS}https://api.ksoft.si/lyrics/search?q=${trackName}`)
        const result = await request.json()
        console.log(result)
        this.setState(() => {
            return {
                trackList: result.data
            }
        })
    }

    render(){
        return (
            <div className="app">
                <Search />
                <SearchBar getSearch={this.getSearch}/>
                {/* <TrackComponent track={this.state.trackList}/> */}
            </div>
        )
    }
}
export default TrackList