let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newGamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let drawMsgContainer = document.querySelector('.draw-msgContainer');
let drawMsg = document.querySelector('#draw-msg');
let newbtndraw = document.querySelector('#new-btn-draw');

let isOTurn = true;
let isXTurn = false;
let count =0;
let winnerFound = false;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    // turn0 = true;
    count = 0;
    isOTurn = true;
    isXTurn = false;
    enableBoxes();
    msgContainer.classList.add('hide');
    drawMsgContainer.classList.add('hide');
    winnerFound = false;
    
}
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (isOTurn === true){
            box.innerText = "O";
            box.classList.add('o');
            count++;
            isOTurn = false;
            
        } else {
            box.innerText = "X";
            box.classList.add('x');
            count++;
            isOTurn = true;
            isXTurn = false;
            
        } 
        box.disabled = true;
        checkWin();
    })
});
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x", "o"); 
    
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove('hide');



};

const checkWin = () => {
    for (let pattern of winpatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            winnerFound = true;
            disableBoxes();
            break;
        } 
          

    }};
    if (count === 9 && winnerFound === false){
        drawMsg.innerText = "It's a draw!";
        drawMsgContainer.classList.remove('hide');
    };

};

reset.addEventListener('click', resetGame);
newGamebtn.addEventListener('click', resetGame);
newbtndraw.addEventListener('click', resetGame);