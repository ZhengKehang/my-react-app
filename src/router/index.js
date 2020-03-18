import React from 'react'
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";
import Home from '../view/home/home'
import Mine from '../view/mine/mine'
import Shop from '../view/shop/shop'
export const RouterConfig = ()=>{
    return (
        <Router>
            <Switch>
                <Home path="/">
                    <Route path="/shop" component={Shop}/>
                    <Route path="/mine" component={Mine}/>
                </Home>
                <Home path="/home"></Home>
            </Switch>
            <Redirect from="/" to="/shop" />
        </Router>
    )
};
