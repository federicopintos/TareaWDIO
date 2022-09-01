import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import DATOS from '../datos/articulos';
import ProductoPage from '../pages/producto.page';
import LoginPage from '../pages/login.page';
import AccountPage from '../pages/account.page';
import debug from 'webdriverio/build/commands/browser/debug';

describe('Tarea', () => {

    DATOS.forEach(({articulo}) => {

        it('Debería buscar productos', async () => {
            await HomePage.abrir('/');
            await HomePage.buscar(articulo);
            await expect(await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
            await expect(await BusquedaPage.obtenerNombreResultado()).to.equal(articulo);
        });
    
    }) 

    it('Debería seleccionar el tamaño L', async () => {
        await HomePage.abrir('/');
        let articulo = 'Blouse';
        await HomePage.buscar(articulo);
        await expect( await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
        await expect( await BusquedaPage.obtenerNombreResultado()).to.equal(articulo);
        
        await BusquedaPage.ingresarAlResultado();
        await ProductoPage.validarTitulo('Blouse');

        await ProductoPage.seleccionarTamañoPorTexto('S');
        await expect( await ProductoPage.obtenerTamañoSeleccionado()).to.equal('S');

    }); 

    it('Debería loguearse', async () => {
        await HomePage.abrir('/');
        await HomePage.irAlLogin();
        await expect( await LoginPage.obtenerHeader()).to.equal('AUTHENTICATION');

        await LoginPage.iniciarSesion('example1@mail.com','12345');
        await expect( await AccountPage.obtenerTextoBienvenida()).to.equal('Welcome to your account. Here you can manage all of your personal information and orders.');

        expect(
            await browser.checkElement(await $(".header-container"), "headerContainer", {
           /* opciones de configuración para el elemento */
            }),
            "Error: la barra de navegación de la página no coincide con la original"
        ).equal(0);

    }); 

    it('Debería agregar un producto al carrito', async () => {
        await HomePage.abrir('/');
        let articulo = 'Blouse';
        await HomePage.buscar(articulo);
        await expect( await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
        await expect( await BusquedaPage.obtenerNombreResultado()).to.equal(articulo);
        
        await BusquedaPage.ingresarAlResultado();
        await ProductoPage.validarTitulo('Blouse');

        await ProductoPage.seleccionarTamañoPorTexto('S');

        await ProductoPage.agregarAlCarrito();
        await (await ProductoPage.cartMsg).waitForDisplayed();
        await expect(await ProductoPage.obtenerMensajeCarrito()).to.equal('Product successfully added to your shopping cart');
    }); 


    it('Debería agregar a la Wishlist', async () => {
        await HomePage.abrir('/');

        await expect(
            await browser.checkElement(await HomePage.headerContainer, "automationpractice-headerContainer", {
           /* opciones de configuración para el elemento */
            }),
            "Error: la barra de navegación de la página no coincide con la original"
        ).equal(0);

        await HomePage.irAlLogin();
        await expect( await LoginPage.obtenerHeader()).to.equal('AUTHENTICATION');

        await LoginPage.iniciarSesion('example1@mail.com','12345');
        await expect( await AccountPage.obtenerTextoBienvenida()).to.equal('Welcome to your account. Here you can manage all of your personal information and orders.');

        await HomePage.abrir('/');
        let articulo = 'Blouse';
        await HomePage.buscar(articulo);
        await expect( await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
        await expect( await BusquedaPage.obtenerNombreResultado()).to.equal(articulo);

        await BusquedaPage.ingresarAlResultado();
        await ProductoPage.validarTitulo('Blouse');

        await ProductoPage.agregarALaWishlist();
        await expect( await ProductoPage.obtenerMensajeWishlist()).to.equal('Added to your wishlist.');

    }); 

});

