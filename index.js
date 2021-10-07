// 1 - Aujourd'hui
var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
var months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'décembre'
];

function whatDayIsToday() {
    var date = new Date();
    var day = date.getDay();
    day = days[day];
   return console.log(`Aujourd'hui nous sommes ${day}`);
}
whatDayIsToday();

function whatMonthIsIt() {
    var date = new Date();
    var month = date.getMonth();
    month = months[month];
   return console.log(`Nous sommes au mois de ${month}`);
}
whatMonthIsIt();