/* ============================================================
   PRO NAILS — Main JavaScript
   ============================================================ */


/* ---- PHOTO STRIP: SCROLL-DRIVEN CAROUSEL ---- */
(function () {
  const strip = document.querySelector('.photo-strip');
  if (!strip) return;

  function update() {
    const maxTranslate = strip.scrollWidth - window.innerWidth;
    if (maxTranslate <= 0) return;
    const translate = Math.min(window.scrollY * 0.6, maxTranslate);
    strip.style.transform = `translateX(-${translate}px)`;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();


/* ---- MOBILE NAV ---- */
(function () {
  const hamburger = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
})();


/* ---- ACTIVE NAV LINK (scroll spy) ---- */
(function () {
  const sectionIds = ['home', 'services', 'booking', 'about', 'contact'];
  const navLinks = document.querySelectorAll('.nav-links a');
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;

  function update() {
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= navH + 10) current = id;
    }
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();


/* ---- SCROLL REVEAL ---- */
(function () {
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


/* ---- BOOKING CALENDAR ---- */
(function () {
  const grid = document.getElementById('cal-grid');
  const title = document.getElementById('cal-title');
  if (!grid || !title) return;

  const MONTHS = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  const DAY_NAMES = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
  let selectedTs = null;

  function render() {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    title.textContent = `${MONTHS[month]} ${year}`;

    let html = DAY_NAMES.map(d => `<div class="cal-day-name">${d}</div>`).join('');

    for (let i = 0; i < firstWeekday; i++) {
      html += `<div class="cal-day cal-empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      date.setHours(0, 0, 0, 0);
      const ts = date.getTime();
      const isPast = date < today;
      const isSunday = date.getDay() === 0;
      const isToday = ts === today.getTime();
      const isSelected = ts === selectedTs;

      let cls = 'cal-day';
      if (isPast || isSunday) cls += ' cal-past';
      if (isToday && !isPast) cls += ' cal-today';
      if (isSelected) cls += ' cal-selected';

      html += `<div class="${cls}" data-ts="${ts}">${d}</div>`;
    }

    grid.innerHTML = html;

    grid.querySelectorAll('.cal-day:not(.cal-empty):not(.cal-past)').forEach(el => {
      el.addEventListener('click', () => {
        selectedTs = parseInt(el.dataset.ts, 10);
        render();
        updateDateDisplay();
      });
    });
  }

  function updateDateDisplay() {
    const display = document.getElementById('cal-date-display');
    const hiddenInput = document.getElementById('booking-date');
    if (!display) return;

    if (selectedTs) {
      const d = new Date(selectedTs);
      const str = d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
      display.innerHTML = `<strong>${str}</strong>`;
      if (hiddenInput) hiddenInput.value = str;
    } else {
      display.textContent = 'Select a date above';
    }
  }

  document.getElementById('cal-prev')?.addEventListener('click', () => {
    viewDate.setMonth(viewDate.getMonth() - 1);
    render();
  });

  document.getElementById('cal-next')?.addEventListener('click', () => {
    viewDate.setMonth(viewDate.getMonth() + 1);
    render();
  });

  render();
  updateDateDisplay();
})();


/* ---- TIME SLOT SELECTION ---- */
(function () {
  const timeGrid = document.querySelector('.time-grid');
  if (!timeGrid) return;

  timeGrid.querySelectorAll('.time-btn:not(.unavail)').forEach(btn => {
    btn.addEventListener('click', () => {
      timeGrid.querySelectorAll('.time-btn').forEach(b => b.classList.remove('t-selected'));
      btn.classList.add('t-selected');
      const hiddenInput = document.getElementById('booking-time');
      if (hiddenInput) hiddenInput.value = btn.textContent.trim();
    });
  });
})();


/* ---- STAT COUNTUP ---- */
(function () {
  const stats = document.querySelectorAll('.stat-num[data-count]');
  if (!stats.length || !window.IntersectionObserver) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();
    const suffix = el.dataset.suffix || '';

    function tick(now) {
      const elapsed = Math.min(now - start, duration);
      const val = Math.round(easeOut(elapsed / duration) * target);
      el.textContent = val + suffix;
      if (elapsed < duration) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));
})();


/* ---- BOOKING FORM SUBMISSION ---- */
(function () {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true;

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');

      const successEl = form.querySelector('.form-success');
      form.querySelectorAll('.time-btn').forEach(b => b.classList.remove('t-selected'));
      form.querySelectorAll('input:not([type=hidden]), select, textarea').forEach(f => { f.value = ''; });
      if (successEl) {
        successEl.style.display = 'block';
        setTimeout(() => { successEl.style.display = 'none'; }, 6000);
      }
    } catch {
      alert('Something went wrong. Please try again or call us at (206) 555-0182.');
    } finally {
      btn.disabled = false;
    }
  });
})();


/* ---- CONTACT FORM SUBMISSION ---- */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');

      const successEl = form.querySelector('.form-success');
      form.querySelectorAll('input, select, textarea').forEach(f => { f.value = ''; });
      if (successEl) {
        successEl.style.display = 'block';
        setTimeout(() => { successEl.style.display = 'none'; }, 6000);
      }
    } catch {
      alert('Something went wrong. Please try again or call us at (206) 555-0182.');
    } finally {
      btn.disabled = false;
    }
  });
})();
