class Box 
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

                fill (rgb(61, 6, 6))

            translate (this.body.position.x,this.body.position.y)
            rectMode (CENTER)

            rect (0,0,this.width,this.height)

            pop ()
        }
}