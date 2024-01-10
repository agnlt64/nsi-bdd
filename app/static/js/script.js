function toggleSidebar() {
	var sidebar = document.getElementById('sidebar')
	if (sidebar.style.width === '250px') {
		sidebar.style.width = '0';
	} else {
		sidebar.style.width = '250px';
	}
}

// function filterTable() {
// 	var input, filter, table, tr, td, i, txtValue;
// 	input = document.getElementById("myInput");
// 	filter = input.value.toUpperCase();
// 	table = document.getElementById("myTable");
// 	tr = table.getElementsByTagName("tr");
// 	for (i = 0; i < tr.length; i++) {
// 		td = tr[i].getElementsByTagName("td")[1];
// 		if (td) {
// 			txtValue = td.textContent || td.innerText;
// 			if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 				tr[i].style.display = "";
// 			} else {
// 				tr[i].style.display = "none";
// 			}
// 		}
// 	}
// }

function creerLigne(table, nomFamille, prenom,temps) {
	const tr = table.children[1].children[0]
	tr.innerHTML =""
	for (i = 0; i < 3; i++) {
		const td = document.createElement("td")
		if(i === 0) {
			td.textContent = nomFamille
		}
		if(i === 1) {
			td.textContent = prenom
		}
		if(i === 2) {
			td.textContent = temps
		}
		tr.appendChild(td)
		
	}
}

function rechercher() {
	const table = document.getElementById("table-resultat")
	const filtres = document.getElementById("filtres")
	const divCategorie = document.getElementById("categorie")
	const rechercheDossards = document.getElementById("recherche-dossards")
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
		if (filtres.value === "categorie") {
			const divCategorie = document.getElementById("categorie")
			const categorie = divCategorie.children[0].value
			const genre = divCategorie.children[1].value
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
			fetch(`/api/rechercher/categorie?id=${categorieId}&genre=${genre}`)
				.then(res => res.json())
				.then(data => {
					for (let i = 0; i < data.length; i++) {
						console.log(data[i])
					}
				
				})
				filtres.value = "categorie"
		}
		else if (filtres.value === "Ndossard") {
			const dossard = Number(document.getElementById("dossard").value)
			if(dossard !== 0){
				filtres.value = "Ndossard"
				fetch(`/api/rechercher/eleve?dossard=${dossard}`)
				.then(res => res.json())
				.then(data => {
					const nomFamille = data.nom_famille
					const prenom = data.prenom
					const temps = data.temps
					table.classList.remove("invisible")
					creerLigne(table, nomFamille, prenom, temps)
				
				})
				
			}
			
		}
	})

}

rechercher()