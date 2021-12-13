function initAlta (){
    console.warn('initAlta()')
    
    /*Array donde se enviarán las entradas del Formulario*/
    let productos = []

    /**/
    const inputsAlta = document.querySelectorAll('main form div input')
    const formAlta = document.querySelector('.form__alta')
    const submitAlta = document.querySelector('form button')

    submitAlta.disabled = true
    let camposValidos = [false,false,false,false,false,false,false]

    /*Array de validadores (son objetos), se indexa en sus index con los respectivos inputs.*/
    const regExpValidar = [
        /^.+$/,             /*regexp nombre*/
        /^.+$/,             /*regexp precio*/
        /^[0-9]+$/,         /*regexp stock*/
        /^.+$/,             /*regexp marca*/
        /^.+$/,             /*regexp categoria*/
        /^.+$/,             /*regexp detalles*/
        /^.+$/,             /*regexp foto*/
    ]

    /*Mensaje de validación a insertar en div debajo de input*/
    const setCustomValidityJS = function(mensaje, index){
        let divs = document.querySelectorAll('.container-alta div')
        divs[index].innerHTML = mensaje
        divs[index].style.display = mensaje? 'block' : 'none'
    }

    /*Funcion que evalua si algun campo es false, buscando en el array camposValidos. Si hay uno solo false, la funcion retorna false (y deshabilitamos el boton submit en la funcion validadora)*/
    function algunCampoNoValido(){
        let valido = 
            camposValidos[0] && 
            camposValidos[1] && 
            camposValidos[2] && 
            camposValidos[3] && 
            camposValidos[4] && 
            camposValidos[5] && 
            camposValidos[6] 
        return !valido
    }

    /*Funcion validadora*/
    function validar (valor, validador, index){
        
        if(!validador.test(valor)) {
            setCustomValidityJS('Este campo es requerido', index)
            camposValidos[index] = false
            submitAlta.disabled = true
            return null
        }

        camposValidos[index] = true
        submitAlta.disabled = algunCampoNoValido() //Analiza si hay algun campo no valido, para retornar true o false al disabled del boton submit

        setCustomValidityJS('', index)
        return valor
    }

    /*Recorro cada input para que cuando se este escribiendo, ejecute la funcion validar()*/
    inputsAlta.forEach((input,index) => {
        input.addEventListener('input', () => {
            if(input.type != 'checkbox'){
                validar(input.value, regExpValidar[index], index)
            }
        })
    })

    /*Codigo a ejecutar cuando el formulario se envie*/
    formAlta.addEventListener('submit', e =>{
        e.preventDefault()

        let producto = {
            nombre: inputsAlta[0].value,
            precio: inputsAlta[1].value,
            stock: inputsAlta[2].value,
            marca: inputsAlta[3].value,
            categoria: inputsAlta[4].value,
            detalles: inputsAlta[5].value,
            foto: inputsAlta[6].value,
            envio: inputsAlta[7].checked,
        }

        /*Reseteo de los inputs*/
        inputsAlta.forEach(input => input.value = '')

        /*Enviamos los valores ingresados [producto] al array [productos] e imprimimos en el html las respuestas del formulario*/
        productos.push(producto)

        renderProds()


        /*Deshabilitamos el boton nuevamente, y reseteamos todos los campos a false, para que se tengan que volver a validar.*/
        submitAlta.disabled = true
        camposValidos = [false,false,false,false,false,false,false]
    })


    
    /*Creamos la tabla utilizando AJAX y handlebars*/
    function renderProds(){
        /*Abrimos comunicacion asincronica*/
        const xhr = new XMLHttpRequest
        xhr.open('get', 'plantillas/listado.hbs')
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                let plantillaHbs = xhr.response
                //console.log(plantillaHbs)
                
                var template = Handlebars.compile(plantillaHbs); /*Le pasamos la respuesta de AJAX, el string en HBS*/
                let html = template({ productos: productos });
                
                document.getElementById('listado-productos').innerHTML = html
            }
        })
        xhr.send()
    }

    renderProds()
}