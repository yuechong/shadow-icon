function ShadowSvg(baseUrl = "", el = "svg-icon") {
        
  class SvgIcon extends HTMLElement {
    // prop obsersve
    static get observedAttributes() {
      return ["icon"];
    }
    constructor() {
      super();
      this.render();
    }

    getFullSrc(iconValue) {
      return baseUrl + iconValue + ".svg";
    }

    render() {
      const shadow = this.attachShadow({ mode: "closed" });
      // const style = document.createElement("style");
      // style.textContent = `
      //   :host{

      //   }
      //   img{  }
      //  `;
      // shadow.appendChild(style);

      const img = document.createElement("img");
      const iconValue = this.getAttribute("icon");
      iconValue && img.setAttribute("src", this.getFullSrc(iconValue));

      shadow.appendChild(img);
      this.img = img;
    }

    update(elem, iconValue) {
      this.img.setAttribute("src", this.getFullSrc(iconValue));
    }

    connectedCallback() {
      console.log("connectedCallback", arguments);
    }

    disconnectedCallback() {
      console.log("disconnectedCallback", arguments);
      this.img = null;
    }
    adoptedCallback() {
      console.log("adoptedCallback", arguments);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      console.log("attributeChangedCallback", arguments);
      if (name === "icon") {
        console.log("newValue", newValue);
        this.update(this, newValue);
      }
    }
  }

  // Define the new element
  customElements.define(el, SvgIcon);
}


