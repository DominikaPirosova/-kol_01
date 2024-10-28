const meno = prompt("Napíšte svoje krstné meno bez diakritiky")
const priezvisko = prompt("Napíšte svoje priezvisko bez diakritiky")

const menoTrimmed = meno.trim()
const priezviskoTrimmed = priezvisko.trim()

const castPriezviska = priezviskoTrimmed.slice(0,5)
const castMena = menoTrimmed.slice(0,3)

document.body.innerHTML = `${castPriezviska.toLowerCase()}${castMena.toLowerCase()}@fit.cvut.cz` 

/* druhý spôsob zápisu: 
 document.body.innerHTML = castPriezviska.toLowerCase() + castMena.toLowerCase() + "@fit.cvut.cz" */

