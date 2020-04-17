import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import {unmakeAdmin} from '../actions/AdminActions';

class AdminList extends Component {

    onDeadminify = (admin) => {
        this.props.unmakeAdmin(admin.patientId);
    }

    renderAdmin = (admin) => {
        return (
            <li className="list-group-item">
                {console.log("Admin called")}
                <strong>Admin ID: </strong>
                <span>{admin.patientId}</span>
                <strong> Admin name: </strong>
                <span>{admin.name.first + " " + admin.name.last}</span>
                <button onClick={this.onDeadminify.bind(this, admin)} className="btn btn-sm btn-warning float-right">Remove admin</button>
            </li>
        );
    }

    render() {
        return (
            <ul className="list-group">
                {console.log("Admins from AdminList.js", this.props.admins)}
                {this.props.admins.map(this.renderAdmin)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        admins: state.users.admins
    }
};

export default connect(mapStateToProps, {
    unmakeAdmin
})(AdminList);