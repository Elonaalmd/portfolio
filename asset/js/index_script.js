let spinner = document.getElementById("logi_spinner")
spinner.first_to_back = function () {
	spinner.appendChild(spinner['children'][0])
}
setInterval(spinner.first_to_back, 5000)

let gallery = document.getElementById("gallery")
gallery.first_to_back = function () {
	spinner.appendChild(spinner['children'][0])
}

setInterval(gallery.first_to_back, 5000)