function rotateRight(number){
	var 
		str = number.toString(),
		len = str.length,
		temp = str[0],
		arr = [];
	for(var i = 0; i< len; i++){
		arr[i] = str[i];
	}
	
	for(var i = 0 ; i < len-1; i++) {
		arr[i] = arr[i+1];
	}
	arr[i] = temp;
	var result = '';
	for(var i = 0 ; i< len; i++){
		result += arr[i];
	}
	return result;
}

function isPrime(number){
	if(number%2 === 0 || number === 1)
		return false;
	var from = 3,upto = Math.sqrt(number);

	while(from < upto) {
		if(number%from === 0)
			return false;
		from += 2;
	}
	return true;
}

function main(){

	var upto = 1000000,i=0,answer=0;

	while(i < upto){
		var len = i.toString().length, number = i;
		for(var j = 0;j < len; j++){
			if(!isPrime(parseInt(number))) {
				break;
			}
			number = rotateRight(number);			
		}	
		if(j === len) {
			answer++;
		}
		i++;
	}	
	return answer;
}
console.log(main());
//console.log(rotateRight(10959));
