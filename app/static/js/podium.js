function podium() {
    const valider = document.getElementById("bouton-podium")

    valider.addEventListener("click", () => {
        const filtres = document.getElementById("filtres")
        const categorie = filtres.children[0].value
        const genre = filtres.children[1].value
        const annee = filtres.children[2].value
        let categorieId = null
        switch (categorie) {
            case "minime":
                categorieId = 2
                break
            case "cadet":
                categorieId = 3
                break
            case "junior":
                categorieId = 4
                break
            case "benjamin":
                categorieId = 1
                break
            default: break
        }
        fetch(`/api/rechercher/podium?id=${categorieId}&genre=${genre}&annee=${annee}`)
            .then(res => res.json())
            .then(data => {
                // si il n'y a pas de résultats on reset tout
                if (data.length == 0) {
                    document.getElementById("premier-prenom").innerHTML = ""
                    document.getElementById("premier-temps").innerHTML = ""
                    document.getElementById("deuxieme-prenom").innerHTML = ""
                    document.getElementById("deuxieme-temps").innerHTML = ""
                    document.getElementById("troisieme-prenom").innerHTML = ""
                    document.getElementById("troisieme-temps").innerHTML = ""
                }
                for (let i = 0; i < data.length; i++) {
                    // on ajoute les données au podium
                    if (i == 0) {
                        document.getElementById("premier-prenom").textContent = data[i][1] + ' ' + data[i][0].toUpperCase()
                        document.getElementById("premier-temps").textContent = data[i][2]
                    }
                    if (i == 1) {
                        document.getElementById("deuxieme-prenom").textContent = data[i][1] + ' ' + data[i][0].toUpperCase()
                        document.getElementById("deuxieme-temps").textContent = data[i][2]
                    }
                    if (i == 2) {
                        document.getElementById("troisieme-prenom").textContent = data[i][1] + ' ' + data[i][0].toUpperCase()
                        document.getElementById("troisieme-temps").textContent = data[i][2]
                    }
                }
            })
    })
}

podium()