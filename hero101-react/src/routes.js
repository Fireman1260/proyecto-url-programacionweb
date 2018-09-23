//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home'

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/Create" component={Create} />
            <Route exact path="/Edit" component={Edit} />
            <Route exact path="/" component={Home} />
        </Switch>
    </App>

export default AppRoutes;