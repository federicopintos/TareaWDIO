import BasePage from "./base.page";

class AccountPage extends BasePage {

    //WebElements//
    get welcomeMsg(){ return $('.info-account') }

    //---------------------------------//

    /**
     * Obtener texto de bienvenida
     */
     async obtenerTextoBienvenida() {
        addStep('Obtener texto de bienvenida')
        return await this.welcomeMsg.getText();
    }

}

export default new AccountPage();