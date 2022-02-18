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
        console.log('holi');
        console.log(await this.welcomeMsg.getText());
        return await this.welcomeMsg.getText();
    }

}

export default new AccountPage();