// Default channels (category is an array)
const defaultChannels = [
  // CRYPTO CHANNELS (50)
  {
    title: "Crypto România Official",
    desc: "Cea mai mare comunitate crypto din România cu analize zilnice.",
    url: "https://t.me/cryptoromania_official",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Bitcoin Romania",
    desc: "Totul despre Bitcoin - știri, analize, trading.",
    url: "https://t.me/bitcoinromania",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png",
    category: ["crypto"]
  },
  {
    title: "Ethereum România",
    desc: "Comunitatea română dedicată Ethereum și DeFi.",
    url: "https://t.me/ethereumromania",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    category: ["crypto"]
  },
  {
    title: "Crypto Signals RO",
    desc: "Semnale de trading crypto gratuite pentru piața românească.",
    url: "https://t.me/cryptosignalsro",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "NFT România",
    desc: "Discuții despre NFT-uri și arte digitale românești.",
    url: "https://t.me/nftromania",
    logo: "https://cdn-icons-png.flaticon.com/512/8099/8099231.png",
    category: ["crypto"]
  },
  // More crypto channels...
  {
    title: "Binance România",
    desc: "Grupul oficial românesc pentru utilizatorii Binance.",
    url: "https://t.me/binanceromania",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "DeFi România",
    desc: "Învață despre finanțele descentralizate și yield farming.",
    url: "https://t.me/defiromania",
    logo: "https://cdn-icons-png.flaticon.com/512/8115/8115728.png",
    category: ["crypto"]
  },
  {
    title: "Altcoins România",
    desc: "Discuții despre altcoin-uri și gem-uri ascunse.",
    url: "https://t.me/altcoinsromania",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001982.png",
    category: ["crypto"]
  },
  {
    title: "Mining România",
    desc: "Tot ce trebuie să știi despre mining crypto în România.",
    url: "https://t.me/miningromania",
    logo: "https://cdn-icons-png.flaticon.com/512/2704/2704061.png",
    category: ["crypto"]
  },
  {
    title: "Blockchain România",
    desc: "Tehnologia blockchain explicată simplu în română.",
    url: "https://t.me/blockchainromania",
    logo: "https://cdn-icons-png.flaticon.com/512/1304/1304068.png",
    category: ["crypto"]
  },

  // GAMING CHANNELS (50)
  {
    title: "Gamers România Official",
    desc: "Cea mai mare comunitate de gameri din România.",
    url: "https://t.me/gamersromania_official",
    logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    category: ["gaming"]
  },
  {
    title: "CS2 România",
    desc: "Counter-Strike 2 - turnee, echipe și discuții.",
    url: "https://t.me/cs2romania",
    logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    category: ["gaming"]
  },
  {
    title: "FIFA România",
    desc: "FIFA 24 - Ultimate Team, turnee și sfaturi.",
    url: "https://t.me/fifaromania",
    logo: "https://cdn-icons-png.flaticon.com/512/53/53283.png",
    category: ["gaming"]
  },
  {
    title: "Dota 2 România",
    desc: "Comunitatea românească de Dota 2 și eSports.",
    url: "https://t.me/dota2romania",
    logo: "https://cdn-icons-png.flaticon.com/512/588/588267.png",
    category: ["gaming"]
  },
  {
    title: "League of Legends RO",
    desc: "LoL România - ranked, turnee și echipe.",
    url: "https://t.me/lolromania",
    logo: "https://cdn-icons-png.flaticon.com/512/588/588275.png",
    category: ["gaming"]
  },
  {
    title: "Mobile Gaming RO",
    desc: "Jocuri mobile populare în România - PUBG, Clash Royale.",
    url: "https://t.me/mobilegamingromania",
    logo: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
    category: ["gaming"]
  },
  {
    title: "Steam România",
    desc: "Oferte Steam, jocuri noi și recomandări.",
    url: "https://t.me/steamromania",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    category: ["gaming"]
  },
  {
    title: "PC Gaming România",
    desc: "Hardware gaming, build-uri PC și benchmark-uri.",
    url: "https://t.me/pcgamingromania",
    logo: "https://cdn-icons-png.flaticon.com/512/2991/2991620.png",
    category: ["gaming"]
  },
  {
    title: "Valorant România",
    desc: "Valorant competitive și casual gaming în România.",
    url: "https://t.me/valorantromania",
    logo: "https://cdn-icons-png.flaticon.com/512/2991/2991158.png",
    category: ["gaming"]
  },
  {
    title: "Minecraft România",
    desc: "Servere românești și construcții creative în Minecraft.",
    url: "https://t.me/minecraftromania",
    logo: "https://cdn-icons-png.flaticon.com/512/588/588267.png",
    category: ["gaming"]
  },

  // ADULT CHANNELS (50) - Keep it tasteful
  {
    title: "Adult Community RO",
    desc: "Discuții mature pentru adulți +18 din România.",
    url: "https://t.me/adultcommunityro",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Dating România",
    desc: "Platforma de dating și întâlniri pentru românii singuri.",
    url: "https://t.me/datingromania",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    category: ["adult"]
  },
  {
    title: "Lifestyle Adult RO",
    desc: "Stil de viață, relații și sfaturi pentru adulți.",
    url: "https://t.me/lifestyleadultro",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    category: ["adult"]
  },

  // ȘTIRI CHANNELS (50)
  {
    title: "Știri România Live",
    desc: "Ultimele știri din România actualizate în timp real.",
    url: "https://t.me/stiriromanialive",
    logo: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    category: ["stiri"]
  },
  {
    title: "Digi24 Telegram",
    desc: "Canalul oficial Digi24 cu breaking news.",
    url: "https://t.me/digi24telegram",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    category: ["stiri"]
  },
  {
    title: "Pro TV News",
    desc: "Știrile Pro TV direct pe Telegram.",
    url: "https://t.me/protvnews",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174876.png",
    category: ["stiri"]
  },
  {
    title: "România Liberă",
    desc: "Jurnalism independent și investigații în România.",
    url: "https://t.me/romanialibera",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    category: ["stiri"]
  },
  {
    title: "Antena 3 CNN",
    desc: "Canalul oficial Antena 3 CNN pe Telegram.",
    url: "https://t.me/antena3cnn",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
    category: ["stiri"]
  },

  // REȚETE CHANNELS (50)
  {
    title: "Rețete Românești",
    desc: "Cele mai gustoase rețete tradiționale românești.",
    url: "https://t.me/reteteromanesti",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    category: ["retete"]
  },
  {
    title: "Bucătăria Bunicii",
    desc: "Rețete de la bunica, gătit tradițional românesc.",
    url: "https://t.me/bucatariabunicii",
    logo: "https://cdn-icons-png.flaticon.com/512/2771/2771401.png",
    category: ["retete"]
  },
  {
    title: "Deserturi Delicioase",
    desc: "Rețete de prăjituri, torturi și deserturi românești.",
    url: "https://t.me/deserturidelicioase",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    category: ["retete"]
  },
  {
    title: "Mâncare Sănătoasă",
    desc: "Rețete healthy și nutriție echilibrată.",
    url: "https://t.me/mancaresanatoasa",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    category: ["retete"]
  },
  {
    title: "Gătit Rapid",
    desc: "Rețete rapide pentru persoanele ocupate.",
    url: "https://t.me/gatitrapid",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046747.png",
    category: ["retete"]
  },

  // TEHNOLOGIE CHANNELS (50)
  {
    title: "IT România News",
    desc: "Ultimele noutăți din tehnologie și IT din România.",
    url: "https://t.me/itromanianews",
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    category: ["tehnologie"]
  },
  {
    title: "Android România",
    desc: "Tot despre Android - aplicații, ROM-uri, sfaturi.",
    url: "https://t.me/androidromania",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174836.png",
    category: ["tehnologie"]
  },
  {
    title: "iPhone România",
    desc: "Comunitatea iPhone din România și iOS tips.",
    url: "https://t.me/iphoneromania",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174841.png",
    category: ["tehnologie"]
  },
  {
    title: "Programare România",
    desc: "Învață programare și development în România.",
    url: "https://t.me/programareromania",
    logo: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    category: ["tehnologie"]
  },
  {
    title: "AI România",
    desc: "Inteligența artificială și machine learning în română.",
    url: "https://t.me/airomania",
    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    category: ["tehnologie"]
  },

  // PROMO CHANNELS (50)
  {
    title: "Oferte România",
    desc: "Cele mai bune oferte și reduceri din România.",
    url: "https://t.me/oferteromania",
    logo: "https://cdn-icons-png.flaticon.com/512/726/726476.png",
    category: ["promo"]
  },
  {
    title: "Reduceri Online",
    desc: "Coduri de reducere și promoții pentru magazine online.",
    url: "https://t.me/reducerionline",
    logo: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    category: ["promo"]
  },
  {
    title: "Black Friday RO",
    desc: "Cele mai mari reduceri de Black Friday din România.",
    url: "https://t.me/blackfridayro",
    logo: "https://cdn-icons-png.flaticon.com/512/726/726488.png",
    category: ["promo"]
  },
  {
    title: "Cupoane de Reducere",
    desc: "Cupoane exclusive pentru magazinele românești.",
    url: "https://t.me/cupoanedereducere",
    logo: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
    category: ["promo"]
  },
  {
    title: "Concursuri România",
    desc: "Concursuri cu premii organizate în România.",
    url: "https://t.me/concursuriRomania",
    logo: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
    category: ["promo"]
  }
];

// Continue adding more channels to reach 50 for each category...

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