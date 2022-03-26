var x, y, res, nome; 
nome = prompt("Digite seu nome")
x = prompt("Digite um número"); // 8.8
// x = parseInt(x) // 8
x = parseFloat(x); 
y = prompt("Digite outro número"); // 1.2
// x = parseInt(y) // 1
y = parseFloat(y); 
res = x + y; //res=
document.write("Olá, " + nome + ". A sua média é de " + res + "."); // 

/*
Saída:
Hebert, res: 10
parseInt - inteiros
parseFloat - fracionados (float)
*/