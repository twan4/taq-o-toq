export const AVAILABLE_CATEGORIES = [
  // --- هونەر و وێژە (Art & Literature) ---
  { id: 'cat1', name: 'شاعیرانی کورد', englishName: 'Kurdish Poets', icon: './images/Kurdish Poets.jpg', group: 'هونەر و وێژە' },
  { id: 'cat2', name: 'زمانی کوردی', englishName: 'Kurdish Language', icon: './images/Kurdish Language.jpg', group: 'هونەر و وێژە' },
  { id: 'cat3', name: 'پەندی پێشینیان', englishName: 'Proverbs', icon: './images/Kurdish Proverbs & Riddles.jpg', group: 'هونەر و وێژە' },
  { id: 'cat28', name: 'وێنەکێشان', englishName: 'Drawing', icon: './images/Drawing.jpg', group: 'هونەر و وێژە' },
  { id: 'cat26', name: 'مەتەڵ', englishName: 'Riddles', icon: './images/Kurdish Proverbs & Riddles.jpg', group: 'هونەر و وێژە' },

  // --- مێژوو و جوگرافیا (History & Geography) ---
  { id: 'cat6', name: 'مێژووی گشتی', englishName: 'General History', icon: './images/General History.jpg', group: 'مێژوو و جوگرافیا' },
  { id: 'cat21', name: 'جەنگی جیهانی', englishName: 'World War', icon: './images/Worldwar.jpg', group: 'مێژوو و جوگرافیا' },
  { id: 'cat22', name: 'جوگرافیا', englishName: 'Geography', icon: './images/Geography.jpg', group: 'مێژوو و جوگرافیا' },
  { id: 'cat4', name: 'شوێنەوار', englishName: 'Locations', icon: './images/Kurdish Locations.jpg', group: 'مێژوو و جوگرافیا' },
  { id: 'cat17', name: 'وڵاتان', englishName: 'Countries', icon: './images/Countries.jpg', group: 'مێژوو و جوگرافیا' },
  { id: 'cat20', name: 'پایتەختەکان', englishName: 'Capitals', icon: './images/Capitals.jpg', group: 'مێژوو و جوگرافیا' },
  { id: 'cat19', name: 'ئاڵاکان', englishName: 'Flags', icon: './images/flags.jpg', group: 'مێژوو و جوگرافیا' },
  { id: 'cat23', name: 'دۆزینەوەی ئاڵا', englishName: 'Find the Flag', icon: './images/Guess The Flag.jpg', group: 'مێژوو و جوگرافیا' },

  // --- زانست و تەکنەلۆژیا (Science & Tech) ---
  { id: 'cat7', name: 'زانیاری گشتی', englishName: 'General Knowledge', icon: './images/General Knowledge.jpg', group: 'زانست و تەکنەلۆژیا' },
  { id: 'cat8', name: 'تەکنەلۆژیا', englishName: 'Technology', icon: './images/Technology.jpg', group: 'زانست و تەکنەلۆژیا' },
  { id: 'cat71', name: 'ئەندازیاری نەرمەکاڵا', englishName: 'Software Engineering', icon: './images/software_engineering.jpg', group: 'زانست و تەکنەلۆژیا' },

  // --- پزیشکی و تەندروستی (Medicine & Health) ---
  { id: 'cat11', name: 'پزیشکی ددان', englishName: 'Dentistry', icon: './images/Dentistry.jpg', group: 'پزیشکی و تەندروستی' },
  { id: 'cat12', name: 'دەرمانسازی', englishName: 'Pharmacy', icon: './images/Pharmacy.jpg', group: 'پزیشکی و تەندروستی' },
  { id: 'cat13', name: 'پزیشکی گشتی', englishName: 'General Medicine', icon: './images/General Medicine.jpg', group: 'پزیشکی و تەندروستی' },
  { id: 'cat72', name: 'لەشجوانی', englishName: 'Bodybuilding', icon: './images/bodybuilding.jpg', group: 'پزیشکی و تەندروستی' },

  // --- ئایین (Religion) ---
  { id: 'cat15', name: 'چیڕۆکی پێغەمبەران', englishName: 'Stories of the Prophets', icon: './images/Stories of the Prophets.jpg', group: 'ئایین' },
  { id: 'cat16', name: 'واتاکانی قورئان', englishName: 'Meaning of the Quran', icon: './images/Meaning of the Quran.jpg', group: 'ئایین' },

  // --- وەرزش (Sports) ---
  { id: 'cat25', name: 'تۆپی پێ', englishName: 'Football - General', icon: './images/football_general.jpg', group: 'وەرزش' },
  { id: 'cat36', name: 'کریستیانۆ ڕۆناڵدۆ', englishName: 'Cristiano Ronaldo', icon: './images/Cristiano Ronaldo.jpg', group: 'وەرزش' },
  { id: 'cat37', name: 'مێسی', englishName: 'Messi', icon: './images/Messi.jpg', group: 'وەرزش' },
  { id: 'cat38', name: 'یاریزانە لاوەکان', englishName: 'Young Players', icon: './images/Young Players.jpg', group: 'وەرزش' },
  { id: 'cat39', name: 'ئێل کلاسیکۆ', englishName: 'El Clásico', icon: './images/el_clasico.jpg', group: 'وەرزش' },
  { id: 'cat40', name: 'مۆندیال', englishName: 'World Cup', icon: './images/World Cup.jpg', group: 'وەرزش' },
  { id: 'cat41', name: 'ژمارەی یاریزانان', englishName: 'Player Numbers', icon: './images/Player Numbers.jpg', group: 'وەرزش' },
  { id: 'cat35', name: 'تۆپەکە لە کوێیە؟', englishName: 'Where is the Ball?', icon: '🥅', group: 'وەرزش' },

  // --- مۆسیقا (Music) ---
  { id: 'cat32', name: 'گۆرانی کوردی', englishName: 'Kurdish Music', icon: './images/Kurdish Music.jpg', group: 'مۆسیقا' },
  { id: 'cat33', name: 'گۆرانی ئینگلیزی', englishName: 'English Music', icon: './images/English Music.jpg', group: 'مۆسیقا' },
  { id: 'cat34', name: 'گۆرانیبێژان', englishName: 'Singers', icon: './images/singers.jpg', group: 'مۆسیقا' },

  // --- ئەنیمێ (Anime) ---
  { id: 'cat24', name: 'ئەنیمێ', englishName: 'Anime - General', icon: './images/anime_general.jpg', group: 'ئەنیمێ' },
  { id: 'cat42', name: 'نارۆتۆ', englishName: 'Naruto', icon: './images/Naruto.jpg', group: 'ئەنیمێ' },
  { id: 'cat43', name: 'وه‌ن پێس', englishName: 'One Piece', icon: './images/One Piece.jpg', group: 'ئەنیمێ' },
  { id: 'cat44', name: 'هەنتەر', englishName: 'Hunter x Hunter', icon: './images/HXH.jpg', group: 'ئەنیمێ' },
  { id: 'cat45', name: 'هێرش بۆ سەر زەبەلاحەکان', englishName: 'Attack on Titan', icon: './images/Attack on Titan.jpg', group: 'ئەنیمێ' },
  { id: 'cat46', name: 'دڕاگۆن بۆڵ', englishName: 'Dragon Ball', icon: './images/Dragon Ball.jpg', group: 'ئەنیمێ' },
  { id: 'cat47', name: 'دەفتەری مەرگ', englishName: 'Death Note', icon: './images/Death Note.jpg', group: 'ئەنیمێ' },

  // --- سینەما و زنجیرەکان (Cinema & TV) ---
  { id: 'cat50', name: 'فیلمی ترسناک', englishName: 'Horror Movies', icon: './images/horror_movies.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat51', name: 'فیلمە کلاسیکەکان', englishName: 'Classic Movies', icon: './images/classic_movies.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat68', name: 'بۆڵیوود', englishName: 'Bollywood', icon: './images/bollywood.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat66', name: 'جیهانی DC', englishName: 'DC Universe', icon: './images/dc_universe.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat67', name: 'جیهانی Marvel', englishName: 'Marvel Universe', icon: './images/marvel_universe.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat64', name: 'شای ئەنگوستیلەکان', englishName: 'Lord of the Rings', icon: './images/Lord of the Rings.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat65', name: 'هاری پۆتەر', englishName: 'Harry Potter', icon: './images/Harry Potter.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat69', name: 'پۆستەری فیلمەکان', englishName: 'Movie Posters', icon: './images/movie_posters.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat70', name: 'گرتەی ڤیدیۆیی', englishName: 'Video Clips', icon: '🎬', group: 'سینەما و زنجیرەکان' },
  { id: 'cat48', name: 'فرێندز', englishName: 'Friends', icon: './images/Friends.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat49', name: 'سۆپڕانۆس', englishName: 'The Sopranos', icon: './images/Sopranos.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat52', name: 'پیکی بڵایندەرز', englishName: 'Peaky Blinders', icon: './images/Peaky Blinders.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat53', name: 'دێکستەر', englishName: 'Dexter', icon: './images/Dexter.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat54', name: 'پریزن برێک', englishName: 'Prison Break', icon: './images/Prison Break.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat55', name: 'برێکینگ باد', englishName: 'Breaking Bad', icon: './images/Breaking Bad.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat56', name: 'خۆڵی ئەژدیها', englishName: 'House of the Dragon', icon: './images/House of the Dragon.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat57', name: 'گەمەی تەختەکان', englishName: 'Game of Thrones', icon: './images/Game of Thrones.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat58', name: 'زە بۆیز', englishName: 'The Boys', icon: './images/The Boys.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat59', name: 'شتە نامۆکان', englishName: 'Stranger Things', icon: './images/Stranger Things.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat60', name: 'تاریک', englishName: 'Dark', icon: './images/Dark.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat61', name: 'فرۆم', englishName: 'From', icon: './images/From.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat62', name: 'ڤایکینگەکان', englishName: 'Vikings', icon: './images/Vikings.jpg', group: 'سینەما و زنجیرەکان' },
  { id: 'cat63', name: 'یاری دەنکە ماسی', englishName: 'Squid Game', icon: './images/Squid Game.jpg', group: 'سینەما و زنجیرەکان' },

  // --- جۆراوجۆر (Miscellaneous) ---
  { id: 'cat9', name: 'ئاژەڵان', englishName: 'Animals', icon: './images/Animals.jpg', group: 'جۆراوجۆر' },
  { id: 'cat10', name: 'لۆگۆکان', englishName: 'Logos', icon: './images/Logos & Brands.jpg', group: 'جۆراوجۆر' },
  { id: 'cat14', name: 'ئۆتۆمبێل', englishName: 'Automotive', icon: '🚗', group: 'جۆراوجۆر' },
  { id: 'cat18', name: 'سەرۆکەکان', englishName: 'Head of States', icon: './images/Head of states.jpg', group: 'جۆراوجۆر' },
  { id: 'cat29', name: 'بڕاندە جیهانییەکان', englishName: 'Global Brands', icon: './images/Global Brands.jpg', group: 'جۆراوجۆر' },
  { id: 'cat27', name: 'ڕەنگی وێنەکە', englishName: 'Color of the Image', icon: './images/Color of the Image.jpg', group: 'جۆراوجۆر' },
  { id: 'cat5', name: 'جیهانی کاتژمێر', englishName: 'World of Clocks', icon: './images/World of Clocks.jpg', group: 'جۆراوجۆر' },
  { id: 'cat30', name: 'تەنها کچان', englishName: 'Girls Only', icon: './images/Girls Only.jpg', group: 'جۆراوجۆر' },
  { id: 'cat31', name: 'مکیاج', englishName: 'Makeup', icon: './images/Makeup.jpg', group: 'جۆراوجۆر' }
,
  {
    id: 'cat73',
    name: 'خواردنەکان',
    englishName: 'Food',
    icon: '🍔',
    group: 'جۆراوجۆر'
  }
];
