class BaseClass
{

    //To create the object we use constructor

    constructor(x, y, width, height, angle)
    {
        var option = {

            restitution :0.8,             
             friction: 1,
             density : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(myWorld, this.body);
    }

    display()
    {
        var pos = this.body.position;
    
        var angle = this.body.angle;


        angleMode(RADIANS);
        //or angleMode(DEGREES);
        push();
        translate(pos.x, pos.y);            
        rotate(angle);
       // fill("Red");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       
       /* rectMode(CENTER);        
        rect(0, 0, this.width, this.height);*/
        pop();
   

    }
}
