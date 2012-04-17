(function($) {
  var util = {
    distance : function(v){
      return Math.floor(Math.random() * v * 2) - v;
    }
  };
  var Uzi = function(ground){
    this.ground = ground;
  };
  var Hae = function(target, option){
    this.target   = target;
    this.range    = { x : 50, y : 50 };
    this.duration = 30;
    this.target.css("position", "absolute");
    this.fxcked   = false;
  };
  Hae.prototype.action = function(){
    this.fly();
  };
  Hae.prototype.stop = function(){
    // todo
  };
  Hae.prototype.walk = function(){
    // todo
  };
  Hae.prototype.fxck = function(){
    // todo
  };
  Hae.prototype.bear = function(){
    // todo
  };
  Hae.prototype.fly  = function(){
    var position = this.target.position();
    var position_x = position.left + util.distance(this.range.x);
    var position_y = position.top  + util.distance(this.range.y);
    var html = $("html");
    if(position_x < 0) position_x = 0;
    if(position_y < 0) position_y = 0;
    if(position_x > html.width())  position_x = html.width();
    if(position_y > html.height()) position_y = html.height();
    var that = this;
    var dest = { left : position_x, top : position_y };
    this.target.animate(dest, {
      duration : that.duration,
      easing   : "swing",
      complete : function(){
        setTimeout(function(){ that.action(); }, that.duration * 2);
      }
    });
  };
  $.fn.hae = $.fn.fly = function(option){
    if(this == null) return;
    var fly = new Hae(this);
    fly.action();
    return fly;
  };
})(jQuery);
