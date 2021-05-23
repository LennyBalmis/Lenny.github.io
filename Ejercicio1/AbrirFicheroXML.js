'use strict'
function Cargar(){

    loadDocA("libros.xml","xml");
}
loadDocA("libros.xml", "xml")
function gestionarFicheroXML(xml){
    let tabla = document.querySelector(".table");
    let capaVacia = " ";
	let libros = xml.querySelectorAll("libro");

    let minimo = numeroMinimo(libros);
    alert(minimo)
	for(let i=0; i<libros.length; i++){
		capaVacia += "<div class='celda'>" + libros[i].querySelector("ISBN").textContent + "</div>";
		capaVacia += "<div class='celda'>" + libros[i].querySelector("titulo").textContent + "</div>";
		capaVacia += "<div class='celda'>" + libros[i].querySelector("nivelProfundidad").textContent + "</div>";
		capaVacia += "<div class='celda'>" + libros[i].querySelector("autores").textContent + "</div>";
		capaVacia += "<div class='celda'>" + libros[i].querySelector("editorial").textContent + "</div>";
		capaVacia += "<div class='celda'>" + libros[i].querySelector("fechaPublicacion").textContent + "</div>";
		capaVacia += "<div class='celda'>" + libros[i].querySelector("paginaWeb").textContent + "</div>";
		if(minimo == +libros[i].querySelector("precio").textContent){
            capaVacia += "<div class='Barato'>" + libros[i].querySelector("precio").textContent + "</div>";
        }else{
            capaVacia += "<div class='celda'>" + libros[i].querySelector("precio").textContent + "</div>";
        }
        capaVacia += "<div class='fila'> </div>"
    }

    tabla.innerHTML = capaVacia;
    let capa = document.querySelector("div:nth-child(1)") 
    capa.addEventListener("click",Cargar);
}
function numeroMinimo(libros){
  let precios = []

    for (let j = 0; j < libros.length; j++) {
        precios.push(+libros[j].querySelector("precio").textContent)
    }
   return Math.min(...precios)

}
