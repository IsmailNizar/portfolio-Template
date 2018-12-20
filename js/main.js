// Menu scroll down animation
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


//header sticky

  window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// Firebase
var config = {
  apiKey: "AIzaSyBvptqmAsvselx7ZJBLCddeCBoQ5PI2PrY",
  authDomain: "ismail-nizar.firebaseapp.com",
  databaseURL: "https://ismail-nizar.firebaseio.com",
  projectId: "ismail-nizar",
  storageBucket: "ismail-nizar.appspot.com",
  messagingSenderId: "920004417519"
};
firebase.initializeApp(config);

function upload(){
  var database = firebase.database();
  var ref = database.ref("Contact");
  
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value ;
  var object = document.querySelector("#object").value ;
  var message = document.querySelector("#Message").value ;
  
  var contact ={
      name : name,
      Email : email,
      object : object,
      Message : message,
  };
  ref.push(contact);
  alert('Thx ! Your Message Has Been Sent');
  // initialisation
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#object").value = "";
  document.querySelector("#Message").value = "";
  
  }