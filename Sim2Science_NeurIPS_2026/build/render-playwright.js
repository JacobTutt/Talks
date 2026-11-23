const { chromium } = require('playwright');
(async()=>{
  const dir=require('path').resolve(__dirname,'..');
  const b=await chromium.launch(); const p=await b.newPage();
  await p.goto('file://'+dir+'/poster.html'); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(500);
  const info=await p.evaluate(()=>{
    const mm=v=>(v/96*25.4).toFixed(1);
    const r=s=>[...document.querySelectorAll(s)].map(e=>{const b=e.getBoundingClientRect();return `${s} y=${mm(b.top)} h=${mm(b.height)} w=${mm(b.width)} scrollH=${mm(e.scrollHeight)}`});
    const page=document.querySelector('.page');
    return [`page scroll ${mm(page.scrollHeight)} client ${mm(page.clientHeight)}`, ...r('.titleblock'),...r('.lede'),...r('.rows'),...r('.row'),...r('.row figure'),...r('.panel'),...r('.foot'), ...r('h1')].join('\n');
  });
  console.log(info);
  await p.pdf({path:dir+'/Tutt - Sim2Science NeurIPS 2026 - Global 21-cm Benchmark (A1).pdf', width:'594mm', height:'841mm', printBackground:true, pageRanges:'1'});
  await b.close();
})();
