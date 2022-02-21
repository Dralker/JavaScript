//fizzBuzz
//divisivel por 3 => Fizz
//divisivel por 5 => Buzz
//divisivel por 3 e 5 => FizzBuzz
// entrada diferente de numero => não é um numero

const resultados = fizzBuzz('luisa');
console.log(resultados);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'não é um numero';
    if((entrada % 3 === 0) && (entrada %5==0))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';
    else
        return entrada;
};