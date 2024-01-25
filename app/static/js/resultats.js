
function creerLigne(table, nomFamille, prenom, temps, supprimerPrecedent = false) {
	const tbody = table.children[1]
	if (supprimerPrecedent) {
		tbody.innerHTML = ""
	}
	const tr = document.createElement('tr')
	// on ajoute les données dans la table en fonction de l'ID
	for (let i = 0; i < 3; i++) {
		const td = document.createElement('td')
		if (i === 0) {
			td.textContent = nomFamille
		}
		if (i === 1) {
			td.textContent = prenom
		}
		if (i === 2) {
			td.textContent = temps
		}
		tr.appendChild(td)
	}
	tbody.appendChild(tr)
}

function rechercher() {
	const table = document.getElementById("table-resultat")
	const filtres = document.getElementById("filtres")
	const divCategorie = document.getElementById("categorie")
	const rechercheDossards = document.getElementById("recherche-dossards")

	// fonction appelée quand le select change
	const onChange = () => {
		if (filtres.value === "categorie") {
			table.classList.add("invisible")
			divCategorie.classList.remove('invisible')
			rechercheDossards.classList.add("invisible")
		}
		else if (filtres.value === "Ndossard") {
			rechercheDossards.classList.remove('invisible')
			divCategorie.classList.add("invisible")
		}
	}

	onChange()
	filtres.addEventListener("change", onChange)

	const rechercher = document.getElementById('rechercher')
	rechercher.addEventListener("click", () => {
		table.children[1].innerHTML = ""
		const annees = document.getElementById("annees")
		if (filtres.value === "categorie") {
			const divCategorie = document.getElementById("categorie")
			const categorie = divCategorie.children[0].value
			const genre = divCategorie.children[1].value
			let categorieId = null
			// on créé l'ID en fonction de la valeur du select
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
			// on envoie une requete à l'API
			fetch(`/api/rechercher/categorie?id=${categorieId}&genre=${genre}&annee=${annees.value}`)
				.then(res => res.json())
				.then(data => {
					for (let i = 0; i < data.length; i++) {
						const nomFamille = data[i][0]
						const prenom = data[i][1]
						const temps = data[i][2]
						table.classList.remove('invisible')
						creerLigne(table, nomFamille, prenom, temps)
					}
				})
			filtres.value = "categorie"
		}
		else if (filtres.value === "Ndossard") {
			const dossard = Number(document.getElementById("dossard").value)
			if (dossard !== 0) {
				// on reset le select
				filtres.value = "Ndossard"
				fetch(`/api/rechercher/eleve?dossard=${dossard}&annee=${annees.value}`)
					.then(res => res.json())
					.then(data => {
						const nomFamille = data.nom_famille
						const prenom = data.prenom
						const temps = data.temps
						table.classList.remove("invisible")
						// on ajoute une ligne à la table
						creerLigne(table, nomFamille, prenom, temps, true)
					})
			}
		}
	})
}

rechercher()