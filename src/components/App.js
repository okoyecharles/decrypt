import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMarkets from '../redux/actions';

function App() {
  const dispatch = useDispatch();
  const markets = useSelector((state) => state.markets);
  const [marketLoaded, setMarketLoaded] = useState(0);
  console.log('Markets >>>', markets);

  useEffect(() => {
    if (!marketLoaded) {
      dispatch(fetchMarkets());
      setMarketLoaded(1);
    }
  }, []);

  return (
    <div className="App">
      This will Be The Decrypt App.
    </div>
  );
}

export default App;
