const titleGroup = document.querySelector(".transfer-navigation-title.group")
const titleIndividual = document.querySelector(".transfer-navigation-title.individual")
const transferGroup = document.querySelector(".group-transfer")
const transferIndividual = document.querySelector(".individual-transfer")
const ctaButton = document.querySelectorAll(".cta-button")
const flutter = document.querySelector(".flutter")
const buttonContinued = document.querySelectorAll(".form-button-continued")
const flutterClose = document.querySelector('.form-close')


// ctaButton.forEach(item =>{
//     item.addEventListener('click', () =>{
//         flutter.classList.remove('none')
//         document.body.style.overflow = 'hidden'
//     })
// })

document.getElementById('header-hamburger-menu').addEventListener('click', function () {
    const popupMenu = document.getElementById('header-popup-menu');
    const navItems = document.querySelectorAll('.nav-links-el');

    if (popupMenu.classList.contains('none')) {
        popupMenu.classList.remove('none');
    } else {
        popupMenu.classList.add('none');
    }

    navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            popupMenu.classList.add('none');
        });
    });
});

document.getElementById('footer-hamburger-menu').addEventListener('click', function () {
    const popupMenu = document.getElementById('footer-popup-menu');
    const navItems = document.querySelectorAll('.nav-links-el');

    if (popupMenu.classList.contains('none')) {
        popupMenu.classList.remove('none');
    } else {
        popupMenu.classList.add('none');
    }

    navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            popupMenu.classList.add('none');
        });
    });
});

function formData() {
    const form = document.querySelector('.form');

    form.addEventListener('change', function(event) {
        const target = event.target;
        if (target.classList.contains('form-checkIn')) {
            const checkInDateSpan = target.closest('.form-group-input-data').querySelector('.checkInDateSpan');
            checkInDateSpan.textContent = formatDate(target.value);
            checkInDateSpan.style.color = '#4d4d4d';
        }
        if (target.classList.contains('form-checkOut')) {
            const checkOutDateSpan = target.closest('.form-group-input-data').querySelector('.checkOutDateSpan');
            checkOutDateSpan.textContent = formatDate(target.value);
            checkOutDateSpan.style.color = '#4d4d4d';
        }
    });

    const steps = Array.from(form.querySelectorAll('.form-content-human-data, .form-content-info-data, .form-content-dates-arrival'));
    const prevButton = form.querySelector('.form-prev');
    const closeButton = form.querySelector('.form-close');
    let currentStep = 0;

    const updateForm = () => {
        steps.forEach((step, index) => {
            step.classList.toggle('none', index !== currentStep);
        });
        prevButton.classList.toggle('none', currentStep === 0);
    };

    const formDataInputs = form.querySelectorAll('.form-data-input');
    const errorMessage = form.querySelector('.error-message');

    form.addEventListener('click', (event) => {
        if (event.target.closest('.form-button-continued')) {
            event.preventDefault(); 
            // Проверка полей на первом шаге формы
            if (currentStep === 0) {
                let isValid = true;

                // Проверяем каждый input на заполнение и корректность номера
                formDataInputs.forEach(input => {
                    const value = input.value.trim();
                    if (value === '') {
                        isValid = false;
                        errorMessage.classList.remove('none');
                        input.classList.add('input-error');
                    } else {
                        // Проверка номера телефона на начало с +7, 7 или 8
                        if (!/^(\+7|7|8)/.test(value)) {
                            isValid = false;
                            errorMessage.classList.remove('none');
                            input.classList.add('input-error');
                        } else {
                            input.classList.remove('input-error');
                            errorMessage.classList.add('none');
                            currentStep++;
                            updateForm();
                        }
                    }
                });

                // // Показываем или скрываем сообщение об ошибке
                // if (!isValid) {
                //     errorMessage.classList.remove('none');
                //     return; // Прерываем выполнение функции, если есть ошибки
                // } else {
                //     errorMessage.classList.add('none');
                // }
            } else{
                currentStep++;
                updateForm();
            }
        } else if (event.target.closest('.form-prev')) {
            event.preventDefault(); // Предотвращает обновление формы
            if (currentStep > 0) {
                currentStep--;
                updateForm();
            }
        } else if (event.target.closest('.form-close')) {
            event.preventDefault();
            flutter.classList.add('none')
            document.body.style.overflow = 'visible'
            currentStep = 0
            updateForm();
        }
    });

    function formatDate(date) {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = String(d.getFullYear()).slice(-2);
        return `${day}.${month}.${year}`;
    }

    // Инициализация формы
    updateForm();
}

function formOrderCall() {
    const ordeCallBlock = document.querySelector('.form-order-call-block')
    const form = document.querySelector('.form')
    document.querySelector('.form-order-call-select-container-button').addEventListener('click', (e) =>{
        e.preventDefault()
        if (ordeCallBlock.classList.contains('none')) {
            ordeCallBlock.classList.remove('none');
        } else {
            ordeCallBlock.classList.add('none');
        }
    })

    ordeCallBlock.querySelectorAll('.form-order-call-list li').forEach(function(item) {
        const titleText = document.querySelector(".form-order-call-checkbox-title")
        item.addEventListener('click', function() {
            titleText.innerText = this.getAttribute('data-value');
            ordeCallBlock.classList.add('none');
        });
    });
}

titleGroup.addEventListener("click", function(){
    document.querySelectorAll('.transfer-navigation-title').forEach(item => item.classList.remove('active'))
    titleGroup.classList.add('active')
    transferGroup.classList.remove('none')
    transferIndividual.classList.add('none')
})

titleIndividual.addEventListener("click", function(){
    document.querySelectorAll('.transfer-navigation-title').forEach(item => item.classList.remove('active'))
    titleIndividual.classList.add('active')
    transferIndividual.classList.remove('none')
    transferGroup.classList.add('none')
})

function faqAnswer() {
    const faqItems = document.querySelectorAll('.faq-content-item');

    faqItems.forEach(item => {
        const plusBtn = item.querySelector('.faq-content-item-image-plus');
        const answer = item.querySelector('.faq-content-item-info-answer');

        plusBtn.addEventListener('click', () => {
            if (plusBtn.classList.contains('active')) {
                answer.classList.remove('active');
                plusBtn.classList.remove('active');
            } else {
                answer.classList.add('active');
                plusBtn.classList.add('active');
            }
        });
    });
}

function scroll () {
    const roomsButton = document.querySelectorAll('.rooms-prices-button');
    const contactsButton = document.querySelectorAll('.contacts-button');
    const hotelNumberElement = document.getElementById('hotel-number');
    const contactsElement = document.getElementById('contacts');

    roomsButton.forEach(item => {
        item.addEventListener('click', function () {
            hotelNumberElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    contactsButton.forEach(item => {
        item.addEventListener('click', function () {
            contactsElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

faqAnswer()
scroll ()
formData ()
formOrderCall()