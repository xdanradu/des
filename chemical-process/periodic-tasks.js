function stop(taskId){
  clearInterval(taskId);
  console.log("Task " +taskId + " stopped");
};

function start(periodicFunction, refreshInterval){
  return setInterval(periodicFunction, refreshInterval);
}