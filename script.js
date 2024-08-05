let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let mail = document.getElementById('mail');
let password = document.getElementById('password');
let mobile = document.getElementById('mobile');
let date = document.getElementById('dob');

let para = document.getElementById('para');
let result;



let button = document.getElementById('button');
button.addEventListener('click', myfun);

let passwordshow=document.getElementById('passwordshow');
passwordshow.addEventListener('click',myfun2);



function myfun(){
    var letters = /^[a-zA-Z]*$/;
    if(fname.value=="" && lname.value==""){
        alert("Please Fill all the Required Credentials");
    }
    else{
        if(!fname.value.match(letters) || !lname.value.match(letters)){
            result = "First name and Last name  should be of alphabets";
            para.innerHTML = result;
            para.style.fontSize = "20px";

        }
        if(mobile.value.length!=1 && mobile.value.length!=10){
            result = "Mobile Number Should not Exceed more than 10 Digits";
            para.innerHTML = result;
            para.style.fontSize = "20px";

        }
        if(fname.value.match(letters) && lname.value.match(letters)){
          if(mobile.value.length==10){
            result = "Registration Successful";
            para.innerHTML = result;
            para.style.fontSize = "20px";
          }
        }
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





