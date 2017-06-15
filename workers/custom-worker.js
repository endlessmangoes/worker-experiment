var intervalID = null;
var currentStep;
// 30 fps
var rate;
var workerID = 0;

onmessage = function(e) {
  // msg: 'START', workerID: myWorkerID, rate: FPS[getRandomInt(0,2)] }
  console.log('Message received --- ' + e.data.msg);
  console.log('Rate --- ' + e.data.rate);
  console.log('workerID --- ' + e.data.workerID);
  workerID = e.data.workerID;

  startSteps(e.data.rate, workerID);
}

function startSteps(rate, workerID) {
  rate = rate;

  var thisWorkerID = workerID;

  console.log('Starting steps at ' + rate + ' ms');

  currentStep = 0;
  intervalID = setInterval(function() {
      currentStep++;

      postMessage({'step': currentStep, 'rate': rate, 'workerID': thisWorkerID});
  }, rate);
}
