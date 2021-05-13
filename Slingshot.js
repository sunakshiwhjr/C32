class Slingshot{

    constructor(body, point)
    {
        var options = {

            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 10,
            
        }

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        //we are assing the argument passed in the constructor to this.pointB
        // so that it can be accessed in the display or accessible in the display function.
        this.pointB = point
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
       // console.log(this.sling);

     }

    fly()
     {
         this.sling.bodyA = null;
     }

     attach(body)
     {
         this.sling.bodyA  = body;
     }
    display()
    {
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            

            push();
            stroke(55, 25, 10);

            if(pointA.x <220)
            {
                strokeWeight(7);
               
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y -3);
                image(this.sling3, pointA.x -30, pointA.y -10, 15, 30);


            }

            else{

                strokeWeight(3);
                
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y -3);
                image(this.sling3, pointA.x + 25, pointA.y -10, 15, 30);

            }

           pop();
           //line(pointA.x, pointA.y,pointB.x, pointB.y)
        }
    
    }

}