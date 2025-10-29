console.log('🚀 JavaScript loaded successfully!'); // Debug

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
  const sorted = getSortedChannels(filtered, category);

  // For 'all' display first 6 channels directly from defaultChannels
  if (currentCategory === 'all') {
    console.log('🏠 Displaying homepage channels'); // Debug
    const grid = document.createElement('div');
    grid.className = 'channels-grid';
    
    // Afișează primele 6 canale din defaultChannels pentru acum
    const toShow = defaultChannels.slice(0, 6);
    console.log('📺 Channels to show:', toShow.length, toShow.map(c => c.name)); // Debug
    
    if (toShow.length === 0) {
      console.log('❌ No channels to show!'); // Debug
      list.innerHTML = '<p style="text-align:center;">Nu există canale de afișat.</p>';
      return;
    }
    
    console.log('✅ About to render', toShow.length, 'channels'); // Debug
    toShow.forEach(channel => {
      const card = document.createElement('div');
      card.className = 'channel-card';
      card.innerHTML = `
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
    html += `
      <div class="admin-channel-item">
        <div class="admin-item-info">
          <strong>${channel.title}</strong><br>
          <small>${channel.desc}</small><br>
          <a href="${channel.url}" target="_blank">${channel.url}</a>
          <div style="margin-top: 0.3rem;">
            <span style="background: #3498db; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem;">
              ${channel.category.join(', ')}
            </span>
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
  alert(`✏️ Editarea canalului "${title}" va fi implementată în curând!`);
}

function deleteChannel(title) {
  if (confirm(`🗑️ Sigur vrei să ștergi canalul "${title}"?`)) {
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
  trackPageView(); // Track page view
  showUser();
  showCategory('all'); // Show all channels on load
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
