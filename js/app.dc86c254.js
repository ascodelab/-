(function(e){function t(t){for(var o,r,u=t[0],l=t[1],c=t[2],f=0,s=[];f<u.length;f++)r=u[f],a[r]&&s.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(s.length)s.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"598619fc","chunk-9da60550":"ba7d1391"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-9da60550":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-9da60550":"e7bee8e9"}[e]+".css",r=l.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===r))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],c=u.getAttribute("data-href");if(c===o||c===r)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.request=o,n(a)},s.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(s)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=i);var c,f=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e),c=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:s})},12e4);s.onerror=s.onload=c,f.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/-/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n("2877"),u={},l=Object(i["a"])(u,r,a,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,f=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Hello App!")]),n("p",[n("router-link",{attrs:{to:"/"}},[e._v("Go to Foo")]),n("router-link",{attrs:{to:"/about"}},[e._v("Go to Bar")])],1),n("router-view")],1)},d=[],p={},m=Object(i["a"])(p,s,d,!1,null,null,null);m.options.__file="Home.vue";var h=m.exports;o["a"].use(f["a"]);var v=new f["a"]({routes:[{path:"/index",name:"index",component:h},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/",name:"home",component:function(){return n.e("chunk-9da60550").then(n.bind(null,"d504"))}}]}),y=n("2f62"),g={people:[],sayHelloModal:!1,sayHelloModalEffect:!1},b=(n("7f7f"),{ageText:function(e){var t=e.people.map(function(e){return{name:e.name,age:e.age+" years old!"}});return t}}),S=(n("ac6a"),{plus:function(e,t){e.people.forEach(function(e){e.age+=t})},minus:function(e,t){e.people.forEach(function(e){e.age-=t})},updateData:function(e,t){e.people=t},modalSayHelloShow:function(e){e.sayHelloModalEffect=!1,e.sayHelloModal=!0},modalSayHelloHideEffect:function(e){e.sayHelloModalEffect=!0},modalSayHelloHide:function(e){e.sayHelloModal=!1}}),H=n("c23d"),w=n.n(H),E=(n("f784"),{apiKey:"AIzaSyADLS70M_B1HSP4yXIvjvvJsdAX5n2tNB4",authDomain:"profile-45158.firebaseapp.com",databaseURL:"https://profile-45158.firebaseio.com",projectId:"profile-45158",storageBucket:"profile-45158.appspot.com",messagingSenderId:"226850295410"}),_=w.a.initializeApp(E),k=_.firestore(),j={plus:function(e,t){setTimeout(function(){e.commit("plus",t)},1e3)},minus:function(e,t){setTimeout(function(){e.commit("minus",t)},1e3)},initData:function(e){var t=[];k.collection("emails").get().then(function(n){n.docs.forEach(function(e){t.push(e.data())}),e.commit("updateData",t)})},sendSayHello:function(e,t){k.collection("emails").add(t).then(function(e){return e.id})},subscribe:function(e,t){k.collection("subscribers").add(t).then(function(e){return e.id})},modalSayHelloShow:function(e){setTimeout(function(){e.commit("modalSayHelloShow")},1)},modalSayHelloHide:function(e){e.commit("modalSayHelloHideEffect"),setTimeout(function(){e.commit("modalSayHelloHide")},2e3)}};o["a"].use(y["a"]);var T=new y["a"].Store({strict:!0,state:g,getters:b,mutations:S,actions:j}),x=T,M=n("f13c"),O=n.n(M),A=n("f5af"),P=n.n(A);n("e829");P.a.init({offset:200,duration:600,easing:"ease-in-sine",delay:100}),o["a"].use(O.a),o["a"].config.productionTip=!1;new o["a"]({router:v,store:x,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.dc86c254.js.map