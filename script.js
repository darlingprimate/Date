/* ============================================
   DARLING PRIMATE — SCRIPT.JS
   ============================================ */

const PRIMATE_IMAGE = "assets/primate.jpg";

/* ============ TRANSLATIONS ============ */

const translations = {
  en: {
    brandName: "Darling Primate",
    brandNameCaps: "DARLING PRIMATE",
    chooseLanguage: "Choose your language",
    badge: "PRIVATE • ROMANTIC • OFFICIAL",
    float1: "✨ good vibes only",
    float2: "🍓 one date, please?",
    float3: "💌 highly confidential",
    float4: "🐒 gentleman awaiting response",
    float5: "❤️ application pending",
    heroTitlePre: "Will you go on a",
    heroTitleHighlight: "date",
    heroTitlePost: "with me?",
    heroDesc: "A tiny application for a very important decision. No pressure, just good food, better company, and maybe a little romance.",
    heroCaption: "Zero commitment. Maximum vibes. Probably.",
    yesLabel: "YES",
    noLabel: "NO",
    surpriseMe: "Surprise me ✨",
    rejectionAttempts: "Rejection attempts:",
    malePrimate: "MALE PRIMATE",
    acceptingApps: "Currently accepting applications for one extremely important date.",
    factStatusLabel: "Relationship status", factStatusValue: "Waiting for her answer",
    factAvailLabel: "Availability", factAvailValue: "Suspiciously available",
    factRomanceLabel: "Romance level", factRomanceValue: "Highly classified",
    factExpLabel: "Date experience", factExpValue: "Under review",
    factGentLabel: "Gentleman status", factGentValue: "Confirmed",
    step1Eyebrow: "First things first",
    step1Question: "Would you like to go on a date?",
    step1OptAbsolutely: "Absolutely", step1OptAbsolutelySub: "I was hoping you would say that.",
    step1OptMaybe: "Maybe...", step1OptMaybeSub: "Convince me with good food.",
    step1OptNo: "No", step1OptNoSub: "My heart is currently unavailable.",
    step2Eyebrow: "Pick a day",
    step2Question: "When should our little adventure happen?",
    step2DateLabel: "Choose a date",
    step3Eyebrow: "Choose the mood",
    step3Question: "What sounds like the perfect date?",
    step3OptDinner: "Romantic dinner", step3OptDinnerSub: "Good food, soft lights, long conversations.",
    step3OptWalk: "Coffee & a walk", step3OptWalkSub: "Simple, calm, and a little cute.",
    step3OptSpontaneous: "Something spontaneous", step3OptSpontaneousSub: "No plan. Just follow the feeling.",
    step3OptMovie: "Movie night", step3OptMovieSub: "Snacks, blankets, and zero interruptions.",
    step4Eyebrow: "Important question",
    step4Question: "How excited are you?",
    step4Opt100Sub: "I am already choosing an outfit.",
    step4Opt85Sub: "Very excited. Trying to act normal.",
    step4Opt70Sub: "Quietly excited.",
    step4Opt50Sub: "Let's see where this goes.",
    step5Eyebrow: "One last thing",
    step5Question: "What would make this date perfect?",
    step5NoteLabel: "Tell me more",
    step5NotePlaceholder: "Tell me what would make it special...",
    raveLabel: "Rave Handles (optional)",
    ravePlaceholder: "Instagram, Rave, Discord, etc.",
    stepErrorMsg: "Please choose an answer first.",
    backLabel: "Back",
    continueLabel: "Continue",
    submitLabel: "Submit ♥",
    applicationReceived: "APPLICATION RECEIVED",
    officiallyDate: "It is officially a date.",
    confirmDesc: "Your answers have been carefully reviewed by the very serious Darling Primate committee.",
    confirmDesc2: "The gentleman is pleased with your decision.",
    romanceProb: "Romance probability", suspiciouslyHigh: "Suspiciously high",
    dpStatus: "Darling Primate status", extremelyHappy: "Extremely happy",
    committeeStatus: "Committee status", veryHardSerious: "Very serious",
    viewCertificate: "View Certificate",
    startOver: "Start over ♥",
    romanticCertificate: "ROMANTIC CERTIFICATE",
    officiallyCertified: "OFFICIALLY CERTIFIED",
    maleCandidate: "Male Romantic Candidate",
    certifiedDateLabel: "Certified Date ♥",
    certifiedDate: "Certified Date",
    certDesc: "This document confirms that the two parties have reached the highly scientific conclusion that a date is an excellent idea.",
    theGentleman: "The Gentleman",
    issuedByLabel: "Issued by Darling Primate",
    committeeLabel: "The Extremely Serious Committee",
    downloadCertificate: "Download Certificate",
    preparingCertificate: "Preparing your certificate...",
    certificateDownloaded: "Certificate downloaded. ♥",
    certificateDownloadFailed: "Download failed. Please try again.",
    finalReminder: "Darling Primate would like to remind you that YES is available. ♥",
    excellentDecision: "Excellent decision. ♥",
    detailAnswer: "Answer", detailDate: "Date", detailMood: "Date style",
    detailExcitement: "Excitement", detailNote: "Perfect date note", detailRave: "Rave Handles",
    notProvided: "Not provided",
    appNumberLabel: "Application No.",
    certNumberLabel: "Certificate Number",
    appNumberCertLabel: "Application Number",
    issueDateLabel: "Issue Date",
    selectedDateLabel: "Selected Date",
    dateStyleLabel: "Date Style",
    excitementLabel: "Excitement",
    raveHandlesLabel: "Rave Handles",
    surpriseNote: "Surprise me. I trust the vibes. ♥",
    noMessages: [
      "Nice try 😌", "Wrong button.", "Almost!", "The universe disagrees.",
      "The gentleman respectfully disagrees.", "Darling Primate has requested another chance.",
      "The rejection department is currently closed.", "Your rejection request has been denied.",
      "The committee has rejected your rejection.", "The No button has left the chat.",
      "The No button has resigned.", "Darling Primate's lawyer has entered the chat.",
      "Love wins. ♥", "Your rejection has been rejected.", "System error: romance detected.",
      "404: Rejection not found.", "Please try YES instead."
    ],
    surpriseToasts: [
      "The universe says: go on the date ✨",
      "Darling Primate approves. 🐒♥",
      "Scientific evidence suggests: date.",
      "The gentleman has received excellent news.",
      "Maximum vibes detected."
    ]
  },

  bn: {
    brandName: "ডার্লিং প্রাইমেট",
    brandNameCaps: "ডার্লিং প্রাইমেট",
    chooseLanguage: "আপনার ভাষা বেছে নিন",
    badge: "ব্যক্তিগত • রোমান্টিক • অফিসিয়াল",
    float1: "✨ শুধু ভালো ভাইব",
    float2: "🍓 একটা ডেট হবে নাকি?",
    float3: "💌 অত্যন্ত গোপনীয়",
    float4: "🐒 ভদ্রলোক উত্তরের অপেক্ষায়",
    float5: "❤️ আবেদন বিবেচনাধীন",
    heroTitlePre: "আমার সাথে কি একটা",
    heroTitleHighlight: "ডেটে",
    heroTitlePost: "যাবে?",
    heroDesc: "একটা খুবই গুরুত্বপূর্ণ সিদ্ধান্তের জন্য ছোট্ট আবেদন। কোনো চাপ নেই, শুধু ভালো খাবার, চমৎকার সঙ্গ, আর হয়তো একটু রোমান্স।",
    heroCaption: "কোনো প্রতিশ্রুতি নেই। শুধু ভাইব। সম্ভবত।",
    yesLabel: "হ্যাঁ",
    noLabel: "না",
    surpriseMe: "চমকে দাও ✨",
    rejectionAttempts: "প্রত্যাখ্যানের চেষ্টা:",
    malePrimate: "পুরুষ প্রাইমেট",
    acceptingApps: "বর্তমানে একটি অত্যন্ত গুরুত্বপূর্ণ ডেটের জন্য আবেদন গ্রহণ করা হচ্ছে।",
    factStatusLabel: "সম্পর্কের অবস্থা", factStatusValue: "তার উত্তরের অপেক্ষায়",
    factAvailLabel: "উপলব্ধতা", factAvailValue: "সন্দেহজনকভাবে উপলব্ধ",
    factRomanceLabel: "রোমান্সের মাত্রা", factRomanceValue: "অত্যন্ত গোপনীয়",
    factExpLabel: "ডেটের অভিজ্ঞতা", factExpValue: "পর্যালোচনাধীন",
    factGentLabel: "ভদ্রলোকের মর্যাদা", factGentValue: "নিশ্চিত",
    step1Eyebrow: "সবার আগে",
    step1Question: "তুমি কি একটা ডেটে যেতে চাও?",
    step1OptAbsolutely: "অবশ্যই", step1OptAbsolutelySub: "আমি এটাই আশা করছিলাম।",
    step1OptMaybe: "হয়তো...", step1OptMaybeSub: "ভালো খাবার দিয়ে আমাকে রাজি করাও।",
    step1OptNo: "না", step1OptNoSub: "আমার হৃদয় এখন অনুপলব্ধ।",
    step2Eyebrow: "একটা দিন বেছে নাও",
    step2Question: "আমাদের ছোট্ট অ্যাডভেঞ্চার কবে হবে?",
    step2DateLabel: "একটি তারিখ বেছে নিন",
    step3Eyebrow: "মুড বেছে নাও",
    step3Question: "কেমন ডেট তোমার কাছে নিখুঁত মনে হয়?",
    step3OptDinner: "রোমান্টিক ডিনার", step3OptDinnerSub: "ভালো খাবার, নরম আলো, লম্বা আড্ডা।",
    step3OptWalk: "কফি ও হাঁটা", step3OptWalkSub: "সহজ, শান্ত, আর একটু মিষ্টি।",
    step3OptSpontaneous: "হঠাৎ কিছু একটা", step3OptSpontaneousSub: "কোনো পরিকল্পনা নেই। শুধু অনুভূতি অনুসরণ করো।",
    step3OptMovie: "মুভি নাইট", step3OptMovieSub: "স্ন্যাকস, কম্বল, আর কোনো বিরক্তি নেই।",
    step4Eyebrow: "গুরুত্বপূর্ণ প্রশ্ন",
    step4Question: "তুমি কতটা উত্তেজিত?",
    step4Opt100Sub: "আমি এখনই পোশাক বেছে নিচ্ছি।",
    step4Opt85Sub: "খুব উত্তেজিত। স্বাভাবিক থাকার চেষ্টা করছি।",
    step4Opt70Sub: "নীরবে উত্তেজিত।",
    step4Opt50Sub: "দেখা যাক কোথায় গড়ায়।",
    step5Eyebrow: "শেষ একটা কথা",
    step5Question: "কী দিয়ে এই ডেটটা নিখুঁত হবে?",
    step5NoteLabel: "আরও কিছু বলো",
    step5NotePlaceholder: "কী এটাকে বিশেষ করে তুলবে বলো...",
    raveLabel: "Rave হ্যান্ডেল (ঐচ্ছিক)",
    ravePlaceholder: "ইনস্টাগ্রাম, Rave, ডিসকর্ড ইত্যাদি।",
    stepErrorMsg: "অনুগ্রহ করে প্রথমে একটি উত্তর বেছে নিন।",
    backLabel: "পেছনে",
    continueLabel: "চালিয়ে যাও",
    submitLabel: "জমা দাও ♥",
    applicationReceived: "আবেদন গৃহীত হয়েছে",
    officiallyDate: "এটা এখন অফিসিয়ালি একটা ডেট।",
    confirmDesc: "তোমার উত্তরগুলো ডার্লিং প্রাইমেট কমিটি অত্যন্ত সতর্কতার সাথে পর্যালোচনা করেছে।",
    confirmDesc2: "ভদ্রলোক তোমার সিদ্ধান্তে সন্তুষ্ট।",
    romanceProb: "রোমান্সের সম্ভাবনা", suspiciouslyHigh: "সন্দেহজনকভাবে বেশি",
    dpStatus: "ডার্লিং প্রাইমেটের অবস্থা", extremelyHappy: "অত্যন্ত খুশি",
    committeeStatus: "কমিটির অবস্থা", veryHardSerious: "খুবই গম্ভীর",
    viewCertificate: "সার্টিফিকেট দেখো",
    startOver: "আবার শুরু করো ♥",
    romanticCertificate: "রোমান্টিক সার্টিফিকেট",
    officiallyCertified: "অফিসিয়ালি সার্টিফাইড",
    maleCandidate: "পুরুষ রোমান্টিক প্রার্থী",
    certifiedDateLabel: "সার্টিফাইড ডেট ♥",
    certifiedDate: "সার্টিফাইড ডেট",
    certDesc: "এই দলিলটি নিশ্চিত করে যে উভয় পক্ষ অত্যন্ত বৈজ্ঞানিক সিদ্ধান্তে পৌঁছেছে যে একটি ডেট একটি চমৎকার ধারণা।",
    theGentleman: "ভদ্রলোক",
    issuedByLabel: "ডার্লিং প্রাইমেট কর্তৃক জারি",
    committeeLabel: "অত্যন্ত গম্ভীর কমিটি",
    downloadCertificate: "সার্টিফিকেট ডাউনলোড করুন",
    preparingCertificate: "তোমার সার্টিফিকেট তৈরি হচ্ছে...",
    certificateDownloaded: "সার্টিফিকেট ডাউনলোড হয়েছে। ♥",
    certificateDownloadFailed: "ডাউনলোড ব্যর্থ হয়েছে। আবার চেষ্টা করুন।",
    finalReminder: "ডার্লিং প্রাইমেট মনে করিয়ে দিতে চায় যে হ্যাঁ এখনও উপলব্ধ। ♥",
    excellentDecision: "চমৎকার সিদ্ধান্ত। ♥",
    detailAnswer: "উত্তর", detailDate: "তারিখ", detailMood: "ডেটের ধরন",
    detailExcitement: "উত্তেজনা", detailNote: "নিখুঁত ডেটের নোট", detailRave: "Rave হ্যান্ডেল",
    notProvided: "প্রদান করা হয়নি",
    appNumberLabel: "আবেদন নং", certNumberLabel: "সার্টিফিকেট নম্বর",
    appNumberCertLabel: "আবেদন নম্বর", issueDateLabel: "ইস্যু তারিখ",
    selectedDateLabel: "নির্বাচিত তারিখ", dateStyleLabel: "ডেটের ধরন",
    excitementLabel: "উত্তেজনা", raveHandlesLabel: "Rave হ্যান্ডেল",
    surpriseNote: "চমকে দাও, আমি ভাইবে বিশ্বাস করি। ♥",
    noMessages: [
      "চেষ্টা ভালো ছিল 😌", "ভুল বাটন।", "প্রায় হয়েই গিয়েছিল!", "মহাবিশ্ব একমত নয়।",
      "ভদ্রলোক বিনীতভাবে দ্বিমত পোষণ করছেন।", "ডার্লিং প্রাইমেট আরেকটা সুযোগ চেয়েছে।",
      "প্রত্যাখ্যান বিভাগ এখন বন্ধ।", "তোমার প্রত্যাখ্যানের অনুরোধ প্রত্যাখ্যাত হয়েছে।",
      "কমিটি তোমার প্রত্যাখ্যানকে প্রত্যাখ্যান করেছে।", "না বাটন চ্যাট ছেড়ে চলে গেছে।",
      "না বাটন পদত্যাগ করেছে।", "ডার্লিং প্রাইমেটের আইনজীবী চ্যাটে এসেছেন।",
      "ভালোবাসার জয়। ♥", "তোমার প্রত্যাখ্যান প্রত্যাখ্যাত হয়েছে।", "সিস্টেম ত্রুটি: রোমান্স শনাক্ত হয়েছে।",
      "৪০৪: প্রত্যাখ্যান পাওয়া যায়নি।", "দয়া করে হ্যাঁ চেষ্টা করো।"
    ],
    surpriseToasts: [
      "মহাবিশ্ব বলছে: ডেটে যাও ✨",
      "ডার্লিং প্রাইমেট অনুমোদন করেছে। 🐒♥",
      "বৈজ্ঞানিক প্রমাণ বলছে: ডেট।",
      "ভদ্রলোক দারুণ খবর পেয়েছেন।",
      "সর্বোচ্চ ভাইব শনাক্ত হয়েছে।"
    ]
  },

  hi: {
    brandName: "डार्लिंग प्राइमेट",
    brandNameCaps: "डार्लिंग प्राइमेट",
    chooseLanguage: "अपनी भाषा चुनें",
    badge: "निजी • रोमांटिक • आधिकारिक",
    float1: "✨ सिर्फ अच्छी वाइब्स",
    float2: "🍓 एक डेट, प्लीज़?",
    float3: "💌 अत्यंत गोपनीय",
    float4: "🐒 सज्जन जवाब का इंतज़ार कर रहे हैं",
    float5: "❤️ आवेदन विचाराधीन",
    heroTitlePre: "क्या तुम मेरे साथ",
    heroTitleHighlight: "डेट",
    heroTitlePost: "पर चलोगी?",
    heroDesc: "एक बहुत ज़रूरी फैसले के लिए एक छोटा सा आवेदन। कोई दबाव नहीं, बस अच्छा खाना, बेहतर साथ, और शायद थोड़ा रोमांस।",
    heroCaption: "कोई वादा नहीं। बस वाइब्स। शायद।",
    yesLabel: "हाँ",
    noLabel: "नहीं",
    surpriseMe: "मुझे चौंका दो ✨",
    rejectionAttempts: "अस्वीकृति के प्रयास:",
    malePrimate: "पुरुष प्राइमेट",
    acceptingApps: "फ़िलहाल एक बेहद ज़रूरी डेट के लिए आवेदन स्वीकार किए जा रहे हैं।",
    factStatusLabel: "रिश्ते की स्थिति", factStatusValue: "उसके जवाब का इंतज़ार",
    factAvailLabel: "उपलब्धता", factAvailValue: "संदिग्ध रूप से उपलब्ध",
    factRomanceLabel: "रोमांस स्तर", factRomanceValue: "अत्यंत गोपनीय",
    factExpLabel: "डेटिंग अनुभव", factExpValue: "समीक्षाधीन",
    factGentLabel: "सज्जन का दर्जा", factGentValue: "पुष्ट",
    step1Eyebrow: "सबसे पहली बात",
    step1Question: "क्या तुम डेट पर जाना चाहोगी?",
    step1OptAbsolutely: "बिल्कुल", step1OptAbsolutelySub: "मुझे यही उम्मीद थी।",
    step1OptMaybe: "शायद...", step1OptMaybeSub: "अच्छे खाने से मुझे मनाओ।",
    step1OptNo: "नहीं", step1OptNoSub: "मेरा दिल फ़िलहाल उपलब्ध नहीं है।",
    step2Eyebrow: "एक दिन चुनो",
    step2Question: "हमारी छोटी सी एडवेंचर कब होगी?",
    step2DateLabel: "एक तारीख चुनें",
    step3Eyebrow: "मूड चुनो",
    step3Question: "तुम्हें कौन सी डेट परफेक्ट लगती है?",
    step3OptDinner: "रोमांटिक डिनर", step3OptDinnerSub: "अच्छा खाना, मद्धम रोशनी, लंबी बातें।",
    step3OptWalk: "कॉफी और सैर", step3OptWalkSub: "सिंपल, शांत, और थोड़ा प्यारा।",
    step3OptSpontaneous: "कुछ अचानक वाला", step3OptSpontaneousSub: "कोई प्लान नहीं। बस एहसास का पीछा करो।",
    step3OptMovie: "मूवी नाइट", step3OptMovieSub: "स्नैक्स, कंबल, और कोई बाधा नहीं।",
    step4Eyebrow: "ज़रूरी सवाल",
    step4Question: "तुम कितनी उत्साहित हो?",
    step4Opt100Sub: "मैं अभी से आउटफिट चुन रही हूँ।",
    step4Opt85Sub: "बहुत उत्साहित। नॉर्मल दिखने की कोशिश कर रही हूँ।",
    step4Opt70Sub: "चुपचाप उत्साहित।",
    step4Opt50Sub: "देखते हैं यह कहाँ जाता है।",
    step5Eyebrow: "एक आखिरी बात",
    step5Question: "इस डेट को परफेक्ट क्या बनाएगा?",
    step5NoteLabel: "और कुछ बताओ",
    step5NotePlaceholder: "बताओ क्या इसे खास बनाएगा...",
    raveLabel: "Rave हैंडल (वैकल्पिक)",
    ravePlaceholder: "इंस्टाग्राम, Rave, डिस्कॉर्ड, वगैरह।",
    stepErrorMsg: "कृपया पहले एक जवाब चुनें।",
    backLabel: "पीछे",
    continueLabel: "आगे बढ़ो",
    submitLabel: "जमा करो ♥",
    applicationReceived: "आवेदन प्राप्त हुआ",
    officiallyDate: "अब यह आधिकारिक रूप से एक डेट है।",
    confirmDesc: "तुम्हारे जवाबों की डार्लिंग प्राइमेट समिति ने बड़ी गंभीरता से समीक्षा की है।",
    confirmDesc2: "सज्जन तुम्हारे फैसले से बहुत खुश हैं।",
    romanceProb: "रोमांस की संभावना", suspiciouslyHigh: "संदिग्ध रूप से अधिक",
    dpStatus: "डार्लिंग प्राइमेट की स्थिति", extremelyHappy: "बेहद खुश",
    committeeStatus: "समिति की स्थिति", veryHardSerious: "बेहद गंभीर",
    viewCertificate: "सर्टिफिकेट देखो",
    startOver: "फिर से शुरू करो ♥",
    romanticCertificate: "रोमांटिक सर्टिफिकेट",
    officiallyCertified: "आधिकारिक रूप से प्रमाणित",
    maleCandidate: "पुरुष रोमांटिक उम्मीदवार",
    certifiedDateLabel: "प्रमाणित डेट ♥",
    certifiedDate: "प्रमाणित डेट",
    certDesc: "यह दस्तावेज़ पुष्टि करता है कि दोनों पक्ष इस अत्यंत वैज्ञानिक निष्कर्ष पर पहुँचे हैं कि डेट एक बेहतरीन विचार है।",
    theGentleman: "सज्जन",
    issuedByLabel: "डार्लिंग प्राइमेट द्वारा जारी",
    committeeLabel: "अत्यंत गंभीर समिति",
    downloadCertificate: "सर्टिफिकेट डाउनलोड करें",
    preparingCertificate: "तुम्हारा सर्टिफिकेट तैयार किया जा रहा है...",
    certificateDownloaded: "सर्टिफिकेट डाउनलोड हो गया। ♥",
    certificateDownloadFailed: "डाउनलोड विफल रहा। कृपया फिर से कोशिश करें।",
    finalReminder: "डार्लिंग प्राइमेट याद दिलाना चाहता है कि हाँ अभी भी उपलब्ध है। ♥",
    excellentDecision: "बेहतरीन फैसला। ♥",
    detailAnswer: "जवाब", detailDate: "तारीख", detailMood: "डेट शैली",
    detailExcitement: "उत्साह", detailNote: "परफेक्ट डेट नोट", detailRave: "Rave हैंडल",
    notProvided: "प्रदान नहीं किया गया",
    appNumberLabel: "आवेदन संख्या", certNumberLabel: "सर्टिफिकेट नंबर",
    appNumberCertLabel: "आवेदन नंबर", issueDateLabel: "जारी करने की तारीख",
    selectedDateLabel: "चुनी गई तारीख", dateStyleLabel: "डेट शैली",
    excitementLabel: "उत्साह", raveHandlesLabel: "Rave हैंडल",
    surpriseNote: "मुझे चौंका दो, मुझे वाइब्स पर भरोसा है। ♥",
    noMessages: [
      "अच्छी कोशिश 😌", "गलत बटन।", "लगभग हो गया था!", "ब्रह्मांड सहमत नहीं है।",
      "सज्जन सम्मानपूर्वक असहमत हैं।", "डार्लिंग प्राइमेट ने एक और मौका माँगा है।",
      "अस्वीकृति विभाग फ़िलहाल बंद है।", "तुम्हारा अस्वीकृति अनुरोध अस्वीकृत कर दिया गया।",
      "समिति ने तुम्हारी अस्वीकृति को अस्वीकृत कर दिया।", "नहीं बटन चैट छोड़ गया है।",
      "नहीं बटन ने इस्तीफ़ा दे दिया है।", "डार्लिंग प्राइमेट का वकील चैट में आ गया है।",
      "प्यार की जीत। ♥", "तुम्हारी अस्वीकृति अस्वीकृत कर दी गई है।", "सिस्टम एरर: रोमांस पाया गया।",
      "404: अस्वीकृति नहीं मिली।", "कृपया हाँ आज़माओ।"
    ],
    surpriseToasts: [
      "ब्रह्मांड कहता है: डेट पर जाओ ✨",
      "डार्लिंग प्राइमेट की मंज़ूरी। 🐒♥",
      "वैज्ञानिक प्रमाण कहते हैं: डेट।",
      "सज्जन को बेहतरीन खबर मिली है।",
      "अधिकतम वाइब्स का पता चला।"
    ]
  },

  ur: {
    brandName: "ڈارلنگ پرائمیٹ",
    brandNameCaps: "ڈارلنگ پرائمیٹ",
    chooseLanguage: "اپنی زبان منتخب کریں",
    badge: "نجی • رومانوی • سرکاری",
    float1: "✨ صرف اچھی وائبز",
    float2: "🍓 ایک ڈیٹ، پلیز؟",
    float3: "💌 انتہائی خفیہ",
    float4: "🐒 صاحب جواب کے منتظر ہیں",
    float5: "❤️ درخواست زیرِ غور",
    heroTitlePre: "کیا تم میرے ساتھ",
    heroTitleHighlight: "ڈیٹ",
    heroTitlePost: "پر چلو گی؟",
    heroDesc: "ایک بہت اہم فیصلے کے لیے ایک چھوٹی سی درخواست۔ کوئی دباؤ نہیں، بس اچھا کھانا، بہتر ساتھ، اور شاید تھوڑا سا رومانس۔",
    heroCaption: "کوئی وعدہ نہیں۔ بس وائبز۔ شاید۔",
    yesLabel: "ہاں",
    noLabel: "نہیں",
    surpriseMe: "مجھے حیران کر دو ✨",
    rejectionAttempts: "مسترد کرنے کی کوششیں:",
    malePrimate: "مرد پرائمیٹ",
    acceptingApps: "فی الحال ایک انتہائی اہم ڈیٹ کے لیے درخواستیں قبول کی جا رہی ہیں۔",
    factStatusLabel: "تعلق کی حیثیت", factStatusValue: "اس کے جواب کا منتظر",
    factAvailLabel: "دستیابی", factAvailValue: "مشکوک طور پر دستیاب",
    factRomanceLabel: "رومانس کی سطح", factRomanceValue: "انتہائی خفیہ",
    factExpLabel: "ڈیٹنگ کا تجربہ", factExpValue: "زیرِ جائزہ",
    factGentLabel: "صاحب کی حیثیت", factGentValue: "تصدیق شدہ",
    step1Eyebrow: "سب سے پہلی بات",
    step1Question: "کیا تم ایک ڈیٹ پر جانا چاہو گی؟",
    step1OptAbsolutely: "بالکل", step1OptAbsolutelySub: "مجھے یہی امید تھی۔",
    step1OptMaybe: "شاید...", step1OptMaybeSub: "اچھے کھانے سے مجھے قائل کرو۔",
    step1OptNo: "نہیں", step1OptNoSub: "میرا دل فی الحال دستیاب نہیں ہے۔",
    step2Eyebrow: "ایک دن چنو",
    step2Question: "ہماری چھوٹی سی ایڈونچر کب ہو؟",
    step2DateLabel: "ایک تاریخ منتخب کریں",
    step3Eyebrow: "موڈ چنو",
    step3Question: "تمہیں کون سی ڈیٹ بہترین لگتی ہے؟",
    step3OptDinner: "رومانوی ڈنر", step3OptDinnerSub: "اچھا کھانا، مدھم روشنی، لمبی باتیں۔",
    step3OptWalk: "کافی اور واک", step3OptWalkSub: "سادہ، پرسکون، اور تھوڑا سا پیارا۔",
    step3OptSpontaneous: "کچھ اچانک والا", step3OptSpontaneousSub: "کوئی منصوبہ نہیں۔ بس احساس کی پیروی کرو۔",
    step3OptMovie: "مووی نائٹ", step3OptMovieSub: "سنیکس، کمبل، اور کوئی رکاوٹ نہیں۔",
    step4Eyebrow: "اہم سوال",
    step4Question: "تم کتنی پرجوش ہو؟",
    step4Opt100Sub: "میں ابھی سے لباس چن رہی ہوں۔",
    step4Opt85Sub: "بہت پرجوش۔ نارمل نظر آنے کی کوشش کر رہی ہوں۔",
    step4Opt70Sub: "خاموشی سے پرجوش۔",
    step4Opt50Sub: "دیکھتے ہیں یہ کہاں جاتا ہے۔",
    step5Eyebrow: "ایک آخری بات",
    step5Question: "اس ڈیٹ کو بہترین کیا بنائے گا؟",
    step5NoteLabel: "مزید بتاؤ",
    step5NotePlaceholder: "بتاؤ اسے خاص کیا بنائے گا...",
    raveLabel: "Rave ہینڈل (اختیاری)",
    ravePlaceholder: "انسٹاگرام، Rave، ڈسکورڈ وغیرہ۔",
    stepErrorMsg: "براہِ کرم پہلے ایک جواب منتخب کریں۔",
    backLabel: "پیچھے",
    continueLabel: "جاری رکھیں",
    submitLabel: "جمع کرو ♥",
    applicationReceived: "درخواست موصول ہو گئی",
    officiallyDate: "یہ اب باضابطہ طور پر ایک ڈیٹ ہے۔",
    confirmDesc: "تمہارے جوابات کا ڈارلنگ پرائمیٹ کمیٹی نے نہایت سنجیدگی سے جائزہ لیا ہے۔",
    confirmDesc2: "صاحب تمہارے فیصلے سے خوش ہیں۔",
    romanceProb: "رومانس کا امکان", suspiciouslyHigh: "مشکوک طور پر زیادہ",
    dpStatus: "ڈارلنگ پرائمیٹ کی حیثیت", extremelyHappy: "انتہائی خوش",
    committeeStatus: "کمیٹی کی حیثیت", veryHardSerious: "بہت سنجیدہ",
    viewCertificate: "سرٹیفکیٹ دیکھیں",
    startOver: "دوبارہ شروع کرو ♥",
    romanticCertificate: "رومانوی سرٹیفکیٹ",
    officiallyCertified: "باضابطہ طور پر تصدیق شدہ",
    maleCandidate: "مرد رومانوی امیدوار",
    certifiedDateLabel: "تصدیق شدہ ڈیٹ ♥",
    certifiedDate: "تصدیق شدہ ڈیٹ",
    certDesc: "یہ دستاویز اس بات کی تصدیق کرتی ہے کہ دونوں فریقین اس انتہائی سائنسی نتیجے پر پہنچے ہیں کہ ڈیٹ ایک بہترین خیال ہے۔",
    theGentleman: "صاحب",
    issuedByLabel: "ڈارلنگ پرائمیٹ کی جانب سے جاری",
    committeeLabel: "انتہائی سنجیدہ کمیٹی",
    downloadCertificate: "سرٹیفکیٹ ڈاؤن لوڈ کریں",
    preparingCertificate: "تمہارا سرٹیفکیٹ تیار کیا جا رہا ہے...",
    certificateDownloaded: "سرٹیفکیٹ ڈاؤن لوڈ ہو گیا۔ ♥",
    certificateDownloadFailed: "ڈاؤن لوڈ ناکام ہو گیا۔ دوبارہ کوشش کریں۔",
    finalReminder: "ڈارلنگ پرائمیٹ یاد دلانا چاہتا ہے کہ ہاں اب بھی دستیاب ہے۔ ♥",
    excellentDecision: "بہترین فیصلہ۔ ♥",
    detailAnswer: "جواب", detailDate: "تاریخ", detailMood: "ڈیٹ کا انداز",
    detailExcitement: "جوش", detailNote: "بہترین ڈیٹ نوٹ", detailRave: "Rave ہینڈل",
    notProvided: "فراہم نہیں کیا گیا",
    appNumberLabel: "درخواست نمبر", certNumberLabel: "سرٹیفکیٹ نمبر",
    appNumberCertLabel: "درخواست نمبر", issueDateLabel: "اجراء کی تاریخ",
    selectedDateLabel: "منتخب تاریخ", dateStyleLabel: "ڈیٹ کا انداز",
    excitementLabel: "جوش", raveHandlesLabel: "Rave ہینڈل",
    surpriseNote: "مجھے حیران کرو، مجھے وائبز پر بھروسہ ہے۔ ♥",
    noMessages: [
      "اچھی کوشش 😌", "غلط بٹن۔", "تقریباً ہو گیا تھا!", "کائنات متفق نہیں ہے۔",
      "صاحب باادب طور پر اختلاف کرتے ہیں۔", "ڈارلنگ پرائمیٹ نے ایک اور موقع مانگا ہے۔",
      "مسترد کرنے کا شعبہ فی الحال بند ہے۔", "تمہاری مسترد کرنے کی درخواست مسترد کر دی گئی۔",
      "کمیٹی نے تمہاری مستردی کو مسترد کر دیا۔", "نہیں بٹن چیٹ چھوڑ گیا ہے۔",
      "نہیں بٹن نے استعفیٰ دے دیا ہے۔", "ڈارلنگ پرائمیٹ کا وکیل چیٹ میں آ گیا ہے۔",
      "محبت کی جیت۔ ♥", "تمہاری مستردی مسترد کر دی گئی ہے۔", "سسٹم ایرر: رومانس کا پتہ چلا۔",
      "404: مستردی نہیں ملی۔", "براہِ کرم ہاں آزماؤ۔"
    ],
    surpriseToasts: [
      "کائنات کہتی ہے: ڈیٹ پر جاؤ ✨",
      "ڈارلنگ پرائمیٹ کی منظوری۔ 🐒♥",
      "سائنسی ثبوت کہتے ہیں: ڈیٹ۔",
      "صاحب کو بہترین خبر ملی ہے۔",
      "زیادہ سے زیادہ وائبز کا پتہ چلا۔"
    ]
  },

  ar: {
    brandName: "دارلينغ برايميت",
    brandNameCaps: "دارلينغ برايميت",
    chooseLanguage: "اختر لغتك",
    badge: "خاص • رومانسي • رسمي",
    float1: "✨ طاقة إيجابية فقط",
    float2: "🍓 موعد واحد، من فضلك؟",
    float3: "💌 سري للغاية",
    float4: "🐒 السيد بانتظار الرد",
    float5: "❤️ الطلب قيد المراجعة",
    heroTitlePre: "هل توافقين على",
    heroTitleHighlight: "موعد",
    heroTitlePost: "معي؟",
    heroDesc: "طلب صغير لقرار بالغ الأهمية. لا ضغط، فقط طعام جيد، رفقة أفضل، وربما القليل من الرومانسية.",
    heroCaption: "بلا التزام. أقصى طاقة إيجابية. ربما.",
    yesLabel: "نعم",
    noLabel: "لا",
    surpriseMe: "فاجئيني ✨",
    rejectionAttempts: "محاولات الرفض:",
    malePrimate: "رئيسيات ذكر",
    acceptingApps: "يتم حاليًا استقبال الطلبات لموعد واحد بالغ الأهمية.",
    factStatusLabel: "الحالة العاطفية", factStatusValue: "بانتظار ردها",
    factAvailLabel: "التوفر", factAvailValue: "متاح بشكل مثير للريبة",
    factRomanceLabel: "مستوى الرومانسية", factRomanceValue: "سري للغاية",
    factExpLabel: "خبرة المواعدة", factExpValue: "قيد المراجعة",
    factGentLabel: "صفة السيد", factGentValue: "مؤكدة",
    step1Eyebrow: "أول الأمور",
    step1Question: "هل تودين الذهاب في موعد؟",
    step1OptAbsolutely: "بالتأكيد", step1OptAbsolutelySub: "كنت آمل أن تقولي ذلك.",
    step1OptMaybe: "ربما...", step1OptMaybeSub: "أقنعيني بطعام لذيذ.",
    step1OptNo: "لا", step1OptNoSub: "قلبي غير متاح حاليًا.",
    step2Eyebrow: "اختاري يومًا",
    step2Question: "متى ستكون مغامرتنا الصغيرة؟",
    step2DateLabel: "اختاري تاريخًا",
    step3Eyebrow: "اختاري الأجواء",
    step3Question: "ما الذي يبدو لك موعدًا مثاليًا؟",
    step3OptDinner: "عشاء رومانسي", step3OptDinnerSub: "طعام جيد، إضاءة هادئة، أحاديث طويلة.",
    step3OptWalk: "قهوة ونزهة", step3OptWalkSub: "بسيط، هادئ، ولطيف قليلاً.",
    step3OptSpontaneous: "شيء عفوي", step3OptSpontaneousSub: "بلا خطة. فقط اتبعي الشعور.",
    step3OptMovie: "سهرة أفلام", step3OptMovieSub: "وجبات خفيفة، بطانيات، وبلا مقاطعات.",
    step4Eyebrow: "سؤال مهم",
    step4Question: "ما مدى حماسك؟",
    step4Opt100Sub: "أنا بالفعل أختار ملابسي.",
    step4Opt85Sub: "متحمسة جدًا. أحاول التصرف بشكل طبيعي.",
    step4Opt70Sub: "متحمسة بهدوء.",
    step4Opt50Sub: "لنرَ إلى أين سيصل هذا.",
    step5Eyebrow: "أمر أخير",
    step5Question: "ما الذي سيجعل هذا الموعد مثاليًا؟",
    step5NoteLabel: "أخبريني المزيد",
    step5NotePlaceholder: "أخبريني بما سيجعله مميزًا...",
    raveLabel: "معرّفات Rave (اختياري)",
    ravePlaceholder: "إنستغرام، Rave، ديسكورد، إلخ.",
    stepErrorMsg: "الرجاء اختيار إجابة أولاً.",
    backLabel: "رجوع",
    continueLabel: "متابعة",
    submitLabel: "إرسال ♥",
    applicationReceived: "تم استلام الطلب",
    officiallyDate: "أصبح الآن موعدًا رسميًا.",
    confirmDesc: "تمت مراجعة إجاباتك بعناية فائقة من قبل لجنة دارلينغ برايميت الجادة جدًا.",
    confirmDesc2: "السيد سعيد بقرارك.",
    romanceProb: "احتمال الرومانسية", suspiciouslyHigh: "مرتفع بشكل مثير للريبة",
    dpStatus: "حالة دارلينغ برايميت", extremelyHappy: "سعيد للغاية",
    committeeStatus: "حالة اللجنة", veryHardSerious: "جادة جدًا",
    viewCertificate: "عرض الشهادة",
    startOver: "البدء من جديد ♥",
    romanticCertificate: "شهادة رومانسية",
    officiallyCertified: "معتمدة رسميًا",
    maleCandidate: "مرشح رومانسي ذكر",
    certifiedDateLabel: "موعد معتمد ♥",
    certifiedDate: "موعد معتمد",
    certDesc: "تؤكد هذه الوثيقة أن الطرفين توصلا إلى استنتاج علمي بحت مفاده أن الموعد فكرة ممتازة.",
    theGentleman: "السيد",
    issuedByLabel: "صادرة عن دارلينغ برايميت",
    committeeLabel: "اللجنة الجادة للغاية",
    downloadCertificate: "تنزيل الشهادة",
    preparingCertificate: "جارٍ تجهيز شهادتك...",
    certificateDownloaded: "تم تنزيل الشهادة. ♥",
    certificateDownloadFailed: "فشل التنزيل. يرجى المحاولة مرة أخرى.",
    finalReminder: "تود دارلينغ برايميت تذكيرك بأن خيار نعم لا يزال متاحًا. ♥",
    excellentDecision: "قرار ممتاز. ♥",
    detailAnswer: "الإجابة", detailDate: "التاريخ", detailMood: "نمط الموعد",
    detailExcitement: "الحماس", detailNote: "ملاحظة الموعد المثالي", detailRave: "معرّفات Rave",
    notProvided: "غير مُقدَّم",
    appNumberLabel: "رقم الطلب", certNumberLabel: "رقم الشهادة",
    appNumberCertLabel: "رقم الطلب", issueDateLabel: "تاريخ الإصدار",
    selectedDateLabel: "التاريخ المختار", dateStyleLabel: "نمط الموعد",
    excitementLabel: "الحماس", raveHandlesLabel: "معرّفات Rave",
    surpriseNote: "فاجئيني، أنا أثق بالأجواء. ♥",
    noMessages: [
      "محاولة جيدة 😌", "زر خاطئ.", "كدت تفعلينها!", "الكون لا يوافق.",
      "السيد يختلف باحترام.", "طلبت دارلينغ برايميت فرصة أخرى.",
      "قسم الرفض مغلق حاليًا.", "تم رفض طلب الرفض الخاص بك.",
      "رفضت اللجنة رفضك.", "غادر زر لا المحادثة.",
      "استقال زر لا.", "دخل محامي دارلينغ برايميت المحادثة.",
      "الحب ينتصر. ♥", "تم رفض رفضك.", "خطأ في النظام: تم رصد رومانسية.",
      "404: لم يتم العثور على الرفض.", "الرجاء تجربة نعم."
    ],
    surpriseToasts: [
      "يقول الكون: اذهبي إلى الموعد ✨",
      "دارلينغ برايميت يوافق. 🐒♥",
      "الأدلة العلمية تشير إلى: موعد.",
      "تلقى السيد أخبارًا ممتازة.",
      "تم رصد أقصى طاقة إيجابية."
    ]
  },

  tr: {
    brandName: "Darling Primate",
    brandNameCaps: "DARLING PRIMATE",
    chooseLanguage: "Dilinizi seçin",
    badge: "ÖZEL • ROMANTİK • RESMİ",
    float1: "✨ sadece iyi enerji",
    float2: "🍓 bir randevu, olur mu?",
    float3: "💌 son derece gizli",
    float4: "🐒 beyefendi cevabı bekliyor",
    float5: "❤️ başvuru inceleniyor",
    heroTitlePre: "Benimle bir",
    heroTitleHighlight: "randevuya",
    heroTitlePost: "çıkar mısın?",
    heroDesc: "Çok önemli bir karar için küçük bir başvuru. Baskı yok, sadece güzel yemek, daha iyi bir sohbet ve belki biraz romantizm.",
    heroCaption: "Sıfır taahhüt. Maksimum enerji. Muhtemelen.",
    yesLabel: "EVET",
    noLabel: "HAYIR",
    surpriseMe: "Beni şaşırt ✨",
    rejectionAttempts: "Reddetme denemeleri:",
    malePrimate: "ERKEK PRİMAT",
    acceptingApps: "Şu anda son derece önemli bir randevu için başvurular kabul ediliyor.",
    factStatusLabel: "İlişki durumu", factStatusValue: "Cevabını bekliyor",
    factAvailLabel: "Müsaitlik", factAvailValue: "Şüpheli derecede müsait",
    factRomanceLabel: "Romantizm seviyesi", factRomanceValue: "Son derece gizli",
    factExpLabel: "Randevu deneyimi", factExpValue: "İnceleniyor",
    factGentLabel: "Beyefendi statüsü", factGentValue: "Onaylandı",
    step1Eyebrow: "Önce en önemlisi",
    step1Question: "Bir randevuya çıkmak ister misin?",
    step1OptAbsolutely: "Kesinlikle", step1OptAbsolutelySub: "Bunu söylemeni umuyordum.",
    step1OptMaybe: "Belki...", step1OptMaybeSub: "Beni güzel yemekle ikna et.",
    step1OptNo: "Hayır", step1OptNoSub: "Kalbim şu anda müsait değil.",
    step2Eyebrow: "Bir gün seç",
    step2Question: "Küçük maceramız ne zaman olsun?",
    step2DateLabel: "Bir tarih seç",
    step3Eyebrow: "Havayı seç",
    step3Question: "Sana göre mükemmel randevu nasıl olurdu?",
    step3OptDinner: "Romantik akşam yemeği", step3OptDinnerSub: "Güzel yemek, yumuşak ışıklar, uzun sohbetler.",
    step3OptWalk: "Kahve ve yürüyüş", step3OptWalkSub: "Basit, sakin ve biraz sevimli.",
    step3OptSpontaneous: "Spontane bir şey", step3OptSpontaneousSub: "Plan yok. Sadece hissi takip et.",
    step3OptMovie: "Film gecesi", step3OptMovieSub: "Atıştırmalıklar, battaniyeler, sıfır kesinti.",
    step4Eyebrow: "Önemli soru",
    step4Question: "Ne kadar heyecanlısın?",
    step4Opt100Sub: "Şimdiden kıyafet seçiyorum.",
    step4Opt85Sub: "Çok heyecanlıyım. Normal görünmeye çalışıyorum.",
    step4Opt70Sub: "Sessizce heyecanlıyım.",
    step4Opt50Sub: "Bakalım nereye varacak.",
    step5Eyebrow: "Son bir şey",
    step5Question: "Bu randevuyu mükemmel yapacak şey ne olurdu?",
    step5NoteLabel: "Biraz daha anlat",
    step5NotePlaceholder: "Onu özel yapacak şeyi anlat...",
    raveLabel: "Rave kullanıcı adı (isteğe bağlı)",
    ravePlaceholder: "Instagram, Rave, Discord vb.",
    stepErrorMsg: "Lütfen önce bir cevap seçin.",
    backLabel: "Geri",
    continueLabel: "Devam et",
    submitLabel: "Gönder ♥",
    applicationReceived: "BAŞVURU ALINDI",
    officiallyDate: "Artık resmen bir randevu.",
    confirmDesc: "Cevapların, son derece ciddi Darling Primate komitesi tarafından dikkatle incelendi.",
    confirmDesc2: "Beyefendi kararından memnun.",
    romanceProb: "Romantizm ihtimali", suspiciouslyHigh: "Şüpheli derecede yüksek",
    dpStatus: "Darling Primate durumu", extremelyHappy: "Son derece mutlu",
    committeeStatus: "Komite durumu", veryHardSerious: "Çok ciddi",
    viewCertificate: "Sertifikayı Görüntüle",
    startOver: "Baştan başla ♥",
    romanticCertificate: "ROMANTİK SERTİFİKA",
    officiallyCertified: "RESMİ OLARAK ONAYLANDI",
    maleCandidate: "Erkek Romantik Aday",
    certifiedDateLabel: "Onaylı Randevu ♥",
    certifiedDate: "Onaylı Randevu",
    certDesc: "Bu belge, iki tarafın da bir randevunun mükemmel bir fikir olduğu son derece bilimsel sonucuna vardığını onaylar.",
    theGentleman: "Beyefendi",
    issuedByLabel: "Darling Primate tarafından düzenlenmiştir",
    committeeLabel: "Son Derece Ciddi Komite",
    downloadCertificate: "Sertifikayı İndir",
    preparingCertificate: "Sertifikanız hazırlanıyor...",
    certificateDownloaded: "Sertifika indirildi. ♥",
    certificateDownloadFailed: "İndirme başarısız oldu. Lütfen tekrar deneyin.",
    finalReminder: "Darling Primate, EVET seçeneğinin hâlâ mevcut olduğunu hatırlatmak ister. ♥",
    excellentDecision: "Mükemmel karar. ♥",
    detailAnswer: "Cevap", detailDate: "Tarih", detailMood: "Randevu tarzı",
    detailExcitement: "Heyecan", detailNote: "Mükemmel randevu notu", detailRave: "Rave kullanıcı adı",
    notProvided: "Belirtilmedi",
    appNumberLabel: "Başvuru No.", certNumberLabel: "Sertifika Numarası",
    appNumberCertLabel: "Başvuru Numarası", issueDateLabel: "Düzenleme Tarihi",
    selectedDateLabel: "Seçilen Tarih", dateStyleLabel: "Randevu Tarzı",
    excitementLabel: "Heyecan", raveHandlesLabel: "Rave kullanıcı adı",
    surpriseNote: "Beni şaşırt, enerjiye güveniyorum. ♥",
    noMessages: [
      "İyi deneme 😌", "Yanlış buton.", "Az kalsın!", "Evren aynı fikirde değil.",
      "Beyefendi saygıyla katılmıyor.", "Darling Primate bir şans daha istedi.",
      "Reddetme departmanı şu anda kapalı.", "Reddetme talebin reddedildi.",
      "Komite reddini reddetti.", "Hayır butonu sohbetten ayrıldı.",
      "Hayır butonu istifa etti.", "Darling Primate'ın avukatı sohbete girdi.",
      "Aşk kazanır. ♥", "Reddin reddedildi.", "Sistem hatası: romantizm tespit edildi.",
      "404: Ret bulunamadı.", "Lütfen EVET'i dene."
    ],
    surpriseToasts: [
      "Evren diyor ki: randevuya git ✨",
      "Darling Primate onaylıyor. 🐒♥",
      "Bilimsel kanıtlar diyor ki: randevu.",
      "Beyefendi harika haberler aldı.",
      "Maksimum enerji tespit edildi."
    ]
  }
};

/* ============ STATE ============ */

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

let noAttempts = 0;
let appNumberValue = "";
let certNumberValue = "";

/* ============ INITIALIZE ============ */

function initialize() {
  loadLanguage();
  applyLanguage(currentLang);
  setMinimumDate();
  createParticles();
  loadProgress();
  bindEvents();
  updateProfileImage();
}

/* ============ LANGUAGE ============ */

function loadLanguage() {
  const saved = localStorage.getItem("dp_language");
  if (saved && translations[saved]) {
    currentLang = saved;
  }
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("dp_language", lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = lang;

  updateDirection(lang);
  renderStep(currentStep);
}

function updateDirection(lang) {
  const rtlLangs = ["ar", "ur"];
  const isRtl = rtlLangs.includes(lang);
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

/* ============ PARTICLES ============ */

function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  const count = window.innerWidth < 600 ? 14 : 26;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (10 + Math.random() * 12) + "s";
    p.style.animationDelay = (Math.random() * 10) + "s";
    p.style.opacity = (0.2 + Math.random() * 0.4).toFixed(2);
    container.appendChild(p);
  }
}

/* ============ PROFILE IMAGE / FALLBACK ============ */

function updateProfileImage() {
  document.querySelectorAll("img[src='" + PRIMATE_IMAGE + "']").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      const fallback = document.createElement("div");
      fallback.textContent = "🐒";
      fallback.style.fontSize = "3rem";
      fallback.style.display = "flex";
      fallback.style.alignItems = "center";
      fallback.style.justifyContent = "center";
      fallback.style.width = "100%";
      fallback.style.height = "100%";
      img.parentElement.appendChild(fallback);
    }, { once: true });
  });
}

/* ============ SCREEN MANAGEMENT ============ */

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.hidden = s.id !== id;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============ NO BUTTON ESCAPE LOGIC (HERO) ============ */

function getYesRect() {
  const yesBtn = document.getElementById("yesBtn");
  return yesBtn.getBoundingClientRect();
}

function moveNoButton() {
  const noBtn = document.getElementById("noBtn");
  const margin = 20;
  noBtn.classList.add("positioned");

  const btnWidth = noBtn.offsetWidth || 120;
  const btnHeight = noBtn.offsetHeight || 56;

  const maxX = Math.max(margin, window.innerWidth - btnWidth - margin);
  const maxY = Math.max(margin, window.innerHeight - btnHeight - margin);

  const yesRect = getYesRect();
  const safeMargin = 60;

  let x, y, tries = 0;
  do {
    x = margin + Math.random() * (maxX - margin);
    y = margin + Math.random() * (maxY - margin);
    tries++;
  } while (
    tries < 30 &&
    x < yesRect.right + safeMargin &&
    x + btnWidth > yesRect.left - safeMargin &&
    y < yesRect.bottom + safeMargin &&
    y + btnHeight > yesRect.top - safeMargin
  );

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.transform = "rotate(" + (Math.random() * 10 - 5) + "deg) scale(1.05)";
  setTimeout(() => {
    noBtn.style.transform = "rotate(0deg) scale(1)";
  }, 220);
}

function handleNoAttempt(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  noAttempts++;
  moveNoButton();
  showNoMessage();
  updateNoCounter();

  if (noAttempts === 6) {
    showFinalReminder();
  }
}

function showNoMessage() {
  const dict = translations[currentLang];
  const messages = dict.noMessages || translations.en.noMessages;
  const idx = Math.min(noAttempts - 1, messages.length - 1);
  showToast(messages[idx]);
}

function updateNoCounter() {
  const noMeta = document.getElementById("noMeta");
  const noCount = document.getElementById("noCount");
  if (noAttempts > 0) {
    noMeta.hidden = false;
    noCount.textContent = noAttempts;
  }
}

function showFinalReminder() {
  const el = document.getElementById("finalReminder");
  el.hidden = false;
  setTimeout(() => { el.hidden = true; }, 3200);
}

/* ============ STEP-1 IN-APP NO BUTTON (also escapes) ============ */

function moveStep1NoButton() {
  const btn = document.getElementById("step1NoBtn");
  const container = document.querySelector('.app-step[data-step="1"] .answer-list');
  if (!btn || !container) return;
  // small shake + jump within the list order using transform, since it's inline (not fixed)
  const dx = (Math.random() * 30 - 15);
  const dy = (Math.random() * 10 - 5);
  btn.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.random() * 6 - 3}deg)`;
  setTimeout(() => { btn.style.transform = "translate(0,0) rotate(0)"; }, 220);
}

function handleStep1NoAttempt(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  noAttempts++;
  moveStep1NoButton();
  showNoMessage();
  updateNoCounter();
}

/* ============ TOAST ============ */

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* ============ YES BUTTON / START APPLICATION ============ */

function handleYes() {
  const overlay = document.getElementById("successOverlay");
  overlay.hidden = false;
  setTimeout(() => {
    overlay.hidden = true;
    startApplication();
  }, 1100);
}

function startApplication() {
  currentStep = 1;
  showScreen("appScreen");
  renderStep(currentStep);
  saveProgress();
}

/* ============ APPLICATION STEP RENDERING ============ */

function renderStep(step) {
  document.querySelectorAll(".app-step").forEach(el => {
    el.hidden = Number(el.getAttribute("data-step")) !== step;
  });
  const stepLabel = document.getElementById("stepLabel");
  if (stepLabel) stepLabel.textContent = pad(step) + " / 0" + TOTAL_STEPS;

  const progressBar = document.getElementById("progressBar");
  if (progressBar) progressBar.style.width = (step / TOTAL_STEPS * 100) + "%";

  const backBtn = document.getElementById("backBtn");
  const continueBtn = document.getElementById("continueBtn");
  if (backBtn) backBtn.style.visibility = step === 1 ? "hidden" : "visible";
  if (continueBtn) {
    const dict = translations[currentLang];
    continueBtn.textContent = step === TOTAL_STEPS ? dict.submitLabel : dict.continueLabel;
  }

  hideStepError();
  refreshSelectedStates();
}

function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}

function refreshSelectedStates() {
  document.querySelectorAll(".app-step .answer-card[data-field]").forEach(card => {
    const field = card.getAttribute("data-field");
    const value = card.getAttribute("data-value");
    card.classList.toggle("selected", application[field] === value);
  });
  const dateInput = document.getElementById("dateInput");
  if (dateInput && application.date) dateInput.value = application.date;
  const noteInput = document.getElementById("noteInput");
  if (noteInput) noteInput.value = application.note || "";
  const raveInput = document.getElementById("raveInput");
  if (raveInput) raveInput.value = application.raveHandles || "";
}

function selectAnswer(field, value, cardEl) {
  application[field] = value;
  document.querySelectorAll(`.app-step .answer-card[data-field="${field}"]`).forEach(c => {
    c.classList.toggle("selected", c === cardEl);
  });
  hideStepError();
  saveProgress();
}

function showStepError() {
  const dict = translations[currentLang];
  const err = document.getElementById("stepError");
  err.textContent = dict.stepErrorMsg;
  err.hidden = false;
}

function hideStepError() {
  const err = document.getElementById("stepError");
  if (err) err.hidden = true;
}

function validateStep(step) {
  if (step === 1) return !!application.answer;
  if (step === 2) {
    const dateInput = document.getElementById("dateInput");
    application.date = dateInput.value;
    return !!application.date;
  }
  if (step === 3) return !!application.mood;
  if (step === 4) return !!application.excitement;
  if (step === 5) {
    const noteInput = document.getElementById("noteInput");
    const raveInput = document.getElementById("raveInput");
    application.note = noteInput.value.trim();
    application.raveHandles = raveInput.value.trim();
    return application.note.length > 0;
  }
  return true;
}

function nextStep() {
  if (!validateStep(currentStep)) {
    showStepError();
    return;
  }
  saveProgress();
  if (currentStep === TOTAL_STEPS) {
    submitApplication();
    return;
  }
  currentStep++;
  renderStep(currentStep);
}

function previousStep() {
  if (currentStep === 1) return;
  currentStep--;
  renderStep(currentStep);
}

/* ============ SET MINIMUM DATE ============ */

function setMinimumDate() {
  const dateInput = document.getElementById("dateInput");
  if (!dateInput) return;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const y = tomorrow.getFullYear();
  const m = pad(tomorrow.getMonth() + 1);
  const d = pad(tomorrow.getDate());
  dateInput.min = `${y}-${m}-${d}`;
}

/* ============ SUBMIT / NUMBERS ============ */

function generateApplicationNumber() {
  return "DP-" + randomAlphaNum(6);
}

function generateCertificateNumber() {
  return "DPC-" + randomAlphaNum(6);
}

function randomAlphaNum(len) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function submitApplication() {
  appNumberValue = generateApplicationNumber();
  certNumberValue = generateCertificateNumber();
  renderConfirmation();
  showScreen("confirmScreen");
  saveProgress();
}

/* ============ LABELS FOR DISPLAY ============ */

function getAnswerDisplay() {
  const dict = translations[currentLang];
  const map = {
    absolutely: dict.step1OptAbsolutely,
    maybe: dict.step1OptMaybe
  };
  return map[application.answer] || application.answer;
}

function getMoodDisplay() {
  const dict = translations[currentLang];
  const map = {
    dinner: dict.step3OptDinner,
    walk: dict.step3OptWalk,
    spontaneous: dict.step3OptSpontaneous,
    movie: dict.step3OptMovie
  };
  return map[application.mood] || application.mood;
}

function formatDateDisplay(isoDate) {
  if (!isoDate) return "—";
  try {
    const d = new Date(isoDate + "T00:00:00");
    return d.toLocaleDateString(currentLang, { year: "numeric", month: "long", day: "numeric" });
  } catch (e) {
    return isoDate;
  }
}

/* ============ RENDER CONFIRMATION ============ */

function renderConfirmation() {
  const dict = translations[currentLang];
  document.getElementById("appNumber").textContent = dict.appNumberLabel + " " + appNumberValue;

  const details = [
    { label: dict.detailAnswer, value: getAnswerDisplay() },
    { label: dict.detailDate, value: formatDateDisplay(application.date) },
    { label: dict.detailMood, value: getMoodDisplay() },
    { label: dict.detailExcitement, value: application.excitement + "%" },
    { label: dict.detailNote, value: application.note || dict.notProvided },
    { label: dict.detailRave, value: application.raveHandles || dict.notProvided }
  ];

  const container = document.getElementById("confirmDetails");
  container.innerHTML = "";
  details.forEach(d => {
    const card = document.createElement("div");
    card.className = "detail-card";
    const label = document.createElement("p");
    label.className = "d-label";
    label.textContent = d.label;
    const value = document.createElement("p");
    value.className = "d-value";
    value.textContent = d.value;
    card.appendChild(label);
    card.appendChild(value);
    container.appendChild(card);
  });
}

/* ============ CERTIFICATE ============ */

function showCertificate() {
  renderCertificate();
  showScreen("certScreen");
}

function renderCertificate() {
  const dict = translations[currentLang];
  const today = new Date();

  const rows = [
    { label: dict.certNumberLabel, value: certNumberValue },
    { label: dict.appNumberCertLabel, value: appNumberValue },
    { label: dict.issueDateLabel, value: formatDateDisplay(today.toISOString().slice(0,10)) },
    { label: dict.selectedDateLabel, value: formatDateDisplay(application.date) },
    { label: dict.dateStyleLabel, value: getMoodDisplay() },
    { label: dict.excitementLabel, value: application.excitement + "%" },
    { label: dict.raveHandlesLabel, value: application.raveHandles || dict.notProvided }
  ];

  const grid = document.getElementById("certGrid");
  grid.innerHTML = "";
  rows.forEach(r => {
    const card = document.createElement("div");
    card.className = "detail-card";
    const label = document.createElement("p");
    label.className = "d-label";
    label.textContent = r.label;
    const value = document.createElement("p");
    value.className = "d-value";
    value.textContent = r.value;
    card.appendChild(label);
    card.appendChild(value);
    grid.appendChild(card);
  });
}

/* ============ CERTIFICATE DOWNLOAD (PNG) ============ */

function downloadCertificate() {
  const dict = translations[currentLang];
  const certEl = document.querySelector(".certificate");
  const downloadBtn = document.getElementById("certDownloadBtn");
  if (!certEl || typeof html2canvas === "undefined") {
    showToast(dict.certificateDownloadFailed);
    return;
  }

  downloadBtn.disabled = true;
  showToast(dict.preparingCertificate);

  // Hide action buttons and flatten the background so the exported
  // PNG reads as a clean, printable card rather than a page screenshot.
  certEl.classList.add("capturing");

  // Give the browser a frame to apply the capturing styles before snapshotting.
  requestAnimationFrame(() => {
    html2canvas(certEl, {
      backgroundColor: "#0c0a11",
      scale: Math.min(3, window.devicePixelRatio * 2 || 2),
      useCORS: true,
      logging: false
    }).then(canvas => {
      certEl.classList.remove("capturing");
      downloadBtn.disabled = false;

      canvas.toBlob(blob => {
        if (!blob) {
          showToast(dict.certificateDownloadFailed);
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        const fileNumber = certNumberValue || "certificate";
        link.href = url;
        link.download = `darling-primate-${fileNumber}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        showToast(dict.certificateDownloaded);
      }, "image/png");
    }).catch(() => {
      certEl.classList.remove("capturing");
      downloadBtn.disabled = false;
      showToast(dict.certificateDownloadFailed);
    });
  });
}

/* ============ SURPRISE ME ============ */

function surpriseMe() {
  const moods = ["dinner", "walk", "spontaneous", "movie"];
  const excitements = ["100", "85", "70"];
  const dict = translations[currentLang];

  application.answer = "absolutely";
  const future = new Date();
  future.setDate(future.getDate() + 1 + Math.floor(Math.random() * 20));
  application.date = future.toISOString().slice(0, 10);
  application.mood = moods[Math.floor(Math.random() * moods.length)];
  application.excitement = excitements[Math.floor(Math.random() * excitements.length)];
  application.note = dict.surpriseNote;
  application.raveHandles = "";

  const toasts = dict.surpriseToasts || translations.en.surpriseToasts;
  showToast(toasts[Math.floor(Math.random() * toasts.length)]);

  saveProgress();
  appNumberValue = generateApplicationNumber();
  certNumberValue = generateCertificateNumber();
  renderConfirmation();
  showScreen("confirmScreen");
}

/* ============ RESET ============ */

function resetApplication() {
  application.answer = "";
  application.date = "";
  application.mood = "";
  application.excitement = "";
  application.note = "";
  application.raveHandles = "";
  currentStep = 1;
  noAttempts = 0;
  const noMeta = document.getElementById("noMeta");
  if (noMeta) noMeta.hidden = true;
  localStorage.removeItem("dp_progress");
  showScreen("heroScreen");
}

/* ============ LOCAL STORAGE (PROGRESS) ============ */

function saveProgress() {
  try {
    localStorage.setItem("dp_progress", JSON.stringify({ application, currentStep }));
  } catch (e) { /* ignore quota errors */ }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("dp_progress");
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.application) Object.assign(application, data.application);
  } catch (e) { /* ignore corrupted data */ }
}

/* ============ EVENT BINDING ============ */

function bindEvents() {
  const langSelect = document.getElementById("langSelect");
  langSelect.addEventListener("change", (e) => setLanguage(e.target.value));

  const yesBtn = document.getElementById("yesBtn");
  yesBtn.addEventListener("click", handleYes);

  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("pointerdown", handleNoAttempt);
  noBtn.addEventListener("pointerenter", handleNoAttempt);
  noBtn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); });
  noBtn.addEventListener("focus", () => { moveNoButton(); });
  noBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleNoAttempt(e);
    }
  });

  const surpriseBtn = document.getElementById("surpriseBtn");
  surpriseBtn.addEventListener("click", surpriseMe);

  // Step 1 in-app no button (escapes too)
  const step1NoBtn = document.getElementById("step1NoBtn");
  step1NoBtn.addEventListener("pointerdown", handleStep1NoAttempt);
  step1NoBtn.addEventListener("pointerenter", handleStep1NoAttempt);
  step1NoBtn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); });
  step1NoBtn.addEventListener("focus", () => { moveStep1NoButton(); });

  // Answer cards (event delegation for dynamically consistent fields)
  document.querySelectorAll(".answer-card[data-field]").forEach(card => {
    card.addEventListener("click", () => {
      const field = card.getAttribute("data-field");
      const value = card.getAttribute("data-value");
      selectAnswer(field, value, card);
    });
  });

  document.getElementById("backBtn").addEventListener("click", previousStep);
  document.getElementById("continueBtn").addEventListener("click", nextStep);

  document.getElementById("dateInput").addEventListener("change", () => {
    hideStepError();
    application.date = document.getElementById("dateInput").value;
    saveProgress();
  });
  document.getElementById("noteInput").addEventListener("input", () => {
    hideStepError();
    saveProgress();
  });
  document.getElementById("raveInput").addEventListener("input", saveProgress);

  document.getElementById("viewCertBtn").addEventListener("click", showCertificate);
  document.getElementById("certDownloadBtn").addEventListener("click", downloadCertificate);
  document.getElementById("startOverBtn").addEventListener("click", resetApplication);
  document.getElementById("certBackBtn").addEventListener("click", () => showScreen("confirmScreen"));
  document.getElementById("certStartOverBtn").addEventListener("click", resetApplication);

  window.addEventListener("resize", () => {
    const noBtn = document.getElementById("noBtn");
    if (noBtn.classList.contains("positioned")) {
      const rect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - rect.width - 20;
      const maxY = window.innerHeight - rect.height - 20;
      if (rect.left > maxX || rect.top > maxY) {
        noBtn.style.left = Math.min(rect.left, Math.max(20, maxX)) + "px";
        noBtn.style.top = Math.min(rect.top, Math.max(20, maxY)) + "px";
      }
    }
  });
}

/* ============ BOOT ============ */

document.addEventListener("DOMContentLoaded", initialize);
