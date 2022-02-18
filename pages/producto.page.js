
import BasePage from "./base.page";

class ProductoPage extends BasePage {

    //WebElements//
    get dropDownSize(){ return $('#group_1') }
    get titulo() { return $('h1') }
    get addToCart() { return $('[name= Submit]')}
    get addToWishlist() { return $('#wishlist_button')}
    get wishlistMsg() { return $('.fancybox-error')}

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
    * Seleccionar un tamaño por indice
    * @param {Object} indice a buscar
    */
    async seleccionarTamañoPorIndice(indice) {
        await this.dropDownSize.selectByIndex(indice);
    }


    /**
    * Obtener texto del tamaño
    * 
    */
    async obtenerTextoDelTamaño() {
        let dropDownValue = await this.dropDownSize.getValue();
        return await $('select option[value="'+ dropDownValue + '"]').getText();
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
}

export default new ProductoPage();