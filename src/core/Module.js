export default class Module {
    components;
    eventListeners = [];

    create() {
        this.prepare();
        const moduleContainer = document.createElement('div');
        this.components.forEach(component => {
            moduleContainer.append(component);
        });
        return moduleContainer;
    }

    prepare() {
        throw new Error("No components to prepare.");
    }

    registerEventListener(element, type, cb) {
        this.eventListeners = [...this.eventListeners, {
            element: element,
            type: type,
            cb: cb
        }]
        element.addEventListener(type, cb);
    }

    destroy() {
        this.eventListeners.forEach(el => {
            el.element.removeEventListener(el.type, el.cb);
        })
    }
}