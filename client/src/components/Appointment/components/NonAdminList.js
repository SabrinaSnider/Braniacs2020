import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import {makeAdmin, fillUsers} from '../actions/AdminActions';

class NonAdminList extends Component {

    onAdminify = (nonadmin) => {
        this.props.makeAdmin(nonadmin.patientId);
    }

    renderNonAdmin = (nonadmin) => {
        return (
            <li className="list-group-item">
                {console.log("Nonadmin called")}
                <strong>Non-Admin ID: </strong>
                <span>{nonadmin.patientId}</span>
                <strong> Non-Admin name: </strong>
                <span>{nonadmin.name.first + " " + nonadmin.name.last}</span>
                <button onClick={this.onAdminify.bind(this, nonadmin)} className="btn btn-sm btn-warning float-right">Make admin</button> 
            </li>
        );
    }

    render() {
        return (
            <ul className="list-group">
                {console.log("Nonadmins from NonadminList.js", this.props.nonadmins)}
                {this.props.nonadmins.map(this.renderNonAdmin)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nonadmins: state.users.nonadmins
    }
};

export default connect(mapStateToProps, {
    makeAdmin,
    fillUsers
})(NonAdminList);