!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=98)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(52))},function(t,e,n){var r=n(0),o=n(13),i=n(33),s=n(67),c=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=s&&c[t]||(s?c:i)("Symbol."+t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(58),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(16);class r{constructor(){this._setHandlers=this._setHandlers.bind(this)}_setHandlers(t,e){t.forEach(t=>{let{element:n,event:r,callBack:o}=t;const i=o.bind(this);"add"===e?n.addEventListener(r,i):n.removeEventListener(r,i)})}}},function(t,e,n){var r=n(7),o=n(12),i=n(26);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(13),i=n(10),s=n(5),c=n(21),a=n(31),u=n(32),l=u.get,f=u.enforce,h=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,e,n,o){var a=!!o&&!!o.unsafe,u=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||s(n,"name")||i(n,"name",e),f(n).source=h.join("string"==typeof e?e:"")),t!==r?(a?!l&&t[e]&&(u=!0):delete t[e],u?t[e]=n:i(t,e,n)):u?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a.call(this)}))},function(t,e,n){var r=n(7),o=n(29),i=n(3),s=n(28),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=s(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(20),o=n(54);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";e.a={INVALID_MAIL_FORMAT:"Неправильный формат email",REQUIRED_FIELD:"Это обязательное поле",INVALID_VALUES_RANGE:"Должно быть от 2 до 30 символов",INVALID_MINIMUM_VALUE:"Должно быть не менее 8 символов",USER_EXISTS:"Такой пользователь уже есть",REQUIRED_KEYWORD:"Нужно ввести ключевое слово",REQUESR_ERROR:"Произошла ошибка",REQUESR_ERROR_MESSAGE:"Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",NO_RESULTS:"Ничего не найдено",NO_RESULTS_MESSAGE:"К сожалению по вашему запросу ничего не найдено"}},function(t,e,n){var r=n(0),o=n(82),i=n(83),s=n(10);for(var c in o){var a=r[c],u=a&&a.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(t){u.forEach=i}}},function(t,e,n){var r=n(0),o=n(18).f,i=n(10),s=n(11),c=n(21),a=n(35),u=n(37);t.exports=function(t,e){var n,l,f,h,p,d=t.target,v=t.global,m=t.stat;if(n=v?r:m?r[d]||c(d,{}):(r[d]||{}).prototype)for(l in e){if(h=e[l],f=t.noTargetGet?(p=o(n,l))&&p.value:n[l],!u(v?l:d+(m?".":"#")+l,t.forced)&&void 0!==f){if(typeof h==typeof f)continue;a(h,f)}(t.sham||f&&f.sham)&&i(h,"sham",!0),s(n,l,h,t)}}},function(t,e,n){var r=n(7),o=n(53),i=n(26),s=n(19),c=n(28),a=n(5),u=n(29),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=c(e,!0),u)try{return l(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(27),o=n(25);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(10);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(36),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(14);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var r,o,i,s,c=n(17),a=n(20),u=n(0),l=n(8),f=n(38),h=n(11),p=n(65),d=n(13),v=n(66),m=n(68),y=n(4),_=n(14),g=n(69),S=n(6),E=n(70),x=n(75),b=n(40),w=n(41).set,L=n(77),C=n(44),R=n(78),q=n(45),A=n(79),O=n(32),j=n(37),I=n(1),T=n(80),k=I("species"),M="Promise",D=O.get,P=O.set,U=O.getterFor(M),N=f,H=u.TypeError,B=u.document,V=u.process,F=d("inspectSource"),G=l("fetch"),$=q.f,Q=$,z="process"==S(V),Y=!!(B&&B.createEvent&&u.dispatchEvent),K=j(M,(function(){var t=F(N)!==String(N);if(66===T)return!0;if(!t&&!z&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!N.prototype.finally)return!0;if(T>=51&&/native code/.test(N))return!1;var e=N.resolve(1),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[k]=n,!(e.then((function(){}))instanceof n)})),W=K||!x((function(t){N.all(t).catch((function(){}))})),J=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},X=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;L((function(){for(var o=e.value,i=1==e.state,s=0;r.length>s;){var c,a,u,l=r[s++],f=i?l.ok:l.fail,h=l.resolve,p=l.reject,d=l.domain;try{f?(i||(2===e.rejection&&nt(t,e),e.rejection=1),!0===f?c=o:(d&&d.enter(),c=f(o),d&&(d.exit(),u=!0)),c===l.promise?p(H("Promise-chain cycle")):(a=J(c))?a.call(c,h,p):h(c)):p(o)}catch(t){d&&!u&&d.exit(),p(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&tt(t,e)}))}},Z=function(t,e,n){var r,o;Y?((r=B.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},(o=u["on"+t])?o(r):"unhandledrejection"===t&&R("Unhandled promise rejection",n)},tt=function(t,e){w.call(u,(function(){var n,r=e.value;if(et(e)&&(n=A((function(){z?V.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),e.rejection=z||et(e)?2:1,n.error))throw n.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,e){w.call(u,(function(){z?V.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},rt=function(t,e,n,r){return function(o){t(e,n,o,r)}},ot=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,X(t,e,!0))},it=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw H("Promise can't be resolved itself");var o=J(n);o?L((function(){var r={done:!1};try{o.call(n,rt(it,t,r,e),rt(ot,t,r,e))}catch(n){ot(t,r,n,e)}})):(e.value=n,e.state=1,X(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};K&&(N=function(t){g(this,N,M),_(t),r.call(this);var e=D(this);try{t(rt(it,this,e),rt(ot,this,e))}catch(t){ot(this,e,t)}},(r=function(t){P(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=p(N.prototype,{then:function(t,e){var n=U(this),r=$(b(this,N));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=z?V.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&X(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=D(t);this.promise=t,this.resolve=rt(it,t,e),this.reject=rt(ot,t,e)},q.f=$=function(t){return t===N||t===i?new o(t):Q(t)},a||"function"!=typeof f||(s=f.prototype.then,h(f.prototype,"then",(function(t,e){var n=this;return new N((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof G&&c({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return C(N,G.apply(u,arguments))}}))),c({global:!0,wrap:!0,forced:K},{Promise:N}),v(N,M,!1,!0),m(M),i=l(M),c({target:M,stat:!0,forced:K},{reject:function(t){var e=$(this);return e.reject.call(void 0,t),e.promise}}),c({target:M,stat:!0,forced:a||K},{resolve:function(t){return C(a&&this===i?N:this,t)}}),c({target:M,stat:!0,forced:W},{all:function(t){var e=this,n=$(e),r=n.resolve,o=n.reject,i=A((function(){var n=_(e.resolve),i=[],s=0,c=1;E(t,(function(t){var a=s++,u=!1;i.push(void 0),c++,n.call(e,t).then((function(t){u||(u=!0,i[a]=t,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=$(e),r=n.reject,o=A((function(){var o=_(e.resolve);E(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(2),o=n(6),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(7),o=n(2),i=n(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(4),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e,n){var r=n(13);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r,o,i,s=n(55),c=n(0),a=n(4),u=n(10),l=n(5),f=n(56),h=n(34),p=c.WeakMap;if(s){var d=new p,v=d.get,m=d.has,y=d.set;r=function(t,e){return y.call(d,t,e),e},o=function(t){return v.call(d,t)||{}},i=function(t){return m.call(d,t)}}else{var _=f("state");h[_]=!0,r=function(t,e){return u(t,_,e),e},o=function(t){return l(t,_)?t[_]:{}},i=function(t){return l(t,_)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(5),o=n(57),i=n(18),s=n(12);t.exports=function(t,e){for(var n=o(e),c=s.f,a=i.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||c(t,l,a(e,l))}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=c[s(t)];return n==u||n!=a&&("function"==typeof e?r(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e){t.exports={}},function(t,e,n){var r=n(3),o=n(14),i=n(1)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||null==(n=r(s)[i])?e:o(n)}},function(t,e,n){var r,o,i,s=n(0),c=n(2),a=n(6),u=n(23),l=n(76),f=n(30),h=n(42),p=s.location,d=s.setImmediate,v=s.clearImmediate,m=s.process,y=s.MessageChannel,_=s.Dispatch,g=0,S={},E=function(t){if(S.hasOwnProperty(t)){var e=S[t];delete S[t],e()}},x=function(t){return function(){E(t)}},b=function(t){E(t.data)},w=function(t){s.postMessage(t+"",p.protocol+"//"+p.host)};d&&v||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return S[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(g),g},v=function(t){delete S[t]},"process"==a(m)?r=function(t){m.nextTick(x(t))}:_&&_.now?r=function(t){_.now(x(t))}:y&&!h?(i=(o=new y).port2,o.port1.onmessage=b,r=u(i.postMessage,i,1)):!s.addEventListener||"function"!=typeof postMessage||s.importScripts||c(w)?r="onreadystatechange"in f("script")?function(t){l.appendChild(f("script")).onreadystatechange=function(){l.removeChild(this),E(t)}}:function(t){setTimeout(x(t),0)}:(r=w,s.addEventListener("message",b,!1))),t.exports={set:d,clear:v}},function(t,e,n){var r=n(43);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(8);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(3),o=n(4),i=n(45);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var r=n(14),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(24);class r{constructor(t){this.config=t,this._request.bind(this)}signup(t){return this._request("/signup","POST",this.config.HEADERS,t)}signin(t){return this._request("/signin","POST",this.config.HEADERS,t)}signOut(){return this._request("/users/","GET")}getUserData(){return this._request("/users/me","GET")}getArticles(){return this._request("/articles","GET")}createArticle(t){return this._request("/articles","POST",this.config.HEADERS,t)}removeArticle(t){return this._request("/articles/"+t,"DELETE",this.config.HEADERS)}_request(t,e,n,r){return fetch(this.config.BASE_URL+t,{headers:n,credentials:"include",method:e,body:r?JSON.stringify(r):void 0}).then(t=>t.ok&&t.headers.get("Content-Length")<1?t:t.ok&&t.headers.get("Content-Length")>1?t.json():Promise.reject(t.json())).then(t=>t).catch(t=>{throw t})}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t){this.header=t,this.buttonMain=this.header.querySelector(".main"),this.buttonSaved=this.header.querySelector(".saved"),this.buttonAuth=this.header.querySelector(".auth"),this.buttonUser=this.header.querySelector(".user"),this.buttonUserLogin=this.buttonUser.querySelector(".button__text"),this.render({isLoggedIn:!1})}render(t){this.props=t;const{isLoggedIn:e,userName:n}=this.props;return e?(this.buttonAuth.classList.remove("menu__button_on"),this.buttonSaved.classList.add("menu__button_on"),this.buttonUser.classList.add("menu__button_on"),this.buttonUserLogin.textContent=""+n,this.buttonUserLogin.textContent):(this.buttonAuth.classList.add("menu__button_on"),this.buttonSaved.classList.remove("menu__button_on"),this.buttonUser.classList.remove("menu__button_on"),this.buttonUserLogin.textContent)}setStyle(){window.matchMedia("(max-width: 400px)").matches&&(this.header.classList.toggle("header__box_theme_dark"),this.header.classList.toggle("header__box_theme_dark-popup"))}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(16);var r=n(9);class o extends r.a{constructor(t,e){super(),this.template=t,this.api=e}toggleCard(t){this.card=t.target.closest(".place-card");const e={keyword:this.card.querySelector(".place-card__info_category").textContent,title:this.card.querySelector(".place-card__title").textContent,text:this.card.querySelector(".place-card__text").textContent,date:this.card.querySelector(".place-card__date").textContent,source:this.card.querySelector(".place-card__source").textContent,link:this.card.querySelector(".place-card__preview").href,image:this.card.querySelector(".place-card__image").dataset.url};"/user-account.html"===window.location.pathname||"/news-explorer-frontend.github.io/user-account.html"===window.location.pathname?this.api.removeArticle(this.card.querySelector(".place-card__preview").dataset.id).then(()=>{this.layout.removeChild(this.card),window.location.reload()}).catch(t=>console.error(t)):(t.target.classList.contains("place-card__icon_bookmark_marked")?this.api.removeArticle(this.id).then(t=>t).catch(t=>console.error(t)):this.api.createArticle(e).then(t=>{this.id=t.data._id}).catch(t=>console.error(t)),t.target.classList.toggle("place-card__icon_bookmark_marked"))}renderIcon(){this.icon=this.template.content.querySelector(".icon_toggle"),this.ntf=this.template.content.querySelector(".place-card__icon_notification"),this.api.getUserData().then(()=>{this.ntf.style.display="none",this.icon.removeAttribute("disabled")}).catch(t=>{this.ntf.style.display="",this.icon.hasAttribute("disabled")||this.icon.setAttribute("disabled",!0),console.error(t)})}renderCard(t,e){this.article=t,this.layout=e;const{keyword:n,title:r,text:o,date:i,source:s,link:c,image:a}=this.article;this.content=this.template.content,"/index.html"!==window.location.pathname&&"/news-explorer-frontend.github.io/index.html"!==window.location.pathname||(this.content.querySelector(".place-card__icon_tag").style.display="none"),this.article._id&&(this.content.querySelector(".place-card__preview").dataset.id=this.article._id),this.content.querySelector(".place-card__preview").href=c,this.content.querySelector(".place-card__info_category").textContent=n,this.content.querySelector(".place-card__image").style=`background-image: url(${a})`,this.content.querySelector(".place-card__image").dataset.url=a,this.content.querySelector(".place-card__date").textContent=i,this.content.querySelector(".place-card__title").textContent=r,this.content.querySelector(".place-card__text").textContent=o,this.content.querySelector(".place-card__source").textContent=s,this.layout.appendChild(this.content.cloneNode(!0))}setEventHandlers(){this.icons=this.layout.querySelectorAll(".icon_toggle"),this.icons.forEach((t,e,n)=>{e>=n.length-3&&this._setHandlers([{element:n[e],event:"click",callBack:this.toggleCard}],"add")})}}},function(t,e,n){"use strict";e.a={BASE_URL:"https://api.photocollectionserver.xyz",HEADERS:{Accept:"application/json","Content-Type":"application/json"}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(89),n(16);var r=n(9),o=n(15);var i={CARDS:3};n(90);var s=t=>{const e=t.toString(),n=new Date(e.substr(0,4),e.substr(5,2)-1,e.substr(8,2)).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"});return`${n.substr(0,n.length-8)},${n.substr(-8,5)}`};const{REQUESR_ERROR:c,REQUESR_ERROR_MESSAGE:a,NO_RESULTS:u,NO_RESULTS_MESSAGE:l}=o.a,{CARDS:f}=i;class h extends r.a{constructor(t,e){super(),this.cardSection=t,this.cardElement=e,this.results=this.cardSection.querySelector(".places-list__response"),this.articles=this.results.querySelector(".places-list__articles"),this.showButton=this.results.querySelector(".places-list__button"),this.cardSection.classList.add("places-list_on"),this.renderError(!1),this.handlerElements=[{element:this.results.querySelector(".places-list__button"),event:"click",callBack:this.renderMore}]}renderResults(t){this.results.classList.add("places-list__response_on"),this.array=t,t.forEach((t,e,n)=>{this.index=e,"/user-account.html"===window.location.pathname||"/news-explorer-frontend.github.io/user-account.html"===window.location.pathname?this.cardElement.renderCard(n[e],this.articles):(n.length>f&&this.showMore(!0),e<f&&(this.cardElement.renderCard(n[e],this.articles),this.previousValue=3))}),this.cardElement.setEventHandlers()}renderMore(){for(let t=this.previousValue;t<this.previousValue+f;t+=1)this.array[t]?this.cardElement.renderCard(this.array[t],this.articles):this.showMore(!1);this.previousValue+=f,this.cardElement.setEventHandlers()}renderLoader(t){return this.spinner=this.cardSection.querySelector(".places-list__processing"),t?(this.articles.hasChildNodes()&&(this._setHandlers(this.handlerElements),this.articles.textContent="",this.results.classList.remove("places-list__response_on")),this.spinner.classList.add("places-list__processing_on")):this.spinner.classList.remove("places-list__processing_on")}renderError(t){return this.response=t,this.error=this.cardSection.querySelector(".places-list__error"),this.errorTitle=this.error.querySelector(".section__title"),this.errorSubtitle=this.error.querySelector(".section__paragraph"),this.response.failed?(this.errorTitle.textContent=c,this.errorSubtitle.textContent=a,this.error.classList.add("places-list__error_on")):this.response.noResult?(this.errorTitle.textContent=u,this.errorSubtitle.textContent=l,this.error.classList.add("places-list__error_on")):this.error.classList.remove("places-list__error_on")}showMore(t){return this.status=t,this.status?this.showButton.classList.contains("places-list__button_on")?this.showButton:(this._setHandlers(this.handlerElements,"add"),this.showButton.classList.add("places-list__button_on")):this.showButton.classList.contains("places-list__button_on")?this.showButton.classList.remove("places-list__button_on"):this.showButton}addCard(t,e){this.data=t,this.cardList=[],this.data.forEach(t=>{const n={keyword:e,title:t.title,text:t.description,date:s(t.publishedAt),source:t.source.name,link:t.url,image:t.urlToImage};this.cardList.push(n)}),this.renderResults(this.cardList)}}},function(t,e,n){"use strict";var r=n(3);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(21),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(31),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(13),o=n(33),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(8),o=n(59),i=n(64),s=n(3);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){t.exports=n(0)},function(t,e,n){var r=n(60),o=n(63).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(5),o=n(19),i=n(61).indexOf,s=n(34);t.exports=function(t,e){var n,c=o(t),a=0,u=[];for(n in c)!r(s,n)&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var r=n(19),o=n(22),i=n(62),s=function(t){return function(e,n,s){var c,a=r(e),u=o(a.length),l=i(s,u);if(t&&n!=n){for(;u>l;)if((c=a[l++])!=c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){var r=n(36),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(11);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(12).f,o=n(5),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r=n(8),o=n(12),i=n(1),s=n(7),c=i("species");t.exports=function(t){var e=r(t),n=o.f;s&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(3),o=n(71),i=n(22),s=n(23),c=n(72),a=n(74),u=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,l,f){var h,p,d,v,m,y,_,g=s(e,n,l?2:1);if(f)h=t;else{if("function"!=typeof(p=c(t)))throw TypeError("Target is not iterable");if(o(p)){for(d=0,v=i(t.length);v>d;d++)if((m=l?g(r(_=t[d])[0],_[1]):g(t[d]))&&m instanceof u)return m;return new u(!1)}h=p.call(t)}for(y=h.next;!(_=y.call(h)).done;)if("object"==typeof(m=a(h,g,_.value,l))&&m&&m instanceof u)return m;return new u(!1)}).stop=function(t){return new u(!0,t)}},function(t,e,n){var r=n(1),o=n(39),i=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||s[i]===t)}},function(t,e,n){var r=n(73),o=n(39),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(6),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,s={next:function(){return{done:!!i++}},return:function(){o=!0}};s[r]=function(){return this},Array.from(s,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(8);t.exports=r("document","documentElement")},function(t,e,n){var r,o,i,s,c,a,u,l,f=n(0),h=n(18).f,p=n(6),d=n(41).set,v=n(42),m=f.MutationObserver||f.WebKitMutationObserver,y=f.process,_=f.Promise,g="process"==p(y),S=h(f,"queueMicrotask"),E=S&&S.value;E||(r=function(){var t,e;for(g&&(t=y.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?s():i=void 0,t}}i=void 0,t&&t.enter()},g?s=function(){y.nextTick(r)}:m&&!v?(c=!0,a=document.createTextNode(""),new m(r).observe(a,{characterData:!0}),s=function(){a.data=c=!c}):_&&_.resolve?(u=_.resolve(void 0),l=u.then,s=function(){l.call(u,r)}):s=function(){d.call(f,r)}),t.exports=E||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,s()),i=e}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r,o,i=n(0),s=n(43),c=i.process,a=c&&c.versions,u=a&&a.v8;u?o=(r=u.split("."))[0]+r[1]:s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(17),o=n(20),i=n(38),s=n(8),c=n(40),a=n(44),u=n(11);r({target:"Promise",proto:!0,real:!0},{finally:function(t){var e=c(this,s("Promise")),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then((function(){return n}))}:t,n?function(n){return a(e,t()).then((function(){throw n}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||u(i.prototype,"finally",s("Promise").prototype.finally)},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(84).forEach,o=n(88);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(23),o=n(27),i=n(85),s=n(22),c=n(86),a=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,h=5==t||f;return function(p,d,v,m){for(var y,_,g=i(p),S=o(g),E=r(d,v,3),x=s(S.length),b=0,w=m||c,L=e?w(p,x):n?w(p,0):void 0;x>b;b++)if((h||b in S)&&(_=E(y=S[b],b,g),t))if(e)L[b]=_;else if(_)switch(t){case 3:return!0;case 5:return y;case 6:return b;case 2:a.call(L,y)}else if(l)return!1;return f?-1:u||l?l:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(87),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(6);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r=n(17),o=n(7),i=n(0),s=n(5),c=n(4),a=n(12).f,u=n(35),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(h,l);var p=h.prototype=l.prototype;p.constructor=h;var d=p.toString,v="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;a(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=d.call(t);if(s(f,t))return"";var n=v?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:h})}},function(t,e,n){"use strict";var r=n(11),o=n(3),i=n(2),s=n(51),c=RegExp.prototype,a=c.toString,u=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),l="toString"!=a.name;(u||l)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?s.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r,o,i=n(51),s=RegExp.prototype.exec,c=String.prototype.replace,a=s,u=(r=/a/,o=/b*/g,s.call(r,"a"),s.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(a=function(t){var e,n,r,o,a=this;return l&&(n=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),u&&(e=a.lastIndex),r=s.call(a,t),u&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),l&&r&&r.length>1&&c.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,e,n){"use strict";var r=n(93),o=n(3),i=n(25),s=n(94),c=n(95);r("search",1,(function(t,e,n){return[function(e){var n=i(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),a=String(this),u=i.lastIndex;s(u,0)||(i.lastIndex=0);var l=c(i,a);return s(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},function(t,e,n){"use strict";var r=n(10),o=n(11),i=n(2),s=n(1),c=n(91),a=s("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var h=s(t),p=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),d=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!p||!d||"replace"===t&&!u||"split"===t&&!l){var v=/./[h],m=n(h,""[t],(function(t,e,n,r,o){return e.exec===c?p&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=m[0],_=m[1];o(String.prototype,t,y),o(RegExp.prototype,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)}),f&&r(RegExp.prototype[h],"sham",!0)}}},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){var r=n(6),o=n(91);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);n(24),n(81),n(92),n(96);var r=n(46);const o=new Date,i=new Date(o.getTime()-6048e5);var s={TODAY_ISO:o.toISOString().substr(0,10),SEVEN_DAYS_ISO:i.toISOString().substr(0,10)};const{TODAY_ISO:c,SEVEN_DAYS_ISO:a}=s;var u=n(47),l=(n(16),n(9));class f extends l.a{constructor(t){super(),this.popup=t,this.contentElements=this.popup.querySelectorAll(".popup__content"),this.contentElement=this.popup.querySelector(".popup__content");for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.template=n,this.setContent()}setContent(){for(let t=0;t<this.template.length;t++)this.contentElements.forEach(()=>{document.adoptNode(this.template[t].content,!0),this.contentElements[t].appendChild(this.template[t].content)});this.handlerElements=[{element:this.popup,event:"click",callBack:this.close},{element:window,event:"keydown",callBack:this.close},{element:this.popup.querySelector(".switcher_sign-in"),event:"click",callBack:this.switchContent},{element:this.popup.querySelector(".switcher_sign-up"),event:"click",callBack:this.switchContent},{element:this.popup.querySelector(".switcher_signed"),event:"click",callBack:this.switchContent}],this._setHandlers(this.handlerElements,"add")}clearContent(t){this.content=t,t.classList.remove("content_is-opened")}switchContent(t){this.currentContent=t.target.closest(".popup__content"),this.clearContent(this.currentContent),this.currentContent.classList.contains("content__sign-in")?this.popup.querySelector(".content__sign-up").classList.add("content_is-opened"):this.popup.querySelector(".content__sign-in").classList.add("content_is-opened")}open(t){return this.popup.classList.add("popup_is-opened"),t?(this.contetnSigned=t,this.contetnSigned.classList.add("content_is-opened")):this.contentElement.classList.add("content_is-opened")}close(t){("Escape"===t.key||t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&(this._setHandlers(this.handlerElements),this.clearContent(this.popup.querySelector(".content_is-opened")),this.popup.classList.remove("popup_is-opened"))}}var h=n(15);const{INVALID_MAIL_FORMAT:p,REQUIRED_FIELD:d,INVALID_VALUES_RANGE:v,INVALID_MINIMUM_VALUE:m}=h.a;class y extends l.a{constructor(t,e){super(),this.api=e,this.form=t,this.button=t.querySelector(".button"),this.handlerElements=[{element:this.form,event:"input",callBack:this._validateForm}]}setEventHandlers(t){t&&this.handlerElements.unshift(t),this._setHandlers(this.handlerElements,"add")}setServerError(t){return this.serverError=this.form.querySelector(".server_error"),t?(this.serverError.textContent=""+t,this.serverError.textContent):(this._clear(),this.serverError.textContent="",this.serverError.textContent)}_validateInputElement(t){return this.inputElement=t.target,this.errorElement=t.target.nextElementSibling.querySelector(".popup__text"),this.inputElement.validity.typeMismatch?(this.errorElement.textContent=p,this.errorElement.textContent):this.inputElement.validity.valueMissing?(this.errorElement.textContent=d,this.errorElement.textContent):this.inputElement.validity.tooLong||this.inputElement.validity.tooShort?"password"===this.inputElement.name?(this.errorElement.textContent=m,this.errorElement.textContent):(this.errorElement.textContent=v,this.errorElement.textContent):(this.errorElement.textContent="",this.errorElement.textContent)}_validateForm(t){this._validateInputElement(t),this.button.disabled=!this.form.checkValidity()}_clear(){this.form.reset(),this.button.disabled=!0}}var _=n(50),g=n(48),S=n(49);var E={BASE_URL:"https://nomoreparties.co/news/v2/everything",HEADERS:{authorization:"eecbf372cd5c4e4ea31eea34f7b9485e","Content-Type":"application/json"}};const{REQUIRED_KEYWORD:x}=h.a,b=document.querySelector(".header__box"),w=document.querySelector(".popup"),L=document.querySelector(".places-list"),C=document.querySelector(".auth"),R=document.querySelector(".user"),q=document.querySelector(".template__popup_sign-in"),A=document.querySelector(".template__popup_sign-up"),O=document.querySelector(".template__popup_signed"),j=document.querySelector(".template__card"),I=new r.a(S.a),T=new class{constructor(t){this.config=t,this._request.bind(this)}getNews(t){return this._request(`?q=${t}&apiKey=${this.config.HEADERS.authorization}&from=${a}&to=${c}&pageSize=100`,this.config.HEADERS)}_request(t,e){return fetch(this.config.BASE_URL+t,{headers:e}).then(t=>t.ok?t.json():Promise.reject(t.status)).then(t=>t).catch(t=>{throw t})}}(E),k=new f(w,q,A,O),M=new u.a(b),D=new g.a(j,I),P=document.forms.search,U=document.forms.signIn,N=document.forms.signUp,H=new y(U,I),B=new y(N,I),V=new y(P,T),F=()=>{I.getUserData().then(t=>{M.render({isLoggedIn:!0,userName:t.data.name})}).catch(t=>console.error(t))};B.setEventHandlers({element:N,event:"submit",callBack:t=>{t.preventDefault();const e={email:N.elements.email.value,name:N.elements.login.value,password:N.elements.password.value};I.signup(e).then(()=>(B.setServerError(),k.clearContent(document.querySelector(".content__sign-up")),k.open(document.querySelector(".content__signed")))).catch(t=>{console.error(t),t.then(t=>B.setServerError(t.message))})}}),H.setEventHandlers({element:U,event:"submit",callBack:()=>{const t={email:U.elements.email.value,password:U.elements.password.value};I.signin(t).then(()=>(H.setServerError(),w.classList.remove("popup_is-opened"))).then(()=>F(),D.renderIcon()).catch(t=>{t.then(t=>H.setServerError(t.message)),console.error(t)})}}),V.setEventHandlers({element:P,event:"submit",callBack:t=>{t.preventDefault();const e={keyword:P.elements.request.value};if(!e.keyword)return V.setServerError(x);const n=new _.a(L,D);return n.renderLoader(!0),T.getNews(e.keyword).then(t=>0===t.totalResults?n.renderError({noResult:!0}):(n.showMore(!1),n.addCard(t.articles,e.keyword))).catch(t=>{"Failed to fetch"===t.message&&n.renderError({failed:!0}),console.error(t)}).finally(()=>n.renderLoader())}});F(),M.setStyle(),D.renderIcon(),C.addEventListener("click",()=>{k.open()}),R.addEventListener("click",t=>{t.preventDefault(),I.signOut().catch(t=>{M.render({isLoggedIn:!1}),D.renderIcon(),console.error(t)})})}]);