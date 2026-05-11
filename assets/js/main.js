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
    console.log('%cHonestly, respect.', W);  // This is exactly what I do too.
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

// ── Active nav on scroll + scrolled class ─────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('nav-scrolled', window.scrollY > 20);
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

// ── Stat count-up animation ───────────────────────────────────────────────────
(function () {
  function countUp(el, end, prefix, suffix, duration) {
    let start = null;
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    function tick(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      el.textContent = prefix + Math.round(end * easeOut(p)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const defs = [
    null,
    { prefix: '~', end: 40, suffix: '%' },
    { prefix: '', end: 4, suffix: '' },
    { prefix: '', end: 1, suffix: '+yr' },
  ];
  setTimeout(() => {
    document.querySelectorAll('.stat-value').forEach((el, i) => {
      if (defs[i]) countUp(el, defs[i].end, defs[i].prefix, defs[i].suffix, 900 + i * 120);
    });
  }, 560);
})();

// ── PHOTO: try local file first, fall back to embedded ───────────────
(function() {
  const img = document.querySelector('.hero-photo-section img');
  if (!img) return;
  const embedded = img.src; // already has base64
  const local = new Image();
  local.onload = () => { img.src = local.src; };
  local.onerror = () => {}; // keep base64
  local.src = 'photo.jpg';
})();

// ── INTERACTIVE TERMINAL ──────────────────────────────────────────────
const COMMANDS = {
  help: () => [
    { t:'comment', v:'# available commands:' },
    { t:'key', v:'  hello      ', s:'→ say hi' },
    { t:'key', v:'  hire       ', s:'→ how to reach me' },
    { t:'key', v:'  email      ', s:'→ open email client directly' },
    { t:'key', v:'  linkedin   ', s:'→ open my LinkedIn' },
    { t:'key', v:'  github     ', s:'→ open my GitHub' },
    { t:'key', v:'  projects   ', s:'→ what I\'ve built' },
    { t:'key', v:'  skills     ', s:'→ my tech stack' },
    { t:'key', v:'  about      ', s:'→ who I am' },
    { t:'key', v:'  status     ', s:'→ availability' },
    { t:'key', v:'  neofetch   ', s:'→ system info' },
    { t:'key', v:'  resume     ', s:'→ how to get my CV' },
    { t:'key', v:'  tree       ', s:'→ portfolio structure' },
    { t:'key', v:'  ping       ', s:'→ check connectivity' },
    { t:'key', v:'  uptime     ', s:'→ time in production' },
    { t:'key', v:'  clear      ', s:'→ clear the terminal' },
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
  neofetch: () => {
    const months = Math.floor((Date.now() - new Date('2025-01-01')) / (1000*60*60*24*30));
    return [
      { t:'val',     v:'        dhanush@platform' },
      { t:'comment', v:'        ─────────────────────────────────' },
      { t:'key',     v:'        OS         ', s:'Trivandrum, India · UTC+5:30' },
      { t:'key',     v:'        Host       ', s:'Quantiphi Analytics Solutions' },
      { t:'key',     v:'        Role       ', s:'Platform / DevOps Engineer' },
      { t:'key',     v:'        Shell      ', s:'bash · zsh · powershell' },
      { t:'key',     v:'        Cloud      ', s:'GCP (Google ACE ✓)' },
      { t:'key',     v:'        IaC        ', s:'Terraform (HashiCorp ✓)' },
      { t:'key',     v:'        CI/CD      ', s:'GitHub Actions → ArgoCD' },
      { t:'key',     v:'        Security   ', s:'Wazuh · CrowdStrike · SigNoz' },
      { t:'key',     v:'        Uptime     ', s:`${months}mo · 0 production incidents` },
      { t:'comment', v:'        ─────────────────────────────────' },
    ];
  },
  resume: () => [
    { t:'output',  v:'resume.pdf is not publicly hosted.' },
    { t:'output',  v:'Request a copy via:' },
    { t:'key',     v:'  email    ', s:'→ dhanushdchandran@gmail.com' },
    { t:'key',     v:'  linkedin ', s:'→ linkedin.com/in/dhanushdchandran' },
    { t:'comment', v:'# subject: "Resume Request" — replies within 24h' },
  ],
  ping: () => [
    { t:'comment', v:'PING dhanush@platform: 56 data bytes' },
    { t:'output',  v:'64 bytes: icmp_seq=0 ttl=64 time=1.2 ms' },
    { t:'output',  v:'64 bytes: icmp_seq=1 ttl=64 time=0.9 ms' },
    { t:'output',  v:'64 bytes: icmp_seq=2 ttl=64 time=1.1 ms' },
    { t:'val',     v:'--- ping statistics ---' },
    { t:'output',  v:'3 packets tx, 3 received, 0% packet loss' },
    { t:'comment', v:'# available for hire — latency: ~24h response' },
  ],
  uptime: () => {
    const start = new Date('2025-01-01');
    const ms = Date.now() - start;
    const days = Math.floor(ms / 86400000);
    const months = Math.floor(days / 30);
    return [
      { t:'val',    v:`up ${months} months, ${days % 30} days` },
      { t:'output', v:'load avg: shipping, learning, building' },
      { t:'comment',v:'# 0 unscanned artifacts · 0 production fires' },
    ];
  },
  tree: () => [
    { t:'val',    v:'portfolio/' },
    { t:'output', v:'├── experience/' },
    { t:'output', v:'│   ├── quantiphi/       (Jan 2025 → Present)' },
    { t:'output', v:'│   └── tgh-tech/        (Nov 2023 → Feb 2024)' },
    { t:'output', v:'├── projects/' },
    { t:'output', v:'│   ├── cicd-pipeline/   [0 unscanned artifacts]' },
    { t:'output', v:'│   ├── cve-remediation/ [~40% reduction]' },
    { t:'output', v:'│   └── observability/   [6 tools unified]' },
    { t:'output', v:'├── skills/              [cloud, cicd, containers, security]' },
    { t:'output', v:'├── education/' },
    { t:'output', v:'│   ├── btech-cse.md     [CGPA 7.86]' },
    { t:'output', v:'│   └── certs/           [Google ACE · Terraform]' },
    { t:'output', v:'└── contact.yml          [status: available]' },
  ],
  clear: () => '__clear__',
  whoami:  'about',
  contact: 'hire',
  cv: 'resume',
  fetch: 'neofetch',
  ls:   () => [{ t:'output', v:'experience/  projects/  skills/  education/  contact/' }],
  pwd:  () => [{ t:'output', v:'/home/dhanush/portfolio' }],
  date: () => [{ t:'output', v: new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'}) + ' IST' }],
  echo: () => [{ t:'output', v:'$READY_TO_SHIP=true · $OPEN_TO_WORK=true' }],
  cat:  () => [{ t:'comment', v:'# try: cat about.yml  →  type "about" instead' }],
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