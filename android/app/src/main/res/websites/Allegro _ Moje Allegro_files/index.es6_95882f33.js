((e,t)=>{for(var a in t)e[a]=t[a]})(window,(e=>{function t(t){for(var a,r,n=t[0],s=t[1],o=0,d=[];o<n.length;o++)r=n[o],{}.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in s)({}).hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(l&&l(t);d.length;)d.shift()()}var a={},i={0:0};function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=e=>{var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((t,r)=>{a=i[e]=[t,r]});t.push(a[2]=n);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=(e=>r.p+""+({1:"props-mapper",2:"template"}[e]||e)+".es6_95882f33.js")(e);var l=Error();s=t=>{o.onerror=o.onload=null,clearTimeout(d);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}i[e]=void 0}};var d=setTimeout(()=>{s({type:"timeout",target:o})},12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},r.m=e,r.c=a,r.d=(e,t,a)=>{r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=(e,t)=>{if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,(t=>e[t]).bind(null,i));return a},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,"a",t),t},r.o=(e,t)=>({}.hasOwnProperty.call(e,t)),r.p="https://assets.allegrostatic.com/opbox-links/",r.oe=e=>{throw console.error(e),e};var n=window.webpackJsonp_2508c=window.webpackJsonp_2508c||[],s=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var l=s;return r(r.s=0)})({"+GN7"(e,t){e.exports="c53"},0(e,t,a){e.exports=a("O14P")},"0e9N"(e,t,a){a.d(t,"b",()=>i),a.d(t,"e",()=>r),a.d(t,"d",()=>n),a.d(t,"a",()=>s),a.d(t,"c",()=>o);const i={name:"allegro.navigation.links",version:"1.0"},r={name:"allegro.navigation.urlList",version:"1.0"},n={name:"allegro.navigation.tabLinks",version:"0.1"},s={name:"allegro.navigation.content.categories",version:"0.2"},o={name:"allegro.navigation.listingLinks",version:"1.0"}},O14P(e,t,a){a.r(t);var i=a("+GN7"),r=a.n(i),n=a("0e9N");function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=a("wA3v"),l=a("bdBm");class d{constructor(e){s(this,"handleClick",e=>{e.preventDefault(),this.activeItemIndex=Number(e.target.dataset.tabId),this.setActiveNavigationBox(),this.setVisibleItems()}),this.tabs=e.querySelectorAll("[data-tab-id]"),this.items=e.querySelectorAll("[data-initial]"),this.activeItemIndex=0}setVisibleItems(){this.items.forEach(e=>e.classList.remove(l.R)),this.items[this.activeItemIndex].classList.add(l.R)}setActiveNavigationBox(){this.tabs.forEach(e=>{e.parentNode.classList.remove(l.a),e.classList.remove(l.t)}),this.tabs[this.activeItemIndex].parentNode.classList.add(l.a),this.tabs[this.activeItemIndex].classList.add(l.t)}attachListeners(){this.tabs.forEach(e=>e.addEventListener("click",this.handleClick))}detachListeners(){this.tabs.forEach(e=>e.removeEventListener("click",this.handleClick))}setInitialState(){this.tabs.length&&this.setActiveNavigationBox(),this.items.length&&this.setVisibleItems()}mount(){this.setInitialState(),this.attachListeners()}}window.opbox.component.register({prototypeName:n.b.name,clientImplementationVersion:r.a},class{constructor({baseNode:e,targetWindow:t=window}){s(this,"handleScrollToClick",e=>{const t=e.target.getAttribute("href");if(!t)return;const a=t.replace("#","");this.body.querySelector(`[data-box-name="${a}"] > a[name]`)&&(e.preventDefault(),this.opbox.scrollTo(a),this.highlightLink(a))}),this.baseNode=e,this.boxName=e.getAttribute("data-box-name"),this.body=t.document.body,this.opbox=t.opbox,this.groupedLinksHandler=new d(e)}highlightLink(e){this.body.querySelectorAll(`.${o.a} a[href^="#"]`).forEach(t=>{const a=t.getAttribute("href").replace("#","")===e?"add":"remove";t.classList[a](l.a)})}attachScrollToListener(){this.baseNode.addEventListener("click",this.handleScrollToClick,!1)}removeScrollToListener(){this.baseNode.removeEventListener("click",this.handleScrollToClick,!1)}async onUpdate(e){const{default:t,redrawingEnabled:i}=await a.e(2).then(a.bind(null,"vQ0e")),{onDataPropsMapper:r}=await a.e(1).then(a.bind(null,"bR2w")),n=r(e);i(n)&&(this.removeScrollToListener(),this.baseNode.innerHTML=t(n),this.attachScrollToListener(),this.groupedLinksHandler.mount())}onMount(){this.attachScrollToListener(),this.groupedLinksHandler.mount()}onUnmount(){this.removeScrollToListener(),this.groupedLinksHandler.detachListeners()}})},bdBm(e,t,a){a.d(t,"O",()=>i),a.d(t,"N",()=>r),a.d(t,"P",()=>n),a.d(t,"J",()=>s),a.d(t,"K",()=>o),a.d(t,"F",()=>l),a.d(t,"I",()=>d),a.d(t,"l",()=>c),a.d(t,"E",()=>_),a.d(t,"L",()=>m),a.d(t,"M",()=>h),a.d(t,"f",()=>u),a.d(t,"g",()=>p),a.d(t,"h",()=>v),a.d(t,"i",()=>b),a.d(t,"Q",()=>g),a.d(t,"a",()=>f),a.d(t,"j",()=>y),a.d(t,"R",()=>w),a.d(t,"G",()=>L),a.d(t,"H",()=>x),a.d(t,"b",()=>k),a.d(t,"e",()=>S),a.d(t,"k",()=>N),a.d(t,"c",()=>I),a.d(t,"s",()=>j),a.d(t,"t",()=>E),a.d(t,"u",()=>O),a.d(t,"v",()=>T),a.d(t,"w",()=>P),a.d(t,"y",()=>q),a.d(t,"x",()=>A),a.d(t,"d",()=>C),a.d(t,"p",()=>H),a.d(t,"o",()=>M),a.d(t,"z",()=>z),a.d(t,"m",()=>K),a.d(t,"B",()=>B),a.d(t,"A",()=>D),a.d(t,"C",()=>U),a.d(t,"D",()=>Q),a.d(t,"q",()=>V),a.d(t,"r",()=>R),a.d(t,"n",()=>W);var i="_2508c_2fm2a",r="_2508c_2SQjW",n="_2508c_3iTmO",s="_2508c_1HSXr",o="_2508c_1-Sq1",l="_2508c_3cKik",d="_2508c_CaabZ",c="_2508c_NXQqN",_="_2508c_1WKfq",m="_2508c_2koL0",h="_2508c_1dfb-",u="_2508c_3DKsU",p="_2508c_2PnUE",v="_2508c_O4cSX",b="_2508c_1UQXZ",g="_2508c_1Z1r-",f="_2508c_2aKy1",y="_2508c_br2wl",w="_2508c_2IN0-",L="_2508c_3cWp_",x="_2508c_djNEO",k="mpof_ki mryx_8 _2508c_3uKSw",S="mp0t_ji m9qz_yq mgn2_16 mgn2_17_s mp4t_0 m3h2_0 mryx_0 munh_0 mqu1_1j mgmw_wo",N="_2508c_29tml",I="mp4t_0 m3h2_0 mryx_0 _2508c_KhuVa",j="_w7z6o",E="_15tw4",O="_uj8z7",T="_3a4zn mg9e_0 mvrt_0 mj7a_0 mh36_0 mp4t_0 m3h2_0 mryx_0 munh_0 mp7g_oh",P="_3a4zn",q="_12vfa",A="_1bmp9 _1tq4i mp7g_oh",C="_1h7wt _9hx3e",H="mgmw_enp",M="mgmw_ag",z="mryx_8",K="_9f0v0",B="munh_8",D="munh_32",U="m3h2_8",Q="mp4t_16",V="_d7szm",R="mjyo_6x mse2_40 meqh_en msa3_z4 m0s5_e6 mg9e_4 mvrt_4 mj7a_4 mh36_4 isflp",W="m0s5_ia"},wA3v(e,t,a){a.d(t,"a",()=>i);const i="js-navigation-links"}}));
//# sourceMappingURL=index.es6_95882f33.js.map