
var nome = "João das Couves";
var frase = "Banana, arroz e feijão.";
var lista = ["Alemão", "Belga", "Australiano"];
var carros = [{nome: "Celtinha", cor:"Vermelho"}, {nome: "Fusca", cor:"Azul"},
 {nome: "Opala", cor:"Preto"}, {nome: "DelRey", cor:"Champagne"}];

function questimc()
{
    var altura = prompt("Qual sua altura? (em cm)")/100;
    var peso = prompt("Qual seu peso? (em kg)");
    var imc = (peso/(altura * altura));
    document.getElementById("ResultIMC").innerHTML = "Seu IMC é: " + 
        imc.toFixed(2) + " kg/m² <u>(saiba mais)</u>";
    function calcimc(imc)
    {
        if (imc < 18.5)
        {
            return ("Magreza");
        }
        else if (18.5 <= imc && imc <= 24.9)
        {
            return ("Normal");
        }
        else if (24.9 <= imc && imc <= 30)
        {
            return ("Sobrepeso");
        }
        else
            return ("Obesidade");
    }
    alert(calcimc(imc));
}

function redirect()
{
    window.open("https://pt.wikipedia.org/wiki/Índice_de_massa_corporal");
}
var d = new Date();
var nascimento = prompt("Qual ano você nasceu?");
alert("Você viveu pelo menos: " + ((d.getFullYear() - nascimento)*365) + " dias.");

lista.push("Dalmata");
lista.pop();
//alert("Meu primeiro js");
//alert("Bem vindo " + nome);
//alert(frase);
console.log("Isso só vai aparecer no console, não na página");
console.log(frase.replace("Banana", "Bife"));
console.log("Pastor " + lista[0]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log("Pastor " + lista.join(", Pastor ") + ".");
console.log(carros[carros.length-1].nome);
console.log(carros)

