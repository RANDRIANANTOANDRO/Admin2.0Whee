import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import EditUser from './edit/EditUser'
import EditEvent from '../pages/EditEvent'
import Products from '../pages/ListEvent'



const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/edit/:idUser' component = {EditUser}/>
            <Route path='/editEvent' component = {EditEvent}/>
            <Route path='/products' component = {Products}/>
            

        </Switch>
    )
}

export default Routes
