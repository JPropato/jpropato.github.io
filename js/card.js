var cards = [
    new Card ('Samsung Galaxy S21+', '$150.000', 'img/productos/samsung-galaxy-s21-plus-5g.jpg')
]

var elemCardsContainer = document.getElementsByClassName('cards-container')[0]

function Card (header, price, image){
    this.header = header
    this.price = price
    this.image = image

    this.appendTo = function (destinationElement){
        var card = document.createElement('a')
        card.classList.add('card')
        card.href = '#'

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

