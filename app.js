// one euro is:
/*let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}*/


const sum = (a,b) =>{
    return a+b;
}

console.log(sum(7,3));


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yen
    let valueInEuro = valueInDollar/1.2;
    let valueInYen = valueInEuro * 127.9;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a Yen
    let valueInEuro = valueInYen/127.9;
    let valueInPound = valueInEuro * 0.8;
    // retornamos el valor
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

