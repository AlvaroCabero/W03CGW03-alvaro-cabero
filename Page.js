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
    <img src="https://i0.wp.com/www.citricmagazine.com/wp-content/uploads/2016/08/pokemon-go-1574003_960_720.png?fit=821%2C720&ssl=1&w=640" alt="pokemon silhouette" className="title__img" />
    </div>`;
    document.querySelector("header").innerHTML = header;
  }
  addSection() {
    const section = `<section className="main__container">
    <ul className="main__pokemon-list"></ul>
</section>`;
    document.querySelector("main").innerHTML = section;
  }
  addFooter() {
    const footer = `<div class="footer__container">
    <a href="" className="footer__text">made in AlvaroCabero</a>
</div>`;
    document.querySelector("footer").innerHTML = footer;
  }
}

export default Page;
