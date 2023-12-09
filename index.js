  let name ;
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
    name = document.getElementById("name").value;
    age = 2023 - document.getElementById("year").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    window.location.assign("https://cosmos255.github.io/daniel/");
    console.log("it worked");
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(password);
   
   }

   


   if(name == null){
    document.getElementById("p1").innerHTML = "Salut ";
    console.log("nullname");
   }



   if(age == null){
    document.getElementById("p2").innerHTML = null;
    console.log("nullage")
   }



   if(window.location.href == 'https://cosmos255.github.io/daniel/log_in.html'){
    window.alert("Bien ai venit pe siteul meu");
   }




   document.getElementById("p1").innerHTML = "Salut " + name;
   document.getElementById("p2").innerHTML = "Ai varsta de " + age;