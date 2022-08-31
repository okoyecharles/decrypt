import MarketInfo from './MarketInfo';
import Tickers from './Tickers';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <MarketInfo />
        <Tickers />
      </div>
    </div>
  );
}

export default Home;
