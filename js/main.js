/* Funciones para el menu en estado responsive */
const ham = document.querySelector('.ham')
const enlaces = document.querySelector('.enlaces-menu')
const barras = document.querySelectorAll('.ham span')

ham.addEventListener('click', () => { 
    enlaces.classList.toggle('activado')
    barras.forEach(child => { 
        child.classList.toggle('animado')
    })
})

/* Modal del Formulario */
let btn = document.getElementById("btn-add")
let cont = document.getElementById("modal-container")
btn.addEventListener("click", () => {
    cont.innerHTML = `
    <div class="modal" id ="modal">
        <div class="modal-content" id="modal-content">
            <button class="btn-closed" id = "btn-closed">X</button>
             
        </div>
    </div>`

    /* Cerrar el modal dando click en la x o afuera del div */
    document.getElementById("modal").addEventListener("click",
    (e) => { 
        if (e.target.id === "modal" || e.target.id === "btn-closed") { 
            cont.innerHTML = ""
        }
    })
})