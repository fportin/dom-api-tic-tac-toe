window.addEventListener('DOMContentLoaded', () => {

    const board = document.getElementById('tic-tac-toe-board');
    const squares = board.children;
    let counter = 0;
    let checkArray = ['', '', '', '', '', '','', '', ''];

    board.addEventListener('click', event => {
        let target = event.target;

        let squareNum = Number.parseInt(target.id[target.id.length - 1]);
        console.log(event.target);
        // event.target.innerHTML = '<img src = "ticTacImg/player-x.svg"></img>';
        // event.target.innerHTML = '<img src = "ticTacImg/player-o.svg"></img>'

        // if (event.target.innerText === '') {
        //     event.target.innerHTML =
        // }
        if (counter % 2 === 0 && checkArray[squareNum] === '') {
            target.innerHTML = '<img src = "ticTacImg/player-x.svg"></img>';
            counter++
            checkArray[squareNum] = 'x';
        } else if (counter % 2 !== 0 && checkArray[squareNum] === '') {
            target.innerHTML = '<img src = "ticTacImg/player-o.svg"></img>'
            counter++
            checkArray[squareNum] = 'o'
        } else {
            return;
        }
        console.log(checkArray)
    });



})
