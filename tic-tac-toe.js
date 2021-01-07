window.addEventListener('DOMContentLoaded', () => {

    const board = document.getElementById('tic-tac-toe-board');
    const squares = board.children;
    let counter = 0;

    board.addEventListener('click', event => {
        console.log(event.target);
        event.target.innerHTML = '<img src = "ticTacImg/player-x.svg"></img>';
        event.target.innerHTML = '<img src = "ticTacImg/player-o.svg"></img>'
        // if (event.target.innerText === '') {
        //     event.target.innerHTML = ''
        // }
    });



})
