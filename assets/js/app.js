// Global App Layer: Motion, Scroll Observer & Navigation Drawer
document.addEventListener('DOMContentLoaded', () => {
  // 1. Unified Mobile Menu Drawer & Toggle System
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  // Backdrop creation if drawer exists and backdrop doesn't
  let backdrop = document.querySelector('.mobile-drawer-backdrop');
  if (drawer && !backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-drawer-backdrop';
    document.body.appendChild(backdrop);
  }

  function closeMenu() {
    if (drawer) drawer.classList.remove('open');
    if (toggle) {
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    if (drawer) drawer.classList.add('open');
    if (toggle) {
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
    }
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (toggle && drawer) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when clicking any nav link inside drawer
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close on backdrop tap
    if (backdrop) {
      backdrop.addEventListener('click', closeMenu);
    }

    // Close on explicit close button if present
    const closeBtn = drawer.querySelector('.mobile-drawer-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // Also support legacy pages using .burger-btn and .mobile-menu if present
  const legacyBurger = document.querySelector('.burger-btn');
  const legacyMenu = document.querySelector('.mobile-menu');
  if (legacyBurger && legacyMenu) {
    legacyBurger.addEventListener('click', () => {
      const isOpen = legacyMenu.classList.toggle('open');
      legacyBurger.classList.toggle('active', isOpen);
      legacyBurger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    legacyMenu.querySelectorAll('a').forEach(l => {
      l.addEventListener('click', () => {
        legacyMenu.classList.remove('open');
        legacyBurger.classList.remove('active');
        legacyBurger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // 2. Accessible Accordion Controller
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      
      // Close peers if in single-expand mode
      const parent = item.closest('.accordion');
      if (parent && parent.dataset.single === 'true') {
        parent.querySelectorAll('.accordion-item').forEach(p => p.classList.remove('open'));
      }

      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // 3. Tab System (for Contact Hub and Filters)
  document.querySelectorAll('[role="tablist"]').forEach(tabList => {
    const tabs = tabList.querySelectorAll('[role="tab"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('aria-controls');
        
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.classList.remove('active');
        });
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('active');

        const panels = tabList.parentElement.querySelectorAll('[role="tabpanel"]');
        panels.forEach(p => {
          if (p.id === targetId) {
            p.hidden = false;
          } else {
            p.hidden = true;
          }
        });
      });
    });
  });

  // 4. Subtle Scroll-Triggered Reveal (Respects prefers-reduced-motion)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

      revealElements.forEach(el => observer.observe(el));
    }
  }

  // 5. Contact Form Validator with Honeypot Protection
  document.querySelectorAll('form[data-validate="true"]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const honeypot = form.querySelector('.honeypot input');
      if (honeypot && honeypot.value.trim() !== '') {
        // Spam bot caught
        return;
      }

      const statusEl = form.querySelector('.form-status');
      const requiredInputs = form.querySelectorAll('[required]');
      let isValid = true;

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ff4d4d';
        } else {
          input.style.borderColor = '';
        }
      });

      if (!isValid) {
        if (statusEl) statusEl.textContent = 'Please complete all required fields.';
        return;
      }

      const email = form.dataset.to || 'contact@mambaempire.com';
      const subject = form.querySelector('[name="subject"]')?.value || 'Corporate Inquiry - Mamba Empire';
      const name = form.querySelector('[name="name"]')?.value || 'Inquirer';
      const body = form.querySelector('[name="message"]')?.value || '';

      if (statusEl) statusEl.textContent = 'Opening your secure email client...';
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + name + '\n\n' + body)}`;
    });
  });
});
