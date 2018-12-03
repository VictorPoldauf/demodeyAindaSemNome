let btn = document.querySelector(".btn-next");
btn.onclick = function() {proximaDivi()};
let text = document.querySelector(".resp1");
text.onkeydown = function(event) {texto(event)};
let i=0;
const proximaDivi = () =>{
    i++;
    let nome = text.value;
    document.querySelector(".resp2").innerHTML = nome;
    let scroll = document.querySelector(`.scroll${i+1}`);
    let scroll2 = document.querySelector(`.scroll${i}`);
    let cadastro1 =document.querySelector(`.paginacadastro${i}`);
    let cadastro2 =document.querySelector(`.paginacadastro${i+1}`);
    cadastro2.style.display ="flex";
    cadastro1.style.display ="none";
    scroll.style.width = "25px"
    scroll.style.height = "25px"
    scroll2.style.width = "15px"
    scroll2.style.height = "15px"
}

function texto (event){
    if(event.which == 13){
        let nome = text.value;
        document.querySelector(".resp2").innerHTML = nome;
        proximaDivi();
    }
}