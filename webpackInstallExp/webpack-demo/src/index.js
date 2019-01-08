import _ from 'lodash';
import print from './print.js';

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','wabpack'],'');
    element.onclick = print.bind(null,'Hello webpck!');
    return element;
}
document.body.appendChild(component());
