AFRAME.registerComponent("timing", {

    init: function () {
      var duration = 60;
      const timerEl = document.querySelector("#timer");
      this.startTimer(duration, timerEl);
    },
  
    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;
  
      var timer = setInterval(countDown, 1000);
      var countTankEl = document.querySelector("#countTank");
      console.log(countTankEl)
      function countDown() {
        if (duration >= 0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);
  
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
  
          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });
  
          duration -= 1;

          if(countTankEl === 0){
            timerEl.setAttribute("text", {
              value: 0+":"+0,
            });
            this.gameOver()
          }
        }}

        
        function gameOver(){ 
          
            duration = 0

            var txt = document.querySelector("#over")
            txt.setAttribute("visible", true)  

            var scene = document.querySelector("#scene");

            var weapon = document.querySelector("#weapon")
            weapon.setAttribute("static-body", {})

            var bullets = document.querySelector("#bullets")
            bullets.setAttribute("static-body")
            scene.removeChild(bullets)
            bullets.removeEventListener("keydown")
            
            var sound1 = document.querySelector("#shoot")
            sound1.remove()
            scene.removeChild(sound1)

            //Removing Enemies
            var enemy1 = document.querySelector("#enemy1")
            scene.removeChild(enemy1)

            var enemy2 = document.querySelector("#enemy2")
            scene.removeChild(enemy2)

            var enemy3 = document.querySelector("#enemy3")
            scene.removeChild(enemy3)

            var enemy4 = document.querySelector("#enemy4")
            scene.removeChild(enemy4)

            
                
    }

      }
    }
)