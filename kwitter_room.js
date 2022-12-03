var firebaseConfig = {
      apiKey: "AIzaSyAfJduxyXG9wY6DN8_mNwZ4zDf9m7yjN18",
      authDomain: "kwitter-8ae54.firebaseapp.com",
      databaseURL: "https://kwitter-8ae54-default-rtdb.firebaseio.com",
      projectId: "kwitter-8ae54",
      storageBucket: "kwitter-8ae54.appspot.com",
      messagingSenderId: "707004896536",
      appId: "1:707004896536:web:689b7d5a68840a2ef7ba6d"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
