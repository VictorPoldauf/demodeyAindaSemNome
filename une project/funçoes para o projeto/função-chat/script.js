const criar = () => {
    let btn = document.createElement("p");
    let t = document.createTextNode("segundo texto do script");
    let inp = document.createElement("input");
    let botao = document.createElement("button");
    let k = document.createTextNode("enviar");
    btn.appendChild(t);
    document.body.appendChild(btn);
    document.body.appendChild(inp);
    botao.appendChild(k);
    document.body.appendChild(botao);

}