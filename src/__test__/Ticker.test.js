import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import renderer from "react-test-renderer";
import Ticker from "../components/Ticker";
import store from "../redux/configureStore";

it("<Ticker /> renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
            <Ticker id="80" symbol="BTC" price="20309.00" change="0.25" />
        </MemoryRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
