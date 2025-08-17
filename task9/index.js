document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("table");
    const userSymbol = "./tic.png";
    const systemSymbol = "./toe.png";
    let board = Array(9).fill(null);
    let gameOver = false;

    function createBoard() {
        table.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.dataset.index = i;
            box.addEventListener("click", handleClick);
            table.appendChild(box);
        }
    }

    function handleClick(event) {
        if (gameOver) return;
        let index = event.target.dataset.index;
        if (!board[index]) {
            board[index] = "user";
            event.target.innerHTML = `<img src='${userSymbol}' alt='User'>`;
            if (checkWinner("user")) {
                highlightWinner("user");
                setTimeout(() => {
                    alert("You win!");
                    location.reload();
                }, 100);
                gameOver = true;
                return;
            }
            systemMove();
        }
    }

    function systemMove() {
        let emptyCells = board.map((val, idx) => val === null ? idx : null).filter(v => v !== null);
        if (emptyCells.length === 0) {
            setTimeout(() => {
                alert("It's a draw!");
                location.reload();
            }, 100);
            gameOver = true;
            return;
        }
        let index = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[index] = "system";
        document.querySelector(`[data-index='${index}']`).innerHTML = `<img src='${systemSymbol}' alt='System'>`;
        if (checkWinner("system")) {
            highlightWinner("system");
            setTimeout(() => {
                alert("System wins!");
                location.reload();
            }, 100);
            gameOver = true;
        }
    }

    function checkWinner(player) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombos.some(combination => 
            combination.every(index => board[index] === player)
        );
    }

    function highlightWinner(player) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        winningCombos.forEach(combination => {
            if (combination.every(index => board[index] === player)) {
                combination.forEach(index => {
                    document.querySelector(`[data-index='${index}']`).style.backgroundColor = "grey";
                });
            }
        });
    }

    createBoard();
});