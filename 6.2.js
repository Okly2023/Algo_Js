
class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;

    }
    collides(otherRectangle){
        return this.newRectangle == otherRectangle.Rectangle;
       }
}


class newRectangle extends Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
        super(topLeftXPos, topLeftYPos, width, length);
    }
    
}
 
const obj=new Rectangle(4,5,8,6);
const obj1= new newRectangle(10,5,8,9);
console.log(obj.collides(obj1));





