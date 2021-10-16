import Component from "./Component.js";

class Page extends Component {
  constructor() {
    super("body", className, tag);
    this.addHeader();
    this.addSection();
    this.addFooter();
  }

  addHeader() {
    header = `<div class="test">Holaaaaaaaa</div>
<div class="test">Holaaaaaaaa</div>
<div class="test">Holaaaaaaaa</div>`;
    document.querySelector("header").innerHTML = header;
  }
  addSection() {
    section = `<div class="test">Heyeeeeeeeeeeeee</div>
<div class="test">Heyeeeeeeeeeeeee</div>
<div class="test">Heyeeeeeeeeeeeee</div>`;
    document.querySelector("header").innerHTML = header;
  }
  addFooter() {
    footer = `<div class="test">Adiossssssss</div>
<div class="test">Adiossssssss</div>
<div class="test">Adiossssssss</div>`;
    document.querySelector("footer").innerHTML = footer;
  }
  }
}

export default Page;
