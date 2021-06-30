import Module from "../core/module.js";
import { AddMovieForm } from "./components/AddMovieForm.js";
import { Card } from "../shared/components/Card.js";

export default class MoviesModule extends Module {
    store;
    router;

    constructor(router, store) {
        super();
        this.router = router;
        this.store = store;
    }

    prepare() {
        const div = document.createElement('div');

        const title = document.createElement('div');
        title.innerText = 'Filmy do obejrzenia';
        title.classList.add('title');
        div.append(title);

        const description = document.createElement('p');
        description.classList.add('p-2');
        description.innerText = 'Dodaj do listy filmy, które chcesz obejrzeć w przyszłości';

        const form = this.createForm();

        div.append(description);
        div.append(form);

        const movies = this.store.getStore('movies');
        if (movies && movies.length) {
            movies.forEach(e => {
                const card = Card(e.name, e.desc);
                this.registerEventListener(card, 'click', () => {
                    this.store.deleteItem('movies', (item) => {
                        return item.name !== card.querySelector('p').innerText;
                    });
                    this.router.render(this.router.currentPath);
                })
                div.append(card);
            });
        }

        this.components = [div];
    }

    createForm() {
        const form = AddMovieForm();

        const onSubmit = (event) => {
            event.preventDefault();
            const [name, desc] = [...form.elements];
            this.store.setStoreItem('movies', [...this.store.getStore('movies') || [], {
                name: name.value,
                desc: desc.value
            }]);
            this.router.render(this.router.currentPath);
        };

        this.registerEventListener(form, 'submit', onSubmit);

        return form;
    }
}