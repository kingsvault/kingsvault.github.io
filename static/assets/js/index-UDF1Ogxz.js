import{j as d,r as u,m as p,k as m,x as f}from"./Themecontext-DjRST77u.js";import{n as h,c as g}from"./if-defined-GXzUJKWu.js";const v=d`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var l=function(s,t,r,o){var n=arguments.length,e=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,r,o);else for(var a=s.length-1;a>=0;a--)(c=s[a])&&(e=(n<3?c(e):n>3?c(t,r,e):c(t,r))||e);return n>3&&e&&Object.defineProperty(t,r,e),e};let i=class extends m{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,f`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};i.styles=[u,p,v];l([h()],i.prototype,"src",void 0);l([h()],i.prototype,"alt",void 0);l([h()],i.prototype,"size",void 0);i=l([g("wui-image")],i);
