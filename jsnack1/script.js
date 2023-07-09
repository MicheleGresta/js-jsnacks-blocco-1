const listaNomi = ["michele","matteo","mattia","francesco","marco"];
const listaCognomi = ["bianchi", "verdi", "neri" , "rossi", "marrone"];
const listaPersone = [];

for (i = 0; i < listaNomi.length; i++) {
    listaPersone.push(listaNomi[Math.round(Math.random()*[i])] + " " +listaCognomi[Math.round(Math.random()*[i])]);
}




console.log(listaPersone);