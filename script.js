var mainText = document.getElementsByClassName("postEditor");
var mainButton = document.getElementsByClassName("postSumbit");
var textContent = 

function testFunction() {
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("text").set("something something");
    console.log("working");
}