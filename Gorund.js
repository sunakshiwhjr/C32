class Ground{

    
    //To create the object we use constructor

    constructor(x, y, width, height)
    {
        var option = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body);
        
    }

    display()
    {
        var pos = this.body.position;
     //   var angle = this.body.angle;
         push();
      //  translate(pos.x, pos.y);
      //The fill color applies tp all 3 object as the ground is the the 1st object that is getting displayed.
      //If we add the ground later then fill("red") applied to blocks will apply to all 3 object.
      //To resolve this issue we use push() and pop() which is part of p5.js

         fill("brown");
      
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();

        
    }
}
