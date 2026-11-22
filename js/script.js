//Mobile navigation: show/hide the menu and announce its state.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

if(menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });
}

//Portfolio filter : show only the cards that match the chosen category
const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('[data-category]');
const filterStatus = document.querySelector('#filter-status');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selected = button.dataset.filter;
        let visible = 0;
        projectCards.forEach(card => {
            const show = selected === 'all' || card.dataset.category ===selected;
            card.hidden = !show;
            if (show) {
                visible += 1;
            }
        });
        filterButtons.forEach(item => {
            const active = item === button;
            item.classList.toggle('active' , active);
            item.setAttribute('aria-pressed', String(active));
        });
        if (filterStatus) {
            filterStatus.textContent = `${visible} project${visible === 1 ? '' : 's'} shown.`;
        }
    });
   
});

// Contact form: display messge when the form is submited.
const contactForm= document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event){
        event.preventDefault();
        const formMessage = document.querySelector('#form-message');
        if (formMessage) {
            
            formMessage.textContent = 
                'Thank you! This is a demonstration form, so your message has not been sent.';
        }
        contactForm.reset();
        
    });
}