interface CalculatorInterface {
    add(a: number, b: number):number;
    sub(a : number , b: number):number ;
    mul(a: number, b: number): number;
    div(a: number, b: number): number;

  }
   export class calculator implements CalculatorInterface{
    result:number=0;
    add(a:number,b:number):number{
        this.result=a+b;
        console.log(this.result);
        return  this.result;
    }
    sub(a:number,b:number):number{
        this.result=a-b;
        console.log(this.result);
        return  this.result;
    }
    mul(a:number,b:number):number{
        this.result=a*b;
        console.log(this.result);
        return  this.result;
    }
    div(a:number,b:number):number{
        if(b==0){
            console.log("error");
        }
        this.result=a/b;
        console.log(this.result);
        return  this.result;
    }
  }
  const k=new calculator();
  console.log(k.add(3,5));
  console.log(k.sub(3,5));
  console.log(k.mul(3,5));
  console.log(k.div(25,5));
