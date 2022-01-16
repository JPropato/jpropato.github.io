class ProductoService{

    URL_PRODUCTOS = 'https://61b7cf4564e4a10017d18cbf.mockapi.io/productos/'

    async obtenerProductosService() {
        let productos = await http.get(this.URL_PRODUCTOS)
        return productos
    }

    async guardarProductoService(producto){
        let productoGuardado = await http.post(this.URL_PRODUCTOS, producto)
        return productoGuardado
    }

    async actualizarProductoService(id, producto){
        let productoActualizado = await http.put(this.URL_PRODUCTOS, id, producto)
        return productoActualizado
    }

    async borrarProductoService(id){
        let productoBorrado = await http.del(this.URL_PRODUCTOS, id)
        return productoBorrado

    }
}

const productoService = new ProductoService()