import { Button } from "../../shared/components/Button.js";
import { InputField } from "../../shared/components/InputField.js";

export const AddShowForm = () => {
    const component = document.createElement('form');

    component.append(InputField('Nazwa Serialu', 'text'));
    component.append(InputField('Opis', 'text'));
    component.append(Button('Dodaj serial', 'submit'));

    return component;
}