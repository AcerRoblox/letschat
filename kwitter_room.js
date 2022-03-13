//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:9999999999999999999999999999999999999999999999999999999999999999999999999
      });

      document.getElementsById("msg").value = "";

}  

      


// Your web app's Firebase configuration
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

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}