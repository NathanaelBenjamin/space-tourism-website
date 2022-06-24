import React from 'react';
import "./styles.scss";
import Navbar from './Components/Navbar';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='container'>
      <Navbar active={'home'}/>

      <div className="hero-section">
        <div className="hero-text">
          <div className="hero-text__headings">
            <h5>SO YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind  of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!  
            </p>
          </div>
        </div>

        <Link to="/destination">
          <div className="explore-circle">
            <h4>EXPLORE</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home;