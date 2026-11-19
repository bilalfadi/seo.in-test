const base='https://seo-in-test.bilalfadi11221333.workers.dev';
const sitemapResponse=await fetch(base+'/sitemap.xml',{headers:{'Cache-Control':'no-cache'}});
if(!sitemapResponse.ok)throw new Error('sitemap.xml returned '+sitemapResponse.status);
const xml=await sitemapResponse.text();
const paths=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1].replaceAll('&amp;','&')).pathname);
const unique=[...new Set(paths)];
const results=[];
for(let i=0;i<unique.length;i+=8){
 const batch=await Promise.all(unique.slice(i,i+8).map(async path=>{try{const c=new AbortController(),t=setTimeout(()=>c.abort(),20000);let r;try{r=await fetch(base+path,{signal:c.signal,redirect:'follow',headers:{'User-Agent':'Mozilla/5.0','Cache-Control':'no-cache'}})}finally{clearTimeout(t)}const html=await r.text();return {path,status:r.status,bytes:html.length,title:(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)||[])[1]||'',h1:(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)||[])[1]?.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().slice(0,100)||'',canonical:/<link[^>]+rel=["']canonical["']/i.test(html),description:/<meta[^>]+name=["']description["']/i.test(html),robots:/<meta[^>]+name=["']robots["']/i.test(html),error:/Internal Server Error|Application error|Cannot GET/i.test(html)}}catch(e){return {path,error:String(e.message||e)}}}));
 results.push(...batch);
}
const bad=results.filter(x=>x.status!==200||x.bytes<500||x.error||!x.title||!x.h1||!x.canonical||!x.description||!x.robots);
console.log(JSON.stringify({checked:new Date().toISOString(),base,sitemapCount:unique.length,passed:results.length-bad.length,total:results.length,bad,results},null,2));
if(bad.length)process.exitCode=1;
