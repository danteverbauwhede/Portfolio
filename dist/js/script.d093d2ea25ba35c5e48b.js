!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e){},function(t,e,n){"use strict";var r=[],o=function(t){var e=document.querySelector(".works");t.length>0&&t.forEach(function(t){t.forEach(function(t){var n=document.createElement("article");n.classList="works-article";var r=document.createElement("header");r.textContent=t[0],n.append(r);var o=document.createElement("ul");o.classList="works-lijst";for(var c in t[1])if(t[1].hasOwnProperty(c)){var i=document.createElement("li");i.innerHTML='<a class="work" href="'+t[1][c].link+'"><img class="works-list-pic" src="assets/'+t[1][c].pic+'" alt="" width="250" height="250" /></a>',i.classList="works-list-item",o.append(i)}n.append(o),e.append(n)})})},c=function(t){var e=Object.entries(t);r.push(e),o(r)},i=function(t){var e=document.querySelector(".intro-titles"),n=document.querySelector(".intro");if(e){var r=t.path[1].pageYOffset/2,o=(80+r)/10,c=80-r/10;n.style.backgroundPosition=c+"%",e.style.left=o+"vw"}};!function(){fetch("./data/portfolioShowcase.json").then(function(t){return t.json()}).then(c),window.addEventListener("scroll",i)}()}]);