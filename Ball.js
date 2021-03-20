class Ball {
    constructor(x,y,width) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,width/2,options);
      this.width = width;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.width, this.width);
    }
  };
