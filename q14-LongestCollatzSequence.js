function findSeriesLength(number){
	var length = 1;
	while(number > 1) {
		if(number%2 === 0) {
			number /= 2;
		} else {
			number = 3*number + 1;
		}
		length++;
	}

	return length;
}


function main() {

	var upto = 1000000,from = 2,maxLen = 0,temp=0,result=0;
	
	while(from < upto){
		temp = findSeriesLength(from++);
		if(maxLen < temp) {
			maxLen = temp;
			result = from -1;
		}
	}

	return result;
}
console.log(main());
//console.log(findSeriesLength(13));
