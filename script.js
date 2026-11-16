"use strict";

const STORAGE_KEY = "mantraLekhan.pages.v1";
const CUSTOM_MANTRAS_KEY = "mantraLekhan.customMantras.v1";
const LANGUAGE_KEY = "mantraLekhan.language.v1";
const THEME_KEY = "mantraLekhan.theme.v1";
const TOTAL_LINES = 30;

const languages = {
  hi: "hi-IN", en: "en-IN", sa: "sa-IN", bn: "bn-IN", as: "as-IN", gu: "gu-IN",
  mr: "mr-IN", pa: "pa-IN", or: "or-IN", ta: "ta-IN", te: "te-IN", kn: "kn-IN",
  ml: "ml-IN", ur: "ur-IN", ks: "ks-IN", kok: "kok-IN", sd: "sd-IN", doi: "doi-IN",
  mai: "mai-IN", mni: "mni-IN", brx: "brx-IN", sat: "sat-IN", ne: "ne-NP", other: "en-IN"
};

const translations = {
  hi: {
    brand: "मंत्र लेखन", brandNote: "लिखने के लिए एक शांत स्थान", home: "होम", start: "मंत्र लेखन शुरू करें",
    saved: "मेरे सहेजे पृष्ठ", about: "परिचय", language: "भाषा", welcome: "शांत मन से, अपनी गति से",
    themeToggleAria: "रंग थीम बदलें", themeSaveError: "थीम सेटिंग इस ब्राउज़र में सहेजी नहीं जा सकी।",
    heroTitle: "अपना मंत्र लिखें, एक पंक्ति में", heroDescription: "भक्ति के लिए थोड़ा समय निकालें। मन से लिखें, अपनी प्रगति सहेजें और जब चाहें लौटें।",
    startWriting: "लिखना शुरू करें", beginPractice: "अपना अभ्यास शुरू करें", beginDescription: "मंत्र चुनें और 30 पंक्तियों को अपनी गति से भरें।",
    chooseLanguage: "अपनी भाषा चुनें", languageNote: "आपके डिवाइस द्वारा समर्थित किसी भी लिपि में लिखें।",
    writingPractice: "आपका लेखन अभ्यास", notebookTitle: "मंत्र लेखन पुस्तिका", printExport: "प्रिंट / PDF निर्यात",
    pageTitleLabel: "पृष्ठ का शीर्षक", chooseMantra: "मंत्र चुनें", customMantra: "अपना मंत्र लिखें…",
    customMantraLabel: "आपका मंत्र", saveCustomMantra: "मंत्र सहेजें",
    customMantraRequired: "पहले अपना मंत्र लिखें।", customMantraAlreadySaved: "यह मंत्र पहले से सहेजा गया है।",
    customMantraSaved: "मंत्र सहेज दिया गया। अब इसे मंत्र सूची से चुन सकते हैं।", referenceMantra: "संदर्भ मंत्र",
    manualMessage: "कृपया श्रद्धा से मंत्र स्वयं लिखें।", clearPage: "पृष्ठ साफ़ करें", savePage: "पृष्ठ सहेजें",
    storageNotice: "आपके पृष्ठ केवल इसी ब्राउज़र में सहेजे जाते हैं। साइट डेटा साफ़ करने पर वे मिट सकते हैं।",
    yourPractice: "आपका अभ्यास", savedHeading: "मेरे सहेजे पृष्ठ", newPage: "नया पृष्ठ शुरू करें",
    savedIntro: "अपने पृष्ठ पर लौटें, लेखन जारी रखें या अपने अभ्यास का रिकॉर्ड रखें।",
    emptyTitle: "एक नया पृष्ठ आपका इंतज़ार कर रहा है", emptyDescription: "आपके सहेजे पृष्ठ यहाँ दिखेंगे। अपना संग्रह शुरू करने के लिए लिखना शुरू करें।",
    aboutEyebrow: "एक सरल डिजिटल अभ्यास", aboutHeading: "इस पुस्तिका के बारे में",
    aboutCopy: "डिजिटल मंत्र लेखन एक सरल, शांत स्थान है जहाँ आप मंत्र को एक-एक पंक्ति में लिख सकते हैं। हर पृष्ठ में एक संदर्भ मंत्र और ठीक 30 क्रमांकित पंक्तियाँ हैं।",
    privacyHeading: "आपके पृष्ठ इसी डिवाइस पर रहते हैं",
    privacyCopy: "पृष्ठ और प्रगति इस ब्राउज़र के लोकल स्टोरेज में रखे जाते हैं; वे सर्वर पर अपलोड नहीं होते। साइट डेटा साफ़ करने या दूसरा ब्राउज़र/डिवाइस इस्तेमाल करने पर डेटा मिट सकता है।",
    restrictionsHeading: "एक विनम्र सूचना",
    restrictionsCopy: "लेखन क्षेत्रों में कॉपी, पेस्ट, कट, ड्रैग-एंड-ड्रॉप और संदर्भ मेनू को केवल रोकथाम के लिए सीमित किया गया है। ये ब्राउज़र प्रतिबंध दूसरे टैब, डेवलपर टूल, एक्सटेंशन या बाहरी इनपुट के ज़रिए कॉपी को पूरी तरह नहीं रोक सकते। टाइपिंग, कीबोर्ड नेविगेशन या भारतीय भाषा इनपुट बाधित नहीं होते।",
    aboutClosing: "आपका अभ्यास आपको शांति का एक क्षण दे।", footer: "आपके दैनिक अभ्यास के लिए एक शांत स्थान"
  },
  bn: {
    brand: "মন্ত্রলেখন", brandNote: "লেখার শান্ত একটি স্থান", home: "হোম", start: "মন্ত্রলেখন শুরু করুন",
    saved: "আমার সংরক্ষিত পৃষ্ঠা", about: "পরিচিতি", language: "ভাষা", welcome: "শান্ত মনে, নিজের গতিতে",
    heroTitle: "এক এক করে মন্ত্র লিখুন", heroDescription: "ভক্তির জন্য একটু সময় রাখুন। মন দিয়ে লিখুন, অগ্রগতি সংরক্ষণ করুন এবং প্রস্তুত হলে ফিরে আসুন।",
    startWriting: "লেখা শুরু করুন", beginPractice: "আপনার সাধনা শুরু করুন", beginDescription: "একটি মন্ত্র বেছে নিয়ে নিজের গতিতে ৩০টি লাইন পূরণ করুন।",
    chooseLanguage: "আপনার ভাষা বেছে নিন", writingPractice: "আপনার লেখার সাধনা", notebookTitle: "মন্ত্রের খাতা",
    printExport: "প্রিন্ট / PDF", pageTitleLabel: "পাতার শিরোনাম", chooseMantra: "মন্ত্র বেছে নিন", customMantra: "নিজের মন্ত্র লিখুন…",
    customMantraLabel: "আপনার মন্ত্র", referenceMantra: "নমুনা মন্ত্র", manualMessage: "অনুগ্রহ করে ভক্তিভরে নিজে মন্ত্রটি লিখুন।",
    clearPage: "পাতা মুছুন", savePage: "পাতা সংরক্ষণ করুন", savedHeading: "আমার সংরক্ষিত পৃষ্ঠা",
    newPage: "নতুন পৃষ্ঠা শুরু করুন", emptyTitle: "একটি নতুন পাতা অপেক্ষায়", emptyDescription: "আপনার সংরক্ষিত পৃষ্ঠাগুলি এখানে দেখা যাবে।",
    aboutHeading: "এই খাতা সম্পর্কে", privacyHeading: "আপনার পৃষ্ঠা এই ডিভাইসেই থাকে",
    restrictionsHeading: "একটি বিনীত স্মরণিকা", footer: "আপনার দৈনিক সাধনার জন্য একটি শান্ত স্থান"
  },
  sa: {
    brand: "मन्त्रलेखनम्", brandNote: "लेखनाय शान्तं स्थानम्", home: "गृहम्", start: "मन्त्रलेखनम् आरभताम्",
    saved: "मम सञ्चितपृष्ठानि", about: "परिचयः", language: "भाषा", welcome: "शान्तचित्तेन, स्वगत्या",
    heroTitle: "मन्त्रं लिखतु, एकां पङ्क्तिं क्रमशः", startWriting: "लेखनम् आरभताम्",
    beginPractice: "अभ्यासम् आरभताम्", chooseLanguage: "भाषां चिनोतु", writingPractice: "भवतः लेखनाभ्यासः",
    notebookTitle: "मन्त्रलेखनपुस्तिका", printExport: "मुद्रयतु / PDF", pageTitleLabel: "पृष्ठशीर्षकम्",
    chooseMantra: "मन्त्रं चिनोतु", customMantra: "स्वमन्त्रं लिखतु…", referenceMantra: "आदर्शमन्त्रः",
    manualMessage: "कृपया भक्त्या मन्त्रं स्वहस्तेन लिखतु।", clearPage: "पृष्ठं मार्जयतु",
    savePage: "पृष्ठं सञ्चिनोतु", savedHeading: "मम सञ्चितपृष्ठानि", newPage: "नूतनं पृष्ठम् आरभताम्",
    aboutHeading: "अस्याः पुस्तिकायाः परिचयः", footer: "दैनिकाभ्यासाय शान्तं स्थानम्"
  },
  gu: {
    brand: "મંત્ર લેખન", brandNote: "લખવા માટે શાંત જગ્યા", home: "હોમ", start: "મંત્ર લેખન શરૂ કરો",
    saved: "મારાં સાચવેલાં પાનાં", about: "વિશે", language: "ભાષા", welcome: "શાંતિથી, તમારી ગતિએ",
    heroTitle: "તમારો મંત્ર લખો, એક સમયે એક લીટી", startWriting: "લખવાનું શરૂ કરો",
    beginPractice: "તમારો અભ્યાસ શરૂ કરો", chooseLanguage: "તમારી ભાષા પસંદ કરો", writingPractice: "તમારો લેખન અભ્યાસ",
    notebookTitle: "મંત્રની નોંધપોથી", printExport: "પ્રિન્ટ / PDF", pageTitleLabel: "પાનાનું શીર્ષક",
    chooseMantra: "મંત્ર પસંદ કરો", customMantra: "તમારો મંત્ર લખો…", referenceMantra: "સંદર્ભ મંત્ર",
    manualMessage: "કૃપા કરીને ભક્તિભાવથી મંત્ર જાતે લખો.", clearPage: "પાનું સાફ કરો",
    savePage: "પાનું સાચવો", savedHeading: "મારાં સાચવેલાં પાનાં", newPage: "નવું પાનું શરૂ કરો",
    aboutHeading: "આ નોંધપોથી વિશે", footer: "તમારા દૈનિક અભ્યાસ માટે શાંત જગ્યા"
  },
  mr: {
    brand: "मंत्र लेखन", brandNote: "लिहिण्यासाठी शांत जागा", home: "मुख्यपृष्ठ", start: "मंत्र लेखन सुरू करा",
    saved: "माझी जतन केलेली पाने", about: "माहिती", language: "भाषा", welcome: "शांतपणे, आपल्या गतीने",
    heroTitle: "तुमचा मंत्र लिहा, एका वेळी एक ओळ", startWriting: "लिहायला सुरुवात करा",
    beginPractice: "तुमचा सराव सुरू करा", chooseLanguage: "तुमची भाषा निवडा", writingPractice: "तुमचा लेखन सराव",
    notebookTitle: "मंत्र वही", printExport: "प्रिंट / PDF", pageTitleLabel: "पानाचे शीर्षक",
    chooseMantra: "मंत्र निवडा", customMantra: "तुमचा मंत्र लिहा…", referenceMantra: "संदर्भ मंत्र",
    manualMessage: "कृपया भक्तिभावाने मंत्र स्वतः लिहा.", clearPage: "पान साफ करा",
    savePage: "पान जतन करा", savedHeading: "माझी जतन केलेली पाने", newPage: "नवे पान सुरू करा",
    aboutHeading: "या वहीबद्दल", footer: "तुमच्या दैनंदिन सरावासाठी शांत जागा"
  },
  ta: {
    brand: "மந்திர எழுத்து", brandNote: "எழுத அமைதியான இடம்", home: "முகப்பு", start: "மந்திர எழுத்தைத் தொடங்குங்கள்",
    saved: "சேமித்த பக்கங்கள்", about: "பற்றி", language: "மொழி", welcome: "அமைதியாக, உங்கள் வேகத்தில்",
    heroTitle: "மந்திரத்தை எழுதுங்கள், ஒவ்வொரு வரியாக", startWriting: "எழுதத் தொடங்குங்கள்",
    beginPractice: "பயிற்சியைத் தொடங்குங்கள்", chooseLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்", writingPractice: "உங்கள் எழுத்துப் பயிற்சி",
    notebookTitle: "மந்திரக் குறிப்பேடு", printExport: "அச்சிடு / PDF", pageTitleLabel: "பக்கத் தலைப்பு",
    chooseMantra: "மந்திரத்தைத் தேர்ந்தெடுக்கவும்", customMantra: "உங்கள் மந்திரத்தை எழுதுங்கள்…",
    referenceMantra: "மந்திரம்", manualMessage: "தயவுசெய்து பக்தியுடன் மந்திரத்தை நீங்களே எழுதுங்கள்.",
    clearPage: "பக்கத்தை அழிக்கவும்", savePage: "பக்கத்தைச் சேமிக்கவும்", savedHeading: "சேமித்த பக்கங்கள்",
    newPage: "புதிய பக்கத்தைத் தொடங்குங்கள்", aboutHeading: "இந்தக் குறிப்பேட்டைப் பற்றி",
    footer: "உங்கள் தினசரிப் பயிற்சிக்கான அமைதியான இடம்"
  },
  te: {
    brand: "మంత్ర లేఖనం", brandNote: "రాయడానికి ప్రశాంతమైన స్థలం", home: "హోమ్", start: "మంత్ర లేఖనం ప్రారంభించండి",
    saved: "నా భద్రపరచిన పేజీలు", about: "గురించి", language: "భాష", welcome: "ప్రశాంతంగా, మీ వేగంతో",
    heroTitle: "మీ మంత్రాన్ని ఒక్కో పంక్తిగా రాయండి", startWriting: "రాయడం ప్రారంభించండి",
    beginPractice: "మీ అభ్యాసాన్ని ప్రారంభించండి", chooseLanguage: "మీ భాషను ఎంచుకోండి", writingPractice: "మీ వ్రాత అభ్యాసం",
    notebookTitle: "మంత్ర నోటుపుస్తకం", printExport: "ప్రింట్ / PDF", pageTitleLabel: "పేజీ శీర్షిక",
    chooseMantra: "మంత్రాన్ని ఎంచుకోండి", customMantra: "మీ మంత్రాన్ని రాయండి…",
    referenceMantra: "సూచన మంత్రం", manualMessage: "దయచేసి భక్తితో మంత్రాన్ని మీరే రాయండి.",
    clearPage: "పేజీని ఖాళీ చేయండి", savePage: "పేజీని భద్రపరచండి", savedHeading: "నా భద్రపరచిన పేజీలు",
    newPage: "కొత్త పేజీ ప్రారంభించండి", aboutHeading: "ఈ నోటుపుస్తకం గురించి",
    footer: "మీ రోజువారీ అభ్యాసానికి ప్రశాంతమైన స్థలం"
  }
};

const localeAdditions = {
  en: {
    documentTitle: "Digital Mantra Lekhan Notebook", metaDescription: "A peaceful digital notebook for writing mantras, one line at a time.",
    heroMantra: "Digital Mantra Lekhan", brandHomeAria: "Digital Mantra Lekhan home", mainNavigationAria: "Main navigation",
    otherLanguage: "Other (English interface)", pageTitlePlaceholder: "My mantra practice", chooseLanguageAria: "Choose your language",
    customMantraPlaceholder: "Type or paste your chosen mantra here", progressAria: "Writing progress",
    progressText: "{done} of {total} lines completed", writingLinesAria: "Thirty mantra writing lines",
    mantraGayatri: "Gayatri Mantra", mantraMahamrityunjaya: "Mahamrityunjaya Mantra",
    mantraShiva: "Om Namah Shivaya", mantraHareKrishna: "Hare Krishna Mahamantra",
    aboutEyebrow: "A GENTLE DIGITAL PRACTICE", savedIntro: "Return to a page, continue writing, or keep a record of your practice.",
    emptyDescription: "Your saved pages will appear here. Start writing to begin your collection.",
    aboutCopy: "A simple, quiet space to write a mantra one line at a time. Every page has one reference mantra and exactly 30 numbered lines.",
    privacyCopy: "Pages are stored only in this browser, not uploaded to a server. Clearing site data or changing browser or device may erase them.",
    restrictionsCopy: "Copy, paste, cut, drag-and-drop, and the context menu are deterred inside writing fields only. This cannot prevent copying from another tab, developer tools, extensions, or external input methods. Typing, keyboard navigation, and Indian-language input remain available.",
    saving: "Saving…", lastSaved: "Last saved {time}", saveSuccess: "Your page has been saved in this browser.",
    pasteBlocked: "Please write the mantra manually with devotion.", titleRequired: "Please enter a title for this page.",
    clearConfirm: "Clear all 30 writing lines on this page? This cannot be undone.", pageCleared: "This page has been cleared.",
    pageNotFound: "That saved page could not be found.", renamePrompt: "Enter a new title for this page:",
    emptyTitleError: "A page title cannot be empty.", deleteConfirm: "Delete “{title}”? This cannot be undone.",
    deleted: "The saved page has been deleted.", customMantraName: "Custom mantra", untitledPage: "Untitled page",
    pageLabel: "Page", createdLabel: "Created", updatedLabel: "Updated", linesLabel: "lines",
    rename: "Rename", openContinue: "Open / Continue", delete: "Delete",
    storageError: "Could not save your page. Browser storage may be full or unavailable.",
    loadError: "Saved pages could not be read. Browser storage may be unavailable.",
    saveStatusAria: "Save status", lineAria: "Mantra writing line {line} of {total}"
  },
  hi: {
    documentTitle: "डिजिटल मंत्र लेखन पुस्तिका", metaDescription: "मंत्र लिखने के लिए एक शांत डिजिटल पुस्तिका।",
    heroMantra: "डिजिटल मंत्र लेखन", brandHomeAria: "डिजिटल मंत्र लेखन होम", mainNavigationAria: "मुख्य नेविगेशन",
    otherLanguage: "अन्य भारतीय भाषा", pageTitlePlaceholder: "मेरे मंत्र का अभ्यास", chooseLanguageAria: "अपनी भाषा चुनें",
    customMantraPlaceholder: "यहाँ अपना चुना हुआ मंत्र लिखें", progressAria: "लेखन प्रगति",
    progressText: "{total} में से {done} पंक्तियाँ पूरी", writingLinesAria: "मंत्र लेखन की तीस पंक्तियाँ",
    mantraGayatri: "गायत्री मंत्र", mantraMahamrityunjaya: "महामृत्युंजय मंत्र",
    mantraShiva: "ॐ नमः शिवाय", mantraHareKrishna: "हरे कृष्ण महामंत्र",
    aboutEyebrow: "एक सरल डिजिटल अभ्यास", savedIntro: "अपने पृष्ठ पर लौटें, लेखन जारी रखें या अपने अभ्यास का रिकॉर्ड रखें।",
    emptyDescription: "आपके सहेजे पृष्ठ यहाँ दिखेंगे। अपना संग्रह शुरू करने के लिए लिखना शुरू करें।",
    aboutCopy: "मंत्र को एक-एक पंक्ति में लिखने का सरल और शांत स्थान। हर पृष्ठ में एक संदर्भ मंत्र और ठीक 30 क्रमांकित पंक्तियाँ हैं।",
    privacyCopy: "पृष्ठ केवल इसी ब्राउज़र में सहेजे जाते हैं, सर्वर पर नहीं। साइट डेटा साफ़ करने या ब्राउज़र/डिवाइस बदलने पर वे मिट सकते हैं।",
    restrictionsCopy: "लेखन क्षेत्रों में कॉपी, पेस्ट, कट, ड्रैग-एंड-ड्रॉप और संदर्भ मेनू को केवल रोकथाम के लिए सीमित किया गया है। दूसरे टैब, डेवलपर टूल, एक्सटेंशन या बाहरी इनपुट से कॉपी रोकने की गारंटी नहीं है। टाइपिंग, कीबोर्ड नेविगेशन और भारतीय भाषा इनपुट चालू रहते हैं।",
    saving: "सहेजा जा रहा है…", lastSaved: "अंतिम बार सहेजा: {time}", saveSuccess: "आपका पृष्ठ इस ब्राउज़र में सहेज दिया गया है।",
    pasteBlocked: "कृपया श्रद्धा से मंत्र स्वयं लिखें।", titleRequired: "कृपया इस पृष्ठ का शीर्षक लिखें।",
    clearConfirm: "इस पृष्ठ की सभी 30 पंक्तियाँ साफ़ करें? यह वापस नहीं किया जा सकता।", pageCleared: "यह पृष्ठ साफ़ कर दिया गया है।",
    pageNotFound: "यह सहेजा हुआ पृष्ठ नहीं मिला।", renamePrompt: "इस पृष्ठ का नया शीर्षक लिखें:",
    emptyTitleError: "पृष्ठ का शीर्षक खाली नहीं हो सकता।", deleteConfirm: "“{title}” हटाएँ? यह वापस नहीं किया जा सकता।",
    deleted: "सहेजा हुआ पृष्ठ हटा दिया गया है।", customMantraName: "अपना मंत्र", untitledPage: "बिना शीर्षक का पृष्ठ",
    pageLabel: "पृष्ठ", createdLabel: "बनाया", updatedLabel: "अपडेट", linesLabel: "पंक्तियाँ",
    rename: "नाम बदलें", openContinue: "खोलें / जारी रखें", delete: "हटाएँ",
    storageError: "पृष्ठ सहेजा नहीं जा सका। ब्राउज़र स्टोरेज भरा या अनुपलब्ध हो सकता है।",
    loadError: "सहेजे पृष्ठ पढ़े नहीं जा सके। ब्राउज़र स्टोरेज अनुपलब्ध हो सकता है।",
    saveStatusAria: "सहेजने की स्थिति", lineAria: "मंत्र लेखन पंक्ति {line}, कुल {total}"
  },
  sa: {
    documentTitle: "डिजिटलमन्त्रलेखनपुस्तिका", metaDescription: "मन्त्रलेखनाय शान्ता डिजिटलपुस्तिका।",
    heroMantra: "डिजिटलमन्त्रलेखनम्", brandHomeAria: "डिजिटलमन्त्रलेखनस्य गृहम्", mainNavigationAria: "मुख्यसञ्चरणम्",
    otherLanguage: "अन्या भारतीयभाषा", pageTitlePlaceholder: "मम मन्त्राभ्यासः", chooseLanguageAria: "भाषां चिनोतु",
    customMantraPlaceholder: "अत्र स्वमन्त्रं लिखतु", progressAria: "लेखनप्रगतिः",
    progressText: "{total} पङ्क्तिषु {done} पूर्णाः", writingLinesAria: "मन्त्रलेखनस्य त्रिंशत् पङ्क्तयः",
    mantraGayatri: "गायत्रीमन्त्रः", mantraMahamrityunjaya: "महामृत्युञ्जयमन्त्रः",
    mantraShiva: "ॐ नमः शिवाय", mantraHareKrishna: "हरे कृष्ण महामन्त्रः",
    aboutEyebrow: "सरलः डिजिटलाभ्यासः", savedIntro: "पृष्ठं पुनः उद्घाट्य लेखनम् अनुवर्तयतु।",
    emptyDescription: "सञ्चितपृष्ठानि अत्र दृश्यन्ते। संग्रहाय लेखनम् आरभताम्।",
    aboutCopy: "मन्त्रं क्रमशः पङ्क्तिषु लेखितुं शान्तं स्थानम्। प्रत्येकस्मिन् पृष्ठे एकः मन्त्रः, त्रिंशत् च सङ्ख्याङ्किताः पङ्क्तयः।",
    privacyCopy: "पृष्ठानि केवलम् अस्मिन् ब्राउज़रे सञ्चितानि, सर्वरे न। साइट्-दत्तांशं मार्जयित्वा ब्राउज़रं वा उपकरणं परिवर्त्य दत्तांशः नश्येत्।",
    restrictionsCopy: "लेखनक्षेत्रे प्रतिलिपि, निवेशः, छेदनं, ड्रैग्-ड्रॉप् च केवलं निवारणाय निरुद्धम्। अन्यस्मात् टैब्, उपकरणात्, विस्तारात् वा प्रतिलिपिः निरुद्धा न भवति। लेखनं, कीबोर्ड्, भारतीयभाषा-निवेशः च चालिताः।",
    saving: "सञ्चीयते…", lastSaved: "अन्तिमं सञ्चितम्: {time}", saveSuccess: "पृष्ठम् अस्मिन् ब्राउज़रे सञ्चितम्।",
    pasteBlocked: "कृपया भक्त्या मन्त्रं स्वहस्तेन लिखतु।", titleRequired: "कृपया पृष्ठस्य शीर्षकं लिखतु।",
    clearConfirm: "पृष्ठस्य सर्वाः त्रिंशत् पङ्क्तयः मार्जयतु? एतत् प्रत्यावर्तयितुं न शक्यते।", pageCleared: "पृष्ठं मार्जितम्।",
    pageNotFound: "सञ्चितं पृष्ठं न लब्धम्।", renamePrompt: "पृष्ठस्य नूतनं शीर्षकं लिखतु:",
    emptyTitleError: "पृष्ठशीर्षकं रिक्तं न भवेत्।", deleteConfirm: "“{title}” अपाकरोतु? एतत् प्रत्यावर्तयितुं न शक्यते।",
    deleted: "सञ्चितं पृष्ठम् अपाकृतम्।", customMantraName: "स्वमन्त्रः", untitledPage: "शीर्षकरहितं पृष्ठम्",
    pageLabel: "पृष्ठम्", createdLabel: "निर्मितम्", updatedLabel: "अद्यतनम्", linesLabel: "पङ्क्तयः",
    rename: "नाम परिवर्तयतु", openContinue: "उद्घाटयतु / अनुवर्तयतु", delete: "अपाकरोतु",
    storageError: "पृष्ठं न सञ्चितम्। ब्राउज़र-सञ्चयः पूर्णः वा अनुपलब्धः।",
    loadError: "सञ्चितपृष्ठानि न पठितानि। ब्राउज़र-सञ्चयः अनुपलब्धः।",
    saveStatusAria: "सञ्चयनस्थितिः", lineAria: "मन्त्रलेखनपङ्क्तिः {line}, कुलम् {total}"
  },
  bn: {
    documentTitle: "ডিজিটাল মন্ত্রলেখন খাতা", metaDescription: "মন্ত্র লেখার জন্য একটি শান্ত ডিজিটাল খাতা।",
    heroMantra: "ডিজিটাল মন্ত্রলেখন", brandHomeAria: "ডিজিটাল মন্ত্রলেখন হোম", mainNavigationAria: "প্রধান নেভিগেশন",
    otherLanguage: "অন্য ভারতীয় ভাষা", pageTitlePlaceholder: "আমার মন্ত্রচর্চা", chooseLanguageAria: "আপনার ভাষা বেছে নিন",
    customMantraPlaceholder: "এখানে আপনার মন্ত্র লিখুন", progressAria: "লেখার অগ্রগতি",
    progressText: "{total}টি লাইনের মধ্যে {done}টি সম্পূর্ণ", writingLinesAria: "মন্ত্র লেখার ত্রিশটি লাইন",
    mantraGayatri: "গায়ত্রী মন্ত্র", mantraMahamrityunjaya: "মহামৃত্যুঞ্জয় মন্ত্র",
    mantraShiva: "ওঁ নমঃ শিবায়", mantraHareKrishna: "হরে কৃষ্ণ মহামন্ত্র",
    aboutEyebrow: "সহজ ডিজিটাল সাধনা", savedIntro: "পাতায় ফিরে লিখুন, অথবা আপনার সাধনার হিসাব রাখুন।",
    emptyDescription: "আপনার সংরক্ষিত পৃষ্ঠা এখানে দেখা যাবে। লেখা শুরু করে সংগ্রহ তৈরি করুন।",
    aboutCopy: "এক এক করে মন্ত্র লেখার সহজ ও শান্ত জায়গা। প্রতিটি পাতায় একটি মন্ত্র এবং ঠিক ৩০টি নম্বর দেওয়া লাইন রয়েছে।",
    privacyCopy: "পৃষ্ঠা শুধু এই ব্রাউজারেই থাকে, সার্ভারে পাঠানো হয় না। সাইটের তথ্য মুছলে বা ব্রাউজার/ডিভাইস বদলালে এগুলি হারাতে পারে।",
    restrictionsCopy: "লেখার ঘরে কপি, পেস্ট, কাট, টেনে আনা এবং মেনু শুধু নিরুৎসাহিত করা হয়। অন্য ট্যাব, ডেভেলপার টুল, এক্সটেনশন বা বাইরের ইনপুট থেকে কপি ঠেকানো যায় না। টাইপ, কিবোর্ড ও ভাষা ইনপুট চালু থাকে।",
    saving: "সংরক্ষণ হচ্ছে…", lastSaved: "শেষ সংরক্ষণ: {time}", saveSuccess: "এই ব্রাউজারে পৃষ্ঠা সংরক্ষিত হয়েছে।",
    pasteBlocked: "অনুগ্রহ করে ভক্তিভরে নিজে মন্ত্রটি লিখুন।", titleRequired: "পাতার শিরোনাম লিখুন।",
    clearConfirm: "এই পাতার ৩০টি লাইন মুছবেন? এটি ফিরিয়ে আনা যাবে না।", pageCleared: "পাতাটি মুছে দেওয়া হয়েছে।",
    pageNotFound: "সংরক্ষিত পাতাটি পাওয়া যায়নি।", renamePrompt: "পাতার নতুন নাম লিখুন:",
    emptyTitleError: "পাতার নাম খালি রাখা যাবে না।", deleteConfirm: "“{title}” মুছবেন? এটি ফিরিয়ে আনা যাবে না।",
    deleted: "সংরক্ষিত পাতাটি মুছে দেওয়া হয়েছে।", customMantraName: "নিজের মন্ত্র", untitledPage: "নামহীন পৃষ্ঠা",
    pageLabel: "পৃষ্ঠা", createdLabel: "তৈরি", updatedLabel: "পরিবর্তিত", linesLabel: "লাইন",
    rename: "নাম বদলান", openContinue: "খুলুন / চালিয়ে যান", delete: "মুছুন",
    storageError: "পৃষ্ঠা সংরক্ষণ করা যায়নি। ব্রাউজারের জায়গা পূর্ণ বা বন্ধ থাকতে পারে।",
    loadError: "সংরক্ষিত পৃষ্ঠা পড়া যায়নি। ব্রাউজারের স্টোরেজ বন্ধ থাকতে পারে।",
    saveStatusAria: "সংরক্ষণের অবস্থা", lineAria: "মন্ত্র লেখার লাইন {line}, মোট {total}"
  },
  as: {
    documentTitle: "ডিজিটেল মন্ত্ৰলেখন বহী", metaDescription: "মন্ত্ৰ লিখিবলৈ এখন শান্ত ডিজিটেল বহী।",
    heroMantra: "ডিজিটেল মন্ত্ৰলেখন", brandHomeAria: "ডিজিটেল মন্ত্ৰলেখন গৃহ", mainNavigationAria: "মুখ্য নেভিগেচন",
    otherLanguage: "আন ভাৰতীয় ভাষা", pageTitlePlaceholder: "মোৰ মন্ত্ৰ সাধনা", chooseLanguageAria: "আপোনাৰ ভাষা বাছক",
    customMantraPlaceholder: "ইয়াত আপোনাৰ মন্ত্ৰ লিখক", progressAria: "লিখাৰ অগ্ৰগতি",
    progressText: "{total} শাৰীৰ ভিতৰত {done} সম্পূৰ্ণ", writingLinesAria: "মন্ত্ৰ লিখাৰ ত্ৰিশটা শাৰী",
    mantraGayatri: "গায়ত্ৰী মন্ত্ৰ", mantraMahamrityunjaya: "মহামৃত্যুঞ্জয় মন্ত্ৰ",
    mantraShiva: "ওঁ নমঃ শিৱায়", mantraHareKrishna: "হৰে কৃষ্ণ মহামন্ত্ৰ",
    aboutEyebrow: "সহজ ডিজিটেল সাধনা", savedIntro: "পৃষ্ঠালৈ উভতি লিখক আৰু আপোনাৰ সাধনাৰ হিচাপ ৰাখক।",
    emptyDescription: "আপোনাৰ সাঁচতীয়া পৃষ্ঠাসমূহ ইয়াত দেখা যাব। লিখা আৰম্ভ কৰক।",
    aboutCopy: "এটা এটাকৈ মন্ত্ৰ লিখিবলৈ সহজ আৰু শান্ত ঠাই। প্ৰতিটো পৃষ্ঠাত এটা মন্ত্ৰ আৰু ঠিক ৩০টা নম্বৰ দিয়া শাৰী থাকে।",
    privacyCopy: "পৃষ্ঠা কেৱল এই ব্ৰাউজাৰত থাকে, ছাৰ্ভাৰলৈ পঠিওৱা নহয়। ছাইটৰ তথ্য মচিলে বা ব্ৰাউজাৰ/ডিভাইচ সলালে হেৰাব পাৰে।",
    restrictionsCopy: "লিখাৰ ঘৰত কপি, পেষ্ট, কাট আৰু টানি অনা কেৱল নিৰুৎসাহিত কৰা হয়। আন টেব, ডেভেলপাৰ টুল, এক্সটেনচন বা বাহিৰৰ ইনপুটেৰে কপি ৰোধ নহয়। টাইপিং আৰু ভাষা ইনপুট চলি থাকে।",
    saving: "সাঁচি থকা হৈছে…", lastSaved: "শেষবাৰ সাঁচিছিল: {time}", saveSuccess: "এই ব্ৰাউজাৰত পৃষ্ঠা সাঁচি থোৱা হৈছে।",
    pasteBlocked: "অনুগ্ৰহ কৰি ভক্তিৰে মন্ত্ৰটো নিজে লিখক।", titleRequired: "পৃষ্ঠাৰ শিৰোনাম লিখক।",
    clearConfirm: "এই পৃষ্ঠাৰ ৩০টা শাৰী মচিবনে? এই কাম ঘূৰাই আনিব নোৱাৰি।", pageCleared: "পৃষ্ঠাখন মচা হ'ল।",
    pageNotFound: "সাঁচি থোৱা পৃষ্ঠাখন পোৱা নগ'ল।", renamePrompt: "পৃষ্ঠাৰ নতুন নাম লিখক:",
    emptyTitleError: "পৃষ্ঠাৰ নাম খালী হ'ব নোৱাৰে।", deleteConfirm: "“{title}” মচিবনে? ঘূৰাই আনিব নোৱাৰি।",
    deleted: "সাঁচি থোৱা পৃষ্ঠাখন মচা হ'ল।", customMantraName: "নিজৰ মন্ত্ৰ", untitledPage: "নাম নথকা পৃষ্ঠা",
    pageLabel: "পৃষ্ঠা", createdLabel: "সৃষ্টি", updatedLabel: "সলনি", linesLabel: "শাৰী",
    rename: "নাম সলনি", openContinue: "খোলক / আগবঢ়াওক", delete: "মচক",
    storageError: "পৃষ্ঠা সাঁচিব পৰা নগ'ল। ব্ৰাউজাৰৰ সংৰক্ষণ পূৰ্ণ বা বন্ধ হ'ব পাৰে।",
    loadError: "সাঁচি থোৱা পৃষ্ঠা পঢ়িব পৰা নগ'ল।", saveStatusAria: "সাঁচনিৰ অৱস্থা",
    lineAria: "মন্ত্ৰ লিখাৰ শাৰী {line}, মুঠ {total}"
  },
  gu: {
    documentTitle: "ડિજિટલ મંત્ર લેખન નોટબુક", metaDescription: "મંત્ર લખવા માટે શાંત ડિજિટલ નોટબુક.",
    heroMantra: "ડિજિટલ મંત્ર લેખન", brandHomeAria: "ડિજિટલ મંત્ર લેખન હોમ", mainNavigationAria: "મુખ્ય નેવિગેશન",
    otherLanguage: "અન્ય ભારતીય ભાષા", pageTitlePlaceholder: "મારી મંત્ર સાધના", chooseLanguageAria: "તમારી ભાષા પસંદ કરો",
    customMantraPlaceholder: "અહીં તમારો મંત્ર લખો", progressAria: "લેખનની પ્રગતિ",
    progressText: "{total}માંથી {done} લીટીઓ પૂર્ણ", writingLinesAria: "મંત્ર લખવાની 30 લીટીઓ",
    mantraGayatri: "ગાયત્રી મંત્ર", mantraMahamrityunjaya: "મહામૃત્યુંજય મંત્ર",
    mantraShiva: "ૐ નમઃ શિવાય", mantraHareKrishna: "હરે કૃષ્ણ મહામંત્ર",
    aboutEyebrow: "સરળ ડિજિટલ સાધના", savedIntro: "પાનાં પર પાછા આવી લખવાનું ચાલુ રાખો.",
    emptyDescription: "તમારાં સાચવેલાં પાનાં અહીં દેખાશે. લખવાનું શરૂ કરો.",
    aboutCopy: "મંત્રને એક સમયે એક લીટી લખવા માટેની શાંત જગ્યા. દરેક પાનામાં એક મંત્ર અને બરાબર 30 ક્રમાંકિત લીટીઓ છે.",
    privacyCopy: "પાનાં ફક્ત આ બ્રાઉઝરમાં રહે છે, સર્વર પર અપલોડ થતા નથી. સાઇટ ડેટા સાફ કરવાથી કે બ્રાઉઝર/ઉપકરણ બદલવાથી તે ગુમ થઈ શકે છે.",
    restrictionsCopy: "લેખન ક્ષેત્રમાં કૉપી, પેસ્ટ, કટ અને ખેંચીને મૂકવાનું ફક્ત અટકાવવામાં આવે છે. બીજા ટૅબ, ડેવલપર ટૂલ, એક્સ્ટેન્શન કે બહારના ઇનપુટથી કૉપી અટકતી નથી. ટાઇપિંગ અને ભાષા ઇનપુટ ચાલુ રહે છે.",
    saving: "સાચવી રહ્યા છીએ…", lastSaved: "છેલ્લે સાચવ્યું: {time}", saveSuccess: "આ બ્રાઉઝરમાં પાનું સાચવાયું.",
    pasteBlocked: "કૃપા કરીને ભક્તિભાવથી મંત્ર જાતે લખો.", titleRequired: "પાનાનું શીર્ષક લખો.",
    clearConfirm: "આ પાનાની બધી 30 લીટીઓ સાફ કરવી છે? પાછું ફેરવી શકાશે નહીં.", pageCleared: "પાનું સાફ થયું.",
    pageNotFound: "સાચવેલું પાનું મળ્યું નથી.", renamePrompt: "પાનાનું નવું નામ લખો:",
    emptyTitleError: "પાનાનું શીર્ષક ખાલી ન હોઈ શકે.", deleteConfirm: "“{title}” કાઢી નાખવું છે? પાછું નહીં આવે.",
    deleted: "સાચવેલું પાનું કાઢી નાખ્યું.", customMantraName: "તમારો મંત્ર", untitledPage: "નામ વિનાનું પાનું",
    pageLabel: "પાનું", createdLabel: "બનાવ્યું", updatedLabel: "અપડેટ", linesLabel: "લીટીઓ",
    rename: "નામ બદલો", openContinue: "ખોલો / ચાલુ રાખો", delete: "કાઢો",
    storageError: "પાનું સાચવી શકાતું નથી. બ્રાઉઝર સ્ટોરેજ ભરેલું અથવા બંધ હોઈ શકે છે.",
    loadError: "સાચવેલાં પાનાં વાંચી શકાયાં નથી.", saveStatusAria: "સાચવવાની સ્થિતિ",
    lineAria: "મંત્ર લેખન લીટી {line}, કુલ {total}"
  },
  mr: {
    documentTitle: "डिजिटल मंत्र लेखन वही", metaDescription: "मंत्र लिहिण्यासाठी शांत डिजिटल वही.",
    heroMantra: "डिजिटल मंत्र लेखन", brandHomeAria: "डिजिटल मंत्र लेखन मुख्यपृष्ठ", mainNavigationAria: "मुख्य नेव्हिगेशन",
    otherLanguage: "इतर भारतीय भाषा", pageTitlePlaceholder: "माझा मंत्र सराव", chooseLanguageAria: "तुमची भाषा निवडा",
    customMantraPlaceholder: "तुमचा मंत्र येथे लिहा", progressAria: "लेखनाची प्रगती",
    progressText: "{total} पैकी {done} ओळी पूर्ण", writingLinesAria: "मंत्र लेखनाच्या तीस ओळी",
    mantraGayatri: "गायत्री मंत्र", mantraMahamrityunjaya: "महामृत्युंजय मंत्र",
    mantraShiva: "ॐ नमः शिवाय", mantraHareKrishna: "हरे कृष्ण महामंत्र",
    aboutEyebrow: "साधा डिजिटल सराव", savedIntro: "पानावर परत येऊन लेखन सुरू ठेवा.",
    emptyDescription: "तुमची जतन केलेली पाने येथे दिसतील. लिहायला सुरुवात करा.",
    aboutCopy: "मंत्र एका वेळी एक ओळ लिहिण्यासाठी शांत जागा. प्रत्येक पानावर एक संदर्भ मंत्र आणि नेमक्या 30 क्रमांकित ओळी आहेत.",
    privacyCopy: "पाने फक्त या ब्राउझरमध्ये जतन होतात; सर्व्हरवर पाठवली जात नाहीत. साइट डेटा पुसल्यास किंवा ब्राउझर/डिव्हाइस बदलल्यास ती हरवू शकतात.",
    restrictionsCopy: "लेखन क्षेत्रात कॉपी, पेस्ट, कट आणि ड्रॅग-ड्रॉपला केवळ प्रतिबंध केला आहे. दुसऱ्या टॅब, डेव्हलपर टूल, एक्स्टेन्शन किंवा बाह्य इनपुटमधून कॉपी रोखता येत नाही. टायपिंग आणि भाषा इनपुट सुरू राहतात.",
    saving: "जतन होत आहे…", lastSaved: "शेवटचे जतन: {time}", saveSuccess: "हे पान या ब्राउझरमध्ये जतन केले.",
    pasteBlocked: "कृपया भक्तिभावाने मंत्र स्वतः लिहा.", titleRequired: "पानाचे शीर्षक लिहा.",
    clearConfirm: "या पानावरील सर्व 30 ओळी पुसायच्या? हे परत करता येणार नाही.", pageCleared: "पान साफ केले.",
    pageNotFound: "जतन केलेले पान सापडले नाही.", renamePrompt: "पानाचे नवीन नाव लिहा:",
    emptyTitleError: "पानाचे शीर्षक रिकामे ठेवता येत नाही.", deleteConfirm: "“{title}” हटवायचे? हे परत करता येणार नाही.",
    deleted: "जतन केलेले पान हटवले.", customMantraName: "तुमचा मंत्र", untitledPage: "शीर्षक नसलेले पान",
    pageLabel: "पान", createdLabel: "तयार", updatedLabel: "बदलले", linesLabel: "ओळी",
    rename: "नाव बदला", openContinue: "उघडा / सुरू ठेवा", delete: "हटवा",
    storageError: "पान जतन झाले नाही. ब्राउझर स्टोरेज भरलेले किंवा अनुपलब्ध असू शकते.",
    loadError: "जतन केलेली पाने वाचता आली नाहीत.", saveStatusAria: "जतन स्थिती",
    lineAria: "मंत्र लेखन ओळ {line}, एकूण {total}"
  },
  ta: {
    documentTitle: "டிஜிட்டல் மந்திர எழுத்துக் குறிப்பேடு", metaDescription: "மந்திரம் எழுதுவதற்கான அமைதியான டிஜிட்டல் குறிப்பேடு.",
    heroMantra: "டிஜிட்டல் மந்திர எழுத்து", brandHomeAria: "டிஜிட்டல் மந்திர எழுத்து முகப்பு", mainNavigationAria: "முதன்மை வழிசெலுத்தல்",
    otherLanguage: "மற்ற இந்திய மொழி", pageTitlePlaceholder: "எனது மந்திரப் பயிற்சி", chooseLanguageAria: "மொழியைத் தேர்ந்தெடுக்கவும்",
    customMantraPlaceholder: "உங்கள் மந்திரத்தை இங்கே எழுதுங்கள்", progressAria: "எழுத்துப் பயிற்சி முன்னேற்றம்",
    progressText: "{total} வரிகளில் {done} முடிந்தது", writingLinesAria: "மந்திரம் எழுத முப்பது வரிகள்",
    mantraGayatri: "காயத்ரி மந்திரம்", mantraMahamrityunjaya: "மஹாமிருத்யுஞ்ஜய மந்திரம்",
    mantraShiva: "ஓம் நம சிவாய", mantraHareKrishna: "ஹரே கிருஷ்ண மகாமந்திரம்",
    aboutEyebrow: "எளிய டிஜிட்டல் பயிற்சி", savedIntro: "பக்கத்திற்குத் திரும்பி எழுதுவதைத் தொடருங்கள்.",
    emptyDescription: "சேமித்த பக்கங்கள் இங்கே தோன்றும். எழுதத் தொடங்குங்கள்.",
    aboutCopy: "ஒவ்வொரு வரியாக மந்திரம் எழுத அமைதியான இடம். ஒவ்வொரு பக்கத்திலும் ஒரு மந்திரமும் சரியாக 30 எண் கொண்ட வரிகளும் உள்ளன.",
    privacyCopy: "பக்கங்கள் இந்த உலாவியில் மட்டுமே சேமிக்கப்படும்; சேவையகத்திற்கு அனுப்பப்படாது. தளத் தரவை அழித்தால் அல்லது சாதனத்தை மாற்றினால் இழக்கலாம்.",
    restrictionsCopy: "எழுதும் இடத்தில் நகலெடுத்தல், ஒட்டுதல், வெட்டுதல் தடுக்கப்படுவது ஒரு தடுப்பு மட்டுமே. வேறு தாவல், கருவிகள், நீட்சிகள் அல்லது வெளிப்புற உள்ளீடு மூலம் நகலெடுக்கலாம். தட்டச்சும் மொழி உள்ளீடும் இயங்கும்.",
    saving: "சேமிக்கப்படுகிறது…", lastSaved: "கடைசியாகச் சேமித்தது: {time}", saveSuccess: "இந்த உலாவியில் பக்கம் சேமிக்கப்பட்டது.",
    pasteBlocked: "தயவுசெய்து பக்தியுடன் மந்திரத்தை நீங்களே எழுதுங்கள்.", titleRequired: "பக்கத் தலைப்பை உள்ளிடவும்.",
    clearConfirm: "இந்தப் பக்கத்தின் 30 வரிகளையும் அழிக்கவா? இதை மீட்டெடுக்க முடியாது.", pageCleared: "பக்கம் அழிக்கப்பட்டது.",
    pageNotFound: "சேமித்த பக்கத்தைக் காணவில்லை.", renamePrompt: "பக்கத்தின் புதிய பெயரை உள்ளிடவும்:",
    emptyTitleError: "பக்கத் தலைப்பு காலியாக இருக்கக்கூடாது.", deleteConfirm: "“{title}” நீக்கவா? இதை மீட்டெடுக்க முடியாது.",
    deleted: "சேமித்த பக்கம் நீக்கப்பட்டது.", customMantraName: "உங்கள் மந்திரம்", untitledPage: "தலைப்பில்லா பக்கம்",
    pageLabel: "பக்கம்", createdLabel: "உருவாக்கியது", updatedLabel: "புதுப்பித்தது", linesLabel: "வரிகள்",
    rename: "பெயர் மாற்று", openContinue: "திற / தொடரவும்", delete: "நீக்கு",
    storageError: "பக்கத்தைச் சேமிக்க முடியவில்லை. உலாவி சேமிப்பிடம் நிரம்பியிருக்கலாம்.",
    loadError: "சேமித்த பக்கங்களைப் படிக்க முடியவில்லை.", saveStatusAria: "சேமிப்பு நிலை",
    lineAria: "மந்திர எழுத்து வரி {line}, மொத்தம் {total}"
  },
  te: {
    documentTitle: "డిజిటల్ మంత్ర లేఖన నోటుపుస్తకం", metaDescription: "మంత్రాలు రాయడానికి ప్రశాంతమైన డిజిటల్ నోటుపుస్తకం.",
    heroMantra: "డిజిటల్ మంత్ర లేఖనం", brandHomeAria: "డిజిటల్ మంత్ర లేఖనం హోమ్", mainNavigationAria: "ప్రధాన నావిగేషన్",
    otherLanguage: "ఇతర భారతీయ భాష", pageTitlePlaceholder: "నా మంత్ర సాధన", chooseLanguageAria: "మీ భాషను ఎంచుకోండి",
    customMantraPlaceholder: "మీ మంత్రాన్ని ఇక్కడ రాయండి", progressAria: "వ్రాత ప్రగతి",
    progressText: "{total} పంక్తులలో {done} పూర్తయ్యాయి", writingLinesAria: "మంత్రం రాయడానికి ముప్పై పంక్తులు",
    mantraGayatri: "గాయత్రీ మంత్రం", mantraMahamrityunjaya: "మహామృత్యుంజయ మంత్రం",
    mantraShiva: "ఓం నమః శివాయ", mantraHareKrishna: "హరే కృష్ణ మహామంత్రం",
    aboutEyebrow: "సులభమైన డిజిటల్ సాధన", savedIntro: "పేజీకి తిరిగి వచ్చి రాయడం కొనసాగించండి.",
    emptyDescription: "మీ భద్రపరచిన పేజీలు ఇక్కడ కనిపిస్తాయి. రాయడం ప్రారంభించండి.",
    aboutCopy: "మంత్రాన్ని ఒక్కో పంక్తిగా రాయడానికి ప్రశాంతమైన స్థలం. ప్రతి పేజీలో ఒక మంత్రం, సరిగ్గా 30 సంఖ్యా పంక్తులు ఉంటాయి.",
    privacyCopy: "పేజీలు ఈ బ్రౌజర్‌లోనే ఉంటాయి; సర్వర్‌కు పంపబడవు. సైట్ డేటా తొలగిస్తే లేదా పరికరం మారిస్తే పోవచ్చు.",
    restrictionsCopy: "రాసే చోట కాపీ, పేస్ట్, కట్, డ్రాగ్-డ్రాప్‌ను నిరుత్సాహపరుస్తాం మాత్రమే. ఇతర ట్యాబ్, టూల్స్, ఎక్స్‌టెన్షన్ లేదా బాహ్య ఇన్‌పుట్‌తో కాపీ చేయవచ్చు. టైపింగ్, భాషా ఇన్‌పుట్ పనిచేస్తాయి.",
    saving: "భద్రపరుస్తోంది…", lastSaved: "చివరిగా భద్రపరిచినది: {time}", saveSuccess: "ఈ బ్రౌజర్‌లో పేజీ భద్రపరచబడింది.",
    pasteBlocked: "దయచేసి భక్తితో మంత్రాన్ని మీరే రాయండి.", titleRequired: "పేజీ శీర్షికను నమోదు చేయండి.",
    clearConfirm: "ఈ పేజీలోని 30 పంక్తులనూ ఖాళీ చేయాలా? తిరిగి పొందలేరు.", pageCleared: "పేజీ ఖాళీ చేయబడింది.",
    pageNotFound: "భద్రపరచిన పేజీ కనబడలేదు.", renamePrompt: "పేజీకి కొత్త పేరు ఇవ్వండి:",
    emptyTitleError: "పేజీ శీర్షిక ఖాళీగా ఉండకూడదు.", deleteConfirm: "“{title}” తొలగించాలా? తిరిగి పొందలేరు.",
    deleted: "భద్రపరచిన పేజీ తొలగించబడింది.", customMantraName: "మీ మంత్రం", untitledPage: "శీర్షిక లేని పేజీ",
    pageLabel: "పేజీ", createdLabel: "సృష్టించినది", updatedLabel: "నవీకరించినది", linesLabel: "పంక్తులు",
    rename: "పేరు మార్చండి", openContinue: "తెరవండి / కొనసాగించండి", delete: "తొలగించండి",
    storageError: "పేజీని భద్రపరచలేకపోయాం. బ్రౌజర్ నిల్వ నిండివుండవచ్చు.",
    loadError: "భద్రపరచిన పేజీలను చదవలేకపోయాం.", saveStatusAria: "భద్రపరిచే స్థితి",
    lineAria: "మంత్ర రచన పంక్తి {line}, మొత్తం {total}"
  },
  ne: {
    documentTitle: "डिजिटल मन्त्र लेखन पुस्तिका", metaDescription: "मन्त्र लेख्नका लागि शान्त डिजिटल पुस्तिका।",
    heroMantra: "डिजिटल मन्त्र लेखन", brandHomeAria: "डिजिटल मन्त्र लेखन गृह", mainNavigationAria: "मुख्य नेभिगेसन",
    otherLanguage: "अन्य भारतीय भाषा", pageTitlePlaceholder: "मेरो मन्त्र अभ्यास", chooseLanguageAria: "आफ्नो भाषा छान्नुहोस्",
    customMantraPlaceholder: "यहाँ आफ्नो मन्त्र लेख्नुहोस्", progressAria: "लेखन प्रगति",
    progressText: "{total} मध्ये {done} पङ्क्ति पूरा", writingLinesAria: "मन्त्र लेख्ने तीस पङ्क्ति",
    mantraGayatri: "गायत्री मन्त्र", mantraMahamrityunjaya: "महामृत्युञ्जय मन्त्र",
    mantraShiva: "ॐ नमः शिवाय", mantraHareKrishna: "हरे कृष्ण महामन्त्र",
    aboutEyebrow: "सरल डिजिटल अभ्यास", savedIntro: "पृष्ठमा फर्केर लेखाइ जारी राख्नुहोस्।",
    emptyDescription: "तपाईंका सुरक्षित पृष्ठहरू यहाँ देखिनेछन्। लेख्न सुरु गर्नुहोस्।",
    aboutCopy: "मन्त्रलाई एक पटकमा एक पङ्क्ति लेख्ने शान्त ठाउँ। प्रत्येक पृष्ठमा एउटा मन्त्र र ठ्याक्कै ३० वटा नम्बर भएका पङ्क्ति छन्।",
    privacyCopy: "पृष्ठहरू यही ब्राउजरमा मात्र सुरक्षित हुन्छन्, सर्भरमा पठाइँदैन। साइट डाटा मेटाउँदा वा ब्राउजर/उपकरण फेर्दा हराउन सक्छ।",
    restrictionsCopy: "लेखन क्षेत्रमा कपी, पेस्ट, कट र ड्र्याग-ड्रपलाई रोक्ने प्रयास मात्र गरिन्छ। अर्को ट्याब, डेभलपर टुल, एक्सटेन्सन वा बाहिरी इनपुटबाट कपी रोकिँदैन। टाइप र भाषा इनपुट चलिरहन्छ।",
    saving: "सुरक्षित हुँदैछ…", lastSaved: "अन्तिम पटक सुरक्षित: {time}", saveSuccess: "यो ब्राउजरमा पृष्ठ सुरक्षित भयो।",
    pasteBlocked: "कृपया भक्तिपूर्वक मन्त्र आफैँ लेख्नुहोस्।", titleRequired: "पृष्ठको शीर्षक लेख्नुहोस्।",
    clearConfirm: "यस पृष्ठका सबै ३० पङ्क्ति मेटाउने? यो फिर्ता गर्न सकिँदैन।", pageCleared: "पृष्ठ खाली गरियो।",
    pageNotFound: "सुरक्षित पृष्ठ भेटिएन।", renamePrompt: "पृष्ठको नयाँ नाम लेख्नुहोस्:",
    emptyTitleError: "पृष्ठको शीर्षक खाली हुन सक्दैन।", deleteConfirm: "“{title}” मेटाउने? यो फिर्ता गर्न सकिँदैन।",
    deleted: "सुरक्षित पृष्ठ मेटाइयो।", customMantraName: "आफ्नो मन्त्र", untitledPage: "शीर्षक नभएको पृष्ठ",
    pageLabel: "पृष्ठ", createdLabel: "सिर्जना", updatedLabel: "अपडेट", linesLabel: "पङ्क्ति",
    rename: "नाम फेर्नुहोस्", openContinue: "खोल्नुहोस् / जारी राख्नुहोस्", delete: "मेटाउनुहोस्",
    storageError: "पृष्ठ सुरक्षित भएन। ब्राउजरको भण्डारण भरिएको वा उपलब्ध नभएको हुन सक्छ।",
    loadError: "सुरक्षित पृष्ठ पढ्न सकिएन।", saveStatusAria: "सुरक्षित अवस्थिति",
    lineAria: "मन्त्र लेखन पङ्क्ति {line}, जम्मा {total}"
    },
    pa: {
      documentTitle: "ਡਿਜ਼ਿਟਲ ਮੰਤਰ ਲੇਖਨ ਨੋਟਬੁੱਕ", metaDescription: "ਮੰਤਰ ਲਿਖਣ ਲਈ ਸ਼ਾਂਤ ਡਿਜ਼ਿਟਲ ਨੋਟਬੁੱਕ।",
      heroMantra: "ਡਿਜ਼ਿਟਲ ਮੰਤਰ ਲੇਖਨ", brandHomeAria: "ਡਿਜ਼ਿਟਲ ਮੰਤਰ ਲੇਖਨ ਮੁੱਖ ਪੰਨਾ", mainNavigationAria: "ਮੁੱਖ ਨੈਵੀਗੇਸ਼ਨ",
      otherLanguage: "ਹੋਰ ਭਾਰਤੀ ਭਾਸ਼ਾ", pageTitlePlaceholder: "ਮੇਰਾ ਮੰਤਰ ਅਭਿਆਸ", chooseLanguageAria: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
      customMantraPlaceholder: "ਆਪਣਾ ਮੰਤਰ ਇੱਥੇ ਲਿਖੋ", progressAria: "ਲਿਖਣ ਦੀ ਤਰੱਕੀ",
      progressText: "{total} ਵਿੱਚੋਂ {done} ਲਾਈਨਾਂ ਪੂਰੀਆਂ", writingLinesAria: "ਮੰਤਰ ਲਿਖਣ ਲਈ ਤੀਹ ਲਾਈਨਾਂ",
      mantraGayatri: "ਗਾਇਤਰੀ ਮੰਤਰ", mantraMahamrityunjaya: "ਮਹਾਮ੍ਰਿਤਿਉਂਜਯ ਮੰਤਰ",
      mantraShiva: "ੴ ਨਮਹ ਸ਼ਿਵਾਏ", mantraHareKrishna: "ਹਰੇ ਕ੍ਰਿਸ਼ਨਾ ਮਹਾਮੰਤਰ",
      aboutEyebrow: "ਸਰਲ ਡਿਜ਼ਿਟਲ ਅਭਿਆਸ", savedIntro: "ਪੰਨੇ ਉੱਤੇ ਵਾਪਸ ਆਓ ਅਤੇ ਲਿਖਣਾ ਜਾਰੀ ਰੱਖੋ।",
      emptyDescription: "ਤੁਹਾਡੇ ਸੰਭਾਲੇ ਪੰਨੇ ਇੱਥੇ ਦਿਖਣਗੇ। ਲਿਖਣਾ ਸ਼ੁਰੂ ਕਰੋ।",
      aboutCopy: "ਮੰਤਰ ਨੂੰ ਇੱਕ-ਇੱਕ ਲਾਈਨ ਲਿਖਣ ਲਈ ਸ਼ਾਂਤ ਥਾਂ। ਹਰ ਪੰਨੇ ਉੱਤੇ ਇੱਕ ਮੰਤਰ ਅਤੇ ਠੀਕ 30 ਨੰਬਰ ਵਾਲੀਆਂ ਲਾਈਨਾਂ ਹਨ।",
      privacyCopy: "ਪੰਨੇ ਸਿਰਫ਼ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੰਭਾਲੇ ਜਾਂਦੇ ਹਨ, ਸਰਵਰ ਉੱਤੇ ਨਹੀਂ। ਸਾਈਟ ਡਾਟਾ ਮਿਟਾਉਣ ਜਾਂ ਬ੍ਰਾਊਜ਼ਰ/ਡਿਵਾਈਸ ਬਦਲਣ ਨਾਲ ਇਹ ਗੁੰਮ ਹੋ ਸਕਦੇ ਹਨ। PDF ਸੰਭਾਲੋ।",
      restrictionsCopy: "ਲਿਖਣ ਵਾਲੀ ਥਾਂ ਵਿੱਚ ਕਾਪੀ, ਪੇਸਟ, ਕੱਟ ਅਤੇ ਖਿੱਚ ਕੇ ਪਾਉਣ ਉੱਤੇ ਸਿਰਫ਼ ਰੋਕ ਹੈ। ਹੋਰ ਟੈਬ, ਡਿਵੈਲਪਰ ਟੂਲ, ਐਕਸਟੈਂਸ਼ਨ ਜਾਂ ਬਾਹਰੀ ਇਨਪੁੱਟ ਨਾਲ ਕਾਪੀ ਹੋ ਸਕਦੀ ਹੈ। ਟਾਈਪਿੰਗ ਤੇ ਭਾਸ਼ਾ ਇਨਪੁੱਟ ਚਾਲੂ ਹਨ।",
      saving: "ਸੰਭਾਲਿਆ ਜਾ ਰਿਹਾ ਹੈ…", lastSaved: "ਆਖ਼ਰੀ ਵਾਰ ਸੰਭਾਲਿਆ: {time}", saveSuccess: "ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਪੰਨਾ ਸੰਭਾਲਿਆ ਗਿਆ।",
      pasteBlocked: "ਕਿਰਪਾ ਕਰਕੇ ਸ਼ਰਧਾ ਨਾਲ ਮੰਤਰ ਖ਼ੁਦ ਲਿਖੋ।", titleRequired: "ਪੰਨੇ ਦਾ ਸਿਰਲੇਖ ਲਿਖੋ।",
      clearConfirm: "ਇਸ ਪੰਨੇ ਦੀਆਂ ਸਾਰੀਆਂ 30 ਲਾਈਨਾਂ ਸਾਫ਼ ਕਰੀਏ? ਇਹ ਵਾਪਸ ਨਹੀਂ ਹੋ ਸਕਦਾ।", pageCleared: "ਪੰਨਾ ਸਾਫ਼ ਕੀਤਾ ਗਿਆ।",
      pageNotFound: "ਸੰਭਾਲਿਆ ਪੰਨਾ ਨਹੀਂ ਲੱਭਿਆ।", renamePrompt: "ਪੰਨੇ ਦਾ ਨਵਾਂ ਨਾਮ ਲਿਖੋ:",
      emptyTitleError: "ਪੰਨੇ ਦਾ ਸਿਰਲੇਖ ਖਾਲੀ ਨਹੀਂ ਹੋ ਸਕਦਾ।", deleteConfirm: "“{title}” ਮਿਟਾਈਏ? ਇਹ ਵਾਪਸ ਨਹੀਂ ਹੋ ਸਕਦਾ।",
      deleted: "ਸੰਭਾਲਿਆ ਪੰਨਾ ਮਿਟਾਇਆ ਗਿਆ।", customMantraName: "ਤੁਹਾਡਾ ਮੰਤਰ", untitledPage: "ਬਿਨਾਂ ਸਿਰਲੇਖ ਪੰਨਾ",
      pageLabel: "ਪੰਨਾ", createdLabel: "ਬਣਾਇਆ", updatedLabel: "ਅਪਡੇਟ", linesLabel: "ਲਾਈਨਾਂ",
      rename: "ਨਾਮ ਬਦਲੋ", openContinue: "ਖੋਲ੍ਹੋ / ਜਾਰੀ ਰੱਖੋ", delete: "ਮਿਟਾਓ",
      storageError: "ਪੰਨਾ ਸੰਭਾਲਿਆ ਨਹੀਂ ਜਾ ਸਕਿਆ। ਬ੍ਰਾਊਜ਼ਰ ਸਟੋਰੇਜ ਭਰੀ ਹੋ ਸਕਦੀ ਹੈ।",
      loadError: "ਸੰਭਾਲੇ ਪੰਨੇ ਪੜ੍ਹੇ ਨਹੀਂ ਜਾ ਸਕੇ।", saveStatusAria: "ਸੰਭਾਲਣ ਦੀ ਸਥਿਤੀ",
      lineAria: "ਮੰਤਰ ਲਿਖਣ ਦੀ ਲਾਈਨ {line}, ਕੁੱਲ {total}"
    },
    or: {
      documentTitle: "ଡିଜିଟାଲ୍ ମନ୍ତ୍ର ଲେଖନ ଖାତା", metaDescription: "ମନ୍ତ୍ର ଲେଖିବା ପାଇଁ ଏକ ଶାନ୍ତ ଡିଜିଟାଲ୍ ଖାତା।",
      heroMantra: "ଡିଜିଟାଲ୍ ମନ୍ତ୍ର ଲେଖନ", brandHomeAria: "ଡିଜିଟାଲ୍ ମନ୍ତ୍ର ଲେଖନ ମୂଳପୃଷ୍ଠା", mainNavigationAria: "ମୁଖ୍ୟ ନାଭିଗେସନ୍",
      otherLanguage: "ଅନ୍ୟ ଭାରତୀୟ ଭାଷା", pageTitlePlaceholder: "ମୋର ମନ୍ତ୍ର ଅଭ୍ୟାସ", chooseLanguageAria: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ",
      customMantraPlaceholder: "ଏଠାରେ ଆପଣଙ୍କ ମନ୍ତ୍ର ଲେଖନ୍ତୁ", progressAria: "ଲେଖାର ଅଗ୍ରଗତି",
      progressText: "{total} ରୁ {done} ଧାଡ଼ି ସମ୍ପୂର୍ଣ୍ଣ", writingLinesAria: "ମନ୍ତ୍ର ଲେଖିବା ପାଇଁ ତିରିଶଟି ଧାଡ଼ି",
      mantraGayatri: "ଗାୟତ୍ରୀ ମନ୍ତ୍ର", mantraMahamrityunjaya: "ମହାମୃତ୍ୟୁଞ୍ଜୟ ମନ୍ତ୍ର",
      mantraShiva: "ଓଁ ନମଃ ଶିବାୟ", mantraHareKrishna: "ହରେ କୃଷ୍ଣ ମହାମନ୍ତ୍ର",
      aboutEyebrow: "ସରଳ ଡିଜିଟାଲ୍ ଅଭ୍ୟାସ", savedIntro: "ପୃଷ୍ଠାକୁ ଫେରି ଲେଖା ଜାରି ରଖନ୍ତୁ।",
      emptyDescription: "ଆପଣଙ୍କ ସଞ୍ଚିତ ପୃଷ୍ଠା ଏଠାରେ ଦେଖାଯିବ। ଲେଖିବା ଆରମ୍ଭ କରନ୍ତୁ।",
      aboutCopy: "ଗୋଟିଏ ପରେ ଗୋଟିଏ ଧାଡ଼ିରେ ମନ୍ତ୍ର ଲେଖିବା ପାଇଁ ଶାନ୍ତ ସ୍ଥାନ। ପ୍ରତି ପୃଷ୍ଠାରେ ଗୋଟିଏ ମନ୍ତ୍ର ଓ ଠିକ୍ 30ଟି ନମ୍ବର ଧାଡ଼ି ଅଛି।",
      privacyCopy: "ପୃଷ୍ଠାଗୁଡ଼ିକ କେବଳ ଏହି ବ୍ରାଉଜରରେ ରହେ, ସର୍ଭରକୁ ପଠାଯାଏ ନାହିଁ। ସାଇଟ୍ ଡାଟା ହଟାଇଲେ କିମ୍ବା ଡିଭାଇସ୍ ବଦଳାଇଲେ ହଜିପାରେ। PDF ରଖନ୍ତୁ।",
      restrictionsCopy: "ଲେଖା ଘରେ କପି, ପେଷ୍ଟ, କଟ୍ ଓ ଟାଣି ଆଣିବା କେବଳ ନିରୁତ୍ସାହିତ କରାଯାଏ। ଅନ୍ୟ ଟ୍ୟାବ୍, ଟୁଲ୍, ଏକ୍ସଟେନ୍ସନ୍ କିମ୍ବା ବାହ୍ୟ ଇନପୁଟ୍ ଦ୍ୱାରା କପି ହୋଇପାରେ। ଟାଇପ୍ ଓ ଭାଷା ଇନପୁଟ୍ ଚାଲୁ ରହେ।",
      saving: "ସଞ୍ଚୟ ହେଉଛି…", lastSaved: "ଶେଷ ସଞ୍ଚୟ: {time}", saveSuccess: "ଏହି ବ୍ରାଉଜରରେ ପୃଷ୍ଠା ସଞ୍ଚୟ ହେଲା।",
      pasteBlocked: "ଦୟାକରି ଭକ୍ତିର ସହିତ ମନ୍ତ୍ର ନିଜେ ଲେଖନ୍ତୁ।", titleRequired: "ପୃଷ୍ଠାର ଶୀର୍ଷକ ଲେଖନ୍ତୁ।",
      clearConfirm: "ଏହି ପୃଷ୍ଠାର ସମସ୍ତ 30 ଧାଡ଼ି ଲିଭାଇବେ? ଏହା ଫେରାଇ ହେବ ନାହିଁ।", pageCleared: "ପୃଷ୍ଠା ସଫା ହେଲା।",
      pageNotFound: "ସଞ୍ଚିତ ପୃଷ୍ଠା ମିଳିଲା ନାହିଁ।", renamePrompt: "ପୃଷ୍ଠାର ନୂଆ ନାମ ଲେଖନ୍ତୁ:",
      emptyTitleError: "ପୃଷ୍ଠାର ନାମ ଖାଲି ହୋଇପାରିବ ନାହିଁ।", deleteConfirm: "“{title}” ହଟାଇବେ? ଫେରାଇ ହେବ ନାହିଁ।",
      deleted: "ସଞ୍ଚିତ ପୃଷ୍ଠା ହଟାଗଲା।", customMantraName: "ଆପଣଙ୍କ ମନ୍ତ୍ର", untitledPage: "ନାମ ନଥିବା ପୃଷ୍ଠା",
      pageLabel: "ପୃଷ୍ଠା", createdLabel: "ତିଆରି", updatedLabel: "ଅଦ୍ୟତନ", linesLabel: "ଧାଡ଼ି",
      rename: "ନାମ ବଦଳାନ୍ତୁ", openContinue: "ଖୋଲନ୍ତୁ / ଜାରି ରଖନ୍ତୁ", delete: "ହଟାନ୍ତୁ",
      storageError: "ପୃଷ୍ଠା ସଞ୍ଚୟ ହେଲା ନାହିଁ। ବ୍ରାଉଜର ଷ୍ଟୋରେଜ୍ ଭରିଯାଇଥାଇପାରେ।",
      loadError: "ସଞ୍ଚିତ ପୃଷ୍ଠା ପଢ଼ିହେଲା ନାହିଁ।", saveStatusAria: "ସଞ୍ଚୟ ଅବସ୍ଥା",
      lineAria: "ମନ୍ତ୍ର ଲେଖା ଧାଡ଼ି {line}, ମୋଟ {total}"
    },
    kn: {
      documentTitle: "ಡಿಜಿಟಲ್ ಮಂತ್ರ ಲೇಖನ ಪುಸ್ತಕ", metaDescription: "ಮಂತ್ರ ಬರೆಯಲು ಶಾಂತವಾದ ಡಿಜಿಟಲ್ ಪುಸ್ತಕ.",
      heroMantra: "ಡಿಜಿಟಲ್ ಮಂತ್ರ ಲೇಖನ", brandHomeAria: "ಡಿಜಿಟಲ್ ಮಂತ್ರ ಲೇಖನ ಮುಖಪುಟ", mainNavigationAria: "ಮುಖ್ಯ ನ್ಯಾವಿಗೇಷನ್",
      otherLanguage: "ಇತರ ಭಾರತೀಯ ಭಾಷೆ", pageTitlePlaceholder: "ನನ್ನ ಮಂತ್ರ ಅಭ್ಯಾಸ", chooseLanguageAria: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      customMantraPlaceholder: "ನಿಮ್ಮ ಮಂತ್ರವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ", progressAria: "ಬರವಣಿಗೆಯ ಪ್ರಗತಿ",
      progressText: "{total} ಸಾಲುಗಳಲ್ಲಿ {done} ಪೂರ್ಣ", writingLinesAria: "ಮಂತ್ರ ಬರೆಯಲು ಮೂವತ್ತು ಸಾಲುಗಳು",
      mantraGayatri: "ಗಾಯತ್ರಿ ಮಂತ್ರ", mantraMahamrityunjaya: "ಮಹಾಮೃತ್ಯುಂಜಯ ಮಂತ್ರ",
      mantraShiva: "ಓಂ ನಮಃ ಶಿವಾಯ", mantraHareKrishna: "ಹರೇ ಕೃಷ್ಣ ಮಹಾಮಂತ್ರ",
      aboutEyebrow: "ಸರಳ ಡಿಜಿಟಲ್ ಅಭ್ಯಾಸ", savedIntro: "ಪುಟಕ್ಕೆ ಮರಳಿ ಬರೆಯುವುದನ್ನು ಮುಂದುವರಿಸಿ.",
      emptyDescription: "ನಿಮ್ಮ ಉಳಿಸಿದ ಪುಟಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ. ಬರೆಯಲು ಪ್ರಾರಂಭಿಸಿ.",
      aboutCopy: "ಮಂತ್ರವನ್ನು ಒಂದೊಂದು ಸಾಲಾಗಿ ಬರೆಯಲು ಶಾಂತ ಸ್ಥಳ. ಪ್ರತಿ ಪುಟದಲ್ಲಿ ಒಂದು ಮಂತ್ರ ಮತ್ತು ನಿಖರವಾಗಿ 30 ಸಂಖ್ಯೆಯ ಸಾಲುಗಳಿವೆ.",
      privacyCopy: "ಪುಟಗಳು ಈ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಉಳಿಯುತ್ತವೆ, ಸರ್ವರ್‌ಗೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ. ಸೈಟ್ ಡೇಟಾ ಅಳಿಸಿದರೆ ಅಥವಾ ಸಾಧನ ಬದಲಿಸಿದರೆ ಕಳೆದುಹೋಗಬಹುದು. PDF ಉಳಿಸಿ.",
      restrictionsCopy: "ಬರವಣಿಗೆ ಜಾಗದಲ್ಲಿ ಕಾಪಿ, ಪೇಸ್ಟ್, ಕಟ್ ಮತ್ತು ಎಳೆದು ಬಿಡುವುದನ್ನು ತಡೆಯುವ ಪ್ರಯತ್ನ ಮಾತ್ರ. ಬೇರೆ ಟ್ಯಾಬ್, ಸಾಧನ, ಎಕ್ಸ್‌ಟೆನ್ಶನ್ ಅಥವಾ ಹೊರಗಿನ ಇನ್‌ಪುಟ್ ಮೂಲಕ ಕಾಪಿ ಸಾಧ್ಯ. ಟೈಪಿಂಗ್ ಮತ್ತು ಭಾಷಾ ಇನ್‌ಪುಟ್ ಕೆಲಸ ಮಾಡುತ್ತವೆ.",
      saving: "ಉಳಿಸಲಾಗುತ್ತಿದೆ…", lastSaved: "ಕೊನೆಯದಾಗಿ ಉಳಿಸಿದ್ದು: {time}", saveSuccess: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಪುಟ ಉಳಿಸಲಾಗಿದೆ.",
      pasteBlocked: "ದಯವಿಟ್ಟು ಭಕ್ತಿಯಿಂದ ಮಂತ್ರವನ್ನು ನೀವೇ ಬರೆಯಿರಿ.", titleRequired: "ಪುಟದ ಶೀರ್ಷಿಕೆ ಬರೆಯಿರಿ.",
      clearConfirm: "ಈ ಪುಟದ ಎಲ್ಲಾ 30 ಸಾಲುಗಳನ್ನು ಅಳಿಸಬೇಕೇ? ಇದನ್ನು ಹಿಂತಿರುಗಿಸಲಾಗದು.", pageCleared: "ಪುಟವನ್ನು ತೆರವುಗೊಳಿಸಲಾಗಿದೆ.",
      pageNotFound: "ಉಳಿಸಿದ ಪುಟ ಕಂಡುಬಂದಿಲ್ಲ.", renamePrompt: "ಪುಟಕ್ಕೆ ಹೊಸ ಹೆಸರನ್ನು ಬರೆಯಿರಿ:",
      emptyTitleError: "ಪುಟದ ಶೀರ್ಷಿಕೆ ಖಾಲಿಯಾಗಿರಬಾರದು.", deleteConfirm: "“{title}” ಅಳಿಸಬೇಕೇ? ಹಿಂತಿರುಗಿಸಲಾಗದು.",
      deleted: "ಉಳಿಸಿದ ಪುಟವನ್ನು ಅಳಿಸಲಾಗಿದೆ.", customMantraName: "ನಿಮ್ಮ ಮಂತ್ರ", untitledPage: "ಶೀರ್ಷಿಕೆಯಿಲ್ಲದ ಪುಟ",
      pageLabel: "ಪುಟ", createdLabel: "ರಚಿಸಿದ", updatedLabel: "ನವೀಕರಿಸಿದ", linesLabel: "ಸಾಲುಗಳು",
      rename: "ಹೆಸರು ಬದಲಿಸಿ", openContinue: "ತೆರೆ / ಮುಂದುವರಿಸಿ", delete: "ಅಳಿಸಿ",
      storageError: "ಪುಟ ಉಳಿಸಲಾಗಲಿಲ್ಲ. ಬ್ರೌಸರ್ ಸಂಗ್ರಹಣೆ ತುಂಬಿರಬಹುದು.", loadError: "ಉಳಿಸಿದ ಪುಟಗಳನ್ನು ಓದಲಾಗಲಿಲ್ಲ.",
      saveStatusAria: "ಉಳಿಸುವ ಸ್ಥಿತಿ", lineAria: "ಮಂತ್ರ ಬರವಣಿಗೆ ಸಾಲು {line}, ಒಟ್ಟು {total}"
    },
    ml: {
      documentTitle: "ഡിജിറ്റൽ മന്ത്രലേഖന പുസ്തകം", metaDescription: "മന്ത്രം എഴുതാനുള്ള ശാന്തമായ ഡിജിറ്റൽ പുസ്തകം.",
      heroMantra: "ഡിജിറ്റൽ മന്ത്രലേഖനം", brandHomeAria: "ഡിജിറ്റൽ മന്ത്രലേഖന ഹോം", mainNavigationAria: "പ്രധാന നാവിഗേഷൻ",
      otherLanguage: "മറ്റ് ഇന്ത്യൻ ഭാഷ", pageTitlePlaceholder: "എന്റെ മന്ത്രസാധന", chooseLanguageAria: "ഭാഷ തിരഞ്ഞെടുക്കുക",
      customMantraPlaceholder: "നിങ്ങളുടെ മന്ത്രം ഇവിടെ എഴുതുക", progressAria: "എഴുത്തിന്റെ പുരോഗതി",
      progressText: "{total} വരികളിൽ {done} പൂർത്തിയായി", writingLinesAria: "മന്ത്രം എഴുതാനുള്ള മുപ്പത് വരികൾ",
      mantraGayatri: "ഗായത്രി മന്ത്രം", mantraMahamrityunjaya: "മഹാമൃത്യുഞ്ജയ മന്ത്രം",
      mantraShiva: "ഓം നമഃ ശിവായ", mantraHareKrishna: "ഹരേ കൃഷ്ണ മഹാമന്ത്രം",
      aboutEyebrow: "ലളിതമായ ഡിജിറ്റൽ സാധന", savedIntro: "പേജിലേക്ക് മടങ്ങി എഴുത്ത് തുടരുക.",
      emptyDescription: "സൂക്ഷിച്ച പേജുകൾ ഇവിടെ കാണാം. എഴുതാൻ തുടങ്ങുക.",
      aboutCopy: "ഓരോ വരിയായി മന്ത്രം എഴുതാനുള്ള ശാന്തമായ ഇടം. ഓരോ പേജിലും ഒരു മന്ത്രവും കൃത്യമായി 30 നമ്പർ വരികളും ഉണ്ട്.",
      privacyCopy: "പേജുകൾ ഈ ബ്രൗസറിൽ മാത്രം സൂക്ഷിക്കുന്നു; സെർവറിലേക്ക് അയയ്ക്കുന്നില്ല. സൈറ്റ് ഡാറ്റ മായ്ച്ചാൽ അല്ലെങ്കിൽ ഉപകരണം മാറ്റിയാൽ നഷ്ടപ്പെടാം. PDF സൂക്ഷിക്കുക.",
      restrictionsCopy: "എഴുത്തിടത്തിലെ പകർത്തൽ, ഒട്ടിക്കൽ, മുറിക്കൽ എന്നിവ തടയുന്നത് ഒരു ശ്രമം മാത്രമാണ്. മറ്റൊരു ടാബ്, ഉപകരണങ്ങൾ, എക്സ്റ്റൻഷനുകൾ എന്നിവ വഴി പകർത്താം. ടൈപ്പിംഗും ഭാഷാ ഇൻപുട്ടും പ്രവർത്തിക്കും.",
      saving: "സൂക്ഷിക്കുന്നു…", lastSaved: "അവസാനം സൂക്ഷിച്ചത്: {time}", saveSuccess: "ഈ ബ്രൗസറിൽ പേജ് സൂക്ഷിച്ചു.",
      pasteBlocked: "ദയവായി ഭക്തിയോടെ മന്ത്രം സ്വയം എഴുതുക.", titleRequired: "പേജിന്റെ തലക്കെട്ട് നൽകുക.",
      clearConfirm: "ഈ പേജിലെ 30 വരികളും മായ്ക്കണോ? ഇത് തിരിച്ചെടുക്കാനാവില്ല.", pageCleared: "പേജ് മായ്ച്ചു.",
      pageNotFound: "സൂക്ഷിച്ച പേജ് കണ്ടെത്താനായില്ല.", renamePrompt: "പേജിന്റെ പുതിയ പേര് നൽകുക:",
      emptyTitleError: "പേജിന്റെ പേര് ശൂന്യമാകരുത്.", deleteConfirm: "“{title}” നീക്കണോ? തിരിച്ചെടുക്കാനാവില്ല.",
      deleted: "സൂക്ഷിച്ച പേജ് നീക്കി.", customMantraName: "നിങ്ങളുടെ മന്ത്രം", untitledPage: "പേരില്ലാത്ത പേജ്",
      pageLabel: "പേജ്", createdLabel: "സൃഷ്ടിച്ചത്", updatedLabel: "പുതുക്കിയത്", linesLabel: "വരികൾ",
      rename: "പേര് മാറ്റുക", openContinue: "തുറക്കുക / തുടരുക", delete: "നീക്കുക",
      storageError: "പേജ് സൂക്ഷിക്കാനായില്ല. ബ്രൗസർ സംഭരണം നിറഞ്ഞിരിക്കാം.", loadError: "സൂക്ഷിച്ച പേജുകൾ വായിക്കാനായില്ല.",
      saveStatusAria: "സൂക്ഷിക്കൽ നില", lineAria: "മന്ത്ര എഴുത്ത് വരി {line}, ആകെ {total}"
    },
    ur: {
      documentTitle: "ڈیجیٹل منتر لکھنے کی کاپی", metaDescription: "منتر لکھنے کے لیے ایک پُرسکون ڈیجیٹل کاپی۔",
      heroMantra: "ڈیجیٹل منتر لیکھن", brandHomeAria: "ڈیجیٹل منتر لیکھن ہوم", mainNavigationAria: "مرکزی نیویگیشن",
      otherLanguage: "دیگر بھارتی زبان", pageTitlePlaceholder: "میری منتر مشق", chooseLanguageAria: "اپنی زبان منتخب کریں",
      customMantraPlaceholder: "اپنا منتر یہاں لکھیں", progressAria: "تحریر کی پیش رفت",
      progressText: "{total} میں سے {done} سطریں مکمل", writingLinesAria: "منتر لکھنے کے لیے تیس سطریں",
      mantraGayatri: "گایتری منتر", mantraMahamrityunjaya: "مہامرتیونجے منتر",
      mantraShiva: "اوم نمः شیوائے", mantraHareKrishna: "ہرے کرشنا مہامنتر",
      aboutEyebrow: "سادہ ڈیجیٹل عبادت", savedIntro: "صفحے پر واپس آکر لکھنا جاری رکھیں۔",
      emptyDescription: "آپ کے محفوظ صفحات یہاں نظر آئیں گے۔ لکھنا شروع کریں۔",
      aboutCopy: "ایک وقت میں ایک سطر منتر لکھنے کی پُرسکون جگہ۔ ہر صفحے پر ایک منتر اور بالکل 30 نمبر والی سطریں ہیں۔",
      privacyCopy: "صفحات صرف اسی براؤزر میں محفوظ ہوتے ہیں، سرور پر نہیں بھیجے جاتے۔ سائٹ کا ڈیٹا مٹانے یا آلہ بدلنے سے یہ ضائع ہوسکتے ہیں۔ PDF محفوظ کریں۔",
      restrictionsCopy: "لکھنے کی جگہ میں نقل، چسپاں، کاٹنا اور کھینچ کر ڈالنا صرف روکا جاتا ہے۔ دوسرے ٹیب، ٹولز، ایکسٹینشن یا بیرونی ان پٹ سے نقل ممکن ہے۔ ٹائپنگ اور زبان کا ان پٹ جاری رہتا ہے۔",
      saving: "محفوظ ہو رہا ہے…", lastSaved: "آخری بار محفوظ: {time}", saveSuccess: "صفحہ اسی براؤزر میں محفوظ ہوگیا۔",
      pasteBlocked: "براہِ کرم عقیدت سے منتر خود لکھیں۔", titleRequired: "صفحے کا عنوان درج کریں۔",
      clearConfirm: "اس صفحے کی تمام 30 سطریں صاف کریں؟ یہ واپس نہیں ہوسکتا۔", pageCleared: "صفحہ صاف ہوگیا۔",
      pageNotFound: "محفوظ صفحہ نہیں ملا۔", renamePrompt: "صفحے کا نیا نام درج کریں:",
      emptyTitleError: "صفحے کا عنوان خالی نہیں ہوسکتا۔", deleteConfirm: "“{title}” حذف کریں؟ یہ واپس نہیں ہوسکتا۔",
      deleted: "محفوظ صفحہ حذف ہوگیا۔", customMantraName: "آپ کا منتر", untitledPage: "بے عنوان صفحہ",
      pageLabel: "صفحہ", createdLabel: "بنایا", updatedLabel: "تبدیل", linesLabel: "سطریں",
      rename: "نام بدلیں", openContinue: "کھولیں / جاری رکھیں", delete: "حذف کریں",
      storageError: "صفحہ محفوظ نہیں ہوسکا۔ براؤزر کی جگہ بھری ہوسکتی ہے۔", loadError: "محفوظ صفحات پڑھے نہیں جاسکے۔",
      saveStatusAria: "محفوظ کرنے کی حالت", lineAria: "منتر لکھنے کی سطر {line}، کل {total}"
    },
    ks: {
      documentTitle: "ڈیجیٹل منتر لیکھن", metaDescription: "منتر لکھنہٕ خٲطرٕ اکھ سکون دار ڈیجیٹل کاپی۔",
      heroMantra: "ڈیجیٹل منتر لیکھن", brandHomeAria: "ڈیجیٹل منتر لیکھن ہوم", mainNavigationAria: "مرکزی راہنمٲیی",
      otherLanguage: "بیاکھ ہندوستانی زبان", pageTitlePlaceholder: "میون منتر مشق", chooseLanguageAria: "پنٛنۍ زبان ژٲریو",
      customMantraPlaceholder: "اپُن منتر اتہِ لیکھو", progressAria: "لیکھنہٕ ہُنٛد پیش رفت",
      progressText: "{total} لکیٖرن منٛز {done} مکمل", writingLinesAria: "منتر لیکھنہٕ خٲطرٕ ترٛیہ لکیٖر",
      mantraGayatri: "گایتری منتر", mantraMahamrityunjaya: "مہامرتیونجے منتر",
      mantraShiva: "اوم نمہ شیوای", mantraHareKrishna: "ہرے کرشنا مہامنتر",
      aboutEyebrow: "سادہ ڈیجیٹل مشق", savedIntro: "صفحس پیٹھ واپس گژھتھ لیکھن جاری تھاویو۔",
      emptyDescription: "محفوظ کرنہٕ آمٕتۍ صفحہ اتہِ نظر یِن۔ لیکھن شروع کریو۔",
      aboutCopy: "منتر اکھ اکھ لکیٖر لیکھنہٕ خٲطرٕ سکون دار جاے۔ ہر صفحس منٛز اکھ منتر تہٕ ٹھیک 30 نمبر دار لکیٖر چھِ۔",
      privacyCopy: "صفحہ صرف یتھ براؤزر منٛز محفوظ گژھن، سرور پیٹھ نَہ۔ سائٹ ڈیٹا مٹاونہٕ یا آلہ بدلٲونہٕ سۭتۍ ضایع گژھِ ہیکن۔ PDF محفوظ کریو۔",
      restrictionsCopy: "لیکھن جاے منٛز نقل، پیسٹ، کٹ تہٕ کھینچن صرف روکُن چھُ۔ بیٚیہ ٹیب، ٹول، ایکسٹینشن یا بیرونی ان پٹ سۭتۍ نقل ہیکہِ۔ ٹائپنگ تہٕ زبان ان پٹ چالو چھِ۔",
      saving: "محفوظ کران…", lastSaved: "آخری محفوظ: {time}", saveSuccess: "صفحہ یتھ براؤزر منٛز محفوظ گوٚو۔",
      pasteBlocked: "مہربٲنی کرتھ عقیدت سان منتر پنُن لیکھو۔", titleRequired: "صفحہ ہُنٛد عنوان لیکھو۔",
      clearConfirm: "یمن صفحس ہِنٛدۍ سارٕ 30 لکیٖر مٹٲویو؟ یہ واپس نَہ آوِ۔", pageCleared: "صفحہ صاف گوٚو۔",
      pageNotFound: "محفوظ صفحہ نَہ لبن۔", renamePrompt: "صفحہ ہُنٛد نَو ناو لیکھو:",
      emptyTitleError: "صفحہ ہُنٛد ناو خالی نَہ ہیکہِ۔", deleteConfirm: "“{title}” مٹٲویو؟ یہ واپس نَہ آوِ۔",
      deleted: "محفوظ صفحہ مٹٲوِتھ۔", customMantraName: "پنُن منتر", untitledPage: "بے ناو صفحہ",
      pageLabel: "صفحہ", createdLabel: "بناونہٕ", updatedLabel: "تبدیل", linesLabel: "لکیٖر",
      rename: "ناو بدلاویو", openContinue: "کَھلیو / جاری تھاویو", delete: "مٹٲویو",
      storageError: "صفحہ محفوظ نَہ گوٚو۔ براؤزر سٹوریج بھریوٚت یا بند گژھِ ہیکہِ۔",
      loadError: "محفوظ صفحہ نَہ پڑھٲوِتھ۔", saveStatusAria: "محفوظ کرنہٕ ہُنٛد حال",
      lineAria: "منتر لیکھنہٕ لکیٖر {line}، کل {total}"
    },
    kok: {
      documentTitle: "डिजिटल मंत्र लेखन वही", metaDescription: "मंत्र बरयपाखीर शांत डिजिटल वही.",
      heroMantra: "डिजिटल मंत्र लेखन", brandHomeAria: "डिजिटल मंत्र लेखन मुखेल पान", mainNavigationAria: "मुखेल नेविगेशन",
      otherLanguage: "हेर भारतीय भास", pageTitlePlaceholder: "म्हजो मंत्र अभ्यास", chooseLanguageAria: "तुमची भास निवडात",
      customMantraPlaceholder: "तुमचो मंत्र हांगा बरयात", progressAria: "लेखनाची प्रगती",
      progressText: "{total} पंगतींतल्यान {done} पुराय", writingLinesAria: "मंत्र बरयपाखीर तीस पंगती",
      mantraGayatri: "गायत्री मंत्र", mantraMahamrityunjaya: "महामृत्युंजय मंत्र",
      mantraShiva: "ॐ नमः शिवाय", mantraHareKrishna: "हरे कृष्ण महामंत्र",
      aboutEyebrow: "सोपो डिजिटल अभ्यास", savedIntro: "पानाचेर परत येवन बरयप चालू दवरात.",
      emptyDescription: "तुमची जतन केल्लीं पानां हांगा दिसतलीं. बरयप सुरू करात.",
      aboutCopy: "मंत्र एकेक पंगतीन बरयपाखीर शांत जागो. दर एका पानार एक मंत्र आनी पुराय 30 क्रमांकित पंगती आसात.",
      privacyCopy: "पानां फकत ह्या ब्राउझरांत जतन जातात, सर्वराचेर धाडनात. सायटाचो डेटा पुसल्यार वा डिव्हाइस बदलल्यार तीं वचूंक शकतात. PDF जतन करात.",
      restrictionsCopy: "बरयपाच्या जाग्यार कॉपी, पेस्ट, कट आनी ओढून घालप फकत आडावपाचो यत्न. दुसऱ्या टॅब, टूल, एक्स्टेन्शन वा भायल्या इनपुटांतल्यान कॉपी जावंक शकता. टायपिंग आनी भास इनपुट चालू आसता.",
      saving: "जतन जाता…", lastSaved: "निमाणें जतन: {time}", saveSuccess: "ह्या ब्राउझरांत पान जतन केलां.",
      pasteBlocked: "म्हेरबानी करून भक्तीन मंत्र तुमीच बरयात.", titleRequired: "पानाचें शीर्षक बरयात.",
      clearConfirm: "ह्या पानाच्यो सगळ्यो 30 पंगती पुसच्यो? परत मेळच्यो ना.", pageCleared: "पान साफ केलां.",
      pageNotFound: "जतन केल्लें पान मेळ्ळें ना.", renamePrompt: "पानाचें नवें नांव बरयात:",
      emptyTitleError: "पानाचें नांव रिकामें आसूंक जायना.", deleteConfirm: "“{title}” काडून उडोवचें? परत मेळचें ना.",
      deleted: "जतन केल्लें पान काडून उडयलां.", customMantraName: "तुमचो मंत्र", untitledPage: "नांव नाशिल्लें पान",
      pageLabel: "पान", createdLabel: "तयार", updatedLabel: "नवीन", linesLabel: "पंगती",
      rename: "नांव बदलात", openContinue: "उगडात / चालू दवरात", delete: "काडात",
      storageError: "पान जतन जालें ना. ब्राउझर जागो भरिल्लो आसूंक शकता.",
      loadError: "जतन केल्लें पान वाचूंक जालें ना.", saveStatusAria: "जतन स्थिती",
      lineAria: "मंत्र लेखन पंगती {line}, एकूण {total}"
    },
    sd: {
      documentTitle: "ڊجيٽل منتر ليکڻ ڪتاب", metaDescription: "منتر لکڻ لاءِ هڪ سڪون وارو ڊجيٽل ڪتاب.",
      heroMantra: "ڊجيٽل منتر ليکڻ", brandHomeAria: "ڊجيٽل منتر ليکڻ گهر", mainNavigationAria: "مکيه نيويگيشن",
      otherLanguage: "ٻي هندستاني ٻولي", pageTitlePlaceholder: "منهنجي منتر مشق", chooseLanguageAria: "پنهنجي ٻولي چونڊيو",
      customMantraPlaceholder: "پنهنجو منتر هتي لکو", progressAria: "لکڻ جي اڳڀرائي",
      progressText: "{total} مان {done} سٽون مڪمل", writingLinesAria: "منتر لکڻ لاءِ ٽيهه سٽون",
      mantraGayatri: "گايتري منتر", mantraMahamrityunjaya: "مهامرتيونجي منتر",
      mantraShiva: "اوم نمः شوايا", mantraHareKrishna: "هري ڪرشنا مها منتر",
      aboutEyebrow: "سادو ڊجيٽل عمل", savedIntro: "صفحي تي موٽي لکڻ جاري رکو.",
      emptyDescription: "توهان جا محفوظ ڪيل صفحا هتي نظر ايندا. لکڻ شروع ڪريو.",
      aboutCopy: "منتر کي هڪ هڪ سٽ ۾ لکڻ لاءِ سڪون واري جاءِ. هر صفحي تي هڪ منتر ۽ پوريون 30 نمبر واريون سٽون آهن.",
      privacyCopy: "صفحا رڳو هن برائوزر ۾ محفوظ ٿين ٿا، سرور تي نه. سائيٽ جو ڊيٽا صاف ڪرڻ يا ڊوائيس بدلائڻ سان گم ٿي سگهن ٿا. PDF محفوظ ڪريو.",
      restrictionsCopy: "لکڻ واري خاني ۾ ڪاپي، پيسٽ، ڪٽ ۽ ڇڪي رکڻ رڳو روڪڻ جي ڪوشش آهي. ٻي ٽيب، اوزار، ايڪسٽينشن يا ٻاهرين ان پٽ سان ڪاپي ٿي سگهي ٿي. ٽائپنگ ۽ ٻولي ان پٽ هلن ٿا.",
      saving: "محفوظ ٿي رهيو آهي…", lastSaved: "آخري محفوظ: {time}", saveSuccess: "هن برائوزر ۾ صفحو محفوظ ٿيو.",
      pasteBlocked: "مهرباني ڪري عقيدت سان منتر پاڻ لکو.", titleRequired: "صفحي جو عنوان لکو.",
      clearConfirm: "هن صفحي جون سڀ 30 سٽون صاف ڪجن؟ واپس نه ٿينديون.", pageCleared: "صفحو صاف ٿيو.",
      pageNotFound: "محفوظ ڪيل صفحو نه مليو.", renamePrompt: "صفحي جو نئون نالو لکو:",
      emptyTitleError: "صفحي جو نالو خالي نه هئڻ گهرجي.", deleteConfirm: "“{title}” ڊاهجي؟ واپس نه ٿيندو.",
      deleted: "محفوظ ڪيل صفحو ڊهي ويو.", customMantraName: "توهان جو منتر", untitledPage: "بنا عنوان وارو صفحو",
      pageLabel: "صفحو", createdLabel: "ٺاهيو", updatedLabel: "تبديل", linesLabel: "سٽون",
      rename: "نالو بدلايو", openContinue: "کوليو / جاري رکو", delete: "ڊاهيو",
      storageError: "صفحو محفوظ نه ٿيو. برائوزر جي جاءِ ڀريل ٿي سگهي ٿي.", loadError: "محفوظ صفحا پڙهي نه سگهيا.",
      saveStatusAria: "محفوظ ڪرڻ جي حالت", lineAria: "منتر لکڻ جي سٽ {line}، ڪل {total}"
    },
    doi: {
      documentTitle: "डिजिटल मंत्र लेखन कापी", metaDescription: "मंत्र लिखने आस्तै इक शांत डिजिटल कापी।",
      heroMantra: "डिजिटल मंत्र लेखन", brandHomeAria: "डिजिटल मंत्र लेखन घर", mainNavigationAria: "मुख्य नेविगेशन",
      otherLanguage: "होर भारतीय भाशा", pageTitlePlaceholder: "मेरा मंत्र अभ्यास", chooseLanguageAria: "अपनी भाशा चुनो",
      customMantraPlaceholder: "अपना मंत्र इत्थै लिखो", progressAria: "लिखने दी प्रगति",
      progressText: "{total} चा {done} पंगतियां पूरी", writingLinesAria: "मंत्र लिखने आस्तै तीस पंगतियां",
      mantraGayatri: "गायत्री मंत्र", mantraMahamrityunjaya: "महामृत्युंजय मंत्र",
      mantraShiva: "ॐ नमः शिवाय", mantraHareKrishna: "हरे कृष्ण महामंत्र",
      aboutEyebrow: "सादा डिजिटल अभ्यास", savedIntro: "पन्ने परतियै लिखना जारी रक्खो।",
      emptyDescription: "तुंदे बचाए दे पन्ने इत्थै दिखङन। लिखना शुरू करो।",
      aboutCopy: "मंत्र इक-इक पंगती च लिखने आस्तै शांत थाहर। हर पन्ने च इक मंत्र ते ठीक 30 नंबर लाए दियां पंगतियां न।",
      privacyCopy: "पन्ने सिर्फ इस ब्राउज़र च बचदे न, सर्वर पर नेईं भेजे जंदे। साइट डेटा मिटाने या डिवाइस बदलने कन्नै गुम्म होई सकदे न। PDF बचाओ।",
      restrictionsCopy: "लिखने आह्ली जगह च कॉपी, पेस्ट, कट ते खिच्चियै पाना सिर्फ रोकने दी कोशिश ऐ। दूए टैब, टूल, एक्सटेंशन या बाहरी इनपुट कन्नै कॉपी होई सकदी ऐ। टाइपिंग ते भाशा इनपुट चलदे न।",
      saving: "बचाया जा करदा…", lastSaved: "छल्ला बचाया: {time}", saveSuccess: "इस ब्राउज़र च पन्ना बची गेआ।",
      pasteBlocked: "कृपा करियै श्रद्धा कन्नै मंत्र आपूं लिखो।", titleRequired: "पन्ने दा सिरलेख लिखो।",
      clearConfirm: "इस पन्ने दियां सारियां 30 पंगतियां मिटाइयै साफ करचियां? वापस नेईं होग।", pageCleared: "पन्ना साफ होई गेआ।",
      pageNotFound: "बचाया पन्ना नेईं लब्भा।", renamePrompt: "पन्ने दा नमा नां लिखो:",
      emptyTitleError: "पन्ने दा नां खाली नेईं होई सकदा।", deleteConfirm: "“{title}” मिटाइयै कड्डना? वापस नेईं होग।",
      deleted: "बचाया पन्ना मिटाई दित्ता।", customMantraName: "अपना मंत्र", untitledPage: "बिना नां दा पन्ना",
      pageLabel: "पन्ना", createdLabel: "बनाया", updatedLabel: "बदलेआ", linesLabel: "पंगतियां",
      rename: "नां बदलो", openContinue: "खोलो / जारी रक्खो", delete: "मिटाओ",
      storageError: "पन्ना बची नेईं सकेआ। ब्राउज़र दी जगह भरी होई सकदी ऐ।", loadError: "बचाए पन्ने पढ़े नेईं गे।",
      saveStatusAria: "बचाने दी स्थिति", lineAria: "मंत्र लेखन पंगती {line}, कुल {total}"
    },
    mai: {
      documentTitle: "डिजिटल मन्त्र लेखन पुस्तिका", metaDescription: "मन्त्र लिखबाक लेल शान्त डिजिटल पुस्तिका।",
      heroMantra: "डिजिटल मन्त्र लेखन", brandHomeAria: "डिजिटल मन्त्र लेखन घर", mainNavigationAria: "मुख्य नेविगेशन",
      otherLanguage: "दोसर भारतीय भाषा", pageTitlePlaceholder: "हमर मन्त्र अभ्यास", chooseLanguageAria: "अपन भाषा चुनू",
      customMantraPlaceholder: "एतय अपन मन्त्र लिखू", progressAria: "लेखन प्रगति",
      progressText: "{total} मे सँ {done} पाँति पूरा", writingLinesAria: "मन्त्र लेखबाक तीस पाँति",
      mantraGayatri: "गायत्री मन्त्र", mantraMahamrityunjaya: "महामृत्युंजय मन्त्र",
      mantraShiva: "ॐ नमः शिवाय", mantraHareKrishna: "हरे कृष्ण महामन्त्र",
      aboutEyebrow: "सरल डिजिटल अभ्यास", savedIntro: "पन्ना पर घुरि लेखन जारी राखू।",
      emptyDescription: "अहाँक सहेजल पन्ना एतय देखाएत। लिखब शुरू करू।",
      aboutCopy: "मन्त्र एक-एक पाँति लिखबाक शान्त जगह। प्रत्येक पन्ना पर एक मन्त्र आ ठीक 30 क्रमांकित पाँति अछि।",
      privacyCopy: "पन्ना केवल एहि ब्राउजर मे सहेजल जाइत अछि, सर्वर पर नहि। साइट डाटा मेटला वा डिवाइस बदलला पर ई हराए सकैत अछि। PDF सहेजू।",
      restrictionsCopy: "लेखन क्षेत्र मे कॉपी, पेस्ट, कट आ खींचि क' देबाक रोक केवल निरुत्साहित करैत अछि। दोसर टैब, टूल, एक्सटेंशन वा बाहरी इनपुट सँ कॉपी संभव अछि। टाइपिंग आ भाषा इनपुट चालू रहैत अछि।",
      saving: "सहेजल जा रहल अछि…", lastSaved: "अंतिम बेर सहेजल: {time}", saveSuccess: "एहि ब्राउजर मे पन्ना सहेजल गेल।",
      pasteBlocked: "कृपया भक्तिभाव सँ मन्त्र स्वयं लिखू।", titleRequired: "पन्नाक शीर्षक लिखू।",
      clearConfirm: "एहि पन्नाक सभ 30 पाँति मेटाबी? ई वापस नहि होयत।", pageCleared: "पन्ना साफ कएल गेल।",
      pageNotFound: "सहेजल पन्ना नहि भेटल।", renamePrompt: "पन्नाक नव नाम लिखू:",
      emptyTitleError: "पन्नाक नाम खाली नहि रहि सकैत अछि।", deleteConfirm: "“{title}” हटाबी? ई वापस नहि होयत।",
      deleted: "सहेजल पन्ना हटा देल गेल।", customMantraName: "अपन मन्त्र", untitledPage: "बिना शीर्षक पन्ना",
      pageLabel: "पन्ना", createdLabel: "बनाओल", updatedLabel: "अपडेट", linesLabel: "पाँति",
      rename: "नाम बदलू", openContinue: "खोलू / जारी राखू", delete: "हटाउ",
      storageError: "पन्ना नहि सहेजल जा सकल। ब्राउजर स्टोरेज भरल भ' सकैत अछि।", loadError: "सहेजल पन्ना पढ़ल नहि जा सकल।",
      saveStatusAria: "सहेजबाक स्थिति", lineAria: "मन्त्र लेखन पाँति {line}, कुल {total}"
    },
    mni: {
      documentTitle: "ꯗꯤꯖꯤꯇꯦꯜ ꯃꯟꯠꯔ ꯂꯩꯈꯟ ꯅꯣꯠꯕꯨꯛ", metaDescription: "ꯃꯟꯠꯔ ꯂꯩꯈꯅꯕ ꯁꯥꯟꯇꯤ ꯗꯤꯖꯤꯇꯦꯜ ꯅꯣꯠꯕꯨꯛ।",
      heroMantra: "ꯗꯤꯖꯤꯇꯦꯜ ꯃꯟꯠꯔ ꯂꯩꯈꯟ", brandHomeAria: "ꯃꯟꯠꯔ ꯂꯩꯈꯟ ꯍꯣꯝ", mainNavigationAria: "ꯃꯈꯜ ꯅꯦꯚꯤꯒꯦꯁꯟ",
      otherLanguage: "ꯑꯇꯩ ꯚꯥꯔꯇꯀꯤ ꯂꯣꯟ", pageTitlePlaceholder: "ꯑꯩꯒꯤ ꯃꯟꯠꯔ ꯑꯦꯛꯁꯔꯁꯥꯏꯖ", chooseLanguageAria: "ꯅꯪꯒꯤ ꯂꯣꯟ ꯈꯟꯕꯤꯌꯨ",
      customMantraPlaceholder: "ꯃꯐꯝ ꯑꯁꯤꯗ ꯅꯪꯒꯤ ꯃꯟꯠꯔ ꯂꯩꯈꯣ", progressAria: "ꯂꯩꯈꯟꯒꯤ ꯃꯈꯜ",
      progressText: "{total} ꯂꯥꯏꯟꯗꯒꯤ {done} ꯂꯥꯏꯟ ꯂꯣꯏꯔꯦ", writingLinesAria: "ꯃꯟꯠꯔ ꯂꯩꯈꯅꯕ ꯂꯥꯏꯟ 30",
      mantraGayatri: "ꯒꯥꯏꯠꯔꯤ ꯃꯟꯠꯔ", mantraMahamrityunjaya: "ꯃꯍꯥꯃ꯭ꯔꯤꯇ꯭ꯌꯨꯟꯖꯌ ꯃꯟꯠꯔ",
      mantraShiva: "ꯑꯣꯝ ꯅꯃꯍ ꯁꯤꯕꯥꯌ", mantraHareKrishna: "ꯍꯔꯦ ꯀ꯭ꯔꯤꯁ꯭ꯅ ꯃꯍꯥꯃꯟꯠꯔ",
      aboutEyebrow: "ꯂꯥꯌꯅꯥ ꯗꯤꯖꯤꯇꯦꯜ ꯑꯦꯛꯁꯔꯁꯥꯏꯖ", savedIntro: "ꯄꯦꯖꯗ ꯍꯟꯗꯣꯛꯂꯒ ꯂꯩꯈꯟ ꯃꯈꯥ ꯆꯠꯊꯕꯤꯌꯨ।",
      emptyDescription: "ꯅꯪꯒꯤ ꯁꯦꯚ ꯇꯧꯔꯕ ꯄꯦꯖꯁꯤꯡ ꯃꯐꯝ ꯑꯁꯤꯗ ꯎꯕꯥ ꯐꯪꯒꯅꯤ। ꯂꯩꯈꯕ ꯍꯧꯕꯤꯌꯨ।",
      aboutCopy: "ꯃꯟꯠꯔ ꯂꯥꯏꯟ ꯑꯃꯃꯃꯒꯤ ꯂꯩꯈꯅꯕ ꯁꯥꯟꯇꯤꯒꯤ ꯃꯐꯝ। ꯄꯦꯖ ꯈꯨꯗꯤꯡꯃꯛꯇ ꯃꯟꯠꯔ ꯑꯃꯁꯨꯡ ꯅꯝꯕꯔ 30 ꯂꯥꯏꯟ ꯂꯩ।",
      privacyCopy: "ꯄꯦꯖꯁꯤꯡ ꯑꯁꯤ ꯕ꯭ꯔꯥꯎꯖꯔ ꯑꯁꯤꯗꯃꯛ ꯁꯦꯚ ꯇꯧꯏ। ꯁꯥꯏꯠ ꯗꯥꯇꯥ ꯃꯨꯇꯤꯂꯒ ꯅꯠꯔꯒꯥ ꯗꯤꯚꯥꯏꯁ ꯍꯣꯡꯂꯒ ꯃꯥꯡꯍꯟꯕꯥ ꯌꯥꯏ। PDF ꯁꯦꯚ ꯇꯧꯕꯤꯌꯨ।",
      restrictionsCopy: "ꯂꯩꯈꯅꯕꯒꯤ ꯃꯐꯝꯗ ꯀꯣꯄꯤ, ꯄꯦꯁ꯭ꯇ, ꯀꯠ ꯑꯃꯁꯨꯡ ꯗ꯭ꯔꯦꯒ-ꯗ꯭ꯔꯣꯞ ꯇꯧꯕ ꯑꯁꯤ ꯊꯤꯡꯕꯥ ꯈꯛꯇꯃꯛ ꯇꯧꯏ। ꯑꯇꯩ ꯇꯦꯕ, ꯇꯨꯜ, ꯑꯦꯛꯁꯇꯦꯟꯁꯟ ꯅꯠꯔꯒꯥ ꯕꯥꯍ꯭ꯌ ꯏꯟꯄꯨꯠ ꯇꯥ ꯀꯣꯄꯤ ꯌꯥꯏ। ꯇꯥꯏꯄ ꯑꯃꯁꯨꯡ ꯂꯣꯟ ꯏꯟꯄꯨꯠ ꯆꯠꯊꯔꯤ।",
      saving: "ꯁꯦꯚ ꯇꯧꯔꯤ…", lastSaved: "ꯑꯔꯣꯏꯕꯗ ꯁꯦꯚ: {time}", saveSuccess: "ꯕ꯭ꯔꯥꯎꯖꯔ ꯑꯁꯤꯗ ꯄꯦꯖ ꯁꯦꯚ ꯇꯧꯔꯦ।",
      pasteBlocked: "ꯀꯔꯤꯒ ꯅꯨꯡꯁꯤꯅ ꯃꯟꯠꯔ ꯅꯪꯅ ꯈꯨꯗꯛꯅꯥ ꯂꯩꯈꯣ।", titleRequired: "ꯄꯦꯖꯒꯤ ꯃꯃꯤꯡ ꯂꯩꯈꯣ।",
      clearConfirm: "ꯄꯦꯖ ꯑꯁꯤꯒꯤ ꯂꯥꯏꯟ 30 ꯄꯨꯝꯅꯃꯛ ꯃꯨꯠꯊꯣꯛꯂꯕ꯭ꯔꯥ? ꯍꯟꯗꯣꯛ ꯍꯟꯕꯥ ꯉꯝꯗꯦ।", pageCleared: "ꯄꯦꯖ ꯑꯁꯤ ꯃꯨꯠꯊꯣꯛꯂꯦ।",
      pageNotFound: "ꯁꯦꯚ ꯇꯧꯔꯕ ꯄꯦꯖ ꯑꯗꯨ ꯐꯪꯗꯦ।", renamePrompt: "ꯄꯦꯖꯒꯤ ꯑꯅꯧꯕ ꯃꯃꯤꯡ ꯂꯩꯈꯣ:",
      emptyTitleError: "ꯄꯦꯖꯒꯤ ꯃꯃꯤꯡ ꯊꯣꯛꯅꯥ ꯂꯩꯕꯥ ꯌꯥꯗꯦ।", deleteConfirm: "“{title}” ꯃꯨꯠꯊꯣꯛꯂꯕ꯭ꯔꯥ? ꯍꯟꯗꯣꯛ ꯍꯟꯕꯥ ꯉꯝꯗꯦ।",
      deleted: "ꯁꯦꯚ ꯇꯧꯔꯕ ꯄꯦꯖ ꯃꯨꯠꯊꯣꯛꯂꯦ।", customMantraName: "ꯅꯪꯒꯤ ꯃꯟꯠꯔ", untitledPage: "ꯃꯃꯤꯡ ꯂꯩꯇꯕ ꯄꯦꯖ",
      pageLabel: "ꯄꯦꯖ", createdLabel: "ꯁꯦꯝꯈꯤ", updatedLabel: "ꯍꯟꯈꯤ", linesLabel: "ꯂꯥꯏꯟ",
      rename: "ꯃꯃꯤꯡ ꯍꯣꯡꯕ", openContinue: "ꯍꯥꯡꯗꯣꯛ / ꯃꯈꯥ ꯆꯠꯊꯕ", delete: "ꯃꯨꯠꯊꯣꯛꯄ",
      storageError: "ꯄꯦꯖ ꯁꯦꯚ ꯇꯧꯕ ꯉꯃꯗꯦ। ꯕ꯭ꯔꯥꯎꯖꯔ ꯁ꯭ꯇꯣꯔꯦꯖ ꯑꯗꯨ ꯐꯨꯜ ꯑꯣꯏꯔꯕ ꯌꯥꯏ।",
      loadError: "ꯁꯦꯚ ꯇꯧꯔꯕ ꯄꯦꯖ ꯄꯥꯕ ꯉꯃꯗꯦ।", saveStatusAria: "ꯁꯦꯚꯒꯤ ꯃꯑꯣꯡ",
      lineAria: "ꯃꯟꯠꯔ ꯂꯩꯈꯟ ꯂꯥꯏꯟ {line}, ꯃꯄꯨꯝ {total}"
    },
    brx: {
      documentTitle: "डिजिटल मंत्र लेखन नोटबुक", metaDescription: "मंत्र लिरनायनि थाखाय सोलायै डिजिटल नोटबुक।",
      heroMantra: "डिजिटल मंत्र लेखन", brandHomeAria: "डिजिटल मंत्र लेखन होम", mainNavigationAria: "गाहाय नेभिगेसन",
      otherLanguage: "गुबुन भारतारि राव", pageTitlePlaceholder: "आंनि मंत्र अभ्यास", chooseLanguageAria: "नोंथांनि राव सायख",
      customMantraPlaceholder: "बेयाव नोंथांनि मंत्र लिर", progressAria: "लिरनायनि जौगाथि",
      progressText: "{total} लाइननि गेजेराव {done} जोबोदों", writingLinesAria: "मंत्र लिरनो थाखाय 30 लाइन",
      mantraGayatri: "गायत्री मंत्र", mantraMahamrityunjaya: "महामृत्युंजय मंत्र",
      mantraShiva: "ॐ नमः शिवाय", mantraHareKrishna: "हरे कृष्ण महामंत्र",
      aboutEyebrow: "गोरलै डिजिटल अभ्यास", savedIntro: "पेजआव फिन फैयै आरो लिरनायखौ सालाय।",
      emptyDescription: "नोंथांनि थिना दोननाय पेजफोर बेयाव नुजागोन। लिरनो जागाय।",
      aboutCopy: "मंत्रखौ मोनसे लाइन मोनसे लाइन लिरनो थाखाय सोलायै जायगा। मोनफ्रोम पेजआव मोनसे मंत्र आरो खाथि 30 नंबर लाइन दं।",
      privacyCopy: "पेजफोर बे ब्राउजरआवसोन थिना दोननाय जायो, सर्भारआव थि जानाय नङा। साइट डाटा खोमोरनाय एबा डिभाइस सोलायनायाव गैया जानो हायो। PDF थिना दोन।",
      restrictionsCopy: "लिरनाय जायगायाव कपी, पेस्ट, कट आरो ड्रेग-ड्रपखौ रोकनायखौसोन खालामो। गुबुन टेब, टुल, एक्सटेंसन एबा बाहायार इनपुटजों कपी खालामनो हायो। टाइप आरो राव इनपुट सोलिगासिनो दं।",
      saving: "थिना दोनगासिनो…", lastSaved: "जोबथा थिना दोननाय: {time}", saveSuccess: "बे ब्राउजरआव पेज थिना दोनबाय।",
      pasteBlocked: "अननानै गोजोनाव मंत्रखौ गावनो लिर।", titleRequired: "पेजनि बिलाइ लिर।",
      clearConfirm: "बे पेजनि गासै 30 लाइनखौ खोमोरनो नांगौना? फिन लाबोफिननो हाया।", pageCleared: "पेजखौ साफ खालामबाय।",
      pageNotFound: "थिना दोननाय पेजखौ मोनाखै।", renamePrompt: "पेजनि गोदान मुं लिर:",
      emptyTitleError: "पेजनि मुं लामा जानो नाङा।", deleteConfirm: "“{title}” खोमोरनो नांगौना? फिन लाबोफिननो हाया।",
      deleted: "थिना दोननाय पेजखौ खोमोरबाय।", customMantraName: "नोंथांनि मंत्र", untitledPage: "मुं गैया पेज",
      pageLabel: "पेज", createdLabel: "सोरजिबाय", updatedLabel: "गोदान खालामबाय", linesLabel: "लाइन",
      rename: "मुं सोलाय", openContinue: "खोल / सालाय", delete: "खोमोर",
      storageError: "पेज थिना दोननो हायाखै। ब्राउजरनि जायगा फुरा जानो हायो।", loadError: "थिना दोननाय पेजफोर फरायनो हायाखै।",
      saveStatusAria: "थिना दोननायनि थाथाय", lineAria: "मंत्र लिरनाय लाइन {line}, गासै {total}"
    },
    sat: {
      documentTitle: "ᱰᱤᱡᱤᱴᱟᱞ ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱱᱚᱴᱵᱩᱠ", metaDescription: "ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱱᱛᱤ ᱰᱤᱡᱤᱴᱟᱞ ᱱᱚᱴᱵᱩᱠ।",
      heroMantra: "ᱰᱤᱡᱤᱴᱟᱞ ᱢᱚᱱᱛᱚᱨ ᱚᱞ", brandHomeAria: "ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱦᱚᱢ", mainNavigationAria: "ᱢᱩᱞ ᱱᱮᱵᱷᱤᱜᱮᱥᱚᱱ",
      otherLanguage: "ᱮᱴᱟᱜ ᱵᱷᱟᱨᱚᱛᱤᱭᱟ ᱯᱟᱹᱨᱥᱤ", pageTitlePlaceholder: "ᱤᱧᱟᱜ ᱢᱚᱱᱛᱚᱨ ᱟᱹᱵᱷᱤᱭᱟᱹᱥ", chooseLanguageAria: "ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
      customMantraPlaceholder: "ᱱᱚᱰᱮ ᱟᱢᱟᱜ ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱢᱮ", progressAria: "ᱚᱞ ᱟᱹᱜᱩ",
      progressText: "{total} ᱞᱟᱭᱤᱱ ᱨᱮ {done} ᱯᱩᱨᱟᱹ", writingLinesAria: "ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱛᱤᱨᱤᱥ ᱞᱟᱭᱤᱱ",
      mantraGayatri: "ᱜᱟᱭᱟᱛᱨᱤ ᱢᱚᱱᱛᱚᱨ", mantraMahamrityunjaya: "ᱢᱚᱦᱟᱢᱨᱤᱛᱭᱩᱧᱡᱚᱭ ᱢᱚᱱᱛᱚᱨ",
      mantraShiva: "ᱚᱢ ᱱᱚᱢᱚᱦ ᱥᱤᱵᱟᱭ", mantraHareKrishna: "ᱦᱚᱨᱮ ᱠᱨᱤᱥᱱᱚ ᱢᱚᱦᱟᱢᱚᱱᱛᱚᱨ",
      aboutEyebrow: "ᱞᱟᱹᱞᱤᱥ ᱰᱤᱡᱤᱴᱟᱞ ᱟᱹᱵᱷᱤᱭᱟᱹᱥ", savedIntro: "ᱯᱮᱡ ᱨᱮ ᱨᱩᱣᱟᱹᱲ ᱟᱨ ᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱪᱟᱹᱞᱟᱣ ᱢᱮ।",
      emptyDescription: "ᱟᱢᱟᱜ ᱥᱟᱸᱪᱟᱣ ᱯᱮᱡ ᱱᱚᱰᱮ ᱧᱮᱞ ᱛᱟᱦᱮᱸᱱᱟ। ᱚᱞ ᱮᱦᱚᱵ ᱢᱮ।",
      aboutCopy: "ᱢᱚᱱᱛᱚᱨ ᱞᱟᱭᱤᱱ ᱞᱟᱭᱤᱱ ᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱱᱛᱤ ᱴᱷᱟᱶ। ᱡᱚᱛᱚ ᱯᱮᱡ ᱨᱮ ᱢᱤᱫ ᱢᱚᱱᱛᱚᱨ ᱟᱨ ᱴᱷᱤᱠ 30 ᱱᱚᱢᱵᱚᱨ ᱞᱟᱭᱤᱱ ᱢᱮᱱᱟᱜᱼᱟ।",
      privacyCopy: "ᱯᱮᱡ ᱠᱷᱟᱹᱞᱤ ᱱᱚᱣᱟ ᱵᱨᱟᱣᱡᱚᱨ ᱨᱮ ᱥᱟᱸᱪᱟᱣ ᱛᱟᱦᱮᱸᱱᱟ। ᱥᱟᱭᱤᱴ ᱰᱟᱴᱟ ᱢᱮᱴᱟᱣ ᱟᱨ ᱰᱤᱵᱷᱟᱭᱤᱥ ᱵᱚᱫᱚᱞᱮᱭ ᱟᱞᱚᱢ ᱟᱹᱛᱩᱨᱚᱜᱼᱟ। PDF ᱥᱟᱸᱪᱟᱣ ᱢᱮ।",
      restrictionsCopy: "ᱚᱞ ᱴᱷᱟᱶ ᱨᱮ ᱠᱚᱯᱤ, ᱯᱮᱥᱴ, ᱠᱚᱴ ᱟᱨ ᱰᱨᱮᱜ-ᱰᱨᱚᱯ ᱫᱚ ᱦᱤᱸᱥᱤᱭᱟᱹᱣ ᱮᱱᱟ। ᱮᱴᱟᱜ ᱴᱮᱵᱽ, ᱴᱩᱞ, ᱮᱠᱥᱴᱮᱱᱥᱚᱱ ᱟᱨ ᱵᱟᱦᱨᱮ ᱤᱱᱯᱩᱴ ᱫᱟᱣᱟᱛᱮ ᱠᱚᱯᱤ ᱦᱚᱪᱚ ᱞᱮᱜᱼᱟ। ᱴᱟᱭᱤᱯ ᱟᱨ ᱯᱟᱹᱨᱥᱤ ᱤᱱᱯᱩᱴ ᱪᱟᱹᱞᱩ ᱛᱟᱦᱮᱸᱱᱟ।",
      saving: "ᱥᱟᱸᱪᱟᱣ ᱦᱚᱪᱚ ᱠᱟᱱᱟ…", lastSaved: "ᱢᱩᱪᱟᱹᱫ ᱥᱟᱸᱪᱟᱣ: {time}", saveSuccess: "ᱱᱚᱣᱟ ᱵᱨᱟᱣᱡᱚᱨ ᱨᱮ ᱯᱮᱡ ᱥᱟᱸᱪᱟᱣ ᱮᱱᱟ।",
      pasteBlocked: "ᱫᱚᱭᱟᱠᱟᱛᱮ ᱵᱷᱟᱹᱜᱽᱜᱮᱭ ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱢᱮ।", titleRequired: "ᱯᱮᱡ ᱢᱩᱬ ᱚᱞ ᱢᱮ।",
      clearConfirm: "ᱱᱚᱣᱟ ᱯᱮᱡ ᱨᱮ 30 ᱞᱟᱭᱤᱱ ᱢᱮᱴᱟᱣᱮᱫᱟ? ᱯᱷᱤᱨᱤ ᱟᱞᱚ ᱦᱚᱪᱚᱜᱼᱟ।", pageCleared: "ᱯᱮᱡ ᱥᱟᱯᱷᱟ ᱮᱱᱟ।",
      pageNotFound: "ᱥᱟᱸᱪᱟᱣ ᱯᱮᱡ ᱵᱟᱝ ᱧᱟᱢ ᱮᱱᱟ।", renamePrompt: "ᱯᱮᱡ ᱱᱟᱶᱟ ᱧᱩᱛᱩᱢ ᱚᱞ ᱢᱮ:",
      emptyTitleError: "ᱯᱮᱡ ᱧᱩᱛᱩᱢ ᱠᱷᱟᱹᱞᱤ ᱵᱟᱝ ᱛᱟᱦᱮᱸ ᱞᱮᱜᱼᱟ।", deleteConfirm: "“{title}” ᱢᱮᱴᱟᱣᱮᱫᱟ? ᱯᱷᱤᱨᱤ ᱟᱞᱚ ᱦᱚᱪᱚᱜᱼᱟ।",
      deleted: "ᱥᱟᱸᱪᱟᱣ ᱯᱮᱡ ᱢᱮᱴᱟᱣ ᱮᱱᱟ।", customMantraName: "ᱟᱢᱟᱜ ᱢᱚᱱᱛᱚᱨ", untitledPage: "ᱵᱮ-ᱧᱩᱛᱩᱢ ᱯᱮᱡ",
      pageLabel: "ᱯᱮᱡ", createdLabel: "ᱥᱮᱢᱟᱜ", updatedLabel: "ᱱᱟᱶᱟ", linesLabel: "ᱞᱟᱭᱤᱱ",
      rename: "ᱧᱩᱛᱩᱢ ᱵᱚᱫᱚᱞ", openContinue: "ᱡᱷᱤᱡ / ᱪᱟᱹᱞᱩ", delete: "ᱢᱮᱴᱟᱣ",
      storageError: "ᱯᱮᱡ ᱥᱟᱸᱪᱟᱣ ᱵᱟᱝ ᱦᱚᱪᱚ ᱞᱮᱜᱼᱟ। ᱵᱨᱟᱣᱡᱚᱨ ᱥᱴᱚᱨᱮᱡ ᱯᱩᱨᱟᱹ ᱦᱚᱪᱚ ᱞᱮᱜᱼᱟ।", loadError: "ᱥᱟᱸᱪᱟᱣ ᱯᱮᱡ ᱯᱟᱲᱦᱟᱣ ᱵᱟᱝ ᱞᱮᱜᱼᱟ।",
      saveStatusAria: "ᱥᱟᱸᱪᱟᱣ ᱥᱛᱷᱤᱛᱤ", lineAria: "ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱞᱟᱭᱤᱱ {line}, ᱢᱩᱴ {total}"
    }
};

Object.entries(localeAdditions).forEach(([code, additions]) => {
  translations[code] = { ...(translations[code] || {}), ...additions };
});

const coreLocaleAdditions = {
  as: {
    brand: "মন্ত্ৰলেখন", brandNote: "লিখিবলৈ শান্ত ঠাই", home: "গৃহ", start: "মন্ত্ৰলেখন আৰম্ভ কৰক",
    saved: "মোৰ সাঁচতীয়া পৃষ্ঠা", about: "বিষয়ে", language: "ভাষা", welcome: "শান্ত মনে, নিজৰ গতিত",
    heroTitle: "এশাৰী এশাৰীকৈ মন্ত্ৰ লিখক", heroDescription: "ভক্তিৰ বাবে সময় উলিয়াওক। মনোযোগেৰে লিখক, প্ৰগতি সাঁচক আৰু যেতিয়া ইচ্ছা উভতি আহক।",
    startWriting: "লিখা আৰম্ভ কৰক", beginPractice: "আপোনাৰ সাধনা আৰম্ভ কৰক",
    beginDescription: "মন্ত্ৰ বাছি লৈ নিজৰ গতিত ৩০টা শাৰী পূৰণ কৰক।", chooseLanguage: "আপোনাৰ ভাষা বাছক",
    languageNote: "আপোনাৰ ডিভাইচে সমৰ্থন কৰা যিকোনো লিপিত লিখিব পাৰে।", writingPractice: "আপোনাৰ লিখাৰ সাধনা",
    notebookTitle: "মন্ত্ৰৰ বহী", printExport: "প্ৰিণ্ট / PDF", pageTitleLabel: "পৃষ্ঠাৰ শিৰোনাম",
    chooseMantra: "মন্ত্ৰ বাছক", customMantra: "নিজৰ মন্ত্ৰ লিখক…", customMantraLabel: "আপোনাৰ মন্ত্ৰ",
    referenceMantra: "আৰ্হি মন্ত্ৰ", manualMessage: "অনুগ্ৰহ কৰি ভক্তিৰে মন্ত্ৰটো নিজে লিখক।",
    clearPage: "পৃষ্ঠা মচক", savePage: "পৃষ্ঠা সাঁচক", storageNotice: "পৃষ্ঠা কেৱল এই ব্ৰাউজাৰত সাঁচি থোৱা হয়। ছাইটৰ তথ্য মচিলে হেৰাব পাৰে।",
    yourPractice: "আপোনাৰ সাধনা", savedHeading: "মোৰ সাঁচতীয়া পৃষ্ঠা", newPage: "নতুন পৃষ্ঠা আৰম্ভ কৰক",
    savedIntro: "পৃষ্ঠালৈ উভতি লিখা অব্যাহত ৰাখক।", emptyTitle: "এখন নতুন পৃষ্ঠা অপেক্ষা কৰি আছে",
    aboutHeading: "এই বহীৰ বিষয়ে", privacyHeading: "আপোনাৰ পৃষ্ঠা এই ডিভাইচতে থাকে",
    restrictionsHeading: "এটি বিনম্ৰ সোঁৱৰণি", footer: "আপোনাৰ দৈনিক সাধনাৰ বাবে শান্ত ঠাই",
    languageNote: "ডিভাইচে সমৰ্থন কৰা লিপি ব্যৱহাৰ কৰক।", heroMantra: "ডিজিটেল মন্ত্ৰলেখন",
    otherLanguage: "আন ভাৰতীয় ভাষা", progressText: "{total} শাৰীৰ ভিতৰত {done} সম্পূৰ্ণ"
  },
  pa: {
    brand: "ਮੰਤਰ ਲੇਖਨ", brandNote: "ਲਿਖਣ ਲਈ ਸ਼ਾਂਤ ਥਾਂ", home: "ਮੁੱਖ ਪੰਨਾ", start: "ਮੰਤਰ ਲੇਖਨ ਸ਼ੁਰੂ ਕਰੋ",
    saved: "ਮੇਰੇ ਸੰਭਾਲੇ ਪੰਨੇ", about: "ਜਾਣਕਾਰੀ", language: "ਭਾਸ਼ਾ", welcome: "ਸ਼ਾਂਤੀ ਨਾਲ, ਆਪਣੀ ਰਫ਼ਤਾਰ ਨਾਲ",
    heroTitle: "ਇੱਕ-ਇੱਕ ਲਾਈਨ ਕਰਕੇ ਮੰਤਰ ਲਿਖੋ", heroDescription: "ਸ਼ਰਧਾ ਲਈ ਸਮਾਂ ਕੱਢੋ। ਧਿਆਨ ਨਾਲ ਲਿਖੋ, ਤਰੱਕੀ ਸੰਭਾਲੋ ਅਤੇ ਜਦੋਂ ਚਾਹੋ ਵਾਪਸ ਆਓ।",
    startWriting: "ਲਿਖਣਾ ਸ਼ੁਰੂ ਕਰੋ", beginPractice: "ਆਪਣਾ ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ",
    beginDescription: "ਮੰਤਰ ਚੁਣੋ ਅਤੇ ਆਪਣੀ ਰਫ਼ਤਾਰ ਨਾਲ 30 ਲਾਈਨਾਂ ਭਰੋ।", chooseLanguage: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
    languageNote: "ਤੁਸੀਂ ਆਪਣੀ ਡਿਵਾਈਸ ਉੱਤੇ ਉਪਲਬਧ ਕਿਸੇ ਵੀ ਲਿਪੀ ਵਿੱਚ ਲਿਖ ਸਕਦੇ ਹੋ।", writingPractice: "ਤੁਹਾਡਾ ਲਿਖਣ ਦਾ ਅਭਿਆਸ",
    notebookTitle: "ਮੰਤਰ ਨੋਟਬੁੱਕ", printExport: "ਪ੍ਰਿੰਟ / PDF", pageTitleLabel: "ਪੰਨੇ ਦਾ ਸਿਰਲੇਖ",
    chooseMantra: "ਮੰਤਰ ਚੁਣੋ", customMantra: "ਆਪਣਾ ਮੰਤਰ ਲਿਖੋ…", customMantraLabel: "ਤੁਹਾਡਾ ਮੰਤਰ",
    referenceMantra: "ਹਵਾਲਾ ਮੰਤਰ", manualMessage: "ਕਿਰਪਾ ਕਰਕੇ ਸ਼ਰਧਾ ਨਾਲ ਮੰਤਰ ਖ਼ੁਦ ਲਿਖੋ।",
    clearPage: "ਪੰਨਾ ਸਾਫ਼ ਕਰੋ", savePage: "ਪੰਨਾ ਸੰਭਾਲੋ", storageNotice: "ਪੰਨੇ ਸਿਰਫ਼ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੰਭਾਲੇ ਜਾਂਦੇ ਹਨ। ਸਾਈਟ ਡਾਟਾ ਮਿਟਣ ਨਾਲ ਇਹ ਗੁੰਮ ਹੋ ਸਕਦੇ ਹਨ।",
    yourPractice: "ਤੁਹਾਡਾ ਅਭਿਆਸ", savedHeading: "ਮੇਰੇ ਸੰਭਾਲੇ ਪੰਨੇ", newPage: "ਨਵਾਂ ਪੰਨਾ ਸ਼ੁਰੂ ਕਰੋ",
    savedIntro: "ਪੰਨੇ ਉੱਤੇ ਵਾਪਸ ਆ ਕੇ ਲਿਖਣਾ ਜਾਰੀ ਰੱਖੋ।", emptyTitle: "ਨਵਾਂ ਪੰਨਾ ਤੁਹਾਡੀ ਉਡੀਕ ਕਰਦਾ ਹੈ",
    aboutHeading: "ਇਸ ਨੋਟਬੁੱਕ ਬਾਰੇ", privacyHeading: "ਤੁਹਾਡੇ ਪੰਨੇ ਇਸੇ ਡਿਵਾਈਸ ਉੱਤੇ ਰਹਿੰਦੇ ਹਨ",
    restrictionsHeading: "ਇੱਕ ਨਿਮਰ ਯਾਦ", footer: "ਤੁਹਾਡੇ ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ ਲਈ ਸ਼ਾਂਤ ਥਾਂ",
    heroMantra: "ਡਿਜ਼ਿਟਲ ਮੰਤਰ ਲੇਖਨ", otherLanguage: "ਹੋਰ ਭਾਰਤੀ ਭਾਸ਼ਾ",
    progressText: "{total} ਵਿੱਚੋਂ {done} ਲਾਈਨਾਂ ਪੂਰੀਆਂ"
  },
  or: {
    brand: "ମନ୍ତ୍ର ଲେଖନ", brandNote: "ଲେଖିବା ପାଇଁ ଶାନ୍ତ ସ୍ଥାନ", home: "ମୂଳପୃଷ୍ଠା", start: "ମନ୍ତ୍ର ଲେଖନ ଆରମ୍ଭ କରନ୍ତୁ",
    saved: "ମୋର ସଞ୍ଚିତ ପୃଷ୍ଠା", about: "ପରିଚୟ", language: "ଭାଷା", welcome: "ଶାନ୍ତ ମନରେ, ନିଜ ଗତିରେ",
    heroTitle: "ଗୋଟିଏ ପରେ ଗୋଟିଏ ଧାଡ଼ିରେ ମନ୍ତ୍ର ଲେଖନ୍ତୁ", heroDescription: "ଭକ୍ତି ପାଇଁ ସମୟ ଦିଅନ୍ତୁ। ଧ୍ୟାନରେ ଲେଖନ୍ତୁ, ପ୍ରଗତି ସଞ୍ଚୟ କରନ୍ତୁ ଏବଂ ଇଚ୍ଛା ହେଲେ ଫେରନ୍ତୁ।",
    startWriting: "ଲେଖିବା ଆରମ୍ଭ କରନ୍ତୁ", beginPractice: "ଆପଣଙ୍କ ଅଭ୍ୟାସ ଆରମ୍ଭ କରନ୍ତୁ",
    beginDescription: "ମନ୍ତ୍ର ବାଛନ୍ତୁ ଏବଂ ନିଜ ଗତିରେ 30 ଧାଡ଼ି ପୂରଣ କରନ୍ତୁ।", chooseLanguage: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ",
    languageNote: "ଆପଣଙ୍କ ଡିଭାଇସ୍‌ରେ ଥିବା ଯେକୌଣସି ଲିପିରେ ଲେଖନ୍ତୁ।", writingPractice: "ଆପଣଙ୍କ ଲେଖା ଅଭ୍ୟାସ",
    notebookTitle: "ମନ୍ତ୍ର ଖାତା", printExport: "ପ୍ରିଣ୍ଟ / PDF", pageTitleLabel: "ପୃଷ୍ଠାର ଶୀର୍ଷକ",
    chooseMantra: "ମନ୍ତ୍ର ବାଛନ୍ତୁ", customMantra: "ନିଜ ମନ୍ତ୍ର ଲେଖନ୍ତୁ…", customMantraLabel: "ଆପଣଙ୍କ ମନ୍ତ୍ର",
    referenceMantra: "ନମୁନା ମନ୍ତ୍ର", manualMessage: "ଦୟାକରି ଭକ୍ତିର ସହିତ ମନ୍ତ୍ର ନିଜେ ଲେଖନ୍ତୁ।",
    clearPage: "ପୃଷ୍ଠା ସଫା କରନ୍ତୁ", savePage: "ପୃଷ୍ଠା ସଞ୍ଚୟ କରନ୍ତୁ", storageNotice: "ପୃଷ୍ଠା କେବଳ ଏହି ବ୍ରାଉଜରରେ ସଞ୍ଚିତ ହୁଏ। ସାଇଟ୍ ଡାଟା ହଟାଇଲେ ଏହା ହଜିପାରେ।",
    yourPractice: "ଆପଣଙ୍କ ଅଭ୍ୟାସ", savedHeading: "ମୋର ସଞ୍ଚିତ ପୃଷ୍ଠା", newPage: "ନୂଆ ପୃଷ୍ଠା ଆରମ୍ଭ କରନ୍ତୁ",
    savedIntro: "ପୃଷ୍ଠାକୁ ଫେରି ଲେଖା ଜାରି ରଖନ୍ତୁ।", emptyTitle: "ଏକ ନୂଆ ପୃଷ୍ଠା ଅପେକ୍ଷା କରୁଛି",
    aboutHeading: "ଏହି ଖାତା ବିଷୟରେ", privacyHeading: "ଆପଣଙ୍କ ପୃଷ୍ଠା ଏହି ଡିଭାଇସ୍‌ରେ ରହେ",
    restrictionsHeading: "ଏକ ନମ୍ର ସ୍ମରଣ", footer: "ଆପଣଙ୍କ ଦୈନିକ ଅଭ୍ୟାସ ପାଇଁ ଶାନ୍ତ ସ୍ଥାନ",
    heroMantra: "ଡିଜିଟାଲ୍ ମନ୍ତ୍ର ଲେଖନ", otherLanguage: "ଅନ୍ୟ ଭାରତୀୟ ଭାଷା",
    progressText: "{total} ରୁ {done} ଧାଡ଼ି ସମ୍ପୂର୍ଣ୍ଣ"
  },
  kn: {
    brand: "ಮಂತ್ರ ಲೇಖನ", brandNote: "ಬರೆಯಲು ಶಾಂತ ಸ್ಥಳ", home: "ಮುಖಪುಟ", start: "ಮಂತ್ರ ಲೇಖನ ಪ್ರಾರಂಭಿಸಿ",
    saved: "ನನ್ನ ಉಳಿಸಿದ ಪುಟಗಳು", about: "ವಿವರ", language: "ಭಾಷೆ", welcome: "ಶಾಂತವಾಗಿ, ನಿಮ್ಮ ಗತಿಯಲ್ಲಿ",
    heroTitle: "ಮಂತ್ರವನ್ನು ಒಂದೊಂದು ಸಾಲಾಗಿ ಬರೆಯಿರಿ", heroDescription: "ಭಕ್ತಿಗಾಗಿ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳಿ. ಗಮನದಿಂದ ಬರೆಯಿರಿ, ಪ್ರಗತಿಯನ್ನು ಉಳಿಸಿ ಮತ್ತು ಬೇಕಾದಾಗ ಮರಳಿ ಬನ್ನಿ.",
    startWriting: "ಬರೆಯಲು ಪ್ರಾರಂಭಿಸಿ", beginPractice: "ನಿಮ್ಮ ಅಭ್ಯಾಸ ಪ್ರಾರಂಭಿಸಿ",
    beginDescription: "ಮಂತ್ರ ಆಯ್ಕೆಮಾಡಿ, ನಿಮ್ಮ ಗತಿಯಲ್ಲಿ 30 ಸಾಲುಗಳನ್ನು ತುಂಬಿ.", chooseLanguage: "ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
    languageNote: "ನಿಮ್ಮ ಸಾಧನ ಬೆಂಬಲಿಸುವ ಯಾವುದೇ ಲಿಪಿಯಲ್ಲಿ ಬರೆಯಿರಿ.", writingPractice: "ನಿಮ್ಮ ಬರವಣಿಗೆಯ ಅಭ್ಯಾಸ",
    notebookTitle: "ಮಂತ್ರ ಪುಸ್ತಕ", printExport: "ಮುದ್ರಿಸಿ / PDF", pageTitleLabel: "ಪುಟದ ಶೀರ್ಷಿಕೆ",
    chooseMantra: "ಮಂತ್ರ ಆಯ್ಕೆಮಾಡಿ", customMantra: "ನಿಮ್ಮ ಮಂತ್ರ ಬರೆಯಿರಿ…", customMantraLabel: "ನಿಮ್ಮ ಮಂತ್ರ",
    referenceMantra: "ಉಲ್ಲೇಖ ಮಂತ್ರ", manualMessage: "ದಯವಿಟ್ಟು ಭಕ್ತಿಯಿಂದ ಮಂತ್ರವನ್ನು ನೀವೇ ಬರೆಯಿರಿ.",
    clearPage: "ಪುಟ ಅಳಿಸಿ", savePage: "ಪುಟ ಉಳಿಸಿ", storageNotice: "ಪುಟಗಳು ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತವೆ. ಸೈಟ್ ಡೇಟಾ ಅಳಿಸಿದರೆ ಕಳೆದುಹೋಗಬಹುದು.",
    yourPractice: "ನಿಮ್ಮ ಅಭ್ಯಾಸ", savedHeading: "ನನ್ನ ಉಳಿಸಿದ ಪುಟಗಳು", newPage: "ಹೊಸ ಪುಟ ಪ್ರಾರಂಭಿಸಿ",
    savedIntro: "ಪುಟಕ್ಕೆ ಮರಳಿ ಬಂದು ಬರೆಯುವುದನ್ನು ಮುಂದುವರಿಸಿ.", emptyTitle: "ಹೊಸ ಪುಟ ನಿಮಗಾಗಿ ಕಾಯುತ್ತಿದೆ",
    aboutHeading: "ಈ ಪುಸ್ತಕದ ಬಗ್ಗೆ", privacyHeading: "ನಿಮ್ಮ ಪುಟಗಳು ಈ ಸಾಧನದಲ್ಲೇ ಇರುತ್ತವೆ",
    restrictionsHeading: "ಒಂದು ವಿನಮ್ರ ನೆನಪು", footer: "ನಿಮ್ಮ ದೈನಂದಿನ ಅಭ್ಯಾಸಕ್ಕೆ ಶಾಂತ ಸ್ಥಳ",
    heroMantra: "ಡಿಜಿಟಲ್ ಮಂತ್ರ ಲೇಖನ", otherLanguage: "ಇತರ ಭಾರತೀಯ ಭಾಷೆ",
    progressText: "{total} ಸಾಲುಗಳಲ್ಲಿ {done} ಪೂರ್ಣ"
  },
  ml: {
    brand: "മന്ത്രലേഖനം", brandNote: "എഴുതാൻ ശാന്തമായ ഇടം", home: "ഹോം", start: "മന്ത്രലേഖനം തുടങ്ങുക",
    saved: "എന്റെ സൂക്ഷിച്ച പേജുകൾ", about: "വിവരം", language: "ഭാഷ", welcome: "ശാന്തമായി, നിങ്ങളുടെ വേഗത്തിൽ",
    heroTitle: "ഓരോ വരിയായി മന്ത്രം എഴുതുക", heroDescription: "ഭക്തിക്കായി സമയം കണ്ടെത്തുക. ശ്രദ്ധയോടെ എഴുതുക, പുരോഗതി സൂക്ഷിക്കുക, ഇഷ്ടമുള്ളപ്പോൾ മടങ്ങിവരുക.",
    startWriting: "എഴുതാൻ തുടങ്ങുക", beginPractice: "സാധന തുടങ്ങുക",
    beginDescription: "ഒരു മന്ത്രം തിരഞ്ഞെടുത്ത് 30 വരികൾ പൂരിപ്പിക്കുക.", chooseLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
    languageNote: "ഉപകരണം പിന്തുണയ്ക്കുന്ന ഏത് ലിപിയിലും എഴുതാം.", writingPractice: "നിങ്ങളുടെ എഴുത്ത് സാധന",
    notebookTitle: "മന്ത്ര പുസ്തകം", printExport: "പ്രിന്റ് / PDF", pageTitleLabel: "പേജിന്റെ തലക്കെട്ട്",
    chooseMantra: "മന്ത്രം തിരഞ്ഞെടുക്കുക", customMantra: "സ്വന്തം മന്ത്രം എഴുതുക…", customMantraLabel: "നിങ്ങളുടെ മന്ത്രം",
    referenceMantra: "മന്ത്ര മാതൃക", manualMessage: "ദയവായി ഭക്തിയോടെ മന്ത്രം സ്വയം എഴുതുക.",
    clearPage: "പേജ് മായ്ക്കുക", savePage: "പേജ് സൂക്ഷിക്കുക", storageNotice: "പേജുകൾ ഈ ബ്രൗസറിൽ മാത്രം സൂക്ഷിക്കുന്നു. സൈറ്റ് ഡാറ്റ മായ്ച്ചാൽ നഷ്ടപ്പെടാം.",
    yourPractice: "നിങ്ങളുടെ സാധന", savedHeading: "എന്റെ സൂക്ഷിച്ച പേജുകൾ", newPage: "പുതിയ പേജ് തുടങ്ങുക",
    savedIntro: "പേജിലേക്ക് മടങ്ങി എഴുത്ത് തുടരുക.", emptyTitle: "ഒരു പുതിയ പേജ് കാത്തിരിക്കുന്നു",
    aboutHeading: "ഈ പുസ്തകത്തെക്കുറിച്ച്", privacyHeading: "നിങ്ങളുടെ പേജുകൾ ഈ ഉപകരണത്തിൽ തുടരും",
    restrictionsHeading: "ഒരു വിനീതമായ ഓർമ്മപ്പെടുത്തൽ", footer: "ദൈനംദിന സാധനയ്ക്കുള്ള ശാന്തമായ ഇടം",
    heroMantra: "ഡിജിറ്റൽ മന്ത്രലേഖനം", otherLanguage: "മറ്റ് ഇന്ത്യൻ ഭാഷ",
    progressText: "{total} വരികളിൽ {done} പൂർത്തിയായി"
  },
  ur: {
    brand: "منتر لیکھن", brandNote: "لکھنے کے لیے پُرسکون جگہ", home: "صفحۂ اول", start: "منتر لکھنا شروع کریں",
    saved: "میرے محفوظ صفحات", about: "تعارف", language: "زبان", welcome: "سکون سے، اپنی رفتار پر",
    heroTitle: "ہر سطر میں اپنا منتر لکھیں", heroDescription: "عبادت کے لیے وقت نکالیں۔ توجہ سے لکھیں، اپنی پیش رفت محفوظ کریں اور جب چاہیں واپس آئیں۔",
    startWriting: "لکھنا شروع کریں", beginPractice: "اپنی مشق شروع کریں",
    beginDescription: "منتر منتخب کریں اور اپنی رفتار سے 30 سطریں مکمل کریں۔", chooseLanguage: "اپنی زبان منتخب کریں",
    languageNote: "اپنے آلے پر دستیاب کسی بھی رسم الخط میں لکھیں۔", writingPractice: "آپ کی تحریری مشق",
    notebookTitle: "منتر کی کاپی", printExport: "پرنٹ / PDF", pageTitleLabel: "صفحے کا عنوان",
    chooseMantra: "منتر منتخب کریں", customMantra: "اپنا منتر لکھیں…", customMantraLabel: "آپ کا منتر",
    referenceMantra: "حوالہ منتر", manualMessage: "براہِ کرم عقیدت سے منتر خود لکھیں۔",
    clearPage: "صفحہ صاف کریں", savePage: "صفحہ محفوظ کریں", storageNotice: "صفحات صرف اسی براؤزر میں محفوظ ہیں۔ سائٹ کا ڈیٹا مٹانے سے ضائع ہوسکتے ہیں۔",
    yourPractice: "آپ کی مشق", savedHeading: "میرے محفوظ صفحات", newPage: "نیا صفحہ شروع کریں",
    savedIntro: "صفحے پر واپس آکر لکھنا جاری رکھیں۔", emptyTitle: "ایک نیا صفحہ منتظر ہے",
    aboutHeading: "اس کاپی کے بارے میں", privacyHeading: "آپ کے صفحات اسی آلے پر رہتے ہیں",
    restrictionsHeading: "ایک نرم یاد دہانی", footer: "آپ کی روزانہ مشق کے لیے پُرسکون جگہ",
    heroMantra: "ڈیجیٹل منتر لیکھن", otherLanguage: "دیگر بھارتی زبان",
    progressText: "{total} میں سے {done} سطریں مکمل"
  },
  ks: {
    brand: "منتر لیکھن", brandNote: "لیکھنہٕ خٲطرٕ سکون دار جاے", home: "گھر", start: "منتر لیکھن شروع",
    saved: "میٚون محفوظ صفحہ", about: "تعارف", language: "زبان", welcome: "سکون سان، پنٛنۍ رفتار",
    heroTitle: "منتر لکیٖر لکیٖر لیکھو", heroDescription: "عقیدت خٲطرٕ وقت دِیو۔ دھیان سان لیکھو، محفوظ کریو تہٕ واپس یِیو۔",
    startWriting: "لیکھن شروع کریو", beginPractice: "پنُن عمل شروع کریو",
    beginDescription: "منتر ژٲریو تہٕ 30 لکیٖر پنٛنۍ رفتار سان پُر کریو۔", chooseLanguage: "پنٛنۍ زبان ژٲریو",
    languageNote: "پنٛنِس آلہٕ پیٹھ دستیاب رسم الخط استعمال کریو۔", writingPractice: "تُہُنٛد لیکھن عمل",
    notebookTitle: "منتر کاپی", printExport: "پرنٹ / PDF", pageTitleLabel: "صفحہ ہُنٛد عنوان",
    chooseMantra: "منتر ژٲریو", customMantra: "پنُن منتر لیکھو…", customMantraLabel: "تُہُنٛد منتر",
    referenceMantra: "حوالہ منتر", manualMessage: "مہربٲنی کرتھ عقیدت سان منتر پنُن لیکھو۔",
    clearPage: "صفحہ صاف کریو", savePage: "صفحہ محفوظ کریو", storageNotice: "صفحہ صرف یتھ براؤزر منٛز محفوظ گژھن۔ سائٹ ڈیٹا مٹاونہٕ سۭتۍ ضایع گژھِ ہیکن۔",
    yourPractice: "تُہُنٛد عمل", savedHeading: "میٚون محفوظ صفحہ", newPage: "نَو صفحہ شروع کریو",
    savedIntro: "صفحس پیٹھ واپس گژھتھ لیکھن جاری تھاویو۔", emptyTitle: "نَو صفحہ انتظار کران",
    aboutHeading: "یِم کاپی ہُنٛد تعارف", privacyHeading: "تُہُنٛد صفحہ یتھ آلہٕ پیٹھ",
    restrictionsHeading: "اکھ نرم یاد دہانی", footer: "روزانہ عمل خٲطرٕ سکون دار جاے",
    heroMantra: "ڈیجیٹل منتر لیکھن", otherLanguage: "بیاکھ ہندوستانی زبان",
    progressText: "{total} لکیٖرن منٛز {done} مکمل"
  },
  kok: {
    brand: "मंत्र लेखन", brandNote: "बरयपाखीर शांत जागो", home: "मुखेल पान", start: "मंत्र लेखन सुरू करात",
    saved: "म्हजीं जतन केल्लीं पानां", about: "माहिती", language: "भास", welcome: "शांतपणान, तुमच्या गतीन",
    heroTitle: "मंत्र एकेक पंगतीन बरयात", heroDescription: "भक्तीखातीर वेळ दिवचो. लक्ष दिवन बरयात, प्रगती जतन करात आनी परत येयात।",
    startWriting: "बरयप सुरू करात", beginPractice: "तुमचो अभ्यास सुरू करात",
    beginDescription: "मंत्र निवडून 30 पंगती तुमच्या गतीन भरात.", chooseLanguage: "तुमची भास निवडात",
    languageNote: "तुमच्या डिव्हाइसाक समर्थित आसपी खंयच्याय लिपींत बरयात.", writingPractice: "तुमचो लेखन अभ्यास",
    notebookTitle: "मंत्र वही", printExport: "प्रिंट / PDF", pageTitleLabel: "पानाचें शीर्षक",
    chooseMantra: "मंत्र निवडात", customMantra: "तुमचो मंत्र बरयात…", customMantraLabel: "तुमचो मंत्र",
    referenceMantra: "मंत्र संदर्भ", manualMessage: "म्हेरबानी करून भक्तीन मंत्र तुमीच बरयात।",
    clearPage: "पान साफ करात", savePage: "पान जतन करात", storageNotice: "पानां फकत ह्या ब्राउझरांत जतन जातात. सायटाचो डेटा पुसल्यार तीं वचूंक शकतात।",
    yourPractice: "तुमचो अभ्यास", savedHeading: "म्हजीं जतन केल्लीं पानां", newPage: "नवें पान सुरू करात",
    savedIntro: "पानाचेर परत येवन बरयप चालू दवरात.", emptyTitle: "नवें पान तुमची वाट पळयता",
    aboutHeading: "ह्या वहीविशीं", privacyHeading: "तुमचीं पानां ह्याच डिव्हाइसाचेर आसतात",
    restrictionsHeading: "एक विनम्र याद", footer: "तुमच्या रोजच्या अभ्यासाखातीर शांत जागो",
    heroMantra: "डिजिटल मंत्र लेखन", otherLanguage: "हेर भारतीय भास",
    progressText: "{total} पंगतींतल्यान {done} पुराय"
    },
    sd: {
      brand: "منتر ليکڻ", brandNote: "لکڻ لاءِ سڪون واري جاءِ", home: "گهر", start: "منتر لکڻ شروع ڪريو",
      saved: "منهنجا محفوظ صفحا", about: "تعارف", language: "ٻولي", welcome: "سڪون سان، پنهنجي رفتار تي",
      heroTitle: "منتر هڪ هڪ سٽ ۾ لکو", heroDescription: "عبادت لاءِ وقت ڪڍو. ڌيان سان لکو ۽ پنهنجي اڳڀرائي محفوظ ڪريو.",
      startWriting: "لکڻ شروع ڪريو", beginPractice: "پنهنجي مشق شروع ڪريو",
      beginDescription: "منتر چونڊيو ۽ پنهنجي رفتار سان 30 سٽون ڀريو.", chooseLanguage: "پنهنجي ٻولي چونڊيو",
      languageNote: "پنهنجي ڊوائيس تي موجود رسم الخط ۾ لکو.", writingPractice: "توهان جي لکڻ جي مشق",
      notebookTitle: "منتر ڪتاب", printExport: "پرنٽ / PDF", pageTitleLabel: "صفحي جو عنوان",
      chooseMantra: "منتر چونڊيو", customMantra: "پنهنجو منتر لکو…", customMantraLabel: "توهان جو منتر",
      referenceMantra: "حوالو منتر", manualMessage: "مهرباني ڪري عقيدت سان منتر پاڻ لکو.",
      clearPage: "صفحو صاف ڪريو", savePage: "صفحو محفوظ ڪريو", storageNotice: "صفحا رڳو هن برائوزر ۾ محفوظ ٿين ٿا؛ سائيٽ ڊيٽا مٽائڻ سان گم ٿي سگهن ٿا.",
      yourPractice: "توهان جي مشق", savedHeading: "منهنجا محفوظ صفحا", newPage: "نئون صفحو شروع ڪريو",
      savedIntro: "صفحي تي موٽي لکڻ جاري رکو.", emptyTitle: "نئون صفحو توهان جي انتظار ۾",
      aboutHeading: "هن ڪتاب بابت", privacyHeading: "صفحا هن ڊوائيس تي رهن ٿا",
      restrictionsHeading: "هڪ نرم ياد ڏياريندڙ", footer: "روزاني مشق لاءِ سڪون واري جاءِ",
      heroMantra: "ڊجيٽل منتر ليکڻ", otherLanguage: "ٻي هندستاني ٻولي", progressText: "{total} مان {done} سٽون مڪمل"
    },
    doi: {
      brand: "मंत्र लेखन", brandNote: "लिखने आस्तै शांत थाहर", home: "घर", start: "मंत्र लेखन शुरू करो",
      saved: "मेरे बचाए दे पन्ने", about: "जानकारी", language: "भाशा", welcome: "शांति कन्नै, अपनी गति कन्नै",
      heroTitle: "मंत्र इक-इक पंगती च लिखो", heroDescription: "श्रद्धा आस्तै समां कड्डो। ध्यान कन्नै लिखो ते अपनी प्रगति बचाओ।",
      startWriting: "लिखना शुरू करो", beginPractice: "अपना अभ्यास शुरू करो",
      beginDescription: "मंत्र चुनो ते अपनी गति कन्नै 30 पंगतियां भरो।", chooseLanguage: "अपनी भाशा चुनो",
      languageNote: "अपने डिवाइस पर समर्थित लिपी च लिखो।", writingPractice: "तुंदा लेखन अभ्यास",
      notebookTitle: "मंत्र कापी", printExport: "प्रिंट / PDF", pageTitleLabel: "पन्ने दा सिरलेख",
      chooseMantra: "मंत्र चुनो", customMantra: "अपना मंत्र लिखो…", customMantraLabel: "तुंदा मंत्र",
      referenceMantra: "मिसाल मंत्र", manualMessage: "कृपा करियै श्रद्धा कन्नै मंत्र आपूं लिखो।",
      clearPage: "पन्ना साफ करो", savePage: "पन्ना बचाओ", storageNotice: "पन्ने सिर्फ इस ब्राउज़र च बचदे न। साइट डेटा मिटाने कन्नै गुम्म होई सकदे न।",
      yourPractice: "तुंदा अभ्यास", savedHeading: "मेरे बचाए दे पन्ने", newPage: "नमा पन्ना शुरू करो",
      savedIntro: "पन्ने परतियै लिखना जारी रक्खो।", emptyTitle: "नमा पन्ना तुंदी इंतजार च",
      aboutHeading: "इस कापी दे बारे च", privacyHeading: "तुंदे पन्ने इस्सै डिवाइस पर रौंहदे न",
      restrictionsHeading: "इक नम्र याद", footer: "तुंदे रोज़ाना अभ्यास आस्तै शांत थाहर",
      heroMantra: "डिजिटल मंत्र लेखन", otherLanguage: "होर भारतीय भाशा", progressText: "{total} चा {done} पंगतियां पूरी"
    },
    mai: {
      brand: "मन्त्र लेखन", brandNote: "लिखबाक लेल शान्त जगह", home: "मुखपृष्ठ", start: "मन्त्र लेखन शुरू करू",
      saved: "हमर सहेजल पन्ना", about: "परिचय", language: "भाषा", welcome: "शान्त मन सँ, अपन गति सँ",
      heroTitle: "मन्त्र एक-एक पाँति लिखू", heroDescription: "भक्ति लेल समय दिअ। ध्यान सँ लिखू आ प्रगति सहेजू।",
      startWriting: "लिखब शुरू करू", beginPractice: "अपन अभ्यास शुरू करू",
      beginDescription: "मन्त्र चुनू आ अपन गति सँ 30 पाँति पूरा करू।", chooseLanguage: "अपन भाषा चुनू",
      languageNote: "अपन डिवाइस पर समर्थित कोनो लिपि मे लिखू।", writingPractice: "अहाँक लेखन अभ्यास",
      notebookTitle: "मन्त्र पुस्तिका", printExport: "प्रिन्ट / PDF", pageTitleLabel: "पन्नाक शीर्षक",
      chooseMantra: "मन्त्र चुनू", customMantra: "अपन मन्त्र लिखू…", customMantraLabel: "अहाँक मन्त्र",
      referenceMantra: "मन्त्र नमूना", manualMessage: "कृपया भक्तिभाव सँ मन्त्र स्वयं लिखू।",
      clearPage: "पन्ना साफ करू", savePage: "पन्ना सहेजू", storageNotice: "पन्ना केवल एहि ब्राउजर मे सहेजल जाइत अछि। साइट डाटा मेटला पर ई हराए सकैत अछि।",
      yourPractice: "अहाँक अभ्यास", savedHeading: "हमर सहेजल पन्ना", newPage: "नव पन्ना शुरू करू",
      savedIntro: "पन्ना पर घुरि लेखन जारी राखू।", emptyTitle: "नव पन्ना अहाँक बाट जोहैत अछि",
      aboutHeading: "एहि पुस्तिकाक बारे मे", privacyHeading: "अहाँक पन्ना एहि डिवाइस पर रहैत अछि",
      restrictionsHeading: "एकटा नम्र स्मरण", footer: "अहाँक दैनिक अभ्यास लेल शान्त जगह",
      heroMantra: "डिजिटल मन्त्र लेखन", otherLanguage: "दोसर भारतीय भाषा", progressText: "{total} मे सँ {done} पाँति पूरा"
    },
    mni: {
      brand: "ꯃꯟꯠꯔ ꯂꯩꯈꯟ", brandNote: "ꯂꯩꯈꯅꯕ ꯁꯥꯟꯇꯤꯒꯤ ꯃꯐꯝ", home: "ꯍꯣꯝ", start: "ꯃꯟꯠꯔ ꯂꯩꯈꯟ ꯍꯧꯕꯤꯌꯨ",
      saved: "ꯑꯩꯒꯤ ꯁꯦꯚ ꯄꯦꯖꯁꯤꯡ", about: "ꯃꯔꯝꯗ", language: "ꯂꯣꯟ", welcome: "ꯁꯥꯟꯇꯤꯒ ꯅꯪꯒꯤ ꯃꯇꯝꯗ",
      heroTitle: "ꯃꯟꯠꯔ ꯂꯥꯏꯟ ꯑꯃꯃꯃꯒꯤ ꯂꯩꯈꯣ", heroDescription: "ꯅꯨꯡꯁꯤꯕꯒꯤ ꯃꯇꯝ ꯄꯤꯌꯨ। ꯄꯥꯛ ꯆꯥꯎꯅ ꯂꯩꯈꯣ ꯑꯃꯁꯨꯡ ꯃꯈꯥ ꯆꯠꯊꯕꯤꯌꯨ।",
      startWriting: "ꯂꯩꯈꯕ ꯍꯧꯕꯤꯌꯨ", beginPractice: "ꯅꯪꯒꯤ ꯑꯦꯛꯁꯔꯁꯥꯏꯖ ꯍꯧꯕꯤꯌꯨ",
      beginDescription: "ꯃꯟꯠꯔ ꯈꯟꯕꯤꯌꯨ ꯑꯃꯁꯨꯡ ꯂꯥꯏꯟ 30 ꯂꯩꯈꯣ।", chooseLanguage: "ꯅꯪꯒꯤ ꯂꯣꯟ ꯈꯟꯕꯤꯌꯨ",
      languageNote: "ꯅꯪꯒꯤ ꯗꯤꯚꯥꯏꯁ ꯁꯥꯔꯇꯄꯤꯕ ꯃꯌꯦꯛ ꯑꯃꯗ ꯂꯩꯈꯣ।", writingPractice: "ꯅꯪꯒꯤ ꯂꯩꯈꯟ ꯑꯦꯛꯁꯔꯁꯥꯏꯖ",
      notebookTitle: "ꯃꯟꯠꯔ ꯅꯣꯠꯕꯨꯛ", printExport: "ꯄ꯭ꯔꯤꯟꯇ / PDF", pageTitleLabel: "ꯄꯦꯖ ꯃꯃꯤꯡ",
      chooseMantra: "ꯃꯟꯠꯔ ꯈꯟꯕꯤꯌꯨ", customMantra: "ꯅꯪꯒꯤ ꯃꯟꯠꯔ ꯂꯩꯈꯣ…", customMantraLabel: "ꯅꯪꯒꯤ ꯃꯟꯠꯔ",
      referenceMantra: "ꯃꯟꯠꯔ ꯑꯣꯏꯕ", manualMessage: "ꯀꯔꯤꯒ ꯅꯨꯡꯁꯤꯅ ꯃꯟꯠꯔ ꯅꯪꯅ ꯈꯨꯗꯛꯅꯥ ꯂꯩꯈꯣ।",
      clearPage: "ꯄꯦꯖ ꯃꯨꯠꯊꯣꯛꯄ", savePage: "ꯄꯦꯖ ꯁꯦꯚ ꯇꯧꯕ", storageNotice: "ꯄꯦꯖ ꯑꯁꯤ ꯕ꯭ꯔꯥꯎꯖꯔ ꯑꯁꯤꯗꯃꯛ ꯁꯦꯚ ꯇꯧꯏ। ꯗꯥꯇꯥ ꯃꯨꯇꯤꯂꯒ ꯃꯥꯡꯍꯟꯕꯥ ꯌꯥꯏ।",
      yourPractice: "ꯅꯪꯒꯤ ꯑꯦꯛꯁꯔꯁꯥꯏꯖ", savedHeading: "ꯑꯩꯒꯤ ꯁꯦꯚ ꯄꯦꯖꯁꯤꯡ", newPage: "ꯑꯅꯧꯕ ꯄꯦꯖ ꯍꯧꯕꯤꯌꯨ",
      savedIntro: "ꯄꯦꯖꯗ ꯍꯟꯗꯣꯛꯂꯒ ꯂꯩꯈꯟ ꯃꯈꯥ ꯆꯠꯊꯕꯤꯌꯨ।", emptyTitle: "ꯑꯅꯧꯕ ꯄꯦꯖ ꯅꯪꯒꯤ ꯃꯇꯝ ꯉꯥꯏꯔꯤ",
      aboutHeading: "ꯅꯣꯠꯕꯨꯛ ꯑꯁꯤꯒꯤ ꯃꯔꯝꯗ", privacyHeading: "ꯅꯪꯒꯤ ꯄꯦꯖ ꯗꯤꯚꯥꯏꯁ ꯑꯁꯤꯗ ꯂꯩ",
      restrictionsHeading: "ꯃꯔꯝ ꯑꯃ ꯈꯟꯅꯕꯤꯌꯨ", footer: "ꯅꯪꯒꯤ ꯅꯨꯃꯤꯠꯒꯤ ꯑꯦꯛꯁꯔꯁꯥꯏꯖ ꯁꯥꯟꯇꯤꯒꯤ ꯃꯐꯝ",
      heroMantra: "ꯗꯤꯖꯤꯇꯦꯜ ꯃꯟꯠꯔ ꯂꯩꯈꯟ", otherLanguage: "ꯑꯇꯩ ꯚꯥꯔꯇꯀꯤ ꯂꯣꯟ",
      progressText: "{total} ꯂꯥꯏꯟꯗꯒꯤ {done} ꯂꯥꯏꯟ ꯂꯣꯏꯔꯦ"
    },
    brx: {
      brand: "मंत्र लेखन", brandNote: "लिरनो थाखाय गोजोन जायगा", home: "न'आव", start: "मंत्र लेखन जागाय",
      saved: "आंनि थिना दोननाय पेजफोर", about: "सोरांथि", language: "राव", welcome: "गोजोनाव, नोंथांनि समाव",
      heroTitle: "मंत्रखौ लाइन लाइनै लिर", heroDescription: "भक्तिनि थाखाय सम लाबो। थोजासे लिर, प्रगति थिना दोन आरो फिन फै।",
      startWriting: "लिरनो जागाय", beginPractice: "नोंथांनि अभ्यास जागाय",
      beginDescription: "मंत्र सायख आरो नोंथांनि समाव 30 लाइन फुरा।", chooseLanguage: "नोंथांनि राव सायख",
      languageNote: "नोंथांनि डिभाइसाव थाखाय लिपियाव लिर।", writingPractice: "नोंथांनि लिरनाय अभ्यास",
      notebookTitle: "मंत्र नोटबुक", printExport: "प्रिन्ट / PDF", pageTitleLabel: "पेजनि बिलाइ",
      chooseMantra: "मंत्र सायख", customMantra: "गावनि मंत्र लिर…", customMantraLabel: "नोंथांनि मंत्र",
      referenceMantra: "मंत्र नमुना", manualMessage: "अननानै गोजोनाव मंत्रखौ गावनो लिर।",
      clearPage: "पेज साफ खालाम", savePage: "पेज थिना दोन", storageNotice: "पेजफोर बे ब्राउजरआवसोन थिना दोननाय जायो। साइट डाटा खोमोरनायाव गैया जानो हायो।",
      yourPractice: "नोंथांनि अभ्यास", savedHeading: "आंनि थिना दोननाय पेजफोर", newPage: "गोदान पेज जागाय",
      savedIntro: "पेजआव फिन फैयै आरो लिरनायखौ सालाय।", emptyTitle: "गोदान पेज नोंथांनि थाखाय नेगासिनो दं",
      aboutHeading: "बे नोटबुकनि सोमोन्दै", privacyHeading: "नोंथांनि पेज बे डिभाइसाव थागोन",
      restrictionsHeading: "गोजोननि मोनसे सांग्रांथि", footer: "नोंथांनि सानफ्रोमनि अभ्यासनि थाखाय गोजोन जायगा",
      heroMantra: "डिजिटल मंत्र लेखन", otherLanguage: "गुबुन भारतारि राव",
      progressText: "{total} लाइननि गेजेराव {done} जोबोदों"
    },
    sat: {
      brand: "ᱢᱚᱱᱛᱚᱨ ᱚᱞ", brandNote: "ᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱱᱛᱤ ᱴᱷᱟᱶ", home: "ᱦᱚᱢ", start: "ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱮᱦᱚᱵ",
      saved: "ᱤᱧᱟᱜ ᱥᱟᱸᱪᱟᱣ ᱯᱮᱡ", about: "ᱵᱟᱵᱚᱛ", language: "ᱯᱟᱹᱨᱥᱤ", welcome: "ᱥᱟᱱᱛᱤ ᱢᱚᱱᱮ, ᱟᱢᱟᱜ ᱥᱟᱶ",
      heroTitle: "ᱢᱚᱱᱛᱚᱨ ᱞᱟᱭᱤᱱ ᱞᱟᱭᱤᱱ ᱚᱞ ᱢᱮ", heroDescription: "ᱵᱷᱟᱹᱜᱽᱜᱮᱭ ᱞᱟᱹᱜᱤᱫ ᱚᱠᱛᱚ ᱮᱢ ᱢᱮ। ᱢᱚᱱ ᱫᱤᱭᱟᱹᱱ ᱛᱮ ᱚᱞ ᱢᱮ, ᱟᱨ ᱥᱟᱸᱪᱟᱣ ᱢᱮ।",
      startWriting: "ᱚᱞ ᱮᱦᱚᱵ ᱢᱮ", beginPractice: "ᱟᱢᱟᱜ ᱟᱹᱵᱷᱤᱭᱟᱹᱥ ᱮᱦᱚᱵ ᱢᱮ",
      beginDescription: "ᱢᱚᱱᱛᱚᱨ ᱵᱟᱪᱷᱟᱣ ᱟᱨ 30 ᱞᱟᱭᱤᱱ ᱯᱩᱨᱟᱹ ᱢᱮ।", chooseLanguage: "ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
      languageNote: "ᱟᱢᱟᱜ ᱰᱤᱵᱷᱟᱭᱤᱥ ᱨᱮ ᱢᱮᱱᱟᱜ ᱞᱤᱯᱤ ᱨᱮ ᱚᱞ ᱢᱮ।", writingPractice: "ᱟᱢᱟᱜ ᱚᱞ ᱟᱹᱵᱷᱤᱭᱟᱹᱥ",
      notebookTitle: "ᱢᱚᱱᱛᱚᱨ ᱱᱚᱴᱵᱩᱠ", printExport: "ᱯᱨᱤᱱᱴ / PDF", pageTitleLabel: "ᱯᱮᱡ ᱢᱩᱬ",
      chooseMantra: "ᱢᱚᱱᱛᱚᱨ ᱵᱟᱪᱷᱟᱣ", customMantra: "ᱟᱢᱟᱜ ᱢᱚᱱᱛᱚᱨ ᱚᱞ…", customMantraLabel: "ᱟᱢᱟᱜ ᱢᱚᱱᱛᱚᱨ",
      referenceMantra: "ᱢᱚᱱᱛᱚᱨ ᱱᱚᱢᱩᱱᱟ", manualMessage: "ᱫᱚᱭᱟᱠᱟᱛᱮ ᱵᱷᱟᱹᱜᱽᱜᱮᱭ ᱢᱚᱱᱛᱚᱨ ᱚᱞ ᱢᱮ।",
      clearPage: "ᱯᱮᱡ ᱥᱟᱯᱷᱟ", savePage: "ᱯᱮᱡ ᱥᱟᱸᱪᱟᱣ", storageNotice: "ᱯᱮᱡ ᱠᱷᱟᱹᱞᱤ ᱱᱚᱣᱟ ᱵᱨᱟᱣᱡᱚᱨ ᱨᱮ ᱥᱟᱸᱪᱟᱣ। ᱰᱟᱴᱟ ᱢᱮᱴᱟᱣ ᱛᱮ ᱟᱹᱛᱩᱨᱚᱜᱼᱟ।",
      yourPractice: "ᱟᱢᱟᱜ ᱟᱹᱵᱷᱤᱭᱟᱹᱥ", savedHeading: "ᱤᱧᱟᱜ ᱥᱟᱸᱪᱟᱣ ᱯᱮᱡ", newPage: "ᱱᱟᱶᱟ ᱯᱮᱡ ᱮᱦᱚᱵ",
      savedIntro: "ᱯᱮᱡ ᱨᱮ ᱨᱩᱣᱟᱹᱲ ᱟᱨ ᱚᱞ ᱪᱟᱹᱞᱩ ᱢᱮ।", emptyTitle: "ᱱᱟᱶᱟ ᱯᱮᱡ ᱟᱢᱟᱜ ᱞᱟᱹᱜᱤᱫ ᱦᱟᱹᱨᱟᱣᱠᱟᱱᱟ",
      aboutHeading: "ᱱᱚᱴᱵᱩᱠ ᱵᱟᱵᱚᱛ", privacyHeading: "ᱟᱢᱟᱜ ᱯᱮᱡ ᱱᱚᱣᱟ ᱰᱤᱵᱷᱟᱭᱤᱥ ᱨᱮ ᱛᱟᱦᱮᱱᱟ",
      restrictionsHeading: "ᱢᱤᱫ ᱱᱟᱢᱟᱹᱱ ᱩᱭᱦᱟᱹᱨ", footer: "ᱟᱢᱟᱜ ᱫᱤᱱ ᱨᱮᱭᱟᱜ ᱟᱹᱵᱷᱤᱭᱟᱹᱥ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱱᱛᱤ ᱴᱷᱟᱶ",
      heroMantra: "ᱰᱤᱡᱤᱴᱟᱞ ᱢᱚᱱᱛᱚᱨ ᱚᱞ", otherLanguage: "ᱮᱴᱟᱜ ᱵᱷᱟᱨᱚᱛᱤᱭᱟ ᱯᱟᱹᱨᱥᱤ",
      progressText: "{total} ᱞᱟᱭᱤᱱ ᱨᱮ {done} ᱯᱩᱨᱟᱹ"
    }
};

Object.entries(coreLocaleAdditions).forEach(([code, additions]) => {
  translations[code] = { ...(translations[code] || {}), ...additions };
});

const translationCompletions = {
  en: {
    brand: "Mantra Lekhan", brandNote: "A quiet space to write", home: "Home", start: "Start Mantra Lekhan",
    saved: "My Saved Pages", about: "About", language: "Language", welcome: "A peaceful practice, at your own pace",
    themeToggleAria: "Toggle light and dark mode", themeSaveError: "The theme preference could not be saved in this browser.",
    heroTitle: "Write Your Mantra, One Line at a Time",
    heroDescription: "Create a little space for devotion. Write mindfully, save your progress, and return whenever you are ready.",
    startWriting: "Start Writing", beginPractice: "Begin your practice",
    beginDescription: "Choose a mantra and fill each of the 30 lines at your own pace.",
    chooseLanguage: "Choose your language", languageNote: "Write in any script supported by your device.",
    writingPractice: "YOUR WRITING PRACTICE", notebookTitle: "Mantra Notebook", printExport: "Print / Export PDF",
    pageTitleLabel: "Page title", chooseMantra: "Choose a mantra", customMantra: "Enter a custom mantra…",
    customMantraLabel: "Your custom mantra", saveCustomMantra: "Save custom mantra",
    customMantraRequired: "Enter a custom mantra first.",
    customMantraAlreadySaved: "This mantra is already saved.",
    customMantraSaved: "Mantra saved. You can select it from the mantra list.",
    referenceMantra: "REFERENCE MANTRA",
    manualMessage: "Please write the mantra manually with devotion.", clearPage: "Clear Page",
    savePage: "Save Page", storageNotice: "Pages are saved only in this browser. Clearing site data may erase them.",
    yourPractice: "YOUR PRACTICE", savedHeading: "My Saved Pages", newPage: "Start a New Page",
    savedIntro: "Return to a page, continue writing, or keep a record of your practice.",
    emptyTitle: "A fresh page awaits", emptyDescription: "Your saved pages will appear here. Start writing to begin your collection.",
    aboutHeading: "About this notebook", privacyHeading: "Your pages stay on this device",
    restrictionsHeading: "A gentle reminder", aboutClosing: "May your practice bring you a moment of calm.",
    otherLanguage: "Other (English interface)", progressText: "{done} of {total} lines completed",
    footer: "A quiet space for your daily practice"
  },
  ne: {
    brand: "मन्त्र लेखन", brandNote: "लेख्नका लागि शान्त ठाउँ", home: "गृहपृष्ठ", start: "मन्त्र लेखन सुरु गर्नुहोस्",
    saved: "मेरा सुरक्षित पृष्ठहरू", about: "परिचय", language: "भाषा", welcome: "शान्त मनले, आफ्नै गतिमा",
    heroTitle: "एक पटकमा एक पङ्क्ति मन्त्र लेख्नुहोस्",
    heroDescription: "भक्तिका लागि समय निकाल्नुहोस्। ध्यान दिएर लेख्नुहोस्, प्रगति सुरक्षित गर्नुहोस् र तयार हुँदा फर्कनुहोस्।",
    startWriting: "लेख्न सुरु गर्नुहोस्", beginPractice: "आफ्नो अभ्यास सुरु गर्नुहोस्",
    beginDescription: "मन्त्र छान्नुहोस् र आफ्नै गतिमा ३० पङ्क्ति भर्नुहोस्।",
    chooseLanguage: "आफ्नो भाषा छान्नुहोस्", languageNote: "उपकरणले समर्थन गर्ने जुनसुकै लिपिमा लेख्नुहोस्।",
    writingPractice: "तपाईंको लेखन अभ्यास", notebookTitle: "मन्त्र पुस्तिका", printExport: "प्रिन्ट / PDF",
    pageTitleLabel: "पृष्ठको शीर्षक", chooseMantra: "मन्त्र छान्नुहोस्", customMantra: "आफ्नो मन्त्र लेख्नुहोस्…",
    customMantraLabel: "तपाईंको मन्त्र", referenceMantra: "मन्त्रको नमुना",
    manualMessage: "कृपया भक्तिपूर्वक मन्त्र आफैँ लेख्नुहोस्।", clearPage: "पृष्ठ खाली गर्नुहोस्",
    savePage: "पृष्ठ सुरक्षित गर्नुहोस्", storageNotice: "पृष्ठहरू यही ब्राउजरमा मात्र सुरक्षित हुन्छन्। साइटको डाटा मेटाउँदा हराउन सक्छन्।",
    yourPractice: "तपाईंको अभ्यास", savedHeading: "मेरा सुरक्षित पृष्ठहरू", newPage: "नयाँ पृष्ठ सुरु गर्नुहोस्",
    savedIntro: "पृष्ठमा फर्केर लेखाइ जारी राख्नुहोस्।", emptyTitle: "नयाँ पृष्ठ तपाईंलाई पर्खिरहेको छ",
    emptyDescription: "तपाईंका सुरक्षित पृष्ठहरू यहाँ देखिनेछन्। लेख्न सुरु गर्नुहोस्।",
    aboutHeading: "यस पुस्तिकाबारे", privacyHeading: "तपाईंका पृष्ठहरू यही उपकरणमा रहन्छन्",
    restrictionsHeading: "एउटा नम्र सम्झना", aboutClosing: "तपाईंको अभ्यासले शान्तिको क्षण ल्याओस्।",
    otherLanguage: "अन्य भारतीय भाषा", progressText: "{total} मध्ये {done} पङ्क्ति पूरा",
    footer: "तपाईंको दैनिक अभ्यासका लागि शान्त ठाउँ"
  },
  sa: {
    heroDescription: "भक्त्यर्थं समयं यच्छतु। मनसा लिखतु, प्रगतिं सञ्चिनोतु, पुनरागमनं च करोतु।",
    beginDescription: "मन्त्रं चिनोतु, स्वगत्या त्रिंशत् पङ्क्तयः पूरयतु।",
    languageNote: "यन्त्रे समर्थितायां लिप्यां लिखतु।", customMantraLabel: "भवतः स्वमन्त्रः",
    storageNotice: "पृष्ठानि केवलम् अस्मिन् ब्राउज़रे सञ्चितानि। साइट्-दत्तांशस्य मार्जनेन नश्येयुः।",
    yourPractice: "भवतः अभ्यासः", emptyTitle: "नूतनं पृष्ठं प्रतीक्षते",
    privacyHeading: "पृष्ठानि अस्मिन् यन्त्रे एव तिष्ठन्ति",
    restrictionsHeading: "विनम्रं स्मरणम्", aboutClosing: "भवतः अभ्यासः शान्तेः क्षणं ददातु।"
  },
  bn: {
    languageNote: "আপনার ডিভাইসে সমর্থিত যেকোনো লিপিতে লিখুন।",
    storageNotice: "পৃষ্ঠা শুধু এই ব্রাউজারেই থাকে। সাইটের তথ্য মুছলে হারিয়ে যেতে পারে।",
    yourPractice: "আপনার সাধনা", aboutClosing: "আপনার সাধনা শান্তির মুহূর্ত এনে দিক।"
  },
  gu: {
    heroDescription: "ભક્તિ માટે સમય કાઢો. ધ્યાનથી લખો, પ્રગતિ સાચવો અને ઇચ્છા થાય ત્યારે પાછા આવો.",
    beginDescription: "મંત્ર પસંદ કરો અને તમારી ગતિએ 30 લીટીઓ ભરો.",
    languageNote: "તમારા ઉપકરણને સમર્થિત કોઈપણ લિપિમાં લખો.", customMantraLabel: "તમારો મંત્ર",
    storageNotice: "પાનાં ફક્ત આ બ્રાઉઝરમાં સાચવાય છે. સાઇટ ડેટા સાફ કરવાથી તે ગુમ થઈ શકે છે.",
    yourPractice: "તમારો અભ્યાસ", emptyTitle: "નવું પાનું તમારી રાહ જુએ છે",
    privacyHeading: "તમારાં પાનાં આ ઉપકરણ પર જ રહે છે",
    restrictionsHeading: "એક નમ્ર યાદ", aboutClosing: "તમારો અભ્યાસ તમને શાંતિની ક્ષણ આપે."
  },
  mr: {
    heroDescription: "भक्तीसाठी वेळ काढा. लक्षपूर्वक लिहा, प्रगती जतन करा आणि तयार झाल्यावर परत या.",
    beginDescription: "मंत्र निवडा आणि आपल्या गतीने 30 ओळी भरा.",
    languageNote: "तुमच्या डिव्हाइसला समर्थित असलेल्या कोणत्याही लिपीत लिहा.", customMantraLabel: "तुमचा मंत्र",
    storageNotice: "पाने फक्त या ब्राउझरमध्ये जतन होतात. साइट डेटा पुसल्यास ती हरवू शकतात.",
    yourPractice: "तुमचा सराव", emptyTitle: "नवे पान तुमची वाट पाहत आहे",
    privacyHeading: "तुमची पाने याच डिव्हाइसवर राहतात",
    restrictionsHeading: "एक नम्र आठवण", aboutClosing: "तुमचा सराव तुम्हाला शांततेचा क्षण देवो."
  },
  ta: {
    heroDescription: "பக்திக்காக நேரம் ஒதுக்குங்கள். கவனத்துடன் எழுதுங்கள், முன்னேற்றத்தைச் சேமித்து, விரும்பும்போது திரும்புங்கள்.",
    beginDescription: "மந்திரத்தைத் தேர்ந்தெடுத்து உங்கள் வேகத்தில் 30 வரிகளை நிரப்புங்கள்.",
    languageNote: "உங்கள் சாதனம் ஆதரிக்கும் எழுத்துருவில் எழுதுங்கள்.", customMantraLabel: "உங்கள் மந்திரம்",
    storageNotice: "பக்கங்கள் இந்த உலாவியில் மட்டுமே சேமிக்கப்படும். தளத் தரவை அழித்தால் இழக்கப்படலாம்.",
    yourPractice: "உங்கள் பயிற்சி", emptyTitle: "புதிய பக்கம் காத்திருக்கிறது",
    privacyHeading: "உங்கள் பக்கங்கள் இந்தச் சாதனத்தில் இருக்கும்",
    restrictionsHeading: "ஒரு மென்மையான நினைவூட்டல்", aboutClosing: "உங்கள் பயிற்சி அமைதியைத் தரட்டும்."
  },
  te: {
    heroDescription: "భక్తి కోసం సమయం కేటాయించండి. శ్రద్ధగా రాయండి, ప్రగతిని భద్రపరచండి, సిద్ధమైనప్పుడు తిరిగి రండి.",
    beginDescription: "మంత్రాన్ని ఎంచుకుని మీ వేగంతో 30 పంక్తులు నింపండి.",
    languageNote: "మీ పరికరం మద్దతిచ్చే ఏ లిపిలోనైనా రాయండి.", customMantraLabel: "మీ మంత్రం",
    storageNotice: "పేజీలు ఈ బ్రౌజర్‌లోనే భద్రపరచబడతాయి. సైట్ డేటా తొలగిస్తే పోవచ్చు.",
    yourPractice: "మీ అభ్యాసం", emptyTitle: "కొత్త పేజీ మీ కోసం ఎదురుచూస్తోంది",
    privacyHeading: "మీ పేజీలు ఈ పరికరంలోనే ఉంటాయి",
    restrictionsHeading: "ఒక సున్నితమైన గుర్తుచేయింపు", aboutClosing: "మీ అభ్యాసం మీకు ప్రశాంతతను అందించుగాక."
  },
  as: { aboutClosing: "আপোনাৰ সাধনাই আপোনাক শান্তিৰ ক্ষণ দিয়ক।" },
  pa: { aboutClosing: "ਤੁਹਾਡਾ ਅਭਿਆਸ ਤੁਹਾਨੂੰ ਸ਼ਾਂਤੀ ਦਾ ਪਲ ਦੇਵੇ।" },
  or: { aboutClosing: "ଆପଣଙ୍କ ଅଭ୍ୟାସ ଶାନ୍ତିର ଏକ ମୁହୂର୍ତ୍ତ ଆଣୁ।" },
  kn: { aboutClosing: "ನಿಮ್ಮ ಅಭ್ಯಾಸವು ಶಾಂತಿಯ ಕ್ಷಣವನ್ನು ತರಲಿ." },
  ml: { aboutClosing: "നിങ്ങളുടെ സാധന ശാന്തിയുടെ നിമിഷം നൽകട്ടെ." },
  ur: { aboutClosing: "آپ کی مشق آپ کو سکون کا لمحہ دے۔" },
  ks: { aboutClosing: "تُہُنٛد عمل تُہِ سکون ہُنٛد لمحہ دِیو۔" },
  kok: { aboutClosing: "तुमचो अभ्यास तुमकां शांततेचो क्षण दिवो." },
  sd: { aboutClosing: "توهان جي مشق اوهان کي سڪون جو پل ڏئي." },
  doi: { aboutClosing: "तुंदा अभ्यास तुसेंगी शांति दा पल दे।" },
  mai: { aboutClosing: "अहाँक अभ्यास अहाँकेँ शान्तिक क्षण दे।" },
  mni: { aboutClosing: "ꯅꯪꯒꯤ ꯑꯦꯛꯁꯔꯁꯥꯏꯖꯅ ꯁꯥꯟꯇꯤꯒꯤ ꯃꯇꯝ ꯄꯤꯌꯨ।" },
  brx: { aboutClosing: "नोंथांनि अभ्यासआ नोंथांनो गोजोननि सम हो।" },
  sat: { aboutClosing: "ᱟᱢᱟᱜ ᱟᱹᱵᱷᱤᱭᱟᱹᱥ ᱟᱢᱟᱜ ᱥᱟᱱᱛᱤ ᱚᱠᱛᱚ ᱮᱢ ᱢᱟᱹ।" }
};

Object.entries(translationCompletions).forEach(([code, additions]) => {
  translations[code] = { ...(translations[code] || {}), ...additions };
});

const mantras = {
  gayatri: {
    hi: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
    en: "Om bhur bhuvah svah, tat savitur varenyam bhargo devasya dhimahi, dhiyo yo nah prachodayat.",
    sa: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
    bn: "ওঁ ভূর্ভুবঃ স্বঃ তৎসবিতুর্বরেণ্যং ভর্গো দেবস্য ধীমহি ধিয়ো যো নঃ প্রচোদয়াৎ ॥",
    as: "ওঁ ভূৰ্ভুৱঃ স্বঃ তৎসৱিতুৰ্ৱৰেণ্যং ভৰ্গো দেৱস্য ধীমহি ধিয়ো যো নঃ প্ৰচোদয়াৎ ॥",
    gu: "ૐ ભૂર્ભુવઃ સ્વઃ તત્સવિતુર્વરેણ્યં ભર્ગો દેવસ્ય ધીમહિ ધિયો યો નઃ પ્રચોદયાત્ ॥",
    mr: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
    pa: "ੴ ਭੂਰਭੁਵਃ ਸ੍ਵਃ ਤਤ੍ਸਵਿਤੁਰ੍ਵਰੇਣ੍ਯੰ ਭਰ੍ਗੋ ਦੇਵਸ੍ਯ ਧੀਮਹਿ ਧਿਯੋ ਯੋ ਨਃ ਪ੍ਰਚੋਦਯਾਤ੍ ॥",
    or: "ଓଁ ଭୂର୍ଭୁଵଃ ସ୍ଵଃ ତତ୍ସଵିତୁର୍ଵରେଣ୍ୟଂ ଭର୍ଗୋ ଦେଵସ୍ୟ ଧୀମହି ଧିୟୋ ୟୋ ନଃ ପ୍ରଚୋଦୟାତ୍ ॥",
    ta: "ஓம் பூர்புவஸ்ஸுவஹ தத்ஸவிதுர்வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ ந: ப்ரசோதயாத் ॥",
    te: "ఓం భూర్భువః స్వః తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి ధియో యో నః ప్రచోదయాత్ ॥",
    kn: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ ತತ್ಸವಿತುರ್ವರೇಣ್ಯಂ ಭರ್ಗೋ ದೇವಸ್ಯ ಧೀಮಹಿ ಧಿಯೋ ಯೋ ನಃ ಪ್ರಚೋದಯಾತ್ ॥",
    ml: "ഓം ഭൂർഭുവഃ സ്വഃ തത്സവിതുർവരേണ്യം ഭർഗോ ദേവസ്യ ധീമഹി ധിയോ യോ നഃ പ്രചോദയാത് ॥",
    ur: "اوم بھور بھوواہ سوواہ تت ساوتور ورینیام بھارگو دیوسیہ دھیمہی دھیو یو نہ پرچودیات ॥",
    ne: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥"
  },
  mahamrityunjaya: {
    hi: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
    sa: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
    en: "Om tryambakam yajamahe sugandhim pushtivardhanam, urvarukamiva bandhanan mrityor mukshiya maamritat."
  },
  shiva: { hi: "ॐ नमः शिवाय", sa: "ॐ नमः शिवाय", en: "Om Namah Shivaya" },
  harekrishna: {
    hi: "हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे। हरे राम हरे राम, राम राम हरे हरे॥",
    sa: "हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे। हरे राम हरे राम, राम राम हरे हरे॥",
    en: "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare; Hare Rama Hare Rama, Rama Rama Hare Hare."
  }
};

const elements = {
  views: {
    home: document.getElementById("homeView"),
    writer: document.getElementById("writerView"),
    saved: document.getElementById("savedView"),
    about: document.getElementById("aboutView")
  },
  language: document.getElementById("languageSelect"),
  themeToggle: document.getElementById("themeToggle"),
  themeIcon: document.getElementById("themeIcon"),
  homeLanguage: document.getElementById("homeLanguageSelect"),
  lines: document.getElementById("writingLines"),
  title: document.getElementById("pageTitle"),
  mantra: document.getElementById("mantraSelect"),
  customWrap: document.getElementById("customMantraWrap"),
  custom: document.getElementById("customMantra"),
  reference: document.getElementById("referenceText"),
  progress: document.getElementById("progressText"),
  progressBar: document.querySelector(".progress-track"),
  progressFill: document.getElementById("progressFill"),
  saveStatus: document.getElementById("saveStatus"),
  savedList: document.getElementById("savedPagesList"),
  savedEmpty: document.getElementById("savedEmpty"),
  toast: document.getElementById("toast")
};

let pages = loadPages();
let activePageId = null;
let currentLanguage = getInitialLanguage();
let currentTheme = getInitialTheme();
let savedCustomMantras = loadCustomMantras();
let saveTimer = null;
let toastTimer = null;

function loadPages() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(stored)) throw new Error("Saved page data has an unexpected format.");
    return stored.filter(page => page && typeof page.id === "string" && Array.isArray(page.lines))
      .map((page, index) => ({
        ...page,
        pageNumber: Number.isInteger(page.pageNumber) ? page.pageNumber : index + 1,
        lines: Array.from({ length: TOTAL_LINES }, (_, i) => String(page.lines[i] || ""))
      }));
  } catch (error) {
    console.error("Could not load saved mantra pages.", error);
    window.setTimeout(() => showToast(text("loadError")), 0);
    return [];
  }
}

function loadCustomMantras() {
  try {
    const stored = JSON.parse(localStorage.getItem(CUSTOM_MANTRAS_KEY) || "[]");
    if (!Array.isArray(stored)) throw new Error("Saved custom mantra data has an unexpected format.");
    return stored.filter(mantra => typeof mantra === "string" && mantra.trim() && mantra.length <= 500)
      .map(mantra => mantra.trim());
  } catch (error) {
    console.error("Could not load saved custom mantras.", error);
    window.setTimeout(() => showToast(text("loadError")), 0);
    return [];
  }
}

function text(key, values = {}) {
  const dictionary = translations[currentLanguage] || translations.en;
  const fallback = translations.en || {};
  const template = dictionary[key] || fallback[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] === undefined ? `{${name}}` : String(values[name]));
}

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    return languages[stored] ? stored : "hi";
  } catch (error) {
    console.error("Could not read the saved language preference.", error);
    return "hi";
  }
}

function getInitialTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch (error) {
    console.error("Could not read the saved color theme.", error);
    return "light";
  }
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = currentTheme;
  elements.themeIcon.textContent = currentTheme === "dark" ? "☀" : "☾";
  elements.themeToggle.setAttribute("aria-pressed", String(currentTheme === "dark"));
}

function toggleTheme() {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
  try {
    localStorage.setItem(THEME_KEY, currentTheme);
  } catch (error) {
    console.error("Could not save the color theme.", error);
    showToast(text("themeSaveError"));
  }
}

function storePages() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
    return true;
  } catch (error) {
    console.error("Could not save mantra pages.", error);
    showToast(text("storageError"));
    return false;
  }
}

function storeCustomMantras() {
  try {
    localStorage.setItem(CUSTOM_MANTRAS_KEY, JSON.stringify(savedCustomMantras));
    return true;
  } catch (error) {
    console.error("Could not save custom mantras.", error);
    showToast(text("storageError"));
    return false;
  }
}

function renderCustomMantraOptions() {
  elements.mantra.querySelectorAll("[data-saved-mantra]").forEach(option => option.remove());
  const customOption = elements.mantra.querySelector('option[value="custom"]');
  savedCustomMantras.forEach(mantra => {
    const option = document.createElement("option");
    option.value = "saved-custom";
    option.dataset.savedMantra = "true";
    option.dataset.mantra = mantra;
    option.textContent = mantra;
    elements.mantra.insertBefore(option, customOption);
  });
}

function saveCustomMantra() {
  const mantra = elements.custom.value.trim();
  if (!mantra) {
    showToast(text("customMantraRequired"));
    elements.custom.focus();
    return;
  }
  if (savedCustomMantras.includes(mantra)) {
    showToast(text("customMantraAlreadySaved"));
    return;
  }
  savedCustomMantras.push(mantra);
  if (!storeCustomMantras()) {
    savedCustomMantras.pop();
    return;
  }
  renderCustomMantraOptions();
  showToast(text("customMantraSaved"));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 3200);
}

function formatDate(value, language = currentLanguage, includeTime = false) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  const options = includeTime
    ? { dateStyle: "medium", timeStyle: "short" }
    : { dateStyle: "medium" };
  try {
    return new Intl.DateTimeFormat(languages[language] || "en-IN", options).format(date);
  } catch {
    return new Intl.DateTimeFormat("en-IN", options).format(date);
  }
}

function languageName(code) {
  const option = [...elements.language.options].find(item => item.value === code);
  return option ? option.textContent : "English";
}

function updateClock() {
  const now = new Date();
  const locale = languages[currentLanguage] || "en-IN";
  document.getElementById("currentDate").textContent = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(now);
  document.getElementById("currentDay").textContent = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(now);
  document.getElementById("currentTime").textContent = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(now);
}

function translateInterface() {
  const dictionary = translations[currentLanguage] || translations.en;
  document.documentElement.lang = currentLanguage === "other" ? "en" : currentLanguage;
  document.documentElement.dir = ["ur", "sd", "ks"].includes(currentLanguage) ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (dictionary[key] || translations.en[key]) node.textContent = dictionary[key] || translations.en[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    node.placeholder = dictionary[key] || translations.en[key] || "";
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(node => {
    const key = node.dataset.i18nAria;
    node.setAttribute("aria-label", dictionary[key] || translations.en[key] || "");
  });
  document.querySelectorAll("meta[data-i18n-content]").forEach(node => {
    const key = node.dataset.i18nContent;
    node.content = dictionary[key] || translations.en[key] || "";
  });
  document.title = dictionary.documentTitle || translations.en.documentTitle;
  document.getElementById("currentTime").setAttribute("aria-label", clockLabels[currentLanguage] || clockLabels.en);
  elements.language.value = currentLanguage;
  elements.homeLanguage.value = currentLanguage;
  updateClock();
  updateProgress();
  if (activePageId && !elements.views.writer.classList.contains("hidden")) {
    const page = getActivePage();
    if (page) elements.saveStatus.textContent = text("lastSaved", { time: formatDate(page.updatedAt, currentLanguage, true) });
  }
}

const clockLabels = {
  hi: "स्थानीय समय", en: "Local time", sa: "स्थानीयः समयः", bn: "স্থানীয় সময়", as: "স্থানীয় সময়",
  gu: "સ્થાનિક સમય", mr: "स्थानिक वेळ", pa: "ਸਥਾਨਕ ਸਮਾਂ", or: "ସ୍ଥାନୀୟ ସମୟ",
  ta: "உள்ளூர் நேரம்", te: "స్థానిక సమయం", kn: "ಸ್ಥಳೀಯ ಸಮಯ", ml: "പ്രാദേശിക സമയം",
  ur: "مقامی وقت", ks: "مقٲمی وقت", kok: "स्थानिक वेळ", sd: "مقامي وقت",
  doi: "स्थानीय समां", mai: "स्थानीय समय", mni: "ꯃꯐꯝꯒꯤ ꯃꯇꯝ", brx: "जायगानि सम",
  sat: "ᱴᱷᱟᱶ ᱚᱠᱛᱚ", ne: "स्थानीय समय", other: "Local time"
};

function setLanguage(language) {
  currentLanguage = languages[language] ? language : "other";
  translateInterface();
  try {
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  } catch (error) {
    console.error("Could not save the language preference.", error);
  }
  if (activePageId) {
    const page = getActivePage();
    if (page) {
      page.language = currentLanguage;
      page.updatedAt = new Date().toISOString();
      scheduleSave();
    }
  }
  updateReference();
  if (!elements.views.saved.classList.contains("hidden")) renderSavedPages();
}

function showView(name) {
  Object.entries(elements.views).forEach(([viewName, node]) => node.classList.toggle("hidden", viewName !== name));
  document.querySelectorAll(".nav-link[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === name));
  if (name === "saved") renderSavedPages();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function makeLines() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < TOTAL_LINES; i += 1) {
    const row = document.createElement("div");
    row.className = "writing-row";
    const number = document.createElement("span");
    number.className = "line-number";
    number.textContent = String(i + 1).padStart(2, "0");
    number.setAttribute("aria-hidden", "true");
    const textarea = document.createElement("textarea");
    textarea.rows = 1;
    textarea.maxLength = 500;
    textarea.dataset.line = String(i);
    textarea.setAttribute("aria-label", text("lineAria", { line: i + 1, total: TOTAL_LINES }));
    textarea.setAttribute("dir", "auto");
    textarea.autocomplete = "off";
    textarea.spellcheck = false;
    textarea.addEventListener("input", () => {
      const page = getActivePage();
      if (!page) return;
      page.lines[i] = textarea.value;
      updateProgress();
      scheduleSave();
    });
    for (const eventName of ["paste", "copy", "cut", "drop", "contextmenu"]) {
      textarea.addEventListener(eventName, event => {
        event.preventDefault();
        if (eventName === "paste") showToast(text("pasteBlocked"));
      });
    }
    textarea.addEventListener("dragover", event => event.preventDefault());
    textarea.addEventListener("keydown", event => {
      if ((event.ctrlKey || event.metaKey) && ["c", "v", "x"].includes(event.key.toLowerCase())) {
        event.preventDefault();
      }
    });
    row.append(number, textarea);
    fragment.append(row);
  }
  elements.lines.replaceChildren(fragment);
}

function getActivePage() {
  return pages.find(page => page.id === activePageId) || null;
}

function defaultTitle() {
  return `${text("brand")} — ${formatDate(new Date(), currentLanguage)}`;
}

function startNewPage() {
  const now = new Date().toISOString();
  const page = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: defaultTitle(),
    pageNumber: pages.reduce((highest, item) => Math.max(highest, Number(item.pageNumber) || 0), 0) + 1,
    mantraId: "gayatri",
    customMantra: "",
    language: currentLanguage,
    lines: Array(TOTAL_LINES).fill(""),
    createdAt: now,
    updatedAt: now
  };
  pages.unshift(page);
  activePageId = page.id;
  elements.title.value = page.title;
  elements.mantra.value = page.mantraId;
  elements.custom.value = "";
  makeLines();
  renderPage(page);
  storePages();
  showView("writer");
  elements.lines.querySelector("textarea").focus({ preventScroll: true });
}

function renderPage(page) {
  elements.title.value = page.title;
  elements.mantra.value = mantras[page.mantraId] || page.mantraId === "custom" ? page.mantraId : "custom";
  elements.custom.value = page.customMantra || "";
  elements.customWrap.classList.toggle("hidden", elements.mantra.value !== "custom");
  elements.lines.querySelectorAll("textarea").forEach((textarea, index) => {
    textarea.value = page.lines[index] || "";
  });
  elements.language.value = page.language || currentLanguage;
  currentLanguage = page.language || currentLanguage;
  translateInterface();
  updateReference();
  updateProgress();
  elements.saveStatus.textContent = text("lastSaved", { time: formatDate(page.updatedAt, currentLanguage, true) });
}

function updateReference() {
  const selected = elements.mantra.value;
  const page = getActivePage();
  if (selected === "custom") {
    elements.customWrap.classList.remove("hidden");
    elements.reference.textContent = elements.custom.value.trim() || "—";
    elements.reference.lang = currentLanguage;
  } else {
    elements.customWrap.classList.add("hidden");
    const mantra = mantras[selected] || {};
    elements.reference.textContent = mantra[currentLanguage] || mantra.sa || mantras.gayatri.sa;
    elements.reference.lang = Object.prototype.hasOwnProperty.call(mantra, currentLanguage) ? currentLanguage : "sa";
  }
  elements.reference.dir = "auto";
  if (page) {
    page.mantraId = selected;
    page.customMantra = elements.custom.value;
    page.updatedAt = new Date().toISOString();
    scheduleSave();
  }
}

function updateProgress() {
  const filled = [...elements.lines.querySelectorAll("textarea")].filter(field => field.value.trim().length > 0).length;
  elements.progress.textContent = text("progressText", { done: filled, total: TOTAL_LINES });
  elements.progressBar.setAttribute("aria-valuenow", String(filled));
  elements.progressFill.style.width = `${(filled / TOTAL_LINES) * 100}%`;
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  elements.saveStatus.textContent = text("saving");
  saveTimer = window.setTimeout(() => saveActivePage(false), 350);
}

function saveActivePage(showConfirmation) {
  const page = getActivePage();
  if (!page) return;
  const title = elements.title.value.trim();
  if (!title) {
    elements.title.setCustomValidity(text("titleRequired"));
    elements.title.reportValidity();
    elements.title.focus();
    return;
  }
  elements.title.setCustomValidity("");
  page.title = title;
  page.mantraId = elements.mantra.value;
  page.customMantra = elements.custom.value.trim();
  page.language = currentLanguage;
  page.lines = [...elements.lines.querySelectorAll("textarea")].map(field => field.value);
  page.updatedAt = new Date().toISOString();
  if (storePages()) {
    elements.saveStatus.textContent = text("lastSaved", { time: formatDate(page.updatedAt, currentLanguage, true) });
    if (showConfirmation) showToast(text("saveSuccess"));
  }
}

function openPage(id) {
  const page = pages.find(item => item.id === id);
  if (!page) {
    showToast(text("pageNotFound"));
    renderSavedPages();
    return;
  }
  activePageId = page.id;
  currentLanguage = languages[page.language] ? page.language : "hi";
  elements.language.value = currentLanguage;
  makeLines();
  renderPage(page);
  showView("writer");
}

function renderSavedPages() {
  elements.savedList.replaceChildren();
  elements.savedEmpty.classList.toggle("hidden", pages.length > 0);
  elements.savedList.classList.toggle("hidden", pages.length === 0);
  pages.forEach(page => {
    const card = document.createElement("article");
    card.className = "saved-card";
    const details = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = page.title || text("untitledPage");
    const meta = document.createElement("p");
    const completed = page.lines.filter(line => String(line).trim()).length;
    meta.textContent = `${text("pageLabel")} ${page.pageNumber || pages.indexOf(page) + 1} · ${languageName(page.language || "hi")} · ${text("createdLabel")} ${formatDate(page.createdAt, page.language, true)} · ${text("updatedLabel")} ${formatDate(page.updatedAt, page.language, true)} · ${completed}/${TOTAL_LINES} ${text("linesLabel")}`;
    const mantraText = document.createElement("p");
    mantraText.className = "saved-mantra";
    const mantra = mantras[page.mantraId] || {};
    mantraText.textContent = page.mantraId === "custom"
      ? page.customMantra || text("customMantraName")
      : mantra[page.language] || mantra.sa || mantras.gayatri.sa;
    details.append(title, meta, mantraText);
    const actions = document.createElement("div");
    actions.className = "saved-card-actions";
    actions.append(
      makeSavedButton(text("rename"), "rename", page.id),
      makeSavedButton(text("openContinue"), "open", page.id),
      makeSavedButton(text("delete"), "delete", page.id, "delete")
    );
    card.append(details, actions);
    elements.savedList.append(card);
  });
}

function makeSavedButton(label, action, id, extraClass = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `small-button ${extraClass}`.trim();
  button.textContent = label;
  button.dataset.pageAction = action;
  button.dataset.pageId = id;
  return button;
}

function clearPage() {
  if (!window.confirm(text("clearConfirm"))) return;
  const page = getActivePage();
  if (!page) return;
  page.lines = Array(TOTAL_LINES).fill("");
  elements.lines.querySelectorAll("textarea").forEach(field => { field.value = ""; });
  updateProgress();
  saveActivePage(false);
  showToast(text("pageCleared"));
}

function handleSavedAction(event) {
  const button = event.target.closest("[data-page-action]");
  if (!button) return;
  const page = pages.find(item => item.id === button.dataset.pageId);
  if (!page) return;
  if (button.dataset.pageAction === "open") openPage(page.id);
  if (button.dataset.pageAction === "rename") {
    const nextTitle = window.prompt(text("renamePrompt"), page.title);
    if (nextTitle === null) return;
    if (!nextTitle.trim()) {
      showToast(text("emptyTitleError"));
      return;
    }
    page.title = nextTitle.trim().slice(0, 80);
    page.updatedAt = new Date().toISOString();
    if (storePages()) renderSavedPages();
  }
  if (button.dataset.pageAction === "delete") {
    if (!window.confirm(text("deleteConfirm", { title: page.title }))) return;
    pages = pages.filter(item => item.id !== page.id);
    if (activePageId === page.id) activePageId = null;
    if (storePages()) {
      renderSavedPages();
      showToast(text("deleted"));
    }
  }
}

function initializeLanguageOptions() {
  elements.homeLanguage.innerHTML = elements.language.innerHTML;
  elements.homeLanguage.value = currentLanguage;
}

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-view]");
  if (nav) {
    showView(nav.dataset.view);
    return;
  }
  const action = event.target.closest("[data-action]");
  if (!action) return;
  switch (action.dataset.action) {
    case "start": startNewPage(); break;
    case "save": saveActivePage(true); break;
    case "clear": clearPage(); break;
    case "save-custom-mantra": saveCustomMantra(); break;
  }
});

elements.language.addEventListener("change", event => setLanguage(event.target.value));
elements.homeLanguage.addEventListener("change", event => setLanguage(event.target.value));
elements.themeToggle.addEventListener("click", toggleTheme);
elements.title.addEventListener("input", () => {
  elements.title.setCustomValidity("");
  const page = getActivePage();
  if (page) {
    page.title = elements.title.value;
    scheduleSave();
  }
});
elements.mantra.addEventListener("change", () => {
  const selectedOption = elements.mantra.selectedOptions[0];
  if (selectedOption.dataset.savedMantra === "true") {
    elements.custom.value = selectedOption.dataset.mantra;
    elements.mantra.value = "custom";
  }
  const page = getActivePage();
  if (page) page.mantraId = elements.mantra.value;
  updateReference();
});
elements.custom.addEventListener("input", () => {
  const page = getActivePage();
  if (page) page.customMantra = elements.custom.value;
  updateReference();
});
elements.savedList.addEventListener("click", handleSavedAction);

initializeLanguageOptions();
renderCustomMantraOptions();
applyTheme(currentTheme);
translateInterface();
makeLines();
if (pages.length) {
  const mostRecent = [...pages].sort((a, b) => Date.parse(b.updatedAt || b.createdAt) - Date.parse(a.updatedAt || a.createdAt))[0];
  activePageId = mostRecent.id;
  currentLanguage = languages[mostRecent.language] ? mostRecent.language : currentLanguage;
  elements.language.value = currentLanguage;
  renderPage(mostRecent);
  showView("writer");
}
window.setInterval(updateClock, 1000);
window.addEventListener("pagehide", () => {
  if (activePageId) saveActivePage(false);
});
