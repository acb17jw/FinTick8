!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){function t(t){for(var n,i,o=t[0],a=t[1],c=0,u=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);u.length;)u.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({1:"notifications",2:"sticky",3:"strip",4:"user-name"}[e]||e)+"-pl-PL_6ecf6d14.js"}(e);var s=Error();a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,n[1](s)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://assets.allegrostatic.com/opbox-metrum-header/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp_fee54=window.webpackJsonp_fee54||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var s=a;return i(i.s=0)}({0:function(e,t,n){e.exports=n("6kBQ")},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"6kBQ":function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),i=n("vuIU"),o=n("U8x5"),a=n("kiQV"),c=n("rePB"),s=function(e,t){return e.contains(t)},u=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;Object(r.a)(this,e),Object(c.a)(this,"resetDropHeight",(function(){n.dropElement.style.height=""})),Object(c.a)(this,"setDropHeight",(function(e){n.dropElement.style.height=e})),Object(c.a)(this,"setDropMaxHeight",(function(e){n.dropElement.style.maxHeight=e})),Object(c.a)(this,"isDropScrollable",(function(){return n.dropElement.hasAttribute(o.e)})),Object(c.a)(this,"toggleClickListener",(function(e){e.preventDefault(),e.currentTarget.parentElement&&n.toggle()})),Object(c.a)(this,"handleClickOutsideDropdown",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;s(n.wrapper,t)||"true"!==n.toggleElement.getAttribute("aria-expanded")||n.hide()})),this.targetWindow=i,this.wrapper=t,this.toggleElement=t.querySelector('[data-role="'.concat(o.g,'"]')),this.dropElement=t.querySelector('[data-role="'.concat(o.d,'"]')),this.icon=t.querySelector('[data-role="'.concat(o.f,'"]')),this.id=t.getAttribute("data-dropdown-id")||""}return Object(i.a)(e,[{key:"toggle",value:function(){"true"===this.toggleElement.getAttribute("aria-expanded")?this.hide():this.show()}},{key:"sendEvent",value:function(e){this.targetWindow.opbox.analytics.sendEvent(this.wrapper,e,this.id),"show_dropdown"===e?this.targetWindow.opbox.boxViewsMarker.markBoxAsVisible(this.wrapper):this.targetWindow.opbox.boxViewsMarker.markBoxAsHidden(this.wrapper)}},{key:"show",value:function(){this.wrapper.classList.add("_8ntnf"),this.icon.classList.remove("i15un"),this.icon.classList.add("i17vn"),this.toggleElement.setAttribute("aria-expanded","true"),this.dropElement&&this.handleDropHeight(),this.sendEvent("show_dropdown")}},{key:"hide",value:function(){this.wrapper.classList.remove("_8ntnf"),this.icon.classList.remove("i17vn"),this.icon.classList.add("i15un"),this.toggleElement.setAttribute("aria-expanded","false"),this.sendEvent("hide_dropdown")}},{key:"handleDropHeight",value:function(){var e=this.dropElement.getBoundingClientRect(),t=Math.floor(e.top),n="".concat(e.height,"px"),r="calc(100vh - ".concat(t+8,"px)");this.isDropScrollable()?this.setDropHeight(r):(this.resetDropHeight(),this.setDropHeight(n),this.setDropMaxHeight(r))}},{key:"attachListener",value:function(){this.toggleElement.addEventListener("click",this.toggleClickListener),this.targetWindow.addEventListener("click",this.handleClickOutsideDropdown)}}]),e}(),d=function(){function e(t){Object(r.a)(this,e),this.dropdowns=function(e){return Array.from(e.querySelectorAll('[data-role="'.concat(o.c,'"]')),(function(e){return new u(e)}))}(t)}return Object(i.a)(e,[{key:"initialize",value:function(){this.dropdowns.forEach((function(e){return e.attachListener()}))}}]),e}(),l=function(){function e(t,n){Object(r.a)(this,e),this.baseNode=t,this.services=n,this.hamburgerMenu=t.querySelector('[data-role="'.concat(o.i,'"]')),this.hamburgerModalBoxName=this.hamburgerMenu?this.hamburgerMenu.getAttribute(o.j):""}return Object(i.a)(e,[{key:"initialize",value:function(){var e=this;this.hamburgerMenu&&this.services.get("opbox-modal-service").then((function(t){e.openHamburgerModal=function(){return t.open(e.hamburgerModalBoxName)},e.attachListeners()}))}},{key:"attachListeners",value:function(){this.hamburgerMenu.addEventListener("click",this.openHamburgerModal)}}]),e}(),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.baseNode,i=t.services,a=t.props;Object(r.a)(this,e),this.props=a,this.baseNode=n,this.services=i,this.stickyEnabled=n.querySelector("[".concat(o.p,"]")),this.cacheEnabled=n.querySelector("[".concat(o.b,"]")),this.esiEnabled=n.querySelector("[".concat(o.h,"]")),this.stripEnabled=n.querySelector('[data-role="'.concat(o.n,'"]')),this.archiveVariantEnabled=n.querySelector("[".concat(o.a,"]")),this.userAuthenticated=n.querySelector("[".concat(o.r,"]"))}return Object(i.a)(e,[{key:"onMount",value:function(){var e=this;new d(this.baseNode).initialize(),new l(this.baseNode,this.services).initialize(),this.cacheEnabled&&n.e(4).then(n.bind(null,"Wq/3")).then((function(t){new(0,t.default)(e.baseNode).setFromOneCookie()})),this.cacheEnabled||this.archiveVariantEnabled||!this.userAuthenticated||n.e(1).then(n.bind(null,"t40z")).then((function(t){new(0,t.default)(e.baseNode,e.services,e.props).initialize()})),this.stickyEnabled&&n.e(2).then(n.bind(null,"SnEL")).then((function(t){new(0,t.default)(e.baseNode).initialize()})),this.stripEnabled&&n.e(3).then(n.bind(null,"4wS8")).then((function(t){new(0,t.default)(e.baseNode).initialize()})),window.opbox.performance.markTimeToInteractive(a.a)}}]),e}();window.opbox.component.register({prototypeName:"allegro.metrumHeader"},h)},U8x5:function(e,t,n){"use strict";n.d(t,"p",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"r",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"k",(function(){return h})),n.d(t,"o",(function(){return f})),n.d(t,"s",(function(){return p})),n.d(t,"n",(function(){return b})),n.d(t,"l",(function(){return g})),n.d(t,"m",(function(){return m})),n.d(t,"q",(function(){return v})),n.d(t,"i",(function(){return w})),n.d(t,"j",(function(){return y})),n.d(t,"a",(function(){return k}));var r="data-header-sticky",i="data-header-cached",o="data-header-esi",a="data-header-user-authenticated",c="header-dropdown",s="header-dropdown-toggle",u="header-dropdown-icon",d="dropdown-drop",l="dropdown-drop-scrollable",h="header-primary-bar",f="header-secondary-bar",p="header-wrapper",b="header-scrollbar-container",g="header-scrollbar-arrow-left",m="header-scrollbar-arrow-right",v="header-username",w="hamburger_menu",y="data-hamburger-name",k="data-header-archive"},kiQV:function(e){e.exports=JSON.parse('{"a":"opbox-metrum-header"}')},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))}}));
//# sourceMappingURL=main-header-pl-PL_6ecf6d14.js.map