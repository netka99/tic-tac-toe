document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll(".grid div");
    const result = document.querySelector("#messageArea");
    const displayCurrentPlayer = document.querySelector("#current-player");
    const displayWinnerPlayer = document.querySelector("#current-player1");
    let modal = document.getElementById("myModal");
    let modal1 = document.getElementById("myModal1");
    const buttonStartAgain = document.querySelector(".buttonAgain");
    const buttonPlayer1 = document.querySelector(".button1");
    const buttonPlayer2 = document.querySelector(".button2");
    let currentPlayer = "X";
    let timerEntryWindow;



    function addImages() {
        for (let i = 0; i < squares.length; i++) {
            squares[i].onclick = function () {
                if (currentPlayer === "X") {
                    squares[i].classList.add("playerX");
                    currentPlayer = "O";
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else if (currentPlayer === "O") {
                    squares[i].classList.add("playerO");
                    currentPlayer = "X";
                    displayCurrentPlayer.innerHTML = currentPlayer;
                }
            }
        }
    }

    function playWithComputer() {
        let emptySquares = document.querySelectorAll(".empty");
        for (let i = 0; i < emptySquares.length; i++) {

            if (currentPlayer === "X") {
                emptySquares[i].onclick = function () {
                    emptySquares[i].classList.remove("empty");
                    emptySquares[i].classList.add("playerX");
                    currentPlayer = "O";
                    displayCurrentPlayer.innerHTML = currentPlayer;
                }
            } else if (currentPlayer === "O") {
                let countEmptySquares = emptySquares.length;
                let randomPosition = emptySquares[Math.floor(Math.random() * (9 - countEmptySquares))];
                randomPosition.classList.remove("empty");
                randomPosition.classList.add("playerO");
                currentPlayer = "X";
                displayCurrentPlayer.innerHTML = currentPlayer;

            }
        }
    };

    function playWithComp() {
        timerId = null
        timerId = setInterval(playWithComputer, 2500)
    };


    function checkBoard() {
        const winningArays = [
            [0, 1, 2], [0, 3, 6], [3, 4, 5], [6, 7, 8],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ];

        for (let y = 0; y < winningArays.length; y++) {
            const square1 = squares[winningArays[y][0]];
            const square2 = squares[winningArays[y][1]];
            const square3 = squares[winningArays[y][2]];

            if (square1.classList.contains("playerX") &&
                square2.classList.contains("playerX") &&
                square3.classList.contains("playerX")) {
                modal.style.display = "block";
                displayWinnerPlayer.innerHTML = "X";
                clearInterval(timerId1);
                clearInterval(timerId);

            } else if (square1.classList.contains("playerO") &&
                square2.classList.contains("playerO") &&
                square3.classList.contains("playerO")) {
                modal.style.display = "block";
                displayWinnerPlayer.innerHTML = "O";
                clearInterval(timerId1);
                clearInterval(timerId);
                
            }
        }
    }

    function checkWinning() {
        for (let i = 0; i < squares.length; i++) {
            checkBoard();
            console.log("hello");
        }
    };

    function check() {
        timerId1 = null
        timerId1 = setInterval(checkWinning, 1000)
    };



    function twoPlayers() {
      modal1.classList.add("animation");
      timerEntryWindow = setInterval(function() {
         modal1.style.display = "none"; 
      },400);
        addImages();
        check();
        
    };

    function withComputer() {
        modal1.classList.add("animation");
        timerEntryWindow = setInterval(function() {
           modal1.style.display = "none"; 
        },400); 
        playWithComputer();
        playWithComp();
        check();
    
    };



    function restartGame() {
        modal.style.display = "none";
        clearInterval(timerEntryWindow);
        modal1.style.display = "block";
        squares.forEach(square => square.classList.remove("playerX", "playerO"));
        squares.forEach(square => square.classList.add("empty"));
        modal1.classList.remove("animation");
        currentPlayer = "X";
        displayCurrentPlayer.innerHTML = currentPlayer;
       check();

    };


    buttonStartAgain.addEventListener("click", restartGame);
    buttonPlayer1.addEventListener("click", twoPlayers);
    buttonPlayer2.addEventListener("click", withComputer);

    //   squares.forEach(square => square.addEventListener("click", checkBoard));
})

