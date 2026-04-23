// ── DEVTOOLS EASTER EGG ──────────────────────────────────────────────
(function () {
  const G = 'color:#3FB950;font-weight:bold;font-family:monospace;';
  const W = 'color:#E6EDF3;font-family:monospace;font-size:12px;';
  const B = 'color:#58A6FF;font-family:monospace;font-size:12px;';
  const D = 'color:#484F58;font-family:monospace;font-size:11px;';

  function printWelcome() {
    console.clear();
    console.log('%c' + [
      ' ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗██╗   ██╗███████╗██╗  ██╗',
      ' ██╔══██╗██║  ██║██╔══██╗████╗  ██║██║   ██║██╔════╝██║  ██║',
      ' ██║  ██║███████║███████║██╔██╗ ██║██║   ██║███████╗███████║',
      ' ██║  ██║██╔══██║██╔══██║██║╚██╗██║██║   ██║╚════██║██╔══██║',
      ' ██████╔╝██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████║██║  ██║',
      ' ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝',
    ].join('\n'), G + 'font-size:9px;line-height:1.2;');

    console.log('%c👀  Oops — trying to be a techie and peeking under the hood?', G + 'font-size:15px;');
    console.log('%cHonestly, respect. This is exactly what I do too.', W);
    console.log('%c' + '─'.repeat(60), D);
    console.log('%cStack: Vanilla HTML · CSS · JS  |  No frameworks. Just craft.', B);
    console.log('%cHosted on: Vercel  |  Fonts: JetBrains Mono + Syne (Google Fonts)', B);
    console.log('%c' + '─'.repeat(60), D);
    console.log('%c💡  Since you\'re already here and clearly technical —', W);
    console.log('%c    I\'m actively open to DevOps / Platform / Cloud roles.', W);
    console.log('%c' + '─'.repeat(60), D);
    console.log('%c📧  dhanushdchandran@gmail.com', G);
    console.log('%c💼  linkedin.com/in/dhanushdchandran', B);
    console.log('%c🐙  github.com/dhanushdc21', B);
    console.log('%c' + '─'.repeat(60), D);
    console.log('%c🔧  Type help() for secret console commands', D);
  }

  // Fire immediately (shows on page load inside console)
  printWelcome();

  // Also detect when devtools is opened mid-session
  let devtoolsOpen = false;
  const threshold = 160;
  setInterval(function () {
    const widthDiff  = window.outerWidth  - window.innerWidth  > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    if ((widthDiff || heightDiff) && !devtoolsOpen) {
      devtoolsOpen = true;
      printWelcome();
    } else if (!widthDiff && !heightDiff) {
      devtoolsOpen = false;
    }
  }, 1000);

  // ── Secret console commands ──────────────────────────────────────
  window.help = function () {
    console.log('%cSECRET CONSOLE COMMANDS', G + 'font-size:13px;');
    [
      ['contact()', 'print all contact details'],
      ['hire()',    'open email draft directly'],
      ['skills()',  'print full tech stack as JSON'],
      ['whoami()',  'about Dhanush'],
      ['sudo()',    'nice try 😄'],
    ].forEach(([cmd, desc]) => {
      console.log('%c  ' + cmd.padEnd(14) + '%c→ ' + desc,
        'color:#58A6FF;font-family:monospace;', 'color:#7D8590;font-family:monospace;font-size:11px;');
    });
  };

  window.contact = function () {
    console.log('%c── CONTACT ──────────────────────────────', G);
    console.log('%c📧  dhanushdchandran@gmail.com',     'color:#3FB950;font-family:monospace;font-size:13px;');
    console.log('%c📞  +91 94977 71518',                'color:#3FB950;font-family:monospace;font-size:13px;');
    console.log('%c💼  linkedin.com/in/dhanushdchandran','color:#58A6FF;font-family:monospace;font-size:13px;');
    console.log('%c🐙  github.com/dhanushdc21',          'color:#58A6FF;font-family:monospace;font-size:13px;');
  };

  window.hire = function () {
    console.log('%c🚀 Nice initiative. Opening email now...', G + 'font-size:13px;');
    window.location.href = 'mailto:dhanushdchandran@gmail.com?subject=Hiring Inquiry (spotted via DevTools)';
  };

  window.skills = function () {
    console.log('%c── TECH STACK ───────────────────────────', G);
    console.dir({
      cloud:      ['GCP ★', 'AWS', 'Terraform', 'Cloud Run', 'VPC', 'IAM', 'Secret Manager'],
      cicd:       ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'GitOps', 'Ansible', 'Jenkins'],
      containers: ['Docker', 'Kubernetes (GKE)', 'Helm', 'Trivy'],
      security:   ['Wazuh', 'CrowdStrike', 'SigNoz', 'OpenTelemetry', 'GCP SCC', 'NIST'],
      languages:  ['Python', 'Bash', 'PowerShell', 'Node.js', 'YAML'],
      practices:  ['ISO 27001', 'CIS Benchmarks', 'Zero-Trust', 'Agile/Scrum'],
    });
  };

  window.whoami = function () {
    console.log('%c── WHOAMI ───────────────────────────────', G);
    console.log('%cDhanush D Chandran',                              G + 'font-size:14px;');
    console.log('%cPlatform Engineer @ Quantiphi Analytics Solutions', W);
    console.log('%cB.Tech CSE · CGPA 7.86 · Mar Baselios College',    W);
    console.log('%cCerts: Google ACE · HashiCorp Terraform Associate', B);
    console.log('%cLocation: Trivandrum, India · UTC+5:30',           D);
  };

  window.sudo = function () {
    console.log('%cPermission denied 😄  — but I like your style.', G + 'font-size:13px;');
    console.log('%cSeriously though, reach out: dhanushdchandran@gmail.com', W);
  };
})();


// ── Experience tab switcher ──────────────────────────────────────────────────
function showExp(id, btn) {
  document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('exp-' + id).classList.add('active');
  btn.classList.add('active');
}

// ── Scroll reveal ─────────────────────────────────────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── Active nav on scroll ──────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

// ── PHOTO: load from assets/images/ — only works when served, not file:// ──
(function() {
  const img = document.querySelector('.hero-photo-section img');
  if (!img) return;
  // Only attempt external load when actually served (http/https), not file://
  if (location.protocol === 'file:') return; // skip on local file:// — base64 already works
  const local = new Image();
  local.onload = () => { img.src = local.src; };
  local.onerror = () => {}; // keep embedded base64 as fallback
  local.src = 'assets/images/photo.jpg';
})();

// ── INTERACTIVE TERMINAL ──────────────────────────────────────────────
const COMMANDS = {
  help: () => [
    { t:'comment', v:'# available commands:' },
    { t:'key', v:'  hello     ', s:'→ say hi' },
    { t:'key', v:'  hire      ', s:'→ how to reach me' },
    { t:'key', v:'  email     ', s:'→ open email client directly' },
    { t:'key', v:'  linkedin  ', s:'→ open my LinkedIn' },
    { t:'key', v:'  github    ', s:'→ open my GitHub' },
    { t:'key', v:'  projects  ', s:'→ what I\'ve built' },
    { t:'key', v:'  skills    ', s:'→ my tech stack' },
    { t:'key', v:'  about     ', s:'→ who I am' },
    { t:'key', v:'  status    ', s:'→ availability' },
    { t:'key', v:'  clear     ', s:'→ clear the terminal' },
    { t:'comment', v:'# tip: ↑↓ for history · Tab to autocomplete' },
  ],
  hello: () => [
    { t:'val',     v:'Hey there! 👋' },
    { t:'output',  v:'I\'m Dhanush — a Platform & DevOps Engineer based in Trivandrum, India.' },
    { t:'output',  v:'I build CI/CD pipelines, automate GCP infrastructure, and keep cloud platforms secure.' },
    { t:'comment', v:'# type "hire" to get in touch  |  "help" to see all commands' },
  ],
  hi:  'hello',
  hey: 'hello',
  hire: () => [
    { t:'val',    v:'✅  open to DevOps / Platform / Cloud Engineering roles' },
    { t:'output', v:'' },
    { t:'comment',v:'# fastest ways to reach me:' },
    { t:'key',    v:'  email    ', s:'→ dhanushdchandran@gmail.com' },
    { t:'key',    v:'  linkedin ', s:'→ linkedin.com/in/dhanushdchandran' },
    { t:'key',    v:'  phone    ', s:'→ +91 94977 71518' },
    { t:'output', v:'' },
    { t:'output', v:'I reply within 24 hours. Type "email" to open a draft right now →' },
  ],
  email: () => {
    setTimeout(() => { window.location.href = 'mailto:dhanushdchandran@gmail.com?subject=Opportunity for Dhanush'; }, 400);
    return [
      { t:'val',    v:'opening mail client…' },
      { t:'output', v:'to: dhanushdchandran@gmail.com' },
      { t:'comment',v:'# if nothing opened, copy the address above' },
    ];
  },
  linkedin: () => {
    setTimeout(() => { window.open('https://linkedin.com/in/dhanushdchandran','_blank'); }, 400);
    return [{ t:'val', v:'opening LinkedIn → linkedin.com/in/dhanushdchandran' }];
  },
  github: () => {
    setTimeout(() => { window.open('https://github.com/dhanushdc21','_blank'); }, 400);
    return [{ t:'val', v:'opening GitHub → github.com/dhanushdc21' }];
  },
  projects: () => [
    { t:'comment', v:'# production work, 2025:' },
    { t:'key', v:'  [1] ', s:'Hardened CI/CD — 0 unscanned artifacts in prod' },
    { t:'key', v:'  [2] ', s:'Terraform-first GCP — 4 envs fully in IaC' },
    { t:'key', v:'  [3] ', s:'CVE remediation — ~40% critical reduction' },
    { t:'key', v:'  [4] ', s:'Unified observability — 6 tools → 1 pipeline' },
    { t:'comment', v:'# scroll up to see full case studies ↑' },
  ],
  skills: () => [
    { t:'comment', v:'# primary stack:' },
    { t:'key', v:'  cloud      ', s:'→ GCP, AWS, Terraform, Cloud Run, IAM' },
    { t:'key', v:'  cicd       ', s:'→ GitHub Actions, ArgoCD, GitOps, Ansible' },
    { t:'key', v:'  containers ', s:'→ Docker, Kubernetes (GKE), Helm, Trivy' },
    { t:'key', v:'  security   ', s:'→ Wazuh, CrowdStrike, SigNoz, OpenTelemetry' },
    { t:'key', v:'  code       ', s:'→ Python, Bash, PowerShell, Node.js, YAML' },
  ],
  about: () => [
    { t:'comment', v:'# whoami' },
    { t:'val',    v:'Dhanush D Chandran' },
    { t:'output', v:'Platform Engineer @ Quantiphi Analytics Solutions' },
    { t:'output', v:'B.Tech CSE · Mar Baselios College · CGPA 7.86' },
    { t:'output', v:'Certs: Google ACE · HashiCorp Terraform Associate (2025)' },
    { t:'output', v:'Location: Trivandrum, India · UTC+5:30' },
  ],
  status: () => [
    { t:'val',    v:'● STATUS: AVAILABLE' },
    { t:'output', v:'Actively looking for DevOps / Platform / Cloud Engineering roles.' },
    { t:'output', v:'Type "hire" to get started.' },
  ],
  clear: () => '__clear__',
  whoami:  'about',
  contact: 'hire',
  ls:   () => [{ t:'output', v:'experience/  projects/  skills/  education/  contact/' }],
  pwd:  () => [{ t:'output', v:'/home/dhanush/portfolio' }],
  date: () => [{ t:'output', v: new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'}) + ' IST' }],
};

function escH(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function makeLine(t, v, s) {
  const d = document.createElement('div');
  d.style.cssText = 'font-size:0.78rem;line-height:1.75;';
  if      (t==='user')    d.innerHTML = `<span style="color:var(--green)">❯</span> <span style="color:var(--text)">${escH(v)}</span>`;
  else if (t==='comment') d.innerHTML = `<span style="color:var(--text-dim)">${escH(v)}</span>`;
  else if (t==='val')     d.innerHTML = `<span style="color:var(--green)">${escH(v)}</span>`;
  else if (t==='key')     d.innerHTML = `<span style="color:var(--blue)">${escH(v)}</span><span style="color:var(--text-muted)">${escH(s||'')}</span>`;
  else if (t==='error')   d.innerHTML = `<span style="color:var(--red)">${escH(v)}</span>`;
  else                    d.innerHTML = `<span style="color:var(--text-muted)">${escH(v)}</span>`;
  return d;
}

function runCmd(raw) {
  const body = document.getElementById('chat-body');
  const cmd  = raw.trim().toLowerCase();
  if (!cmd) return;
  body.appendChild(makeLine('user', raw.trim()));

  let handler = COMMANDS[cmd];
  if (typeof handler === 'string') handler = COMMANDS[handler]; // alias

  if (!handler) {
    body.appendChild(makeLine('error', `bash: ${cmd}: command not found`));
    body.appendChild(makeLine('comment', '# type "help" to see available commands'));
  } else {
    const result = typeof handler === 'function' ? handler() : handler;
    if (result === '__clear__') {
      body.innerHTML = '';
      body.appendChild(makeLine('comment', '# terminal cleared. type "help" to start.'));
      return;
    }
    result.forEach(({t,v,s}) => body.appendChild(makeLine(t,v,s)));
  }
  const gap = document.createElement('div'); gap.style.height = '4px';
  body.appendChild(gap);
  body.scrollTop = body.scrollHeight;
}

const chatInput = document.getElementById('chat-input');
const cmdHistory = []; let histIdx = -1;

chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = chatInput.value;
    if (val.trim()) { cmdHistory.unshift(val); histIdx = -1; }
    runCmd(val); chatInput.value = '';
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx < cmdHistory.length-1) { histIdx++; chatInput.value = cmdHistory[histIdx]; }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx > 0) { histIdx--; chatInput.value = cmdHistory[histIdx]; } else { histIdx=-1; chatInput.value=''; }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const partial = chatInput.value.toLowerCase();
    if (!partial) return;
    const match = Object.keys(COMMANDS).find(k => k.startsWith(partial));
    if (match) chatInput.value = match;
  }
});

document.getElementById('chat-body')?.addEventListener('click', () => chatInput?.focus());

// auto-focus when section scrolls in
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) chatInput?.focus();
}, { threshold: 0.6 }).observe(document.getElementById('contact'));

// ── MOBILE PHOTO SCROLL FADE ─────────────────────────────────────────
(function () {
  function isMobile() { return window.innerWidth <= 900; }

  function handleScroll() {
    if (!isMobile()) return;
    const heroRight = document.querySelector('.hero-right');
    if (!heroRight) return;

    // How far the user has scrolled past the top
    const scrollY = window.scrollY;
    const fadeDistance = window.innerHeight * 0.45; // fully gone by ~45vh scroll

    // Opacity: 1 → 0 as scroll goes 0 → fadeDistance
    const opacity = Math.max(0, 1 - scrollY / fadeDistance);

    // Subtle scale down: 1 → 0.92
    const scale = 1 - (1 - opacity) * 0.08;

    heroRight.style.opacity = opacity;
    heroRight.style.transform = `scale(${scale})`;
  }

  // Only attach on mobile, clean up on resize
  function init() {
    if (isMobile()) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // run once on load
    } else {
      const heroRight = document.querySelector('.hero-right');
      if (heroRight) {
        heroRight.style.opacity = '';
        heroRight.style.transform = '';
      }
      window.removeEventListener('scroll', handleScroll);
    }
  }

  init();
  window.addEventListener('resize', init);
})();
