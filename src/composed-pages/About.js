import React from "react"
import ReactDOM from "react-dom"

class  About extends React.Component{
   render(){
    return (
        <div>
            <div className="row">
                <div className="col-10 mx-auto my-3  text-center text-title p-4">
                     <h4 className="text-capitalize">
                        Application is developed by Kamila Nowak.
                     </h4>
                  <div className="">
                   <a href= "https://github.com/KamilaNowak"><img 
                    src="https://cdn0.iconfinder.com/data/icons/social-line-transparent/50/Github-line-transparent-512.png"
                    style={{width:"70px", height:"70px",padding:"8px"}}/></a>
                      <a href= "https://www.linkedin.com/in/kamila-nowak-7b267816b/"><img 
                    src="https://cdn0.iconfinder.com/data/icons/social-line-transparent/46/LinkedIn-line-transparent-512.png"
                    style={{width:"70px", height:"70px",padding:"8px"}}/></a>
            
                    <a href= "https://trello.com/kamilanowak14/activity"><img 
                    src="https://cdn0.iconfinder.com/data/icons/social-line-transparent/50/Trello-line-transparent-512.png"
                    style={{width:"70px", height:"70px",padding:"8px"}}/></a>
                   </div>
                    <br/>
                   <p> All data is provided & powered by KSOFT.API <a  href="https://api.ksoft.si/"><img src="https://cdn.ksoft.si/images/Logo1024-B&W.png"
                    style={{width:"40px"}}/></a></p>
                    
                </div>
            </div>
        </div>
    )
   }
}

export default About
