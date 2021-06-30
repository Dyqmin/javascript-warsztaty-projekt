import Module from "../core/module.js";

export default class HomeModule extends Module {
    constructor() {
        super();
    }

    prepare() {
        const div = document.createElement('div');

        const title = document.createElement('p');
        title.innerText = 'Witaj na stronie głównej';
        title.classList.add('title');

        const description = document.createElement('p');
        description.innerText = 'Przejdź do wybranej sekcji w menu aby korzystać z funkcjonalności aplikacji';

        div.append(title);
        div.append(description);
        this.components = [div];
    }
}