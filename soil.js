class Soil {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.r);
    }
  };
