

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

let persons = [
  {name: "Toker", age: 12},
  {name: "Trötter", age: 68},
  {name: "Glader", age: 30},
  {name: "Butter", age: 32},
  {name: "Blyger", age: 6}
]

function over30(lst) {
  lst.forEach(person => {
    if (person.age > 30){
      console.log(person.name)
    }
  })
}  

over30(persons)

  
}

module.exports = { uppg8 };
