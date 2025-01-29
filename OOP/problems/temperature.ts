// define ts class Temperature with a private  property _celcius set to 0.
// Implement a getter method celcius that returns the temperature in celsius.
// Implement a setter method celcius that sets the temperature in celcius.
// Implement a getter method farenheit that converts celcius to fahrenheit using the formula(c*9/5)+32.
// // Implement a setter method farenheit that converts  fahrenheit to celcius using the formula(f-32)*5/9.
// create an instance of temperature class.
// use the setter to set the temperature in celcius to 25 and then use the getter for fahrenheit. What fahrenheit value do you except?
// use the setter to set the temperature in fahrenheit to 98.6 and then use the getter for celcius  what celcius value do you except?
class Temperature{
  private _celcius:number=0;


  public get celcius():number{
    return this._celcius;
  }
  public set celcius(newCelcius:number)
  {
    this._celcius=newCelcius;
  }

  public get fahrenheit():number{
    return (this._celcius*9)/5+32;
  }

  public set fahrenheit(newFah:number){
    this._celcius=((newFah-32)*5)/9;
  }
}

const temp:any=new Temperature();
temp.celcius=25

console.log("in fahrenheit ",temp.fahrenheit)

temp.fahrenheit=77;
console.log("in celcius ",temp.celcius)