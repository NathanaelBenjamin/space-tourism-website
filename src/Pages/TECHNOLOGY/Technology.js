import React, { useState } from 'react';
import "../../styles.scss";
import Navbar from "../Components/Navbar";
import technologies from './technologyData';

const Technology = () => {

  const {launchVehicle, spaceCapsule, spacePort} = technologies;

  const [data, setData] = useState(launchVehicle);

  return (
    <div className='container technology'>
      <Navbar active={'technology'}/>
      
      <div className="technology-info">
        <div className="technology-info_header">
          <span className="technology-info_header_number">
              03
          </span>
          <h5>SPACE LAUNCH 101</h5>
        </div>

        <div className="technology-info_devices">
          <div className="technology-info_devices_number">
            <div className= {data.id === 1 ? "circle circle-active" :  "circle one"}
              onClick={() => {
                setData(launchVehicle);
              }}
            >
              <h4>1</h4>
            </div>

            <div className={data.id === 2 ? "circle circle-active two" :  "circle two"}
            onClick={() => {
                setData(spacePort);
              }}
            >
              <h4>2</h4>
            </div>

            <div className={data.id === 3 ? "circle circle-active three" :  "circle three"}
            onClick={() => {
                setData(spaceCapsule);
              }}
            >
              <h4>3</h4>
            </div>
          </div>

          <div className="technology-info_devices_description">
            <h6>THE TERMINOLOGY…</h6>
            <h3>{data.name}</h3>
            <p>
            {data.description}
            </p>
          </div>        

          <div className="technology-info_devices_image">
            <img src={data.image} alt="" />
          </div>

          
        </div>
      </div>

    </div>
  )
}

export default Technology;