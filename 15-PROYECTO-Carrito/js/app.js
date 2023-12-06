//variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];



cargarEventListeners();
function cargarEventListeners(){
//cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener("click", agregarCurso);
}

//funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    //console.log(curso);

    //crear un objeto con contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad:1
    }

    //agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];


    console.log(articulosCarrito);
    carritoHTML();

}

//muestra el carrito de compras en el HTML

function carritoHTML(){
    articulosCarrito.forEach(curso => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                ${curso.titulo}
        `;

        //agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}