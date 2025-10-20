// Default channels (category is an array)
const defaultChannels = [
  {
    title: "Crypto România",
    desc: "Discuții și noutăți despre criptomonede.",
    url: "https://t.me/cryptoromania",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Gameri România",
    desc: "Comunitate pentru pasionații de gaming.",
    url: "https://t.me/gamingro",
    logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    category: ["gaming"]
  },
  {
    title: "Adult Only",
    desc: "Canal +18, conținut pentru adulți.",
    url: "https://t.me/adultonlyro",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Știri Zilnice",
    desc: "Știri importante din România și din lume.",
    url: "https://t.me/stirizilnice",
    logo: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    category: ["stiri"]
  },
  {
    title: "Rețete Ușoare",
    desc: "Rețete simple și rapide pentru orice zi.",
    url: "https://t.me/reteteusoare",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    category: ["retete"]
  },
  {
    title: "Tehnologie România",
    desc: "Noutăți din tehnologie, gadgeturi și software.",
    url: "https://t.me/tehnologie",
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    category: ["tehnologie"]
  },
  {
    title: "Promo Oferte",
    desc: "Cele mai bune oferte și reduceri zilnice.",
    url: "https://t.me/ofertepromo",
    logo: "https://cdn-icons-png.flaticon.com/512/726/726476.png",
    category: ["promo", "crypto"]
  }
];

function getChannels() {
  const saved = localStorage.getItem('channels');
  return saved ? JSON.parse(saved) : defaultChannels.slice();
}
function saveChannels(channels) {
  localStorage.setItem('channels', JSON.stringify(channels));
}

function addChannel() {
  const title = document.getElementById('channel-title').value.trim();
  const desc = document.getElementById('channel-desc').value.trim();
  const url = document.getElementById('channel-url').value.trim();
  const logo = document.getElementById('channel-logo').value.trim();
  const categorySelect = document.getElementById('channel-category');
  const category = Array.from(categorySelect.selectedOptions).map(opt => opt.value);
  const owner = localStorage.getItem('logged_user');

  if (!title || !desc || !url) return alert('Completează toate câmpurile obligatorii!');
  if (!/^https:\/\/t\.me\//.test(url)) return alert('Linkul trebuie să fie de forma https://t.me/...');
  if (!owner) return alert('Trebuie să fii logat pentru a adăuga canal!');
  if (category.length === 0) return alert('Selectează cel puțin o categorie!');

  const channels = getChannels();
  channels.unshift({ title, desc, url, logo, owner, category });
  saveChannels(channels);
  showCategory(currentCategory);
  // clear form
  document.getElementById('channel-title').value = '';
  document.getElementById('channel-desc').value = '';
  document.getElementById('channel-url').value = '';
  document.getElementById('channel-logo').value = '';
  categorySelect.selectedIndex = -1;
}

function deleteChannel(realIdx) {
  const channels = getChannels();
  const logged = localStorage.getItem('logged_user');
  const channel = channels[realIdx];
  if (!channel) return;
  if (channel.owner !== logged) {
    alert('Poți șterge doar canalele adăugate de tine!');
    return;
  }
  if (!confirm('Sigur vrei să ștergi acest canal?')) return;
  channels.splice(realIdx, 1);
  saveChannels(channels);
  showCategory(currentCategory);
}

let currentCategory = 'all';

function showCategory(category) {
  currentCategory = category;
  updateActiveCategoryButtons();
  renderChannelsByCategory();
  
  // Change background based on category
  const body = document.body;
  // Remove all category classes
  body.className = body.className.replace(/\b(crypto|gaming|adult|stiri|retete|tehnologie|promo)-bg\b/g, '');
  
  // Add new category class
  if (category !== 'all') {
    body.classList.add(category + '-bg');
  }
}

function updateActiveCategoryButtons() {
  const buttons = document.querySelectorAll('.cat-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  const active = Array.from(buttons).find(b => b.getAttribute('onclick')?.includes(`'${currentCategory}'`));
  if (active) active.classList.add('active');
}

function renderChannelsByCategory() {
  const list = document.getElementById('channels-list');
  list.innerHTML = '';
  const channels = getChannels();
  const logged = localStorage.getItem('logged_user');

  // attach global index so delete can use it
  const channelsWithIdx = channels.map((c, i) => ({ ...c, idxGlobal: i }));

  const filtered = currentCategory === 'all'
    ? channelsWithIdx
    : channelsWithIdx.filter(c =>
        Array.isArray(c.category)
          ? c.category.includes(currentCategory)
          : (c.category || '').toLowerCase() === currentCategory
      );

  // order: user's channels first
  const userChannels = [];
  const otherChannels = [];
  filtered.forEach(c => {
    if (logged && c.owner === logged) userChannels.push(c);
    else otherChannels.push(c);
  });
  const sorted = [...userChannels, ...otherChannels];

  // For 'all' display first 6 in grid 3x2
  if (currentCategory === 'all') {
    const grid = document.createElement('div');
    grid.className = 'channels-grid';
    const toShow = sorted.slice(0, 6);
    if (toShow.length === 0) {
      list.innerHTML = '<p style="text-align:center;">Nu există canale de afișat.</p>';
      return;
    }
    toShow.forEach(channel => {
      const canDelete = logged && channel.owner === logged;
      const card = document.createElement('div');
      card.className = 'channel-card';
      card.innerHTML = `
        <img class="channel-logo" src="${channel.logo || 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png'}" alt="${channel.title}">
        <div class="channel-info">
          <div class="channel-title">${channel.title}</div>
          <div class="channel-desc">${channel.desc}</div>
          <a class="channel-link" href="${channel.url}" target="_blank">Vezi canalul</a>
          ${canDelete ? `<button class="delete-btn" onclick="deleteChannel(${channel.idxGlobal})">Șterge</button>` : ''}
        </div>
      `;
      grid.appendChild(card);
    });
    list.appendChild(grid);
    return;
  }

  // For other categories - list view
  if (sorted.length === 0) {
    list.innerHTML = '<p style="text-align:center;">Nu există canale în această categorie.</p>';
    return;
  }

  sorted.forEach(channel => {
    const canDelete = logged && channel.owner === logged;
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.innerHTML = `
      <img class="channel-logo" src="${channel.logo || 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png'}" alt="${channel.title}">
      <div class="channel-info">
        <div class="channel-title">${channel.title}</div>
        <div class="channel-desc">${channel.desc}</div>
        <a class="channel-link" href="${channel.url}" target="_blank">Vezi canalul</a>
        ${canDelete ? `<button class="delete-btn" onclick="deleteChannel(${channel.idxGlobal})">Șterge</button>` : ''}
      </div>
    `;
    list.appendChild(card);
  });
}

// --- Auth ---
function register() {
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const pass = document.getElementById('reg-password').value;
  if (!email || !pass) return alert('Completează toate câmpurile!');
  if (!validateEmail(email)) return alert('Email invalid!');
  if (localStorage.getItem('user_' + email)) return alert('Emailul există deja!');
  localStorage.setItem('user_' + email, pass);
  alert('Cont creat! Acum te poți loga.');
  document.getElementById('reg-email').value = '';
  document.getElementById('reg-password').value = '';
}
function login() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass = document.getElementById('login-password').value;
  if (localStorage.getItem('user_' + email) === pass) {
    localStorage.setItem('logged_user', email);
    showUser();
  } else {
    alert('Date incorecte!');
  }
}
function logout() {
  localStorage.removeItem('logged_user');
  showUser();
}
function showUser() {
  const email = localStorage.getItem('logged_user');
  document.getElementById('user-info').style.display = email ? 'block' : 'none';
  document.getElementById('register-form').style.display = email ? 'none' : 'block';
  document.getElementById('login-form').style.display = email ? 'none' : 'block';
  document.getElementById('current-user').textContent = email || '';
  document.getElementById('add-channel-section').style.display = email ? 'block' : 'none';
  showCategory(currentCategory);
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// initialize
document.addEventListener('DOMContentLoaded', function() {
  showUser();
  showCategory('all'); // Show all channels on load
});