(function(exports) {
  function smileAtUs() {
    var randSmile = Math.floor(Math.random() * 2) + 1;
    if (randSmile == 1) {
      return ":)";
    } else {
      return ":D";
    }
  }

  exports.smileAtUs = smileAtUs;
})(this);
