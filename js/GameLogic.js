
let level = 0;
let playerClicked;
let clicked = false;
const viewer = new Viewer();
const levelTitle = $("#level-title");

$(document).on("keydown", function () {
  if(!clicked) {
    level++;
    clicked = true;
    levelTitle.text("Level " + level);
    viewer.sequence(level);
    playerClicked = [];

  }
});

$(".btn").on("click", function () {
  playerClicked.push(this.id);
  viewer.pressedButton(this.id);
  let alive = true;

  if (playerClicked.length === level) {
    alive = viewer.compare(playerClicked);
    level++;
    levelTitle.text("Level " + level);
    playerClicked = [];
    viewer.sequence(level);
  }

  if (!alive) {
    viewer.gameOver();
    clicked = false;
    level = 0;
    levelTitle.text("Game Over, press A key to restart");
  }
});


