function toggleSidebar() {
	var sidebar = document.getElementById('sidebar');
	var test3 = document.getElementById('border-right');
	if (sidebar.style.width === '250px') {
		sidebar.style.width = '0';
		test3.style.width = '75px';
	} else {
		sidebar.style.width = '250px';
		test3.style.width = '0px'
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


function rechercher() {
	const filtres = document.getElementById("filtres")
	const categorie = document.getElementById("categorie")
	const rechercheDossards = document.getElementById("recherche-dossards")
	const onChange = () => {
		if (filtres.value === "categorie") {
			categorie.classList.remove('invisible')
			rechercheDossards.classList.add("invisible")
		}
		else if (filtres.value === "Ndossard") {
			rechercheDossards.classList.remove('invisible')
			categorie.classList.add("invisible")
		}
	}

	onChange()
	filtres.addEventListener("change", onChange)

	const rechercher = document.getElementById('rechercher')
	rechercher.addEventListener("click", () => {
		if (filtres.value === "categorie") {
			const categories = document.getElementById("categorie").value
			let categorieId = null
			switch (categories) {
				case "minime":
					categorieId = 1
					break
				case "cadet":
					categorieId = 2
					break
				case "junior":
					categorieId = 3
					break
				case "benjamin":
					categorieId = 4
					break
				default: break
			}
			fetch(`/api/rechercher/categorie?id=${categorieId}`)
				.then(res => res.json())
				.then(data => {
					for (let i = 0; i < data.length; i++) {
						console.log(data[i])
					}
				})
		}
		else if (filtres.value === "Ndossard") {
			const dossard = Number(document.getElementById("dossard").value)
			fetch(`/api/rechercher/eleve?dossard=${dossard}`)
				.then(res => res.json())
				.then(data => {
					console.log(data)
				})
		}
	})

}

rechercher()