import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/styles.scss';
import * as serviceWorker from './serviceWorker';

// React MDB imports
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
