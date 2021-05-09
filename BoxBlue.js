class Box {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
       
        this.visibility = 225;
        this.width = width;
        this.height = height;
        World.add(world, this.body);


    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;

        console.log(this.body.speed);
        if(this.body.speed <3){
            var angle= this.body.angle;
            var pos = this.body.position;
            strokeWeight(2);
            fill("blue");
            //rect(pos.x, pos.y, this.width, this.height);
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility-5;
            pop();
        }
    
    }
}