window.onload = function(){

  // Referencing tags
  var div = document.querySelector("div");

  var form = document.querySelector("form");

  var input = form.querySelector("input[type='text']");

  var message = document.querySelector("#message");


  form.addEventListener("submit", function(e){

    e.preventDefault();

  });

}
