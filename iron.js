class Iron {
    constructor(x, y) {
      var options = {
        'friction': 3,
        'restitution':0.8,
        'density':30
      };
      this.body = Bodies.rectangle(x, y, 100, 60, options);
      this.width = 100;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var ironpos = this.body.position;
      push();
      translate(ironpos.x, ironpos.y);
      strokeWeight(3);
      stroke('blue')
      fill('pink')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };