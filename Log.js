class Log
{
    constructor (x,y,width,height,angle) {
        var options = {
            'friction' : 1,
            'restitition' : 1 ,
            'density' : 1 
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
        display () {
          push ()  
          translate (this.body.position.x,this.body.position.y)

          rotate(angle)

                fill (rgb(87, 39, 0))

            
            rectMode (CENTER)

            rect (0,0,this.width,this.height)

            pop ()
        }
}