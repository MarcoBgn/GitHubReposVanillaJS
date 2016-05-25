'use strict';

function generateElement(parentElement, variable, element, id, cssClass) {
  var variable = variable;
  variable = document.createElement(element);
  parentElement.appendChild(variable);
  variable.setAttribute('id', id);
  variable.setAttribute('class', cssClass || 'defaultClass');
  return variable
}