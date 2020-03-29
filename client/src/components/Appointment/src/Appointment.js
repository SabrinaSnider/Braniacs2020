import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import history from './modules/history';
import AppointmentHome from './components/AppointmentHome';
import AppointmentLogin from './components/AppointmentLogIn';

class Appointment extends Component {
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/AppointmentHome" component={AppointmentHome} />
                        <Route path="/AppointmentLogin" component={AppointmentLogin} />
                        <Redirect from="/" to="/AppointmentHome" />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default Appointment;