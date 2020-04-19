import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <div style={{"backgroundColor": "#343a40", 'padding': '10px', 'color': '#e8e8e8', 'fontSize': '1.2rem', 'marginBottom': '10px'}}>
                Appointment and Reminder Management
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps, { 
})(Header);
