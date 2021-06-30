import Module from "../core/Module.js";
import { LoginForm } from "./components/LoginForm.js";

export default class LoginModule extends Module {
    router;
    auth;

    constructor(router, auth) {
        super();
        this.router = router;
        this.auth = auth;
    }

    prepare() {
        const form = LoginForm();
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const [loginField, passwordField] = [...form.elements]
            this.auth.checkCredentials({
                login: loginField.value,
                password: passwordField.value
            });
            this.router.render();
        });

        this.components = [form];
    }
}