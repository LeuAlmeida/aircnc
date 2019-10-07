<p align="center">
<img src="mobile/src/assets/logo@2x.png" /><br/>
</p>


# AirCnC | Code & Coffee <br/>
### This is a study project only and has no involvement with the Airbnb brand.

## Requeriments

- Node.JS >= 10.16.2
- Yarn >= 1.17.3
- Expo >= 3.1.2
- NPM >= 6.9.0

# Screenshots
### Company View
#### Login Page
<img src="screenshots/frontend/1.png" width="600px" />

#### Coworking Spots Page View
<img src="screenshots/frontend/2.png" width="600px" />

#### Coworking Spots Create Page
<img src="screenshots/frontend/3.png" width="600px" />

### User View
More informations in coming :coffee: .
<!-- #### Login Page
<img src="screenshots/mobile/1.png" width="600px" />

#### Coworking Spots Page View
<img src="screenshots/mobile/2.png" width="600px" />

#### Coworking Spots Create Page
<img src="screenshots/mobile/3.png" width="600px" /> -->

# Getting started

First clone this project (or fork this to make your own changes).

Go to the project<br/>
`$ cd aircnc`

<hr />

### Getting started - Backend
Go to the backend folder<br/>
`$ cd backend`

Install all dependencies<br/>
`$ npm i`

#### IMPORTANT
_To make your own changes, please create your cluster in <a href="https://www.mongodb.com/">MongoDB Atlas</a>_

After create and init the cluster, change the database config in <b>backend/src/server.js</b> file<br/>
`mongoose.connect('your-mongodb-connect-here`

Init the backend project on the 3333 port running `yarn dev`

<hr />

### Getting started - Frontend (company view)

Go to the frontend folder<br/>
`$ cd frontend`

Install all dependencies<br/>
`$ npm i`

Run the ReactJS project in the 3000 port<br/>
`$ yarn start`

<hr/>

### Getting started - Mobile (user view)

Go to the mobile folder<br/>
`cd mobile`

Install all dependencies<br/>
`npm i`

Change your backend Base URL in the <b>mobile/services/api.js</b> file <a href="https://lifehacker.com/how-to-find-your-local-and-external-ip-address-5833108">_click here to learn how get the correct IP_</a>

Init the application using Expo Cli<br/>
`$ yarn start`

<hr/>

<a href="http://linkedin.com/in/leonardoalmeida99">Connect me in LinkedIn</a> | <a href="http://behance.net/almeida99">See my Behance</a> | <a href="https://leunardo.dev">Click here to go to my CV</a>