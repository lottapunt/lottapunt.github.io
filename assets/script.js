const CONTACT_EMAIL = "contactshowai@gmail.com";
const menuButton=document.querySelector('.menu-button');const siteNav=document.querySelector('.site-nav');if(menuButton&&siteNav){menuButton.addEventListener('click',()=>{const open=siteNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?menuButton.dataset.closeLabel:menuButton.dataset.openLabel)});siteNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{siteNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('[data-contact-form]');if(form){form.addEventListener('submit',event=>{event.preventDefault();const status=form.querySelector('.form-status');if(!CONTACT_EMAIL.includes('@')){status.textContent=form.dataset.error;return}const data=new FormData(form);const labels={en:['Name','Organisation','Email','Message'],nl:['Naam','Organisatie','E-mail','Bericht'],de:['Name','Organisation','E-Mail','Nachricht'],fr:['Nom','Organisation','E-mail','Message']}[form.dataset.lang]||['Name','Organisation','Email','Message'];const subject=encodeURIComponent(`ShowAI QuickScan — ${data.get('organisation')||data.get('name')}`);const body=encodeURIComponent(`${labels[0]}: ${data.get('name')}
${labels[1]}: ${data.get('organisation')}
${labels[2]}: ${data.get('email')}

${labels[3]}:
${data.get('message')}`);location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;status.textContent=form.dataset.status})}
document.querySelectorAll('[data-print]').forEach(button=>button.addEventListener('click',()=>window.print()));
