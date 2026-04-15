class ProductoService {

    STORAGE_KEY = 'mock_productos'

    _cargarProductos() {
        let datos = localStorage.getItem(this.STORAGE_KEY)
        if (datos) {
            return JSON.parse(datos)
        }
        // Primera carga: usar datos de mockup
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(MOCK_PRODUCTOS))
        return [...MOCK_PRODUCTOS]
    }

    _guardarProductos(productos) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(productos))
    }

    async obtenerProductosService() {
        // Simula delay de red
        await new Promise(r => setTimeout(r, 300))
        return this._cargarProductos()
    }

    async guardarProductoService(producto) {
        await new Promise(r => setTimeout(r, 200))
        let productos = this._cargarProductos()

        producto.id = _nextMockId()
        productos.push(producto)
        this._guardarProductos(productos)

        return producto
    }

    async actualizarProductoService(id, producto) {
        await new Promise(r => setTimeout(r, 200))
        let productos = this._cargarProductos()

        let index = productos.findIndex(p => p.id == id)
        if (index !== -1) {
            producto.id = id
            productos[index] = producto
            this._guardarProductos(productos)
        }

        return producto
    }

    async borrarProductoService(id) {
        await new Promise(r => setTimeout(r, 200))
        let productos = this._cargarProductos()

        let index = productos.findIndex(p => p.id == id)
        let productoBorrado = productos[index]
        if (index !== -1) {
            productos.splice(index, 1)
            this._guardarProductos(productos)
        }

        return productoBorrado
    }
}

const productoService = new ProductoService()
