var person = {
    age:14,
    name: 'Lucas'
}

function getRemainingYearsToMajorty (person) {
    return 18 - person.age
}

var remainingYears = getRemainingYearsToMajorty(person)
console.log(remainingYears)