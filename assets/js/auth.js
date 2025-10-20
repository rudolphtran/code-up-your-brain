// Authentication system for Code Up Your Brain course
class CourseAuth {
    constructor() {
        this.password = 'CodeUpYourBrain2025'; // Mật khẩu mặc định
        this.sessionKey = 'course_authenticated';
        this.sessionTimeout = 6 * 30 * 24 * 60 * 60 * 1000; // 6 months
        this.init();
    }

    init() {
        // Check if user is already authenticated
        if (!this.isAuthenticated()) {
            this.showLoginModal();
        }
    }

    isAuthenticated() {
        const authData = localStorage.getItem(this.sessionKey);
        if (!authData) return false;

        try {
            const data = JSON.parse(authData);
            const now = new Date().getTime();
            
            // Check if session has expired
            if (now > data.expires) {
                localStorage.removeItem(this.sessionKey);
                return false;
            }
            
            return data.authenticated === true;
        } catch (e) {
            localStorage.removeItem(this.sessionKey);
            return false;
        }
    }

    authenticate(inputPassword) {
        if (inputPassword === this.password) {
            const authData = {
                authenticated: true,
                expires: new Date().getTime() + this.sessionTimeout,
                timestamp: new Date().getTime()
            };
            
            localStorage.setItem(this.sessionKey, JSON.stringify(authData));
            this.hideLoginModal();
            this.showSuccessMessage();
            return true;
        } else {
            this.showErrorMessage();
            return false;
        }
    }

    logout() {
        localStorage.removeItem(this.sessionKey);
        this.showLoginModal();
    }

    showLoginModal() {
        // Create modal HTML
        const modalHTML = `
            <div id="auth-modal" class="auth-modal">
                <div class="auth-modal-content">
                    <div class="auth-header">
                        <h2 data-lang-key="auth-title">🔐 Course Access</h2>
                        <p data-lang-key="auth-subtitle">Enter password to access course content</p>
                    </div>
                    
                    <div class="auth-form">
                        <div class="form-group">
                            <label for="course-password" data-lang-key="auth-password-label">Password:</label>
                            <input 
                                type="password" 
                                id="course-password" 
                                class="form-input"
                                placeholder="Enter course password"
                                data-lang-key="auth-password-placeholder"
                            />
                            <div id="auth-error" class="auth-error" style="display: none;"></div>
                        </div>
                        
                        <button id="auth-submit" class="auth-button" data-lang-key="auth-submit">
                            <i class="fas fa-unlock"></i>
                            Access Course
                        </button>
                    </div>
                    
                    <div class="auth-footer">
                        <p data-lang-key="auth-contact">Contact instructor for password access</p>
                        <div class="auth-contact-info">
                            <i class="fas fa-envelope"></i>
                            <span>instructor@innomind.edu.vn</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Add event listeners
        this.setupModalEvents();
        
        // Apply translations if available
        if (window.applyTranslations) {
            window.applyTranslations();
        }
    }

    setupModalEvents() {
        const modal = document.getElementById('auth-modal');
        const passwordInput = document.getElementById('course-password');
        const submitButton = document.getElementById('auth-submit');
        
        // Submit on Enter key
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSubmit();
            }
        });
        
        // Submit on button click
        submitButton.addEventListener('click', () => {
            this.handleSubmit();
        });
        
        // Focus on password input
        passwordInput.focus();
        
        // Prevent modal close by clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                e.preventDefault();
                this.shakeModal();
            }
        });
    }

    handleSubmit() {
        const passwordInput = document.getElementById('course-password');
        const password = passwordInput.value.trim();
        
        if (!password) {
            this.showErrorMessage('Please enter a password');
            return;
        }
        
        const isValid = this.authenticate(password);
        if (!isValid) {
            passwordInput.value = '';
            passwordInput.focus();
            this.shakeModal();
        }
    }

    hideLoginModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }

    showSuccessMessage() {
        const notification = document.createElement('div');
        notification.className = 'auth-notification success';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span data-lang-key="auth-success">Access granted! Welcome to the course.</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    showErrorMessage(message = 'Incorrect password. Please try again.') {
        const errorDiv = document.getElementById('auth-error');
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
            
            setTimeout(() => {
                errorDiv.style.display = 'none';
            }, 3000);
        }
    }

    shakeModal() {
        const modal = document.querySelector('.auth-modal-content');
        if (modal) {
            modal.classList.add('shake');
            setTimeout(() => {
                modal.classList.remove('shake');
            }, 500);
        }
    }

    // Admin function to change password
    changePassword(oldPassword, newPassword) {
        if (oldPassword === this.password) {
            this.password = newPassword;
            this.logout(); // Force re-authentication
            return true;
        }
        return false;
    }

    // Get session info for debugging
    getSessionInfo() {
        const authData = localStorage.getItem(this.sessionKey);
        if (authData) {
            const data = JSON.parse(authData);
            return {
                authenticated: data.authenticated,
                expires: new Date(data.expires),
                timeLeft: Math.max(0, data.expires - new Date().getTime())
            };
        }
        return null;
    }
}

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize auth on lesson and homework pages, not on homepage
    const isProtectedPage = window.location.pathname.includes('lesson') || 
                           window.location.pathname.includes('homework');
    
    if (isProtectedPage) {
        window.courseAuth = new CourseAuth();
    }
});

// Export for use in other scripts
window.CourseAuth = CourseAuth;