import React, { useState } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { cityData } from '../cityData';

const TourList = () => {

  const [cityTour, setCityTour] = useState(cityData);

  return (    
    <section className="tourlist">
      {
        cityTour.map((cityItem) => {
          return <Tour key={cityItem.id} city={cityItem} />
        })
      }
    </section>
  )
}

export default TourList;