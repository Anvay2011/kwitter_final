var firebaseConfig = {
      apiKey: "AIzaSyBg_deDKOMqyo-Mq2q7PbCBepkOSItCmIY",
  authDomain: "kwitter-project-e3e2f.firebaseapp.com",
  databaseURL: "https://kwitter-project-e3e2f-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-e3e2f",
  storageBucket: "kwitter-project-e3e2f.appspot.com",
  messagingSenderId: "763138139002",
  appId: "1:763138139002:web:cf23eb9ed7c46e6bf8ecc3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name= localStorage.getItem("user_name")
     document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "add room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}