// Function to initialise Firebase 
function InitFirebase() {
    var firebaseConfig = {
        apiKey: "AIzaSyCUAYKOO3ahtqnuFeRyO6_y3l_uJJmIZ14",
        authDomain: "froghunt-e433d.firebaseapp.com",
        databaseURL: "https://froghunt-e433d-default-rtdb.firebaseio.com",
        projectId: "froghunt-e433d",
        storageBucket: "froghunt-e433d.appspot.com",
        messagingSenderId: "584472516285",
        appId: "1:584472516285:web:cd0c700327b075fd1d49d4",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

