// Global variables
let currentLanguage = 'en';
let isScrolled = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    setupEventListeners();
    setupScrollEffects();
    setupAnimations();
    loadLanguage(currentLanguage);
    
    // Force hide logo on mobile devices
    hideLogoOnMobile();
}

// Force hide logo on mobile devices
function hideLogoOnMobile() {
    if (window.innerWidth <= 768) {
        const logos = document.querySelectorAll('.logo, .innomind-header-logo');
        logos.forEach(logo => {
            logo.style.display = 'none';
            logo.style.visibility = 'hidden';
            logo.style.opacity = '0';
            logo.style.width = '0';
            logo.style.height = '0';
            logo.style.margin = '0';
            logo.style.padding = '0';
        });
        
        // Center header content
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            headerContent.style.justifyContent = 'center';
        }
    }
}

// Contact Popup Functions
function openContactPopup() {
    const contactPopup = document.getElementById('contactPopup');
    if (contactPopup) {
        contactPopup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeContactPopupFunc() {
    const contactPopup = document.getElementById('contactPopup');
    if (contactPopup) {
        contactPopup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Show more modules button
    const showMoreBtn = document.getElementById('showMoreModules');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', toggleMoreModules);
    }

    // Contact popup functionality
    const contactLink = document.querySelector('a[href="#contact"]');
    const contactPopup = document.getElementById('contactPopup');
    const closeContactPopup = document.getElementById('closeContactPopup');

    if (contactLink && contactPopup) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            openContactPopup();
        });
    }

    if (closeContactPopup && contactPopup) {
        closeContactPopup.addEventListener('click', closeContactPopupFunc);
        
        // Close popup when clicking overlay
        contactPopup.addEventListener('click', function(e) {
            if (e.target === contactPopup) {
                closeContactPopupFunc();
            }
        });
    }

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactPopup && contactPopup.classList.contains('active')) {
            closeContactPopupFunc();
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        // Skip contact link as it opens popup
        if (!link.getAttribute('href').includes('#contact')) {
            link.addEventListener('click', smoothScroll);
        }
    });

    // CTA buttons
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', handleCTAClick);
    });

    // Header scroll effect
    window.addEventListener('scroll', handleScroll);
    
    // Re-check logo hiding on window resize
    window.addEventListener('resize', () => {
        hideLogoOnMobile();
    });

    // Resize handler
    window.addEventListener('resize', handleResize);
}

// Language toggle functionality
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
    loadLanguage(currentLanguage);
    updateLanguageToggle();
}

function loadLanguage(lang) {
    if (typeof translations === 'undefined') {
        console.warn('Translations not loaded yet');
        return;
    }

    applyTranslations(lang);

    // Update document language
    document.documentElement.lang = lang;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && translations[lang] && translations[lang]['meta-description']) {
        metaDescription.setAttribute('content', translations[lang]['meta-description']);
    }

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Apply translations to all elements with data-lang-key
function applyTranslations(lang = currentLanguage) {
    if (typeof translations === 'undefined') {
        console.warn('Translations not loaded yet');
        return;
    }

    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

function updateLanguageToggle() {
    const langToggle = document.getElementById('currentLang');
    if (langToggle) {
        langToggle.textContent = currentLanguage.toUpperCase();
    }
}

// Load saved language preference
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'vi' || savedLang === 'en')) {
        currentLanguage = savedLang;
        updateLanguageToggle();
    } else {
        // Default to English if no saved preference
        currentLanguage = 'en';
        updateLanguageToggle();
    }
}

// Show/hide additional modules
function toggleMoreModules() {
    const button = document.getElementById('showMoreModules');
    const curriculumList = document.querySelector('.curriculum-list');
    
    if (!button || !curriculumList) return;

    const hiddenModules = getHiddenModules();
    const isShowing = button.classList.contains('showing-more');

    if (isShowing) {
        // Hide modules
        hiddenModules.forEach(module => {
            module.style.display = 'none';
        });
        button.textContent = translations[currentLanguage]['show-more'] || 'Show 6 more modules';
        button.classList.remove('showing-more');
    } else {
        // Show modules
        curriculumList.insertAdjacentHTML('beforeend', getAdditionalModulesHTML());
        button.textContent = translations[currentLanguage]['show-less'] || 'Collapse';
        button.classList.add('showing-more');
        
        // Apply translations to new modules
        applyTranslations();
        
        // Animate new modules
        const newModules = curriculumList.querySelectorAll('.module-item:nth-child(n+7)');
        newModules.forEach((module, index) => {
            setTimeout(() => {
                module.classList.add('animate-fade-in-up');
            }, index * 100);
        });
    }
}

function getHiddenModules() {
    return document.querySelectorAll('.module-item:nth-child(n+7)');
}

function getAdditionalModulesHTML() {
    return `
        <div class="module-item">
            <div class="module-number">07</div>
            <div class="module-content">
                <h3 data-lang-key="module7-title">String</h3>
                <p data-lang-key="module7-desc">Chuỗi và kiểu kí tự, bảng mã ASCII và kỹ thuật lập trình với chuỗi.</p>
                <div class="module-topics">
                    <span class="topic" data-lang-key="module7-topic1">Chuẩn hóa tên</span>
                    <span class="topic" data-lang-key="module7-topic2">Đếm kí tự phân biệt</span>
                </div>
            </div>
        </div>
        <div class="module-item">
            <div class="module-number">08</div>
            <div class="module-content">
                <h3 data-lang-key="module8-title">Recursion</h3>
                <p data-lang-key="module8-desc">Kỹ thuật lập trình đệ quy cơ bản và cấu trúc dữ liệu Stack.</p>
                <div class="module-topics">
                    <span class="topic" data-lang-key="module8-topic1">Số Fibonacci</span>
                    <span class="topic" data-lang-key="module8-topic2">Chuyển đổi hệ số</span>
                </div>
            </div>
        </div>
        <div class="module-item">
            <div class="module-number">09</div>
            <div class="module-content">
                <h3 data-lang-key="module9-title">Data Abstraction</h3>
                <p data-lang-key="module9-desc">Struct/Class và getters/setters để tạo kiểu dữ liệu mới.</p>
                <div class="module-topics">
                    <span class="topic" data-lang-key="module9-topic1">Thông tin học sinh</span>
                    <span class="topic" data-lang-key="module9-topic2">Tọa độ 2D</span>
                </div>
            </div>
        </div>
        <div class="module-item">
            <div class="module-number">10</div>
            <div class="module-content">
                <h3 data-lang-key="module10-title">Sorting Algorithms</h3>
                <p data-lang-key="module10-desc">Các thuật toán sắp xếp kinh điển và độ phức tạp thuật toán.</p>
                <div class="module-topics">
                    <span class="topic" data-lang-key="module10-topic1">Sắp xếp sinh viên</span>
                    <span class="topic" data-lang-key="module10-topic2">Xây dựng tháp</span>
                </div>
            </div>
        </div>
        <div class="module-item">
            <div class="module-number">11</div>
            <div class="module-content">
                <h3 data-lang-key="module11-title">Singly Linked List</h3>
                <p data-lang-key="module11-desc">Danh sách liên kết đơn FIFO/LIFO và các thao tác cơ bản.</p>
                <div class="module-topics">
                    <span class="topic" data-lang-key="module11-topic1">Phòng khách sạn</span>
                    <span class="topic" data-lang-key="module11-topic2">Reversed list</span>
                </div>
            </div>
        </div>
        <div class="module-item">
            <div class="module-number">12</div>
            <div class="module-content">
                <h3 data-lang-key="module12-title">Trees</h3>
                <p data-lang-key="module12-desc">Cấu trúc dữ liệu cây và Binary Search Tree.</p>
                <div class="module-topics">
                    <span class="topic" data-lang-key="module12-topic1">Điểm cao nhất</span>
                    <span class="topic" data-lang-key="module12-topic2">Level order traversal</span>
                </div>
            </div>
        </div>
    `;
}

// Smooth scroll functionality
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Handle CTA button clicks
function handleCTAClick(e) {
    const button = e.target;
    const buttonText = button.getAttribute('data-lang-key');
    
    // Add click effect
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);

    // Handle different CTA actions
    switch(buttonText) {
        case 'header-cta':
        case 'hero-start':
        case 'cta-start':
            handleEnrollment();
            break;
        case 'hero-preview':
        case 'cta-demo':
            handlePreview();
            break;
        default:
            console.log('CTA clicked:', buttonText);
    }
}

function handleEnrollment() {
    // Simulate enrollment process
    showNotification(
        translations[currentLanguage]['notification-enrollment'] || 
        'Redirecting to enrollment page...',
        'success'
    );
    
    setTimeout(() => {
        // In a real application, this would redirect to enrollment page
        console.log('Redirecting to enrollment page...');
    }, 1500);
}

function handlePreview() {
    // Simulate preview functionality
    showNotification(
        translations[currentLanguage]['notification-preview'] || 
        'Loading demo video...',
        'info'
    );
    
    setTimeout(() => {
        // In a real application, this would open a video modal
        console.log('Opening preview video...');
    }, 1500);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        </div>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Setup close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => notification.remove());

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// Scroll effects
function setupScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.feature-card, .module-item, .highlight-item, .instructor-content'
    );
    animateElements.forEach(el => observer.observe(el));
}

function handleScroll() {
    const scrollTop = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (scrollTop > 100 && !isScrolled) {
        isScrolled = true;
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else if (scrollTop <= 100 && isScrolled) {
        isScrolled = false;
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }

    // Parallax effect for hero background
    const heroPattern = document.querySelector('.hero-bg-pattern');
    if (heroPattern) {
        const scrolled = scrollTop * 0.5;
        heroPattern.style.transform = `translateY(${scrolled}px)`;
    }
}

// Setup animations
function setupAnimations() {
    // Code animation
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
        }, (index + 1) * 800);
    });

    // Stats counter animation
    animateCounters();
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element) {
    const target = element.textContent;
    const isNumber = /^\d+/.test(target);
    
    if (!isNumber) return;
    
    const num = parseInt(target);
    const duration = 2000;
    const step = num / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= num) {
            current = num;
            clearInterval(timer);
        }
        
        if (target.includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else if (target.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Handle resize
function handleResize() {
    // Update mobile navigation if needed
    const width = window.innerWidth;
    if (width <= 768) {
        // Mobile optimizations
        setupMobileNavigation();
    }
}

function setupMobileNavigation() {
    // Add mobile navigation toggle if needed
    let mobileToggle = document.querySelector('.mobile-nav-toggle');
    if (!mobileToggle) {
        mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-nav-toggle';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        
        const headerActions = document.querySelector('.header-actions');
        if (headerActions) {
            headerActions.insertBefore(mobileToggle, headerActions.firstChild);
        }

        mobileToggle.addEventListener('click', toggleMobileNav);
    }
}

function toggleMobileNav() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('mobile-open');
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    showNotification(
        translations[currentLanguage]['error-general'] || 
        'An error occurred. Please try again.',
        'error'
    );
});

// Initialize saved preferences
document.addEventListener('DOMContentLoaded', function() {
    loadSavedLanguage();
});

// Export functions for external use
window.CodeUpYourBrain = {
    toggleLanguage,
    loadLanguage,
    showNotification,
    currentLanguage: () => currentLanguage
};

// Add notification styles dynamically
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .notification-success {
        border-left: 4px solid #28a745;
    }

    .notification-error {
        border-left: 4px solid #dc3545;
    }

    .notification-warning {
        border-left: 4px solid #ffc107;
    }

    .notification-info {
        border-left: 4px solid var(--primary-color);
    }

    .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        color: #666;
        margin-left: auto;
    }

    .notification-close:hover {
        color: #333;
    }

    @media (max-width: 480px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);