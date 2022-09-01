import BasePage from "./base.page";

class HomePage extends BasePage {

    //WebElements
    get barraDeBusqueda(){ return $('[name="search_query"]') }
    get login(){ return $('.login') }
    get headerContainer(){ return $('.header-container') }
 
    // ------------------------------------------------- //

    /**
     * Escribe el artículo en el campo de búsqueda y presiona Enter
     * @param {String} articulo que se buscará
     */
     async buscar(articulo) {
        addStep(`Buscar artículo: ${articulo}`)
        await super.vaciarCampoyEnviarTexto(await this.barraDeBusqueda, articulo);
        await this.barraDeBusqueda.keys('Enter');
    }

    /**
     * Obtener texto de la barra de búsqueda
     */
    async obtenerTextoBusqueda() {
        addStep('Obtener texto de la barra de búsqueda')
        return await this.barraDeBusqueda.getValue();
    }

    /**
     * Ir al login
     */
     async irAlLogin() {
        await this.login.click();
    }

}

export default new HomePage();