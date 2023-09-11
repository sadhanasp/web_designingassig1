let day = 1;
let dayname;
switch (day) {
    case 1:
    dayname = " sunday";
    break;
    case 2:
    dayname = " monday";
    break;

case 3:
    dayname = " tuesday";
    break;
case 4:
    dayname = " wednesday";
    break;

case 5:
    dayname = "  thursday";
    break;
case 6:
    dayname = " friday";
    break;

case 7:
    dayname = " saturday";
    break;

default:
    dayname = "invalid day";
}
console.log(" the day is + dayname");