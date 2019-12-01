$("#startBtn").click(function() {
  tank.fill();
});

document.addEventListener('tankFullEvent', function(e) {
  stop(tank.fillingTaskId);
  tank.evacuate();
  // now the liquid can be evacuated
}, false);

function sendEvent(eventName){
  var event = document.createEvent('Event');
  event.initEvent(eventName, true, true);
  document.dispatchEvent(event);
}

