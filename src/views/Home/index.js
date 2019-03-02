import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import React, { Component } from 'react';
import './index.less';
import Footer from '../../components/Footer';
import Index from './Index/index';
import Cart from './Cart';
import Center from './Center';
import Classify from './Classify';
import Find from './Find';
class Home extends Component{
  render () {
      return (
        <div className='home'>
        <HashRouter>
          <Switch>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/center" component={Center}></Route>
            <Route path="/classify" component={Classify}></Route>
            <Route path="/find" component={Find}></Route>
            < Route exact path="/" render={() => <Redirect to="/index" />} />
            <Route path="/" component={Index}></Route>
          </Switch>
        </HashRouter> 
          <Footer></Footer>

        </div>
      )
  }
}

export default Home;