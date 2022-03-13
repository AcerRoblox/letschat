//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyC2d5Jnc6k0HFleP3Dup2_VPOK5Kbqrw-4",
    authDomain: "kwitterdemo-23b2b.firebaseapp.com",
    databaseURL: "https://kwitterdemo-23b2b-default-rtdb.firebaseio.com",
    projectId: "kwitterdemo-23b2b",
    storageBucket: "kwitterdemo-23b2b.appspot.com",
    messagingSenderId: "642118364392",
    appId: "1:642118364392:web:e2730efbc23171dd34ed5d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}