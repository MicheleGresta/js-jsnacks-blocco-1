const lista1 = [2,2,2,2,2,2,2];
const lista2 = [3,3,3,3];



for (let i = 0; i <lista1.length; i++){
    if (lista2.length !== lista1.length) {
        lista2.push("3");
    } 
}

console.log(lista2)
console.log(lista1)