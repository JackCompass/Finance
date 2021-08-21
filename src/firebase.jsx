import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
	apiKey: "AIzaSyBo2fAKHg2UrA5LORt1Y4INwkjmfKwft6M",
	authDomain: "finance-c5b7f.firebaseapp.com",
	databaseURL: "https://finance-c5b7f-default-rtdb.firebaseio.com",
	projectId: "finance-c5b7f",
	storageBucket: "finance-c5b7f.appspot.com",
	messagingSenderId: "581776392308",
	appId: "1:581776392308:web:ff19728e6587050966d121"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();

export {db};