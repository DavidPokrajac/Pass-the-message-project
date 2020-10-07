window.onload = function(){

  // Referencing tags
  var div = document.querySelector("div");

  var form = document.forms[0];

  var input = form.querySelector("input");

  var message = document.querySelector("#message");

  // Adding event listener
  form.addEventListener("submit", function(e){

    e.preventDefault();

    var value = input.value;

    // Creating warning paragraph if there is no input
    var warning = document.createElement("p");

    // If there's no value, display warning message, and make it disappear after few seconds
    if(value.length === 0){
      warning.textContent = "You have to input something";
      warning.classList.add("warning");
      div.insertBefore(warning, message);
      setTimeout(function(){
        div.removeChild(warning);
      }, 3000);
    } else{
      message.textContent = value.toUpperCase();
    }

    // Scroll down the container if the value size more than 40 characters
    if(value.length >= 40){
      message.style.fontSize = "1.5em";
      div.style.overflowY = "scroll";
    }

    // Resetting the form after each time submit button is clicked
    form.reset();
  });

}
