console.log('🚀 JavaScript loaded successfully!'); // Debug

// === INTERNATIONALIZATION SYSTEM ===
const translations = {
  ro: {
    siteTitle: "Telegram Channels",
    siteDescription: "Descoperă și promovează cele mai interesante canale Telegram!",
    language: "🌐 Limba",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English", 
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch",
    allCategories: "Toate",
    crypto: "💰 Crypto",
    gaming: "🎮 Gaming",
    tech: "💻 Tech",
    news: "📰 Știri",
    entertainment: "🎭 Divertisment",
    education: "📚 Educație",
    business: "💼 Business",
    health: "🏥 Sănătate",
    sports: "⚽ Sport",
    travel: "✈️ Călătorii",
    food: "🍽️ Mâncare",
    music: "🎵 Muzică",
    movies: "🎬 Filme",
    books: "📖 Cărți",
    science: "🔬 Știință",
    addChannel: "Adaugă Canal",
    login: "Logare",
    logout: "Ieșire",
    featuredChannels: "🌟 Canale Recomandate",
    viewChannel: "Vezi canalul",
    members: "membri",
    selectCategory: "Selectează o categorie pentru a vedea canalele. 👆<br><br>Canalele recomandate sunt afișate mai jos. 👇",
    // Authentication forms
    createAccount: "🆕 Creează cont nou",
    emailPlaceholder: "📧 Ex: nume.prenume@gmail.com",
    passwordPlaceholder: "🔒 Parolă sigură",
    registerButton: "✨ Înregistrează-te gratuit",
    loginTitle: "🔐 Conectează-te",
    loginEmail: "📧 Email-ul tău valid",
    loginPassword: "🔒 Parola ta",
    loginButton: "🚀 Intră în cont",
    // Categories
    adult: "ADULT (+18)",
    news: "Știri",
    recipes: "Rețete",
    technology: "Tehnologie",
    promo: "Promo",
    // Footer
    footerText: "© 2025 Promo Canale Telegram",
    // Email warning
    emailWarning: "💡 Important: Doar emailuri REALE (nume.prenume@gmail.com). NU acceptăm doar cifre!",
    // Add channel section
    addChannelTitle: "✨ Adaugă canal Telegram",
    channelTitlePlaceholder: "🏷️ Titlu canal (ex: Crypto România)",
    channelDescPlaceholder: "📝 Descriere scurtă și atractivă",
    channelUrlPlaceholder: "🔗 Link Telegram (https://t.me/numele-canalului)",
    channelLogoPlaceholder: "🖼️ Link logo/imagine (opțional)",
    addChannelButton: "🚀 Adaugă canalul",
    categoryHint: "💡 Sfat: Ține apăsat Ctrl (sau Cmd pe Mac) pentru a selecta mai multe categorii pentru canalul tău.",
    // User info section
    welcome: "👋 Bun venit, ",
    logoutButton: "👋 Deconectează-te"
  },
  en: {
    siteTitle: "Telegram Channels",
    siteDescription: "Discover and promote the most interesting Telegram channels!",
    language: "🌐 Language",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English",
    spanish: "🇪🇸 Español", 
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch",
    allCategories: "All",
    crypto: "💰 Crypto",
    gaming: "🎮 Gaming", 
    tech: "💻 Tech",
    news: "📰 News",
    entertainment: "🎭 Entertainment",
    education: "📚 Education",
    business: "💼 Business",
    health: "🏥 Health",
    sports: "⚽ Sports",
    travel: "✈️ Travel",
    food: "🍽️ Food",
    music: "🎵 Music",
    movies: "🎬 Movies",
    books: "📖 Books",
    science: "🔬 Science",
    addChannel: "Add Channel",
    login: "Login",
    logout: "Logout",
    featuredChannels: "🌟 Featured Channels",
    viewChannel: "View channel",
    members: "members",
    selectCategory: "Select a category to see channels. 👆<br><br>Featured channels are displayed below. 👇",
    // Authentication forms
    createAccount: "🆕 Create new account",
    emailPlaceholder: "📧 Ex: name.surname@gmail.com",
    passwordPlaceholder: "🔒 Strong password",
    registerButton: "✨ Sign up for free",
    loginTitle: "🔐 Log in",
    loginEmail: "📧 Your valid email",
    loginPassword: "🔒 Your password",
    loginButton: "🚀 Sign in",
    // Categories
    adult: "ADULT (+18)",
    news: "News",
    recipes: "Recipes",
    technology: "Technology",
    promo: "Promo",
    // Footer
    footerText: "© 2025 Telegram Channels Promo",
    // Email warning
    emailWarning: "💡 Important: Only REAL emails (name.surname@gmail.com). We do NOT accept numbers only!",
    // Add channel section
    addChannelTitle: "✨ Add Telegram Channel",
    channelTitlePlaceholder: "🏷️ Channel title (ex: Crypto Romania)",
    channelDescPlaceholder: "📝 Short and attractive description",
    channelUrlPlaceholder: "🔗 Telegram link (https://t.me/channel-name)",
    channelLogoPlaceholder: "🖼️ Logo/image link (optional)",
    addChannelButton: "🚀 Add channel",
    categoryHint: "💡 Tip: Hold Ctrl (or Cmd on Mac) to select multiple categories for your channel.",
    // User info section
    welcome: "👋 Welcome, ",
    logoutButton: "👋 Logout"
  },
  es: {
    siteTitle: "Canales de Telegram",
    siteDescription: "¡Descubre y promueve los canales de Telegram más interesantes!",
    language: "🌐 Idioma",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English",
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français", 
    german: "🇩🇪 Deutsch",
    allCategories: "Todos",
    crypto: "💰 Cripto",
    gaming: "🎮 Juegos",
    tech: "💻 Tecnología",
    news: "📰 Noticias",
    entertainment: "🎭 Entretenimiento",
    education: "📚 Educación",
    business: "💼 Negocios",
    health: "🏥 Salud",
    sports: "⚽ Deportes",
    travel: "✈️ Viajes",
    food: "🍽️ Comida",
    music: "🎵 Música",
    movies: "🎬 Películas",
    books: "📖 Libros",
    science: "🔬 Ciencia",
    addChannel: "Agregar Canal",
    login: "Iniciar Sesión",
    logout: "Cerrar Sesión",
    featuredChannels: "🌟 Canales Destacados",
    viewChannel: "Ver canal",
    members: "miembros",
    selectCategory: "Selecciona una categoría para ver canales. 👆<br><br>Los canales destacados se muestran abajo. 👇",
    // Authentication forms
    createAccount: "🆕 Crear cuenta nueva",
    emailPlaceholder: "📧 Ej: nombre.apellido@gmail.com",
    passwordPlaceholder: "🔒 Contraseña segura",
    registerButton: "✨ Regístrate gratis",
    loginTitle: "🔐 Iniciar sesión",
    loginEmail: "📧 Tu email válido",
    loginPassword: "🔒 Tu contraseña",
    loginButton: "🚀 Entrar",
    // Categories
    adult: "ADULTO (+18)",
    news: "Noticias",
    recipes: "Recetas",
    technology: "Tecnología",
    promo: "Promoción",
    // Footer
    footerText: "© 2025 Promoción Canales Telegram",
    // Email warning
    emailWarning: "💡 Importante: Solo emails REALES (nombre.apellido@gmail.com). ¡NO aceptamos solo números!",
    // Add channel section
    addChannelTitle: "✨ Agregar Canal de Telegram",
    channelTitlePlaceholder: "🏷️ Título del canal (ej: Crypto España)",
    channelDescPlaceholder: "📝 Descripción corta y atractiva",
    channelUrlPlaceholder: "🔗 Enlace de Telegram (https://t.me/nombre-canal)",
    channelLogoPlaceholder: "🖼️ Enlace del logo/imagen (opcional)",
    addChannelButton: "🚀 Agregar canal",
    categoryHint: "💡 Consejo: Mantén presionado Ctrl (o Cmd en Mac) para seleccionar múltiples categorías para tu canal.",
    // User info section
    welcome: "👋 Bienvenido, ",
    logoutButton: "👋 Cerrar sesión"
  },
  fr: {
    siteTitle: "Chaînes Telegram",
    siteDescription: "Découvrez et promouvez les chaînes Telegram les plus intéressantes!",
    language: "🌐 Langue",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English",
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch",
    allCategories: "Tous",
    crypto: "💰 Crypto",
    gaming: "🎮 Jeux",
    tech: "💻 Tech",
    news: "📰 Actualités",
    entertainment: "🎭 Divertissement",
    education: "📚 Éducation",
    business: "💼 Affaires",
    health: "🏥 Santé",
    sports: "⚽ Sports",
    travel: "✈️ Voyage",
    food: "🍽️ Nourriture",
    music: "🎵 Musique",
    movies: "🎬 Films",
    books: "📖 Livres",
    science: "🔬 Science",
    addChannel: "Ajouter Canal",
    login: "Connexion",
    logout: "Déconnexion",
    featuredChannels: "🌟 Chaînes Vedettes",
    viewChannel: "Voir la chaîne",
    members: "membres",
    selectCategory: "Sélectionnez une catégorie pour voir les chaînes. 👆<br><br>Les chaînes vedettes sont affichées ci-dessous. 👇",
    // Authentication forms
    createAccount: "🆕 Créer un nouveau compte",
    emailPlaceholder: "📧 Ex: nom.prenom@gmail.com",
    passwordPlaceholder: "🔒 Mot de passe fort",
    registerButton: "✨ S'inscrire gratuitement",
    loginTitle: "🔐 Se connecter",
    loginEmail: "📧 Votre email valide",
    loginPassword: "🔒 Votre mot de passe",
    loginButton: "🚀 Se connecter",
    // Categories
    adult: "ADULTE (+18)",
    news: "Actualités",
    recipes: "Recettes",
    technology: "Technologie",
    promo: "Promotion",
    // Footer
    footerText: "© 2025 Promotion Chaînes Telegram",
    // Email warning
    emailWarning: "💡 Important: Seulement des emails RÉELS (nom.prenom@gmail.com). Nous n'acceptons PAS que des chiffres!",
    // Add channel section
    addChannelTitle: "✨ Ajouter Canal Telegram",
    channelTitlePlaceholder: "🏷️ Titre du canal (ex: Crypto France)",
    channelDescPlaceholder: "📝 Description courte et attrayante",
    channelUrlPlaceholder: "🔗 Lien Telegram (https://t.me/nom-canal)",
    channelLogoPlaceholder: "🖼️ Lien logo/image (optionnel)",
    addChannelButton: "🚀 Ajouter le canal",
    categoryHint: "💡 Astuce: Maintenez Ctrl (ou Cmd sur Mac) pour sélectionner plusieurs catégories pour votre canal.",
    // User info section
    welcome: "👋 Bienvenue, ",
    logoutButton: "👋 Se déconnecter"
  },
  de: {
    siteTitle: "Telegram Kanäle",
    siteDescription: "Entdecke und bewirb die interessantesten Telegram-Kanäle!",
    language: "🌐 Sprache",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English",
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch",
    allCategories: "Alle",
    crypto: "💰 Krypto",
    gaming: "🎮 Gaming",
    tech: "💻 Technik",
    news: "📰 Nachrichten",
    entertainment: "🎭 Unterhaltung",
    education: "📚 Bildung",
    business: "💼 Geschäft",
    health: "🏥 Gesundheit", 
    sports: "⚽ Sport",
    travel: "✈️ Reisen",
    food: "🍽️ Essen",
    music: "🎵 Musik",
    movies: "🎬 Filme",
    books: "📖 Bücher",
    science: "🔬 Wissenschaft",
    addChannel: "Kanal Hinzufügen",
    login: "Anmelden",
    logout: "Abmelden",
    featuredChannels: "🌟 Empfohlene Kanäle",
    viewChannel: "Kanal ansehen",
    members: "Mitglieder",
    selectCategory: "Wählen Sie eine Kategorie, um Kanäle zu sehen. 👆<br><br>Empfohlene Kanäle werden unten angezeigt. 👇",
    // Authentication forms
    createAccount: "🆕 Neues Konto erstellen",
    emailPlaceholder: "📧 Z.B: name.nachname@gmail.com",
    passwordPlaceholder: "🔒 Starkes Passwort",
    registerButton: "✨ Kostenlos registrieren",
    loginTitle: "🔐 Anmelden",
    loginEmail: "📧 Ihre gültige E-Mail",
    loginPassword: "🔒 Ihr Passwort",
    loginButton: "🚀 Einloggen",
    // Categories
    adult: "ERWACHSENE (+18)",
    news: "Nachrichten",
    recipes: "Rezepte",
    technology: "Technologie",
    promo: "Werbung",
    // Footer
    footerText: "© 2025 Telegram Kanäle Werbung",
    // Email warning
    emailWarning: "💡 Wichtig: Nur ECHTE E-Mails (name.nachname@gmail.com). Wir akzeptieren KEINE reinen Zahlen!",
    // Add channel section
    addChannelTitle: "✨ Telegram Kanal Hinzufügen",
    channelTitlePlaceholder: "🏷️ Kanaltitel (z.B: Crypto Deutschland)",
    channelDescPlaceholder: "📝 Kurze und attraktive Beschreibung",
    channelUrlPlaceholder: "🔗 Telegram Link (https://t.me/kanal-name)",
    channelLogoPlaceholder: "🖼️ Logo/Bild Link (optional)",
    addChannelButton: "🚀 Kanal hinzufügen",
    categoryHint: "💡 Tipp: Halten Sie Strg (oder Cmd auf Mac) gedrückt, um mehrere Kategorien für Ihren Kanal auszuwählen.",
    // User info section
    welcome: "👋 Willkommen, ",
    logoutButton: "👋 Abmelden"
  }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'ro';

// Change language function
function changeLanguage(lang) {
  console.log('🌐 Changing language to:', lang);
  
  // Update current language
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update all UI elements using the translation system
  updateUI();
  
  // Update document title
  const t = translations[currentLanguage];
  if (t && t.siteTitle) {
    document.title = t.siteTitle + ' - ' + t[currentLanguage === 'ro' ? 'romanian' : 
                                              currentLanguage === 'en' ? 'english' :
                                              currentLanguage === 'es' ? 'spanish' :
                                              currentLanguage === 'fr' ? 'french' : 'german'];
  }
  
  console.log('✅ Language changed to:', lang);
}

// Update UI with current language
function updateUI() {
  console.log('🔄 Updating UI for language:', currentLanguage);
  const t = translations[currentLanguage];
  console.log('📖 Translation object:', t ? 'Found' : 'NOT FOUND');
  
  // Update all elements with data-i18n attribute
  const elementsWithI18n = document.querySelectorAll('[data-i18n]');
  console.log('🎯 Found elements with data-i18n:', elementsWithI18n.length);
  
  elementsWithI18n.forEach(element => {
    const key = element.getAttribute('data-i18n');
    console.log(`🔧 Updating ${key}: "${element.textContent}" -> "${t[key] || 'NOT FOUND'}"`);
    if (t[key]) {
      element.textContent = t[key];
    }
  });
  
  // Update select options
  document.querySelectorAll('select option[data-i18n]').forEach(option => {
    const key = option.getAttribute('data-i18n');
    if (t[key]) {
      option.textContent = t[key];
    }
  });
  
  // Update language selector
  document.getElementById('language-selector').value = currentLanguage;
  
  // Update input placeholders
  document.querySelectorAll('input[data-i18n]').forEach(input => {
    const key = input.getAttribute('data-i18n');
    if (t[key]) {
      input.placeholder = t[key];
    }
  });
  
  // Update featured channels section title
  const featuredTitle = document.querySelector('#featured-channels-bottom h2');
  if (featuredTitle) {
    featuredTitle.textContent = t.featuredChannels;
  }
  
  // Update featured channels "members" text
  document.querySelectorAll('.channel-subscribers').forEach(element => {
    const text = element.textContent;
    const number = text.replace(/\s+membri|\s+members|\s+miembros|\s+membres|\s+Mitglieder/g, '');
    element.textContent = `${number} ${t.members}`;
  });
  
  // Update category message
  updateCategoryMessage();
  
  console.log('✅ UI updated successfully');
}

// Update category selection message
function updateCategoryMessage() {
  const channelsList = document.getElementById('channels-list');
  if (channelsList && channelsList.innerHTML.includes('Selectează o categorie')) {
    const t = translations[currentLanguage];
    channelsList.innerHTML = `<p style="text-align:center; padding: 3rem; font-size: 1.2rem; color: #666;">${t.selectCategory}</p>`;
  }
}

// Default channels (category is an array)
const defaultChannels = [
  // CRYPTO CHANNELS (38) - Real channels with massive member counts
  {
    title: "Money Channel",
    desc: "Canal cu 5.136.824 membri - ultimele știri financiare",
    url: "https://t.me/money",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Just Channel",
    desc: "Canal cu 4.803.558 membri - discuții despre investiții",
    url: "https://t.me/just",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Venture Capital",
    desc: "Canal cu 3.565.116 membri - oportunități de investiții VC",
    url: "https://t.me/venture",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Cheat Kott",
    desc: "Canal cu 3.881.442 membri - strategii și hack-uri trading",
    url: "https://t.me/cheatkott",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png",
    category: ["crypto"]
  },
  {
    title: "Trade Channel",
    desc: "Canal cu 3.464.821 membri - semnale de trading premium",
    url: "https://t.me/trade",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Alex No Sleep",
    desc: "Canal cu 3.312.553 membri - analize crypto 24/7",
    url: "https://t.me/alexnosleep",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    category: ["crypto"]
  },
  {
    title: "Benefactor 0101",
    desc: "Canal cu 2.382.433 membri - sfaturi premium investiții",
    url: "https://t.me/benefactor0101",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Insider Politic",
    desc: "Canal cu 2.931.308 membri - politică și economie insider",
    url: "https://t.me/insiderr_politic",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Galactica Network",
    desc: "Canal cu 1.578.094 membri - rețea crypto premium",
    url: "https://t.me/galacticanetwork",
    logo: "https://cdn-icons-png.flaticon.com/512/8115/8115728.png",
    category: ["crypto"]
  },
  {
    title: "Cumber Tech",
    desc: "Canal cu 1.362.965 membri - tehnologie și crypto",
    url: "https://t.me/cumbertech",
    logo: "https://cdn-icons-png.flaticon.com/512/1304/1304068.png",
    category: ["crypto"]
  },
  {
    title: "Voice to V",
    desc: "Canal cu 1.299.669 membri - voice trading signals",
    url: "https://t.me/voicetov",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Movie Channel",
    desc: "Canal cu 1.295.089 membri - entertainment și crypto",
    url: "https://t.me/movie",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Crypto Sayer",
    desc: "Canal cu 1.209.240 membri - predicții și analize crypto",
    url: "https://t.me/cryptosayer",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    category: ["crypto"]
  },
  {
    title: "AI Post",
    desc: "Canal cu 1.085.808 membri - AI și crypto intersection",
    url: "https://t.me/aipost",
    logo: "https://cdn-icons-png.flaticon.com/512/8099/8099231.png",
    category: ["crypto"]
  },
  {
    title: "CoinGraph News",
    desc: "Canal cu 1.057.208 membri - știri crypto actualizate",
    url: "https://t.me/coingraphnews",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "Coin Dot News Ann",
    desc: "Canal cu 869.053 membri - anunțuri importante crypto",
    url: "https://t.me/coindotnewsann",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "Pump Crypto Bets",
    desc: "Canal cu 722.787 membri - pump signals și bets",
    url: "https://t.me/pumpcryptobets",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Cryptex Library",
    desc: "Canal cu 684.241 membri - biblioteca crypto educațională",
    url: "https://t.me/cryptex_library",
    logo: "https://cdn-icons-png.flaticon.com/512/8115/8115728.png",
    category: ["crypto"]
  },
  {
    title: "America News Crypto",
    desc: "Canal cu 580.716 membri - știri crypto din America",
    url: "https://t.me/america_news_crypto",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "American Crypto Channel",
    desc: "Canal cu 586.681 membri - comunitatea crypto americană",
    url: "https://t.me/americancryptochannel",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    category: ["crypto"]
  },
  {
    title: "Crypto Miami",
    desc: "Canal cu 565.193 membri - crypto scene din Miami",
    url: "https://t.me/crypto_miami",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Watcher Guru",
    desc: "Canal cu 549.855 membri - market watching și analize",
    url: "https://t.me/watcherguru",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Alpha Trade News",
    desc: "Canal cu 519.863 membri - știri trading premium alpha",
    url: "https://t.me/alphattradenews",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Crypto Daily Headline",
    desc: "Canal cu 512.247 membri - headline-uri crypto zilnice",
    url: "https://t.me/cryptodailyheadline",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "Crypto Mountains",
    desc: "Canal cu 512.136 membri - high-level crypto discussions",
    url: "https://t.me/crypto_mountains",
    logo: "https://cdn-icons-png.flaticon.com/512/8115/8115728.png",
    category: ["crypto"]
  },
  {
    title: "Cryptoz",
    desc: "Canal cu 486.651 membri - tot despre lumea crypto",
    url: "https://t.me/cryptoz",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    category: ["crypto"]
  },
  {
    title: "The Yes Coin News",
    desc: "Canal cu 484.123 membri - știri despre Yes Coin",
    url: "https://t.me/theyescoin_news",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001982.png",
    category: ["crypto"]
  },
  {
    title: "Gamedva Com",
    desc: "Canal cu 462.227 membri - gaming meets crypto",
    url: "https://t.me/gamedvacom",
    logo: "https://cdn-icons-png.flaticon.com/512/8099/8099231.png",
    category: ["crypto"]
  },
  {
    title: "Crypto Retro",
    desc: "Canal cu 454.444 membri - retrospective și analize crypto",
    url: "https://t.me/crypto_retro",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    category: ["crypto"]
  },
  {
    title: "Evan Luthra VIP",
    desc: "Canal cu 454.006 membri - insights VIP de la Evan Luthra",
    url: "https://t.me/evanluthravip",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Thing IO",
    desc: "Canal cu 449.717 membri - IoT și blockchain technology",
    url: "https://t.me/thing_io",
    logo: "https://cdn-icons-png.flaticon.com/512/1304/1304068.png",
    category: ["crypto"]
  },
  {
    title: "Yousef Trader Official",
    desc: "Canal cu 438.312 membri - trading oficial Yousef",
    url: "https://t.me/yousefftraderofficial",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Telo News",
    desc: "Canal cu 403.598 membri - știri rapide crypto",
    url: "https://t.me/telonews",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "Crypto PBM",
    desc: "Canal cu 358.458 membri - Private Blockchain Members",
    url: "https://t.me/cryptopbm",
    logo: "https://cdn-icons-png.flaticon.com/512/8115/8115728.png",
    category: ["crypto"]
  },
  {
    title: "CoinMarketCap Announcements",
    desc: "Canal cu 317.997 membri - anunțuri oficiale CMC",
    url: "https://t.me/coinmarketcapannouncements",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "Crypto Pumps P",
    desc: "Canal cu 289.904 membri - pump signals premium",
    url: "https://t.me/crypto_pumps_p",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Jacob Crypto Clan Discord",
    desc: "Canal cu 244.184 membri - clan crypto Jacob",
    url: "https://t.me/jacobcryptoclandiscord",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    category: ["crypto"]
  },
  {
    title: "Bitcoin Official",
    desc: "Canal cu 236.034 membri - canalul oficial Bitcoin",
    url: "https://t.me/bitcoin",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png",
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

  // ADULT CHANNELS (45) - Real channels with member counts
  {
    title: "Alexis Mucci Official",
    desc: "Canal oficial cu 321.77k membri - conținut exclusiv",
    url: "https://t.me/alexismucciofficial",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Face Switcher",
    desc: "Canal cu 285.49k membri - tehnologii AI și deepfake",
    url: "https://t.me/faceswitcher",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Anime Mania XX",
    desc: "Canal cu 108.81k membri - conținut anime pentru adulți",
    url: "https://t.me/animemaniaxx",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Khyati Shree Channel",
    desc: "Canal cu 99.47k membri - conținut exclusiv",
    url: "https://t.me/khyatishreechannel",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Yailin La Mas Viral",
    desc: "Canal cu 79.73k membri - conținut viral și exclusiv",
    url: "https://t.me/yailin_la_mas_viral_yailinlamass",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Karel Ion Li",
    desc: "Canal cu 74.3k membri - conținut premium",
    url: "https://t.me/karelionli",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Rubi Rose Tele",
    desc: "Canal cu 64.88k membri - conținut exclusiv",
    url: "https://t.me/rubirosetele",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Utopian Leaks",
    desc: "Canal cu 62.75k membri - leaks și conținut premium",
    url: "https://t.me/utopianleaks",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Badoo Com",
    desc: "Canal cu 60.99k membri - dating și întâlniri",
    url: "https://t.me/badoocom",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    category: ["adult"]
  },
  {
    title: "Tinder RU",
    desc: "Canal cu 60.08k membri - dating și match-uri",
    url: "https://t.me/tinderru",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    category: ["adult"]
  },
  {
    title: "Allinika PH",
    desc: "Canal cu 60.05k membri - conținut premium",
    url: "https://t.me/allinika_ph",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Rachel Cook",
    desc: "Canal cu 54.08k membri - conținut exclusiv model",
    url: "https://t.me/itsrachelc00k",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Best Chat Group",
    desc: "Canal cu 44.63k membri - grupuri de chat premium",
    url: "https://t.me/best_chat_group",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    category: ["adult"]
  },
  {
    title: "Voulez J Fans Only",
    desc: "Canal cu 40.69k membri - conținut premium exclusive",
    url: "https://t.me/voulezjfansonly",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Grace Charis",
    desc: "Canal cu 38.32k membri - conținut exclusiv golf model",
    url: "https://t.me/grace_charis_itsgracecharis",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Yus Lopez",
    desc: "Canal cu 34.19k membri - conținut premium fitness",
    url: "https://t.me/yus_lopez_yuslopez",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Joselis Boli",
    desc: "Canal cu 22.71k membri - conținut exclusiv model",
    url: "https://t.me/joselisboli",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Bronte B",
    desc: "Canal cu 20.15k membri - conținut premium",
    url: "https://t.me/bronteb",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "OnlyFans Leak VIP",
    desc: "Canal cu 17.14k membri - leaks premium content",
    url: "https://t.me/onlyfansleakvip",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Beast Leaks",
    desc: "Canal cu 15.57k membri - content leaks premium",
    url: "https://t.me/beastleaksss",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "TikTok Girls",
    desc: "Canal cu 14.51k membri - TikTok content premium",
    url: "https://t.me/tiktokgurls",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Cameltoe OnlyFans",
    desc: "Canal cu 14.43k membri - conținut premium specific",
    url: "https://t.me/cameltoe_only_fans",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Thai Friendly",
    desc: "Canal cu 14.18k membri - dating Asia premium",
    url: "https://t.me/thaifriendly",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    category: ["adult"]
  },
  {
    title: "Olivia Casta Fans",
    desc: "Canal cu 13.72k membri - conținut exclusiv model",
    url: "https://t.me/olivia_casta_fans",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Jacky's Lobby",
    desc: "Canal cu 12.89k membri - chat premium lounge",
    url: "https://t.me/jackys_lobby",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    category: ["adult"]
  },
  {
    title: "Corinna Kopf Leaks",
    desc: "Canal cu 11.82k membri - content leaks premium",
    url: "https://t.me/corinnakopfleaks0",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Emily Black Leaks",
    desc: "Canal cu 11.82k membri - content leaks exclusive",
    url: "https://t.me/emilyblackleakss",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Bella Thorne Leaks",
    desc: "Canal cu 11.82k membri - celebrity content leaks",
    url: "https://t.me/bellathorneleaks1",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Naughty Dream",
    desc: "Canal cu 11.3k membri - conținut premium pentru adulți",
    url: "https://t.me/naughtydream",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Top Models VIP",
    desc: "Canal cu 11.23k membri - modele premium exclusive",
    url: "https://t.me/topmodels_vip",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "OnlyFans Premium 4 Free",
    desc: "Canal cu 10.57k membri - conținut premium gratuit",
    url: "https://t.me/onlyfanspremium4free",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Rebelote TG",
    desc: "Canal cu 10.4k membri - conținut premium rebel",
    url: "https://t.me/rebelotetg",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "NSFW Premium",
    desc: "Canal cu 10.12k membri - conținut NSFW premium",
    url: "https://t.me/nsfw_premium",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Gooning Paradise",
    desc: "Canal cu 9.94k membri - comunitate premium adults",
    url: "https://t.me/gooningparadise",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "RSLD Forever",
    desc: "Canal cu 118.156k membri - conținut premium vast",
    url: "https://t.me/rsldforever",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Premium Group VIP",
    desc: "Canal cu 52.327k membri - grup premium exclusiv",
    url: "https://t.me/+8m2N5-BokkZjNDk9",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    category: ["adult"]
  },
  {
    title: "All Internet Girls",
    desc: "Canal cu 36.087k membri - colecție modele internet",
    url: "https://t.me/all_internet_girls",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Eman Fan Base",
    desc: "Canal cu 30.962k membri - fan club premium",
    url: "https://t.me/emanfanbase",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Webcam Hunks",
    desc: "Canal cu 26.343k membri - modele webcam masculine",
    url: "https://t.me/webcam_hunks",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Elite Private Group",
    desc: "Canal cu 25.694k membri - grup privat elite",
    url: "https://t.me/+l4XR0WJ-_lYxOGQ1",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    category: ["adult"]
  },
  {
    title: "Buns Shaking",
    desc: "Canal cu 25.686k membri - conținut premium specific",
    url: "https://t.me/Buns_shaking",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Nude Center Leaks",
    desc: "Canal cu 24.707k membri - leaks premium center",
    url: "https://t.me/nudecenterleaks",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "VIP Secret Group",
    desc: "Canal cu 18.840k membri - grup secret VIP",
    url: "https://t.me/+lv4g_WmUdYE1YTE0",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    category: ["adult"]
  },
  {
    title: "PornHub Sex Videos",
    desc: "Canal cu 11.432k membri - conținut video premium",
    url: "https://t.me/PornHubb_SexVideos_PornVideos",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "My Super Hot",
    desc: "Canal cu 11.003k membri - conținut premium hot",
    url: "https://t.me/mysuperhot",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Elite Premium Chat",
    desc: "Canal cu 9.905k membri - chat premium elite",
    url: "https://t.me/+zNiwVFYIEL03ODYy",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    category: ["adult"]
  },
  {
    title: "Exclusive VIP Group",
    desc: "Canal cu 8.570k membri - grup exclusiv VIP",
    url: "https://t.me/+BSdnIuEOIuRlZWFl",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    category: ["adult"]
  },
  {
    title: "OnlyFans TGM",
    desc: "Canal cu 37.067k membri - OnlyFans telegram premium",
    url: "https://t.me/OnlyFansTGM",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
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

console.log('📺 defaultChannels loaded:', defaultChannels.length, 'channels'); // Debug

// Continue adding more channels to reach 50 for each category...

function getChannels() {
  // Returnează direct defaultChannels - simplu și funcțional
  return defaultChannels;
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

  // Salvează doar în user_channels pentru a evita duplicatele
  const userChannels = JSON.parse(localStorage.getItem('user_channels') || '[]');
  userChannels.unshift({ title, desc, url, logo, owner, category });
  localStorage.setItem('user_channels', JSON.stringify(userChannels));
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
  console.log('📺 Showing category:', category); // Debug
  currentCategory = category;
  updateActiveCategoryButtons();

  // Debug - verificăm canalele
  const channels = getChannels();
  console.log('🔍 Total channels:', channels.length);
  console.log('🔍 First 3 channels:', channels.slice(0, 3));
  console.log('🔍 Category being shown:', category);
  
  renderChannelsByCategory();  // Change background based on category
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

// Helper function to sort channels by member count
function getSortedChannels(channels, category) {
  // Încarcă setările custom pentru canale
  const loadChannelSettings = (title) => {
    const saved = localStorage.getItem('channelSettings_' + title);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch(e) {
        return {};
      }
    }
    return {};
  };

  return channels.sort((a, b) => {
    // Încarcă setările pentru ambele canale
    const settingsA = loadChannelSettings(a.title);
    const settingsB = loadChannelSettings(b.title);
    
    const priorityA = settingsA.priority || a.priority || 0;
    const priorityB = settingsB.priority || b.priority || 0;
    const sponsoredA = settingsA.sponsored || a.sponsored || false;
    const sponsoredB = settingsB.sponsored || b.sponsored || false;
    
    // 1. Prioritate: canalele cu prioritate mai mare apar primele
    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }
    
    // 2. Sponsorizate: canalele sponsorizate apar înaintea celor normale
    if (sponsoredA !== sponsoredB) {
      return sponsoredB ? 1 : -1;
    }
    
    // 3. Fallback: sortare după numărul de membri
    const getMemberCount = (desc) => {
      const match = desc.match(/(\d+[\.,]?\d*)\s*[KMk]?\s+membri/i);
      if (!match) return 0;
      
      let count = parseFloat(match[1].replace(',', '.'));
      if (desc.toLowerCase().includes('k')) count *= 1000;
      if (desc.toLowerCase().includes('m')) count *= 1000000;
      
      return count;
    };
    
    return getMemberCount(b.desc || '') - getMemberCount(a.desc || '');
  });
}

function renderChannelsByCategory() {
  console.log('🔄 Rendering channels for category:', currentCategory); // Debug

  const list = document.getElementById('channels-list');
  console.log('🎯 Found channels-list element:', !!list); // Debug
  if (!list) {
    console.error('❌ channels-list element not found!');
    return;
  }
  
  list.innerHTML = '';
  const channels = getChannels();
  console.log('📋 Total channels:', channels.length); // Debug
  
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
  
  console.log('🎯 Filtered channels:', filtered.length); // Debug

  // order: user's channels first
  const userChannels = [];
  const otherChannels = [];
  filtered.forEach(c => {
    if (logged && c.owner === logged) userChannels.push(c);
    else otherChannels.push(c);
  });
  const sorted = getSortedChannels(filtered, currentCategory);

  // For 'all' show message to select a category
  if (currentCategory === 'all') {
    const t = translations[currentLanguage];
    list.innerHTML = `<p style="text-align:center; padding: 3rem; font-size: 1.2rem; color: #666;">${t.selectCategory}</p>`;
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
        <a class="channel-link" onclick="openChannel('${channel.url}', '${channel.title}'); return false;" href="#">Vezi canalul</a>
        ${canDelete ? `<button class="delete-btn" onclick="deleteChannel(${channel.idxGlobal})">Șterge</button>` : ''}
      </div>
    `;
    list.appendChild(card);
  });
  
  console.log('🎯 renderChannelsByCategory finished - channels rendered:', sorted.length);
}

// --- Auth ---
function register() {
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const pass = document.getElementById('reg-password').value;
  if (!email || !pass) return alert('Completează toate câmpurile!');
  if (!validateEmail(email)) return alert('❌ Email invalid!\n\n✅ Folosește un email REAL:\n• nume.prenume@gmail.com\n• contact@yahoo.com\n• admin@company.ro\n\n❌ NU acceptăm:\n• 1111@gmail.com (doar cifre)\n• test@fake.com (domenii fake)');
  if (localStorage.getItem('user_' + email)) return alert('Emailul există deja!');
  localStorage.setItem('user_' + email, pass);
  // store metadata for the user (verified flag)
  const meta = { verified: false, createdAt: new Date().toISOString() };
  localStorage.setItem('user_meta_' + email, JSON.stringify(meta));
  alert('Cont creat! Acum te poți loga.');
  document.getElementById('reg-email').value = '';
  document.getElementById('reg-password').value = '';
}
function login() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass = document.getElementById('login-password').value;
  
  console.log('Login attempt:', email, pass); // Debug
  
  // Check for admin credentials
  if (email === 'admin@tgchannels.com' && pass === 'TgChannels2025Admin!') {
    console.log('Admin login successful'); // Debug
    localStorage.setItem('logged_user', email);
    localStorage.setItem('is_admin', 'true');
    showUser();
    alert('✅ Logat ca ADMIN cu succes!');
    return;
  }
  
  // Check for regular user
  if (localStorage.getItem('user_' + email) === pass) {
    localStorage.setItem('logged_user', email);
    localStorage.removeItem('is_admin');
    showUser();
    alert('✅ Logat ca utilizator normal!');
  } else {
    alert('Date incorecte!');
  }
}
function logout() {
  localStorage.removeItem('logged_user');
  localStorage.removeItem('is_admin');
  showUser();
}
function showUser() {
  const email = localStorage.getItem('logged_user');
  const isAdmin = localStorage.getItem('is_admin') === 'true';
  
  console.log('showUser:', email, 'isAdmin:', isAdmin); // Debug
  
  document.getElementById('user-info').style.display = email ? 'block' : 'none';
  document.getElementById('register-form').style.display = email ? 'none' : 'block';
  document.getElementById('login-form').style.display = email ? 'none' : 'block';
  document.getElementById('current-user').textContent = email || '';
  document.getElementById('add-channel-section').style.display = email ? 'block' : 'none';
  
  // Show/hide admin elements
  const adminBadge = document.getElementById('admin-badge');
  const adminControls = document.getElementById('admin-controls');
  const adminStatsSection = document.getElementById('admin-stats-section');
  
  console.log('Admin elements found:', !!adminBadge, !!adminControls, !!adminStatsSection); // Debug
  
  if (adminBadge) adminBadge.style.display = isAdmin ? 'inline' : 'none';
  if (adminControls) adminControls.style.display = isAdmin ? 'block' : 'none';
  if (adminStatsSection) adminStatsSection.style.display = isAdmin ? 'block' : 'none';
  
  document.getElementById('admin-panel').style.display = 'none'; // Hidden by default
  
  // Update admin stats if admin is logged in
  if (isAdmin) {
    console.log('Updating admin stats...'); // Debug
    updateAdminStats();
  }
  
  showCategory(currentCategory);
}
function validateEmail(email) {
  // Verifică format complet de email valid
  const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!basicFormat) return false;
  
  const [localPart, domain] = email.split('@');
  const domainLower = domain.toLowerCase();
  
  // Nu permite doar cifre în partea locală (1111@gmail.com)
  if (/^\d+$/.test(localPart)) {
    return false;
  }
  
  // Nu permite domenii fake
  const fakeDomains = ['fake', 'test', 'example', '123', 'temp', 'demo', 'localhost'];
  for (let fakeDomain of fakeDomains) {
    if (domainLower.includes(fakeDomain)) {
      return false;
    }
  }
  
  // Lista de domenii acceptate (reale și cunoscute)
  const validDomains = [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 
    'icloud.com', 'protonmail.com', 'aol.com', 'mail.com',
    'yahoo.ro', 'gmail.ro', 'outlook.ro', 'hotmail.ro',
    'company.com', 'business.ro', 'firma.com', 'work.com'
  ];
  
  // Verifică dacă domeniul este în lista acceptată SAU are format corporativ valid
  const isCorporateEmail = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domainLower) && 
                          !domainLower.includes('test') && 
                          !domainLower.includes('fake') &&
                          domainLower.includes('.') &&
                          domainLower.split('.').length >= 2;
                          
  const isValidDomain = validDomains.includes(domainLower) || isCorporateEmail;
  
  // Partea locală trebuie să aibă cel puțin 3 caractere și să nu fie doar cifre
  const isValidLocalPart = localPart.length >= 3 && !/^\d+$/.test(localPart);
  
  return isValidDomain && isValidLocalPart;
}

// Admin Functions
function showAdminPanel() {
  const adminPanel = document.getElementById('admin-panel');
  const isVisible = adminPanel.style.display === 'block';
  adminPanel.style.display = isVisible ? 'none' : 'block';
  
  if (!isVisible) {
    showAdminTab('channels');
    loadAdminData();
  }
}

function showAdminTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.admin-tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  
  // Remove active class from all buttons
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab and activate button
  document.getElementById(`admin-${tabName}-tab`).style.display = 'block';
  
  // Find and activate the correct button
  const tabMapping = {
    'channels': 'Gestiune Canale',
    'users': 'Utilizatori', 
    'stats': 'Statistici',
    'settings': 'Setări'
  };
  
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    if (btn.textContent.includes(tabMapping[tabName])) {
      btn.classList.add('active');
    }
  });
  
  // Load tab-specific data
  switch(tabName) {
    case 'channels':
      loadAdminChannels();
      break;
    case 'users':
      loadAdminUsers();
      break;
    case 'stats':
      loadAdminStats();
      break;
    case 'settings':
      loadAdminSettings();
      break;
  }
}

function loadAdminData() {
  loadAdminChannels();
  loadAdminStats();
}

function loadAdminChannels() {
  const channels = getChannels();
  const userChannels = JSON.parse(localStorage.getItem('user_channels') || '[]');
  const pendingChannels = JSON.parse(localStorage.getItem('pending_channels') || '[]');
  
  const adminChannelsList = document.getElementById('admin-channels-list');
  let html = '<h4>📺 Toate Canalele (' + channels.length + ')</h4>';
  
  // Show default channels
  html += '<div style="margin-bottom: 1rem;"><strong>Canale Implicite:</strong></div>';
  channels.slice(0, 10).forEach(channel => {
    // Încarcă setările custom
    const savedSettings = localStorage.getItem('channelSettings_' + channel.title);
    let settings = {};
    if (savedSettings) {
      try {
        settings = JSON.parse(savedSettings);
      } catch(e) {}
    }
    
    const priority = settings.priority || channel.priority || 0;
    const sponsored = settings.sponsored || channel.sponsored || false;
    const pricePerMonth = settings.pricePerMonth || channel.pricePerMonth || 0;
    
    html += `
      <div class="admin-channel-item" style="${priority > 0 || sponsored ? 'border-left: 4px solid #f39c12;' : ''}">
        <div class="admin-item-info">
          <strong>${channel.title}</strong>
          ${sponsored ? '<span style="background: #e74c3c; color: white; padding: 0.1rem 0.4rem; border-radius: 0.3rem; font-size: 0.7rem; margin-left: 0.5rem;">💎 SPONSORIZAT</span>' : ''}
          ${priority > 0 ? '<span style="background: #f39c12; color: white; padding: 0.1rem 0.4rem; border-radius: 0.3rem; font-size: 0.7rem; margin-left: 0.3rem;">🏆 P' + priority + '</span>' : ''}
          <br>
          <small>${channel.desc}</small><br>
          <a href="${channel.url}" target="_blank">${channel.url}</a>
          <div style="margin-top: 0.3rem;">
            <span style="background: #3498db; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem;">
              ${channel.category.join(', ')}
            </span>
            ${pricePerMonth > 0 ? '<span style="background: #27ae60; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem; margin-left: 0.3rem;">💰 ' + pricePerMonth + ' €/lună</span>' : ''}
          </div>
        </div>
        <div class="admin-item-actions">
          <button class="edit" onclick="editChannel('${channel.title}')">✏️ Edit</button>
          <button class="delete" onclick="deleteChannel('${channel.title}')">🗑️ Delete</button>
        </div>
      </div>
    `;
  });
  
  if (channels.length > 10) {
    html += `<div style="text-align: center; margin: 1rem 0;">
      <button onclick="showAllChannels()" style="background: #3498db;">Vezi toate cele ${channels.length} canale</button>
    </div>`;
  }
  
  // Show user submitted channels
  if (userChannels.length > 0) {
    html += '<div style="margin: 1.5rem 0 1rem 0;"><strong>Canale Utilizatori:</strong></div>';
    userChannels.forEach(channel => {
      html += `
        <div class="admin-channel-item">
          <div class="admin-item-info">
            <strong>${channel.title}</strong> <small>(by ${channel.owner})</small><br>
            <small>${channel.desc}</small><br>
            <a href="${channel.url}" target="_blank">${channel.url}</a>
          </div>
          <div class="admin-item-actions">
            <button class="approve" onclick="approveChannel('${channel.title}')">✅ Approve</button>
            <button class="reject" onclick="rejectChannel('${channel.title}')">❌ Reject</button>
            <button class="edit" onclick="editChannel('${channel.title}')">✏️ Edit</button>
          </div>
        </div>
      `;
    });
  }
  
  // Show pending channels
  if (pendingChannels.length > 0) {
    html += '<div style="margin: 1.5rem 0 1rem 0;"><strong>Canale în Așteptare:</strong></div>';
    pendingChannels.forEach(channel => {
      html += `
        <div class="admin-channel-item pending">
          <div class="admin-item-info">
            <strong>${channel.title}</strong> <small>(by ${channel.owner})</small><br>
            <small>${channel.desc}</small><br>
            <a href="${channel.url}" target="_blank">${channel.url}</a>
          </div>
          <div class="admin-item-actions">
            <button class="approve" onclick="approveChannel('${channel.title}')">✅ Approve</button>
            <button class="reject" onclick="rejectChannel('${channel.title}')">❌ Reject</button>
          </div>
        </div>
      `;
    });
  }
  
  adminChannelsList.innerHTML = html;
}

function loadAdminUsers() {
  const users = [];
  // Get all users from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('user_')) {
      const email = key.replace('user_', '');
      users.push(email);
    }
  }
  
  const adminUsersList = document.getElementById('admin-users-list');
  let html = `<h4>👥 Utilizatori Înregistrați (${users.length})</h4>`;
  
  users.forEach(email => {
    const isBanned = localStorage.getItem('banned_' + email) === 'true';
    const meta = JSON.parse(localStorage.getItem('user_meta_' + email) || '{}');
    const verified = meta.verified === true;
    html += `
      <div class="admin-user-item ${isBanned ? 'rejected' : ''}">
        <div class="admin-item-info">
          <strong>${email}</strong>
          ${verified ? `<span class="verified-badge">✔ Verificat</span>` : ''}
          <br><small>Status: ${isBanned ? '🚫 Banned' : '✅ Active'}</small>
        </div>
        <div class="admin-item-actions">
          ${isBanned ? 
            `<button class="approve" onclick="unbanUser('${email}')">🔓 Unban</button>` :
            `<button class="ban" onclick="banUser('${email}')">🚫 Ban</button>`
          }
          ${verified ? '' : `<button class="approve" onclick="adminVerifyUser('${email}')">🔒 Verifică</button>`}
          <button class="delete" onclick="deleteUser('${email}')">🗑️ Delete</button>
        </div>
      </div>
    `;
  });
  
  adminUsersList.innerHTML = html;
}

function loadAdminStats() {
  const channels = getChannels();
  const userChannels = JSON.parse(localStorage.getItem('user_channels') || '[]');
  const users = [];
  
  // Count users
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('user_')) {
      users.push(key.replace('user_', ''));
    }
  }
  
  // Count by category
  const categoryStats = {};
  channels.forEach(channel => {
    channel.category.forEach(cat => {
      categoryStats[cat] = (categoryStats[cat] || 0) + 1;
    });
  });
  
  const statsDiv = document.getElementById('admin-statistics');
  let html = '<div class="admin-stats-grid">';
  
  html += `
    <div class="admin-stat-card">
      <h4>${channels.length}</h4>
      <p>📺 Total Canale</p>
    </div>
    <div class="admin-stat-card">
      <h4>${users.length}</h4>
      <p>👥 Utilizatori</p>
    </div>
    <div class="admin-stat-card">
      <h4>${userChannels.length}</h4>
      <p>⏳ Canale User</p>
    </div>
    <div class="admin-stat-card">
      <h4>${Object.keys(categoryStats).length}</h4>
      <p>📂 Categorii</p>
    </div>
  `;
  
  html += '</div>';
  
  // Category breakdown
  html += '<h4>📊 Canale pe Categorii:</h4>';
  Object.entries(categoryStats).forEach(([category, count]) => {
    const percentage = ((count / channels.length) * 100).toFixed(1);
    html += `
      <div style="display: flex; justify-content: space-between; padding: 0.5rem; background: rgba(255,255,255,0.7); margin-bottom: 0.5rem; border-radius: 0.5rem;">
        <span><strong>${category}</strong></span>
        <span>${count} canale (${percentage}%)</span>
      </div>
    `;
  });
  
  statsDiv.innerHTML = html;
}

function loadAdminSettings() {
  // Load current settings
  document.getElementById('require-approval').checked = 
    localStorage.getItem('require_approval') === 'true';
  document.getElementById('enable-moderation').checked = 
    localStorage.getItem('enable_moderation') === 'true';
}

function saveAdminSettings() {
  const requireApproval = document.getElementById('require-approval').checked;
  const enableModeration = document.getElementById('enable-moderation').checked;
  
  localStorage.setItem('require_approval', requireApproval);
  localStorage.setItem('enable_moderation', enableModeration);
  
  alert('✅ Setările au fost salvate!');
}

function showUserStats() {
  loadAdminStats();
  showAdminPanel();
  showAdminTab('stats');
}

function approveChannel(title) {
  // Implementation for approving channels
  alert(`✅ Canalul "${title}" a fost aprobat!`);
  loadAdminChannels();
}

function rejectChannel(title) {
  if (confirm(`❌ Sigur vrei să respingi canalul "${title}"?`)) {
    alert(`❌ Canalul "${title}" a fost respins!`);
    loadAdminChannels();
  }
}

function editChannel(title) {
  // Găsim canalul în defaultChannels
  const channel = defaultChannels.find(ch => ch.title === title);
  if (!channel) {
    alert(`❌ Canalul "${title}" nu a fost găsit!`);
    return;
  }

  // Crează modal pentru editare
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.8); z-index: 10000;
    display: flex; align-items: center; justify-content: center;
  `;
  
  const currentPriority = channel.priority || 0;
  const isSponsored = channel.sponsored || false;
  const currentPricePerMonth = channel.pricePerMonth || 0;
  
  modal.innerHTML = `
    <div style="background: white; padding: 2rem; border-radius: 1rem; max-width: 500px; width: 90%;">
      <h3>✏️ Editează Canalul: ${title}</h3>
      
      <div style="margin: 1rem 0;">
        <label><strong>🏆 Prioritate (0-100):</strong></label><br>
        <input type="number" id="channel-priority" value="${currentPriority}" min="0" max="100" 
               style="width: 100%; padding: 0.5rem; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 0.5rem;">
        <small style="color: #666;">0 = normal, 100 = cel mai sus în căutări</small>
      </div>
      
      <div style="margin: 1rem 0;">
        <label><strong>💎 Status Sponsorizat:</strong></label><br>
        <input type="checkbox" id="channel-sponsored" ${isSponsored ? 'checked' : ''}>
        <label for="channel-sponsored">Canal sponsorizat/plătit</label>
      </div>
      
      <div style="margin: 1rem 0;">
        <label><strong>💰 Preț lunar (RON):</strong></label><br>
        <input type="number" id="channel-price" value="${currentPricePerMonth}" min="0" step="10"
               style="width: 100%; padding: 0.5rem; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 0.5rem;">
        <small style="color: #666;">Pentru tracking câștiguri din sponsorizări</small>
      </div>
      
      <div style="margin-top: 2rem; text-align: center;">
        <button onclick="saveChannelChanges('${title}')" 
                style="background: #27ae60; color: white; padding: 0.8rem 2rem; border: none; border-radius: 0.5rem; margin: 0.5rem; cursor: pointer;">
          ✅ Salvează
        </button>
        <button onclick="closeEditModal()" 
                style="background: #95a5a6; color: white; padding: 0.8rem 2rem; border: none; border-radius: 0.5rem; margin: 0.5rem; cursor: pointer;">
          ❌ Anulează
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  window.currentEditModal = modal;
}

function saveChannelChanges(title) {
  const priority = parseInt(document.getElementById('channel-priority').value) || 0;
  const sponsored = document.getElementById('channel-sponsored').checked;
  const pricePerMonth = parseInt(document.getElementById('channel-price').value) || 0;
  
  // Găsim canalul și actualizăm proprietățile
  const channel = defaultChannels.find(ch => ch.title === title);
  if (channel) {
    channel.priority = priority;
    channel.sponsored = sponsored;
    channel.pricePerMonth = pricePerMonth;
    
    // Salvăm în localStorage pentru persistență
    localStorage.setItem('channelSettings_' + title, JSON.stringify({
      priority: priority,
      sponsored: sponsored,
      pricePerMonth: pricePerMonth,
      lastUpdated: new Date().toISOString()
    }));
    
    alert(`✅ Canalul "${title}" a fost actualizat cu succes!\n\n🏆 Prioritate: ${priority}\n💎 Sponsorizat: ${sponsored ? 'DA' : 'NU'}\n💰 Preț lunar: ${pricePerMonth} RON`);
    
    closeEditModal();
    loadAdminChannels(); // Reîncarcă lista
  }
}

function closeEditModal() {
  if (window.currentEditModal) {
    document.body.removeChild(window.currentEditModal);
    window.currentEditModal = null;
  }
}

function deleteChannel(title) {
  if (confirm(`🗑️ Sigur vrei să ștergi canalul "${title}"?`)) {
    // Șterge și setările custom
    localStorage.removeItem('channelSettings_' + title);
    alert(`🗑️ Canalul "${title}" a fost șters!`);
    loadAdminChannels();
  }
}

function banUser(email) {
  if (confirm(`🚫 Sigur vrei să blochezi utilizatorul "${email}"?`)) {
    localStorage.setItem('banned_' + email, 'true');
    alert(`🚫 Utilizatorul "${email}" a fost blocat!`);
    loadAdminUsers();
  }
}

function unbanUser(email) {
  localStorage.removeItem('banned_' + email);
  alert(`🔓 Utilizatorul "${email}" a fost deblocat!`);
  loadAdminUsers();
}

function deleteUser(email) {
  if (confirm(`🗑️ Sigur vrei să ștergi utilizatorul "${email}"? Această acțiune nu poate fi anulată!`)) {
    localStorage.removeItem('user_' + email);
    localStorage.removeItem('banned_' + email);
    localStorage.removeItem('user_meta_' + email);
    alert(`🗑️ Utilizatorul "${email}" a fost șters!`);
    loadAdminUsers();
  }
}

// Admin add-user modal functions
function showAddUserModal() {
  if (localStorage.getItem('is_admin') !== 'true') return alert('Acces restricționat.');
  document.getElementById('admin-new-email').value = '';
  document.getElementById('admin-new-password').value = '';
  document.getElementById('add-user-modal').style.display = 'flex';
}

function closeAddUserModal() {
  document.getElementById('add-user-modal').style.display = 'none';
}

function adminCreateUser() {
  const email = document.getElementById('admin-new-email').value.trim().toLowerCase();
  const pass = document.getElementById('admin-new-password').value;
  if (!email || !pass) return alert('Completează toate câmpurile!');
  if (!validateEmail(email)) return alert('Email invalid!');
  if (localStorage.getItem('user_' + email)) return alert('Emailul există deja!');

  // For ANY email, ask for confirmation by typing the email exactly
  window._pendingAdminNewUser = { email, pass };
  // show confirmation modal
  document.getElementById('confirm-email-text').textContent = `Confirmă că adresa ${email} este un email real și valid. Scrie adresa completă mai jos pentru a confirma:`;
  document.getElementById('confirm-email-input').value = '';
  document.getElementById('confirm-email-modal').style.display = 'flex';
}

function closeConfirmEmailModal() {
  document.getElementById('confirm-email-modal').style.display = 'none';
  window._pendingAdminNewUser = null;
}

function confirmEmailCheck() {
  const typed = document.getElementById('confirm-email-input').value.trim().toLowerCase();
  const pending = window._pendingAdminNewUser;
  if (!pending) return closeConfirmEmailModal();
  if (typed !== pending.email) return alert('Confirmarea nu s-a potrivit. Introdu adresa exactă pentru a confirma că este un email real.');

  // create verified user
  localStorage.setItem('user_' + pending.email, pending.pass);
  const meta = { verified: true, verifiedAt: new Date().toISOString(), verifiedByAdmin: true };
  localStorage.setItem('user_meta_' + pending.email, JSON.stringify(meta));
  alert(`✅ Utilizatorul ${pending.email} a fost creat și verificat ca email real.`);
  window._pendingAdminNewUser = null;
  closeConfirmEmailModal();
  closeAddUserModal();
  loadAdminUsers();
}

function adminVerifyUser(email) {
  if (!confirm(`🔒 Confirmi că utilizatorul ${email} este verificat?`)) return;
  const meta = JSON.parse(localStorage.getItem('user_meta_' + email) || '{}');
  meta.verified = true;
  meta.verifiedAt = new Date().toISOString();
  meta.verifiedByAdmin = true;
  localStorage.setItem('user_meta_' + email, JSON.stringify(meta));
  alert(`🔒 Utilizatorul ${email} a fost marcat ca verificat.`);
  loadAdminUsers();
}

function exportChannels() {
  const channels = getChannels();
  const dataStr = JSON.stringify(channels, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'tg-channels-export.json';
  link.click();
  URL.revokeObjectURL(url);
}

function exportUsers() {
  const users = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('user_')) {
      users.push(key.replace('user_', ''));
    }
  }
  const dataStr = JSON.stringify(users, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'tg-users-export.json';
  link.click();
  URL.revokeObjectURL(url);
}

function showAllChannels() {
  console.log('🔍 showAllChannels called'); // Debug
  const channels = getChannels();
  console.log('📺 Total channels:', channels.length); // Debug
  
  let html = `<h4>📺 Toate Canalele (${channels.length})</h4>`;

  channels.forEach((channel, index) => {
    try {
      // Asigură-te că category este array
      const categoryStr = Array.isArray(channel.category) 
        ? channel.category.join(', ') 
        : channel.category || 'necategorizat';
        
      html += `
        <div class="admin-channel-item" style="border: 1px solid #ddd; margin: 0.5rem 0; padding: 0.8rem; border-radius: 0.5rem; background: white;">
          <div class="admin-item-info">
            <strong>${channel.title || 'Fără titlu'}</strong><br>
            <small>${channel.desc || 'Fără descriere'}</small><br>
            <a href="${channel.url || '#'}" target="_blank">${channel.url || 'Fără URL'}</a>
            <div style="margin-top: 0.3rem;">
              <span style="background: #3498db; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem;">
                ${categoryStr}
              </span>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Error processing channel:', channel, error);
      html += `<div style="color: red; padding: 0.5rem;">Error la canalul ${index}: ${error.message}</div>`;
    }
  });

  const listElement = document.getElementById('admin-channels-list');
  if (listElement) {
    listElement.innerHTML = html;
    console.log('✅ HTML updated successfully'); // Debug
  } else {
    console.error('❌ Element admin-channels-list not found!');
    alert('Eroare: Nu găsesc elementul pentru afișarea canalelor!');
  }
}function showPendingChannels() {
  const pendingChannels = JSON.parse(localStorage.getItem('pending_channels') || '[]');
  const userChannels = JSON.parse(localStorage.getItem('user_channels') || '[]');
  
  let html = `<h4>⏳ Canale în Așteptare (${pendingChannels.length + userChannels.length})</h4>`;
  
  [...pendingChannels, ...userChannels].forEach(channel => {
    html += `
      <div class="admin-channel-item pending">
        <div class="admin-item-info">
          <strong>${channel.title}</strong> <small>(by ${channel.owner})</small><br>
          <small>${channel.desc}</small><br>
          <a href="${channel.url}" target="_blank">${channel.url}</a>
        </div>
        <div class="admin-item-actions">
          <button class="approve" onclick="approveChannel('${channel.title}')">✅ Approve</button>
          <button class="reject" onclick="rejectChannel('${channel.title}')">❌ Reject</button>
        </div>
      </div>
    `;
  });
  
  if (pendingChannels.length + userChannels.length === 0) {
    html += '<div style="text-align: center; padding: 2rem; color: #666;">Nu există canale în așteptare.</div>';
  }
  
  document.getElementById('admin-channels-list').innerHTML = html;
}

// Admin Stats Functions
function trackChannelClick(channelTitle, channelUrl) {
  // Track click data
  const clicks = JSON.parse(localStorage.getItem('admin_clicks') || '{}');
  const today = new Date().toDateString();
  
  if (!clicks[today]) clicks[today] = {};
  if (!clicks[today][channelTitle]) clicks[today][channelTitle] = 0;
  clicks[today][channelTitle]++;
  
  localStorage.setItem('admin_clicks', JSON.stringify(clicks));
  localStorage.setItem('admin_last_click', new Date().toLocaleString() + ' - ' + channelTitle);
  
  // Update stats if admin is logged in
  if (localStorage.getItem('is_admin') === 'true') {
    updateAdminStats();
  }
}

function trackPageView() {
  const views = JSON.parse(localStorage.getItem('admin_views') || '{}');
  const today = new Date().toDateString();
  
  if (!views[today]) views[today] = 0;
  views[today]++;
  
  localStorage.setItem('admin_views', JSON.stringify(views));
}

function updateAdminStats() {
  const channels = getChannels();
  const users = JSON.parse(localStorage.getItem('registered_users') || '[]');
  const clicks = JSON.parse(localStorage.getItem('admin_clicks') || '{}');
  const views = JSON.parse(localStorage.getItem('admin_views') || '{}');
  const today = new Date().toDateString();
  
  // Calculate totals
  let totalClicks = 0;
  let mostClickedChannel = '';
  let maxClicks = 0;
  
  Object.values(clicks).forEach(dayClicks => {
    Object.entries(dayClicks).forEach(([channel, count]) => {
      totalClicks += count;
      if (count > maxClicks) {
        maxClicks = count;
        mostClickedChannel = channel;
      }
    });
  });
  
  const totalViews = Object.values(views).reduce((a, b) => a + b, 0);
  const todayVisits = views[today] || 0;
  
  // Calculate total members
  let totalMembers = 0;
  channels.forEach(channel => {
    const match = channel.desc.match(/(\d+[\.,]?\d*)\s*[KMk]?\s+membri/i);
    if (match) {
      let num = parseFloat(match[1].replace(',', '.'));
      if (channel.desc.toLowerCase().includes('k membri')) num *= 1000;
      if (channel.desc.toLowerCase().includes('m membri')) num *= 1000000;
      totalMembers += num;
    }
  });
  
  // Format numbers
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };
  
  // Update UI
  document.getElementById('admin-total-channels').textContent = channels.length;
  document.getElementById('admin-total-members').textContent = formatNumber(totalMembers);
  document.getElementById('admin-total-clicks').textContent = totalClicks;
  document.getElementById('admin-total-views').textContent = totalViews;
  document.getElementById('admin-total-users').textContent = users.length;
  document.getElementById('admin-today-visits').textContent = todayVisits;
  document.getElementById('admin-last-click').textContent = localStorage.getItem('admin_last_click') || 'Niciodată';
  document.getElementById('admin-most-clicked').textContent = mostClickedChannel || 'Niciunul';
}

// Override channel link clicks to track them
function openChannel(url, title) {
  trackChannelClick(title, url);
  window.open(url, '_blank');
}

// initialize
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎯 DOM loaded, initializing app...'); // Debug
  
  // Test if changeLanguage function is accessible
  console.log('🔍 changeLanguage function:', typeof changeLanguage);
  console.log('🌐 Making changeLanguage globally accessible...');
  window.changeLanguage = changeLanguage;
  
  // Initialize language system
  updateUI();
  
  // Initialize channel priority settings
  initializeChannelSettings();
  
  trackPageView(); // Track page view
  showUser();
  showCategory('all'); // Show all channels on load
  
  // Așteaptă un pic pentru ca DOM-ul să fie complet gata
  setTimeout(() => {
    console.log('🚀 About to call displayFeaturedChannelsBottom...'); // Debug
    displayFeaturedChannelsBottom(); // Afișează canalele featured în partea de jos
  }, 100);
  
  console.log('✅ App initialized'); // Debug
});
// === HOMEPAGE FEATURED CHANNELS MANAGEMENT ===

// Functie pentru a obtine canalele featured pentru prima pagina
function getHomepageFeaturedChannels() {
  console.log('🏠 getHomepageFeaturedChannels called'); // Debug
  const featuredIds = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  console.log('📋 Featured IDs from storage:', featuredIds); // Debug
  
  // Daca nu sunt setate canale featured, returneaza primele 6 din defaultChannels
  if (featuredIds.length === 0) {
    console.log('🎯 No featured channels set, returning first 6 from defaultChannels'); // Debug
    if (typeof defaultChannels === 'undefined') {
      console.log('❌ defaultChannels not yet defined, returning empty array');
      return [];
    }
    const first6 = defaultChannels.slice(0, 6);
    console.log('📺 Returning channels:', first6.map(c => c.title)); // Debug
    return first6;
  }

  // Returneaza canalele featured in ordinea setata
  const featuredChannels = [];
  for (let id of featuredIds) {
    const channel = defaultChannels.find(c => c.title === id);
    if (channel) {
      featuredChannels.push(channel);
    }
  }

  // Daca nu avem 6, completeaza cu alte canale
  if (featuredChannels.length < 6) {
    const remainingChannels = defaultChannels.filter(c => !featuredIds.includes(c.title));
    featuredChannels.push(...remainingChannels.slice(0, 6 - featuredChannels.length));
  }

  return featuredChannels.slice(0, 6);
}

// Functie pentru admin sa gestioneze canalele de pe prima pagina
function showHomepageManager() {
  const allChannels = defaultChannels;
  const currentFeatured = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  
  if (allChannels.length === 0) {
    alert('Nu exista canale disponibile!');
    return;
  }

  let modalHTML = `
    <div id="homepage-manager-modal" class="modal" style="display: flex;">
      <div class="modal-content" style="max-width: 600px; width: 90%;">
        <h3>ðŸ  Gestionare Prima Pagina</h3>
        <p style="color: #666; margin-bottom: 1rem;">Selecteaza 6 canale care vor aparea pe prima pagina:</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <h4>ðŸ“‹ Canale Disponibile:</h4>
            <div id="available-channels" style="max-height: 300px; overflow-y: auto; border: 1px solid #ddd; padding: 0.5rem; border-radius: 0.5rem;">
              ${allChannels.map(channel => `
                <div class="channel-select-item" data-title="${channel.title}" style="padding: 0.5rem; border-bottom: 1px solid #eee; cursor: pointer; ${currentFeatured.includes(channel.title) ? 'background: #e3f2fd;' : ''}">
                  <strong>${channel.title}</strong><br>
                  <small style="color: #666;">${channel.desc}</small>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h4>â­ Prima Pagina (${currentFeatured.length}/6):</h4>
            <div id="featured-channels" style="min-height: 300px; border: 1px solid #ddd; padding: 0.5rem; border-radius: 0.5rem; background: #f8f9fa;">
              ${currentFeatured.map((title, index) => {
                const channel = allChannels.find(c => c.title === title);
                return channel ? `
                  <div class="featured-item" data-title="${title}" style="padding: 0.5rem; margin-bottom: 0.5rem; background: white; border-radius: 0.3rem; border-left: 3px solid #4caf50;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <div style="flex: 1;">
                        <strong>${index + 1}. ${channel.title}</strong><br>
                        <small style="color: #666;">${channel.desc}</small>
                      </div>
                      <button onclick="removeFeaturedChannel('${title}')" style="background: #f44336; color: white; border: none; padding: 0.2rem 0.5rem; border-radius: 0.2rem; cursor: pointer;">âœ•</button>
                    </div>
                  </div>
                ` : '';
              }).join('')}
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button onclick="closeHomepageManager()" style="background: #95a5a6; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer;">Anuleaza</button>
          <button onclick="saveHomepageFeatured()" style="background: #4caf50; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer;">ðŸ’¾ Salveaza</button>
        </div>
      </div>
    </div>
  `;

  // Remove existing modal if any
  const existingModal = document.getElementById('homepage-manager-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Add modal to body
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Add click handlers for available channels
  document.querySelectorAll('.channel-select-item').forEach(item => {
    item.addEventListener('click', function() {
      const title = this.dataset.title;
      addToFeatured(title);
    });
  });
}

function addToFeatured(title) {
  const currentFeatured = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  
  if (currentFeatured.includes(title)) {
    alert('Canalul este deja pe prima pagina!');
    return;
  }

  if (currentFeatured.length >= 6) {
    alert('Poti avea maximum 6 canale pe prima pagina!');
    return;
  }

  currentFeatured.push(title);
  localStorage.setItem('homepage_featured', JSON.stringify(currentFeatured));

  // Refresh modal
  showHomepageManager();
}

function removeFeaturedChannel(title) {
  let currentFeatured = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  currentFeatured = currentFeatured.filter(t => t !== title);
  localStorage.setItem('homepage_featured', JSON.stringify(currentFeatured));

  // Refresh modal
  showHomepageManager();
}

function saveHomepageFeatured() {
  closeHomepageManager();
  showCategory('all'); // Refresh prima pagina
  alert('âœ… Prima pagina a fost actualizata cu succes!');
}

function closeHomepageManager() {
  const modal = document.getElementById('homepage-manager-modal');
  if (modal) {
    modal.remove();
  }
}

// === FEATURED CHANNELS BOTTOM SECTION ===
function displayFeaturedChannelsBottom() {
  console.log('🌟 Displaying featured channels at bottom');
  console.log('🔍 Looking for featured-channels-grid element...');
  
  const featuredGrid = document.getElementById('featured-channels-grid');
  console.log('📍 Featured grid element:', featuredGrid);
  
  if (!featuredGrid) {
    console.log('❌ Featured channels grid not found');
    console.log('🔍 Available elements with id:', document.querySelectorAll('[id]'));
    return;
  }
  
  console.log('✅ Featured grid found!');
  console.log('📊 defaultChannels length:', defaultChannels.length);
  
  // Afișează primele 6 canale din defaultChannels
  if (typeof defaultChannels === 'undefined') {
    console.log('❌ defaultChannels not yet defined, showing message');
    featuredGrid.innerHTML = '<p style="text-align:center; color: white;">Se încarcă canalele...</p>';
    return;
  }
  
  const featuredChannels = defaultChannels.slice(0, 6);
  console.log('📺 Featured channels to show:', featuredChannels.length);
  
  if (featuredChannels.length === 0) {
    featuredGrid.innerHTML = '<p style="text-align:center; color: white;">Nu există canale de afișat.</p>';
    return;
  }
  
  console.log('🔥 Creating HTML for channels:', featuredChannels.map(c => c.name));
  
  const channelsHtml = featuredChannels.map(channel => `
    <div class="channel-card">
      <img class="channel-logo" src="https://cdn-icons-png.flaticon.com/512/825/825519.png" alt="${channel.name}">
      <div class="channel-info">
        <div class="channel-title">${channel.name}</div>
        <div class="channel-desc">${channel.description}</div>
        <div class="channel-meta">
          <span class="channel-subscribers">${channel.subscribers} membri</span>
          <span class="channel-category">${channel.category}</span>
        </div>
        <a class="channel-link" href="${channel.link}" target="_blank">Vezi canalul</a>
      </div>
    </div>
  `).join('');
  
  console.log('📝 Generated HTML length:', channelsHtml.length);
  console.log('🎯 Setting innerHTML...');
  
  featuredGrid.innerHTML = channelsHtml;
  
  console.log('✅ Featured channels displayed successfully');
  console.log('🔍 Final grid children count:', featuredGrid.children.length);
}

// Initialize channel priority and sponsorship settings
function initializeChannelSettings() {
  console.log('🏆 Initializing channel priority settings...');
  
  // Aplică setările salvate pentru canale
  defaultChannels.forEach(channel => {
    const savedSettings = localStorage.getItem('channelSettings_' + channel.title);
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        channel.priority = settings.priority || 0;
        channel.sponsored = settings.sponsored || false;
        channel.pricePerMonth = settings.pricePerMonth || 0;
        
        console.log(`📊 Loaded settings for ${channel.title}: Priority=${channel.priority}, Sponsored=${channel.sponsored}, Price=${channel.pricePerMonth} RON`);
      } catch(e) {
        console.error(`❌ Error loading settings for ${channel.title}:`, e);
      }
    }
  });
  
  console.log('✅ Channel settings initialized successfully');
}

// === PREMIUM PAYMENT SYSTEM ===
let selectedPackage = null;
let selectedPrice = null;

// Function to select a package
function selectPackage(packageType, price) {
  selectedPackage = packageType;
  selectedPrice = price;
  
  // Show payment modal
  document.getElementById('payment-modal').style.display = 'flex';
  
  // Update package display
  const packageNames = {
    basic: ' BASIC',
    premium: ' PREMIUM', 
    vip: ' VIP'
  };
  
  document.getElementById('package-name-display').textContent = packageNames[packageType];
  document.getElementById('package-price-display').textContent = price;
  
  // Populate channel select with user's channels
  populateChannelSelect();
}

// Function to populate channel select dropdown
function populateChannelSelect() {
  const channelSelect = document.getElementById('channel-select');
  const currentUser = localStorage.getItem('currentUser');
  
  if (!currentUser) {
    channelSelect.innerHTML = '<option value="">Trebuie să fii conectat...</option>';
    return;
  }
  
  const userChannels = getUserChannels(currentUser);
  channelSelect.innerHTML = '<option value="">Selectează un canal...</option>';
  
  userChannels.forEach(channel => {
    const option = document.createElement('option');
    option.value = channel.id;
    option.textContent = `${channel.title} (${channel.subscribers} membri)`;
    channelSelect.appendChild(option);
  });
  
  if (userChannels.length === 0) {
    channelSelect.innerHTML = '<option value="">Nu ai canale adăugate...</option>';
  }
}

// Function to get user's channels
function getUserChannels(userEmail) {
  const allChannels = JSON.parse(localStorage.getItem('channels') || '[]');
  return allChannels.filter(channel => channel.addedBy === userEmail);
}

// Function to close payment modal
function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
  selectedPackage = null;
  selectedPrice = null;
}

// Payment method selection
document.addEventListener('DOMContentLoaded', function() {
  const paymentMethodBtns = document.querySelectorAll('.payment-method-btn');
  
  paymentMethodBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      paymentMethodBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Handle payment form submission
document.addEventListener('DOMContentLoaded', function() {
  const paymentForm = document.getElementById('payment-form');
  
  if (paymentForm) {
    paymentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      processPayment();
    });
  }
});

// Function to process payment
function processPayment() {
  const channelSelect = document.getElementById('channel-select');
  const selectedChannelId = channelSelect.value;
  
  if (!selectedChannelId) {
    alert('Te rog selectează un canal pentru promovare!');
    return;
  }
  
  const activePaymentMethod = document.querySelector('.payment-method-btn.active');
  const paymentMethod = activePaymentMethod.dataset.method;
  
  // Show loading state
  const payButton = document.querySelector('.btn-pay');
  const originalText = payButton.textContent;
  payButton.textContent = 'Se procesează...';
  payButton.disabled = true;
  
  // Simulate payment processing
  setTimeout(() => {
    if (paymentMethod === 'stripe') {
      // Redirect to Stripe Checkout (this would be real Stripe integration)
      alert(`Redirecționare către Stripe pentru plata de ${selectedPrice}€...`);
      // window.location.href = `https://checkout.stripe.com/pay/...`;
    } else if (paymentMethod === 'paypal') {
      // Redirect to PayPal (this would be real PayPal integration)
      alert(`Redirecționare către PayPal pentru plata de ${selectedPrice}€...`);
      // window.location.href = `https://paypal.com/checkout/...`;
    }
    
    // For demo purposes, simulate successful payment
    simulateSuccessfulPayment(selectedChannelId);
    
    // Reset button
    payButton.textContent = originalText;
    payButton.disabled = false;
    
  }, 2000);
}

// Function to simulate successful payment and upgrade channel
function simulateSuccessfulPayment(channelId) {
  const channels = JSON.parse(localStorage.getItem('channels') || '[]');
  const channelIndex = channels.findIndex(c => c.id === channelId);
  
  if (channelIndex !== -1) {
    // Upgrade channel to premium status
    channels[channelIndex].premiumType = selectedPackage;
    channels[channelIndex].premiumExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
    channels[channelIndex].priority = selectedPackage === 'vip' ? 100 : selectedPackage === 'premium' ? 75 : 50;
    
    // Save updated channels
    localStorage.setItem('channels', JSON.stringify(channels));
    
    // Close modal and show success
    closePaymentModal();
    alert(`✅ Plata a fost procesată cu succes! Canalul tău este acum ${selectedPackage.toUpperCase()} pentru următoarele 30 de zile.`);
    
    // Refresh the page to show updated channel status
    location.reload();
  }
}

// Function to check and display premium badges
function displayPremiumBadges() {
  const channels = JSON.parse(localStorage.getItem('channels') || '[]');
  
  channels.forEach(channel => {
    if (channel.premiumType && new Date(channel.premiumExpiry) > new Date()) {
      const channelCards = document.querySelectorAll('.channel-card');
      channelCards.forEach(card => {
        const titleElement = card.querySelector('.channel-title');
        if (titleElement && titleElement.textContent.includes(channel.title)) {
          // Add premium badge
          let badge = '';
          switch(channel.premiumType) {
            case 'basic':
              badge = '<span class="premium-badge basic-badge"> PROMOVAT</span>';
              break;
            case 'premium':
              badge = '<span class="premium-badge premium-badge"> PREMIUM</span>';
              break;
            case 'vip':
              badge = '<span class="premium-badge vip-badge"> VIP</span>';
              break;
          }
          
          if (badge && !titleElement.innerHTML.includes('premium-badge')) {
            titleElement.innerHTML += ' ' + badge;
          }
        }
      });
    }
  });
}

// Initialize premium features on page load
document.addEventListener('DOMContentLoaded', function() {
  // Add premium badge styles to head
  const premiumBadgeStyles = `
    <style>
    .premium-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: bold;
      margin-left: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .basic-badge {
      background: linear-gradient(135deg, #28a745, #20c997);
      color: white;
    }
    .premium-badge.premium-badge {
      background: linear-gradient(135deg, #ffd700, #ffed4e);
      color: #333;
    }
    .vip-badge {
      background: linear-gradient(135deg, #6f42c1, #8e44ad);
      color: white;
    }
    </style>
  `;
  
  document.head.insertAdjacentHTML('beforeend', premiumBadgeStyles);
  
  // Display premium badges after a short delay to ensure channels are loaded
  setTimeout(displayPremiumBadges, 1000);
});

// PREMIUM TRANSLATIONS FOR ALL LANGUAGES
const premiumTranslations = {
  ro: {
    promoteYourChannel: "🚀 Promovează-ți Canalul",
    premiumDescription: "Alege pachetul potrivit pentru a-ți crește vizibilitatea",
    basicPackage: "📈 BASIC",
    premiumPackage: "⭐ PREMIUM",
    vipPackage: "👑 VIP",
    perMonth: "/lună",
    mostPopular: "CEL MAI POPULAR",
    basicFeature1: "✓ Prioritate medie în căutări",
    basicFeature2: "✓ Badge \"Promovat\"",
    basicFeature3: "✓ Statistici de bază",
    basicFeature4: "✓ Suport email",
    chooseBasic: "Alege Basic",
    premiumFeature1: "✓ Prioritate MARE în căutări",
    premiumFeature2: "✓ Badge \"Premium\" cu stea",
    premiumFeature3: "✓ Apare în secțiunea \"Recomandate\"",
    premiumFeature4: "✓ Statistici avansate",
    premiumFeature5: "✓ Suport prioritar",
    premiumFeature6: "✓ Social media boost",
    choosePremium: "Alege Premium",
    vipFeature1: "✓ PRIMUL în toate căutările",
    vipFeature2: "✓ Badge \"VIP\" cu coroană", 
    vipFeature3: "✓ Secțiune dedicată \"VIP\"",
    vipFeature4: "✓ Statistici complete + analytics",
    vipFeature5: "✓ Suport 24/7 dedicat",
    vipFeature6: "✓ Promovare pe social media",
    vipFeature7: "✓ Banner personal pe homepage",
    chooseVip: "Alege VIP",
    paymentSecure: "🔒 Plăți securizate prin Stripe • Anulezi oricând • Prețuri europene competitive",
    confirmPayment: "💳 Confirmă Plata",
    channelToPromote: "Canal de promovat:",
    selectChannel: "Selectează un canal...",
    paymentMethod: "Metodă de plată:",
    cancel: "Anulează",
    payNow: "Plătește Acum"
  },
  en: {
    promoteYourChannel: "🚀 Promote Your Channel",
    premiumDescription: "Choose the right package to increase your visibility",
    basicPackage: "📈 BASIC",
    premiumPackage: "⭐ PREMIUM",
    vipPackage: "👑 VIP",
    perMonth: "/month",
    mostPopular: "MOST POPULAR",
    basicFeature1: "✓ Medium priority in searches",
    basicFeature2: "✓ \"Promoted\" badge",
    basicFeature3: "✓ Basic statistics",
    basicFeature4: "✓ Email support",
    chooseBasic: "Choose Basic",
    premiumFeature1: "✓ HIGH priority in searches",
    premiumFeature2: "✓ \"Premium\" badge with star",
    premiumFeature3: "✓ Appears in \"Recommended\" section",
    premiumFeature4: "✓ Advanced statistics",
    premiumFeature5: "✓ Priority support",
    premiumFeature6: "✓ Social media boost",
    choosePremium: "Choose Premium",
    vipFeature1: "✓ FIRST in all searches",
    vipFeature2: "✓ \"VIP\" badge with crown", 
    vipFeature3: "✓ Dedicated \"VIP\" section",
    vipFeature4: "✓ Complete statistics + analytics",
    vipFeature5: "✓ 24/7 dedicated support",
    vipFeature6: "✓ Social media promotion",
    vipFeature7: "✓ Personal banner on homepage",
    chooseVip: "Choose VIP",
    paymentSecure: "🔒 Secure payments via Stripe • Cancel anytime • Competitive European prices",
    confirmPayment: "💳 Confirm Payment",
    channelToPromote: "Channel to promote:",
    selectChannel: "Select a channel...",
    paymentMethod: "Payment method:",
    cancel: "Cancel",
    payNow: "Pay Now"
  },
  es: {
    promoteYourChannel: "🚀 Promociona Tu Canal",
    premiumDescription: "Elige el paquete adecuado para aumentar tu visibilidad",
    basicPackage: "📈 BÁSICO",
    premiumPackage: "⭐ PREMIUM",
    vipPackage: "👑 VIP",
    perMonth: "/mes",
    mostPopular: "MÁS POPULAR",
    basicFeature1: "✓ Prioridad media en búsquedas",
    basicFeature2: "✓ Insignia \"Promocionado\"",
    basicFeature3: "✓ Estadísticas básicas",
    basicFeature4: "✓ Soporte por email",
    chooseBasic: "Elegir Básico",
    premiumFeature1: "✓ ALTA prioridad en búsquedas",
    premiumFeature2: "✓ Insignia \"Premium\" con estrella",
    premiumFeature3: "✓ Aparece en sección \"Recomendados\"",
    premiumFeature4: "✓ Estadísticas avanzadas",
    premiumFeature5: "✓ Soporte prioritario",
    premiumFeature6: "✓ Impulso en redes sociales",
    choosePremium: "Elegir Premium",
    vipFeature1: "✓ PRIMERO en todas las búsquedas",
    vipFeature2: "✓ Insignia \"VIP\" con corona", 
    vipFeature3: "✓ Sección dedicada \"VIP\"",
    vipFeature4: "✓ Estadísticas completas + analytics",
    vipFeature5: "✓ Soporte dedicado 24/7",
    vipFeature6: "✓ Promoción en redes sociales",
    vipFeature7: "✓ Banner personal en homepage",
    chooseVip: "Elegir VIP",
    paymentSecure: "🔒 Pagos seguros vía Stripe • Cancela cuando quieras • Precios europeos competitivos",
    confirmPayment: "💳 Confirmar Pago",
    channelToPromote: "Canal a promocionar:",
    selectChannel: "Selecciona un canal...",
    paymentMethod: "Método de pago:",
    cancel: "Cancelar",
    payNow: "Pagar Ahora"
  },
  fr: {
    promoteYourChannel: "🚀 Promouvoir Votre Chaîne",
    premiumDescription: "Choisissez le forfait adapté pour augmenter votre visibilité",
    basicPackage: "📈 BASIQUE",
    premiumPackage: "⭐ PREMIUM",
    vipPackage: "👑 VIP",
    perMonth: "/mois",
    mostPopular: "LE PLUS POPULAIRE",
    basicFeature1: "✓ Priorité moyenne dans les recherches",
    basicFeature2: "✓ Badge \"Promu\"",
    basicFeature3: "✓ Statistiques de base",
    basicFeature4: "✓ Support email",
    chooseBasic: "Choisir Basique",
    premiumFeature1: "✓ HAUTE priorité dans les recherches",
    premiumFeature2: "✓ Badge \"Premium\" avec étoile",
    premiumFeature3: "✓ Apparaît dans la section \"Recommandés\"",
    premiumFeature4: "✓ Statistiques avancées",
    premiumFeature5: "✓ Support prioritaire",
    premiumFeature6: "✓ Boost sur les réseaux sociaux",
    choosePremium: "Choisir Premium",
    vipFeature1: "✓ PREMIER dans toutes les recherches",
    vipFeature2: "✓ Badge \"VIP\" avec couronne", 
    vipFeature3: "✓ Section dédiée \"VIP\"",
    vipFeature4: "✓ Statistiques complètes + analytics",
    vipFeature5: "✓ Support dédié 24/7",
    vipFeature6: "✓ Promotion sur les réseaux sociaux",
    vipFeature7: "✓ Bannière personnelle sur la homepage",
    chooseVip: "Choisir VIP",
    paymentSecure: "🔒 Paiements sécurisés via Stripe • Annulez à tout moment • Prix européens compétitifs",
    confirmPayment: "💳 Confirmer le Paiement",
    channelToPromote: "Chaîne à promouvoir:",
    selectChannel: "Sélectionnez une chaîne...",
    paymentMethod: "Méthode de paiement:",
    cancel: "Annuler",
    payNow: "Payer Maintenant"
  },
  de: {
    promoteYourChannel: "🚀 Bewerben Sie Ihren Kanal",
    premiumDescription: "Wählen Sie das richtige Paket, um Ihre Sichtbarkeit zu erhöhen",
    basicPackage: "📈 BASIC",
    premiumPackage: "⭐ PREMIUM",
    vipPackage: "👑 VIP",
    perMonth: "/Monat",
    mostPopular: "AM BELIEBTESTEN",
    basicFeature1: "✓ Mittlere Priorität in Suchergebnissen",
    basicFeature2: "✓ \"Beworben\" Abzeichen",
    basicFeature3: "✓ Grundlegende Statistiken",
    basicFeature4: "✓ E-Mail-Support",
    chooseBasic: "Basic Wählen",
    premiumFeature1: "✓ HOHE Priorität in Suchergebnissen",
    premiumFeature2: "✓ \"Premium\" Abzeichen mit Stern",
    premiumFeature3: "✓ Erscheint im \"Empfohlen\" Bereich",
    premiumFeature4: "✓ Erweiterte Statistiken",
    premiumFeature5: "✓ Prioritätssupport",
    premiumFeature6: "✓ Social Media Boost",
    choosePremium: "Premium Wählen",
    vipFeature1: "✓ ERSTE in allen Suchergebnissen",
    vipFeature2: "✓ \"VIP\" Abzeichen mit Krone", 
    vipFeature3: "✓ Dedizierter \"VIP\" Bereich",
    vipFeature4: "✓ Vollständige Statistiken + Analytics",
    vipFeature5: "✓ 24/7 dedizierter Support",
    vipFeature6: "✓ Social Media Promotion",
    vipFeature7: "✓ Persönliches Banner auf Homepage",
    chooseVip: "VIP Wählen",
    paymentSecure: "🔒 Sichere Zahlungen über Stripe • Jederzeit kündbar • Wettbewerbsfähige europäische Preise",
    confirmPayment: "💳 Zahlung Bestätigen",
    channelToPromote: "Zu bewerbender Kanal:",
    selectChannel: "Einen Kanal auswählen...",
    paymentMethod: "Zahlungsmethode:",
    cancel: "Abbrechen",
    payNow: "Jetzt Bezahlen"
  }
};// Extend main translations with premium translations
Object.keys(premiumTranslations).forEach(lang => {
  if (translations[lang]) {
    Object.assign(translations[lang], premiumTranslations[lang]);
  }
});

// === ADMIN PREMIUM TESTING SYSTEM ===

// Function to populate admin channel select
function populateAdminChannelSelect() {
  const select = document.getElementById('admin-channel-select');
  if (!select) return;
  
  const channels = JSON.parse(localStorage.getItem('channels') || '[]');
  select.innerHTML = '<option value="">Selectează canal...</option>';
  
  channels.forEach((channel, index) => {
    const option = document.createElement('option');
    option.value = index;
    const premiumText = channel.premiumType ?  [] : '';
    option.textContent = ${channel.title} ( membri);
    select.appendChild(option);
  });
}

// Function to upgrade channel directly as admin
function adminUpgradeChannel(packageType) {
  const select = document.getElementById('admin-channel-select');
  const channelIndex = select.value;
  
  if (!channelIndex && channelIndex !== '0') {
    logTest(' Te rog selectează un canal!', 'error');
    return;
  }
  
  const channels = JSON.parse(localStorage.getItem('channels') || '[]');
  const channel = channels[channelIndex];
  
  if (!channel) {
    logTest(' Canal nu a fost găsit!', 'error');
    return;
  }
  
  // Upgrade channel
  const oldType = channel.premiumType || 'none';
  channel.premiumType = packageType;
  channel.premiumExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
  channel.priority = packageType === 'vip' ? 100 : packageType === 'premium' ? 75 : 50;
  channel.sponsored = packageType !== 'basic';
  
  // Set pricing
  const prices = { basic: 20, premium: 40, vip: 80 };
  channel.pricePerMonth = prices[packageType];
  
  // Save changes
  localStorage.setItem('channels', JSON.stringify(channels));
  
  logTest( Canal "" upgradeat de la  la , 'success');
  logTest( Preț: €/lună, Prioritate: , 'info');
  
  // Refresh displays
  populateAdminChannelSelect();
  updatePremiumStats();
  displayPremiumBadges();
  refreshChannelDisplay();
}

// Function to test payment flow
function testPaymentFlow(packageType, price) {
  logTest( Inițiez test plată pentru pachetul  - €, 'info');
  
  // Simulate the payment process
  setTimeout(() => {
    logTest( Simulez redirecționare către Stripe pentru €..., 'info');
    
    setTimeout(() => {
      logTest( Plata de € procesată cu succes! (SIMULARE), 'success');
      logTest( Canal upgradeat la  pentru 30 zile, 'success');
      
      // Actually upgrade a test channel if available
      const channels = JSON.parse(localStorage.getItem('channels') || '[]');
      if (channels.length > 0) {
        const testChannel = channels[0]; // Use first channel for testing
        adminUpgradeChannel(packageType);
      }
      
    }, 1500);
  }, 1000);
}

// Function to show all premium badges
function showAllBadges() {
  logTest(' Afișez toate tipurile de badge-uri premium:', 'info');
  
  const badgeExamples = [
    { type: 'basic', text: ' PROMOVAT', color: '#28a745' },
    { type: 'premium', text: ' PREMIUM', color: '#ffc107' },
    { type: 'vip', text: ' VIP', color: '#6f42c1' }
  ];
  
  badgeExamples.forEach(badge => {
    logTest(<span style="background: ; color: white; padding: 0.2rem 0.5rem; border-radius: 8px; font-size: 0.8rem;"></span> - Badge , 'info');
  });
  
  // Add badges to existing channels for demo
  setTimeout(() => {
    displayPremiumBadges();
    logTest(' Badge-uri aplicate pe canalele existente', 'success');
  }, 500);
}

// Function to refresh channel display
function refreshChannelDisplay() {
  logTest(' Reîmprospătez afișarea canalelor...', 'info');
  
  // Re-sort and display channels
  if (typeof displayChannels === 'function') {
    displayChannels('all');
  }
  
  // Refresh premium badges
  setTimeout(() => {
    displayPremiumBadges();
    logTest(' Afișare reîmprospătată cu success', 'success');
  }, 500);
}

// Function to update premium statistics
function updatePremiumStats() {
  const channels = JSON.parse(localStorage.getItem('channels') || '[]');
  
  let basicCount = 0, premiumCount = 0, vipCount = 0;
  let totalRevenue = 0;
  
  channels.forEach(channel => {
    if (channel.premiumType && new Date(channel.premiumExpiry) > new Date()) {
      const prices = { basic: 20, premium: 40, vip: 80 };
      
      switch(channel.premiumType) {
        case 'basic':
          basicCount++;
          totalRevenue += 20;
          break;
        case 'premium':
          premiumCount++;
          totalRevenue += 40;
          break;
        case 'vip':
          vipCount++;
          totalRevenue += 80;
          break;
      }
    }
  });
  
  // Update display
  document.getElementById('basic-count').textContent = basicCount;
  document.getElementById('premium-count').textContent = premiumCount;
  document.getElementById('vip-count').textContent = vipCount;
  document.getElementById('revenue-estimate').textContent = totalRevenue;
  
  logTest( Statistici actualizate:  canale premium, €/lună, 'info');
}

// Function to reset all premium subscriptions
function resetAllPremium() {
  if (!confirm(' Sigur vrei să resetezi toate promovările premium? Această acțiune nu poate fi anulată!')) {
    return;
  }
  
  const channels = JSON.parse(localStorage.getItem('channels') || '[]');
  let resetCount = 0;
  
  channels.forEach(channel => {
    if (channel.premiumType) {
      delete channel.premiumType;
      delete channel.premiumExpiry;
      channel.priority = 1;
      channel.sponsored = false;
      channel.pricePerMonth = 0;
      resetCount++;
    }
  });
  
  localStorage.setItem('channels', JSON.stringify(channels));
  
  logTest(  canale resetate la starea normală, 'warning');
  
  // Refresh all displays
  populateAdminChannelSelect();
  updatePremiumStats();
  refreshChannelDisplay();
}

// Function to simulate monthly revenue
function simulateRevenueMonth() {
  logTest(' Simulez statistici de venit pentru o lună completă...', 'info');
  
  const scenarios = [
    { day: 5, action: '3 canale upgrade la Premium', revenue: 120 },
    { day: 12, action: '1 canal upgrade la VIP', revenue: 80 },
    { day: 18, action: '5 canale upgrade la Basic', revenue: 100 },
    { day: 25, action: '2 canale upgrade la Premium', revenue: 80 },
    { day: 28, action: '1 canal renewal VIP', revenue: 80 }
  ];
  
  let totalRevenue = 0;
  
  scenarios.forEach((scenario, index) => {
    setTimeout(() => {
      totalRevenue += scenario.revenue;
      logTest( Ziua :  (+€), 'success');
      logTest( Venit cumulat: €, 'info');
    }, (index + 1) * 800);
  });
  
  setTimeout(() => {
    logTest( TOTAL LUNĂ: € din promovări premium!, 'success');
    logTest( Proiecție anuală: € ( RON), 'success');
  }, scenarios.length * 800 + 500);
}

// Function to export premium data
function exportPremiumData() {
  const channels = JSON.parse(localStorage.getItem('channels') || '[]');
  const premiumChannels = channels.filter(ch => ch.premiumType);
  
  const exportData = {
    exportDate: new Date().toISOString(),
    totalPremiumChannels: premiumChannels.length,
    channels: premiumChannels.map(ch => ({
      title: ch.title,
      type: ch.premiumType,
      price: ch.pricePerMonth,
      expiry: ch.premiumExpiry,
      priority: ch.priority
    }))
  };
  
  const dataStr = JSON.stringify(exportData, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = premium-data-.json;
  link.click();
  
  logTest( Date premium exportate:  canale, 'success');
}

// Function to log test actions
function logTest(message, type = 'info') {
  const testLog = document.getElementById('test-log');
  if (!testLog) return;
  
  const timestamp = new Date().toLocaleTimeString();
  const colors = {
    info: '#007bff',
    success: '#28a745', 
    error: '#dc3545',
    warning: '#ffc107'
  };
  
  const logEntry = document.createElement('div');
  logEntry.style.color = colors[type] || colors.info;
  logEntry.style.marginBottom = '0.25rem';
  logEntry.innerHTML = [] ;
  
  testLog.appendChild(logEntry);
  testLog.scrollTop = testLog.scrollHeight;
}

// Function to clear test log
function clearTestLog() {
  const testLog = document.getElementById('test-log');
  if (testLog) {
    testLog.innerHTML = '<div style="color: #28a745;"> Log curățat - Gata pentru teste noi...</div>';
  }
}

// Initialize admin premium testing when tab is shown
function initAdminPremiumTest() {
  populateAdminChannelSelect();
  updatePremiumStats();
  logTest(' Sistem de teste premium inițializat cu succes!', 'success');
}

// Add event listener for when admin panel loads
document.addEventListener('DOMContentLoaded', function() {
  // Initialize premium testing when admin tab is clicked
  const originalShowAdminTab = window.showAdminTab;
  window.showAdminTab = function(tabName) {
    if (originalShowAdminTab) {
      originalShowAdminTab(tabName);
    }
    
    if (tabName === 'premium-test') {
      setTimeout(initAdminPremiumTest, 100);
    }
  };
});
