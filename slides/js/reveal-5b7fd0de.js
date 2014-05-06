/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
 */
var Reveal=function(){"use strict";function e(e){if(t(),!on.transforms2d&&!on.transforms3d)return void document.body.setAttribute("class","no-transforms");window.addEventListener("load",A,!1);var r=Reveal.getQueryHash();"undefined"!=typeof r.dependencies&&delete r.dependencies,u(Jt,e),u(Jt,r),v(),n()}function t(){on.transforms3d="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,on.transforms2d="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,on.requestAnimationFrameMethod=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,on.requestAnimationFrame="function"==typeof on.requestAnimationFrameMethod,on.canvas=!!document.createElement("canvas").getContext,Wt=navigator.userAgent.match(/(iphone|ipod|android)/gi)}function n(){function e(){i.length&&head.js.apply(null,i),r()}function t(t){head.ready(t.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],function(){"function"==typeof t.callback&&t.callback.apply(this),0===--o&&e()})}for(var n=[],i=[],o=0,a=0,s=Jt.dependencies.length;s>a;a++){var l=Jt.dependencies[a];(!l.condition||l.condition())&&(l.async?i.push(l.src):n.push(l.src),t(l))}n.length?(o=n.length,head.js.apply(null,n)):e()}function r(){i(),B(),s(),nt(),K(!0),setTimeout(function(){rn.slides.classList.remove("no-transition"),en=!0,y("ready",{indexh:Bt,indexv:Ht,currentSlide:$t})},1)}function i(){rn.theme=document.querySelector("#theme"),rn.wrapper=document.querySelector(".reveal"),rn.slides=document.querySelector(".reveal .slides"),rn.slides.classList.add("no-transition"),rn.background=o(rn.wrapper,"div","backgrounds",null),rn.progress=o(rn.wrapper,"div","progress","<span></span>"),rn.progressbar=rn.progress.querySelector("span"),o(rn.wrapper,"aside","controls",'<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),rn.slideNumber=o(rn.wrapper,"div","slide-number",""),o(rn.wrapper,"div","state-background",null),o(rn.wrapper,"div","pause-overlay",null),rn.controls=document.querySelector(".reveal .controls"),rn.controlsLeft=d(document.querySelectorAll(".navigate-left")),rn.controlsRight=d(document.querySelectorAll(".navigate-right")),rn.controlsUp=d(document.querySelectorAll(".navigate-up")),rn.controlsDown=d(document.querySelectorAll(".navigate-down")),rn.controlsPrev=d(document.querySelectorAll(".navigate-prev")),rn.controlsNext=d(document.querySelectorAll(".navigate-next"))}function o(e,t,n,r){var i=e.querySelector("."+n);return i||(i=document.createElement(t),i.classList.add(n),null!==r&&(i.innerHTML=r),e.appendChild(i)),i}function a(){function e(e,t){var n={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundColor:e.getAttribute("data-background-color"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition")},r=document.createElement("div");return r.className="slide-background",n.background&&(/^(http|file|\/\/)/gi.test(n.background)||/\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(n.background)?r.style.backgroundImage="url("+n.background+")":r.style.background=n.background),(n.background||n.backgroundColor||n.backgroundImage)&&r.setAttribute("data-background-hash",n.background+n.backgroundSize+n.backgroundImage+n.backgroundColor+n.backgroundRepeat+n.backgroundPosition+n.backgroundTransition),n.backgroundSize&&(r.style.backgroundSize=n.backgroundSize),n.backgroundImage&&(r.style.backgroundImage='url("'+n.backgroundImage+'")'),n.backgroundColor&&(r.style.backgroundColor=n.backgroundColor),n.backgroundRepeat&&(r.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(r.style.backgroundPosition=n.backgroundPosition),n.backgroundTransition&&r.setAttribute("data-background-transition",n.backgroundTransition),t.appendChild(r),r}g()&&document.body.classList.add("print-pdf"),rn.background.innerHTML="",rn.background.classList.add("no-transition"),d(document.querySelectorAll(Qt)).forEach(function(t){var n;n=g()?e(t,t):e(t,rn.background),d(t.querySelectorAll("section")).forEach(function(t){g()?e(t,t):e(t,n)})}),Jt.parallaxBackgroundImage?(rn.background.style.backgroundImage='url("'+Jt.parallaxBackgroundImage+'")',rn.background.style.backgroundSize=Jt.parallaxBackgroundSize,setTimeout(function(){rn.wrapper.classList.add("has-parallax-background")},1)):(rn.background.style.backgroundImage="",rn.wrapper.classList.remove("has-parallax-background"))}function s(e){var t=document.querySelectorAll(Kt).length;if(rn.wrapper.classList.remove(Jt.transition),"object"==typeof e&&u(Jt,e),on.transforms3d===!1&&(Jt.transition="linear"),rn.wrapper.classList.add(Jt.transition),rn.wrapper.setAttribute("data-transition-speed",Jt.transitionSpeed),rn.wrapper.setAttribute("data-background-transition",Jt.backgroundTransition),rn.controls.style.display=Jt.controls?"block":"none",rn.progress.style.display=Jt.progress?"block":"none",Jt.rtl?rn.wrapper.classList.add("rtl"):rn.wrapper.classList.remove("rtl"),Jt.center?rn.wrapper.classList.add("center"):rn.wrapper.classList.remove("center"),Jt.mouseWheel?(document.addEventListener("DOMMouseScroll",Ct,!1),document.addEventListener("mousewheel",Ct,!1)):(document.removeEventListener("DOMMouseScroll",Ct,!1),document.removeEventListener("mousewheel",Ct,!1)),Jt.rollingLinks?w():x(),Jt.previewLinks?E():(N(),E("[data-preview-link]")),t>1&&Jt.autoSlide&&Jt.autoSlideStoppable&&on.canvas&&on.requestAnimationFrame?(Zt=new Ut(rn.wrapper,function(){return Math.min(Math.max((Date.now()-fn)/dn,0),1)}),Zt.on("click",zt),hn=!1):Zt&&(Zt.destroy(),Zt=null),Jt.theme&&rn.theme){var n=rn.theme.getAttribute("href"),r=/[^\/]*?(?=\.css)/,i=n.match(r)[0];Jt.theme!==i&&(n=n.replace(r,Jt.theme),rn.theme.setAttribute("href",n))}U()}function l(){if(un=!0,window.addEventListener("hashchange",Dt,!1),window.addEventListener("resize",jt,!1),Jt.touch&&(rn.wrapper.addEventListener("touchstart",xt,!1),rn.wrapper.addEventListener("touchmove",Et,!1),rn.wrapper.addEventListener("touchend",Nt,!1),window.navigator.msPointerEnabled&&(rn.wrapper.addEventListener("MSPointerDown",kt,!1),rn.wrapper.addEventListener("MSPointerMove",St,!1),rn.wrapper.addEventListener("MSPointerUp",At,!1))),Jt.keyboard&&document.addEventListener("keydown",wt,!1),Jt.progress&&rn.progress&&rn.progress.addEventListener("click",Lt,!1),Jt.focusBodyOnPageVisiblityChange){var e;"hidden"in document?e="visibilitychange":"msHidden"in document?e="msvisibilitychange":"webkitHidden"in document&&(e="webkitvisibilitychange"),e&&document.addEventListener(e,Ot,!1)}["touchstart","click"].forEach(function(e){rn.controlsLeft.forEach(function(t){t.addEventListener(e,Tt,!1)}),rn.controlsRight.forEach(function(t){t.addEventListener(e,_t,!1)}),rn.controlsUp.forEach(function(t){t.addEventListener(e,Mt,!1)}),rn.controlsDown.forEach(function(t){t.addEventListener(e,qt,!1)}),rn.controlsPrev.forEach(function(t){t.addEventListener(e,Rt,!1)}),rn.controlsNext.forEach(function(t){t.addEventListener(e,It,!1)})})}function c(){un=!1,document.removeEventListener("keydown",wt,!1),window.removeEventListener("hashchange",Dt,!1),window.removeEventListener("resize",jt,!1),rn.wrapper.removeEventListener("touchstart",xt,!1),rn.wrapper.removeEventListener("touchmove",Et,!1),rn.wrapper.removeEventListener("touchend",Nt,!1),window.navigator.msPointerEnabled&&(rn.wrapper.removeEventListener("MSPointerDown",kt,!1),rn.wrapper.removeEventListener("MSPointerMove",St,!1),rn.wrapper.removeEventListener("MSPointerUp",At,!1)),Jt.progress&&rn.progress&&rn.progress.removeEventListener("click",Lt,!1),["touchstart","click"].forEach(function(e){rn.controlsLeft.forEach(function(t){t.removeEventListener(e,Tt,!1)}),rn.controlsRight.forEach(function(t){t.removeEventListener(e,_t,!1)}),rn.controlsUp.forEach(function(t){t.removeEventListener(e,Mt,!1)}),rn.controlsDown.forEach(function(t){t.removeEventListener(e,qt,!1)}),rn.controlsPrev.forEach(function(t){t.removeEventListener(e,Rt,!1)}),rn.controlsNext.forEach(function(t){t.removeEventListener(e,It,!1)})})}function u(e,t){for(var n in t)e[n]=t[n]}function d(e){return Array.prototype.slice.call(e)}function p(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function f(e,t){e.style.WebkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function h(e){var t=0;if(e){var n=0;d(e.childNodes).forEach(function(e){"number"==typeof e.offsetTop&&e.style&&("absolute"===e.style.position&&(n+=1),t=Math.max(t,e.offsetTop+e.offsetHeight))}),0===n&&(t=e.offsetHeight)}return t}function m(e,t){if(t=t||0,e){var n=e.parentNode,r=n.childNodes;d(r).forEach(function(n){if("number"==typeof n.offsetHeight&&n!==e){var r=window.getComputedStyle(n),i=parseInt(r.marginTop,10),o=parseInt(r.marginBottom,10);t-=n.offsetHeight+i+o}});var i=window.getComputedStyle(e);t-=parseInt(i.marginTop,10)+parseInt(i.marginBottom,10)}return t}function g(){return/print-pdf/gi.test(window.location.search)}function v(){Jt.hideAddressBar&&Wt&&(window.addEventListener("load",b,!1),window.addEventListener("orientationchange",b,!1))}function b(){setTimeout(function(){window.scrollTo(0,1)},10)}function y(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),u(n,t),rn.wrapper.dispatchEvent(n)}function w(){if(on.transforms3d&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(Kt+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var i=document.createElement("span");i.setAttribute("data-title",r.text),i.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(i)}}}function x(){for(var e=document.querySelectorAll(Kt+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],i=r.querySelector("span");i&&(r.classList.remove("roll"),r.innerHTML=i.innerHTML)}}function E(e){var t=d(document.querySelectorAll(e?e:"a"));t.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",Ft,!1)})}function N(){var e=d(document.querySelectorAll("a"));e.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",Ft,!1)})}function k(e){S(),rn.preview=document.createElement("div"),rn.preview.classList.add("preview-link-overlay"),rn.wrapper.appendChild(rn.preview),rn.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+e+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+e+'"></iframe>',"</div>"].join(""),rn.preview.querySelector("iframe").addEventListener("load",function(){rn.preview.classList.add("loaded")},!1),rn.preview.querySelector(".close").addEventListener("click",function(e){S(),e.preventDefault()},!1),rn.preview.querySelector(".external").addEventListener("click",function(){S()},!1),setTimeout(function(){rn.preview.classList.add("visible")},1)}function S(){rn.preview&&(rn.preview.setAttribute("src",""),rn.preview.parentNode.removeChild(rn.preview),rn.preview=null)}function A(){if(rn.wrapper&&!g()){var e=rn.wrapper.offsetWidth,t=rn.wrapper.offsetHeight;e-=t*Jt.margin,t-=t*Jt.margin;var n=Jt.width,r=Jt.height,i=20;C(Jt.width,Jt.height,i),"string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),rn.slides.style.width=n+"px",rn.slides.style.height=r+"px",nn=Math.min(e/n,t/r),nn=Math.max(nn,Jt.minScale),nn=Math.min(nn,Jt.maxScale),"undefined"==typeof rn.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?f(rn.slides,"translate(-50%, -50%) scale("+nn+") translate(50%, 50%)"):rn.slides.style.zoom=nn;for(var o=d(document.querySelectorAll(Kt)),a=0,s=o.length;s>a;a++){var l=o[a];"none"!==l.style.display&&(l.style.top=Jt.center||l.classList.contains("center")?l.classList.contains("stack")?0:Math.max(-(h(l)/2)-i,-r/2)+"px":"")}V(),Q()}}function C(e,t,n){d(rn.slides.querySelectorAll("section > .stretch")).forEach(function(r){var i=m(r,t-2*n);if(/(img|video)/gi.test(r.nodeName)){var o=r.naturalWidth||r.videoWidth,a=r.naturalHeight||r.videoHeight,s=Math.min(e/o,i/a);r.style.width=o*s+"px",r.style.height=a*s+"px"}else r.style.width=e+"px",r.style.height=i+"px"})}function L(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function T(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){var t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function _(){if(Jt.overview){ut();var e=rn.wrapper.classList.contains("overview"),t=window.innerWidth<400?1e3:2500;rn.wrapper.classList.add("overview"),rn.wrapper.classList.remove("overview-deactivating"),clearTimeout(ln),clearTimeout(cn),ln=setTimeout(function(){for(var n=document.querySelectorAll(Qt),r=0,i=n.length;i>r;r++){var o=n[r],a=Jt.rtl?-105:105;if(o.setAttribute("data-index-h",r),f(o,"translateZ(-"+t+"px) translate("+(r-Bt)*a+"%, 0%)"),o.classList.contains("stack"))for(var s=o.querySelectorAll("section"),l=0,c=s.length;c>l;l++){var u=r===Bt?Ht:T(o),d=s[l];d.setAttribute("data-index-h",r),d.setAttribute("data-index-v",l),f(d,"translate(0%, "+105*(l-u)+"%)"),d.addEventListener("click",Pt,!0)}else o.addEventListener("click",Pt,!0)}$(),A(),e||y("overviewshown",{indexh:Bt,indexv:Ht,currentSlide:$t})},10)}}function M(){Jt.overview&&(clearTimeout(ln),clearTimeout(cn),rn.wrapper.classList.remove("overview"),rn.wrapper.classList.add("overview-deactivating"),cn=setTimeout(function(){rn.wrapper.classList.remove("overview-deactivating")},1),d(document.querySelectorAll(Kt)).forEach(function(e){f(e,""),e.removeEventListener("click",Pt,!0)}),z(Bt,Ht),ct(),y("overviewhidden",{indexh:Bt,indexv:Ht,currentSlide:$t}))}function q(e){"boolean"==typeof e?e?_():M():R()?M():_()}function R(){return rn.wrapper.classList.contains("overview")}function I(e){return e=e?e:$t,e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function D(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function j(){var e=rn.wrapper.classList.contains("paused");ut(),rn.wrapper.classList.add("paused"),e===!1&&y("paused")}function O(){var e=rn.wrapper.classList.contains("paused");rn.wrapper.classList.remove("paused"),ct(),e&&y("resumed")}function P(){F()?O():j()}function F(){return rn.wrapper.classList.contains("paused")}function z(e,t,n,r){Gt=$t;var i=document.querySelectorAll(Qt);void 0===t&&(t=T(i[e])),Gt&&Gt.parentNode&&Gt.parentNode.classList.contains("stack")&&L(Gt.parentNode,Ht);var o=tn.concat();tn.length=0;var a=Bt||0,s=Ht||0;Bt=G(Qt,void 0===e?Bt:e),Ht=G(Xt,void 0===t?Ht:t),$(),A();e:for(var l=0,c=tn.length;c>l;l++){for(var u=0;u<o.length;u++)if(o[u]===tn[l]){o.splice(u,1);continue e}document.documentElement.classList.add(tn[l]),y(tn[l])}for(;o.length;)document.documentElement.classList.remove(o.pop());R()&&_();var p=i[Bt],f=p.querySelectorAll("section");$t=f[Ht]||p,"undefined"!=typeof n&&at(n);var h=Bt!==a||Ht!==s;h?y("slidechanged",{indexh:Bt,indexv:Ht,previousSlide:Gt,currentSlide:$t,origin:r}):Gt=null,Gt&&(Gt.classList.remove("present"),document.querySelector(Yt).classList.contains("present")&&setTimeout(function(){var e,t=d(document.querySelectorAll(Qt+".stack"));for(e in t)t[e]&&L(t[e],0)},0)),h&&(et(Gt),J($t)),Z(),V(),K(),Q(),W(),rt(),ct()}function U(){c(),l(),A(),dn=Jt.autoSlide,ct(),a(),H(),Z(),V(),K(!0),W()}function B(){var e=d(document.querySelectorAll(Qt));e.forEach(function(e){var t=d(e.querySelectorAll("section"));t.forEach(function(e,t){t>0&&(e.classList.remove("present"),e.classList.remove("past"),e.classList.add("future"))})})}function H(){var e=d(document.querySelectorAll(Qt));e.forEach(function(e){var t=d(e.querySelectorAll("section"));t.forEach(function(e){ot(e.querySelectorAll(".fragment"))}),0===t.length&&ot(e.querySelectorAll(".fragment"))})}function G(e,t){var n=d(document.querySelectorAll(e)),r=n.length;if(r){Jt.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var i=0;r>i;i++){var o=n[i],a=Jt.rtl&&!I(o);if(o.classList.remove("past"),o.classList.remove("present"),o.classList.remove("future"),o.setAttribute("hidden",""),t>i){o.classList.add(a?"future":"past");for(var s=d(o.querySelectorAll(".fragment"));s.length;){var l=s.pop();l.classList.add("visible"),l.classList.remove("current-fragment")}}else if(i>t){o.classList.add(a?"past":"future");for(var c=d(o.querySelectorAll(".fragment.visible"));c.length;){var u=c.pop();u.classList.remove("visible"),u.classList.remove("current-fragment")}}o.querySelector("section")&&o.classList.add("stack")}n[t].classList.add("present"),n[t].removeAttribute("hidden");var p=n[t].getAttribute("data-state");p&&(tn=tn.concat(p.split(" ")))}else t=0;return t}function $(){var e,t,n=d(document.querySelectorAll(Qt)),r=n.length;if(r){var i=R()?10:Jt.viewDistance;Wt&&(i=R()?6:1);for(var o=0;r>o;o++){var a=n[o],s=d(a.querySelectorAll("section")),l=s.length;if(e=Math.abs((Bt-o)%(r-i))||0,a.style.display=e>i?"none":"block",l)for(var c=T(a),u=0;l>u;u++){var p=s[u];t=Math.abs(o===Bt?Ht-u:u-c),p.style.display=e+t>i?"none":"block"}}}}function V(){if(Jt.progress&&rn.progress){var e=d(document.querySelectorAll(Qt)),t=document.querySelectorAll(Kt+":not(.stack)").length,n=0;e:for(var r=0;r<e.length;r++){for(var i=e[r],o=d(i.querySelectorAll("section")),a=0;a<o.length;a++){if(o[a].classList.contains("present"))break e;n++}if(i.classList.contains("present"))break;i.classList.contains("stack")===!1&&n++}rn.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function W(){if(Jt.slideNumber&&rn.slideNumber){var e=Bt;Ht>0&&(e+=" - "+Ht),rn.slideNumber.innerHTML=e}}function Z(){var e=X(),t=Y();rn.controlsLeft.concat(rn.controlsRight).concat(rn.controlsUp).concat(rn.controlsDown).concat(rn.controlsPrev).concat(rn.controlsNext).forEach(function(e){e.classList.remove("enabled"),e.classList.remove("fragmented")}),e.left&&rn.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&rn.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&rn.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&rn.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&rn.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&rn.controlsNext.forEach(function(e){e.classList.add("enabled")}),$t&&(t.prev&&rn.controlsPrev.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rn.controlsNext.forEach(function(e){e.classList.add("fragmented","enabled")}),I($t)?(t.prev&&rn.controlsUp.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rn.controlsDown.forEach(function(e){e.classList.add("fragmented","enabled")})):(t.prev&&rn.controlsLeft.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rn.controlsRight.forEach(function(e){e.classList.add("fragmented","enabled")})))}function K(e){var t=null,n=Jt.rtl?"future":"past",r=Jt.rtl?"past":"future";if(d(rn.background.childNodes).forEach(function(i,o){Bt>o?i.className="slide-background "+n:o>Bt?i.className="slide-background "+r:(i.className="slide-background present",t=i),(e||o===Bt)&&d(i.childNodes).forEach(function(e,n){Ht>n?e.className="slide-background past":n>Ht?e.className="slide-background future":(e.className="slide-background present",o===Bt&&(t=e))})}),t){var i=Vt?Vt.getAttribute("data-background-hash"):null,o=t.getAttribute("data-background-hash");o&&o===i&&t!==Vt&&rn.background.classList.add("no-transition"),Vt=t}setTimeout(function(){rn.background.classList.remove("no-transition")},1)}function Q(){if(Jt.parallaxBackgroundImage){var e,t,n=document.querySelectorAll(Qt),r=document.querySelectorAll(Xt),i=rn.background.style.backgroundSize.split(" ");1===i.length?e=t=parseInt(i[0],10):(e=parseInt(i[0],10),t=parseInt(i[1],10));var o=rn.background.offsetWidth,a=n.length,s=-(e-o)/(a-1)*Bt,l=rn.background.offsetHeight,c=r.length,u=c>0?-(t-l)/(c-1)*Ht:0;rn.background.style.backgroundPosition=s+"px "+u+"px"}}function X(){var e=document.querySelectorAll(Qt),t=document.querySelectorAll(Xt),n={left:Bt>0||Jt.loop,right:Bt<e.length-1||Jt.loop,up:Ht>0,down:Ht<t.length-1};if(Jt.rtl){var r=n.left;n.left=n.right,n.right=r}return n}function Y(){if($t&&Jt.fragments){var e=$t.querySelectorAll(".fragment"),t=$t.querySelectorAll(".fragment:not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}function J(e){e&&!tt()&&(d(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&e.play()}),d(e.querySelectorAll("iframe")).forEach(function(e){e.contentWindow.postMessage("slide:start","*")}),d(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function et(e){e&&(d(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-ignore")||e.pause()}),d(e.querySelectorAll("iframe")).forEach(function(e){e.contentWindow.postMessage("slide:stop","*")}),d(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-ignore")||"function"!=typeof e.contentWindow.postMessage||e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function tt(){return!!window.location.search.match(/receiver/gi)}function nt(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var i=Reveal.getIndices(r);z(i.h,i.v)}else z(Bt||0,Ht||0)}else{var o=parseInt(t[0],10)||0,a=parseInt(t[1],10)||0;(o!==Bt||a!==Ht)&&z(o,a)}}function rt(e){if(Jt.history)if(clearTimeout(sn),"number"==typeof e)sn=setTimeout(rt,e);else{var t="/";$t&&"string"==typeof $t.getAttribute("id")?t="/"+$t.getAttribute("id"):((Bt>0||Ht>0)&&(t+=Bt),Ht>0&&(t+="/"+Ht)),window.location.hash=t}}function it(e){var t,n=Bt,r=Ht;if(e){var i=I(e),o=i?e.parentNode:e,a=d(document.querySelectorAll(Qt));n=Math.max(a.indexOf(o),0),i&&(r=Math.max(d(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&$t){var s=$t.querySelectorAll(".fragment").length>0;if(s){var l=$t.querySelectorAll(".fragment.visible");t=l.length-1}}return{h:n,v:r,f:t}}function ot(e){e=d(e);var t=[],n=[],r=[];e.forEach(function(e){if(e.hasAttribute("data-fragment-index")){var r=parseInt(e.getAttribute("data-fragment-index"),10);t[r]||(t[r]=[]),t[r].push(e)}else n.push([e])}),t=t.concat(n);var i=0;return t.forEach(function(e){e.forEach(function(e){r.push(e),e.setAttribute("data-fragment-index",i)}),i++}),r}function at(e,t){if($t&&Jt.fragments){var n=ot($t.querySelectorAll(".fragment"));if(n.length){if("number"!=typeof e){var r=ot($t.querySelectorAll(".fragment.visible")).pop();e=r?parseInt(r.getAttribute("data-fragment-index")||0,10):-1}"number"==typeof t&&(e+=t);var i=[],o=[];return d(n).forEach(function(t,n){t.hasAttribute("data-fragment-index")&&(n=parseInt(t.getAttribute("data-fragment-index"),10)),e>=n?(t.classList.contains("visible")||i.push(t),t.classList.add("visible"),t.classList.remove("current-fragment"),n===e&&t.classList.add("current-fragment")):(t.classList.contains("visible")&&o.push(t),t.classList.remove("visible"),t.classList.remove("current-fragment"))}),o.length&&y("fragmenthidden",{fragment:o[0],fragments:o}),i.length&&y("fragmentshown",{fragment:i[0],fragments:i}),Z(),!(!i.length&&!o.length)}}return!1}function st(){return at(null,1)}function lt(){return at(null,-1)}function ct(){if(ut(),$t){var e=$t.parentNode?$t.parentNode.getAttribute("data-autoslide"):null,t=$t.getAttribute("data-autoslide");dn=t?parseInt(t,10):e?parseInt(e,10):Jt.autoSlide,d($t.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&dn&&1e3*e.duration>dn&&(dn=1e3*e.duration+1e3)}),!dn||hn||F()||R()||Reveal.isLastSlide()&&Jt.loop!==!0||(pn=setTimeout(bt,dn),fn=Date.now()),Zt&&Zt.setPlaying(-1!==pn)}}function ut(){clearTimeout(pn),pn=-1}function dt(){hn=!0,clearTimeout(pn),Zt&&Zt.setPlaying(!1)}function pt(){hn=!1,ct()}function ft(){Jt.rtl?(R()||st()===!1)&&X().left&&z(Bt+1):(R()||lt()===!1)&&X().left&&z(Bt-1)}function ht(){Jt.rtl?(R()||lt()===!1)&&X().right&&z(Bt-1):(R()||st()===!1)&&X().right&&z(Bt+1)}function mt(){(R()||lt()===!1)&&X().up&&z(Bt,Ht-1)}function gt(){(R()||st()===!1)&&X().down&&z(Bt,Ht+1)}function vt(){if(lt()===!1)if(X().up)mt();else{var e=document.querySelector(Qt+".past:nth-child("+Bt+")");if(e){var t=e.querySelectorAll("section").length-1||void 0,n=Bt-1;z(n,t)}}}function bt(){st()===!1&&(X().down?gt():ht()),ct()}function yt(){Jt.autoSlideStoppable&&dt()}function wt(e){yt(e);var t=(document.activeElement,!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable));if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){if(F()&&-1===[66,190,191].indexOf(e.keyCode))return!1;var n=!1;if("object"==typeof Jt.keyboard)for(var r in Jt.keyboard)if(parseInt(r,10)===e.keyCode){var i=Jt.keyboard[r];"function"==typeof i?i.apply(null,[e]):"string"==typeof i&&"function"==typeof Reveal[i]&&Reveal[i].call(),n=!0}if(n===!1)switch(n=!0,e.keyCode){case 80:case 33:vt();break;case 78:case 34:bt();break;case 72:case 37:ft();break;case 76:case 39:ht();break;case 75:case 38:mt();break;case 74:case 40:gt();break;case 36:z(0);break;case 35:z(Number.MAX_VALUE);break;case 32:R()?M():e.shiftKey?vt():bt();break;case 13:R()?M():n=!1;break;case 66:case 190:case 191:P();break;case 70:D();break;default:n=!1}n?e.preventDefault():27!==e.keyCode&&79!==e.keyCode||!on.transforms3d||(rn.preview?S():q(),e.preventDefault()),ct()}}function xt(e){mn.startX=e.touches[0].clientX,mn.startY=e.touches[0].clientY,mn.startCount=e.touches.length,2===e.touches.length&&Jt.overview&&(mn.startSpan=p({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:mn.startX,y:mn.startY}))}function Et(e){if(mn.captured)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{yt(e);var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===mn.startCount&&Jt.overview){var r=p({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:mn.startX,y:mn.startY});Math.abs(mn.startSpan-r)>mn.threshold&&(mn.captured=!0,r<mn.startSpan?_():M()),e.preventDefault()}else if(1===e.touches.length&&2!==mn.startCount){var i=t-mn.startX,o=n-mn.startY;i>mn.threshold&&Math.abs(i)>Math.abs(o)?(mn.captured=!0,ft()):i<-mn.threshold&&Math.abs(i)>Math.abs(o)?(mn.captured=!0,ht()):o>mn.threshold?(mn.captured=!0,mt()):o<-mn.threshold&&(mn.captured=!0,gt()),Jt.embedded?(mn.captured||I($t))&&e.preventDefault():e.preventDefault()}}}function Nt(){mn.captured=!1}function kt(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],xt(e))}function St(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Et(e))}function At(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Nt(e))}function Ct(e){if(Date.now()-an>600){an=Date.now();var t=e.detail||-e.wheelDelta;t>0?bt():vt()}}function Lt(e){yt(e),e.preventDefault();var t=d(document.querySelectorAll(Qt)).length,n=Math.floor(e.clientX/rn.wrapper.offsetWidth*t);z(n)}function Tt(e){e.preventDefault(),yt(),ft()}function _t(e){e.preventDefault(),yt(),ht()}function Mt(e){e.preventDefault(),yt(),mt()}function qt(e){e.preventDefault(),yt(),gt()}function Rt(e){e.preventDefault(),yt(),vt()}function It(e){e.preventDefault(),yt(),bt()}function Dt(){nt()}function jt(){A()}function Ot(){var e=document.webkitHidden||document.msHidden||document.hidden;e===!1&&document.activeElement!==document.body&&(document.activeElement.blur(),document.body.focus())}function Pt(e){if(un&&R()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(M(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);z(n,r)}}}function Ft(e){var t=e.target.getAttribute("href");t&&(k(t),e.preventDefault())}function zt(){Reveal.isLastSlide()&&Jt.loop===!1?(z(0,0),pt()):hn?pt():dt()}function Ut(e,t){this.diameter=50,this.thickness=3,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}var Bt,Ht,Gt,$t,Vt,Wt,Zt,Kt=".reveal .slides section",Qt=".reveal .slides>section",Xt=".reveal .slides>section.present>section",Yt=".reveal .slides>section:first-of-type",Jt={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,slideNumber:!1,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,autoSlideStoppable:!0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,previewLinks:!1,focusBodyOnPageVisiblityChange:!0,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",parallaxBackgroundImage:"",parallaxBackgroundSize:"",viewDistance:3,dependencies:[]},en=!1,tn=[],nn=1,rn={},on={},an=0,sn=0,ln=0,cn=0,un=!1,dn=0,pn=0,fn=-1,hn=!1,mn={startX:0,startY:0,startSpan:0,startCount:0,captured:!1,threshold:40};return Ut.prototype.setPlaying=function(e){var t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()},Ut.prototype.animate=function(){var e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&on.requestAnimationFrameMethod.call(window,this.animate.bind(this))},Ut.prototype.render=function(){var e=this.playing?this.progress:0,t=this.diameter/2-this.thickness,n=this.diameter/2,r=this.diameter/2,i=14;this.progressOffset+=.1*(1-this.progressOffset);var o=-Math.PI/2+2*e*Math.PI,a=-Math.PI/2+2*this.progressOffset*Math.PI;this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,t+2,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,r,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#666",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,t,a,o,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-i/2,r-i/2),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,i/2-2,i),this.context.fillRect(i/2+2,0,i/2-2,i)):(this.context.beginPath(),this.context.translate(2,0),this.context.moveTo(0,0),this.context.lineTo(i-2,i/2),this.context.lineTo(0,i),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()},Ut.prototype.on=function(e,t){this.canvas.addEventListener(e,t,!1)},Ut.prototype.off=function(e,t){this.canvas.removeEventListener(e,t,!1)},Ut.prototype.destroy=function(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)},{initialize:e,configure:s,sync:U,slide:z,left:ft,right:ht,up:mt,down:gt,prev:vt,next:bt,navigateFragment:at,prevFragment:lt,nextFragment:st,navigateTo:z,navigateLeft:ft,navigateRight:ht,navigateUp:mt,navigateDown:gt,navigatePrev:vt,navigateNext:bt,layout:A,availableRoutes:X,availableFragments:Y,toggleOverview:q,togglePause:P,isOverview:R,isPaused:F,addEventListeners:l,removeEventListeners:c,getIndices:it,getSlide:function(e,t){var n=document.querySelectorAll(Qt)[e],r=n&&n.querySelectorAll("section");return"undefined"!=typeof t?r?r[t]:void 0:n},getPreviousSlide:function(){return Gt},getCurrentSlide:function(){return $t},getScale:function(){return nn},getConfig:function(){return Jt},getQueryHash:function(){var e={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()});for(var t in e){var n=e[t];e[t]=unescape(n),"null"===n?e[t]=null:"true"===n?e[t]=!0:"false"===n?e[t]=!1:n.match(/^\d+$/)&&(e[t]=parseFloat(n))}return e},isFirstSlide:function(){return null==document.querySelector(Kt+".past")?!0:!1
},isLastSlide:function(){return $t?$t.nextElementSibling?!1:I($t)&&$t.parentNode.nextElementSibling?!1:!0:!1},isReady:function(){return en},addEventListener:function(e,t,n){"addEventListener"in window&&(rn.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(rn.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();