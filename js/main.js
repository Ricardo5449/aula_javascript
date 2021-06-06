
function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/sign-in");
    //window.location.href = "https://digitalinnovation.one/sign-in";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouve aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma (n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    if (idade >= 18){
        validar = true 
    }
    else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));
*/

/*
var d =  new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/ 

/*
var count;
for(count = 0; count <= 5; count++) {
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade")
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista.reverse);
//console.log(lista.toString());
//console.log(lista.join(" - "));

/*
var nome = "Ricardo Mascarenhas";
var n1 = 5;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
*/
