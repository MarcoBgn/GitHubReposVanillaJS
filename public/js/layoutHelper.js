function generateElement(parentElement, variable, element, id, cssClass) {
  'use strict';
  var elementVariable = variable;
  elementVariable = document.createElement(element);
  parentElement.appendChild(elementVariable);
  elementVariable.setAttribute('id', id);
  elementVariable.setAttribute('class', cssClass || 'defaultClass');
  return elementVariable;
}

function cleanElement(element) {
  'use strict';
  var elementVariable = element;
  while (elementVariable.firstChild) {
    elementVariable.removeChild(element.firstChild);
  }
}