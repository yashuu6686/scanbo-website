/* scanbo.com site script: mobile menu, forms, optional analytics. No dependencies. */
(function () {
  'use strict';

  // ---- Settings for the web team ------------------------------------------
  // GA_ID: your Google Analytics 4 ID, e.g. 'G-ABC123XYZ'. Leave empty for no analytics
  // (and no cookie notice). When set, analytics only loads after the visitor clicks Accept.
  var GA_ID = '';
  // Forms post to the same endpoint the current site uses: /api/forms/submit
  var API_BASE = (window.SCANBO_API_BASE || '').replace(/\/$/, '');
  // --------------------------------------------------------------------------

  var PHONE = {"Afghanistan":"+93","Albania":"+355","Algeria":"+213","Andorra":"+376","Angola":"+244","Antigua and Barbuda":"+1","Argentina":"+54","Armenia":"+374","Australia":"+61","Austria":"+43","Azerbaijan":"+994","Bahamas":"+1","Bahrain":"+973","Bangladesh":"+880","Barbados":"+1","Belarus":"+375","Belgium":"+32","Belize":"+501","Benin":"+229","Bhutan":"+975","Bolivia":"+591","Bosnia and Herzegovina":"+387","Botswana":"+267","Brazil":"+55","Brunei":"+673","Bulgaria":"+359","Burkina Faso":"+226","Burundi":"+257","Cambodia":"+855","Cameroon":"+237","Canada":"+1","Cape Verde":"+238","Central African Republic":"+236","Chad":"+235","Chile":"+56","China":"+86","Colombia":"+57","Comoros":"+269","Congo":"+242","Congo (DRC)":"+243","Costa Rica":"+506","Croatia":"+385","Cuba":"+53","Cyprus":"+357","Czech Republic":"+420","Denmark":"+45","Djibouti":"+253","Dominica":"+1","Dominican Republic":"+1","Ecuador":"+593","Egypt":"+20","El Salvador":"+503","Equatorial Guinea":"+240","Eritrea":"+291","Estonia":"+372","Eswatini":"+268","Ethiopia":"+251","Fiji":"+679","Finland":"+358","France":"+33","Gabon":"+241","Gambia":"+220","Georgia":"+995","Germany":"+49","Ghana":"+233","Greece":"+30","Grenada":"+1","Guatemala":"+502","Guinea":"+224","Guinea-Bissau":"+245","Guyana":"+592","Haiti":"+509","Honduras":"+504","Hungary":"+36","Iceland":"+354","India":"+91","Indonesia":"+62","Iran":"+98","Iraq":"+964","Ireland":"+353","Israel":"+972","Italy":"+39","Jamaica":"+1","Japan":"+81","Jordan":"+962","Kazakhstan":"+7","Kenya":"+254","Kiribati":"+686","Kuwait":"+965","Kyrgyzstan":"+996","Laos":"+856","Latvia":"+371","Lebanon":"+961","Lesotho":"+266","Liberia":"+231","Libya":"+218","Liechtenstein":"+423","Lithuania":"+370","Luxembourg":"+352","Madagascar":"+261","Malawi":"+265","Malaysia":"+60","Maldives":"+960","Mali":"+223","Malta":"+356","Marshall Islands":"+692","Mauritania":"+222","Mauritius":"+230","Mexico":"+52","Micronesia":"+691","Moldova":"+373","Monaco":"+377","Mongolia":"+976","Montenegro":"+382","Morocco":"+212","Mozambique":"+258","Myanmar":"+95","Namibia":"+264","Nauru":"+674","Nepal":"+977","Netherlands":"+31","New Zealand":"+64","Nicaragua":"+505","Niger":"+227","Nigeria":"+234","North Korea":"+850","North Macedonia":"+389","Norway":"+47","Oman":"+968","Pakistan":"+92","Palau":"+680","Palestine":"+970","Panama":"+507","Papua New Guinea":"+675","Paraguay":"+595","Peru":"+51","Philippines":"+63","Poland":"+48","Portugal":"+351","Qatar":"+974","Romania":"+40","Russia":"+7","Rwanda":"+250","Saint Kitts and Nevis":"+1","Saint Lucia":"+1","Saint Vincent and the Grenadines":"+1","Samoa":"+685","San Marino":"+378","Sao Tome and Principe":"+239","Saudi Arabia":"+966","Senegal":"+221","Serbia":"+381","Seychelles":"+248","Sierra Leone":"+232","Singapore":"+65","Slovakia":"+421","Slovenia":"+386","Solomon Islands":"+677","Somalia":"+252","South Africa":"+27","South Korea":"+82","South Sudan":"+211","Spain":"+34","Sri Lanka":"+94","Sudan":"+249","Suriname":"+597","Sweden":"+46","Switzerland":"+41","Syria":"+963","Taiwan":"+886","Tajikistan":"+992","Tanzania":"+255","Thailand":"+66","Timor-Leste":"+670","Togo":"+228","Tonga":"+676","Trinidad and Tobago":"+1","Tunisia":"+216","Turkey":"+90","Turkmenistan":"+993","Tuvalu":"+688","Uganda":"+256","Ukraine":"+380","United Arab Emirates":"+971","United Kingdom":"+44","United States":"+1","Uruguay":"+598","Uzbekistan":"+998","Vanuatu":"+678","Vatican City":"+379","Venezuela":"+58","Vietnam":"+84","Yemen":"+967","Zambia":"+260","Zimbabwe":"+263"};

  function track(name, params) { if (window.gtag) window.gtag('event', name, params || {}); }

  // Mobile menu — event delegation so it still works after Next.js remounts the nav
  function menuEls() {
    return {
      btn: document.querySelector('.menu-btn'),
      mnav: document.getElementById('mnav')
    };
  }
  function setMenu(open) {
    var els = menuEls(), btn = els.btn, mnav = els.mnav;
    if (!btn || !mnav) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) mnav.removeAttribute('hidden');
    else mnav.setAttribute('hidden', '');
    mnav.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  }
  document.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest && e.target.closest('.menu-btn');
    if (btn) {
      e.preventDefault();
      setMenu(btn.getAttribute('aria-expanded') !== 'true');
      return;
    }
    // Close mobile menu after in-app navigation (next/link still renders <a>)
    if (e.target && e.target.closest && e.target.closest('#mnav a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    var mnav = document.getElementById('mnav');
    var btn = document.querySelector('.menu-btn');
    if (e.key === 'Escape' && mnav && !mnav.hidden) { setMenu(false); if (btn) btn.focus(); }
  });
  window.addEventListener('resize', function () {
    var mnav = document.getElementById('mnav');
    if (window.innerWidth > 980 && mnav && !mnav.hidden) setMenu(false);
  });

  // Forms
  function setErr(el, msg) {
    var w = el.closest('.fld'); if (!w) return;
    w.classList.toggle('bad', !!msg);
    var e = w.querySelector('.err'); if (e) e.textContent = msg || '';
  }
  function digits(v) { return v.replace(/[\s\-().+]/g, ''); }
  function validate(form) {
    var first = null;
    Array.prototype.forEach.call(form.querySelectorAll('input,select,textarea'), function (el) {
      if (!el.name || el.classList.contains('hp')) return;
      var v = el.type === 'file' ? (el.files && el.files[0]) : el.value.trim(), msg = '';
      if (el.required && !v) msg = el.type === 'file' ? 'Please attach your CV or resume.' : 'This field is required.';
      else if (el.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = 'Please enter a valid email address.';
      else if (el.type === 'tel' && v && !/^[0-9]{7,20}$/.test(digits(v))) msg = 'Please enter a valid phone number (7 to 20 digits).';
      else if (el.type === 'file' && v && v.size > 5 * 1024 * 1024) msg = 'The file must be 5 MB or less.';
      setErr(el, msg);
      if (msg && !first) first = el;
    });
    if (first) first.focus();
    return !first;
  }
  Array.prototype.forEach.call(document.querySelectorAll('form[data-form]'), function (form) {
    form.addEventListener('input', function (e) { setErr(e.target, ''); });
    form.addEventListener('change', function (e) {
      setErr(e.target, '');
      if (e.target.type === 'file') {
        var f = e.target.files && e.target.files[0], s = form.querySelector('[data-file]');
        if (s) s.textContent = f ? f.name : 'PDF or Word, up to 5 MB';
      }
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ferr = form.querySelector('.ferr'); ferr.style.display = 'none';
      if (form.elements.website_hp && form.elements.website_hp.value) return;   // spam trap
      if (!validate(form)) return;
      var type = form.getAttribute('data-form');
      var v = function (n) { var el = form.elements[n]; return el ? el.value.trim() : ''; };
      var opts = { method: 'POST' }, phone = digits(v('phone')), cc = PHONE[v('country')] || '';
      if (type === 'career') {
        var fd = new FormData();
        fd.append('formType', 'career'); fd.append('name', v('name')); fd.append('email', v('email'));
        fd.append('position', v('position') || 'General Application'); fd.append('countryCode', cc); fd.append('phone', phone);
        if (v('note')) fd.append('note', v('note'));
        fd.append('resume', form.elements.resume.files[0]);
        opts.body = fd;
      } else {
        opts.headers = { 'Content-Type': 'application/json' };
        opts.body = JSON.stringify({ formType: 'contact', firstName: v('firstName'), lastName: v('lastName'), email: v('email'), countryCode: cc,
          phone: phone, organisation: v('organisation'), role: v('role'), message: v('message'), country: v('country') });
      }
      var b = form.querySelector('button[type=submit]'), label = b.textContent;
      b.disabled = true; b.textContent = 'Sending…';
      fetch(API_BASE + '/api/forms/submit/', opts)
        .then(function (r) { return r.json().catch(function () { return null; }).then(function (j) { if (!r.ok || !j || j.ok !== true) throw new Error('failed'); }); })
        .then(function () {
          form.classList.add('sent');
          var ok = form.querySelector('.ok'); ok.setAttribute('tabindex', '-1'); ok.focus();
          track('generate_lead', { form_type: type });
        })
        .catch(function () {
          ferr.textContent = 'Sorry, this could not be sent. Please try again, or email ' + (type === 'career' ? 'hr@scanbo.com' : 'info@scanbo.com') + '.';
          ferr.style.display = 'block';
        })
        .then(function () { b.disabled = false; b.textContent = label; });
    });
  });

  // Careers: "Apply" on a role pre-selects it in the application form
  Array.prototype.forEach.call(document.querySelectorAll('a.job[data-position]'), function (a) {
    a.addEventListener('click', function () { var s = document.getElementById('position'); if (s) s.value = a.getAttribute('data-position'); });
  });

  // Optional analytics with consent
  if (GA_ID) {
    var KEY = 'scanbo-consent', c = null;
    try { c = localStorage.getItem(KEY); } catch (_) {}
    var loadGA = function () {
      var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID; document.head.appendChild(s);
      window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date()); window.gtag('config', GA_ID);
    };
    if (c === 'yes') loadGA();
    else if (c !== 'no') {
      var box = document.getElementById('cookie');
      if (box) {
        box.innerHTML = '<p>We use analytics cookies to understand how this site is used. See our <a href="/legal/cookie-preferences/">cookie policy</a>.</p>' +
          '<div><button class="y" type="button" data-c="yes">Accept</button><button type="button" data-c="no">Decline</button></div>';
        box.hidden = false;
        box.addEventListener('click', function (e) {
          var val = e.target.getAttribute && e.target.getAttribute('data-c'); if (!val) return;
          try { localStorage.setItem(KEY, val); } catch (_) {}
          box.hidden = true; if (val === 'yes') loadGA();
        });
      }
    }
  }
})();
