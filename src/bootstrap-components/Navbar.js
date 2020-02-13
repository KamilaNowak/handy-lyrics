import React from 'react'
import '../App.css';
import reactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {NavbarWrapper} from '../styled-components/NavbarWrapper'

const APP_LOGO="https://cdn2.iconfinder.com/data/icons/music-festival-11/32/music_festival-18-128.png"


class Navbar extends React.Component{
    render(){
    return (
      <div>
            <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
                <div className="row">
                    <img className="navbar-brand" src={APP_LOGO} style={{width: 60, height:60, color: 'white'}}/>
                    <h1 className="text-logo">handy lyrics</h1>
                </div>
            </Link>
            <ul className="navbar-nav align-items-center ml-4">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        search
                    </Link>
                </li>
                <li className="nav-item ml-4">
                    <Link to="/about" className="nav-link">
                        About app
                    </Link>
                </li>
            </ul>
        </NavbarWrapper>
      </div>
    )
}
}

export default Navbar