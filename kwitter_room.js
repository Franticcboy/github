const firebaseConfig = {
      apiKey: "AIzaSyAGsCyS5JZkZ0_l7-qgPkLCQ_4-t-fGcyY",
      authDomain: "racism-6a64c.firebaseapp.com",
      databaseURL: "https://racism-6a64c-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "racism-6a64c",
      storageBucket: "racism-6a64c.appspot.com",
      messagingSenderId: "550522473765",
      appId: "1:550522473765:web:4fd279111f905cce909ecc"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("Kamaki");
document.getElementById("user_name").innerHTML = "Welcome" + username +"!";
function AddRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitterpage.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name  " + Room_names);
row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'> #" + Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;


      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Wicker_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}