import React from 'react';
import './Tour.scss';

const Tour = () => {
  return (
    <article className="tour">
      <div className="img-container">
        <img src="https://images.pexels.com/photos/1046212/pexels-photo-1046212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="amsterdam-field"/>
        
        <div className="tour-info">
          <div>
            <h3 className="city-name">City name</h3>
            <span className="close-btn">
              <i className="fas fa-window-close" />
            </span>
          </div>
          <div>
            <h4>Province: Province</h4>
            <h5>Population: Population</h5>
            <h5>Area: Area</h5>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour;