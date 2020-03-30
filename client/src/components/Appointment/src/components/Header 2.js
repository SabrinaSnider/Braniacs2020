import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Header extends Component {

    onLogOut = () => {
        this.props.logoutUser();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="/#">Appointment Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.error
    }
};

export default connect(mapStateToProps, { 
    logoutUser
})(Header);
