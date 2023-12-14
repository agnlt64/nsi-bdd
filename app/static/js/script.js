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

function filterTable() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

const slides = ['slide1', 'slide2', 'slide3']
for (let i = 0; i < slides.length; i++) {
	const slide = document.getElementById(slides[i])
	slide.animate({
		translate: `${10 + i*10}%`
	}, {
		duration: 2000,
		delay: i+1*1000,
		iterations: Infinity
	})
}