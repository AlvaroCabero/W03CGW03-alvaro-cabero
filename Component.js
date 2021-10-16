class Component {
  parentNode;
  element;
  className;
  tag;
  constructor(parentNode, className, tag) {
    this.element = document.createElement(tag);
    this.parentNode = document.querySelector(parentNode);
    this.element.className = className;
    this.parentNode.append(this.element);
  }
}

export default Component;
