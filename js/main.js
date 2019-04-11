// Гладкая прокрутка страницы по клику на ссылку
$('.smooth-link').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});

// Отлов нажатия на кнопку меню

$('.menu-btn').on('click', function (event) {
    event.preventDefault();

    $('.nav-list').toggleClass('menu-hide');
    $('.menu-btn').toggleClass('btn-close');
});