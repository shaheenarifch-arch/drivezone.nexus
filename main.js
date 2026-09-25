(function(){
  'use strict';
  var $=function(id){return document.getElementById(id)};

  /* Affiliate links. Plain "&" in JS strings, never "&amp;". */
  var SHOP='https://www.awin1.com/cread.php?awinmid=32471&awinaffid=3067297';
  var PROMO='https://www.awin1.com/cread.php?s=4594045&v=32471&q=588698&r=3067297';
  var deep=function(path){return SHOP+'&ued='+encodeURIComponent('https://www.eonon.com/'+path)};
  var NEWEST=deep('newest-android-car-stereos.aspx');
  var MAKES={
    bmw:{label:'BMW',url:deep('car-type/bmw.html')},
    chevrolet:{label:'Chevrolet/GMC',url:deep('car-type/chevroletgmc.html')},
    chevy:{label:'Chevrolet/GMC',url:deep('car-type/chevroletgmc.html')},
    gmc:{label:'Chevrolet/GMC',url:deep('car-type/chevroletgmc.html')},
    toyota:{label:'Toyota',url:deep('car-type/toyota.html')},
    ram:{label:'RAM',url:SHOP},
    'dash camera':{label:'dash cameras',url:SHOP}
  };
  var link=function(href,text){
    var a=document.createElement('a');a.href=href;a.target='_blank';a.rel='sponsored noopener noreferrer';a.textContent=text;return a;
  };
  var say=function(el,prefix,a){el.textContent=prefix||'';if(a)el.appendChild(a)};

  /* Partner chips */
  var A={shop:SHOP,promo:PROMO,newest:NEWEST};
  document.querySelectorAll('[data-aff]').forEach(function(a){if(A[a.dataset.aff])a.href=A[a.dataset.aff]});

  /* Mobile menu */
  var m=$('menu'),n=$('mobile');
  if(m&&n){
    var close=function(){n.classList.remove('open');m.textContent='☰';m.setAttribute('aria-expanded','false')};
    m.addEventListener('click',function(){var o=n.classList.toggle('open');m.textContent=o?'×':'☰';m.setAttribute('aria-expanded',String(o))});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  }

  /* Quick search */
  var qs=$('quickSearch');
  if(qs)qs.addEventListener('submit',function(e){
    e.preventDefault();
    var q=$('productSearch').value.trim().toLowerCase(),s=$('quickSearchStatus');
    if(!q){s.textContent='Search BMW, Chevrolet/GMC, Toyota, RAM or dash camera.';return}
    var hit=Object.keys(MAKES).find(function(k){return q.indexOf(k)>-1});
    if(hit){say(s,'Browse options for '+MAKES[hit].label+': ',link(MAKES[hit].url,'Check Our Products →'));return}
    say(s,'No exact match yet. ',link(NEWEST,'Browse the newest Android stereos →'));
  });

  /* Fit check */
  var yr=$('fitYear');
  if(yr){var now=new Date().getFullYear()+1;for(var y=now;y>=2000;y--){var o=document.createElement('option');o.value=o.textContent=y;yr.appendChild(o)}}
  var finder=$('finder');
  if(finder)finder.addEventListener('submit',function(e){
    e.preventDefault();
    var s=$('finderStatus'),make=$('fitMake').value,year=yr.value,model=$('fitModel').value.trim();
    if(!year||!make){s.textContent='Pick a year and make to continue.';return}
    var hit=MAKES[make],veh=[year,hit?hit.label:make,model].filter(Boolean).join(' ');
    say(s,'Next: confirm harness, dash kit and factory-feature support for your '+veh+'. ',link(hit?hit.url:NEWEST,hit?'Shop '+hit.label+' units →':'Browse universal units →'));
  });

  /* Updates signup via email (no backend needed) */
  var nl=$('newsletter');
  if(nl)nl.addEventListener('submit',function(e){
    e.preventDefault();
    var x=$('email'),c=$('consent'),s=$('status'),nm=$('nlName').value.trim();
    if(!x.checkValidity()){s.textContent='Enter a valid email address.';return}
    if(!c.checked){s.textContent='Please tick the consent box.';return}
    var body='Please add me to DriveZone Nexus updates.\n\nName: '+(nm||'-')+'\nEmail: '+x.value;
    window.location.href='mailto:agent@getservices.ai?subject='+encodeURIComponent('DriveZone Nexus updates signup')+'&body='+encodeURIComponent(body);
    s.textContent='Your email app should open. Just hit send and you\'re in.';
  });

  /* Carousel */
  var pr=$('productRow'),pp=$('productsPrev'),pn=$('productsNext');
  if(pr&&pp&&pn){var step=function(){return Math.min(pr.clientWidth*.82,400)};
    pp.addEventListener('click',function(){pr.scrollBy({left:-step(),behavior:'smooth'})});
    pn.addEventListener('click',function(){pr.scrollBy({left:step(),behavior:'smooth'})});}

  /* Cookie notice (informational; site sets no tracking cookies) */
  var k=$('cookie'),seen=null;
  if(k){try{seen=localStorage.getItem('dzNotice')}catch(_){}
    if(!seen)k.classList.add('show');
    var ok=$('cookieOk');if(ok)ok.addEventListener('click',function(){try{localStorage.setItem('dzNotice','1')}catch(_){}k.classList.remove('show')});}

  var yrEl=$('year');if(yrEl)yrEl.textContent=new Date().getFullYear();
})();
