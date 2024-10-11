let btns = document.querySelectorAll(".btn");
let h3 = document.querySelector("h3");
let reset = document.querySelector("#reset");

let isGameWon = false; 

let xTurn = true;

let count = 0;

let winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


for(let btn of btns) {
    btn.addEventListener("click", () => {
        if (xTurn) {
            btn.innerText = "X";
            btn.disabled = true;
            btn.style.color = "#86D293";
            xTurn = !xTurn;

        } else {
            btn.innerText = "O";
            btn.disabled = true;
            btn.style.color = "#FD8B51";
            xTurn = !xTurn;
        }

        count++;

        check();
        
    })
}


function check() {

    for(let pattern of winnerPattern) {
        let box1 = btns[pattern[0]].innerText;
        let box2 = btns[pattern[1]].innerText;
        let box3 = btns[pattern[2]].innerText;

        if(box1 != "" && box2!= "" && box3 != "") {
            if(box1 == box2 && box1 == box3) {
                isGameWon = winner(box1);
            }
        }
    }

    if(count == 9 && !isGameWon) {
        draw();
    }
}


function winner(player) {

    h3.innerText = `Congrats ${player} wins...!!`;

    reset.innerText = "New Game";

    for(let btn of btns) {
        btn.disabled = true;
    }

    return true;
}


function draw() {
    h3.innerText = "Game draw...!!";
    reset.innerText = "New Game";
}


reset.addEventListener("click", () => {

    reset.innerText = "Reset Game";
    xTurn = true;
    h3.innerText = "";
    count = 0;
    isGameWon = false;

    for(let btn of btns) {
        btn.innerText = "";
        btn.disabled = false;
    }
})