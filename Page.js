import Component from "./Component";

class Page extends Component {
  constructor() {
    super(parentNode, className, tag);
    this.addHeader();
  }

  addHeader() {
    header = `<div class="test">Holaaaaaaaa</div>
<div class="test">Holaaaaaaaa</div>
<div class="test">Holaaaaaaaa</div>`;
    document.querySelector("test").innerHTML = header;
  }
}
