import Module from "../core/Module.js";
import { Button } from "../shared/components/Button.js";
import { InfoModal } from "../shared/components/InfoModal.js";

class AccountModule extends Module {
    store;

    constructor(store) {
        super();
        this.store = store;
    }

    prepare() {
        const div = document.createElement('div');

        const title = document.createElement('p');
        title.classList.add('title');
        title.innerText = 'Zarządzanie kontem';

        const content = document.createElement('p');
        content.classList.add('p-1')
        content.innerText = 'Kliknij aby wyczyścić pamięć lokalną (spowoduje reset wszystkich filmów i seriali)';

        const button = Button('Wyczyść', 'button');

        const onButtonClick = (event) => {
            event.preventDefault();
            this.store.setStoreItem('movies', []);
            this.store.setStoreItem('shows', []);
            div.append(InfoModal('Pomyślnie usunięto pamięć lokalną!', false));
        }

        this.registerEventListener(button, 'click', onButtonClick);

        div.append(title);
        div.append(content);
        div.append(button);

        this.components = [div];
    }
}

export default AccountModule;