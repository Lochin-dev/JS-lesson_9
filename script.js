"use strict";


let userName = document.querySelector('#username'),
   passWord = document.querySelector('#password'),
   koz = document.querySelector('.koz'),
   loginBtn = document.querySelector('.btn'),
   card=document.querySelector('.card'),
   nazat=document.querySelector('.nazat'),
   w_input=document.querySelectorAll('.w_input'),
   wrapper = document.querySelector('.wrapper');




userName.addEventListener('blur', (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "2px solid red";
    event.target.setAttribute('placeholder' , 'Plasse fill input ..... ')
  } else {
    event.target.style.border = "2px solid green";
    event.target.setAttribute('placeholder' , 'Eter username ')
  }
})


passWord.addEventListener('blur', (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "2px solid red";
    event.target.setAttribute('placeholder' , 'Plasse fill input ..... ')
  } else {
    event.target.style.border = "2px solid green";
    event.target.setAttribute('placeholder' , 'Eter username ')
  }
})

passWord.addEventListener('keyup', (event) => {
  if (event.target.value.trim().length === 0) {
    koz.setAttribute('class' , 'koz d-none')
  } else {
    koz.setAttribute('class' , 'koz d-black')
  }
})

koz.addEventListener('click' , ()=>{

if(passWord.getAttribute('type')==="password"){
  passWord.setAttribute('type','text');
  koz.innerHTML=`<i class="bi bi-eye-slash"></i>`
}else{
  passWord.setAttribute('type','password');
  koz.innerHTML=`<i class="bi bi-eye"></i>`
}
})

loginBtn.addEventListener('click',()=>{

  if(card.setAttribute('id',('qwert'))){
    card.getAttribute('id'==='')
   
  }else{
 nazat.setAttribute('class',('orqaga')) 
 wrapper.setAttribute('class' ,('div'))
  }
})


nazat.addEventListener('click',()=>{

  if(card.setAttribute('id',(''))){
    card.getAttribute('id'==='qwert')
  }else{
 nazat.setAttribute('class',('nazat'))
 wrapper.setAttribute('class' ,('wrapper'))
  }
})


for(let i = 0; i < w_input.length; i++){
  w_input[i].addEventListener('blur', (event) => {
    if (event.target.value.trim().length === 0) {
      event.target.style.border = "2px solid red";
      event.target.setAttribute('placeholder' , 'Plasse fill input ..... ')
    } else {
      event.target.style.border = "2px solid green";
      event.target.setAttribute('placeholder' , 'Eter username ')
    }
  })
}




