  let username ;
  let age ;
  let email;
  let password;
  
  





   function classic(){
	 document.getElementById('myTopnav').style.backgroundColor = "#333";
	 document.getElementById('myTopnav').style.color = "#f2f2f2";
	 document.getElementById('text1').style.color = "white";

   }



   function dark(){
     document.getElementById('text1').style.color = "red";

   }




   document.getElementById("regbutton").onclick = function(){
    username = document.getElementById("name").value;
    age = document.getElementById("year").value;
    email = document.getElementById("email").value; 
    password = document.getElementById("password").value;
    age = 2023 - age;
    console.log(username);
   
   
    if((!username)  || (!email) || (!password) || (age < 10 || age > 120 )){
      console.log("Error all the rows need to be filled ");
     }else {
    console.log("it worked");
    console.log(username);
   console.log( age );
   console.log( email);
   console.log( password);
    window.location.assign("https://cosmos255.github.io/daniel/index.html");
  
    }

   
    if(!username){
      window.alert("You need to put a username ");
    }

    else if(!email){
      window.alert("You need to put a eamil ");
    }

    else if(!password){
      window.alert("You need to put a password ");
    }

    else if(age < 10){
      window.alert("You are too young ");
    }

    else if(age > 120){
      window.alert("You are dead :P ")
    }

  }


   if(window.location.href == 'https://cosmos255.github.io/daniel/log_in.html'){
    window.alert("Bien ai venit pe siteul meu");
   }




   //document.getElementById("p1").innerHTML = "Salut " + name;
   //document.getElementById("p2").innerHTML = "Ai varsta de " + age ;