


class Something{
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
  
    login(){
      console.log(`${this.name}is loged in`)
    }
    logout(){
      console.log(`${this.name}is logedout`)
    }
  }
  
  class Sub extends Something{
    constructor(name,age){
      super(name)
    }
     subcrib(){
      console.log(`${this.name} has 100 off`)
     }
  }
  
  let Someone=new Something("siva",21);
  let sad=new Sub("ganesh")
  sad.subcrib()
  Someone.logout()