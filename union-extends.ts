class Run{
  showClass(){
    console.log('this is Run');
  }
}
class Man extends Run{
  private name:string;
  private age:number;
  constructor(name:string,age:number){
    super();
    this.name = name;
    this.age = age;
  }
}

let aaa = new Man('孙悟空',14);
aaa.showClass();