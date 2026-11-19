const base='https://seo-in-test.bilalfadi11221333.workers.dev';
const paths=['/','/all-tools','/blog','/pricing','/faq','/about','/contact','/privacy-policy','/terms'];
const out=[];
for(const path of paths){try{const c=new AbortController(),t=setTimeout(()=>c.abort(),20000);let r;try{r=await fetch(base+path,{signal:c.signal,redirect:'follow',headers:{'User-Agent':'Mozilla/5.0','Cache-Control':'no-cache'}})}finally{clearTimeout(t)}const html=await r.text();out.push({path,status:r.status,bytes:html.length,title:(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)||[])[1]||'',h1:(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)||[])[1]?.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().slice(0,140)||'',hasCanonical:/<link[^>]+rel=["']canonical["']/i.test(html),hasDescription:/<meta[^>]+name=["']description["']/i.test(html),hasRobots:/<meta[^>]+name=["']robots["']/i.test(html),hasRawReactError:/Internal Server Error|Application error|Cannot GET/i.test(html)})}catch(e){out.push({path,error:String(e.message||e)})}}
const bad=out.filter(x=>x.status!==200||x.bytes<500||x.hasRawReactError);
console.log(JSON.stringify({checked:new Date().toISOString(),base,passed:out.length-bad.length,total:out.length,bad,results:out},null,2));
if(bad.length)process.exitCode=1;
