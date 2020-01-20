function checkForm() {
    var firstName = document.getElementById("name").value;
  
    var email = document.getElementById("email").value;

    var message = document.getElementById("message").value;
  
    var emailCanSubmit, nameCanSubmit = false , messageCanSubmit = false;
  
    function checkFirstName() {
      if (firstName == "" || !isNaN(firstName)) {
          console.log("enter name please")
        nameCanSubmit = false;
      } else {
        nameCanSubmit = true;
      }
  
    };
    checkFirstName();
  
    function checkEmail() {
        
      if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailCanSubmit = false;
        console.log("Please Put in a valid email adress");
      } else {
        emailCanSubmit = true;
        console.log("Thank you");
        cansubmit = true;
      }
    };
    checkEmail();

    function checkMessage() {
        if (message == "" || !isNaN(message)) {
            console.log("enter an message");
          messageCanSubmit = false;
        } else {
          messageCanSubmit = true;
        }
    
      };
    checkMessage();

   
    if (nameCanSubmit && emailCanSubmit && messageCanSubmit) {
      document.getElementById("submitButton").disabled = false;
      console.log("message send succsefuly!");
    } else {
      document.getElementById("submitButton").disabled = true;
    }
  };


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("right-container").style.top = "120px";
  } else {
    document.getElementById("right-container").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
