/* ==========================================================================
   DARLING PRIMATE — script.js
   Vanilla JS. No frameworks. No backend.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. TRANSLATIONS
   --------------------------------------------------------------------------- */
const translations = {
  en: {
    dir: "ltr",
    nav: { tag: "PRIVATE • ROMANTIC • OFFICIAL", langLabel: "Choose your language" },
    hero: {
      badge: "Applications now open",
      headlinePre: "Will you go on a ",
      headlineHi: "date",
      headlinePost: " with me?",
      desc: "A tiny application for a very important decision. No pressure, just good food, better company, and maybe a little romance.",
      small: "Zero commitment. Maximum vibes. Probably.",
      yes: "YES ♥",
      no: "NO",
      toastYes: "Excellent decision. ♥"
    },
    profile: {
      name: "DARLING PRIMATE",
      label: "♥ MALE PRIMATE",
      tagline: "Currently accepting applications for one extremely important date.",
      s1l: "Relationship status", s1v: "Waiting for her answer",
      s2l: "Availability", s2v: "Suspiciously available",
      s3l: "Romance level", s3v: "Highly classified",
      s4l: "Gentleman status", s4v: "Confirmed"
    },
    floating: ["✨ good vibes only", "🍓 one date, please?", "💌 highly confidential", "🐒 gentleman awaiting response", "❤️ application pending"],
    noMessages: [
      "Nice try 😌", "Wrong button.", "Almost!", "The universe disagrees.",
      "The gentleman respectfully disagrees.", "Darling Primate has requested another chance.",
      "The rejection department is currently closed.", "Your rejection request has been denied.",
      "The committee has rejected your rejection.", "The No button has left the chat.",
      "The No button has resigned.", "Darling Primate's lawyer has entered the chat.",
      "404: Rejection not found.", "System error: romance detected.", "Love wins. ♥"
    ],
    music: { tapEnable: "Tap to enable music ♪", tapApplause: "Tap to hear the applause ♪", playing: "♪ Playing", paused: "♪ Paused" },
    app: {
      eyebrow: "DARLING PRIMATE", title: "Application",
      back: "Back", cont: "Continue", submit: "Submit ♥",
      errorRequired: "Please choose an answer first.",
      errorDate: "Please choose a valid future date.",
      stepOf: (n, total) => `${String(n).padStart(2,"0")} / ${String(total).padStart(2,"0")}`
    },
    steps: {
      1: { title: "First things first", q: "Would you like to go on a date?",
        o1m: "Absolutely", o1s: "I was hoping you would say that.",
        o2m: "Maybe...", o2s: "Convince me with good food.",
        o3m: "No", o3s: "My heart is currently unavailable." },
      2: { title: "Pick a day", q: "When should our little adventure happen?", hint: "Any day from tomorrow onward works beautifully." },
      3: { title: "Choose the mood", q: "What sounds like the perfect date?",
        o1m: "Romantic dinner", o1s: "Good food, soft lights, long conversations.",
        o2m: "Coffee & a walk", o2s: "Simple, calm, and a little cute.",
        o3m: "Something spontaneous", o3s: "No plan. Just follow the feeling.",
        o4m: "Movie night", o4s: "Snacks, blankets, and zero interruptions." },
      4: { title: "Important question", q: "How excited are you?",
        o1m: "100%", o1s: "I am already choosing an outfit.",
        o2m: "85%", o2s: "Very excited. Trying to act normal.",
        o3m: "70%", o3s: "Quietly excited.",
        o4m: "50%", o4s: "Let's see where this goes." },
      5: { title: "The financial department has arrived", q: "Who is paying for this extremely important date?",
        o1m: "Darling Primate ♥", o1s: "He invited you. Obviously.",
        o2m: "We split it 🤝", o2s: "Modern romance with modern accounting.",
        o3m: "You pay 😌", o3s: "Confidence. Respect.",
        o4m: "Whoever reaches the restaurant first", o4s: "A dangerous but efficient strategy.",
        o5m: "The Extremely Serious Committee", o5s: "Please submit the invoice to management." },
      6: { title: "One more very serious question", q: "Who is most likely to be late?",
        o1m: "Darling Primate", o1s: "The gentleman has a complicated relationship with time.",
        o2m: "You", o2s: "Fashionably late, obviously.",
        o3m: "Both of us", o3s: "Perfect. Nobody can complain.",
        o4m: "Neither", o4s: "Impossible. Something must go wrong." },
      7: { title: "Final compatibility test", q: "What happens when we cannot decide what to eat?",
        o1m: "We order everything.", o1s: "Problem solved.",
        o2m: "You choose.", o2s: "Darling Primate trusts your judgment.",
        o3m: "Darling Primate chooses.", o3s: "A brave decision.",
        o4m: "Rock paper scissors.", o4s: "May the hungriest person win.",
        o5m: "Random restaurant.", o5s: "Let destiny handle dinner." },
      8: { title: "One last thing", q: "What would make this date perfect?",
        placeholder: "Tell Darling Primate what would make it special...",
        raveLabel: "Rave Handles", ravePlaceholder: "Instagram, Rave, Discord, etc." }
    },
    confirm: {
      eyebrow: "APPLICATION RECEIVED", title: "It is officially a date.",
      desc: "Your answers have been carefully reviewed by the very serious Darling Primate committee.",
      note: "The gentleman is pleased with your decision.",
      dAnswer: "Answer", dDate: "Date", dMood: "Date style", dExcitement: "Excitement",
      dPayment: "Payment arrangement", dPunctuality: "Punctuality", dFood: "Food decision",
      dNote: "Perfect date note", dRave: "Rave Handles", dAppNum: "Application number", dCertNum: "Certificate number",
      reportTitle: "THE OFFICIAL DATE REPORT",
      rRomance: "Romance probability", rRomanceVal: "97.8%",
      rFinancial: "Financial agreement", rFinancialVal: "Pending legal review.",
      rPunct: "Punctuality", rPunctVal: "Highly questionable.",
      rFood: "Food compatibility", rFoodVal: "Promising.",
      rOverall: "Overall compatibility", rOverallVal: "Suspiciously good.",
      viewCert: "View Certificate", startOver: "Start over ♥",
      emptyTitle: "No application found", emptyDesc: "It looks like there is no date application on file yet.",
      emptyCta: "Start application ♥", notProvided: "Not provided"
    },
    cert: {
      eyebrow: "DARLING PRIMATE", pageTitle: "Your Certificate",
      subbrand: "PRIVATE ROMANTIC CERTIFICATION",
      title: "CERTIFICATE OF DATE", subtitle: "OFFICIALLY CERTIFIED",
      photoRole: "Male Romantic Candidate",
      body1: "This certificate officially recognizes that Darling Primate and the recipient named below have accepted a romantic date invitation.",
      body2: "Following a highly confidential review by the Extremely Serious Committee, the application has been approved.",
      recipient: "THE DISTINGUISHED DATE RECIPIENT",
      iAppNum: "Application No.", iCertNum: "Certificate No.", iIssueDate: "Date of Issue", iApprovedDate: "Approved Date",
      iDateStyle: "Date Style", iExcitement: "Excitement", iPayment: "Payment", iPunctuality: "Punctuality",
      iFood: "Food Decision", iRave: "Rave Handles",
      issuedBy: "Issued by", committee: "THE EXTREMELY SERIOUS COMMITTEE",
      authorizedBy: "Authorized by", gentleman: "The Gentleman",
      download: "Download Certificate", startOver: "Start over ♥",
      emptyTitle: "Certificate unavailable", emptyDesc: "There is no completed application to certify just yet.",
      emptyCta: "Start application ♥", notProvided: "Not provided"
    }
  },

  bn: {
    dir: "ltr",
    nav: { tag: "ব্যক্তিগত • রোমান্টিক • অফিসিয়াল", langLabel: "আপনার ভাষা বেছে নিন" },
    hero: {
      badge: "আবেদন এখন খোলা",
      headlinePre: "তুমি কি আমার সাথে ",
      headlineHi: "ডেটে",
      headlinePost: " যাবে?",
      desc: "একটি অত্যন্ত গুরুত্বপূর্ণ সিদ্ধান্তের জন্য একটি ছোট্ট আবেদন। কোনো চাপ নেই, শুধু ভালো খাবার, আরও ভালো সঙ্গ, আর হয়তো একটু রোমান্স।",
      small: "শূন্য প্রতিশ্রুতি। সর্বোচ্চ ভাইব। সম্ভবত।",
      yes: "হ্যাঁ ♥", no: "না",
      toastYes: "চমৎকার সিদ্ধান্ত। ♥"
    },
    profile: {
      name: "ডার্লিং প্রাইমেট", label: "♥ পুরুষ প্রাইমেট",
      tagline: "বর্তমানে একটি অত্যন্ত গুরুত্বপূর্ণ ডেটের জন্য আবেদন গ্রহণ করা হচ্ছে।",
      s1l: "সম্পর্কের অবস্থা", s1v: "তার উত্তরের অপেক্ষায়",
      s2l: "উপলব্ধতা", s2v: "সন্দেহজনকভাবে খালি",
      s3l: "রোমান্স লেভেল", s3v: "অত্যন্ত গোপনীয়",
      s4l: "ভদ্রলোক মর্যাদা", s4v: "নিশ্চিত করা হয়েছে"
    },
    floating: ["✨ শুধু ভালো ভাইব", "🍓 একটা ডেট, প্লিজ?", "💌 অত্যন্ত গোপনীয়", "🐒 উত্তরের অপেক্ষায় ভদ্রলোক", "❤️ আবেদন বিবেচনাধীন"],
    noMessages: [
      "চেষ্টা ভালো ছিল 😌", "ভুল বাটন।", "প্রায় হয়ে গিয়েছিল!", "মহাবিশ্ব একমত নয়।",
      "ভদ্রলোক বিনয়ের সাথে দ্বিমত পোষণ করছেন।", "ডার্লিং প্রাইমেট আরেকটি সুযোগ চেয়েছে।",
      "প্রত্যাখ্যান বিভাগ আপাতত বন্ধ।", "আপনার প্রত্যাখ্যানের অনুরোধ প্রত্যাখ্যাত হয়েছে।",
      "কমিটি আপনার প্রত্যাখ্যানকে প্রত্যাখ্যান করেছে।", "না বাটনটি চলে গেছে।",
      "না বাটনটি পদত্যাগ করেছে।", "ডার্লিং প্রাইমেটের আইনজীবী চ্যাটে এসেছেন।",
      "৪০৪: প্রত্যাখ্যান খুঁজে পাওয়া যায়নি।", "সিস্টেম ত্রুটি: রোমান্স শনাক্ত হয়েছে।", "ভালোবাসার জয়। ♥"
    ],
    music: { tapEnable: "গান চালু করতে ট্যাপ করুন ♪", tapApplause: "করতালি শুনতে ট্যাপ করুন ♪", playing: "♪ চলছে", paused: "♪ থামানো" },
    app: {
      eyebrow: "ডার্লিং প্রাইমেট", title: "আবেদন",
      back: "পেছনে", cont: "পরবর্তী", submit: "জমা দিন ♥",
      errorRequired: "অনুগ্রহ করে প্রথমে একটি উত্তর বেছে নিন।",
      errorDate: "অনুগ্রহ করে একটি বৈধ ভবিষ্যৎ তারিখ বেছে নিন।",
      stepOf: (n, total) => `${String(n).padStart(2,"0")} / ${String(total).padStart(2,"0")}`
    },
    steps: {
      1: { title: "প্রথমেই", q: "তুমি কি ডেটে যেতে চাও?",
        o1m: "অবশ্যই", o1s: "আমি এটাই আশা করছিলাম।",
        o2m: "হয়তো...", o2s: "ভালো খাবার দিয়ে আমাকে রাজি করাও।",
        o3m: "না", o3s: "আমার হৃদয় এখন অনুপলব্ধ।" },
      2: { title: "একটি দিন বেছে নিন", q: "আমাদের ছোট্ট অ্যাডভেঞ্চার কখন হবে?", hint: "আগামীকাল থেকে যেকোনো দিন চমৎকার হবে।" },
      3: { title: "মুড বেছে নিন", q: "কেমন ডেট তোমার কাছে নিখুঁত মনে হয়?",
        o1m: "রোমান্টিক ডিনার", o1s: "ভালো খাবার, নরম আলো, দীর্ঘ কথোপকথন।",
        o2m: "কফি ও হাঁটা", o2s: "সহজ, শান্ত, আর একটু কিউট।",
        o3m: "কিছু স্বতঃস্ফূর্ত", o3s: "কোনো পরিকল্পনা নেই। শুধু অনুভূতি অনুসরণ করো।",
        o4m: "মুভি নাইট", o4s: "স্ন্যাকস, কম্বল, আর কোনো বাধা নেই।" },
      4: { title: "গুরুত্বপূর্ণ প্রশ্ন", q: "তুমি কতটা উত্তেজিত?",
        o1m: "১০০%", o1s: "আমি এখনই পোশাক বাছাই করছি।",
        o2m: "৮৫%", o2s: "খুব উত্তেজিত। স্বাভাবিক থাকার চেষ্টা করছি।",
        o3m: "৭০%", o3s: "চুপচাপ উত্তেজিত।",
        o4m: "৫০%", o4s: "দেখা যাক এটা কোথায় যায়।" },
      5: { title: "আর্থিক বিভাগ এসে গেছে", q: "এই অত্যন্ত গুরুত্বপূর্ণ ডেটের খরচ কে দেবে?",
        o1m: "ডার্লিং প্রাইমেট ♥", o1s: "সে-ই তো আমন্ত্রণ জানিয়েছে। স্বাভাবিকভাবেই।",
        o2m: "আমরা ভাগ করব 🤝", o2s: "আধুনিক রোমান্স, আধুনিক হিসাব।",
        o3m: "তুমি দেবে 😌", o3s: "আত্মবিশ্বাস। সম্মান।",
        o4m: "যে আগে রেস্তোরাঁয় পৌঁছাবে", o4s: "একটি ঝুঁকিপূর্ণ কিন্তু কার্যকর কৌশল।",
        o5m: "অত্যন্ত গুরুত্বপূর্ণ কমিটি", o5s: "অনুগ্রহ করে ইনভয়েস ম্যানেজমেন্টে জমা দিন।" },
      6: { title: "আরেকটি অত্যন্ত গুরুত্বপূর্ণ প্রশ্ন", q: "কে দেরি করার সম্ভাবনা বেশি?",
        o1m: "ডার্লিং প্রাইমেট", o1s: "ভদ্রলোকের সময়ের সাথে একটি জটিল সম্পর্ক আছে।",
        o2m: "তুমি", o2s: "ফ্যাশনেবলি লেট, স্বাভাবিকভাবেই।",
        o3m: "আমরা দুজনেই", o3s: "নিখুঁত। কেউ অভিযোগ করতে পারবে না।",
        o4m: "কেউই না", o4s: "অসম্ভব। কিছু একটা ভুল হতেই হবে।" },
      7: { title: "চূড়ান্ত সামঞ্জস্য পরীক্ষা", q: "যখন আমরা কী খাব তা ঠিক করতে পারি না, তখন কী হয়?",
        o1m: "আমরা সব অর্ডার করব।", o1s: "সমস্যার সমাধান।",
        o2m: "তুমি বেছে নাও।", o2s: "ডার্লিং প্রাইমেট তোমার বিচারবুদ্ধিতে ভরসা করে।",
        o3m: "ডার্লিং প্রাইমেট বেছে নেবে।", o3s: "একটি সাহসী সিদ্ধান্ত।",
        o4m: "রক পেপার সিজার্স।", o4s: "যে বেশি ক্ষুধার্ত সে জিতুক।",
        o5m: "যেকোনো রেস্তোরাঁ।", o5s: "ভাগ্যকে ডিনার সামলাতে দাও।" },
      8: { title: "শেষ একটি কথা", q: "কী এই ডেটকে নিখুঁত করে তুলবে?",
        placeholder: "ডার্লিং প্রাইমেটকে বলো কী এটাকে বিশেষ করবে...",
        raveLabel: "রেভ হ্যান্ডেল", ravePlaceholder: "ইনস্টাগ্রাম, রেভ, ডিসকর্ড, ইত্যাদি।" }
    },
    confirm: {
      eyebrow: "আবেদন গৃহীত হয়েছে", title: "এটা এখন সরকারিভাবে একটি ডেট।",
      desc: "তোমার উত্তরগুলো অত্যন্ত গুরুত্বসহকারে ডার্লিং প্রাইমেট কমিটি পর্যালোচনা করেছে।",
      note: "ভদ্রলোক তোমার সিদ্ধান্তে সন্তুষ্ট।",
      dAnswer: "উত্তর", dDate: "তারিখ", dMood: "ডেট স্টাইল", dExcitement: "উত্তেজনা",
      dPayment: "পেমেন্ট ব্যবস্থা", dPunctuality: "সময়ানুবর্তিতা", dFood: "খাবারের সিদ্ধান্ত",
      dNote: "নিখুঁত ডেটের নোট", dRave: "রেভ হ্যান্ডেল", dAppNum: "আবেদন নম্বর", dCertNum: "সার্টিফিকেট নম্বর",
      reportTitle: "অফিসিয়াল ডেট রিপোর্ট",
      rRomance: "রোমান্সের সম্ভাবনা", rRomanceVal: "৯৭.৮%",
      rFinancial: "আর্থিক চুক্তি", rFinancialVal: "আইনি পর্যালোচনা বাকি।",
      rPunct: "সময়ানুবর্তিতা", rPunctVal: "অত্যন্ত সন্দেহজনক।",
      rFood: "খাবারের সামঞ্জস্য", rFoodVal: "আশাব্যঞ্জক।",
      rOverall: "সামগ্রিক সামঞ্জস্য", rOverallVal: "সন্দেহজনকভাবে ভালো।",
      viewCert: "সার্টিফিকেট দেখুন", startOver: "আবার শুরু করুন ♥",
      emptyTitle: "কোনো আবেদন পাওয়া যায়নি", emptyDesc: "মনে হচ্ছে এখনো কোনো ডেট আবেদন সংরক্ষিত নেই।",
      emptyCta: "আবেদন শুরু করুন ♥", notProvided: "প্রদান করা হয়নি"
    },
    cert: {
      eyebrow: "ডার্লিং প্রাইমেট", pageTitle: "আপনার সার্টিফিকেট",
      subbrand: "ব্যক্তিগত রোমান্টিক সার্টিফিকেশন",
      title: "ডেটের সার্টিফিকেট", subtitle: "অফিসিয়ালি সার্টিফায়েড",
      photoRole: "পুরুষ রোমান্টিক প্রার্থী",
      body1: "এই সার্টিফিকেট আনুষ্ঠানিকভাবে স্বীকৃতি দেয় যে ডার্লিং প্রাইমেট এবং নিচে উল্লেখিত প্রাপক একটি রোমান্টিক ডেটের আমন্ত্রণ গ্রহণ করেছেন।",
      body2: "অত্যন্ত গোপনীয় কমিটির পর্যালোচনার পর, আবেদনটি অনুমোদিত হয়েছে।",
      recipient: "সম্মানিত ডেট প্রাপক",
      iAppNum: "আবেদন নং", iCertNum: "সার্টিফিকেট নং", iIssueDate: "ইস্যুর তারিখ", iApprovedDate: "অনুমোদিত তারিখ",
      iDateStyle: "ডেট স্টাইল", iExcitement: "উত্তেজনা", iPayment: "পেমেন্ট", iPunctuality: "সময়ানুবর্তিতা",
      iFood: "খাবারের সিদ্ধান্ত", iRave: "রেভ হ্যান্ডেল",
      issuedBy: "ইস্যুকারী", committee: "অত্যন্ত গুরুত্বপূর্ণ কমিটি",
      authorizedBy: "অনুমোদনকারী", gentleman: "ভদ্রলোক",
      download: "সার্টিফিকেট ডাউনলোড করুন", startOver: "আবার শুরু করুন ♥",
      emptyTitle: "সার্টিফিকেট অনুপলব্ধ", emptyDesc: "এখনো সার্টিফাই করার মতো কোনো সম্পূর্ণ আবেদন নেই।",
      emptyCta: "আবেদন শুরু করুন ♥", notProvided: "প্রদান করা হয়নি"
    }
  },

  hi: {
    dir: "ltr",
    nav: { tag: "निजी • रोमांटिक • आधिकारिक", langLabel: "अपनी भाषा चुनें" },
    hero: {
      badge: "आवेदन अभी खुले हैं",
      headlinePre: "क्या तुम मेरे साथ ",
      headlineHi: "डेट",
      headlinePost: " पर चलोगी?",
      desc: "एक बहुत ज़रूरी फैसले के लिए एक छोटा सा आवेदन। कोई दबाव नहीं, बस अच्छा खाना, बेहतर साथ, और शायद थोड़ा रोमांस।",
      small: "शून्य प्रतिबद्धता। अधिकतम वाइब्स। शायद।",
      yes: "हाँ ♥", no: "नहीं",
      toastYes: "बेहतरीन फैसला। ♥"
    },
    profile: {
      name: "डार्लिंग प्राइमेट", label: "♥ पुरुष प्राइमेट",
      tagline: "फिलहाल एक बेहद ज़रूरी डेट के लिए आवेदन स्वीकार किए जा रहे हैं।",
      s1l: "रिश्ते की स्थिति", s1v: "उसके जवाब का इंतज़ार",
      s2l: "उपलब्धता", s2v: "संदेहास्पद रूप से खाली",
      s3l: "रोमांस स्तर", s3v: "अत्यंत गोपनीय",
      s4l: "सज्जनता की स्थिति", s4v: "पुष्टि हो गई"
    },
    floating: ["✨ सिर्फ अच्छी वाइब्स", "🍓 एक डेट, प्लीज़?", "💌 अत्यंत गोपनीय", "🐒 जवाब का इंतज़ार करता सज्जन", "❤️ आवेदन लंबित"],
    noMessages: [
      "अच्छी कोशिश 😌", "गलत बटन।", "लगभग हो गया था!", "ब्रह्मांड सहमत नहीं है।",
      "सज्जन विनम्रता से असहमत हैं।", "डार्लिंग प्राइमेट ने एक और मौका माँगा है।",
      "अस्वीकृति विभाग फिलहाल बंद है।", "आपके अस्वीकृति अनुरोध को अस्वीकार कर दिया गया।",
      "समिति ने आपकी अस्वीकृति को अस्वीकार कर दिया।", "नो बटन चैट छोड़ चुका है।",
      "नो बटन ने इस्तीफ़ा दे दिया है।", "डार्लिंग प्राइमेट का वकील चैट में आ गया है।",
      "404: अस्वीकृति नहीं मिली।", "सिस्टम त्रुटि: रोमांस पाया गया।", "प्यार की जीत। ♥"
    ],
    music: { tapEnable: "संगीत चालू करने के लिए टैप करें ♪", tapApplause: "तालियाँ सुनने के लिए टैप करें ♪", playing: "♪ बज रहा है", paused: "♪ रुका हुआ" },
    app: {
      eyebrow: "डार्लिंग प्राइमेट", title: "आवेदन",
      back: "पीछे", cont: "आगे बढ़ें", submit: "सबमिट करें ♥",
      errorRequired: "कृपया पहले एक उत्तर चुनें।",
      errorDate: "कृपया एक मान्य भविष्य की तारीख चुनें।",
      stepOf: (n, total) => `${String(n).padStart(2,"0")} / ${String(total).padStart(2,"0")}`
    },
    steps: {
      1: { title: "सबसे पहले", q: "क्या तुम डेट पर जाना चाहोगी?",
        o1m: "बिल्कुल", o1s: "मुझे यही उम्मीद थी।",
        o2m: "शायद...", o2s: "अच्छे खाने से मुझे मना लो।",
        o3m: "नहीं", o3s: "मेरा दिल फिलहाल उपलब्ध नहीं है।" },
      2: { title: "एक दिन चुनें", q: "हमारा यह छोटा सा एडवेंचर कब हो?", hint: "कल से लेकर कोई भी दिन एकदम सही रहेगा।" },
      3: { title: "मूड चुनें", q: "तुम्हें कौन सी डेट परफेक्ट लगती है?",
        o1m: "रोमांटिक डिनर", o1s: "अच्छा खाना, हल्की रोशनी, लंबी बातें।",
        o2m: "कॉफी और वॉक", o2s: "सिंपल, शांत, और थोड़ा प्यारा।",
        o3m: "कुछ अचानक वाला", o3s: "कोई प्लान नहीं। बस भावना का पालन करो।",
        o4m: "मूवी नाइट", o4s: "स्नैक्स, कंबल, और कोई बाधा नहीं।" },
      4: { title: "ज़रूरी सवाल", q: "तुम कितनी उत्साहित हो?",
        o1m: "100%", o1s: "मैं अभी से कपड़े चुन रही हूँ।",
        o2m: "85%", o2s: "बहुत उत्साहित। सामान्य दिखने की कोशिश कर रही हूँ।",
        o3m: "70%", o3s: "चुपचाप उत्साहित।",
        o4m: "50%", o4s: "देखते हैं यह कहाँ जाता है।" },
      5: { title: "वित्त विभाग आ गया है", q: "इस बेहद ज़रूरी डेट का भुगतान कौन करेगा?",
        o1m: "डार्लिंग प्राइमेट ♥", o1s: "उसने बुलाया है। स्वाभाविक है।",
        o2m: "हम बाँट लेंगे 🤝", o2s: "आधुनिक रोमांस, आधुनिक हिसाब-किताब।",
        o3m: "तुम भुगतान करो 😌", o3s: "आत्मविश्वास। सम्मान।",
        o4m: "जो पहले रेस्तराँ पहुँचे", o4s: "एक जोखिम भरी पर असरदार रणनीति।",
        o5m: "अत्यंत गंभीर समिति", o5s: "कृपया इनवॉइस प्रबंधन को भेजें।" },
      6: { title: "एक और बेहद गंभीर सवाल", q: "किसके देर से आने की सबसे ज़्यादा संभावना है?",
        o1m: "डार्लिंग प्राइमेट", o1s: "सज्जन का समय से एक जटिल रिश्ता है।",
        o2m: "तुम", o2s: "फैशनेबली लेट, स्वाभाविक रूप से।",
        o3m: "हम दोनों", o3s: "परफेक्ट। कोई शिकायत नहीं कर सकता।",
        o4m: "कोई नहीं", o4s: "असंभव। कुछ तो गड़बड़ होनी चाहिए।" },
      7: { title: "अंतिम अनुकूलता परीक्षण", q: "जब हम तय नहीं कर पाते कि क्या खाना है, तो क्या होता है?",
        o1m: "हम सब कुछ ऑर्डर कर देंगे।", o1s: "समस्या हल।",
        o2m: "तुम चुनो।", o2s: "डार्लिंग प्राइमेट तुम्हारी समझ पर भरोसा करता है।",
        o3m: "डार्लिंग प्राइमेट चुनेगा।", o3s: "एक साहसी फैसला।",
        o4m: "रॉक पेपर सिज़र्स।", o4s: "सबसे भूखा जीते।",
        o5m: "किसी भी रेस्तराँ।", o5s: "डिनर का फैसला किस्मत पर छोड़ दो।" },
      8: { title: "आखिरी बात", q: "इस डेट को परफेक्ट क्या बना सकता है?",
        placeholder: "डार्लिंग प्राइमेट को बताओ कि क्या इसे खास बनाएगा...",
        raveLabel: "रेव हैंडल", ravePlaceholder: "इंस्टाग्राम, रेव, डिस्कॉर्ड, आदि।" }
    },
    confirm: {
      eyebrow: "आवेदन प्राप्त हुआ", title: "अब यह आधिकारिक रूप से एक डेट है।",
      desc: "तुम्हारे जवाबों की डार्लिंग प्राइमेट समिति ने बहुत ध्यान से समीक्षा की है।",
      note: "सज्जन तुम्हारे फैसले से बेहद खुश हैं।",
      dAnswer: "उत्तर", dDate: "तारीख", dMood: "डेट स्टाइल", dExcitement: "उत्साह",
      dPayment: "भुगतान व्यवस्था", dPunctuality: "समय की पाबंदी", dFood: "खाने का फैसला",
      dNote: "परफेक्ट डेट नोट", dRave: "रेव हैंडल", dAppNum: "आवेदन संख्या", dCertNum: "प्रमाणपत्र संख्या",
      reportTitle: "आधिकारिक डेट रिपोर्ट",
      rRomance: "रोमांस की संभावना", rRomanceVal: "97.8%",
      rFinancial: "वित्तीय समझौता", rFinancialVal: "कानूनी समीक्षा लंबित।",
      rPunct: "समय की पाबंदी", rPunctVal: "अत्यंत संदेहास्पद।",
      rFood: "खाने की अनुकूलता", rFoodVal: "आशाजनक।",
      rOverall: "समग्र अनुकूलता", rOverallVal: "संदेहास्पद रूप से अच्छी।",
      viewCert: "प्रमाणपत्र देखें", startOver: "फिर से शुरू करें ♥",
      emptyTitle: "कोई आवेदन नहीं मिला", emptyDesc: "लगता है अभी तक कोई डेट आवेदन दर्ज नहीं है।",
      emptyCta: "आवेदन शुरू करें ♥", notProvided: "उपलब्ध नहीं"
    },
    cert: {
      eyebrow: "डार्लिंग प्राइमेट", pageTitle: "आपका प्रमाणपत्र",
      subbrand: "निजी रोमांटिक प्रमाणीकरण",
      title: "डेट प्रमाणपत्र", subtitle: "आधिकारिक रूप से प्रमाणित",
      photoRole: "पुरुष रोमांटिक उम्मीदवार",
      body1: "यह प्रमाणपत्र आधिकारिक रूप से मान्यता देता है कि डार्लिंग प्राइमेट और नीचे उल्लिखित प्राप्तकर्ता ने एक रोमांटिक डेट के निमंत्रण को स्वीकार किया है।",
      body2: "अत्यंत गोपनीय समिति की समीक्षा के बाद, आवेदन स्वीकृत कर दिया गया है।",
      recipient: "सम्मानित डेट प्राप्तकर्ता",
      iAppNum: "आवेदन सं.", iCertNum: "प्रमाणपत्र सं.", iIssueDate: "जारी करने की तारीख", iApprovedDate: "स्वीकृत तारीख",
      iDateStyle: "डेट स्टाइल", iExcitement: "उत्साह", iPayment: "भुगतान", iPunctuality: "समय पालन",
      iFood: "खाने का फैसला", iRave: "रेव हैंडल",
      issuedBy: "जारीकर्ता", committee: "अत्यंत गंभीर समिति",
      authorizedBy: "अनुमोदनकर्ता", gentleman: "सज्जन",
      download: "प्रमाणपत्र डाउनलोड करें", startOver: "फिर से शुरू करें ♥",
      emptyTitle: "प्रमाणपत्र अनुपलब्ध", emptyDesc: "अभी प्रमाणित करने के लिए कोई पूर्ण आवेदन नहीं है।",
      emptyCta: "आवेदन शुरू करें ♥", notProvided: "उपलब्ध नहीं"
    }
  },

  ur: {
    dir: "rtl",
    nav: { tag: "نجی • رومانوی • سرکاری", langLabel: "اپنی زبان منتخب کریں" },
    hero: {
      badge: "درخواستیں اب کھلی ہیں",
      headlinePre: "کیا آپ میرے ساتھ ",
      headlineHi: "ڈیٹ",
      headlinePost: " پر چلیں گی؟",
      desc: "ایک بہت اہم فیصلے کے لیے ایک چھوٹی سی درخواست۔ کوئی دباؤ نہیں، بس اچھا کھانا، بہتر ساتھ، اور شاید تھوڑا سا رومانس۔",
      small: "صفر عہد۔ زیادہ سے زیادہ ویاب۔ شاید۔",
      yes: "ہاں ♥", no: "نہیں",
      toastYes: "بہترین فیصلہ۔ ♥"
    },
    profile: {
      name: "ڈارلنگ پرائمیٹ", label: "♥ مرد پرائمیٹ",
      tagline: "فی الحال ایک انتہائی اہم ڈیٹ کے لیے درخواستیں قبول کی جا رہی ہیں۔",
      s1l: "تعلق کی حیثیت", s1v: "اس کے جواب کا منتظر",
      s2l: "دستیابی", s2v: "مشکوک طور پر خالی",
      s3l: "رومانس کی سطح", s3v: "انتہائی خفیہ",
      s4l: "شرافت کی حیثیت", s4v: "تصدیق شدہ"
    },
    floating: ["✨ صرف اچھی ویاب", "🍓 ایک ڈیٹ، پلیز؟", "💌 انتہائی خفیہ", "🐒 جواب کے منتظر شریف آدمی", "❤️ درخواست زیرِ غور"],
    noMessages: [
      "اچھی کوشش 😌", "غلط بٹن۔", "تقریباً ہو گیا تھا!", "کائنات متفق نہیں ہے۔",
      "شریف آدمی نہایت ادب سے اختلاف کرتا ہے۔", "ڈارلنگ پرائمیٹ نے ایک اور موقع مانگا ہے۔",
      "مسترد کرنے کا شعبہ فی الحال بند ہے۔", "آپ کی مسترد کرنے کی درخواست مسترد کر دی گئی۔",
      "کمیٹی نے آپ کی مسترد کرنے کی درخواست کو مسترد کر دیا۔", "نو بٹن چیٹ چھوڑ چکا ہے۔",
      "نو بٹن نے استعفیٰ دے دیا ہے۔", "ڈارلنگ پرائمیٹ کا وکیل چیٹ میں آ گیا ہے۔",
      "404: مسترد شدہ نہیں ملا۔", "سسٹم خرابی: رومانس پایا گیا۔", "محبت جیت گئی۔ ♥"
    ],
    music: { tapEnable: "موسیقی چلانے کے لیے ٹیپ کریں ♪", tapApplause: "تالیاں سننے کے لیے ٹیپ کریں ♪", playing: "♪ چل رہا ہے", paused: "♪ رکا ہوا" },
    app: {
      eyebrow: "ڈارلنگ پرائمیٹ", title: "درخواست",
      back: "پیچھے", cont: "جاری رکھیں", submit: "جمع کروائیں ♥",
      errorRequired: "براہ کرم پہلے ایک جواب منتخب کریں۔",
      errorDate: "براہ کرم ایک درست مستقبل کی تاریخ منتخب کریں۔",
      stepOf: (n, total) => `${String(n).padStart(2,"0")} / ${String(total).padStart(2,"0")}`
    },
    steps: {
      1: { title: "سب سے پہلے", q: "کیا آپ ڈیٹ پر جانا پسند کریں گی؟",
        o1m: "بالکل", o1s: "مجھے یہی امید تھی۔",
        o2m: "شاید...", o2s: "اچھے کھانے سے مجھے قائل کریں۔",
        o3m: "نہیں", o3s: "میرا دل فی الحال دستیاب نہیں ہے۔" },
      2: { title: "ایک دن منتخب کریں", q: "ہمارا یہ چھوٹا سا سفر کب ہو؟", hint: "کل سے کوئی بھی دن بالکل موزوں رہے گا۔" },
      3: { title: "موڈ منتخب کریں", q: "آپ کو کون سی ڈیٹ کامل لگتی ہے؟",
        o1m: "رومانوی ڈنر", o1s: "اچھا کھانا، ہلکی روشنی، لمبی گفتگو۔",
        o2m: "کافی اور واک", o2s: "سادہ، پرسکون، اور تھوڑا پیارا۔",
        o3m: "کچھ اچانک", o3s: "کوئی منصوبہ نہیں۔ بس احساس کی پیروی کریں۔",
        o4m: "مووی نائٹ", o4s: "ناشتہ، کمبل، اور کوئی رکاوٹ نہیں۔" },
      4: { title: "اہم سوال", q: "آپ کتنی پرجوش ہیں؟",
        o1m: "100%", o1s: "میں ابھی سے لباس منتخب کر رہی ہوں۔",
        o2m: "85%", o2s: "بہت پرجوش۔ عام دکھنے کی کوشش کر رہی ہوں۔",
        o3m: "70%", o3s: "خاموشی سے پرجوش۔",
        o4m: "50%", o4s: "دیکھتے ہیں یہ کہاں جاتا ہے۔" },
      5: { title: "مالیاتی شعبہ آ گیا ہے", q: "اس انتہائی اہم ڈیٹ کی ادائیگی کون کرے گا؟",
        o1m: "ڈارلنگ پرائمیٹ ♥", o1s: "اس نے دعوت دی۔ ظاہر ہے۔",
        o2m: "ہم تقسیم کریں گے 🤝", o2s: "جدید رومانس، جدید حساب کتاب۔",
        o3m: "آپ ادائیگی کریں 😌", o3s: "اعتماد۔ احترام۔",
        o4m: "جو پہلے ریستوران پہنچے", o4s: "ایک خطرناک مگر مؤثر حکمت عملی۔",
        o5m: "انتہائی سنجیدہ کمیٹی", o5s: "براہ کرم انوائس انتظامیہ کو جمع کروائیں۔" },
      6: { title: "ایک اور نہایت سنجیدہ سوال", q: "دیر سے آنے کا امکان کس کا زیادہ ہے؟",
        o1m: "ڈارلنگ پرائمیٹ", o1s: "شریف آدمی کا وقت کے ساتھ ایک پیچیدہ رشتہ ہے۔",
        o2m: "آپ", o2s: "فیشن ایبلی لیٹ، ظاہر ہے۔",
        o3m: "ہم دونوں", o3s: "کامل۔ کوئی شکایت نہیں کر سکتا۔",
        o4m: "کوئی نہیں", o4s: "ناممکن۔ کچھ نہ کچھ غلط ہونا چاہیے۔" },
      7: { title: "آخری موافقت کا امتحان", q: "جب ہم طے نہیں کر پاتے کہ کیا کھانا ہے تو کیا ہوتا ہے؟",
        o1m: "ہم سب کچھ آرڈر کریں گے۔", o1s: "مسئلہ حل۔",
        o2m: "آپ منتخب کریں۔", o2s: "ڈارلنگ پرائمیٹ آپ کی رائے پر بھروسہ کرتا ہے۔",
        o3m: "ڈارلنگ پرائمیٹ منتخب کرے گا۔", o3s: "ایک بہادر فیصلہ۔",
        o4m: "راک پیپر سیزرز۔", o4s: "سب سے زیادہ بھوکا جیتے۔",
        o5m: "کوئی بھی ریستوران۔", o5s: "ڈنر کا فیصلہ قسمت پر چھوڑ دیں۔" },
      8: { title: "آخری بات", q: "اس ڈیٹ کو کامل کیا بنا سکتا ہے؟",
        placeholder: "ڈارلنگ پرائمیٹ کو بتائیں کہ کیا اسے خاص بنائے گا...",
        raveLabel: "ریو ہینڈلز", ravePlaceholder: "انسٹاگرام، ریو، ڈسکورڈ، وغیرہ۔" }
    },
    confirm: {
      eyebrow: "درخواست موصول ہوئی", title: "یہ اب باضابطہ طور پر ایک ڈیٹ ہے۔",
      desc: "آپ کے جوابات کا ڈارلنگ پرائمیٹ کمیٹی نے نہایت سنجیدگی سے جائزہ لیا ہے۔",
      note: "شریف آدمی آپ کے فیصلے سے خوش ہے۔",
      dAnswer: "جواب", dDate: "تاریخ", dMood: "ڈیٹ اسٹائل", dExcitement: "جوش",
      dPayment: "ادائیگی کا انتظام", dPunctuality: "وقت کی پابندی", dFood: "کھانے کا فیصلہ",
      dNote: "کامل ڈیٹ نوٹ", dRave: "ریو ہینڈلز", dAppNum: "درخواست نمبر", dCertNum: "سرٹیفکیٹ نمبر",
      reportTitle: "سرکاری ڈیٹ رپورٹ",
      rRomance: "رومانس کا امکان", rRomanceVal: "97.8%",
      rFinancial: "مالی معاہدہ", rFinancialVal: "قانونی جائزہ زیر التوا۔",
      rPunct: "وقت کی پابندی", rPunctVal: "انتہائی مشکوک۔",
      rFood: "کھانے کی مطابقت", rFoodVal: "امید افزا۔",
      rOverall: "مجموعی مطابقت", rOverallVal: "مشکوک طور پر اچھی۔",
      viewCert: "سرٹیفکیٹ دیکھیں", startOver: "دوبارہ شروع کریں ♥",
      emptyTitle: "کوئی درخواست نہیں ملی", emptyDesc: "لگتا ہے ابھی تک کوئی ڈیٹ درخواست موجود نہیں۔",
      emptyCta: "درخواست شروع کریں ♥", notProvided: "فراہم نہیں کیا گیا"
    },
    cert: {
      eyebrow: "ڈارلنگ پرائمیٹ", pageTitle: "آپ کا سرٹیفکیٹ",
      subbrand: "نجی رومانوی سرٹیفیکیشن",
      title: "ڈیٹ کا سرٹیفکیٹ", subtitle: "باضابطہ طور پر مصدقہ",
      photoRole: "مرد رومانوی امیدوار",
      body1: "یہ سرٹیفکیٹ باضابطہ طور پر تسلیم کرتا ہے کہ ڈارلنگ پرائمیٹ اور ذیل میں درج وصول کنندہ نے ایک رومانوی ڈیٹ کی دعوت قبول کر لی ہے۔",
      body2: "انتہائی خفیہ کمیٹی کے جائزے کے بعد، درخواست منظور کر لی گئی ہے۔",
      recipient: "معزز ڈیٹ وصول کنندہ",
      iAppNum: "درخواست نمبر", iCertNum: "سرٹیفکیٹ نمبر", iIssueDate: "اجراء کی تاریخ", iApprovedDate: "منظور شدہ تاریخ",
      iDateStyle: "ڈیٹ اسٹائل", iExcitement: "جوش", iPayment: "ادائیگی", iPunctuality: "وقت کی پابندی",
      iFood: "کھانے کا فیصلہ", iRave: "ریو ہینڈلز",
      issuedBy: "جاری کنندہ", committee: "انتہائی سنجیدہ کمیٹی",
      authorizedBy: "منظور کنندہ", gentleman: "شریف آدمی",
      download: "سرٹیفکیٹ ڈاؤن لوڈ کریں", startOver: "دوبارہ شروع کریں ♥",
      emptyTitle: "سرٹیفکیٹ دستیاب نہیں", emptyDesc: "ابھی تصدیق کے لیے کوئی مکمل درخواست موجود نہیں۔",
      emptyCta: "درخواست شروع کریں ♥", notProvided: "فراہم نہیں کیا گیا"
    }
  },

  ar: {
    dir: "rtl",
    nav: { tag: "خاص • رومانسي • رسمي", langLabel: "اختر لغتك" },
    hero: {
      badge: "الطلبات مفتوحة الآن",
      headlinePre: "هل توافقين على ",
      headlineHi: "موعد",
      headlinePost: " معي؟",
      desc: "طلب صغير لقرار مهم جداً. لا ضغط، فقط طعام جيد، ورفقة أفضل، وربما القليل من الرومانسية.",
      small: "التزام صفري. أجواء بأقصى درجة. ربما.",
      yes: "نعم ♥", no: "لا",
      toastYes: "قرار ممتاز. ♥"
    },
    profile: {
      name: "دارلينغ برايميت", label: "♥ رئيسيات ذكر",
      tagline: "يستقبل حالياً طلبات لموعد واحد بالغ الأهمية.",
      s1l: "الحالة العاطفية", s1v: "بانتظار إجابتها",
      s2l: "التوفر", s2v: "متاح بشكل مثير للشك",
      s3l: "مستوى الرومانسية", s3v: "سري للغاية",
      s4l: "حالة الرقي", s4v: "مؤكدة"
    },
    floating: ["✨ أجواء جيدة فقط", "🍓 موعد واحد، من فضلك؟", "💌 سري للغاية", "🐒 سيد بانتظار الرد", "❤️ الطلب قيد المراجعة"],
    noMessages: [
      "محاولة جميلة 😌", "زر خاطئ.", "كدت تنجحين!", "الكون لا يوافق.",
      "السيد يرفض بكل احترام.", "طلب دارلينغ برايميت فرصة أخرى.",
      "قسم الرفض مغلق حالياً.", "تم رفض طلب رفضك.",
      "رفضت اللجنة رفضك.", "زر لا غادر المحادثة.",
      "زر لا استقال.", "محامي دارلينغ برايميت دخل المحادثة.",
      "404: الرفض غير موجود.", "خطأ في النظام: تم رصد رومانسية.", "الحب ينتصر. ♥"
    ],
    music: { tapEnable: "اضغط لتشغيل الموسيقى ♪", tapApplause: "اضغط لسماع التصفيق ♪", playing: "♪ قيد التشغيل", paused: "♪ متوقف" },
    app: {
      eyebrow: "دارلينغ برايميت", title: "الطلب",
      back: "رجوع", cont: "متابعة", submit: "إرسال ♥",
      errorRequired: "يرجى اختيار إجابة أولاً.",
      errorDate: "يرجى اختيار تاريخ مستقبلي صالح.",
      stepOf: (n, total) => `${String(n).padStart(2,"0")} / ${String(total).padStart(2,"0")}`
    },
    steps: {
      1: { title: "بدايةً", q: "هل ترغبين بالذهاب في موعد؟",
        o1m: "بالتأكيد", o1s: "كنت آمل أن تقولي ذلك.",
        o2m: "ربما...", o2s: "أقنعيني بطعام جيد.",
        o3m: "لا", o3s: "قلبي غير متاح حالياً." },
      2: { title: "اختاري يوماً", q: "متى يجب أن تحدث مغامرتنا الصغيرة؟", hint: "أي يوم من الغد فصاعداً سيكون رائعاً." },
      3: { title: "اختاري الأجواء", q: "ما الذي يبدو كموعد مثالي؟",
        o1m: "عشاء رومانسي", o1s: "طعام جيد، إضاءة هادئة، أحاديث طويلة.",
        o2m: "قهوة ونزهة", o2s: "بسيط، هادئ، وقليل من اللطف.",
        o3m: "شيء عفوي", o3s: "لا خطة. فقط اتبعي الإحساس.",
        o4m: "أمسية أفلام", o4s: "وجبات خفيفة، بطانيات، وصفر مقاطعات." },
      4: { title: "سؤال مهم", q: "ما مدى حماسك؟",
        o1m: "100%", o1s: "أنا بالفعل أختار ملابسي.",
        o2m: "85%", o2s: "متحمسة جداً. أحاول التصرف بشكل طبيعي.",
        o3m: "70%", o3s: "متحمسة بهدوء.",
        o4m: "50%", o4s: "لنرَ إلى أين يذهب هذا." },
      5: { title: "وصلت الإدارة المالية", q: "من سيدفع ثمن هذا الموعد البالغ الأهمية؟",
        o1m: "دارلينغ برايميت ♥", o1s: "هو من دعاك. بالطبع.",
        o2m: "نقسمها 🤝", o2s: "رومانسية حديثة بمحاسبة حديثة.",
        o3m: "أنتِ تدفعين 😌", o3s: "ثقة. احترام.",
        o4m: "من يصل إلى المطعم أولاً", o4s: "استراتيجية خطيرة لكنها فعالة.",
        o5m: "اللجنة الجادة للغاية", o5s: "يرجى تقديم الفاتورة إلى الإدارة." },
      6: { title: "سؤال آخر بالغ الجدية", q: "من الأكثر احتمالاً أن يتأخر؟",
        o1m: "دارلينغ برايميت", o1s: "للسيد علاقة معقدة مع الوقت.",
        o2m: "أنتِ", o2s: "متأخرة بأناقة، بالطبع.",
        o3m: "كلانا", o3s: "مثالي. لا أحد يستطيع الشكوى.",
        o4m: "لا أحد", o4s: "مستحيل. لا بد أن يحدث خطأ ما." },
      7: { title: "اختبار التوافق الأخير", q: "ماذا يحدث عندما لا نستطيع تقرير ماذا نأكل؟",
        o1m: "سنطلب كل شيء.", o1s: "المشكلة محلولة.",
        o2m: "أنتِ تختارين.", o2s: "دارلينغ برايميت يثق بحكمك.",
        o3m: "دارلينغ برايميت يختار.", o3s: "قرار جريء.",
        o4m: "حجر ورقة مقص.", o4s: "ليفز الأكثر جوعاً.",
        o5m: "مطعم عشوائي.", o5s: "دعي القدر يتولى العشاء." },
      8: { title: "شيء أخير", q: "ما الذي سيجعل هذا الموعد مثالياً؟",
        placeholder: "أخبري دارلينغ برايميت بما سيجعله مميزاً...",
        raveLabel: "حسابات التواصل", ravePlaceholder: "انستغرام، Rave، ديسكورد، إلخ." }
    },
    confirm: {
      eyebrow: "تم استلام الطلب", title: "أصبح موعداً رسمياً الآن.",
      desc: "تمت مراجعة إجاباتك بعناية من قبل لجنة دارلينغ برايميت الجادة للغاية.",
      note: "السيد سعيد بقرارك.",
      dAnswer: "الإجابة", dDate: "التاريخ", dMood: "نمط الموعد", dExcitement: "الحماس",
      dPayment: "ترتيب الدفع", dPunctuality: "الالتزام بالوقت", dFood: "قرار الطعام",
      dNote: "ملاحظة الموعد المثالي", dRave: "حسابات التواصل", dAppNum: "رقم الطلب", dCertNum: "رقم الشهادة",
      reportTitle: "تقرير الموعد الرسمي",
      rRomance: "احتمالية الرومانسية", rRomanceVal: "97.8%",
      rFinancial: "الاتفاق المالي", rFinancialVal: "بانتظار المراجعة القانونية.",
      rPunct: "الالتزام بالوقت", rPunctVal: "مشكوك فيه للغاية.",
      rFood: "توافق الطعام", rFoodVal: "واعد.",
      rOverall: "التوافق العام", rOverallVal: "جيد بشكل مثير للشك.",
      viewCert: "عرض الشهادة", startOver: "البدء من جديد ♥",
      emptyTitle: "لم يتم العثور على طلب", emptyDesc: "يبدو أنه لا يوجد طلب موعد مسجل بعد.",
      emptyCta: "ابدئي الطلب ♥", notProvided: "غير متوفر"
    },
    cert: {
      eyebrow: "دارلينغ برايميت", pageTitle: "شهادتك",
      subbrand: "شهادة رومانسية خاصة",
      title: "شهادة موعد", subtitle: "معتمدة رسمياً",
      photoRole: "مرشح رومانسي ذكر",
      body1: "تعترف هذه الشهادة رسمياً بأن دارلينغ برايميت والمستلمة المذكورة أدناه قد قبلا دعوة موعد رومانسي.",
      body2: "بعد مراجعة سرية للغاية من قبل اللجنة الجادة للغاية، تمت الموافقة على الطلب.",
      recipient: "مستلمة الموعد الموقرة",
      iAppNum: "رقم الطلب", iCertNum: "رقم الشهادة", iIssueDate: "تاريخ الإصدار", iApprovedDate: "تاريخ الموافقة",
      iDateStyle: "نمط الموعد", iExcitement: "الحماس", iPayment: "الدفع", iPunctuality: "الالتزام بالوقت",
      iFood: "قرار الطعام", iRave: "حسابات التواصل",
      issuedBy: "صادرة عن", committee: "اللجنة الجادة للغاية",
      authorizedBy: "معتمدة من", gentleman: "السيد",
      download: "تحميل الشهادة", startOver: "البدء من جديد ♥",
      emptyTitle: "الشهادة غير متوفرة", emptyDesc: "لا يوجد طلب مكتمل لاعتماده بعد.",
      emptyCta: "ابدئي الطلب ♥", notProvided: "غير متوفر"
    }
  },

  tr: {
    dir: "ltr",
    nav: { tag: "ÖZEL • ROMANTİK • RESMİ", langLabel: "Dilinizi seçin" },
    hero: {
      badge: "Başvurular şimdi açık",
      headlinePre: "Benimle bir ",
      headlineHi: "buluşmaya",
      headlinePost: " gider misin?",
      desc: "Çok önemli bir karar için küçük bir başvuru. Baskı yok, sadece güzel yemek, daha iyi bir eşlik ve belki biraz romantizm.",
      small: "Sıfır taahhüt. Maksimum enerji. Muhtemelen.",
      yes: "EVET ♥", no: "HAYIR",
      toastYes: "Mükemmel bir karar. ♥"
    },
    profile: {
      name: "DARLING PRIMATE", label: "♥ ERKEK PRİMAT",
      tagline: "Şu anda son derece önemli bir buluşma için başvuru kabul ediliyor.",
      s1l: "İlişki durumu", s1v: "Onun cevabını bekliyor",
      s2l: "Uygunluk", s2v: "Şüphe uyandıracak kadar müsait",
      s3l: "Romantizm seviyesi", s3v: "Son derece gizli",
      s4l: "Centilmenlik durumu", s4v: "Onaylandı"
    },
    floating: ["✨ sadece iyi enerji", "🍓 bir buluşma, lütfen?", "💌 son derece gizli", "🐒 cevap bekleyen centilmen", "❤️ başvuru beklemede"],
    noMessages: [
      "İyi deneme 😌", "Yanlış buton.", "Neredeyse!", "Evren aynı fikirde değil.",
      "Centilmen saygıyla katılmıyor.", "Darling Primate bir şans daha istedi.",
      "Ret departmanı şu anda kapalı.", "Ret talebiniz reddedildi.",
      "Komite reddinizi reddetti.", "Hayır butonu sohbetten ayrıldı.",
      "Hayır butonu istifa etti.", "Darling Primate'ın avukatı sohbete katıldı.",
      "404: Ret bulunamadı.", "Sistem hatası: romantizm tespit edildi.", "Aşk kazanır. ♥"
    ],
    music: { tapEnable: "Müziği açmak için dokun ♪", tapApplause: "Alkışı duymak için dokun ♪", playing: "♪ Çalıyor", paused: "♪ Duraklatıldı" },
    app: {
      eyebrow: "DARLING PRIMATE", title: "Başvuru",
      back: "Geri", cont: "Devam et", submit: "Gönder ♥",
      errorRequired: "Lütfen önce bir cevap seçin.",
      errorDate: "Lütfen geçerli bir gelecek tarih seçin.",
      stepOf: (n, total) => `${String(n).padStart(2,"0")} / ${String(total).padStart(2,"0")}`
    },
    steps: {
      1: { title: "Öncelikle", q: "Bir buluşmaya gitmek ister misin?",
        o1m: "Kesinlikle", o1s: "Bunu söylemeni umuyordum.",
        o2m: "Belki...", o2s: "Beni güzel bir yemekle ikna et.",
        o3m: "Hayır", o3s: "Kalbim şu anda müsait değil." },
      2: { title: "Bir gün seç", q: "Küçük maceramız ne zaman olsun?", hint: "Yarından itibaren herhangi bir gün harika olur." },
      3: { title: "Havayı seç", q: "Mükemmel bir buluşma nasıl olurdu?",
        o1m: "Romantik akşam yemeği", o1s: "Güzel yemek, yumuşak ışıklar, uzun sohbetler.",
        o2m: "Kahve ve yürüyüş", o2s: "Basit, sakin ve biraz tatlı.",
        o3m: "Spontane bir şey", o3s: "Plan yok. Sadece hisleri takip et.",
        o4m: "Film gecesi", o4s: "Atıştırmalıklar, battaniyeler ve sıfır kesinti." },
      4: { title: "Önemli soru", q: "Ne kadar heyecanlısın?",
        o1m: "%100", o1s: "Şimdiden kıyafet seçiyorum.",
        o2m: "%85", o2s: "Çok heyecanlıyım. Normal davranmaya çalışıyorum.",
        o3m: "%70", o3s: "Sessizce heyecanlıyım.",
        o4m: "%50", o4s: "Bakalım nereye varacak." },
      5: { title: "Mali departman geldi", q: "Bu son derece önemli buluşmayı kim ödeyecek?",
        o1m: "Darling Primate ♥", o1s: "Davet eden o. Tabii ki.",
        o2m: "Paylaşalım 🤝", o2s: "Modern romantizm, modern muhasebe.",
        o3m: "Sen ödersin 😌", o3s: "Özgüven. Saygı.",
        o4m: "Restorana ilk kim varırsa", o4s: "Tehlikeli ama etkili bir strateji.",
        o5m: "Son Derece Ciddi Komite", o5s: "Lütfen faturayı yönetime iletin." },
      6: { title: "Bir çok ciddi soru daha", q: "Kimin geç kalma ihtimali daha yüksek?",
        o1m: "Darling Primate", o1s: "Centilmenin zamanla karmaşık bir ilişkisi var.",
        o2m: "Sen", o2s: "Şık bir şekilde geç, tabii ki.",
        o3m: "İkimiz de", o3s: "Mükemmel. Kimse şikayet edemez.",
        o4m: "Hiçbirimiz", o4s: "İmkansız. Bir şeyler ters gitmeli." },
      7: { title: "Son uyumluluk testi", q: "Ne yiyeceğimize karar veremediğimizde ne olur?",
        o1m: "Her şeyi sipariş ederiz.", o1s: "Sorun çözüldü.",
        o2m: "Sen seç.", o2s: "Darling Primate senin kararına güveniyor.",
        o3m: "Darling Primate seçer.", o3s: "Cesur bir karar.",
        o4m: "Taş kağıt makas.", o4s: "En aç olan kazansın.",
        o5m: "Rastgele restoran.", o5s: "Kaderin akşam yemeğini halletmesine izin ver." },
      8: { title: "Son bir şey", q: "Bu buluşmayı mükemmel yapacak şey ne olurdu?",
        placeholder: "Darling Primate'a onu özel kılacak şeyi anlat...",
        raveLabel: "Sosyal Medya", ravePlaceholder: "Instagram, Rave, Discord, vb." }
    },
    confirm: {
      eyebrow: "BAŞVURU ALINDI", title: "Artık resmen bir buluşma.",
      desc: "Cevapların, son derece ciddi Darling Primate komitesi tarafından dikkatle incelendi.",
      note: "Centilmen kararından memnun.",
      dAnswer: "Cevap", dDate: "Tarih", dMood: "Buluşma stili", dExcitement: "Heyecan",
      dPayment: "Ödeme düzenlemesi", dPunctuality: "Dakiklik", dFood: "Yemek kararı",
      dNote: "Mükemmel buluşma notu", dRave: "Sosyal Medya", dAppNum: "Başvuru numarası", dCertNum: "Sertifika numarası",
      reportTitle: "RESMİ BULUŞMA RAPORU",
      rRomance: "Romantizm olasılığı", rRomanceVal: "%97.8",
      rFinancial: "Mali anlaşma", rFinancialVal: "Yasal inceleme bekleniyor.",
      rPunct: "Dakiklik", rPunctVal: "Son derece şüpheli.",
      rFood: "Yemek uyumu", rFoodVal: "Umut verici.",
      rOverall: "Genel uyumluluk", rOverallVal: "Şüphe uyandıracak kadar iyi.",
      viewCert: "Sertifikayı Görüntüle", startOver: "Baştan başla ♥",
      emptyTitle: "Başvuru bulunamadı", emptyDesc: "Görünüşe göre henüz kayıtlı bir buluşma başvurusu yok.",
      emptyCta: "Başvuruyu başlat ♥", notProvided: "Belirtilmedi"
    },
    cert: {
      eyebrow: "DARLING PRIMATE", pageTitle: "Sertifikanız",
      subbrand: "ÖZEL ROMANTİK SERTİFİKASYON",
      title: "BULUŞMA SERTİFİKASI", subtitle: "RESMİ OLARAK ONAYLANDI",
      photoRole: "Erkek Romantik Aday",
      body1: "Bu sertifika, Darling Primate ile aşağıda belirtilen alıcının romantik bir buluşma davetini kabul ettiğini resmi olarak tanır.",
      body2: "Son Derece Ciddi Komite tarafından son derece gizli bir incelemenin ardından başvuru onaylanmıştır.",
      recipient: "SEÇKİN BULUŞMA ALICISI",
      iAppNum: "Başvuru No.", iCertNum: "Sertifika No.", iIssueDate: "Düzenleme Tarihi", iApprovedDate: "Onay Tarihi",
      iDateStyle: "Buluşma Stili", iExcitement: "Heyecan", iPayment: "Ödeme", iPunctuality: "Dakiklik",
      iFood: "Yemek Kararı", iRave: "Sosyal Medya",
      issuedBy: "Düzenleyen", committee: "SON DERECE CİDDİ KOMİTE",
      authorizedBy: "Onaylayan", gentleman: "Centilmen",
      download: "Sertifikayı İndir", startOver: "Baştan başla ♥",
      emptyTitle: "Sertifika mevcut değil", emptyDesc: "Henüz onaylanacak tamamlanmış bir başvuru yok.",
      emptyCta: "Başvuruyu başlat ♥", notProvided: "Belirtilmedi"
    }
  }
};

/* ---------------------------------------------------------------------------
   2. STATE / CONSTANTS
   --------------------------------------------------------------------------- */
const LANG_KEY = "dp_language";
const APP_KEY = "dp_application";
const APP_NUM_KEY = "dp_application_number";
const CERT_NUM_KEY = "dp_certificate_number";
const MUSIC_KEY = "dp_music_enabled";
const TOTAL_STEPS = 8;

function getLang(){
  try{ return localStorage.getItem(LANG_KEY) || "en"; }catch(e){ return "en"; }
}
function saveLanguage(lang){
  try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
}
function t(){
  const lang = getLang();
  return translations[lang] || translations.en;
}

/* ---------------------------------------------------------------------------
   3. LANGUAGE APPLICATION
   --------------------------------------------------------------------------- */
function updateDirection(lang){
  const dir = translations[lang]?.dir || "ltr";
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
}

function resolvePath(obj, path){
  return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function applyLanguage(){
  const lang = getLang();
  const dict = translations[lang] || translations.en;
  updateDirection(lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = resolvePath(dict, key);
    if (typeof val === "string") el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = resolvePath(dict, key);
    if (typeof val === "string") el.setAttribute("placeholder", val);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    const val = resolvePath(dict, key);
    if (typeof val === "string") el.setAttribute("aria-label", val);
  });

  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = lang;

  document.dispatchEvent(new CustomEvent("dp:languageApplied", { detail: { lang, dict } }));
}

function setLanguage(lang){
  if (!translations[lang]) lang = "en";
  saveLanguage(lang);
  applyLanguage();
}

function loadLanguage(){
  applyLanguage();
}

function initLanguageSelector(){
  const sel = document.getElementById("langSelect");
  if (!sel) return;
  sel.value = getLang();
  sel.addEventListener("change", () => setLanguage(sel.value));
}

/* ---------------------------------------------------------------------------
   4. TOAST
   --------------------------------------------------------------------------- */
let toastTimer = null;
function showToast(message){
  let el = document.getElementById("dpToast");
  if (!el){
    el = document.createElement("div");
    el.id = "dpToast";
    el.className = "toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------------------------------------------------------------------------
   5. MUSIC
   --------------------------------------------------------------------------- */
let mainAudio = null;
let certAudio = null;

function musicEnabled(){
  try{ return localStorage.getItem(MUSIC_KEY) === "1"; }catch(e){ return false; }
}
function setMusicEnabled(v){
  try{ localStorage.setItem(MUSIC_KEY, v ? "1" : "0"); }catch(e){}
}

function buildMusicControl(){
  if (document.getElementById("musicControl")) return;
  const wrap = document.createElement("div");
  wrap.className = "music-control";
  wrap.id = "musicControl";
  wrap.innerHTML = `
    <span class="music-control__label" id="musicStateLabel"></span>
    <button type="button" class="music-control__btn" id="musicToggleBtn" aria-label="Play or pause music">⏯</button>
    <button type="button" class="music-control__btn" id="musicMuteBtn" aria-label="Mute or unmute music">🔊</button>
  `;
  document.body.appendChild(wrap);

  document.getElementById("musicToggleBtn").addEventListener("click", () => {
    const audio = certAudio || mainAudio;
    if (!audio) return;
    if (audio.paused){ audio.play().catch(()=>{}); setMusicEnabled(true); }
    else { audio.pause(); }
    updateMusicLabel();
  });
  document.getElementById("musicMuteBtn").addEventListener("click", (e) => {
    const audio = certAudio || mainAudio;
    if (!audio) return;
    audio.muted = !audio.muted;
    e.target.textContent = audio.muted ? "🔇" : "🔊";
  });
}

function updateMusicLabel(){
  const label = document.getElementById("musicStateLabel");
  const audio = certAudio || mainAudio;
  if (!label || !audio) return;
  const dict = t();
  label.textContent = audio.paused ? dict.music.paused : dict.music.playing;
}

function showEnableBanner(message, onEnable){
  let el = document.getElementById("musicEnableBanner");
  if (el) el.remove();
  el = document.createElement("button");
  el.type = "button";
  el.id = "musicEnableBanner";
  el.className = "music-enable-banner";
  el.textContent = message;
  document.body.appendChild(el);
  const handler = () => {
    onEnable();
    el.remove();
  };
  el.addEventListener("click", handler, { once: true });
}

function initializeMainMusic(){
  const audio = new Audio("assets/romantic-background.mp3");
  audio.loop = true;
  audio.volume = 0.55;
  mainAudio = audio;
  buildMusicControl();

  const tryPlay = () => {
    audio.play().then(() => {
      setMusicEnabled(true);
      updateMusicLabel();
    }).catch(() => {
      showEnableBanner(t().music.tapEnable, () => {
        audio.play().catch(()=>{});
        setMusicEnabled(true);
        updateMusicLabel();
      });
    });
  };

  if (musicEnabled()){
    tryPlay();
  } else {
    audio.muted = false;
    audio.play().then(() => {
      setMusicEnabled(true);
      updateMusicLabel();
    }).catch(() => {
      showEnableBanner(t().music.tapEnable, () => {
        audio.play().catch(()=>{});
        setMusicEnabled(true);
        updateMusicLabel();
      });
    });
  }

  audio.addEventListener("play", updateMusicLabel);
  audio.addEventListener("pause", updateMusicLabel);
  window.addEventListener("beforeunload", () => { try{ audio.pause(); }catch(e){} });
}

function stopMainMusic(){
  if (mainAudio){
    try{ mainAudio.pause(); }catch(e){}
  }
}

function initializeCertificateMusic(){
  stopMainMusic();
  const audio = new Audio("assets/ending-applause.mp3");
  audio.loop = false;
  audio.volume = 0.7;
  certAudio = audio;
  buildMusicControl();

  audio.play().then(() => {
    updateMusicLabel();
  }).catch(() => {
    showEnableBanner(t().music.tapApplause, () => {
      audio.play().catch(()=>{});
      updateMusicLabel();
    });
  });

  audio.addEventListener("play", updateMusicLabel);
  audio.addEventListener("pause", updateMusicLabel);
}

/* ---------------------------------------------------------------------------
   6. NO BUTTON ESCAPE LOGIC
   --------------------------------------------------------------------------- */
function getSafeZones(excludeEl){
  const zones = [];
  document.querySelectorAll("[data-safe-zone]").forEach(el => {
    if (el === excludeEl) return;
    const r = el.getBoundingClientRect();
    zones.push({ left: r.left - 16, top: r.top - 16, right: r.right + 16, bottom: r.bottom + 16 });
  });
  return zones;
}

function rectsOverlap(a, b){
  return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
}

function randomSafePosition(el){
  const margin = 16;
  const w = el.offsetWidth || 140;
  const h = el.offsetHeight || 52;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxLeft = Math.max(margin, vw - w - margin);
  const maxTop = Math.max(margin, vh - h - margin);
  const zones = getSafeZones(el);

  let attempt = { left: margin, top: margin };
  for (let i = 0; i < 24; i++){
    const left = margin + Math.random() * (maxLeft - margin);
    const top = margin + Math.random() * (maxTop - margin);
    const rect = { left, top, right: left + w, bottom: top + h };
    const collides = zones.some(z => rectsOverlap(rect, z));
    if (!collides){ attempt = { left, top }; break; }
    attempt = { left, top };
  }
  return attempt;
}

function moveNoButton(el){
  const pos = randomSafePosition(el);
  el.style.left = pos.left + "px";
  el.style.top = pos.top + "px";
}

let noAttemptCounts = new WeakMap();
function handleNoAttempt(el, msgTarget){
  const dict = t();
  const messages = dict.noMessages;
  const count = (noAttemptCounts.get(el) || 0) + 1;
  noAttemptCounts.set(el, count);
  const idx = Math.min(count - 1, messages.length - 1);
  const msg = messages[idx];
  if (msgTarget){
    msgTarget.textContent = msg;
    msgTarget.classList.add("show");
  } else {
    showToast(msg);
  }
  moveNoButton(el);
}

function initNoButtonEscape(el, msgTargetId){
  if (!el) return;
  const msgTarget = msgTargetId ? document.getElementById(msgTargetId) : null;

  // Yes & No start side by side (no initial jump). The No button only
  // starts fleeing the first time someone actually tries to reach it.
  const trigger = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleNoAttempt(el, msgTarget);
  };

  el.addEventListener("pointerdown", trigger, { passive: false });
  el.addEventListener("pointerenter", trigger, { passive: false });
  el.addEventListener("focus", trigger);
  el.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); });

  // Proximity dodge on desktop pointer movement
  let ticking = false;
  document.addEventListener("pointermove", (e) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      if (dist < 90){
        handleNoAttempt(el, msgTarget);
      }
    });
  });

  window.addEventListener("resize", () => {
    // Only reposition on resize once the chase has actually started —
    // otherwise a rotation/resize before any attempt would rip the
    // button away from the Yes button for no reason.
    if (noAttemptCounts.get(el)) moveNoButton(el);
  });
}

/* ---------------------------------------------------------------------------
   7. UTILITIES
   --------------------------------------------------------------------------- */
function randomCode(len){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i=0;i<len;i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}
function generateApplicationNumber(){
  return "DP-" + randomCode(6);
}
function generateCertificateNumber(){
  return "DP-CERT-" + randomCode(6);
}

function setMinimumDate(inputEl){
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const iso = tomorrow.toISOString().split("T")[0];
  inputEl.setAttribute("min", iso);
}

function formatDate(iso, lang){
  if (!iso) return "";
  try{
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(lang === "en" ? "en-US" : lang, { year: "numeric", month: "long", day: "numeric" });
  }catch(e){ return iso; }
}

function loadApplication(){
  try{
    const raw = localStorage.getItem(APP_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
function saveApplication(app){
  try{ localStorage.setItem(APP_KEY, JSON.stringify(app)); }catch(e){}
}

/* ---------------------------------------------------------------------------
   8. INDEX PAGE
   --------------------------------------------------------------------------- */
function initIndexPage(){
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  if (yesBtn){
    yesBtn.addEventListener("click", () => {
      showToast(t().hero.toastYes);
      yesBtn.classList.add("pulse");
      setTimeout(() => { window.location.href = "application.html"; }, 700);
    });
  }
  if (noBtn){
    noBtn.setAttribute("data-safe-zone", "");
    yesBtn && yesBtn.setAttribute("data-safe-zone", "");
    initNoButtonEscape(noBtn);
  }
}

/* ---------------------------------------------------------------------------
   9. APPLICATION PAGE
   --------------------------------------------------------------------------- */
const application = {
  answer: "", date: "", mood: "", excitement: "",
  payment: "", punctuality: "", foodDecision: "", note: "", raveHandles: ""
};

let currentStep = 1;

function stepFieldMap(){
  return { 1: "answer", 3: "mood", 4: "excitement", 5: "payment", 6: "punctuality", 7: "foodDecision" };
}

function renderStep(){
  const dict = t();
  const container = document.getElementById("stepContainer");
  const s = dict.steps[currentStep];
  if (!container || !s) return;

  document.getElementById("stepCount").textContent = dict.app.stepOf(currentStep, TOTAL_STEPS);
  document.getElementById("progressFill").style.width = ((currentStep / TOTAL_STEPS) * 100) + "%";

  let html = `<div class="step-title">${dict.app.title} — ${String(currentStep).padStart(2,"0")}/${TOTAL_STEPS}</div>
              <h2 class="step-question">${s.q}</h2>`;

  if (currentStep === 1){
    html += optionsHtml([
      { key: "absolutely", main: s.o1m, sub: s.o1s },
      { key: "maybe", main: s.o2m, sub: s.o2s },
      { key: "no", main: s.o3m, sub: s.o3s, escape: true }
    ], application.answer, "answer");
  } else if (currentStep === 2){
    html += `<label class="field-label" for="dateInput">${s.title}</label>
             <input type="date" id="dateInput" class="field-input" value="${application.date || ""}" required />
             <div class="field-hint">${s.hint}</div>`;
  } else if (currentStep === 3){
    html += optionsHtml([
      { key: "dinner", main: s.o1m, sub: s.o1s },
      { key: "coffee", main: s.o2m, sub: s.o2s },
      { key: "spontaneous", main: s.o3m, sub: s.o3s },
      { key: "movie", main: s.o4m, sub: s.o4s }
    ], application.mood, "mood");
  } else if (currentStep === 4){
    html += optionsHtml([
      { key: "100", main: s.o1m, sub: s.o1s },
      { key: "85", main: s.o2m, sub: s.o2s },
      { key: "70", main: s.o3m, sub: s.o3s },
      { key: "50", main: s.o4m, sub: s.o4s }
    ], application.excitement, "excitement");
  } else if (currentStep === 5){
    html += optionsHtml([
      { key: "primate", main: s.o1m, sub: s.o1s },
      { key: "split", main: s.o2m, sub: s.o2s },
      { key: "you", main: s.o3m, sub: s.o3s },
      { key: "race", main: s.o4m, sub: s.o4s },
      { key: "committee", main: s.o5m, sub: s.o5s }
    ], application.payment, "payment");
  } else if (currentStep === 6){
    html += optionsHtml([
      { key: "primate", main: s.o1m, sub: s.o1s },
      { key: "you", main: s.o2m, sub: s.o2s },
      { key: "both", main: s.o3m, sub: s.o3s },
      { key: "neither", main: s.o4m, sub: s.o4s }
    ], application.punctuality, "punctuality");
  } else if (currentStep === 7){
    html += optionsHtml([
      { key: "everything", main: s.o1m, sub: s.o1s },
      { key: "you", main: s.o2m, sub: s.o2s },
      { key: "primate", main: s.o3m, sub: s.o3s },
      { key: "rps", main: s.o4m, sub: s.o4s },
      { key: "random", main: s.o5m, sub: s.o5s }
    ], application.foodDecision, "foodDecision");
  } else if (currentStep === 8){
    html += `<label class="field-label" for="noteInput">${s.title}</label>
             <textarea id="noteInput" class="field-textarea" placeholder="${s.placeholder}">${application.note || ""}</textarea>
             <label class="field-label" for="raveInput" style="margin-top:20px;">${s.raveLabel}</label>
             <input type="text" id="raveInput" class="field-input" placeholder="${s.ravePlaceholder}" value="${application.raveHandles || ""}" />`;
  }

  html += `<div class="field-error" id="stepError">${dict.app.errorRequired}</div>`;
  html += `<div class="step-nav">
             <button type="button" class="btn btn-ghost" id="backBtn" ${currentStep === 1 ? "style=\"visibility:hidden;\"" : ""}>${dict.app.back}</button>
             <button type="button" class="btn btn-primary" id="nextBtn">${currentStep === TOTAL_STEPS ? dict.app.submit : dict.app.cont}</button>
           </div>`;

  container.innerHTML = html;

  if (currentStep === 1){
    // attach escape behaviour to the "No" option in step 1
    const noOptionBtn = container.querySelector('[data-option-key="no"]');
    if (noOptionBtn){
      noOptionBtn.setAttribute("data-safe-zone","");
      const yesLikeButtons = container.querySelectorAll('.option-card:not([data-option-key="no"])');
      yesLikeButtons.forEach(b => b.setAttribute("data-safe-zone",""));
      initNoButtonEscape(noOptionBtn);
    }
  }

  if (currentStep === 2){
    const dateInput = document.getElementById("dateInput");
    setMinimumDate(dateInput);
  }

  container.querySelectorAll(".option-card:not([data-option-key='no'])").forEach(btn => {
    btn.addEventListener("click", () => {
      const field = stepFieldMap()[currentStep];
      application[field] = btn.getAttribute("data-option-key");
      container.querySelectorAll(".option-card").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      document.getElementById("stepError")?.classList.remove("show");
    });
  });

  document.getElementById("backBtn")?.addEventListener("click", previousStep);
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    if (currentStep === TOTAL_STEPS) submitApplication();
    else nextStep();
  });
}

function optionsHtml(options, selectedValue, field){
  return `<div class="options-grid">` + options.map(o => `
    <button type="button" class="option-card ${selectedValue === o.key ? "selected" : ""}" data-option-key="${o.key}">
      <span class="option-card__main">${o.main}</span>
      <span class="option-card__sub">${o.sub}</span>
    </button>
  `).join("") + `</div>`;
}

function validateStep(){
  const dict = t();
  const errorEl = document.getElementById("stepError");
  if (currentStep === 2){
    const dateInput = document.getElementById("dateInput");
    const val = dateInput.value;
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+1); tomorrow.setHours(0,0,0,0);
    if (!val || new Date(val + "T00:00:00") < tomorrow){
      errorEl.textContent = dict.app.errorDate;
      errorEl.classList.add("show");
      return false;
    }
    application.date = val;
    return true;
  }
  const field = stepFieldMap()[currentStep];
  if (field){
    if (!application[field]){
      errorEl.textContent = dict.app.errorRequired;
      errorEl.classList.add("show");
      return false;
    }
    return true;
  }
  if (currentStep === 8){
    application.note = document.getElementById("noteInput").value.trim();
    application.raveHandles = document.getElementById("raveInput").value.trim();
    return true;
  }
  return true;
}

function nextStep(){
  if (!validateStep()) return;
  saveApplication(application);
  currentStep = Math.min(TOTAL_STEPS, currentStep + 1);
  renderStep();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function previousStep(){
  currentStep = Math.max(1, currentStep - 1);
  renderStep();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function submitApplication(){
  if (!validateStep()) return;
  saveApplication(application);
  const appNum = generateApplicationNumber();
  const certNum = generateCertificateNumber();
  try{
    localStorage.setItem(APP_NUM_KEY, appNum);
    localStorage.setItem(CERT_NUM_KEY, certNum);
  }catch(e){}
  window.location.href = "confirmation.html";
}

function initApplicationPage(){
  const saved = loadApplication();
  if (saved) Object.assign(application, saved);
  renderStep();
}

/* ---------------------------------------------------------------------------
   10. CONFIRMATION PAGE
   --------------------------------------------------------------------------- */
function labelForAnswer(field, key, dict){
  const s = dict.steps;
  const map = {
    answer: { absolutely: s[1].o1m, maybe: s[1].o2m, no: s[1].o3m },
    mood: { dinner: s[3].o1m, coffee: s[3].o2m, spontaneous: s[3].o3m, movie: s[3].o4m },
    excitement: { "100": s[4].o1m, "85": s[4].o2m, "70": s[4].o3m, "50": s[4].o4m },
    payment: { primate: s[5].o1m, split: s[5].o2m, you: s[5].o3m, race: s[5].o4m, committee: s[5].o5m },
    punctuality: { primate: s[6].o1m, you: s[6].o2m, both: s[6].o3m, neither: s[6].o4m },
    foodDecision: { everything: s[7].o1m, you: s[7].o2m, primate: s[7].o3m, rps: s[7].o4m, random: s[7].o5m }
  };
  return (map[field] && map[field][key]) || key || "";
}

function renderConfirmation(){
  const dict = t();
  const app = loadApplication();
  const appNum = safeGet(APP_NUM_KEY);
  const certNum = safeGet(CERT_NUM_KEY);

  const main = document.getElementById("confirmMain");
  const empty = document.getElementById("confirmEmpty");
  if (!app || !appNum){
    if (main) main.style.display = "none";
    if (empty) empty.style.display = "block";
    return;
  }
  if (main) main.style.display = "";
  if (empty) empty.style.display = "none";

  const lang = getLang();
  const rows = [
    [dict.confirm.dAnswer, labelForAnswer("answer", app.answer, dict)],
    [dict.confirm.dDate, formatDate(app.date, lang)],
    [dict.confirm.dMood, labelForAnswer("mood", app.mood, dict)],
    [dict.confirm.dExcitement, labelForAnswer("excitement", app.excitement, dict)],
    [dict.confirm.dPayment, labelForAnswer("payment", app.payment, dict)],
    [dict.confirm.dPunctuality, labelForAnswer("punctuality", app.punctuality, dict)],
    [dict.confirm.dFood, labelForAnswer("foodDecision", app.foodDecision, dict)],
    [dict.confirm.dNote, app.note || dict.confirm.notProvided],
    [dict.confirm.dRave, app.raveHandles || dict.confirm.notProvided],
    [dict.confirm.dAppNum, appNum],
    [dict.confirm.dCertNum, certNum]
  ];

  const grid = document.getElementById("detailGrid");
  if (grid){
    grid.innerHTML = rows.map(([label, value]) => `
      <div class="detail-card">
        <div class="detail-card__label">${label}</div>
        <div class="detail-card__value">${escapeHtml(String(value))}</div>
      </div>
    `).join("");
  }
}

function safeGet(key){
  try{ return localStorage.getItem(key) || ""; }catch(e){ return ""; }
}
function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function initConfirmationPage(){
  renderConfirmation();
  document.addEventListener("dp:languageApplied", renderConfirmation);

  document.getElementById("startOverBtn")?.addEventListener("click", () => {
    try{
      localStorage.removeItem(APP_KEY);
      localStorage.removeItem(APP_NUM_KEY);
      localStorage.removeItem(CERT_NUM_KEY);
    }catch(e){}
    window.location.href = "index.html";
  });
}

/* ---------------------------------------------------------------------------
   11. CERTIFICATE PAGE
   --------------------------------------------------------------------------- */
function renderCertificate(){
  const dict = t();
  const app = loadApplication();
  const appNum = safeGet(APP_NUM_KEY);
  const certNum = safeGet(CERT_NUM_KEY);

  const main = document.getElementById("certMain");
  const empty = document.getElementById("certEmpty");
  if (!app || !appNum){
    if (main) main.style.display = "none";
    if (empty) empty.style.display = "block";
    return;
  }
  if (main) main.style.display = "";
  if (empty) empty.style.display = "none";

  const lang = getLang();
  const today = formatDate(new Date().toISOString().split("T")[0], lang);

  const infoGrid = document.getElementById("certInfoGrid");
  const info = [
    [dict.cert.iAppNum, appNum],
    [dict.cert.iCertNum, certNum],
    [dict.cert.iIssueDate, today],
    [dict.cert.iApprovedDate, formatDate(app.date, lang)],
    [dict.cert.iDateStyle, labelForAnswer("mood", app.mood, dict)],
    [dict.cert.iExcitement, labelForAnswer("excitement", app.excitement, dict)],
    [dict.cert.iPayment, labelForAnswer("payment", app.payment, dict)],
    [dict.cert.iPunctuality, labelForAnswer("punctuality", app.punctuality, dict)],
    [dict.cert.iFood, labelForAnswer("foodDecision", app.foodDecision, dict)],
    [dict.cert.iRave, app.raveHandles || dict.cert.notProvided]
  ];
  if (infoGrid){
    infoGrid.innerHTML = info.map(([k,v]) => `
      <div class="cert-info-item"><dt>${k}</dt><dd>${escapeHtml(String(v))}</dd></div>
    `).join("");
  }
}

function drawCertificateToCanvas(){
  return new Promise((resolve) => {
    const dict = t();
    const app = loadApplication();
    const appNum = safeGet(APP_NUM_KEY);
    const certNum = safeGet(CERT_NUM_KEY);
    const lang = getLang();
    const SIZE = 1200;
    const canvas = document.createElement("canvas");
    canvas.width = SIZE; canvas.height = SIZE;
    const ctx = canvas.getContext("2d");

    // background
    const bg = ctx.createLinearGradient(0,0,SIZE,SIZE);
    bg.addColorStop(0, "#F6EFDE");
    bg.addColorStop(0.55, "#F1E7D2");
    bg.addColorStop(1, "#EFE3CB");
    ctx.fillStyle = bg;
    ctx.fillRect(0,0,SIZE,SIZE);

    // borders
    ctx.strokeStyle = "#8f6b2a";
    ctx.lineWidth = 3;
    ctx.strokeRect(20,20,SIZE-40,SIZE-40);
    ctx.strokeStyle = "rgba(143,107,42,0.45)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(34,34,SIZE-68,SIZE-68);

    // watermark
    ctx.save();
    ctx.translate(SIZE/2, SIZE/2);
    ctx.rotate(-8 * Math.PI/180);
    ctx.font = "800 340px 'Playfair Display', serif";
    ctx.fillStyle = "rgba(143,107,42,0.06)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("DP", 0, 0);
    ctx.restore();

    ctx.textAlign = "center";
    ctx.fillStyle = "#241a10";

    let y = 92;
    // emblem
    ctx.beginPath();
    ctx.arc(SIZE/2, y, 26, 0, Math.PI*2);
    ctx.strokeStyle = "#8f6b2a"; ctx.lineWidth = 2; ctx.stroke();
    ctx.font = "800 20px 'Playfair Display', serif";
    ctx.fillStyle = "#8f6b2a";
    ctx.fillText("DP", SIZE/2, y+7);

    y += 54;
    ctx.font = "700 30px 'Playfair Display', serif";
    ctx.fillStyle = "#241a10";
    ctx.fillText(dict.cert.eyebrow, SIZE/2, y);

    y += 26;
    ctx.font = "700 13px Inter, sans-serif";
    ctx.fillStyle = "#6b4f22";
    ctx.fillText(dict.cert.subbrand, SIZE/2, y);

    y += 40;
    ctx.font = "800 48px 'Playfair Display', serif";
    ctx.fillStyle = "#3a1a20";
    ctx.fillText(dict.cert.title, SIZE/2, y);

    y += 26;
    ctx.font = "700 14px Inter, sans-serif";
    ctx.fillStyle = "#8f6b2a";
    ctx.fillText(dict.cert.subtitle, SIZE/2, y);

    y += 46;
    const photoR = 78;
    const photoY = y + photoR;

    const finishRest = (photoImg) => {
      if (photoImg){
        ctx.save();
        ctx.beginPath();
        ctx.arc(SIZE/2, photoY, photoR, 0, Math.PI*2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(photoImg, SIZE/2-photoR, photoY-photoR, photoR*2, photoR*2);
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(SIZE/2, photoY, photoR, 0, Math.PI*2);
      ctx.lineWidth = 5; ctx.strokeStyle = "#8f6b2a"; ctx.stroke();

      let yy = photoY + photoR + 34;
      ctx.font = "700 22px Inter, sans-serif";
      ctx.fillStyle = "#3a1a20";
      ctx.fillText(dict.profile.name, SIZE/2, yy);
      yy += 22;
      ctx.font = "600 14px Inter, sans-serif";
      ctx.fillStyle = "#6b4f22";
      ctx.fillText(dict.cert.photoRole, SIZE/2, yy);

      yy += 46;
      ctx.font = "400 17px Inter, sans-serif";
      ctx.fillStyle = "#3a2a18";
      yy = wrapText(ctx, dict.cert.body1, SIZE/2, yy, 900, 24);
      yy += 8;
      yy = wrapText(ctx, dict.cert.body2, SIZE/2, yy, 900, 24);

      yy += 20;
      ctx.font = "italic 600 26px 'Playfair Display', serif";
      ctx.fillStyle = "#5c1e2e";
      ctx.fillText(dict.cert.recipient, SIZE/2, yy);

      yy += 34;
      ctx.strokeStyle = "rgba(143,107,42,0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(70, yy); ctx.lineTo(SIZE-70, yy); ctx.stroke();
      yy += 34;

      const info = [
        [dict.cert.iAppNum, appNum], [dict.cert.iCertNum, certNum],
        [dict.cert.iIssueDate, formatDate(new Date().toISOString().split("T")[0], lang)],
        [dict.cert.iApprovedDate, formatDate(app.date, lang)],
        [dict.cert.iDateStyle, labelForAnswer("mood", app.mood, dict)],
        [dict.cert.iExcitement, labelForAnswer("excitement", app.excitement, dict)],
        [dict.cert.iPayment, labelForAnswer("payment", app.payment, dict)],
        [dict.cert.iPunctuality, labelForAnswer("punctuality", app.punctuality, dict)],
        [dict.cert.iFood, labelForAnswer("foodDecision", app.foodDecision, dict)],
        [dict.cert.iRave, app.raveHandles || dict.cert.notProvided]
      ];
      const colW = (SIZE - 140) / 2;
      ctx.textAlign = "left";
      info.forEach((pair, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = 70 + col * colW;
        const rowY = yy + row * 62;
        ctx.font = "700 12px Inter, sans-serif";
        ctx.fillStyle = "#8f6b2a";
        ctx.fillText(String(pair[0]).toUpperCase(), x, rowY);
        ctx.font = "600 16px Inter, sans-serif";
        ctx.fillStyle = "#241a10";
        ctx.fillText(String(pair[1]), x, rowY + 22);
      });

      const footerY = SIZE - 130;
      ctx.strokeStyle = "rgba(143,107,42,0.35)";
      ctx.beginPath(); ctx.moveTo(70, footerY); ctx.lineTo(SIZE-70, footerY); ctx.stroke();

      ctx.textAlign = "left";
      ctx.font = "italic 46px 'Segoe Script','Brush Script MT',cursive";
      ctx.fillStyle = "#241a10";
      ctx.fillText("Darling Primate", 70, footerY + 62);
      ctx.strokeStyle = "#8f6b2a"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(70, footerY + 76); ctx.lineTo(300, footerY + 76); ctx.stroke();
      ctx.font = "700 13px Inter, sans-serif";
      ctx.fillStyle = "#6b4f22";
      ctx.fillText(dict.cert.gentleman.toUpperCase(), 70, footerY + 96);
      ctx.font = "600 11px Inter, sans-serif";
      ctx.fillStyle = "#8f6b2a";
      ctx.fillText(dict.cert.authorizedBy, 70, footerY + 112);

      // seal
      const sealX = SIZE - 160, sealY = footerY + 55, sealR = 62;
      const sealGrad = ctx.createRadialGradient(sealX-15,sealY-18,5,sealX,sealY,sealR);
      sealGrad.addColorStop(0, "#f0d093");
      sealGrad.addColorStop(0.7, "#b9862f");
      sealGrad.addColorStop(1, "#8f6b2a");
      ctx.beginPath(); ctx.arc(sealX, sealY, sealR, 0, Math.PI*2);
      ctx.fillStyle = sealGrad; ctx.fill();
      ctx.beginPath(); ctx.arc(sealX, sealY, sealR-6, 0, Math.PI*2);
      ctx.setLineDash([2,4]); ctx.strokeStyle = "rgba(255,255,255,0.5)"; ctx.lineWidth = 1; ctx.stroke();
      ctx.setLineDash([]);
      ctx.textAlign = "center";
      ctx.font = "800 22px 'Playfair Display', serif";
      ctx.fillStyle = "#3a1a05";
      ctx.fillText("DP ♥", sealX, sealY+8);

      ctx.font = "700 11px Inter, sans-serif";
      ctx.fillStyle = "#6b4f22";
      ctx.fillText(dict.cert.issuedBy + " — " + dict.cert.committee, SIZE/2, SIZE - 40);

      resolve(canvas);
    };

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => finishRest(img);
    img.onerror = () => finishRest(null);
    img.src = "assets/primate.jpg";
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight){
  const words = text.split(" ");
  let line = "";
  let curY = y;
  for (let n = 0; n < words.length; n++){
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0){
      ctx.fillText(line, x, curY);
      line = words[n] + " ";
      curY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, curY);
  return curY + lineHeight;
}

async function downloadCertificate(){
  const btn = document.getElementById("downloadBtn");
  if (btn) btn.disabled = true;
  try{
    const canvas = await drawCertificateToCanvas();
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    const certNum = safeGet(CERT_NUM_KEY) || "certificate";
    a.href = url;
    a.download = `darling-primate-${certNum}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }catch(e){
    console.error(e);
  }finally{
    if (btn) btn.disabled = false;
  }
}

function initCertificatePage(){
  renderCertificate();
  document.addEventListener("dp:languageApplied", renderCertificate);
  document.getElementById("downloadBtn")?.addEventListener("click", downloadCertificate);
  document.getElementById("startOverBtnCert")?.addEventListener("click", () => {
    try{
      localStorage.removeItem(APP_KEY);
      localStorage.removeItem(APP_NUM_KEY);
      localStorage.removeItem(CERT_NUM_KEY);
    }catch(e){}
    window.location.href = "index.html";
  });
}

/* ---------------------------------------------------------------------------
   12. INITIALIZE
   --------------------------------------------------------------------------- */
function initialize(){
  loadLanguage();
  initLanguageSelector();
  document.addEventListener("dp:languageApplied", () => {
    if (document.getElementById("stepContainer") && document.body.dataset.page === "application"){
      renderStep();
    }
  });

  const page = document.body.dataset.page;
  if (page === "index") initIndexPage();
  if (page === "application") initApplicationPage();
  if (page === "confirmation") initConfirmationPage();
  if (page === "certificate") initCertificatePage();

  if (page === "index" || page === "application" || page === "confirmation"){
    initializeMainMusic();
  } else if (page === "certificate"){
    initializeCertificateMusic();
  }
}

document.addEventListener("DOMContentLoaded", initialize);
