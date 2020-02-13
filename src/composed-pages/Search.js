import React from "react";
import ReactDOM from "react-dom";
import '../App.css';
import Title from "../bootstrap-components/Title"
import SearchBar from "../bootstrap-components/SearchBar"

class Search extends React.Component {
   render(){
        return (
            <div>
                <Title title="Type a song name"/>
            </div>
        )
    }
}
export default Search