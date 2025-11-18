// Lesson-specific JavaScript
let currentLanguage = 'en';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLessonPage();
});

// Initialize lesson page
function initializeLessonPage() {
    setupLessonEventListeners();
    loadSavedLanguage();
    setupMobileNavigation();
    setupCodeHighlighting();
    setupExercises();
    
    // Load language after DOM is ready
    setTimeout(() => {
        loadLanguage(currentLanguage);
    }, 100);
}

// Setup lesson-specific event listeners
function setupLessonEventListeners() {
    // Language switcher buttons
    const enBtn = document.getElementById('en-btn');
    const viBtn = document.getElementById('vi-btn');
    
    if (enBtn) {
        enBtn.addEventListener('click', () => changeLanguage('en'));
    }
    
    if (viBtn) {
        viBtn.addEventListener('click', () => changeLanguage('vi'));
    }

    // Mobile hamburger menu
    const hamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Contact modal functionality
    const contactModal = document.getElementById('contact-modal');
    const closeModal = document.querySelector('.close');
    
    if (contactModal && closeModal) {
        closeModal.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Exercise solution toggles
    setupExerciseSolutions();
}

// Language change function
function changeLanguage(lang) {
    currentLanguage = lang;
    loadLanguage(lang);
    updateLanguageButtons();
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load language
function loadLanguage(lang) {
    if (typeof translations === 'undefined') {
        console.warn('Translations not loaded yet');
        setTimeout(() => loadLanguage(lang), 200);
        return;
    }

    applyTranslations(lang);
    document.documentElement.lang = lang;
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

// Update language buttons
function updateLanguageButtons() {
    const enBtn = document.getElementById('en-btn');
    const viBtn = document.getElementById('vi-btn');
    
    if (enBtn && viBtn) {
        // Remove active class from both
        enBtn.classList.remove('active');
        viBtn.classList.remove('active');
        
        // Add active class to current language
        if (currentLanguage === 'en') {
            enBtn.classList.add('active');
        } else {
            viBtn.classList.add('active');
        }
    }
}

// Load saved language preference
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'vi' || savedLang === 'en')) {
        currentLanguage = savedLang;
    }
    updateLanguageButtons();
}

// Setup mobile navigation
function setupMobileNavigation() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger) {
        // Create hamburger menu if it doesn't exist
        const navRight = document.querySelector('.nav-right');
        if (navRight) {
            const hamburgerEl = document.createElement('div');
            hamburgerEl.className = 'nav-hamburger';
            hamburgerEl.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;
            navRight.appendChild(hamburgerEl);
            
            // Add event listener
            hamburgerEl.addEventListener('click', () => {
                hamburgerEl.classList.toggle('active');
                if (navMenu) {
                    navMenu.classList.toggle('active');
                }
            });
        }
    }
}

// Smooth scroll functionality
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const hamburger = document.querySelector('.nav-hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
}

// Setup code highlighting
function setupCodeHighlighting() {
    // Initialize Prism.js if available
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
    
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(addCopyButton);
}

// Add copy button to code block
function addCopyButton(codeBlock) {
    const pre = codeBlock.parentElement;
    if (pre && pre.tagName === 'PRE') {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.setAttribute('title', 'Copy code');
        
        copyBtn.addEventListener('click', () => {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                copyBtn.style.color = '#28a745';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                    copyBtn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
        
        pre.style.position = 'relative';
        pre.appendChild(copyBtn);
    }
}

// Setup exercises
function setupExercises() {
    setupExerciseSolutions();
    setupExerciseInteractivity();
}

// Setup exercise solutions
function setupExerciseSolutions() {
    const solutionToggles = document.querySelectorAll('.exercise-solution details');
    solutionToggles.forEach(toggle => {
        toggle.addEventListener('toggle', function() {
            if (this.open) {
                // Highlight code in solution when opened
                const codeBlocks = this.querySelectorAll('pre code');
                codeBlocks.forEach(block => {
                    if (typeof Prism !== 'undefined') {
                        Prism.highlightElement(block);
                    }
                });
            }
        });
    });
}

// Setup exercise interactivity
function setupExerciseInteractivity() {
    // Add interactive elements to exercises
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach((exercise, index) => {
        const exerciseNumber = index + 1;
        
        // Add progress tracking
        const progressBtn = document.createElement('button');
        progressBtn.className = 'exercise-progress-btn';
        progressBtn.innerHTML = '<i class="fas fa-check"></i> Mark as Complete';
        progressBtn.addEventListener('click', () => toggleExerciseProgress(exercise, progressBtn));
        
        // Add to exercise header
        const exerciseHeader = exercise.querySelector('h4');
        if (exerciseHeader) {
            exerciseHeader.appendChild(progressBtn);
        }
        
        // Load saved progress
        const isComplete = localStorage.getItem(`lesson3-exercise-${exerciseNumber}`) === 'complete';
        if (isComplete) {
            exercise.classList.add('completed');
            progressBtn.innerHTML = '<i class="fas fa-undo"></i> Mark as Incomplete';
            progressBtn.classList.add('completed');
        }
    });
}

// Toggle exercise progress
function toggleExerciseProgress(exercise, button) {
    const exerciseIndex = Array.from(document.querySelectorAll('.exercise')).indexOf(exercise) + 1;
    const storageKey = `lesson3-exercise-${exerciseIndex}`;
    
    if (exercise.classList.contains('completed')) {
        // Mark as incomplete
        exercise.classList.remove('completed');
        button.innerHTML = '<i class="fas fa-check"></i> Mark as Complete';
        button.classList.remove('completed');
        localStorage.removeItem(storageKey);
    } else {
        // Mark as complete
        exercise.classList.add('completed');
        button.innerHTML = '<i class="fas fa-undo"></i> Mark as Incomplete';
        button.classList.add('completed');
        localStorage.setItem(storageKey, 'complete');
    }
    
    updateLessonProgress();
}

// Update lesson progress
function updateLessonProgress() {
    const totalExercises = document.querySelectorAll('.exercise').length;
    const completedExercises = document.querySelectorAll('.exercise.completed').length;
    const progress = Math.round((completedExercises / totalExercises) * 100);
    
    // Save overall progress
    localStorage.setItem('lesson3-progress', progress);
    
    // Update progress indicators if they exist
    const progressIndicators = document.querySelectorAll('.lesson-progress');
    progressIndicators.forEach(indicator => {
        indicator.textContent = `${progress}% Complete`;
    });
}

// Navigation functions for lesson sections
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
        const targetPosition = section.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Lesson JavaScript Error:', e.error);
});

// Export functions for external use
window.LessonUtils = {
    changeLanguage,
    loadLanguage,
    navigateToSection,
    getCurrentLanguage: () => currentLanguage
};

// Add styles for lesson-specific elements
const lessonStyles = `
    .copy-code-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.3s ease;
        z-index: 10;
    }
    
    .copy-code-btn:hover {
        background: var(--primary-dark);
        transform: scale(1.1);
    }
    
    .exercise-progress-btn {
        margin-left: auto;
        background: var(--success-color);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.3s ease;
    }
    
    .exercise-progress-btn:hover {
        background: var(--success-dark);
    }
    
    .exercise-progress-btn.completed {
        background: var(--warning-color);
    }
    
    .exercise.completed {
        opacity: 0.8;
        border-color: var(--success-color);
    }
    
    .exercise.completed h4 {
        color: var(--success-dark);
    }
    
    .lang-btn.active {
        background: var(--primary-color);
        color: white;
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            z-index: 1000;
        }
        
        .nav-hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = lessonStyles;
document.head.appendChild(styleSheet);