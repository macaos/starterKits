import './style.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Start vinilla js webpack';
    element.classList.add('test')

    return element;
}

document.body.appendChild(component());
