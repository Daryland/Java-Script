//JavaScript Logical Operators

// === Equal to
// !== not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to


// && and
// || or
// ! not

var skater1 = 9.5;
var skater2 = 9;
var skater3 = 8.5;

if (
  skater2 < skater3 
  && skater2 <= skater1 
  && skater1 < 100) {
  console.log('Move skater2 into next round');
} else if (
  skater3 > skater2 
  || skater3 === skater2 
  && skater2 < skater1 
  && !isJackedUpOnCaffeine) {
  console.log('skater3 is steppin up their game!');

} else if (skater3 > 5 
&& isJackedUpOnCaffeine) {
  console.log('skater3 takes home the Gold!');


}