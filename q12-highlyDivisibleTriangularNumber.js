function findDivisors(number) {

	var arr = [1];
	var from = 3, upto = number/2;
	
	if(number%2 === 0){
		arr.push(2);
	}

	for(var i = from; i< upto; i++) {
		if(number%i === 0){
			arr.push(i);
		}
	}
	arr.push(number);
	return 501;//arr.length;
}

function main(){

var a = 1,b,flag = true,counter=1;

	while(flag) {
		a = a + ++counter;
	divisors = findDivisors(a);
	console.log(divisors,'  @@@@@@@@@@@@@@@@@@@@  ',a);
		if(divisors > 500) {
			flag = false;
		}
	}
return a;

}


console.log(main());
