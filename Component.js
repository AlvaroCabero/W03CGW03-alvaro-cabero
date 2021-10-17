class Component {
  parentNode;
  element;
  className;
  tag;
  debugger;

  constructor(parentNode, className, tag) {
    this.element = document.createElement(tag);
    this.parentNode = parentNode;
    this.element.className = className;
    this.parentNode.append(this.element);
  }
}

export default Component;
