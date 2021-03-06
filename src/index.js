import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/common.less'
import './assets/font/icon/iconfont.css'
import {RouterConfig} from './router';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<RouterConfig/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
