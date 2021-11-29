import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Login(){
    const {user,loginWithPopup}=useAuth0();
    
     {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Tune In</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Music for everyone</h1>
                            <p>Where words leave off, Music begins.</p>
                            <Link to={"/home"} onClick={loginWithPopup} className="btn login">
                                Login / Signup
                            </Link>
                            <Link to={"/home"}  className="btn">
                                Start Listening..
                            </Link>
                            {/* <Link to={"/"} onClick={logout} className="btn">
                                Logout / Signout
                            </Link> */}
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;