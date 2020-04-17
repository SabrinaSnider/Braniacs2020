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

httpUser.setAdmin = function(admin){
    localStorage.setItem('admin', admin);
    return admin;
}

httpUser.getAdmin = function(){
    let isAdmin = localStorage.getItem('admin');
    return JSON.parse(isAdmin);
    
}
httpUser.getCurrentAdmin = function(){
    const admin = this.getAdmin();
    // console.log(admin);
    return admin;
}

httpUser.getCurrentId = function(){
    const id = this.getId();
    // console.log(id);
    return JSON.parse(id);
};

httpUser.getCurrentUser = function() {
    const token = this.getToken();
    return (token ? jwtDecode(token) : null)
};

httpUser.validateEmail = async function(user) {
    const response = await axios.post( '/patient/forgot', user );
    // console.log("https response", response);
    if(response.data.errors !== undefined){
        return response.data;
    }
}

httpUser.validatePasswords = async function(user) {
    const response = await axios.post( '/patient/reset/' + user.token, user );
    // console.log("https response", response);
    if(response.data.errors !== undefined){
        return response.data;
    }
}


httpUser.logIn = async function(credentials) {
    try {
        const response = await axios.post( '/patient/authenticate', credentials );
        // console.log("https response", response);
        if(response.data.errors !== undefined){
            return response.data;
        }

        // console.log(response);

        const token = response.data.token;
        const id = response.data.patientId;
        const admin = response.data.admin;

        const user = {
            token: "",
            id: id,
            admin: admin
        };

        // console.log(id);

        if(token) {
            this.defaults.headers.common.token = this.setToken(token);
            this.defaults.headers.common.id = this.setId(id);
            this.defaults.headers.common.admin = this.setAdmin(admin);
            user.token = jwtDecode(token);

            // console.log("HttpUser user",user);

            return user;
        } else {
            user.token = false;
            return false;
        }
    } catch(err) {
        console.log(err);
        return false;
    }
};

httpUser.signUp = async function(userInfo) {
    // console.log("user info is", userInfo)
    const response = await axios.post('/patient/register', userInfo);

    // console.log("https response", response);
    if(response.data.errors !== undefined){
        return response.data;
    }


    const token = response.data.token;
    const id = response.data.patientId;
    const admin = response.data.admin;
    // console.log(id);
    // console.log(admin);

    const user = {
        token: "",
        id: id,
        admin: admin
    };

    if(token) {
        this.defaults.headers.common.token = this.setToken(token);
        this.defaults.headers.common.id = this.setId(id);
        this.defaults.headers.common.admin = this.setAdmin(admin);
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
    localStorage.removeItem('admin');
    delete this.defaults.headers.common.token;
    delete this.defaults.headers.common.id;
    return true;
};

httpUser.defaults.headers.common.token = httpUser.getToken();
httpUser.defaults.headers.common.id = httpUser.getId();
httpUser.defaults.headers.common.admin = httpUser.getAdmin();
export default httpUser;
