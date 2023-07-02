
const blocks = document.querySelectorAll('.block');

blocks.forEach(function(block) {
    block.addEventListener('click', function(event) {
        if (document.querySelector('.green')) {
            document.querySelector('.green').classList.remove('green');
        }

        event.target.classList.add('green');
    });
});
