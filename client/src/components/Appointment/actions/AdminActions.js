import moment from 'moment';
import axios from 'axios'
import React from 'react';

import {
    SEARCH_ADMINS,
    SEARCH_NONADMINS,
    USER_FAIL,
    FILL_USERS,
    MAKE_ADMIN,
    UNMAKE_ADMIN
} from './types';

const mongoose = require('mongoose');

export const fillUsers = () =>{
    return async (dispatch) =>{
        dispatch({type: USER_FAIL, payload: ''});
        
        try{
            let samplePatient = [];
            let admins1 = [];
            let nonadmins2 = [];
            axios.post('/patient/list', {})
			.then(function (response) {
				samplePatient.data = (response.data);
				samplePatient.data.forEach(element => {
                    if(element.patientId !== undefined){
                        if(element.admin){
                            admins1.push(element);
                        } else{
                            nonadmins2.push(element);
                        }
                    }
                });

                console.log("Admins", admins1);
                console.log("Nonadmins", nonadmins2);
            })
            .then(()=>{
                dispatch({ type: FILL_USERS, admins: admins1, nonadmins: nonadmins2});
            })
        }catch(err){
            dispatch({ type: USER_FAIL, payload: 'Couldn\'t fill users' });
        }
    }
};

export const searchAdmins = (patientId) =>{
    return async (dispatch) =>{
        dispatch({type: USER_FAIL, payload: ''});
        try{
            let samplePatient = [];
            let searchedAdmins = [];
            axios.post('/patient/list', {})
			    .then(function (response) {
				samplePatient.data = (response.data);
				samplePatient.data.forEach(element => {
                    if(element.admin && element.patientId === patientId){
                        searchedAdmins.push(element);
                    }
                })
                
            }).then(()=>{
                    dispatch({ type: SEARCH_ADMINS, admins: searchedAdmins});
                })
            
        } catch(err){
            dispatch({ type: USER_FAIL, payload: 'Couldn\'t search admins' });
        }
    }
};

export const searchNonadmins = (patientId) =>{
    return async (dispatch) =>{
        dispatch({type: USER_FAIL, payload: ''});
        try{
            let samplePatient1 = [];
            let searchedNonAdmins = [];
            axios.post('/patient/list', {})
			    .then(function (response) {
				samplePatient1.data = (response.data);
				samplePatient1.data.forEach(element => {
                    if((!element.admin) && element.patientId === patientId){
                        searchedNonAdmins.push(element);
                    }
                })
                
            }).then(()=>{
                    dispatch({ type: SEARCH_NONADMINS, nonadmins: searchedNonAdmins});
                })
            
        } catch(err){
            dispatch({ type: USER_FAIL, payload: 'Couldn\'t search nonadmins' });
        }
    }
};

export const makeAdmin = (patientId) =>{
    return async (dispatch) =>{
        dispatch({type: USER_FAIL, payload: ''});
        try{
            axios.put('/patient/adminify', {patientId: patientId})
            .then(()=>{
                let samplePatient = [];
                let admins1 = [];
                let nonadmins2 = [];
                axios.post('/patient/list', {})
                .then(function (response) {
                    samplePatient.data = (response.data);
                    samplePatient.data.forEach(element => {
                        if(element.patientId !== undefined){
                            if(element.admin){
                                admins1.push(element);
                            } else{
                                nonadmins2.push(element);
                            }
                        }
                    });
    
                    console.log("Admins", admins1);
                    console.log("Nonadmins", nonadmins2);
                }).then(()=>{
                    dispatch({ type: MAKE_ADMIN, admins: admins1, nonadmins:nonadmins2});
                })
            })
        } catch(err){
            dispatch({ type: USER_FAIL, payload: 'Couldn\'t search admins' });
        }
    }
};

export const unmakeAdmin = (patientId) =>{
    return async (dispatch) =>{
        dispatch({type: USER_FAIL, payload: ''});
        try{
            axios.put('/patient/deadminify', {patientId: patientId})
            .then(()=>{
                let samplePatient = [];
                let admins1 = [];
                let nonadmins2 = [];
                axios.post('/patient/list', {})
                .then(function (response) {
                    samplePatient.data = (response.data);
                    samplePatient.data.forEach(element => {
                        if(element.patientId !== undefined){
                            if(element.admin){
                                admins1.push(element);
                            } else{
                                nonadmins2.push(element);
                            }
                        }
                    });
    
                    console.log("Admins", admins1);
                    console.log("Nonadmins", nonadmins2);
                }).then(()=>{
                    dispatch({ type: UNMAKE_ADMIN, admins: admins1, nonadmins:nonadmins2});
                })
            })
        } catch(err){
            dispatch({ type: USER_FAIL, payload: 'Couldn\'t search admins' });
        }
    }
};