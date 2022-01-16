
class CarritoService{
    URL_CARRITO = 'https://61b7cf4564e4a10017d18cbf.mockapi.io/carrito/'

    async guardarCarritoService(carrito){
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()