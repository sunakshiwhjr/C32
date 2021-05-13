class Bird extends BaseClass
{

    //To create the object we use constructor

    constructor(x,y)
    {
        
        super(x,y,50 ,50);
        //overriding 
        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = []

    }

    display()
    {
        //Bird's own functionality.hence overriding 
        //In actual game the bird doesn't follow or move as per the mouse so comment it

      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
        super.display();

        if(this.body.velocity.x > 10 && this.body.position.x > 200)
        {
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);

        }
      

    
        for(var i=0; i<this.trajectory.length; i++)
        {
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }

        
    }
}