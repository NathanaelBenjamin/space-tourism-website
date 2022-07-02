import React, { useState } from 'react';
import "../../styles.scss";
import Navbar from "../Components/Navbar";
import destinations from "./destinationData";

const { moon, mars, europa, titans } = destinations; 

const Destination = () => {

  const [destination, setDestination] = useState(moon);

  return (
    <div className='dark-bg container'>
      <Navbar active={'destination'}/>
      
      <div className="destination">
        <div className="image">
          <div className='image_header'>
            <span className="image_header_number">01</span>
            <h5>PICK YOUR DESTINATION</h5>
          </div>

          <div className="image_image">
            <img src={destination.image}  alt="" />
          </div>
        </div>

        <div className="destination_text">
          <div className="destination_text-links">
            <button className={destination === moon ? "active destination-btn" : "destination-btn"}
              onClick={() => {
                setDestination(moon);
              }}
            >
              <span className="link-name">MOON</span>
            </button>

            <button className={destination === mars ? "active destination-btn" : "destination-btn"}
              onClick={() => {
                setDestination(mars);
              }}
            >
              <span className="link-name">MARS</span>
            </button>

            <button className={destination === europa ? "active destination-btn" : "destination-btn"}
              onClick={() => {
                setDestination(europa);
              }}
            >
              <span className="link">EUROPA</span>
            </button>

            <button className={destination === titans ? "active destination-btn" : "destination-btn"}
              onClick={() => {
                setDestination(titans);
              }}
            >
              <span className="link-name">TITANS</span>
            </button>
          </div>

          <div className="destination-name">
            <h2>{destination.place}</h2>
          </div>

          <div className="destination-details">
            <p>{destination.description}</p>
          </div>

          <div className="destination-subheadings">
            <div className="distance">
              <h6>AVERAGE DISTANCE</h6>
              <h5>{destination.averageDistance}</h5>
            </div>

            <div className="travel-time">
              <h6>EST. TRAVEL TIME</h6>
              <h5>{destination.estimatedTimeTravel}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination;