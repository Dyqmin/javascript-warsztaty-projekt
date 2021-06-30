import Auth from "./core/Auth.js";
import Router from "./core/Router.js";
import LoginModule from "./pages/Login.js";
import HomeModule from "./pages/Home.js";
import MoviesModule from "./pages/Movies.js";
import AccountModule from "./pages/Account.js";
import ShowsModule from "./pages/Shows.js";
import Store from "./core/Store.js";

export const app = {
    create(appRoot) {
        // Create services
        const auth = new Auth();
        const store = new Store();

         // Create router
        const router = new Router(appRoot, auth);

        // Create modules
        const Login = new LoginModule(router, auth);
        const Home = new HomeModule();
        const Movies = new MoviesModule(router, store);
        const Shows = new ShowsModule(router, store);
        const Account = new AccountModule(store);

        // Assign routes and init router
        router
            .appendRoute({ name: 'Strona główna', destination: Home })
            .appendRoute({ name: 'Filmy', destination: Movies })
            .appendRoute({ name: 'Seriale', destination: Shows })
            .appendRoute({ name: 'Konto', destination: Account })
            .init();

        router.render(Login);
    }
};