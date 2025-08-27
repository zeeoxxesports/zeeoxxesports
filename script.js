// Smooth scroll for all [data-link]
    document.querySelectorAll('[data-link]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const href=a.getAttribute('href');
        if(href && href.startsWith('#')){ e.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'}); }
        // close drawer on click
        document.getElementById('drawer')?.classList.remove('open');
        document.getElementById('drawer').style.display='none';
      });
    });

    // Mobile menu
    const menuBtn=document.getElementById('menuBtn');
    const drawer=document.getElementById('drawer');
    menuBtn?.addEventListener('click',()=>{
      const open = drawer.style.display==='block';
      drawer.style.display = open ? 'none' : 'block';
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Apply form (front-end only)
    const applyForm=document.getElementById('applyForm');
    const applySuccess=document.getElementById('applySuccess');
    applyForm?.addEventListener('submit', (e)=>{
      e.preventDefault();
      applyForm.style.display='none';
      applySuccess.style.display='block';
    });

    // Contact form (front-end only)
    const contactForm=document.getElementById('contactForm');
    const contactSuccess=document.getElementById('contactSuccess');
    contactForm?.addEventListener('submit', (e)=>{
      e.preventDefault();
      contactForm.style.display='none';
      contactSuccess.style.display='block';
    });

    // Creator form
    const creatorForm = document.getElementById('creatorForm');
    const creatorSuccess = document.getElementById('creatorSuccess');
    creatorForm?.addEventListener('submit',(e)=>{
      e.preventDefault();
      creatorForm.style.display='none';
      creatorSuccess.style.display='block';
    });