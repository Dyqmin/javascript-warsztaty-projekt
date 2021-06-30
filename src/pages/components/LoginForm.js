import { Button } from "../../shared/components/Button.js";
import { InputField } from "../../shared/components/InputField.js";

export const LoginForm = () => {
    const form = document.createElement('form');

    form.innerText = 'Logowanie';

    const loginField = InputField('Nazwa użytkownika', 'text');
    const passwordField = InputField('Hasło', 'password');
    const button = Button('Zaloguj', 'submit');

    form.append(loginField);
    form.append(passwordField);
    form.append(button);

    return form;
}