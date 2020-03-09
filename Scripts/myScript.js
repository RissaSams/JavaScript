var flight = 418.12;
var hotel = 113.85;
var car = 99.99;
const TAX_RATE = 0.0805;
var subtotal, tax, total;

//flight+hotel
subtotal = flight+hotel;
displayTaxandTotal("Flight + hotel",subtotal);

//flight+car
subtotal = flight+car;
displayTaxandTotal("Flight + car",subtotal);

//flight+hotel+car
subtotal = flight+hotel+car;
displayTaxandTotal("Flight + hotel + car",subtotal);

function displayTaxandTotal(strItems, subtotal){
    tax = subtotal * TAX_RATE;
    total = subtotal + tax;
    console.log(strItems+" = $"+subtotal.toFixed(2))
    console.log("tax = $"+tax.toFixed(2));
    console.log("total = $"+total.toFixed(2));
    console.log("-----------------------");
}