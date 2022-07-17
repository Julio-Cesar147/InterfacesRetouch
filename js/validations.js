const form = document.getElementById('form')
const inputs = document.querySelectorAll('#form input')

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo /* * La vas a usar para las de tipo texto */
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    workshop: false,
    teacher: false,
    space: false,
    type: false,
    hour: false
}

const validarFormulario = (e) => { 
    switch (e.target.name) { 
        case "workshop":
            validarCampo(expresiones.nombre, e.target, 'workshop')
        break;
        case "teacher":
            validarCampo(expresiones.nombre, e.target, 'teacher')
        break;
        case "space":
            validarCampo(expresiones.nombre, e.target, 'space')
        break;
        case "type-wks":
            validarCampo(expresiones.nombre, e.target, 'type-wks')
        break;
        case "hour":
            validarCampo(expresiones.telefono, e.target, 'hour')
        break;
    }
}

const validarCampo = (expresion, input, campo) => { 
    if (expresion.test(input.value)) {
        document.getElementById(`group-${campo}`).classList.remove('form-group-incorrecto')
        document.querySelector(`#group-${campo} .form-input-error`).classList.remove('form-input-error-active')
        campos[campo] = true
    } else { 
        document.getElementById(`group-${campo}`).classList.add('form-group-incorrecto')
        document.querySelector(`#group-${campo} .form-input-error`).classList.add('form-input-error-active')
        campos[campo] = false
    }
}

inputs.forEach((input) => { 
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

form.addEventListener('submit', (e) => { 
    e.preventDefault()

    if (campos.workshop && campos.teacher && campos.space && campos.type && campos.hour) {
        form.reset()
    } else { 
        document.getElementById('form-message').classList.add('form-message-activo')
    }
})