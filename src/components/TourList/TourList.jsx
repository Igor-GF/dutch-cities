import React, { useState } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { cityData } from '../cityData';

const TourList = () => {

  const [cityTours, setCityTours] = useState(cityData);

  const removeTourHandeler = (id) => {
    const tours = [...cityTours];
    const sortedTours = tours.filter(city => city.id !== id);
    setCityTours(sortedTours);
  };
  
  return (    
    <section className="tourlist">
      {
        cityTours.map((cityItem) => {
          return <Tour key={cityItem.id} city={cityItem} removeTour={removeTourHandeler}/>
        })
      }
    </section>
  )
}

export default TourList;