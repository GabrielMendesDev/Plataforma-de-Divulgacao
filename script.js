function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/fotominha.png")
    img.setAttribute("alt", "image-profile-white")
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/img-blackmode.jpeg")
    img.setAttribute("alt", "image-profile-black")
    localStorage.setItem("theme", "dark")
  }
}

// Verifica se há um tema salvo no localStorage e aplica
const savedTheme = localStorage.getItem("theme")
const img = document.querySelector("#profile img")

if (savedTheme === "light") {
  document.documentElement.classList.add("light")
} else if (savedTheme === "dark") {
  img.setAttribute("src", "./assets/img-blackmode.jpeg")
  img.setAttribute("alt", "image-profile-black")
  document.documentElement.classList.remove("light") // Garante que o tema dark seja aplicado
}
