import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ElectricCars from '../pages/ElectricCars'
import Suitibility from '../pages/Suitibility'
import Mybooking from '../pages/Mybooking'
import NavbarCom from '../component/NavbarCom';
import {Provider } from "react-redux";
import carstore from '../store/CarDetailsStore'
const Home = () => {
    return (
        <Provider store = {carstore}>
            <BrowserRouter>
                <NavbarCom />
                <Switch>
                    <Route exact path="/" component={ElectricCars} />
                    <Route exact path="/suitabilitytool" component={Suitibility} />
                    <Route exact path="/mybooking" component={Mybooking} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Home;
