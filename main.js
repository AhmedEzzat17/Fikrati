let swiper = new Swiper(".slider-wrapper", {    // slider
    loop: true,
    //   grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    centeredSlides: false,
});

// ############################

const translations = {  //Services   Ar En lang
    en: {
        title: "Fikrati",
        home: "Home",
        about: "About Us",
        Services: "Our Services",
        portfolio: "Our Portfolio",
        products: "Our Products",

        contact: "Contact",
        hero_title: "Fikrati Software Solutions.",
        hero_paragraph:
            "For website design and development services and phone applications operating on the Android and iOS operating systems, the company provides integrated web solutions to all institutions in the world and has a huge customer base in all countries of the world.",
        hero_portfolio: "Our Portfolio",
        hero_details: "More Details",
        hero_products: "Our Products",

        aboutus_title: "About Us",
        aboutus_subtitle:
            "Fikriti is a company specialized in providing Integrated web services",
        aboutus_paragraph:
            "Starting from graphic design to programming and designing smartphone applications, Fikrati and its team have worked since its inception to become one of the leading Arab web development companies. We know the path and we’re walking it with steady steps.",

        ourServices: "Our Services",
        qualityMeetsInnovation: "WHERE QUALITY MEETS INNOVATION",
        serviceIntro:
            "We provide high-quality services that ensure innovation and efficiency.",
        webDevelopment: "Website development",
        webDevelopmentDesc:
            "Website development is a field that focuses on creating and designing websites. It includes two main parts: front-end which deals with the user interface and back-end which handles databases and servers. It uses technologies like HTML, CSS, JavaScript and programming languages like PHP or Python.",
        mobileApp: "Mobile application",
        mobileAppDesc:
            "Mobile application development is the field focused on creating applications for mobile devices on platforms like iOS and Android. It uses technologies and languages like Swift, Kotlin, Flutter, and React Native to create apps that work across different devices.",
        desktopDev: "Desktop development",
        desktopDevDesc:
            "Desktop application development is the field focused on creating software that runs on desktop computers. It involves using languages and technologies like C#, Java, Python, and C++ to create applications that work on operating systems like Windows, MacOS, and Linux.",
        techConsulting: "Technical consulting",
        techConsultingDesc:
            "Technical consulting is the field focused on providing advice and technical services to businesses or individuals to improve and develop their technological systems. It involves helping clients make strategic decisions about the best tools and technologies for their needs.",
        cloudServices: "Cloud services",
        cloudServicesDesc:
            "Cloud services is the field focused on providing technological solutions over the internet, such as data storage, computing, and remote system management. It involves using platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud to deliver services in a flexible and secure way.",
        testing: "Testing and Maintenance",
        testingDesc:
            "Testing and maintenance is the field focused on ensuring software quality by inspecting and testing it to identify bugs and issues. It also involves maintaining systems after launch to ensure their continuity and improve their performance.",
        showMore: "Show More",
        WebDetails: `➥ User interface design & experience design (UI/UX)

➥ Front End & Back End development

➥ E-commerce development

➥ Dynamic websites`,
        MobDetails: `➥ Native app development (iOS/Android)

➥ Cross-platform development (e.g. Flutter, React Native)

➥ Mobile UI/UX design

➥ App store optimization (ASO)`,
        DeskDetails: `➥ Native desktop app development (Windows, macOS, Linux)

➥ Cross-platform desktop apps (e.g. Electron, Qt)

➥ Desktop UI/UX design

➥ Performance optimization for desktop apps`,
        TechDetails: `➥ IT infrastructure consulting

➥ Software architecture consulting

➥ Cybersecurity consulting

➥ Digital transformation strategy`,
        CloudDetails: `➥ Cloud infrastructure setup (AWS, Azure, GCP)

➥ Cloud migration services

➥ Cloud security and compliance

➥ Serverless architecture`,
        TestDetails: `➥  Manual and automated testing

➥ Bug fixing and troubleshooting

➥ Security updates and patching

➥ Software version upgrades`,


        ourVision: "Our Vision",
        visionText:
            "We seek to be the world's leading company in providing innovative technological solutions that help organizations achieve digital excellence and enhance their presence on the Internet in a unique and distinct way.",
        ourMessage: "Our Message",
        messageText:
            "We empower our clients by providing website and mobile application design and development solutions that combine creativity, advanced technology, and a unique user experience to achieve their sustainable digital success.",
        ourValues: "Our Values",
        valuesText:
            "We at Fikrati Corporation are proud of a set of core values that drive our operations, build our relationships with our customers, and define our approach to providing integrated technology solutions.",
        innovation: "Innovation",
        quality: "Quality",
        focusOnClient: "Focus On The Client",
        teamwork: "Teamwork",
        quickResponse: "Quick Response",
        continuousLearning: "Continuous Learning",
        sustainability: "Sustainability",

        ourPortfolio: "Our Portfolio",
        qualityMeetsInnovation: "WHERE QUALITY MEETS INNOVATION",
        circle: "Circle",
        circleDescription:
            "A world of shopping at your fingertips...",
        mishwar: "Mishwar",
        mishwarDescription:
            "A leading company in the delivery services sector...",
        adhmn: "ADhmn",
        adhmnDescription: "Home maintenance tools designed for you...",
        website: "Website",
        androidApp: "Android",
        iosApp: "iOS App",
        showAll: "Show all",

        ourProducts: "Our Products",
        productsSubTitle: "We bring your digital vision to life",
        product1Title: "Husun",
        product1Desc: "Logo of Husun Real Estate and Contracting Company",
        product2Title: "Al Raya Al Naqi",
        product2Desc: "Visual identity for Al Raya Al Naqi Company",
        product3Title: "Munasaba",
        product3Desc: "Logo for the 'munasaba' application for booking events",
        showAll: "Show all",

        contactWithUs: "Contact With Us",
        helpBuildApp: "LET US HELP YOU BUILD YOUR NEXT APP.",
        name: "Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        send: "Send",
        teamCommitment:
            "Our team of professionals is committed to delivering exceptional results in software development and technical project management.",
        messageUs: "Message Us",
        callUsAt: "Call Us At",
        whatsapp: "WhatsApp",
        placeholderName: "Add your Name",
        placeholderEmail: "Add your Email",
        placeholderPhone: "Add your Phone",
        placeholderSubject: "Add your Subject",
        placeholderMessage: "Add your Message",

        webDevelopment: "Web Development",
        mobileApp: "Mobile Application",
        uiux: "UI / UX",
        software: "Software",
        ecommerce: "E-Commerce",
        database: "Database",
        projectManagement: "Project Management",
        infoSystem: "Information System",

        footerInfo:
            "At Fikriti Integrated Solutions, we combine creativity and professionalism to transform your ideas into inspiring digital experiences. Connect with us today to achieve tangible success together.",
        footerLinks: "Links",
        home: "Home",
        ourServices: "Our Services",
        portfolio: "Portfolio",
        testimonials: "Testimonials",
        support: "Support",
        termsAndConditions: "Terms And Condition",
        footerAboutUs: "About Us",
        signIn: "Sign in",
        register: "Register",
        aboutUs: "About Us",
        blog: "Blog",
        contactUs: "Contact Us",
        footerContact: "Contact Us",
        footerContactText:
            "Get in touch with us via mail or phone. We are waiting for your call or message",
        copyrightText:
            "© 2025 All rights reserved for Fikrati Software Development Company. Fikrati.com",
    },
    ar: {
        title:"فـكـرتـي",
        home: "الرئيسية",
        about: "من نحن",
        Services: "خدماتنا",
        portfolio: "أعمالنا",
        products: "منتجاتنا",
        contact: "تواصل معنا",

        hero_title: "حلول فكرتي البرمجية",
        hero_paragraph:
            "لتصميم وتطوير المواقع الإلكترونية وتطبيقات الهواتف الذكية العاملة على أنظمة أندرويد وiOS، تقدم الشركة حلول ويب متكاملة لجميع المؤسسات حول العالم وتملك قاعدة عملاء ضخمة في كل الدول.",
        hero_portfolio: "أعمالنا",
        hero_details: "المزيد من التفاصيل",
        hero_products: "منتجاتنا",

        aboutus_title: "من نحن",
        aboutus_subtitle: "فـكـرتـي هي شركة متخصصة في تقديم خدمات الويب المتكاملة",
        aboutus_paragraph:
            "بدءًا من التصميم الجرافيكي إلى برمجة وتصميم تطبيقات الهواتف الذكية، تسعى فـكـرتـي وفريق عملها منذ تأسيسها لتكون من أبرز شركات تطوير الويب العربية. نحن نعرف الطريق ونسير عليه بخطى واثقة.",

        ourServices: "خدماتنا",
        qualityMeetsInnovation: "حيث تلتقي الجودة بالابتكار",
        serviceIntro: "نقدم خدمات عالية الجودة تضمن الابتكار والكفاءة.",
        webDevelopment: "تطوير المواقع الإلكترونية",
        webDevelopmentDesc:
            "تطوير المواقع هو مجال بيختص بإنشاء وتصميم مواقع الإنترنت. بيشمل جانبين: الفرونت إند اللي بيتعامل مع واجهة المستخدم والباك إند اللي بيتعامل مع قواعد البيانات والسيرفرات. بيستخدم تقنيات زي HTML, CSS, JavaScript ولغات زي PHP أو Python. HTML, CSS, JavaScript، ولغات زي PHP أو Python.",
        mobileApp: "تطبيقات الجوال",
        mobileAppDesc:
            "تطوير تطبيقات الموبايل هو مجال بيختص بإنشاء تطبيقات للهواتف المحمولة على أنظمة زي iOS و Android. بيستخدم تقنيات ولغات زي Swift و Kotlin و Flutter و React Native لإنشاء تطبيقات تعمل على الأجهزة المختلفة.",
        desktopDev: "تطبيقات سطح المكتب",
        desktopDevDesc:
            "تطوير تطبيقات سطح المكتب هو مجال بيختص بإنشاء برامج تعمل على أجهزة الكمبيوتر المكتبية. بيشمل استخدام لغات وتقنيات زي C#, Java, Python، وC++ لإنشاء تطبيقات بتعمل على أنظمة تشغيل زي Windows وMacOS وLinux.",
        techConsulting: "الاستشارات التقنية",
        techConsultingDesc:
            "الاستشارات التقنية هي مجال بيختص بتقديم النصائح والخدمات الفنية للشركات أو الأفراد لتحسين وتطوير أنظمتهم التكنولوجية. بيشمل مساعدة العملاء في اتخاذ قرارات استراتيجية حول الأدوات والتقنيات الأنسب لاحتياجاتهم.",
        cloudServices: "خدمات السحابة",
        cloudServicesDesc:
            "خدمات السحابة هي مجال بيختص بتقديم حلول تكنولوجية من خلال الإنترنت مثل تخزين البيانات، الحوسبة، وإدارة الأنظمة عن بُعد. بيشمل استخدام منصات زي Amazon Web Services (AWS)، Microsoft Azure، وGoogle Cloud لتوفير الخدمات بشكل مرن وآمن.",
        testing: "الاختبار والصيانة",
        testingDesc:
            "الاختبار والصيانة هو مجال بيختص بضمان جودة البرمجيات من خلال فحصها واختبارها للكشف عن الأخطاء والمشاكل. بيشمل أيضًا صيانة الأنظمة بعد إطلاقها لضمان استمراريتها وتحسين أدائها.",
        showMore: "عرض المزيد",

        WebDetails: `➥ تصميم واجهة وتجربة المستخدم (UI/UX)

➥ تطوير الواجهة الأمامية والخلفية
        
➥ تطوير المتاجر الإلكترونية
        
➥ المواقع الديناميكية`,
        MobDetails: `➥ تطوير التطبيقات الأصلية (iOS/Android)

➥ تطوير التطبيقات عبر الأنظمة (مثل Flutter، React Native)

➥ تصميم واجهة وتجربة المستخدم للتطبيقات

➥ تحسين ظهور التطبيقات في متجر التطبيقات (ASO)`,
        DeskDetails: `➥ تطوير التطبيقات الأصلية لسطح المكتب (Windows، macOS، Linux)

➥ تطبيقات سطح المكتب عبر الأنظمة (مثل Electron، Qt)

➥ تصميم واجهة وتجربة المستخدم لسطح المكتب

➥ تحسين الأداء لتطبيقات سطح المكتب`,
        TechDetails: `➥ استشارات البنية التحتية لتكنولوجيا المعلومات

➥ استشارات هيكلة البرمجيات

➥ استشارات الأمن السيبراني

➥ استراتيجية التحول الرقمي`,
        CloudDetails: `➥ إعداد بنية تحتية سحابية (AWS، Azure، GCP)

➥ خدمات ترحيل البيانات إلى السحابة

➥ أمان السحابة والامتثال

➥ البنية المعمارية بدون خوادم (Serverless)`,
        TestDetails: `➥ الاختبار اليدوي والتلقائي

➥ إصلاح الأخطاء وحل المشاكل

➥ التحديثات الأمنية وتصحيح الأخطاء

➥ ترقية إصدارات البرمجيات`,


        ourVision: "رؤيتنا",
        visionText:
            "نسعى لأن نكون الشركة الرائدة عالميًا في تقديم الحلول التكنولوجية المبتكرة التي تساعد المؤسسات في تحقيق التفوق الرقمي وتعزيز حضورها على الإنترنت بطريقة فريدة ومميزة.",
        ourMessage: "رسالتنا",
        messageText:
            "نمكن عملائنا من خلال تقديم حلول تصميم وتطوير المواقع والتطبيقات المحمولة التي تجمع بين الإبداع والتكنولوجيا المتقدمة وتجربة المستخدم الفريدة لتحقيق النجاح الرقمي المستدام.",
        ourValues: "قيمنا",
        valuesText:
            "نحن في شركة فـكـرتـي نفخر بمجموعة من القيم الأساسية التي توجه عملياتنا، وبناء علاقاتنا مع عملائنا، وتحدد نهجنا في تقديم الحلول التكنولوجية المتكاملة.",
        innovation: "الابتكار",
        quality: "الجودة",
        focusOnClient: "التركيز على العميل",
        teamwork: "العمل الجماعي",
        quickResponse: "الاستجابة السريعة",
        continuousLearning: "التعلم المستمر",
        sustainability: "الاستدامة",

        ourPortfolio: "أعمالنا",
        qualityMeetsInnovation: "حيث يلتقي الجودة بالإبداع",
        circle: "دائرة",
        circleDescription: "عالم من التسوق في متناول يدك...",
        mishwar: "مشوار",
        mishwarDescription:
            "شركة رائدة في قطاع خدمات التوصيل...",
        adhmn: "أدهمن",
        adhmnDescription: "أدوات صيانة المنزل مصممة خصيصًا لك...",
        website: "موقع إلكتروني",
        androidApp: "تطبيق أندرويد",
        iosApp: "تطبيق آيفون",
        showAll: "عرض الكل",

        ourProducts: "منتجاتنا",
        productsSubTitle: "نحن نحوّل رؤيتك الرقمية إلى واقع",
        product1Title: "حصون",
        product1Desc: "شعار شركة حصون العقارية والمقاولات",
        product2Title: "الراية النقي",
        product2Desc: "الهوية البصرية لشركة الراية النقي",
        product3Title: "مناسبة",
        product3Desc: "شعار تطبيق مناسبة لحجز الحفلات والفعاليات",
        showAll: "عرض الكل",

        contactWithUs: "تواصل معنا",
        helpBuildApp: "دعنا نساعدك في بناء تطبيقك القادم.",
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        subject: "الموضوع",
        message: "الرسالة",
        send: "إرسال",
        teamCommitment:
            "فريقنا من المحترفين ملتزم بتقديم نتائج استثنائية في تطوير البرمجيات وإدارة المشاريع التقنية.",
        messageUs: "راسلنا",
        callUsAt: "اتصل بنا على",
        whatsapp: "واتساب",
        placeholderName: "أدخل اسمك هنا",
        placeholderEmail: "أدخل بريدك الإلكتروني هنا",
        placeholderPhone: "أدخل رقم الهاتف هنا",
        placeholderSubject: "أدخل الموضوع هنا",
        placeholderMessage: "أدخل رسالتك هنا",

        webDevelopment: "تطوير المواقع الإلكترونية",
        mobileApp: "تطبيقات الجوال",
        uiux: "تصميم واجهات وتجربة المستخدم",
        software: "البرمجيات",
        ecommerce: "التجارة الإلكترونية",
        database: "قواعد البيانات",
        projectManagement: "إدارة المشاريع",
        infoSystem: "نظم المعلومات",

        footerInfo:
            "في فـكـرتـي حلول مدمجة، نحن نجمع بين الإبداع والاحترافية لتحويل أفكارك إلى تجارب رقمية ملهمة. تواصل معنا اليوم لتحقيق النجاح الملموس معًا.",
        footerLinks: "الروابط",
        home: "الرئيسية",
        ourServices: "خدماتنا",
        portfolio: "أعمالنا",
        testimonials: "آراء العملاء",
        support: "الدعم",
        termsAndConditions: "الشروط والأحكام",
        footerAboutUs: "عن الشركة",
        signIn: "تسجيل الدخول",
        register: "التسجيل",
        aboutUs: "من نحن",
        blog: "المدونة",
        contactUs: "اتصل بنا",
        footerContact: "اتصل بنا",
        footerContactText:
            "تواصل معنا عبر البريد أو الهاتف. نحن في انتظار مكالمتك أو رسالتك",
        copyrightText:
            "© 2025 جميع الحقوق محفوظة لشركة فـكـرتـي لتطوير البرمجيات. Fikrati.com",
    },
};

let currentLang = "en";

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        } else {
            console.warn(`Missing translation for key: ${key}`);
        }
    });

    // placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.placeholder = translations[currentLang][key];
    });

    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

    const toggleBtn = document.getElementById("language-toggle");
    if (toggleBtn) toggleBtn.textContent = currentLang === "en" ? "Ar" : "En";

    // تعديل تنسيق الـ navbar بناءً على اللغة
    const navList = document.querySelector(".navbar-nav");
    if (navList) {
        navList.classList.remove("ms-auto", "me-auto");
        navList.classList.add(currentLang === "ar" ? "me-auto" : "ms-auto");
    }

    // تحديث النصوص الخاصة بالعناوين والوصف
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
        const key = el.getAttribute("data-i18n-title");
        el.querySelector("h4").textContent = translations[currentLang][key];
    });

    document.querySelectorAll("[data-i18n-desc]").forEach((el) => {
        const key = el.getAttribute("data-i18n-desc");
        el.querySelector("p").textContent = translations[currentLang][key];
    });
    
    document.querySelectorAll("[data-i18n-work]").forEach((el) => {        //services
        const key = el.getAttribute("data-i18n-work");
        const translatedValue = translations[currentLang][key];
        if (translatedValue) {
            el.setAttribute("data-work", translatedValue);
        }
    });
    
}

function toggleLanguage(event) {
    event.preventDefault();
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("selectedLang", currentLang);
    applyTranslations();
}

document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLang");
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
        currentLang = savedLang;
    }
    applyTranslations();
});

//   ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

// ############################

document.addEventListener("DOMContentLoaded", () => {  // fade in , fade in left
    const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-left");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    fadeInElements.forEach((el) => {
      observer.observe(el);
    });
});
// ############################

let div = document.querySelector(".up"); //scrool
window.onscroll = function () {
    if (this.scrollY >= 300) {
        div.classList.add("show");
    } else {
        div.classList.remove("show");
    }
};
div.onclick = function () {
    window.scrollTo({
        top: 0,
    });
};

// ############################

window.addEventListener("scroll", function () {  //navbar
    // navbar
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.style.width = "90%";
        navbar.style.margin = "0 auto";
        navbar.style.left = "2.5%";
        navbar.style.right = "2.5%";
        navbar.style.top = "2.5%";
        navbar.style.borderRadius = "40px";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.width = "100%";
        navbar.style.margin = "0";
        navbar.style.left = "0";
        navbar.style.right = "0";
        navbar.style.top = "0";
        navbar.style.borderRadius = "0";
    }
});
document.getElementById("menu-icon").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("active");
});

// ############################

document.addEventListener("DOMContentLoaded", function () {  //card
    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.1)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});


// ############################