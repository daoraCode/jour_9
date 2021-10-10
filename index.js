// 1 - Aujourd'hui
// var days = [
//   'dimanche',
//   'lundi',
//   'mardi',
//   'mercredi',
//   'jeudi',
//   'vendredi',
//   'samedi',
// ];

// var months = [
//   'janvier',
//   'février',
//   'mars',
//   'avril',
//   'mai',
//   'juin',
//   'juillet',
//   'aout',
//   'septembre',
//   'octobre',
//   'novembre',
//   'décembre',
// ];

// function whatDayIsToday() {
//     var date = new Date();
//     var day = date.getDay();
//     day = days[day];
//    return console.log(`Aujourd'hui nous sommes ${day}`);
// }
// whatDayIsToday();

// function whatMonthIsIt() {
//     var date = new Date();
//     var month = date.getMonth();
//     month = months[month];
//    return console.log(`Nous sommes au mois de : ${month}`);
// }
// whatMonthIsIt();

// function formatDate(date) {
//     var date = new Date(date);
//     var format = date.toLocaleDateString();
//     console.log(format);
// }
// formatDate("2020-03-02");



// function calculateAge(age) {
  //   var actualDate = new Date().getFullYear(); // Je définis la date actuelle
  //   var birthday = new Date(age); // Je définis la date à laquelle je suis né (paramètre : age)
  //   var diff = birthday.getFullYear(); // La méthode `getFullYear` me permettra d'obtenir essentiellement l'année désirée 
  //   console.log(`Vous avez ${actualDate - diff} ans.`);
  // }
  // calculateAge('1996');
