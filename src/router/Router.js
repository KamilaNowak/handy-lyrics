import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Link} from "react"
import React from "react"
import App from '../App'
import TrackComponent from '../components/TrackComponent'
import TrackDetails from '../components/TrackDetails'
import Navbar from "../bootstrap-components/Navbar"
import Search from "../composed-pages/Search"
import About from '../composed-pages/About'
const Router = () => (
    <BrowserRouter>
        <Navbar /> 
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/about" component={About}/>
            <Route path="/lyrics/:id" component={TrackDetails}/>
        </Switch>
    </BrowserRouter>
)
export default Router