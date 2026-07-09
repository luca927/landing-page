 // Countdown pricing — sostituire PRICING_DEADLINE con la data/ora reale di scadenza offerta
  (function () {
    var PRICING_DEADLINE = new Date('2026-12-31T23:59:59'); // ⚠️ PLACEHOLDER — data di scadenza reale
 
    var el = document.getElementById('pricing-timer');
    if (!el) return;
 
    function update() {
      var diff = PRICING_DEADLINE - new Date();
      if (diff < 0) diff = 0;
 
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((diff / (1000 * 60)) % 60);
      var seconds = Math.floor((diff / 1000) % 60);
 
      el.querySelector('[data-unit="days"]').textContent = String(days).padStart(2, '0');
      el.querySelector('[data-unit="hours"]').textContent = String(hours).padStart(2, '0');
      el.querySelector('[data-unit="minutes"]').textContent = String(minutes).padStart(2, '0');
      el.querySelector('[data-unit="seconds"]').textContent = String(seconds).padStart(2, '0');
    }
 
    update();
    setInterval(update, 1000);
  })();

  // Accordion FAQ — un solo pannello aperto alla volta
  (function () {
    var items = document.querySelectorAll('#faq-list .faq-item');
 
    items.forEach(function (item) {
      var trigger = item.querySelector('.faq-trigger');
      var panel = item.querySelector('.faq-panel');
      var icon = item.querySelector('.faq-icon');
 
      trigger.addEventListener('click', function () {
        var isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';
 
        items.forEach(function (other) {
          other.querySelector('.faq-panel').style.maxHeight = '0px';
          other.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        });
 
        if (!isOpen) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          icon.style.transform = 'rotate(45deg)';
        }
      });
    });
  })();