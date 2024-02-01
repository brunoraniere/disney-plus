document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    verifyHeader(heroHeight);

    window.addEventListener('scroll', function() {
        verifyHeader(heroHeight);
    });

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

            hideAllTabs();
            tab.classList.add('shows__list--is-active');

            removeAllActiveButtons();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    $(document).ready(function() {
        $('[data-faq-question]').on('click', function() {
            const classe = 'faq__questions__item--is-open';

            $(this).parent().find('.faq__questions__item__answer').slideToggle();
            $(this).parent().toggleClass(classe);
        });
    });
})

function hideHeaderElements() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}

function verifyHeader(heroHeight) {
    const livePosition = window.scrollY;

    if (livePosition < heroHeight) {
        hideHeaderElements();
    }
    else {
        showHeaderElements();
    }
}

function removeAllActiveButtons() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}
