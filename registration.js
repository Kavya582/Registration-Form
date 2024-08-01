let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let mail = document.getElementById('mail');
let password = document.getElementById('password');
let mobile = document.getElementById('mobile');
let date = document.getElementById('dob');

let para = document.getElementById('para');
para.style.color="black";
let result;
let variable;
let i;

let button = document.getElementById('button');
button.addEventListener('click', myfun);

let passwordshow=document.getElementById('passwordshow');
passwordshow.addEventListener('click',myfun2);





function myfun(){

   

   if((fname.type=="text" && lname.type=="text" && mobile.value.length==10 && mobile.value.length!=0)){
    alert("Your Registration is Successful");
   }

   else{
    alert("You Must Fill The All Required Feilds");
   }
     
}


function myfun2(){
    if(password.type=="password"){
        password.type="text";
    }
    else{
        password.type="password";
    }
}





