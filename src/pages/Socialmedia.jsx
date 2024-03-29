import React from "react";
import {Link} from 'react-router-dom';
import Header from "../components/Header";
const Socialmedia = () =>{
    return(
      <div>

      <Header/>
      <center>
      <h1>You Can Contact Me At This Social Media</h1>
      </center>
      <hr></hr>
      <br></br>
      <ul className="list-inline footer-socials">
        <div className="container">
						<li className="list-inline-item"><Link to="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2"></i>Facebook</Link></li>
						<li className="list-inline-item"><Link to="https://twitter.com/themefisher"><i className="ti-twitter mr-2"></i>Twitter</Link></li>
						<li className="list-inline-item"><Link to="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 "></i>Linkedin</Link></li>
            <li className="list-inline-item"><Link to="https://www.youtube.com/themefisher/"><i className="ti-youtube mr-2 "></i>youtube</Link></li>
            </div>
          </ul>
        
      </div>
      

        )
    }
    export default Socialmedia