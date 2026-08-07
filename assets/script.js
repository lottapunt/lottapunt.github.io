document.querySelectorAll('.menu-button').forEach(btn=>{btn.addEventListener('click',()=>{const nav=document.querySelector('.nav-links');const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});});

function buildTicker(track){
  const source=track.querySelector('a');
  if(!source)return;
  const original=source.cloneNode(true);
  original.removeAttribute('aria-hidden');
  track.innerHTML='';

  const group=document.createElement('div');
  group.className='ticker-group';
  track.appendChild(group);

  let count=0;
  do{
    const item=original.cloneNode(true);
    if(count>0)item.setAttribute('aria-hidden','true');
    group.appendChild(item);
    count++;
  }while(group.getBoundingClientRect().width < window.innerWidth + 240 && count < 12);

  const clone=group.cloneNode(true);
  clone.setAttribute('aria-hidden','true');
  clone.querySelectorAll('a').forEach(a=>a.setAttribute('aria-hidden','true'));
  track.appendChild(clone);

  const width=group.getBoundingClientRect().width;
  track.style.setProperty('--ticker-duration',`${Math.max(18,width/70)}s`);
}

function rebuildTickers(){document.querySelectorAll('.ticker-track').forEach(buildTicker);}
rebuildTickers();
let tickerResizeTimer;
window.addEventListener('resize',()=>{clearTimeout(tickerResizeTimer);tickerResizeTimer=setTimeout(rebuildTickers,180);});
