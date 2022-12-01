// Defino las Variables para el Footer
let nombre = 'Alejandro Daniel Di Stefano',
    comision = 'Educación IT';

let formulario = [
    {
        id: 'monto', 
        label: 'Monto', 
        type: 'text'
    },
    {
        id: 'cantCuotas', 
        label: 'Cantidad de Cuotas', 
        type: 'text'
    },
    {
        id: 'modalidad', 
        label: 'Modalidad de Crédito', 
        type: 'select', 
        options: [ 'Frances','Aleman' ] 
    },
    {
        id: 'tasaInteres', 
        label: 'Tasa de Interés', 
        type: 'text'
    },
    {
        id: 'calcular', 
        label: 'Calcular', 
        type:'submit'
    }
]
const
    d = document,
    copy = d.querySelector('#footer .copy'),
    year = 2022;

function setFooter() {
    copy.innerHTML = `&copy;${year} ${copy.innerHTML} | ${nombre} de la Comisión #${comision}`;
}
setFooter();

// Definimos las Variables del Crédito
const
    monto = parseFloat(prompt('Ingrese el Monto que Desea Solicitar: ')),
    cantCuotas = parseInt(prompt('Ingrese la Cantidad de Cuotas que desea financiar: ')),
    iva = parseFloat(1.21),
    mes = 360,
    anios = ((cantCuotas * mes) / 12) / mes;


if (cantCuotas <= 12) {
    valorInteres = (1.20)
} else if (cantCuotas > 12 && cantCuotas <= 18) {
    valorInteres = (1.30)
} else if (cantCuotas > 18 && cantCuotas <= 24) {
    valorInteres = (1.40)
} else {
    valorInteres = (1.50)
}

// Defino valores de las Cuotas y del Monto total con redondeo de 2 Decimales
let
    cuota = (monto * (Math.pow(1 + valorInteres / 100, anios) * valorInteres / 100) / (Math.pow(1 + valorInteres / 100, anios) - 1)).toFixed(2),
    montoTotalsinIva = Number((cuota * cantCuotas / 10)).toFixed(2),
    montoTotal = Number((montoTotalsinIva * iva).toFixed(2));

function resultado() {
    for (i = 0; i < cantCuotas; i++) {
        console.log('El valor de la Cuota Nro ' + parseInt(i + 1) + ' ' + 'es de' + ' ' + '$' + (cuota / 10).toFixed(2) + ' ' + 'pesos Argentinos')
    }
    console.log('Usted adquirió el Préstamo finaciado con el método Francés')
    console.log('El monto totalque debe abonar al finalizar el pago total será de:' + ' ' + '$' + montoTotalsinIva + ' ' + 'S/IVA')
    console.log('El monto totalque debe abonar al finalizar el pago total será de:' + ' ' + '$' + montoTotal + ' ' + 'C/IVA')
}
// resultado();


//********** Manejo del DOM **********//

// Defino la Navbar
const navBar = (limit = []) => {
    let nav = d.createElement('nav');
    let ul = d.createElement('ul');
    ul.className = 'menu';
    for (let link of limit) {
        ul.innerHTML += `<li><a href="#${link}">${link}</a></li>`;
    }
    nav.appendChild(ul)
    header.appendChild(nav)
}
navBar(['Inicio', 'Cotizaciones', 'Nosotros', 'Contacto']);


// Defino Tabla de Simulación
const sectionTabla = (limits = []) => {
    let
        sectionTabla = d.createElement('section'),
        inputsValues = d.createElement('article');

    sectionTabla.className = 'tabla'
    inputsValues.className = 'imputs-valores'

    for (let field of limits) {
        inputsValues.innerHTML += `
        <div class="imputs">
        ${ field.type != 'submit' ?
            `<label for="#${field.id}">${field.label}</label>` : ''
        }   
        ${
            field.type == 'select' ? 
            `<select id="${field.id}">
            ${ field.options.map(opt => `<option>${opt}</option>`) }
            </select>` :
            field.type == 'textarea' ?
            `<textarea id="${field.id}"></textarea>` :
            field.type != 'submit' ?
            `<input id=${field.id} type="${field.type}">` : 
            `<button id="${field.id}" class="boton">${field.label}</button>` 
        }
        </div>`;
    }

    sectionTabla.appendChild(inputsValues)
    main.appendChild(sectionTabla)    
}
sectionTabla(formulario);
