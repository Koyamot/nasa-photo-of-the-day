import React from 'react'



const APODCard = props => {
    return (
        <div className="picOTD-card" key="key">
          <img className="apod-image" alt="picture of the day" src={props.photo} />
          <p>{props.explanation}</p>
        </div>
      );
}




export default APODCard;