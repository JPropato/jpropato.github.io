async function renderPlantillaListado(listado, containerId) {
    let plantillaHbs = await fetch('plantillas/inicio.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs)
    let html = template({ listado })
    let container = document.getElementById(containerId)
    if (container) {
        container.innerHTML = html
    }
}

function agregarCarrito(e, id, ref) {
    e.preventDefault()

    let producto = productoController.productos.find(producto => producto.id == id)
    carritoController.agregarAlCarrito(producto)
}

async function initInicio() {
    console.warn('initInicio()')

    var productos = await productoController.obtenerProductos()

    // Renderizar todos los productos
    await renderPlantillaListado(productos, 'container-cards-card-all')

    // Filtrar y renderizar por categoría
    let frutas = productos.filter(p => p.categoria === 'frutas')
    let verduras = productos.filter(p => p.categoria === 'verduras')
    let combos = productos.filter(p => p.categoria === 'combos')

    await renderPlantillaListado(frutas, 'container-cards-card-frutas')
    await renderPlantillaListado(verduras, 'container-cards-card-verduras')
    await renderPlantillaListado(combos, 'container-cards-card-combos')

    document.getElementById('SETP').innerHTML = `Se encontraron ${productos.length} productos`
}
