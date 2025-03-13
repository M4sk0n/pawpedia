document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const signUpModal = document.getElementById('signUpModal');
    const loginModal = document.getElementById('loginModal');
    const signUpBtn = document.querySelector('.sign-up');
    const signInBtn = document.querySelector('.sign-in');
    const closeButtons = document.querySelectorAll('.close-modal');
    const alreadyText = document.querySelector('.already-text');

    // Show modal
    function showModal(modal) {
        if (!modal) return;
        modal.classList.add('show');
    }

    // Hide modal
    function hideModal(modal) {
        if (!modal) return;
        modal.classList.remove('show');
    }

    // Handle sign up button click
    if (signUpBtn) {
        signUpBtn.onclick = function(e) {
            e.stopPropagation();
            showModal(signUpModal);
        };
    }

    // Handle sign in button click
    if (signInBtn) {
        signInBtn.onclick = function(e) {
            e.stopPropagation();
            showModal(loginModal);
        };
    }

    // Handle "Already have an account" click
    if (alreadyText) {
        alreadyText.onclick = function(e) {
            e.stopPropagation();
            hideModal(signUpModal);
            setTimeout(() => showModal(loginModal), 300);
        };
    }

    // Handle close button clicks
    closeButtons.forEach(button => {
        button.onclick = function(e) {
            e.stopPropagation();
            const modal = this.closest('.modal');
            hideModal(modal);
        };
    });

    // Handle clicking outside modal
    document.onclick = function(e) {
        if (e.target.classList.contains('modal')) {
            hideModal(e.target);
        }
    };

    // Handle form submissions
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.onsubmit = function(e) {
            e.preventDefault();
            window.location.href = 'breedEncyclopedia.html';
        };
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            window.location.href = 'breedEncyclopedia.html';
        };
    }

    // Debug
    console.log('Auth script loaded');
    console.log('Sign up button:', signUpBtn);
    console.log('Sign in button:', signInBtn);
});
