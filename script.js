/* ==========================================================
   DARLING PRIMATE — script.js
   Frontend-only romantic invitation & meme application
   ========================================================== */

const PRIMATE_IMAGE = "assets/primate.jpg";

/* ==========================================================
   1. TRANSLATIONS
   ========================================================== */
const translations = {
  en: {
    nav: { badge: "PRIVATE · ROMANTIC · OFFICIAL", chooseLanguage: "Choose your language" },
    hero: {
      eyebrow: "A private invitation",
      titleStart: "Will you go on a", titleWord: "date", titleEnd: "with me?",
      desc: "A tiny application for a very important decision. No pressure, just good food, better company, and maybe a little romance.",
      openApp: "Open the application ♥", surpriseMe: "Surprise me ✨",
      tiny: "Zero commitment. Maximum vibes. Probably.",
      float1: "✨ good vibes only", float2: "🍓 one date, please?", float3: "💌 highly confidential",
      float4: "🐒 gentleman awaiting response", float5: "❤️ application pending",
      profileBadge: "♥ MALE PRIMATE · ROMANTIC CANDIDATE"
    },
    profile: {
      badge: "♥ MALE PRIMATE",
      subtitle: "Currently accepting applications for one extremely important date.",
      fact1Label: "Relationship status", fact1Value: "Waiting for her answer",
      fact2Label: "Availability", fact2Value: "Suspiciously available",
      fact3Label: "Romance level", fact3Value: "Highly classified",
      fact4Label: "Date experience", fact4Value: "Under review"
    },
    step1: {
      title: "First things first", question: "Would you like to go on a date?",
      absolutely: "Absolutely", absolutelySub: "I was hoping you would say that.",
      maybe: "Maybe…", maybeSub: "Convince me with good food.",
      yes: "Yes ♥", yesSub: "I was hoping you would say that.",
      no: "No", noSub: "My heart is currently unavailable."
    },
    step2: { title: "Pick a day", question: "When should our little adventure happen?", label: "Choose a date" },
    step3: {
      title: "Choose the mood", question: "What sounds like the perfect date?",
      mood1Name: "Romantic dinner", mood1Sub: "Good food, soft lights, long conversations.",
      mood2Name: "Coffee & a walk", mood2Sub: "Simple, calm, and a little cute.",
      mood3Name: "Something spontaneous", mood3Sub: "No plan. Just follow the feeling.",
      mood4Name: "Movie night", mood4Sub: "Snacks, blankets, and zero interruptions."
    },
    step4: {
      title: "Important question", question: "How excited are you?",
      exc1Value: "100%", exc1Sub: "I am already choosing an outfit.",
      exc2Value: "85%", exc2Sub: "Very excited. Trying to act normal.",
      exc3Value: "70%", exc3Sub: "Quietly excited.",
      exc4Value: "50%", exc4Sub: "Let's see where this goes."
    },
    step5: {
      title: "One last thing", question: "What would make this date perfect?",
      textareaPlaceholder: "Tell me what would make it special…",
      raveLabel: "Rave Handles (optional)", ravePlaceholder: "Instagram, Rave, Discord, etc."
    },
    navBtns: { back: "Back", continue: "Continue", submit: "Submit ♥" },
    validation: { pleaseChoose: "Please choose an answer first.", pleaseDate: "Please choose a date first." },
    confirm: {
      label: "APPLICATION RECEIVED", headline: "It is officially a date.",
      desc: "Your answers have been carefully reviewed by the very serious Darling Primate committee.",
      note: "The gentleman is pleased with your decision.",
      romanceProb: "Romance probability: suspiciously high.",
      primateStatus: "Darling Primate status: extremely happy",
      viewCert: "View Certificate", startOver: "Start over ♥",
      cardAnswer: "Answer", cardDate: "Date", cardMood: "Date style", cardExcitement: "Excitement",
      cardNote: "Perfect date note", cardRave: "Rave Handles", notProvided: "Not provided",
      appNumberPrefix: "Application No."
    },
    cert: {
      badge: "OFFICIALLY CERTIFIED", title: "DARLING PRIMATE ROMANTIC CERTIFICATE",
      profileRole: "Male Romantic Candidate", certifiedDate: "Certified Date ♥",
      mainTitle: "Certified Date",
      desc: "This document confirms that the two parties have reached the highly scientific conclusion that a date is an excellent idea.",
      issuedBy: "Issued by Darling Primate", committee: "The Extremely Serious Committee",
      theGentleman: "The Gentleman", back: "Back", startOver: "Start over ♥",
      certNumberLabel: "Certificate Number", appNumberLabel: "Application Number",
      issueDateLabel: "Issue Date", dateLabel: "Date", moodLabel: "Date Style",
      excitementLabel: "Excitement", raveLabel: "Rave Handles"
    },
    toast: {
      noMessages: [
        "Nice try 😌", "Wrong button.", "Almost!", "The gentleman respectfully disagrees.",
        "Darling Primate has requested another chance.", "The rejection department is currently closed.",
        "Your rejection request has been denied.", "The committee has rejected your rejection.",
        "The No button has left the chat.", "The No button has resigned.",
        "Your answer has been mysteriously changed to romance.", "Darling Primate's lawyer has entered the chat.",
        "Love wins. ♥"
      ],
      surpriseMessages: [
        "The universe says: go on the date ✨", "Darling Primate approves. 🐒♥",
        "Scientific evidence suggests: date.", "The gentleman has received excellent news."
      ]
    },
    meme: {
      strip: [
        "Romance probability: 97.4%", "Scientific accuracy: questionable",
        "Committee seriousness: unnecessarily high", "Gentleman status: confirmed",
        "Date application: dangerously promising", "Rejection department: closed",
        "Primate confidence: increasing", "Good vibes detected.",
        "Her answer is currently under extremely serious review."
      ]
    }
  },

  bn: {
    nav: { badge: "ব্যক্তিগত · রোমান্টিক · আনুষ্ঠানিক", chooseLanguage: "আপনার ভাষা বেছে নিন" },
    hero: {
      eyebrow: "একটি ব্যক্তিগত আমন্ত্রণ",
      titleStart: "আপনি কি আমার সাথে একটি", titleWord: "ডেটে", titleEnd: "যাবেন?",
      desc: "একটি খুব গুরুত্বপূর্ণ সিদ্ধান্তের জন্য একটি ছোট্ট আবেদন। কোনো চাপ নেই, শুধু ভালো খাবার, চমৎকার সঙ্গ, আর হয়তো একটু রোমান্স।",
      openApp: "আবেদন খুলুন ♥", surpriseMe: "আমাকে চমকে দিন ✨",
      tiny: "কোনো প্রতিশ্রুতি নেই। শুধু ভালো অনুভূতি। সম্ভবত।",
      float1: "✨ শুধু ভালো অনুভূতি", float2: "🍓 একটা ডেট হবে?", float3: "💌 অত্যন্ত গোপনীয়",
      float4: "🐒 ভদ্রলোক উত্তরের অপেক্ষায়", float5: "❤️ আবেদন বিবেচনাধীন",
      profileBadge: "♥ পুরুষ প্রাইমেট · রোমান্টিক প্রার্থী"
    },
    profile: {
      badge: "♥ পুরুষ প্রাইমেট",
      subtitle: "বর্তমানে একটি অত্যন্ত গুরুত্বপূর্ণ ডেটের জন্য আবেদন গ্রহণ করা হচ্ছে।",
      fact1Label: "সম্পর্কের অবস্থা", fact1Value: "তার উত্তরের অপেক্ষায়",
      fact2Label: "সময় সুবিধা", fact2Value: "সন্দেহজনকভাবে ফাঁকা",
      fact3Label: "রোমান্স মাত্রা", fact3Value: "অত্যন্ত গোপনীয়",
      fact4Label: "ডেটের অভিজ্ঞতা", fact4Value: "পর্যালোচনাধীন"
    },
    step1: {
      title: "প্রথম কথা", question: "আপনি কি একটি ডেটে যেতে চান?",
      absolutely: "অবশ্যই", absolutelySub: "আমি এটাই আশা করছিলাম।",
      maybe: "হয়তো…", maybeSub: "ভালো খাবার দিয়ে আমাকে রাজি করান।",
      yes: "হ্যাঁ ♥", yesSub: "আমি এটাই আশা করছিলাম।",
      no: "না", noSub: "আমার হৃদয় এখন অনুপলব্ধ।"
    },
    step2: { title: "একটি দিন বেছে নিন", question: "আমাদের ছোট্ট অভিযানটি কবে হবে?", label: "একটি তারিখ বেছে নিন" },
    step3: {
      title: "মেজাজ বেছে নিন", question: "নিখুঁত ডেট কেমন হলে ভালো লাগবে?",
      mood1Name: "রোমান্টিক ডিনার", mood1Sub: "ভালো খাবার, নরম আলো, দীর্ঘ কথোপকথন।",
      mood2Name: "কফি ও হাঁটা", mood2Sub: "সহজ, শান্ত, আর একটু মিষ্টি।",
      mood3Name: "হঠাৎ কিছু একটা", mood3Sub: "কোনো পরিকল্পনা নেই। শুধু অনুভূতি অনুসরণ করুন।",
      mood4Name: "মুভি নাইট", mood4Sub: "নাস্তা, কম্বল, আর কোনো বাধা নেই।"
    },
    step4: {
      title: "গুরুত্বপূর্ণ প্রশ্ন", question: "আপনি কতটা উত্তেজিত?",
      exc1Value: "১০০%", exc1Sub: "আমি এখনই পোশাক বেছে নিচ্ছি।",
      exc2Value: "৮৫%", exc2Sub: "খুব উত্তেজিত। স্বাভাবিক থাকার চেষ্টা করছি।",
      exc3Value: "৭০%", exc3Sub: "নীরবে উত্তেজিত।",
      exc4Value: "৫০%", exc4Sub: "দেখা যাক কী হয়।"
    },
    step5: {
      title: "শেষ একটি কথা", question: "কী এই ডেটটিকে নিখুঁত করবে?",
      textareaPlaceholder: "বলুন কী এটাকে বিশেষ করবে…",
      raveLabel: "রেভ হ্যান্ডেল (ঐচ্ছিক)", ravePlaceholder: "ইনস্টাগ্রাম, রেভ, ডিসকর্ড ইত্যাদি"
    },
    navBtns: { back: "পেছনে", continue: "চালিয়ে যান", submit: "জমা দিন ♥" },
    validation: { pleaseChoose: "অনুগ্রহ করে প্রথমে একটি উত্তর বেছে নিন।", pleaseDate: "অনুগ্রহ করে প্রথমে একটি তারিখ বেছে নিন।" },
    confirm: {
      label: "আবেদন গৃহীত হয়েছে", headline: "এটি এখন আনুষ্ঠানিকভাবে একটি ডেট।",
      desc: "আপনার উত্তরগুলো অত্যন্ত গুরুত্বসহকারে ডার্লিং প্রাইমেট কমিটি পর্যালোচনা করেছে।",
      note: "ভদ্রলোক আপনার সিদ্ধান্তে সন্তুষ্ট।",
      romanceProb: "রোমান্সের সম্ভাবনা: সন্দেহজনকভাবে বেশি।",
      primateStatus: "ডার্লিং প্রাইমেটের অবস্থা: অত্যন্ত খুশি",
      viewCert: "সার্টিফিকেট দেখুন", startOver: "আবার শুরু করুন ♥",
      cardAnswer: "উত্তর", cardDate: "তারিখ", cardMood: "ডেটের ধরন", cardExcitement: "উত্তেজনা",
      cardNote: "নিখুঁত ডেটের নোট", cardRave: "রেভ হ্যান্ডেল", notProvided: "প্রদান করা হয়নি",
      appNumberPrefix: "আবেদন নং"
    },
    cert: {
      badge: "আনুষ্ঠানিকভাবে সনদপ্রাপ্ত", title: "ডার্লিং প্রাইমেট রোমান্টিক সার্টিফিকেট",
      profileRole: "পুরুষ রোমান্টিক প্রার্থী", certifiedDate: "সনদপ্রাপ্ত ডেট ♥",
      mainTitle: "সনদপ্রাপ্ত ডেট",
      desc: "এই নথিটি নিশ্চিত করে যে উভয় পক্ষ অত্যন্ত বৈজ্ঞানিক সিদ্ধান্তে পৌঁছেছে যে একটি ডেট একটি চমৎকার ধারণা।",
      issuedBy: "ডার্লিং প্রাইমেট কর্তৃক জারি", committee: "অত্যন্ত সিরিয়াস কমিটি",
      theGentleman: "ভদ্রলোক", back: "পেছনে", startOver: "আবার শুরু করুন ♥",
      certNumberLabel: "সার্টিফিকেট নম্বর", appNumberLabel: "আবেদন নম্বর",
      issueDateLabel: "ইস্যুর তারিখ", dateLabel: "তারিখ", moodLabel: "ডেটের ধরন",
      excitementLabel: "উত্তেজনা", raveLabel: "রেভ হ্যান্ডেল"
    },
    toast: {
      noMessages: [
        "চেষ্টা ভালো ছিল 😌", "ভুল বোতাম।", "প্রায় হয়ে গিয়েছিল!", "ভদ্রলোক সবিনয়ে দ্বিমত পোষণ করছেন।",
        "ডার্লিং প্রাইমেট আরেকটি সুযোগ চেয়েছেন।", "প্রত্যাখ্যান বিভাগ বর্তমানে বন্ধ।",
        "আপনার প্রত্যাখ্যানের অনুরোধ প্রত্যাখ্যাত হয়েছে।", "কমিটি আপনার প্রত্যাখ্যানকে প্রত্যাখ্যান করেছে।",
        "না বোতামটি চ্যাট ছেড়ে চলে গেছে।", "না বোতামটি পদত্যাগ করেছে।",
        "আপনার উত্তর রহস্যজনকভাবে রোমান্সে পরিবর্তিত হয়ে গেছে।", "ডার্লিং প্রাইমেটের আইনজীবী চ্যাটে প্রবেশ করেছেন।",
        "ভালোবাসার জয় হলো। ♥"
      ],
      surpriseMessages: [
        "মহাবিশ্ব বলছে: ডেটে যান ✨", "ডার্লিং প্রাইমেট অনুমোদন করেছেন। 🐒♥",
        "বৈজ্ঞানিক প্রমাণ ইঙ্গিত দেয়: ডেট।", "ভদ্রলোক চমৎকার খবর পেয়েছেন।"
      ]
    },
    meme: {
      strip: [
        "রোমান্সের সম্ভাবনা: ৯৭.৪%", "বৈজ্ঞানিক নির্ভুলতা: সন্দেহজনক",
        "কমিটির গাম্ভীর্য: অপ্রয়োজনীয়ভাবে বেশি", "ভদ্রলোকের মর্যাদা: নিশ্চিত",
        "ডেট আবেদন: বিপজ্জনকভাবে প্রতিশ্রুতিশীল", "প্রত্যাখ্যান বিভাগ: বন্ধ",
        "প্রাইমেটের আত্মবিশ্বাস: বাড়ছে", "ভালো অনুভূতি শনাক্ত হয়েছে।",
        "তার উত্তর বর্তমানে অত্যন্ত গুরুত্বসহকারে পর্যালোচনাধীন।"
      ]
    }
  },

  hi: {
    nav: { badge: "निजी · रोमांटिक · आधिकारिक", chooseLanguage: "अपनी भाषा चुनें" },
    hero: {
      eyebrow: "एक निजी निमंत्रण",
      titleStart: "क्या आप मेरे साथ एक", titleWord: "डेट", titleEnd: "पर चलेंगी?",
      desc: "एक बहुत ज़रूरी फैसले के लिए एक छोटा सा आवेदन। कोई दबाव नहीं, बस अच्छा खाना, बेहतरीन साथ, और शायद थोड़ा सा रोमांस।",
      openApp: "आवेदन खोलें ♥", surpriseMe: "मुझे चौंका दीजिए ✨",
      tiny: "कोई प्रतिबद्धता नहीं। बस अच्छा माहौल। शायद।",
      float1: "✨ बस अच्छा माहौल", float2: "🍓 एक डेट, प्लीज़?", float3: "💌 पूरी तरह गोपनीय",
      float4: "🐒 सज्जन जवाब का इंतज़ार कर रहे हैं", float5: "❤️ आवेदन विचाराधीन",
      profileBadge: "♥ पुरुष प्राइमेट · रोमांटिक उम्मीदवार"
    },
    profile: {
      badge: "♥ पुरुष प्राइमेट",
      subtitle: "फिलहाल एक बेहद ज़रूरी डेट के लिए आवेदन स्वीकार किए जा रहे हैं।",
      fact1Label: "रिश्ते की स्थिति", fact1Value: "उसके जवाब का इंतज़ार",
      fact2Label: "उपलब्धता", fact2Value: "संदेहास्पद रूप से खाली",
      fact3Label: "रोमांस स्तर", fact3Value: "अत्यंत गोपनीय",
      fact4Label: "डेटिंग अनुभव", fact4Value: "समीक्षाधीन"
    },
    step1: {
      title: "सबसे पहली बात", question: "क्या आप डेट पर जाना चाहेंगी?",
      absolutely: "बिल्कुल", absolutelySub: "मुझे यही उम्मीद थी।",
      maybe: "शायद…", maybeSub: "अच्छे खाने से मुझे मनाइए।",
      yes: "हाँ ♥", yesSub: "मुझे यही उम्मीद थी।",
      no: "नहीं", noSub: "मेरा दिल फिलहाल उपलब्ध नहीं है।"
    },
    step2: { title: "एक दिन चुनिए", question: "हमारा छोटा सा एडवेंचर कब हो?", label: "एक तारीख चुनें" },
    step3: {
      title: "माहौल चुनिए", question: "परफेक्ट डेट कैसी लगेगी?",
      mood1Name: "रोमांटिक डिनर", mood1Sub: "अच्छा खाना, हल्की रोशनी, लंबी बातें।",
      mood2Name: "कॉफी और वॉक", mood2Sub: "सीधा-सादा, शांत, और थोड़ा प्यारा।",
      mood3Name: "कुछ अचानक", mood3Sub: "कोई प्लान नहीं। बस दिल की सुनिए।",
      mood4Name: "मूवी नाइट", mood4Sub: "स्नैक्स, कंबल, और कोई रुकावट नहीं।"
    },
    step4: {
      title: "ज़रूरी सवाल", question: "आप कितनी उत्साहित हैं?",
      exc1Value: "100%", exc1Sub: "मैं अभी से कपड़े चुन रही हूं।",
      exc2Value: "85%", exc2Sub: "बहुत उत्साहित। नॉर्मल दिखने की कोशिश में।",
      exc3Value: "70%", exc3Sub: "चुपचाप उत्साहित।",
      exc4Value: "50%", exc4Sub: "देखते हैं क्या होता है।"
    },
    step5: {
      title: "आखिरी बात", question: "क्या चीज़ इस डेट को परफेक्ट बनाएगी?",
      textareaPlaceholder: "बताइए क्या इसे खास बना देगा…",
      raveLabel: "रेव हैंडल (वैकल्पिक)", ravePlaceholder: "इंस्टाग्राम, रेव, डिस्कॉर्ड आदि"
    },
    navBtns: { back: "वापस", continue: "आगे बढ़ें", submit: "सबमिट करें ♥" },
    validation: { pleaseChoose: "कृपया पहले एक जवाब चुनें।", pleaseDate: "कृपया पहले एक तारीख चुनें।" },
    confirm: {
      label: "आवेदन प्राप्त हुआ", headline: "अब यह आधिकारिक तौर पर एक डेट है।",
      desc: "आपके जवाबों की डार्लिंग प्राइमेट समिति ने बड़ी गंभीरता से समीक्षा की है।",
      note: "सज्जन आपके फैसले से बेहद खुश हैं।",
      romanceProb: "रोमांस की संभावना: संदेहास्पद रूप से ज़्यादा।",
      primateStatus: "डार्लिंग प्राइमेट की स्थिति: बेहद खुश",
      viewCert: "सर्टिफिकेट देखें", startOver: "फिर से शुरू करें ♥",
      cardAnswer: "जवाब", cardDate: "तारीख", cardMood: "डेट स्टाइल", cardExcitement: "उत्साह",
      cardNote: "परफेक्ट डेट नोट", cardRave: "रेव हैंडल", notProvided: "नहीं दिया गया",
      appNumberPrefix: "आवेदन संख्या"
    },
    cert: {
      badge: "आधिकारिक रूप से प्रमाणित", title: "डार्लिंग प्राइमेट रोमांटिक सर्टिफिकेट",
      profileRole: "पुरुष रोमांटिक उम्मीदवार", certifiedDate: "प्रमाणित डेट ♥",
      mainTitle: "प्रमाणित डेट",
      desc: "यह दस्तावेज़ पुष्टि करता है कि दोनों पक्ष इस अत्यंत वैज्ञानिक निष्कर्ष पर पहुंचे हैं कि डेट पर जाना एक शानदार विचार है।",
      issuedBy: "डार्लिंग प्राइमेट द्वारा जारी", committee: "अत्यंत गंभीर समिति",
      theGentleman: "सज्जन", back: "वापस", startOver: "फिर से शुरू करें ♥",
      certNumberLabel: "सर्टिफिकेट नंबर", appNumberLabel: "आवेदन नंबर",
      issueDateLabel: "जारी करने की तारीख", dateLabel: "तारीख", moodLabel: "डेट स्टाइल",
      excitementLabel: "उत्साह", raveLabel: "रेव हैंडल"
    },
    toast: {
      noMessages: [
        "अच्छी कोशिश 😌", "गलत बटन।", "बस थोड़े से चूक गईं!", "सज्जन विनम्रता से असहमत हैं।",
        "डार्लिंग प्राइमेट ने एक और मौका मांगा है।", "अस्वीकृति विभाग फिलहाल बंद है।",
        "आपके अस्वीकृति अनुरोध को अस्वीकार कर दिया गया है।", "समिति ने आपकी अस्वीकृति को अस्वीकार कर दिया है।",
        "नहीं बटन चैट छोड़ चुका है।", "नहीं बटन ने इस्तीफ़ा दे दिया है।",
        "आपका जवाब रहस्यमय ढंग से रोमांस में बदल गया है।", "डार्लिंग प्राइमेट के वकील चैट में आ गए हैं।",
        "प्यार की जीत हुई। ♥"
      ],
      surpriseMessages: [
        "ब्रह्मांड कहता है: डेट पर जाइए ✨", "डार्लिंग प्राइमेट की मंज़ूरी। 🐒♥",
        "वैज्ञानिक सबूत बताते हैं: डेट।", "सज्जन को शानदार खबर मिली है।"
      ]
    },
    meme: {
      strip: [
        "रोमांस की संभावना: 97.4%", "वैज्ञानिक सटीकता: संदिग्ध",
        "समिति की गंभीरता: अनावश्यक रूप से ज़्यादा", "सज्जन का दर्जा: पुष्ट",
        "डेट आवेदन: खतरनाक रूप से आशाजनक", "अस्वीकृति विभाग: बंद",
        "प्राइमेट का आत्मविश्वास: बढ़ रहा है", "अच्छा माहौल महसूस हुआ।",
        "उनका जवाब फिलहाल अत्यंत गंभीरता से समीक्षाधीन है।"
      ]
    }
  },

  ur: {
    nav: { badge: "نجی · رومانوی · سرکاری", chooseLanguage: "اپنی زبان منتخب کریں" },
    hero: {
      eyebrow: "ایک نجی دعوت",
      titleStart: "کیا آپ میرے ساتھ ایک", titleWord: "ڈیٹ", titleEnd: "پر چلیں گی؟",
      desc: "ایک بہت اہم فیصلے کے لیے ایک چھوٹی سی درخواست۔ کوئی دباؤ نہیں، بس اچھا کھانا، بہترین ساتھ، اور شاید تھوڑا سا رومانس۔",
      openApp: "درخواست کھولیں ♥", surpriseMe: "مجھے حیران کر دیں ✨",
      tiny: "کوئی وعدہ نہیں۔ بس اچھا موڈ۔ شاید۔",
      float1: "✨ بس اچھا موڈ", float2: "🍓 ایک ڈیٹ، پلیز؟", float3: "💌 نہایت خفیہ",
      float4: "🐒 صاحب جواب کے منتظر ہیں", float5: "❤️ درخواست زیرِ غور",
      profileBadge: "♥ مرد پرائمیٹ · رومانوی امیدوار"
    },
    profile: {
      badge: "♥ مرد پرائمیٹ",
      subtitle: "فی الحال ایک نہایت اہم ڈیٹ کے لیے درخواستیں قبول کی جا رہی ہیں۔",
      fact1Label: "تعلق کی حیثیت", fact1Value: "اُس کے جواب کا منتظر",
      fact2Label: "دستیابی", fact2Value: "مشکوک حد تک فارغ",
      fact3Label: "رومانس کی سطح", fact3Value: "انتہائی خفیہ",
      fact4Label: "ڈیٹنگ کا تجربہ", fact4Value: "زیرِ جائزہ"
    },
    step1: {
      title: "سب سے پہلی بات", question: "کیا آپ ڈیٹ پر جانا پسند کریں گی؟",
      absolutely: "بالکل", absolutelySub: "مجھے یہی امید تھی۔",
      maybe: "شاید…", maybeSub: "اچھے کھانے سے مجھے قائل کریں۔",
      yes: "ہاں ♥", yesSub: "مجھے یہی امید تھی۔",
      no: "نہیں", noSub: "میرا دل فی الحال دستیاب نہیں۔"
    },
    step2: { title: "ایک دن منتخب کریں", question: "ہمارا چھوٹا سا ایڈونچر کب ہو؟", label: "تاریخ منتخب کریں" },
    step3: {
      title: "موڈ منتخب کریں", question: "بہترین ڈیٹ کیسی لگے گی؟",
      mood1Name: "رومانوی ڈنر", mood1Sub: "اچھا کھانا، ہلکی روشنی، لمبی باتیں۔",
      mood2Name: "کافی اور واک", mood2Sub: "سادہ، پرسکون، اور تھوڑا سا پیارا۔",
      mood3Name: "کچھ اچانک", mood3Sub: "کوئی منصوبہ نہیں۔ بس دل کی سنیں۔",
      mood4Name: "مووی نائٹ", mood4Sub: "اسنیکس، کمبل، اور کوئی رکاوٹ نہیں۔"
    },
    step4: {
      title: "اہم سوال", question: "آپ کتنی پرجوش ہیں؟",
      exc1Value: "100%", exc1Sub: "میں ابھی سے کپڑے چن رہی ہوں۔",
      exc2Value: "85%", exc2Sub: "بہت پرجوش۔ نارمل دکھنے کی کوشش میں۔",
      exc3Value: "70%", exc3Sub: "خاموشی سے پرجوش۔",
      exc4Value: "50%", exc4Sub: "دیکھتے ہیں کیا ہوتا ہے۔"
    },
    step5: {
      title: "آخری بات", question: "کیا چیز اس ڈیٹ کو بہترین بنائے گی؟",
      textareaPlaceholder: "بتائیں کیا اسے خاص بنائے گا…",
      raveLabel: "ریو ہینڈل (اختیاری)", ravePlaceholder: "انسٹاگرام، ریو، ڈسکارڈ وغیرہ"
    },
    navBtns: { back: "واپس", continue: "جاری رکھیں", submit: "جمع کروائیں ♥" },
    validation: { pleaseChoose: "براہِ کرم پہلے ایک جواب منتخب کریں۔", pleaseDate: "براہِ کرم پہلے ایک تاریخ منتخب کریں۔" },
    confirm: {
      label: "درخواست موصول ہو گئی", headline: "اب یہ باضابطہ طور پر ایک ڈیٹ ہے۔",
      desc: "آپ کے جوابات کا ڈارلنگ پرائمیٹ کمیٹی نے نہایت سنجیدگی سے جائزہ لیا ہے۔",
      note: "صاحب آپ کے فیصلے سے بہت خوش ہیں۔",
      romanceProb: "رومانس کا امکان: مشکوک حد تک زیادہ۔",
      primateStatus: "ڈارلنگ پرائمیٹ کی حیثیت: انتہائی خوش",
      viewCert: "سرٹیفکیٹ دیکھیں", startOver: "دوبارہ شروع کریں ♥",
      cardAnswer: "جواب", cardDate: "تاریخ", cardMood: "ڈیٹ کا انداز", cardExcitement: "جوش",
      cardNote: "بہترین ڈیٹ کا نوٹ", cardRave: "ریو ہینڈل", notProvided: "فراہم نہیں کیا گیا",
      appNumberPrefix: "درخواست نمبر"
    },
    cert: {
      badge: "باضابطہ طور پر تصدیق شدہ", title: "ڈارلنگ پرائمیٹ رومانوی سرٹیفکیٹ",
      profileRole: "مرد رومانوی امیدوار", certifiedDate: "تصدیق شدہ ڈیٹ ♥",
      mainTitle: "تصدیق شدہ ڈیٹ",
      desc: "یہ دستاویز تصدیق کرتی ہے کہ دونوں فریق اس انتہائی سائنسی نتیجے پر پہنچے ہیں کہ ڈیٹ پر جانا ایک بہترین خیال ہے۔",
      issuedBy: "ڈارلنگ پرائمیٹ کی جانب سے جاری", committee: "انتہائی سنجیدہ کمیٹی",
      theGentleman: "صاحب", back: "واپس", startOver: "دوبارہ شروع کریں ♥",
      certNumberLabel: "سرٹیفکیٹ نمبر", appNumberLabel: "درخواست نمبر",
      issueDateLabel: "اجراء کی تاریخ", dateLabel: "تاریخ", moodLabel: "ڈیٹ کا انداز",
      excitementLabel: "جوش", raveLabel: "ریو ہینڈل"
    },
    toast: {
      noMessages: [
        "اچھی کوشش 😌", "غلط بٹن۔", "بس تھوڑے سے رہ گئیں!", "صاحب مؤدبانہ طور پر اختلاف کرتے ہیں۔",
        "ڈارلنگ پرائمیٹ نے ایک اور موقع مانگا ہے۔", "انکار کا شعبہ فی الحال بند ہے۔",
        "آپ کی انکار کی درخواست مسترد کر دی گئی ہے۔", "کمیٹی نے آپ کے انکار کو مسترد کر دیا ہے۔",
        "نہیں بٹن چیٹ چھوڑ چکا ہے۔", "نہیں بٹن نے استعفیٰ دے دیا ہے۔",
        "آپ کا جواب پراسرار طور پر رومانس میں بدل گیا ہے۔", "ڈارلنگ پرائمیٹ کا وکیل چیٹ میں آ گیا ہے۔",
        "محبت کی جیت ہوئی۔ ♥"
      ],
      surpriseMessages: [
        "کائنات کہتی ہے: ڈیٹ پر جائیں ✨", "ڈارلنگ پرائمیٹ کی منظوری۔ 🐒♥",
        "سائنسی ثبوت بتاتے ہیں: ڈیٹ۔", "صاحب کو بہترین خبر ملی ہے۔"
      ]
    },
    meme: {
      strip: [
        "رومانس کا امکان: 97.4%", "سائنسی درستگی: مشکوک",
        "کمیٹی کی سنجیدگی: غیر ضروری حد تک زیادہ", "صاحب کی حیثیت: تصدیق شدہ",
        "ڈیٹ کی درخواست: خطرناک حد تک امید افزا", "انکار کا شعبہ: بند",
        "پرائمیٹ کا اعتماد: بڑھ رہا ہے", "اچھا موڈ محسوس ہوا۔",
        "اُن کا جواب فی الحال نہایت سنجیدگی سے زیرِ جائزہ ہے۔"
      ]
    }
  },

  ar: {
    nav: { badge: "خاص · رومانسي · رسمي", chooseLanguage: "اختاري لغتك" },
    hero: {
      eyebrow: "دعوة خاصة",
      titleStart: "هل توافقين على", titleWord: "موعد", titleEnd: "معي؟",
      desc: "طلب صغير من أجل قرار مهم جدًا. لا ضغط، فقط طعام شهي، رفقة أفضل، وربما القليل من الرومانسية.",
      openApp: "افتحي الطلب ♥", surpriseMe: "فاجئيني ✨",
      tiny: "لا التزام. أجواء رائعة فقط. ربما.",
      float1: "✨ أجواء إيجابية فقط", float2: "🍓 موعد واحد فقط؟", float3: "💌 سرّي للغاية",
      float4: "🐒 السيد بانتظار الرد", float5: "❤️ الطلب قيد المراجعة",
      profileBadge: "♥ قرد ذكر · مرشح رومانسي"
    },
    profile: {
      badge: "♥ قرد ذكر",
      subtitle: "يستقبل حاليًا طلبات لموعد واحد بالغ الأهمية.",
      fact1Label: "الحالة الاجتماعية", fact1Value: "بانتظار ردّها",
      fact2Label: "التوفر", fact2Value: "متاح بشكل مثير للريبة",
      fact3Label: "مستوى الرومانسية", fact3Value: "سرّي للغاية",
      fact4Label: "خبرة المواعدة", fact4Value: "قيد المراجعة"
    },
    step1: {
      title: "أولًا وقبل كل شيء", question: "هل ترغبين في الذهاب في موعد؟",
      absolutely: "بالتأكيد", absolutelySub: "كنت آمل أن تقولي هذا.",
      maybe: "ربما…", maybeSub: "أقنعيني بطعام شهي.",
      yes: "نعم ♥", yesSub: "كنت آمل أن تقولي هذا.",
      no: "لا", noSub: "قلبي غير متاح حاليًا."
    },
    step2: { title: "اختاري يومًا", question: "متى ستكون مغامرتنا الصغيرة؟", label: "اختاري تاريخًا" },
    step3: {
      title: "اختاري الأجواء", question: "ما الذي يبدو وكأنه الموعد المثالي؟",
      mood1Name: "عشاء رومانسي", mood1Sub: "طعام شهي، إضاءة هادئة، أحاديث طويلة.",
      mood2Name: "قهوة ونزهة", mood2Sub: "بسيط، هادئ، ولطيف قليلاً.",
      mood3Name: "شيء عفوي", mood3Sub: "بلا خطة. فقط اتبعي شعورك.",
      mood4Name: "أمسية أفلام", mood4Sub: "وجبات خفيفة، بطانيات، وبلا مقاطعات."
    },
    step4: {
      title: "سؤال مهم", question: "ما مدى حماسك؟",
      exc1Value: "100%", exc1Sub: "أنا بالفعل أختار ملابسي.",
      exc2Value: "85%", exc2Sub: "متحمسة جدًا. أحاول التصرف بشكل طبيعي.",
      exc3Value: "70%", exc3Sub: "متحمسة بهدوء.",
      exc4Value: "50%", exc4Sub: "لنرَ إلى أين سيصل هذا."
    },
    step5: {
      title: "شيء أخير", question: "ما الذي سيجعل هذا الموعد مثاليًا؟",
      textareaPlaceholder: "أخبريني بما سيجعله مميزًا…",
      raveLabel: "حسابات التواصل (اختياري)", ravePlaceholder: "انستغرام، Rave، ديسكورد، إلخ"
    },
    navBtns: { back: "رجوع", continue: "متابعة", submit: "إرسال ♥" },
    validation: { pleaseChoose: "الرجاء اختيار إجابة أولًا.", pleaseDate: "الرجاء اختيار تاريخ أولًا." },
    confirm: {
      label: "تم استلام الطلب", headline: "أصبح الأمر موعدًا رسميًا.",
      desc: "تمت مراجعة إجاباتك بعناية فائقة من قبل لجنة دارلينغ برايمت الجادة جدًا.",
      note: "السيد سعيد جدًا بقرارك.",
      romanceProb: "احتمال الرومانسية: مرتفع بشكل مثير للريبة.",
      primateStatus: "حالة دارلينغ برايمت: سعيد للغاية",
      viewCert: "عرض الشهادة", startOver: "البدء من جديد ♥",
      cardAnswer: "الإجابة", cardDate: "التاريخ", cardMood: "أسلوب الموعد", cardExcitement: "الحماس",
      cardNote: "ملاحظة الموعد المثالي", cardRave: "حسابات التواصل", notProvided: "غير مُقدَّم",
      appNumberPrefix: "رقم الطلب"
    },
    cert: {
      badge: "معتمد رسميًا", title: "شهادة دارلينغ برايمت الرومانسية",
      profileRole: "مرشح رومانسي ذكر", certifiedDate: "موعد معتمد ♥",
      mainTitle: "موعد معتمد",
      desc: "تؤكد هذه الوثيقة أن الطرفين توصلا إلى استنتاج علمي بالغ الدقة بأن الموعد فكرة ممتازة.",
      issuedBy: "صادرة عن دارلينغ برايمت", committee: "اللجنة الجادة للغاية",
      theGentleman: "السيد", back: "رجوع", startOver: "البدء من جديد ♥",
      certNumberLabel: "رقم الشهادة", appNumberLabel: "رقم الطلب",
      issueDateLabel: "تاريخ الإصدار", dateLabel: "التاريخ", moodLabel: "أسلوب الموعد",
      excitementLabel: "الحماس", raveLabel: "حسابات التواصل"
    },
    toast: {
      noMessages: [
        "محاولة جيدة 😌", "زر خاطئ.", "كدتِ تفعلينها!", "يختلف السيد معكِ بكل احترام.",
        "طلب دارلينغ برايمت فرصة أخرى.", "قسم الرفض مغلق حاليًا.",
        "تم رفض طلب رفضكِ.", "رفضت اللجنة رفضكِ.",
        "زر «لا» غادر المحادثة.", "زر «لا» قدّم استقالته.",
        "تم تغيير إجابتكِ بشكل غامض إلى الرومانسية.", "دخل محامي دارلينغ برايمت المحادثة.",
        "الحب ينتصر. ♥"
      ],
      surpriseMessages: [
        "الكون يقول: اذهبي في الموعد ✨", "دارلينغ برايمت يوافق. 🐒♥",
        "الأدلة العلمية تشير إلى: الموعد.", "تلقّى السيد خبرًا رائعًا."
      ]
    },
    meme: {
      strip: [
        "احتمال الرومانسية: 97.4%", "الدقة العلمية: مشكوك فيها",
        "جدّية اللجنة: مرتفعة بلا داعٍ", "حالة السيد: مؤكدة",
        "طلب الموعد: واعد بشكل خطير", "قسم الرفض: مغلق",
        "ثقة القرد: في ازدياد", "تم رصد أجواء إيجابية.",
        "ردّها حاليًا قيد مراجعة بالغة الجدية."
      ]
    }
  },

  tr: {
    nav: { badge: "ÖZEL · ROMANTİK · RESMİ", chooseLanguage: "Dilinizi seçin" },
    hero: {
      eyebrow: "Özel bir davet",
      titleStart: "Benimle bir", titleWord: "randevuya", titleEnd: "çıkar mısın?",
      desc: "Çok önemli bir karar için ufak bir başvuru. Baskı yok, sadece güzel yemek, iyi bir sohbet ve belki biraz romantizm.",
      openApp: "Başvuruyu aç ♥", surpriseMe: "Beni şaşırt ✨",
      tiny: "Sıfır taahhüt. Maksimum keyif. Muhtemelen.",
      float1: "✨ sadece iyi enerji", float2: "🍓 bir randevu olur mu?", float3: "💌 son derece gizli",
      float4: "🐒 centilmen cevabını bekliyor", float5: "❤️ başvuru değerlendiriliyor",
      profileBadge: "♥ ERKEK PRİMAT · ROMANTİK ADAY"
    },
    profile: {
      badge: "♥ ERKEK PRİMAT",
      subtitle: "Şu anda son derece önemli bir randevu için başvuru kabul ediyor.",
      fact1Label: "İlişki durumu", fact1Value: "Cevabını bekliyor",
      fact2Label: "Müsaitlik", fact2Value: "Şüphe uyandıracak kadar müsait",
      fact3Label: "Romantizm seviyesi", fact3Value: "Son derece gizli",
      fact4Label: "Randevu deneyimi", fact4Value: "İnceleniyor"
    },
    step1: {
      title: "Önce en önemlisi", question: "Bir randevuya çıkmak ister misin?",
      absolutely: "Kesinlikle", absolutelySub: "Bunu söylemeni umuyordum.",
      maybe: "Belki…", maybeSub: "Beni güzel bir yemekle ikna et.",
      yes: "Evet ♥", yesSub: "Bunu söylemeni umuyordum.",
      no: "Hayır", noSub: "Kalbim şu anda müsait değil."
    },
    step2: { title: "Bir gün seç", question: "Küçük maceramız ne zaman olsun?", label: "Bir tarih seç" },
    step3: {
      title: "Havayı seç", question: "Sana göre mükemmel randevu nasıl olur?",
      mood1Name: "Romantik akşam yemeği", mood1Sub: "Güzel yemek, yumuşak ışık, uzun sohbetler.",
      mood2Name: "Kahve ve yürüyüş", mood2Sub: "Basit, sakin ve biraz sevimli.",
      mood3Name: "Spontane bir şey", mood3Sub: "Plan yok. Sadece hissettiğin yeri takip et.",
      mood4Name: "Film gecesi", mood4Sub: "Atıştırmalık, battaniye ve sıfır kesinti."
    },
    step4: {
      title: "Önemli bir soru", question: "Ne kadar heyecanlısın?",
      exc1Value: "%100", exc1Sub: "Şimdiden kıyafet seçiyorum.",
      exc2Value: "%85", exc2Sub: "Çok heyecanlıyım. Normal davranmaya çalışıyorum.",
      exc3Value: "%70", exc3Sub: "Sessizce heyecanlıyım.",
      exc4Value: "%50", exc4Sub: "Bakalım nereye varacak."
    },
    step5: {
      title: "Son bir şey", question: "Bu randevuyu mükemmel yapacak şey ne olurdu?",
      textareaPlaceholder: "Onu özel kılacak şeyi anlat…",
      raveLabel: "Sosyal medya (isteğe bağlı)", ravePlaceholder: "Instagram, Rave, Discord vb."
    },
    navBtns: { back: "Geri", continue: "Devam et", submit: "Gönder ♥" },
    validation: { pleaseChoose: "Lütfen önce bir cevap seç.", pleaseDate: "Lütfen önce bir tarih seç." },
    confirm: {
      label: "BAŞVURU ALINDI", headline: "Artık resmen bir randevu.",
      desc: "Cevapların, son derece ciddi Darling Primate komitesi tarafından özenle incelendi.",
      note: "Centilmen, kararından çok memnun.",
      romanceProb: "Romantizm olasılığı: şüphe uyandıracak kadar yüksek.",
      primateStatus: "Darling Primate durumu: son derece mutlu",
      viewCert: "Sertifikayı görüntüle", startOver: "Baştan başla ♥",
      cardAnswer: "Cevap", cardDate: "Tarih", cardMood: "Randevu tarzı", cardExcitement: "Heyecan",
      cardNote: "Mükemmel randevu notu", cardRave: "Sosyal medya", notProvided: "Belirtilmedi",
      appNumberPrefix: "Başvuru No."
    },
    cert: {
      badge: "RESMİ OLARAK ONAYLANDI", title: "DARLING PRIMATE ROMANTİK SERTİFİKASI",
      profileRole: "Erkek Romantik Aday", certifiedDate: "Onaylı Randevu ♥",
      mainTitle: "Onaylı Randevu",
      desc: "Bu belge, her iki tarafın da bir randevunun mükemmel bir fikir olduğu son derece bilimsel sonucuna vardığını onaylar.",
      issuedBy: "Darling Primate tarafından düzenlenmiştir", committee: "Son Derece Ciddi Komite",
      theGentleman: "Centilmen", back: "Geri", startOver: "Baştan başla ♥",
      certNumberLabel: "Sertifika Numarası", appNumberLabel: "Başvuru Numarası",
      issueDateLabel: "Düzenlenme Tarihi", dateLabel: "Tarih", moodLabel: "Randevu Tarzı",
      excitementLabel: "Heyecan", raveLabel: "Sosyal medya"
    },
    toast: {
      noMessages: [
        "İyi deneme 😌", "Yanlış buton.", "Neredeyse!", "Centilmen kibarca katılmıyor.",
        "Darling Primate bir şans daha istedi.", "Reddetme departmanı şu anda kapalı.",
        "Reddetme talebin reddedildi.", "Komite reddini reddetti.",
        "Hayır butonu sohbeti terk etti.", "Hayır butonu istifa etti.",
        "Cevabın gizemli bir şekilde romantizme dönüştü.", "Darling Primate'in avukatı sohbete katıldı.",
        "Aşk kazanır. ♥"
      ],
      surpriseMessages: [
        "Evren diyor ki: randevuya git ✨", "Darling Primate onaylıyor. 🐒♥",
        "Bilimsel kanıtlar şunu gösteriyor: randevu.", "Centilmen harika bir haber aldı."
      ]
    },
    meme: {
      strip: [
        "Romantizm olasılığı: %97.4", "Bilimsel doğruluk: şüpheli",
        "Komite ciddiyeti: gereksiz derecede yüksek", "Centilmen durumu: onaylandı",
        "Randevu başvurusu: tehlikeli derecede umut verici", "Reddetme departmanı: kapalı",
        "Primat özgüveni: artıyor", "İyi enerji tespit edildi.",
        "Cevabı şu anda son derece ciddi bir şekilde inceleniyor."
      ]
    }
  }
};

const RTL_LANGS = ["ur", "ar"];

/* ==========================================================
   2. STATE
   ========================================================== */
let currentLang = "en";
let currentStep = 1;
const TOTAL_STEPS = 5;

const application = {
  answer: "",
  date: "",
  mood: "",
  excitement: "",
  note: "",
  raveHandles: ""
};

let appNumber = "";
let certNumber = "";
let noAttemptCount = 0;
let reducedMotion = false;

/* ==========================================================
   3. i18n ENGINE
   ========================================================== */
function t(path) {
  const parts = path.split(".");
  let node = translations[currentLang];
  for (const p of parts) {
    if (!node) break;
    node = node[p];
  }
  if (node === undefined) {
    // fallback to English
    node = translations.en;
    for (const p of parts) {
      if (!node) break;
      node = node[p];
    }
  }
  return node !== undefined ? node : "";
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = RTL_LANGS.includes(currentLang) ? "rtl" : "ltr";

  // simple text nodes tagged with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (typeof val === "string") el.textContent = val;
  });

  // update lang button display
  const names = { en: "English", bn: "বাংলা", hi: "हिन्दी", ur: "اردو", ar: "العربية", tr: "Türkçe" };
  const flags = { en: "🇬🇧", bn: "🇧🇩", hi: "🇮🇳", ur: "🇵🇰", ar: "🇸🇦", tr: "🇹🇷" };
  const flagEl = document.getElementById("langCurrentFlag");
  const nameEl = document.getElementById("langCurrentName");
  if (flagEl) flagEl.textContent = flags[currentLang];
  if (nameEl) nameEl.textContent = names[currentLang];

  document.querySelectorAll("#langList li").forEach(li => {
    li.setAttribute("aria-selected", li.getAttribute("data-lang") === currentLang ? "true" : "false");
  });

  // re-render dynamic pieces so JS-generated text updates too
  renderMemeStrip();
  if (!document.getElementById("screen-app").hidden) renderStep(currentStep);
  if (!document.getElementById("screen-confirm").hidden) renderConfirmation();
  if (!document.getElementById("screen-cert").hidden) renderCertificate();
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  try { localStorage.setItem("dp_language", lang); } catch (e) {}
  applyLanguage();
}

function loadLanguagePreference() {
  let saved = "en";
  try { saved = localStorage.getItem("dp_language") || "en"; } catch (e) {}
  currentLang = translations[saved] ? saved : "en";
}

/* ==========================================================
   4. SCREEN MANAGEMENT
   ========================================================== */
function showScreen(id) {
  document.querySelectorAll(".screen[data-screen]").forEach(s => {
    s.hidden = s.id !== id;
  });
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

/* ==========================================================
   5. PARTICLES
   ========================================================== */
function initParticles() {
  const field = document.getElementById("particleField");
  if (!field || reducedMotion) return;
  const count = window.innerWidth < 640 ? 10 : 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    const size = 3 + Math.random() * 6;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    p.style.animationDuration = (14 + Math.random() * 16) + "s";
    p.style.animationDelay = (Math.random() * 16) + "s";
    field.appendChild(p);
  }
}

/* ==========================================================
   6. TOASTS
   ========================================================== */
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 3100);
}

/* ==========================================================
   7. MEME STRIP (hero)
   ========================================================== */
function renderMemeStrip() {
  const strip = document.getElementById("memeStrip");
  if (!strip) return;
  const messages = t("meme.strip");
  if (!Array.isArray(messages) || !messages.length) return;
  const pick = messages[Math.floor(Math.random() * messages.length)];
  strip.textContent = pick;
}

/* ==========================================================
   8. "NO" BUTTON — impossible to click, mobile friendly
   ========================================================== */
function moveNoButton(el) {
  if (!el) return;
  const rect = el.getBoundingClientRect();

  if (!el.classList.contains("no-btn-fixed")) {
    // lock current visual position, then switch to fixed positioning
    el.style.position = "fixed";
    el.style.top = rect.top + "px";
    el.style.left = rect.left + "px";
    el.style.margin = "0";
    el.classList.add("no-btn-fixed");
    // force reflow so the transition applies to the next frame, not this jump
    void el.offsetWidth;
  }

  const w = el.offsetWidth || 140;
  const h = el.offsetHeight || 54;
  const margin = 14;
  const navH = 76; // keep clear of the fixed nav bar
  const maxX = Math.max(margin, window.innerWidth - w - margin);
  const maxY = Math.max(navH, window.innerHeight - h - margin);

  const x = margin + Math.random() * (maxX - margin);
  const y = navH + Math.random() * (maxY - navH);

  el.style.left = x + "px";
  el.style.top = y + "px";
}

let lastNoTriggerAt = 0;
function handleNoAttempt(noBtn) {
  const now = Date.now();
  if (now - lastNoTriggerAt < 150) return; // avoid double-fire from overlapping pointer/touch events
  lastNoTriggerAt = now;

  noAttemptCount++;
  moveNoButton(noBtn);
  const messages = t("toast.noMessages");
  if (Array.isArray(messages) && messages.length) {
    const idx = Math.min(noAttemptCount - 1, messages.length - 1);
    showToast(messages[idx]);
  }
}

function wireNoButton(noBtn) {
  const trigger = () => handleNoAttempt(noBtn);

  // hover / pointer approach (desktop) — dodges before it can even be pressed
  noBtn.addEventListener("pointerenter", trigger);

  // press attempts across mouse, touch, pen — always dodge, never activate
  noBtn.addEventListener("pointerdown", (e) => { e.preventDefault(); trigger(); });
  noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); trigger(); }, { passive: false });

  // keyboard users: relocate on focus, and block Enter/Space activation
  noBtn.addEventListener("focus", trigger);
  noBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      trigger();
    }
  });

  // final safety net — should rarely if ever fire
  noBtn.addEventListener("click", (e) => { e.preventDefault(); trigger(); });
}

/* re-center the escaped No button back into flow if the step changes */
function resetNoButtonPosition(noBtn) {
  if (!noBtn) return;
  noBtn.classList.remove("no-btn-fixed");
  noBtn.style.position = "";
  noBtn.style.top = "";
  noBtn.style.left = "";
  noBtn.style.margin = "";
}

/* ==========================================================
   9. STEP RENDERING
   ========================================================== */
function updateProgress() {
  const fill = document.getElementById("progressFill");
  const pct = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;
  if (fill) fill.style.width = pct + "%";
  document.querySelectorAll(".step-dot").forEach(dot => {
    const n = parseInt(dot.getAttribute("data-step"), 10);
    dot.classList.toggle("active", n === currentStep);
    dot.classList.toggle("done", n < currentStep);
  });
  const bar = document.getElementById("progressBar");
  if (bar) bar.setAttribute("aria-valuenow", String(currentStep));
}

function optionCardHTML(id, group, value, main, sub, selected) {
  return `<button type="button" class="option-card${selected ? " selected" : ""}" data-group="${group}" data-value="${value}" role="radio" aria-checked="${selected}">
      <span class="opt-main">${main}</span>
      <span class="opt-sub">${sub}</span>
      <span class="opt-check" aria-hidden="true">✓</span>
    </button>`;
}

function renderStep(step) {
  const card = document.getElementById("appCard");
  if (!card) return;
  let html = "";

  if (step === 1) {
    html = `
      <p class="step-title" data-step-title>${t("step1.title")}</p>
      <h2 class="step-question">${t("step1.question")}</h2>
      <div class="yesno-wrap">
        <div class="yesno-item">
          <button type="button" class="btn btn-primary yes-btn" id="yesBtn">${t("step1.yes")}</button>
          <span class="yesno-sub">${t("step1.yesSub")}</span>
        </div>
        <div class="yesno-item">
          <button type="button" class="btn btn-ghost no-btn" id="noBtn">${t("step1.no")}</button>
          <span class="yesno-sub">${t("step1.noSub")}</span>
        </div>
      </div>
      <div class="field-error" id="stepError" hidden></div>
      <div class="app-nav">
        <span></span>
        <span></span>
      </div>
    `;
    card.innerHTML = html;

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    wireNoButton(noBtn);
    yesBtn.addEventListener("click", () => {
      application.answer = "yes";
      saveProgress();
      nextStep();
    });
    updateProgress();
    return;
  }

  if (step === 2) {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    const minStr = minDate.toISOString().split("T")[0];
    html = `
      <p class="step-title">${t("step2.title")}</p>
      <h2 class="step-question">${t("step2.question")}</h2>
      <div class="date-field-wrap">
        <label class="vh" for="dateInput">${t("step2.label")}</label>
        <input type="date" id="dateInput" class="date-input" min="${minStr}" value="${application.date || ""}">
      </div>
      <div class="field-error" id="stepError" hidden>${t("validation.pleaseDate")}</div>
      <div class="app-nav">
        <button class="btn btn-ghost" id="backBtn">${t("navBtns.back")}</button>
        <button class="btn btn-primary" id="continueBtn">${t("navBtns.continue")}</button>
      </div>
    `;
    card.innerHTML = html;
    document.getElementById("dateInput").addEventListener("change", (e) => {
      application.date = e.target.value;
      document.getElementById("stepError").hidden = true;
    });
    wireStepNav();
    updateProgress();
    return;
  }

  if (step === 3) {
    const moods = [
      ["romantic", t("step3.mood1Name"), t("step3.mood1Sub")],
      ["coffee", t("step3.mood2Name"), t("step3.mood2Sub")],
      ["spontaneous", t("step3.mood3Name"), t("step3.mood3Sub")],
      ["movie", t("step3.mood4Name"), t("step3.mood4Sub")]
    ];
    html = `
      <p class="step-title">${t("step3.title")}</p>
      <h2 class="step-question">${t("step3.question")}</h2>
      <div class="mood-grid" role="radiogroup" aria-label="${t("step3.question")}">
        ${moods.map(m => optionCardHTML(null, "mood", m[0], m[1], m[2], application.mood === m[0])).join("")}
      </div>
      <div class="field-error" id="stepError" hidden>${t("validation.pleaseChoose")}</div>
      <div class="app-nav">
        <button class="btn btn-ghost" id="backBtn">${t("navBtns.back")}</button>
        <button class="btn btn-primary" id="continueBtn">${t("navBtns.continue")}</button>
      </div>
    `;
    card.innerHTML = html;
    wireOptionGroup("mood");
    wireStepNav();
    updateProgress();
    return;
  }

  if (step === 4) {
    const exc = [
      ["100", t("step4.exc1Value"), t("step4.exc1Sub")],
      ["85", t("step4.exc2Value"), t("step4.exc2Sub")],
      ["70", t("step4.exc3Value"), t("step4.exc3Sub")],
      ["50", t("step4.exc4Value"), t("step4.exc4Sub")]
    ];
    html = `
      <p class="step-title">${t("step4.title")}</p>
      <h2 class="step-question">${t("step4.question")}</h2>
      <div class="option-list" role="radiogroup" aria-label="${t("step4.question")}">
        ${exc.map(x => optionCardHTML(null, "excitement", x[0], x[1], x[2], application.excitement === x[0])).join("")}
      </div>
      <div class="field-error" id="stepError" hidden>${t("validation.pleaseChoose")}</div>
      <div class="app-nav">
        <button class="btn btn-ghost" id="backBtn">${t("navBtns.back")}</button>
        <button class="btn btn-primary" id="continueBtn">${t("navBtns.continue")}</button>
      </div>
    `;
    card.innerHTML = html;
    wireOptionGroup("excitement");
    wireStepNav();
    updateProgress();
    return;
  }

  if (step === 5) {
    html = `
      <p class="step-title">${t("step5.title")}</p>
      <h2 class="step-question">${t("step5.question")}</h2>
      <label class="field-label" for="noteInput">${t("step5.question")}</label>
      <textarea id="noteInput" class="field-textarea" placeholder="${t("step5.textareaPlaceholder")}">${application.note || ""}</textarea>
      <label class="field-label" for="raveInput">${t("step5.raveLabel")}</label>
      <input type="text" id="raveInput" class="field-input" placeholder="${t("step5.ravePlaceholder")}" value="${application.raveHandles || ""}">
      <div class="field-error" id="stepError" hidden></div>
      <div class="app-nav">
        <button class="btn btn-ghost" id="backBtn">${t("navBtns.back")}</button>
        <button class="btn btn-primary" id="submitBtn">${t("navBtns.submit")}</button>
      </div>
    `;
    card.innerHTML = html;
    document.getElementById("noteInput").addEventListener("input", (e) => { application.note = e.target.value; });
    document.getElementById("raveInput").addEventListener("input", (e) => { application.raveHandles = e.target.value; });
    document.getElementById("backBtn").addEventListener("click", previousStep);
    document.getElementById("submitBtn").addEventListener("click", submitApplication);
    updateProgress();
    return;
  }
}

function wireOptionGroup(group) {
  document.querySelectorAll(`.option-card[data-group="${group}"]`).forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(`.option-card[data-group="${group}"]`).forEach(b => {
        b.classList.remove("selected");
        b.setAttribute("aria-checked", "false");
      });
      btn.classList.add("selected");
      btn.setAttribute("aria-checked", "true");
      application[group] = btn.getAttribute("data-value");
      const err = document.getElementById("stepError");
      if (err) err.hidden = true;
      saveProgress();
    });
  });
}

function wireStepNav() {
  const back = document.getElementById("backBtn");
  const cont = document.getElementById("continueBtn");
  if (back) back.addEventListener("click", previousStep);
  if (cont) cont.addEventListener("click", () => {
    if (validateStep(currentStep)) nextStep();
  });
}

/* ==========================================================
   10. VALIDATION / NAVIGATION
   ========================================================== */
function validateStep(step) {
  const err = document.getElementById("stepError");
  if (step === 1) {
    if (application.answer !== "yes") {
      if (err) { err.textContent = t("validation.pleaseChoose"); err.hidden = false; }
      return false;
    }
    return true;
  }
  if (step === 2) {
    const val = document.getElementById("dateInput") ? document.getElementById("dateInput").value : application.date;
    if (!val) {
      if (err) { err.textContent = t("validation.pleaseDate"); err.hidden = false; }
      return false;
    }
    application.date = val;
    return true;
  }
  if (step === 3) {
    if (!application.mood) {
      if (err) { err.textContent = t("validation.pleaseChoose"); err.hidden = false; }
      return false;
    }
    return true;
  }
  if (step === 4) {
    if (!application.excitement) {
      if (err) { err.textContent = t("validation.pleaseChoose"); err.hidden = false; }
      return false;
    }
    return true;
  }
  return true;
}

function nextStep() {
  if (currentStep < TOTAL_STEPS) {
    currentStep++;
    saveProgress();
    renderStep(currentStep);
  }
}

function previousStep() {
  if (currentStep > 1) {
    currentStep--;
    saveProgress();
    renderStep(currentStep);
  }
}

function startApplication() {
  showScreen("screen-app");
  currentStep = application.answer === "yes" ? Math.max(currentStep, 1) : 1;
  renderStep(currentStep);
}

/* ==========================================================
   11. SUBMIT / CONFIRMATION / CERTIFICATE
   ========================================================== */
function generateApplicationNumber() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "DP-";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function generateCertificateNumber() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "DPC-";
  for (let i = 0; i < 7; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(currentLang === "en" ? "en-US" : currentLang, { year: "numeric", month: "long", day: "numeric" });
  } catch (e) {
    return iso;
  }
}

function moodLabel(value) {
  const map = { romantic: t("step3.mood1Name"), coffee: t("step3.mood2Name"), spontaneous: t("step3.mood3Name"), movie: t("step3.mood4Name") };
  return map[value] || value;
}

function excitementLabel(value) {
  const map = { "100": t("step4.exc1Value"), "85": t("step4.exc2Value"), "70": t("step4.exc3Value"), "50": t("step4.exc4Value") };
  return map[value] || value;
}

function submitApplication() {
  if (!application.answer) application.answer = "yes";
  appNumber = appNumber || generateApplicationNumber();
  certNumber = certNumber || generateCertificateNumber();
  saveProgress();
  renderConfirmation();
  showScreen("screen-confirm");
}

function renderConfirmation() {
  const numEl = document.getElementById("appNumberDisplay");
  if (numEl) numEl.textContent = `${t("confirm.appNumberPrefix")} ${appNumber}`;

  const cards = document.getElementById("confirmCards");
  if (!cards) return;
  const rave = application.raveHandles && application.raveHandles.trim() ? application.raveHandles.trim() : t("confirm.notProvided");
  const note = application.note && application.note.trim() ? application.note.trim() : t("confirm.notProvided");

  const items = [
    [t("confirm.cardAnswer"), t("step1.yes")],
    [t("confirm.cardDate"), formatDate(application.date)],
    [t("confirm.cardMood"), moodLabel(application.mood)],
    [t("confirm.cardExcitement"), excitementLabel(application.excitement)],
    [t("confirm.cardNote"), note],
    [t("confirm.cardRave"), rave]
  ];

  cards.innerHTML = items.map(i => `
    <div class="c-card">
      <p class="c-label">${i[0]}</p>
      <p class="c-value">${escapeHTML(String(i[1]))}</p>
    </div>
  `).join("");
}

function renderCertificate() {
  const details = document.getElementById("certDetails");
  if (!details) return;
  const rave = application.raveHandles && application.raveHandles.trim() ? application.raveHandles.trim() : t("confirm.notProvided");
  const issueDate = new Date().toLocaleDateString(currentLang === "en" ? "en-US" : currentLang, { year: "numeric", month: "long", day: "numeric" });

  const items = [
    [t("cert.certNumberLabel"), certNumber],
    [t("cert.appNumberLabel"), appNumber],
    [t("cert.issueDateLabel"), issueDate],
    [t("cert.dateLabel"), formatDate(application.date)],
    [t("cert.moodLabel"), moodLabel(application.mood)],
    [t("cert.excitementLabel"), excitementLabel(application.excitement)],
    [t("cert.raveLabel"), rave]
  ];

  details.innerHTML = items.map(i => `
    <div class="cd">
      <p class="cd-label">${i[0]}</p>
      <p class="cd-value">${escapeHTML(String(i[1]))}</p>
    </div>
  `).join("");
}

function showCertificate() {
  renderCertificate();
  showScreen("screen-cert");
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ==========================================================
   12. SURPRISE ME
   ========================================================== */
function surpriseMe() {
  application.answer = "yes";
  const moods = ["romantic", "coffee", "spontaneous", "movie"];
  const excitements = ["100", "85", "70"];
  application.mood = moods[Math.floor(Math.random() * moods.length)];
  application.excitement = excitements[Math.floor(Math.random() * excitements.length)];

  const future = new Date();
  future.setDate(future.getDate() + 1 + Math.floor(Math.random() * 20));
  application.date = future.toISOString().split("T")[0];

  application.note = "Surprise me. I trust the vibes. ♥";
  application.raveHandles = application.raveHandles || "";

  appNumber = generateApplicationNumber();
  certNumber = generateCertificateNumber();
  saveProgress();

  const messages = t("toast.surpriseMessages");
  if (Array.isArray(messages) && messages.length) {
    showToast(messages[Math.floor(Math.random() * messages.length)]);
  }

  renderConfirmation();
  showScreen("screen-confirm");
}

/* ==========================================================
   13. PERSISTENCE
   ========================================================== */
function saveProgress() {
  try {
    localStorage.setItem("dp_progress", JSON.stringify({
      application, appNumber, certNumber, currentStep
    }));
  } catch (e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("dp_progress");
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.application) Object.assign(application, data.application);
    if (data.appNumber) appNumber = data.appNumber;
    if (data.certNumber) certNumber = data.certNumber;
    if (data.currentStep) currentStep = data.currentStep;
  } catch (e) {}
}

function resetApplication() {
  application.answer = "";
  application.date = "";
  application.mood = "";
  application.excitement = "";
  application.note = "";
  application.raveHandles = "";
  appNumber = "";
  certNumber = "";
  currentStep = 1;
  noAttemptCount = 0;
  try { localStorage.removeItem("dp_progress"); } catch (e) {}
  showScreen("screen-hero");
}

/* ==========================================================
   14. INIT
   ========================================================== */
function initLangSelector() {
  const btn = document.getElementById("langBtn");
  const list = document.getElementById("langList");
  if (!btn || !list) return;

  btn.addEventListener("click", () => {
    const open = !list.hidden;
    list.hidden = open;
    btn.setAttribute("aria-expanded", String(!open));
  });

  list.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      setLanguage(li.getAttribute("data-lang"));
      list.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    });
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setLanguage(li.getAttribute("data-lang"));
        list.hidden = true;
        btn.setAttribute("aria-expanded", "false");
      }
    });
    li.setAttribute("tabindex", "0");
  });

  document.addEventListener("click", (e) => {
    if (!list.hidden && !list.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
      list.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !list.hidden) {
      list.hidden = true;
      btn.setAttribute("aria-expanded", "false");
      btn.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  loadLanguagePreference();
  loadProgress();
  applyLanguage();
  initParticles();
  initLangSelector();

  document.getElementById("openApplicationBtn").addEventListener("click", startApplication);
  document.getElementById("surpriseMeBtn").addEventListener("click", surpriseMe);
  document.getElementById("viewCertBtn").addEventListener("click", showCertificate);
  document.getElementById("startOverBtn").addEventListener("click", resetApplication);
  document.getElementById("certBackBtn").addEventListener("click", () => showScreen("screen-confirm"));
  document.getElementById("certRestartBtn").addEventListener("click", resetApplication);

  window.addEventListener("resize", () => {
    const noBtn = document.getElementById("noBtn");
    if (noBtn && noBtn.classList.contains("no-btn-fixed")) {
      resetNoButtonPosition(noBtn);
    }
  });
});


