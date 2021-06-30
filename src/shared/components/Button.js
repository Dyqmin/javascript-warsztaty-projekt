export const Button = (text, type) => {
    const component = document.createElement('button');
    component.classList.add('button', 'm-1', 'is-primary');
    component.innerText = text;
    component.type = type;
    return component;
};
