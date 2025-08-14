import{a as S,S as g,i}from"./assets/vendor-DTWVMNYS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const w=S.create({baseURL:"https://pixabay.com/api/",params:{key:"51662692-15f66b8f148fe09f1ff22625f",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function h(e,s){try{const a=await w.get("",{params:{q:e,page:s}});return{hits:a.data.hits,totalHits:a.data.totalHits}}catch(a){console.error("помилка!",a)}}let l;function q(e){const s=document.querySelector(".gallery"),a=e.map(({webformatURL:o,largeImageURL:t,tags:n,likes:r,views:m,downloads:d,comments:p})=>`
    <a href="${t}" class="gallery_item elem-js">
      <img src="${o}" alt="${n}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${r}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${m}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${d}</span>
  </li>
</ul>
    </a>
  `).join("");s.innerHTML=a,l?l.refresh():l=new g(".gallery a")}function $(){const e=document.querySelector(".gallery");e.innerHTML=""}function L(){const e=document.querySelector(".loader");e?e.classList.remove("is-not-active"):console.warn("Loader element not found")}function b(){const e=document.querySelector(".loader");e?e.classList.add("is-not-active"):console.warn("Loader element not found in hideLoader")}function v(){document.querySelector(".button-js").classList.remove("is-not-active")}function f(){document.querySelector(".button-js").classList.add("is-not-active")}function x(e){const s=document.querySelector(".gallery"),a=e.map(({webformatURL:o,largeImageURL:t,tags:n,likes:r,views:m,downloads:d,comments:p})=>`
    <a href="${t}" class="gallery_item">
      <img src="${o}" alt="${n}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${r}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${m}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${d}</span>
  </li>
</ul>
    </a>
  `).join("");s.insertAdjacentHTML("beforeend",a),l?l.refresh():l=new g(".gallery a")}function M(){const e=document.querySelectorAll(".elem-js"),s=e[e.length-1];if(!s)return;const a=s.getBoundingClientRect().height;window.scrollBy({top:a,behavior:"smooth"})}const j=document.querySelector(".form"),c=document.querySelector('[name="search-text"]'),P=document.querySelector(".button-js"),C=15;let y=1,u="";j.addEventListener("submit",e=>{if(e.preventDefault(),u=c.value.trim(),console.log(c.value),c.value.trim()===""){i.error({message:"enter text, please!"});return}$(),L(),h(u,y).then(({hits:s,totalHits:a})=>{if(s.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),f();return}q(s),v()}).catch(s=>{i.error({message:"Please try again later"})}).finally(()=>{b()})});P.addEventListener("click",()=>{f(),L(),u=c.value.trim(),h(u,++y).then(({hits:e,totalHits:s})=>{const a=Math.ceil(s/C);if(y>=a){i.show({message:"Were sorry, but youve reached the end of search results."}),f();return}x(e),M(),b(),v()})});
//# sourceMappingURL=index.js.map
