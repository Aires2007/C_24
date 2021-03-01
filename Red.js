class Red {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 51, 51, options);
      this.width = 51;
      this.height = 51;
      
      World.add(world, this.body);
    }
    display(){
     this.body.position.x = mouseX;
     this.body.position.y = mouseY;
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("pink");
      strokeWeight(5);
      stroke("white")
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  