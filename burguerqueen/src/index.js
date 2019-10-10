import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
, document.getElementById('root'));

serviceWorker.register();
