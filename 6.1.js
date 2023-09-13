class Circle{
 constructor(xpos, ypos, radius){
    this.xpos=xpos;
    this.ypos=ypos;
    this.radius=radius;
 }
 get surface(){
  return this.area();
 }
 area(){
   return this.xpos * this.radius * this.radius;
 }
 *getSides(){
  yield this.xpos;
  yield this.radius;
 }

}
const cobj= new Circle(6,4,4);
console.log(cobj.surface);
console.log([cobj.getSides()]);