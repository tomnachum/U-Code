const returnTime = function (time) {
  alert("The current time is: " + time);
};

getTime(returnTime);

function getTime(callback) {
  callback(new Date());
}
