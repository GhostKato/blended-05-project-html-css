(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();(()=>{const r={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};r.openModalBtn.addEventListener("click",s),r.closeModalBtn.addEventListener("click",s);function s(){r.modal.classList.toggle("is-open")}function a(){function c(t,n){let l=document.querySelector(t);if(!l){console.log("елемент куди скролити не знайдено:",t);return}let m=l.getBoundingClientRect().top,p=window.pageYOffset,d=null;const g=function(o,i,u,y){return o/=y/2,o<1?u/2*o*o+i:(o--,-u/2*(o*(o-2)-1)+i)},f=function(o){d===null&&(d=o);const i=o-d,u=g(i,p,m,n);window.scrollTo(0,u),i<n&&requestAnimationFrame(f)};requestAnimationFrame(f)}const e=document.querySelectorAll("a.scroll-to");e&&e.forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const l=this.getAttribute("href");r.modal.classList.contains("is-open")&&r.modal.classList.remove("is-open"),c(l,1e3)})})}a()})();
//# sourceMappingURL=commonHelpers.js.map