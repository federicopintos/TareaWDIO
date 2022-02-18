import BasePage from "./base.page";

class LoginPage extends BasePage {

    //WebElements//
    get createAccount(){ return $('.icon-user') }
    get register() { return $('.icon-lock') }
    get header() { return $('.page-heading') }
    get emailInput() { return $('#email') }
    get pwdInput() { return $('#passwd') }
    get loginBtn() { return $('#SubmitLogin') }

    //---------------------------------//

    /**
     * Obtener header de la página
     */
     async obtenerHeader() {
        addStep('Obtener header de la página')
        console.log('holi');
        console.log(await this.header.getText());
        return await this.header.getText();
    }


    /**
     * Iniciar sesión
     * @param {Object} usuario a loguearse
     * @param {Object} pwd a ingresar
     */
     async iniciarSesion(usuario, pwd) {
        addStep('Ingresar credenciales')
        await this.emailInput.setValue(usuario);
        await this.pwdInput.setValue(pwd);
        await this.loginBtn.click();
    }

}

export default new LoginPage();