var elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]

console.log(document.querySelector('title').textContent)

//Creamos una funcion que va a iniciar una comunicación asincronica con el servidor, para obtener una plantilla
function ajax (url, metodo='get' ){ //metodo='get' = aseguramos que el metodo sea GET cuando no definan el metodo al llamar la funcion
    let xhr = new XMLHttpRequest
    xhr.open(metodo, url)
    xhr.send()

    return xhr //afuera vamos a poder hacer el addeventlistener 'load'
}

//Inyectamos el header y footer desde una plantilla
{
    let header = document.querySelector('header')
    let xhr = ajax ('plantillas/layout/navbar.html')
    xhr.addEventListener('load', () =>{
        if(xhr.status == 200){
            header.innerHTML = xhr.response

            getPlantillas()
        }
    })
}

{
    let footer = document.querySelector('footer')
    let xhr = ajax ('plantillas/layout/footer.html')
    xhr.addEventListener('load', () =>{
        if(xhr.status == 200){
            footer.innerHTML = xhr.response

            getPlantillas()
        }
})
}


/*----------------------------------------------------------------------------------------------------------------------------*/
/*Recupero las plantillas y las inyecto, al hacer click, recupero ID de cada link que coincide con el elemento html a inyectar*/
/*----------------------------------------------------------------------------------------------------------------------------*/
function getPlantillas (){
    let main = document.querySelector('main')
    let links = document.querySelectorAll('.nav-bar__nav-link')
    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id             //Ante cada click a cada link, recupero el id del elemento clickeado
            console.log(id)

            let xhr = ajax('plantillas/principales/'+id+'.html') //Inserto ese id recupero del click, en la peticion de la plantilla html
            xhr.addEventListener('load', () => {
                let plantilla = xhr.response 
                main.innerHTML = plantilla
            })
        })
    })
}