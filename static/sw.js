if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,c)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const d=s=>a(s,t),f={module:{uri:t},exports:r,require:d};e[t]=Promise.all(i.map((s=>f[s]||d(s)))).then((s=>(c(...s),r)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"index.html",revision:"08d34e6fa60813ac428356390a25b03e"},{url:"static/assets/css/App-CPO8YLBO.css",revision:"ccba50f93ba5fa07bee0ad772c4abcfa"},{url:"static/assets/css/index-DQJp2geD.css",revision:"2249bac7ade1d7e9041f013f99d29358"},{url:"static/assets/js/add-Cct9dW2c.js",revision:"60db959b66cb278617346641d9b999f2"},{url:"static/assets/js/all-wallets-Xr5XQ5_Y.js",revision:"970da578b4206d14e15f4c3cb43713ce"},{url:"static/assets/js/App-BR3BS65S.js",revision:"6b38861e4b2a5c2fc7bb031a40eb3c13"},{url:"static/assets/js/app-store-D1I3bXWc.js",revision:"0ec52fd15499b50168bef698aecdaf9f"},{url:"static/assets/js/apple-D-Nz7fr9.js",revision:"8a947428910a5a57b721020fed237cff"},{url:"static/assets/js/arrow-bottom-circle-4Mqwim-6.js",revision:"30774a70d4912e08ba94927c48c8ffc7"},{url:"static/assets/js/arrow-bottom-DJqODZfH.js",revision:"e882bcf3499bb89203e817bc1f744c0e"},{url:"static/assets/js/arrow-left-x_yvuZYF.js",revision:"8ddcfa8738ce07e4f45e00f94eb411b8"},{url:"static/assets/js/arrow-right-ChnZHMHJ.js",revision:"a92f05b54835176cf413bd6ec6d2f926"},{url:"static/assets/js/arrow-top-B15eJb7B.js",revision:"e984a02fcfba4b24dcb5e829aaea61f4"},{url:"static/assets/js/back-arrow_svgrepo.com-BKV72Iaj.js",revision:"ca0a08f4286a187f4d35ac436f32058e"},{url:"static/assets/js/bank-BbKiADws.js",revision:"84b8b0453683833ba29cb888906fc580"},{url:"static/assets/js/browser-cS-Fd47a.js",revision:"e2d406a0ecbf19ce6eadd318e7621b08"},{url:"static/assets/js/card-Ba5P7JUp.js",revision:"b3771d579b16c92e387f78526421a9a3"},{url:"static/assets/js/checkmark-bold-TRW54ok_.js",revision:"c5746c17a87a4e4277ab4050d9d41092"},{url:"static/assets/js/checkmark-CgZPoa_b.js",revision:"c39769b387c00d09a5c9e10e46ba878d"},{url:"static/assets/js/chevron-bottom--41k7OlK.js",revision:"0b6bddd2b2430b6294d6cca48e14a1a5"},{url:"static/assets/js/chevron-left-CULrfb-H.js",revision:"11c26bed07e3f7646b9c117b189e3045"},{url:"static/assets/js/chevron-right-CeE0GlyJ.js",revision:"7c5dea586255c6f1beaa08e6a51db1d6"},{url:"static/assets/js/chevron-top-rXIHpWnc.js",revision:"f2cf725c8e21bf7d54d924370850069e"},{url:"static/assets/js/chrome-store-By_CsvR9.js",revision:"28453e52c01d7363442e1e76a08d63ae"},{url:"static/assets/js/clock-B7rIKu42.js",revision:"ceefcdf4718b1b6a54d7902f63ccca29"},{url:"static/assets/js/close-C2LQhDOU.js",revision:"0d90044cd5ef1b861e05ec9af5a49bd5"},{url:"static/assets/js/coinPlaceholder-DeHWW0Rd.js",revision:"cefb0bea557aa694a8a04c3fb0da3263"},{url:"static/assets/js/compass-B9RcQqSM.js",revision:"83e191054e835fa8dbc11744ce69c8f7"},{url:"static/assets/js/context-Db7bLoJ5.js",revision:"76a81b180bfba02af14daed5c1971a3b"},{url:"static/assets/js/copy-oQdBiOYX.js",revision:"9c6e6a4ebb14e91206ffb4ea4261255f"},{url:"static/assets/js/cursor-BunFu3m5.js",revision:"444849f37b3c9f953630760bb30a4be7"},{url:"static/assets/js/cursor-transparent-B0d4HBEy.js",revision:"50e4196a18efe8348db13de5d8240fbb"},{url:"static/assets/js/desktop-DPdsr9N2.js",revision:"77643f33854f0b779df82982f90268c5"},{url:"static/assets/js/disconnect-C5hcrb4y.js",revision:"6a336ec0790088dbef833b9a7b12fa31"},{url:"static/assets/js/discord-DVVUElVW.js",revision:"2a3a60ed9f2dd6b3a470c0de360eb119"},{url:"static/assets/js/email-Btim7QU2.js",revision:"ffb0d62f7ff3abbc8c04c3665d3cdf7e"},{url:"static/assets/js/embedded-wallet-DzAOp7U-.js",revision:"ea64d888e6ec890856d0a72164e60eab"},{url:"static/assets/js/etherscan-se_SUHBd.js",revision:"2bc9c02256a9ab7bfb46514e2af44e19"},{url:"static/assets/js/exclamation-triangle-DLJ_2t9b.js",revision:"5028ca0b7c0417f758ec15b160b34880"},{url:"static/assets/js/extension-DMpte-R9.js",revision:"ba895e2fd14f8aae3e99df5994f48898"},{url:"static/assets/js/external-link-51PTCTj6.js",revision:"782f0e6118dbb0eeba421fb2d1c35e0c"},{url:"static/assets/js/facebook-Dus4acRd.js",revision:"4617d92a02492b33afb32ecab2d79caa"},{url:"static/assets/js/farcaster-BvFAbRi5.js",revision:"d3e4720e4eb7e656c1fc38c3f3cf017f"},{url:"static/assets/js/filters-DLVIV5z4.js",revision:"70c1645b21a1d7820a48cef7c4d7379b"},{url:"static/assets/js/footer-CuD5vC3v.js",revision:"5d1ef020819ad9a5e78ebb0606990f79"},{url:"static/assets/js/getExternalLinkProps-BrH1HP9A.js",revision:"36706fe1954e16224ad0ff435b9cb74a"},{url:"static/assets/js/github-C40HOxx4.js",revision:"1a43327488189917d97feb8b6dc82fa4"},{url:"static/assets/js/google-Bg0dHA8X.js",revision:"c4321b7aa22813288afb4ca729b327d6"},{url:"static/assets/js/help-circle-B9CgG4NH.js",revision:"ff0eb80abeb6ea161a24ba67d0ec4c63"},{url:"static/assets/js/id-Cf9eqXk7.js",revision:"01f7f5d62c531fc39b65a92ff4592c01"},{url:"static/assets/js/if-defined-DtDTWw7x.js",revision:"3ccc52d0b0db96e0fd4cf57e0dba551c"},{url:"static/assets/js/image-bknnqlCF.js",revision:"cf525007205053c24c3d06c94a39b0f3"},{url:"static/assets/js/index-3of6IRct.js",revision:"2640ce03fac652a62241f86ad1de4eb4"},{url:"static/assets/js/index-5ElJmy_D.js",revision:"249fd98c37b2365dafcaaba3b6b1f4c1"},{url:"static/assets/js/index-8taTtidq.js",revision:"5d84f034fdb36ffbc83e9e23cdd3a2db"},{url:"static/assets/js/index-AJXqPt7v.js",revision:"abf020e6d32118299e2ff579731aa733"},{url:"static/assets/js/index-aOVDm1y5.js",revision:"ad65bb8b14cc515f769295339a72ecd8"},{url:"static/assets/js/index-B8hp9lmX.js",revision:"8ccedf0784272f0abf789d20569f56e1"},{url:"static/assets/js/index-BAnAgo67.js",revision:"7e946b6ea3e65f698eb76f25a8072535"},{url:"static/assets/js/index-BbKQ_KlN.js",revision:"22004d2df12141ff8cc7aaee34335859"},{url:"static/assets/js/index-Bce8vVNb.js",revision:"99263896b37ebf944e1a83105ffb2e67"},{url:"static/assets/js/index-BCG7Y9Pa.js",revision:"25a1d12d68990d0dbd71c8236c4c7c96"},{url:"static/assets/js/index-BjrkhxdU.js",revision:"a456054c4c76b6f36cdcc33e6b2acc87"},{url:"static/assets/js/index-Bk0oyupj.js",revision:"48a5a4e3b693956d6adcba6340961ed7"},{url:"static/assets/js/index-Bmk9a7gD.js",revision:"6c86c40733f67c9380b597b26902901f"},{url:"static/assets/js/index-CdZckySK.js",revision:"0e26fa9ce82885b7c6dd90322d0c5705"},{url:"static/assets/js/index-Ch2GxPNz.js",revision:"f3598d76fa03f83ba7c1c5c2bdb6b30f"},{url:"static/assets/js/index-ChF_ecr8.js",revision:"238a919108add3b4355d6a981baae202"},{url:"static/assets/js/index-ChVzMvdr.js",revision:"79369a4c6ea2d2520f15bea5e22f95db"},{url:"static/assets/js/index-D7AfTqv7.js",revision:"348cdcf1caac03cc019c46540c9740b0"},{url:"static/assets/js/index-D9sLxg7E.js",revision:"15659373d457148aa185aca0366843b4"},{url:"static/assets/js/index-DdGGZXw4.js",revision:"5e61de8ba76dc877709560d5cbfcb502"},{url:"static/assets/js/index-DPmJGDBq.js",revision:"38731241dcdc0a7cdc995c48cff1087d"},{url:"static/assets/js/index-DqVPnH7v.js",revision:"3f56abdde8eef27187590e9813fbc3cb"},{url:"static/assets/js/index-nLDBfjI5.js",revision:"f8f4a08f1f67f13054c26527de6bf03b"},{url:"static/assets/js/index-pbYI3Mg_.js",revision:"40f33e56a37c5e67db9238f921fc8ae2"},{url:"static/assets/js/index-YZmu1Kid.js",revision:"21799a53bfa4ff6e53a002668cc62154"},{url:"static/assets/js/info-Be_ufRD9.js",revision:"50d75bfb82e97520976a66e1e0598b79"},{url:"static/assets/js/info-circle-CeBLe-oU.js",revision:"ecbb3132ba91b7ffc96ad0512cc69727"},{url:"static/assets/js/lightbulb-DofhDNu6.js",revision:"2784b0da1fd18164424dca0b9bf3bbf4"},{url:"static/assets/js/mail-DJJae_5c.js",revision:"8e704b44a3b721d9edf0cadcce373963"},{url:"static/assets/js/MainPage-BlGmdWDn.js",revision:"a0b3ae6c79d02320eff242a12fd6dabc"},{url:"static/assets/js/mobile-BCWUaWMu.js",revision:"e533bfb498556ed199659e5979df49a7"},{url:"static/assets/js/more-DXhlA-VV.js",revision:"23528b29aeaf915a4ecb0ebcedb407b1"},{url:"static/assets/js/network-placeholder-DtrYujz-.js",revision:"b5e2e2c6fccbe75a9ff0efc0b0c56f24"},{url:"static/assets/js/nftPlaceholder-Cpuwtc3G.js",revision:"c897a15ac176f41f3ab08e67475af77d"},{url:"static/assets/js/off-BeTWIhZC.js",revision:"e7f1f670d2642a21d17dc621eaaac9e9"},{url:"static/assets/js/onramp-B57UiuwX.js",revision:"9936f1d2a5d00c9b6783705cfeb20c7b"},{url:"static/assets/js/play-store-1lJLxHed.js",revision:"e134b91a5ce254907e6445b9e383a611"},{url:"static/assets/js/PlayPage-Ct4rCodS.js",revision:"1123287ef7e5baa85848f8450704f576"},{url:"static/assets/js/plus-fwv0w-tW.js",revision:"9b586a15f38ad49a9634ef70ceebfa73"},{url:"static/assets/js/PrivacyPolicyPage-CMJgUeHq.js",revision:"1fe8c1ed769776da6442d56c87b41dee"},{url:"static/assets/js/Providers-SpaHkOK5.js",revision:"b6d99869d889b19198e562b9f877567b"},{url:"static/assets/js/qr-code-BJpHmLL5.js",revision:"d2d850205a4ac0e260ebaf92e10ceda4"},{url:"static/assets/js/receive-CURdAocZ.js",revision:"f4d4fec0f789456f671fdd4ac299bd21"},{url:"static/assets/js/recycle-horizontal-ByaUcHYf.js",revision:"0531449e05f81712a5a7ddbedcca1161"},{url:"static/assets/js/refresh-BZIPh8CZ.js",revision:"7ab1c29b69d50417c08c95991ef7cbb8"},{url:"static/assets/js/reown-logo-B7adTdOF.js",revision:"b995deec2a1e94778cba72f428bd158f"},{url:"static/assets/js/search-BWA__yej.js",revision:"26aef0affa20df3a226aeb88272dc9e9"},{url:"static/assets/js/secp256k1-CawA04_n.js",revision:"1bde8b7e1c859b11f4f189888efd0661"},{url:"static/assets/js/send-BtS3SsB4.js",revision:"ae4014d6f707336281520a0477c7bdce"},{url:"static/assets/js/send-DeBNectR.js",revision:"090ac4d93e7f007ff464246f3a3b56e1"},{url:"static/assets/js/socials-Du4t09Op.js",revision:"f82531d1faa564f08fc2a0f81c9810d2"},{url:"static/assets/js/swapHorizontal-CN5iPt5B.js",revision:"9c47816f90d1bfb29c197242e0108f22"},{url:"static/assets/js/swapHorizontalBold-CeZR2Dq-.js",revision:"284e0c359397e4cef7dcc2f5f7a24026"},{url:"static/assets/js/swapHorizontalMedium-BnnA-GoY.js",revision:"60e81988ffae9173f34b7d526db032db"},{url:"static/assets/js/swapHorizontalRoundedBold-SMB5QqwX.js",revision:"a3dd967e8c98fc16ba13f74927f2321a"},{url:"static/assets/js/swaps-DmXL17K9.js",revision:"491af00044ca8cf41dff899b52817a25"},{url:"static/assets/js/swapVertical-BxXBKwwS.js",revision:"a8bab2a750ccbc79376148eec14f4532"},{url:"static/assets/js/telegram-OIChrTO6.js",revision:"3f610f382ce9ce21d0b4757171b9d3e2"},{url:"static/assets/js/TermsPage-DBguOjvC.js",revision:"61e6eb1b2fb52a5bbe33bff7517f0e97"},{url:"static/assets/js/Themecontext-Dj1Zc1Om.js",revision:"325222dc8c57069413b1bd304f6e93af"},{url:"static/assets/js/three-dots-DzWUIjL7.js",revision:"76557eaa9da3d704a1e58b881f95ef34"},{url:"static/assets/js/transactions-CFrjFZCh.js",revision:"a8a86178544a9b2458d8d913a2549bca"},{url:"static/assets/js/twitch-DIqPhE7k.js",revision:"bc31ae421b139528ec71d9bce8dd20a0"},{url:"static/assets/js/twitterIcon-Bd6GlYJG.js",revision:"750e6e1b309d80e23d6fa74e33744cdb"},{url:"static/assets/js/verify-D_RnPrL9.js",revision:"4ce82e54e93ff2fba745224f8bc3e434"},{url:"static/assets/js/verify-filled-BAtkXKy1.js",revision:"37a1d7c4ec8280166a7ac1d1f5727196"},{url:"static/assets/js/w3m-modal-C5UJ4I1_.js",revision:"a344551fa61d16501597682e9959bbff"},{url:"static/assets/js/wallet-C-7v6XfG.js",revision:"35a92cfe60946721dba975d710cc8c70"},{url:"static/assets/js/wallet-placeholder-CBaDEiNT.js",revision:"beabc9a3b4fed94b5a51c72b20a8cebe"},{url:"static/assets/js/walletconnect-C2Rkqw90.js",revision:"3c52568594f19874f8e221d7f130a53d"},{url:"static/assets/js/warning-circle-D5wAVMBr.js",revision:"8700c7582d748a518077faa0f5dde7dc"},{url:"static/assets/js/workbox-window.prod.es5-B9K5rw8f.js",revision:"d60138448ddfe6b549524d11f192875e"},{url:"static/assets/js/x-CtJFewSp.js",revision:"e2c35d526e410534cd3f378c885d43e2"},{url:"static/android-icon-512x512.png",revision:"696e69a9b809aa3ccc0af8c58deca30b"},{url:"static/apple-icon.png",revision:"86fb690de9c6d3695780394263222ddc"},{url:"static/favicon.ico",revision:"bf03d5c127775f73550cad83a54e9976"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
