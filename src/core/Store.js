export default class Store {
    router;
    store;

    constructor(router) {
        this.router = router;
        this.store = {
            movies: [],
            shows: [],
        };
    }

    setStoreItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        this.store[key] = JSON.parse(localStorage.getItem(key));
    }

    getStore(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    deleteItem(key, filterCb) {
        const store = JSON.parse(localStorage.getItem(key));
        const newItems = store.filter(filterCb);
        localStorage.setItem(key, JSON.stringify(newItems))
    }
}