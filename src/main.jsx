//Router
import ReactDOM from 'react-dom';
import App from './App';

//Style
import './assets/main.scss';

import {Store } from './Reducers/Store';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
export default(Store);
  
  
 

