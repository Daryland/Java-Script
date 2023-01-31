// JavaScript Loops

var tvShows = [
  'The Witcher',
  'Golden Girls',
  'Magic School Bus',
];

// var userSavedMovies = [];

var completeItems = [];

var toDos = [
  {title: 'Item 1', completed: true },
  {title: 'Item 2', completed: false },
  {title: 'Item 3', completed: false },
  {title: 'Item 4', completed: true },
];

for (var x = 0; x < toDos.length; x++) {
  if (toDos[x].completed) {
    completeItems.push(toDos[x]);
  }
}

//wild loop
var bottles =99;
while (bottles > 0) {
  if (bottles !== 1) {
  console.log(bottles + ' bottles of stuff on the wall');
  } else {
  console.log(bottles + ' bottle of stuff on the wall');  
  }
  bottles -= 1;
}

console.log(toDos);
console.log(completeItems);


// for (var i = 0; i <tvShows.length; i++) {
//   console.log(tvShows[i]);
// }


// 0 < 3 = true; 0 + 1 = 1
// 1 < 3 = true; 1 + 1 = 2
// 2 < 3 = true; 2 + 1 = 3
// 3 < 3 = false;