var tank={
  maxVolume: 200,
  currentLevel: 0,
  fillingTaskId: 0,
  increaseLevel: function(){
    this.currentLevel++;
    $("#tank").height(this.currentLevel + "px");
  },
  open: function open(elementId){
    $("#"+elementId).removeClass("paintRed").addClass("paintGreen");
  },
  close: function close(elementId){
    $("#"+elementId).removeClass("paintGreen").addClass("paintRed");
  },
  fill: function(){
    disable("startBtn");
    this.open("in1");
    this.fillingTaskId = start(fillAnimation, refreshInterval);
  },
  evacuate: function(){
    this.close("in1");
  }
}

function fillAnimation(){
  if (tank.currentLevel < tank.maxVolume) { 
    tank.increaseLevel();
    displayLevelFor('FILLING');   
  }

  if (tank.currentLevel == tank.maxVolume) {     
    sendEvent('tankFullEvent');
  }
}