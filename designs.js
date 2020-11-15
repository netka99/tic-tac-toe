document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll(".grid div");
    const result = document.querySelector("#messageArea");
    const displayCurrentPlayer = document.querySelector("#current-player");
    let currentPlayer = "X";

    for (let i = 0; i < squares.length; i++) 

    (function(index) {
        squares[i].onclick = function() {
            if(currentPlayer === "X") {
                squares[index].classList.add("taken");
                squares[index].classList.add("playerX");
                currentPlayer = "O";
                displayCurrentPlayer.innerHTML = currentPlayer;
            } else if (currentPlayer === "O") {
                squares[index].classList.add("playerO");
                squares[index].classList.add("taken");
                currentPlayer = "X";
                displayCurrentPlayer.innerHTML = currentPlayer;
            }
        }
    })(i);
    
    function checkBoard() {
        const winningArays = [
            [0,1,2], [0,3,6], [3,4,5], [6,7,8],
            [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ];

        for (let y = 0; y < winningArays.length; y++) {
            const square1 = squares[winningArays[y][0]];
            const square2 = squares[winningArays[y][1]];
            const square3 = squares[winningArays[y][2]];

            if(square1.classList.contains("playerX") && 
               square2.classList.contains("playerX") &&
               square3.classList.contains("playerX")) {
                   result.innerHTML = "Player X wins!";
               } else if (square1.classList.contains("playerO") && 
               square2.classList.contains("playerO") &&
               square3.classList.contains("playerO") ) {
                   result.innerHTML = "Player O wins!"
               }
        }
    }

    squares.forEach(square => square.addEventListener("click", checkBoard));
})

