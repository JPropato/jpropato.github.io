function initInicio() {
    console.warn('initInicio()')

    let cards = [
        new Card ('Samsung Galaxy S21+', '$150.000', 'img/productos/samsung-galaxy-s21-plus-5g.jpg'),
        new Card ('Samsung Galaxy J7', '$45.000', 'img/productos/celular-samsung.jpg'),
        new Card ('Motorola Moto E7', '$45.000', 'img/productos/motorola-moto-e7.jpg'),
        new Card ('Apple Iphone 12', '$190.000', 'img/productos/apple-iphone-12.jpg'),
        new Card ('Apple Iphone 11 Pro', '$210.000', 'img/productos/apple-iphone-11-pro-max.jpg'),
        new Card ('Samsung Galaxy S20 FE', '$69.000', 'img/productos/s20-fe.jpg'),
        new Card ('Motorola G60s', '$49.000', 'img/productos/g60s.jpg'),
        new Card ('Samsung Galaxy A32', '$26.000', 'img/productos/a32.jpg'),
        new Card ('Samsung Galaxy A72', '$78.000', 'img/productos/a72.jpg'),
        new Card ('Motorola Moto G9 Plus', '$36.000', 'img/productos/g9-plus.jpg'),
        new Card ('Celular LG LK420-HM', '$16.000', 'img/productos/lgk420hm.jpg'),
        new Card ('Celular LG LK510-HM', '$25.000', 'img/productos/lgk510hm.jpg'),
        new Card ('Motorola Lenovo G9', '$33.000', 'img/productos/moto-g9-play.jpg'),
        new Card ('Celular ZTE Blade A3', '$13.000', 'img/productos/zte-blase-a3.jpg'),
        new Card ('Celular TCL L17', '$18.000', 'img/productos/tcll7+.jpg'),
        new Card ('Celular TCL L10 SE', '$15.000', 'img/productos/tcl10se.jpg'),
        new Card ('Motorola Moto G100', '$89.000', 'img/productos/g100.jpg'),
        new Card ('Samsung Galaxy A01', '$14.000', 'img/productos/A01-CORE.jpg'),
        new Card ('Samsung Galaxy A02', '$16.000', 'img/productos/A02.jpg'),
        new Card ('Samsung Galaxy Fold Z', '$350.000', 'img/productos/fold.jpg'),
        new Card ('Samsung Galaxy A12', '$15.000', 'img/productos/a12.jpg'),
    ]

    const elemCardsContainer = document.querySelector('.container')

    function Card (header, price, image){
        this.header = header
        this.price = price
        this.image = image

        this.appendTo = function (destinationElement){
            let card = document.createElement('div')
            card.classList.add('cards-container')

            // "TRUQUITO" para el event listener
            var that = this

            card.addEventListener('click', function(ev){
                ev.preventDefault()
                console.log(this)
                this.classList.toggle('card--seleccionada')


                // INICIO DE CHINO AVANZADO
                var nuevoItemCarrito = document.createElement('div')
                nuevoItemCarrito.classList.add('carrito__item')
                nuevoItemCarrito.innerHTML = that.header
                console.log(nuevoItemCarrito)
                
                // elemSectionCarrito: variable global
                elemSectionCarrito.append(nuevoItemCarrito)
                // FIN DE CHINO AVANZADO
            })

            /*Creamos la card utilizando AJAX y handlebars*/
            const xhr = new XMLHttpRequest
            xhr.open('get', 'plantillas/card.hbs')
            xhr.addEventListener('load', () => {
                if(xhr.status == 200) {

                    let cardHbs = xhr.response
                    //console.log(cardHbs)
                    
                    var template = Handlebars.compile(cardHbs); /*Le pasamos la respuesta de AJAX, el string en HBS*/
                    let html = template ({cards : cards})
                    card.innerHTML = html
                    
                    destinationElement.appendChild(card)
                }
            })
            xhr.send()
            
            renderCards()
        }    
                
    }

    for (var unaCard of cards) {
        unaCard.appendTo(elemCardsContainer)
    }
}