/*The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.
Notes

The first and/or last names are never null, but may be empty.
Task

Fix the bug so we can all go home early.*/

class Dinglemouse{

  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
  
  getFullName(){
    if(this.firstName && !this.lastName){
      return `${this.firstName}`
    }else if(!this.firstName && this.lastName){
      return `${this.lastName}`
    }else if(!this.firstName && !this.lastName){
      return ``
    }else { return `${this.firstName} ${this.lastName}` }
  }
  
}

new Dinglemouse("Clint", "Eastwood").getFullName() // "Clint Eastwood"
new Dinglemouse("Clint").getFullName() // "Clint"
new Dinglemouse('', '').getFullName() // ''

/*TOP SOLUTION
class Dinglemouse{

  constructor( firstName, lastName ){
    this._firstName=firstName;
    this._lastName=lastName;
  }
  
  getFullName(){
    return `${this._firstName} ${this._lastName}`.trim();
  }
  
}*/