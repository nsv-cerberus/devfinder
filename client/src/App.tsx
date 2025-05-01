import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Routing from './features/routing/Routing';
import { Provider } from 'react-redux';
import store from './store/store.ts';

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routing />
            </Provider>
        </BrowserRouter>
    );
}