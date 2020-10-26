(()=>{"use strict";var e,n,t,i={426:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"#wrapper {\n  background-color: #000;\n  display: flex;\n  flex-wrap: nowrap;\n  position: relative;\n}\n#menuWrapper,\n#logoWrapper {\n  display: inline-block;\n  margin: 0 10px;\n  color: #fff;\n}\n#logoWrapper {\n  padding: 10px 20px;\n}\n#websiteTitle {\n  white-space: nowrap;\n  font-size: 22px;\n  color: #fff;\n  text-decoration: none;\n}\n#menuWrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  position: absolute;\n  right: 100px;\n}\n.menuBtn {\n  display: inline-block;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.menuLink {\n  text-decoration: none;\n  transition: 0.2s;\n  color: #fff;\n}\n.menuLink:hover {\n  text-decoration: underline;\n}\n#moreBtn {\n  position: absolute;\n  top: 0;\n  right: -100px;\n  text-align: center;\n}\n#moreWrapper {\n  padding: 14px 25px;\n}\n#moreWrapper a:hover {\n  text-decoration: underline;\n}\n.more {\n  display: none;\n  background-color: #000;\n  transition: opacity 0.5s cubic-bezier(0.42, 0, 0.58, 1) 0.1s;\n}\n.more .menuLink {\n  padding: 5px 15px;\n  display: block;\n}\n#menuBtnWrapper {\n  display: none;\n}\n",""]);const o=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(r[l]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);i&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},379:(e,n,t)=>{var i,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function l(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},i=[],r=0;r<e.length;r++){var a=e[r],u=n.base?a[0]+n.base:a[0],d=t[u]||0,c="".concat(u," ").concat(d);t[u]=d+1;var s=l(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(o[s].references++,o[s].updater(p)):o.push({identifier:c,updater:h(p,n),references:1}),i.push(c)}return i}function u(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var l=r(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}return n}var d,c=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function s(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=c(n,r);else{var o=document.createTextNode(r),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(o,l[n]):e.appendChild(o)}}function p(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,f=0;function h(e,n){var t,i,r;if(n.singleton){var o=f++;t=m||(m=u(n)),i=s.bind(null,t,o,!1),r=s.bind(null,t,o,!0)}else t=u(n),i=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=l(t[i]);o[r].references--}for(var u=a(e,n),d=0;d<t.length;d++){var c=l(t[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}t=u}}}}},r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={id:e,exports:{}};return i[e](n,n.exports,o),n.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=o(379),n=o.n(e),t=o(426),n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,function(e){const n=document.createElement("div");n.setAttribute("id","wrapper"),e.appendChild(n);const t=document.createElement("div");t.setAttribute("id","logoWrapper"),n.appendChild(t);const i=document.createElement("div","menuWrapper");i.setAttribute("id","menuWrapper"),n.appendChild(i)}(document.getElementById("content")),function(e,n,t){if(t.img){const n=document.createElement("a");n.href=t.link,n.setAttribute("id","websiteLogo");const i=document.createElement("img");return i.src=t.img,n.appendChild(i),void e.appendChild(n)}if(n){const t=document.createElement("a");t.setAttribute("id","websiteTitle"),t.textContent=n.title,t.href=n.link,e.appendChild(t)}}(logoWrapper,{title:"Placeholder Title",link:"#"},{img:"",link:"#"}),function(e,n){let t=document.createElement("div"),i=document.createElement("div");!function(e){let n=document.createElement("div");n.setAttribute("id","menuBtnWrapper");let t=document.createElement("a");t.textContent="Menu",n.appendChild(t),e.appendChild(n),e.setAttribute("id","menu"),e.style.cursor="pointer"}(i),function(e){let n=document.createElement("div");n.setAttribute("id","moreWrapper");let t=document.createElement("a");t.innerHTML="More &#8250;",function(e){e.addEventListener("click",(function(){let e=Array.prototype.slice.call(document.getElementsByClassName("menuOn")),n=Array.prototype.slice.call(document.getElementsByClassName("menuOff"));for(let e=0;e<n.length;e++)n[e].style.display="block",n[e].setAttribute("class","more menuOn");for(let n=0;n<e.length;n++)e[n].style.display="none",e[n].setAttribute("class","more menuOff")}))}(t),n.appendChild(t),e.appendChild(n),e.setAttribute("id","moreBtn"),e.style.cursor="pointer"}(t);for(let e=0;e<n.length;e++){const r=document.createElement("div");r.setAttribute("class","menuBtn"),r.setAttribute("id",n[e].id);const o=document.createElement("a");o.setAttribute("class","menuLink"),o.textContent=n[e].title,o.href=n[e].url,r.appendChild(o),e>=5?(r.setAttribute("class","more menuOff"),t.appendChild(r)):i.appendChild(r)}e.prepend(i),i.appendChild(t)}(menuWrapper,[{title:"link 1",url:"#",id:"menuLink1"},{title:"link 2",url:"#",id:"menuLink2"},{title:"link 3",url:"#",id:"menuLink3"},{title:"link 4",url:"#",id:"menuLink4"},{title:"link 5",url:"#",id:"menuLink5"},{title:"link 6",url:"#",id:"menuLink6"},{title:"link 7",url:"#",id:"menuLink7"},{title:"link 8",url:"#",id:"menuLink8"},{title:"link 9",url:"#",id:"menuLink9"},{title:"link 10",url:"#",id:"menuLink10"},{title:"link 11",url:"#",id:"menuLink11"},{title:"link 12",url:"#",id:"menuLink12"},{title:"link 13",url:"#",id:"menuLink13"},{title:"link 14",url:"#",id:"menuLink14"},{title:"link 15",url:"#",id:"menuLink15"},{title:"link 16",url:"#",id:"menuLink16"},{title:"link 17",url:"#",id:"menuLink17"},{title:"link 18",url:"#",id:"menuLink18"},{title:"link 19",url:"#",id:"menuLink19"},{title:"link 20",url:"#",id:"menuLink20"}])})();