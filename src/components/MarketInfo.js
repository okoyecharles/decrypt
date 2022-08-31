import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarketInfo } from '../redux/actions';
import { currencyFormatter, numberFormat } from '../utils';
import '../styles/MarketInfo.css';

function MarketInfo() {
  const dispatch = useDispatch();
  const marketInfo = useSelector((state) => state.marketInfo);
  const [marketInfoLoaded, setMarketInfoLoaded] = useState(false);

  useEffect(() => {
    if (marketInfoLoaded) return;
    dispatch(fetchMarketInfo());
    setMarketInfoLoaded(true);
  }, []);

  return (
    <div className="marketInfo">
      <h2 className="marketInfo__header">Decrypt Market Information</h2>
      <ul className="marketInfo__container">
        <li className="marketInfo__item">
          <h3>Coins</h3>
          <span>{marketInfo.coinsCount ? numberFormat(marketInfo.coinsCount) : 'Loading...'}</span>
        </li>
        <li className="marketInfo__item">
          <h3>Active markets</h3>
          <span>{marketInfo.marketCount ? numberFormat(marketInfo.marketCount) : 'Loading...'}</span>
        </li>
        <li className="marketInfo__item">
          <h3>Market cap</h3>
          <span>{marketInfo.marketCap ? currencyFormatter.format(marketInfo.marketCap) : 'Loading...'}</span>
        </li>
        <li className="marketInfo__item">
          <h3>Market volume</h3>
          <span>{marketInfo.marketVol ? currencyFormatter.format(marketInfo.marketVol) : 'Loading...'}</span>
        </li>
        <li className="marketInfo__item">
          <h3>Market change (avg)</h3>
          <span>{marketInfo.marketPerChange || 'Loading...'}</span>
        </li>
      </ul>
    </div>
  );
}

export default MarketInfo;
