const blocks = document.querySelectorAll('.block');

blocks.forEach((block) => {
    block.addEventListener('click', function () {
        // Highlights header text
        block
            .querySelector('.block__header')
            .classList.toggle('block__header--active');

        // Rotate arrow img
        block
            .querySelector('.block__arrow-img')
            .classList.toggle('block__arrow-img--active');

        // Text content visibility toggle
        block
            .querySelector('.block__text')
            .classList.toggle('block__text--show');
    });
});
