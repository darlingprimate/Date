/* ===================== Translations ===================== */
const translations = {
en: {
  dir:"ltr",
  nav:{logoAria:"Darling Primate — home", badge:"PRIVATE • ROMANTIC • OFFICIAL", back:"Back", continueBtn:"Continue", submit:"Submit ♥"},
  hero:{
    langLabel:"Choose your language",
    headline:'Will you go on a <span class="grad">date</span> with me?',
    desc:"A tiny application for a very important decision. No pressure, just good food, better company, and maybe a little romance.",
    btnPrimary:"Open the application ♥",
    btnSecondary:"Surprise me ✨",
    mascotAlt:"Darling Primate, patiently awaiting your answer",
    floating:["✨ good vibes only","🍓 one date, please?"]
  },
  progress:{label:"Step {n} of {total}"},
  step1:{title:"First things first", question:"Would you like to go on a date?",
    optA:"Absolutely", optAsub:"I was hoping you would ask.",
    optB:"Maybe...", optBsub:"Convince me with good food.",
    optC:"No", optCsub:"My heart is currently unavailable."},
  step2:{title:"Pick a day", question:"When should our little adventure happen?", dateLabel:"Date"},
  step3:{title:"Choose the mood", question:"What sounds like the perfect date?",
    dinner:"Romantic dinner", dinnerSub:"Good food, soft lights, long conversations.",
    coffee:"Coffee & a walk", coffeeSub:"Simple, calm, and a little cute.",
    spontaneous:"Something spontaneous", spontaneousSub:"No plan. Just follow the feeling.",
    movie:"Movie night", movieSub:"Snacks, blankets, and zero interruptions."},
  step4:{title:"Important question", question:"How excited are you?",
    o100:"100%", o100sub:"I am already choosing an outfit.",
    o85:"85%", o85sub:"Very excited. Trying to act normal.",
    o70:"70%", o70sub:"Quietly excited.",
    o50:"50%", o50sub:"Let's see where this goes."},
  step5:{title:"Almost there", question:"Who's applying?",
    nameLabel:"Your name", namePh:"e.g. Alex",
    contactLabel:"Best way to reach you", contactPh:"Phone or email",
    socialLabel:"Instagram", socialOptional:"optional", socialPh:"@yourhandle"},
  step6:{title:"One last thing", question:"What would make this date perfect?",
    placeholder:"Tell me what would make it special...", optionalTag:"Optional"},
  validation:{option:"Please choose an option to continue.", date:"Let's pick a day that hasn't happened yet.", name:"Please share your name to continue.", contact:"Please share a way to reach you."},
  confirm:{
    badge:"APPLICATION RECEIVED", headline:"It is officially a date.",
    desc:"Your answers have been carefully reviewed by the very serious Darling Primate committee.",
    appNumberLabel:"Application No.",
    lblAnswer:"Answer", lblDate:"Date", lblStyle:"Date style", lblExcitement:"Excitement", lblCandidate:"Candidate", lblNote:"Perfect date note",
    noteEmpty:"No requests — surprise them.",
    recipeTitle:"Your Date Night Recipe", recipeDesc:"A little something to go with the occasion — picked to match your date style.",
    downloadBtn:"Download recipe card", shareBtn:"Share the news",
    shareCopied:"Link copied ✨", shareTitle:"Darling Primate", shareText:"It's officially a date. 🕊️",
    restart:"Start over ♥"
  },
  surprise:{toast:"The universe says: go on the date ✨"}
},
bn: {
  dir:"ltr",
  nav:{logoAria:"ডার্লিং প্রাইমেট — হোম", badge:"ব্যক্তিগত • রোমান্টিক • আনুষ্ঠানিক", back:"পেছনে", continueBtn:"এগিয়ে যান", submit:"জমা দিন ♥"},
  hero:{
    langLabel:"আপনার ভাষা বেছে নিন",
    headline:'তুমি কি আমার সাথে <span class="grad">ডেটে</span> যাবে?',
    desc:"একটি ছোট্ট আবেদন, কিন্তু সিদ্ধান্তটা বেশ গুরুত্বপূর্ণ। কোনো চাপ নেই — শুধু ভালো খাবার, চমৎকার সঙ্গ, আর হয়তো একটুখানি ভালোবাসা।",
    btnPrimary:"আবেদনটি খুলুন ♥",
    btnSecondary:"চমকে দাও আমায় ✨",
    mascotAlt:"ডার্লিং প্রাইমেট, তোমার উত্তরের অপেক্ষায়",
    floating:["✨ শুধু ভালো অনুভূতি","🍓 একটা ডেট হবে নাকি?"]
  },
  progress:{label:"ধাপ {n} / {total}"},
  step1:{title:"সবার আগে", question:"তুমি কি আমার সাথে ডেটে যেতে চাও?",
    optA:"একদম রাজি", optAsub:"তোমার এই প্রশ্নটারই অপেক্ষায় ছিলাম।",
    optB:"হয়তো...", optBsub:"ভালো খাবার দিয়ে আমাকে রাজি করাও।",
    optC:"না", optCsub:"আমার হৃদয় এখন একটু ব্যস্ত।"},
  step2:{title:"একটা দিন বেছে নাও", question:"আমাদের ছোট্ট এই যাত্রাটা কবে হবে?", dateLabel:"তারিখ"},
  step3:{title:"মুডটা বেছে নাও", question:"নিখুঁত ডেট বলতে তোমার কী মনে হয়?",
    dinner:"রোমান্টিক ডিনার", dinnerSub:"ভালো খাবার, মৃদু আলো, লম্বা আড্ডা।",
    coffee:"কফি আর একটু হাঁটা", coffeeSub:"সহজ, শান্ত, আর একটু মিষ্টি।",
    spontaneous:"হঠাৎ করেই কিছু একটা", spontaneousSub:"কোনো পরিকল্পনা নেই। শুধু মনের ডাক শোনো।",
    movie:"মুভি নাইট", movieSub:"স্ন্যাকস, কম্বল, আর কোনো বাধা নেই।"},
  step4:{title:"গুরুত্বপূর্ণ প্রশ্ন", question:"তুমি কতটা উত্তেজিত?",
    o100:"১০০%", o100sub:"আমি এখনই পোশাক বেছে নিচ্ছি।",
    o85:"৮৫%", o85sub:"খুবই উত্তেজিত। স্বাভাবিক থাকার চেষ্টা করছি।",
    o70:"৭০%", o70sub:"চুপচাপ ভেতরে ভেতরে খুশি।",
    o50:"৫০%", o50sub:"দেখা যাক কোথায় গিয়ে দাঁড়ায়।"},
  step5:{title:"প্রায় শেষের দিকে", question:"আবেদনটা কে করছে?",
    nameLabel:"তোমার নাম", namePh:"যেমন, আলিফ",
    contactLabel:"যোগাযোগের সহজ উপায়", contactPh:"ফোন নম্বর বা ইমেইল",
    socialLabel:"ইনস্টাগ্রাম", socialOptional:"ঐচ্ছিক", socialPh:"@তোমারহ্যান্ডেল"},
  step6:{title:"শেষ একটা কথা", question:"কী থাকলে এই ডেটটা একদম নিখুঁত হতো?",
    placeholder:"বলো তো, কী থাকলে দিনটা আরও বিশেষ হয়ে উঠবে...", optionalTag:"ঐচ্ছিক"},
  validation:{option:"এগিয়ে যেতে একটা উত্তর বেছে নাও।", date:"এমন একটা দিন বেছে নাও যা এখনও আসেনি।", name:"এগিয়ে যেতে তোমার নামটা লিখো।", contact:"যোগাযোগের একটা উপায় জানাও।"},
  confirm:{
    badge:"আবেদন গৃহীত হয়েছে", headline:"এটা এখন আনুষ্ঠানিকভাবেই একটা ডেট।",
    desc:"তোমার সব উত্তর ডার্লিং প্রাইমেট কমিটি অত্যন্ত মনোযোগ দিয়ে যাচাই করেছে।",
    appNumberLabel:"আবেদন নম্বর",
    lblAnswer:"উত্তর", lblDate:"তারিখ", lblStyle:"ডেটের ধরন", lblExcitement:"উত্তেজনার মাত্রা", lblCandidate:"আবেদনকারী", lblNote:"নিখুঁত ডেটের ইচ্ছা",
    noteEmpty:"কোনো বিশেষ চাওয়া নেই — চমকে দেওয়াই থাক।",
    recipeTitle:"তোমাদের ডেট নাইট রেসিপি", recipeDesc:"উপলক্ষ্যের সাথে মানানসই একটা ছোট্ট উপহার — তোমার ডেটের ধরন অনুযায়ী বেছে নেওয়া।",
    downloadBtn:"রেসিপি কার্ড ডাউনলোড করো", shareBtn:"খবরটা জানাও",
    shareCopied:"লিংক কপি হয়েছে ✨", shareTitle:"ডার্লিং প্রাইমেট", shareText:"এটা এখন আনুষ্ঠানিকভাবেই একটা ডেট। 🕊️",
    restart:"আবার শুরু করো ♥"
  },
  surprise:{toast:"মহাবিশ্ব বলছে: ডেটে চলে যাও ✨"}
},
hi: {
  dir:"ltr",
  nav:{logoAria:"डार्लिंग प्राइमेट — होम", badge:"निजी • रोमांटिक • आधिकारिक", back:"पीछे", continueBtn:"आगे बढ़ें", submit:"भेजें ♥"},
  hero:{
    langLabel:"अपनी भाषा चुनें",
    headline:'क्या तुम मेरे साथ <span class="grad">डेट</span> पर चलोगी?',
    desc:"एक छोटा-सा आवेदन, पर फ़ैसला बड़ा है। कोई दबाव नहीं — बस अच्छा खाना, अच्छी संगत, और शायद थोड़ा-सा प्यार।",
    btnPrimary:"आवेदन खोलें ♥",
    btnSecondary:"मुझे चौंका दो ✨",
    mascotAlt:"डार्लिंग प्राइमेट, तुम्हारे जवाब का इंतज़ार कर रहा है",
    floating:["✨ बस अच्छी वाइब्स","🍓 एक डेट तो बनती है?"]
  },
  progress:{label:"चरण {n} / {total}"},
  step1:{title:"सबसे पहली बात", question:"क्या तुम मेरे साथ डेट पर जाना चाहोगी?",
    optA:"बिल्कुल", optAsub:"मुझे बस इसी सवाल का इंतज़ार था।",
    optB:"शायद...", optBsub:"अच्छे खाने से मुझे मना लो।",
    optC:"नहीं", optCsub:"फ़िलहाल मेरा दिल थोड़ा व्यस्त है।"},
  step2:{title:"एक दिन चुनो", question:"हमारा यह छोटा-सा सफ़र कब होगा?", dateLabel:"तारीख़"},
  step3:{title:"मूड चुनो", question:"एक परफ़ेक्ट डेट कैसी लगती है तुम्हें?",
    dinner:"रोमांटिक डिनर", dinnerSub:"अच्छा खाना, हल्की रोशनी, लंबी बातें।",
    coffee:"कॉफ़ी और थोड़ी सैर", coffeeSub:"सीधा-सादा, शांत, और थोड़ा प्यारा।",
    spontaneous:"अचानक कुछ भी", spontaneousSub:"कोई प्लान नहीं। बस दिल की सुनो।",
    movie:"मूवी नाइट", movieSub:"स्नैक्स, कंबल, और कोई खलल नहीं।"},
  step4:{title:"ज़रूरी सवाल", question:"तुम कितनी उत्साहित हो?",
    o100:"100%", o100sub:"मैं तो अभी से आउटफ़िट चुन रही हूँ।",
    o85:"85%", o85sub:"बहुत उत्साहित। सामान्य दिखने की कोशिश में।",
    o70:"70%", o70sub:"अंदर ही अंदर खुश हूँ।",
    o50:"50%", o50sub:"देखते हैं यह कहाँ तक जाता है।"},
  step5:{title:"बस थोड़ा और", question:"आवेदन कौन कर रहा है?",
    nameLabel:"तुम्हारा नाम", namePh:"जैसे, अनया",
    contactLabel:"संपर्क का सबसे अच्छा तरीक़ा", contactPh:"फ़ोन या ईमेल",
    socialLabel:"इंस्टाग्राम", socialOptional:"वैकल्पिक", socialPh:"@तुम्हाराहैंडल"},
  step6:{title:"आख़िरी बात", question:"क्या हो जाए तो यह डेट परफ़ेक्ट बन जाए?",
    placeholder:"बताओ, क्या इस दिन को ख़ास बना देगा...", optionalTag:"वैकल्पिक"},
  validation:{option:"आगे बढ़ने के लिए एक विकल्प चुनें।", date:"ऐसी तारीख़ चुनें जो अभी आई नहीं है।", name:"आगे बढ़ने के लिए अपना नाम बताएं।", contact:"संपर्क का कोई तरीक़ा बताएं।"},
  confirm:{
    badge:"आवेदन प्राप्त हुआ", headline:"अब यह आधिकारिक तौर पर एक डेट है।",
    desc:"तुम्हारे सभी जवाबों की डार्लिंग प्राइमेट समिति ने बड़ी गंभीरता से समीक्षा की है।",
    appNumberLabel:"आवेदन संख्या",
    lblAnswer:"जवाब", lblDate:"तारीख़", lblStyle:"डेट की शैली", lblExcitement:"उत्साह", lblCandidate:"आवेदक", lblNote:"परफ़ेक्ट डेट की चाहत",
    noteEmpty:"कोई ख़ास माँग नहीं — सरप्राइज़ बना रहने दो।",
    recipeTitle:"तुम्हारी डेट नाइट रेसिपी", recipeDesc:"मौक़े के मुताबिक़ चुनी गई एक छोटी-सी चीज़ — तुम्हारे डेट स्टाइल के हिसाब से।",
    downloadBtn:"रेसिपी कार्ड डाउनलोड करें", shareBtn:"ख़बर शेयर करें",
    shareCopied:"लिंक कॉपी हो गया ✨", shareTitle:"डार्लिंग प्राइमेट", shareText:"अब यह आधिकारिक तौर पर एक डेट है। 🕊️",
    restart:"फिर से शुरू करें ♥"
  },
  surprise:{toast:"ब्रह्मांड कह रहा है: डेट पर चली जाओ ✨"}
},
ur: {
  dir:"rtl",
  nav:{logoAria:"ڈارلنگ پرائمیٹ — ہوم", badge:"نجی • رومانوی • سرکاری", back:"واپس", continueBtn:"جاری رکھیں", submit:"جمع کروائیں ♥"},
  hero:{
    langLabel:"اپنی زبان منتخب کریں",
    headline:'کیا تم میرے ساتھ <span class="grad">ڈیٹ</span> پر چلو گی؟',
    desc:"ایک چھوٹی سی درخواست، مگر فیصلہ بہت اہم ہے۔ کوئی دباؤ نہیں — بس اچھا کھانا، اچھی رفاقت، اور شاید تھوڑی سی محبت۔",
    btnPrimary:"درخواست کھولیں ♥",
    btnSecondary:"مجھے حیران کر دو ✨",
    mascotAlt:"ڈارلنگ پرائمیٹ، تمہارے جواب کا منتظر",
    floating:["✨ بس اچھی وائبز","🍓 ایک ڈیٹ تو بنتی ہے؟"]
  },
  progress:{label:"مرحلہ {n} از {total}"},
  step1:{title:"سب سے پہلے", question:"کیا تم میرے ساتھ ڈیٹ پر جانا پسند کرو گی؟",
    optA:"بالکل", optAsub:"مجھے بس اسی سوال کا انتظار تھا۔",
    optB:"شاید...", optBsub:"اچھے کھانے سے مجھے منا لو۔",
    optC:"نہیں", optCsub:"فی الحال میرا دل تھوڑا مصروف ہے۔"},
  step2:{title:"ایک دن چنیں", question:"ہمارا یہ چھوٹا سا سفر کب ہوگا؟", dateLabel:"تاریخ"},
  step3:{title:"موڈ منتخب کریں", question:"ایک بہترین ڈیٹ کیسی لگتی ہے تمہیں؟",
    dinner:"رومانوی ڈنر", dinnerSub:"اچھا کھانا، ہلکی روشنی، لمبی باتیں۔",
    coffee:"کافی اور تھوڑی سیر", coffeeSub:"سادہ، پرسکون، اور تھوڑا سا پیارا۔",
    spontaneous:"اچانک کچھ بھی", spontaneousSub:"کوئی منصوبہ نہیں۔ بس دل کی سنو۔",
    movie:"مووی نائٹ", movieSub:"سنیکس، کمبل، اور کوئی مداخلت نہیں۔"},
  step4:{title:"اہم سوال", question:"تم کتنی پرجوش ہو؟",
    o100:"100%", o100sub:"میں تو ابھی سے لباس چن رہی ہوں۔",
    o85:"85%", o85sub:"بہت پرجوش۔ عام دکھنے کی کوشش میں۔",
    o70:"70%", o70sub:"خاموشی سے خوش ہوں۔",
    o50:"50%", o50sub:"دیکھتے ہیں یہ کہاں تک جاتا ہے۔"},
  step5:{title:"بس تھوڑا اور", question:"درخواست کون دے رہا ہے؟",
    nameLabel:"آپ کا نام", namePh:"مثلاً، زوہا",
    contactLabel:"رابطے کا بہترین طریقہ", contactPh:"فون یا ای میل",
    socialLabel:"انسٹاگرام", socialOptional:"اختیاری", socialPh:"@آپ_کا_ہینڈل"},
  step6:{title:"آخری بات", question:"کیا ہو جائے تو یہ ڈیٹ بالکل مکمل بن جائے؟",
    placeholder:"بتائیں، کیا اس دن کو خاص بنا دے گا...", optionalTag:"اختیاری"},
  validation:{option:"جاری رکھنے کے لیے ایک آپشن منتخب کریں۔", date:"ایسی تاریخ چنیں جو ابھی گزری نہیں۔", name:"جاری رکھنے کے لیے اپنا نام بتائیں۔", contact:"رابطے کا کوئی طریقہ بتائیں۔"},
  confirm:{
    badge:"درخواست موصول ہوگئی", headline:"اب یہ باضابطہ طور پر ایک ڈیٹ ہے۔",
    desc:"آپ کے تمام جوابات کا ڈارلنگ پرائمیٹ کمیٹی نے بڑی سنجیدگی سے جائزہ لیا ہے۔",
    appNumberLabel:"درخواست نمبر",
    lblAnswer:"جواب", lblDate:"تاریخ", lblStyle:"ڈیٹ کا انداز", lblExcitement:"جوش و خروش", lblCandidate:"درخواست دہندہ", lblNote:"بہترین ڈیٹ کی خواہش",
    noteEmpty:"کوئی خاص خواہش نہیں — سرپرائز ہی رہنے دیں۔",
    recipeTitle:"آپ کی ڈیٹ نائٹ ریسیپی", recipeDesc:"موقع کے مطابق چنی گئی ایک چھوٹی سی چیز — آپ کے ڈیٹ کے انداز کے مطابق۔",
    downloadBtn:"ریسیپی کارڈ ڈاؤن لوڈ کریں", shareBtn:"خبر شیئر کریں",
    shareCopied:"لنک کاپی ہوگیا ✨", shareTitle:"ڈارلنگ پرائمیٹ", shareText:"اب یہ باضابطہ طور پر ایک ڈیٹ ہے۔ 🕊️",
    restart:"دوبارہ شروع کریں ♥"
  },
  surprise:{toast:"کائنات کہہ رہی ہے: ڈیٹ پر چلی جاؤ ✨"}
},
ar: {
  dir:"rtl",
  nav:{logoAria:"دارلينغ برايمت — الرئيسية", badge:"خاص • رومانسي • رسمي", back:"رجوع", continueBtn:"متابعة", submit:"إرسال ♥"},
  hero:{
    langLabel:"اختر لغتك",
    headline:'هل توافقين على الخروج معي في <span class="grad">موعد</span>؟',
    desc:"طلب صغير، لكن القرار مهم جدًا. لا ضغط أبدًا — فقط طعام شهي، رفقة أجمل، وربما القليل من الرومانسية.",
    btnPrimary:"افتحي الطلب ♥",
    btnSecondary:"فاجئيني ✨",
    mascotAlt:"دارلينغ برايمت، بانتظار إجابتك",
    floating:["✨ أجواء إيجابية فقط","🍓 موعد واحد فقط؟"]
  },
  progress:{label:"الخطوة {n} من {total}"},
  step1:{title:"أولًا وقبل كل شيء", question:"هل تودّين الخروج معي في موعد؟",
    optA:"بكل تأكيد", optAsub:"كنت أنتظر هذا السؤال بالذات.",
    optB:"ربما...", optBsub:"أقنعيني بطعام شهي.",
    optC:"لا", optCsub:"قلبي مشغول قليلًا في الوقت الحالي."},
  step2:{title:"اختاري يومًا", question:"متى ستكون مغامرتنا الصغيرة؟", dateLabel:"التاريخ"},
  step3:{title:"اختاري الأجواء", question:"كيف يبدو الموعد المثالي بالنسبة لك؟",
    dinner:"عشاء رومانسي", dinnerSub:"طعام شهي، إضاءة هادئة، أحاديث طويلة.",
    coffee:"قهوة ونزهة قصيرة", coffeeSub:"بسيط، هادئ، ولطيف بعض الشيء.",
    spontaneous:"شيء عفوي وغير مخطط له", spontaneousSub:"بلا خطة. فقط اتبعي شعورك.",
    movie:"أمسية أفلام", movieSub:"وجبات خفيفة، بطانية دافئة، ودون أي مقاطعة."},
  step4:{title:"سؤال مهم", question:"إلى أي مدى أنتِ متحمسة؟",
    o100:"١٠٠٪", o100sub:"أنا بالفعل أختار ملابسي.",
    o85:"٨٥٪", o85sub:"متحمسة جدًا، وأحاول أن أبدو طبيعية.",
    o70:"٧٠٪", o70sub:"متحمسة بهدوء من الداخل.",
    o50:"٥٠٪", o50sub:"لنرَ إلى أين سيصل هذا."},
  step5:{title:"اقتربنا من النهاية", question:"من يتقدّم بالطلب؟",
    nameLabel:"اسمك", namePh:"مثال: سارة",
    contactLabel:"أفضل وسيلة للتواصل معك", contactPh:"رقم الهاتف أو البريد الإلكتروني",
    socialLabel:"إنستغرام", socialOptional:"اختياري", socialPh:"@معرّفك"},
  step6:{title:"شيء أخير", question:"ما الذي سيجعل هذا الموعد مثاليًا؟",
    placeholder:"أخبريني بما سيجعل هذا اليوم مميزًا...", optionalTag:"اختياري"},
  validation:{option:"يرجى اختيار إجابة للمتابعة.", date:"يرجى اختيار يوم لم يمضِ بعد.", name:"يرجى كتابة اسمك للمتابعة.", contact:"يرجى ذكر وسيلة للتواصل معك."},
  confirm:{
    badge:"تم استلام الطلب", headline:"أصبح الأمر رسميًا الآن — إنه موعد.",
    desc:"راجعت لجنة دارلينغ برايمت الموقّرة إجاباتك بكل جدّية واهتمام.",
    appNumberLabel:"رقم الطلب",
    lblAnswer:"الإجابة", lblDate:"التاريخ", lblStyle:"نوع الموعد", lblExcitement:"درجة الحماس", lblCandidate:"المتقدّمة", lblNote:"أمنية الموعد المثالي",
    noteEmpty:"لا طلبات خاصة — فلتكن مفاجأة.",
    recipeTitle:"وصفة أمسية موعدكما", recipeDesc:"لمسة صغيرة تناسب المناسبة — اختيرت خصيصًا بحسب نوع موعدك.",
    downloadBtn:"تحميل بطاقة الوصفة", shareBtn:"شاركي الخبر",
    shareCopied:"تم نسخ الرابط ✨", shareTitle:"دارلينغ برايمت", shareText:"أصبح الأمر رسميًا الآن، إنه موعد. 🕊️",
    restart:"البدء من جديد ♥"
  },
  surprise:{toast:"يقول الكون: اذهبي إلى الموعد ✨"}
},
tr: {
  dir:"ltr",
  nav:{logoAria:"Darling Primate — ana sayfa", badge:"ÖZEL • ROMANTİK • RESMİ", back:"Geri", continueBtn:"Devam et", submit:"Gönder ♥"},
  hero:{
    langLabel:"Dilini seç",
    headline:'Benimle bir <span class="grad">buluşmaya</span> çıkar mısın?',
    desc:"Küçük bir başvuru, ama kararı bir hayli önemli. Hiç baskı yok — sadece güzel bir yemek, keyifli bir sohbet ve belki biraz romantizm.",
    btnPrimary:"Başvuruyu aç ♥",
    btnSecondary:"Beni şaşırt ✨",
    mascotAlt:"Darling Primate, cevabını sabırsızlıkla bekliyor",
    floating:["✨ sadece iyi enerji","🍓 bir buluşma olur mu?"]
  },
  progress:{label:"Adım {n} / {total}"},
  step1:{title:"Önce en önemlisi", question:"Benimle buluşmaya çıkar mısın?",
    optA:"Kesinlikle", optAsub:"Tam da bu soruyu bekliyordum.",
    optB:"Belki...", optBsub:"Beni güzel bir yemekle ikna et.",
    optC:"Hayır", optCsub:"Kalbim şu an biraz meşgul."},
  step2:{title:"Bir gün seç", question:"Bu küçük maceramız ne zaman olsun?", dateLabel:"Tarih"},
  step3:{title:"Havayı seç", question:"Sana göre mükemmel bir buluşma nasıl olur?",
    dinner:"Romantik akşam yemeği", dinnerSub:"Güzel yemek, loş ışık, uzun sohbetler.",
    coffee:"Kahve ve kısa bir yürüyüş", coffeeSub:"Sade, sakin ve biraz sevimli.",
    spontaneous:"Anlık bir şeyler", spontaneousSub:"Plan yok. Sadece hissettiğin yere git.",
    movie:"Film gecesi", movieSub:"Atıştırmalıklar, battaniye ve hiç kesinti yok."},
  step4:{title:"Önemli bir soru", question:"Ne kadar heyecanlısın?",
    o100:"%100", o100sub:"Şimdiden kıyafetimi seçiyorum.",
    o85:"%85", o85sub:"Çok heyecanlıyım. Normal görünmeye çalışıyorum.",
    o70:"%70", o70sub:"İçten içe heyecanlıyım.",
    o50:"%50", o50sub:"Bakalım bu nereye varacak."},
  step5:{title:"Az kaldı", question:"Başvuran kim?",
    nameLabel:"Adın", namePh:"örn. Ayşe",
    contactLabel:"Sana ulaşmanın en iyi yolu", contactPh:"Telefon veya e-posta",
    socialLabel:"Instagram", socialOptional:"opsiyonel", socialPh:"@kullaniciadin"},
  step6:{title:"Son bir şey", question:"Bu buluşmayı mükemmel yapacak şey ne olurdu?",
    placeholder:"Bu günü özel kılacak şeyi anlat...", optionalTag:"Opsiyonel"},
  validation:{option:"Devam etmek için bir seçenek seç.", date:"Henüz geçmemiş bir gün seç.", name:"Devam etmek için adını yaz.", contact:"Sana ulaşabileceğimiz bir yol belirt."},
  confirm:{
    badge:"BAŞVURU ALINDI", headline:"Artık resmen bir buluşma.",
    desc:"Cevapların, son derece ciddi Darling Primate komitesi tarafından özenle incelendi.",
    appNumberLabel:"Başvuru No.",
    lblAnswer:"Cevap", lblDate:"Tarih", lblStyle:"Buluşma tarzı", lblExcitement:"Heyecan", lblCandidate:"Başvuran", lblNote:"Mükemmel buluşma notu",
    noteEmpty:"Özel bir istek yok — sürpriz kalsın.",
    recipeTitle:"Buluşma Gecesi Tarifin", recipeDesc:"Buluşma tarzına göre seçilmiş, ortama uygun küçük bir dokunuş.",
    downloadBtn:"Tarif kartını indir", shareBtn:"Haberi paylaş",
    shareCopied:"Bağlantı kopyalandı ✨", shareTitle:"Darling Primate", shareText:"Artık resmen bir buluşma. 🕊️",
    restart:"Baştan başla ♥"
  },
  surprise:{toast:"Evren diyor ki: buluşmaya git ✨"}
}
};

const RTL_LANGS = ["ar","ur"];

/* ===================== Recipe data (mood-based) ===================== */
const recipes = {
  dinner:{
    title:"Pan-Seared Garlic Butter Steak, for two",
    tag:"serves 2 · 35 min",
    ingredients:["2 good steaks (ribeye or sirloin)","3 tbsp butter","4 garlic cloves, smashed","A few sprigs of rosemary or thyme","Flaky salt & cracked pepper","1 tbsp olive oil","A bottle of something you both like"],
    steps:["Let the steaks come to room temperature, then pat dry and season generously.","Heat olive oil in a heavy pan until it's just about to smoke.","Sear each side for 2–3 minutes until deeply golden.","Add butter, garlic, and herbs; tilt the pan and spoon the melted butter over the steak for 1–2 minutes.","Rest for 5 minutes before slicing. Serve with candlelight and no phones."]
  },
  coffee:{
    title:"Cardamom Honey Latte & Walking Snacks",
    tag:"serves 2 · 15 min",
    ingredients:["2 shots espresso or strong coffee","1 cup milk of choice","1 tsp honey","A pinch of ground cardamom","2 pastries or a shared croissant to go"],
    steps:["Warm the milk gently with cardamom until it just starts to steam.","Froth if you like, then stir in honey.","Pour over espresso in two cups to go.","Grab the pastries, put your shoes on, and pick a direction with no destination in mind."]
  },
  spontaneous:{
    title:"The 'Whatever's in the Fridge' Picnic",
    tag:"serves 2 · 10 min",
    ingredients:["Anything leftover that pairs well","A block of cheese","Crackers or bread","Fruit that's about to turn","A blanket"],
    steps:["Raid the fridge without overthinking it.","Arrange it all on one board like it was always the plan.","Pick literally any spot — floor, roof, park bench — and go.","Let the conversation wander wherever it wants to."]
  },
  movie:{
    title:"Movie-Night Stovetop Popcorn",
    tag:"serves 2 · 10 min",
    ingredients:["1/3 cup popcorn kernels","2 tbsp neutral oil","3 tbsp melted butter","Flaky salt","Your two favorite blankets"],
    steps:["Heat oil in a large pot with 3 kernels on medium-high, lid on.","Once those pop, add the rest of the kernels in an even layer.","Shake the pot occasionally until popping slows to 2 seconds apart.","Toss with butter and salt, dim the lights, and don't touch your phones."]
  }
};

/* ===================== State ===================== */
const STEPS = ["intro","date","mood","excitement","candidate","note"];
let lang = "en";
let currentStepIndex = 0;
let answers = {
  wantDate:null, date:"", mood:null, excitement:null,
  candidate:{name:"", contact:"", social:""}, note:""
};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function t(){
  return translations[lang] || translations.en;
}
function tpl(str, vars){
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] !== undefined ? vars[k] : "");
}

/* ===================== Language handling ===================== */
function applyStaticI18n(){
  const dict = t();
  $$("[data-i18n]").forEach(el => {
    const path = el.getAttribute("data-i18n");
    const val = getPath(dict, path);
    if(val !== undefined) el.innerHTML = val;
  });
  $$("[data-i18n-alt]").forEach(el => {
    const path = el.getAttribute("data-i18n-alt");
    const val = getPath(dict, path);
    if(val !== undefined) el.setAttribute("alt", val);
  });
  $("#heroHeadline").innerHTML = dict.hero.headline;
  $("#floatChip1").textContent = dict.hero.floating[0];
  $("#floatChip2").textContent = dict.hero.floating[1];
  $("#langCurrentLabel").textContent = $$(`#langMenu li[data-lang="${lang}"]`)[0]?.textContent || "English";
  $$("#langMenu li").forEach(li => li.setAttribute("aria-selected", li.getAttribute("data-lang") === lang ? "true" : "false"));
}

function getPath(obj, path){
  return path.split(".").reduce((o,k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
}

function setLanguage(code, {silent=false}={}){
  if(!translations[code]) code = "en";
  lang = code;
  localStorage.setItem("dp_lang", code);
  const dir = RTL_LANGS.includes(code) ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", code);
  applyStaticI18n();
  if(!silent){
    // if modal open, re-render current step in new language
    if($("#appOverlay").classList.contains("active")) renderStep();
  }
}

/* ===================== Language dropdown ===================== */
const langSelect = $("#langSelect");
const langTrigger = $("#langTrigger");
const langMenu = $("#langMenu");

langTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = langSelect.classList.toggle("open");
  langTrigger.setAttribute("aria-expanded", open ? "true":"false");
});
document.addEventListener("click", () => {
  langSelect.classList.remove("open");
  langTrigger.setAttribute("aria-expanded","false");
});
$$("#langMenu li").forEach(li => {
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    setLanguage(li.getAttribute("data-lang"));
    langSelect.classList.remove("open");
  });
});

/* ===================== Modal open/close ===================== */
const appOverlay = $("#appOverlay");
const confirmOverlay = $("#confirmOverlay");

$("#openAppBtn").addEventListener("click", () => openApp());
$("#closeAppBtn").addEventListener("click", () => closeApp());
appOverlay.addEventListener("click", (e) => { if(e.target === appOverlay) closeApp(); });
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    if(appOverlay.classList.contains("active")) closeApp();
  }
});

function openApp(){
  currentStepIndex = 0;
  appOverlay.classList.add("active");
  renderStep();
}
function closeApp(){
  appOverlay.classList.remove("active");
}

/* ===================== Step rendering ===================== */
const stepViewport = $("#stepViewport");
const progressFill = $("#progressFill");
const progressLabel = $("#progressLabel");
const validationMsg = $("#validationMsg");
const backBtn = $("#backBtn");
const continueBtn = $("#continueBtn");

function updateProgress(){
  const n = currentStepIndex + 1, total = STEPS.length;
  progressFill.style.width = `${(n/total)*100}%`;
  progressLabel.textContent = tpl(t().progress.label, {n, total});
  backBtn.style.visibility = currentStepIndex === 0 ? "hidden" : "visible";
  continueBtn.textContent = currentStepIndex === STEPS.length - 1 ? t().nav.submit : t().nav.continueBtn;
}

function renderStep(){
  validationMsg.textContent = "";
  const dict = t();
  const id = STEPS[currentStepIndex];
  let html = "";

  if(id === "intro"){
    const s = dict.step1;
    html = `
      <p class="step-title">${s.title}</p>
      <h3 class="step-question">${s.question}</h3>
      ${optionCard("wantDate","absolutely", s.optA, s.optAsub)}
      ${optionCard("wantDate","maybe", s.optB, s.optBsub)}
      ${optionCard("wantDate","no", s.optC, s.optCsub)}
    `;
  } else if(id === "date"){
    const s = dict.step2;
    const today = new Date().toISOString().split("T")[0];
    html = `
      <p class="step-title">${s.title}</p>
      <h3 class="step-question">${s.question}</h3>
      <div class="field">
        <label for="dateInput">${s.dateLabel}</label>
        <input type="date" id="dateInput" min="${today}" value="${answers.date || ""}" />
      </div>
    `;
  } else if(id === "mood"){
    const s = dict.step3;
    html = `
      <p class="step-title">${s.title}</p>
      <h3 class="step-question">${s.question}</h3>
      ${optionCard("mood","dinner", s.dinner, s.dinnerSub)}
      ${optionCard("mood","coffee", s.coffee, s.coffeeSub)}
      ${optionCard("mood","spontaneous", s.spontaneous, s.spontaneousSub)}
      ${optionCard("mood","movie", s.movie, s.movieSub)}
    `;
  } else if(id === "excitement"){
    const s = dict.step4;
    html = `
      <p class="step-title">${s.title}</p>
      <h3 class="step-question">${s.question}</h3>
      ${optionCard("excitement","100", s.o100, s.o100sub)}
      ${optionCard("excitement","85", s.o85, s.o85sub)}
      ${optionCard("excitement","70", s.o70, s.o70sub)}
      ${optionCard("excitement","50", s.o50, s.o50sub)}
    `;
  } else if(id === "candidate"){
    const s = dict.step5;
    html = `
      <p class="step-title">${s.title}</p>
      <h3 class="step-question">${s.question}</h3>
      <div class="field">
        <label for="nameInput">${s.nameLabel}</label>
        <input type="text" id="nameInput" placeholder="${s.namePh}" value="${escapeAttr(answers.candidate.name)}" />
      </div>
      <div class="field">
        <label for="contactInput">${s.contactLabel}</label>
        <input type="text" id="contactInput" placeholder="${s.contactPh}" value="${escapeAttr(answers.candidate.contact)}" />
      </div>
      <div class="field">
        <label for="socialInput">${s.socialLabel} <span class="field-optional">(${s.socialOptional})</span></label>
        <input type="text" id="socialInput" placeholder="${s.socialPh}" value="${escapeAttr(answers.candidate.social)}" />
      </div>
    `;
  } else if(id === "note"){
    const s = dict.step6;
    html = `
      <p class="step-title">${s.title}</p>
      <h3 class="step-question">${s.question} <span class="field-optional">(${s.optionalTag})</span></h3>
      <div class="field">
        <textarea id="noteInput" placeholder="${s.placeholder}">${escapeAttr(answers.note)}</textarea>
      </div>
    `;
  }

  stepViewport.innerHTML = `<div class="step-panel">${html}</div>`;
  attachStepListeners(id);
  updateProgress();
}

function optionCard(group, value, label, sub){
  const key = group === "wantDate" ? "wantDate" : group === "mood" ? "mood" : "excitement";
  const selected = answers[key] === value ? " selected" : "";
  return `<div class="option-card${selected}" data-group="${group}" data-value="${value}" tabindex="0" role="button">
    <span class="option-label">${label}</span>
    <span class="option-sub">${sub}</span>
  </div>`;
}

function escapeAttr(str){
  return (str || "").replace(/"/g, "&quot;");
}

function attachStepListeners(id){
  if(["intro","mood","excitement"].includes(id)){
    $$(".option-card", stepViewport).forEach(card => {
      const select = () => {
        const group = card.getAttribute("data-group");
        const value = card.getAttribute("data-value");
        const key = group === "wantDate" ? "wantDate" : group === "mood" ? "mood" : "excitement";
        answers[key] = value;
        $$(".option-card", stepViewport).forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        validationMsg.textContent = "";
        saveProgress();
      };
      card.addEventListener("click", select);
      card.addEventListener("keydown", (e) => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); select(); } });
    });
  }
  if(id === "date"){
    $("#dateInput").addEventListener("change", (e) => { answers.date = e.target.value; validationMsg.textContent=""; saveProgress(); });
  }
  if(id === "candidate"){
    $("#nameInput").addEventListener("input", (e) => { answers.candidate.name = e.target.value; validationMsg.textContent=""; saveProgress(); });
    $("#contactInput").addEventListener("input", (e) => { answers.candidate.contact = e.target.value; validationMsg.textContent=""; saveProgress(); });
    $("#socialInput").addEventListener("input", (e) => { answers.candidate.social = e.target.value; saveProgress(); });
  }
  if(id === "note"){
    $("#noteInput").addEventListener("input", (e) => { answers.note = e.target.value; saveProgress(); });
  }
}

/* ===================== Validation & navigation ===================== */
function validateCurrentStep(){
  const id = STEPS[currentStepIndex];
  const v = t().validation;
  if(id === "intro" && !answers.wantDate){ return v.option; }
  if(id === "date"){
    if(!answers.date) return v.date;
    const today = new Date(); today.setHours(0,0,0,0);
    const picked = new Date(answers.date);
    if(picked < today) return v.date;
  }
  if(id === "mood" && !answers.mood){ return v.option; }
  if(id === "excitement" && !answers.excitement){ return v.option; }
  if(id === "candidate"){
    if(!answers.candidate.name.trim()) return v.name;
    if(!answers.candidate.contact.trim()) return v.contact;
  }
  return null;
}

backBtn.addEventListener("click", () => {
  if(currentStepIndex > 0){
    currentStepIndex--;
    renderStep();
  }
});

continueBtn.addEventListener("click", () => {
  const error = validateCurrentStep();
  if(error){
    validationMsg.textContent = error;
    return;
  }
  if(currentStepIndex === STEPS.length - 1){
    submitApplication();
  } else {
    currentStepIndex++;
    renderStep();
  }
});

/* ===================== Persistence ===================== */
function saveProgress(){
  try{
    localStorage.setItem("dp_progress", JSON.stringify({answers, currentStepIndex}));
  }catch(e){}
}
function loadProgress(){
  try{
    const raw = localStorage.getItem("dp_progress");
    if(raw){
      const parsed = JSON.parse(raw);
      if(parsed.answers) answers = Object.assign(answers, parsed.answers);
    }
  }catch(e){}
}
function clearProgress(){
  try{ localStorage.removeItem("dp_progress"); }catch(e){}
}

/* ===================== Submission & confirmation ===================== */
function generateAppNumber(){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "DP-";
  for(let i=0;i<6;i++) code += chars[Math.floor(Math.random()*chars.length)];
  return code;
}

function formatDate(dateStr){
  if(!dateStr) return "—";
  const d = new Date(dateStr + "T00:00:00");
  try{
    return d.toLocaleDateString(lang === "en" ? "en-US" : lang, {year:"numeric", month:"long", day:"numeric"});
  }catch(e){
    return dateStr;
  }
}

function labelFor(group, value){
  const dict = t();
  if(group === "wantDate"){
    return {absolutely:dict.step1.optA, maybe:dict.step1.optB, no:dict.step1.optC}[value];
  }
  if(group === "mood"){
    return {dinner:dict.step3.dinner, coffee:dict.step3.coffee, spontaneous:dict.step3.spontaneous, movie:dict.step3.movie}[value];
  }
  if(group === "excitement"){
    return {"100":dict.step4.o100, "85":dict.step4.o85, "70":dict.step4.o70, "50":dict.step4.o50}[value];
  }
  return value;
}

let currentAppNumber = "";

function submitApplication(){
  currentAppNumber = generateAppNumber();
  clearProgress();
  renderConfirmation();
  closeApp();
  confirmOverlay.classList.add("active");
}

function renderConfirmation(){
  const dict = t();
  $("#appNumber").textContent = currentAppNumber;
  const g = $("#summaryGrid");
  const socialLine = answers.candidate.social ? ` · ${answers.candidate.social}` : "";
  g.innerHTML = `
    <div class="summary-item"><p class="summary-label">${dict.confirm.lblAnswer}</p><p class="summary-value">${labelFor("wantDate", answers.wantDate) || "—"}</p></div>
    <div class="summary-item"><p class="summary-label">${dict.confirm.lblDate}</p><p class="summary-value">${formatDate(answers.date)}</p></div>
    <div class="summary-item"><p class="summary-label">${dict.confirm.lblStyle}</p><p class="summary-value">${labelFor("mood", answers.mood) || "—"}</p></div>
    <div class="summary-item"><p class="summary-label">${dict.confirm.lblExcitement}</p><p class="summary-value">${labelFor("excitement", answers.excitement) || "—"}</p></div>
    <div class="summary-item full"><p class="summary-label">${dict.confirm.lblCandidate}</p><p class="summary-value">${escapeAttr(answers.candidate.name) || "—"} · ${escapeAttr(answers.candidate.contact) || "—"}${socialLine}</p></div>
    <div class="summary-item full"><p class="summary-label">${dict.confirm.lblNote}</p><p class="summary-value">${escapeAttr(answers.note) || dict.confirm.noteEmpty}</p></div>
  `;
  renderRecipe();
}

function renderRecipe(){
  const mood = answers.mood || "dinner";
  const r = recipes[mood] || recipes.dinner;
  const card = $("#recipeCard");
  card.innerHTML = `
    <h4>${r.title}</h4>
    <p>${r.tag}</p>
    <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
    <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
  `;
}

/* ===================== Recipe download & share ===================== */
$("#downloadRecipeBtn").addEventListener("click", () => {
  const mood = answers.mood || "dinner";
  const r = recipes[mood] || recipes.dinner;
  const dict = t();
  const lines = [
    "DARLING PRIMATE — DATE NIGHT RECIPE CARD",
    `Application No. ${currentAppNumber}`,
    "",
    r.title,
    r.tag,
    "",
    "INGREDIENTS",
    ...r.ingredients.map(i => `- ${i}`),
    "",
    "STEPS",
    ...r.steps.map((s,idx) => `${idx+1}. ${s}`),
    "",
    dict.confirm.shareText.replace(/[\u{1F300}-\u{1FAFF}]/gu,"").trim()
  ];
  const blob = new Blob([lines.join("\n")], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `darling-primate-recipe-${currentAppNumber}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

$("#shareBtn").addEventListener("click", async () => {
  const dict = t();
  const shareData = {
    title: dict.confirm.shareTitle,
    text: `${dict.confirm.shareText} ${currentAppNumber}`,
    url: window.location.href
  };
  if(navigator.share){
    try{ await navigator.share(shareData); }catch(e){ /* cancelled */ }
  } else {
    try{
      await navigator.clipboard.writeText(`${shareData.text} — ${shareData.url}`);
      showToast(dict.confirm.shareCopied);
    }catch(e){
      showToast(dict.confirm.shareCopied);
    }
  }
});

/* ===================== Restart ===================== */
$("#restartBtn").addEventListener("click", () => {
  answers = {wantDate:null, date:"", mood:null, excitement:null, candidate:{name:"",contact:"",social:""}, note:""};
  clearProgress();
  confirmOverlay.classList.remove("active");
});

/* ===================== Surprise me ===================== */
$("#surpriseBtn").addEventListener("click", () => {
  answers.wantDate = "absolutely";
  const today = new Date();
  today.setDate(today.getDate() + 3 + Math.floor(Math.random()*5));
  answers.date = today.toISOString().split("T")[0];
  const moods = ["dinner","coffee","spontaneous","movie"];
  answers.mood = moods[Math.floor(Math.random()*moods.length)];
  const excitements = ["100","85"];
  answers.excitement = excitements[Math.floor(Math.random()*excitements.length)];
  if(!answers.candidate.name) answers.candidate.name = "";
  showToast(t().surprise.toast);
});

/* ===================== Toast ===================== */
let toastTimer;
function showToast(msg){
  const toast = $("#toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ===================== Init ===================== */
(function init(){
  const savedLang = localStorage.getItem("dp_lang");
  loadProgress();
  setLanguage(savedLang || "en", {silent:true});
})();
