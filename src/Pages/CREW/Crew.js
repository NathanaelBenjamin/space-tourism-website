import React from 'react';
import "../../styles.scss";
import Navbar from "../Components/Navbar";
import douglas from "../Components/douglas-hurley.png";

const Crew = () => {
  return (
    <div className='container crew'>
      <Navbar active={'crew'}/>
      <div className="crew-member">
        <div className="crew-member-text">
          <div className="crew-member_header">
            <span className="crew-member_header_number">
              02
            </span>
            <h5>MEET YOUR CREW</h5>
          </div>

          <div className="crew-member-text_description">
            <h4>COMMANDER</h4>
            <h3>DOUGLAS HURLEY</h3>
            <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>

        <div className="crew-member_image">
          <img src={douglas} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Crew;