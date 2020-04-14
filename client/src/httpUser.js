import axios from 'axios';
import jwtDecode from 'jwt-decode'

const httpUser = axios.create();

httpUser.getToken = function() {
    return localStorage.getItem('token');
};

httpUser.getId = function() {
    let id = localStorage.getItem('id');
    return id;
}

httpUser.setToken = function(token) {
    localStorage.setItem('token', token);
    return token;
};

httpUser.setId = function(id){
    localStorage.setItem('id', id);
    return id;
}

httpUser.getCurrentId = function(){
    const id = this.getId();
    console.log(id);
    return JSON.parse(id);
};

httpUser.getCurrentUser = function() {
    const token = this.getToken();
    return (token ? jwtDecode(token) : null)
};

httpUser.logIn = async function(credentials) {
    try {
        const response = await axios.post( '/patient/authenticate', credentials );
        console.log("https response", response);
        if(response.data.errors !== undefined){
            return response.data;
        }

        console.log(response);

        const token = response.data.token;
        const id = response.data.patientId;

        const userTokens = {
            token: "",
            id: id
        };

        console.log(id);

        if(token) {
            this.defaults.headers.common.token = this.setToken(token);
            this.defaults.headers.common.id = this.setId(id);
            userTokens.token = jwtDecode(token);

            console.log(userTokens);

            return userTokens;
        } else {
            userTokens.token = false;
            return false;
        }
    } catch(err) {
        
        console.log(err);
        return false;
    }
};

httpUser.signUp = async function(userInfo) {
    const response = await axios.post('/patient/register', userInfo);

    console.log("https response", response);
    if(response.data.errors !== undefined){
        return response.data;
    }


    const token = response.data.token;
    const id = response.data.patientId;
    console.log(id);

    const user = {
        token: "",
        id: id
    };

    console.log(id);

    if(token) {
        this.defaults.headers.common.token = this.setToken(token);
        this.defaults.headers.common.id = this.setId(id);
        user.token = jwtDecode(token);

        return user;
    } else {
        user.token = false;
        return false;
    }
};

httpUser.logOut = function() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    delete this.defaults.headers.common.token;
    delete this.defaults.headers.common.id;
    return true;
};

httpUser.defaults.headers.common.token = httpUser.getToken();
httpUser.defaults.headers.common.id = httpUser.getId();
export default httpUser;