let cadastro1 =document.querySelector('#paginacadastro1');
let hello =document.querySelector('#hello');
let cadastro2 =document.querySelector('#paginacadastro2');
let cadastro3 =document.querySelector('#paginacadastro3');
let cadastro4 =document.querySelector('#paginacadastro4');
let load =document.querySelector('#load');
let home =document.querySelector('#home');
let map =document.querySelector('#map');

const nextToSingUp = () =>{
    cadastro1.style.display ="flex";
    hello.style.display = 'none';
}
const nextToSingUp2 = () =>{
    cadastro2.style.display ="flex";
    cadastro1.style.display ="none";
}
const nextToSingUp3 = () =>{
    cadastro3.style.display ="flex";
    cadastro2.style.display ="none";
}
const nextToSingUp4 = () =>{
    cadastro4.style.display ="flex";
    cadastro3.style.display ="none";
}
const goToLoad = () =>{
    load.style.display ="flex";
    cadastro4.style.display ="none";
    setTimeout(goToHome, 9000);
}
const goToHome = () =>{
    home.style.display ="flex";
    load.style.display ="none";
}
const goToMap = () =>{
    map.style.display ="flex";
    home.style.display ="none";
}
