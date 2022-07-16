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

/* Modal del Formulario para agregar talleres / Se pueden utilizar tambien para las alertas */
let btn = document.getElementById("btn-add")
let cont = document.getElementById("modal-container")
btn.addEventListener("click", () => {
    cont.innerHTML = `
    <div class="modal" id ="modal">
        <div class="modal-content">
            <button class="btn-closed" id = "btn-closed">X</button>
            <div class="contenedor">
                <div class="centro">
                    <h1>Agregar un Nuevo Taller</h1>
                    <form action="aqui va adonde va a dirigir el formulario" method="post">
                    <div class="campotexto">
                        <input type="text" name="name-taller" required>
                        <span></span>
                        <label>Nombre del Taller</label>
                    </div>
                    <div class="campotexto">
                        <input type="text" name="teacher" required>
                        <span></span>
                        <label>Docente</label>
                    </div>
                    <div class="campotexto">
                        <input type="text" name="spacio" required>
                        <span></span>
                        <label>Espacio</label>
                    </div>
                    <div class="campotexto">
                        <input type="text" name="type-taller" required>
                        <span></span>
                        <label>Tipo de Taller</label>
                    </div>
                    <div class="campotexto">
                        <input type="text" name="hour" required>
                        <span></span>
                        <label>Horario</label>
                    </div>
                    <input name="submit" type="submit" value="Agregar Taller">
                    </form>
                </div>
            </div>
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
