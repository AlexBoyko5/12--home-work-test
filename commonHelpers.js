import{a as f,i,S as g}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();//!======== Тренировка ===================================================================================
function h(a,o=!0){const r=document.querySelector(".gallery"),s=a.map(e=>`
      <div class="photo-card">
        <a href="${e.largeImageURL}" target="_blank">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><i class="img-text">Likes </i><span>${e.likes}</span></p>
          <p><i class="img-text">Views </i><span>${e.views}</span></p>
          <p><i class="img-text">Comments </i><span>${e.comments}</span></p>
          <p><i class="img-text">Downloads </i><span>${e.downloads}</span></p>
        </div>
      </div>
    `).join("");o?r.insertAdjacentHTML("beforeend",s):r.innerHTML=s,m.refresh()}//!======== Рабочий вариант ===================================================================================
//!======== Тренировка ===================================================================================
const b="42334631-07f239856d3b6a49db441bfb9";let d=0,u=0;async function y(a,o){const r=document.querySelector(".loader"),s=document.querySelector("#load-more");s.style.display="none",r.style.display="block";try{const e=await f.get(`https://pixabay.com/api/?key=${b}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`);d=e.data.totalHits,u+=e.data.hits.length,console.log(e.data),r.style.display="none",e.data.hits.length===0?u>=d?i.info({title:"Info",message:"We are sorry, but you have reached the end of search results."}):i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(h(e.data.hits),m.refresh(),setTimeout(()=>{const n=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})},100),s.style.display="block")}catch(e){console.error("Error fetching images:",e),r.style.display="none",i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}//!======== Рабочий вариант ===================================================================================
//!======== Тренировка ===================================================================================
const m=new g(".gallery a"),q=document.querySelector("#search-form"),p=document.querySelector("#search-input");let l="",c=1;q.addEventListener("submit",a=>{const o=document.querySelector(".gallery");o.innerHTML="",l=p.value.trim(),c=1,a.preventDefault();const r=document.querySelector(".loader");if(r.style.display="block",!l){i.warning({title:"Warning",message:"Please enter a search query"});return}setTimeout(()=>{y(l,c),p.value=""},200)});document.querySelector("#load-more").addEventListener("click",()=>{c+=1,y(l,c)});//!======== Рабочий вариант ===================================================================================
//# sourceMappingURL=commonHelpers.js.map
