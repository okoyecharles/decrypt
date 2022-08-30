import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Ticker.css';
import { MdArrowForwardIos } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { currencyFormatter } from '../utils/index';
import { setDetails } from '../redux/actions';

function Ticker({
  id, symbol, price, change,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showDetails = () => {
    dispatch(setDetails(id));
    navigate('/details');
  };

  return (
    <li className="ticker">
      <h3 className="ticker__symbol">{symbol}</h3>
      <div className="ticker__price">{currencyFormatter.format(price)}</div>
      <div
        className="ticker__change"
        style={parseFloat(change) > 0 ? { background: 'lightgreen' } : { background: '#ef340a98' }}
      >
        {`${change}%`}
      </div>
      <MdArrowForwardIos className="ticker__details" onClick={showDetails} />
    </li>
  );
}

Ticker.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
};

export default Ticker;
