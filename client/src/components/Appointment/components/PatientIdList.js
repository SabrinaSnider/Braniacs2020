import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import { getPatientById } from '../actions/PatientActions';

class PatientIdList extends Component {
	onSelectPatient = (patient) => {
		this.props.getPatientById(patient);
	}

	renderPatientIds = (patient) => {
		if (patient.patientId > 0){
			return (
				<button onClick={this.onSelectPatient.bind(this, patient)} className="dropdown-item" type="button" key={patient.patientId}>ID: {patient.patientId} ({patient.name.first + " " +patient.name.last}) </button>
			);
		}
	}

	render() {
		return (
			<ul className="list-group">
			<div className="btn-group dropright">
				<button type="button" className="btn btn-primary">
					Select Patient
  </button>
				<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span className="sr-only">Toggle Dropright</span>
				</button>
				<div className="dropdown-menu">
					{this.props.patients.map(this.renderPatientIds)}
				</div>
			</div>
			</ul>
        );
	}
}

const mapStateToProps = (state) => {
	return {
		patients: state.patients.items3
	}
};

export default connect(mapStateToProps, {
	getPatientById
})(PatientIdList);


