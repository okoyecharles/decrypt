import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickers } from '../redux/actions';
import Ticker from './Ticker';
import Loading from './Loading';
import '../styles/Tickers.css';

function Tickers() {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers);
  const [tickersLoaded, setTickersLoaded] = useState(false);

  useEffect(() => {
    if (tickersLoaded) return;
    dispatch(fetchTickers());
    setTickersLoaded(true);
  }, []);

  return (
    <div className="tickers">
      {!tickers.length && (<Loading className="tickers__loading" />)}
      <div className="tickers__container">
        <ul className="tickers__grid">
          {tickers?.map((ticker) => (
            <Ticker
              key={ticker.rank}
              id={ticker.id}
              symbol={ticker.symbol}
              price={ticker.price_usd}
              change={ticker.percent_change_24h}
            />
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Tickers;
