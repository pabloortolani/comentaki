import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

//Esse array de configuração é copiado no site firebase logo após cria o app
const firebaseConfig = {
    apiKey: "AIzaSyDWS4NCopY_L_dqSnyvT7vkOwOur4Tz7H4",
    authDomain: "comentaki-pablo.firebaseapp.com",
    databaseURL: "https://comentaki-pablo.firebaseio.com",
    projectId: "comentaki-pablo",
    storageBucket: "comentaki-pablo.appspot.com",
    messagingSenderId: "114932471590",
    appId: "1:114932471590:web:7f3f8e88cd0494356453e7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;