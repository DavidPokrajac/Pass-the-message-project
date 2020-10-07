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
      div.insertBefore(warning, message);
      setTimeout(function(){
        warning.innerHTML = "";
      }, 3000);
    } else{
      message.textContent = value;
      warning.innerHTML = "";
    }

    // Resetting the form after each time submit button is clicked
    form.reset();
  });

}
