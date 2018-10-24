var refreshInterval = readRefreshIntervalFromTheUI();

setRefreshValueonTheUI(refreshInterval);

function setRefreshValueonTheUI(value){
  $("#refreshValue").text(value+" ms"); 
}

function readRefreshIntervalFromTheUI(){
  return $("#refreshRange").val(); 
}

$("#refreshRange").on("input change", function() { 
    setRefreshValueonTheUI(refreshInterval)
    refreshInterval = readRefreshIntervalFromTheUI();
});
