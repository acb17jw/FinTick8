((e,t)=>{for(var s in t)e[s]=t[s]})(window,(e=>{var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=(e,t,n)=>{s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=(e,t)=>{if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,(t=>e[t]).bind(null,i));return n},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,"a",t),t},s.o=(e,t)=>({}.hasOwnProperty.call(e,t)),s.p="https://assets.allegrostatic.com/opbox-multisearch-search/",s(s.s=0)})({0(e,t,s){e.exports=s("WdQY")},GI1G(e){e.exports=JSON.parse('{"a":"https://assets.allegrostatic.com/metrum/icon/trash-bin-140518fe35.svg"}')},WdQY(e,t,s){function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){return e.querySelector(`[data-role="suggestions-apron-${t}"]`)}function a({fields:e,index:t}){const s=i(e,t);s.classList.remove("mpof_5r"),s.classList.add("mpof_z0")}s.r(t);const o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},r=RegExp(Object.keys(o).join("|"),"g");function l(e,t){return null==t&&(t=","),e.length<=0?new c([""],[]):new c(["",...Array(e.length-1).fill(t),""],e)}function d(e){return new c([e+""],[])}class c{constructor(e,t){this._parts=e,this._subs=t}_escapeHtml(e){return e instanceof c?e:Array.isArray(e)?l(e,""):(e+"").replace(r,e=>o[e])}toString(){return this._parts.reduce((e,t,s)=>{const n=this._subs[s-1];return e+this._escapeHtml(n)+t})}inspect(){return`${this.constructor.name} '${this.toString()}'`}}function u(e,...t){return new c(e,t)}let h;(e=>{e.PHRASE="PHRASE",e.CATEGORY="CATEGORY"})(h||(h={}));const m={"pl-PL":{heading:[["",["Wpisz czego szukasz"]]],subtitle:[["",["Znajdziemy sprzedawców, którzy mają wszystko czego szukasz."]]],item:[["",["przedmiot"]]],placeholder:[["",["czego szukasz?"]]],clearInput:[["",["wyczyść input"]]],errorMessage:[["",["Wprowadź frazę"]]],categorySeparator:[["",["w kategorii"]]],closeModal:[["",["zamknij modal"]]],addNext:[["",["Dodaj kolejny"]]],submit:[["",["szukaj"]]]}},p=/({{[^}]+}}|{%[^%}]+%})/g,g=/({{[^}]+}})/g,f=/({%[^%}]+%})/g,_=/({{\s*|\s*}}|{%\s*|\s*%})/g;function v(e,t=""){return e.find(e=>e[0]===t)[1]}const b=(e,t,s)=>{const n=m["pl-PL"][e];if(!n)throw Error(`Missing translation for lang "pl-PL" and key "${e}"`);return t?((e,t,s)=>{let n=v(e,t.context);return parseInt(t.count,10)>=0?n=((e,t)=>{const s=1==(n=t)?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2;var n;return"boolean"!=typeof s?e[s]:e[s?1:0]})(n,t.count):[n]=n,((e,t,s)=>{if(s){let s=0;return e.split(p).map(n=>{if(n.match(f)){const i=t.formatters[s];if(i)return s+=1,i(n.replace(_,""));throw Error(`Missing translation formatter for "${e}"`)}return n.match(g)?t[n.replace(_,"")]:n})}const n=e.match(p);let i=0;return n?n.reduce((s,n)=>{const a=n.replace(_,"");if(n.match(f)){const o=t.formatters[i];if(o)return i+=1,s.replace(n,o(a));throw Error(`Missing translation formatter for "${e}"`)}return n.match(g)?s.replace(n,t[a]):s},e):e})(n,t,s)})(n,t,s):v(n)[0]};let y,x,E=e=>e;function S(e,t){return Array.from(e.querySelectorAll(t))}function w(e){(e=>S(e,'[data-name="suggestions-apron"]'))(e).forEach(e=>{e.classList.remove("mpof_z0"),e.classList.add("mpof_5r"),e.innerHTML=""})}let k=null;function $(e,t){return e.querySelector("#input"+t)}class I{constructor({fieldsDom:e,modalContainer:t,onShrink:s,onExpand:o,onSelect:r}){n(this,"expandSuggester",({index:e,phrase:t,isExpanded:s})=>{s||(a({fields:this.fields,index:e}),t&&this.onExpand()),function({fields:e,modalContainer:t,index:s,phrase:n}){const o=i(e,s);k=n,n?((e={})=>window.opbox.edge.get((e=>{var t;return"/suggestions?"+(t=Object.assign({},e,{},{country:"pl",highlights:"b",sortByElementType:"true"}),Object.keys(t).filter(e=>!!t[e]).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&"))})(e),{headers:{Accept:"application/vnd.allegro.public.v5+json"}}).then(({data:e})=>e.suggestions.filter(e=>e.type===h.PHRASE||e.type===h.CATEGORY)))({phrase:n}).then(i=>{k===n&&(i.length?(a({fields:e,index:s}),o.innerHTML=(e=>e.length?l(e.map((e,t)=>(({categoryAlias:e,id:t,name:s,phrase:n,type:i},a)=>{if(i===h.CATEGORY){const i=s.split(">"),o=i.pop();return u(y||(y=E`<div class="${0}" data-role="suggestion" data-phrase="${0}" data-category="${0}" data-alias="${0}" data-index="${0}"><span class="${0}" data-role="suggestion-text">${0}${0}<span class="${0}">${0} ${0}</span>${0}<span class="${0}">${0}</span></span></div>`),"mpof_ki meqh_en mqen_m6 _d38aa_3vJY_ mh36_16",n,t,e,a,"mg9e_8 mj7a_8 mh36_24 mvrt_24 mpof_vs m7er_k4 mjru_k4 mgmw_ag _d38aa_8S6Wm",b("categorySeparator")," ","mgmw_vr _d38aa_UizCm",i.join(">"),">"," ","mgmw_enp",o)}return u(x||(x=E`<div class="${0}" data-role="suggestion" data-index="${0}"><span class="${0}" data-role="suggestion-text">${0}</span></div>`),"mpof_ki meqh_en mqen_m6 _d38aa_3vJY_",a,"mg9e_8 mj7a_8 mh36_24 mvrt_24 mpof_vs m7er_k4 mjru_k4 mgmw_ag _d38aa_8S6Wm",d(n))})(e,t)),""):"")(i),((e,t)=>{e.style.maxHeight=t+"px"})(o,((e,t)=>{const s=t.getBoundingClientRect().bottom,n=e.getBoundingClientRect().top;return 37*Math.floor(Number(s-n)/37)})(o,t))):w(e))}).catch(()=>{w(e)}):w(e)}({fields:this.fields,modalContainer:this.modalContainer,index:e,phrase:t})}),n(this,"shrinkAll",()=>{w(this.fields),this.onShrink()}),n(this,"onInputClick",({index:e,phrase:t,isExpanded:s})=>{e&&(((e,t)=>i(e,t).classList.contains("mpof_z0"))(this.fields,e)?this.shrinkAll():(this.shrinkAll(),this.expandSuggester({index:e,phrase:t,isExpanded:s})))}),n(this,"onClickHandler",(e,t)=>{const s=e.closest(t);if(s){const t=s.dataset.role.slice(-1);this.completeInput({target:e,inputIndex:t})}}),n(this,"completeInput",({target:e,inputIndex:t})=>{(({fields:e,target:t,inputIndex:s,onSuccessCallback:n})=>{let i;const a=t.closest('[data-role="suggestion"]');if(a?i=a:t.dataset.index&&(i=t),i){const t=i.textContent,{alias:a,category:o,phrase:r}=i.dataset,l=$(e,s);l.value=a&&o&&r?r.replace(/(<([^>]+)>)/gi,""):t,n({alias:a,category:o,phrase:l.value})}})({fields:this.fields,target:e,inputIndex:t,onSuccessCallback:e=>{this.onSelect(Number(t),e),this.shrinkAll()}})}),this.fields=e,this.modalContainer=t,this.onShrink=s,this.onExpand=o,this.onSelect=r}}function M(e){if(e.id)return e.id.slice(-1)}var C=s("GI1G");let j,L,N,O,q=e=>e,z=e=>e;function A(e,t){e.insertAdjacentHTML("beforeend",(({defaultValue:e="",index:t,label:s=b("item"),removable:n=!1})=>{const i="input"+t;return u(L||(L=z`<div data-role="multisearch-field-${0}" data-name="multisearch-field" class="${0}"><input id="${0}" type="text" class="${0}" placeholder="${0}" value="${0}" autocomplete="off" /><label class="${0}" for="${0}">${0} ${0}</label>${0} ${0} ${0}</div>`),t,"_1hylq _1h7wt mp7g_oh mwdn_1",i,"_14uqc _1tnz3 _d38aa_LwrQv",b("placeholder"),e?d(e):"","_qrgxc",i,t+1,s,(e=>u(j||(j=q`<div class="${0} ${0}" data-name="suggestions-apron" data-role="suggestions-apron-${0}"></div>`),"mp7g_f6 mj7u_0 msts_9u mjb5_w6 mx7m_1 mefy_co mnyp_co mdwl_co mlkp_ag m911_5r mtag_2 mm2b_2 mjyo_6x msbw_0 mldj_0 _d38aa_11auo","mpof_5r",e))(t),n?u(N||(N=z`<button type="button" data-role="remove-btn-${0}" class="${0}"><img src="${0}" class="${0}" alt="${0}" /></button>`),t,"mgn2_14 mp0t_0a m9qz_yo mp7g_oh mse2_40 mqu1_40 mtsp_ib mli8_k4 mp4t_0 m3h2_0 mryx_0 munh_0 m911_5r mefy_5r mnyp_5r mdwl_5r msbw_2 mldj_2 mtag_2 mm2b_2 mqvr_2 msa3_z4 mqen_m6 meqh_en m0qj_5r mgmw_wo msts_n7 mh36_16 mvrt_16 mg9e_0 mj7a_0 m9tr_pf m2ha_2 m8qd_qh mjt1_n2 bqyr8",C.a,"mjyo_6x mse2_40 meqh_en msa3_z4 m0s5_e6 mg9e_4 mvrt_4 mj7a_4 mh36_4 isflp",b("clearInput")):"",0===t?u(O||(O=z`<div data-role="hint-for-input${0}" class="${0}">${0}</div>`),t,"_6x7yn mgmw_1p mpof_5r _d38aa_2GxO8",b("errorMessage")):"")})(Object.assign({label:b("item"),removable:!0},t)))}function H({params:e,redirectToListing:t=!1}){const s=new URL(window.location.href);if(!t){const t=e.flatMap(({categoryId:e,phrase:t},s)=>["phrases="+encodeURIComponent(t),e&&`categoryId${s}=${encodeURIComponent(e)}`]).filter(Boolean);return`${s.protocol}//${s.host}/szukaj/multi?${t.join("&")}`}const{categoryAlias:n,categoryId:i,phrase:a}=e[0];if(n||i){const e=n||i;return`${s.protocol}//${s.host}/kategoria/${e}?string=${a}`}return`${s.protocol}//${s.host}/listing?string=${a}`}const{replace:B}="",F=/[&<>'"]/g,R={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},D=e=>R[e];function P({fields:e,inputSelector:t,removable:s}){e.querySelectorAll('[data-name="multisearch-field"]').forEach((n,i)=>{const a=n.querySelector(t);var o;n.parentElement.removeChild(n),A(e,{defaultValue:(o=a.value,B.call(o,F,D)),index:i,removable:s})})}function T({addNextInputBtn:e,disabled:t}){e.disabled=t}function G(e){var t,s;return(null===(t=e.parentElement.dataset.role)||void 0===t?void 0:t.includes("remove-btn"))||(null===(s=e.dataset.role)||void 0===s?void 0:s.includes("remove-btn"))}const Y='[data-name="suggestions-apron"]';class U{constructor({domNode:e,isMultisearch:t,onClose:s,params:i}){n(this,"onClickHandler",e=>{const t=e.target;G(t)&&this.removeFieldHandler(t),t.matches("input")&&this.onInputClickHandler(t),t.closest(Y)?this.suggester.onClickHandler(t,Y):this.onOtherAreaClickHandler(t)}),n(this,"onAddNextInputHandler",()=>{const e=S(this.fields,"input").length;1===e&&P({fields:this.fields,inputSelector:"input",removable:!0}),e<5&&(A(this.fields,{index:e}),this.params.push({})),4===e&&T({addNextInputBtn:this.addNextInputBtn,disabled:!0})}),n(this,"amILastInput",e=>{const t=S(this.fields,"input");return t[t.length-1]===e}),n(this,"setFocusOnNextField",e=>{const t=M(e);if(!t)return;const s=parseInt(t,10)+1;document.getElementById("input"+s).focus()}),n(this,"onKeyDownHandler",e=>{const t=e.target;if("Enter"===e.key){if(t.matches('[data-role="add-next-input-btn"]')||t.matches('button[type="button"]')||G(t))return;this.isSuggesterExpanded&&t.closest(Y)&&this.suggester.onClickHandler(t,Y),e.preventDefault(),t.matches("input")&&(this.isSuggesterExpanded&&this.suggester.shrinkAll(),this.amILastInput(t)?this.handleFormSubmit(e):t.matches("input")&&this.setFocusOnNextField(t))}}),n(this,"onInputValueChangeHandler",e=>{const t=e.target,s=M(t),n=t.value;""===n&&this.shrinkSuggesters(),this.expandSuggester(s,n)}),n(this,"removeFieldHandler",e=>{const t=Number((e=>{var t,s;return(null===(t=e.parentElement.dataset.role)||void 0===t?void 0:t.includes("remove-btn-"))?e.parentElement.dataset.role.split("remove-btn-")[1]:(null===(s=e.dataset.role)||void 0===s?void 0:s.includes("remove-btn-"))?e.dataset.role.split("remove-btn-")[1]:void 0})(e)),s=(n=t,this.fields.querySelector(`[data-role="multisearch-field-${n}"]`));var n;s&&(window.opbox.analytics.sendBoxInteractionEvent({contextNode:s,label:"removeInputButton"}),s.parentElement.removeChild(s),this.params=((e,t)=>{const s=Array.from({length:e.length},()=>({}));return e.forEach((e,n)=>{if(n<t)return void(s[n]=e);const i=Object.keys(e);i.forEach(e=>{"phrase"!==e&&(s[n][e]=null)}),n>t&&i.forEach(t=>{s[n-1][t]=e[t]})}),s.filter(e=>Object.keys(e).length)})(this.params,t),T({addNextInputBtn:this.addNextInputBtn}),P({fields:this.fields,inputSelector:"input",removable:1!==S(this.fields,"input").length}))}),n(this,"handleFormSubmit",e=>{var t;e.preventDefault(),(t=this.fields).querySelector("#input0").classList.remove("_vf6li"),t.querySelector('[data-role="hint-for-input0"]').classList.add("mpof_5r"),((e,t)=>{return(s=S(this.fields,"input"),s.filter(e=>e.value.trim().length>0)).length>0;var s})()?(S(this.fields,"input").map(e=>e.value.trim()).forEach((e,t)=>{this.params[t]?this.params[t].phrase=e:this.params[t]={phrase:e}}),(({isMultisearch:e,domNode:t,params:s})=>{var n;let i=0,a={};const o=[];for(const d of s){var r;(null===(r=d.phrase)||void 0===r?void 0:r.trim())?(o.push(Object.assign({},a,{},d)),i+=1,a={}):a=d}if(Object.keys(a).length&&!(null===(n=a.phrase)||void 0===n?void 0:n.trim())&&o.push(a),window.opbox.analytics.sendBoxInteractionEvent({contextNode:t.querySelector('button[type="submit"]'),label:"searchButton",customParams:{quantity:i}}),1===i)return void document.location.assign(H({params:o,redirectToListing:!0}));if(!e)return void document.location.assign(H({params:o}));const l=[{name:"phrases",value:o.filter(({phrase:e})=>e).map(({phrase:e})=>e)},...o.flatMap((e,t)=>{let s=((e,t)=>{if(null==e)return{};var s,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(i[s]=e[s]);return i})(e,["phrase"]);return Object.keys(s).flatMap(e=>"categoryAlias"!==e?[{name:`${e}${t}`,value:s[e]}]:[])}),{name:"p",value:"1"}];window.opbox.changeParams(l)})({domNode:this.domNode,params:this.params,isMultisearch:this.isMultisearch}),this.onFormClose(),e.target.blur()):(e=>{e.querySelector("#input0").classList.add("_vf6li"),e.querySelector('[data-role="hint-for-input0"]').classList.remove("mpof_5r")})(this.fields)}),n(this,"handleSuggestionSelect",(e,{alias:t,category:s,phrase:n})=>{const i=this.params[e]||(this.params[e]={});Object.keys(i).forEach(e=>{i[e]=null}),i.phrase=n,t&&(i.categoryAlias=t),s&&(i.categoryId=s)}),n(this,"onOtherAreaClickHandler",e=>{e.matches("input")||e.closest(Y)||this.shrinkSuggesters()}),n(this,"onInputClickHandler",e=>{const t=M(e),s=e.value;this.suggester.onInputClick({index:t,phrase:s,isExpanded:this.isSuggesterExpanded})}),n(this,"onInputFocusHandler",({target:e})=>{window.opbox.analytics.sendBoxInteractionEvent({contextNode:e,label:"inputFocused"})}),n(this,"setSuggesterExpanded",e=>{this.isSuggesterExpanded=e}),this.domNode=e,this.isMultisearch=t,this.onFormClose=s,this.params=i,this.isSuggesterExpanded=!1}initialize(){this.setDOMElements(),this.fields&&(this.bindEventListeners(),this.suggester=new I({fieldsDom:this.fields,modalContainer:this.modalContainer,onExpand:()=>this.setSuggesterExpanded(!0),onShrink:()=>this.setSuggesterExpanded(!1),onSelect:this.handleSuggestionSelect}))}setInitialInputValues(e){$(this.fields,0).value=e?decodeURIComponent(e):""}shrinkSuggesters(){this.suggester.shrinkAll()}setInitialFormFeatures(){5===S(this.fields,"input").length&&T({addNextInputBtn:this.addNextInputBtn,disabled:!0})}setDOMElements(){this.fields=this.domNode.querySelector('[data-role="fields"]'),this.form=this.domNode.querySelector("form"),this.modalContainer=this.domNode.querySelector('[data-role="modal-container"]'),this.addNextInputBtn=this.domNode.querySelector('[data-role="add-next-input-btn"]')}bindEventListeners(){this.domNode.addEventListener("click",this.onClickHandler),this.addNextInputBtn.addEventListener("click",this.onAddNextInputHandler),this.fields.addEventListener("input",this.onInputValueChangeHandler),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("keydown",this.onKeyDownHandler),S(this.fields,"input").forEach(e=>{e.addEventListener("focus",this.onInputFocusHandler)})}expandSuggester(e,t){this.suggester.expandSuggester({index:e,phrase:t,isExpanded:this.isSuggesterExpanded})}}class V{constructor(e,t){this.domNode=e,this.onClose=t}initialize(){this.setDOMElements(),this.closeModalButton&&this.bindEventListeners()}setDOMElements(){this.closeModalButton=this.domNode.querySelector('[data-role="modal-close-button"]'),this.closeMobileModalButton=this.domNode.querySelector('[data-role="modal-overlay"]')}bindEventListeners(){this.closeModalButton.addEventListener("click",this.onClose),this.closeMobileModalButton.addEventListener("click",this.onClose)}}const W="_14l7n".split(" "),K=e=>e.split(" "),J=K("mpof_ki"),Q=K("mpof_5r"),Z=(e,t)=>e.forEach(t),X=e=>t=>e.remove(t),ee=e=>t=>e.add(t);class te{constructor({domNode:e,isMultisearch:t,isModalOpen:s,params:i}){n(this,"handleModalOpen",e=>{var t;W.forEach(e=>window.document.body.classList.add(e)),(({classList:e})=>{Z(Q,X(e)),Z(J,ee(e))})(this.modal),window.document.addEventListener("keydown",this.handleEscKey,!1),this.initializeContent(null==e||null===(t=e.detail)||void 0===t?void 0:t.phrase),window.document.activeElement instanceof HTMLElement&&window.document.activeElement.blur()}),n(this,"handleModalClose",()=>{W.forEach(e=>window.document.body.classList.remove(e)),(({classList:e})=>{Z(Q,ee(e)),Z(J,X(e))})(this.modal),window.document.removeEventListener("keydown",this.handleEscKey,!1)}),n(this,"handleEscKey",e=>{"Escape"===e.key&&(this.form.isSuggesterExpanded?this.form.shrinkSuggesters():this.handleModalClose())}),this.domNode=e,this.form=new U({domNode:e,isMultisearch:t,params:i,onClose:this.handleModalClose}),this.closeButton=new V(e,this.handleModalClose),this.isMultisearch=t,this.isModalOpen=s}initialize(){this.setDOMElements(),this.modal&&(this.isModalOpen&&this.handleModalOpen(),this.bindEventListeners())}setDOMElements(){this.modal=this.domNode.querySelector('[data-role="modal"]')}bindEventListeners(){window.addEventListener("multisearch-modal",this.handleModalOpen)}initializeContent(e){this.form.initialize(),this.isMultisearch?this.form.setInitialFormFeatures():e&&this.form.setInitialInputValues(e),this.closeButton.initialize()}}window.opbox.component.register({prototypeName:"allegro.multisearch.search"},class{constructor({baseNode:e,props:t}){this.baseNode=e,this.props=t}onMount(){const{isMultisearch:e,isModalOpen:t,params:s}=this.props;new te({domNode:this.baseNode,isModalOpen:t,isMultisearch:e,params:s}).initialize()}})}}));
//# sourceMappingURL=index.es6-pl-PL_a04a9f1a.js.map