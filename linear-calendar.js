let list = document.querySelector('ul');
let year = document.querySelector('.year');
let month = document.querySelector('.month');

//find the number of days in the current month
var date = new Date();
let thYear = date.getFullYear();
let thMonth = date.getMonth();

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

let d = getDaysInMonth(thYear, thMonth);

//create list of days of the current month
function createMonth(date, da) {
    for (let i = 0; i < da; i++) {
        let li = document.createElement('li');
        li.textContent = i + 1;
        list.appendChild(li);
    }
}
createMonth(date, d);
let lis = document.querySelectorAll('li');
currentDate();

//find current date 
function currentDate() {
    let today = date.getDate();
    for (let li of lis) {
        if (li.textContent == today) {
            li.classList.add('color')
        }
    }
}

//write year and month in the head
year.textContent = date.getFullYear();
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
month.textContent = months[date.getMonth()];

function formatDate(year, month, dat) {
    let dateObj = 'Date ' + new Date(year, month, dat);
    return dateObj.toString();
}
//add link to move to the previous month
function prevMonth() {
    let m = month.textContent;
    let y = year.textContent;
    let curMonth = months.findIndex(i => i == m); //индекс месяца, указанного в шапке

    let lis = document.querySelectorAll('li')
    lis.forEach(li => li.remove() ) // удаление дней месяца (ul> li)

    if (curMonth > 0) {
        let textM = months[(curMonth - 1) % 12]; //предыдущий месяц, по отношению к месяцу в шапке 
        let textM_i = (curMonth - 1) % 12; //индекс этого месяца
        month.textContent = textM; //переписывание месяца в шапке
        
        let days = getDaysInMonth(y, textM_i); //количество дней в новом месяце
        createMonth(date, days);
    } else if (curMonth == 0) {
        month.textContent = months[11];
        let year_ = y - 1;
        year.textContent = year_;
        days = getDaysInMonth(year_, 11); //количество дней в декабре
        let date_ = formatDate(year_, 11, 4);
        createMonth(date_, days);
    }
}

function nextMonth() {
    let m = month.textContent;
    let y = year.textContent;
    let curMonth = months.findIndex(i => i == m); //индекс месяца, указанного в шапке

    let lis = document.querySelectorAll('li')
    lis.forEach(li => li.remove() ) // удаление дней месяца (ul> li)

    if (curMonth == 0 || curMonth < 11) {
        let textM = months[(curMonth + 1) % 12]; //предыдущий месяц, по отношению к месяцу в шапке 
        let textM_i = (curMonth + 1) % 12; //индекс этого месяца
        month.textContent = textM; //переписывание месяца в шапке
        
        let days = getDaysInMonth(y, textM_i); //количество дней в новом месяце
        createMonth(date, days);
    } else if (curMonth == 11) {
        month.textContent = months[0];
        let year_ = Number(y) + 1;
        year.textContent = year_;
        days = getDaysInMonth(year_, 0); //количество дней
        let date_ = formatDate(year_, 0, 4);
        createMonth(date_, days);
    }
}
