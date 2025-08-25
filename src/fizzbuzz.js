export function fizzbuzz(){
// Crear un numero del 1 al 100 en JavaScript
for (let n1 = 1; n1 <= 100; n1++){
// A partir de aqui, se utiliza "if" y "%" o tambien conocido como "Modulación"
    if(n1 % 3 === 0 && n1 % 5 === 0) {
        console.log (" FizzBuzz");
    } else if (n1 % 5 === 0) {
        console.log (" Fizz");
    } else if (n1 % 3 === 0) {
        console.log (" Buzz");
    } else {console.log (n1)}
}
