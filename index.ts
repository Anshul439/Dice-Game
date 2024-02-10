const randomNumber1: number = Math.floor((Math.random() * 6) + 1);
const randomDiceImage: string = `images/dice${randomNumber1}.png`;

(document.querySelectorAll("img")[0] as HTMLImageElement).setAttribute("src", randomDiceImage);

const randomNumber2: number = Math.floor((Math.random() * 6) + 1);
const randomDiceImage2: string = `images/dice${randomNumber2}.png`;

(document.querySelectorAll("img")[1] as HTMLImageElement).setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    (document.querySelector("h1") as HTMLHeadingElement).innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    (document.querySelector("h1") as HTMLHeadingElement).innerHTML = "Player 2 Wins";
}
else {
    (document.querySelector("h1") as HTMLHeadingElement).innerHTML = "Draw";
}
