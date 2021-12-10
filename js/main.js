var elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]

function start(){
    /*-------------------------------------------------------------------------------------------------------------*/
    /*Creamos una funcion que va a iniciar una comunicación asincronica con el servidor, para obtener una plantilla*/
    /*-------------------------------------------------------------------------------------------------------------*/
    function ajax (url, metodo ){     //metodo='get' = aseguramos que el metodo sea GET cuando no definan el metodo al llamar la funcion
        let xhr = new XMLHttpRequest
        xhr.open(metodo || 'get', url)
        xhr.send()

        return xhr                          //afuera vamos a poder hacer el addeventlistener 'load'
    }

    function getNombreArchivo(id){
        return 'vistas/' + (id || 'inicio') + '.html'      // short circuit operator -- si ID no esta definido, ID = 'inicio
        //return 'plantillas/principales/' + (id? id : 'inicio') + '.html'      // operador ternario
    }

    function marcarLink(id){
        let links = document.querySelectorAll('.nav-bar__nav-link')
        links.forEach( link => {
            if (link.id == id ){ link.classList.add('selected')}
            else{ link.classList.remove('selected')}
        })
    }

    function initJS(id) {
        if(id == 'alta') {
            initAlta()
        }
        else if(id == 'inicio') {
            initInicio()
        }
        else if(id == 'nosotros') {
            initNosotros()
        }
        else if(id == 'contacto') {
            initContacto()
        }
    }

    function cargarPlantilla(id){
        let archivo = getNombreArchivo(id)
        let xhr = ajax(archivo) 
        xhr.addEventListener('load', () => {
            let plantilla = xhr.response 
            
            // Carga del código de vista (HTML) de la plantilla
            let main = document.querySelector('main')
            main.innerHTML = plantilla //SE INYECTA PLANTILLA EN EL MAIN

            // Carga del código script (JS) de la plantilla
            initJS(id)
        })
    }

    /*----------------------------------------------------------------------------------------------------------------------------*/
    /*Recupero las plantillas y las inyecto, al hacer click, recupero ID de cada link que coincide con el elemento html a inyectar*/
    /*----------------------------------------------------------------------------------------------------------------------------*/
    function cargarPlantillas (){
        /*---------------------------------------------------------*/
        /*Carga inicial de la vista determinada por la url visitada*/
        /*---------------------------------------------------------*/
        let id = location.hash.slice(1) || 'inicio'
        marcarLink(id)
        cargarPlantilla(id) 

        /*-------------------------------------------------------------*/
        /*Carga de cada uno de los contenidos segun la navegacion local*/
        /*-------------------------------------------------------------*/
        let links = document.querySelectorAll('.nav-bar__nav-link')
        console.log(links)

        links.forEach( link => {
            link.addEventListener('click', e => {                        //Evento a ejecutar cada vez que le hagamos click a cada link
                e.preventDefault()

                let id = link.id                                         //Ante cada click a cada link, recupero el id del elemento clickeado
                console.log(id + ' - click en el link')
                location.hash = id                                       //El ID recuperado lo incluyo en la navegacion mediante hash y logramos tener historial
            })
        })

        /*--------------------------------------------------*/
        /*Codigo a ejecutar cuando haya un cambio en el hash*/
        /*--------------------------------------------------*/
        window.addEventListener('hashchange', () =>{ 
            //console.log('Cambió la url - hashchange')
    
            /*Recupero el id para usar mas tarde, pero en este caso utilizando el metodo de string .slice()*/
            let id = location.hash.slice(1) 
            marcarLink(id)
            
            /* Pido un recurso mediante ajax, llamando a la funcion para simplificar codigo*/
            cargarPlantilla(id)
        })
    }

    cargarPlantillas()
}

start()