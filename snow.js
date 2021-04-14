class Snow{
    constructor(x,y,radius){
       var options={
           isStatic: false,
           //friction:0.001,
           density:10
       }
       this.snow = Bodies.circle(x,y,radius, options);
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.image = loadImage("snow.png");
       World.add(world, this.snow);
    }
    display(){
        var pos = this.snow.position;
        var radius = this.snow.radius;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 20,20);
        if(pos.y>550){
           Matter.Body.setPosition(this.snow, {x:random(0,990), y: random(0,550)});
        }
    }
}