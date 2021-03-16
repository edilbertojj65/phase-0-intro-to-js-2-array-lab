let   cats = [] ;   //Define array  cats  in general memory
let   coPycats = [] ; //Define array  coPycats  in general memory

//Define fuction beforeEach() when is assigned an initial value of ["Milo", "Otis", "Garfield"]
function beforeEach() {
    cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
      
    return(cats)  ;  // ["Milo", "Otis", "Garfield"]
}

// Invoked function beforeEach() for loggin and return  array cats.
console.log(beforeEach());


// Define fuction destructivelyAppendCat(name) with argument (name) and return an array with a new element in last position 
function destructivelyAppendCat(name) {
    console.log(beforeEach());
    
    cats.push(name) ;
    return (cats);  //["Milo", "Otis", "Garfield", "Ralph"]
}

// Invoke function destructivelyAppendCat with parameter 'Ralph'
 console.log(destructivelyAppendCat('Ralph'));

 //Define function destructivelyPrependCat(name) with argument (name) and return an array with a new element 
 //a cat to the beginning of the cats array
 function destructivelyPrependCat(name){
    console.log(beforeEach());
    
    cats.unshift(name) ;
    return (cats);  // ["Bob", "Milo", "Otis", "Garfield"]

 }
// Invo,ke function destructivelyPrependCat('Bob') with parameter 'Bob' and return array change cats
// expect cat to have ordered with members ["Bob", "Milo", "Otis", "Garfield"]
 console.log(destructivelyPrependCat('Bob'));

//define function destructivelyRemoveLastCat() removes the last cat from the cats array
 function destructivelyRemoveLastCat() {
    console.log(beforeEach());
    cats.pop();
    return(cats); //expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield')

 }

 //Invoke function (destructivelyRemoveLastCat()
 console.log(destructivelyRemoveLastCat());


 //Define function destructivelyRemoveFirstCat() , removes the first cat from the cats array
 function destructivelyRemoveFirstCat(){
    
    cats.shift();
    return(cats,coPycats);  //["Otis", "Garfield"]
 }

 //Invoked the function destructivelyRemoveFirstCat()
 console.log(destructivelyRemoveFirstCat()) ;


 //Define function  appendCat(name)  appends a cat to the cats array and returns a new array, leaving the cats array unchanged
 function appendCat(name){
      console.log(beforeEach());
      coPycats = [...cats,name];
    return (coPycats);  // ["Milo", "Otis", "Garfield", "Broom"]
 }

 //Invoke function appendCat('Broom')
 console.log(appendCat('Broom'));

//Define function prependCat(name) , prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
 function prependCat(name){
    console.log(beforeEach());
    coPycats = [name,...cats];
    return (coPycats);  // ["Arnold", "Milo", "Otis", "Garfield"]

 }

 //Invoke function prependCat ,prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
 console.log(prependCat('Arnold'))

 function removeLastCat() {
    console.log(beforeEach());
    coPycats = [...cats];
    coPycats.pop();
    return(coPycats); // ["Milo", "Otis"]

 }

 //Invoked function removeLastCat()
 console.log(removeLastCat())


 //Define function removeFirstCat() ,removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
 function removeFirstCat(){
    console.log(beforeEach());
    coPycats = [...cats];
    coPycats.shift();
    return(coPycats); // ["Otis", "Garfield"]

 }

 //Invoked function removeFirstCat()
 console.log(removeFirstCat());