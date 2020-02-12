import React from "react";
import ReactDOM from "react-dom";

function SearchBar(props){
  return (
      <div className="container">
              <div className="row ">
                  <div className="col-10 mx-auto my-3 text-center">
                        <form onSubmit={props.getSearch} style={{   display: "inline-block;"}}>
                            <input className="search-input" type="text" id="search-bar" name="search-bar" size="50" reguired/>
                            <button className="btn btn-outline-dark btn-search" >Search <i class="fa fa-search"></i></button>
                       </form>
                 </div>        
             </div>
      </div>
    
  )    
}
export default SearchBar