var map = {
	1 : "One",
2 : "Two",
3 : "Three",
4 : "Four",
5 : "Five",
6 : "Six",
7 : "Seven",
8 : "Eight",
9 : "Nine",
10 : "Ten",
11 : "Eleven",
12 : "Twelve",
13 : "Thirteen",
14 : "Fourteen",
15 : "Fifteen",
16 : "Sixteen",
17 : "Seventeen",
18 : "Eighteen",
19 : "Nineteen",
20 : "Twenty",
30 : "Thirty",
40 : "Forty",
50 : "Fifty",
60 : "Sixty",
70 : "Seventy",
80 : "Eighty",
90 : "Ninety",
100 : "Hundred",
1000: "Thousand"	

};

Number.prototype.toWord = function(){
	var number = this.valueOf();
	
	if(number.toString().length === 3) {

		var str = map[parseInt(number/100)] + "hundred";

		if(number%100 === 0){
			return str;
		}else {
			return str + "and" + getTwoDigit(number%100);
		}	
		return map[number - number%100]		

	} else if(number.toString().length === 1){
		return map[number];
	} else if(number.toString().length === 2) {
		return getTwoDigit(number);
	} else {
		return "onethousand";
	}

	function getTwoDigit(number){
		if(number <= 20 || number%10 === 0) {
			return map[number];
		} else {
			return map[number - number%10] + "" + map[number%10];
		}		
	}
	
}


function main(){
	var counter = 0; 
	for(var i= 1; i <=1000; i++ ) {
		counter += i.toWord().length;
		console.log(counter, i.toWord(), i);
	}	
	return counter;
}
console.log(main());


