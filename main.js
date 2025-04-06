let swiper = new Swiper(".slider-wrapper", {
    // slider
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

const translations = {
    en: {
        home: "Home",
        about: "About Us",
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
            "Nami is a company specialized in providing Integrated web services",
        aboutus_paragraph:
            "Starting from graphic design to programming and designing smartphone applications, Nami and its team have worked since its inception to become one of the leading Arab web development companies. We know the path and we’re walking it with steady steps.",

        ourServices: "Our Services",
        qualityMeetsInnovation: "WHERE QUALITY MEETS INNOVATION",
        serviceIntro:
            "We provide high-quality services that ensure innovation and efficiency.",
        webDevelopment: "Website development",
        webDevelopmentDesc:
            "We excel in building advanced and responsive websites that reflect your brand identity and help you communicate effectively with your audience. From design to implementation, we are committed to delivering an exceptional digital experience.",
        mobileApp: "Mobile application",
        mobileAppDesc:
            "We provide comprehensive solutions for mobile apps on both Android and iOS platforms with a focus on performance and user experience.",
        desktopDev: "Desktop development",
        desktopDevDesc:
            "We excel in building advanced and responsive websites that reflect your brand identity and help you communicate effectively with your audience. From design to implementation, we are committed to delivering an exceptional digital experience.",
        techConsulting: "Technical consulting",
        techConsultingDesc:
            "We excel in building advanced and responsive websites that reflect your brand identity and help you communicate effectively with your audience. From design to implementation, we are committed to delivering an exceptional digital experience.",
        cloudServices: "Cloud services",
        cloudServicesDesc:
            "We excel in building advanced and responsive websites that reflect your brand identity and help you communicate effectively with your audience. From design to implementation, we are committed to delivering an exceptional digital experience.",
        testing: "Testing and Maintenance",
        testingDesc:
            "We excel in building advanced and responsive websites that reflect your brand identity and help you communicate effectively with your audience. From design to implementation, we are committed to delivering an exceptional digital experience.",
        showMore: "Show More",
        // work1: "→ UI/UX Design\n→ Front and Back End Development\n→ E-commerce\n→ Dynamic Websites",
        // work2: "→ Mobile UX/UI\n→ Android and iOS Development\n→ App Publishing\n→ Maintenance",
        // work3: "→ Windows Applications\n→ Electron Apps\n→ Data-driven Systems\n→ Admin Panels",
        // work4: "→ Digital Transformation\n→ IT Infrastructure\n→ Security Solutions\n→ Automation",
        // work5: "→ Cloud Hosting\n→ Backup Solutions\n→ SaaS Integration\n→ DevOps",
        // work6: "→ QA Testing\n→ Debugging\n→ Regular Updates\n→ Performance Monitoring",

        ourVision: "Our Vision",
        visionText:
            "We seek to be the world's leading company in providing innovative technological solutions that help organizations achieve digital excellence and enhance their presence on the Internet in a unique and distinct way.",
        ourMessage: "Our Message",
        messageText:
            "We empower our clients by providing website and mobile application design and development solutions that combine creativity, advanced technology, and a unique user experience to achieve their sustainable digital success.",
        ourValues: "Our Values",
        valuesText:
            "We at Nami Corporation are proud of a set of core values that drive our operations, build our relationships with our customers, and define our approach to providing integrated technology solutions.",
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
            "A world of shopping at your fingertips...kgkkgkgkkgkgkgkg",
        mishwar: "Mishwar",
        mishwarDescription:
            "A leading company in the delivery services sector...jhckdc hdwuehdiudw edw",
        adhmn: "ADhmn",
        adhmnDescription: "Home maintenance tools designed for you...gjggjgjjgjgg",
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
            "At Integrated Solutions, we combine creativity and professionalism to transform your ideas into inspiring digital experiences. Connect with us today to achieve tangible success together.",
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
        home: "الرئيسية",
        about: "من نحن",
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
        aboutus_subtitle: "نامي هي شركة متخصصة في تقديم خدمات الويب المتكاملة",
        aboutus_paragraph:
            "بدءًا من التصميم الجرافيكي إلى برمجة وتصميم تطبيقات الهواتف الذكية، تسعى نمي وفريق عملها منذ تأسيسها لتكون من أبرز شركات تطوير الويب العربية. نحن نعرف الطريق ونسير عليه بخطى واثقة.",

        ourServices: "خدماتنا",
        qualityMeetsInnovation: "حيث تلتقي الجودة بالابتكار",
        serviceIntro: "نقدم خدمات عالية الجودة تضمن الابتكار والكفاءة.",
        webDevelopment: "تطوير المواقع الإلكترونية",
        webDevelopmentDesc:
            "نتميز في بناء مواقع متقدمة ومتجاوبة تعكس هوية علامتك التجارية وتساعدك على التواصل الفعّال .",
        mobileApp: "تطبيقات الجوال",
        mobileAppDesc:
            "نقدم حلول شاملة لتطوير تطبيقات الهاتف على منصات Android وiOS مع التركيز على الأداء وتجربة المستخدم.",
        desktopDev: "تطبيقات سطح المكتب",
        desktopDevDesc:
            "نتميز ببناء مواقع إلكترونية متطورة وسريعة الاستجابة تعكس هوية علامتك التجارية وتساعدك على التواصل بفعالية مع جمهورك. من التصميم إلى التنفيذ، نلتزم بتقديم تجربة رقمية استثنائية.",
        techConsulting: "الاستشارات التقنية",
        techConsultingDesc:
            "نتميز ببناء مواقع إلكترونية متطورة وسريعة الاستجابة تعكس هوية علامتك التجارية وتساعدك على التواصل بفعالية مع جمهورك. من التصميم إلى التنفيذ، نلتزم بتقديم تجربة رقمية استثنائية.",
        cloudServices: "خدمات السحابة",
        cloudServicesDesc:
            "نتميز ببناء مواقع إلكترونية متطورة وسريعة الاستجابة تعكس هوية علامتك التجارية وتساعدك على التواصل بفعالية مع جمهورك. من التصميم إلى التنفيذ، نلتزم بتقديم تجربة رقمية استثنائية.",
        testing: "الاختبار والصيانة",
        testingDesc:
            "نتميز ببناء مواقع إلكترونية متطورة وسريعة الاستجابة تعكس هوية علامتك التجارية وتساعدك على التواصل بفعالية مع جمهورك. من التصميم إلى التنفيذ، نلتزم بتقديم تجربة رقمية استثنائية.",
        showMore: "عرض المزيد",
        // work1: "→ تصميم واجهات المستخدم وتجربة المستخدم\n→ تطوير الواجهة والخلفية\n→ تطوير المتاجر الإلكترونية\n→ مواقع ديناميكية",
        // work2: "→ تصميم واجهة التطبيق\n→ تطوير Android وiOS\n→ نشر التطبيقات\n→ صيانة التطبيقات",
        // work3: "→ تطبيقات ويندوز\n→ تطبيقات إلكترون\n→ أنظمة تعتمد على البيانات\n→ لوحات تحكم",
        // work4: "→ التحول الرقمي\n→ البنية التحتية لتقنية المعلومات\n→ حلول الأمان\n→ الأتمتة",
        // work5: "→ استضافة سحابية\n→ حلول النسخ الاحتياطي\n→ تكامل SaaS\n→ DevOps",
        // work6: "→ اختبار الجودة\n→ تصحيح الأخطاء\n→ تحديثات دورية\n→ مراقبة الأداء",

        ourVision: "رؤيتنا",
        visionText:
            "نسعى لأن نكون الشركة الرائدة عالميًا في تقديم الحلول التكنولوجية المبتكرة التي تساعد المؤسسات في تحقيق التفوق الرقمي وتعزيز حضورها على الإنترنت بطريقة فريدة ومميزة.",
        ourMessage: "رسالتنا",
        messageText:
            "نمكن عملائنا من خلال تقديم حلول تصميم وتطوير المواقع والتطبيقات المحمولة التي تجمع بين الإبداع والتكنولوجيا المتقدمة وتجربة المستخدم الفريدة لتحقيق النجاح الرقمي المستدام.",
        ourValues: "قيمنا",
        valuesText:
            "نحن في شركة Nami نفخر بمجموعة من القيم الأساسية التي توجه عملياتنا، وبناء علاقاتنا مع عملائنا، وتحدد نهجنا في تقديم الحلول التكنولوجية المتكاملة.",
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
        circleDescription: "عالم من التسوق في متناول يدك...kgkkgkgkkgkgkgkg",
        mishwar: "مشوار",
        mishwarDescription:
            "شركة رائدة في قطاع خدمات التوصيل...jhckdc hdwuehdiudw edw",
        adhmn: "أدهمن",
        adhmnDescription: "أدوات صيانة المنزل مصممة خصيصًا لك...gjggjgjjgjgg",
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
            "في حلول مدمجة، نحن نجمع بين الإبداع والاحترافية لتحويل أفكارك إلى تجارب رقمية ملهمة. تواصل معنا اليوم لتحقيق النجاح الملموس معًا.",
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
            "© 2025 جميع الحقوق محفوظة لشركة فكرتي لتطوير البرمجيات. Fikrati.com",
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

    document.querySelectorAll("[data-i18n-work]").forEach((el) => {
        // للخدمات
        const key = el.getAttribute("data-i18n-work");
        const translatedValue = translations[currentLang][key];
        if (translatedValue) {
            el.setAttribute("data-work", translatedValue);
            el.textContent = translatedValue;
        } else {
            console.warn(`Missing translation for key: ${key} in ${currentLang}`);
        }
    });
}

function toggleLanguage(event) {
    event.preventDefault();
    currentLang = currentLang === "en" ? "ar" : "en";
    applyTranslations();
}

document.addEventListener("DOMContentLoaded", function () {
    applyTranslations();
});

//   ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

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

window.addEventListener("scroll", function () {
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

document.addEventListener("DOMContentLoaded", function () {
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
