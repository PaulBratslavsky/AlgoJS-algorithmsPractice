// Find which numbers can be divided by numbers all numbers in second array
const num = [2,4,6,8,10, 12];
const div = [ 1, 3, 6];

function divisibleBy(numbers, divisor) {

    function isDivisibleBy(number, div) {
        if ( (number / div) % 1  === 0 ) {
            console.log(`${number} is divisible by ${div}`);
            return true;
        }   else {
            console.log(`${number} is NOT divisible by ${div}`)
            return false;
        } 
    }

    let filtered = numbers.filter( number => {
        let test = [];

        divisor.forEach( div => {
            test.push(isDivisibleBy(number, div))
        });
        
        console.log(test, test.indexOf(false), "TEST"); 

        if ( test.indexOf(false) !== -1 ) {
            return false
        } else {
            return true;
        }
                
    })

    console.log(filtered);
    return filtered; 

}



const result = divisibleBy(num, div);

