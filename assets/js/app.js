// Global App Layer: Motion, Scroll Observer & Navigation Drawer
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
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
