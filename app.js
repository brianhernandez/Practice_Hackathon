/** ScrollSpy **/

var redEntry = document.getElementById('red');
var blueEntry = document.getElementById('blue');
var greenEntry = document.getElementById('green');
var yellowEntry = document.getElementById('yellow');
var redTab = document.getElementById('redTab');
// var navBarPosition = document.getElementsByClassName('scrollspy');

// console.log(redEntryPosition.offsetLeft);
// console.log(blueEntryPosition.offsetLeft);
// console.log(greenEntryPosition.offsetLeft);
// console.log(yellowEntryPosition.offsetLeft);

console.log(redEntry.getBoundingClientRect());
console.log(blueEntry.getBoundingClientRect());
console.log(greenEntry.getBoundingClientRect());
console.log(yellowEntry.getBoundingClientRect());
console.log(redTab.getBoundingClientRect());
// console.log(navBarPosition.getBoundingClientRect());

console.log(blueEntry.getBoundingClientRect().top - redTab.getBoundingClientRect().bottom);

while ( blueEntry.getBoundingClientRect().top - redTab.getBoundingClientRect().bottom <= 5 ) {
	
}