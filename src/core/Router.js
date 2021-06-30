import LoginModule from "../pages/Login.js";
import HomeModule from "../pages/Home.js";
import { InfoModal } from "../shared/components/InfoModal.js";

export default class Router {

    auth;
    mainContainer;
    menuContainer;
    contentContainer;
    routes = [];
    currentPath = null;

    constructor(mainContainer, auth) {
        this.mainContainer = mainContainer;
        this.auth = auth;
    }

    /**
     * Dodanie ścieżki routingu
     */
    appendRoute(route) {
        this.routes = [...this.routes, route];
        return this;
    }

    /**
     * Utworzenie kontenera przechowującego menu
     */
    createMenuContainer() {
        this.menuContainer = document.createElement('nav');

        const navBarStart = document.createElement('div');
        navBarStart.classList.add('navbar-start', 'is-flex-direction-column')

        this.routes.forEach(menuElement => {
            const menuDiv = document.createElement('a');
            menuDiv.innerText = menuElement.name;
            menuDiv.classList.add('navbar-item');

            menuDiv.addEventListener('click', () => {
                this.render(menuElement.destination)
            });

            navBarStart.append(menuDiv);
        })
        this.menuContainer.append(navBarStart);
    }

    /**
     * Utworzenie kontenera przechowującego główną zawartość strony
     */
    createContentContainer() {
        this.contentContainer = document.createElement('div');
        this.contentContainer.classList.add('container', 'is-fluid', 'is-flex', 'is-justify-content-center');
        this.contentContainer.innerText = 'Content loading...';
    }

    /**
     * Inicjalizacja routera
     */
    init() {
        this.createMenuContainer();
        this.createContentContainer();

        this.mainContainer.append(this.menuContainer);
        this.mainContainer.append(this.contentContainer);
    }

    /**
     * Render danego elementu
     */
    render(destination = null) {

        if (this.currentPath) {
            this.currentPath.destroy();
        }

        if (this.auth.isAuthenticated() || destination instanceof LoginModule) {
            this.contentContainer.innerHTML = '';
            const [homeRoute] = this.routes.filter(route => route.destination instanceof HomeModule);
            this.contentContainer.append(destination ? destination.create() : homeRoute.destination.create());
        } else if (this.auth.isAuthenticated() && !destination) {
            console.log(this.routes);
            const [homeModule] = this.routes.filter(route => route.destination instanceof HomeModule);
            this.contentContainer.innerHTML = '';
            // this.contentContainer.append(homeModule.create());
        } else {
            this.mainContainer.append(InfoModal('Błędne dane logowania!', true));
        }
        this.currentPath = destination;
    }

}