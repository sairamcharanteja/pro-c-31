class Plinko{
    constructor(x,y) {
      var options = {
          restitution:0.4
      }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(225);  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      ellipseMode(RADIUS);
      ellipse(o,o,this.r,this.r);
      pop();  
    }
  };