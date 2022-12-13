

var num1;
confirm('Due you want to know the greatest players to ever play in certain positions?');
switch(num1 = parseInt(prompt('Please input the number of the field position i.e =1-11'))){
    case 1:
        alert('Casillas, Real madrid');
        break;
    case 2:
        alert(' Cafu, Real madrid');
        break;
    case 3:
        alert('Roberto Carlos, Real madrid');
        break;
    case 4:
        alert('Paolo maldini, AC Millan');
        break;
    case 5:
        alert('Sergio Ramos, PSG');
        break;
    case 6:
        alert('Zinedine Zidane, Real madrid');
        break;
    case 7:
        alert('Christiano ronaldo, Manchester united');
        break;
    case 8:
        alert('Luka Modric, Real madrid ');
        break;
    case 9:
        alert('Ronaldo nazario, barcelona');
        break;
    case 10:
        alert('Lionel Messi, Barcelona');
        break;
    case 11:
        alert('Diego maradona, Barcelona');
        break;
    default:
        alert('Please input a number between 1 & 11');
}