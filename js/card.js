/*var cards = [
    new Card ('Samsung Galaxy S21+', '$150.000', 'img/productos/samsung-galaxy-s21-plus-5g.jpg'),
    new Card ('Samsung Galaxy J7', '$45.000', 'img/productos/celular-samsung.jpg'),
    new Card ('Motorola Moto E7', '$45.000', 'img/productos/motorola-moto-e7.jpg'),
    new Card ('Apple Iphone 12', '$190.000', 'img/productos/apple-iphone-12.jpg'),
    new Card ('Apple Iphone 11 Pro', '$210.000', 'img/productos/apple-iphone-11-pro-max.jpg'),
    new Card ('Samsung Galaxy S20 FE', '$69.000', 'img/productos/s20\ fe.jpg'),
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

var elemCardsContainer = document.getElementById('cards-container')

function Card (header, price, image){
    this.header = header
    this.price = price
    this.image = image

    this.appendTo = function (destinationElement){
        var card = document.createElement('a')
        card.classList.add('card')
        card.href = '#'

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

        card.innerHTML = 
        `<article class="card__article">
            <div
                class="card__image"
                style="background-image: url(${image})"
            >
            </div>
            
            <div class="card__content">
                <h3 class="card__heading">${header}</h3>
                <div class="card__description">
                    <p class="card__description--price">${price}</p>
                    <button class="card__description--cart">Agregar al carrito</button>
                    <button class="card__description--cart">Agregar al carrito</button>
                </div>
            </div>
        </article>`
        
        destinationElement.appendChild(card)
    }    

}

for (var unaCard of cards) {
    unaCard.appendTo(elemCardsContainer)
}
*/
