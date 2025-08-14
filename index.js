import{a as v,S as y,i}from"./assets/vendor-DTWVMNYS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const S=v.create({baseURL:"https://pixabay.com/api/",params:{key:"51662692-15f66b8f148fe09f1ff22625f",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function g(e,s){try{const r=await S.get("",{params:{q:e,page:s}});return{hits:r.data.hits,totalHits:r.data.totalHits}}catch(r){console.error("помилка!",r)}}let l;function $(e){const s=document.querySelector(".gallery"),r=e.map(({webformatURL:o,largeImageURL:t,tags:a,likes:n,views:p,downloads:d,comments:m})=>`
    <a href="${t}" class="gallery_item">
      <img src="${o}" alt="${a}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${n}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${m}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${d}</span>
  </li>
</ul>
    </a>
  `).join("");s.innerHTML=r,l?l.refresh():l=new y(".gallery a")}function q(){const e=document.querySelector(".gallery");e.innerHTML=""}function h(){const e=document.querySelector(".loader");e?e.classList.remove("is-not-active"):console.warn("Loader element not found")}function L(){const e=document.querySelector(".loader");e?e.classList.add("is-not-active"):console.warn("Loader element not found in hideLoader")}function b(){document.querySelector(".button-js").classList.remove("is-not-active")}function w(){document.querySelector(".button-js").classList.add("is-not-active")}function x(e){const s=document.querySelector(".gallery"),r=e.map(({webformatURL:o,largeImageURL:t,tags:a,likes:n,views:p,downloads:d,comments:m})=>`
    <a href="${t}" class="gallery_item">
      <img src="${o}" alt="${a}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${n}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${m}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${d}</span>
  </li>
</ul>
    </a>
  `).join("");s.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new y(".gallery a")}const M=document.querySelector(".form"),c=document.querySelector('[name="search-text"]'),P=document.querySelector(".button-js"),j=15;let f=1,u="";M.addEventListener("submit",e=>{if(e.preventDefault(),u=c.value.trim(),console.log(c.value),c.value.trim()===""){i.error({message:"enter text, please!"});return}q(),h(),g(u,f).then(({hits:s,totalHits:r})=>{s.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),$(s),b()}).catch(s=>{i.error({message:"Please try again later"})}).finally(()=>{L()})});P.addEventListener("click",()=>{w(),h(),u=c.value.trim(),g(u,++f).then(({hits:e,totalHits:s})=>{const r=Math.ceil(s/j);if(f>=r){i.show({message:"Were sorry, but youve reached the end of search results."});return}x(e),L(),b()})});
//# sourceMappingURL=index.js.map
