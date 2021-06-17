import React, { useState } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { cityData } from '../cityData';

const TourList = () => {

  const [cityTour, setCityTour] = useState(cityData);

  return (    
    <section className="tourlist">
      <Tour />
    </section>
  )
}

export default TourList;