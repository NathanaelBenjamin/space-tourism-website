import React from 'react';
import "../../styles.scss";
import Navbar from "../Components/Navbar";
import MemberImage from './MemberImage';
import members from './crewMembers';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Crew = () => {
  return (
    <div className='container crew'>
      <Navbar active={'crew'} />

      <div className="crew-member">
        <div className="crew-member_header">
            <span className="crew-member_header_number">
              02
            </span>
            <h5>MEET YOUR CREW</h5>
        </div>

        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} centerMode={false} interval={5000} swipeable={false}>
          {
            members.map(person => {
              return <MemberImage 
                name={person.name}
                position={person.position}
                description={person.description}
                image={person.image}
              />
            })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Crew;