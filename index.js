firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
    
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
   

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = email_id;


    }

    
  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){
  
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
  
}

function logout(){
  window.location.href = "index.html";
  if(confirm('You will about to log out. Are you sure?')){
    firebase.auth().signOut();
}
  
}


//index part
var datacount;
var undoneDatacount;
var doneDataCount;

const readMultipleNodesFromDatabase = () => {
firebase
  .database()
  .ref("Queries")
  .orderByChild("status")
  .equalTo("Undone")
  .once("value", function (snapshot) {
    
    undoneDatacount = 0;
    $('#entries').html('Loading...');
      x = 1;
      var html = '';
    snapshot.forEach(function (childSnapshot) {
      const Qid = childSnapshot.key;
      Queries = childSnapshot.val();
      html =   ' <a href="entry.html?Qid='+ Qid +'" class="col-md-4">'+
                '<h4 class="desc">[from: ]' + Queries.name + '</h4>' +
                '<h4 class="subj">'+ Queries.section +": "+ Queries.subject + '</h4>' +
                '<p class="desc"> - ' + Queries.description + '</p>' +
                '</a><br>' + html;
      x++;
      undoneDatacount = undoneDatacount + 1;
      document.getElementById("total3").innerHTML = undoneDatacount;
      document.getElementById("Htitle").innerHTML = "UNDONE QUERIES & REQUEST";
    });
    $('#entries').html(html);
  });

  firebase
  .database()
  .ref("Queries")
  .once("value", function (snapshot) {
    datacount = 0;
      x = 1;
    snapshot.forEach(function () {
      x++;
      datacount = datacount + 1;
    });
    document.getElementById("total").innerHTML = datacount;
  });

  firebase
  .database()
  .ref("Queries")
  .orderByChild("status")
  .equalTo("Done")
  .once("value", function (snapshot) {
    doneDataCount = 0;
      x = 1;
    snapshot.forEach(function () {
      x++;
      doneDataCount = doneDataCount + 1;
    });
    document.getElementById("total2").innerHTML = doneDataCount;
  });


};

const readMultipleNodesFromDatabase2 = () => {
  firebase
    .database()
    .ref("Queries")
    .orderByChild("status")
    .equalTo("Done")
    .once("value", function (snapshot) {
      
      undoneDatacount = 0;
      $('#entries').html('Loading...');
        x = 1;
        var html = '';
      snapshot.forEach(function (childSnapshot) {
        const Qid = childSnapshot.key;
        Queries = childSnapshot.val();
        html =   ' <a href="entry.html?Qid='+ Qid +'" class="col-md-4">'+
                  '<h4 class="desc">[from: ]' + Queries.name + '</h4>' +
                  '<h4 class="subj">'+ Queries.section +": "+ Queries.subject + '</h4>' +
                  '<p class="desc"> - ' + Queries.description + '</p>' +
                  '</a><br>' + html;
        x++;
        undoneDatacount = undoneDatacount + 1;
        document.getElementById("Htitle").innerHTML = "DONE QUERIES & REQUEST";
          
      });
      $('#entries').html(html);
    });
  
    firebase
    .database()
    .ref("Queries")
    .once("value", function (snapshot) {
      datacount = 0;
        x = 1;
      snapshot.forEach(function () {
        x++;
        datacount = datacount + 1;
      });
      document.getElementById("total").innerHTML = datacount;
    });
  
    firebase
    .database()
    .ref("Queries")
    .orderByChild("status")
    .equalTo("Done")
    .once("value", function (snapshot) {
      doneDataCount = 0;
        x = 1;
      snapshot.forEach(function () {
        x++;
        doneDataCount = doneDataCount + 1;
      });
      document.getElementById("total2").innerHTML = doneDataCount;
    });
  
  
  };

  const readMultipleNodesFromDatabase3 = () => {
    firebase
      .database()
      .ref("Queries")
      .once("value", function (snapshot) {
        
        undoneDatacount = 0;
        $('#entries').html('Loading...');
          x = 1;
          var html = '';
        snapshot.forEach(function (childSnapshot) {
          const Qid = childSnapshot.key;
          Queries = childSnapshot.val();
          html =   ' <a href="entry.html?Qid='+ Qid +'" class="col-md-4">'+
                    '<h4 class="desc">[from: ]' + Queries.name + '</h4>' +
                    '<h4 class="subj">'+ Queries.section +": "+ Queries.subject + '</h4>' +
                    '<p class="desc"> - ' + Queries.description + '</p>' +
                    '</a><br>' + html;
          x++;
          undoneDatacount = undoneDatacount + 1;
          document.getElementById("Htitle").innerHTML = "APP QUERIES & REQUEST";
        });
        $('#entries').html(html);
      });

      firebase
      .database()
      .ref("Queries")
      .once("value", function (snapshot) {
        datacount = 0;
          x = 1;
        snapshot.forEach(function () {
          x++;
          datacount = datacount + 1;
        });
        document.getElementById("total").innerHTML = datacount;
      });
    
      firebase
      .database()
      .ref("Queries")
      .orderByChild("status")
      .equalTo("Done")
      .once("value", function (snapshot) {
        doneDataCount = 0;
          x = 1;
        snapshot.forEach(function () {
          x++;
          doneDataCount = doneDataCount + 1;
        });
        document.getElementById("total2").innerHTML = doneDataCount;
      });

    };
    

  readMultipleNodesFromDatabase();
  

function DataChange()
{
  readMultipleNodesFromDatabase2();
  document.getElementsByClassName("bttn").style.BackgroundColor = 'red';
}

function DataChange2()
{
  readMultipleNodesFromDatabase();
}

function DataChange3()
{
  readMultipleNodesFromDatabase3();
}


//loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function profile(){
  window.location.href = 'profile.html';
}

function home(){
  window.location.href='index.html';
}

function BF_Page(){
  window.location.href = 'BF_Page.html';
}

