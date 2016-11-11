import base from 're-base';

const base = Rebase.createClass({
    // apiKey: "AIzaSyB6mf8rR6FDo4TNKrWB4wDgdhEdD1u-JfY",
    // authDomain: "church-schedule-app.firebaseapp.com",
    // databaseURL: "https://church-schedule-app.firebaseio.com",
    // storageBucket: "church-schedule-app.appspot.com",
    // messagingSenderId: "43336075346"
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId
})

export default base;