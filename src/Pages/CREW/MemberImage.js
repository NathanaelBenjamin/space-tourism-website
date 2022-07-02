import React from 'react';

const MemberImage = ({name, position, description, image}) => {
  return (
    <div className='crew-member_description'>
        <div className="crew-member_description_text">
            <h4>{position}</h4>
            <h3>{name}</h3>
            <p>
                {description}
            </p>
        </div>

        <div className="crew-member_description_image">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default MemberImage;