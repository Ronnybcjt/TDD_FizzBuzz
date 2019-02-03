function FizzBuzz(number){
    var divisibleThree = number % 3;
    var divisibleFive = number % 5;
    
    if(divisibleFive != 0 & divisibleThree != 0){
        return number+'' ;
    }
    else if (divisibleThree == 0 & divisibleFive != 0) {
        return 'Fizz'
    }else if(divisibleFive == 0 & divisibleThree != 0){
        return 'Buzz'
    }else{
        return 'FizzBuzz'
    }
}

module.exports = FizzBuzz;