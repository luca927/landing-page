document.addEventListener('DOMContentLoaded', () => {

  // 1. MENU MOBILE (HAMBURGER)
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (iconOpen) iconOpen.classList.add('hidden');
        if (iconClose) iconClose.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      });
    });
  }

  // 2. COUNTDOWN PRICING
  const PRICING_DEADLINE = new Date('2026-12-31T23:59:59'); // ⚠️ PLACEHOLDER
  const timerEl = document.getElementById('pricing-timer');

  if (timerEl) {
    function updateTimer() {
      const diff = Math.max(0, PRICING_DEADLINE - new Date());

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const dEl = timerEl.querySelector('[data-unit="days"]');
      const hEl = timerEl.querySelector('[data-unit="hours"]');
      const mEl = timerEl.querySelector('[data-unit="minutes"]');
      const sEl = timerEl.querySelector('[data-unit="seconds"]');

      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
      if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // 3. ACCORDION FAQ
  const faqItems = document.querySelectorAll('#faq-list .faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    const icon = item.querySelector('.faq-icon');

    if (trigger && panel) {
      trigger.addEventListener('click', () => {
        const isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';

        faqItems.forEach(other => {
          const otherPanel = other.querySelector('.faq-panel');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherPanel) otherPanel.style.maxHeight = '0px';
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          if (icon) icon.style.transform = 'rotate(45deg)';
        }
      });
    }
  });

});