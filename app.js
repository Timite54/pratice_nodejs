const fileSystem = require('fs');
console.log('Hello Node.js!');
console.log('Bienvenu dans mon backend!');

/*utiliation des callback*/
function sumArray(array, callback) {
  const sum =  array.reduce((acc, comp) => acc + comp, 0);
  callback(sum)
}

sumArray([23,45,44], (res) => {
    console.log(res)
})

/*Ecrire une fonction appelé commander plat, cette fonction s'attend a recevoir un param de palt
* mettez en evidence les étapes de livraison du plat avec les promises*/

const commandPlat = (plat) => {
    return new Promise((result, reject) => {
        if (plat === "viande") {
            return result();
        }else return reject();
    })
}

commandPlat("viande").then((result) => {
    console.log("Cest le bon plat")
})
    .catch((err) => {
    console.log("ce nest pas le bon")
})

fileSystem.readFile("./menu", "utf-8", (err, data) => {
    if (err) return console.log(err);
    console.log("le contenenu du fichier :\n", data)
})

fileSystem.writeFile("./commande", "Bonjour comment tu vas", (err) => {
    if (err) return console.log(err);

})


