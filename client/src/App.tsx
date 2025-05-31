import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routing from './features/routing/Routing';
import store from './store/store.ts';
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </BrowserRouter>
  );
}