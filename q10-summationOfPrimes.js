function main(upto){
	var sum = 2,from = 3;
	for(var i = from; i <= upto; i += 2){
		if(isPrime(i))
			sum += i;
	}
	return sum;
}

function isPrime(number){
	var upto = Math.sqrt(number),from = 3;
	if(number%2===0)
	return false;
	for(var i = from; i <= upto; i += 2) {
		if(number%i === 0)
			return false;
	}
	return true;
}

console.log(main(2000000));
