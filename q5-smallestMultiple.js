function lcm(arr) {

	var 
	 lcm = 1,
	 length = arr.length - 1,
	 i = 0;
	while(i <= length) {
		var factor = findSmallestFactor(arr[i]), j=i;
		lcm *= factor;
		while(j <= length) {
			if(arr[j]%factor === 0) {
				arr[j] /= factor;
			}	
			j++;
		}
		i++;
	}
return lcm;
				
}
function findSmallestFactor(number){
	var i = 2;

	while(i < number) {
		if(number%i === 0)
			return i;
		i++;
	}
	return number;
}

function smallest(arr) {
	var smallest = arr[0];
	arr.forEach(function(n){
		smallest > n ? smallest = n : null;
	});
return smallest;
}
console.log(lcm([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));
