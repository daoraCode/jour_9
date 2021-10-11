var moment = require('moment'); // import du module moment
// moment().format();

moment().format("[Aujourd'hui nous sommes] dddd");
moment.locale('en');
moment.locale('fr'); // permet un affichage en version fr

// EXERCICE 1
function whatDayIsToday() {
  console.log(moment().format("[Aujourd'hui nous sommes] dddd."));
}
whatDayIsToday();

// EXERCICE 2
function whatMonthIsIt() {
  console.log(moment().format("[Nous sommes au mois :] MMMM."));
}
whatMonthIsIt();
