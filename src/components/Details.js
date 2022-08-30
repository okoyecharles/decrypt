import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchDetails } from '../redux/actions';
import Loading from './Loading';
import { currencyFormatter, numberFormat } from '../utils/index';
import '../styles/Details.css';

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
      {!details.tickerInfo && <Loading />}
      {details.tickerInfo && details.markets && details.socials && (
        <div className="details__container">
          <section className="details__namePrice">
            <h2 className="details__name">{`${details.tickerInfo.name} (${details.tickerInfo.symbol})`}</h2>
            <div className="details__price">
              {currencyFormatter.format(details.tickerInfo.price_usd)}
            </div>
          </section>

          <section className="details__info">
            <h3>More Info</h3>
            <div className="details__infoItem">
              <span>Market Rank: </span>
              <span>{numberFormat(details.tickerInfo.rank)}</span>
            </div>
            <div className="details__infoItem">
              <span>Percent Change(24h): </span>
              <span>{details.tickerInfo.percent_change_24h}</span>
            </div>
            <div className="details__infoItem">
              <span>Current Supply: </span>
              <span>
                {currencyFormatter.format(details.tickerInfo.csupply)}
              </span>
            </div>
            <div className="details__infoItem">
              <span>Market supply: </span>
              <span>
                {currencyFormatter.format(details.tickerInfo.msupply)}
              </span>
            </div>
            <div className="details__infoItem">
              <span>Market Cap: </span>
              <span>
                {currencyFormatter.format(details.tickerInfo.market_cap_usd)}
              </span>
            </div>
          </section>
          <section className="details__info">
            <h3>Top Markets</h3>
            {details.markets.slice(0, 5).map((market) => (
              <div
                className="details__infoItem"
                key={`${market.quote}${market.name}`}
              >
                <span>{`${market.name}: `}</span>
                <span>{market.quote}</span>
              </div>
            ))}
          </section>

          <section className="details__info">
            <h3>Socials</h3>
            <div className="details__infoItem">
              <span>Reddit Subscribers: </span>
              <span>
                {details.socials.reddit.subscribers
                  ? numberFormat(details.socials.reddit.subscribers)
                  : 'none'}
              </span>
            </div>
            <div className="details__infoItem">
              <span>Twitter Followers: </span>
              <span>
                {details.socials.twitter.followers_count
                  ? numberFormat(details.socials.twitter.followers_count)
                  : 'none'}
              </span>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Details;
