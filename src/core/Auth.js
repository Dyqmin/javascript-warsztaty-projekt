import { users } from '../shared/db/users.js';

export default class Auth {
    authenticated = false;

    checkCredentials({login, password}) {
        const [user] = users.filter(user => user.login === login && user.password === password);

        if (user) {
            this.authenticated = true;
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }
}