(function(){
/*	var sum = 0, n = 1000, flag = true, counter = 3;

	while(flag) {
		[2, 1, 3, 1, 2, 3, 3].forEach(function(k){
			counter += k;
			if(counter >= 1000) {
				flag = false;				
			} else {
				sum += counter;
			}
		});
	}
*/

	var sum = 3, n = 1000,flag=true,counter = 3;
	while(flag){
	[2,1,3,1,2,3,3].forEach(function(k) {
		counter += k;
		if(counter >= 1000) {
			flag = false;
		}
		if(flag) {
			sum += counter;
		}	
	});
	}
console.log('finally-------->',sum);
}());
