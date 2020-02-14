import {BrowserRouter, Switch, Route} from "react-router-dom"
import React from "react"
import App from '../App'
import TrackComponent from '../components/TrackComponent'
import Navbar from "../bootstrap-components/Navbar"
import Search from "../composed-pages/Search"
import About from '../composed-pages/About'
const Router = () => (
    <BrowserRouter>
        <Navbar /> 
        <Switch>
            <Route to="/" component={About} exact/>
            <Route to="/about" component={App}/>
            {/* <Route to="/lyrics/:id" component={TrackComponent}/> */}
        </Switch>
    </BrowserRouter>
)
export default Router