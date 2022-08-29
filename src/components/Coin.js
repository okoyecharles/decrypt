import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Coin.css';

function Coin({
  id, symbol, price, change,
}) {
  return (
    <li className="coin">
      <h3 className="coin__symbol">{symbol}</h3>
      <div className="coin__price">{price}</div>
      <div className="coin__change">{change}</div>
      <small>{id}</small>
    </li>
  );
}

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
};

export default Coin;
