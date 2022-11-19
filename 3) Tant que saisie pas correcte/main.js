function genre() {
    let ask=prompt("Quel est le genre de votre Tamagotchi ?")
    let femelle="femelle";
    let male="male";
    let confirmation=confirm("Vous avez bien regardé ?")

    if (ask.toLowerCase() == femelle) {

        if (confirmation) {
            alert("Votre Tamagotchi est" + " " + femelle
            );
        } else {
            alert("Il faut recommencer !")
            genre()
        }

    } else if (ask.toLowerCase() == male || ask.toLowerCase() == "mâle") {

        if (confirmation) {
            alert("Votre Tamagotchi est" + " " + male
            );
        } else {
            alert("Il faut recommencer !")
            genre()
        }

    } else {
        alert("Genre non conforme");
        genre()
        }
}


