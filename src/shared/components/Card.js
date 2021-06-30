export const Card = (name, desc, link) => {
    const component = document.createElement('div');
    component.classList.add('card', 'm-2', 'card-animated');

    const header = document.createElement('header');
    header.classList.add('card-header');

    const title = document.createElement('p');
    title.innerText = name;
    title.classList.add('card-header-title');

    const content = document.createElement('div');
    content.innerText = desc;
    content.classList.add('card-content');

    header.append(title);
    component.append(header);
    component.append(content);

    return component;
}