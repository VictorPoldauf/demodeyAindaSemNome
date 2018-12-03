let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");

const next = () =>{
    page1.style.dispaly = 'none';
    page2.style.dispaly = 'flex';
}
const back = () =>{
    page2.style.dispaly = 'none';
    page1.style.dispaly = 'flex';
}