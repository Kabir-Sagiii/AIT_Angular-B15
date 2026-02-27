abstract class A {
    x:number = 0;

   public display():void{
   console.log(this.x)
    }

    abstract sum(a:number,b:number):void;
}

class B extends A {

sum(a: number, b: number): void {
    console.log(a+b)
}

}