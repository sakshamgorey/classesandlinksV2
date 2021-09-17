// true
window.onload = function() {
    // var file = document.getElementById("thefile");
    // var audio = document.getElementById("audio");
  
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(function(stream) {
        var context = new AudioContext();
        var gainNode = context.createGain();
  
        var src = context.createMediaStreamSource(stream);
        src.connect(gainNode);
        gainNode.connect(context.destination);
  
        gainNode.gain.setTargetAtTime(0, context.currentTime, 0);
  
        var analyser = context.createAnalyser();
  
        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");
  
        src.connect(analyser);
        gainNode.connect(analyser);
  
        // var WIDTH = canvas.width;
        // var HEIGHT = canvas.height;
  
        // if (WIDTH <= 480) analyser.fftSize = 64;
        // if (WIDTH > 480 && WIDTH < 768) analyser.fftSize = 128;
        // if (WIDTH >= 768) analyser.fftSize = 256;
  
        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);
  
        // var dataArray = new Uint8Array(bufferLength);
  
        var dataArray = new Float32Array(bufferLength);
  
        // dataArray = Array.prototype.filter.call(dataArray, data => data !== 0)
        // console.log(dataArray)
  
        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;
  
        function draw() {
          drawVisual = requestAnimationFrame(draw);
  
          analyser.getFloatTimeDomainData(dataArray);
  
          // ctx.fillStyle = "rgb(200, 200, 200)";
          ctx.fillStyle = 'rgb(26, 26, 25)'
          ctx.fillRect(0, 0, WIDTH, HEIGHT);
  
          ctx.lineWidth = 10;
          ctx.strokeStyle = "rgb(238, 153, 9)";
       
          ctx.beginPath();
  
          var sliceWidth = WIDTH * 1.9 / bufferLength;
          var x = 0;
  
          for (var i = 0; i < bufferLength; i++) {
            let v = dataArray[i] * 800;
            var y = HEIGHT / 2 + v;
  
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
  
            x += sliceWidth;
          }
          // }
          ctx.lineTo(canvas.width, canvas.height / 2);
          ctx.stroke();
        }
  
        draw();
      })
      .catch(function(err) {
        console.log("error:");
        console.log(err);
      });
  };
  