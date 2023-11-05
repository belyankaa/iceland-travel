new WOW({
    animateClass: 'animate__animated'
}).init();

//Слайд хедера
let headerElem = $('.list-item__link')
headerElem.on('click', function () {
    $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500
    );
});


//Кнопка забронировать
$('.start__btn').on('click', function () {
    $('html').animate({
            scrollTop: $('#form').offset().top
        }, 800
    );
});


//Скрол к видео
$('.start__trip-video').on('click', function () {
    $('html').animate({
            scrollTop: $('#look').offset().top
        }, 500
    );
});


//Показ видео
let lookPlay = $('.look__play')
lookPlay.on('click', function () {
    $('.look__image').hide()
    lookPlay.hide()
    $('.YouTube').show()
});


//Слайдер с программой
let tourSlide1 = $('.prog_cont')
let tourSlide2 = $('.tour-program__content_left__image')
let tourNext = $('.button_next')
let tourPrev = $('.button_prev')

tourSlide1.hide()
tourSlide2.hide()
tourSlide1[0].style.display = 'block'
tourSlide2[0].style.display = 'block'
let num = 0
let days = $('.tour-program__content_right__days__number')

tourPrev.on('click', function () {
    let daysMem = parseInt(days.text())
    if (daysMem === 2) {
        tourPrev.removeClass('gaji')
        $('.tour-program__content_left__block').css('height', '448px')
    } else if (daysMem === 7) {
        tourNext.addClass('gaji')
    }

    if (daysMem > 1) {
        days.text(daysMem - parseInt(1))
        num -= 1
        tourSlide1.hide()
        tourSlide2.hide()
        tourSlide1[num].style.display = 'block'
        tourSlide2[num].style.display = 'block'
    } else {
        return false
    }
});

tourNext.on('click', function () {
    let daysMem = parseInt(days.text())
    if (daysMem === 1) {
        $('.tour-program__content_left__block').css('height', '350px')
        tourPrev.addClass('gaji')
    } else if (daysMem === 6) {
        tourNext.removeClass('gaji')
    }
    if (daysMem < 7) {
        days.text(daysMem + parseInt(1))
        num += 1
        tourSlide1.hide()
        tourSlide2.hide()
        tourSlide1[num].style.display = 'block'
        tourSlide2[num].style.display = 'block'
    } else {
        return false
    }
});


//Слайдер с отзывами
let tourFeedBack1 = $('.feedbackCon')
let tourFeedBack2 = $('.feedback__image')
let backCount = 1

tourFeedBack1.hide()
tourFeedBack1[0].style.display = 'block'
tourFeedBack2.hide()
tourFeedBack2[0].style.display = 'block'

let feedPrev = $('.button_feedback_prev')
let feedNext = $('.button_feedback_next')
feedPrev.removeClass('gagi')

feedPrev.on('click', function () {
    if (backCount > 1) {
        tourFeedBack1.hide()
        backCount -= 1
        tourFeedBack1[backCount - 1].style.display = 'block'
        tourFeedBack2.hide()
        tourFeedBack2[backCount - 1].style.display = 'block'
    } else {
        return false
    }

    if (backCount === 1) {
        feedPrev.css('border', '1px solid #bcbcbc').removeClass('gagi')
        $('.feedback_prev_svg').addClass('gogi')
    } else if (backCount === 2) {
        $('.feedback_next_svg').removeClass('gogi')
        feedNext.css('border', '1px solid #2c2c2c').addClass('gagi')
    }

});

feedNext.on('click', function () {
    if (backCount < 3) {
        tourFeedBack1.hide()
        backCount += 1
        tourFeedBack1[backCount - 1].style.display = 'block'
        tourFeedBack2.hide()
        tourFeedBack2[backCount - 1].style.display = 'block'
    } else {
        return false
    }

    if (backCount === 2) {
        feedPrev.css('border', '1px solid #2c2c2c').addClass('gagi')
        $('.feedback_prev_svg').removeClass('gogi')
    } else if (backCount === 3) {
        $('.feedback_next_svg').addClass('gogi')
        feedNext.css('border', '1px solid #bcbcbc').removeClass('gagi')
    }
});


//Слайдер фото
let gallPrev = $('.photo__gallery__actions__prev')
let gallNext = $('.photo__gallery__actions__next')
let points = $('.photo__gallery__actions__points')

let gallSets = $('.photo-gallery__photos')
gallSets.hide()
gallSets[0].style.display = 'grid'
gallPrev.removeClass('arrow')

let gallCount = 1

gallPrev.on('click', function () {
    if (gallCount > 1) {
        gallCount -= 1
        points[gallCount - 1].classList.add('act_point')
        points[gallCount].classList.remove('act_point')
        gallSets.hide()
        gallSets[gallCount - 1].style.display = 'grid'
    } else {
        return false
    }

    if (gallCount === 1) {
        gallPrev.removeClass('arrow')
    } else if (gallCount === 3) {
        gallNext.addClass('arrow')
    }
})
;

gallNext.on('click', function () {
    if (gallCount < 4) {
        gallCount += 1
        points[gallCount - 1].classList.add('act_point')
        points[gallCount - 2].classList.remove('act_point')
        gallSets.hide()
        gallSets[gallCount - 1].style.display = 'grid'
    } else {
        return false
    }

    if (gallCount === 2) {
        gallPrev.addClass('arrow')
    } else if (gallCount === 4) {
        gallNext.removeClass('arrow')
    }
});


//Валидация формы
let obj
let thanks = $('.thanks')
let loader = $('.loader')
$("#phone").mask("+7 (999) 999 99-99");

$('#submit').click(function () {
    let people = $('.radio_button')
    let peopleChoice = 0
    let peopleChoiceErrors = 0
    let name = $('#name')
    let phone = $('#phone')
    let hasError = false

    $('.inp_error').hide()
    name.css('border', '1px solid white')
    phone.css('border', '1px solid white')
    people.next().css('border', '1px solid white')

    for (let i = 0; i < people.length; i++) {
        if (people[i].checked) {
            peopleChoice = i
            break
        } else {
            peopleChoiceErrors += 1
        }
        if (peopleChoiceErrors < 7) {

        } else {
            people.parent().parent().next().show()
            people.next().css('border', '1px solid red')
            hasError = true
        }
    }
    if (!name.val()) {
        name.css('border', '1px solid red')
        name.next().show()
        hasError = true
    }

    if (!phone.val()) {
        phone.css('border', '1px solid red')
        phone.next().show()
        hasError = true
    }

    if (!hasError) {
        loader.css('display', 'flex')
        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: {name: name.val(), last_name: phone.val(), type: people[peopleChoice].value}
        })
            .done(function (msg) {
                loader.hide()
                console.log(msg)
                if (msg.success === 1) {
                    thanks.css('display', 'flex')
                } else {
                    alert('Ошибка, повторите заполнение формы')
                }
            });

    }
})


//После отправки формы
$('.thanks__close').on('click', () => {
    $('.thanks').hide()
})

$('.thanks__btn').on('click', () => {
    $('html').animate({
            scrollTop: $('.header').offset().top
        }, 500
    );
    $('.thanks').hide()
})


//Открытие фото
$('.gallery__photo').magnificPopup({
    type: 'image',
});


//Открытия / закрытие бургера (хедера)
let header = $('.header__menu')
$('.burger').on('click', () => {
    header.removeClass('header__menu_del')
    header.removeClass('header__menu_add')
    if (header.css('display') === 'block') {
        header.addClass('header__menu_del')
        setTimeout(() => {
            header.hide()
        }, 700)
    } else {
        header.addClass('header__menu_add')
        header.css('display', 'block')
    }
})