let dollar = 5.8 

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})


// Fill in value automatically 

usdInput.value = "5,80";
brlInput.value = "1,00";

// Currency Convert Function 

function convert(type) {
    if(type == "usd-to-brl") {
        // adjust the value
        let fixedValue = fixValue(usdInput.value)

        // convert the value from usd to brl
        let result = fixedValue * dollar 
        result = result.toFixed(2)
       
        // show the result in the real´s field 
        brlInput.value = formatCurrency(result)
    }

    if(type == "brl-to-usd") {
        // adjust the value
        let fixedValue = fixValue(brlInput.value)
        // convert the value from usd to brl
        let result = fixedValue / dollar
        result = result.toFixed(2)

        // show the result in the dollar´s field
        usdInput.value = formatCurrency(result)
    }
} 

// Format currency 

function formatCurrency(value) {
    // adjust the value
    let fixedValue = fixValue(value)
    
    // JavaScript Library 
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    // use format function
    let formatter = new Intl.NumberFormat("pt-BR", options)

    // return the formatted value 
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".") // replace comma by period 
    let floatValue = parseFloat(fixedValue) // replace string by number 
    if(floatValue == NaN) {                 // NAN means Not A Number  
        floatValue = 0
    }
    return floatValue

}