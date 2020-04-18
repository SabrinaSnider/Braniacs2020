import moment from 'moment';
import axios from 'axios'
import React from 'react';

import {
	UPDATE_DATE, 
	DATE_FAIL
} from './types';


export const updateDate = (date) =>{
    return async (dispatch) =>{
        try{
			dispatch({type: UPDATE_DATE, payload: date});

            
        } catch(err){
            dispatch({ type: DATE_FAIL, payload: 'Couldn\'t update date' });
        }
    }
};

