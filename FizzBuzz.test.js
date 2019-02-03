const FizzBuzz = require('./FizzBuzz');

test('number is cant divisible by 3 and 5' , () =>{
    expect(FizzBuzz(1)).toBe('1');
})

test('number is divisible by 3 ' , () => {
    expect(FizzBuzz(3)).toBe('Fizz');
})

test('number is divisible by 5' , () => {
    expect(FizzBuzz(5)).toBe('Buzz');
})

test('number is 15 to divisible' , () => {
    expect(FizzBuzz(15)).toBe('FizzBuzz');
})

test('number is cant divisible by 3 and 5' , () =>{
    expect(FizzBuzz(17)).toBe('17');
})

test('number is cant divisible by 3 and 5' , () =>{
    for(var i = 1;i<=100;i++){
        if(i != 0 & i != 0){
            expect(FizzBuzz(1)).toBe('1');
        }
        else if (i == 0 & i != 0) {
            expect(FizzBuzz(3)).toBe('Fizz');
        }else if(i == 0 & i != 0){
            expect(FizzBuzz(5)).toBe('Buzz');
        }else{
            expect(FizzBuzz(15)).toBe('FizzBuzz');
        }
    }
})
