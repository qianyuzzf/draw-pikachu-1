(function () {
  const $ebbfc3ad06cac250adbefc121a0c2672$export$default = `
* {
  margin: 0;
  padding: 0;
}
::before,
::after {
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #ffe600;
}

.skin {
  position: relative;
}

.nose {
  position: relative;
  z-index: 10;
}
@keyframes sway {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0);
  }
}

.nose .trigon:hover {
  animation: sway 300ms infinite linear;
}

.nose .trigon {
  border: 10px solid #000000;
  border-color: #000000 transparent transparent transparent;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 200px;
  margin-left: -10px;
}

.nose .trigon .circularDiv {
  border: none;
  width: 20px;
  height: 5px;
  position: absolute;
  left: -10px;
  top: -15px;
  overflow: hidden;
}

.nose .trigon .circularDiv .circular {
  border: none;
  background-color: #000000;
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 10px / 5px;
}

.eye {
  border: 3px solid #000000;
  background-color: #2e2e2e;
  width: 60px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -30px;
  border-radius: 50%;
  z-index: 9;
}

.eye::before {
  content: ''; /*如果没有content就会看不见*/
  display: block;
  border: 3px solid #000000;
  background-color: #ffffff;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  position: absolute;
  left: 5px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.mouth {
  position: absolute;
  width: 120px;
  height: 180px;
  left: 50%;
  top: 230px;
  margin-left: -60px;
}

.mouth::before {
  content: '';
  display: block;
  border: none;
  background-color: #ffe600;
  width: 100px;
  height: 40px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: -32.4px;
  z-index: 8;
}

.mouth .upLeftMouth {
  border: 2px solid black;
  border-color: transparent transparent black black;
  position: absolute;
  width: 100px;
  height: 40px;
  border-radius: 128px / 50px;
  transform: rotate(-25deg);
  left: -15px;
  top: -20px;
  background-color: #ffe600;
  z-index: 7;
}

.mouth .upLeftMouth::before {
  content: '';
  display: block;
  background-color: #ffe600;
  position: absolute;
  width: 52px;
  height: 22px;
  left: -3px;
  top: -3px;
}

.mouth .upRightMouth {
  border: 2px solid black;
  border-color: transparent transparent black black;
  position: absolute;
  width: 100px;
  height: 40px;
  border-radius: 128px / 50px;
  transform: rotate(25deg) rotateY(180deg);
  right: -15px;
  top: -20px;
  background-color: #ffe600;
  z-index: 7;
}

.mouth .upRightMouth::before {
  content: '';
  display: block;
  background-color: #ffe600;
  position: absolute;
  width: 52px;
  height: 22px;
  left: -3px;
  top: -3px;
}

.mouth .downMouth {
  width: 120px;
  height: 152px;
  position: absolute;
  bottom: 20px;
  overflow: hidden;
}

.mouth .innerMouth {
  border: 3px solid black;
  background-color: #9b000a;
  width: 116px;
  height: 1000px;
  position: absolute;
  left: 50%;
  margin-left: -58px;
  bottom: 0;
  border-radius: 58px / 170px;
  overflow: hidden;
}

.mouth .innerMouth::before {
  content: '';
  display: block;
  border: none;
  background-color: #ff485f;
  width: 200px;
  height: 500px;
  position: absolute;
  bottom: -380px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px / 120px;
}

.face {
  border: 3px solid #000000;
  width: 86px;
  height: 86px;
  position: absolute;
  left: 50%;
  top: 270px;
  margin-left: -43px;
  border-radius: 50%;
  background-color: #ff0000;
}

.face.left {
  transform: translateX(-120px);
}

.face.right {
  transform: translateX(120px);
}
`;
  const $24de782edf676454eff1778c087f1c3f$var$player = {
    interId: undefined,
    time: 50,
    n: 0,
    events: {
      '#btnPause': 'pause',
      '#btnPlay': 'play',
      '#btnSlow': 'slow',
      '#btnOrdinary': 'ordinary',
      '#btnSpeed': 'speed'
    },
    init: () => {
      document.querySelector('#style').innerHTML = $ebbfc3ad06cac250adbefc121a0c2672$export$default.substring(0, $24de782edf676454eff1778c087f1c3f$var$player.n);
      document.querySelector('#html2').innerText = $ebbfc3ad06cac250adbefc121a0c2672$export$default.substring(0, $24de782edf676454eff1778c087f1c3f$var$player.n);
      $24de782edf676454eff1778c087f1c3f$var$player.bindEvents();
      $24de782edf676454eff1778c087f1c3f$var$player.play();
    },
    bindEvents: () => {
      for (let key in $24de782edf676454eff1778c087f1c3f$var$player.events) {
        if ($24de782edf676454eff1778c087f1c3f$var$player.events.hasOwnProperty(key)) {
          document.querySelector(key).onclick = $24de782edf676454eff1778c087f1c3f$var$player[$24de782edf676454eff1778c087f1c3f$var$player.events[key]];
        }
      }
    },
    run: () => {
      $24de782edf676454eff1778c087f1c3f$var$player.n += 1;
      document.querySelector('#style').innerHTML = $ebbfc3ad06cac250adbefc121a0c2672$export$default.substring(0, $24de782edf676454eff1778c087f1c3f$var$player.n);
      document.querySelector('#html2').innerText = $ebbfc3ad06cac250adbefc121a0c2672$export$default.substring(0, $24de782edf676454eff1778c087f1c3f$var$player.n);
      document.querySelector('#html2').scrollTop = document.querySelector('#html2').scrollHeight;
      if ($24de782edf676454eff1778c087f1c3f$var$player.n >= $ebbfc3ad06cac250adbefc121a0c2672$export$default.length) {
        clearInterval($24de782edf676454eff1778c087f1c3f$var$player.interId);
      }
    },
    play: () => {
      $24de782edf676454eff1778c087f1c3f$var$player.pause();
      $24de782edf676454eff1778c087f1c3f$var$player.interId = setInterval($24de782edf676454eff1778c087f1c3f$var$player.run, $24de782edf676454eff1778c087f1c3f$var$player.time);
    },
    pause: () => {
      clearInterval($24de782edf676454eff1778c087f1c3f$var$player.interId);
    },
    slow: () => {
      $24de782edf676454eff1778c087f1c3f$var$player.time = 200;
      $24de782edf676454eff1778c087f1c3f$var$player.play();
    },
    ordinary: () => {
      $24de782edf676454eff1778c087f1c3f$var$player.time = 50;
      $24de782edf676454eff1778c087f1c3f$var$player.play();
    },
    speed: () => {
      $24de782edf676454eff1778c087f1c3f$var$player.time = 0;
      $24de782edf676454eff1778c087f1c3f$var$player.play();
    }
  };
  $24de782edf676454eff1778c087f1c3f$var$player.init();
})();

//# sourceMappingURL=movingcode.13b1ccf8.js.map
