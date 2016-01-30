function isPrime(no){
        var upto = Math.ceil(Math.sqrt(no)), from = 2;
        while(from <= upto ) { 
                if(no%from === 0){ 
                        return false;   
                }   
                from = from + 2;

//console.log(from,upto);
        }   
        return true;
}


function main() {

	var n = 600851475143, counter = 3, arr = [];


	while(counter <= n/2) {
console.log('processing....',counter,n);
		if(n%counter === 0 && isPrime(counter)){
			arr.push(counter);
			n /= counter;
		} else {
			counter++;
		}
	}
	return arr[arr.length -1];
}

console.log(main());
