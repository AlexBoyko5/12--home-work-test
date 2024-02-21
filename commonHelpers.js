import{a as m,i as l,S as y}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(t=>`
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
        `).join(""),o.innerHTML+=p,f.refresh()}const g="42334631-07f239856d3b6a49db441bfb9";async function u(s,o){const t=document.querySelector(".loader"),a=document.querySelector("#load-more");t.style.display="block",a.style.display="none";try{const e=await m.get(`https://pixabay.com/api/?key=${g}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`);console.log(e.data),t.style.display="none",e.data.hits.length===0?l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(p(e.data.hits),f.refresh(),a.style.display="block")}catch(e){console.error("Error fetching images:",e),t.style.display="none",l.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}const f=new y(".gallery a"),h=document.querySelector("#search-form"),d=document.querySelector("#search-input");let n="",c=1;h.addEventListener("submit",s=>{if(n=d.value.trim(),c=1,s.preventDefault(),!n){l.warning({title:"Warning",message:"Please enter a search query"});return}u(n),d.value=""});document.querySelector("#load-more").addEventListener("click",()=>{c+=1,u(n,c)});
//# sourceMappingURL=commonHelpers.js.map
