import{a4 as _,a7 as R,a8 as j,x as d,G as y,y as h,C as l,Y as c,U as O}from"./context-dTkILI9z.js";import{n as v,c as p,o as P,r as T}from"./if-defined-Did8lWyK.js";import{e as U,n as L}from"./index-FRL1bLTT.js";const u=_({isLegalCheckboxChecked:!1}),x={state:u,subscribe(i){return j(u,()=>i(u))},subscribeKey(i,e){return R(u,i,e)},setIsLegalCheckboxChecked(i){u.isLegalCheckboxChecked=i}},E=d`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var k=function(i,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,r,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let f=class extends h{constructor(){super(...arguments),this.inputElementRef=U(),this.checked=void 0}render(){return l`
      <label>
        <input
          ${L(this.inputElementRef)}
          ?checked=${P(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};f.styles=[y,E];k([v({type:Boolean})],f.prototype,"checked",void 0);f=k([p("wui-checkbox")],f);const W=d`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var C=function(i,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,r,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let b=class extends h{constructor(){super(),this.unsubscribe=[],this.checked=x.state.isLegalCheckboxChecked,this.unsubscribe.push(x.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var o;const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state,n=(o=c.state.features)==null?void 0:o.legalCheckbox;return!e&&!r||!n?null:l`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=c.state;return e?l`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=c.state;return e?l`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){x.setIsLegalCheckboxChecked(!this.checked)}};b.styles=[W];C([T()],b.prototype,"checked",void 0);b=C([p("w3m-legal-checkbox")],b);const B=d`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var z=function(i,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,r,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let g=class extends h{render(){return l`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};g.styles=[y,O,B];g=z([p("wui-ux-by-reown")],g);const D=d`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var S=function(i,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,r,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let m=class extends h{render(){var o;const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state,n=(o=c.state.features)==null?void 0:o.legalCheckbox;return!e&&!r||n?null:l`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=c.state;return e?l`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=c.state;return e?l`<a href=${e}>Privacy Policy</a>`:null}};m.styles=[D];m=S([p("w3m-legal-footer")],m);const I=d`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var $=function(i,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,r,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let w=class extends h{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,n=36-e,o=116+n,t=245+n,s=360+n*1.75;return l`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${t}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};w.styles=[y,I];$([v({type:Number})],w.prototype,"radius",void 0);w=$([p("wui-loading-thumbnail")],w);export{x as O};
