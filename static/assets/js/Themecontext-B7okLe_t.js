import{bv as d,bw as i,bx as m,by as y}from"./slice-_n3LJRun.js";import{r as a,j as S}from"./index-DJvLkJTi.js";const s={initialised:!1,milliseconds:Date.now()},u=d({name:"clock",initialState:s,reducers:{clear:(e,o)=>{const n=m(s),t=Object.keys(n);for(let c in t)e=i(e,[t[c]],n[t[c]]);return e},init:(e,o)=>(e=i(e,["initialised"],!0),e=i(e,["milliseconds"],Date.now()),e),tick:(e,o)=>(e=i(e,["milliseconds"],Date.now()),e)}}),{clear:p,init:w,tick:x}=u.actions,M=u.reducer,l={blockNumber:0},b=d({name:"onChainData",initialState:l,reducers:{clear:(e,o)=>{const n=m(l),t=Object.keys(n);for(let c in t)e=i(e,[t[c]],n[t[c]]);return e},setBlockNumber:(e,o)=>(o.payload>e.blockNumber&&(e=i(e,["blockNumber"],o.payload)),e)}}),{clear:j,setBlockNumber:C}=b.actions,D=b.reducer,h=a.createContext({}),T=({children:e})=>{const{setThemeMode:o}=y(),n=()=>typeof window<"u"&&localStorage.getItem("themeMode")||"day",[t,c]=a.useState(n),k=()=>{const r=t==="day"?"night":"day";c(r),localStorage.setItem("themeMode",r),o(r==="night"?"dark":"light")};return a.useEffect(()=>{localStorage.setItem("themeMode",t),o(t==="night"?"dark":"light")},[t]),S.jsx(h.Provider,{value:{mode:t,toggleMode:k},children:e})},N=()=>a.useContext(h);export{T,p as a,j as b,M as c,D as o,N as u};
