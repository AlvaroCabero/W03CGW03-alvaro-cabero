import Component from "./Component.js";

class Page extends Component {
  constructor() {
    super("body", "pokemon-webpage", "div");
    this.addHeader();
    this.addSection();
    this.addFooter();
  }

  addHeader() {
    const header = `<div class="title">
    <h1 class="main-title">POKEMON</h1>
    <img src="https://www.clipartmax.com/png/middle/71-710762_gengar-decal-by-mute-owl-pokemon-silhouette.png" alt="pokemon silhouette" className="title__img" />
    </div>`;
    document.querySelector("header").innerHTML = header;
  }
  addSection() {
    const section = `<div class="test">Heyeeeeeeeeeeeee</div>
<div class="test">Heyeeeeeeeeeeeee</div>
<div class="test">Heyeeeeeeeeeeeee</div>`;
    document.querySelector("main").innerHTML = section;
  }
  addFooter() {
    const footer = `<div class="test">Adiossssssss</div>
<div class="test">Adiossssssss</div>
<div class="test">Adiossssssss</div>`;
    document.querySelector("footer").innerHTML = footer;
  }
}

export default Page;
