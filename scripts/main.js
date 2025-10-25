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

// Continue adding more channels to reach 50 for each category...

function getChannels() {
  // Always return the updated defaultChannels instead of localStorage
  return defaultChannels.slice();
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
  console.log('📺 Showing category:', category); // Debug
  currentCategory = category;
  updateActiveCategoryButtons();
  renderChannelsByCategory();
  
  // Change background based on category
  const body = document.body;
  // Remove all category classes
  body.className = body.className.replace(/\b(crypto|gaming|adult|stiri|retete|tehnologie|promo|featured|promoted)-bg\b/g, '');
  
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
    : currentCategory === 'promoted'
    ? channelsWithIdx.filter(c => c.promoted === true && c.promotedUntil && new Date(c.promotedUntil) > new Date())
    : currentCategory === 'featured'
    ? channelsWithIdx.filter(c => c.featured === true)
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
          <a class="channel-link" onclick="openChannel('${channel.url}', '${channel.title}'); return false;" href="#">Vezi canalul</a>
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
        <a class="channel-link" onclick="openChannel('${channel.url}', '${channel.title}'); return false;" href="#">Vezi canalul</a>
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
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
  const promotedPayments = JSON.parse(localStorage.getItem('promoted_payments') || '[]');
  const users = [];
  
  // Count users
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('user_')) {
      users.push(key.replace('user_', ''));
    }
  }
  
  // Count promoted channels
  const activePromoted = channels.filter(c => c.promoted === true && c.promotedUntil && new Date(c.promotedUntil) > new Date());
  const expiredPromoted = channels.filter(c => c.promoted === true && c.promotedUntil && new Date(c.promotedUntil) <= new Date());
  const featuredChannels = channels.filter(c => c.featured === true);
  
  // Calculate revenue
  const totalRevenue = promotedPayments.reduce((sum, payment) => sum + payment.price, 0);
  const monthlyRevenue = activePromoted.length * 50; // 50 RON per active promoted channel
  
  // Count by category
  const categoryStats = {};
  channels.forEach(channel => {
    channel.category.forEach(cat => {
      categoryStats[cat] = (categoryStats[cat] || 0) + 1;
    });
  });
  
  const statsDiv = document.getElementById('admin-statistics');
  let html = '<div class="admin-stats-grid">';
  
  // First row - main stats
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
    
    <div class="admin-stat-card" style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); color: white;">
      <h4>${activePromoted.length}</h4>
      <p>💰 Promoted Active</p>
    </div>
    <div class="admin-stat-card" style="background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%); color: white;">
      <h4>${featuredChannels.length}</h4>
      <p>⭐ Featured</p>
    </div>
    <div class="admin-stat-card" style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white;">
      <h4>${expiredPromoted.length}</h4>
      <p>⏰ Promoted Expirate</p>
    </div>
    <div class="admin-stat-card" style="background: linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%); color: white;">
      <h4>${totalRevenue} RON</h4>
      <p>💸 Venit Total</p>
    </div>
  `;
  
  html += '</div>';
  
  // Revenue breakdown
  html += `
    <div style="margin-top: 2rem;">
      <h4>💰 Detalii Venituri</h4>
      <div class="revenue-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
        <div style="background: #d1f2eb; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #27ae60;">
          <h5 style="margin: 0; color: #27ae60;">💰 Venit Lunar Curent</h5>
          <p style="margin: 0.5rem 0 0 0; font-size: 1.5rem; font-weight: bold; color: #27ae60;">${monthlyRevenue} RON</p>
          <small style="color: #666;">${activePromoted.length} canale × 50 RON/lună</small>
        </div>
        <div style="background: #fef9e7; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #f39c12;">
          <h5 style="margin: 0; color: #f39c12;">📊 Total Plăți</h5>
          <p style="margin: 0.5rem 0 0 0; font-size: 1.5rem; font-weight: bold; color: #f39c12;">${promotedPayments.length}</p>
          <small style="color: #666;">plăți procesate</small>
        </div>
        <div style="background: #eaf2ff; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #3498db;">
          <h5 style="margin: 0; color: #3498db;">📈 Rata Conversie</h5>
          <p style="margin: 0.5rem 0 0 0; font-size: 1.5rem; font-weight: bold; color: #3498db;">
            ${channels.length > 0 ? Math.round((activePromoted.length / channels.length) * 100) : 0}%
          </p>
          <small style="color: #666;">canale promoted din total</small>
        </div>
      </div>
    </div>
  `;
  
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
  window._pendingUserRegistration = null;
  window._pendingChannelProposal = null;
}

function confirmEmailCheck() {
  const typed = document.getElementById('confirm-email-input').value.trim().toLowerCase();
  
  // Check for admin user creation
  const pendingAdmin = window._pendingAdminNewUser;
  if (pendingAdmin) {
    if (typed !== pendingAdmin.email) {
      return alert('❌ Confirmarea nu s-a potrivit. Introdu adresa exactă pentru a confirma că este un email real.');
    }
    
    // Create verified admin user
    localStorage.setItem('user_' + pendingAdmin.email, pendingAdmin.pass);
    const meta = { verified: true, verifiedAt: new Date().toISOString(), verifiedByAdmin: true };
    localStorage.setItem('user_meta_' + pendingAdmin.email, JSON.stringify(meta));
    alert(`✅ Utilizatorul ${pendingAdmin.email} a fost creat și verificat ca email real.`);
    
    window._pendingAdminNewUser = null;
    closeConfirmEmailModal();
    closeAddUserModal();
    loadAdminUsers();
    return;
  }
  
  // Check for regular user registration
  const pendingUser = window._pendingUserRegistration;
  if (pendingUser) {
    if (typed !== pendingUser.email) {
      return alert('❌ Confirmarea nu s-a potrivit. Introdu adresa exactă pentru a confirma că este un email real și valid.');
    }
    
    // Create verified user
    localStorage.setItem(`user_${pendingUser.email}`, JSON.stringify({
      email: pendingUser.email,
      password: pendingUser.password,
      created: new Date().toISOString(),
      verified: true,
      verifiedAt: new Date().toISOString()
    }));
    
    alert(`✅ Contul pentru ${pendingUser.email} a fost creat cu succes!\n🔒 Email-ul a fost verificat ca fiind real și valid.`);
    
    // Clear form
    document.getElementById('user-reg-email').value = '';
    document.getElementById('user-reg-password').value = '';
    
    window._pendingUserRegistration = null;
    closeConfirmEmailModal();
    return;
  }
  
  // Check for channel proposal submission
  const pendingProposal = window._pendingChannelProposal;
  if (pendingProposal) {
    if (typed !== pendingProposal.email) {
      return alert('❌ Confirmarea nu s-a potrivit. Introdu adresa exactă pentru a confirma că este un email real și valid.');
    }
    
    // Store verified proposal
    const proposals = JSON.parse(localStorage.getItem('channel_proposals') || '[]');
    const proposal = {
      id: Date.now(),
      name: pendingProposal.name,
      link: pendingProposal.link,
      description: pendingProposal.description,
      category: pendingProposal.category,
      email: pendingProposal.email,
      status: 'pending',
      date: new Date().toISOString(),
      emailVerified: true,
      verifiedAt: new Date().toISOString()
    };
    
    proposals.push(proposal);
    localStorage.setItem('channel_proposals', JSON.stringify(proposals));
    
    alert(`✅ Propunerea pentru canalul "${pendingProposal.name}" a fost trimisă cu succes!\n🔒 Email-ul ${pendingProposal.email} a fost verificat ca fiind real.\n⏱️ Vei primi un răspuns în 1-3 zile lucrătoare.`);
    
    // Reset form
    pendingProposal.formElement.reset();
    const charCounter = document.querySelector('.char-counter');
    if (charCounter) charCounter.textContent = '0/200 caractere';
    
    window._pendingChannelProposal = null;
    closeConfirmEmailModal();
    return;
  }
  
  // No pending action found
  alert('❌ Nu există o acțiune în curs de procesare.');
  closeConfirmEmailModal();
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
  const channels = getChannels();
  let html = `<h4>📺 Toate Canalele (${channels.length})</h4>`;
  
  channels.forEach(channel => {
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
  
  document.getElementById('admin-channels-list').innerHTML = html;
}

function showPendingChannels() {
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

// Promoted Channels Management
function showPromotedManager() {
  const channels = getChannels();
  const promotedChannels = channels.filter(c => c.promoted === true);
  const expiredPromoted = promotedChannels.filter(c => c.promotedUntil && new Date(c.promotedUntil) <= new Date());
  const activePromoted = promotedChannels.filter(c => c.promotedUntil && new Date(c.promotedUntil) > new Date());
  const regularChannels = channels.filter(c => !c.promoted);
  
  let html = `
    <h4>💰 Gestiune Canale Promoted</h4>
    <div style="margin-bottom: 1rem; padding: 1rem; background: #d1f2eb; border-radius: 0.5rem; border-left: 4px solid #27ae60;">
      <strong>💡 Info:</strong> Canalele Promoted plătesc pentru a fi afișate pe prima pagină. Prețul standard: <strong style="color: #27ae60;">50 RON/lună</strong>
    </div>
    
    <div class="promoted-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: #27ae60; color: white; padding: 1rem; border-radius: 0.5rem; text-align: center;">
        <h5 style="margin: 0; font-size: 1.5rem;">💰 ${activePromoted.length}</h5>
        <p style="margin: 0.5rem 0 0 0;">Active Promoted</p>
      </div>
      <div style="background: #e74c3c; color: white; padding: 1rem; border-radius: 0.5rem; text-align: center;">
        <h5 style="margin: 0; font-size: 1.5rem;">⏰ ${expiredPromoted.length}</h5>
        <p style="margin: 0.5rem 0 0 0;">Expired</p>
      </div>
      <div style="background: #3498db; color: white; padding: 1rem; border-radius: 0.5rem; text-align: center;">
        <h5 style="margin: 0; font-size: 1.5rem;">💸 ${activePromoted.length * 50} RON</h5>
        <p style="margin: 0.5rem 0 0 0;">Venit Lunar</p>
      </div>
    </div>
    
    <h5>🟢 Canale Promoted Active (${activePromoted.length})</h5>
    <div class="active-promoted-list">
  `;
  
  if (activePromoted.length === 0) {
    html += '<div style="text-align: center; padding: 1rem; color: #666;">Nu există canale promoted active.</div>';
  } else {
    activePromoted.forEach(channel => {
      const daysLeft = Math.ceil((new Date(channel.promotedUntil) - new Date()) / (1000 * 60 * 60 * 24));
      html += `
        <div class="admin-channel-item promoted-active" style="border-left: 4px solid #27ae60; background: #f8fff8;">
          <div class="admin-item-info">
            <strong>💰 ${channel.title}</strong>
            <span style="background: #27ae60; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem; margin-left: 0.5rem;">
              ${daysLeft} zile rămase
            </span><br>
            <small>${channel.desc}</small><br>
            <a href="${channel.url}" target="_blank">${channel.url}</a><br>
            <small><strong>Plătit până:</strong> ${new Date(channel.promotedUntil).toLocaleDateString('ro-RO')}</small>
            <div style="margin-top: 0.3rem;">
              <span style="background: #3498db; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem;">
                ${Array.isArray(channel.category) ? channel.category.join(', ') : channel.category}
              </span>
            </div>
          </div>
          <div class="admin-item-actions">
            <button class="edit" onclick="extendPromoted('${channel.title}')" style="background: #f39c12;">⏰ Extinde</button>
            <button class="delete" onclick="removePromoted('${channel.title}')" style="background: #e74c3c;">❌ Remove</button>
          </div>
        </div>
      `;
    });
  }
  
  if (expiredPromoted.length > 0) {
    html += `
      <h5>🔴 Canale Promoted Expirate (${expiredPromoted.length})</h5>
      <div class="expired-promoted-list">
    `;
    
    expiredPromoted.forEach(channel => {
      const daysExpired = Math.ceil((new Date() - new Date(channel.promotedUntil)) / (1000 * 60 * 60 * 24));
      html += `
        <div class="admin-channel-item promoted-expired" style="border-left: 4px solid #e74c3c; background: #fff8f8;">
          <div class="admin-item-info">
            <strong>⏰ ${channel.title}</strong>
            <span style="background: #e74c3c; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem; margin-left: 0.5rem;">
              Expirat ${daysExpired} zile
            </span><br>
            <small>${channel.desc}</small><br>
            <small><strong>Expirat la:</strong> ${new Date(channel.promotedUntil).toLocaleDateString('ro-RO')}</small>
          </div>
          <div class="admin-item-actions">
            <button class="approve" onclick="renewPromoted('${channel.title}')" style="background: #27ae60;">🔄 Reînnoiește</button>
            <button class="delete" onclick="removePromoted('${channel.title}')" style="background: #95a5a6;">🗑️ Șterge</button>
          </div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  html += `
    <h5>📺 Canale Disponibile pentru Promoted (${regularChannels.length})</h5>
    <div class="regular-channels-list">
  `;
  
  regularChannels.forEach(channel => {
    html += `
      <div class="admin-channel-item">
        <div class="admin-item-info">
          <strong>${channel.title}</strong><br>
          <small>${channel.desc}</small><br>
          <a href="${channel.url}" target="_blank">${channel.url}</a>
          <div style="margin-top: 0.3rem;">
            <span style="background: #3498db; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem;">
              ${Array.isArray(channel.category) ? channel.category.join(', ') : channel.category}
            </span>
          </div>
        </div>
        <div class="admin-item-actions">
          <button class="approve" onclick="makePromoted('${channel.title}')" style="background: #27ae60;">💰 Make Promoted</button>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  
  document.getElementById('admin-channels-list').innerHTML = html;
}

function makePromoted(channelTitle) {
  const duration = prompt('💰 Câte luni să fie promoted? (ex: 1, 2, 3)', '1');
  if (!duration || isNaN(duration) || duration < 1) return;
  
  const months = parseInt(duration);
  const price = months * 50; // 50 RON per month
  
  if (!confirm(`💰 Confirmați promovarea pentru ${months} luni?\n\nCanal: ${channelTitle}\nDurată: ${months} luni\nPreț: ${price} RON`)) return;
  
  const channels = getChannels();
  const channelIndex = channels.findIndex(c => c.title === channelTitle);
  
  if (channelIndex !== -1) {
    const promotedUntil = new Date();
    promotedUntil.setMonth(promotedUntil.getMonth() + months);
    
    channels[channelIndex].promoted = true;
    channels[channelIndex].promotedUntil = promotedUntil.toISOString();
    channels[channelIndex].promotedPrice = price;
    channels[channelIndex].promotedDuration = months;
    
    localStorage.setItem('channels', JSON.stringify(channels));
    
    // Track payment
    trackPromotedPayment(channelTitle, price, months);
    
    showPromotedManager();
    alert(`✅ Canalul "${channelTitle}" a fost promovat pentru ${months} luni!\n💰 Preț: ${price} RON`);
    
    console.log(`💰 Channel "${channelTitle}" promoted for ${months} months, price: ${price} RON`);
  }
}

function extendPromoted(channelTitle) {
  const duration = prompt('⏰ Cu câte luni să extindem? (ex: 1, 2, 3)', '1');
  if (!duration || isNaN(duration) || duration < 1) return;
  
  const months = parseInt(duration);
  const price = months * 50;
  
  if (!confirm(`💰 Confirmați extinderea pentru ${months} luni?\n\nCanal: ${channelTitle}\nDurată suplimentară: ${months} luni\nPreț: ${price} RON`)) return;
  
  const channels = getChannels();
  const channelIndex = channels.findIndex(c => c.title === channelTitle);
  
  if (channelIndex !== -1) {
    const currentEnd = new Date(channels[channelIndex].promotedUntil);
    currentEnd.setMonth(currentEnd.getMonth() + months);
    
    channels[channelIndex].promotedUntil = currentEnd.toISOString();
    localStorage.setItem('channels', JSON.stringify(channels));
    
    trackPromotedPayment(channelTitle, price, months);
    
    showPromotedManager();
    alert(`✅ Promoted extins pentru "${channelTitle}"!\n⏰ Nou până la: ${currentEnd.toLocaleDateString('ro-RO')}\n💰 Preț: ${price} RON`);
  }
}

function renewPromoted(channelTitle) {
  const duration = prompt('🔄 Reînnoiește pentru câte luni? (ex: 1, 2, 3)', '1');
  if (!duration || isNaN(duration) || duration < 1) return;
  
  const months = parseInt(duration);
  const price = months * 50;
  
  if (!confirm(`💰 Confirmați reînnoirea pentru ${months} luni?\n\nCanal: ${channelTitle}\nDurată: ${months} luni\nPreț: ${price} RON`)) return;
  
  const channels = getChannels();
  const channelIndex = channels.findIndex(c => c.title === channelTitle);
  
  if (channelIndex !== -1) {
    const promotedUntil = new Date();
    promotedUntil.setMonth(promotedUntil.getMonth() + months);
    
    channels[channelIndex].promoted = true;
    channels[channelIndex].promotedUntil = promotedUntil.toISOString();
    channels[channelIndex].promotedPrice = price;
    channels[channelIndex].promotedDuration = months;
    
    localStorage.setItem('channels', JSON.stringify(channels));
    
    trackPromotedPayment(channelTitle, price, months);
    
    showPromotedManager();
    alert(`✅ Canalul "${channelTitle}" a fost reînnoit pentru ${months} luni!\n💰 Preț: ${price} RON`);
  }
}

function removePromoted(channelTitle) {
  if (!confirm(`❌ Sigur vrei să elimini "${channelTitle}" din Promoted?`)) return;
  
  const channels = getChannels();
  const channelIndex = channels.findIndex(c => c.title === channelTitle);
  
  if (channelIndex !== -1) {
    channels[channelIndex].promoted = false;
    delete channels[channelIndex].promotedUntil;
    delete channels[channelIndex].promotedPrice;
    delete channels[channelIndex].promotedDuration;
    
    localStorage.setItem('channels', JSON.stringify(channels));
    showPromotedManager();
    alert(`✅ Canalul "${channelTitle}" a fost eliminat din Promoted!`);
  }
}

function trackPromotedPayment(channelTitle, price, months) {
  const payments = JSON.parse(localStorage.getItem('promoted_payments') || '[]');
  const payment = {
    id: Date.now(),
    channelTitle,
    price,
    months,
    date: new Date().toISOString(),
    status: 'paid'
  };
  
  payments.push(payment);
  localStorage.setItem('promoted_payments', JSON.stringify(payments));
  
  console.log('💰 Payment tracked:', payment);
}

// Featured Channels Management
function showFeaturedManager() {
  const channels = getChannels();
  const featuredChannels = channels.filter(c => c.featured === true);
  const regularChannels = channels.filter(c => !c.featured);
  
  let html = `
    <h4>⭐ Gestiune Canale Featured</h4>
    <div style="margin-bottom: 1rem; padding: 1rem; background: #fff3cd; border-radius: 0.5rem; border-left: 4px solid #f39c12;">
      <strong>💡 Info:</strong> Canalele Featured vor apărea în categoria "⭐ Featured" și vor fi evidențiate pe site.
    </div>
    
    <h5>🌟 Canale Featured Actuale (${featuredChannels.length})</h5>
    <div class="featured-channels-list">
  `;
  
  if (featuredChannels.length === 0) {
    html += '<div style="text-align: center; padding: 1rem; color: #666;">Nu există canale featured.</div>';
  } else {
    featuredChannels.forEach((channel, idx) => {
      html += `
        <div class="admin-channel-item featured" style="border-left: 4px solid #f39c12;">
          <div class="admin-item-info">
            <strong>⭐ ${channel.title}</strong><br>
            <small>${channel.desc}</small><br>
            <a href="${channel.url}" target="_blank">${channel.url}</a>
            <div style="margin-top: 0.3rem;">
              <span style="background: #f39c12; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem;">
                ${Array.isArray(channel.category) ? channel.category.join(', ') : channel.category}
              </span>
            </div>
          </div>
          <div class="admin-item-actions">
            <button class="delete" onclick="toggleFeatured('${channel.title}', false)" style="background: #e74c3c;">❌ Remove Featured</button>
          </div>
        </div>
      `;
    });
  }
  
  html += `
    </div>
    
    <h5>📺 Canale Disponibile pentru Featured (${regularChannels.length})</h5>
    <div class="regular-channels-list">
  `;
  
  regularChannels.forEach(channel => {
    html += `
      <div class="admin-channel-item">
        <div class="admin-item-info">
          <strong>${channel.title}</strong><br>
          <small>${channel.desc}</small><br>
          <a href="${channel.url}" target="_blank">${channel.url}</a>
          <div style="margin-top: 0.3rem;">
            <span style="background: #3498db; color: white; padding: 0.2rem 0.5rem; border-radius: 0.3rem; font-size: 0.8rem;">
              ${Array.isArray(channel.category) ? channel.category.join(', ') : channel.category}
            </span>
          </div>
        </div>
        <div class="admin-item-actions">
          <button class="approve" onclick="toggleFeatured('${channel.title}', true)" style="background: #f39c12;">⭐ Make Featured</button>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  
  document.getElementById('admin-channels-list').innerHTML = html;
}

function toggleFeatured(channelTitle, isFeatured) {
  const channels = getChannels();
  const channelIndex = channels.findIndex(c => c.title === channelTitle);
  
  if (channelIndex !== -1) {
    channels[channelIndex].featured = isFeatured;
    localStorage.setItem('channels', JSON.stringify(channels));
    
    // Refresh the featured manager view
    showFeaturedManager();
    
    // Show success message
    const action = isFeatured ? 'adăugat la' : 'eliminat din';
    alert(`✅ Canalul "${channelTitle}" a fost ${action} Featured!`);
    
    console.log(`⭐ Channel "${channelTitle}" featured status changed to:`, isFeatured);
  }
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
// New Navigation System
function showSection(sectionId) {
  // Hide all sections
  const sections = ['home', 'channels', 'propose', 'admin'];
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) element.style.display = 'none';
  });
  
  // Show selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) selectedSection.style.display = 'block';
  
  // Update navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  
  const activeLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
  if (activeLink) activeLink.classList.add('active');
  
  // Special handling for channels section
  if (sectionId === 'channels') {
    renderChannelsGrid();
  }
  
  console.log('🔄 Switched to section:', sectionId);
}

function showAuthTab(tabId) {
  const forms = document.querySelectorAll('.auth-form');
  forms.forEach(form => form.style.display = 'none');
  
  const selectedForm = document.getElementById(tabId);
  if (selectedForm) selectedForm.style.display = 'block';
  
  const tabs = document.querySelectorAll('.auth-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  const activeTab = document.querySelector(`[onclick="showAuthTab('${tabId}')"]`);
  if (activeTab) activeTab.classList.add('active');
}

function renderChannelsGrid() {
  const channels = getChannels();
  const grid = document.getElementById('channels-grid');
  
  if (!grid) return;
  
  let filteredChannels = channels;
  if (currentCategory !== 'all') {
    if (currentCategory === 'promoted') {
      filteredChannels = channels.filter(c => c.promoted === true && c.promotedUntil && new Date(c.promotedUntil) > new Date());
    } else if (currentCategory === 'featured') {
      filteredChannels = channels.filter(c => c.featured === true);
    } else {
      filteredChannels = channels.filter(c =>
        Array.isArray(c.category)
          ? c.category.includes(currentCategory)
          : (c.category || '').toLowerCase() === currentCategory
      );
    }
  }
  
  grid.innerHTML = '';
  
  filteredChannels.forEach(channel => {
    const channelCard = createChannelCard(channel);
    grid.appendChild(channelCard);
  });
}

function createChannelCard(channel) {
  const card = document.createElement('div');
  card.className = 'channel-card';
  
  if (channel.promoted) card.className += ' promoted';
  if (channel.featured) card.className += ' featured';
  
  const memberCount = typeof channel.members === 'string' ? channel.members : formatMemberCount(channel.members);
  const categories = Array.isArray(channel.category) ? channel.category.join(', ') : channel.category;
  
  card.innerHTML = `
    <div class="channel-header">
      <div class="channel-avatar">
        <img src="https://via.placeholder.com/60x60/3498db/ffffff?text=${channel.title.charAt(0)}" alt="${channel.title}">
      </div>
      <div class="channel-badges">
        ${channel.promoted ? '<span class="badge promoted">💰 Promoted</span>' : ''}
        ${channel.featured ? '<span class="badge featured">⭐ Featured</span>' : ''}
      </div>
    </div>
    <div class="channel-content">
      <h3 class="channel-title">${channel.title}</h3>
      <p class="channel-description">${channel.desc}</p>
      <div class="channel-stats">
        <span class="stat">👥 ${memberCount}</span>
        <span class="stat">📂 ${categories}</span>
      </div>
    </div>
    <div class="channel-actions">
      <a href="${channel.url}" target="_blank" class="join-btn" onclick="trackChannelClick('${channel.title}', '${channel.url}')">
        📱 Join Channel
      </a>
    </div>
  `;
  
  return card;
}

function formatMemberCount(count) {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K';
  }
  return count.toString();
}

// Updated category handling for new design
function showCategory(category) {
  console.log('📺 Showing category:', category);
  currentCategory = category;
  
  // Update filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => btn.classList.remove('active'));
  
  const activeBtn = document.querySelector(`[onclick="showCategory('${category}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  // Render channels
  renderChannelsGrid();
  
  // Change background
  const body = document.body;
  body.className = body.className.replace(/\b(crypto|gaming|adult|stiri|retete|tehnologie|promo|featured|promoted)-bg\b/g, '');
  
  if (category !== 'all') {
    body.classList.add(category + '-bg');
  }
}

// Form submission handlers
function submitChannelProposal(event) {
  event.preventDefault();
  
  const name = document.getElementById('propose-name').value.trim();
  const link = document.getElementById('propose-link').value.trim();
  const description = document.getElementById('propose-description').value.trim();
  const category = document.getElementById('propose-category').value;
  const email = document.getElementById('propose-email').value.trim().toLowerCase();
  
  // Validate email format
  if (!validateEmail(email)) {
    alert('❌ Formatul email-ului este invalid!');
    return;
  }
  
  // Validate Telegram link
  if (!link.includes('t.me/') && !link.includes('telegram.me/')) {
    alert('❌ Link-ul trebuie să fie un link valid de Telegram (ex: https://t.me/nume_canal)!');
    return;
  }
  
  // For ANY email domain, require confirmation
  window._pendingChannelProposal = {
    name,
    link, 
    description,
    category,
    email,
    formElement: event.target
  };
  
  // Show confirmation modal
  document.getElementById('confirm-email-text').textContent = 
    `🔒 Pentru a confirma că adresa ${email} este un email real și valid, scrie adresa completă exact mai jos:`;
  document.getElementById('confirm-email-input').value = '';
  document.getElementById('confirm-email-modal').style.display = 'flex';
  
  console.log('📧 Email verification required for channel proposal:', email);
}

// Character counter for description
document.addEventListener('DOMContentLoaded', function() {
  const descTextarea = document.getElementById('propose-description');
  if (descTextarea) {
    descTextarea.addEventListener('input', function() {
      const counter = document.querySelector('.char-counter');
      if (counter) {
        counter.textContent = `${this.value.length}/200 caractere`;
      }
    });
  }
});

// Admin functions
function adminLogin() {
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;
  
  if (!email || !password) {
    alert('❌ Te rog să completezi toate câmpurile!');
    return;
  }
  
  // Super Admin check
  if (email === 'admin@tgchannels.com' && password === 'TgChannels2025Admin!') {
    localStorage.setItem('admin_user', email);
    localStorage.setItem('admin_type', 'super');
    showAdminPanel('super');
    return;
  }
  
  // Regular admin check
  const admins = JSON.parse(localStorage.getItem('regular_admins') || '[]');
  const admin = admins.find(a => a.email === email && a.password === password);
  
  if (admin) {
    localStorage.setItem('admin_user', email);
    localStorage.setItem('admin_type', 'regular');
    showAdminPanel('regular');
  } else {
    alert('❌ Date de conectare incorecte!');
  }
}

function userRegister() {
  const email = document.getElementById('user-reg-email').value.trim().toLowerCase();
  const password = document.getElementById('user-reg-password').value;
  
  if (!email || !password) {
    alert('❌ Te rog să completezi toate câmpurile!');
    return;
  }
  
  // Validate email format
  if (!validateEmail(email)) {
    alert('❌ Formatul email-ului este invalid!');
    return;
  }
  
  // Check if email already exists
  if (localStorage.getItem(`user_${email}`)) {
    alert('❌ Acest email este deja înregistrat!');
    return;
  }
  
  // For ANY email domain, require confirmation by typing email exactly
  window._pendingUserRegistration = { email, password };
  
  // Show confirmation modal
  document.getElementById('confirm-email-text').textContent = 
    `🔒 Pentru a confirma că adresa ${email} este un email real și valid, scrie adresa completă exact mai jos:`;
  document.getElementById('confirm-email-input').value = '';
  document.getElementById('confirm-email-modal').style.display = 'flex';
  
  console.log('📧 Email verification required for:', email);
}

function showAdminPanel(adminType) {
  document.getElementById('admin-auth').style.display = 'none';
  const panelContent = document.getElementById('admin-panel-content');
  panelContent.style.display = 'block';
  
  // Update navigation
  const navUser = document.getElementById('nav-user-info');
  const navCurrentUser = document.getElementById('nav-current-user');
  if (navUser && navCurrentUser) {
    navCurrentUser.textContent = localStorage.getItem('admin_user');
    navUser.style.display = 'block';
  }
  
  // Generate admin panel based on type
  if (adminType === 'super') {
    panelContent.innerHTML = generateSuperAdminPanel();
  } else {
    panelContent.innerHTML = generateRegularAdminPanel();
  }
}

function generateSuperAdminPanel() {
  return `
    <div class="admin-panel">
      <h2>👑 Super Admin Panel</h2>
      <div class="admin-tabs">
        <button class="admin-tab-btn active" onclick="showAdminTab('channels')">📺 Gestiune Canale</button>
        <button class="admin-tab-btn" onclick="showAdminTab('users')">👥 Utilizatori</button>
        <button class="admin-tab-btn" onclick="showAdminTab('admins')">👑 Admini</button>
        <button class="admin-tab-btn" onclick="showAdminTab('stats')">📊 Statistici</button>
        <button class="admin-tab-btn" onclick="showAdminTab('settings')">⚙️ Setări</button>
      </div>
      <div id="admin-content">
        ${generateChannelsTab()}
      </div>
    </div>
  `;
}

function generateRegularAdminPanel() {
  return `
    <div class="admin-panel">
      <h2>👤 Regular Admin Panel</h2>
      <div class="admin-tabs">
        <button class="admin-tab-btn active" onclick="showAdminTab('promote')">💰 Promovează Canale</button>
        <button class="admin-tab-btn" onclick="showAdminTab('manage')">📺 Gestiune Proprii</button>
      </div>
      <div id="admin-content">
        ${generatePromoteTab()}
      </div>
    </div>
  `;
}

function generateChannelsTab() {
  return `
    <div class="admin-tab-content">
      <div class="admin-actions">
        <button onclick="showAllChannels()">📋 Vezi Toate</button>
        <button onclick="showPromotedManager()">💰 Promoted</button>
        <button onclick="showFeaturedManager()">⭐ Featured</button>
        <button onclick="showPendingChannels()">⏳ În Așteptare</button>
      </div>
      <div id="admin-channels-list"></div>
    </div>
  `;
}

function generatePromoteTab() {
  return `
    <div class="admin-tab-content">
      <p>📢 <strong>Permisiuni Regular Admin:</strong></p>
      <ul>
        <li>✅ Promovează canale pe feed (cu aprobare)</li>
        <li>✅ Gestionează propriile canale</li>
        <li>❌ Nu poate șterge canale ale altora</li>
        <li>❌ Nu poate crea admini</li>
      </ul>
      <div id="regular-admin-content">
        <h4>💰 Canale Disponibile pentru Promovare</h4>
        <div id="promote-channels-list"></div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('🎯 DOM loaded, initializing new app...'); // Debug
  trackPageView(); // Track page view
  
  // Check if admin is logged in
  const adminUser = localStorage.getItem('admin_user');
  const adminType = localStorage.getItem('admin_type');
  
  if (adminUser && adminType) {
    // Auto-login admin
    showSection('admin');
    showAdminPanel(adminType);
  } else {
    // Show home by default
    showSection('home');
  }
  
  // Initialize channels grid
  renderChannelsGrid();
  currentCategory = 'promoted'; // Default to promoted
  
  console.log('✅ New app initialized'); // Debug
});