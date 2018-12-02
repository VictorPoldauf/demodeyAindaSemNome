//Fução para troca de pagina
 let pagina2 = document.querySelector('#pagina2');
 let pagina1 = document.querySelector('#pagina1');
const trocarPagina = () => {
    pagina1.style.display = 'none';
    pagina2.style.display = 'flex';
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Fução para voltar a pagina
const voltar = () => {
    pagina2.style.display = 'none';
    pagina1.style.display = 'flex';
}