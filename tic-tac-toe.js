window.addEventListener('DOMContentLoaded', () => {

    const board = document.getElementById('tic-tac-toe-board');
    const squares = board.children;

    board.addEventListener('click', event => {
        console.log(event.target);
        if (event.target.innerText === '') {
            event.target.innerHTML = ''
        }
    });



})
