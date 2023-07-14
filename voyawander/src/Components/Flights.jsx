import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import "../Styles/Flights.modulo.css";
const Flights = () => {
  return (
    <div id='flights'>
      <div id='text'>
        <Heading>Best and comfortable flights experience</Heading>
        <text>
          From the moment you step on board, our dedicated team is committed to
          providing a smooth and unforgettable experience, ensuring your flight
          is nothing short of extraordinary.
        </text>
      </div>
      <div className='flightContainer'>
        <div class='flightCard'>
          <img
            src='https://cdn.britannica.com/69/155469-131-14083F59/airplane-flight.jpg'
            alt=''
          />
        </div>
        <div class='flightCard'>
          <img
            src='https://ratedrecruitment.co.uk/uploads/blog/cabin-crew.jpg'
            alt=''
          />
        </div>
        <div class='flightCard'>
          <img
            src='https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/6/2020/03/03103927/Travel-photo-tiny.webp'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Flights;
