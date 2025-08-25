export function fizzbuzz(){
// Crear un numero del 1 al 100 en JavaScript
//"var" se reemplazo por "let" por temas de modernindad
for (let n1 = 1; n1 <= 100; n1++){
    console.log (n1)
// A partir de aqui, se utiliza "if" y "%" (O tambien conocido como Modulación)
    if(n1 % 3 === 0 && n1 % 5 === 0) {
        console.log (n1 + " FizzBuzz");
    } else if (n1 % 5 === 0) {
        console.log (n1 + " Fizz");
    } else if (n1 % 3 === 0) {
        console.log (n1 + " Buzz");
    }
}
