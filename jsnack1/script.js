const listaNomi = ["michele","matteo","mattia","francesco","marco"];
const listaCognomi = ["bianchi", "verdi", "neri" , "rossi", "marrone"];

for (i = 0; i < listaNomi.length; i++) {
    console.log(listaNomi[Math.round(Math.random()*[i])] + " " +listaCognomi[Math.round(Math.random()*[i])])
}




