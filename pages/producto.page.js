
import BasePage from "./base.page";

class ProductoPage extends BasePage {

    //WebElements//
    get titulo() { return $('h1') }
    get addToCart() { return $('[name= Submit]')}
    get cartMsg() { return $('.layer_cart_product h2')}
    get addToWishlist() { return $('#wishlist_button')}
    get wishlistMsg() { return $('.fancybox-error')}
    get isSelected() { return $('[style*="user-select"]')}
    

    //---------------------------------//


    /**
    * Validar título
    * @param texto a validar
    */
    async validarTitulo(texto) {
        await browser.waitUntil(
            async ()=> (await (await this.titulo).getText()).includes(texto),
            { timeoutMsg:'El elemento no contiene la palabra' + texto, interval:1000 }
        );
    }

    /**
    * Seleccionar un tamaño
    * @param {Object} size a seleccionar
    */
    selectSize(size) { return $(`[title= "${size}"]`)}

    /**
    * Seleccionar un tamaño por indice
    * @param {Object} size a buscar
    */
    async seleccionarTamañoPorTexto(size) {
        await this.selectSize(size);
    }

    /**
    * Obtener texto del tamaño
    * 
    */
     async obtenerTamañoSeleccionado() {
        return await this.isSelected.getText();
    }

   


    /**
    * Agregar al carrito
    * 
    */
    async agregarAlCarrito() {
        await this.addToCart.click();
   }


   /**
    * Agregar a la wishlist
    * 
    */
    async agregarALaWishlist() {
        await this.addToWishlist.click();
   }


   /**
    * Obtener mensaje de éxito de la wishlist
    * 
    */
    async obtenerMensajeWishlist() {
        return await this.wishlistMsg.getText();
    }

    async obtenerMensajeCarrito() {
        return await (await this.cartMsg).getText();
    }
}

export default new ProductoPage();