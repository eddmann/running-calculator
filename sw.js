if(!self.define){let e,s={};const i=(i,_)=>(i=new URL(i+".js",_).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(_,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const a=e=>i(e,r),c={module:{uri:r},exports:o,require:a};s[r]=Promise.all(_.map((e=>c[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-icon.png",revision:"aea1eaf7f6becd71851520870229618e"},{url:"apple-touch-icon-180x180.png",revision:"adcae006b8bb0a98be92e754c6992088"},{url:"assets/index-56fdf2fc.js",revision:null},{url:"favicon.ico",revision:"b8df1948c23df0a02ae54921553c26b4"},{url:"index.html",revision:"78551a5460c0db3267dbb3d30cdbd0c2"},{url:"ios-splash-screens/10.2__iPad_landscape.png",revision:"ae543d01d21b82a661c003e523d1a8fc"},{url:"ios-splash-screens/10.2__iPad_portrait.png",revision:"51c274c06b688952b2293f48d89628af"},{url:"ios-splash-screens/10.5__iPad_Air_landscape.png",revision:"72b4e9137ac7c0b4f7684ef95b86c0cc"},{url:"ios-splash-screens/10.5__iPad_Air_portrait.png",revision:"29461973ce6497814482e4ca2175bc7e"},{url:"ios-splash-screens/10.9__iPad_Air_landscape.png",revision:"e5982baa03cd9f564f9d48c8dc081ac5"},{url:"ios-splash-screens/10.9__iPad_Air_portrait.png",revision:"7cddde64ac892b1c4787084fb8f9e30e"},{url:"ios-splash-screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"e223296e169ade491e8054b53b3b2371"},{url:"ios-splash-screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"b6370b4eaccd826203a5539fe8cd40a7"},{url:"ios-splash-screens/12.9__iPad_Pro_landscape.png",revision:"f58c31210b88537fccac2b0acff70cb5"},{url:"ios-splash-screens/12.9__iPad_Pro_portrait.png",revision:"b1764a611f76e3a72008e3a56662512e"},{url:"ios-splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"80a36430ae239b985e91981666c4a84f"},{url:"ios-splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"11dc498fec7ce345e41ecc1261456b5b"},{url:"ios-splash-screens/8.3__iPad_Mini_landscape.png",revision:"3ad6bb72f9e215fd448aa47d2e6c4ded"},{url:"ios-splash-screens/8.3__iPad_Mini_portrait.png",revision:"79ff0918da62a93289bc5d933a30ce18"},{url:"ios-splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"34f2ee69d88b28a9fa6bb3a58b97023a"},{url:"ios-splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"f02b197562b4542e306c97213b4e2c39"},{url:"ios-splash-screens/icon.png",revision:"eef458a10a80b9996875afe8e8f1511c"},{url:"ios-splash-screens/iPhone_11__iPhone_XR_landscape.png",revision:"787e178a8be309eba182d739160b452d"},{url:"ios-splash-screens/iPhone_11__iPhone_XR_portrait.png",revision:"7dfa643a165b6f81fc9aba5d07d76ccd"},{url:"ios-splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"40b061f9e663382b33fb25cee9a8e860"},{url:"ios-splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"117840d0a85168045592f08d8fbfb909"},{url:"ios-splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"8a2799f0d4ff24e5a6d1a5b8372153d1"},{url:"ios-splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"49eae7fe36885c8c892791909da09f81"},{url:"ios-splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"797609f5b9594203b0e9561ec6de952c"},{url:"ios-splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"d1d3c8de06822a4b8b21b9275f87ff7d"},{url:"ios-splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"dee9655fb576b4b72ea54b04b3df3773"},{url:"ios-splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"81f10abe288ce46531d94ec1a805fac2"},{url:"ios-splash-screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png",revision:"1fd9447f2b2c26b12dbc2e644e8db244"},{url:"ios-splash-screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png",revision:"901a8f518225f590ef7bc1d3105f3417"},{url:"ios-splash-screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png",revision:"8f5bb8706b6bdc88111c17f9a030a9c2"},{url:"ios-splash-screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png",revision:"73de3d41f30241166d28cf29435d99c0"},{url:"ios-splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"541e4cdc92da5579b438db78d38a2d72"},{url:"ios-splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"219ca83643673c4fde569e882e85282b"},{url:"ios-splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"eb5344cf75e9d23f2c7df9f297525a42"},{url:"ios-splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"d9a19181cb85a18cef911d6fea46e810"},{url:"maskable-icon-512x512.png",revision:"a8a1f09dd853664d2f27163e59635f6a"},{url:"pwa-192x192.png",revision:"08591964881693ee02e41e15f040fd8f"},{url:"pwa-512x512.png",revision:"cbb8631de3ed3e72566cfd03d7fb1d08"},{url:"pwa-64x64.png",revision:"b63bdd155fd66359105f5b60b33e920a"},{url:"registerSW.js",revision:"2099e5abf5d6c462375baa01186b8e97"},{url:"screenshots/android-distance.png",revision:"2adf730638a1bd7cfe58205844eebe9c"},{url:"screenshots/android-entry.png",revision:"38008830d0ae6204d05f454167ed8884"},{url:"screenshots/android-pace.png",revision:"25ace0d7c003152c8d71cde2619b70be"},{url:"screenshots/android-time.png",revision:"0e0387255a0d44b25ee3c00fba5e3d22"},{url:"screenshots/desktop-narrow-distance.png",revision:"406cf40d1ea07584ce0c49647aa3b825"},{url:"screenshots/desktop-narrow-pace.png",revision:"68f85ce0b1912491ec8906ebaa6220b8"},{url:"screenshots/desktop-narrow-time.png",revision:"6d9481b5f0a7baac25734df9fd708a8c"},{url:"screenshots/desktop-wide-distance.png",revision:"8d184e3df39d0337706b5b063ebb8662"},{url:"screenshots/desktop-wide-pace.png",revision:"c23015c2d8c889883e42ef484710bb8e"},{url:"screenshots/desktop-wide-time.png",revision:"4979b8fa41b03fe0822b5347c3826926"},{url:"screenshots/ios-distance.png",revision:"3bbc798fe4c94e1d44faed77eff63f65"},{url:"screenshots/ios-entry.png",revision:"b72269fbcf0867ee1a4e0b61bbb0abde"},{url:"screenshots/ios-pace.png",revision:"bc463a8cbc50d2bfd8395b214c5a8f69"},{url:"screenshots/ios-time.png",revision:"bcac1da3ba895d9b97c3f1035396cbd3"},{url:"pwa-64x64.png",revision:"b63bdd155fd66359105f5b60b33e920a"},{url:"pwa-192x192.png",revision:"08591964881693ee02e41e15f040fd8f"},{url:"pwa-512x512.png",revision:"cbb8631de3ed3e72566cfd03d7fb1d08"},{url:"maskable-icon-512x512.png",revision:"a8a1f09dd853664d2f27163e59635f6a"},{url:"manifest.webmanifest",revision:"88f437d5edb9135343d2d128fef6db89"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
