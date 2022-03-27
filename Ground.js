class Ground{
constructor(x,y,w,h){
    var solo_opcoes={
        isStatic:true,
    }
    this.w=w;
    this.h=h;
    this.body=Bodies.rectangle(x,y,w,h,solo_opcoes)
    World.add(world,this.body)
}
show(){
    var pos=this.body.position;
    push();
    rectMode(CENTER)
    stroke(4)
    fill("red")
    rect(pos.x,pos.y,this.w,this.h);
    pop();
}
}