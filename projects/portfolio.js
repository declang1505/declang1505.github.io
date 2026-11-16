(function(){
  const records=(window.PORTFOLIO_PROJECTS||[]).filter(p=>p.published&&p.title);
  const ordered=records.slice().sort((a,b)=>(b.sort||0)-(a.sort||0));
  const palette={"Aircraft design":"purple","Aerodynamics":"blue","Performance":"teal","Testing":"amber","Data analysis":"slate","Flight mechanics":"blue","3D printing":"orange","Electronics":"teal","Enclosures":"rose","MATLAB":"purple","SolidWorks":"blue","Orca Slicer":"orange","FDM":"amber","Wind tunnel":"teal","Completed":"green","Done":"green","Prototype":"amber","In progress":"blue","Ongoing":"amber","Planned":"slate","CAD":"purple","Arduino":"teal"};
  function elt(tag,cls,txt){const n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n;}
  function chip(label){const n=elt('span','tag',label);n.dataset.tone=palette[label]||'gray';return n;}
  function card(p){
    const art=elt('article','project-card');const link=elt('a','project-card-link');link.href=(document.body.dataset.page==='home'?'projects/':'')+'project.html?id='+encodeURIComponent(p.id);
    const info=elt('div','project-info');const meta=elt('div','project-meta');meta.append(elt('span','',p.category+' · '+(p.date?new Date(p.date+'T12:00:00').toLocaleDateString('en-GB',{month:'short',year:'numeric'}):p.year)));meta.append(elt('span','card-arrow','↗'));
    if(p.image){const image=elt('img','project-thumb');image.src=(document.body.dataset.page==='home'?'projects/':'')+p.image;image.alt=p.title+' project photograph';image.loading='lazy';if(document.body.dataset.page==='archive'){image.classList.add('project-cover');link.append(image);}else{info.append(image);}}
    info.append(meta);
    info.append(elt('h3','',p.title),elt('p','',p.summary));
    const status=elt('div','tags');status.append(chip(p.status));info.append(status);
    if(document.body.dataset.page==='archive'){
      if(p.topics.length){info.append(elt('div','card-tags-heading','Topics'));const t=elt('div','tags');p.topics.forEach(x=>t.append(chip(x)));info.append(t);}
      if(p.tools.length){info.append(elt('div','card-tags-heading','Tools'));const t=elt('div','card-tool-row');p.tools.forEach(x=>t.append(chip(x)));info.append(t);}
    }else {const t=elt('div','tags');p.topics.slice(0,2).forEach(x=>t.append(chip(x)));info.append(t)}
    link.append(info);art.append(link);return art;
  }
  function archive(){const grid=document.getElementById('archive-grid');if(!grid)return;let mode='All';
    function render(){grid.replaceChildren();let list=ordered.filter(p=>mode==='All'||p.category===mode);list.forEach(p=>grid.append(card(p)));document.getElementById('project-count').textContent=list.length+' project'+(list.length===1?'':'s');}
    document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render();}));render();}
  function detail(){const host=document.getElementById('project-detail');if(!host)return;const id=new URLSearchParams(location.search).get('id');const p=records.find(x=>x.id===id);
    if(!p){host.append(elt('h1','','Project not found'),elt('p','','This project may not be published yet.'));return;}
    document.title=p.title+' — Dec Gavin';
    if(p.id==='xperia-controller-enclosure')document.body.classList.add('xperia-detail');
    const header=elt('div','detail-header');const back=elt('a','back-link','← All projects');back.href='./';header.append(back,elt('div','overline','Portfolio / '+p.category),elt('h1','',p.title),elt('p','detail-lead',p.summary));
    const layout=elt('div','detail-layout');const body=elt('article','detail-body');if(!p.sections||!p.sections.length)body.append(elt('h2','','Overview'));
    (p.body||[]).forEach(s=>body.append(elt('p','',s)));
    if(p.sections&&p.sections.length){
      p.sections.forEach(s=>{
        const section=elt('section','detail-section');section.append(elt('h2','',s.title));
        (s.paragraphs||[]).forEach(text=>section.append(elt('p','',text)));
        if(s.bullets&&s.bullets.length){const ul=elt('ul');s.bullets.forEach(b=>ul.append(elt('li','',b)));section.append(ul);}
        if(s.images&&s.images.length){const gallery=elt('div','detail-gallery');s.images.forEach(im=>{const fig=elt('figure');const a=elt('a');a.href=im.src;a.target='_blank';a.rel='noopener noreferrer';const img=elt('img');img.src=im.src;img.alt=im.alt||p.title+' project photograph';img.loading='lazy';a.append(img);fig.append(a);if(im.caption)fig.append(elt('figcaption','',im.caption));gallery.append(fig);});section.append(gallery);}
        body.append(section);
      });
    }else if(p.image){const img=elt('img','detail-image');img.src=p.image;img.alt='Project photograph: '+p.title;img.loading='lazy';body.append(img);}
    const aside=elt('aside','detail-side');aside.append(elt('h2','','Project details'));
    function field(name,items){if(!items||(Array.isArray(items)&&!items.length))return;const f=elt('div','field');f.append(elt('div','field-label',name));const v=elt('div','field-value');(Array.isArray(items)?items:[items]).forEach(s=>{if(name==='Topics'||name==='Tools'||name==='Status'){v.append(chip(s));v.append(' ');}else{v.append(elt('span','',s));}});f.append(v);aside.append(f);}
    field('Category',p.category);field('Date',p.date?new Date(p.date+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}):p.year);field('Status',p.status);field('Topics',p.topics);field('Tools',p.tools);
    if(p.links&&p.links.length){const f=elt('div','field');f.append(elt('div','field-label','Links'));p.links.forEach(l=>{const a=elt('a','external-link',l.label+' ↗');a.href=l.url;a.target='_blank';a.rel='noopener noreferrer';f.append(a);});aside.append(f);}
    layout.append(body,aside);host.append(header,layout);
  }
  function latest(){const grid=document.getElementById('latest-projects');if(!grid)return;grid.replaceChildren(...ordered.slice(0,3).map(card));}
  latest();archive();detail();
})();
