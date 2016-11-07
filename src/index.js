//Basic es6 concepts

//(e) => replace function(e)
//no parameter use ()
//one parameter only use e
//if two parameters (e) =>
document.addEventListener('click', (e) => {
  console.log(e);
});

//destructuring example
var myObj = {
  name: "Rizchel",
  loc: "Austin"
};

//line 20 replaces var name = myObj.name; var loc = myObj.loc;
var { name, loc } = myObj;
console.log(name);
console.log(loc);