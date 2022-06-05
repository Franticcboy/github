function add_user(){
user_name=document.getElementById("user_name").value ;
localStorage.setItem("BorumakiGaiden",user_name);
window.location="kwitter_room.html";
}  