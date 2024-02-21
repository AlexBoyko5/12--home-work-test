import{a as f,i as c,S as m}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function y(a){const o=document.querySelector(".gallery");o.innerHTML="";const s=a.map(t=>`
      <div class="photo-card">
        <a href="${t.largeImageURL}" target="_blank">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><i class="img-text">Likes </i><span>${t.likes}</span></p>
          <p><i class="img-text">Views </i><span>${t.views}</span></p>
          <p><i class="img-text">Comments </i><span>${t.comments}</span></p>
          <p><i class="img-text">Downloads </i><span>${t.downloads}</span></p>
        </div>
      </div>
    `).join("");o.innerHTML+=s,u.refresh()}const g="42334631-07f239856d3b6a49db441bfb9";async function p(a,o){const s=document.querySelector(".loader"),t=document.querySelector("#load-more");s.style.display="block",t.style.display="none";try{const e=await f.get(`https://pixabay.com/api/?key=${g}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`);console.log(e.data),s.style.display="none",e.data.hits.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(e.data.hits),u.refresh(),t.style.display="block")}catch(e){console.error("Error fetching images:",e),s.style.display="none",c.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}const u=new m(".gallery a"),h=document.querySelector("#search-form"),d=document.querySelector("#search-input");let n="",i=1;h.addEventListener("submit",a=>{if(n=d.value.trim(),i=1,a.preventDefault(),!n){c.warning({title:"Warning",message:"Please enter a search query"});return}p(n,i),d.value=""});document.querySelector("#load-more").addEventListener("click",()=>{i+=1,p(n,i)});
//# sourceMappingURL=commonHelpers.js.map
