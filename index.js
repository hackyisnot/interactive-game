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

function menuClick() {
    playMenuClickSound();
}

function initializeSequence() {
    const landing = document.getElementById('landing-screen');
    const intro = document.getElementById('intro');
    const splash = document.getElementById('splash');
    const splatter = document.querySelector('.splatterMenu');
    const splatter2 = document.querySelector('.splatterMenu2');
    const menu = document.getElementById('menu');
    const music = document.getElementById('introMusic');
    const menuButtons = document.querySelectorAll('#menu button');
    const skipButton = document.getElementById('skip-intro');

    let splashTimer = null;
    let menuTimer = null;
    let splashHideTimer = null;
    let introSequenceStarted = false;
    const splashShowDelay = 8000;
    const splashVisibleDuration = 5000;
    const splashDisappearDelay = splashShowDelay + splashVisibleDuration;

    function hideSkipButton() {
        if (!skipButton) return;
        skipButton.style.display = 'none';
        skipButton.style.opacity = '0';
        skipButton.style.visibility = 'hidden';
    }

    function showSkipButton() {
        if (!skipButton) return;
        skipButton.style.display = 'inline-block';
        skipButton.style.opacity = '1';
        skipButton.style.visibility = 'visible';
    }

    function clearIntroTimers() {
        if (splashTimer) {
            clearTimeout(splashTimer);
            splashTimer = null;
        }
        if (menuTimer) {
            clearTimeout(menuTimer);
            menuTimer = null;
        }
        if (splashHideTimer) {
            clearTimeout(splashHideTimer);
            splashHideTimer = null;
        }
    }

    function startIntroSequence() {
        if (introSequenceStarted) return;
        introSequenceStarted = true;
        clearIntroTimers();

        if (music) {
            music.volume = 0.35;
            music.currentTime = 0;
            music.play().catch((err) => console.log('Audio playback blocked:', err));
        }

        if (landing) {
            hideElement(landing);
        }

        if (intro) {
            intro.style.display = 'flex';
            intro.classList.remove('paused');
            intro.style.opacity = '1';
            intro.style.visibility = 'visible';
        }

        showSkipButton();

        splashTimer = setTimeout(() => {
            splashTimer = null;
            if (splash) {
                splash.style.display = 'flex';
                splash.classList.remove('hiding');
                splash.classList.add('showing');
                splash.style.opacity = '1';
                splash.style.visibility = 'visible';
            }
        }, splashShowDelay);

        splashHideTimer = setTimeout(() => {
            splashHideTimer = null;
            if (splash) {
                splash.classList.remove('showing');
                splash.classList.add('hiding');
            }
        }, splashDisappearDelay);

        menuTimer = setTimeout(() => {
            menuTimer = null;
            hideSkipButton();
            if (splash) {
                splash.style.display = 'none';
                splash.style.opacity = '0';
                splash.style.visibility = 'hidden';
            }
            if (menu) {
                menu.style.display = 'flex';
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.classList.add('show-menu');
            }
            if (splatter) {
                splatter.classList.add('active');
            }
            if (splatter2) {
                splatter.classList.add('active2');
            }
        }, splashDisappearDelay + 700);
    }

    function skipIntroSequence() {
        if (!introSequenceStarted) return;

        playMenuClickSound();
        clearIntroTimers();
        hideElement(landing);
        hideElement(intro);

        if (splash) {
            splash.classList.remove('showing');
            splash.classList.remove('hiding');
            splash.style.display = 'none';
            splash.style.opacity = '0';
            splash.style.visibility = 'hidden';
        }
        hideSkipButton();

        if (menu) {
            menu.style.display = 'flex';
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.classList.add('show-menu');
        }

        if (splatter) {
            splatter.classList.add('active');
        }
        if (splatter2) {
            splatter.classList.add('active2');
        }

        if (music) {
            music.volume = 0.35;
            music.currentTime = 20;
            music.play().catch((err) => console.log('Audio playback blocked:', err));
        }
    }

    hideSkipButton();

    if (landing) {
        landing.addEventListener('click', () => {
            startIntroSequence();
        });
    }

    if (skipButton) {
        skipButton.addEventListener('click', (event) => {
            event.stopPropagation();
            skipIntroSequence();
        });
    }

    menuButtons.forEach((button) => {
        button.addEventListener('click', playMenuClickSound);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSequence);
} else {
    initializeSequence();
}

function playMenuClickSound() {
    const clickSound = document.getElementById('click');
    if (!clickSound) return;

    clickSound.currentTime = 0;
    clickSound.play().catch((err) => console.log('Click sound blocked:', err));
}