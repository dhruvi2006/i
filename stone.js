class Stone {
    constructor(x, y) {
      var options = {
        'friction': 0.9,
        'restitution':0.8,
        'density':12
      };
      this.body = Bodies.rectangle(x, y, 90, 70, options);
      this.width = 90;
      this.height = 70;
      World.add(world, this.body);
    };
    display(){
      var stonepos = this.body.position;
      push();
      translate(stonepos.x, stonepos.y);
      strokeWeight(3);
      stroke('brown')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  