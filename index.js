function hideElement(element) {
    if (!element) return;
    element.style.display = 'none';
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
}

function showElement(element) {
    if (!element) return;
    element.style.display = 'flex';
    element.style.opacity = '1';
    element.style.visibility = 'visible';
}

function initializeSequence() {
    const intro = document.getElementById('intro');
    const splash = document.getElementById('splash');
    const menu = document.getElementById('menu');

    if (intro) {
        intro.style.display = 'flex';
    }

    if (splash) {
        splash.style.display = 'none';
        splash.style.opacity = '0';
        splash.style.visibility = 'hidden';
    }

    if (menu) {
        menu.style.display = 'none';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
    }

    setTimeout(() => {
        if (splash) {
            splash.style.display = 'flex';
            splash.style.opacity = '1';
            splash.style.visibility = 'visible';
        }
    }, 8000);

    setTimeout(() => {
        if (splash) {
            splash.style.opacity = '0';
            splash.style.visibility = 'hidden';
        }
    }, 10000);

    setTimeout(() => {
        if (menu) {
            menu.style.display = 'flex';
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
        }
    }, 10000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSequence);
} else {
    initializeSequence();
}


