class CarritoService {

    STORAGE_KEY = 'mock_pedidos'

    async guardarCarritoService(carrito) {
        await new Promise(r => setTimeout(r, 500))

        // Guarda el pedido en localStorage
        let pedidos = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]')
        let pedido = {
            id: Date.now().toString(),
            fecha: new Date().toLocaleString('es-AR'),
            items: carrito,
            total: carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
        }
        pedidos.push(pedido)
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(pedidos))

        console.log('Pedido guardado:', pedido)
        return pedido
    }
}

const carritoService = new CarritoService()
