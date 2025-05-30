

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

     let names = ["John", "George", "Ringo", "Paul"]

    for (let name of names){
        console.log(name)
    }


    /*
    --- ALTERNATIVT ---

    function uppg6b(){

        let names = ["Björn", "Benny", "Anni-Frid", "Agnetha"]

        names.forEach(name => {
            console.log(name)
        })
    }
    */
    
}

module.exports = { uppg6 };
