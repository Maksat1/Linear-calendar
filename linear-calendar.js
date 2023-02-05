let list = document.querySelector('ul');
//find the number of days in the current month
var date = new Date()
	, thYear = date.getFullYear(), thMonth = date.getMonth()
	, nextMonth = (thMonth +1) % 12, nextYear = thYear + (thMonth==11);

var daysInThMonth = (+new Date(nextYear, nextMonth, 1) - new Date(thYear, thMonth, 1))/ 86400000;

//create list of days of the current month
for (let i = 0; i < daysInThMonth; i++) {
    let li = document.createElement('li');
    li.textContent = i + 1;
    list.appendChild(li);
}
//find current date 
let lis = document.querySelectorAll('li')
let today = date.getDate();
console.log(today)
for (let li of lis) {
    if (li.textContent == today) {
    li.classList.add('color')
}
}

