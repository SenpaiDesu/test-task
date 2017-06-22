import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/store';
import Layout from './components/layout.component';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store= { store }>
        <Layout />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
