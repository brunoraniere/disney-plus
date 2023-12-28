document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

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