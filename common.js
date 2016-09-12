common = {

    //returns the count of prime numbers smaller than n
    numberOfPrimes: function(n) {
        
        var counter = 0;

        for(var i = n; i > 1; i--) {
            if(common.isPrime(i)) 
                counter++;
        }

        return counter++;
    
    },

    isPrime: function(n){
    
    
        var upto = Math.ceil(Math.sqrt(n)),from = 3;

        if(n===2) return true;
        if(n%2===0) return false;

        for(var i = from; i <= upto; i += 2) {
            
            if(n%i === 0) return false;

        }
        return true;
    }

};

module.exports = common;

//Test functions
console.log(common.numberOfPrimes(1000000));
