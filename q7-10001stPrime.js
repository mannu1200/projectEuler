function isPrime(n){
	var upto = Math.sqrt(n),from = 3, flag = true;
	n%2 === 0? flag = false : null;
	while(from <= upto && flag) {
		if(n%from === 0)
			return false;
		from += 2;
	}
	return flag;
}

function nthPrime(n){
	var counter = 1,i = 3;
	while(counter < n) {
		if(isPrime(i)) {
//console.log(i);
			counter++;
		}
		i = i+2;
	}
	return i-2;
}

console.log(nthPrime(10001));
