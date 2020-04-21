## Overview of the Project
This project is a web application of which patients can manage appointments and easily navigate through the clinic, and where doctors can send out important notifications and reminders. The users log in to access their account to see alerts and appointments. New Users can easily create an account for the webpage to manage their appointments and clinic access. Also, users will be able to find their way to the clinic with an estimated time for their total commute on both mobile and computer. Admins are able to view, create and delete appointments and send out reminders to notify patients about important information, and also be able to add additional admins.


## List of Features
- #### `Navigation Bar` - allow the users to navigate to different parts of the website
- #### `Home` - this page is what all of the users first see when they visit the website
- #### `Sign Up` - new users are asked for their first name, last name, email and for a password, additionally their date of birth, phone number, and patient ID
- #### `Sign In` - users enter their email and password to login, once the user logs in, they are redirected to home, and able to access Log Out and Account Information tabs on the navigation bar
- #### `Account Information` - users are allowed to edit information that were used to sign up for their account
- #### `Forgot Password` - users who have forgotten or want to change their password can enter their email address to receive an email with a link to a page to Change their password
- #### `Contact and Find Us` - users have options to view General Information, Navigate Me to Parking and Navigate Me to Hospital
    - #### `General Information` - shows the phone number and address for UF Health Neurosurgeory and a brief description of where they are location
    - #### `Navigate Me to Parking` - shows the user auto-generated instructions for how to get to the parking lot
    - #### `Navigate Me to Hospital` - shows the user auto-generated instructions for how to get to the hospital
- #### `Patient Appointment` - displays the appointments and reminders for the current patient logged in
- #### `Admin Content Update` - admins can create and delete appointments, create and delete custom reminders, and manage admin accounts
    - #### `Manage Appointments` - a practitioner can create or delete the appointment of patients. This can be done for patients with existing online accounts where the practitioner can simply select the patient by their ID or for patients without an account, where the practioner will have to fill out each field of patient data for the appointment
    - #### `Manage Reminders` - an admin can send a reminder message to a phone number by an existing a specified patient or to a new patient with a new phone number or patient ID. 
    - #### `Manage Admins/Non-Admins` - an admin can give or remove admin privileges by ID

## List of APIs
- #### `HTML Geolocation` - gets the user's current location, built into HTML
- #### `Google Maps` - embeds a map into the webpage and display routes
- #### `Google Directions` - generates directions given a origin and destination
- #### `Google Autocomplete` - gives autocomplete suggestions to the location that the user types in
- #### `Twilio` - takes a phone number and sends a message to the patient


## Environment Variables
MongoDB: Database URI (line 6)

Twilio: Account SID, User Authentication Token, and “From” phone number. (lines 10-12)

The MongoDB and Twilio environmental variables can be found in the “server/config/config.js” file, and can be easily modified by changing the variables in this file.


## Log-In Credentials
An administrator account with the following credentials is available for log-in. Once the user logs in using this account, other site users can be designated an admin using the “Manage Administrators” section in the “Administrators” page (linked at the top right hand corner of the screen):

Email: admin@admin.com

Password: QAX8cV*Ap6qZ5vDS

Patient ID: 555 (Not needed for login)


## Available Scripts

Please note that any time the server is run in these scripts `nodemon` is used in place of `node` for easier development. If you are interested in how this works follow the nodemon In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

    
    



