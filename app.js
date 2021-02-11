'use strict'
var t = 0




function namQuest (){
  var myName = prompt('Is my name Mal, yes or no?').toLowerCase()

  if (myName == 'yes' || myName == 'y'){
    alert('yes, that is correct!');
    t++;
    return t;
  } else if (myName == 'no' || myName == 'n'){
    alert('sorry, thats not true');
  }
}
namQuest();



function homQuest (){
  var returnTo = prompt('Do I ever want to return to Michigan?').toLowerCase()
   if (returnTo == 'yes' || returnTo == 'y'){
     alert('Sorry, thats not true')
   } else if (returnTo == 'no' || returnTo == 'n'){
     alert('Thats correct!');
     t++;
     return t;
   }
}
homQuest ();


function movQuest(){
  var movie = prompt('Is Sabrina my favorite movie?').toLowerCase()
   if (movie == 'yes' || movie == 'y'){
     alert('Thats correct!');
     t++;
     return t;
   } else if (movie == 'no' || movie == 'n'){
     alert('sorry, thats not true')
    }
}
movQuest();

function songQuest(){
  var song = prompt('Is my favorite song Shambala?').toLowerCase()
   if (song == 'yes' || song == 'y'){
     alert('Thats correct!');
     t++;
     return t;
   } else if (song == 'no' || song == 'n'){
     alert('Sorry, thats not correct.')
   }
}
songQuest();

function gameQuest(){
  var game = prompt('Is my favorite video game Torment?').toLowerCase()
   if (game == 'yes' || game == 'y'){
     alert('Thats correct!');
     t++;
     return t;
   } else if (game == 'no' || game == 'n'){
     alert('Thats incorrect!')
   }
}
gameQuest();


function numQuest(){
  var correctAnswer = 12;
for (var i = 4; i >= 1; i--){
    var userGuess = prompt('guess a number between 1 and 20');
    if (userGuess < correctAnswer){
      alert('too low, try again');
    } else if (userGuess > correctAnswer){
      alert('too high, try again');
    } else if (userGuess == correctAnswer){
      alert('you got it!');
      break;
    }
    t++;  
}
}
numQuest();


function favGameQuest(){
  let arrayOfAnswers = ['Planescape: Torment', 'Final fantasy 7: Remake', 'Final Fantasy 7', 'Baldur\'s Gate 2', 'Baldur\'s Gate', 'Final Fantasy 11', 'Undertale', 'The Witcher 3', 'Cyberpunk 2077', 'Hades']
outerloop:
for (let i = 6; i >= 1; i--){
  var gameAnswer = prompt('Final Question! What is one of my favorite games? You have ' + i + ' tries remaining.')
  for (let a = 0; a < arrayOfAnswers.length; a++){
    if (gameAnswer == arrayOfAnswers[a]){
      alert('good job, thats correct!');
      t++;
      break outerloop;
    } else {
      alert('thats not one of my favorites.');
      break;
      }
  }
  if (i == 1){
    alert('thats your last guess, game over! The correct answers were : Planescape: Torment, Final fantasy 7: Remake, Final Fantasy 7, Baldur\'s Gate 2, Baldur\'s Gate, Final Fantasy 11, Undertale, The Witcher 3, Cyberpunk 2077, Hades.')
  } return t;
}
}
favGameQuest();
alert('you got ' + t + ' answers correct.')
alert('thanks for checking out my page, hope to see you again soon!')