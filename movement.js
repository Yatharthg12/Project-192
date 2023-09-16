AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "W" ||
        e.key === "ArrowRight" ||
        e.key === "D" ||
        e.key === "ArrowLeft" ||
        e.key === "A" ||
        e.key === "ArrowDown" ||
        e.key === "S"
      ) {
        var entity = document.querySelector("#sound2");
        entity.components.sound.playSound();
      }
    });
  },
});