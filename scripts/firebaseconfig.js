(function (window) {
    'use strict';
    var App = window.App || {};
    
    var FirebaseConfig = {
        apiKey: " A",
        authDomain: " ",
        projectId: " ",
        storageBucket: " ",
        messagingSenderId: " ",
        appId: " ",
        measurementId: " "
      };
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    
    window.App = App;
  
  })(window);
  // App.FirebaseConfig = FirebaseConfig;
  // window.App = App;