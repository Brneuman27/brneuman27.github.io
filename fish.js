class Fish { 
  constructor(x,y) { 
    this.x = x; 
    this.y = y; 
    this.size = 15; 
    this.speed = 5; 
    this.xvel = 0; 
    this.yvel = 0; 
  } 
  drawSelf() {
    noStroke(); 
    
    var angle = atan2(this.yvel, this.xvel); 
    
    push(); 
      translate(this.x, this.y); 
      rotate(angle); 
    
    fill(10, 100, 100); 
    ellipse(0, 0, this.size * 1.25, this.size); 
    triangle(-this.size/2, 0, -this.size, -this.size/3, -this.size, this.size/3); 
    pop(); 
    } 
  move() { 
    this.xvel = random(-5, 5); 
    this.yvel = random(-5, 5); 
    this.x += this.xvel; 
    this.y += this.yvel;
  }
}
