import React from 'react';
import './Tour.scss';

const Tour = ({ city, removeTour }) => {
  return (
    <article className="tour">
      <div className="img-container">
        <img src={city.img}/>
        
        <div className="tour-info">
          <div>
            <h3 className="city-name">{city.name}</h3>
            <span className="close-btn" onClick={() => {removeTour(city.id)}}>
              <i className="fas fa-window-close" />
            </span>
          </div>
          <div>
            <h4>Province: {city.province}</h4>
            <h5>Population: {city.population}</h5>
            <h5>Area: {city.area}</h5>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour;