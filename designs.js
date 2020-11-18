document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll(".grid div");
    const result = document.querySelector("#messageArea");
    const displayCurrentPlayer = document.querySelector("#current-player");
    const displayWinnerPlayer = document.querySelector("#current-player1");
    let modal = document.getElementById("myModal");
    const buttonStartAgain = document.querySelector(".buttonAgain");

    let currentPlayer = "X";

    function addImages() {
        for (let i = 0; i < squares.length; i++) {
            squares[i].onclick = function() {
                if(currentPlayer === "X") {
                    squares[i].classList.add("playerX");
                    currentPlayer = "O";
                } else if (currentPlayer === "O") {
                    squares[i].classList.add("playerO");
                    currentPlayer = "X";
                }
        }
    }
}

function playWithComputer() {
    let emptySquares = document.querySelectorAll(".empty");
    for (let i = 0; i < emptySquares.length; i++) {
     
      if(currentPlayer === "X") {
          emptySquares[i].onclick = function() {
            emptySquares[i].classList.remove("empty");
            emptySquares[i].classList.add("playerX");
           currentPlayer = "O";
           displayCurrentPlayer.innerHTML = currentPlayer;
          }
       } else if (currentPlayer === "O"){
           let countEmptySquares = emptySquares.length;
            let randomPosition = emptySquares[Math.floor(Math.random() * (9- countEmptySquares))];
            randomPosition.classList.remove("empty");
            randomPosition.classList.add("playerO");
            currentPlayer = "X";
            displayCurrentPlayer.innerHTML = currentPlayer;
            
  }
}
}

playWithComputer();
function moveMole() {
    let timerId = null
    timerId = setInterval(playWithComputer, 2500)
  }
  
  moveMole()

  //  addImages();

    
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
                   modal.style.display = "block";
                   displayWinnerPlayer.innerHTML = "X";

               } else if (square1.classList.contains("playerO") && 
               square2.classList.contains("playerO") &&
               square3.classList.contains("playerO") ) {
                   modal.style.display = "block";
                   displayWinnerPlayer.innerHTML = "O";
               }
        }
    }

    function restartGame() {
        modal.style.display = "none";
        squares.forEach(square => square.classList.remove("playerX", "playerO"));
    }

    buttonStartAgain.addEventListener("click", restartGame);
    function checkWinning(){
        for (let i = 0; i < squares.length; i++) {
            checkBoard();
            console.log("hello");
        }
    }

   function check() {
        let timerId = null
        timerId = setInterval(checkWinning, 1000)
      } 
    checkWinning();
    check();
 //   squares.forEach(square => square.addEventListener("click", checkBoard));
})

