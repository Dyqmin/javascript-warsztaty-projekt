import { app } from './app.js';

const root = document.querySelector('#root');
root.classList.add('is-flex', 'flex-direction-row', 'p-2');

app.create(root);
