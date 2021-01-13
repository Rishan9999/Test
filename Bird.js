class Bird
{
    constructor (x,y,width,height) {
        var options = {
            'friction' : 1,
            'restitition' : 1 ,
            'density' : 1 
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
        display () {
          push ()  

            fill("red")

            translate (mouseX,mouseY)
            rectMode (CENTER)

            rect (0,0,this.width,this.height)

            pop ()
        }
}