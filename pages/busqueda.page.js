import BasePage from "./base.page";

class BusquedaPage extends BasePage {

    //WebElements//
    get resultado(){ return $('.product_list .product-name') }

    //---------------------------------//

    /**
     * Click en el resultado de la búsqueda
     */
    async ingresarAlResultado() {
        await super.clickearElemento(this.resultado);
    }

    /**
     * Obtener texto del resultado de la búsqueda
     */
    async obtenerNombreResultado() {
        return await this.resultado.getText();
    }
}

export default new BusquedaPage();