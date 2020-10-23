(()=>{"use strict";var e,n,t,i={426:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"#wrapper {\n  background-color: #000;\n}\n#menuWrapper,\n#logoWrapper {\n  display: inline-block;\n  margin: 0 10px;\n  color: #fff;\n}\n.menuBtn {\n  display: inline-block;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.menuLink {\n  text-decoration: none;\n  transition: 0.2s;\n  color: #fff;\n}\n.menuLink:hover {\n  text-decoration: underline;\n}\n",""]);const o=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(r[l]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);i&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},379:(e,n,t)=>{var i,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function l(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},i=[],r=0;r<e.length;r++){var a=e[r],u=n.base?a[0]+n.base:a[0],c=t[u]||0,d="".concat(u," ").concat(c);t[u]=c+1;var s=l(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(o[s].references++,o[s].updater(p)):o.push({identifier:d,updater:h(p,n),references:1}),i.push(d)}return i}function u(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var l=r(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function s(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var o=document.createTextNode(r),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(o,l[n]):e.appendChild(o)}}function p(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function h(e,n){var t,i,r;if(n.singleton){var o=m++;t=f||(f=u(n)),i=s.bind(null,t,o,!1),r=s.bind(null,t,o,!0)}else t=u(n),i=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=l(t[i]);o[r].references--}for(var u=a(e,n),c=0;c<t.length;c++){var d=l(t[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=u}}}}},r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={id:e,exports:{}};return i[e](n,n.exports,o),n.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=o(379),n=o.n(e),t=o(426),n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,function(e){const n=document.createElement("div");n.setAttribute("id","wrapper"),e.appendChild(n);const t=document.createElement("div");t.setAttribute("id","logoWrapper"),n.appendChild(t);const i=document.createElement("div","menuWrapper");i.setAttribute("id","menuWrapper"),n.appendChild(i)}(document.getElementById("content")),function(e,n,t){{const t=document.createElement("span");t.setAttribute("id","websiteTitle"),t.textContent=n,e.appendChild(t)}}(logoWrapper,"Placeholder Title"),function(e,n){for(let t=0;t<n.length;t++){const i=document.createElement("div");i.setAttribute("class","menuBtn"),i.setAttribute("id",n[t].id);const r=document.createElement("a");r.setAttribute("class","menuLink"),r.textContent=n[t].title,r.href=n[t].url,i.appendChild(r),e.appendChild(i)}}(menuWrapper,[{title:"link 1",url:"#",id:"menuLink1"},{title:"link 2",url:"#",id:"menuLink2"},{title:"link 3",url:"#",id:"menuLink3"},{title:"link 4",url:"#",id:"menuLink4"},{title:"link 5",url:"#",id:"menuLink5"},{title:"link 6",url:"#",id:"menuLink6"},{title:"link 7",url:"#",id:"menuLink7"},{title:"link 8",url:"#",id:"menuLink8"},{title:"link 9",url:"#",id:"menuLink9"},{title:"link 10",url:"#",id:"menuLink10"},{title:"link 11",url:"#",id:"menuLink11"},{title:"link 12",url:"#",id:"menuLink12"},{title:"link 13",url:"#",id:"menuLink13"},{title:"link 14",url:"#",id:"menuLink14"},{title:"link 15",url:"#",id:"menuLink15"},{title:"link 16",url:"#",id:"menuLink16"},{title:"link 17",url:"#",id:"menuLink17"},{title:"link 18",url:"#",id:"menuLink18"},{title:"link 19",url:"#",id:"menuLink19"},{title:"link 20",url:"#",id:"menuLink20"}])})();