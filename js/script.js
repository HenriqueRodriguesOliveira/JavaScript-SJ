var lista = ["Jose", "Henrique", "Rodrigues", 122];

console.log(lista.indexOf("Henrique"));

console.log(lista[1]);

console.log((lista[1] = 500));
console.log(lista[1]);

lista.push("Zeca");

lista.shift();

lista.pop();

console.log(lista.length);

console.log(lista.join("; "));
console.log(lista);
