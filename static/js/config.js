// Cấu hình website kx8
const websiteConfig = {
    title: "kx8.app Kiểm Tra Độ An Toàn Link Truy Cập",
    favicon: "asset/images/wps_favicon_32x32_winccbdtf6_20250818130826.webp",
    logo: "asset/images/kx8.webp",
    logo_size: 50,
    background: "asset/images/background.jpg",
    background_type: "color", // 'image' hoặc 'color'
    background_color: "#121712",
    container_bg_color: "#310101",
    marquee_color: "#ffffff",
    footer_image: "asset/images/banner4.jpeg",
    footer_link: "https://www.kx8.app/",
    banners: [
        "asset/images/banner1.jpeg",
        "asset/images/banner3.jpeg",
        "asset/images/banner4.jpeg",
        "asset/images/banner5.jpeg",
        "asset/images/banner6.jpeg"
    ],
    marquee: "নতুন সদস্য প্রথমবার ৫০ টাকা জমা দিলে বোনাস পাবেন সর্বোচ্চ ৮,০০০ টাকা পর্যন্ত। প্রতি মাসের ৫ তারিখে \"সদস্য উৎসব দিবস\" বোনাস: ৮০০ কোটি টাকা। প্রতি মাসের ২০ তারিখে রহস্যময় পুরস্কার সর্বোচ্চ ৮ হাজার কোটি টাকা পর্যন্ত!",
    links: [
        {
            name: "লিংক ১",
            showUrl: "এখনই উপহার নিন",
            jumpUrl: "https://www.kx8.app/",
            icon: "asset/images/KX8-MN.png"
        },
        {
            name: "লিংক ২",
            showUrl: "বিশ্বাসযোগ্য",
            jumpUrl: "https://www.kx8.app/",
            icon: "asset/images/KX8-MN.png"
        },
        {
            name: "লিংক ৩",
            showUrl: "উচ্চ নিরাপত্তা",
            jumpUrl: "https://www.kx8.app/",
            icon: "asset/images/KX8-MN.png"
        },
        {
            name: "লিংক ৪",
            showUrl: "দ্রুত টাকা উত্তোলন",
            jumpUrl: "https://www.kx8.app/",
            icon: "asset/images/KX8-MN.png"
        }
    ],
    appUrl: "https://www.kx8.app/down",
    serviceUrl: "https://www.bbmuwwxyk.com/admin/kindeditor/attached/file/20250903/20250903180338_56223.html?lng=en"
};

// Hàm tạo thời gian phản hồi ngẫu nhiên
function getRandomResponseTime() {
    return Math.floor(Math.random() * (60 - 20 + 1)) + 20;
}

// Hàm khởi tạo trang
function initializePage() {
    // Cập nhật title
    document.title = websiteConfig.title;
    
    // Cập nhật favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        favicon.href = websiteConfig.favicon;
    }
    
    // Cập nhật logo
    const logo = document.querySelector('.tops img');
    if (logo) {
        logo.src = websiteConfig.logo;
        logo.style.width = websiteConfig.logo_size + '%';
    }
    
    // Cập nhật background
    const body = document.body;
    if (websiteConfig.background_type === 'image') {
        body.style.backgroundImage = `url('${websiteConfig.background}')`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundAttachment = 'fixed';
    } else {
        body.style.backgroundColor = websiteConfig.background_color;
    }
    
    // Cập nhật container background
    const container = document.querySelector('.mobile-wrap');
    if (container) {
        container.style.backgroundColor = websiteConfig.container_bg_color;
    }
    
    // Cập nhật marquee
    const marquee = document.querySelector('.marquee');
    if (marquee) {
        marquee.style.color = websiteConfig.marquee_color + ' !important';
        const marqueeContent = marquee.querySelector('marquee');
        if (marqueeContent) {
            marqueeContent.textContent = websiteConfig.marquee;
        }
    }
    
    // Cập nhật banners
    const swiperWrapper = document.getElementById('swiper-wrapper');
    if (swiperWrapper) {
        swiperWrapper.innerHTML = '';
        websiteConfig.banners.forEach((banner, index) => {
            const slide = document.createElement('li');
            slide.className = 'swiper-slide';
            slide.setAttribute('data-swiper-slide-index', index);
            slide.style.width = '710px';
            slide.innerHTML = `<img src="${banner}" alt="8Qbet">`;
            swiperWrapper.appendChild(slide);
        });
    }
    
    // Cập nhật pagination
    const pagination = document.querySelector('.swiper-pagination');
    if (pagination) {
        pagination.innerHTML = '';
        websiteConfig.banners.forEach((_, index) => {
            const bullet = document.createElement('span');
            bullet.className = 'swiper-pagination-bullet';
            bullet.setAttribute('tabindex', '0');
            bullet.setAttribute('role', 'button');
            bullet.setAttribute('aria-label', `Go to slide ${index + 1}`);
            pagination.appendChild(bullet);
        });
    }
    
    // Cập nhật links
    const linesContainer = document.getElementById('lines');
    if (linesContainer) {
        linesContainer.innerHTML = '';
        websiteConfig.links.forEach(link => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <a href="${link.jumpUrl}" target="_blank" rel="noopener noreferrer">
                    <div class="ico fl">
                        <img src="${link.icon}" alt="8Qbet">
                    </div>
                    <div class="txts fl">
                        ${link.name}
                    </div>
                    <div class="ms fl">${getRandomResponseTime()}ms</div>
                </a>
                <div class="webs fl">
                    <a href="${link.jumpUrl}" target="_blank" rel="noopener noreferrer">
                        ${link.showUrl}
                    </a>
                </div>
                <div class="btns fr">
                    <a href="${link.jumpUrl}" target="_blank" rel="noopener noreferrer">
                        <button>প্রবেশ করুন</button>
                    </a>
                </div>
            `;
            linesContainer.appendChild(item);
        });
    }
    
    // Cập nhật footer
    const footer = document.querySelector('.footer a');
    if (footer) {
        footer.href = websiteConfig.footer_link;
        const footerImg = footer.querySelector('img');
        if (footerImg) {
            footerImg.src = websiteConfig.footer_image;
        }
    }
    
    // Cập nhật function buttons
    const functionItems = document.querySelectorAll('.function .item a');
    if (functionItems.length >= 2) {
        functionItems[0].href = websiteConfig.serviceUrl; // Customer service
        functionItems[1].href = websiteConfig.appUrl; // App download
    }
}
