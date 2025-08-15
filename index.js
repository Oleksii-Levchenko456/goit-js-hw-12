import{a as S,S as h,i}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const q=S.create({baseURL:"https://pixabay.com/api/",params:{key:"51662692-15f66b8f148fe09f1ff22625f",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function g(e,s){try{const a=await q.get("",{params:{q:e,page:s}});return{hits:a.data.hits,totalHits:a.data.totalHits}}catch(a){console.error("помилка!",a)}}let l;function $(e){const s=document.querySelector(".gallery"),a=e.map(({webformatURL:n,largeImageURL:t,tags:r,likes:o,views:p,downloads:f,comments:y})=>`
    <a href="${t}" class="gallery_item elem-js">
      <img src="${n}" alt="${r}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${o}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${y}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${f}</span>
  </li>
</ul>
    </a>
  `).join("");s.innerHTML=a,l?l.refresh():l=new h(".gallery a")}function M(){const e=document.querySelector(".gallery");e.innerHTML=""}function L(){const e=document.querySelector(".loader");e?e.classList.remove("is-not-active"):console.warn("Loader element not found")}function b(){const e=document.querySelector(".loader");e?e.classList.add("is-not-active"):console.warn("Loader element not found in hideLoader")}function v(){document.querySelector(".button-js").classList.remove("is-not-active")}function m(){document.querySelector(".button-js").classList.add("is-not-active")}function x(e){const s=document.querySelector(".gallery"),a=e.map(({webformatURL:n,largeImageURL:t,tags:r,likes:o,views:p,downloads:f,comments:y})=>`
    <a href="${t}" class="gallery_item">
      <img src="${n}" alt="${r}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${o}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${p}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${y}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${f}</span>
  </li>
</ul>
    </a>
  `).join("");s.insertAdjacentHTML("beforeend",a),l?l.refresh():l=new h(".gallery a")}function j(){const e=document.querySelectorAll(".elem-js"),s=e[e.length-1];if(!s)return;const a=s.getBoundingClientRect().height;window.scrollBy({top:a,behavior:"smooth"})}const P=document.querySelector(".form"),u=document.querySelector('[name="search-text"]'),C=document.querySelector(".button-js"),w=15;let c=1,d="";P.addEventListener("submit",e=>{if(e.preventDefault(),d=u.value.trim(),console.log(u.value),u.value.trim()===""){i.error({message:"enter text, please!"});return}M(),L(),c=1,g(d,c).then(({hits:s,totalHits:a})=>{const n=Math.ceil(a/w);if(s.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),m();return}else if(c>=n){i.show({message:"Were sorry, but youve reached the end of search results."}),m();return}$(s),v()}).catch(s=>{i.error({message:"Please try again later"})}).finally(()=>{b()})});C.addEventListener("click",()=>{m(),L(),d=u.value.trim(),g(d,++c).then(({hits:e,totalHits:s})=>{const a=Math.ceil(s/w);if(c>=a){i.show({message:"Were sorry, but youve reached the end of search results."}),m();return}x(e),j(),v()}).catch(e=>{console.error(e)}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
