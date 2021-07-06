let sequenceOfColor = [];

class Viewer {

  async sequence(level) {
    const buttons = ["green", "red", "yellow", "blue"];
    let randomNumber;
    for (let i = 0; i < level; i++) {
      await sleep(750);
      randomNumber = Math.floor(Math.random() * 4);
      sequenceOfColor[i] = buttons[randomNumber];
      $("." + sequenceOfColor[i]).fadeIn(250).fadeOut(250).fadeIn(250);
    }
  }

  pressedButton(color) {
    let selectedElement = $("#" + color);
    selectedElement.addClass("pressed");
    setTimeout(() => selectedElement.removeClass("pressed"), 400);
  }

  compare(playerClicked) {
    for (let i = 0; i < playerClicked.length; i++) {
      if (!(playerClicked[i] === sequenceOfColor[i])) {
        return false;
      }
    }
    return true;
  }

  gameOver() {
    let body = $("body");
    body.css("background-color", "red");
    setTimeout( () => body.css("background-color", "#404B69"), 300);
  }
}

function sleep (milliseconds) {
  return new Promise( resolve => setTimeout(resolve, milliseconds));
}



