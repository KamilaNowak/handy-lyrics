import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from '../App'
import TrackComponent from '../components/TrackComponent'
import Search from "../composed-pages/Search"
function Router(){

return (
    <BrowserRouter>
        <Switch>
            <Route to="/" component={App} exact/>
            <Route to="/lyrics/:id" component={TrackComponent}/>
        </Switch>
    </BrowserRouter>
)
}
export default Router