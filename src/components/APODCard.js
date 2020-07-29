import React from 'react'



const APODCard = ({ picsOTD }) => {
    return (
        <div className="picOTD-card" key="key">
          <img className="apod-image" alt="picture of the day" src={picsOTD.hdurl} />
          <h2>{picsOTD.explaination}</h2>
        </div>
      );
}




export default APODCard;