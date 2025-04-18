import{aO as p,aM as b,b0 as A,aU as v,aZ as d,b1 as Q,aQ as C,aD as P,aR as g,aP as D,aN as U,aK as W,b2 as V,b3 as R,aI as $,aF as j,b4 as H,b5 as K,aA as Y,aJ as J,aS as Z,aB as X,aE as x}from"./slice-_n3LJRun.js";import{n as q,c as ee}from"./if-defined-pKm18Cmw.js";import"./index-BYr67e3e.js";import"./index-D9EJrpBK.js";const F={async getTokenList(){var s;const t=p.state.activeCaipNetwork,n=await A.fetchSwapTokens({chainId:t==null?void 0:t.caipNetworkId});return((s=n==null?void 0:n.tokens)==null?void 0:s.map(a=>({...a,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){var n,o;const t=p.state.activeCaipNetwork;if(!t)return null;try{switch(t.chainNamespace){case"solana":const s=(o=await((n=v)==null?void 0:n.estimateGas({chainNamespace:"solana"})))==null?void 0:o.toString();return{standard:s,fast:s,instant:s};case"eip155":default:return await A.fetchGasPrice({chainId:t.caipNetworkId})}}catch{return null}},async fetchSwapAllowance({tokenAddress:t,userAddress:n,sourceTokenAmount:o,sourceTokenDecimals:s}){const a=await A.fetchSwapAllowance({tokenAddress:t,userAddress:n});if(a!=null&&a.allowance&&o&&s){const r=v.parseUnits(o,s)||0;return BigInt(a.allowance)>=r}return!1},async getMyTokensWithBalance(t){const n=b.state.address,o=p.state.activeCaipNetwork;if(!n||!o)return[];const a=(await A.getBalance(n,o.caipNetworkId,t)).balances.filter(r=>r.quantity.decimals!=="0");return b.setTokenBalance(a,p.state.activeChain),this.mapBalancesToSwapTokens(a)},mapBalancesToSwapTokens(t){return(t==null?void 0:t.map(n=>({...n,address:n!=null&&n.address?n.address:p.getActiveNetworkTokenAddress(),decimals:parseInt(n.quantity.decimals,10),logoUri:n.iconUrl,eip2612:!1})))||[]}},w={getGasPriceInEther(t,n){const o=n*t;return Number(o)/1e18},getGasPriceInUSD(t,n,o){const s=w.getGasPriceInEther(n,o);return d.bigNumber(t).times(s).toNumber()},getPriceImpact({sourceTokenAmount:t,sourceTokenPriceInUSD:n,toTokenPriceInUSD:o,toTokenAmount:s}){const a=d.bigNumber(t).times(n),r=d.bigNumber(s).times(o);return a.minus(r).div(a).times(100).toNumber()},getMaxSlippage(t,n){const o=d.bigNumber(t).div(100);return d.multiply(n,o).toNumber()},getProviderFee(t,n=.0085){return d.bigNumber(t).times(n).toString()},isInsufficientNetworkTokenForGas(t,n){const o=n||"0";return d.bigNumber(t).eq(0)?!0:d.bigNumber(d.bigNumber(o)).gt(t)},isInsufficientSourceTokenForSwap(t,n,o){var r,i;const s=(i=(r=o==null?void 0:o.find(c=>c.address===n))==null?void 0:r.quantity)==null?void 0:i.numeric;return d.bigNumber(s||"0").lt(t)},getToTokenAmount({sourceToken:t,toToken:n,sourceTokenPrice:o,toTokenPrice:s,sourceTokenAmount:a}){if(a==="0"||!t||!n)return"0";const r=t.decimals,i=o,c=n.decimals,l=s;if(l<=0)return"0";const u=d.bigNumber(a).times(.0085),f=d.bigNumber(a).minus(u).times(d.bigNumber(10).pow(r)),h=d.bigNumber(i).div(l),S=r-c;return f.times(h).div(d.bigNumber(10).pow(S)).div(d.bigNumber(10).pow(c)).toFixed(c).toString()}},z=15e4,te=6,T={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:$.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},e=Q(T),M={state:e,subscribe(t){return K(e,()=>t(e))},subscribeKey(t,n){return H(e,t,n)},getParams(){var l,u,k,f,h,S,I,y;const t=p.state.activeCaipAddress,n=p.state.activeChain,o=U.getPlainAddress(t),s=p.getActiveNetworkTokenAddress(),a=j.getConnectorId(n);if(!o)throw new Error("No address found to swap the tokens from.");const r=!((l=e.toToken)!=null&&l.address)||!((u=e.toToken)!=null&&u.decimals),i=!((k=e.sourceToken)!=null&&k.address)||!((f=e.sourceToken)!=null&&f.decimals)||!d.bigNumber(e.sourceTokenAmount).gt(0),c=!e.sourceTokenAmount;return{networkAddress:s,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:(h=e.sourceToken)==null?void 0:h.address,toTokenAddress:(S=e.toToken)==null?void 0:S.address,toTokenAmount:e.toTokenAmount,toTokenDecimals:(I=e.toToken)==null?void 0:I.decimals,sourceTokenAmount:e.sourceTokenAmount,sourceTokenDecimals:(y=e.sourceToken)==null?void 0:y.decimals,invalidToToken:r,invalidSourceToken:i,invalidSourceTokenAmount:c,availableToSwap:t&&!r&&!i&&!c,isAuthConnector:a===W.CONNECTOR_ID.AUTH}},setSourceToken(t){if(!t){e.sourceToken=t,e.sourceTokenAmount="",e.sourceTokenPriceInUSD=0;return}e.sourceToken=t,this.setTokenPrice(t.address,"sourceToken")},setSourceTokenAmount(t){e.sourceTokenAmount=t},setToToken(t){if(!t){e.toToken=t,e.toTokenAmount="",e.toTokenPriceInUSD=0;return}e.toToken=t,this.setTokenPrice(t.address,"toToken")},setToTokenAmount(t){e.toTokenAmount=t?d.formatNumberToLocalString(t,te):""},async setTokenPrice(t,n){let o=e.tokensPriceMap[t]||0;o||(e.loadingPrices=!0,o=await this.getAddressPrice(t)),n==="sourceToken"?e.sourceTokenPriceInUSD=o:n==="toToken"&&(e.toTokenPriceInUSD=o),e.loadingPrices&&(e.loadingPrices=!1),this.getParams().availableToSwap&&this.swapTokens()},switchTokens(){if(e.initializing||!e.initialized)return;const t=e.toToken?{...e.toToken}:void 0,n=e.sourceToken?{...e.sourceToken}:void 0,o=t&&e.toTokenAmount===""?"1":e.toTokenAmount;this.setSourceToken(t),this.setToToken(n),this.setSourceTokenAmount(o),this.setToTokenAmount(""),this.swapTokens()},resetState(){e.myTokensWithBalance=T.myTokensWithBalance,e.tokensPriceMap=T.tokensPriceMap,e.initialized=T.initialized,e.sourceToken=T.sourceToken,e.sourceTokenAmount=T.sourceTokenAmount,e.sourceTokenPriceInUSD=T.sourceTokenPriceInUSD,e.toToken=T.toToken,e.toTokenAmount=T.toTokenAmount,e.toTokenPriceInUSD=T.toTokenPriceInUSD,e.networkPrice=T.networkPrice,e.networkTokenSymbol=T.networkTokenSymbol,e.networkBalanceInUSD=T.networkBalanceInUSD,e.inputError=T.inputError,e.myTokensWithBalance=T.myTokensWithBalance},resetValues(){var o;const{networkAddress:t}=this.getParams(),n=(o=e.tokens)==null?void 0:o.find(s=>s.address===t);this.setSourceToken(n),this.setToToken(void 0)},getApprovalLoadingState(){return e.loadingApprovalTransaction},clearError(){e.transactionError=void 0},async initializeState(){if(!e.initializing){if(e.initializing=!0,!e.initialized)try{await this.fetchTokens(),e.initialized=!0}catch{e.initialized=!1,g.showError("Failed to initialize swap"),P.goBack()}e.initializing=!1}},async fetchTokens(){var o;const{networkAddress:t}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const n=(o=e.tokens)==null?void 0:o.find(s=>s.address===t);n&&(e.networkTokenSymbol=n.symbol,this.setSourceToken(n),this.setSourceTokenAmount("1"))},async getTokenList(){const t=await F.getTokenList();e.tokens=t,e.popularTokens=t.sort((n,o)=>n.symbol<o.symbol?-1:n.symbol>o.symbol?1:0),e.suggestedTokens=t.filter(n=>!!$.SWAP_SUGGESTED_TOKENS.includes(n.symbol),{})},async getAddressPrice(t){var l,u;const n=e.tokensPriceMap[t];if(n)return n;const o=await A.fetchTokenPrice({addresses:[t]}),s=(o==null?void 0:o.fungibles)||[],a=[...e.tokens||[],...e.myTokensWithBalance||[]],r=(l=a==null?void 0:a.find(k=>k.address===t))==null?void 0:l.symbol,i=((u=s.find(k=>k.symbol.toLowerCase()===(r==null?void 0:r.toLowerCase())))==null?void 0:u.price)||0,c=parseFloat(i.toString());return e.tokensPriceMap[t]=c,c},async getNetworkTokenPrice(){var a;const{networkAddress:t}=this.getParams(),o=(a=(await A.fetchTokenPrice({addresses:[t]}).catch(()=>(g.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles)==null?void 0:a[0],s=(o==null?void 0:o.price.toString())||"0";e.tokensPriceMap[t]=parseFloat(s),e.networkTokenSymbol=(o==null?void 0:o.symbol)||"",e.networkPrice=s},async getMyTokensWithBalance(t){const n=await R.getMyTokensWithBalance(t),o=R.mapBalancesToSwapTokens(n);o&&(await this.getInitialGasPrice(),this.setBalances(o))},setBalances(t){const{networkAddress:n}=this.getParams(),o=p.state.activeCaipNetwork;if(!o)return;const s=t.find(a=>a.address===n);t.forEach(a=>{e.tokensPriceMap[a.address]=a.price||0}),e.myTokensWithBalance=t.filter(a=>a.address.startsWith(o.caipNetworkId)),e.networkBalanceInUSD=s?d.multiply(s.quantity.numeric,s.price).toString():"0"},async getInitialGasPrice(){var n,o;const t=await F.fetchGasPrice();if(!t)return{gasPrice:null,gasPriceInUSD:null};switch((o=(n=p.state)==null?void 0:n.activeCaipNetwork)==null?void 0:o.chainNamespace){case"solana":return e.gasFee=t.standard??"0",e.gasPriceInUSD=d.multiply(t.standard,e.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(e.gasFee),gasPriceInUSD:Number(e.gasPriceInUSD)};case"eip155":default:const s=t.standard??"0",a=BigInt(s),r=BigInt(z),i=w.getGasPriceInUSD(e.networkPrice,r,a);return e.gasFee=s,e.gasPriceInUSD=i,{gasPrice:a,gasPriceInUSD:i}}},async swapTokens(){var r,i;const t=b.state.address,n=e.sourceToken,o=e.toToken,s=d.bigNumber(e.sourceTokenAmount).gt(0);if(s||this.setToTokenAmount(""),!o||!n||e.loadingPrices||!s)return;e.loadingQuote=!0;const a=d.bigNumber(e.sourceTokenAmount).times(10**n.decimals).round(0);try{const c=await A.fetchSwapQuote({userAddress:t,from:n.address,to:o.address,gasPrice:e.gasFee,amount:a.toString()});e.loadingQuote=!1;const l=(i=(r=c==null?void 0:c.quotes)==null?void 0:r[0])==null?void 0:i.toAmount;if(!l){V.open({shortMessage:"Incorrect amount",longMessage:"Please enter a valid amount"},"error");return}const u=d.bigNumber(l).div(10**o.decimals).toString();this.setToTokenAmount(u),this.hasInsufficientToken(e.sourceTokenAmount,n.address)?e.inputError="Insufficient balance":(e.inputError=void 0,this.setTransactionDetails())}catch{e.loadingQuote=!1,e.inputError="Insufficient balance"}},async getTransaction(){const{fromCaipAddress:t,availableToSwap:n}=this.getParams(),o=e.sourceToken,s=e.toToken;if(!(!t||!n||!o||!s||e.loadingQuote))try{e.loadingBuildTransaction=!0;const a=await F.fetchSwapAllowance({userAddress:t,tokenAddress:o.address,sourceTokenAmount:e.sourceTokenAmount,sourceTokenDecimals:o.decimals});let r;return a?r=await this.createSwapTransaction():r=await this.createAllowanceTransaction(),e.loadingBuildTransaction=!1,e.fetchError=!1,r}catch{P.goBack(),g.showError("Failed to check allowance"),e.loadingBuildTransaction=!1,e.approvalTransaction=void 0,e.swapTransaction=void 0,e.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:t,sourceTokenAddress:n,fromAddress:o,toTokenAddress:s}=this.getParams();if(!(!t||!s)){if(!n)throw new Error("createAllowanceTransaction - No source token address found.");try{const a=await A.generateApproveCalldata({from:n,to:s,userAddress:t}),r=await v.estimateGas({chainNamespace:W.CHAIN.EVM,address:o,to:U.getPlainAddress(a.tx.to),data:a.tx.data}),i={data:a.tx.data,to:U.getPlainAddress(a.tx.from),gas:r,gasPrice:BigInt(a.tx.eip155.gasPrice),value:BigInt(a.tx.value),toAmount:e.toTokenAmount};return e.swapTransaction=void 0,e.approvalTransaction={data:i.data,to:i.to,gas:i.gas??BigInt(0),gasPrice:i.gasPrice,value:i.value,toAmount:i.toAmount},{data:i.data,to:i.to,gas:i.gas??BigInt(0),gasPrice:i.gasPrice,value:i.value,toAmount:i.toAmount}}catch{P.goBack(),g.showError("Failed to create approval transaction"),e.approvalTransaction=void 0,e.swapTransaction=void 0,e.fetchError=!0;return}}},async createSwapTransaction(){var i;const{networkAddress:t,fromCaipAddress:n,sourceTokenAmount:o}=this.getParams(),s=e.sourceToken,a=e.toToken;if(!n||!o||!s||!a)return;const r=(i=v.parseUnits(o,s.decimals))==null?void 0:i.toString();try{const c=await A.generateSwapCalldata({userAddress:n,from:s.address,to:a.address,amount:r,disableEstimate:!0}),l=s.address===t,u=BigInt(c.tx.eip155.gas),k=BigInt(c.tx.eip155.gasPrice),f={data:c.tx.data,to:U.getPlainAddress(c.tx.to),gas:u,gasPrice:k,value:BigInt(l?r??"0":"0"),toAmount:e.toTokenAmount};return e.gasPriceInUSD=w.getGasPriceInUSD(e.networkPrice,u,k),e.approvalTransaction=void 0,e.swapTransaction=f,f}catch{P.goBack(),g.showError("Failed to create transaction"),e.approvalTransaction=void 0,e.swapTransaction=void 0,e.fetchError=!0;return}},async sendTransactionForApproval(t){var a,r,i,c;const{fromAddress:n,isAuthConnector:o}=this.getParams();e.loadingApprovalTransaction=!0;const s="Approve limit increase in your wallet";o?P.pushTransactionStack({view:null,goBack:!0,onSuccess(){g.showLoading(s)}}):g.showLoading(s);try{await v.sendTransaction({address:n,to:t.to,data:t.data,value:t.value,chainNamespace:"eip155"}),await this.swapTokens(),await this.getTransaction(),e.approvalTransaction=void 0,e.loadingApprovalTransaction=!1}catch(l){const u=l;e.transactionError=u==null?void 0:u.shortMessage,e.loadingApprovalTransaction=!1,g.showError((u==null?void 0:u.shortMessage)||"Transaction error"),D.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:(u==null?void 0:u.shortMessage)||(u==null?void 0:u.message)||"Unknown",network:((a=p.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||"",swapFromToken:((r=this.state.sourceToken)==null?void 0:r.symbol)||"",swapToToken:((i=this.state.toToken)==null?void 0:i.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:((c=b.state.preferredAccountTypes)==null?void 0:c.eip155)===C.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(t){var i,c,l,u,k,f,h,S,I,y,B,G,L,O;if(!t)return;const{fromAddress:n,toTokenAmount:o,isAuthConnector:s}=this.getParams();e.loadingTransaction=!0;const a=`Swapping ${(i=e.sourceToken)==null?void 0:i.symbol} to ${d.formatNumberToLocalString(o,3)} ${(c=e.toToken)==null?void 0:c.symbol}`,r=`Swapped ${(l=e.sourceToken)==null?void 0:l.symbol} to ${d.formatNumberToLocalString(o,3)} ${(u=e.toToken)==null?void 0:u.symbol}`;s?P.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){g.showLoading(a),M.resetState()}}):g.showLoading("Confirm transaction in your wallet");try{const E=[(k=e.sourceToken)==null?void 0:k.address,(f=e.toToken)==null?void 0:f.address].join(","),m=await v.sendTransaction({address:n,to:t.to,data:t.data,value:t.value,chainNamespace:"eip155"});return e.loadingTransaction=!1,g.showSuccess(r),D.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:((h=p.state.activeCaipNetwork)==null?void 0:h.caipNetworkId)||"",swapFromToken:((S=this.state.sourceToken)==null?void 0:S.symbol)||"",swapToToken:((I=this.state.toToken)==null?void 0:I.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:((y=b.state.preferredAccountTypes)==null?void 0:y.eip155)===C.ACCOUNT_TYPES.SMART_ACCOUNT}}),M.resetState(),s||P.replace("Account"),M.getMyTokensWithBalance(E),m}catch(E){const m=E;e.transactionError=m==null?void 0:m.shortMessage,e.loadingTransaction=!1,g.showError((m==null?void 0:m.shortMessage)||"Transaction error"),D.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:(m==null?void 0:m.shortMessage)||(m==null?void 0:m.message)||"Unknown",network:((B=p.state.activeCaipNetwork)==null?void 0:B.caipNetworkId)||"",swapFromToken:((G=this.state.sourceToken)==null?void 0:G.symbol)||"",swapToToken:((L=this.state.toToken)==null?void 0:L.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:((O=b.state.preferredAccountTypes)==null?void 0:O.eip155)===C.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(t,n){var a;const o=w.isInsufficientSourceTokenForSwap(t,n,e.myTokensWithBalance);let s=!0;return((a=b.state.preferredAccountTypes)==null?void 0:a.eip155)===C.ACCOUNT_TYPES.SMART_ACCOUNT?s=!1:s=w.isInsufficientNetworkTokenForGas(e.networkBalanceInUSD,e.gasPriceInUSD),s||o},setTransactionDetails(){const{toTokenAddress:t,toTokenDecimals:n}=this.getParams();!t||!n||(e.gasPriceInUSD=w.getGasPriceInUSD(e.networkPrice,BigInt(e.gasFee),BigInt(z)),e.priceImpact=w.getPriceImpact({sourceTokenAmount:e.sourceTokenAmount,sourceTokenPriceInUSD:e.sourceTokenPriceInUSD,toTokenPriceInUSD:e.toTokenPriceInUSD,toTokenAmount:e.toTokenAmount}),e.maxSlippage=w.getMaxSlippage(e.slippage,e.toTokenAmount),e.providerFee=w.getProviderFee(e.sourceTokenAmount))}},ne=Y`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var _=function(t,n,o,s){var a=arguments.length,r=a<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,o):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,n,o,s);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(n,o,r):i(n,o))||r);return a>3&&r&&Object.defineProperty(n,o,r),r};let N=class extends X{constructor(){super(...arguments),this.text=""}render(){return x`
      <button>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?x`<wui-image src=${this.imageSrc}></wui-image>`:x`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};N.styles=[J,Z,ne];_([q()],N.prototype,"imageSrc",void 0);_([q()],N.prototype,"text",void 0);N=_([ee("wui-token-button")],N);export{M as S};
