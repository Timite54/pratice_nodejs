const fileSystem = require('fs');
const readline = require('node:readline');

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


/*File System avec nodeJs(CRUD)*/
fileSystem.readFile("./menu", "utf-8", (err, data) => {
    if (err) return console.log(err);
    console.log("le contenenu du fichier :\n", data)
})

fileSystem.writeFile("./commande", "Bonjour comment tu vas", (err) => {
    if (err) return console.log(err);
})

fileSystem.appendFile("./commands.txt", "Bonjour tout le monde", (err) => {
    if (err) return console.log(err);
})

fileSystem.rmdir("fichier", (err) => {
    if (err) return console.log(err);
})

/* EXERCICE */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`
1 - Creation
2 - Afficher
3 - Modifier
4 - Supprimer   
`, name => {
    switch (name) {
        case "1":
            fileSystem.writeFile(
                "./praticeFile", "Create permettant de faire le CRUD d'une tache",
                (err) => {
                    if (err) return console.log(err);
                }
            )
            break
        case "2":
            fileSystem.readFile("./praticeFile", "utf-8", (err, data) => {
                if (err) return console.log(err);
                console.log(data)
            })
            break
        case "3":
            fileSystem.appendFile("./praticeFile", "New line", (err) => {
                if (err) return console.log(err);
            })
            break;
        case "4":
            fileSystem.unlink("./praticeFile", (err) => {
                if (err) return console.log(err);
            })
            break;

    }
    rl.close();
});