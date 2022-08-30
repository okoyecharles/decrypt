import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
  const details = useSelector((state) => state.details);
  console.log(details);
  return (
    <div className="details">
      <div className="details__container">
        Details Go Here.
      </div>
    </div>
  );
}

export default Details;
