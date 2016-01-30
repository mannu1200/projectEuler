/*
Week is starting will sunday
i.e. 1->Sunday 2->Monday and so on

And 1->Jan, 2->Feb
*/

function firstDayOfMonth(firstDayOfLastMonth, lastMonth, currentYear){
	
	if(lastMonth === 0){
		lastMonth = 12;
	}


	var lastMonthDays = numberOfDaysInMonth(lastMonth, currentYear);
	


	return addDays(firstDayOfLastMonth, lastMonthDays - 28);	
}

function addDays(day, number){
	while(number){
		day++;
		number--;
		if(day === 8)
			day = 1;
	}
	return day;
}

function numberOfDaysInMonth(month, year) {

	if([4,6,9,11].indexOf(month) != -1) {
		return 30;
	} else if([1,3,5,7,8,10,12].indexOf(month) != -1){
		return 31;
	} else {
		if(year%4 === 0 && (year%100 !== 0 || year%400 === 0)) {
			return 29;
		} else {
			return 28;
		}
	}
}

function main(){
	var 
		fromYear = 1901,
		toYear = 2000,
		counter = 0,
		firstDayOfLastMonth = 7;//starting with 01/12/1900
		
	for(var y = fromYear; y <= toYear; y++) {
		for(var m = 1; m <= 12; m++) {
			firstDayOfLastMonth = firstDayOfMonth(firstDayOfLastMonth, m-1, y);
	console.log(firstDayOfLastMonth,m,y);
			if(firstDayOfLastMonth === 1) {
				counter++;
			}
		}
	}
	return counter;
}

//console.log(firstDayOfMonth(4,4,2015));
console.log(main());
