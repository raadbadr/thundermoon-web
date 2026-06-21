/* ═══════════════════════════════════════════════════════════════
   ThunderMoon — Shared i18n + Theme System
   نفس نظام Parkinzi: 4 لغات + Dark/Light + RTL/LTR
   ═══════════════════════════════════════════════════════════════ */

const translations = {
  ar: {
    // Header
    language: "اللغة",
    appearance: "المظهر",
    light: "فاتح",
    dark: "داكن",
    // Hero
    tagline: "الألعاب حيث يلتقي الضوء بالهندسة",
    heroBadge: "استوديو ألعاب مستقل",
    exploreGames: "استكشف الألعاب",
    ourStory: "قصتنا",
    // Games
    gamesTitle: "الضوء يشق العتمة",
    gamesSubtitle: "كل لعبة تجربة طيفية — هندسة دقيقة، أجواء كونية، ولعب يكافئ الإتقان.",
    featuredGames: "ألعاب مميزة",
    gameTag: "ألغاز / آركيد",
    laserbeam: "لايزر بيم",
    laserbeamDesc: "وجه أشعة الليزر عبر عالم هندسي مظلم. اقسم، اعكس، وادمج الضوء لحل ألغاز معقدة. كل مستوى دراسة في فيزياء الطيف.",
    comingSoon: "قريباً",
    // About
    aboutTitle: "مستقل بالاختيار، دقيق بالطباع",
    aboutDesc: "ثندرمون استوديو ألعاب موبايل مستقل يركز على تجارب أجوائية. لا فرق، لا لجان — رؤية واحدة تنفذ بإتقان.",
    aboutDesc2: "كل لعبة تبدأ من شعور: ثقل العتمة قبل وصول الضوء. رضا الزاوية المثالية. الصمت بين اللغز والحل.",
    readMore: "اقرأ المزيد",
    // Stats
    statGames: "لعبة",
    statLevels: "مستوى",
    statEngine: "المحرك",
    statDownloads: "تحميل",
    statRating: "تقييم",
    // Values
    valuesTitle: "ثلاث مبادئ",
    valuesSubtitle: "ما نؤمن به",
    v1: "تصميم دقيق",
    v1p: "كل بكسل، كل زاوية، كل تفاعل مقصود. لا حشو، لا ضجيج — الأساسي فقط.",
    v2: "الأجواء أولاً",
    v2p: "الألعاب يجب أن تكون أماكن. نبني عوالم تخطفها — مظلمة، كونية، نابضة بالضوء.",
    v3: "موبايل أصيل",
    v3p: "مبنية للّمس من الأساس. ليست منقولة — لعبة تنتمي للجهاز في جيبك.",
    // Blog
    blogTitle: "سجل التطوير وأفكار",
    blogSubtitle: "آخر المقالات",
    blog1: "لايزر بيم: من الفكرة إلى متجر التطبيقات",
    blog1d: "رحلة بناء لعبة ألغاز ليزر في أنريل إنجن 5 — من النموذج الأول إلى بناء iOS جاهز للإنتاج.",
    blog2: "الهندسة الطيفية: فلسفة التصميم",
    blog2d: "كيف تشكل العتمة والضوء والهندسة الدقيقة كل قرار في ألعابنا. غوص عميق في اللغة البصرية.",
    blog3: "العرض المؤجل للموبايل في UE5",
    blog3d: "تفصيل تقني: تفعيل مسار التظليل المؤجل للجوال لإضاءة فورية على iOS دون إذابة البطارية.",
    readArticle: "اقرأ المقال",
    // CTA
    ctaTitle: "ابقَ في المدار",
    ctaDesc: "تابع ثندرمون لتحديثات الألعاب وسجل التطوير والإصدارات الجديدة. لا إزعاج — إشارة فقط.",
    followX: "تابع على X",
    getSupport: "احصل على الدعم",
    // Footer
    aboutLink: "من نحن",
    blogLink: "المدونة",
    supportLink: "الدعم",
    privacyLink: "سياسة الخصوصية",
    termsLink: "شروط الاستخدام",
    gamesLink: "الألعاب",
    moreComing: "المزيد قريباً",
    statsSectionTitle: "أرقام الاستوديو",
    whyPrefix: "لماذا ",
    whySuffix: "؟",
    availableNow: "متوفر الآن · جرّب",
    newsletterSubmit: "اشترك",
    newsletterPlaceholder: "بريدك الإلكتروني",
    newsletterSuccess: "تم الاشتراك! سنبقيك في المدار.",
    playLaserbeam: "العب لايزر بيم",
    laserbeamTagline: "ألغاز الليزر في عالم هندسي مظلم",
    studio: "الاستوديو",
    legal: "قانوني",
    copyrightLine1: "© 2026",
    copyrightLine2: "جميع الحقوق محفوظة",
    footerTagline: "استوديو ألعاب موبايل مستقل. نصنع تجارب أجوائية حيث يلتقي الضوء بالهندسة.",
    // Support
    supportTitle: "الدعم",
    supportSubtitle: "أسئلة شائعة وطرق التواصل معنا.",
    faq: "الأسئلة الشائعة",
    faq1q: "ما الأجهزة المدعومة؟",
    faq1a: "لايزر بيم يتطلب iOS 16.0 أو أحدث ويدعم الآيفون والآيباد بمعالج A12 أو أحدث. اللعبة محسنة للآيفون والآيباد في الوضع الأفقي.",
    faq2q: "كيف أزيل الإعلانات؟",
    faq2a: "يمكنك إزالة جميع الإعلانات بشكل دائم عبر شراء لمرة واحدة داخل التطبيق. اضغط زر \"إزالة الإعلانات\" في إعدادات اللعبة.",
    faq3q: "اللعبة تتعطل عند الفتح — ماذا أفعل؟",
    faq3a: "جرّب: (1) أغلق التطبيق وأعد فتحه. (2) أعد تشغيل جهازك. (3) تأكد من أحدث إصدار iOS. (4) إذا استمرت المشكلة، تواصل معنا.",
    faq4q: "هل تُحفظ تقدمي؟",
    faq4a: "نعم. تقدمك محفوظ محلياً وعلى حسابك إذا سجلت الدخول. عند إعادة التثبيت، سجل بنفس الحساب لاستعادة التقدم.",
    faq5q: "كيف أبلغ عن خطأ؟",
    faq5a: "راسلنا على raadbadr@gmail.com مع وصف الخطأ، موديل جهازك، إصدار iOS، وخطوات إعادة الإنتاج.",
    faq6q: "هل ستكون هناك مستويات جديدة؟",
    faq6a: "نعم! نطور بنشاط مستويات ومحتوى جديد للايزر بيم. تابعنا على X للتحديثات.",
    contactUs: "تواصل معنا",
    responseTime: "وقت الاستجابة: ~48 ساعة",
    needHelp: "تحتاج مساعدة؟",
    // Privacy
    privacyTitle: "سياسة الخصوصية",
    privacyUpdated: "آخر تحديث: 21 يونيو 2026",
    // Terms
    termsTitle: "شروط الاستخدام",
    termsUpdated: "آخر تحديث: 21 يونيو 2026",
    // About page
    aboutPageTitle: "عن ثندرمون",
    aboutPageSubtitle: "مطور واحد. رؤية واحدة. ألعاب حيث يلتقي الضوء بالهندسة.",
    theStory: "القصة",
    thePhilosophy: "الفلسفة",
    theTimeline: "الخط الزمني",
    theTools: "الأدوات",
    whatsNext: "ماذا بعد",
    // Blog page
    blogPageTitle: "المدونة",
    blogPageSubtitle: "سجلات التطوير، فلسفة التصميم، وتفاصيل تقنية من الاستوديو.",
    // Nav
    navGames: "الألعاب",
    navStudio: "الاستوديو",
    navBlog: "المدونة",
    navSupport: "الدعم",
    playNow: "العب الآن",
    // Titles
    pageTitleHome: "ثندرمون | استوديو ألعاب مستقل",
    pageTitleAbout: "عن ثندرمون",
    pageTitleBlog: "المدونة | ثندرمون",
    pageTitleSupport: "الدعم | ثندرمون",
    pageTitlePrivacy: "سياسة الخصوصية | ثندرمون",
    pageTitleTerms: "شروط الاستخدام | ثندرمون"
  },
  en: {
    language: "Language",
    appearance: "Appearance",
    light: "Light",
    dark: "Dark",
    tagline: "Games where light meets geometry",
    heroBadge: "Indie Game Studio",
    exploreGames: "Explore Games",
    ourStory: "Our Story",
    gamesTitle: "Light cuts through darkness",
    gamesSubtitle: "Each game is a spectral experience — precise geometry, cosmic atmospheres, and gameplay that rewards precision.",
    featuredGames: "Featured Games",
    gameTag: "Puzzle / Arcade",
    laserbeam: "LaserBeam",
    laserbeamDesc: "Guide laser beams through a dark geometric world. Split, reflect, and merge light to solve increasingly complex puzzles. Every level is a study in spectral physics.",
    comingSoon: "Coming Soon",
    aboutTitle: "Indie by choice, precise by nature",
    aboutDesc: "ThunderMoon is a one-person indie game studio focused on creating atmospheric mobile experiences. No teams, no committees — just a single vision executed with craft.",
    aboutDesc2: "Every game starts from a feeling: the weight of darkness before light arrives. The satisfaction of a perfect angle. The silence between puzzle and solution.",
    readMore: "Read More",
    statGames: "Game",
    statLevels: "Levels",
    statEngine: "Engine",
    statDownloads: "Downloads",
    statRating: "Rating",
    valuesTitle: "Three principles",
    valuesSubtitle: "What We Believe",
    v1: "Precision Design",
    v1p: "Every pixel, every angle, every interaction is deliberate. No filler, no noise — just the essential.",
    v2: "Atmosphere First",
    v2p: "Games should feel like places. We build worlds you step into — dark, cosmic, alive with light.",
    v3: "Mobile Native",
    v3p: "Built for touch from the ground up. Not a port — a game that belongs on the device in your pocket.",
    blogTitle: "Devlog & thoughts",
    blogSubtitle: "Latest Posts",
    blog1: "LaserBeam: From Concept to App Store",
    blog1d: "The journey of building a laser puzzle game in Unreal Engine 5 — from first prototype to production-ready iOS build.",
    blog2: "Spectral Geometry: Our Design Philosophy",
    blog2d: "How darkness, light, and precision geometry shape every decision in our games. A deep dive into the visual language.",
    blog3: "Mobile Deferred Rendering in UE5",
    blog3d: "Technical breakdown: enabling Mobile Deferred Shading path for real-time lighting on iOS without melting the battery.",
    readArticle: "Read article",
    ctaTitle: "Stay in orbit",
    ctaDesc: "Follow ThunderMoon for game updates, devlogs, and new releases. No spam — just signal.",
    followX: "Follow on X",
    getSupport: "Get Support",
    aboutLink: "About",
    blogLink: "Blog",
    supportLink: "Support",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Use",
    gamesLink: "Games",
    moreComing: "More Coming",
    statsSectionTitle: "Studio numbers",
    whyPrefix: "Why ",
    whySuffix: "?",
    availableNow: "Available now · Try it",
    newsletterSubmit: "Subscribe",
    newsletterPlaceholder: "Your email",
    newsletterSuccess: "Subscribed! We'll keep you in orbit.",
    playLaserbeam: "Play LaserBeam",
    laserbeamTagline: "Laser puzzles in a dark geometric world",
    studio: "Studio",
    legal: "Legal",
    copyrightLine1: "© 2026",
    copyrightLine2: "All rights reserved",
    footerTagline: "Indie mobile game studio. Crafting atmospheric experiences where light meets geometry.",
    supportTitle: "Support",
    supportSubtitle: "Frequently asked questions and ways to reach us.",
    faq: "FAQ",
    faq1q: "What devices are supported?",
    faq1a: "LaserBeam requires iOS 16.0 or later and supports iPhone and iPad with A12 chip or newer. The game is optimized for landscape orientation.",
    faq2q: "How do I remove ads?",
    faq2a: "You can remove all ads permanently through a one-time in-app purchase. Tap the \"Remove Ads\" button in the game's settings menu.",
    faq3q: "The game crashes on launch — what should I do?",
    faq3a: "Try: (1) Force close and reopen. (2) Restart your device. (3) Ensure latest iOS version. (4) Contact us if the issue persists.",
    faq4q: "Is my progress saved?",
    faq4a: "Yes. Progress is saved locally and synced to your account if you sign in. Sign in with the same account after reinstalling to restore progress.",
    faq5q: "How do I report a bug?",
    faq5a: "Email us at raadbadr@gmail.com with a description, device model, iOS version, and steps to reproduce.",
    faq6q: "Will there be new levels?",
    faq6a: "Yes! We're actively developing new levels and content for LaserBeam. Follow us on X for updates.",
    contactUs: "Contact Us",
    responseTime: "Response time: ~48h",
    needHelp: "Need Help?",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: June 21, 2026",
    termsTitle: "Terms of Use",
    termsUpdated: "Last updated: June 21, 2026",
    aboutPageTitle: "About ThunderMoon",
    aboutPageSubtitle: "One developer. One vision. Games where light meets geometry.",
    theStory: "The story",
    thePhilosophy: "The philosophy",
    theTimeline: "The timeline",
    theTools: "The tools",
    whatsNext: "What's next",
    blogPageTitle: "Blog",
    blogPageSubtitle: "Development logs, design philosophy, and technical breakdowns from the studio.",
    navGames: "Games",
    navStudio: "Studio",
    navBlog: "Blog",
    navSupport: "Support",
    playNow: "Play Now",
    pageTitleHome: "ThunderMoon | Indie Game Studio",
    pageTitleAbout: "About — ThunderMoon",
    pageTitleBlog: "Blog — ThunderMoon",
    pageTitleSupport: "Support — ThunderMoon",
    pageTitlePrivacy: "Privacy Policy — ThunderMoon",
    pageTitleTerms: "Terms of Use — ThunderMoon"
  },
  fr: {
    language: "Langue",
    appearance: "Apparence",
    light: "Clair",
    dark: "Sombre",
    tagline: "Des jeux où la lumière rencontre la géométrie",
    heroBadge: "Studio de jeux indépendant",
    exploreGames: "Explorer les jeux",
    ourStory: "Notre histoire",
    gamesTitle: "La lumière traverse l'obscurité",
    gamesSubtitle: "Chaque jeu est une expérience spectrale — géométrie précise, atmosphères cosmiques, et un gameplay qui récompense la précision.",
    featuredGames: "Jeux en vedette",
    gameTag: "Puzzle / Arcade",
    laserbeam: "LaserBeam",
    laserbeamDesc: "Guidez des faisceaux laser à travers un monde géométrique sombre. Divisez, réfléchissez et fusionnez la lumière pour résoudre des puzzles complexes.",
    comingSoon: "Bientôt",
    aboutTitle: "Indépendant par choix, précis par nature",
    aboutDesc: "ThunderMoon est un studio de jeux mobiles indépendant d'une seule personne, concentré sur des expériences atmosphériques. Pas d'équipes, pas de comités — une seule vision exécutée avec art.",
    aboutDesc2: "Chaque jeu commence par un sentiment: le poids de l'obscurité avant l'arrivée de la lumière. La satisfaction d'un angle parfait. Le silence entre l'énigme et la solution.",
    readMore: "Lire plus",
    statGames: "Jeu",
    statLevels: "Niveaux",
    statEngine: "Moteur",
    statDownloads: "Téléchargements",
    statRating: "Note",
    valuesTitle: "Trois principes",
    valuesSubtitle: "Ce que nous croyons",
    v1: "Design de précision",
    v1p: "Chaque pixel, chaque angle, chaque interaction est délibéré. Pas de remplissage, pas de bruit — l'essentiel.",
    v2: "L'atmosphère d'abord",
    v2p: "Les jeux doivent être des lieux. Nous construisons des mondes — sombres, cosmiques, vivants de lumière.",
    v3: "Mobile natif",
    v3p: "Conçu pour le tactile dès le départ. Non porté — un jeu qui appartient à l'appareil dans votre poche.",
    blogTitle: "Journal de développement",
    blogSubtitle: "Derniers articles",
    blog1: "LaserBeam: Du concept à l'App Store",
    blog1d: "Le parcours de création d'un jeu de puzzle laser dans Unreal Engine 5 — du premier prototype à la version iOS prête pour la production.",
    blog2: "Géométrie spectrale: notre philosophie de design",
    blog2d: "Comment l'obscurité, la lumière et la géométrie précise façonnent chaque décision. Plongée dans le langage visuel.",
    blog3: "Rendu différé mobile dans UE5",
    blog3d: "Analyse technique: activer le chemin de rendu différé mobile pour l'éclairage en temps réel sur iOS sans vider la batterie.",
    readArticle: "Lire l'article",
    ctaTitle: "Restez en orbite",
    ctaDesc: "Suivez ThunderMoon pour les mises à jour, journaux de dev et nouvelles sorties. Pas de spam — juste du signal.",
    followX: "Suivre sur X",
    getSupport: "Obtenir de l'aide",
    aboutLink: "À propos",
    blogLink: "Blog",
    supportLink: "Support",
    privacyLink: "Confidentialité",
    termsLink: "Conditions d'utilisation",
    gamesLink: "Jeux",
    moreComing: "Plus à venir",
    statsSectionTitle: "Chiffres du studio",
    whyPrefix: "Pourquoi ",
    whySuffix: " ?",
    availableNow: "Disponible · Essayez",
    newsletterSubmit: "S'abonner",
    newsletterPlaceholder: "Votre email",
    newsletterSuccess: "Inscrit ! On vous garde en orbite.",
    playLaserbeam: "Jouer à LaserBeam",
    laserbeamTagline: "Puzzles laser dans un monde géométrique sombre",
    studio: "Studio",
    legal: "Légal",
    copyrightLine1: "© 2026",
    copyrightLine2: "Tous droits réservés",
    footerTagline: "Studio de jeux mobiles indépendant. Création d'expériences atmosphériques où la lumière rencontre la géométrie.",
    supportTitle: "Support",
    supportSubtitle: "Questions fréquentes et moyens de nous contacter.",
    faq: "FAQ",
    faq1q: "Quels appareils sont supportés?",
    faq1a: "LaserBeam nécessite iOS 16.0 ou plus et supporte l'iPhone et l'iPad avec puce A12 ou plus. Optimisé pour le mode paysage.",
    faq2q: "Comment retirer les publicités?",
    faq2a: "Vous pouvez retirer toutes les publicités définitivement via un achat unique. Appuyez sur \"Retirer les pubs\" dans les paramètres.",
    faq3q: "Le jeu plante au démarrage — que faire?",
    faq3a: "Essayez: (1) Fermez et rouvrez. (2) Redémarrez votre appareil. (3) Assurez-vous d'avoir la dernière version d'iOS. (4) Contactez-nous.",
    faq4q: "Ma progression est-elle sauvegardée?",
    faq4a: "Oui. La progression est sauvegardée localement et synchronisée avec votre compte. Connectez-vous après réinstallation pour restaurer.",
    faq5q: "Comment signaler un bug?",
    faq5a: "Écrivez-nous à raadbadr@gmail.com avec description, modèle d'appareil, version iOS et étapes pour reproduire.",
    faq6q: "Y aura-t-il de nouveaux niveaux?",
    faq6a: "Oui! Nous développons activement de nouveaux niveaux pour LaserBeam. Suivez-nous sur X.",
    contactUs: "Nous contacter",
    responseTime: "Temps de réponse: ~48h",
    needHelp: "Besoin d'aide?",
    privacyTitle: "Politique de confidentialité",
    privacyUpdated: "Dernière mise à jour: 21 juin 2026",
    termsTitle: "Conditions d'utilisation",
    termsUpdated: "Dernière mise à jour: 21 juin 2026",
    aboutPageTitle: "À propos de ThunderMoon",
    aboutPageSubtitle: "Un développeur. Une vision. Des jeux où la lumière rencontre la géométrie.",
    theStory: "L'histoire",
    thePhilosophy: "La philosophie",
    theTimeline: "Chronologie",
    theTools: "Les outils",
    whatsNext: "Et après",
    blogPageTitle: "Blog",
    blogPageSubtitle: "Journaux de développement, philosophie de design et analyses techniques.",
    navGames: "Jeux",
    navStudio: "Studio",
    navBlog: "Blog",
    navSupport: "Support",
    playNow: "Jouer",
    pageTitleHome: "ThunderMoon | Studio de jeux indépendant",
    pageTitleAbout: "À propos — ThunderMoon",
    pageTitleBlog: "Blog — ThunderMoon",
    pageTitleSupport: "Support — ThunderMoon",
    pageTitlePrivacy: "Confidentialité — ThunderMoon",
    pageTitleTerms: "Conditions — ThunderMoon"
  },
  ur: {
    language: "زبانیں",
    appearance: "ظاہریہ",
    light: "روشن",
    dark: "تاریک",
    tagline: "کھیل جہاں روشنی ہندسے سے ملتی ہے",
    heroBadge: "آزاد گیم اسٹوڈیو",
    exploreGames: "کھیل دریافت کریں",
    ourStory: "ہماری کہانی",
    gamesTitle: "روشندی تاریکی کو چیرتی ہے",
    gamesSubtitle: "ہر کھیل ایک طیفی تجربہ ہے — درست ہندسہ، کائناتی ماحول، اور کھیل جو درستگی کا انعام دیتا ہے۔",
    featuredGames: "نمایاں کھیل",
    gameTag: "پہیلی / آرکیڈ",
    laserbeam: "لیزر بیم",
    laserbeamDesc: "ایک تاریک ہندسی دنیا میں لیزر شعاعوں کی رہنمائی کریں۔ روشنی کو تقسیم، منعکس اور ضم کریں پیچیدہ پہیلیاں حل کرنے کے لیے۔",
    comingSoon: "جلد آ رہا ہے",
    aboutTitle: "اپنی مرضی سے آزاد، فطرت سے درست",
    aboutDesc: "تھنڈر مون ایک شخص کا آزاد گیم اسٹوڈیو ہے جو موبائل پر ماحولیاتی تجربات بنانے پر مرکوز ہے۔ کوئی ٹیمیں نہیں — ایک ہی وژن۔",
    aboutDesc2: "ہر کھیل ایک احساس سے شروع ہوتا ہے: روشنی آنے سے پہلے تاریکی کا وزن۔ ایک کامل زاویے کی اطمینان۔ پہیلی اور حل کے درمیان خاموشی۔",
    readMore: "مزید پڑھیں",
    statGames: "کھیل",
    statLevels: "سطحیں",
    statEngine: "انجن",
    statDownloads: "ڈاؤن لوڈ",
    statRating: "ریٹنگ",
    valuesTitle: "تین اصول",
    valuesSubtitle: "ہم کیا یقین رکھتے ہیں",
    v1: "درست ڈیزائن",
    v1p: "ہر پکسل، ہر زاویہ، ہر تعامل جان بوجھ کر ہے۔ کوئی بھرائی نہیں — صرف ضروری۔",
    v2: "پہلے ماحول",
    v2p: "کھیل جگہیں ہونی چاہئیں۔ ہم دنیاویں بناتے ہیں — تاریک، کائناتی، روشنی سے زندہ۔",
    v3: "موبائل اصل",
    v3p: "چھوئے کے لیے بنایا گیا۔ نقل نہیں — ایک کھیل جو آپ کی جیب کے آلے سے تعلق رکھتا ہے۔",
    blogTitle: "ڈیولپمنٹ لاگ اور خیالات",
    blogSubtitle: "تازہ مضامین",
    blog1: "لیزر بیم: تصور سے ایپ اسٹور تک",
    blog1d: "انریل انجن 5 میں لیزر پہیلی کھیل بنانے کا سفر — پہلے پروٹوٹائپ سے پیداوار کے لیے تیار iOS تک۔",
    blog2: "طیفی ہندسہ: ہمارا ڈیزائن فلسفہ",
    blog2d: "تاریکی، روشنی اور درست ہندسہ ہمارے ہر فیصلے کو کیسے شکل دیتے ہیں۔ بصری زبان میں گہری نظر۔",
    blog3: "UE5 میں موبائل ڈیفرڈ رینڈرنگ",
    blog3d: "تکنیکی تجزیہ: iOS پر ریئل ٹائم لائٹنگ کے لیے موبائل ڈیفرڈ شیڈنگ کو فعال کریں۔",
    readArticle: "مضامین پڑھیں",
    ctaTitle: "مدار میں رہیں",
    ctaDesc: "تھنڈر مون کو فالو کریں گیم اپڈیٹس اور نئی ریلیز کے لیے۔ کوئی اسپام نہیں — صرف سگنل۔",
    followX: "X پر فالو کریں",
    getSupport: "مدد حاصل کریں",
    aboutLink: "ہمارے بارے میں",
    blogLink: "بلاگ",
    supportLink: "مدد",
    privacyLink: "رازداری پالیسی",
    termsLink: "استعمال کی شرائط",
    gamesLink: "کھیل",
    moreComing: "مزید آ رہا ہے",
    statsSectionTitle: "اسٹوڈیو کے اعداد",
    whyPrefix: "کیوں ",
    whySuffix: "؟",
    availableNow: "دستیاب · آزمائیں",
    newsletterSubmit: "سبسکرائب",
    newsletterPlaceholder: "آپ کا ای میل",
    newsletterSuccess: "سبسکرائب ہو گیا! ہم آپ کو مدار میں رکھیں گے۔",
    playLaserbeam: "لیزر بیم کھیلیں",
    laserbeamTagline: "تاریک ہندسی دنیا میں لیزر پہیلیاں",
    studio: "اسٹوڈیو",
    legal: "قانونی",
    copyrightLine1: "© 2026",
    copyrightLine2: "جملہ حقوق محفوظ ہیں",
    footerTagline: "آزاد موبائل گیم اسٹوڈیو۔ ماحولیاتی تجربات جہاں روشنی ہندسے سے ملتی ہے۔",
    supportTitle: "مدد",
    supportSubtitle: "اکثر پوچھے گئے سوالات اور ہم سے رابطے کے طریقے۔",
    faq: "FAQ",
    faq1q: "کون سے آلات سپورٹ ہیں؟",
    faq1a: "لیزر بیم iOS 16.0 یا بعد کا треб کرتا ہے اور A12 یا بعد کے چپ والے iPhone اور iPad کو سپورٹ کرتا ہے۔",
    faq2q: "میں اشتہارات کیسے ہٹاؤں؟",
    faq2a: "آپ ایک بار خرید کر تمام اشتہارات مستقل طور پر ہٹا سکتے ہیں۔ گیم کی ترتیبات میں \"اشتہارات ہٹاؤ\" دبائیں۔",
    faq3q: "کھیل کھلنے پر کریش ہوتا ہے — کیا کروں؟",
    faq3a: "کوشش کریں: (1) بند کریں اور دوبارہ کھولیں۔ (2) آلہ ری اسٹارٹ کریں۔ (3) تازہ ترین iOS۔ (4) ہم سے رابطہ کریں۔",
    faq4q: "کیا میری پیش رفت محفوظ ہے؟",
    faq4a: "ہاں۔ پیش رفت مقامی طور پر محفوظ ہے اور اکاؤنٹ سے سنک ہوتی ہے۔ دوبارہ انسٹال کرنے پر اسی اکاؤنٹ سے لاگ ان کریں۔",
    faq5q: "میں بگ کیسے رپورٹ کروں؟",
    faq5a: "raadbadr@gmail.com پر ای میل کریں وضاحت، آلہ ماڈل، iOS ورژن اور دہراؤ کے مراحل کے ساتھ۔",
    faq6q: "کیا نئی سطحیں آئیں گی؟",
    faq6a: "ہاں! ہم لیزر بیم کے لیے نئی سطحیں بنا رہے ہیں۔ X پر فالو کریں۔",
    contactUs: "ہم سے رابطہ",
    responseTime: "جواب کا وقت: ~48 گھنٹے",
    needHelp: "مدد چاہیے؟",
    privacyTitle: "رازداری پالیسی",
    privacyUpdated: "آخری اپڈیٹ: 21 جون 2026",
    termsTitle: "استعمال کی شرائط",
    termsUpdated: "آخری اپڈیٹ: 21 جون 2026",
    aboutPageTitle: "تھنڈر مون کے بارے میں",
    aboutPageSubtitle: "ایک ڈیولپر۔ ایک وژن۔ کھیل جہاں روشنی ہندسے سے ملتی ہے۔",
    theStory: "کہانی",
    thePhilosophy: "فلسفہ",
    theTimeline: "وقت کی لائن",
    theTools: "اوزار",
    whatsNext: "آگے کیا",
    blogPageTitle: "بلاگ",
    blogPageSubtitle: "ڈیولپمنٹ لاگ، ڈیزائن فلسفہ، اور تکنیکی تجزیہ۔",
    navGames: "کھیل",
    navStudio: "اسٹوڈیو",
    navBlog: "بلاگ",
    navSupport: "مدد",
    playNow: "ابھی کھیلیں",
    pageTitleHome: "تھنڈر مون | آزاد گیم اسٹوڈیو",
    pageTitleAbout: "تھنڈر مون کے بارے میں",
    pageTitleBlog: "بلاگ | تھنڈر مون",
    pageTitleSupport: "مدد | تھنڈر مون",
    pageTitlePrivacy: "رازداری | تھنڈر مون",
    pageTitleTerms: "شرائط | تھنڈر مون"
  }
};

const langNames = { ar: "العربية", en: "English", fr: "Français", ur: "اردو" };
const langTitles = {
  ar: translations.ar.pageTitleHome,
  en: translations.en.pageTitleHome,
  fr: translations.fr.pageTitleHome,
  ur: translations.ur.pageTitleHome
};

function getLang() { return localStorage.getItem("thundermoon_lang") || "ar"; }
function getTheme() { return localStorage.getItem("thundermoon_theme") || "dark"; }

function setLang(l) {
  localStorage.setItem("thundermoon_lang", l);
  document.documentElement.lang = l;
  document.documentElement.dir = (l === "ar" || l === "ur") ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (translations[l] && translations[l][k]) {
      if (el.children.length > 0) {
        const textSpan = Array.from(el.children).find(child => child.hasAttribute('data-i18n'));
        if (textSpan) textSpan.textContent = translations[l][k];
      } else {
        el.textContent = translations[l][k];
      }
    }
  });

  const display = document.getElementById("currentLangDisplay");
  if (display) display.textContent = langNames[l] || l;

  ["ar", "en", "fr", "ur"].forEach(code => {
    const el = document.getElementById("check-" + code);
    if (el) el.style.display = l === code ? "inline" : "none";
  });

  const currentTheme = getTheme();
  const themeText = currentTheme === "dark" ? translations[l].dark : translations[l].light;
  const themeDisplay = document.getElementById("currentThemeDisplay");
  if (themeDisplay) themeDisplay.textContent = themeText;

  const titleKey = "pageTitle" + (document.body.dataset.page || "Home").replace(/^./, c => c.toUpperCase());
  if (translations[l][titleKey]) document.title = translations[l][titleKey];
}

function setTheme(t) {
  localStorage.setItem("thundermoon_theme", t);
  document.documentElement.dataset.theme = t;

  const themeColorMeta = document.getElementById("themeColorMeta");
  if (themeColorMeta) themeColorMeta.content = t === "dark" ? "#0A0A14" : "#0068b8";

  const icon = document.getElementById("themeIcon");
  if (icon) icon.textContent = t === "dark" ? "🌙" : "☀️";

  const currentLang = getLang();
  const themeText = t === "dark" ? translations[currentLang].dark : translations[currentLang].light;
  const themeDisplay = document.getElementById("currentThemeDisplay");
  if (themeDisplay) themeDisplay.textContent = themeText;

  const checkLight = document.getElementById("check-light");
  const checkDark = document.getElementById("check-dark");
  if (checkLight) checkLight.style.display = t === "light" ? "inline" : "none";
  if (checkDark) checkDark.style.display = t === "dark" ? "inline" : "none";
}

// Init header dropdowns
function initHeader() {
  const langMenuBtn = document.getElementById("langMenuBtn");
  const langDropdown = document.getElementById("langDropdown");
  const themeMenuBtn = document.getElementById("themeMenuBtn");
  const themeDropdown = document.getElementById("themeDropdown");

  if (langMenuBtn && langDropdown) {
    langMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("show");
      if (themeDropdown) themeDropdown.classList.remove("show");
    });
  }

  if (themeMenuBtn && themeDropdown) {
    themeMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle("show");
      if (langDropdown) langDropdown.classList.remove("show");
    });
  }

  document.querySelectorAll("#langDropdown .menu-dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
      setLang(item.dataset.lang);
      if (langDropdown) langDropdown.classList.remove("show");
    });
  });

  document.querySelectorAll("#themeDropdown .menu-dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
      setTheme(item.dataset.theme);
      if (themeDropdown) themeDropdown.classList.remove("show");
    });
  });

  document.addEventListener("click", () => {
    if (langDropdown) langDropdown.classList.remove("show");
    if (themeDropdown) themeDropdown.classList.remove("show");
  });

  setLang(getLang());
  setTheme(getTheme());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeader);
} else {
  initHeader();
}
