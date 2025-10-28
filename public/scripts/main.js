console.log('ðŸš€ JavaScript loaded successfully!'); // Debug
console.log('defaultChannels length:', defaultChannels.length);

// Default channels (category is an array)
const defaultChannels = [
  // CRYPTO CHANNELS (38) - Real channels with massive member counts
  {
    title: "Money Channel",
    desc: "Canal cu 5.136.824 membri - ultimele È™tiri financiare",
    url: "https://t.me/money",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Just Channel",
    desc: "Canal cu 4.803.558 membri - discuÈ›ii despre investiÈ›ii",
    url: "https://t.me/just",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Venture Capital",
    desc: "Canal cu 3.565.116 membri - oportunitÄƒÈ›i de investiÈ›ii VC",
    url: "https://t.me/venture",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Cheat Kott",
    desc: "Canal cu 3.881.442 membri - strategii È™i hack-uri trading",
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
    desc: "Canal cu 2.382.433 membri - sfaturi premium investiÈ›ii",
    url: "https://t.me/benefactor0101",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Insider Politic",
    desc: "Canal cu 2.931.308 membri - politicÄƒ È™i economie insider",
    url: "https://t.me/insiderr_politic",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Galactica Network",
    desc: "Canal cu 1.578.094 membri - reÈ›ea crypto premium",
    url: "https://t.me/galacticanetwork",
    logo: "https://cdn-icons-png.flaticon.com/512/8115/8115728.png",
    category: ["crypto"]
  },
  {
    title: "Cumber Tech",
    desc: "Canal cu 1.362.965 membri - tehnologie È™i crypto",
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
    desc: "Canal cu 1.295.089 membri - entertainment È™i crypto",
    url: "https://t.me/movie",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    category: ["crypto"]
  },
  {
    title: "Crypto Sayer",
    desc: "Canal cu 1.209.240 membri - predicÈ›ii È™i analize crypto",
    url: "https://t.me/cryptosayer",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    category: ["crypto"]
  },
  {
    title: "AI Post",
    desc: "Canal cu 1.085.808 membri - AI È™i crypto intersection",
    url: "https://t.me/aipost",
    logo: "https://cdn-icons-png.flaticon.com/512/8099/8099231.png",
    category: ["crypto"]
  },
  {
    title: "CoinGraph News",
    desc: "Canal cu 1.057.208 membri - È™tiri crypto actualizate",
    url: "https://t.me/coingraphnews",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "Coin Dot News Ann",
    desc: "Canal cu 869.053 membri - anunÈ›uri importante crypto",
    url: "https://t.me/coindotnewsann",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "Pump Crypto Bets",
    desc: "Canal cu 722.787 membri - pump signals È™i bets",
    url: "https://t.me/pumpcryptobets",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Cryptex Library",
    desc: "Canal cu 684.241 membri - biblioteca crypto educaÈ›ionalÄƒ",
    url: "https://t.me/cryptex_library",
    logo: "https://cdn-icons-png.flaticon.com/512/8115/8115728.png",
    category: ["crypto"]
  },
  {
    title: "America News Crypto",
    desc: "Canal cu 580.716 membri - È™tiri crypto din America",
    url: "https://t.me/america_news_crypto",
    logo: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    category: ["crypto"]
  },
  {
    title: "American Crypto Channel",
    desc: "Canal cu 586.681 membri - comunitatea crypto americanÄƒ",
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
    desc: "Canal cu 549.855 membri - market watching È™i analize",
    url: "https://t.me/watcherguru",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    category: ["crypto"]
  },
  {
    title: "Alpha Trade News",
    desc: "Canal cu 519.863 membri - È™tiri trading premium alpha",
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
    desc: "Canal cu 484.123 membri - È™tiri despre Yes Coin",
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
    desc: "Canal cu 454.444 membri - retrospective È™i analize crypto",
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
    desc: "Canal cu 449.717 membri - IoT È™i blockchain technology",
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
    desc: "Canal cu 403.598 membri - È™tiri rapide crypto",
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
    desc: "Canal cu 317.997 membri - anunÈ›uri oficiale CMC",
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
    title: "Gamers RomÃ¢nia Official",
    desc: "Cea mai mare comunitate de gameri din RomÃ¢nia.",
    url: "https://t.me/gamersromania_official",
    logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    category: ["gaming"]
  },
  {
    title: "CS2 RomÃ¢nia",
    desc: "Counter-Strike 2 - turnee, echipe È™i discuÈ›ii.",
    url: "https://t.me/cs2romania",
    logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    category: ["gaming"]
  },
  {
    title: "FIFA RomÃ¢nia",
    desc: "FIFA 24 - Ultimate Team, turnee È™i sfaturi.",
    url: "https://t.me/fifaromania",
    logo: "https://cdn-icons-png.flaticon.com/512/53/53283.png",
    category: ["gaming"]
  },
  {
    title: "Dota 2 RomÃ¢nia",
    desc: "Comunitatea romÃ¢neascÄƒ de Dota 2 È™i eSports.",
    url: "https://t.me/dota2romania",
    logo: "https://cdn-icons-png.flaticon.com/512/588/588267.png",
    category: ["gaming"]
  },
  {
    title: "League of Legends RO",
    desc: "LoL RomÃ¢nia - ranked, turnee È™i echipe.",
    url: "https://t.me/lolromania",
    logo: "https://cdn-icons-png.flaticon.com/512/588/588275.png",
    category: ["gaming"]
  },
  {
    title: "Mobile Gaming RO",
    desc: "Jocuri mobile populare Ã®n RomÃ¢nia - PUBG, Clash Royale.",
    url: "https://t.me/mobilegamingromania",
    logo: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
    category: ["gaming"]
  },
  {
    title: "Steam RomÃ¢nia",
    desc: "Oferte Steam, jocuri noi È™i recomandÄƒri.",
    url: "https://t.me/steamromania",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    category: ["gaming"]
  },
  {
    title: "PC Gaming RomÃ¢nia",
    desc: "Hardware gaming, build-uri PC È™i benchmark-uri.",
    url: "https://t.me/pcgamingromania",
    logo: "https://cdn-icons-png.flaticon.com/512/2991/2991620.png",
    category: ["gaming"]
  },
  {
    title: "Valorant RomÃ¢nia",
    desc: "Valorant competitive È™i casual gaming Ã®n RomÃ¢nia.",
    url: "https://t.me/valorantromania",
    logo: "https://cdn-icons-png.flaticon.com/512/2991/2991158.png",
    category: ["gaming"]
  },
  {
    title: "Minecraft RomÃ¢nia",
    desc: "Servere romÃ¢neÈ™ti È™i construcÈ›ii creative Ã®n Minecraft.",
    url: "https://t.me/minecraftromania",
    logo: "https://cdn-icons-png.flaticon.com/512/588/588267.png",
    category: ["gaming"]
  },

  // ADULT CHANNELS (45) - Real channels with member counts
  {
    title: "Alexis Mucci Official",
    desc: "Canal oficial cu 321.77k membri - conÈ›inut exclusiv",
    url: "https://t.me/alexismucciofficial",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Face Switcher",
    desc: "Canal cu 285.49k membri - tehnologii AI È™i deepfake",
    url: "https://t.me/faceswitcher",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Anime Mania XX",
    desc: "Canal cu 108.81k membri - conÈ›inut anime pentru adulÈ›i",
    url: "https://t.me/animemaniaxx",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Khyati Shree Channel",
    desc: "Canal cu 99.47k membri - conÈ›inut exclusiv",
    url: "https://t.me/khyatishreechannel",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Yailin La Mas Viral",
    desc: "Canal cu 79.73k membri - conÈ›inut viral È™i exclusiv",
    url: "https://t.me/yailin_la_mas_viral_yailinlamass",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Karel Ion Li",
    desc: "Canal cu 74.3k membri - conÈ›inut premium",
    url: "https://t.me/karelionli",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Rubi Rose Tele",
    desc: "Canal cu 64.88k membri - conÈ›inut exclusiv",
    url: "https://t.me/rubirosetele",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Utopian Leaks",
    desc: "Canal cu 62.75k membri - leaks È™i conÈ›inut premium",
    url: "https://t.me/utopianleaks",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Badoo Com",
    desc: "Canal cu 60.99k membri - dating È™i Ã®ntÃ¢lniri",
    url: "https://t.me/badoocom",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    category: ["adult"]
  },
  {
    title: "Tinder RU",
    desc: "Canal cu 60.08k membri - dating È™i match-uri",
    url: "https://t.me/tinderru",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    category: ["adult"]
  },
  {
    title: "Allinika PH",
    desc: "Canal cu 60.05k membri - conÈ›inut premium",
    url: "https://t.me/allinika_ph",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Rachel Cook",
    desc: "Canal cu 54.08k membri - conÈ›inut exclusiv model",
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
    desc: "Canal cu 40.69k membri - conÈ›inut premium exclusive",
    url: "https://t.me/voulezjfansonly",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Grace Charis",
    desc: "Canal cu 38.32k membri - conÈ›inut exclusiv golf model",
    url: "https://t.me/grace_charis_itsgracecharis",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Yus Lopez",
    desc: "Canal cu 34.19k membri - conÈ›inut premium fitness",
    url: "https://t.me/yus_lopez_yuslopez",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Joselis Boli",
    desc: "Canal cu 22.71k membri - conÈ›inut exclusiv model",
    url: "https://t.me/joselisboli",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Bronte B",
    desc: "Canal cu 20.15k membri - conÈ›inut premium",
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
    desc: "Canal cu 14.43k membri - conÈ›inut premium specific",
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
    desc: "Canal cu 13.72k membri - conÈ›inut exclusiv model",
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
    desc: "Canal cu 11.3k membri - conÈ›inut premium pentru adulÈ›i",
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
    desc: "Canal cu 10.57k membri - conÈ›inut premium gratuit",
    url: "https://t.me/onlyfanspremium4free",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "Rebelote TG",
    desc: "Canal cu 10.4k membri - conÈ›inut premium rebel",
    url: "https://t.me/rebelotetg",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "NSFW Premium",
    desc: "Canal cu 10.12k membri - conÈ›inut NSFW premium",
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
    desc: "Canal cu 118.156k membri - conÈ›inut premium vast",
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
    desc: "Canal cu 36.087k membri - colecÈ›ie modele internet",
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
    desc: "Canal cu 25.686k membri - conÈ›inut premium specific",
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
    desc: "Canal cu 11.432k membri - conÈ›inut video premium",
    url: "https://t.me/PornHubb_SexVideos_PornVideos",
    logo: "https://cdn-icons-png.flaticon.com/512/3524/3524752.png",
    category: ["adult"]
  },
  {
    title: "My Super Hot",
    desc: "Canal cu 11.003k membri - conÈ›inut premium hot",
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

  // È˜TIRI CHANNELS (50)
  {
    title: "È˜tiri RomÃ¢nia Live",
    desc: "Ultimele È™tiri din RomÃ¢nia actualizate Ã®n timp real.",
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
    desc: "È˜tirile Pro TV direct pe Telegram.",
    url: "https://t.me/protvnews",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174876.png",
    category: ["stiri"]
  },
  {
    title: "RomÃ¢nia LiberÄƒ",
    desc: "Jurnalism independent È™i investigaÈ›ii Ã®n RomÃ¢nia.",
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

  // REÈšETE CHANNELS (50)
  {
    title: "ReÈ›ete RomÃ¢neÈ™ti",
    desc: "Cele mai gustoase reÈ›ete tradiÈ›ionale romÃ¢neÈ™ti.",
    url: "https://t.me/reteteromanesti",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    category: ["retete"]
  },
  {
    title: "BucÄƒtÄƒria Bunicii",
    desc: "ReÈ›ete de la bunica, gÄƒtit tradiÈ›ional romÃ¢nesc.",
    url: "https://t.me/bucatariabunicii",
    logo: "https://cdn-icons-png.flaticon.com/512/2771/2771401.png",
    category: ["retete"]
  },
  {
    title: "Deserturi Delicioase",
    desc: "ReÈ›ete de prÄƒjituri, torturi È™i deserturi romÃ¢neÈ™ti.",
    url: "https://t.me/deserturidelicioase",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    category: ["retete"]
  },
  {
    title: "MÃ¢ncare SÄƒnÄƒtoasÄƒ",
    desc: "ReÈ›ete healthy È™i nutriÈ›ie echilibratÄƒ.",
    url: "https://t.me/mancaresanatoasa",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    category: ["retete"]
  },
  {
    title: "GÄƒtit Rapid",
    desc: "ReÈ›ete rapide pentru persoanele ocupate.",
    url: "https://t.me/gatitrapid",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046747.png",
    category: ["retete"]
  },

  // TEHNOLOGIE CHANNELS (50)
  {
    title: "IT RomÃ¢nia News",
    desc: "Ultimele noutÄƒÈ›i din tehnologie È™i IT din RomÃ¢nia.",
    url: "https://t.me/itromanianews",
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    category: ["tehnologie"]
  },
  {
    title: "Android RomÃ¢nia",
    desc: "Tot despre Android - aplicaÈ›ii, ROM-uri, sfaturi.",
    url: "https://t.me/androidromania",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174836.png",
    category: ["tehnologie"]
  },
  {
    title: "iPhone RomÃ¢nia",
    desc: "Comunitatea iPhone din RomÃ¢nia È™i iOS tips.",
    url: "https://t.me/iphoneromania",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174841.png",
    category: ["tehnologie"]
  },
  {
    title: "Programare RomÃ¢nia",
    desc: "ÃŽnvaÈ›Äƒ programare È™i development Ã®n RomÃ¢nia.",
    url: "https://t.me/programareromania",
    logo: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    category: ["tehnologie"]
  },
  {
    title: "AI RomÃ¢nia",
    desc: "InteligenÈ›a artificialÄƒ È™i machine learning Ã®n romÃ¢nÄƒ.",
    url: "https://t.me/airomania",
    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    category: ["tehnologie"]
  },

  // PROMO CHANNELS (50)
  {
    title: "Oferte RomÃ¢nia",
    desc: "Cele mai bune oferte È™i reduceri din RomÃ¢nia.",
    url: "https://t.me/oferteromania",
    logo: "https://cdn-icons-png.flaticon.com/512/726/726476.png",
    category: ["promo"]
  },
  {
    title: "Reduceri Online",
    desc: "Coduri de reducere È™i promoÈ›ii pentru magazine online.",
    url: "https://t.me/reducerionline",
    logo: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    category: ["promo"]
  },
  {
    title: "Black Friday RO",
    desc: "Cele mai mari reduceri de Black Friday din RomÃ¢nia.",
    url: "https://t.me/blackfridayro",
    logo: "https://cdn-icons-png.flaticon.com/512/726/726488.png",
    category: ["promo"]
  },
  {
    title: "Cupoane de Reducere",
    desc: "Cupoane exclusive pentru magazinele romÃ¢neÈ™ti.",
    url: "https://t.me/cupoanedereducere",
    logo: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
    category: ["promo"]
  },
  {
    title: "Concursuri RomÃ¢nia",
    desc: "Concursuri cu premii organizate Ã®n RomÃ¢nia.",
    url: "https://t.me/concursuriRomania",
    logo: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
    category: ["promo"]
  }
];

// Continue adding more channels to reach 50 for each category...

function getChannels() {
  // ReturneazÄƒ direct defaultChannels - simplu È™i funcÈ›ional
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

  if (!title || !desc || !url) return alert('CompleteazÄƒ toate cÃ¢mpurile obligatorii!');
  if (!/^https:\/\/t\.me\//.test(url)) return alert('Linkul trebuie sÄƒ fie de forma https://t.me/...');
  if (!owner) return alert('Trebuie sÄƒ fii logat pentru a adÄƒuga canal!');
  if (category.length === 0) return alert('SelecteazÄƒ cel puÈ›in o categorie!');

  // SalveazÄƒ doar Ã®n user_channels pentru a evita duplicatele
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
    alert('PoÈ›i È™terge doar canalele adÄƒugate de tine!');
    return;
  }
  if (!confirm('Sigur vrei sÄƒ È™tergi acest canal?')) return;
  channels.splice(realIdx, 1);
  saveChannels(channels);
  showCategory(currentCategory);
}

let currentCategory = 'all';

function showCategory(category) {
  console.log('ðŸ“º Showing category:', category); // Debug
  currentCategory = category;
  updateActiveCategoryButtons();
  
  // Debug - verificÄƒm canalele
  const channels = getChannels();
  console.log('ðŸ” Total channels:', channels.length);
  console.log('ðŸ” First 3 channels:', channels.slice(0, 3));
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
  console.log('ðŸ”„ Rendering channels for category:', currentCategory); // Debug
  
  const list = document.getElementById('channels-list');
  if (!list) {
    console.error('âŒ channels-list element not found!');
    return;
  }
  
  list.innerHTML = '';
  const channels = getChannels();
  console.log('ðŸ“‹ Total channels:', channels.length); // Debug
  
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
  
  console.log('ðŸŽ¯ Filtered channels:', filtered.length); // Debug

  // order: user's channels first
  const userChannels = [];
  const otherChannels = [];
  filtered.forEach(c => {
    if (logged && c.owner === logged) userChannels.push(c);
    else otherChannels.push(c);
  });
  const sorted = getSortedChannels(filtered, category);

  // For 'all' display featured channels set by admin
  if (currentCategory === 'all') {
    const grid = document.createElement('div');
    grid.className = 'channels-grid';
    const toShow = getHomepageFeaturedChannels(); // Use featured channels function
    if (toShow.length === 0) {
      list.innerHTML = '<p style="text-align:center;">Nu existÄƒ canale de afiÈ™at.</p>';
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
          ${canDelete ? `<button class="delete-btn" onclick="deleteChannel(${channel.idxGlobal})">È˜terge</button>` : ''}
        </div>
      `;
      grid.appendChild(card);
    });
    list.appendChild(grid);
    return;
  }

  // For other categories - list view
  if (sorted.length === 0) {
    list.innerHTML = '<p style="text-align:center;">Nu existÄƒ canale Ã®n aceastÄƒ categorie.</p>';
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
        ${canDelete ? `<button class="delete-btn" onclick="deleteChannel(${channel.idxGlobal})">È˜terge</button>` : ''}
      </div>
    `;
    list.appendChild(card);
  });
  
  console.log('ðŸŽ¯ renderChannelsByCategory finished - channels rendered:', sorted.length);
}

// --- Auth ---
function register() {
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const pass = document.getElementById('reg-password').value;
  if (!email || !pass) return alert('CompleteazÄƒ toate cÃ¢mpurile!');
  if (!validateEmail(email)) return alert('âŒ Email invalid!\n\nâœ… FoloseÈ™te un email REAL:\nâ€¢ nume.prenume@gmail.com\nâ€¢ contact@yahoo.com\nâ€¢ admin@company.ro\n\nâŒ NU acceptÄƒm:\nâ€¢ 1111@gmail.com (doar cifre)\nâ€¢ test@fake.com (domenii fake)');
  if (localStorage.getItem('user_' + email)) return alert('Emailul existÄƒ deja!');
  localStorage.setItem('user_' + email, pass);
  // store metadata for the user (verified flag)
  const meta = { verified: false, createdAt: new Date().toISOString() };
  localStorage.setItem('user_meta_' + email, JSON.stringify(meta));
  alert('Cont creat! Acum te poÈ›i loga.');
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
    alert('âœ… Logat ca ADMIN cu succes!');
    return;
  }
  
  // Check for regular user
  if (localStorage.getItem('user_' + email) === pass) {
    localStorage.setItem('logged_user', email);
    localStorage.removeItem('is_admin');
    showUser();
    alert('âœ… Logat ca utilizator normal!');
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
  // VerificÄƒ format complet de email valid
  const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!basicFormat) return false;
  
  const [localPart, domain] = email.split('@');
  const domainLower = domain.toLowerCase();
  
  // Nu permite doar cifre Ã®n partea localÄƒ (1111@gmail.com)
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
  
  // Lista de domenii acceptate (reale È™i cunoscute)
  const validDomains = [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 
    'icloud.com', 'protonmail.com', 'aol.com', 'mail.com',
    'yahoo.ro', 'gmail.ro', 'outlook.ro', 'hotmail.ro',
    'company.com', 'business.ro', 'firma.com', 'work.com'
  ];
  
  // VerificÄƒ dacÄƒ domeniul este Ã®n lista acceptatÄƒ SAU are format corporativ valid
  const isCorporateEmail = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domainLower) && 
                          !domainLower.includes('test') && 
                          !domainLower.includes('fake') &&
                          domainLower.includes('.') &&
                          domainLower.split('.').length >= 2;
                          
  const isValidDomain = validDomains.includes(domainLower) || isCorporateEmail;
  
  // Partea localÄƒ trebuie sÄƒ aibÄƒ cel puÈ›in 3 caractere È™i sÄƒ nu fie doar cifre
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
    'settings': 'SetÄƒri'
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
  let html = '<h4>ðŸ“º Toate Canalele (' + channels.length + ')</h4>';
  
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
          <button class="edit" onclick="editChannel('${channel.title}')">âœï¸ Edit</button>
          <button class="delete" onclick="deleteChannel('${channel.title}')">ðŸ—‘ï¸ Delete</button>
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
            <button class="approve" onclick="approveChannel('${channel.title}')">âœ… Approve</button>
            <button class="reject" onclick="rejectChannel('${channel.title}')">âŒ Reject</button>
            <button class="edit" onclick="editChannel('${channel.title}')">âœï¸ Edit</button>
          </div>
        </div>
      `;
    });
  }
  
  // Show pending channels
  if (pendingChannels.length > 0) {
    html += '<div style="margin: 1.5rem 0 1rem 0;"><strong>Canale Ã®n AÈ™teptare:</strong></div>';
    pendingChannels.forEach(channel => {
      html += `
        <div class="admin-channel-item pending">
          <div class="admin-item-info">
            <strong>${channel.title}</strong> <small>(by ${channel.owner})</small><br>
            <small>${channel.desc}</small><br>
            <a href="${channel.url}" target="_blank">${channel.url}</a>
          </div>
          <div class="admin-item-actions">
            <button class="approve" onclick="approveChannel('${channel.title}')">âœ… Approve</button>
            <button class="reject" onclick="rejectChannel('${channel.title}')">âŒ Reject</button>
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
  let html = `<h4>ðŸ‘¥ Utilizatori ÃŽnregistraÈ›i (${users.length})</h4>`;
  
  users.forEach(email => {
    const isBanned = localStorage.getItem('banned_' + email) === 'true';
    const meta = JSON.parse(localStorage.getItem('user_meta_' + email) || '{}');
    const verified = meta.verified === true;
    html += `
      <div class="admin-user-item ${isBanned ? 'rejected' : ''}">
        <div class="admin-item-info">
          <strong>${email}</strong>
          ${verified ? `<span class="verified-badge">âœ” Verificat</span>` : ''}
          <br><small>Status: ${isBanned ? 'ðŸš« Banned' : 'âœ… Active'}</small>
        </div>
        <div class="admin-item-actions">
          ${isBanned ? 
            `<button class="approve" onclick="unbanUser('${email}')">ðŸ”“ Unban</button>` :
            `<button class="ban" onclick="banUser('${email}')">ðŸš« Ban</button>`
          }
          ${verified ? '' : `<button class="approve" onclick="adminVerifyUser('${email}')">ðŸ”’ VerificÄƒ</button>`}
          <button class="delete" onclick="deleteUser('${email}')">ðŸ—‘ï¸ Delete</button>
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
      <p>ðŸ“º Total Canale</p>
    </div>
    <div class="admin-stat-card">
      <h4>${users.length}</h4>
      <p>ðŸ‘¥ Utilizatori</p>
    </div>
    <div class="admin-stat-card">
      <h4>${userChannels.length}</h4>
      <p>â³ Canale User</p>
    </div>
    <div class="admin-stat-card">
      <h4>${Object.keys(categoryStats).length}</h4>
      <p>ðŸ“‚ Categorii</p>
    </div>
  `;
  
  html += '</div>';
  
  // Category breakdown
  html += '<h4>ðŸ“Š Canale pe Categorii:</h4>';
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
  
  alert('âœ… SetÄƒrile au fost salvate!');
}

function showUserStats() {
  loadAdminStats();
  showAdminPanel();
  showAdminTab('stats');
}

function approveChannel(title) {
  // Implementation for approving channels
  alert(`âœ… Canalul "${title}" a fost aprobat!`);
  loadAdminChannels();
}

function rejectChannel(title) {
  if (confirm(`âŒ Sigur vrei sÄƒ respingi canalul "${title}"?`)) {
    alert(`âŒ Canalul "${title}" a fost respins!`);
    loadAdminChannels();
  }
}

function editChannel(title) {
  alert(`âœï¸ Editarea canalului "${title}" va fi implementatÄƒ Ã®n curÃ¢nd!`);
}

function deleteChannel(title) {
  if (confirm(`ðŸ—‘ï¸ Sigur vrei sÄƒ È™tergi canalul "${title}"?`)) {
    alert(`ðŸ—‘ï¸ Canalul "${title}" a fost È™ters!`);
    loadAdminChannels();
  }
}

function banUser(email) {
  if (confirm(`ðŸš« Sigur vrei sÄƒ blochezi utilizatorul "${email}"?`)) {
    localStorage.setItem('banned_' + email, 'true');
    alert(`ðŸš« Utilizatorul "${email}" a fost blocat!`);
    loadAdminUsers();
  }
}

function unbanUser(email) {
  localStorage.removeItem('banned_' + email);
  alert(`ðŸ”“ Utilizatorul "${email}" a fost deblocat!`);
  loadAdminUsers();
}

function deleteUser(email) {
  if (confirm(`ðŸ—‘ï¸ Sigur vrei sÄƒ È™tergi utilizatorul "${email}"? AceastÄƒ acÈ›iune nu poate fi anulatÄƒ!`)) {
    localStorage.removeItem('user_' + email);
    localStorage.removeItem('banned_' + email);
    localStorage.removeItem('user_meta_' + email);
    alert(`ðŸ—‘ï¸ Utilizatorul "${email}" a fost È™ters!`);
    loadAdminUsers();
  }
}

// Admin add-user modal functions
function showAddUserModal() {
  if (localStorage.getItem('is_admin') !== 'true') return alert('Acces restricÈ›ionat.');
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
  if (!email || !pass) return alert('CompleteazÄƒ toate cÃ¢mpurile!');
  if (!validateEmail(email)) return alert('Email invalid!');
  if (localStorage.getItem('user_' + email)) return alert('Emailul existÄƒ deja!');

  // For ANY email, ask for confirmation by typing the email exactly
  window._pendingAdminNewUser = { email, pass };
  // show confirmation modal
  document.getElementById('confirm-email-text').textContent = `ConfirmÄƒ cÄƒ adresa ${email} este un email real È™i valid. Scrie adresa completÄƒ mai jos pentru a confirma:`;
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
  if (typed !== pending.email) return alert('Confirmarea nu s-a potrivit. Introdu adresa exactÄƒ pentru a confirma cÄƒ este un email real.');

  // create verified user
  localStorage.setItem('user_' + pending.email, pending.pass);
  const meta = { verified: true, verifiedAt: new Date().toISOString(), verifiedByAdmin: true };
  localStorage.setItem('user_meta_' + pending.email, JSON.stringify(meta));
  alert(`âœ… Utilizatorul ${pending.email} a fost creat È™i verificat ca email real.`);
  window._pendingAdminNewUser = null;
  closeConfirmEmailModal();
  closeAddUserModal();
  loadAdminUsers();
}

function adminVerifyUser(email) {
  if (!confirm(`ðŸ”’ Confirmi cÄƒ utilizatorul ${email} este verificat?`)) return;
  const meta = JSON.parse(localStorage.getItem('user_meta_' + email) || '{}');
  meta.verified = true;
  meta.verifiedAt = new Date().toISOString();
  meta.verifiedByAdmin = true;
  localStorage.setItem('user_meta_' + email, JSON.stringify(meta));
  alert(`ðŸ”’ Utilizatorul ${email} a fost marcat ca verificat.`);
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
  let html = `<h4>ðŸ“º Toate Canalele (${channels.length})</h4>`;
  
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
          <button class="edit" onclick="editChannel('${channel.title}')">âœï¸ Edit</button>
          <button class="delete" onclick="deleteChannel('${channel.title}')">ðŸ—‘ï¸ Delete</button>
        </div>
      </div>
    `;
  });
  
  document.getElementById('admin-channels-list').innerHTML = html;
}

function showPendingChannels() {
  const pendingChannels = JSON.parse(localStorage.getItem('pending_channels') || '[]');
  const userChannels = JSON.parse(localStorage.getItem('user_channels') || '[]');
  
  let html = `<h4>â³ Canale Ã®n AÈ™teptare (${pendingChannels.length + userChannels.length})</h4>`;
  
  [...pendingChannels, ...userChannels].forEach(channel => {
    html += `
      <div class="admin-channel-item pending">
        <div class="admin-item-info">
          <strong>${channel.title}</strong> <small>(by ${channel.owner})</small><br>
          <small>${channel.desc}</small><br>
          <a href="${channel.url}" target="_blank">${channel.url}</a>
        </div>
        <div class="admin-item-actions">
          <button class="approve" onclick="approveChannel('${channel.title}')">âœ… Approve</button>
          <button class="reject" onclick="rejectChannel('${channel.title}')">âŒ Reject</button>
        </div>
      </div>
    `;
  });
  
  if (pendingChannels.length + userChannels.length === 0) {
    html += '<div style="text-align: center; padding: 2rem; color: #666;">Nu existÄƒ canale Ã®n aÈ™teptare.</div>';
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
  document.getElementById('admin-last-click').textContent = localStorage.getItem('admin_last_click') || 'NiciodatÄƒ';
  document.getElementById('admin-most-clicked').textContent = mostClickedChannel || 'Niciunul';
}

// Override channel link clicks to track them
function openChannel(url, title) {
  trackChannelClick(title, url);
  window.open(url, '_blank');
}

// initialize
document.addEventListener('DOMContentLoaded', function() {
  console.log('ðŸŽ¯ DOM loaded, initializing app...'); // Debug
  trackPageView(); // Track page view
  showUser();
  showCategory('all'); // Show all channels on load
  console.log('âœ… App initialized'); // Debug
});

// ===========================================
// ? MULTILINGUAL SYSTEM
// ===========================================

// Func?ia pentru schimbarea limbii
function changeLanguage(lang) {
  setLanguage(lang);
  
  // Actualizeaza valoarea selectorului
  document.getElementById('language-selector').value = lang;
  
  // Reaplica traducerile pentru op?iunile selectorului
  updateLanguageSelectorOptions(lang);
  
  // Reï¿½ncarca canalele pentru a aplica traducerile la categorii
  filterChannels('all');

  console.log('Language changed to:', language);
}

// Func?ia pentru actualizarea op?iunilor selectorului de limba
function updateLanguageSelectorOptions(currentLang) {
  const t = translations[currentLang] || translations['ro'];
  const selector = document.getElementById('language-selector');
  
  if (selector) {
    const options = selector.querySelectorAll('option');
    options.forEach(option => {
      const key = option.getAttribute('data-i18n');
      if (key && t[key]) {
        option.textContent = t[key];
      }
    });
  }
}

// Ini?ializeaza sistemul multilingv la ï¿½ncarcarea paginii
document.addEventListener('DOMContentLoaded', function() {
  // Seteaza limba salvata sau romï¿½na ca default
  const savedLang = getCurrentLanguage();
  const languageSelector = document.getElementById('language-selector');
  
  if (languageSelector) {
    languageSelector.value = savedLang;
    updateLanguageSelectorOptions(savedLang);
  }
  
  // Aplica traducerile
  applyTranslations(savedLang);
  
  console.log('Initialized with language:', currentLanguage);
});

// Func?ie helper pentru ob?inerea textului tradus
function t(key, lang = getCurrentLanguage()) {
  const translations_obj = translations[lang] || translations['ro'];
  return translations_obj[key] || key;
}



// === EDIT CHANNEL FUNCTIONALITY ===
// Global variable to store the channel being edited
let currentEditingChannel = null;

function editChannel(title) {
  const channels = getChannels();
  const channel = channels.find(ch => ch.title === title);
  
  if (!channel) {
    alert('âŒ Canalul nu a fost gÄƒsit!');
    return;
  }
  
  // Store the channel being edited
  currentEditingChannel = channel;
  
  // Populate the edit form
  document.getElementById('edit-channel-title').value = channel.title;
  document.getElementById('edit-channel-desc').value = channel.desc;
  document.getElementById('edit-channel-url').value = channel.url;
  document.getElementById('edit-channel-logo').value = channel.logo || '';
  
  // Select the categories
  const categorySelect = document.getElementById('edit-channel-category');
  for (let option of categorySelect.options) {
    option.selected = channel.category.includes(option.value);
  }
  
  // Show the modal
  document.getElementById('edit-channel-modal').style.display = 'flex';
}

function closeEditChannelModal() {
  document.getElementById('edit-channel-modal').style.display = 'none';
  currentEditingChannel = null;
}

function saveChannelEdit() {
  if (!currentEditingChannel) {
    alert('âŒ Eroare: Nu existÄƒ canal selectat pentru editare!');
    return;
  }
  
  const title = document.getElementById('edit-channel-title').value.trim();
  const desc = document.getElementById('edit-channel-desc').value.trim();
  const url = document.getElementById('edit-channel-url').value.trim();
  const logo = document.getElementById('edit-channel-logo').value.trim();
  const categorySelect = document.getElementById('edit-channel-category');
  const selectedCategories = Array.from(categorySelect.selectedOptions).map(opt => opt.value);
  
  // Validation
  if (!title || !desc || !url) {
    alert('âŒ CompleteazÄƒ toate cÃ¢mpurile obligatorii!');
    return;
  }
  
  if (!url.includes('t.me/')) {
    alert('âŒ Link-ul trebuie sÄƒ fie un link Telegram valid (t.me/...)!');
    return;
  }
  
  if (selectedCategories.length === 0) {
    alert('âŒ SelecteazÄƒ cel puÈ›in o categorie!');
    return;
  }
  
  // Get all channels
  const channels = getChannels();
  const channelIndex = channels.findIndex(ch => ch.title === currentEditingChannel.title);
  
  if (channelIndex === -1) {
    alert('âŒ Canalul nu a fost gÄƒsit Ã®n baza de date!');
    return;
  }
  
  // Update the channel
  channels[channelIndex] = {
    ...channels[channelIndex],
    title: title,
    desc: desc,
    url: url,
    logo: logo || channels[channelIndex].logo,
    category: selectedCategories
  };
  
  // Save to localStorage
  localStorage.setItem('channels', JSON.stringify(channels));
  
  // Close modal and refresh view
  closeEditChannelModal();
  
  // Refresh the channels display
  showCategory(currentCategory || 'all');
  
  // If admin panel is open, refresh it too
  if (document.getElementById('admin-panel').style.display !== 'none') {
    loadAdminChannels();
  }
  
  alert('âœ… Canalul a fost actualizat cu succes!');
}



// === CHANNEL PRIORITY MANAGEMENT ===
// Channel Priority/Featured Management Functions

function toggleChannelPriority(title) {
  const channels = getChannels();
  const channelIndex = channels.findIndex(ch => ch.title === title);
  
  if (channelIndex === -1) {
    alert('âŒ Canalul nu a fost gÄƒsit!');
    return;
  }
  
  const channel = channels[channelIndex];
  const isPriority = channel.priority || false;
  
  // Toggle priority status
  channels[channelIndex].priority = !isPriority;
  channels[channelIndex].priorityDate = new Date().toISOString();
  
  // Save to localStorage
  localStorage.setItem('channels', JSON.stringify(channels));
  
  // Show confirmation
  const status = !isPriority ? 'â­ PRIORITAR' : 'ðŸ“ NORMAL';
  alert(`âœ… Canalul "${title}" este acum ${status}!`);
  
  // Refresh displays
  showCategory(currentCategory || 'all');
  if (document.getElementById('admin-panel').style.display !== 'none') {
    loadAdminChannels();
  }
}

function setChannelPosition(title, position) {
  const channels = getChannels();
  const channelIndex = channels.findIndex(ch => ch.title === title);
  
  if (channelIndex === -1) {
    alert('âŒ Canalul nu a fost gÄƒsit!');
    return;
  }
  
  const validPosition = Math.max(1, Math.min(position, channels.length));
  
  // Set custom position
  channels[channelIndex].customPosition = validPosition;
  channels[channelIndex].positionDate = new Date().toISOString();
  
  // Save to localStorage
  localStorage.setItem('channels', JSON.stringify(channels));
  
  alert(`âœ… Canalul "${title}" va fi afiÈ™at pe poziÈ›ia ${validPosition}!`);
  
  // Refresh displays
  showCategory(currentCategory || 'all');
  if (document.getElementById('admin-panel').style.display !== 'none') {
    loadAdminChannels();
  }
}

function showChannelPositionModal(title) {
  const channels = getChannels();
  const position = prompt(
    `ðŸ”¢ IntroduceÈ›i poziÈ›ia pentru canalul "${title}":\n\n` +
    `PoziÈ›ii disponibile: 1 - ${channels.length}\n` +
    `1 = Prima poziÈ›ie (cel mai vizibil)\n` +
    `${channels.length} = Ultima poziÈ›ie`,
    '1'
  );
  
  if (position === null) return; // Cancel
  
  const numPosition = parseInt(position);
  if (isNaN(numPosition) || numPosition < 1) {
    alert('âŒ IntroduceÈ›i un numÄƒr valid mai mare ca 0!');
    return;
  }
  
  setChannelPosition(title, numPosition);
}

// Enhanced sorting function with priority and custom positions
function getSortedChannels(channels, category) {
  let filtered = channels;
  
  // Filter by category if not 'all'
  if (category !== 'all') {
    filtered = channels.filter(channel => channel.category.includes(category));
  }
  
  // Sort channels with priority system
  return filtered.sort((a, b) => {
    // 1. Priority channels first
    const aPriority = a.priority || false;
    const bPriority = b.priority || false;
    
    if (aPriority && !bPriority) return -1;
    if (!aPriority && bPriority) return 1;
    
    // 2. Custom positions
    const aPos = a.customPosition || 999;
    const bPos = b.customPosition || 999;
    
    if (aPos !== bPos) return aPos - bPos;
    
    // 3. User's own channels first (within same priority/position)
    const logged = localStorage.getItem('logged_user');
    const aOwned = logged && a.owner === logged;
    const bOwned = logged && b.owner === logged;
    
    if (aOwned && !bOwned) return -1;
    if (!aOwned && bOwned) return 1;
    
    // 4. By priority date (newest first)
    if (a.priorityDate && b.priorityDate) {
      return new Date(b.priorityDate) - new Date(a.priorityDate);
    }
    
    // 5. Default: keep original order
    return 0;
  });
}





// === HOMEPAGE FEATURED CHANNELS ===
// HOMEPAGE FEATURED CHANNELS MANAGEMENT

// FuncÈ›ie pentru a obÈ›ine canalele featured pentru prima paginÄƒ
function getHomepageFeaturedChannels() {
  const featuredIds = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  const allChannels = getChannels();
  
  // DacÄƒ nu sunt setate canale featured, returneazÄƒ primele 6
  if (featuredIds.length === 0) {
    return defaultChannels.slice(0, 6);
  }
  
  // ReturneazÄƒ canalele featured Ã®n ordinea setatÄƒ
  const featuredChannels = [];
  for (let id of featuredIds) {
    const channel = allChannels.find(c => c.title === id);
    if (channel) {
      featuredChannels.push(channel);
    }
  }
  
  // DacÄƒ nu avem 6, completeazÄƒ cu alte canale
  if (featuredChannels.length < 6) {
    const remainingChannels = defaultChannels.filter(c => !featuredIds.includes(c.title));
    featuredChannels.push(...remainingChannels.slice(0, 6 - featuredChannels.length));
  }
  
  return featuredChannels.slice(0, 6);
}

// FuncÈ›ie pentru a seta canalele featured pentru prima paginÄƒ
function setHomepageFeaturedChannels(channelTitles) {
  localStorage.setItem('homepage_featured', JSON.stringify(channelTitles));
  // Refresh prima paginÄƒ
  if (currentCategory === 'all') {
    showCategory('all');
  }
}

// FuncÈ›ie pentru admin sÄƒ gestioneze canalele de pe prima paginÄƒ
function showHomepageManager() {
  const allChannels = defaultChannels;
  const currentFeatured = JSON.parse(localStorage.getItem('homepage_featured') || '[]');
  
  if (allChannels.length === 0) {
    alert('âŒ Nu existÄƒ canale disponibile!');
    return;
  }
  
  let modalHTML = `
    <div id="homepage-manager-modal" class="modal" style="display: flex;">
      <div class="modal-content" style="max-width: 600px; width: 90%;">
        <h3>ðŸ  Gestionare Prima PaginÄƒ</h3>
        <p style="color: #666; margin-bottom: 1rem;">SelecteazÄƒ 6 canale care vor apÄƒrea pe prima paginÄƒ (Ã®nainte de login):</p>
        
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
            <h4>â­ Prima PaginÄƒ (${currentFeatured.length}/6):</h4>
            <div id="featured-channels" style="min-height: 300px; border: 1px solid #ddd; padding: 0.5rem; border-radius: 0.5rem; background: #f8f9fa;">
              ${currentFeatured.map((title, index) => {
                const channel = allChannels.find(c => c.title === title);
                return channel ? `
                  <div class="featured-item" data-title="${title}" style="padding: 0.5rem; margin-bottom: 0.5rem; background: white; border-radius: 0.3rem; border-left: 3px solid #4caf50;">
                    <div style="display: flex; justify-content: between; align-items: center;">
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
          <button onclick="closeHomepageManager()" style="background: #95a5a6; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer;">AnuleazÄƒ</button>
          <button onclick="saveHomepageFeatured()" style="background: #4caf50; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer;">ðŸ’¾ SalveazÄƒ</button>
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
    alert('âŒ Canalul este deja pe prima paginÄƒ!');
    return;
  }
  
  if (currentFeatured.length >= 6) {
    alert('âŒ PoÈ›i avea maximum 6 canale pe prima paginÄƒ!');
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
  showCategory('all'); // Refresh prima paginÄƒ
  alert('âœ… Prima paginÄƒ a fost actualizatÄƒ cu success!');
}

function closeHomepageManager() {
  const modal = document.getElementById('homepage-manager-modal');
  if (modal) {
    modal.remove();
  }
}

/ /   H O M E P A G E   F E A T U R E D   C H A N N E L S   M A N A G E M E N T 
 
 
 
 / /   F u n c � : i e   p e n t r u   a   o b � : i n e   c a n a l e l e   f e a t u r e d   p e n t r u   p r i m a   p a g i n � �
 
 f u n c t i o n   g e t H o m e p a g e F e a t u r e d C h a n n e l s ( )   { 
 
     c o n s t   f e a t u r e d I d s   =   J S O N . p a r s e ( l o c a l S t o r a g e . g e t I t e m ( ' h o m e p a g e _ f e a t u r e d ' )   | |   ' [ ] ' ) ; 
 
     c o n s t   a l l C h a n n e l s   =   g e t C h a n n e l s ( ) ; 
 
     
 
     / /   D a c � �  n u   s u n t   s e t a t e   c a n a l e   f e a t u r e d ,   r e t u r n e a z � �  p r i m e l e   6 
 
     i f   ( f e a t u r e d I d s . l e n g t h   = = =   0 )   { 
 
         r e t u r n   a l l C h a n n e l s . s l i c e ( 0 ,   6 ) ; 
 
     } 
 
     
 
     / /   R e t u r n e a z � �  c a n a l e l e   f e a t u r e d   � � n   o r d i n e a   s e t a t � �
 
     c o n s t   f e a t u r e d C h a n n e l s   =   [ ] ; 
 
     f o r   ( l e t   i d   o f   f e a t u r e d I d s )   { 
 
         c o n s t   c h a n n e l   =   a l l C h a n n e l s . f i n d ( c   = >   c . t i t l e   = = =   i d ) ; 
 
         i f   ( c h a n n e l )   { 
 
             f e a t u r e d C h a n n e l s . p u s h ( c h a n n e l ) ; 
 
         } 
 
     } 
 
     
 
     / /   D a c � �  n u   a v e m   6 ,   c o m p l e t e a z � �  c u   a l t e   c a n a l e 
 
     i f   ( f e a t u r e d C h a n n e l s . l e n g t h   <   6 )   { 
 
         c o n s t   r e m a i n i n g C h a n n e l s   =   a l l C h a n n e l s . f i l t e r ( c   = >   ! f e a t u r e d I d s . i n c l u d e s ( c . t i t l e ) ) ; 
 
         f e a t u r e d C h a n n e l s . p u s h ( . . . r e m a i n i n g C h a n n e l s . s l i c e ( 0 ,   6   -   f e a t u r e d C h a n n e l s . l e n g t h ) ) ; 
 
     } 
 
     
 
     r e t u r n   f e a t u r e d C h a n n e l s . s l i c e ( 0 ,   6 ) ; 
 
 } 
 
 
 
 / /   F u n c � : i e   p e n t r u   a   s e t a   c a n a l e l e   f e a t u r e d   p e n t r u   p r i m a   p a g i n � �
 
 f u n c t i o n   s e t H o m e p a g e F e a t u r e d C h a n n e l s ( c h a n n e l T i t l e s )   { 
 
     l o c a l S t o r a g e . s e t I t e m ( ' h o m e p a g e _ f e a t u r e d ' ,   J S O N . s t r i n g i f y ( c h a n n e l T i t l e s ) ) ; 
 
     / /   R e f r e s h   p r i m a   p a g i n � �
 
     i f   ( c u r r e n t C a t e g o r y   = = =   ' a l l ' )   { 
 
         s h o w C a t e g o r y ( ' a l l ' ) ; 
 
     } 
 
 } 
 
 
 
 / /   F u n c � : i e   p e n t r u   a d m i n   s � �  g e s t i o n e z e   c a n a l e l e   d e   p e   p r i m a   p a g i n � �
 
 f u n c t i o n   s h o w H o m e p a g e M a n a g e r ( )   { 
 
     c o n s t   a l l C h a n n e l s   =   g e t C h a n n e l s ( ) ; 
 
     c o n s t   c u r r e n t F e a t u r e d   =   J S O N . p a r s e ( l o c a l S t o r a g e . g e t I t e m ( ' h o m e p a g e _ f e a t u r e d ' )   | |   ' [ ] ' ) ; 
 
     
 
     i f   ( a l l C h a n n e l s . l e n g t h   = = =   0 )   { 
 
         a l e r t ( ' � � R  N u   e x i s t � �  c a n a l e   d i s p o n i b i l e ! ' ) ; 
 
         r e t u r n ; 
 
     } 
 
     
 
     l e t   m o d a l H T M L   =   ` 
 
         < d i v   i d = " h o m e p a g e - m a n a g e r - m o d a l "   c l a s s = " m o d a l "   s t y l e = " d i s p l a y :   f l e x ; " > 
 
             < d i v   c l a s s = " m o d a l - c o n t e n t "   s t y l e = " m a x - w i d t h :   6 0 0 p x ;   w i d t h :   9 0 % ; " > 
 
                 < h 3 > � x� �   G e s t i o n a r e   P r i m a   P a g i n � �< / h 3 > 
 
                 < p   s t y l e = " c o l o r :   # 6 6 6 ;   m a r g i n - b o t t o m :   1 r e m ; " > S e l e c t e a z � �  6   c a n a l e   c a r e   v o r   a p � �r e a   p e   p r i m a   p a g i n � �  ( � � n a i n t e   d e   l o g i n ) : < / p > 
 
                 
 
                 < d i v   s t y l e = " d i s p l a y :   g r i d ;   g r i d - t e m p l a t e - c o l u m n s :   1 f r   1 f r ;   g a p :   1 r e m ;   m a r g i n - b o t t o m :   1 r e m ; " > 
 
                     < d i v > 
 
                         < h 4 > � x 9   C a n a l e   D i s p o n i b i l e : < / h 4 > 
 
                         < d i v   i d = " a v a i l a b l e - c h a n n e l s "   s t y l e = " m a x - h e i g h t :   3 0 0 p x ;   o v e r f l o w - y :   a u t o ;   b o r d e r :   1 p x   s o l i d   # d d d ;   p a d d i n g :   0 . 5 r e m ;   b o r d e r - r a d i u s :   0 . 5 r e m ; " > 
 
                             $ { a l l C h a n n e l s . m a p ( c h a n n e l   = >   ` 
 
                                 < d i v   c l a s s = " c h a n n e l - s e l e c t - i t e m "   d a t a - t i t l e = " $ { c h a n n e l . t i t l e } "   s t y l e = " p a d d i n g :   0 . 5 r e m ;   b o r d e r - b o t t o m :   1 p x   s o l i d   # e e e ;   c u r s o r :   p o i n t e r ;   $ { c u r r e n t F e a t u r e d . i n c l u d e s ( c h a n n e l . t i t l e )   ?   ' b a c k g r o u n d :   # e 3 f 2 f d ; '   :   ' ' } " > 
 
                                     < s t r o n g > $ { c h a n n e l . t i t l e } < / s t r o n g > < b r > 
 
                                     < s m a l l   s t y l e = " c o l o r :   # 6 6 6 ; " > $ { c h a n n e l . d e s c } < / s m a l l > 
 
                                 < / d i v > 
 
                             ` ) . j o i n ( ' ' ) } 
 
                         < / d i v > 
 
                     < / d i v > 
 
                     
 
                     < d i v > 
 
                         < h 4 > � � �   P r i m a   P a g i n � �  ( $ { c u r r e n t F e a t u r e d . l e n g t h } / 6 ) : < / h 4 > 
 
                         < d i v   i d = " f e a t u r e d - c h a n n e l s "   s t y l e = " m i n - h e i g h t :   3 0 0 p x ;   b o r d e r :   1 p x   s o l i d   # d d d ;   p a d d i n g :   0 . 5 r e m ;   b o r d e r - r a d i u s :   0 . 5 r e m ;   b a c k g r o u n d :   # f 8 f 9 f a ; " > 
 
                             $ { c u r r e n t F e a t u r e d . m a p ( ( t i t l e ,   i n d e x )   = >   { 
 
                                 c o n s t   c h a n n e l   =   a l l C h a n n e l s . f i n d ( c   = >   c . t i t l e   = = =   t i t l e ) ; 
 
                                 r e t u r n   c h a n n e l   ?   ` 
 
                                     < d i v   c l a s s = " f e a t u r e d - i t e m "   d a t a - t i t l e = " $ { t i t l e } "   s t y l e = " p a d d i n g :   0 . 5 r e m ;   m a r g i n - b o t t o m :   0 . 5 r e m ;   b a c k g r o u n d :   w h i t e ;   b o r d e r - r a d i u s :   0 . 3 r e m ;   b o r d e r - l e f t :   3 p x   s o l i d   # 4 c a f 5 0 ; " > 
 
                                         < d i v   s t y l e = " d i s p l a y :   f l e x ;   j u s t i f y - c o n t e n t :   b e t w e e n ;   a l i g n - i t e m s :   c e n t e r ; " > 
 
                                             < d i v   s t y l e = " f l e x :   1 ; " > 
 
                                                 < s t r o n g > $ { i n d e x   +   1 } .   $ { c h a n n e l . t i t l e } < / s t r o n g > < b r > 
 
                                                 < s m a l l   s t y l e = " c o l o r :   # 6 6 6 ; " > $ { c h a n n e l . d e s c } < / s m a l l > 
 
                                             < / d i v > 
 
                                             < b u t t o n   o n c l i c k = " r e m o v e F e a t u r e d C h a n n e l ( ' $ { t i t l e } ' ) "   s t y l e = " b a c k g r o u n d :   # f 4 4 3 3 6 ;   c o l o r :   w h i t e ;   b o r d e r :   n o n e ;   p a d d i n g :   0 . 2 r e m   0 . 5 r e m ;   b o r d e r - r a d i u s :   0 . 2 r e m ;   c u r s o r :   p o i n t e r ; " > � S" < / b u t t o n > 
 
                                         < / d i v > 
 
                                     < / d i v > 
 
                                 `   :   ' ' ; 
 
                             } ) . j o i n ( ' ' ) } 
 
                         < / d i v > 
 
                     < / d i v > 
 
                 < / d i v > 
 
                 
 
                 < d i v   s t y l e = " d i s p l a y :   f l e x ;   g a p :   0 . 5 r e m ;   j u s t i f y - c o n t e n t :   f l e x - e n d ; " > 
 
                     < b u t t o n   o n c l i c k = " c l o s e H o m e p a g e M a n a g e r ( ) "   s t y l e = " b a c k g r o u n d :   # 9 5 a 5 a 6 ;   c o l o r :   w h i t e ;   p a d d i n g :   0 . 8 r e m   1 . 5 r e m ;   b o r d e r :   n o n e ;   b o r d e r - r a d i u s :   0 . 5 r e m ;   c u r s o r :   p o i n t e r ; " > A n u l e a z � �< / b u t t o n > 
 
                     < b u t t o n   o n c l i c k = " s a v e H o m e p a g e F e a t u r e d ( ) "   s t y l e = " b a c k g r o u n d :   # 4 c a f 5 0 ;   c o l o r :   w h i t e ;   p a d d i n g :   0 . 8 r e m   1 . 5 r e m ;   b o r d e r :   n o n e ;   b o r d e r - r a d i u s :   0 . 5 r e m ;   c u r s o r :   p o i n t e r ; " > � x �   S a l v e a z � �< / b u t t o n > 
 
                 < / d i v > 
 
             < / d i v > 
 
         < / d i v > 
 
     ` ; 
 
     
 
     / /   R e m o v e   e x i s t i n g   m o d a l   i f   a n y 
 
     c o n s t   e x i s t i n g M o d a l   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' h o m e p a g e - m a n a g e r - m o d a l ' ) ; 
 
     i f   ( e x i s t i n g M o d a l )   { 
 
         e x i s t i n g M o d a l . r e m o v e ( ) ; 
 
     } 
 
     
 
     / /   A d d   m o d a l   t o   b o d y 
 
     d o c u m e n t . b o d y . i n s e r t A d j a c e n t H T M L ( ' b e f o r e e n d ' ,   m o d a l H T M L ) ; 
 
     
 
     / /   A d d   c l i c k   h a n d l e r s   f o r   a v a i l a b l e   c h a n n e l s 
 
     d o c u m e n t . q u e r y S e l e c t o r A l l ( ' . c h a n n e l - s e l e c t - i t e m ' ) . f o r E a c h ( i t e m   = >   { 
 
         i t e m . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   f u n c t i o n ( )   { 
 
             c o n s t   t i t l e   =   t h i s . d a t a s e t . t i t l e ; 
 
             a d d T o F e a t u r e d ( t i t l e ) ; 
 
         } ) ; 
 
     } ) ; 
 
 } 
 
 
 
 f u n c t i o n   a d d T o F e a t u r e d ( t i t l e )   { 
 
     c o n s t   c u r r e n t F e a t u r e d   =   J S O N . p a r s e ( l o c a l S t o r a g e . g e t I t e m ( ' h o m e p a g e _ f e a t u r e d ' )   | |   ' [ ] ' ) ; 
 
     
 
     i f   ( c u r r e n t F e a t u r e d . i n c l u d e s ( t i t l e ) )   { 
 
         a l e r t ( ' � � R  C a n a l u l   e s t e   d e j a   p e   p r i m a   p a g i n � �! ' ) ; 
 
         r e t u r n ; 
 
     } 
 
     
 
     i f   ( c u r r e n t F e a t u r e d . l e n g t h   > =   6 )   { 
 
         a l e r t ( ' � � R  P o � : i   a v e a   m a x i m u m   6   c a n a l e   p e   p r i m a   p a g i n � �! ' ) ; 
 
         r e t u r n ; 
 
     } 
 
     
 
     c u r r e n t F e a t u r e d . p u s h ( t i t l e ) ; 
 
     l o c a l S t o r a g e . s e t I t e m ( ' h o m e p a g e _ f e a t u r e d ' ,   J S O N . s t r i n g i f y ( c u r r e n t F e a t u r e d ) ) ; 
 
     
 
     / /   R e f r e s h   m o d a l 
 
     s h o w H o m e p a g e M a n a g e r ( ) ; 
 
 } 
 
 
 
 f u n c t i o n   r e m o v e F e a t u r e d C h a n n e l ( t i t l e )   { 
 
     l e t   c u r r e n t F e a t u r e d   =   J S O N . p a r s e ( l o c a l S t o r a g e . g e t I t e m ( ' h o m e p a g e _ f e a t u r e d ' )   | |   ' [ ] ' ) ; 
 
     c u r r e n t F e a t u r e d   =   c u r r e n t F e a t u r e d . f i l t e r ( t   = >   t   ! = =   t i t l e ) ; 
 
     l o c a l S t o r a g e . s e t I t e m ( ' h o m e p a g e _ f e a t u r e d ' ,   J S O N . s t r i n g i f y ( c u r r e n t F e a t u r e d ) ) ; 
 
     
 
     / /   R e f r e s h   m o d a l 
 
     s h o w H o m e p a g e M a n a g e r ( ) ; 
 
 } 
 
 
 
 f u n c t i o n   s a v e H o m e p a g e F e a t u r e d ( )   { 
 
     c l o s e H o m e p a g e M a n a g e r ( ) ; 
 
     s h o w C a t e g o r y ( ' a l l ' ) ;   / /   R e f r e s h   p r i m a   p a g i n � �
 
     a l e r t ( ' � S&   P r i m a   p a g i n � �  a   f o s t   a c t u a l i z a t � �  c u   s u c c e s s ! ' ) ; 
 
 } 
 
 
 
 f u n c t i o n   c l o s e H o m e p a g e M a n a g e r ( )   { 
 
     c o n s t   m o d a l   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' h o m e p a g e - m a n a g e r - m o d a l ' ) ; 
 
     i f   ( m o d a l )   { 
 
         m o d a l . r e m o v e ( ) ; 
 
     } 
 
 } 
 
 