import{x as f,y as m,C as a}from"./context-zDV6En7e.js";import{c as p}from"./if-defined-CoFgVulR.js";import"./index-_e3A3l-d.js";import"./index-BxJEAm-r.js";import"./index-BvzpEWMU.js";import"./index-CaCUcirA.js";import"./index-BYcHvxwD.js";import"./index-BCQiNcWl.js";import"./index-3Jt6BfVd.js";const d=f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,t,i,r){var n=arguments.length,e=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,r);else for(var s=o.length-1;s>=0;s--)(l=o[s])&&(e=(n<3?l(e):n>3?l(t,i,e):l(t,i))||e);return n>3&&e&&Object.defineProperty(t,i,e),e};let c=class extends m{render(){return a`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=d;c=u([p("w3m-transactions-view")],c);export{c as W3mTransactionsView};
