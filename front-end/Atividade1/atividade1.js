var nome, RA, num1,num2,res;
nome=prompt("Digite o seu nome")
RA=prompt("Digite o seu RA")
num1=prompt("Digite um número");
num1=parseInt(num1);
num2=prompt("Digite outro número");
num2=parseInt(num2);
res=(num1==num2);
document.write(`Nome do aluno: ${nome}`);
document.write(`<br>RA: ${RA}`);
document.write(`<br>Números digitados:<br>num1: ${num1}<br> num2: ${num2}<hr>`);
document.write(`Igualdade: ${res}<br>`);
res=(num1===num2);
document.write(`Identico: ${res}<br>`);

/*
Nome do aluno: Seu nome (digitado no prompt) 
RA: seu RA (Digitado no prompt)
Números digitados:
num1: 12 (Ou o de sua escolha, digitado no prompt)
num2: 5 (Ou o de sua escolha, digitado no prompt)
-------------------
Igualdade: false (Dependente do valor, caso valor igual digitado o resultado será true)
Identico: false (Dependente do valor, caso valor igual digitado o resultado será true)
*/