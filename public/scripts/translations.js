// Sistem de traduceri multilingv pentru Telegram Channels Platform
const translations = {
  ro: {
    // Header și navigare
    siteTitle: "Telegram Channel",
    siteDescription: "Descoperă și promovează cele mai interesante canale Telegram!",
    
    // Categorii
    allCategories: "Toate",
    crypto: "Crypto",
    gaming: "Gaming", 
    adult: "ADULT (+18)",
    news: "Știri",
    recipes: "Rețete",
    technology: "Tehnologie",
    promo: "Promo",
    
    // Autentificare
    createAccount: "🆕 Creează cont nou",
    emailPlaceholder: "📧 Adresa de email",
    passwordPlaceholder: "🔒 Parolă sigură",
    registerButton: "✨ Înregistrează-te gratuit",
    loginTitle: "🔐 Conectează-te",
    loginEmail: "📧 Email-ul tău",
    loginPassword: "🔒 Parola ta",
    loginButton: "🚀 Intră în cont",
    adminHint: "💡 Admin: folosește credentialele speciale pentru acces administrativ",
    welcome: "👋 Bun venit, ",
    adminBadge: "👑 ADMIN",
    logoutButton: "👋 Deconectează-te",
    
    // Controale admin
    adminPanel: "⚙️ Panel Admin",
    statisticsButton: "📊 Statistici",
    adminPanelTitle: "👑 Panel de Administrare",
    
    // Tab-uri admin
    channelsManagement: "📺 Gestiune Canale",
    usersManagement: "👥 Utilizatori", 
    statistics: "📊 Statistici",
    settings: "⚙️ Setări",
    
    // Gestiune canale
    viewAllChannels: "📋 Vezi Toate Canalele",
    pendingChannels: "⏳ Canale în Așteptare",
    exportData: "💾 Export Date",
    
    // Gestiune utilizatori
    viewAllUsers: "👥 Vezi Toți Utilizatorii",
    addUser: "➕ Adaugă Utilizator",
    exportUsers: "💾 Export Utilizatori",
    
    // Statistici
    platformStats: "📊 Statistici Platform",
    adminStats: "📊 Statistici Admin",
    totalChannels: "📺 Canale Totale",
    totalMembers: "👥 Membri Totali", 
    totalClicks: "🔗 Clickuri Totale",
    totalViews: "📈 Vizualizări",
    registeredUsers: "👤 Utilizatori Înregistrați",
    todayVisits: "📅 Vizite Azi",
    lastClick: "🕐 Ultimul Click",
    mostClickedChannel: "🎯 Canalul Cel Mai Accesat",
    never: "Niciodată",
    
    // Setări
    systemSettings: "⚙️ Setări Sistem",
    requireApproval: "Necesită aprobare pentru canale noi",
    enableModeration: "Activează moderare automată",
    saveSettings: "💾 Salvează Setări",
    
    // Adăugare canal
    addChannelTitle: "✨ Adaugă canal Telegram",
    channelTitle: "🏷️ Titlu canal (ex: Crypto România)",
    channelDescription: "📝 Descriere scurtă și atractivă",
    channelUrl: "🔗 Link Telegram (https://t.me/numele-canalului)",
    channelLogo: "🖼️ Link logo/imagine (opțional)",
    addChannelButton: "🚀 Adaugă canalul",
    hint: "💡 Sfat: Ține apăsat Ctrl (sau Cmd pe Mac) pentru a selecta mai multe categorii pentru canalul tău.",
    
    // Opțiuni categorii
    cryptoOption: "💰 Crypto",
    gamingOption: "🎮 Gaming",
    adultOption: "🔞 ADULT (+18)", 
    newsOption: "📰 Știri",
    recipesOption: "🍳 Rețete",
    technologyOption: "💻 Tehnologie",
    promoOption: "🎁 Promo",
    
    // Modal utilizatori
    addUserModalTitle: "➕ Adaugă Utilizator",
    newUserEmail: "📧 Email (ex: user@gmail.com)",
    newUserPassword: "🔒 Parolă",
    cancel: "Anulează",
    add: "Adaugă",
    addUserNote: "Pentru orice email, vei fi rugat să confirmi că este un cont real prin tastarea exactă a adresei.",
    
    // Confirmare email
    confirmEmailTitle: "🔒 Confirmare Email Real",
    confirmEmailText: "Pentru a confirma că acest email este real, scrie adresa completă mai jos:",
    confirmEmailPlaceholder: "Tastează emailul exact pentru confirmare",
    confirmEmailButton: "Confirmă Email Real",
    confirmEmailNote: "💡 Aceasta este o verificare de securitate pentru a confirma că emailul este valid și real.",
    
    // Footer
    footerText: "© 2025 Promo Canale Telegram",
    
    // Mesaje sistem
    channelAdded: "✅ Canal adăugat cu succes!",
    loginSuccess: "✅ Te-ai conectat cu succes!",
    loginError: "❌ Email sau parolă incorectă!",
    registerSuccess: "✅ Cont creat cu succes!",
    registerError: "❌ Eroare la crearea contului!",
    
    // Limba
    language: "🌐 Limba",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English",
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch"
  },
  
  en: {
    // Header and navigation
    siteTitle: "Telegram Channel",
    siteDescription: "Discover and promote the most interesting Telegram channels!",
    
    // Categories
    allCategories: "All",
    crypto: "Crypto",
    gaming: "Gaming",
    adult: "ADULT (+18)", 
    news: "News",
    recipes: "Recipes",
    technology: "Technology",
    promo: "Promo",
    
    // Authentication
    createAccount: "🆕 Create new account",
    emailPlaceholder: "📧 Email address",
    passwordPlaceholder: "🔒 Secure password",
    registerButton: "✨ Register for free",
    loginTitle: "🔐 Sign in",
    loginEmail: "📧 Your email",
    loginPassword: "🔒 Your password", 
    loginButton: "🚀 Sign in",
    adminHint: "💡 Admin: use special credentials for administrative access",
    welcome: "👋 Welcome, ",
    adminBadge: "👑 ADMIN",
    logoutButton: "👋 Sign out",
    
    // Admin controls
    adminPanel: "⚙️ Admin Panel",
    statisticsButton: "📊 Statistics",
    adminPanelTitle: "👑 Administration Panel",
    
    // Admin tabs
    channelsManagement: "📺 Channels Management",
    usersManagement: "👥 Users",
    statistics: "📊 Statistics", 
    settings: "⚙️ Settings",
    
    // Channels management
    viewAllChannels: "📋 View All Channels",
    pendingChannels: "⏳ Pending Channels",
    exportData: "💾 Export Data",
    
    // Users management
    viewAllUsers: "👥 View All Users",
    addUser: "➕ Add User",
    exportUsers: "💾 Export Users",
    
    // Statistics
    platformStats: "📊 Platform Statistics",
    adminStats: "📊 Admin Statistics",
    totalChannels: "📺 Total Channels",
    totalMembers: "👥 Total Members",
    totalClicks: "🔗 Total Clicks", 
    totalViews: "📈 Views",
    registeredUsers: "👤 Registered Users",
    todayVisits: "📅 Today's Visits",
    lastClick: "🕐 Last Click",
    mostClickedChannel: "🎯 Most Clicked Channel",
    never: "Never",
    
    // Settings
    systemSettings: "⚙️ System Settings",
    requireApproval: "Require approval for new channels",
    enableModeration: "Enable automatic moderation",
    saveSettings: "💾 Save Settings",
    
    // Add channel
    addChannelTitle: "✨ Add Telegram channel",
    channelTitle: "🏷️ Channel title (ex: Crypto Romania)",
    channelDescription: "📝 Short and attractive description",
    channelUrl: "🔗 Telegram link (https://t.me/channel-name)",
    channelLogo: "🖼️ Logo/image link (optional)",
    addChannelButton: "🚀 Add channel",
    hint: "💡 Tip: Hold Ctrl (or Cmd on Mac) to select multiple categories for your channel.",
    
    // Category options
    cryptoOption: "💰 Crypto",
    gamingOption: "🎮 Gaming",
    adultOption: "🔞 ADULT (+18)",
    newsOption: "📰 News",
    recipesOption: "🍳 Recipes", 
    technologyOption: "💻 Technology",
    promoOption: "🎁 Promo",
    
    // User modal
    addUserModalTitle: "➕ Add User",
    newUserEmail: "📧 Email (ex: user@gmail.com)",
    newUserPassword: "🔒 Password",
    cancel: "Cancel",
    add: "Add",
    addUserNote: "For any email, you'll be asked to confirm it's a real account by typing the exact address.",
    
    // Email confirmation
    confirmEmailTitle: "🔒 Real Email Confirmation",
    confirmEmailText: "To confirm this email is real, write the complete address below:",
    confirmEmailPlaceholder: "Type the email exactly for confirmation",
    confirmEmailButton: "Confirm Real Email",
    confirmEmailNote: "💡 This is a security check to confirm the email is valid and real.",
    
    // Footer
    footerText: "© 2025 Telegram Channels Promo",
    
    // System messages
    channelAdded: "✅ Channel added successfully!",
    loginSuccess: "✅ Logged in successfully!",
    loginError: "❌ Incorrect email or password!",
    registerSuccess: "✅ Account created successfully!",
    registerError: "❌ Error creating account!",
    
    // Language
    language: "🌐 Language", 
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English",
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch"
  },
  
  es: {
    // Header y navegación
    siteTitle: "Canal de Telegram",
    siteDescription: "¡Descubre y promociona los canales de Telegram más interesantes!",
    
    // Categorías
    allCategories: "Todos",
    crypto: "Crypto",
    gaming: "Gaming",
    adult: "ADULTO (+18)",
    news: "Noticias", 
    recipes: "Recetas",
    technology: "Tecnología",
    promo: "Promo",
    
    // Autenticación
    createAccount: "🆕 Crear cuenta nueva",
    emailPlaceholder: "📧 Dirección de email",
    passwordPlaceholder: "🔒 Contraseña segura",
    registerButton: "✨ Registrarse gratis",
    loginTitle: "🔐 Iniciar sesión",
    loginEmail: "📧 Tu email",
    loginPassword: "🔒 Tu contraseña",
    loginButton: "🚀 Iniciar sesión", 
    adminHint: "💡 Admin: usa credenciales especiales para acceso administrativo",
    welcome: "👋 Bienvenido, ",
    adminBadge: "👑 ADMIN",
    logoutButton: "👋 Cerrar sesión",
    
    // Controles admin
    adminPanel: "⚙️ Panel Admin",
    statisticsButton: "📊 Estadísticas",
    adminPanelTitle: "👑 Panel de Administración",
    
    // Pestañas admin
    channelsManagement: "📺 Gestión de Canales",
    usersManagement: "👥 Usuarios",
    statistics: "📊 Estadísticas",
    settings: "⚙️ Configuración",
    
    // Gestión de canales
    viewAllChannels: "📋 Ver Todos los Canales",
    pendingChannels: "⏳ Canales Pendientes",
    exportData: "💾 Exportar Datos",
    
    // Gestión de usuarios
    viewAllUsers: "👥 Ver Todos los Usuarios",
    addUser: "➕ Agregar Usuario",
    exportUsers: "💾 Exportar Usuarios",
    
    // Estadísticas
    platformStats: "📊 Estadísticas de la Plataforma",
    adminStats: "📊 Estadísticas Admin",
    totalChannels: "📺 Canales Totales",
    totalMembers: "👥 Miembros Totales",
    totalClicks: "🔗 Clicks Totales",
    totalViews: "📈 Visualizaciones", 
    registeredUsers: "👤 Usuarios Registrados",
    todayVisits: "📅 Visitas de Hoy",
    lastClick: "🕐 Último Click",
    mostClickedChannel: "🎯 Canal Más Clickeado",
    never: "Nunca",
    
    // Configuración
    systemSettings: "⚙️ Configuración del Sistema",
    requireApproval: "Requerir aprobación para canales nuevos",
    enableModeration: "Activar moderación automática",
    saveSettings: "💾 Guardar Configuración",
    
    // Agregar canal
    addChannelTitle: "✨ Agregar canal de Telegram",
    channelTitle: "🏷️ Título del canal (ej: Crypto España)",
    channelDescription: "📝 Descripción corta y atractiva",
    channelUrl: "🔗 Link de Telegram (https://t.me/nombre-canal)",
    channelLogo: "🖼️ Link de logo/imagen (opcional)",
    addChannelButton: "🚀 Agregar canal",
    hint: "💡 Consejo: Mantén presionado Ctrl (o Cmd en Mac) para seleccionar múltiples categorías para tu canal.",
    
    // Opciones de categorías
    cryptoOption: "💰 Crypto",
    gamingOption: "🎮 Gaming",
    adultOption: "🔞 ADULTO (+18)",
    newsOption: "📰 Noticias",
    recipesOption: "🍳 Recetas",
    technologyOption: "💻 Tecnología",
    promoOption: "🎁 Promo",
    
    // Modal de usuario
    addUserModalTitle: "➕ Agregar Usuario",
    newUserEmail: "📧 Email (ej: usuario@gmail.com)",
    newUserPassword: "🔒 Contraseña",
    cancel: "Cancelar",
    add: "Agregar",
    addUserNote: "Para cualquier email, se te pedirá confirmar que es una cuenta real escribiendo la dirección exacta.",
    
    // Confirmación de email
    confirmEmailTitle: "🔒 Confirmación de Email Real",
    confirmEmailText: "Para confirmar que este email es real, escribe la dirección completa abajo:",
    confirmEmailPlaceholder: "Escribe el email exactamente para confirmación",
    confirmEmailButton: "Confirmar Email Real",
    confirmEmailNote: "💡 Esta es una verificación de seguridad para confirmar que el email es válido y real.",
    
    // Footer
    footerText: "© 2025 Promo Canales Telegram",
    
    // Mensajes del sistema
    channelAdded: "✅ ¡Canal agregado exitosamente!",
    loginSuccess: "✅ ¡Sesión iniciada exitosamente!",
    loginError: "❌ ¡Email o contraseña incorrectos!",
    registerSuccess: "✅ ¡Cuenta creada exitosamente!",
    registerError: "❌ ¡Error al crear la cuenta!",
    
    // Idioma
    language: "🌐 Idioma",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English", 
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch"
  },
  
  fr: {
    // En-tête et navigation
    siteTitle: "Canal Telegram",
    siteDescription: "Découvrez et promouvez les chaînes Telegram les plus intéressantes!",
    
    // Catégories
    allCategories: "Tous",
    crypto: "Crypto",
    gaming: "Gaming",
    adult: "ADULTE (+18)",
    news: "Actualités",
    recipes: "Recettes",
    technology: "Technologie", 
    promo: "Promo",
    
    // Authentification
    createAccount: "🆕 Créer un nouveau compte",
    emailPlaceholder: "📧 Adresse email",
    passwordPlaceholder: "🔒 Mot de passe sécurisé",
    registerButton: "✨ S'inscrire gratuitement",
    loginTitle: "🔐 Se connecter",
    loginEmail: "📧 Votre email",
    loginPassword: "🔒 Votre mot de passe",
    loginButton: "🚀 Se connecter",
    adminHint: "💡 Admin: utilisez les identifiants spéciaux pour l'accès administratif",
    welcome: "👋 Bienvenue, ",
    adminBadge: "👑 ADMIN",
    logoutButton: "👋 Se déconnecter",
    
    // Contrôles admin
    adminPanel: "⚙️ Panneau Admin",
    statisticsButton: "📊 Statistiques",
    adminPanelTitle: "👑 Panneau d'Administration",
    
    // Onglets admin
    channelsManagement: "📺 Gestion des Chaînes",
    usersManagement: "👥 Utilisateurs",
    statistics: "📊 Statistiques",
    settings: "⚙️ Paramètres",
    
    // Gestion des chaînes
    viewAllChannels: "📋 Voir Toutes les Chaînes",
    pendingChannels: "⏳ Chaînes en Attente",
    exportData: "💾 Exporter les Données",
    
    // Gestion des utilisateurs
    viewAllUsers: "👥 Voir Tous les Utilisateurs",
    addUser: "➕ Ajouter un Utilisateur",
    exportUsers: "💾 Exporter les Utilisateurs",
    
    // Statistiques
    platformStats: "📊 Statistiques de la Plateforme",
    adminStats: "📊 Statistiques Admin",
    totalChannels: "📺 Chaînes Totales",
    totalMembers: "👥 Membres Totaux",
    totalClicks: "🔗 Clics Totaux",
    totalViews: "📈 Vues",
    registeredUsers: "👤 Utilisateurs Inscrits",
    todayVisits: "📅 Visites d'Aujourd'hui",
    lastClick: "🕐 Dernier Clic",
    mostClickedChannel: "🎯 Chaîne la Plus Cliquée",
    never: "Jamais",
    
    // Paramètres
    systemSettings: "⚙️ Paramètres du Système",
    requireApproval: "Exiger l'approbation pour les nouvelles chaînes",
    enableModeration: "Activer la modération automatique",
    saveSettings: "💾 Sauvegarder les Paramètres",
    
    // Ajouter une chaîne
    addChannelTitle: "✨ Ajouter une chaîne Telegram",
    channelTitle: "🏷️ Titre de la chaîne (ex: Crypto France)",
    channelDescription: "📝 Description courte et attractive",
    channelUrl: "🔗 Lien Telegram (https://t.me/nom-chaine)",
    channelLogo: "🖼️ Lien logo/image (optionnel)",
    addChannelButton: "🚀 Ajouter la chaîne",
    hint: "💡 Astuce: Maintenez Ctrl (ou Cmd sur Mac) pour sélectionner plusieurs catégories pour votre chaîne.",
    
    // Options de catégories
    cryptoOption: "💰 Crypto",
    gamingOption: "🎮 Gaming",
    adultOption: "🔞 ADULTE (+18)",
    newsOption: "📰 Actualités",
    recipesOption: "🍳 Recettes",
    technologyOption: "💻 Technologie",
    promoOption: "🎁 Promo",
    
    // Modal utilisateur
    addUserModalTitle: "➕ Ajouter un Utilisateur",
    newUserEmail: "📧 Email (ex: utilisateur@gmail.com)",
    newUserPassword: "🔒 Mot de passe",
    cancel: "Annuler",
    add: "Ajouter",
    addUserNote: "Pour tout email, il vous sera demandé de confirmer qu'il s'agit d'un compte réel en tapant l'adresse exacte.",
    
    // Confirmation d'email
    confirmEmailTitle: "🔒 Confirmation d'Email Réel",
    confirmEmailText: "Pour confirmer que cet email est réel, écrivez l'adresse complète ci-dessous:",
    confirmEmailPlaceholder: "Tapez l'email exactement pour confirmation",
    confirmEmailButton: "Confirmer l'Email Réel",
    confirmEmailNote: "💡 C'est une vérification de sécurité pour confirmer que l'email est valide et réel.",
    
    // Pied de page
    footerText: "© 2025 Promo Chaînes Telegram",
    
    // Messages système
    channelAdded: "✅ Chaîne ajoutée avec succès!",
    loginSuccess: "✅ Connexion réussie!",
    loginError: "❌ Email ou mot de passe incorrect!",
    registerSuccess: "✅ Compte créé avec succès!",
    registerError: "❌ Erreur lors de la création du compte!",
    
    // Langue
    language: "🌐 Langue",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English",
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch"
  },
  
  de: {
    // Header und Navigation
    siteTitle: "Telegram Kanal",
    siteDescription: "Entdecke und bewirb die interessantesten Telegram-Kanäle!",
    
    // Kategorien
    allCategories: "Alle",
    crypto: "Crypto",
    gaming: "Gaming",
    adult: "ERWACHSENE (+18)",
    news: "Nachrichten",
    recipes: "Rezepte", 
    technology: "Technologie",
    promo: "Promo",
    
    // Authentifizierung
    createAccount: "🆕 Neues Konto erstellen",
    emailPlaceholder: "📧 E-Mail-Adresse",
    passwordPlaceholder: "🔒 Sicheres Passwort",
    registerButton: "✨ Kostenlos registrieren",
    loginTitle: "🔐 Anmelden",
    loginEmail: "📧 Ihre E-Mail",
    loginPassword: "🔒 Ihr Passwort",
    loginButton: "🚀 Anmelden",
    adminHint: "💡 Admin: Verwenden Sie spezielle Anmeldedaten für den Administratorzugang",
    welcome: "👋 Willkommen, ",
    adminBadge: "👑 ADMIN",
    logoutButton: "👋 Abmelden",
    
    // Admin-Steuerung
    adminPanel: "⚙️ Admin Panel",
    statisticsButton: "📊 Statistiken",
    adminPanelTitle: "👑 Verwaltungspanel",
    
    // Admin-Tabs
    channelsManagement: "📺 Kanal-Verwaltung",
    usersManagement: "👥 Benutzer",
    statistics: "📊 Statistiken",
    settings: "⚙️ Einstellungen",
    
    // Kanal-Verwaltung
    viewAllChannels: "📋 Alle Kanäle anzeigen",
    pendingChannels: "⏳ Ausstehende Kanäle",
    exportData: "💾 Daten exportieren",
    
    // Benutzer-Verwaltung
    viewAllUsers: "👥 Alle Benutzer anzeigen",
    addUser: "➕ Benutzer hinzufügen",
    exportUsers: "💾 Benutzer exportieren",
    
    // Statistiken
    platformStats: "📊 Plattform-Statistiken",
    adminStats: "📊 Admin-Statistiken",
    totalChannels: "📺 Kanäle insgesamt",
    totalMembers: "👥 Mitglieder insgesamt",
    totalClicks: "🔗 Klicks insgesamt",
    totalViews: "📈 Aufrufe",
    registeredUsers: "👤 Registrierte Benutzer",
    todayVisits: "📅 Heutige Besuche",
    lastClick: "🕐 Letzter Klick",
    mostClickedChannel: "🎯 Meistgeklickter Kanal",
    never: "Nie",
    
    // Einstellungen
    systemSettings: "⚙️ Systemeinstellungen",
    requireApproval: "Genehmigung für neue Kanäle erforderlich",
    enableModeration: "Automatische Moderation aktivieren",
    saveSettings: "💾 Einstellungen speichern",
    
    // Kanal hinzufügen
    addChannelTitle: "✨ Telegram-Kanal hinzufügen",
    channelTitle: "🏷️ Kanaltitel (z.B.: Crypto Deutschland)",
    channelDescription: "📝 Kurze und attraktive Beschreibung",
    channelUrl: "🔗 Telegram-Link (https://t.me/kanal-name)",
    channelLogo: "🖼️ Logo/Bild-Link (optional)",
    addChannelButton: "🚀 Kanal hinzufügen",
    hint: "💡 Tipp: Halten Sie Strg (oder Cmd auf Mac) gedrückt, um mehrere Kategorien für Ihren Kanal auszuwählen.",
    
    // Kategorie-Optionen
    cryptoOption: "💰 Crypto",
    gamingOption: "🎮 Gaming",
    adultOption: "🔞 ERWACHSENE (+18)",
    newsOption: "📰 Nachrichten",
    recipesOption: "🍳 Rezepte",
    technologyOption: "💻 Technologie",
    promoOption: "🎁 Promo",
    
    // Benutzer-Modal
    addUserModalTitle: "➕ Benutzer hinzufügen",
    newUserEmail: "📧 E-Mail (z.B.: benutzer@gmail.com)",
    newUserPassword: "🔒 Passwort",
    cancel: "Abbrechen",
    add: "Hinzufügen",
    addUserNote: "Für jede E-Mail werden Sie aufgefordert zu bestätigen, dass es sich um ein echtes Konto handelt, indem Sie die genaue Adresse eingeben.",
    
    // E-Mail-Bestätigung
    confirmEmailTitle: "🔒 Echte E-Mail-Bestätigung",
    confirmEmailText: "Um zu bestätigen, dass diese E-Mail echt ist, schreiben Sie die vollständige Adresse unten:",
    confirmEmailPlaceholder: "Geben Sie die E-Mail genau zur Bestätigung ein",
    confirmEmailButton: "Echte E-Mail bestätigen",
    confirmEmailNote: "💡 Dies ist eine Sicherheitsüberprüfung, um zu bestätigen, dass die E-Mail gültig und echt ist.",
    
    // Footer
    footerText: "© 2025 Telegram Kanäle Promo",
    
    // System-Nachrichten
    channelAdded: "✅ Kanal erfolgreich hinzugefügt!",
    loginSuccess: "✅ Erfolgreich angemeldet!",
    loginError: "❌ Falsche E-Mail oder Passwort!",
    registerSuccess: "✅ Konto erfolgreich erstellt!",
    registerError: "❌ Fehler beim Erstellen des Kontos!",
    
    // Sprache
    language: "🌐 Sprache",
    romanian: "🇷🇴 Română",
    english: "🇺🇸 English",
    spanish: "🇪🇸 Español",
    french: "🇫🇷 Français",
    german: "🇩🇪 Deutsch"
  }
};

// Funcția pentru obținerea limbii curente
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'ro';
}

// Funcția pentru setarea limbii
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyTranslations(lang);
}

// Funcția pentru aplicarea traducerilor
function applyTranslations(lang = getCurrentLanguage()) {
  const t = translations[lang] || translations['ro'];
  
  // Aplică traducerile pentru toate elementele cu data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      // Pentru input-uri, setează placeholder-ul
      if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
        element.placeholder = t[key];
      } else {
        element.textContent = t[key];
      }
    }
  });
  
  // Setează limba în HTML
  document.documentElement.lang = lang === 'ro' ? 'ro' : lang;
  
  // Actualizează selectorul de limbă
  const languageSelector = document.getElementById('language-selector');
  if (languageSelector) {
    languageSelector.value = lang;
  }
}

// Inițializează traducerile la încărcarea paginii
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = getCurrentLanguage();
  applyTranslations(savedLang);
});

// Export pentru utilizare în alte scripturi
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, getCurrentLanguage, setLanguage, applyTranslations };
}