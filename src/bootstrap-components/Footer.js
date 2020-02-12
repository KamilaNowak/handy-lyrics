import React from 'react'
import '../App.css';
import reactDOM from 'react-dom'
import {Link} from 'react-router-dom'


class Footer extends React.Component{
    render(){
        return (
            <footer style={{marginBottom: 0}} className="py-4 bg-dark text-white-50 ">
                <div class="container text-center">
                     <small>Copyright &copy; Handy Lyrics</small>
                </div>
          </footer>
        )
    }
}
export default Footer