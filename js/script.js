const element = document.querySelector('.select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [48.87219657376512, 2.354223999999991],
        zoom: 17
    });

    var myPlacemark = new ymaps.Placemark([48.87219657376512, 2.354223999999991], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/Subtract.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
}

let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.form', {
    rules: {
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },
        name: {
            required: true
        },
    },
    messages: {
        email: {
            required: 'Вы не ввели e-mail',
        },
        tel: {
            required: 'Вы не ввели телефон',
        },
        name: {
            required: 'Вы не ввели имя',
        }
    },
    colorWrong: '#FF5C00',
});
