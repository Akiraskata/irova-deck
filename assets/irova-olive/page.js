(function () {
  'use strict';
  const {ui,categories,phases,filterProducts}=window.IROVA_CATALOG;
  const products=window.IROVA_DATA.products;
  const bySlug=new Map(products.map(product=>[product.slug,product]));
  const params=new URL(window.location.href).searchParams;
  const supportedLanguages=['ja','zh','en'];
  let savedLanguage;
  try { savedLanguage=localStorage.getItem('irova-language'); } catch {}
  const state={
    language:supportedLanguages.includes(params.get('lang'))?params.get('lang'):(supportedLanguages.includes(savedLanguage)?savedLanguage:'ja'),
    category:categories.some(c=>c.id===params.get('category'))?params.get('category'):'all',
    phase:phases.some(p=>p.id===params.get('phase'))?params.get('phase'):'all',
    query:params.get('q')||'',
    product:null
  };
  const nodes={
    language:document.getElementById('language'),categoryControls:document.getElementById('category-controls'),
    search:document.getElementById('search'),clearSearch:document.getElementById('clear-search'),
    phase:document.getElementById('phase'),result:document.getElementById('result-count'),
    empty:document.getElementById('empty-state'),phaseGrid:document.getElementById('phase-grid'),
    dialog:document.getElementById('product-dialog'),modal:document.getElementById('modal-content')
  };
  let originalFocus=null;
  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const text=(key,values={})=>ui[state.language][key].replace(/\{(\w+)\}/g,(_,name)=>String(values[name]??''));
  const name=product=>product.name[state.language];
  const secondary=product=>product.name[state.language==='ja'?'en':'ja'];
  const categoryCount=id=>products.filter(p=>p.category===id).length;
  const phaseCount=id=>products.filter(p=>p.phase===id).length;
  function writeUrl() {
    const url=new URL(window.location.href);
    for(const [key,value] of Object.entries({lang:state.language,category:state.category==='all'?'':state.category,phase:state.phase==='all'?'':state.phase,q:state.query,product:state.product||''})) {
      if(value)url.searchParams.set(key,value);else url.searchParams.delete(key);
    }
    try { history.replaceState(null,'',url.href); } catch {}
  }
  function goToProducts() {
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('products').scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});
  }
  function renderControls() {
    const options=[{id:'all',name:text('all'),count:products.length},...categories.map(c=>({id:c.id,name:c.name[state.language],count:categoryCount(c.id)}))];
    nodes.categoryControls.setAttribute('aria-label',text('categoryFilter'));
    nodes.categoryControls.innerHTML=options.map(c=>'<button class="category-button" type="button" data-category-filter="'+c.id+'" aria-pressed="'+(state.category===c.id)+'"><span>'+escape(c.name)+'</span><small>'+c.count+'</small></button>').join('');
    nodes.phase.innerHTML='<option value="all">'+escape(text('allPhases'))+'</option>'+phases.map(p=>'<option value="'+p.id+'">'+p.number+' · '+escape(p.title[state.language])+'</option>').join('');
    nodes.phase.value=state.phase;
  }
  function renderRoadmap() {
    nodes.phaseGrid.innerHTML=phases.map(phase=>{
      const images=phase.images.map(slug=>{
        const product=bySlug.get(slug);
        return '<img src="'+product.image+'" width="1000" height="1000" loading="lazy" alt="'+escape('IROVA Olive '+name(product))+'">';
      }).join('');
      return '<li class="phase-card"><div class="phase-number"><strong>'+phase.number+'</strong><span>'+phase.label+'</span></div><h3>'+escape(phase.title[state.language])+'</h3><p>'+escape(phase.body[state.language])+'</p><div class="phase-thumbs">'+images+'</div><button class="phase-action" type="button" data-phase-filter="'+phase.id+'"><span>'+escape(text('phaseAction',{count:phaseCount(phase.id)}))+'</span><span aria-hidden="true">↗</span></button></li>';
    }).join('');
  }
  function refreshProducts() {
    const filtered=filterProducts(state);
    const visible=new Set(filtered.map(p=>p.slug));
    for(const card of document.querySelectorAll('.product-card'))card.hidden=!visible.has(card.dataset.product);
    for(const category of categories) {
      const section=document.querySelector('.category-section[data-category="'+category.id+'"]');
      const count=filtered.filter(p=>p.category===category.id).length;
      section.hidden=count===0;
      section.querySelector('[data-category-count]').textContent=String(count).padStart(2,'0');
    }
    document.querySelectorAll('[data-category-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.categoryFilter===state.category)));
    nodes.search.value=state.query;
    nodes.phase.value=state.phase;
    nodes.clearSearch.hidden=!state.query;
    nodes.result.textContent=text('result',{shown:filtered.length,total:products.length});
    nodes.empty.hidden=filtered.length>0;
    writeUrl();
  }
  function translatePage() {
    document.documentElement.lang={zh:'zh-CN',ja:'ja',en:'en'}[state.language];
    document.title=text('pageTitle');
    document.querySelector('meta[name="description"]').content=text('heroCopy');
    nodes.language.value=state.language;
    try { localStorage.setItem('irova-language',state.language); } catch {}
    document.querySelectorAll('a[data-language-link]').forEach(link=>{
      const href=link.getAttribute('href');
      const url=new URL(href,document.baseURI);
      url.searchParams.set('lang',state.language);
      link.setAttribute('href',href.split(/[?#]/)[0]+url.search+url.hash);
    });
    document.querySelector('.main-nav').setAttribute('aria-label',text('navigation'));
    document.querySelectorAll('[data-i18n]').forEach(node=>node.textContent=text(node.dataset.i18n));
    document.querySelectorAll('[data-alt-product]').forEach(node=>node.alt='IROVA Olive '+name(bySlug.get(node.dataset.altProduct)));
    nodes.search.placeholder=text('searchPlaceholder');
    nodes.clearSearch.setAttribute('aria-label',text('searchClear'));
    document.getElementById('close-dialog').setAttribute('aria-label',text('close'));
    document.querySelector('.back-top').setAttribute('aria-label',text('top'));
    document.querySelector('.colour-directions').setAttribute('aria-label',text('otherColors'));
    for(const category of categories) {
      const section=document.querySelector('.category-section[data-category="'+category.id+'"]');
      section.querySelector('[data-category-name]').textContent=category.name[state.language];
      section.querySelector('[data-category-direction]').textContent=category.direction[state.language];
    }
    for(const card of document.querySelectorAll('.product-card')) {
      const product=bySlug.get(card.dataset.product);
      const phase=phases.find(p=>p.id===product.phase);
      card.setAttribute('aria-label',text('viewDesign')+' · '+name(product));
      card.querySelector('[data-product-name]').textContent=name(product);
      card.querySelector('[data-product-secondary]').textContent=secondary(product);
      card.querySelector('[data-product-phase]').textContent=text('phaseShort')+' '+phase.number;
      card.querySelector('img').alt='IROVA Olive '+name(product);
    }
    renderControls();
    renderRoadmap();
    refreshProducts();
    if(state.product)renderModal(bySlug.get(state.product));
  }
  function relatedProducts(product) {
    const suggestions={
      digital:['phone-case-smooth','wrist-lanyard','canvas-tote','insulated-bottle'],
      character:['canvas-tote','tshirt','phone-case-smooth'],
      wear:['canvas-tote','knit-beanie','socks','sneakers'],
      carry:['card-holder','zip-pouch','insulated-bottle','laptop-sleeve'],
      living:['cloth-notebook','pen-set','ceramic-mug','desk-mat']
    };
    return suggestions[product.category].filter(slug=>slug!==product.slug).slice(0,3).map(slug=>bySlug.get(slug));
  }
  function renderModal(product) {
    const phase=phases.find(p=>p.id===product.phase);
    const category=categories.find(c=>c.id===product.category);
    const index=products.findIndex(p=>p.slug===product.slug);
    const previous=products[(index-1+products.length)%products.length];
    const next=products[(index+1)%products.length];
    const related=relatedProducts(product).map(p=>'<button type="button" class="related-item" data-detail-product="'+p.slug+'" aria-label="'+escape(text('viewDesign')+' · '+name(p))+'"><img src="'+p.image+'" width="1000" height="1000" alt="" loading="lazy"><span>'+escape(name(p))+'</span></button>').join('');
    nodes.modal.innerHTML='<div class="modal-layout"><div class="modal-visual"><img src="'+product.image+'" width="1000" height="1000" alt="'+escape('IROVA Olive '+name(product))+'"><p class="modal-counter"><span>OLIVE / オリーブ</span><span>'+String(index+1).padStart(2,'0')+' / 32</span></p></div><div class="modal-info"><p class="eyebrow">'+escape(text('modalEyebrow'))+'</p><h2 id="modal-title">'+escape(name(product))+'</h2><p class="modal-secondary">'+escape(secondary(product))+' · '+escape(category.name[state.language])+'</p><section class="modal-section"><h3>'+escape(text('modalRole'))+'</h3><p>'+escape(product.description[state.language])+'</p></section><section class="modal-section modal-phase"><h3>'+escape(text('modalStage'))+'</h3><strong>'+phase.number+' · '+escape(phase.title[state.language])+'</strong><p>'+escape(category.direction[state.language])+'</p></section><section class="modal-section"><h3>'+escape(text('modalRelated'))+'</h3><div class="related-grid">'+related+'</div></section><button type="button" class="modal-category" data-modal-category="'+product.category+'">'+escape(text('modalCategory'))+' ↗</button><p class="modal-note">'+escape(text('modalNote'))+'</p></div></div><div class="modal-navigation"><button type="button" data-detail-product="'+previous.slug+'"><span aria-hidden="true">←</span><span>'+escape(text('prev'))+'</span></button><button type="button" data-detail-product="'+next.slug+'"><span>'+escape(text('next'))+'</span><span aria-hidden="true">→</span></button></div>';
    nodes.modal.scrollTop=0;
  }
  function openProduct(slug,trigger) {
    const product=bySlug.get(slug);
    if(!product)return;
    if(trigger && trigger.classList.contains('product-card'))originalFocus=trigger;
    state.product=slug;
    renderModal(product);
    if(!nodes.dialog.open) {
      if(typeof nodes.dialog.showModal==='function')nodes.dialog.showModal();
      else nodes.dialog.setAttribute('open','');
      document.body.classList.add('modal-open');
    }
    writeUrl();
    document.getElementById('close-dialog').focus({preventScroll:true});
  }
  function afterClose() {
    state.product=null;
    document.body.classList.remove('modal-open');
    writeUrl();
    if(originalFocus && originalFocus.isConnected && !originalFocus.hidden)originalFocus.focus({preventScroll:true});
    originalFocus=null;
  }
  function closeProduct() {
    if(typeof nodes.dialog.close==='function')nodes.dialog.close();
    else { nodes.dialog.removeAttribute('open');afterClose(); }
  }
  nodes.categoryControls.addEventListener('click',event=>{
    const button=event.target.closest('[data-category-filter]');
    if(!button)return;
    state.category=button.dataset.categoryFilter;
    refreshProducts();
  });
  nodes.search.addEventListener('input',()=>{state.query=nodes.search.value;refreshProducts();});
  nodes.clearSearch.addEventListener('click',()=>{state.query='';refreshProducts();nodes.search.focus();});
  nodes.phase.addEventListener('change',()=>{state.phase=nodes.phase.value;refreshProducts();});
  nodes.phaseGrid.addEventListener('click',event=>{
    const button=event.target.closest('[data-phase-filter]');
    if(!button)return;
    state.phase=button.dataset.phaseFilter;
    state.category='all';
    state.query='';
    refreshProducts();
    goToProducts();
  });
  document.getElementById('reset-filters').addEventListener('click',()=>{state.category='all';state.phase='all';state.query='';refreshProducts();});
  document.getElementById('product-sections').addEventListener('click',event=>{
    const button=event.target.closest('.product-card');
    if(button)openProduct(button.dataset.product,button);
  });
  nodes.modal.addEventListener('click',event=>{
    const detail=event.target.closest('[data-detail-product]');
    if(detail){openProduct(detail.dataset.detailProduct,detail);return;}
    const category=event.target.closest('[data-modal-category]');
    if(category){closeProduct();state.category=category.dataset.modalCategory;state.phase='all';state.query='';refreshProducts();goToProducts();}
  });
  document.getElementById('close-dialog').addEventListener('click',closeProduct);
  nodes.dialog.addEventListener('close',afterClose);
  nodes.dialog.addEventListener('click',event=>{if(event.target===nodes.dialog)closeProduct();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape' && nodes.dialog.open && typeof nodes.dialog.close!=='function')closeProduct();});
  nodes.language.addEventListener('change',()=>{
    state.language=nodes.language.value;
    translatePage();
  });
  translatePage();
  const initialProduct=params.get('product');
  if(bySlug.has(initialProduct))openProduct(initialProduct);
})();
