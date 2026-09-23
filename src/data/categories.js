export const AVAILABLE_CATEGORIES = [
  // --- هونەر و وێژە (Art & Literature) ---
  { id: 'cat1', name: 'شاعیرانی کورد', englishName: 'Kurdish Poets', icon: '📝', group: 'هونەر و وێژە' },
  { id: 'cat2', name: 'زمانی کوردی', englishName: 'Kurdish Language', icon: '📚', group: 'هونەر و وێژە' },
  { id: 'cat3', name: 'پەندی پێشینیان', englishName: 'Proverbs', icon: '🗣️', group: 'هونەر و وێژە' },
  { id: 'cat28', name: 'وێنەکێشان', englishName: 'Drawing', icon: '🖌️', group: 'هونەر و وێژە' },
  { id: 'cat26', name: 'مەتەڵ', englishName: 'Riddles', icon: '❓', group: 'هونەر و وێژە' },

  // --- مێژوو و جوگرافیا (History & Geography) ---
  { id: 'cat6', name: 'مێژووی گشتی', englishName: 'General History', icon: '📜', group: 'مێژوو و جوگرافیا' },
  { id: 'cat21', name: 'جەنگی جیهانی', englishName: 'World War', icon: '⚔️', group: 'مێژوو و جوگرافیا' },
  { id: 'cat22', name: 'جوگرافیا', englishName: 'Geography', icon: '🌍', group: 'مێژوو و جوگرافیا' },
  { id: 'cat4', name: 'شوێنەوار', englishName: 'Locations', icon: '🏛️', group: 'مێژوو و جوگرافیا' },
  { id: 'cat17', name: 'وڵاتان', englishName: 'Countries', icon: '🗺️', group: 'مێژوو و جوگرافیا' },
  { id: 'cat20', name: 'پایتەختەکان', englishName: 'Capitals', icon: '🏙️', group: 'مێژوو و جوگرافیا' },
  { id: 'cat19', name: 'ئاڵاکان', englishName: 'Flags', icon: '🚩', group: 'مێژوو و جوگرافیا' },
  { id: 'cat23', name: 'دۆزینەوەی ئاڵا', englishName: 'Find the Flag', icon: '🎌', group: 'مێژوو و جوگرافیا' },

  // --- زانست و تەکنەلۆژیا (Science & Tech) ---
  { id: 'cat7', name: 'زانیاری گشتی', englishName: 'General Knowledge', icon: '🧠', group: 'زانست و تەکنەلۆژیا' },
  { id: 'cat8', name: 'تەکنەلۆژیا', englishName: 'Technology', icon: '💻', group: 'زانست و تەکنەلۆژیا' },
  { id: 'cat71', name: 'ئەندازیاری نەرمەکاڵا', englishName: 'Software Engineering', icon: '👨‍💻', group: 'زانست و تەکنەلۆژیا' },

  // --- پزیشکی و تەندروستی (Medicine & Health) ---
  { id: 'cat11', name: 'پزیشکی ددان', englishName: 'Dentistry', icon: '🦷', group: 'پزیشکی و تەندروستی' },
  { id: 'cat12', name: 'دەرمانسازی', englishName: 'Pharmacy', icon: '💊', group: 'پزیشکی و تەندروستی' },
  { id: 'cat13', name: 'پزیشکی گشتی', englishName: 'General Medicine', icon: '⚕️', group: 'پزیشکی و تەندروستی' },
  { id: 'cat72', name: 'لەشجوانی', englishName: 'Bodybuilding', icon: '💪', group: 'پزیشکی و تەندروستی' },

  // --- ئایین (Religion) ---
  { id: 'cat15', name: 'چیڕۆکی پێغەمبەران', englishName: 'Stories of the Prophets', icon: '🕌', group: 'ئایین' },
  { id: 'cat16', name: 'واتاکانی قورئان', englishName: 'Meaning of the Quran', icon: '📖', group: 'ئایین' },

  // --- وەرزش (Sports) ---
  { id: 'cat25', name: 'تۆپی پێ', englishName: 'Football - General', icon: '⚽', group: 'وەرزش' },
  { id: 'cat36', name: 'کریستیانۆ ڕۆناڵدۆ', englishName: 'Cristiano Ronaldo', icon: '🇵🇹', group: 'وەرزش' },
  { id: 'cat37', name: 'مێسی', englishName: 'Messi', icon: '🇦🇷', group: 'وەرزش' },
  { id: 'cat38', name: 'یاریزانە لاوەکان', englishName: 'Young Players', icon: '👦', group: 'وەرزش' },
  { id: 'cat39', name: 'ئێل کلاسیکۆ', englishName: 'El Clásico', icon: '🇪🇸', group: 'وەرزش' },
  { id: 'cat40', name: 'مۆندیال', englishName: 'World Cup', icon: '🏆', group: 'وەرزش' },
  { id: 'cat41', name: 'ژمارەی یاریزانان', englishName: 'Player Numbers', icon: '🔢', group: 'وەرزش' },
  { id: 'cat35', name: 'تۆپەکە لە کوێیە؟', englishName: 'Where is the Ball?', icon: '🥅', group: 'وەرزش' },

  // --- مۆسیقا (Music) ---
  { id: 'cat32', name: 'گۆرانی کوردی', englishName: 'Kurdish Music', icon: '🎶', group: 'مۆسیقا' },
  { id: 'cat33', name: 'گۆرانی ئینگلیزی', englishName: 'English Music', icon: '🎵', group: 'مۆسیقا' },
  { id: 'cat34', name: 'گۆرانیبێژان', englishName: 'Singers', icon: '🎤', group: 'مۆسیقا' },

  // --- ئەنیمێ (Anime) ---
  { id: 'cat24', name: 'ئەنیمێ', englishName: 'Anime - General', icon: '⛩️', group: 'ئەنیمێ' },
  { id: 'cat42', name: 'نارۆتۆ', englishName: 'Naruto', icon: '🍥', group: 'ئەنیمێ' },
  { id: 'cat43', name: 'وه‌ن پێس', englishName: 'One Piece', icon: '🏴‍☠️', group: 'ئەنیمێ' },
  { id: 'cat44', name: 'هەنتەر', englishName: 'Hunter x Hunter', icon: '🎣', group: 'ئەنیمێ' },
  { id: 'cat45', name: 'هێرش بۆ سەر زەبەلاحەکان', englishName: 'Attack on Titan', icon: '🗡️', group: 'ئەنیمێ' },
  { id: 'cat46', name: 'دڕاگۆن بۆڵ', englishName: 'Dragon Ball', icon: '🐉', group: 'ئەنیمێ' },
  { id: 'cat47', name: 'دەفتەری مەرگ', englishName: 'Death Note', icon: '📓', group: 'ئەنیمێ' },

  // --- سینەما و زنجیرەکان (Cinema & TV) ---
  { id: 'cat50', name: 'فیلمی ترسناک', englishName: 'Horror Movies', icon: '👻', group: 'سینەما و زنجیرەکان' },
  { id: 'cat51', name: 'فیلمە کلاسیکەکان', englishName: 'Classic Movies', icon: '🎞️', group: 'سینەما و زنجیرەکان' },
  { id: 'cat68', name: 'بۆڵیوود', englishName: 'Bollywood', icon: '💃', group: 'سینەما و زنجیرەکان' },
  { id: 'cat66', name: 'جیهانی DC', englishName: 'DC Universe', icon: '🦇', group: 'سینەما و زنجیرەکان' },
  { id: 'cat67', name: 'جیهانی Marvel', englishName: 'Marvel Universe', icon: '🕷️', group: 'سینەما و زنجیرەکان' },
  { id: 'cat64', name: 'شای ئەنگوستیلەکان', englishName: 'Lord of the Rings', icon: '💍', group: 'سینەما و زنجیرەکان' },
  { id: 'cat65', name: 'هاری پۆتەر', englishName: 'Harry Potter', icon: '⚡', group: 'سینەما و زنجیرەکان' },
  { id: 'cat69', name: 'پۆستەری فیلمەکان', englishName: 'Movie Posters', icon: '🖼️', group: 'سینەما و زنجیرەکان' },
  { id: 'cat70', name: 'گرتەی ڤیدیۆیی', englishName: 'Video Clips', icon: '🎬', group: 'سینەما و زنجیرەکان' },
  { id: 'cat48', name: 'فرێندز', englishName: 'Friends', icon: '☕', group: 'سینەما و زنجیرەکان' },
  { id: 'cat49', name: 'سۆپڕانۆس', englishName: 'The Sopranos', icon: '🚬', group: 'سینەما و زنجیرەکان' },
  { id: 'cat52', name: 'پیکی بڵایندەرز', englishName: 'Peaky Blinders', icon: '🧢', group: 'سینەما و زنجیرەکان' },
  { id: 'cat53', name: 'دێکستەر', englishName: 'Dexter', icon: '🩸', group: 'سینەما و زنجیرەکان' },
  { id: 'cat54', name: 'پریزن برێک', englishName: 'Prison Break', icon: '⛓️', group: 'سینەما و زنجیرەکان' },
  { id: 'cat55', name: 'برێکینگ باد', englishName: 'Breaking Bad', icon: '🧪', group: 'سینەما و زنجیرەکان' },
  { id: 'cat56', name: 'خۆڵی ئەژدیها', englishName: 'House of the Dragon', icon: '🐲', group: 'سینەما و زنجیرەکان' },
  { id: 'cat57', name: 'گەمەی تەختەکان', englishName: 'Game of Thrones', icon: '👑', group: 'سینەما و زنجیرەکان' },
  { id: 'cat58', name: 'زە بۆیز', englishName: 'The Boys', icon: '🦸', group: 'سینەما و زنجیرەکان' },
  { id: 'cat59', name: 'شتە نامۆکان', englishName: 'Stranger Things', icon: '🚲', group: 'سینەما و زنجیرەکان' },
  { id: 'cat60', name: 'تاریک', englishName: 'Dark', icon: '⏳', group: 'سینەما و زنجیرەکان' },
  { id: 'cat61', name: 'فرۆم', englishName: 'From', icon: '🌲', group: 'سینەما و زنجیرەکان' },
  { id: 'cat62', name: 'ڤایکینگەکان', englishName: 'Vikings', icon: '🪓', group: 'سینەما و زنجیرەکان' },
  { id: 'cat63', name: 'یاری دەنکە ماسی', englishName: 'Squid Game', icon: '🦑', group: 'سینەما و زنجیرەکان' },

  // --- جۆراوجۆر (Miscellaneous) ---
  { id: 'cat9', name: 'ئاژەڵان', englishName: 'Animals', icon: '🦁', group: 'جۆراوجۆر' },
  { id: 'cat10', name: 'لۆگۆکان', englishName: 'Logos', icon: '🏷️', group: 'جۆراوجۆر' },
  { id: 'cat14', name: 'ئۆتۆمبێل', englishName: 'Automotive', icon: '🚗', group: 'جۆراوجۆر' },
  { id: 'cat18', name: 'سەرۆکەکان', englishName: 'Head of States', icon: '👔', group: 'جۆراوجۆر' },
  { id: 'cat29', name: 'بڕاندە جیهانییەکان', englishName: 'Global Brands', icon: '🛍️', group: 'جۆراوجۆر' },
  { id: 'cat27', name: 'ڕەنگی وێنەکە', englishName: 'Color of the Image', icon: '🎨', group: 'جۆراوجۆر' },
  { id: 'cat5', name: 'جیهانی کاتژمێر', englishName: 'World of Clocks', icon: '🕰️', group: 'جۆراوجۆر' },
  { id: 'cat30', name: 'تەنها کچان', englishName: 'Girls Only', icon: '👩', group: 'جۆراوجۆر' },
  { id: 'cat31', name: 'مکیاج', englishName: 'Makeup', icon: '💄', group: 'جۆراوجۆر' }
];
