//fizzBuzz
//divisivel por 3 => Fizz
//divisivel por 5 => Buzz
//divisivel por 15 => FizzBuzz
// entrada diferente de numero => não é um numero

const resultados = fizzBuzz(true);
console.log(resultados);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'não é um numero';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';
    if((entrada % 3 === 0) && (entrada %5==0))
    return 'FizzBuzz';
    else
        return entrada;
};