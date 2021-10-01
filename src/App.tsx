import { Provider } from 'react-redux';
import { store } from 'src/store/index';
import AppRouter from './routes';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
