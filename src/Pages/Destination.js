import React from 'react';
import "./styles.scss";
import Navbar from './Components/Navbar';

const Destination = () => {
  return (
    <div className="container">
      <Navbar active={'destination'}/>
      Destination
    </div>
  )
}

export default Destination;