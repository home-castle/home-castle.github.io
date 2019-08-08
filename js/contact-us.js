
let btn = document.querySelector("#submit-btn");

btn.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();
      var Namere = /[A-Za-z]{1}[A-Za-z]/;
      if (!Namere.test($("#form-name").val())) {
          alert ("Name can not less than 2 char");
          return;
       }
      var mobilere = /[0-9]{10}/;
      if (!mobilere.test($("#form-phone").val())) {
          alert ("Please enter valid mobile number");
          return;
       }
      var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
      if (!reeamil.test($("#form-email").val())) {
          alert ("Please enter valid email address");
          return;
       }

  let name = document.querySelector("#form-name");
  let email = document.querySelector("#form-email");
  let message = document.querySelector("#description");
  let phone = document.querySelector("#form-phone");
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://mc5uvkcf0j.execute-api.us-west-2.amazonaws.com/dev, true);

  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    }
  };
  var data = {
    name: name.value,
    phone: phone.value,
    email: email.value,
    message: message.value
  };

  if (name.value && email.value && message.value) {
     document.querySelector('.alert-success').style.display = 'block';
     xhr.send(JSON.stringify(data));
     //Hide alert after 5 seconds
     setTimeout(function(){
      document.querySelector('.alert-success').style.display = 'none'; },5000);


      document.getElementById('contact-form').reset();

  } else {
         // show an error message
          document.querySelector('.alert-fail').style.display = 'block';

          //Hide alert after 5 seconds
          setTimeout(function(){
          document.querySelector('.alert-fail').style.display = 'none'; },5000);
  }
}



