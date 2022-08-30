import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchDetails } from '../redux/actions';
import Loading from './Loading';

function Details() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.details);
  const [detailsLoaded, setDetailsLoaded] = useState(false);

  useEffect(() => {
    if (!details.nav_active) navigate('/', { replace: true });
  });

  useEffect(() => {
    if (detailsLoaded) return;
    dispatch(fetchDetails(details.ticker_id));
    setDetailsLoaded(true);
  }, []);

  return (
    <div className="details">
      <div className="details__container">
        Details Go Here.
      </div>
      <Loading />
    </div>
  );
}

export default Details;
