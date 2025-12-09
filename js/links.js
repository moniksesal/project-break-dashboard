const nameLink = document.getElementById("nameLink")
const URLLink = document.getElementById("URLLink")
const addButton = document.getElementById("addButton")
const listedLinks = document.getElementById("listedLinks")

let links = []

// función con destructuring que devuelve el nombre y la url
function getLinks() {
    return {
        name: nameLink.value,
        url: URLLink.value
    }
}

// función para pintar un link individual en el DOM
function paintLink(link) {
    const li = document.createElement("li")
    li.innerHTML = `
        <a href="${link.url}" target="_blank">${link.name}</a>
        <button class="removeLink">x</button>
    `
    listedLinks.appendChild(li)
}

// función para añadir a DOM y guardar en el localStorage
function addToDOM() {
    const { name, url } = getLinks()
    if (!name || !url) return //si el nombre o la url están vacíos, para la función para no añadir vacíos
    const newLink = { name, url }
    links.push(newLink)
    localStorage.setItem("links", JSON.stringify(links)) //guardar en local
    paintLink(newLink)
    nameLink.value = "" //limpiar los inputs a mano para que el user no tenga que borrarlo a mano
    URLLink.value = ""
}

// función para el botón de añadir que llama a la del DOM
function buttonEvent() {
    addButton.addEventListener("click", () => {
        addToDOM()
    })
}

// función para el botón de eliminar del DOM y del localStorage
function removeFromDOM() {
    listedLinks.addEventListener("click", (e) => {
        if (e.target.classList.contains("removeLink")) {
            const li = e.target.parentElement
            const linkName = li.querySelector("a").textContent
            links = links.filter(link => link.name !== linkName)
            localStorage.setItem("links", JSON.stringify(links))
            li.remove()
        }
    })
}

//función para cargar los links al iniciar la página
function loadLinks() {
    links = JSON.parse(localStorage.getItem("links")) || []
    links.forEach(link => paintLink(link))
}

loadLinks()
buttonEvent()
removeFromDOM()