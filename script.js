// --- Year auto ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Fake status pulse ---
const status = document.getElementById('status-pill');
if (status){
  let ok = true;
  setInterval(()=>{
    ok = !ok;
    status.innerHTML = ok
      ? '<span class="dot dot-ok"></span><span>Status: Normal</span>'
      : '<span class="dot" style="background:#f59e0b"></span><span>Status: Degraded</span>';
  }, 9000);
}

// --- Mobile menu ---
(function(){
  const root = document.getElementById('mobileNav');
  const panel = root ? root.querySelector('.mobile-nav__panel') : null;
  const backdrop = document.getElementById('mobileBackdrop');
  const openBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('menuClose');

  function open() {
    if (!root) return;
    root.hidden = false;
    root.classList.add('open');
    openBtn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    if (!root) return;
    root.classList.remove('open');
    openBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
    setTimeout(()=>{ root.hidden = true; }, 200);
    openBtn.focus();
  }

  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);

  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && root && !root.hidden) close();
  });

  if (root){
    root.querySelectorAll('[data-close]').forEach(el=>{
      el.addEventListener('click', close);
    });
  }
})();