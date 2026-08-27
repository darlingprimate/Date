/* =========================================================
   DARLING PRIMATE — script.js
========================================================= */

(function(){
"use strict";

/* =========================================================
   TRANSLATIONS
========================================================= */
const translations = {
  en: {
    "nav.brand":"Darling Primate", "nav.tag":"PRIVATE • ROMANTIC • OFFICIAL",
    "nav.back":"Back", "nav.continue":"Continue", "nav.submit":"Submit ♥",
    "hero.badge":"Private application now open",
    "hero.headline":"Will you go on a date with me?",
    "hero.desc":"A tiny application for a very important decision. No pressure, just good food, better company, and maybe a little romance.",
    "hero.micro":"Zero commitment. Maximum vibes. Probably.",
    "hero.yes":"Yes", "hero.no":"No",
    "hero.float1":"✨ good vibes only", "hero.float2":"🍓 one date, please?", "hero.float3":"💌 highly confidential",
    "hero.float4":"🐒 gentleman awaiting response", "hero.float5":"❤️ application pending",
    "hero.yesToast":"Excellent decision. ♥",
    "profile.name":"DARLING PRIMATE", "profile.male":"MALE PRIMATE",
    "profile.quote":"Currently accepting applications for one extremely important date.",
    "profile.status.label":"Relationship status", "profile.status.value":"Waiting for her answer",
    "profile.avail.label":"Availability", "profile.avail.value":"Suspiciously available",
    "profile.romance.label":"Romance level", "profile.romance.value":"Highly classified",
    "profile.gentleman.label":"Gentleman status", "profile.gentleman.value":"Confirmed",
    "step1.eyebrow":"First things first", "step1.question":"Would you like to go on a date?",
    "step1.opt1.title":"Absolutely", "step1.opt1.sub":"I was hoping you would say that.",
    "step1.opt2.title":"Maybe...", "step1.opt2.sub":"Convince me with good food.",
    "step1.opt3.title":"No", "step1.opt3.sub":"My heart is currently unavailable.",
    "step2.eyebrow":"Pick a day", "step2.question":"When should our little adventure happen?",
    "step3.eyebrow":"Choose the mood", "step3.question":"What sounds like the perfect date?",
    "step3.opt1.title":"Romantic dinner", "step3.opt1.sub":"Good food, soft lights, long conversations.",
    "step3.opt2.title":"Coffee & a walk", "step3.opt2.sub":"Simple, calm, and a little cute.",
    "step3.opt3.title":"Something spontaneous", "step3.opt3.sub":"No plan. Just follow the feeling.",
    "step3.opt4.title":"Movie night", "step3.opt4.sub":"Snacks, blankets, and zero interruptions.",
    "step4.eyebrow":"Important question", "step4.question":"How excited are you?",
    "step4.opt1.sub":"I am already choosing an outfit.", "step4.opt2.sub":"Very excited. Trying to act normal.",
    "step4.opt3.sub":"Quietly excited.", "step4.opt4.sub":"Let's see where this goes.",
    "step5.eyebrow":"One last thing", "step5.question":"What would make this date perfect?",
    "step5.placeholder":"Tell me what would make it special...",
    "step5.rave.label":"Rave Handles", "step5.optional":"(optional)", "step5.rave.placeholder":"Instagram, Rave, Discord, etc.",
    "validation.choose":"Please choose an answer first.", "validation.date":"Please choose a date first.",
    "confirm.label":"Application received", "confirm.headline":"It is officially a date.",
    "confirm.desc":"Your answers have been carefully reviewed by the very serious Darling Primate committee.",
    "confirm.note":"The gentleman is pleased with your decision.",
    "confirm.grid.answer":"Answer", "confirm.grid.date":"Date", "confirm.grid.mood":"Date style",
    "confirm.grid.excitement":"Excitement", "confirm.grid.note":"Perfect date note", "confirm.grid.rave":"Rave Handles",
    "confirm.meta.probability":"Romance probability", "confirm.meta.probability.value":"Suspiciously high",
    "confirm.meta.status":"Darling Primate status", "confirm.meta.status.value":"Extremely happy",
    "confirm.meta.committee":"Committee status", "confirm.meta.committee.value":"Very serious",
    "confirm.viewCert":"View Certificate", "confirm.startOver":"Start over ♥",
    "cert.brand":"DARLING PRIMATE", "cert.subbrand":"PRIVATE ROMANTIC CERTIFICATION",
    "cert.title":"Certificate of Date", "cert.titleSub":"OFFICIALLY CERTIFIED",
    "cert.candidateName":"Darling Primate", "cert.candidateRole":"Male Romantic Candidate",
    "cert.body1":"This certificate officially recognizes that Darling Primate and the recipient named below have mutually accepted a romantic date invitation.",
    "cert.body2":"Following a highly confidential review by the Extremely Serious Committee, the application has been approved.",
    "cert.recipientLabel":"Presented to", "cert.recipientDefault":"The Distinguished Date Recipient",
    "cert.detail.appNo":"Application Number", "cert.detail.certNo":"Certificate Number",
    "cert.detail.issue":"Date of Issue", "cert.detail.approved":"Approved Date",
    "cert.detail.style":"Date Style", "cert.detail.excitement":"Excitement Level", "cert.detail.rave":"Rave Handles",
    "cert.notProvided":"Not provided",
    "cert.signatureName":"Darling Primate", "cert.signatureRole":"The Gentleman",
    "cert.footer.issuedBy":"Issued by", "cert.footer.committee":"The Extremely Serious Committee",
    "cert.footer.authorizedBy":"Authorized by", "cert.footer.primate":"Darling Primate",
    "cert.download":"Download Certificate",
    "cert.sound.on":"Sound on", "cert.sound.off":"Sound off",
    "mood.dinner":"Romantic dinner", "mood.coffee":"Coffee & a walk", "mood.spontaneous":"Something spontaneous", "mood.movie":"Movie night",
    "answer.absolutely":"Absolutely", "answer.maybe":"Maybe...",
    "no.msg1":"Nice try 😌", "no.msg2":"Wrong button.", "no.msg3":"Almost!", "no.msg4":"The universe disagrees.",
    "no.msg5":"The gentleman respectfully disagrees.", "no.msg6":"Darling Primate has requested another chance.",
    "no.msg7":"The rejection department is currently closed.", "no.msg8":"Your rejection request has been denied.",
    "no.msg9":"The committee has rejected your rejection.", "no.msg10":"The No button has left the chat.",
    "no.msg11":"The No button has resigned.", "no.msg12":"Darling Primate's lawyer has entered the chat.",
    "no.msg13":"Love wins. ♥", "no.msg14":"404: Rejection not found.", "no.msg15":"System error: romance detected.",
    "no.msg16":"Please try YES instead."
  },
  bn: {
    "nav.brand":"ডার্লিং প্রাইমেট", "nav.tag":"ব্যক্তিগত • রোমান্টিক • আনুষ্ঠানিক",
    "nav.back":"পেছনে", "nav.continue":"চালিয়ে যান", "nav.submit":"জমা দিন ♥",
    "hero.badge":"ব্যক্তিগত আবেদন এখন খোলা",
    "hero.headline":"আমার সাথে কি একটি ডেটে যাবে?",
    "hero.desc":"একটি খুব গুরুত্বপূর্ণ সিদ্ধান্তের জন্য ছোট্ট একটি আবেদন। কোনো চাপ নেই, শুধু ভালো খাবার, আরও ভালো সঙ্গ, আর হয়তো সামান্য রোমান্স।",
    "hero.micro":"শূন্য প্রতিশ্রুতি। সর্বোচ্চ ভাইব। সম্ভবত।",
    "hero.yes":"হ্যাঁ", "hero.no":"না",
    "hero.float1":"✨ শুধু ভালো ভাইব", "hero.float2":"🍓 একটা ডেট, প্লিজ?", "hero.float3":"💌 অত্যন্ত গোপনীয়",
    "hero.float4":"🐒 ভদ্রলোক উত্তরের অপেক্ষায়", "hero.float5":"❤️ আবেদন মুলতুবি",
    "hero.yesToast":"চমৎকার সিদ্ধান্ত। ♥",
    "profile.name":"ডার্লিং প্রাইমেট", "profile.male":"পুরুষ প্রাইমেট",
    "profile.quote":"বর্তমানে একটি অত্যন্ত গুরুত্বপূর্ণ ডেটের জন্য আবেদন গ্রহণ করা হচ্ছে।",
    "profile.status.label":"সম্পর্কের অবস্থা", "profile.status.value":"তার উত্তরের অপেক্ষায়",
    "profile.avail.label":"উপলব্ধতা", "profile.avail.value":"সন্দেহজনকভাবে উপলব্ধ",
    "profile.romance.label":"রোমান্স মাত্রা", "profile.romance.value":"অত্যন্ত গোপনীয়",
    "profile.gentleman.label":"ভদ্রলোক মর্যাদা", "profile.gentleman.value":"নিশ্চিত",
    "step1.eyebrow":"প্রথম কথা", "step1.question":"তুমি কি ডেটে যেতে চাও?",
    "step1.opt1.title":"একদম", "step1.opt1.sub":"আমি এটাই আশা করছিলাম।",
    "step1.opt2.title":"হয়তো...", "step1.opt2.sub":"ভালো খাবার দিয়ে রাজি করাও।",
    "step1.opt3.title":"না", "step1.opt3.sub":"আমার হৃদয় এখন অনুপলব্ধ।",
    "step2.eyebrow":"একটি দিন বেছে নাও", "step2.question":"আমাদের ছোট্ট অভিযানটা কবে হবে?",
    "step3.eyebrow":"মেজাজ বেছে নাও", "step3.question":"নিখুঁত ডেটে কেমন লাগবে?",
    "step3.opt1.title":"রোমান্টিক ডিনার", "step3.opt1.sub":"ভালো খাবার, নরম আলো, দীর্ঘ কথোপকথন।",
    "step3.opt2.title":"কফি ও হাঁটা", "step3.opt2.sub":"সহজ, শান্ত, আর একটু মিষ্টি।",
    "step3.opt3.title":"হঠাৎ কিছু একটা", "step3.opt3.sub":"কোনো পরিকল্পনা নেই। শুধু অনুভূতি অনুসরণ করো।",
    "step3.opt4.title":"সিনেমার রাত", "step3.opt4.sub":"নাস্তা, কম্বল, আর কোনো বাধা নেই।",
    "step4.eyebrow":"গুরুত্বপূর্ণ প্রশ্ন", "step4.question":"তুমি কতটা উত্তেজিত?",
    "step4.opt1.sub":"আমি এখনই পোশাক বেছে নিচ্ছি।", "step4.opt2.sub":"খুব উত্তেজিত। স্বাভাবিক থাকার চেষ্টা করছি।",
    "step4.opt3.sub":"নিরবে উত্তেজিত।", "step4.opt4.sub":"দেখা যাক এটা কোথায় যায়।",
    "step5.eyebrow":"শেষ একটি কথা", "step5.question":"এই ডেটটা নিখুঁত করতে কী লাগবে?",
    "step5.placeholder":"বলো কী এটাকে বিশেষ করে তুলবে...",
    "step5.rave.label":"রেভ হ্যান্ডেল", "step5.optional":"(ঐচ্ছিক)", "step5.rave.placeholder":"ইনস্টাগ্রাম, রেভ, ডিসকর্ড ইত্যাদি।",
    "validation.choose":"অনুগ্রহ করে প্রথমে একটি উত্তর বেছে নিন।", "validation.date":"অনুগ্রহ করে প্রথমে একটি তারিখ বেছে নিন।",
    "confirm.label":"আবেদন গৃহীত হয়েছে", "confirm.headline":"এটি এখন আনুষ্ঠানিকভাবে একটি ডেট।",
    "confirm.desc":"তোমার উত্তরগুলো ডার্লিং প্রাইমেট কমিটি অত্যন্ত সিরিয়াসভাবে পর্যালোচনা করেছে।",
    "confirm.note":"ভদ্রলোক তোমার সিদ্ধান্তে সন্তুষ্ট।",
    "confirm.grid.answer":"উত্তর", "confirm.grid.date":"তারিখ", "confirm.grid.mood":"ডেট স্টাইল",
    "confirm.grid.excitement":"উত্তেজনা", "confirm.grid.note":"নিখুঁত ডেট নোট", "confirm.grid.rave":"রেভ হ্যান্ডেল",
    "confirm.meta.probability":"রোমান্স সম্ভাবনা", "confirm.meta.probability.value":"সন্দেহজনকভাবে বেশি",
    "confirm.meta.status":"ডার্লিং প্রাইমেট অবস্থা", "confirm.meta.status.value":"অত্যন্ত খুশি",
    "confirm.meta.committee":"কমিটির অবস্থা", "confirm.meta.committee.value":"অত্যন্ত সিরিয়াস",
    "confirm.viewCert":"সার্টিফিকেট দেখুন", "confirm.startOver":"আবার শুরু করো ♥",
    "cert.brand":"ডার্লিং প্রাইমেট", "cert.subbrand":"ব্যক্তিগত রোমান্টিক সার্টিফিকেশন",
    "cert.title":"ডেট সার্টিফিকেট", "cert.titleSub":"আনুষ্ঠানিকভাবে প্রত্যয়িত",
    "cert.candidateName":"ডার্লিং প্রাইমেট", "cert.candidateRole":"পুরুষ রোমান্টিক প্রার্থী",
    "cert.body1":"এই সার্টিফিকেট আনুষ্ঠানিকভাবে স্বীকৃতি দেয় যে ডার্লিং প্রাইমেট এবং নিচে উল্লেখিত প্রাপক পারস্পরিকভাবে একটি রোমান্টিক ডেট আমন্ত্রণ গ্রহণ করেছেন।",
    "cert.body2":"অত্যন্ত গোপনীয় কমিটির পর্যালোচনার পর, আবেদনটি অনুমোদিত হয়েছে।",
    "cert.recipientLabel":"প্রদান করা হলো", "cert.recipientDefault":"সম্মানিত ডেট প্রাপক",
    "cert.detail.appNo":"আবেদন নম্বর", "cert.detail.certNo":"সার্টিফিকেট নম্বর",
    "cert.detail.issue":"ইস্যুর তারিখ", "cert.detail.approved":"অনুমোদিত তারিখ",
    "cert.detail.style":"ডেট স্টাইল", "cert.detail.excitement":"উত্তেজনার মাত্রা", "cert.detail.rave":"রেভ হ্যান্ডেল",
    "cert.notProvided":"প্রদান করা হয়নি",
    "cert.signatureName":"ডার্লিং প্রাইমেট", "cert.signatureRole":"ভদ্রলোক",
    "cert.footer.issuedBy":"প্রদানকারী", "cert.footer.committee":"অত্যন্ত সিরিয়াস কমিটি",
    "cert.footer.authorizedBy":"অনুমোদনকারী", "cert.footer.primate":"ডার্লিং প্রাইমেট",
    "cert.download":"সার্টিফিকেট ডাউনলোড করুন",
    "cert.sound.on":"শব্দ চালু", "cert.sound.off":"শব্দ বন্ধ",
    "mood.dinner":"রোমান্টিক ডিনার", "mood.coffee":"কফি ও হাঁটা", "mood.spontaneous":"হঠাৎ কিছু একটা", "mood.movie":"সিনেমার রাত",
    "answer.absolutely":"একদম", "answer.maybe":"হয়তো...",
    "no.msg1":"চেষ্টা ভালো ছিল 😌", "no.msg2":"ভুল বাটন।", "no.msg3":"প্রায়!", "no.msg4":"মহাবিশ্ব একমত নয়।",
    "no.msg5":"ভদ্রলোক শ্রদ্ধার সাথে দ্বিমত পোষণ করছেন।", "no.msg6":"ডার্লিং প্রাইমেট আরেকটি সুযোগ চেয়েছে।",
    "no.msg7":"প্রত্যাখ্যান বিভাগ বর্তমানে বন্ধ।", "no.msg8":"তোমার প্রত্যাখ্যানের অনুরোধ প্রত্যাখ্যাত হয়েছে।",
    "no.msg9":"কমিটি তোমার প্রত্যাখ্যানকে প্রত্যাখ্যান করেছে।", "no.msg10":"না বাটনটি চ্যাট ছেড়ে চলে গেছে।",
    "no.msg11":"না বাটনটি পদত্যাগ করেছে।", "no.msg12":"ডার্লিং প্রাইমেটের আইনজীবী চ্যাটে প্রবেশ করেছেন।",
    "no.msg13":"ভালোবাসার জয় হলো। ♥", "no.msg14":"৪০৪: প্রত্যাখ্যান পাওয়া যায়নি।", "no.msg15":"সিস্টেম ত্রুটি: রোমান্স শনাক্ত হয়েছে।",
    "no.msg16":"অনুগ্রহ করে হ্যাঁ চেষ্টা করো।"
  },
  hi: {
    "nav.brand":"डार्लिंग प्राइमेट", "nav.tag":"निजी • रोमांटिक • आधिकारिक",
    "nav.back":"पीछे", "nav.continue":"जारी रखें", "nav.submit":"जमा करें ♥",
    "hero.badge":"निजी आवेदन अभी खुला है",
    "hero.headline":"क्या तुम मेरे साथ डेट पर चलोगी?",
    "hero.desc":"एक बहुत महत्वपूर्ण फैसले के लिए एक छोटा सा आवेदन। कोई दबाव नहीं, बस अच्छा खाना, बेहतर साथ, और शायद थोड़ा रोमांस।",
    "hero.micro":"शून्य प्रतिबद्धता। अधिकतम वाइब्स। शायद।",
    "hero.yes":"हाँ", "hero.no":"नहीं",
    "hero.float1":"✨ बस अच्छी वाइब्स", "hero.float2":"🍓 एक डेट, प्लीज़?", "hero.float3":"💌 अत्यंत गोपनीय",
    "hero.float4":"🐒 सज्जन जवाब का इंतज़ार कर रहे हैं", "hero.float5":"❤️ आवेदन लंबित",
    "hero.yesToast":"शानदार फैसला। ♥",
    "profile.name":"डार्लिंग प्राइमेट", "profile.male":"पुरुष प्राइमेट",
    "profile.quote":"वर्तमान में एक अत्यंत महत्वपूर्ण डेट के लिए आवेदन स्वीकार किए जा रहे हैं।",
    "profile.status.label":"रिश्ते की स्थिति", "profile.status.value":"उसके जवाब का इंतज़ार",
    "profile.avail.label":"उपलब्धता", "profile.avail.value":"संदिग्ध रूप से उपलब्ध",
    "profile.romance.label":"रोमांस स्तर", "profile.romance.value":"अत्यंत गोपनीय",
    "profile.gentleman.label":"सज्जन दर्जा", "profile.gentleman.value":"पुष्टि की गई",
    "step1.eyebrow":"सबसे पहली बात", "step1.question":"क्या तुम डेट पर जाना चाहोगी?",
    "step1.opt1.title":"बिल्कुल", "step1.opt1.sub":"मुझे यही उम्मीद थी।",
    "step1.opt2.title":"शायद...", "step1.opt2.sub":"अच्छे खाने से मनाओ।",
    "step1.opt3.title":"नहीं", "step1.opt3.sub":"मेरा दिल अभी उपलब्ध नहीं है।",
    "step2.eyebrow":"एक दिन चुनें", "step2.question":"हमारा छोटा सा एडवेंचर कब होगा?",
    "step3.eyebrow":"मूड चुनें", "step3.question":"परफेक्ट डेट कैसी लगेगी?",
    "step3.opt1.title":"रोमांटिक डिनर", "step3.opt1.sub":"अच्छा खाना, हल्की रोशनी, लंबी बातें।",
    "step3.opt2.title":"कॉफी और सैर", "step3.opt2.sub":"सरल, शांत, और थोड़ा प्यारा।",
    "step3.opt3.title":"कुछ अचानक", "step3.opt3.sub":"कोई योजना नहीं। बस एहसास का पालन करो।",
    "step3.opt4.title":"मूवी नाइट", "step3.opt4.sub":"स्नैक्स, कंबल, और कोई बाधा नहीं।",
    "step4.eyebrow":"जरूरी सवाल", "step4.question":"तुम कितनी उत्साहित हो?",
    "step4.opt1.sub":"मैं अभी से पोशाक चुन रही हूं।", "step4.opt2.sub":"बहुत उत्साहित। सामान्य दिखने की कोशिश।",
    "step4.opt3.sub":"चुपचाप उत्साहित।", "step4.opt4.sub":"देखते हैं यह कहाँ जाता है।",
    "step5.eyebrow":"आखिरी बात", "step5.question":"इस डेट को परफेक्ट क्या बनाएगा?",
    "step5.placeholder":"बताओ इसे खास क्या बनाएगा...",
    "step5.rave.label":"रेव हैंडल", "step5.optional":"(वैकल्पिक)", "step5.rave.placeholder":"इंस्टाग्राम, रेव, डिस्कॉर्ड आदि।",
    "validation.choose":"कृपया पहले एक जवाब चुनें।", "validation.date":"कृपया पहले एक तारीख चुनें।",
    "confirm.label":"आवेदन प्राप्त हुआ", "confirm.headline":"यह आधिकारिक रूप से एक डेट है।",
    "confirm.desc":"तुम्हारे जवाबों की डार्लिंग प्राइमेट समिति ने बहुत गंभीरता से समीक्षा की है।",
    "confirm.note":"सज्जन तुम्हारे फैसले से प्रसन्न हैं।",
    "confirm.grid.answer":"जवाब", "confirm.grid.date":"तारीख", "confirm.grid.mood":"डेट स्टाइल",
    "confirm.grid.excitement":"उत्साह", "confirm.grid.note":"परफेक्ट डेट नोट", "confirm.grid.rave":"रेव हैंडल",
    "confirm.meta.probability":"रोमांस संभावना", "confirm.meta.probability.value":"संदिग्ध रूप से उच्च",
    "confirm.meta.status":"डार्लिंग प्राइमेट स्थिति", "confirm.meta.status.value":"अत्यंत प्रसन्न",
    "confirm.meta.committee":"समिति की स्थिति", "confirm.meta.committee.value":"बेहद गंभीर",
    "confirm.viewCert":"सर्टिफिकेट देखें", "confirm.startOver":"फिर से शुरू करें ♥",
    "cert.brand":"डार्लिंग प्राइमेट", "cert.subbrand":"निजी रोमांटिक प्रमाणन",
    "cert.title":"डेट प्रमाणपत्र", "cert.titleSub":"आधिकारिक रूप से प्रमाणित",
    "cert.candidateName":"डार्लिंग प्राइमेट", "cert.candidateRole":"पुरुष रोमांटिक उम्मीदवार",
    "cert.body1":"यह प्रमाणपत्र आधिकारिक तौर पर मान्यता देता है कि डार्लिंग प्राइमेट और नीचे नामित प्राप्तकर्ता ने परस्पर एक रोमांटिक डेट निमंत्रण स्वीकार किया है।",
    "cert.body2":"अत्यंत गोपनीय समिति की समीक्षा के बाद, आवेदन स्वीकृत किया गया है।",
    "cert.recipientLabel":"प्रस्तुत किया गया", "cert.recipientDefault":"सम्मानित डेट प्राप्तकर्ता",
    "cert.detail.appNo":"आवेदन संख्या", "cert.detail.certNo":"प्रमाणपत्र संख्या",
    "cert.detail.issue":"जारी करने की तारीख", "cert.detail.approved":"स्वीकृत तारीख",
    "cert.detail.style":"डेट स्टाइल", "cert.detail.excitement":"उत्साह स्तर", "cert.detail.rave":"रेव हैंडल",
    "cert.notProvided":"प्रदान नहीं किया गया",
    "cert.signatureName":"डार्लिंग प्राइमेट", "cert.signatureRole":"सज्जन",
    "cert.footer.issuedBy":"जारीकर्ता", "cert.footer.committee":"अत्यंत गंभीर समिति",
    "cert.footer.authorizedBy":"प्राधिकृत", "cert.footer.primate":"डार्लिंग प्राइमेट",
    "cert.download":"प्रमाणपत्र डाउनलोड करें",
    "cert.sound.on":"ध्वनि चालू", "cert.sound.off":"ध्वनि बंद",
    "mood.dinner":"रोमांटिक डिनर", "mood.coffee":"कॉफी और सैर", "mood.spontaneous":"कुछ अचानक", "mood.movie":"मूवी नाइट",
    "answer.absolutely":"बिल्कुल", "answer.maybe":"शायद...",
    "no.msg1":"अच्छी कोशिश 😌", "no.msg2":"गलत बटन।", "no.msg3":"लगभग!", "no.msg4":"ब्रह्मांड असहमत है।",
    "no.msg5":"सज्जन सम्मानपूर्वक असहमत हैं।", "no.msg6":"डार्लिंग प्राइमेट ने एक और मौका माँगा है।",
    "no.msg7":"अस्वीकृति विभाग फिलहाल बंद है।", "no.msg8":"तुम्हारा अस्वीकृति अनुरोध अस्वीकार कर दिया गया।",
    "no.msg9":"समिति ने तुम्हारी अस्वीकृति को अस्वीकार कर दिया।", "no.msg10":"नहीं बटन चैट छोड़ चुका है।",
    "no.msg11":"नहीं बटन ने इस्तीफा दे दिया है।", "no.msg12":"डार्लिंग प्राइमेट के वकील चैट में आ गए हैं।",
    "no.msg13":"प्यार की जीत। ♥", "no.msg14":"404: अस्वीकृति नहीं मिली।", "no.msg15":"सिस्टम त्रुटि: रोमांस का पता चला।",
    "no.msg16":"कृपया हाँ आज़माएं।"
  },
  ur: {
    "nav.brand":"ڈارلنگ پرائمیٹ", "nav.tag":"نجی • رومانوی • سرکاری",
    "nav.back":"پیچھے", "nav.continue":"جاری رکھیں", "nav.submit":"جمع کرائیں ♥",
    "hero.badge":"نجی درخواست اب کھلی ہے",
    "hero.headline":"کیا تم میرے ساتھ ڈیٹ پر چلو گی؟",
    "hero.desc":"ایک بہت اہم فیصلے کے لیے ایک چھوٹی سی درخواست۔ کوئی دباؤ نہیں، بس اچھا کھانا، بہتر ساتھ، اور شاید تھوڑا رومانس۔",
    "hero.micro":"صفر عزم۔ زیادہ سے زیادہ ویائبز۔ شاید۔",
    "hero.yes":"ہاں", "hero.no":"نہیں",
    "hero.float1":"✨ بس اچھی ویائبز", "hero.float2":"🍓 ایک ڈیٹ، پلیز؟", "hero.float3":"💌 انتہائی خفیہ",
    "hero.float4":"🐒 شریف آدمی جواب کا منتظر ہے", "hero.float5":"❤️ درخواست زیر التوا",
    "hero.yesToast":"شاندار فیصلہ۔ ♥",
    "profile.name":"ڈارلنگ پرائمیٹ", "profile.male":"مرد پرائمیٹ",
    "profile.quote":"فی الحال ایک انتہائی اہم ڈیٹ کے لیے درخواستیں قبول کی جا رہی ہیں۔",
    "profile.status.label":"تعلق کی حیثیت", "profile.status.value":"اس کے جواب کا منتظر",
    "profile.avail.label":"دستیابی", "profile.avail.value":"مشکوک طور پر دستیاب",
    "profile.romance.label":"رومانس کی سطح", "profile.romance.value":"انتہائی خفیہ",
    "profile.gentleman.label":"شریف آدمی کی حیثیت", "profile.gentleman.value":"تصدیق شدہ",
    "step1.eyebrow":"سب سے پہلی بات", "step1.question":"کیا تم ڈیٹ پر جانا چاہو گی؟",
    "step1.opt1.title":"بالکل", "step1.opt1.sub":"مجھے یہی امید تھی۔",
    "step1.opt2.title":"شاید...", "step1.opt2.sub":"اچھے کھانے سے مناؤ۔",
    "step1.opt3.title":"نہیں", "step1.opt3.sub":"میرا دل ابھی دستیاب نہیں ہے۔",
    "step2.eyebrow":"ایک دن منتخب کریں", "step2.question":"ہمارا چھوٹا سا ایڈونچر کب ہوگا؟",
    "step3.eyebrow":"موڈ منتخب کریں", "step3.question":"مکمل ڈیٹ کیسی لگے گی؟",
    "step3.opt1.title":"رومانوی ڈنر", "step3.opt1.sub":"اچھا کھانا، نرم روشنی، لمبی باتیں۔",
    "step3.opt2.title":"کافی اور سیر", "step3.opt2.sub":"سادہ، پرسکون، اور تھوڑا پیارا۔",
    "step3.opt3.title":"کچھ اچانک", "step3.opt3.sub":"کوئی منصوبہ نہیں۔ بس احساس کی پیروی کرو۔",
    "step3.opt4.title":"مووی نائٹ", "step3.opt4.sub":"ناشتہ، کمبل، اور کوئی رکاوٹ نہیں۔",
    "step4.eyebrow":"اہم سوال", "step4.question":"تم کتنی پرجوش ہو؟",
    "step4.opt1.sub":"میں ابھی سے لباس چن رہی ہوں۔", "step4.opt2.sub":"بہت پرجوش۔ نارمل لگنے کی کوشش۔",
    "step4.opt3.sub":"خاموشی سے پرجوش۔", "step4.opt4.sub":"دیکھتے ہیں یہ کہاں جاتا ہے۔",
    "step5.eyebrow":"آخری بات", "step5.question":"اس ڈیٹ کو کیا بہترین بنائے گا؟",
    "step5.placeholder":"بتاؤ اسے خاص کیا بنائے گا...",
    "step5.rave.label":"ریو ہینڈل", "step5.optional":"(اختیاری)", "step5.rave.placeholder":"انسٹاگرام، ریو، ڈسکارڈ وغیرہ۔",
    "validation.choose":"براہ کرم پہلے ایک جواب منتخب کریں۔", "validation.date":"براہ کرم پہلے ایک تاریخ منتخب کریں۔",
    "confirm.label":"درخواست موصول ہوگئی", "confirm.headline":"یہ سرکاری طور پر ایک ڈیٹ ہے۔",
    "confirm.desc":"تمہارے جوابات کا ڈارلنگ پرائمیٹ کمیٹی نے نہایت سنجیدگی سے جائزہ لیا ہے۔",
    "confirm.note":"شریف آدمی تمہارے فیصلے سے خوش ہے۔",
    "confirm.grid.answer":"جواب", "confirm.grid.date":"تاریخ", "confirm.grid.mood":"ڈیٹ اسٹائل",
    "confirm.grid.excitement":"جوش", "confirm.grid.note":"مکمل ڈیٹ نوٹ", "confirm.grid.rave":"ریو ہینڈل",
    "confirm.meta.probability":"رومانس کا امکان", "confirm.meta.probability.value":"مشکوک طور پر زیادہ",
    "confirm.meta.status":"ڈارلنگ پرائمیٹ کی حالت", "confirm.meta.status.value":"انتہائی خوش",
    "confirm.meta.committee":"کمیٹی کی حالت", "confirm.meta.committee.value":"بہت سنجیدہ",
    "confirm.viewCert":"سرٹیفکیٹ دیکھیں", "confirm.startOver":"دوبارہ شروع کریں ♥",
    "cert.brand":"ڈارلنگ پرائمیٹ", "cert.subbrand":"نجی رومانوی سند",
    "cert.title":"ڈیٹ کا سرٹیفکیٹ", "cert.titleSub":"سرکاری طور پر تصدیق شدہ",
    "cert.candidateName":"ڈارلنگ پرائمیٹ", "cert.candidateRole":"مرد رومانوی امیدوار",
    "cert.body1":"یہ سرٹیفکیٹ سرکاری طور پر تسلیم کرتا ہے کہ ڈارلنگ پرائمیٹ اور ذیل میں نامزد وصول کنندہ نے باہمی طور پر ایک رومانوی ڈیٹ کی دعوت قبول کی ہے۔",
    "cert.body2":"انتہائی خفیہ کمیٹی کے جائزے کے بعد، درخواست منظور کر لی گئی ہے۔",
    "cert.recipientLabel":"پیش کیا گیا", "cert.recipientDefault":"معزز ڈیٹ وصول کنندہ",
    "cert.detail.appNo":"درخواست نمبر", "cert.detail.certNo":"سرٹیفکیٹ نمبر",
    "cert.detail.issue":"اجراء کی تاریخ", "cert.detail.approved":"منظور شدہ تاریخ",
    "cert.detail.style":"ڈیٹ اسٹائل", "cert.detail.excitement":"جوش کی سطح", "cert.detail.rave":"ریو ہینڈل",
    "cert.notProvided":"فراہم نہیں کیا گیا",
    "cert.signatureName":"ڈارلنگ پرائمیٹ", "cert.signatureRole":"شریف آدمی",
    "cert.footer.issuedBy":"جاری کنندہ", "cert.footer.committee":"انتہائی سنجیدہ کمیٹی",
    "cert.footer.authorizedBy":"مجاز کردہ", "cert.footer.primate":"ڈارلنگ پرائمیٹ",
    "cert.download":"سرٹیفکیٹ ڈاؤن لوڈ کریں",
    "cert.sound.on":"آواز آن", "cert.sound.off":"آواز آف",
    "mood.dinner":"رومانوی ڈنر", "mood.coffee":"کافی اور سیر", "mood.spontaneous":"کچھ اچانک", "mood.movie":"مووی نائٹ",
    "answer.absolutely":"بالکل", "answer.maybe":"شاید...",
    "no.msg1":"اچھی کوشش 😌", "no.msg2":"غلط بٹن۔", "no.msg3":"تقریباً!", "no.msg4":"کائنات متفق نہیں۔",
    "no.msg5":"شریف آدمی احتراماً اختلاف کرتا ہے۔", "no.msg6":"ڈارلنگ پرائمیٹ نے ایک اور موقع مانگا ہے۔",
    "no.msg7":"مسترد شعبہ فی الحال بند ہے۔", "no.msg8":"تمہاری مسترد کرنے کی درخواست مسترد کر دی گئی۔",
    "no.msg9":"کمیٹی نے تمہاری مسترد کو مسترد کر دیا۔", "no.msg10":"نہیں بٹن چیٹ چھوڑ چکا ہے۔",
    "no.msg11":"نہیں بٹن نے استعفیٰ دے دیا ہے۔", "no.msg12":"ڈارلنگ پرائمیٹ کا وکیل چیٹ میں آ گیا ہے۔",
    "no.msg13":"محبت کی جیت۔ ♥", "no.msg14":"404: مسترد نہیں ملا۔", "no.msg15":"سسٹم ایرر: رومانس معلوم ہوا۔",
    "no.msg16":"براہ کرم ہاں آزمائیں۔"
  },
  ar: {
    "nav.brand":"دارلينغ برايمت", "nav.tag":"خاص • رومانسي • رسمي",
    "nav.back":"رجوع", "nav.continue":"متابعة", "nav.submit":"إرسال ♥",
    "hero.badge":"الطلب الخاص مفتوح الآن",
    "hero.headline":"هل توافقين على الخروج معي؟",
    "hero.desc":"طلب صغير لقرار مهم جدًا. لا ضغط، فقط طعام جيد، ورفقة أفضل، وربما القليل من الرومانسية.",
    "hero.micro":"التزام صفري. أقصى قدر من الأجواء الجميلة. ربما.",
    "hero.yes":"نعم", "hero.no":"لا",
    "hero.float1":"✨ أجواء جميلة فقط", "hero.float2":"🍓 موعد واحد، رجاءً؟", "hero.float3":"💌 سري للغاية",
    "hero.float4":"🐒 السيد بانتظار الرد", "hero.float5":"❤️ الطلب قيد الانتظار",
    "hero.yesToast":"قرار ممتاز. ♥",
    "profile.name":"دارلينغ برايمت", "profile.male":"برايمت ذكر",
    "profile.quote":"يتم حاليًا قبول الطلبات لموعد واحد بالغ الأهمية.",
    "profile.status.label":"الحالة العاطفية", "profile.status.value":"في انتظار ردها",
    "profile.avail.label":"التوفر", "profile.avail.value":"متاح بشكل مريب",
    "profile.romance.label":"مستوى الرومانسية", "profile.romance.value":"سري للغاية",
    "profile.gentleman.label":"صفة النبل", "profile.gentleman.value":"مؤكدة",
    "step1.eyebrow":"أولًا وقبل كل شيء", "step1.question":"هل تودين الخروج في موعد؟",
    "step1.opt1.title":"بالتأكيد", "step1.opt1.sub":"كنت أتمنى أن تقولي ذلك.",
    "step1.opt2.title":"ربما...", "step1.opt2.sub":"أقنعيني بطعام جيد.",
    "step1.opt3.title":"لا", "step1.opt3.sub":"قلبي غير متاح حاليًا.",
    "step2.eyebrow":"اختاري يومًا", "step2.question":"متى ستكون مغامرتنا الصغيرة؟",
    "step3.eyebrow":"اختاري الأجواء", "step3.question":"كيف يبدو الموعد المثالي؟",
    "step3.opt1.title":"عشاء رومانسي", "step3.opt1.sub":"طعام جيد، إضاءة هادئة، أحاديث طويلة.",
    "step3.opt2.title":"قهوة ونزهة", "step3.opt2.sub":"بسيط وهادئ ولطيف قليلاً.",
    "step3.opt3.title":"شيء عفوي", "step3.opt3.sub":"بلا خطة. فقط اتبعي الشعور.",
    "step3.opt4.title":"ليلة سينما", "step3.opt4.sub":"وجبات خفيفة، بطانيات، وبدون مقاطعات.",
    "step4.eyebrow":"سؤال مهم", "step4.question":"إلى أي مدى أنتِ متحمسة؟",
    "step4.opt1.sub":"أنا بالفعل أختار ملابسي.", "step4.opt2.sub":"متحمسة جدًا. أحاول التصرف بشكل طبيعي.",
    "step4.opt3.sub":"متحمسة بهدوء.", "step4.opt4.sub":"لنرَ إلى أين يقودنا هذا.",
    "step5.eyebrow":"شيء أخير", "step5.question":"ما الذي سيجعل هذا الموعد مثاليًا؟",
    "step5.placeholder":"أخبريني بما سيجعله مميزًا...",
    "step5.rave.label":"حسابات التواصل", "step5.optional":"(اختياري)", "step5.rave.placeholder":"إنستغرام، Rave، ديسكورد، إلخ.",
    "validation.choose":"يرجى اختيار إجابة أولاً.", "validation.date":"يرجى اختيار تاريخ أولاً.",
    "confirm.label":"تم استلام الطلب", "confirm.headline":"إنه رسميًا موعد.",
    "confirm.desc":"تمت مراجعة إجاباتك بعناية من قبل لجنة دارلينغ برايمت الجادة للغاية.",
    "confirm.note":"السيد سعيد بقرارك.",
    "confirm.grid.answer":"الإجابة", "confirm.grid.date":"التاريخ", "confirm.grid.mood":"نمط الموعد",
    "confirm.grid.excitement":"الحماس", "confirm.grid.note":"ملاحظة الموعد المثالي", "confirm.grid.rave":"حسابات التواصل",
    "confirm.meta.probability":"احتمالية الرومانسية", "confirm.meta.probability.value":"مرتفعة بشكل مريب",
    "confirm.meta.status":"حالة دارلينغ برايمت", "confirm.meta.status.value":"سعيد للغاية",
    "confirm.meta.committee":"حالة اللجنة", "confirm.meta.committee.value":"جادة جدًا",
    "confirm.viewCert":"عرض الشهادة", "confirm.startOver":"البدء من جديد ♥",
    "cert.brand":"دارلينغ برايمت", "cert.subbrand":"شهادة رومانسية خاصة",
    "cert.title":"شهادة الموعد", "cert.titleSub":"معتمدة رسميًا",
    "cert.candidateName":"دارلينغ برايمت", "cert.candidateRole":"مرشح رومانسي ذكر",
    "cert.body1":"تقر هذه الشهادة رسميًا بأن دارلينغ برايمت والمستلمة المذكورة أدناه قد قبلا دعوة موعد رومانسي بالتراضي.",
    "cert.body2":"بعد مراجعة سرية للغاية من قبل اللجنة الجادة للغاية، تمت الموافقة على الطلب.",
    "cert.recipientLabel":"مقدمة إلى", "cert.recipientDefault":"المستلمة الموقرة للموعد",
    "cert.detail.appNo":"رقم الطلب", "cert.detail.certNo":"رقم الشهادة",
    "cert.detail.issue":"تاريخ الإصدار", "cert.detail.approved":"تاريخ الموافقة",
    "cert.detail.style":"نمط الموعد", "cert.detail.excitement":"مستوى الحماس", "cert.detail.rave":"حسابات التواصل",
    "cert.notProvided":"غير مُقدَّم",
    "cert.signatureName":"دارلينغ برايمت", "cert.signatureRole":"السيد النبيل",
    "cert.footer.issuedBy":"صادرة عن", "cert.footer.committee":"اللجنة الجادة للغاية",
    "cert.footer.authorizedBy":"معتمدة من", "cert.footer.primate":"دارلينغ برايمت",
    "cert.download":"تنزيل الشهادة",
    "cert.sound.on":"الصوت مفعّل", "cert.sound.off":"الصوت متوقف",
    "mood.dinner":"عشاء رومانسي", "mood.coffee":"قهوة ونزهة", "mood.spontaneous":"شيء عفوي", "mood.movie":"ليلة سينما",
    "answer.absolutely":"بالتأكيد", "answer.maybe":"ربما...",
    "no.msg1":"محاولة جيدة 😌", "no.msg2":"زر خاطئ.", "no.msg3":"تقريبًا!", "no.msg4":"الكون لا يوافق.",
    "no.msg5":"السيد يعترض باحترام.", "no.msg6":"طلب دارلينغ برايمت فرصة أخرى.",
    "no.msg7":"قسم الرفض مغلق حاليًا.", "no.msg8":"تم رفض طلب رفضك.",
    "no.msg9":"رفضت اللجنة رفضك.", "no.msg10":"غادر زر لا المحادثة.",
    "no.msg11":"استقال زر لا.", "no.msg12":"دخل محامي دارلينغ برايمت المحادثة.",
    "no.msg13":"الحب ينتصر. ♥", "no.msg14":"404: الرفض غير موجود.", "no.msg15":"خطأ في النظام: تم اكتشاف رومانسية.",
    "no.msg16":"يرجى تجربة نعم بدلاً من ذلك."
  },
  tr: {
    "nav.brand":"Darling Primate", "nav.tag":"ÖZEL • ROMANTİK • RESMİ",
    "nav.back":"Geri", "nav.continue":"Devam et", "nav.submit":"Gönder ♥",
    "hero.badge":"Özel başvuru şu anda açık",
    "hero.headline":"Benimle bir randevuya çıkar mısın?",
    "hero.desc":"Çok önemli bir karar için ufacık bir başvuru. Baskı yok, sadece güzel yemek, daha iyi bir eşlik ve belki biraz romantizm.",
    "hero.micro":"Sıfır taahhüt. Maksimum keyif. Muhtemelen.",
    "hero.yes":"Evet", "hero.no":"Hayır",
    "hero.float1":"✨ sadece güzel enerji", "hero.float2":"🍓 bir randevu, lütfen?", "hero.float3":"💌 son derece gizli",
    "hero.float4":"🐒 centilmen cevabını bekliyor", "hero.float5":"❤️ başvuru beklemede",
    "hero.yesToast":"Mükemmel karar. ♥",
    "profile.name":"DARLING PRIMATE", "profile.male":"ERKEK PRİMAT",
    "profile.quote":"Şu anda son derece önemli bir randevu için başvurular kabul ediliyor.",
    "profile.status.label":"İlişki durumu", "profile.status.value":"Cevabını bekliyor",
    "profile.avail.label":"Müsaitlik", "profile.avail.value":"Şüpheli derecede müsait",
    "profile.romance.label":"Romantizm seviyesi", "profile.romance.value":"Son derece gizli",
    "profile.gentleman.label":"Centilmenlik durumu", "profile.gentleman.value":"Onaylandı",
    "step1.eyebrow":"Önce en önemlisi", "step1.question":"Bir randevuya çıkmak ister misin?",
    "step1.opt1.title":"Kesinlikle", "step1.opt1.sub":"Bunu söylemeni umuyordum.",
    "step1.opt2.title":"Belki...", "step1.opt2.sub":"Beni güzel bir yemekle ikna et.",
    "step1.opt3.title":"Hayır", "step1.opt3.sub":"Kalbim şu anda müsait değil.",
    "step2.eyebrow":"Bir gün seç", "step2.question":"Küçük maceramız ne zaman olsun?",
    "step3.eyebrow":"Havayı seç", "step3.question":"Mükemmel randevu nasıl olurdu?",
    "step3.opt1.title":"Romantik akşam yemeği", "step3.opt1.sub":"Güzel yemek, yumuşak ışıklar, uzun sohbetler.",
    "step3.opt2.title":"Kahve ve yürüyüş", "step3.opt2.sub":"Basit, sakin ve biraz tatlı.",
    "step3.opt3.title":"Spontane bir şey", "step3.opt3.sub":"Plan yok. Sadece hissi takip et.",
    "step3.opt4.title":"Film gecesi", "step3.opt4.sub":"Atıştırmalıklar, battaniyeler ve kesintisiz zaman.",
    "step4.eyebrow":"Önemli soru", "step4.question":"Ne kadar heyecanlısın?",
    "step4.opt1.sub":"Şimdiden kıyafet seçiyorum.", "step4.opt2.sub":"Çok heyecanlıyım. Normal görünmeye çalışıyorum.",
    "step4.opt3.sub":"Sessizce heyecanlıyım.", "step4.opt4.sub":"Bakalım bu nereye gidecek.",
    "step5.eyebrow":"Son bir şey", "step5.question":"Bu randevuyu mükemmel yapacak şey ne olurdu?",
    "step5.placeholder":"Onu özel kılacak şeyi söyle...",
    "step5.rave.label":"Rave Hesapları", "step5.optional":"(isteğe bağlı)", "step5.rave.placeholder":"Instagram, Rave, Discord vb.",
    "validation.choose":"Lütfen önce bir cevap seçin.", "validation.date":"Lütfen önce bir tarih seçin.",
    "confirm.label":"Başvuru alındı", "confirm.headline":"Bu resmen bir randevu.",
    "confirm.desc":"Cevapların, son derece ciddi Darling Primate komitesi tarafından dikkatle incelendi.",
    "confirm.note":"Centilmen kararından memnun.",
    "confirm.grid.answer":"Cevap", "confirm.grid.date":"Tarih", "confirm.grid.mood":"Randevu tarzı",
    "confirm.grid.excitement":"Heyecan", "confirm.grid.note":"Mükemmel randevu notu", "confirm.grid.rave":"Rave Hesapları",
    "confirm.meta.probability":"Romantizm olasılığı", "confirm.meta.probability.value":"Şüpheli derecede yüksek",
    "confirm.meta.status":"Darling Primate durumu", "confirm.meta.status.value":"Son derece mutlu",
    "confirm.meta.committee":"Komite durumu", "confirm.meta.committee.value":"Çok ciddi",
    "confirm.viewCert":"Sertifikayı Görüntüle", "confirm.startOver":"Baştan başla ♥",
    "cert.brand":"DARLING PRIMATE", "cert.subbrand":"ÖZEL ROMANTİK SERTİFİKASYON",
    "cert.title":"Randevu Sertifikası", "cert.titleSub":"RESMİ OLARAK ONAYLANMIŞTIR",
    "cert.candidateName":"Darling Primate", "cert.candidateRole":"Erkek Romantik Aday",
    "cert.body1":"Bu sertifika, Darling Primate ile aşağıda adı geçen alıcının karşılıklı olarak romantik bir randevu davetini kabul ettiğini resmen tanır.",
    "cert.body2":"Son derece gizli Komite'nin incelemesinin ardından, başvuru onaylanmıştır.",
    "cert.recipientLabel":"Sunulduğu kişi", "cert.recipientDefault":"Seçkin Randevu Alıcısı",
    "cert.detail.appNo":"Başvuru Numarası", "cert.detail.certNo":"Sertifika Numarası",
    "cert.detail.issue":"Düzenleme Tarihi", "cert.detail.approved":"Onaylanan Tarih",
    "cert.detail.style":"Randevu Tarzı", "cert.detail.excitement":"Heyecan Seviyesi", "cert.detail.rave":"Rave Hesapları",
    "cert.notProvided":"Belirtilmedi",
    "cert.signatureName":"Darling Primate", "cert.signatureRole":"Centilmen",
    "cert.footer.issuedBy":"Düzenleyen", "cert.footer.committee":"Son Derece Ciddi Komite",
    "cert.footer.authorizedBy":"Onaylayan", "cert.footer.primate":"Darling Primate",
    "cert.download":"Sertifikayı İndir",
    "cert.sound.on":"Ses açık", "cert.sound.off":"Ses kapalı",
    "mood.dinner":"Romantik akşam yemeği", "mood.coffee":"Kahve ve yürüyüş", "mood.spontaneous":"Spontane bir şey", "mood.movie":"Film gecesi",
    "answer.absolutely":"Kesinlikle", "answer.maybe":"Belki...",
    "no.msg1":"İyi deneme 😌", "no.msg2":"Yanlış buton.", "no.msg3":"Neredeyse!", "no.msg4":"Evren aynı fikirde değil.",
    "no.msg5":"Centilmen saygıyla katılmıyor.", "no.msg6":"Darling Primate bir şans daha istedi.",
    "no.msg7":"Red departmanı şu anda kapalı.", "no.msg8":"Reddetme talebin reddedildi.",
    "no.msg9":"Komite reddini reddetti.", "no.msg10":"Hayır butonu sohbetten ayrıldı.",
    "no.msg11":"Hayır butonu istifa etti.", "no.msg12":"Darling Primate'in avukatı sohbete katıldı.",
    "no.msg13":"Aşk kazanır. ♥", "no.msg14":"404: Reddetme bulunamadı.", "no.msg15":"Sistem hatası: romantizm tespit edildi.",
    "no.msg16":"Lütfen bunun yerine EVET dene."
  }
};

const RTL_LANGS = ["ar","ur"];
let currentLang = "en";

function t(key){
  const dict = translations[currentLang] || translations.en;
  return dict[key] || translations.en[key] || key;
}

function applyTranslations(){
  document.documentElement.lang = currentLang;
  document.documentElement.dir = RTL_LANGS.includes(currentLang) ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  // language button label
  const labels = { en:"EN", bn:"বাং", hi:"हिं", ur:"اردو", ar:"عربي", tr:"TR" };
  const btnLabel = document.getElementById("langBtnLabel");
  if (btnLabel) btnLabel.textContent = labels[currentLang] || "EN";

  document.querySelectorAll("#langMenu li").forEach(li=>{
    li.setAttribute("aria-selected", li.dataset.lang === currentLang ? "true" : "false");
  });

  // refresh dynamic bits that depend on language
  if (typeof refreshDynamicText === "function") refreshDynamicText();
}

function setLanguage(lang){
  if (!translations[lang]) return;
  currentLang = lang;
  try{ localStorage.setItem("dp_language", lang); }catch(e){}
  applyTranslations();
}

/* =========================================================
   LANGUAGE SWITCHER UI
========================================================= */
const langSwitch = document.getElementById("langSwitch");
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", (e)=>{
  e.stopPropagation();
  const isOpen = langSwitch.getAttribute("data-open") === "true";
  langSwitch.setAttribute("data-open", isOpen ? "false" : "true");
  langBtn.setAttribute("aria-expanded", String(!isOpen));
});
document.addEventListener("click", ()=>{
  langSwitch.setAttribute("data-open","false");
  langBtn.setAttribute("aria-expanded","false");
});
langMenu.addEventListener("click", (e)=>{
  const li = e.target.closest("li[data-lang]");
  if (!li) return;
  setLanguage(li.dataset.lang);
  langSwitch.setAttribute("data-open","false");
});

/* =========================================================
   PARTICLES (ambient)
========================================================= */
(function initParticles(){
  const container = document.getElementById("particles");
  if (!container) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  const count = window.innerWidth < 640 ? 10 : 20;
  for (let i=0;i<count;i++){
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random()*100 + "%";
    p.style.bottom = (Math.random()*30) + "%";
    p.style.animationDelay = (Math.random()*9) + "s";
    p.style.animationDuration = (7 + Math.random()*5) + "s";
    container.appendChild(p);
  }
})();

/* =========================================================
   TOAST
========================================================= */
const toastEl = document.getElementById("toast");
let toastTimer = null;
function showToast(text){
  toastEl.textContent = text;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toastEl.classList.remove("is-visible"), 1800);
}

/* =========================================================
   EVASIVE NO BUTTON (playful, but always eventually catchable)
========================================================= */
function setupEvasiveButton(btn, opts){
  opts = opts || {};
  const maxEscapes = opts.maxEscapes != null ? opts.maxEscapes : 3;
  const onCaught = opts.onCaught || function(){};
  const msgKeys = ["no.msg1","no.msg2","no.msg3","no.msg4","no.msg5","no.msg6","no.msg7","no.msg8",
                    "no.msg9","no.msg10","no.msg11","no.msg12","no.msg13","no.msg14","no.msg15","no.msg16"];

  let escapeCount = 0;
  let armed = false; // once armed, button is catchable / clickable normally
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function safeMargins(){
    return { top: 90, bottom: 90, side: 20 };
  }

  function moveButton(){
    if (armed) return;
    const m = safeMargins();
    const rect = btn.getBoundingClientRect();
    const w = rect.width || 120;
    const h = rect.height || 52;
    const maxX = Math.max(m.side, window.innerWidth - w - m.side);
    const maxY = Math.max(m.top, window.innerHeight - h - m.bottom);
    const x = m.side + Math.random() * (maxX - m.side);
    const y = m.top + Math.random() * (maxY - m.top);

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";

    if (!reduce){
      const rot = (Math.random()*16 - 8).toFixed(1);
      btn.style.transform = `rotate(${rot}deg) scale(1)`;
      btn.style.transition = "top 0.35s cubic-bezier(0.34,1.56,0.64,1), left 0.35s cubic-bezier(0.34,1.56,0.64,1), transform 0.3s ease";
    }

    escapeCount++;
    const key = msgKeys[Math.min(escapeCount-1, msgKeys.length-1)];
    showToast(t(key));

    if (escapeCount >= maxEscapes){
      armed = true;
      btn.classList.add("is-armed");
      // return to normal document flow position on next paint
      requestAnimationFrame(()=>{
        btn.style.position = "";
        btn.style.left = "";
        btn.style.top = "";
        btn.style.transform = "";
      });
    }
  }

  // Initialize base position (relative/static) until first evade
  btn.classList.remove("is-armed");

  function handleEvadeEvent(e){
    if (armed) return; // let real click happen
    e.preventDefault();
    e.stopPropagation();
    moveButton();
  }

  btn.addEventListener("pointerdown", handleEvadeEvent, { passive:false });
  btn.addEventListener("pointerenter", (e)=>{
    // only evade on fine pointers (mouse) via hover-intent; touch handled by pointerdown
    if (e.pointerType === "mouse") handleEvadeEvent(e);
  });
  btn.addEventListener("click", (e)=>{
    if (!armed){
      e.preventDefault();
      e.stopPropagation();
      moveButton();
      return;
    }
    onCaught(e);
  });

  return {
    reset(){
      escapeCount = 0;
      armed = false;
      btn.classList.remove("is-armed");
      btn.style.position = "";
      btn.style.left = "";
      btn.style.top = "";
      btn.style.transform = "";
    }
  };
}

/* =========================================================
   VIEW / STEP NAVIGATION
========================================================= */
const heroSection = document.getElementById("heroSection");
const applicationSection = document.getElementById("applicationSection");
const confirmationSection = document.getElementById("confirmationSection");
const certificateSection = document.getElementById("certificateSection");

function switchView(fromEl, toEl){
  if (fromEl){
    fromEl.classList.remove("view-enter");
    fromEl.classList.add("view-exit");
    setTimeout(()=>{
      fromEl.hidden = true;
      fromEl.classList.remove("view-exit");
    }, 380);
  }
  setTimeout(()=>{
    toEl.hidden = false;
    toEl.classList.add("view-enter");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(()=> toEl.classList.remove("view-enter"), 650);
  }, fromEl ? 200 : 0);
}

/* =========================================================
   APPLICATION STATE
========================================================= */
const application = {
  answer: "",
  date: "",
  mood: "",
  excitement: "",
  note: "",
  raveHandles: ""
};

let currentStep = 1;
const totalSteps = 5;

const stepEls = Array.from(document.querySelectorAll(".step"));
const progressFill = document.getElementById("progressFill");
const stepCurrentEl = document.getElementById("stepCurrent");
const stepTotalEl = document.getElementById("stepTotal");
const backBtn = document.getElementById("backBtn");
const continueBtn = document.getElementById("continueBtn");
const dateField = document.getElementById("dateField");
const noteField = document.getElementById("noteField");
const raveField = document.getElementById("raveField");

stepTotalEl.textContent = String(totalSteps).padStart(2,"0");

function pad2(n){ return String(n).padStart(2,"0"); }

function renderStep(){
  stepEls.forEach(el=>{
    const n = parseInt(el.dataset.step,10);
    el.hidden = n !== currentStep;
    if (n === currentStep) el.classList.add("step-enter");
  });
  stepCurrentEl.textContent = pad2(currentStep);
  progressFill.style.width = (currentStep/totalSteps*100) + "%";
  backBtn.style.visibility = currentStep === 1 ? "hidden" : "visible";
  continueBtn.textContent = currentStep === totalSteps ? t("nav.submit") : t("nav.continue");
  clearErrors();
}

function clearErrors(){
  document.querySelectorAll(".step__error").forEach(e=> e.hidden = true);
}

function showError(step){
  const err = document.getElementById("error"+step);
  if (err) err.hidden = false;
}

// Option selection (steps 1,3,4)
document.querySelectorAll(".options[data-field]").forEach(group=>{
  const field = group.dataset.field;
  group.addEventListener("click",(e)=>{
    const btn = e.target.closest(".option");
    if (!btn || btn.id === "step1NoOption") return;
    group.querySelectorAll(".option").forEach(o=> o.classList.remove("is-selected"));
    btn.classList.add("is-selected");
    application[field] = btn.dataset.value;
  });
});

// Step 1 decoy NO option — evasive like the hero NO button
let step1NoEvasive = null;
const step1NoBtn = document.getElementById("step1NoOption");
if (step1NoBtn){
  step1NoEvasive = setupEvasiveButton(step1NoBtn, {
    maxEscapes: 2,
    onCaught: ()=>{
      document.querySelectorAll('.options[data-field="answer"] .option').forEach(o=> o.classList.remove("is-selected"));
      step1NoBtn.classList.add("is-selected");
      application.answer = "no-acknowledged";
      showToast(t("no.msg13"));
    }
  });
}

// min date = tomorrow
(function setMinDate(){
  const d = new Date();
  d.setDate(d.getDate()+1);
  const min = d.toISOString().split("T")[0];
  dateField.setAttribute("min", min);
})();

continueBtn.addEventListener("click", ()=>{
  // sync fields
  if (currentStep === 2) application.date = dateField.value;
  if (currentStep === 5){
    application.note = noteField.value.trim();
    application.raveHandles = raveField.value.trim();
  }

  const valid = currentStep === 1 ? !!application.answer
              : currentStep === 2 ? !!dateField.value
              : currentStep === 3 ? !!application.mood
              : currentStep === 4 ? !!application.excitement
              : true;

  if (!valid){
    showError(currentStep);
    return;
  }

  if (currentStep < totalSteps){
    currentStep++;
    renderStep();
    persistProgress();
  } else {
    submitApplication();
  }
});

backBtn.addEventListener("click", ()=>{
  if (currentStep > 1){
    currentStep--;
    renderStep();
    persistProgress();
  }
});

function persistProgress(){
  try{
    localStorage.setItem("dp_progress", JSON.stringify({ step: currentStep, application }));
  }catch(e){}
}

/* =========================================================
   HERO YES / NO
========================================================= */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

setupEvasiveButton(noBtn, {
  maxEscapes: 4,
  onCaught: ()=>{
    showToast(t("no.msg13"));
    setTimeout(()=>{ startApplication(); }, 500);
  }
});

yesBtn.addEventListener("click", ()=>{
  showToast(t("hero.yesToast"));
  setTimeout(()=> startApplication(), 550);
});

function startApplication(){
  currentStep = 1;
  renderStep();
  switchView(heroSection, applicationSection);
}

/* =========================================================
   SUBMIT / CONFIRMATION
========================================================= */
let applicationNumber = "";
let certificateNumber = "";

function randomCode(len){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i=0;i<len;i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}

function formatDateHuman(isoStr){
  if (!isoStr) return "—";
  try{
    const d = new Date(isoStr + "T00:00:00");
    const localeMap = { en:"en-US", bn:"bn-BD", hi:"hi-IN", ur:"ur-PK", ar:"ar-EG", tr:"tr-TR" };
    return d.toLocaleDateString(localeMap[currentLang] || "en-US", { year:"numeric", month:"long", day:"numeric" });
  }catch(e){ return isoStr; }
}

function moodLabel(val){
  const map = { dinner:"mood.dinner", coffee:"mood.coffee", spontaneous:"mood.spontaneous", movie:"mood.movie" };
  return map[val] ? t(map[val]) : "—";
}
function answerLabel(val){
  if (val === "absolutely") return t("answer.absolutely");
  if (val === "maybe") return t("answer.maybe");
  if (val === "no-acknowledged") return t("answer.absolutely");
  return "—";
}

const sumAnswer = document.getElementById("sumAnswer");
const sumDate = document.getElementById("sumDate");
const sumMood = document.getElementById("sumMood");
const sumExcitement = document.getElementById("sumExcitement");
const sumNote = document.getElementById("sumNote");
const sumRave = document.getElementById("sumRave");
const appNumberEl = document.getElementById("appNumber");

function submitApplication(){
  applicationNumber = "DP-" + randomCode(6);
  certificateNumber = "DP-CERT-" + randomCode(6);

  appNumberEl.textContent = applicationNumber;
  sumAnswer.textContent = answerLabel(application.answer);
  sumDate.textContent = formatDateHuman(application.date);
  sumMood.textContent = moodLabel(application.mood);
  sumExcitement.textContent = application.excitement ? application.excitement + "%" : "—";
  sumNote.textContent = application.note || "—";
  sumRave.textContent = application.raveHandles || t("cert.notProvided");

  try{ localStorage.removeItem("dp_progress"); }catch(e){}

  switchView(applicationSection, confirmationSection);
}

/* =========================================================
   CERTIFICATE VIEW
========================================================= */
const certRecipient = document.getElementById("certRecipient");
const certAppNo = document.getElementById("certAppNo");
const certCertNo = document.getElementById("certCertNo");
const certIssueDate = document.getElementById("certIssueDate");
const certApprovedDate = document.getElementById("certApprovedDate");
const certStyle = document.getElementById("certStyle");
const certExcitement = document.getElementById("certExcitement");
const certRave = document.getElementById("certRave");
const certFooterNo = document.getElementById("certFooterNo");

function populateCertificate(){
  certRecipient.textContent = t("cert.recipientDefault");
  certAppNo.textContent = applicationNumber;
  certCertNo.textContent = certificateNumber;
  certIssueDate.textContent = formatDateHuman(new Date().toISOString().split("T")[0]);
  certApprovedDate.textContent = formatDateHuman(application.date);
  certStyle.textContent = moodLabel(application.mood);
  certExcitement.textContent = application.excitement ? application.excitement + "%" : "—";
  certRave.textContent = application.raveHandles || t("cert.notProvided");
  certFooterNo.textContent = "Certificate No. " + certificateNumber;
}

document.getElementById("viewCertBtn").addEventListener("click", ()=>{
  populateCertificate();
  switchView(confirmationSection, certificateSection);
  enterCertificateAudio();
});

/* =========================================================
   CERTIFICATE AUDIO
   Romantic Background.mp3 loops softly under the certificate.
   Ending show audience clapping.mp3 plays once as a reveal sting.
========================================================= */
const bgMusic = document.getElementById("bgMusic");
const applauseSound = document.getElementById("applauseSound");
const soundToggleBtn = document.getElementById("soundToggleBtn");
const soundToggleIcon = document.getElementById("soundToggleIcon");

const BG_MUSIC_SRC = "assets/Romantic Background.mp3";
const APPLAUSE_SRC = "assets/Ending show audience clapping.mp3";
const BG_MUSIC_TARGET_VOLUME = 0.35;

let soundEnabled = true;
let audioReady = false;
let bgFadeTimer = null;

function ensureAudioSources(){
  if (audioReady) return;
  try{
    bgMusic.src = encodeURI(BG_MUSIC_SRC);
    applauseSound.src = encodeURI(APPLAUSE_SRC);
    bgMusic.volume = 0;
    applauseSound.volume = 0.85;
    audioReady = true;
  }catch(e){}
}

function fadeAudio(el, to, duration){
  clearInterval(bgFadeTimer);
  const steps = 20;
  const stepTime = duration / steps;
  const start = el.volume;
  const delta = (to - start) / steps;
  let i = 0;
  bgFadeTimer = setInterval(()=>{
    i++;
    el.volume = Math.max(0, Math.min(1, start + delta*i));
    if (i >= steps){
      clearInterval(bgFadeTimer);
      el.volume = to;
    }
  }, stepTime);
}

function enterCertificateAudio(){
  ensureAudioSources();
  if (!soundEnabled) return;

  // Reveal sting
  try{
    applauseSound.currentTime = 0;
    applauseSound.play().catch(()=>{});
  }catch(e){}

  // Romantic loop, fading in under the applause
  try{
    bgMusic.currentTime = 0;
    bgMusic.volume = 0;
    bgMusic.play().then(()=>{
      fadeAudio(bgMusic, BG_MUSIC_TARGET_VOLUME, 1800);
    }).catch(()=>{});
  }catch(e){}
}

function exitCertificateAudio(){
  fadeAudio(bgMusic, 0, 500);
  setTimeout(()=>{
    try{ bgMusic.pause(); }catch(e){}
  }, 520);
  try{ applauseSound.pause(); }catch(e){}
}

soundToggleBtn.addEventListener("click", ()=>{
  soundEnabled = !soundEnabled;
  soundToggleBtn.setAttribute("aria-pressed", String(soundEnabled));
  soundToggleIcon.textContent = soundEnabled ? "🔊" : "🔇";
  const labelKey = soundEnabled ? "cert.sound.on" : "cert.sound.off";
  document.getElementById("soundToggleLabel").textContent = t(labelKey);

  if (soundEnabled){
    ensureAudioSources();
    try{
      bgMusic.play().then(()=> fadeAudio(bgMusic, BG_MUSIC_TARGET_VOLUME, 800)).catch(()=>{});
    }catch(e){}
  } else {
    exitCertificateAudio();
  }
});

/* =========================================================
   START OVER
========================================================= */
function resetApplication(){
  application.answer = "";
  application.date = "";
  application.mood = "";
  application.excitement = "";
  application.note = "";
  application.raveHandles = "";
  currentStep = 1;
  dateField.value = "";
  noteField.value = "";
  raveField.value = "";
  document.querySelectorAll(".option.is-selected").forEach(o=> o.classList.remove("is-selected"));
  if (step1NoEvasive) step1NoEvasive.reset();
  try{ localStorage.removeItem("dp_progress"); }catch(e){}
}

document.getElementById("startOverBtn1").addEventListener("click", ()=>{
  resetApplication();
  switchView(confirmationSection, heroSection);
});
document.getElementById("startOverBtn2").addEventListener("click", ()=>{
  exitCertificateAudio();
  resetApplication();
  switchView(certificateSection, heroSection);
});

/* =========================================================
   CERTIFICATE DOWNLOAD (canvas rendering)
========================================================= */
const downloadBtn = document.getElementById("downloadCertBtn");
downloadBtn.addEventListener("click", renderCertificateToCanvas);

function loadImage(src){
  return new Promise((resolve,reject)=>{
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = ()=> resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function roundedRectPath(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}

async function renderCertificateToCanvas(){
  const S = 1200;
  const canvas = document.getElementById("certCanvas");
  canvas.width = S; canvas.height = S;
  const ctx = canvas.getContext("2d");

  const gold = "#B8934F";
  const ink = "#241A12";
  const inkMuted = "#4a3a26";
  const goldText = "#8A6423";
  const burgundy = "#6d0f28";

  // background
  const bgGrad = ctx.createLinearGradient(0,0,0,S);
  bgGrad.addColorStop(0,"#F6EFE1");
  bgGrad.addColorStop(1,"#F1E7D3");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0,0,S,S);

  // subtle radial washes
  let rg = ctx.createRadialGradient(S*0.18,S*0.12,10,S*0.18,S*0.12,S*0.45);
  rg.addColorStop(0,"rgba(217,173,99,0.08)");
  rg.addColorStop(1,"rgba(217,173,99,0)");
  ctx.fillStyle = rg; ctx.fillRect(0,0,S,S);

  rg = ctx.createRadialGradient(S*0.85,S*0.9,10,S*0.85,S*0.9,S*0.5);
  rg.addColorStop(0,"rgba(120,20,45,0.06)");
  rg.addColorStop(1,"rgba(120,20,45,0)");
  ctx.fillStyle = rg; ctx.fillRect(0,0,S,S);

  // watermark DP
  ctx.save();
  ctx.globalAlpha = 0.045;
  ctx.fillStyle = "#785014";
  ctx.font = "800 460px 'Playfair Display', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("DP", S/2, S/2);
  ctx.restore();

  // outer border
  const bm = S*0.032;
  ctx.strokeStyle = gold;
  ctx.lineWidth = 3;
  ctx.strokeRect(bm,bm,S-bm*2,S-bm*2);

  // inner hairline
  ctx.strokeStyle = "rgba(184,147,79,0.55)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(bm+7,bm+7,S-(bm+7)*2,S-(bm+7)*2);

  // corner ornaments
  const cs = 32;
  ctx.strokeStyle = gold; ctx.lineWidth = 3;
  function corner(x,y,dx,dy){
    ctx.beginPath();
    ctx.moveTo(x, y+dy*cs);
    ctx.lineTo(x,y);
    ctx.lineTo(x+dx*cs,y);
    ctx.stroke();
  }
  corner(bm,bm,1,1);
  corner(S-bm,bm,-1,1);
  corner(bm,S-bm,1,-1);
  corner(S-bm,S-bm,-1,-1);

  const cx = S/2;
  let y = S*0.135;

  // emblem circle
  ctx.beginPath();
  ctx.arc(cx, y, 26, 0, Math.PI*2);
  ctx.strokeStyle = gold; ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.fillStyle = goldText;
  ctx.font = "700 17px 'Playfair Display', serif";
  ctx.textAlign="center"; ctx.textBaseline="middle";
  ctx.fillText("DP", cx, y);
  ctx.fillStyle = burgundy;
  ctx.font = "14px Georgia, serif";
  ctx.fillText("♥", cx+20, y+18);

  y += 52;
  ctx.fillStyle = ink;
  ctx.font = "700 30px 'Playfair Display', serif";
  ctx.fillText(t("cert.brand"), cx, y);

  y += 26;
  ctx.fillStyle = goldText;
  ctx.font = "700 13px Inter, sans-serif";
  ctx.save();
  const spacedSub = t("cert.subbrand").split("").join("\u200a\u200a");
  ctx.fillText(t("cert.subbrand"), cx, y);
  ctx.restore();

  y += 22;
  ctx.strokeStyle = "rgba(184,147,79,0.6)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx-70,y); ctx.lineTo(cx+70,y); ctx.stroke();

  y += 52;
  ctx.fillStyle = ink;
  ctx.font = "italic 700 46px 'Playfair Display', serif";
  ctx.fillText(t("cert.title"), cx, y);

  y += 26;
  ctx.fillStyle = burgundy;
  ctx.font = "700 14px Inter, sans-serif";
  ctx.fillText(t("cert.titleSub"), cx, y);

  // portrait
  y += 56;
  const portR = 62;
  try{
    const img = await loadImage("assets/primate.jpg");
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, y+portR, portR, 0, Math.PI*2);
    ctx.closePath();
    ctx.clip();
    // cover-fit draw
    const iw = img.width, ih = img.height;
    const size = Math.min(iw, ih);
    const sx = (iw-size)/2, sy=(ih-size)/2;
    ctx.drawImage(img, sx, sy, size, size, cx-portR, y, portR*2, portR*2);
    ctx.restore();
    ctx.beginPath();
    ctx.arc(cx, y+portR, portR, 0, Math.PI*2);
    ctx.strokeStyle = gold; ctx.lineWidth = 4;
    ctx.stroke();
  }catch(e){}

  y += portR*2 + 26;
  ctx.fillStyle = ink;
  ctx.font = "700 18px 'Playfair Display', serif";
  ctx.fillText(t("cert.candidateName"), cx, y);
  y += 20;
  ctx.fillStyle = goldText;
  ctx.font = "700 11px Inter, sans-serif";
  ctx.fillText(t("cert.candidateRole").toUpperCase(), cx, y);

  // body text (wrapped)
  y += 42;
  ctx.fillStyle = inkMuted;
  ctx.font = "15px Inter, sans-serif";
  y = wrapText(ctx, t("cert.body1"), cx, y, 780, 22);
  y += 6;
  y = wrapText(ctx, t("cert.body2"), cx, y, 780, 22);

  // recipient
  y += 34;
  ctx.fillStyle = goldText;
  ctx.font = "700 12px Inter, sans-serif";
  ctx.fillText(t("cert.recipientLabel").toUpperCase(), cx, y);
  y += 34;
  ctx.fillStyle = burgundy;
  ctx.font = "italic 600 34px 'Cormorant Garamond', serif";
  ctx.fillText(t("cert.recipientDefault"), cx, y);

  // details grid
  y += 50;
  const details = [
    [t("cert.detail.appNo"), applicationNumber || "—"],
    [t("cert.detail.certNo"), certificateNumber || "—"],
    [t("cert.detail.issue"), formatDateHuman(new Date().toISOString().split("T")[0])],
    [t("cert.detail.approved"), formatDateHuman(application.date)],
    [t("cert.detail.style"), moodLabel(application.mood)],
    [t("cert.detail.excitement"), application.excitement ? application.excitement+"%" : "—"]
  ];
  const gridLeft = cx - 390;
  const colW = 390;
  ctx.textAlign = "left";
  details.forEach((d,i)=>{
    const col = i % 2;
    const row = Math.floor(i/2);
    const dx = gridLeft + col*colW;
    const dy = y + row*58;
    ctx.fillStyle = goldText;
    ctx.font = "700 10.5px Inter, sans-serif";
    ctx.fillText(d[0].toUpperCase(), dx, dy);
    ctx.fillStyle = ink;
    ctx.font = "600 15px Inter, sans-serif";
    ctx.fillText(d[1], dx, dy+22);
  });
  y += 58*3;

  ctx.fillStyle = goldText;
  ctx.font = "700 10.5px Inter, sans-serif";
  ctx.fillText(t("cert.detail.rave").toUpperCase(), gridLeft, y);
  ctx.fillStyle = ink;
  ctx.font = "600 15px Inter, sans-serif";
  ctx.fillText(application.raveHandles || t("cert.notProvided"), gridLeft, y+22);

  // footer row: signature + seal
  const footY = S - bm - 118;
  ctx.textAlign = "left";
  ctx.strokeStyle = ink;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  const sigX = gridLeft, sigW = 220;
  ctx.moveTo(sigX, footY);
  ctx.bezierCurveTo(sigX+18,footY-40, sigX+30,footY-8, sigX+42,footY-20);
  ctx.bezierCurveTo(sigX+55,footY-32, sigX+60,footY-2, sigX+72,footY-10);
  ctx.bezierCurveTo(sigX+88,footY-20, sigX+92,footY+6, sigX+104,footY-4);
  ctx.bezierCurveTo(sigX+120,footY-18, sigX+128,footY-30, sigX+142,footY-16);
  ctx.bezierCurveTo(sigX+156,footY-2, sigX+160,footY-24, sigX+172,footY-8);
  ctx.bezierCurveTo(sigX+186,footY+8, sigX+196,footY-14, sigX+208,footY-6);
  ctx.stroke();

  ctx.strokeStyle = goldText;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(sigX, footY+16); ctx.lineTo(sigX+sigW, footY+16); ctx.stroke();

  ctx.fillStyle = ink;
  ctx.font = "700 15px 'Playfair Display', serif";
  ctx.fillText(t("cert.signatureName"), sigX, footY+38);
  ctx.fillStyle = goldText;
  ctx.font = "700 11px Inter, sans-serif";
  ctx.fillText(t("cert.signatureRole").toUpperCase(), sigX, footY+56);

  // seal
  const sealCx = cx + 330, sealCy = footY - 20, sealR = 68;
  ctx.beginPath(); ctx.arc(sealCx, sealCy, sealR, 0, Math.PI*2); ctx.strokeStyle = gold; ctx.lineWidth=2.5; ctx.stroke();
  ctx.beginPath(); ctx.arc(sealCx, sealCy, sealR-10, 0, Math.PI*2); ctx.strokeStyle = "rgba(184,147,79,0.7)"; ctx.lineWidth=1; ctx.stroke();
  ctx.beginPath(); ctx.arc(sealCx, sealCy, sealR-30, 0, Math.PI*2); ctx.fillStyle="rgba(184,147,79,0.08)"; ctx.fill();
  ctx.strokeStyle = gold; ctx.lineWidth=1.4; ctx.stroke();
  ctx.fillStyle = burgundy;
  ctx.textAlign = "center";
  ctx.font = "700 30px 'Playfair Display', serif";
  ctx.fillText("DP", sealCx, sealCy-6);
  ctx.font = "18px Georgia, serif";
  ctx.fillText("♥", sealCx, sealCy+22);
  // seal circular microtext (approx via rotated chars)
  drawCircularText(ctx, "DARLING PRIMATE • OFFICIALLY CERTIFIED • ", sealCx, sealCy, sealR-19, goldText, 9);

  // micro footer
  const microY = S - bm - 26;
  ctx.strokeStyle = "rgba(184,147,79,0.35)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(bm+40, microY-16); ctx.lineTo(S-bm-40, microY-16); ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = goldText;
  ctx.font = "10px Inter, sans-serif";
  ctx.fillText(t("cert.footer.issuedBy")+": "+t("cert.footer.committee"), bm+40, microY);
  ctx.textAlign = "center";
  ctx.fillText(t("cert.footer.authorizedBy")+": "+t("cert.footer.primate"), cx, microY);
  ctx.textAlign = "right";
  ctx.fillText("Certificate No. "+certificateNumber, S-bm-40, microY);

  // trigger download
  const link = document.createElement("a");
  link.download = "darling-primate-certificate.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function wrapText(ctx, text, cx, y, maxWidth, lineHeight){
  const words = text.split(" ");
  let line = "";
  const lines = [];
  for (let i=0;i<words.length;i++){
    const test = line + words[i] + " ";
    if (ctx.measureText(test).width > maxWidth && line !== ""){
      lines.push(line.trim());
      line = words[i] + " ";
    } else {
      line = test;
    }
  }
  lines.push(line.trim());
  ctx.textAlign = "center";
  lines.forEach((l,i)=>{
    ctx.fillText(l, cx, y + i*lineHeight);
  });
  return y + lines.length*lineHeight;
}

function drawCircularText(ctx, text, cx, cy, radius, color, fontSize){
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = "700 "+fontSize+"px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const chars = text.split("");
  const anglePerChar = (Math.PI*1.7) / chars.length;
  let angle = -Math.PI/2 - (anglePerChar*chars.length)/2 + Math.PI*1.0;
  chars.forEach(ch=>{
    ctx.save();
    ctx.translate(cx + radius*Math.cos(angle), cy + radius*Math.sin(angle));
    ctx.rotate(angle + Math.PI/2);
    ctx.fillText(ch, 0, 0);
    ctx.restore();
    angle += anglePerChar;
  });
  ctx.restore();
}

/* =========================================================
   DYNAMIC TEXT REFRESH ON LANGUAGE CHANGE
========================================================= */
function refreshDynamicText(){
  continueBtn.textContent = currentStep === totalSteps ? t("nav.submit") : t("nav.continue");
  if (!confirmationSection.hidden){
    sumAnswer.textContent = answerLabel(application.answer);
    sumDate.textContent = formatDateHuman(application.date);
    sumMood.textContent = moodLabel(application.mood);
    sumRave.textContent = application.raveHandles || t("cert.notProvided");
  }
  if (!certificateSection.hidden){
    populateCertificate();
  }
  const soundLabelEl = document.getElementById("soundToggleLabel");
  if (soundLabelEl){
    soundLabelEl.textContent = t(soundEnabled ? "cert.sound.on" : "cert.sound.off");
  }
}

/* =========================================================
   INIT
========================================================= */
(function init(){
  let savedLang = "en";
  try{
    const stored = localStorage.getItem("dp_language");
    if (stored && translations[stored]) savedLang = stored;
  }catch(e){}
  currentLang = savedLang;
  applyTranslations();
  renderStep();

  // restore progress (optional)
  try{
    const raw = localStorage.getItem("dp_progress");
    if (raw){
      const saved = JSON.parse(raw);
      if (saved && saved.application){
        Object.assign(application, saved.application);
      }
    }
  }catch(e){}
})();

})();
