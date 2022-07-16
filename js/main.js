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
        <div class="modal-content">
            <button class="btn-closed" id = "btn-closed">X</button>
            <form action="" class="form" id="form">
                <!-- Grupo Nombre Taller -->
                <div class="form-group" id="group-name-wks">
                    <label for="workshop" class="form-label">Nombre del Taller</label>
                    <div class="form-group-input">
                        <input type="text" class="form-input" name="workshop" id="workshop" placeholder="Futbol">
                    </div>
                    <p class="form-input-error">El nombre de taller solo puede contener letras</p>
                </div>

                <!-- Grupo Nombre Docente -->
                <div class="form-group" id="group-teacher">
                    <label for="teacher" class="form-label">Nombre del Docente</label>
                    <div class="form-group-input">
                        <input type="text" class="form-input" name="teacher" id="teacher" placeholder="Fulanito de Tal">
                    </div>
                    <p class="form-input-error">El nombre del Docente solo puede contener letras</p>
                </div>

                <!-- Grupo Lugar -->
                <div class="form-group" id="group-space">
                    <label for="space" class="form-label">Espacio/Lugar</label>
                    <div class="form-group-input">
                        <input type="text" class="form-input" name="space" id="space" placeholder="Canchitas">
                    </div>
                    <p class="form-input-error">El nombre del Lugar solo puede contener letras</p>
                </div>

                <!-- Grupo Tipo de Taller -->
                <div class="form-group" id="group-type-wks">
                    <label for="type-wks" class="form-label">Tipo de Taller</label>
                    <div class="form-group-input">
                        <input type="text" class="form-input" name="type-wks" id="type-wks" placeholder="Cultural">
                    </div>
                    <p class="form-input-error">El nombre de taller solo puede contener letras</p>
                </div>

                <!-- Grupo Horario -->
                <div class="form-group" id="group-hour">
                    <label for="workshop" class="form-label">Horario</label>
                    <div class="form-group-input">
                        <input type="text" class="form-input" name="hour" id="hour" placeholder="11:00 - 13:00">
                    </div>
                    <p class="form-input-error">Solo se aceptan numeros y guiones medios</p>
                </div>

                <div class="form-message" id="form-message">
                    <p>Por Favor rellena todos los campos del Formulario</p>
                </div>
                <div class="form-group form-btn-enviar">
                    <button type="submit" class="form-btn">Agregar Taller</button>
                </div>
            </form>
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