import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';


import {
    SEARCH_ADMINS,
    SEARCH_NONADMINS,
    USER_FAIL,
    FILL_USERS,
    MAKE_ADMIN,
    UNMAKE_ADMIN
} from '../actions/types';




// One default appointment item added as example
const INITIAL_STATE = {
    admins: [],
    nonadmins: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FILL_USERS:
        
            return{
                ...state,
                admins: action.admins,
                nonadmins: action.nonadmins,
                error: ''
            };

        case MAKE_ADMIN:

            return{
                ...state,
                admins: action.admins,
                nonadmins: action.nonadmins,
                error: ''
            };

        case UNMAKE_ADMIN:
    
            return{
                ...state,
                admins: action.admins,
                nonadmins: action.nonadmins,
                error: ''
            };

        case SEARCH_ADMINS:
            return {
                ...state,
                admins: action.admins,
                error: ''
            };

        case SEARCH_NONADMINS:
            return {
                ...state,
                nonadmins: action.nonadmins,
                error: ''
            };
        case USER_FAIL:
            return {
                ...state,
                error: action.payload
            };

            
        default:
            return state;
    }
}