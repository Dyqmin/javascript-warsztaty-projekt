export const InfoModal = (text, success) => {
    const component = document.createElement('div');
    component.classList.add('modal', 'is-active');

    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content', 'notification', success ? 'is-danger' : 'is-success');
    modalContent.innerText = text;

    const closeButton = document.createElement('button');
    closeButton.classList.add('delete');
    closeButton.addEventListener('click', () => {
        component.parentNode.removeChild(component);
    });

    modalContent.append(closeButton);

    component.append(modalBackground);
    component.append(modalContent);
    return component;
}