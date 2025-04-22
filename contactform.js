function sendMail(){
  let parms ={
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
    contact : document.getElementById("contact").value,
  }

  emailjs.send("service_cnvtjh6","template_qmrz23l",parms).then(alert("Email sent!!"))
}