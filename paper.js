class Paper{
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.x = x
    this.y = y
    this.r= r

    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body)
} 
display(){
    var position=this.body.position
    push()
    translate(position.x,position.y)
ellipseMode(RADIUS) 
fill("red")     
ellipse(0,0,this.r,this.r)
pop ()
    
}
}