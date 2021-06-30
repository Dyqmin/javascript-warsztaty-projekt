export const InputField = (placeholder, type) => {
    const component = document.createElement('input');
    component.placeholder = placeholder;
    component.type = type;
    component.classList.add('input', 'm-1');
    return component;
}