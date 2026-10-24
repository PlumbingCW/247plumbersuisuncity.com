(function(){
  'use strict';
  var doc = document.documentElement;
  doc.className += ' js';
  var BP = 768;
  var burger = document.querySelector('.hamburger');
  var drawer = document.querySelector('.mob-drawer');
  var overlay = document.querySelector('.mob-overlay');
  var closeBtn = document.querySelector('.drawer-close');
  function setOpen(open){
    if(!drawer) return;
    drawer.classList.toggle('open', open);
    if(overlay) overlay.classList.toggle('visible', open);
    if(burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    doc.style.overflow = open ? 'hidden' : '';
    if(open && closeBtn){ closeBtn.focus(); }
    if(!open && burger && document.activeElement && drawer.contains(document.activeElement)){ burger.focus(); }
  }
  if(burger) burger.addEventListener('click', function(){ setOpen(!drawer.classList.contains('open')); });
  if(closeBtn) closeBtn.addEventListener('click', function(){ setOpen(false); });
  if(overlay) overlay.addEventListener('click', function(){ setOpen(false); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') setOpen(false); });
  if(drawer){
    var links = drawer.querySelectorAll('a');
    for(var i = 0; i < links.length; i++){ links[i].addEventListener('click', function(){ setOpen(false); }); }
  }
  window.addEventListener('resize', function(){ if(window.innerWidth > BP) setOpen(false); });

  var items = document.querySelectorAll('.faq-item');
  Array.prototype.forEach.call(items, function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-answer');
    if(!q || !a) return;
    q.addEventListener('click', function(){
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
