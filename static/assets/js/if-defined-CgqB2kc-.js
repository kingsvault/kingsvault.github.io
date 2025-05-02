const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/assets/js/add-EedKClNF.js","static/assets/js/context-BC4w0Dsv.js","static/assets/js/index-CYRZk4kG.js","static/assets/css/index-BTeSLrk7.css","static/assets/js/all-wallets-DNyRbisk.js","static/assets/js/arrow-bottom-circle-fcsXLxL8.js","static/assets/js/app-store-BLN_5h0q.js","static/assets/js/apple-C0AAYGYH.js","static/assets/js/arrow-bottom-CC4IEiLn.js","static/assets/js/arrow-left-C3Ni6uhf.js","static/assets/js/arrow-right-CGoKeoEd.js","static/assets/js/arrow-top-CxkbShXH.js","static/assets/js/bank-CVrXz9ws.js","static/assets/js/browser-D74rGFWH.js","static/assets/js/card-8K9Tve7R.js","static/assets/js/checkmark-Qfq1Hsf-.js","static/assets/js/checkmark-bold-D0NDo-Cf.js","static/assets/js/chevron-bottom-DMbBlJjv.js","static/assets/js/chevron-left-Dhz8UnHs.js","static/assets/js/chevron-right-C2K5ilvy.js","static/assets/js/chevron-top-BNLIDEM7.js","static/assets/js/chrome-store-Bp_BwoZE.js","static/assets/js/clock-Da31NsTZ.js","static/assets/js/close-SOPZhnXr.js","static/assets/js/compass-DiX7RnKc.js","static/assets/js/coinPlaceholder-DpyE5viV.js","static/assets/js/copy-DswHkO-Y.js","static/assets/js/cursor-B27Etigu.js","static/assets/js/cursor-transparent-3ufnnxPK.js","static/assets/js/desktop-Dgr2ksom.js","static/assets/js/disconnect-D9ZWb4jU.js","static/assets/js/discord-DymRUlqh.js","static/assets/js/etherscan-DD3Mv-kP.js","static/assets/js/extension-BZEAIg-b.js","static/assets/js/external-link-BV7k23rc.js","static/assets/js/facebook-B63tZVtA.js","static/assets/js/farcaster-Dc0iMJba.js","static/assets/js/filters-rjn8AAIf.js","static/assets/js/github-BxTSy7sL.js","static/assets/js/google-CBm1MpdK.js","static/assets/js/help-circle-Dx6pKDRh.js","static/assets/js/image-CeiGUDGC.js","static/assets/js/id-SIt5X82W.js","static/assets/js/info-circle-gyBa9VGD.js","static/assets/js/lightbulb-BSC0djfQ.js","static/assets/js/mail-CBbt2AE1.js","static/assets/js/mobile-CuYFtPsd.js","static/assets/js/more-JJ1yLi9H.js","static/assets/js/network-placeholder-DF8Z39TW.js","static/assets/js/nftPlaceholder-Xks-SQdA.js","static/assets/js/off-CeaXPszD.js","static/assets/js/play-store-D3iBA750.js","static/assets/js/plus-DFWr_lNl.js","static/assets/js/qr-code-DkPgDm8G.js","static/assets/js/recycle-horizontal-Dkf91aGt.js","static/assets/js/refresh-BSF7wk5l.js","static/assets/js/search-DyKuywUJ.js","static/assets/js/send-BmvRy17G.js","static/assets/js/swapHorizontal-Dqk-uF5r.js","static/assets/js/swapHorizontalMedium-CEO1D7lQ.js","static/assets/js/swapHorizontalBold-DM7OIzm8.js","static/assets/js/swapHorizontalRoundedBold-T9r1fwM1.js","static/assets/js/swapVertical-HkD-SNqT.js","static/assets/js/telegram-DioBnx84.js","static/assets/js/three-dots-BdkdC3C2.js","static/assets/js/twitch-C7sqB49h.js","static/assets/js/x-DZFr4jhg.js","static/assets/js/twitterIcon-DuzrnukF.js","static/assets/js/verify-eMVuHwIF.js","static/assets/js/verify-filled-mcyf7keU.js","static/assets/js/wallet-BpAAcpI4.js","static/assets/js/walletconnect-Ckac1T6_.js","static/assets/js/wallet-placeholder-CEso-mH8.js","static/assets/js/warning-circle-Bdl9ZxX2.js","static/assets/js/info-DcRIvNX0.js","static/assets/js/exclamation-triangle-D_plgB9h.js","static/assets/js/reown-logo-DOQkXh0h.js"])))=>i.map(i=>d[i]);
import{_ as r}from"./index-CYRZk4kG.js";import{al as k,am as B,an as T,x as P,G as R,ae as j,y as L,C as S,aj as H}from"./context-BC4w0Dsv.js";const d={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:n}){return t.length<=e+i?t:n==="end"?`${t.substring(0,e)}...`:n==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),n=this.hexToRgb(i),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),c=`${s}% ${s}% at 65% 40%`,u=[];for(let h=0;h<5;h+=1){const g=this.tintColor(n,.15*h);u.push(`rgb(${g[0]}, ${g[1]}, ${g[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,n=e>>8&255,o=e&255;return[i,n,o]},tintColor(t,e){const[i,n,o]=t,a=Math.round(i+(255-i)*e),s=Math.round(n+(255-n)*e),c=Math.round(o+(255-o)*e);return[a,s,c]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function M(t,e){const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function U(t,e){return customElements.get(t)||customElements.define(t,e),e}function I(t){return function(i){return typeof i=="function"?U(t,i):M(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:k},G=(t=F,e,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),n==="accessor"){const{name:s}=i;return{set(c){const u=e.get.call(this);e.set.call(this,c),this.requestUpdate(s,u,t)},init(c){return c!==void 0&&this.C(s,void 0,t,c),c}}}if(n==="setter"){const{name:s}=i;return function(c){const u=this[s];e.call(this,c),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+n)};function l(t){return(e,i)=>typeof i=="object"?G(t,e,i):((n,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,n),s?Object.getOwnPropertyDescriptor(o,a):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>t===null||typeof t!="object"&&typeof t!="function",W=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2},C=t=>(...e)=>({_$litDirective$:t,values:e});let x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=(t,e)=>{var n;const i=t._$AN;if(i===void 0)return!1;for(const o of i)(n=o._$AO)==null||n.call(o,e,!1),f(o,e);return!0},E=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},z=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),X(e)}};function q(t){this._$AN!==void 0?(E(this),this._$AM=t,z(this)):this._$AM=t}function K(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let a=i;a<n.length;a++)f(n[a],!1),E(n[a]);else n!=null&&(f(n,!1),E(n));else f(this,t)}const X=t=>{t.type==V.CHILD&&(t._$AP??(t._$AP=K),t._$AQ??(t._$AQ=q))};class Y extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),z(this),this.isConnected=e._$AU}_$AO(e,i=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(f(this,e),E(this))}setValue(e){if(W(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Q{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=t=>!N(t)&&typeof t.then=="function",O=1073741823;class J extends Y{constructor(){super(...arguments),this._$Cwt=O,this._$Cbt=[],this._$CK=new Z(this),this._$CX=new Q}render(...e){return e.find(i=>!D(i))??T}update(e,i){const n=this._$Cbt;let o=n.length;this._$Cbt=i;const a=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$Cwt);c++){const u=i[c];if(!D(u))return this._$Cwt=c,u;c<o&&u===n[c]||(this._$Cwt=O,o=0,Promise.resolve(u).then(async h=>{for(;s.get();)await s.get();const g=a.deref();if(g!==void 0){const $=g._$Cbt.indexOf(u);$>-1&&$<g._$Cwt&&(g._$Cwt=$,g.setValue(h))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class et{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const A=new et,it=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var m=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const b={add:async()=>(await r(async()=>{const{addSvg:t}=await import("./add-EedKClNF.js");return{addSvg:t}},__vite__mapDeps([0,1,2,3]))).addSvg,allWallets:async()=>(await r(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-DNyRbisk.js");return{allWalletsSvg:t}},__vite__mapDeps([4,1,2,3]))).allWalletsSvg,arrowBottomCircle:async()=>(await r(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-fcsXLxL8.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([5,1,2,3]))).arrowBottomCircleSvg,appStore:async()=>(await r(async()=>{const{appStoreSvg:t}=await import("./app-store-BLN_5h0q.js");return{appStoreSvg:t}},__vite__mapDeps([6,1,2,3]))).appStoreSvg,apple:async()=>(await r(async()=>{const{appleSvg:t}=await import("./apple-C0AAYGYH.js");return{appleSvg:t}},__vite__mapDeps([7,1,2,3]))).appleSvg,arrowBottom:async()=>(await r(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-CC4IEiLn.js");return{arrowBottomSvg:t}},__vite__mapDeps([8,1,2,3]))).arrowBottomSvg,arrowLeft:async()=>(await r(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-C3Ni6uhf.js");return{arrowLeftSvg:t}},__vite__mapDeps([9,1,2,3]))).arrowLeftSvg,arrowRight:async()=>(await r(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-CGoKeoEd.js");return{arrowRightSvg:t}},__vite__mapDeps([10,1,2,3]))).arrowRightSvg,arrowTop:async()=>(await r(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-CxkbShXH.js");return{arrowTopSvg:t}},__vite__mapDeps([11,1,2,3]))).arrowTopSvg,bank:async()=>(await r(async()=>{const{bankSvg:t}=await import("./bank-CVrXz9ws.js");return{bankSvg:t}},__vite__mapDeps([12,1,2,3]))).bankSvg,browser:async()=>(await r(async()=>{const{browserSvg:t}=await import("./browser-D74rGFWH.js");return{browserSvg:t}},__vite__mapDeps([13,1,2,3]))).browserSvg,card:async()=>(await r(async()=>{const{cardSvg:t}=await import("./card-8K9Tve7R.js");return{cardSvg:t}},__vite__mapDeps([14,1,2,3]))).cardSvg,checkmark:async()=>(await r(async()=>{const{checkmarkSvg:t}=await import("./checkmark-Qfq1Hsf-.js");return{checkmarkSvg:t}},__vite__mapDeps([15,1,2,3]))).checkmarkSvg,checkmarkBold:async()=>(await r(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-D0NDo-Cf.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([16,1,2,3]))).checkmarkBoldSvg,chevronBottom:async()=>(await r(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-DMbBlJjv.js");return{chevronBottomSvg:t}},__vite__mapDeps([17,1,2,3]))).chevronBottomSvg,chevronLeft:async()=>(await r(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-Dhz8UnHs.js");return{chevronLeftSvg:t}},__vite__mapDeps([18,1,2,3]))).chevronLeftSvg,chevronRight:async()=>(await r(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-C2K5ilvy.js");return{chevronRightSvg:t}},__vite__mapDeps([19,1,2,3]))).chevronRightSvg,chevronTop:async()=>(await r(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-BNLIDEM7.js");return{chevronTopSvg:t}},__vite__mapDeps([20,1,2,3]))).chevronTopSvg,chromeStore:async()=>(await r(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-Bp_BwoZE.js");return{chromeStoreSvg:t}},__vite__mapDeps([21,1,2,3]))).chromeStoreSvg,clock:async()=>(await r(async()=>{const{clockSvg:t}=await import("./clock-Da31NsTZ.js");return{clockSvg:t}},__vite__mapDeps([22,1,2,3]))).clockSvg,close:async()=>(await r(async()=>{const{closeSvg:t}=await import("./close-SOPZhnXr.js");return{closeSvg:t}},__vite__mapDeps([23,1,2,3]))).closeSvg,compass:async()=>(await r(async()=>{const{compassSvg:t}=await import("./compass-DiX7RnKc.js");return{compassSvg:t}},__vite__mapDeps([24,1,2,3]))).compassSvg,coinPlaceholder:async()=>(await r(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-DpyE5viV.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([25,1,2,3]))).coinPlaceholderSvg,copy:async()=>(await r(async()=>{const{copySvg:t}=await import("./copy-DswHkO-Y.js");return{copySvg:t}},__vite__mapDeps([26,1,2,3]))).copySvg,cursor:async()=>(await r(async()=>{const{cursorSvg:t}=await import("./cursor-B27Etigu.js");return{cursorSvg:t}},__vite__mapDeps([27,1,2,3]))).cursorSvg,cursorTransparent:async()=>(await r(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-3ufnnxPK.js");return{cursorTransparentSvg:t}},__vite__mapDeps([28,1,2,3]))).cursorTransparentSvg,desktop:async()=>(await r(async()=>{const{desktopSvg:t}=await import("./desktop-Dgr2ksom.js");return{desktopSvg:t}},__vite__mapDeps([29,1,2,3]))).desktopSvg,disconnect:async()=>(await r(async()=>{const{disconnectSvg:t}=await import("./disconnect-D9ZWb4jU.js");return{disconnectSvg:t}},__vite__mapDeps([30,1,2,3]))).disconnectSvg,discord:async()=>(await r(async()=>{const{discordSvg:t}=await import("./discord-DymRUlqh.js");return{discordSvg:t}},__vite__mapDeps([31,1,2,3]))).discordSvg,etherscan:async()=>(await r(async()=>{const{etherscanSvg:t}=await import("./etherscan-DD3Mv-kP.js");return{etherscanSvg:t}},__vite__mapDeps([32,1,2,3]))).etherscanSvg,extension:async()=>(await r(async()=>{const{extensionSvg:t}=await import("./extension-BZEAIg-b.js");return{extensionSvg:t}},__vite__mapDeps([33,1,2,3]))).extensionSvg,externalLink:async()=>(await r(async()=>{const{externalLinkSvg:t}=await import("./external-link-BV7k23rc.js");return{externalLinkSvg:t}},__vite__mapDeps([34,1,2,3]))).externalLinkSvg,facebook:async()=>(await r(async()=>{const{facebookSvg:t}=await import("./facebook-B63tZVtA.js");return{facebookSvg:t}},__vite__mapDeps([35,1,2,3]))).facebookSvg,farcaster:async()=>(await r(async()=>{const{farcasterSvg:t}=await import("./farcaster-Dc0iMJba.js");return{farcasterSvg:t}},__vite__mapDeps([36,1,2,3]))).farcasterSvg,filters:async()=>(await r(async()=>{const{filtersSvg:t}=await import("./filters-rjn8AAIf.js");return{filtersSvg:t}},__vite__mapDeps([37,1,2,3]))).filtersSvg,github:async()=>(await r(async()=>{const{githubSvg:t}=await import("./github-BxTSy7sL.js");return{githubSvg:t}},__vite__mapDeps([38,1,2,3]))).githubSvg,google:async()=>(await r(async()=>{const{googleSvg:t}=await import("./google-CBm1MpdK.js");return{googleSvg:t}},__vite__mapDeps([39,1,2,3]))).googleSvg,helpCircle:async()=>(await r(async()=>{const{helpCircleSvg:t}=await import("./help-circle-Dx6pKDRh.js");return{helpCircleSvg:t}},__vite__mapDeps([40,1,2,3]))).helpCircleSvg,image:async()=>(await r(async()=>{const{imageSvg:t}=await import("./image-CeiGUDGC.js");return{imageSvg:t}},__vite__mapDeps([41,1,2,3]))).imageSvg,id:async()=>(await r(async()=>{const{idSvg:t}=await import("./id-SIt5X82W.js");return{idSvg:t}},__vite__mapDeps([42,1,2,3]))).idSvg,infoCircle:async()=>(await r(async()=>{const{infoCircleSvg:t}=await import("./info-circle-gyBa9VGD.js");return{infoCircleSvg:t}},__vite__mapDeps([43,1,2,3]))).infoCircleSvg,lightbulb:async()=>(await r(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-BSC0djfQ.js");return{lightbulbSvg:t}},__vite__mapDeps([44,1,2,3]))).lightbulbSvg,mail:async()=>(await r(async()=>{const{mailSvg:t}=await import("./mail-CBbt2AE1.js");return{mailSvg:t}},__vite__mapDeps([45,1,2,3]))).mailSvg,mobile:async()=>(await r(async()=>{const{mobileSvg:t}=await import("./mobile-CuYFtPsd.js");return{mobileSvg:t}},__vite__mapDeps([46,1,2,3]))).mobileSvg,more:async()=>(await r(async()=>{const{moreSvg:t}=await import("./more-JJ1yLi9H.js");return{moreSvg:t}},__vite__mapDeps([47,1,2,3]))).moreSvg,networkPlaceholder:async()=>(await r(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-DF8Z39TW.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([48,1,2,3]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await r(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-Xks-SQdA.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([49,1,2,3]))).nftPlaceholderSvg,off:async()=>(await r(async()=>{const{offSvg:t}=await import("./off-CeaXPszD.js");return{offSvg:t}},__vite__mapDeps([50,1,2,3]))).offSvg,playStore:async()=>(await r(async()=>{const{playStoreSvg:t}=await import("./play-store-D3iBA750.js");return{playStoreSvg:t}},__vite__mapDeps([51,1,2,3]))).playStoreSvg,plus:async()=>(await r(async()=>{const{plusSvg:t}=await import("./plus-DFWr_lNl.js");return{plusSvg:t}},__vite__mapDeps([52,1,2,3]))).plusSvg,qrCode:async()=>(await r(async()=>{const{qrCodeIcon:t}=await import("./qr-code-DkPgDm8G.js");return{qrCodeIcon:t}},__vite__mapDeps([53,1,2,3]))).qrCodeIcon,recycleHorizontal:async()=>(await r(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-Dkf91aGt.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([54,1,2,3]))).recycleHorizontalSvg,refresh:async()=>(await r(async()=>{const{refreshSvg:t}=await import("./refresh-BSF7wk5l.js");return{refreshSvg:t}},__vite__mapDeps([55,1,2,3]))).refreshSvg,search:async()=>(await r(async()=>{const{searchSvg:t}=await import("./search-DyKuywUJ.js");return{searchSvg:t}},__vite__mapDeps([56,1,2,3]))).searchSvg,send:async()=>(await r(async()=>{const{sendSvg:t}=await import("./send-BmvRy17G.js");return{sendSvg:t}},__vite__mapDeps([57,1,2,3]))).sendSvg,swapHorizontal:async()=>(await r(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-Dqk-uF5r.js");return{swapHorizontalSvg:t}},__vite__mapDeps([58,1,2,3]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await r(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-CEO1D7lQ.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([59,1,2,3]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await r(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-DM7OIzm8.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([60,1,2,3]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await r(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-T9r1fwM1.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([61,1,2,3]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await r(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-HkD-SNqT.js");return{swapVerticalSvg:t}},__vite__mapDeps([62,1,2,3]))).swapVerticalSvg,telegram:async()=>(await r(async()=>{const{telegramSvg:t}=await import("./telegram-DioBnx84.js");return{telegramSvg:t}},__vite__mapDeps([63,1,2,3]))).telegramSvg,threeDots:async()=>(await r(async()=>{const{threeDotsSvg:t}=await import("./three-dots-BdkdC3C2.js");return{threeDotsSvg:t}},__vite__mapDeps([64,1,2,3]))).threeDotsSvg,twitch:async()=>(await r(async()=>{const{twitchSvg:t}=await import("./twitch-C7sqB49h.js");return{twitchSvg:t}},__vite__mapDeps([65,1,2,3]))).twitchSvg,twitter:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-DZFr4jhg.js");return{xSvg:t}},__vite__mapDeps([66,1,2,3]))).xSvg,twitterIcon:async()=>(await r(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-DuzrnukF.js");return{twitterIconSvg:t}},__vite__mapDeps([67,1,2,3]))).twitterIconSvg,verify:async()=>(await r(async()=>{const{verifySvg:t}=await import("./verify-eMVuHwIF.js");return{verifySvg:t}},__vite__mapDeps([68,1,2,3]))).verifySvg,verifyFilled:async()=>(await r(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-mcyf7keU.js");return{verifyFilledSvg:t}},__vite__mapDeps([69,1,2,3]))).verifyFilledSvg,wallet:async()=>(await r(async()=>{const{walletSvg:t}=await import("./wallet-BpAAcpI4.js");return{walletSvg:t}},__vite__mapDeps([70,1,2,3]))).walletSvg,walletConnect:async()=>(await r(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-Ckac1T6_.js");return{walletConnectSvg:t}},__vite__mapDeps([71,1,2,3]))).walletConnectSvg,walletConnectLightBrown:async()=>(await r(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-Ckac1T6_.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([71,1,2,3]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await r(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-Ckac1T6_.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([71,1,2,3]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await r(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-CEso-mH8.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([72,1,2,3]))).walletPlaceholderSvg,warningCircle:async()=>(await r(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-Bdl9ZxX2.js");return{warningCircleSvg:t}},__vite__mapDeps([73,1,2,3]))).warningCircleSvg,x:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-DZFr4jhg.js");return{xSvg:t}},__vite__mapDeps([66,1,2,3]))).xSvg,info:async()=>(await r(async()=>{const{infoSvg:t}=await import("./info-DcRIvNX0.js");return{infoSvg:t}},__vite__mapDeps([74,1,2,3]))).infoSvg,exclamationTriangle:async()=>(await r(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-D_plgB9h.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([75,1,2,3]))).exclamationTriangleSvg,reown:async()=>(await r(async()=>{const{reownSvg:t}=await import("./reown-logo-DOQkXh0h.js");return{reownSvg:t}},__vite__mapDeps([76,1,2,3]))).reownSvg};async function rt(t){if(A.has(t))return A.get(t);const i=(b[t]??b.copy)();return A.set(t,i),i}let v=class extends L{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,S`${tt(rt(this.name),S`<div class="fallback"></div>`)}`}};v.styles=[R,j,it];m([l()],v.prototype,"size",void 0);m([l()],v.prototype,"name",void 0);m([l()],v.prototype,"color",void 0);m([l()],v.prototype,"aspectRatio",void 0);v=m([I("wui-icon")],v);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=C(class extends x{constructor(t){var e;if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!((n=this.nt)!=null&&n.has(a))&&this.st.add(a);return this.render(e)}const i=t.element.classList;for(const a of this.st)a in e||(i.remove(a),this.st.delete(a));for(const a in e){const s=!!e[a];s===this.st.has(a)||(o=this.nt)!=null&&o.has(a)||(s?(i.add(a),this.st.add(a)):(i.remove(a),this.st.delete(a)))}return T}}),nt=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var y=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends L{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,S`<slot class=${at(e)}></slot>`}};p.styles=[R,nt];y([l()],p.prototype,"variant",void 0);y([l()],p.prototype,"color",void 0);y([l()],p.prototype,"align",void 0);y([l()],p.prototype,"lineClamp",void 0);p=y([I("wui-text")],p);const ot=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var w=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let _=class extends L{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&d.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&d.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&d.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&d.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&d.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&d.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&d.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&d.getSpacingStyles(this.margin,3)};
    `,S`<slot></slot>`}};_.styles=[R,ot];w([l()],_.prototype,"flexDirection",void 0);w([l()],_.prototype,"flexWrap",void 0);w([l()],_.prototype,"flexBasis",void 0);w([l()],_.prototype,"flexGrow",void 0);w([l()],_.prototype,"flexShrink",void 0);w([l()],_.prototype,"alignItems",void 0);w([l()],_.prototype,"justifyContent",void 0);w([l()],_.prototype,"columnGap",void 0);w([l()],_.prototype,"rowGap",void 0);w([l()],_.prototype,"gap",void 0);w([l()],_.prototype,"padding",void 0);w([l()],_.prototype,"margin",void 0);_=w([I("wui-flex")],_);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=t=>t??H;export{d as U,C as a,I as c,at as e,Y as f,l as n,dt as o,lt as r};
