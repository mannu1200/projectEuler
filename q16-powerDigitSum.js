function main(power){
	var counter = 0,multiplier=0;
	while(power > 1) {
		if(power%2 !== 0) {
			multiplier++;
			power = power - 1;
		} else {
			counter++;
			power = parseInt(power/2);
		}
	}
	var a = [],numberOfDigits = Math.ceil(Math.log(Math.pow(2,1000)));
	
	for(var i = 0; i< numberOfDigits; i++){
		a[i] = 0;
	}	
	console.log(a.length);
	while(counter) {
		a = a * a;
		counter--;
	}
	while(multiplier) {
		a = a * 2;
		multiplier--;
	}
	var sum = 0;
console.log(a.toFixed(20));
	while(a > 0) {
console.log(a%10, parseInt(a/10));
		sum += a%10;
		a = parseInt(a/10);
	}
	return sum;
	
}


function main2(){

}

console.log(main(1000));
