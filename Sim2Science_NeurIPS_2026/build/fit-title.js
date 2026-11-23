// Prints the largest h1 font size (mm) that keeps the title on two lines. Set it in poster.html (h1 font-size).
const { chromium } = require('playwright');
(async()=>{
  const b=await chromium.launch(); const p=await b.newPage();
  await p.goto('file://'+require('path').resolve(__dirname,'../poster.html')); await p.evaluate(()=>document.fonts.ready);
  const r=await p.evaluate(()=>{
    const h=document.querySelector('h1'); const px=v=>v/25.4*96;
    let best=0;
    for(let mm=10; mm<=20; mm+=0.1){ h.style.fontSize=mm+'mm'; const lh=parseFloat(getComputedStyle(h).lineHeight);
      const lines=Math.round(h.getBoundingClientRect().height/lh); if(lines<=2) best=mm; }
    h.style.fontSize=best+'mm';
    return {best:best.toFixed(1), width:(h.getBoundingClientRect().width/96*25.4).toFixed(0), logosLeft:(document.querySelector('.titleblock .right').getBoundingClientRect().left/96*25.4).toFixed(0)};
  });
  console.log(JSON.stringify(r)); await b.close();
})();
