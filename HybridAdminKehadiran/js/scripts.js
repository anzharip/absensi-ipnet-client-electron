// Empty JS for your own code to be here
"use strict";
// window.onload = function () { alert("It's loaded!") };
document.getElementById("submit_button").onclick = function() {
  // Defining the variable
  var idakun = ""
  var pass = ""
  var upload = ""
  // Get the value from form input
  idakun = document.getElementById('idakun').value;
  pass = document.getElementById('pass').value;
  upload = document.getElementById('upload').files[0];
  //Used for logging to check whether the value succesfully pulled from the form input
  console.log(idakun);
  console.log(pass);
  console.log(upload);
  //Asynchronous HTTP request to the API server
  var xmlHttp = new XMLHttpRequest();
  var url = "http://localhost:18080/akun/create"
  var formData = new FormData();
  formData.append("upload", upload);
  formData.append("idakun", idakun);
  formData.append("pass", pass);
  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
  }
  xmlHttp.open("POST", url, true); // true for asynchronous
  xmlHttp.send(formData);
  //Callback function when the asynchronous request succeeed
  var callback = function(responseText) {
    var responseText = JSON.parse(responseText);
    console.log(responseText);
    //Show the status and message through alert
    var alertMessage = "Status: " + responseText.status + "\n" +
                    "Pesan: " + responseText.message;
    alert(alertMessage);
  };
};
