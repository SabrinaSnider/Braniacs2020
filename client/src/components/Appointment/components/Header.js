import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="/#">Appointment and Reminder Management</a>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps, { 
})(Header);
