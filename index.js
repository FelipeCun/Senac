/*
1. Construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    
    - 💡  Dica
        
        <aside>
        ☝ Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
        
        </aside>
        
    
    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    
    g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
    

let nome = prompt("Qual é o seu nome? ");
let idade = prompt("Qual a sua idade? ");
let acao = prompt("Qual linguagem de programação você esta praticando? ")

console.log("valor: " + nome + " - tipo: " + typeof(nome));
console.log("valor: " + idade + " - tipo: " + typeof(idade));


alert("Olá " + nome + ", "  + "você tem " + idade + " anos de idade." + "\nVocê esta praticando a linguagem " + acao + ".");*/





/*
2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:


    let Resposta1 = prompt("Você gosta de pizza? (Sim/Não)");
    let Resposta2 = prompt("Você gosta de sushi? (Sim/Não)");
    let Resposta3 = prompt("Você gosta de hamburger? (Sim/Não)");

    alert("Você gosta de pizza? " + Resposta1 + "." + "\nVocê gosta de sushi? " + Resposta2 + "." + "\nVocê gosta de hamburger? " + Resposta3 + ".");*/
    




/*
let a = 10;
let b = 25;
c = a;
a = b;
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10 */

 /*Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

let soma = num1 + num2;
let multiplicacao = num1 * num2;

console.log("O primeiro número somado ao segundo número resulta em: " + soma);
console.log("O primeiro número multiplicado pelo segundo número resulta em: " + multiplicacao);*/