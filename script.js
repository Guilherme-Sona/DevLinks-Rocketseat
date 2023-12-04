function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute(
      "src",
      "./assets/354105283_948974709695251_4200798605782927444_n.jpg"
    )
    img.setAttribute("alt", "foto de perfil light mode")
  }else{
    // se não estiver light mode, manter a imagem normal
    img.setAttribute(
      "src",
      "./assets/369563778_3519174508350579_7257347753991313720_n.jpg"
    )
    img.setAttribute("alt", "foto de perfil dark mode")
  }
}
