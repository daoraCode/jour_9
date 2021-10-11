var moment = require('moment'); // import du module moment
// moment().format();

moment().format("[Aujourd'hui nous sommes] dddd");
moment.locale('en');
moment.locale('fr'); // use french paramter translation with moment

var days = [
  'dimanche',
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi',
  'samedi',
];

// EXERCICE 1
function whatDayIsToday() {
  moment().format("[Aujourd'hui nous sommes] dddd");
  console.log(moment().format("[Aujourd'hui nous sommes] dddd."));
}
whatDayIsToday();
