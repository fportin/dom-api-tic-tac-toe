window.addEventListener('DOMContentLoaded', () => {

    const board = document.getElementById('tic-tac-toe-board');
    const squares = board.children;
    let counter = 0;
    let checkArray = ['', '', '',
                       '', '', '',
                       '', '', ''];

    board.addEventListener('click', event => {
        let target = event.target;

        let squareNum = Number.parseInt(target.id[target.id.length - 1]);
        // console.log(squareNum);
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
        };
        // console.log(checkArray)
        // console.log(checkArray)

        let announce = document.getElementById('game-status');
        for (let i = 0; i < 9; i += 3) {
            if (checkArray[i] !== '' &&
            checkArray[i] === checkArray[i + 1] &&
            checkArray[i] === checkArray[i + 2]) {
                announce.innerText = `Winner: ${checkArray[i].toUpperCase()}`;
            }
        }

        for (let j = 0; j < 3; j++){
            if (checkArray[j] !== '' &&
            checkArray[j] === checkArray[j + 3] &&
            checkArray[j] === checkArray[j + 6]) {
                announce.innerText = `Winner: ${checkArray[j].toUpperCase()}`;
            }

        }

        if (checkArray[0] !== '' &&
        checkArray[0] === checkArray[4] &&
        checkArray[0] === checkArray[8]) {
            announce.innerText = `Winner: ${checkArray[0].toUpperCase()}`;
        }

        if (checkArray[2] !== '' &&
        checkArray[2] === checkArray[4] &&
        checkArray[2] === checkArray[6]) {
            announce.innerText = `Winner: ${checkArray[2].toUpperCase()}`;
        }

        if (!checkArray.includes('')) {
            announce.innerText = `Winner: NONE`
        }
    });



})
