function findDivisorsSum(number){
	var 
		from = 1,
		upto = number/2,
		sum = 0;
	
	for(var i = from; i <= upto; i++) {
		if(number%i === 0) {
			sum += i;
		}
	}
	return sum;
}

function main() {

	var 
		from = 4,
		upto = 10000,
		sum = 0;

	for(var i = from; i <= upto; i++) {
		var temp1 = findDivisorsSum(i);
		var temp2 = findDivisorsSum(temp1);
		if(i === temp2 && temp1 !== temp2) {
			sum += i;
			console.log(temp1, temp2 ,i);
		}
	}
	return sum;
}
console.log(main());
//console.log(findDivisorsSum(284));
