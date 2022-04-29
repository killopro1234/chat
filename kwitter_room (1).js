
//AÑADE TUS ENLACES DE FIREBASE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      var firebaseConfig = {
            apiKey: "AIzaSyCPOLqcbRX0ixgb0XrspPFEV-8Jmy6MEDQ",
            authDomain: "kwiter-8a358.firebaseapp.com",
            projectId: "kwiter-8a358",
            storageBucket: "kwiter-8a358.appspot.com",
            messagingSenderId: "794735664711",
            appId: "1:794735664711:web:248d9c96a0c05404f41b62"
          };
          
          // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
          
      //Final del código
      });});}
getData();
