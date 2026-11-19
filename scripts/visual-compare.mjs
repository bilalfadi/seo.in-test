import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
const origin='https://seogroupbuy.in', preview='https://seo-in-test.bilalfadi11221333.workers.dev';
const browser=await chromium.launch({headless:true});
const pages=['/','/all-tools','/pricing','/faq','/blog','/tool/ahrefs-group-buy','/tool/semrush-group-buy'];
const report=[];
mkdirSync('visual-audit',{recursive:true});
for(const path of pages){
 const pair={path};
 for(const [name,base] of [['origin',origin],['preview',preview]]){
  const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
  try{
   const response=await page.goto(base+path,{waitUntil:'networkidle',timeout:60000}).catch(async()=>await page.goto(base+path,{waitUntil:'domcontentloaded',timeout:60000}));
   await page.waitForTimeout(2500);
   const data=await page.evaluate(()=>({
    title:document.title,
    description:document.querySelector('meta[name="description"]')?.content||'',
    canonical:document.querySelector('link[rel="canonical"]')?.href||'',
    h1:[...document.querySelectorAll('h1')].map(x=>x.innerText.trim()),
    text:document.body.innerText.replace(/\s+/g,' ').trim(),
    links:[...new Set([...document.querySelectorAll('a[href]')].map(a=>a.href))].sort(),
    images:[...document.images].map(i=>({src:i.currentSrc||i.src,alt:i.alt,loaded:i.complete&&i.naturalWidth>0})),
    viewport:{width:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight},
    fonts:getComputedStyle(document.body).fontFamily,
    background:getComputedStyle(document.body).backgroundColor
   }));
   pair[name]={status:response?.status()||0,...data};
   await page.screenshot({path:'visual-audit/'+(path.replaceAll('/','_')||'home')+'-'+name+'.png',fullPage:true});
  }catch(e){pair[name]={error:String(e.message||e)}}finally{await page.close()}
 }
 const a=pair.origin||{},b=pair.preview||{};
 pair.compare={statusMatch:a.status===b.status,titleMatch:a.title===b.title,h1Match:JSON.stringify(a.h1)===JSON.stringify(b.h1),textLength:{origin:a.text?.length||0,preview:b.text?.length||0},textRatio:a.text?.length&&b.text?.length?Math.round(Math.min(a.text.length,b.text.length)/Math.max(a.text.length,b.text.length)*100):0,missingLinks:(a.links||[]).filter(x=>!(b.links||[]).includes(x)).slice(0,30),brokenPreviewImages:(b.images||[]).filter(x=>!x.loaded).map(x=>x.src),imageCounts:{origin:a.images?.length||0,preview:b.images?.length||0},fonts:{origin:a.fonts,preview:b.fonts}};
 report.push(pair);console.log(path,JSON.stringify(pair.compare));
}
await browser.close();
writeFileSync('visual-audit/report.json',JSON.stringify({origin,preview,checked:new Date().toISOString(),pages:report},null,2));
