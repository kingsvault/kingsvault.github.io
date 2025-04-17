import{g as lr,a as ot,c as ie,p as Xe,r as qe,j as nt}from"./index-BApHCh9l.js";function Me(n,t){return t==="light"?{"--w3m-accent":(n==null?void 0:n["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(n==null?void 0:n["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}var Nr={},We={};We.byteLength=ct;We.toByteArray=lt;We.fromByteArray=wt;var oe=[],V=[],st=typeof Uint8Array<"u"?Uint8Array:Array,Qe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var ve=0,at=Qe.length;ve<at;++ve)oe[ve]=Qe[ve],V[Qe.charCodeAt(ve)]=ve;V[45]=62;V[95]=63;function jr(n){var t=n.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=n.indexOf("=");i===-1&&(i=t);var a=i===t?0:4-i%4;return[i,a]}function ct(n){var t=jr(n),i=t[0],a=t[1];return(i+a)*3/4-a}function ut(n,t,i){return(t+i)*3/4-i}function lt(n){var t,i=jr(n),a=i[0],u=i[1],c=new st(ut(n,a,u)),h=0,y=u>0?a-4:a,b;for(b=0;b<y;b+=4)t=V[n.charCodeAt(b)]<<18|V[n.charCodeAt(b+1)]<<12|V[n.charCodeAt(b+2)]<<6|V[n.charCodeAt(b+3)],c[h++]=t>>16&255,c[h++]=t>>8&255,c[h++]=t&255;return u===2&&(t=V[n.charCodeAt(b)]<<2|V[n.charCodeAt(b+1)]>>4,c[h++]=t&255),u===1&&(t=V[n.charCodeAt(b)]<<10|V[n.charCodeAt(b+1)]<<4|V[n.charCodeAt(b+2)]>>2,c[h++]=t>>8&255,c[h++]=t&255),c}function ft(n){return oe[n>>18&63]+oe[n>>12&63]+oe[n>>6&63]+oe[n&63]}function ht(n,t,i){for(var a,u=[],c=t;c<i;c+=3)a=(n[c]<<16&16711680)+(n[c+1]<<8&65280)+(n[c+2]&255),u.push(ft(a));return u.join("")}function wt(n){for(var t,i=n.length,a=i%3,u=[],c=16383,h=0,y=i-a;h<y;h+=c)u.push(ht(n,h,h+c>y?y:h+c));return a===1?(t=n[i-1],u.push(oe[t>>2]+oe[t<<4&63]+"==")):a===2&&(t=(n[i-2]<<8)+n[i-1],u.push(oe[t>>10]+oe[t>>4&63]+oe[t<<2&63]+"=")),u.join("")}var fr={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */fr.read=function(n,t,i,a,u){var c,h,y=u*8-a-1,b=(1<<y)-1,g=b>>1,l=-7,B=i?u-1:0,$=i?-1:1,T=n[t+B];for(B+=$,c=T&(1<<-l)-1,T>>=-l,l+=y;l>0;c=c*256+n[t+B],B+=$,l-=8);for(h=c&(1<<-l)-1,c>>=-l,l+=a;l>0;h=h*256+n[t+B],B+=$,l-=8);if(c===0)c=1-g;else{if(c===b)return h?NaN:(T?-1:1)*(1/0);h=h+Math.pow(2,a),c=c-g}return(T?-1:1)*h*Math.pow(2,c-a)};fr.write=function(n,t,i,a,u,c){var h,y,b,g=c*8-u-1,l=(1<<g)-1,B=l>>1,$=u===23?Math.pow(2,-24)-Math.pow(2,-77):0,T=a?0:c-1,F=a?1:-1,C=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(y=isNaN(t)?1:0,h=l):(h=Math.floor(Math.log(t)/Math.LN2),t*(b=Math.pow(2,-h))<1&&(h--,b*=2),h+B>=1?t+=$/b:t+=$*Math.pow(2,1-B),t*b>=2&&(h++,b/=2),h+B>=l?(y=0,h=l):h+B>=1?(y=(t*b-1)*Math.pow(2,u),h=h+B):(y=t*Math.pow(2,B-1)*Math.pow(2,u),h=0));u>=8;n[i+T]=y&255,T+=F,y/=256,u-=8);for(h=h<<u|y,g+=u;g>0;n[i+T]=h&255,T+=F,h/=256,g-=8);n[i+T-F]|=C*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(n){const t=We,i=fr,a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=l,n.SlowBuffer=v,n.INSPECT_MAX_BYTES=50;const u=2147483647;n.kMaxLength=u;const{Uint8Array:c,ArrayBuffer:h,SharedArrayBuffer:y}=globalThis;l.TYPED_ARRAY_SUPPORT=b(),!l.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function b(){try{const o=new c(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,c.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch{return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}});function g(o){if(o>u)throw new RangeError('The value "'+o+'" is invalid for option "size"');const e=new c(o);return Object.setPrototypeOf(e,l.prototype),e}function l(o,e,r){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return F(o)}return B(o,e,r)}l.poolSize=8192;function B(o,e,r){if(typeof o=="string")return C(o,e);if(h.isView(o))return X(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(te(o,h)||o&&te(o.buffer,h)||typeof y<"u"&&(te(o,y)||o&&te(o.buffer,y)))return K(o,e,r);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const s=o.valueOf&&o.valueOf();if(s!=null&&s!==o)return l.from(s,e,r);const f=Y(o);if(f)return f;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return l.from(o[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}l.from=function(o,e,r){return B(o,e,r)},Object.setPrototypeOf(l.prototype,c.prototype),Object.setPrototypeOf(l,c);function $(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function T(o,e,r){return $(o),o<=0?g(o):e!==void 0?typeof r=="string"?g(o).fill(e,r):g(o).fill(e):g(o)}l.alloc=function(o,e,r){return T(o,e,r)};function F(o){return $(o),g(o<0?0:_(o)|0)}l.allocUnsafe=function(o){return F(o)},l.allocUnsafeSlow=function(o){return F(o)};function C(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=w(o,e)|0;let s=g(r);const f=s.write(o,e);return f!==r&&(s=s.slice(0,f)),s}function N(o){const e=o.length<0?0:_(o.length)|0,r=g(e);for(let s=0;s<e;s+=1)r[s]=o[s]&255;return r}function X(o){if(te(o,c)){const e=new c(o);return K(e.buffer,e.byteOffset,e.byteLength)}return N(o)}function K(o,e,r){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let s;return e===void 0&&r===void 0?s=new c(o):r===void 0?s=new c(o,e):s=new c(o,e,r),Object.setPrototypeOf(s,l.prototype),s}function Y(o){if(l.isBuffer(o)){const e=_(o.length)|0,r=g(e);return r.length===0||o.copy(r,0,0,e),r}if(o.length!==void 0)return typeof o.length!="number"||Ze(o.length)?g(0):N(o);if(o.type==="Buffer"&&Array.isArray(o.data))return N(o.data)}function _(o){if(o>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return o|0}function v(o){return+o!=o&&(o=0),l.alloc(+o)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype},l.compare=function(e,r){if(te(e,c)&&(e=l.from(e,e.offset,e.byteLength)),te(r,c)&&(r=l.from(r,r.offset,r.byteLength)),!l.isBuffer(e)||!l.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;let s=e.length,f=r.length;for(let d=0,m=Math.min(s,f);d<m;++d)if(e[d]!==r[d]){s=e[d],f=r[d];break}return s<f?-1:f<s?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);let s;if(r===void 0)for(r=0,s=0;s<e.length;++s)r+=e[s].length;const f=l.allocUnsafe(r);let d=0;for(s=0;s<e.length;++s){let m=e[s];if(te(m,c))d+m.length>f.length?(l.isBuffer(m)||(m=l.from(m)),m.copy(f,d)):c.prototype.set.call(f,m,d);else if(l.isBuffer(m))m.copy(f,d);else throw new TypeError('"list" argument must be an Array of Buffers');d+=m.length}return f};function w(o,e){if(l.isBuffer(o))return o.length;if(h.isView(o)||te(o,h))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);const r=o.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&r===0)return 0;let f=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Je(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return vr(o).length;default:if(f)return s?-1:Je(o).length;e=(""+e).toLowerCase(),f=!0}}l.byteLength=w;function x(o,e,r){let s=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return ce(this,e,r);case"utf8":case"utf-8":return R(this,e,r);case"ascii":return O(this,e,r);case"latin1":case"binary":return ee(this,e,r);case"base64":return A(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,r);default:if(s)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),s=!0}}l.prototype._isBuffer=!0;function E(o,e,r){const s=o[e];o[e]=o[r],o[r]=s}l.prototype.swap16=function(){const e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let r=0;r<e;r+=2)E(this,r,r+1);return this},l.prototype.swap32=function(){const e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<e;r+=4)E(this,r,r+3),E(this,r+1,r+2);return this},l.prototype.swap64=function(){const e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<e;r+=8)E(this,r,r+7),E(this,r+1,r+6),E(this,r+2,r+5),E(this,r+3,r+4);return this},l.prototype.toString=function(){const e=this.length;return e===0?"":arguments.length===0?R(this,0,e):x.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0},l.prototype.inspect=function(){let e="";const r=n.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},a&&(l.prototype[a]=l.prototype.inspect),l.prototype.compare=function(e,r,s,f,d){if(te(e,c)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),s===void 0&&(s=e?e.length:0),f===void 0&&(f=0),d===void 0&&(d=this.length),r<0||s>e.length||f<0||d>this.length)throw new RangeError("out of range index");if(f>=d&&r>=s)return 0;if(f>=d)return-1;if(r>=s)return 1;if(r>>>=0,s>>>=0,f>>>=0,d>>>=0,this===e)return 0;let m=d-f,P=s-r;const G=Math.min(m,P),q=this.slice(f,d),W=e.slice(r,s);for(let D=0;D<G;++D)if(q[D]!==W[D]){m=q[D],P=W[D];break}return m<P?-1:P<m?1:0};function I(o,e,r,s,f){if(o.length===0)return-1;if(typeof r=="string"?(s=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Ze(r)&&(r=f?0:o.length-1),r<0&&(r=o.length+r),r>=o.length){if(f)return-1;r=o.length-1}else if(r<0)if(f)r=0;else return-1;if(typeof e=="string"&&(e=l.from(e,s)),l.isBuffer(e))return e.length===0?-1:S(o,e,r,s,f);if(typeof e=="number")return e=e&255,typeof c.prototype.indexOf=="function"?f?c.prototype.indexOf.call(o,e,r):c.prototype.lastIndexOf.call(o,e,r):S(o,[e],r,s,f);throw new TypeError("val must be string, number or Buffer")}function S(o,e,r,s,f){let d=1,m=o.length,P=e.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(o.length<2||e.length<2)return-1;d=2,m/=2,P/=2,r/=2}function G(W,D){return d===1?W[D]:W.readUInt16BE(D*d)}let q;if(f){let W=-1;for(q=r;q<m;q++)if(G(o,q)===G(e,W===-1?0:q-W)){if(W===-1&&(W=q),q-W+1===P)return W*d}else W!==-1&&(q-=q-W),W=-1}else for(r+P>m&&(r=m-P),q=r;q>=0;q--){let W=!0;for(let D=0;D<P;D++)if(G(o,q+D)!==G(e,D)){W=!1;break}if(W)return q}return-1}l.prototype.includes=function(e,r,s){return this.indexOf(e,r,s)!==-1},l.prototype.indexOf=function(e,r,s){return I(this,e,r,s,!0)},l.prototype.lastIndexOf=function(e,r,s){return I(this,e,r,s,!1)};function k(o,e,r,s){r=Number(r)||0;const f=o.length-r;s?(s=Number(s),s>f&&(s=f)):s=f;const d=e.length;s>d/2&&(s=d/2);let m;for(m=0;m<s;++m){const P=parseInt(e.substr(m*2,2),16);if(Ze(P))return m;o[r+m]=P}return m}function z(o,e,r,s){return ze(Je(e,o.length-r),o,r,s)}function Z(o,e,r,s){return ze(et(e),o,r,s)}function U(o,e,r,s){return ze(vr(e),o,r,s)}function p(o,e,r,s){return ze(rt(e,o.length-r),o,r,s)}l.prototype.write=function(e,r,s,f){if(r===void 0)f="utf8",s=this.length,r=0;else if(s===void 0&&typeof r=="string")f=r,s=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(s)?(s=s>>>0,f===void 0&&(f="utf8")):(f=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const d=this.length-r;if((s===void 0||s>d)&&(s=d),e.length>0&&(s<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");f||(f="utf8");let m=!1;for(;;)switch(f){case"hex":return k(this,e,r,s);case"utf8":case"utf-8":return z(this,e,r,s);case"ascii":case"latin1":case"binary":return Z(this,e,r,s);case"base64":return U(this,e,r,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p(this,e,r,s);default:if(m)throw new TypeError("Unknown encoding: "+f);f=(""+f).toLowerCase(),m=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function A(o,e,r){return e===0&&r===o.length?t.fromByteArray(o):t.fromByteArray(o.slice(e,r))}function R(o,e,r){r=Math.min(o.length,r);const s=[];let f=e;for(;f<r;){const d=o[f];let m=null,P=d>239?4:d>223?3:d>191?2:1;if(f+P<=r){let G,q,W,D;switch(P){case 1:d<128&&(m=d);break;case 2:G=o[f+1],(G&192)===128&&(D=(d&31)<<6|G&63,D>127&&(m=D));break;case 3:G=o[f+1],q=o[f+2],(G&192)===128&&(q&192)===128&&(D=(d&15)<<12|(G&63)<<6|q&63,D>2047&&(D<55296||D>57343)&&(m=D));break;case 4:G=o[f+1],q=o[f+2],W=o[f+3],(G&192)===128&&(q&192)===128&&(W&192)===128&&(D=(d&15)<<18|(G&63)<<12|(q&63)<<6|W&63,D>65535&&D<1114112&&(m=D))}}m===null?(m=65533,P=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),f+=P}return j(s)}const M=4096;function j(o){const e=o.length;if(e<=M)return String.fromCharCode.apply(String,o);let r="",s=0;for(;s<e;)r+=String.fromCharCode.apply(String,o.slice(s,s+=M));return r}function O(o,e,r){let s="";r=Math.min(o.length,r);for(let f=e;f<r;++f)s+=String.fromCharCode(o[f]&127);return s}function ee(o,e,r){let s="";r=Math.min(o.length,r);for(let f=e;f<r;++f)s+=String.fromCharCode(o[f]);return s}function ce(o,e,r){const s=o.length;(!e||e<0)&&(e=0),(!r||r<0||r>s)&&(r=s);let f="";for(let d=e;d<r;++d)f+=tt[o[d]];return f}function ne(o,e,r){const s=o.slice(e,r);let f="";for(let d=0;d<s.length-1;d+=2)f+=String.fromCharCode(s[d]+s[d+1]*256);return f}l.prototype.slice=function(e,r){const s=this.length;e=~~e,r=r===void 0?s:~~r,e<0?(e+=s,e<0&&(e=0)):e>s&&(e=s),r<0?(r+=s,r<0&&(r=0)):r>s&&(r=s),r<e&&(r=e);const f=this.subarray(e,r);return Object.setPrototypeOf(f,l.prototype),f};function L(o,e,r){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>r)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,r,s){e=e>>>0,r=r>>>0,s||L(e,r,this.length);let f=this[e],d=1,m=0;for(;++m<r&&(d*=256);)f+=this[e+m]*d;return f},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,r,s){e=e>>>0,r=r>>>0,s||L(e,r,this.length);let f=this[e+--r],d=1;for(;r>0&&(d*=256);)f+=this[e+--r]*d;return f},l.prototype.readUint8=l.prototype.readUInt8=function(e,r){return e=e>>>0,r||L(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||L(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||L(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||L(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=ue(function(e){e=e>>>0,xe(e,"offset");const r=this[e],s=this[e+7];(r===void 0||s===void 0)&&Se(e,this.length-8);const f=r+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,d=this[++e]+this[++e]*2**8+this[++e]*2**16+s*2**24;return BigInt(f)+(BigInt(d)<<BigInt(32))}),l.prototype.readBigUInt64BE=ue(function(e){e=e>>>0,xe(e,"offset");const r=this[e],s=this[e+7];(r===void 0||s===void 0)&&Se(e,this.length-8);const f=r*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],d=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+s;return(BigInt(f)<<BigInt(32))+BigInt(d)}),l.prototype.readIntLE=function(e,r,s){e=e>>>0,r=r>>>0,s||L(e,r,this.length);let f=this[e],d=1,m=0;for(;++m<r&&(d*=256);)f+=this[e+m]*d;return d*=128,f>=d&&(f-=Math.pow(2,8*r)),f},l.prototype.readIntBE=function(e,r,s){e=e>>>0,r=r>>>0,s||L(e,r,this.length);let f=r,d=1,m=this[e+--f];for(;f>0&&(d*=256);)m+=this[e+--f]*d;return d*=128,m>=d&&(m-=Math.pow(2,8*r)),m},l.prototype.readInt8=function(e,r){return e=e>>>0,r||L(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},l.prototype.readInt16LE=function(e,r){e=e>>>0,r||L(e,2,this.length);const s=this[e]|this[e+1]<<8;return s&32768?s|4294901760:s},l.prototype.readInt16BE=function(e,r){e=e>>>0,r||L(e,2,this.length);const s=this[e+1]|this[e]<<8;return s&32768?s|4294901760:s},l.prototype.readInt32LE=function(e,r){return e=e>>>0,r||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,r){return e=e>>>0,r||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=ue(function(e){e=e>>>0,xe(e,"offset");const r=this[e],s=this[e+7];(r===void 0||s===void 0)&&Se(e,this.length-8);const f=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(s<<24);return(BigInt(f)<<BigInt(32))+BigInt(r+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),l.prototype.readBigInt64BE=ue(function(e){e=e>>>0,xe(e,"offset");const r=this[e],s=this[e+7];(r===void 0||s===void 0)&&Se(e,this.length-8);const f=(r<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(f)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+s)}),l.prototype.readFloatLE=function(e,r){return e=e>>>0,r||L(e,4,this.length),i.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,r){return e=e>>>0,r||L(e,4,this.length),i.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||L(e,8,this.length),i.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||L(e,8,this.length),i.read(this,e,!1,52,8)};function H(o,e,r,s,f,d){if(!l.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>f||e<d)throw new RangeError('"value" argument is out of bounds');if(r+s>o.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,r,s,f){if(e=+e,r=r>>>0,s=s>>>0,!f){const P=Math.pow(2,8*s)-1;H(this,e,r,s,P,0)}let d=1,m=0;for(this[r]=e&255;++m<s&&(d*=256);)this[r+m]=e/d&255;return r+s},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,r,s,f){if(e=+e,r=r>>>0,s=s>>>0,!f){const P=Math.pow(2,8*s)-1;H(this,e,r,s,P,0)}let d=s-1,m=1;for(this[r+d]=e&255;--d>=0&&(m*=256);)this[r+d]=e/m&255;return r+s},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,1,255,0),this[r]=e&255,r+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function re(o,e,r,s,f){xr(e,s,f,o,r,7);let d=Number(e&BigInt(4294967295));o[r++]=d,d=d>>8,o[r++]=d,d=d>>8,o[r++]=d,d=d>>8,o[r++]=d;let m=Number(e>>BigInt(32)&BigInt(4294967295));return o[r++]=m,m=m>>8,o[r++]=m,m=m>>8,o[r++]=m,m=m>>8,o[r++]=m,r}function dr(o,e,r,s,f){xr(e,s,f,o,r,7);let d=Number(e&BigInt(4294967295));o[r+7]=d,d=d>>8,o[r+6]=d,d=d>>8,o[r+5]=d,d=d>>8,o[r+4]=d;let m=Number(e>>BigInt(32)&BigInt(4294967295));return o[r+3]=m,m=m>>8,o[r+2]=m,m=m>>8,o[r+1]=m,m=m>>8,o[r]=m,r+8}l.prototype.writeBigUInt64LE=ue(function(e,r=0){return re(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeBigUInt64BE=ue(function(e,r=0){return dr(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeIntLE=function(e,r,s,f){if(e=+e,r=r>>>0,!f){const G=Math.pow(2,8*s-1);H(this,e,r,s,G-1,-G)}let d=0,m=1,P=0;for(this[r]=e&255;++d<s&&(m*=256);)e<0&&P===0&&this[r+d-1]!==0&&(P=1),this[r+d]=(e/m>>0)-P&255;return r+s},l.prototype.writeIntBE=function(e,r,s,f){if(e=+e,r=r>>>0,!f){const G=Math.pow(2,8*s-1);H(this,e,r,s,G-1,-G)}let d=s-1,m=1,P=0;for(this[r+d]=e&255;--d>=0&&(m*=256);)e<0&&P===0&&this[r+d+1]!==0&&(P=1),this[r+d]=(e/m>>0)-P&255;return r+s},l.prototype.writeInt8=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},l.prototype.writeInt16LE=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},l.prototype.writeInt16BE=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},l.prototype.writeInt32LE=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},l.prototype.writeInt32BE=function(e,r,s){return e=+e,r=r>>>0,s||H(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},l.prototype.writeBigInt64LE=ue(function(e,r=0){return re(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeBigInt64BE=ue(function(e,r=0){return dr(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function gr(o,e,r,s,f,d){if(r+s>o.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function mr(o,e,r,s,f){return e=+e,r=r>>>0,f||gr(o,e,r,4),i.write(o,e,r,s,23,4),r+4}l.prototype.writeFloatLE=function(e,r,s){return mr(this,e,r,!0,s)},l.prototype.writeFloatBE=function(e,r,s){return mr(this,e,r,!1,s)};function br(o,e,r,s,f){return e=+e,r=r>>>0,f||gr(o,e,r,8),i.write(o,e,r,s,52,8),r+8}l.prototype.writeDoubleLE=function(e,r,s){return br(this,e,r,!0,s)},l.prototype.writeDoubleBE=function(e,r,s){return br(this,e,r,!1,s)},l.prototype.copy=function(e,r,s,f){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(s||(s=0),!f&&f!==0&&(f=this.length),r>=e.length&&(r=e.length),r||(r=0),f>0&&f<s&&(f=s),f===s||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("sourceEnd out of bounds");f>this.length&&(f=this.length),e.length-r<f-s&&(f=e.length-r+s);const d=f-s;return this===e&&typeof c.prototype.copyWithin=="function"?this.copyWithin(r,s,f):c.prototype.set.call(e,this.subarray(s,f),r),d},l.prototype.fill=function(e,r,s,f){if(typeof e=="string"){if(typeof r=="string"?(f=r,r=0,s=this.length):typeof s=="string"&&(f=s,s=this.length),f!==void 0&&typeof f!="string")throw new TypeError("encoding must be a string");if(typeof f=="string"&&!l.isEncoding(f))throw new TypeError("Unknown encoding: "+f);if(e.length===1){const m=e.charCodeAt(0);(f==="utf8"&&m<128||f==="latin1")&&(e=m)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<s)throw new RangeError("Out of range index");if(s<=r)return this;r=r>>>0,s=s===void 0?this.length:s>>>0,e||(e=0);let d;if(typeof e=="number")for(d=r;d<s;++d)this[d]=e;else{const m=l.isBuffer(e)?e:l.from(e,f),P=m.length;if(P===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(d=0;d<s-r;++d)this[d+r]=m[d%P]}return this};const ye={};function Ye(o,e,r){ye[o]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${o}]`,this.stack,delete this.name}get code(){return o}set code(f){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:f,writable:!0})}toString(){return`${this.name} [${o}]: ${this.message}`}}}Ye("ERR_BUFFER_OUT_OF_BOUNDS",function(o){return o?`${o} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Ye("ERR_INVALID_ARG_TYPE",function(o,e){return`The "${o}" argument must be of type number. Received type ${typeof e}`},TypeError),Ye("ERR_OUT_OF_RANGE",function(o,e,r){let s=`The value of "${o}" is out of range.`,f=r;return Number.isInteger(r)&&Math.abs(r)>2**32?f=yr(String(r)):typeof r=="bigint"&&(f=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(f=yr(f)),f+="n"),s+=` It must be ${e}. Received ${f}`,s},RangeError);function yr(o){let e="",r=o.length;const s=o[0]==="-"?1:0;for(;r>=s+4;r-=3)e=`_${o.slice(r-3,r)}${e}`;return`${o.slice(0,r)}${e}`}function Xr(o,e,r){xe(e,"offset"),(o[e]===void 0||o[e+r]===void 0)&&Se(e,o.length-(r+1))}function xr(o,e,r,s,f,d){if(o>r||o<e){const m=typeof e=="bigint"?"n":"";let P;throw e===0||e===BigInt(0)?P=`>= 0${m} and < 2${m} ** ${(d+1)*8}${m}`:P=`>= -(2${m} ** ${(d+1)*8-1}${m}) and < 2 ** ${(d+1)*8-1}${m}`,new ye.ERR_OUT_OF_RANGE("value",P,o)}Xr(s,f,d)}function xe(o,e){if(typeof o!="number")throw new ye.ERR_INVALID_ARG_TYPE(e,"number",o)}function Se(o,e,r){throw Math.floor(o)!==o?(xe(o,r),new ye.ERR_OUT_OF_RANGE("offset","an integer",o)):e<0?new ye.ERR_BUFFER_OUT_OF_BOUNDS:new ye.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${e}`,o)}const Qr=/[^+/0-9A-Za-z-_]/g;function Vr(o){if(o=o.split("=")[0],o=o.trim().replace(Qr,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function Je(o,e){e=e||1/0;let r;const s=o.length;let f=null;const d=[];for(let m=0;m<s;++m){if(r=o.charCodeAt(m),r>55295&&r<57344){if(!f){if(r>56319){(e-=3)>-1&&d.push(239,191,189);continue}else if(m+1===s){(e-=3)>-1&&d.push(239,191,189);continue}f=r;continue}if(r<56320){(e-=3)>-1&&d.push(239,191,189),f=r;continue}r=(f-55296<<10|r-56320)+65536}else f&&(e-=3)>-1&&d.push(239,191,189);if(f=null,r<128){if((e-=1)<0)break;d.push(r)}else if(r<2048){if((e-=2)<0)break;d.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;d.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;d.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return d}function et(o){const e=[];for(let r=0;r<o.length;++r)e.push(o.charCodeAt(r)&255);return e}function rt(o,e){let r,s,f;const d=[];for(let m=0;m<o.length&&!((e-=2)<0);++m)r=o.charCodeAt(m),s=r>>8,f=r%256,d.push(f),d.push(s);return d}function vr(o){return t.toByteArray(Vr(o))}function ze(o,e,r,s){let f;for(f=0;f<s&&!(f+r>=e.length||f>=o.length);++f)e[f+r]=o[f];return f}function te(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Ze(o){return o!==o}const tt=function(){const o="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const s=r*16;for(let f=0;f<16;++f)e[s+f]=o[r]+o[f]}return e}();function ue(o){return typeof BigInt>"u"?it:o}function it(){throw new Error("BigInt not supported")}})(Nr);const wi=Nr.Buffer;var Ne={exports:{}},_r;function pt(){if(_r)return Ne.exports;_r=1;var n=typeof Reflect=="object"?Reflect:null,t=n&&typeof n.apply=="function"?n.apply:function(v,w,x){return Function.prototype.apply.call(v,w,x)},i;n&&typeof n.ownKeys=="function"?i=n.ownKeys:Object.getOwnPropertySymbols?i=function(v){return Object.getOwnPropertyNames(v).concat(Object.getOwnPropertySymbols(v))}:i=function(v){return Object.getOwnPropertyNames(v)};function a(_){console&&console.warn&&console.warn(_)}var u=Number.isNaN||function(v){return v!==v};function c(){c.init.call(this)}Ne.exports=c,Ne.exports.once=X,c.EventEmitter=c,c.prototype._events=void 0,c.prototype._eventsCount=0,c.prototype._maxListeners=void 0;var h=10;function y(_){if(typeof _!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof _)}Object.defineProperty(c,"defaultMaxListeners",{enumerable:!0,get:function(){return h},set:function(_){if(typeof _!="number"||_<0||u(_))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+_+".");h=_}}),c.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},c.prototype.setMaxListeners=function(v){if(typeof v!="number"||v<0||u(v))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+v+".");return this._maxListeners=v,this};function b(_){return _._maxListeners===void 0?c.defaultMaxListeners:_._maxListeners}c.prototype.getMaxListeners=function(){return b(this)},c.prototype.emit=function(v){for(var w=[],x=1;x<arguments.length;x++)w.push(arguments[x]);var E=v==="error",I=this._events;if(I!==void 0)E=E&&I.error===void 0;else if(!E)return!1;if(E){var S;if(w.length>0&&(S=w[0]),S instanceof Error)throw S;var k=new Error("Unhandled error."+(S?" ("+S.message+")":""));throw k.context=S,k}var z=I[v];if(z===void 0)return!1;if(typeof z=="function")t(z,this,w);else for(var Z=z.length,U=F(z,Z),x=0;x<Z;++x)t(U[x],this,w);return!0};function g(_,v,w,x){var E,I,S;if(y(w),I=_._events,I===void 0?(I=_._events=Object.create(null),_._eventsCount=0):(I.newListener!==void 0&&(_.emit("newListener",v,w.listener?w.listener:w),I=_._events),S=I[v]),S===void 0)S=I[v]=w,++_._eventsCount;else if(typeof S=="function"?S=I[v]=x?[w,S]:[S,w]:x?S.unshift(w):S.push(w),E=b(_),E>0&&S.length>E&&!S.warned){S.warned=!0;var k=new Error("Possible EventEmitter memory leak detected. "+S.length+" "+String(v)+" listeners added. Use emitter.setMaxListeners() to increase limit");k.name="MaxListenersExceededWarning",k.emitter=_,k.type=v,k.count=S.length,a(k)}return _}c.prototype.addListener=function(v,w){return g(this,v,w,!1)},c.prototype.on=c.prototype.addListener,c.prototype.prependListener=function(v,w){return g(this,v,w,!0)};function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function B(_,v,w){var x={fired:!1,wrapFn:void 0,target:_,type:v,listener:w},E=l.bind(x);return E.listener=w,x.wrapFn=E,E}c.prototype.once=function(v,w){return y(w),this.on(v,B(this,v,w)),this},c.prototype.prependOnceListener=function(v,w){return y(w),this.prependListener(v,B(this,v,w)),this},c.prototype.removeListener=function(v,w){var x,E,I,S,k;if(y(w),E=this._events,E===void 0)return this;if(x=E[v],x===void 0)return this;if(x===w||x.listener===w)--this._eventsCount===0?this._events=Object.create(null):(delete E[v],E.removeListener&&this.emit("removeListener",v,x.listener||w));else if(typeof x!="function"){for(I=-1,S=x.length-1;S>=0;S--)if(x[S]===w||x[S].listener===w){k=x[S].listener,I=S;break}if(I<0)return this;I===0?x.shift():C(x,I),x.length===1&&(E[v]=x[0]),E.removeListener!==void 0&&this.emit("removeListener",v,k||w)}return this},c.prototype.off=c.prototype.removeListener,c.prototype.removeAllListeners=function(v){var w,x,E;if(x=this._events,x===void 0)return this;if(x.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):x[v]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete x[v]),this;if(arguments.length===0){var I=Object.keys(x),S;for(E=0;E<I.length;++E)S=I[E],S!=="removeListener"&&this.removeAllListeners(S);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(w=x[v],typeof w=="function")this.removeListener(v,w);else if(w!==void 0)for(E=w.length-1;E>=0;E--)this.removeListener(v,w[E]);return this};function $(_,v,w){var x=_._events;if(x===void 0)return[];var E=x[v];return E===void 0?[]:typeof E=="function"?w?[E.listener||E]:[E]:w?N(E):F(E,E.length)}c.prototype.listeners=function(v){return $(this,v,!0)},c.prototype.rawListeners=function(v){return $(this,v,!1)},c.listenerCount=function(_,v){return typeof _.listenerCount=="function"?_.listenerCount(v):T.call(_,v)},c.prototype.listenerCount=T;function T(_){var v=this._events;if(v!==void 0){var w=v[_];if(typeof w=="function")return 1;if(w!==void 0)return w.length}return 0}c.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]};function F(_,v){for(var w=new Array(v),x=0;x<v;++x)w[x]=_[x];return w}function C(_,v){for(;v+1<_.length;v++)_[v]=_[v+1];_.pop()}function N(_){for(var v=new Array(_.length),w=0;w<v.length;++w)v[w]=_[w].listener||_[w];return v}function X(_,v){return new Promise(function(w,x){function E(S){_.removeListener(v,I),x(S)}function I(){typeof _.removeListener=="function"&&_.removeListener("error",E),w([].slice.call(arguments))}Y(_,v,I,{once:!0}),v!=="error"&&K(_,E,{once:!0})})}function K(_,v,w){typeof _.on=="function"&&Y(_,"error",v,w)}function Y(_,v,w,x){if(typeof _.on=="function")x.once?_.once(v,w):_.on(v,w);else if(typeof _.addEventListener=="function")_.addEventListener(v,function E(I){x.once&&_.removeEventListener(v,E),w(I)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof _)}return Ne.exports}var dt=pt();const pi=lr(dt);var Ve,Er;function gt(){if(Er)return Ve;Er=1;function n(i){try{return JSON.stringify(i)}catch{return'"[Circular]"'}}Ve=t;function t(i,a,u){var c=u&&u.stringify||n,h=1;if(typeof i=="object"&&i!==null){var y=a.length+h;if(y===1)return i;var b=new Array(y);b[0]=c(i);for(var g=1;g<y;g++)b[g]=c(a[g]);return b.join(" ")}if(typeof i!="string")return i;var l=a.length;if(l===0)return i;for(var B="",$=1-h,T=-1,F=i&&i.length||0,C=0;C<F;){if(i.charCodeAt(C)===37&&C+1<F){switch(T=T>-1?T:0,i.charCodeAt(C+1)){case 100:case 102:if($>=l||a[$]==null)break;T<C&&(B+=i.slice(T,C)),B+=Number(a[$]),T=C+2,C++;break;case 105:if($>=l||a[$]==null)break;T<C&&(B+=i.slice(T,C)),B+=Math.floor(Number(a[$])),T=C+2,C++;break;case 79:case 111:case 106:if($>=l||a[$]===void 0)break;T<C&&(B+=i.slice(T,C));var N=typeof a[$];if(N==="string"){B+="'"+a[$]+"'",T=C+2,C++;break}if(N==="function"){B+=a[$].name||"<anonymous>",T=C+2,C++;break}B+=c(a[$]),T=C+2,C++;break;case 115:if($>=l)break;T<C&&(B+=i.slice(T,C)),B+=String(a[$]),T=C+2,C++;break;case 37:T<C&&(B+=i.slice(T,C)),B+="%",T=C+2,C++,$--;break}++$}++C}return T===-1?i:(T<F&&(B+=i.slice(T)),B)}return Ve}var er,Ar;function mt(){if(Ar)return er;Ar=1;const n=gt();er=u;const t=v().console||{},i={mapHttpRequest:F,mapHttpResponse:F,wrapRequestSerializer:C,wrapResponseSerializer:C,wrapErrorSerializer:C,req:F,res:F,err:$};function a(w,x){return Array.isArray(w)?w.filter(function(I){return I!=="!stdSerializers.err"}):w===!0?Object.keys(x):!1}function u(w){w=w||{},w.browser=w.browser||{};const x=w.browser.transmit;if(x&&typeof x.send!="function")throw Error("pino: transmit option must have a send function");const E=w.browser.write||t;w.browser.write&&(w.browser.asObject=!0);const I=w.serializers||{},S=a(w.browser.serialize,I);let k=w.browser.serialize;Array.isArray(w.browser.serialize)&&w.browser.serialize.indexOf("!stdSerializers.err")>-1&&(k=!1);const z=["error","fatal","warn","info","debug","trace"];typeof E=="function"&&(E.error=E.fatal=E.warn=E.info=E.debug=E.trace=E),w.enabled===!1&&(w.level="silent");const Z=w.level||"info",U=Object.create(E);U.log||(U.log=N),Object.defineProperty(U,"levelVal",{get:A}),Object.defineProperty(U,"level",{get:R,set:M});const p={transmit:x,serialize:S,asObject:w.browser.asObject,levels:z,timestamp:T(w)};U.levels=u.levels,U.level=Z,U.setMaxListeners=U.getMaxListeners=U.emit=U.addListener=U.on=U.prependListener=U.once=U.prependOnceListener=U.removeListener=U.removeAllListeners=U.listeners=U.listenerCount=U.eventNames=U.write=U.flush=N,U.serializers=I,U._serialize=S,U._stdErrSerialize=k,U.child=j,x&&(U._logEvent=B());function A(){return this.level==="silent"?1/0:this.levels.values[this.level]}function R(){return this._level}function M(O){if(O!=="silent"&&!this.levels.values[O])throw Error("unknown level "+O);this._level=O,c(p,U,"error","log"),c(p,U,"fatal","error"),c(p,U,"warn","error"),c(p,U,"info","log"),c(p,U,"debug","log"),c(p,U,"trace","log")}function j(O,ee){if(!O)throw new Error("missing bindings for child Pino");ee=ee||{},S&&O.serializers&&(ee.serializers=O.serializers);const ce=ee.serializers;if(S&&ce){var ne=Object.assign({},I,ce),L=w.browser.serialize===!0?Object.keys(ne):S;delete O.serializers,b([O],L,ne,this._stdErrSerialize)}function H(re){this._childLevel=(re._childLevel|0)+1,this.error=g(re,O,"error"),this.fatal=g(re,O,"fatal"),this.warn=g(re,O,"warn"),this.info=g(re,O,"info"),this.debug=g(re,O,"debug"),this.trace=g(re,O,"trace"),ne&&(this.serializers=ne,this._serialize=L),x&&(this._logEvent=B([].concat(re._logEvent.bindings,O)))}return H.prototype=this,new H(this)}return U}u.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},u.stdSerializers=i,u.stdTimeFunctions=Object.assign({},{nullTime:X,epochTime:K,unixTime:Y,isoTime:_});function c(w,x,E,I){const S=Object.getPrototypeOf(x);x[E]=x.levelVal>x.levels.values[E]?N:S[E]?S[E]:t[E]||t[I]||N,h(w,x,E)}function h(w,x,E){!w.transmit&&x[E]===N||(x[E]=function(I){return function(){const k=w.timestamp(),z=new Array(arguments.length),Z=Object.getPrototypeOf&&Object.getPrototypeOf(this)===t?t:this;for(var U=0;U<z.length;U++)z[U]=arguments[U];if(w.serialize&&!w.asObject&&b(z,this._serialize,this.serializers,this._stdErrSerialize),w.asObject?I.call(Z,y(this,E,z,k)):I.apply(Z,z),w.transmit){const p=w.transmit.level||x.level,A=u.levels.values[p],R=u.levels.values[E];if(R<A)return;l(this,{ts:k,methodLevel:E,methodValue:R,transmitValue:u.levels.values[w.transmit.level||x.level],send:w.transmit.send,val:x.levelVal},z)}}}(x[E]))}function y(w,x,E,I){w._serialize&&b(E,w._serialize,w.serializers,w._stdErrSerialize);const S=E.slice();let k=S[0];const z={};I&&(z.time=I),z.level=u.levels.values[x];let Z=(w._childLevel|0)+1;if(Z<1&&(Z=1),k!==null&&typeof k=="object"){for(;Z--&&typeof S[0]=="object";)Object.assign(z,S.shift());k=S.length?n(S.shift(),S):void 0}else typeof k=="string"&&(k=n(S.shift(),S));return k!==void 0&&(z.msg=k),z}function b(w,x,E,I){for(const S in w)if(I&&w[S]instanceof Error)w[S]=u.stdSerializers.err(w[S]);else if(typeof w[S]=="object"&&!Array.isArray(w[S]))for(const k in w[S])x&&x.indexOf(k)>-1&&k in E&&(w[S][k]=E[k](w[S][k]))}function g(w,x,E){return function(){const I=new Array(1+arguments.length);I[0]=x;for(var S=1;S<I.length;S++)I[S]=arguments[S-1];return w[E].apply(this,I)}}function l(w,x,E){const I=x.send,S=x.ts,k=x.methodLevel,z=x.methodValue,Z=x.val,U=w._logEvent.bindings;b(E,w._serialize||Object.keys(w.serializers),w.serializers,w._stdErrSerialize===void 0?!0:w._stdErrSerialize),w._logEvent.ts=S,w._logEvent.messages=E.filter(function(p){return U.indexOf(p)===-1}),w._logEvent.level.label=k,w._logEvent.level.value=z,I(k,w._logEvent,Z),w._logEvent=B(U)}function B(w){return{ts:0,messages:[],bindings:w||[],level:{label:"",value:0}}}function $(w){const x={type:w.constructor.name,msg:w.message,stack:w.stack};for(const E in w)x[E]===void 0&&(x[E]=w[E]);return x}function T(w){return typeof w.timestamp=="function"?w.timestamp:w.timestamp===!1?X:K}function F(){return{}}function C(w){return w}function N(){}function X(){return!1}function K(){return Date.now()}function Y(){return Math.round(Date.now()/1e3)}function _(){return new Date(Date.now()).toISOString()}function v(){function w(x){return typeof x<"u"&&x}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return w(self)||w(window)||w(this)||{}}}return er}var bt=mt();const di=lr(bt);function yt(n){if(n.length>=255)throw new TypeError("Alphabet too long");const t=new Uint8Array(256);for(let g=0;g<t.length;g++)t[g]=255;for(let g=0;g<n.length;g++){const l=n.charAt(g),B=l.charCodeAt(0);if(t[B]!==255)throw new TypeError(l+" is ambiguous");t[B]=g}const i=n.length,a=n.charAt(0),u=Math.log(i)/Math.log(256),c=Math.log(256)/Math.log(i);function h(g){if(g instanceof Uint8Array||(ArrayBuffer.isView(g)?g=new Uint8Array(g.buffer,g.byteOffset,g.byteLength):Array.isArray(g)&&(g=Uint8Array.from(g))),!(g instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(g.length===0)return"";let l=0,B=0,$=0;const T=g.length;for(;$!==T&&g[$]===0;)$++,l++;const F=(T-$)*c+1>>>0,C=new Uint8Array(F);for(;$!==T;){let K=g[$],Y=0;for(let _=F-1;(K!==0||Y<B)&&_!==-1;_--,Y++)K+=256*C[_]>>>0,C[_]=K%i>>>0,K=K/i>>>0;if(K!==0)throw new Error("Non-zero carry");B=Y,$++}let N=F-B;for(;N!==F&&C[N]===0;)N++;let X=a.repeat(l);for(;N<F;++N)X+=n.charAt(C[N]);return X}function y(g){if(typeof g!="string")throw new TypeError("Expected String");if(g.length===0)return new Uint8Array;let l=0,B=0,$=0;for(;g[l]===a;)B++,l++;const T=(g.length-l)*u+1>>>0,F=new Uint8Array(T);for(;l<g.length;){const K=g.charCodeAt(l);if(K>255)return;let Y=t[K];if(Y===255)return;let _=0;for(let v=T-1;(Y!==0||_<$)&&v!==-1;v--,_++)Y+=i*F[v]>>>0,F[v]=Y%256>>>0,Y=Y/256>>>0;if(Y!==0)throw new Error("Non-zero carry");$=_,l++}let C=T-$;for(;C!==T&&F[C]===0;)C++;const N=new Uint8Array(B+(T-C));let X=B;for(;C!==T;)N[X++]=F[C++];return N}function b(g){const l=y(g);if(l)return l;throw new Error("Non-base"+i+" character")}return{encode:h,decodeUnsafe:y,decode:b}}var xt="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";const gi=yt(xt);var rr={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var sr=function(n,t){return sr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,a){i.__proto__=a}||function(i,a){for(var u in a)a.hasOwnProperty(u)&&(i[u]=a[u])},sr(n,t)};function vt(n,t){sr(n,t);function i(){this.constructor=n}n.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}var ar=function(){return ar=Object.assign||function(t){for(var i,a=1,u=arguments.length;a<u;a++){i=arguments[a];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},ar.apply(this,arguments)};function _t(n,t){var i={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(i[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(n);u<a.length;u++)t.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(n,a[u])&&(i[a[u]]=n[a[u]]);return i}function Et(n,t,i,a){var u=arguments.length,c=u<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,t,i,a);else for(var y=n.length-1;y>=0;y--)(h=n[y])&&(c=(u<3?h(c):u>3?h(t,i,c):h(t,i))||c);return u>3&&c&&Object.defineProperty(t,i,c),c}function At(n,t){return function(i,a){t(i,a,n)}}function Bt(n,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,t)}function $t(n,t,i,a){function u(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function y(l){try{g(a.next(l))}catch(B){h(B)}}function b(l){try{g(a.throw(l))}catch(B){h(B)}}function g(l){l.done?c(l.value):u(l.value).then(y,b)}g((a=a.apply(n,t||[])).next())})}function St(n,t){var i={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},a,u,c,h;return h={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function y(g){return function(l){return b([g,l])}}function b(g){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,u&&(c=g[0]&2?u.return:g[0]?u.throw||((c=u.return)&&c.call(u),0):u.next)&&!(c=c.call(u,g[1])).done)return c;switch(u=0,c&&(g=[g[0]&2,c.value]),g[0]){case 0:case 1:c=g;break;case 4:return i.label++,{value:g[1],done:!1};case 5:i.label++,u=g[1],g=[0];continue;case 7:g=i.ops.pop(),i.trys.pop();continue;default:if(c=i.trys,!(c=c.length>0&&c[c.length-1])&&(g[0]===6||g[0]===2)){i=0;continue}if(g[0]===3&&(!c||g[1]>c[0]&&g[1]<c[3])){i.label=g[1];break}if(g[0]===6&&i.label<c[1]){i.label=c[1],c=g;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(g);break}c[2]&&i.ops.pop(),i.trys.pop();continue}g=t.call(n,i)}catch(l){g=[6,l],u=0}finally{a=c=0}if(g[0]&5)throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}}function Ct(n,t,i,a){a===void 0&&(a=i),n[a]=t[i]}function Tt(n,t){for(var i in n)i!=="default"&&!t.hasOwnProperty(i)&&(t[i]=n[i])}function cr(n){var t=typeof Symbol=="function"&&Symbol.iterator,i=t&&n[t],a=0;if(i)return i.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&a>=n.length&&(n=void 0),{value:n&&n[a++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Dr(n,t){var i=typeof Symbol=="function"&&n[Symbol.iterator];if(!i)return n;var a=i.call(n),u,c=[],h;try{for(;(t===void 0||t-- >0)&&!(u=a.next()).done;)c.push(u.value)}catch(y){h={error:y}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(h)throw h.error}}return c}function It(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(Dr(arguments[t]));return n}function Ot(){for(var n=0,t=0,i=arguments.length;t<i;t++)n+=arguments[t].length;for(var a=Array(n),u=0,t=0;t<i;t++)for(var c=arguments[t],h=0,y=c.length;h<y;h++,u++)a[u]=c[h];return a}function Ue(n){return this instanceof Ue?(this.v=n,this):new Ue(n)}function Ut(n,t,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=i.apply(n,t||[]),u,c=[];return u={},h("next"),h("throw"),h("return"),u[Symbol.asyncIterator]=function(){return this},u;function h($){a[$]&&(u[$]=function(T){return new Promise(function(F,C){c.push([$,T,F,C])>1||y($,T)})})}function y($,T){try{b(a[$](T))}catch(F){B(c[0][3],F)}}function b($){$.value instanceof Ue?Promise.resolve($.value.v).then(g,l):B(c[0][2],$)}function g($){y("next",$)}function l($){y("throw",$)}function B($,T){$(T),c.shift(),c.length&&y(c[0][0],c[0][1])}}function Rt(n){var t,i;return t={},a("next"),a("throw",function(u){throw u}),a("return"),t[Symbol.iterator]=function(){return this},t;function a(u,c){t[u]=n[u]?function(h){return(i=!i)?{value:Ue(n[u](h)),done:u==="return"}:c?c(h):h}:c}}function Ft(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],i;return t?t.call(n):(n=typeof cr=="function"?cr(n):n[Symbol.iterator](),i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i);function a(c){i[c]=n[c]&&function(h){return new Promise(function(y,b){h=n[c](h),u(y,b,h.done,h.value)})}}function u(c,h,y,b){Promise.resolve(b).then(function(g){c({value:g,done:y})},h)}}function Lt(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}function kt(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var i in n)Object.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t.default=n,t}function Pt(n){return n&&n.__esModule?n:{default:n}}function zt(n,t){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return t.get(n)}function Mt(n,t,i){if(!t.has(n))throw new TypeError("attempted to set private field on non-instance");return t.set(n,i),i}const Nt=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return ar},__asyncDelegator:Rt,__asyncGenerator:Ut,__asyncValues:Ft,__await:Ue,__awaiter:$t,__classPrivateFieldGet:zt,__classPrivateFieldSet:Mt,__createBinding:Ct,__decorate:Et,__exportStar:Tt,__extends:vt,__generator:St,__importDefault:Pt,__importStar:kt,__makeTemplateObject:Lt,__metadata:Bt,__param:At,__read:Dr,__rest:_t,__spread:It,__spreadArrays:Ot,__values:cr},Symbol.toStringTag,{value:"Module"})),jt=ot(Nt);var se={},Br;function Dt(){if(Br)return se;Br=1,Object.defineProperty(se,"__esModule",{value:!0}),se.isBrowserCryptoAvailable=se.getSubtleCrypto=se.getBrowerCrypto=void 0;function n(){return(ie===null||ie===void 0?void 0:ie.crypto)||(ie===null||ie===void 0?void 0:ie.msCrypto)||{}}se.getBrowerCrypto=n;function t(){const a=n();return a.subtle||a.webkitSubtle}se.getSubtleCrypto=t;function i(){return!!n()&&!!t()}return se.isBrowserCryptoAvailable=i,se}var ae={},$r;function Ht(){if($r)return ae;$r=1,Object.defineProperty(ae,"__esModule",{value:!0}),ae.isBrowser=ae.isNode=ae.isReactNative=void 0;function n(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}ae.isReactNative=n;function t(){return typeof Xe<"u"&&typeof Xe.versions<"u"&&typeof Xe.versions.node<"u"}ae.isNode=t;function i(){return!n()&&!t()}return ae.isBrowser=i,ae}var Sr;function qt(){return Sr||(Sr=1,function(n){Object.defineProperty(n,"__esModule",{value:!0});const t=jt;t.__exportStar(Dt(),n),t.__exportStar(Ht(),n)}(rr)),rr}var mi=qt(),je={exports:{}},Cr;function Gt(){return Cr||(Cr=1,function(n,t){var i=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof ie<"u"&&ie,a=function(){function c(){this.fetch=!1,this.DOMException=i.DOMException}return c.prototype=i,new c}();(function(c){(function(h){var y=typeof c<"u"&&c||typeof self<"u"&&self||typeof ie<"u"&&ie||{},b={searchParams:"URLSearchParams"in y,iterable:"Symbol"in y&&"iterator"in Symbol,blob:"FileReader"in y&&"Blob"in y&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in y,arrayBuffer:"ArrayBuffer"in y};function g(p){return p&&DataView.prototype.isPrototypeOf(p)}if(b.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],B=ArrayBuffer.isView||function(p){return p&&l.indexOf(Object.prototype.toString.call(p))>-1};function $(p){if(typeof p!="string"&&(p=String(p)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(p)||p==="")throw new TypeError('Invalid character in header field name: "'+p+'"');return p.toLowerCase()}function T(p){return typeof p!="string"&&(p=String(p)),p}function F(p){var A={next:function(){var R=p.shift();return{done:R===void 0,value:R}}};return b.iterable&&(A[Symbol.iterator]=function(){return A}),A}function C(p){this.map={},p instanceof C?p.forEach(function(A,R){this.append(R,A)},this):Array.isArray(p)?p.forEach(function(A){if(A.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+A.length);this.append(A[0],A[1])},this):p&&Object.getOwnPropertyNames(p).forEach(function(A){this.append(A,p[A])},this)}C.prototype.append=function(p,A){p=$(p),A=T(A);var R=this.map[p];this.map[p]=R?R+", "+A:A},C.prototype.delete=function(p){delete this.map[$(p)]},C.prototype.get=function(p){return p=$(p),this.has(p)?this.map[p]:null},C.prototype.has=function(p){return this.map.hasOwnProperty($(p))},C.prototype.set=function(p,A){this.map[$(p)]=T(A)},C.prototype.forEach=function(p,A){for(var R in this.map)this.map.hasOwnProperty(R)&&p.call(A,this.map[R],R,this)},C.prototype.keys=function(){var p=[];return this.forEach(function(A,R){p.push(R)}),F(p)},C.prototype.values=function(){var p=[];return this.forEach(function(A){p.push(A)}),F(p)},C.prototype.entries=function(){var p=[];return this.forEach(function(A,R){p.push([R,A])}),F(p)},b.iterable&&(C.prototype[Symbol.iterator]=C.prototype.entries);function N(p){if(!p._noBody){if(p.bodyUsed)return Promise.reject(new TypeError("Already read"));p.bodyUsed=!0}}function X(p){return new Promise(function(A,R){p.onload=function(){A(p.result)},p.onerror=function(){R(p.error)}})}function K(p){var A=new FileReader,R=X(A);return A.readAsArrayBuffer(p),R}function Y(p){var A=new FileReader,R=X(A),M=/charset=([A-Za-z0-9_-]+)/.exec(p.type),j=M?M[1]:"utf-8";return A.readAsText(p,j),R}function _(p){for(var A=new Uint8Array(p),R=new Array(A.length),M=0;M<A.length;M++)R[M]=String.fromCharCode(A[M]);return R.join("")}function v(p){if(p.slice)return p.slice(0);var A=new Uint8Array(p.byteLength);return A.set(new Uint8Array(p)),A.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(p){this.bodyUsed=this.bodyUsed,this._bodyInit=p,p?typeof p=="string"?this._bodyText=p:b.blob&&Blob.prototype.isPrototypeOf(p)?this._bodyBlob=p:b.formData&&FormData.prototype.isPrototypeOf(p)?this._bodyFormData=p:b.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)?this._bodyText=p.toString():b.arrayBuffer&&b.blob&&g(p)?(this._bodyArrayBuffer=v(p.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):b.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(p)||B(p))?this._bodyArrayBuffer=v(p):this._bodyText=p=Object.prototype.toString.call(p):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof p=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var p=N(this);if(p)return p;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var p=N(this);return p||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(b.blob)return this.blob().then(K);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var p=N(this);if(p)return p;if(this._bodyBlob)return Y(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(_(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(S)}),this.json=function(){return this.text().then(JSON.parse)},this}var x=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function E(p){var A=p.toUpperCase();return x.indexOf(A)>-1?A:p}function I(p,A){if(!(this instanceof I))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');A=A||{};var R=A.body;if(p instanceof I){if(p.bodyUsed)throw new TypeError("Already read");this.url=p.url,this.credentials=p.credentials,A.headers||(this.headers=new C(p.headers)),this.method=p.method,this.mode=p.mode,this.signal=p.signal,!R&&p._bodyInit!=null&&(R=p._bodyInit,p.bodyUsed=!0)}else this.url=String(p);if(this.credentials=A.credentials||this.credentials||"same-origin",(A.headers||!this.headers)&&(this.headers=new C(A.headers)),this.method=E(A.method||this.method||"GET"),this.mode=A.mode||this.mode||null,this.signal=A.signal||this.signal||function(){if("AbortController"in y){var O=new AbortController;return O.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&R)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(R),(this.method==="GET"||this.method==="HEAD")&&(A.cache==="no-store"||A.cache==="no-cache")){var M=/([?&])_=[^&]*/;if(M.test(this.url))this.url=this.url.replace(M,"$1_="+new Date().getTime());else{var j=/\?/;this.url+=(j.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}I.prototype.clone=function(){return new I(this,{body:this._bodyInit})};function S(p){var A=new FormData;return p.trim().split("&").forEach(function(R){if(R){var M=R.split("="),j=M.shift().replace(/\+/g," "),O=M.join("=").replace(/\+/g," ");A.append(decodeURIComponent(j),decodeURIComponent(O))}}),A}function k(p){var A=new C,R=p.replace(/\r?\n[\t ]+/g," ");return R.split("\r").map(function(M){return M.indexOf(`
`)===0?M.substr(1,M.length):M}).forEach(function(M){var j=M.split(":"),O=j.shift().trim();if(O){var ee=j.join(":").trim();try{A.append(O,ee)}catch(ce){console.warn("Response "+ce.message)}}}),A}w.call(I.prototype);function z(p,A){if(!(this instanceof z))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(A||(A={}),this.type="default",this.status=A.status===void 0?200:A.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=A.statusText===void 0?"":""+A.statusText,this.headers=new C(A.headers),this.url=A.url||"",this._initBody(p)}w.call(z.prototype),z.prototype.clone=function(){return new z(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new C(this.headers),url:this.url})},z.error=function(){var p=new z(null,{status:200,statusText:""});return p.ok=!1,p.status=0,p.type="error",p};var Z=[301,302,303,307,308];z.redirect=function(p,A){if(Z.indexOf(A)===-1)throw new RangeError("Invalid status code");return new z(null,{status:A,headers:{location:p}})},h.DOMException=y.DOMException;try{new h.DOMException}catch{h.DOMException=function(A,R){this.message=A,this.name=R;var M=Error(A);this.stack=M.stack},h.DOMException.prototype=Object.create(Error.prototype),h.DOMException.prototype.constructor=h.DOMException}function U(p,A){return new Promise(function(R,M){var j=new I(p,A);if(j.signal&&j.signal.aborted)return M(new h.DOMException("Aborted","AbortError"));var O=new XMLHttpRequest;function ee(){O.abort()}O.onload=function(){var L={statusText:O.statusText,headers:k(O.getAllResponseHeaders()||"")};j.url.indexOf("file://")===0&&(O.status<200||O.status>599)?L.status=200:L.status=O.status,L.url="responseURL"in O?O.responseURL:L.headers.get("X-Request-URL");var H="response"in O?O.response:O.responseText;setTimeout(function(){R(new z(H,L))},0)},O.onerror=function(){setTimeout(function(){M(new TypeError("Network request failed"))},0)},O.ontimeout=function(){setTimeout(function(){M(new TypeError("Network request timed out"))},0)},O.onabort=function(){setTimeout(function(){M(new h.DOMException("Aborted","AbortError"))},0)};function ce(L){try{return L===""&&y.location.href?y.location.href:L}catch{return L}}if(O.open(j.method,ce(j.url),!0),j.credentials==="include"?O.withCredentials=!0:j.credentials==="omit"&&(O.withCredentials=!1),"responseType"in O&&(b.blob?O.responseType="blob":b.arrayBuffer&&(O.responseType="arraybuffer")),A&&typeof A.headers=="object"&&!(A.headers instanceof C||y.Headers&&A.headers instanceof y.Headers)){var ne=[];Object.getOwnPropertyNames(A.headers).forEach(function(L){ne.push($(L)),O.setRequestHeader(L,T(A.headers[L]))}),j.headers.forEach(function(L,H){ne.indexOf(H)===-1&&O.setRequestHeader(H,L)})}else j.headers.forEach(function(L,H){O.setRequestHeader(H,L)});j.signal&&(j.signal.addEventListener("abort",ee),O.onreadystatechange=function(){O.readyState===4&&j.signal.removeEventListener("abort",ee)}),O.send(typeof j._bodyInit>"u"?null:j._bodyInit)})}return U.polyfill=!0,y.fetch||(y.fetch=U,y.Headers=C,y.Request=I,y.Response=z),h.Headers=C,h.Request=I,h.Response=z,h.fetch=U,Object.defineProperty(h,"__esModule",{value:!0}),h})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var u=i.fetch?i:a;t=u.fetch,t.default=u.fetch,t.fetch=u.fetch,t.Headers=u.Headers,t.Request=u.Request,t.Response=u.Response,n.exports=t}(je,je.exports)),je.exports}var Wt=Gt();const bi=lr(Wt);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=globalThis,hr=De.ShadowRoot&&(De.ShadyCSS===void 0||De.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wr=Symbol(),Tr=new WeakMap;let Hr=class{constructor(t,i,a){if(this._$cssResult$=!0,a!==wr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(hr&&t===void 0){const a=i!==void 0&&i.length===1;a&&(t=Tr.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Tr.set(i,t))}return t}toString(){return this.cssText}};const Q=n=>new Hr(typeof n=="string"?n:n+"",void 0,wr),Ee=(n,...t)=>{const i=n.length===1?n[0]:t.reduce((a,u,c)=>a+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(u)+n[c+1],n[0]);return new Hr(i,n,wr)},Kt=(n,t)=>{if(hr)n.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const a=document.createElement("style"),u=De.litNonce;u!==void 0&&a.setAttribute("nonce",u),a.textContent=i.cssText,n.appendChild(a)}},Ir=hr?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let i="";for(const a of t.cssRules)i+=a.cssText;return Q(i)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yt,defineProperty:Jt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Xt,getOwnPropertySymbols:Qt,getPrototypeOf:Vt}=Object,he=globalThis,Or=he.trustedTypes,ei=Or?Or.emptyScript:"",tr=he.reactiveElementPolyfillSupport,Te=(n,t)=>n,ur={toAttribute(n,t){switch(t){case Boolean:n=n?ei:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let i=n;switch(t){case Boolean:i=n!==null;break;case Number:i=n===null?null:Number(n);break;case Object:case Array:try{i=JSON.parse(n)}catch{i=null}}return i}},qr=(n,t)=>!Yt(n,t),Ur={attribute:!0,type:String,converter:ur,reflect:!1,useDefault:!1,hasChanged:qr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),he.litPropertyMetadata??(he.litPropertyMetadata=new WeakMap);let _e=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Ur){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const a=Symbol(),u=this.getPropertyDescriptor(t,a,i);u!==void 0&&Jt(this.prototype,t,u)}}static getPropertyDescriptor(t,i,a){const{get:u,set:c}=Zt(this.prototype,t)??{get(){return this[i]},set(h){this[i]=h}};return{get:u,set(h){const y=u==null?void 0:u.call(this);c==null||c.call(this,h),this.requestUpdate(t,y,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ur}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;const t=Vt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){const i=this.properties,a=[...Xt(i),...Qt(i)];for(const u of a)this.createProperty(u,i[u])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[a,u]of i)this.elementProperties.set(a,u)}this._$Eh=new Map;for(const[i,a]of this.elementProperties){const u=this._$Eu(i,a);u!==void 0&&this._$Eh.set(u,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const u of a)i.unshift(Ir(u))}else t!==void 0&&i.push(Ir(t));return i}static _$Eu(t,i){const a=i.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const a of i.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var a;return(a=i.hostConnected)==null?void 0:a.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var a;return(a=i.hostDisconnected)==null?void 0:a.call(i)})}attributeChangedCallback(t,i,a){this._$AK(t,a)}_$ET(t,i){var c;const a=this.constructor.elementProperties.get(t),u=this.constructor._$Eu(t,a);if(u!==void 0&&a.reflect===!0){const h=(((c=a.converter)==null?void 0:c.toAttribute)!==void 0?a.converter:ur).toAttribute(i,a.type);this._$Em=t,h==null?this.removeAttribute(u):this.setAttribute(u,h),this._$Em=null}}_$AK(t,i){var c,h;const a=this.constructor,u=a._$Eh.get(t);if(u!==void 0&&this._$Em!==u){const y=a.getPropertyOptions(u),b=typeof y.converter=="function"?{fromAttribute:y.converter}:((c=y.converter)==null?void 0:c.fromAttribute)!==void 0?y.converter:ur;this._$Em=u,this[u]=b.fromAttribute(i,y.type)??((h=this._$Ej)==null?void 0:h.get(u))??null,this._$Em=null}}requestUpdate(t,i,a){var u;if(t!==void 0){const c=this.constructor,h=this[t];if(a??(a=c.getPropertyOptions(t)),!((a.hasChanged??qr)(h,i)||a.useDefault&&a.reflect&&h===((u=this._$Ej)==null?void 0:u.get(t))&&!this.hasAttribute(c._$Eu(t,a))))return;this.C(t,i,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:a,reflect:u,wrapped:c},h){a&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,h??i??this[t]),c!==!0||h!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(i=void 0),this._$AL.set(t,i)),u===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[c,h]of this._$Ep)this[c]=h;this._$Ep=void 0}const u=this.constructor.elementProperties;if(u.size>0)for(const[c,h]of u){const{wrapped:y}=h,b=this[c];y!==!0||this._$AL.has(c)||b===void 0||this.C(c,void 0,h,b)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(a=this._$EO)==null||a.forEach(u=>{var c;return(c=u.hostUpdate)==null?void 0:c.call(u)}),this.update(i)):this._$EM()}catch(u){throw t=!1,this._$EM(),u}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(a=>{var u;return(u=a.hostUpdated)==null?void 0:u.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};_e.elementStyles=[],_e.shadowRootOptions={mode:"open"},_e[Te("elementProperties")]=new Map,_e[Te("finalized")]=new Map,tr==null||tr({ReactiveElement:_e}),(he.reactiveElementVersions??(he.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=globalThis,Ge=Ie.trustedTypes,Rr=Ge?Ge.createPolicy("lit-html",{createHTML:n=>n}):void 0,Gr="$lit$",fe=`lit$${Math.random().toFixed(9).slice(2)}$`,Wr="?"+fe,ri=`<${Wr}>`,be=document,Re=()=>be.createComment(""),Fe=n=>n===null||typeof n!="object"&&typeof n!="function",pr=Array.isArray,ti=n=>pr(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ir=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fr=/-->/g,Lr=/>/g,de=RegExp(`>|${ir}(?:([^\\s"'>=/]+)(${ir}*=${ir}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kr=/'/g,Pr=/"/g,Kr=/^(?:script|style|textarea|title)$/i,Yr=n=>(t,...i)=>({_$litType$:n,strings:t,values:i}),vi=Yr(1),_i=Yr(2),Be=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),zr=new WeakMap,ge=be.createTreeWalker(be,129);function Jr(n,t){if(!pr(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rr!==void 0?Rr.createHTML(t):t}const ii=(n,t)=>{const i=n.length-1,a=[];let u,c=t===2?"<svg>":t===3?"<math>":"",h=Ce;for(let y=0;y<i;y++){const b=n[y];let g,l,B=-1,$=0;for(;$<b.length&&(h.lastIndex=$,l=h.exec(b),l!==null);)$=h.lastIndex,h===Ce?l[1]==="!--"?h=Fr:l[1]!==void 0?h=Lr:l[2]!==void 0?(Kr.test(l[2])&&(u=RegExp("</"+l[2],"g")),h=de):l[3]!==void 0&&(h=de):h===de?l[0]===">"?(h=u??Ce,B=-1):l[1]===void 0?B=-2:(B=h.lastIndex-l[2].length,g=l[1],h=l[3]===void 0?de:l[3]==='"'?Pr:kr):h===Pr||h===kr?h=de:h===Fr||h===Lr?h=Ce:(h=de,u=void 0);const T=h===de&&n[y+1].startsWith("/>")?" ":"";c+=h===Ce?b+ri:B>=0?(a.push(g),b.slice(0,B)+Gr+b.slice(B)+fe+T):b+fe+(B===-2?y:T)}return[Jr(n,c+(n[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class Le{constructor({strings:t,_$litType$:i},a){let u;this.parts=[];let c=0,h=0;const y=t.length-1,b=this.parts,[g,l]=ii(t,i);if(this.el=Le.createElement(g,a),ge.currentNode=this.el.content,i===2||i===3){const B=this.el.content.firstChild;B.replaceWith(...B.childNodes)}for(;(u=ge.nextNode())!==null&&b.length<y;){if(u.nodeType===1){if(u.hasAttributes())for(const B of u.getAttributeNames())if(B.endsWith(Gr)){const $=l[h++],T=u.getAttribute(B).split(fe),F=/([.?@])?(.*)/.exec($);b.push({type:1,index:c,name:F[2],strings:T,ctor:F[1]==="."?ni:F[1]==="?"?si:F[1]==="@"?ai:Ke}),u.removeAttribute(B)}else B.startsWith(fe)&&(b.push({type:6,index:c}),u.removeAttribute(B));if(Kr.test(u.tagName)){const B=u.textContent.split(fe),$=B.length-1;if($>0){u.textContent=Ge?Ge.emptyScript:"";for(let T=0;T<$;T++)u.append(B[T],Re()),ge.nextNode(),b.push({type:2,index:++c});u.append(B[$],Re())}}}else if(u.nodeType===8)if(u.data===Wr)b.push({type:2,index:c});else{let B=-1;for(;(B=u.data.indexOf(fe,B+1))!==-1;)b.push({type:7,index:c}),B+=fe.length-1}c++}}static createElement(t,i){const a=be.createElement("template");return a.innerHTML=t,a}}function $e(n,t,i=n,a){var h,y;if(t===Be)return t;let u=a!==void 0?(h=i._$Co)==null?void 0:h[a]:i._$Cl;const c=Fe(t)?void 0:t._$litDirective$;return(u==null?void 0:u.constructor)!==c&&((y=u==null?void 0:u._$AO)==null||y.call(u,!1),c===void 0?u=void 0:(u=new c(n),u._$AT(n,i,a)),a!==void 0?(i._$Co??(i._$Co=[]))[a]=u:i._$Cl=u),u!==void 0&&(t=$e(n,u._$AS(n,t.values),u,a)),t}class oi{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:a}=this._$AD,u=((t==null?void 0:t.creationScope)??be).importNode(i,!0);ge.currentNode=u;let c=ge.nextNode(),h=0,y=0,b=a[0];for(;b!==void 0;){if(h===b.index){let g;b.type===2?g=new ke(c,c.nextSibling,this,t):b.type===1?g=new b.ctor(c,b.name,b.strings,this,t):b.type===6&&(g=new ci(c,this,t)),this._$AV.push(g),b=a[++y]}h!==(b==null?void 0:b.index)&&(c=ge.nextNode(),h++)}return ge.currentNode=be,u}p(t){let i=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,i),i+=a.strings.length-2):a._$AI(t[i])),i++}}class ke{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,a,u){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=u,this._$Cv=(u==null?void 0:u.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=$e(this,t,i),Fe(t)?t===J||t==null||t===""?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==Be&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ti(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&Fe(this._$AH)?this._$AA.nextSibling.data=t:this.T(be.createTextNode(t)),this._$AH=t}$(t){var c;const{values:i,_$litType$:a}=t,u=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Le.createElement(Jr(a.h,a.h[0]),this.options)),a);if(((c=this._$AH)==null?void 0:c._$AD)===u)this._$AH.p(i);else{const h=new oi(u,this),y=h.u(this.options);h.p(i),this.T(y),this._$AH=h}}_$AC(t){let i=zr.get(t.strings);return i===void 0&&zr.set(t.strings,i=new Le(t)),i}k(t){pr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let a,u=0;for(const c of t)u===i.length?i.push(a=new ke(this.O(Re()),this.O(Re()),this,this.options)):a=i[u],a._$AI(c),u++;u<i.length&&(this._$AR(a&&a._$AB.nextSibling,u),i.length=u)}_$AR(t=this._$AA.nextSibling,i){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,i);t&&t!==this._$AB;){const u=t.nextSibling;t.remove(),t=u}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Ke{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,a,u,c){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=i,this._$AM=u,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=J}_$AI(t,i=this,a,u){const c=this.strings;let h=!1;if(c===void 0)t=$e(this,t,i,0),h=!Fe(t)||t!==this._$AH&&t!==Be,h&&(this._$AH=t);else{const y=t;let b,g;for(t=c[0],b=0;b<c.length-1;b++)g=$e(this,y[a+b],i,b),g===Be&&(g=this._$AH[b]),h||(h=!Fe(g)||g!==this._$AH[b]),g===J?t=J:t!==J&&(t+=(g??"")+c[b+1]),this._$AH[b]=g}h&&!u&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ni extends Ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class si extends Ke{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class ai extends Ke{constructor(t,i,a,u,c){super(t,i,a,u,c),this.type=5}_$AI(t,i=this){if((t=$e(this,t,i,0)??J)===Be)return;const a=this._$AH,u=t===J&&a!==J||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,c=t!==J&&(a===J||u);u&&this.element.removeEventListener(this.name,this,a),c&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class ci{constructor(t,i,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){$e(this,t)}}const or=Ie.litHtmlPolyfillSupport;or==null||or(Le,ke),(Ie.litHtmlVersions??(Ie.litHtmlVersions=[])).push("3.3.0");const ui=(n,t,i)=>{const a=(i==null?void 0:i.renderBefore)??t;let u=a._$litPart$;if(u===void 0){const c=(i==null?void 0:i.renderBefore)??null;a._$litPart$=u=new ke(t.insertBefore(Re(),c),c,void 0,i??{})}return u._$AI(n),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis;class He extends _e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ui(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Be}}var Mr;He._$litElement$=!0,He.finalized=!0,(Mr=me.litElementHydrateSupport)==null||Mr.call(me,{LitElement:He});const nr=me.litElementPolyfillSupport;nr==null||nr({LitElement:He});(me.litElementVersions??(me.litElementVersions=[])).push("4.2.0");let Oe,we,pe;function Ei(n,t){Oe=document.createElement("style"),we=document.createElement("style"),pe=document.createElement("style"),Oe.textContent=Ae(n).core.cssText,we.textContent=Ae(n).dark.cssText,pe.textContent=Ae(n).light.cssText,document.head.appendChild(Oe),document.head.appendChild(we),document.head.appendChild(pe),li(t)}function li(n){we&&pe&&(n==="light"?(we.removeAttribute("media"),pe.media="enabled"):(pe.removeAttribute("media"),we.media="enabled"))}function Ai(n){Oe&&we&&pe&&(Oe.textContent=Ae(n).core.cssText,we.textContent=Ae(n).dark.cssText,pe.textContent=Ae(n).light.cssText)}function Ae(n){return{core:Ee`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${Q(n!=null&&n["--w3m-color-mix-strength"]?`${n["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Q((n==null?void 0:n["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Q((n==null?void 0:n["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Q((n==null?void 0:n["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Q((n==null?void 0:n["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:Ee`
      :root {
        --w3m-color-mix: ${Q((n==null?void 0:n["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Q(Me(n,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Q(Me(n,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:Ee`
      :root {
        --w3m-color-mix: ${Q((n==null?void 0:n["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Q(Me(n,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Q(Me(n,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}const Bi=Ee`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,$i=Ee`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Si=Ee`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;function Pe(n){return{formatters:void 0,fees:void 0,serializers:void 0,...n}}const Ci=Pe({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"}),Ti=Pe({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});Pe({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"});Pe({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}});Pe({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});let le;function Ii(n){n&&(le=n)}function Oi(){if(!le)throw new Error('Please call "createAppKit" before using "useAppKit" hook');async function n(i){await(le==null?void 0:le.open(i))}async function t(){await(le==null?void 0:le.close())}return{open:n,close:t}}const Zr=qe.createContext({}),Ui=({children:n})=>{const t=()=>typeof window<"u"&&localStorage.getItem("themeMode")||"day",[i,a]=qe.useState(t),u=()=>{const c=i==="day"?"night":"day";a(c),localStorage.setItem("themeMode",c)};return qe.useEffect(()=>{localStorage.setItem("themeMode",i)},[i]),nt.jsx(Zr.Provider,{value:{mode:i,toggleMode:u},children:n})},Ri=()=>qe.useContext(Zr);export{wi as B,J as E,pi as N,di as O,Ui as T,gi as a,bt as b,mi as c,Ci as d,dt as e,li as f,Me as g,Ai as h,Ii as i,Ee as j,He as k,$i as l,Si as m,_i as n,bi as o,Ei as p,qr as q,Bi as r,Ti as s,Be as t,ur as u,Ri as v,Oi as w,vi as x};
