// Translation Loader and Merger
// This file merges common translations with lesson-specific translations

function mergeTranslations(commonTrans, lessonTrans) {
    const merged = {
        vi: {},
        en: {}
    };
    
    // Merge Vietnamese translations
    if (commonTrans && commonTrans.vi) {
        Object.assign(merged.vi, commonTrans.vi);
    }
    if (lessonTrans && lessonTrans.vi) {
        Object.assign(merged.vi, lessonTrans.vi);
    }
    
    // Merge English translations
    if (commonTrans && commonTrans.en) {
        Object.assign(merged.en, commonTrans.en);
    }
    if (lessonTrans && lessonTrans.en) {
        Object.assign(merged.en, lessonTrans.en);
    }
    
    return merged;
}

// Initialize translations based on what's loaded
function initializeTranslations() {
    // Check which lesson translations are available
    let lessonTranslations = null;
    
    if (typeof window.lesson1Translations !== 'undefined') {
        lessonTranslations = window.lesson1Translations;
    } else if (typeof window.lesson2Translations !== 'undefined') {
        lessonTranslations = window.lesson2Translations;
    } else if (typeof window.lesson3Translations !== 'undefined') {
        lessonTranslations = window.lesson3Translations;
    } else if (typeof window.lesson4Translations !== 'undefined') {
        lessonTranslations = window.lesson4Translations;
    } else if (typeof window.lesson5Translations !== 'undefined') {
        lessonTranslations = window.lesson5Translations;
    }
    
    // Merge common and lesson-specific translations
    const commonTranslations = window.commonTranslations || { vi: {}, en: {} };
    window.translations = mergeTranslations(commonTranslations, lessonTranslations);
    
    console.log('Translations initialized:', {
        hasCommon: !!window.commonTranslations,
        hasLesson: !!lessonTranslations,
        totalKeys: {
            vi: Object.keys(window.translations.vi).length,
            en: Object.keys(window.translations.en).length
        }
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTranslations);
} else {
    initializeTranslations();
}
