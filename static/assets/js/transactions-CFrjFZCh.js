import{K as f,L as m,Q as a}from"./Themecontext-Dj1Zc1Om.js";import{c as p}from"./if-defined-DtDTWw7x.js";import"./index-D9sLxg7E.js";import"./index-8taTtidq.js";import"./context-Db7bLoJ5.js";import"./index-BCG7Y9Pa.js";import"./index-CdZckySK.js";import"./index-Ch2GxPNz.js";import"./index-DPmJGDBq.js";import"./index-Bk0oyupj.js";const d=f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var s=o.length-1;s>=0;s--)(l=o[s])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let c=class extends m{render(){return a`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=d;c=u([p("w3m-transactions-view")],c);export{c as W3mTransactionsView};
