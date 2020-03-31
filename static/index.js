import ReactDOM from 'react-dom';
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'  // react，如果不使用HashRouter，则需要在后台配置路由跳转
import Routes from '../routes/routes'
import 'antd/dist/antd.css';

  ReactDOM.render((
    <BrowserRouter>
          <Routes />
      </BrowserRouter>
  // <HashRouter>
  //   <Routes />
  //  </HashRouter>
      )

    , document.getElementById('root'));