import './style.scss';
import htmlMain from './view/main.html';

function component() {
    const element = document.createElement('div');
    element.innerHTML = htmlMain;
    element.classList.add('wrapper');
    return element;
}

document.body.appendChild(component());
