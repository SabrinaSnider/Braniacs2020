import React from 'react';
//import express from 'express';
import './SignUpBox.css'
//const rtr = express.Router();
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function SignUpBox() {
	
	var emailsInUse = [];
	//use expressjs to fetch emails already in use
	axios.get("/patient/emails").then(function (response){
		emailsInUse = (response.data);
	});
	
	//Check emails for uniqueness
	function checkEmail(thisEmail){
		for(var i=0;i<emailsInUse.length;i++){
			if (thisEmail == emailsInUse[i])
				return false;
		}
		return true;
	}
	
	//Push changes to database. Not secure currently
	function pushToDatabase(){
		var toPush = {
			first: document.getElementById("fn").value,
			last: document.getElementById("ln").value,
			email: document.getElementById("em").value,
			password: document.getElementById("p1").value,
			pverify: document.getElementById("p2").value
		}
		//if passwords don't match: do something!
		if (toPush.password !== toPush.pverify){
			console.log("Error: Passwords do not match.");
		}
		//else, continue.
		else{
			//if the email's already in use, reject
			if (!checkEmail(toPush.email))
				console.log("Error: Email is already in use.");				
			else{
				//post to the database!
				axios({
					method: 'post',
					url: '/patient/register',
					data: {
						first: toPush.first,
						last: toPush.last,
						email: toPush.email,
						password: toPush.password
					}
				})
				//and refresh or something
				console.log("Account creation successful");
				window.location.reload();
			}
		}
	}
	
	/*div SEMESSAGE: placeholder for success/error message, once I figureo ut how states work*/
    return (
        <div>
            <form id="container">
                <h2 id="title" style={{fontSize: '2em'}}>Create Your Account</h2>

				<div id="semessage">
				</div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">First Name</label>
                    <input id="fn" type="email" class="form-control" placeholder=""></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Last Name</label>
                    <input id="ln" type="email" class="form-control" placeholder=""></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="em" type="email" class="form-control" placeholder=""></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="p1" type="password" class="form-control" placeholder=""></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Re-type Password</label>
                    <input id="p2" type="password" class="form-control" placeholder=""></input>
                </div>

                <div className="form-group" id="button-group">
					<button type="button" id="create-page-btn" className="btn row" onClick={pushToDatabase}>Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpBox;
