

const container = document.querySelector('.container');

container.addEventListener('click', function(event) {
     const clickElem = event.target;

    if (clickElem.classList.contains('block')) {
        if (document.querySelector('.green')) {
            document.querySelector('.green').classList.remove('green');
        }

        clickElem.classList.add('green');
    }
});
