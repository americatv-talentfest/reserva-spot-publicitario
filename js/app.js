$(document).ready(function() {
  // declaramos variables
  var $loginBtn = $('#login-btn');
  var $googleLogin = $('#login-google');
  var $email = $('#email');
  var $password = $('#password');
  var $validateEmail = false;
  var $validatePassword = false;

  // FUNCIONES

  // funciones de boton active
  function loginBtnActive() {
    if ($validateEmail && $validatePassword) {
      $loginBtn.removeAttr('disabled');
    }
  }

  function loginBtnInactive() {
    $loginBtn.attr('disabled', true); 
  }

  // funcion del input email
  $email.on('input', function() {
    console.log($(this).val());
    var $regexEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log($regexEmail.test($(this).val()));
    if ($regexEmail.test($(this).val())) {
      $validateEmail = true;
      loginBtnActive();
    } else {
      loginBtnInactive();
    }
  });

  // funcion del input password
  $password.on('input', function() {
    console.log('escribiendo password');
    var $regexPassword = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z\0-9]{6,}$/;
    console.log($regexPassword.test($(this).val()));
    if ($regexPassword.test($(this).val())) {
      $validatePassword = true;
      loginBtnActive();
    } else {
      loginBtnInactive();
    }
  });

  // funcion click del boton login 
  $loginBtn.click(function() {
    console.log('click');
    window.location.href = 'views/home.html';
  });

  // Inicializando Firebase
  var config = {
    apiKey: 'AIzaSyANh-Nq_-W7F35owm6gFw3vH9f6p1AiHuw',
    authDomain: 'americatv-246b8.firebaseapp.com',
    databaseURL: 'https://americatv-246b8.firebaseio.com',
    projectId: 'americatv-246b8',
    storageBucket: 'americatv-246b8.appspot.com',
    messagingSenderId: '716121533286'
  };
  firebase.initializeApp(config);
  firebase.database();
  
  // Iniciando autentificación con Google
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();

  $googleLogin.click(function(event) {
    event.preventDefault();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).then(user => {
      window.location.href = 'views/home.html';
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(error);
    });
  });
});
