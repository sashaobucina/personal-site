import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Stylesheet imports
import './styles/styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();
