import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Nav from '../components/Nav';

it('<Nav /> renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Nav />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
