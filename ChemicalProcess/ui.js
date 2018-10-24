function disable(elementId){
  $("#"+elementId).attr("disabled", "disabled");
}

function displayLevelFor(stateName){
  $("#txt").text("State: "+stateName+" Level: " + tank.currentLevel + " l");
}



