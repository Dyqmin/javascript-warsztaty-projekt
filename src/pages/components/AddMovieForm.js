import { Button } from "../../shared/components/Button.js";
import { InputField } from "../../shared/components/InputField.js";

export const AddMovieForm = () => {
    const component = document.createElement('form');

    component.append(InputField('Nazwa filmu', 'text'));
    component.append(InputField('Opis', 'text'));
    component.append(Button('Dodaj film', 'submit'));

    return component;
}