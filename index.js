  let name ;
  let age ;
  window.alert("Bien ai venit pe siteul meu");
  name = window.prompt("Cum te cheama?");
  console.log(name);
  age = window.prompt("In ce an teai nascut?");
  age = 2023 - age;
  console.log(age);

  document.getElementById("p1").innerHTML = "Salut " + name;
  document.getElementById("p2").innerHTML = "Ai varsta de " + age ;




   function classic(){
	 document.getElementById('myTopnav').style.backgroundColor = "#333";
	 document.getElementById('myTopnav').style.color = "#f2f2f2";
	 document.getElementById('text1').style.color = "white";

   }

   function dark(){
     document.getElementById('text1').style.color = "red";
   }

   document.getElementById("regbutton").onclick = function(){
    window.location.assign("https://cosmos255.github.io/daniel/");
    console.log("it worked");
   }