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
        console.log(checkArray)
        
        let announce = document.getElementById('game-status');
        for (let i1 = 0; i1 < checkArray.length; i1 += 3) {
            if (checkArray[i1] === '') {
                return;
            }
    
    
            if (checkArray[i1] === checkArray[i1 + 1] && checkArray[i1 + 1] === checkArray[i1 + 2]) {
    
                announce.innerText = `Winner: ${checkArray[i1].toUpperCase()}`;
            }
    
        
        };
    
        // Second Loop breaks the code. 
        for (let i2 = 0; i2 < 3; i2++) {
            if (checkArray[i2] === checkArray[i2 + 3] && checkArray[i2 + 3] === checkArray[i2 + 6]) {
    
                // let announce = document.getElementById('game-status');
                announce.innerText = `Winner: ${checkArray[i2].toUpperCase()}`;
                console.log(i2)
            }
        }
        
        
    });
    
    

})
