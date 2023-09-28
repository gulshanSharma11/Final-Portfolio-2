const firebaseConfig = {
    apiKey: "AIzaSyBJVMUmJbiG-yvnKcgnohpkfYpiWrLmej0",
    authDomain: "portfolio-contact-d0666.firebaseapp.com",
    databaseURL: "https://portfolio-contact-d0666-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-d0666",
    storageBucket: "portfolio-contact-d0666.appspot.com",
    messagingSenderId: "719278262937",
    appId: "1:719278262937:web:5c16857fbb55b2b0120608"
  };

  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var first = getElementVal("first");
  var second = getElementVal("second");
  var mail = getElementVal("mail");
  var contact = getElementVal("contact");
  var content = getElementVal("content");

  saveMessages(first , second ,mail,contact , content);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (first, second ,mail,contact , content) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({

    first: first,
    second: second,
    mail: mail,
    contact: contact,
    content: content,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};