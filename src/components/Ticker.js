import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Ticker.css';
import { MdArrowForwardIos } from 'react-icons/md';
import { currencyFormatter } from '../utils/index';

function Ticker({
  id, symbol, price, change,
}) {
  return (
    <li className="ticker">
      <h3 className="ticker__symbol">{symbol}</h3>
      <div className="ticker__price">{currencyFormatter.format(price)}</div>
      <div className="ticker__change">{change || id}</div>
      <MdArrowForwardIos className="ticker__details" />
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
