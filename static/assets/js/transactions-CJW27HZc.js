import{j as m,k as f,x as p}from"./Themecontext-DjRST77u.js";import{c as a}from"./if-defined-GXzUJKWu.js";import"./index-B32w6PcB.js";import"./index-BApHCh9l.js";import"./index-D-dNtjti.js";import"./index-C34h-oFJ.js";import"./index-B3__XS7b.js";import"./index-_NHfPwWE.js";import"./index-UDF1Ogxz.js";import"./Providers-vInVlvdd.js";import"./chunk-GNGMS2XR-BzF1ZQsC.js";const d=m`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var s=o.length-1;s>=0;s--)(l=o[s])&&(t=(n<3?l(t):n>3?l(e,i,t):l(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let c=class extends f{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=d;c=u([a("w3m-transactions-view")],c);export{c as W3mTransactionsView};
