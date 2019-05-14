import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'

import Home from './screens/home';
import Restaurants from './screens/restaurants';
import ShowRestaurant from './screens/show_restaurant';
import history from './history';
import CreateOrder from "./screens/create_order";

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/restaurants' component={Restaurants}/>
            <Route exact path='/restaurants/:id' component={ShowRestaurant}/>
            <Route exact path='/orders/new' component={CreateOrder}/>
        </Switch>
    </Router>
)

export default Routes;