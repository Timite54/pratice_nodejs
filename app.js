const fileSystem = require('fs');
const readline = require('node:readline');
const events = require('events');

console.log('Hello Node.js!');
console.log('Bienvenu dans mon backend!');

/*utiliation des callback*/
// function sumArray(array, callback) {
//   const sum =  array.reduce((acc, comp) => acc + comp, 0);
//   callback(sum)
// }
// sumArray([23,45,44], (res) => {
//     console.log(res)
// })


/*Ecrire une fonction appelé commander plat, cette fonction s'attend a recevoir un param de palt
* mettez en evidence les étapes de livraison du plat avec les promises*/

// const commandPlat = (plat) => {
//     return new Promise((result, reject) => {
//         if (plat === "viande") {
//             return result();
//         }else return reject();
//     })
// }
// commandPlat("viande").then((result) => {
//     console.log("Cest le bon plat")
// })
//     .catch((err) => {
//     console.log("ce nest pas le bon")
// })
//
//
// /*File System avec nodeJs(CRUD)*/
// fileSystem.readFile("./menu", "utf-8", (err, data) => {
//     if (err) return console.log(err);
//     console.log("le contenenu du fichier :\n", data)
// })
//
// fileSystem.writeFile("./commande", "Bonjour comment tu vas", (err) => {
//     if (err) return console.log(err);
// })
//
// fileSystem.appendFile("./commands.txt", "Bonjour tout le monde", (err) => {
//     if (err) return console.log(err);
// })
//
// fileSystem.rmdir("fichier", (err) => {
//     if (err) return console.log(err);
// })

/* EXERCICE */
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// rl.question(`
// 1 - Creation
// 2 - Afficher
// 3 - Modifier
// 4 - Supprimer
// `, name => {
//     switch (name) {
//         case "1":
//             fileSystem.writeFile(
//                 "./praticeFile", "Create permettant de faire le CRUD d'une tache",
//                 (err) => {
//                     if (err) return console.log(err);
//                 }
//             )
//             break
//         case "2":
//             fileSystem.readFile("./praticeFile", "utf-8", (err, data) => {
//                 if (err) return console.log(err);
//                 console.log(data)
//             })
//             break
//         case "3":
//             fileSystem.appendFile("./praticeFile", "New line", (err) => {
//                 if (err) return console.log(err);
//             })
//             break;
//         case "4":
//             fileSystem.unlink("./praticeFile", (err) => {
//                 if (err) return console.log(err);
//             })
//             break;
//
//     }
//     rl.close();
// });

/*EXERCICE: Gestion des évènement*/
// const instanceEmitter1 = new events();
// instaceEmitter.on('Soirée spéciale', (start, end, product, prixSpe, prix) => {
//     console.log(
// `L'évenemence à ${start}h et prend fin à ${end}h\n
// ****************MENU************
// Vous aurez les vraies ${product} à ${prixSpe} francs au lieu de ${prix} frnacs`
//     );
// });
//
// instaceEmitter.emit('Soirée spéciale', 10, 23, 'cuisses de poulets', 200, 500);

// instanceEmitter2 = new events();
// instanceEmitter2.on("commande", () => {
//     console.log("\n1- Reception de la commande");
//     instanceEmitter2.emit("preparation");
// });
// instanceEmitter2.on("preparation", () => {
//     console.log("\n2- Préparation de la commande");
//     instanceEmitter2.emit("livraison");
// });
// instanceEmitter2.on("livraison", () => {
//     console.log("\n3- Livraison de la commande");
// });
// instanceEmitter2.emit("commande");

/*EXERCICE: Promise avec Async/Await  */

const commandPlat = (plat) => {
    return new Promise((result, reject) => {
        if (plat === "viande") {
            return result();
        }return reject();
    })
}
const verifyCommand = async (plat) =>{
    try {
        await commandPlat(plat);
        console.log('Le plat est bon : ' + plat);
    }catch (err) {
        console.log(err);
    }
}
verifyCommand("viande")

