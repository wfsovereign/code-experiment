const  scheduleDaysNum = 90;
function createThreeMonthDateByType(boolean) {
    var dates = [], now = new Date(), gap = 1;
    now.setHours(0, 0, 0, 0);
    if (boolean) {
        gap = 7;
        var weekNum = now.getDay();
        if (weekNum === 0) {
            dates.push(now);
            now.setDate(now.getDate() + 6);
        } else if (weekNum < 6) {
            now.setDate(now.getDate() + 6 - weekNum);
        }
    }
    console.log(now.toLocaleDateString());
    console.log('--------------');

    for (var i = 1; i < scheduleDaysNum; i += gap) {
        dates.push(now.toLocaleDateString());
        now.setDate(now.getDate() + 1);
        if (boolean) {
            dates.push(now.toLocaleDateString());
            now.setDate(now.getDate() + gap - 1);
        }
    }
    return dates;
}


var a = createThreeMonthDateByType(true);
console.log(a);