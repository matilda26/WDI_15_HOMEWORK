console.log('PTV');

/*
Inputs:
Alamein line Stations
  Flinders St, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie
Glen Waverly Line Stations
  Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong, Tooronga
Sandringham Line Stations
  Southern Cross, Richmond, South Yarra, Prahran, Windsor

How to get there:
- finds which array/"line" contains the origin station
- displays origin
- finds destination within that array/"line"
- displays destination
- diplays origin, stations to destination, then destination in a sequence
- if destination is before origin, reverse the array
- calculates how many stations were travelled to get to destination
- displays total number of stops


Output:
- origin
- destination
- displays stations in between
- displays how many stops it takes to get to destination

*/



// var origin = 'Tooronga';
// var destination = 'Flagstaff';



// if (.includes(origin) === false) {
//   alert("Sorry, that station doesn't exist");
//   prompt('Which station are you getting on?');
// }

// var exists = function() {
//   if (input.includes(origin) === false) {
//     alert("That station doesn't exist");
//     prompt('Where are you getting on?');
//   }
// }
// var origin = prompt
// exists(input)

var stationsTravelled = [];

var lines = {
  alamein: ['Flinders St', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
}

var origin = prompt('Where are you getting on?');
while (lines.alamein.includes(origin) != true && lines.glenWaverly.includes(origin) != true && lines.sandringham.includes(origin) != true) {
  origin = prompt("Sorry, that station doesn't exist. Where are you getting on?");
}

var destination = prompt('Where are you getting off?');
while (lines.alamein.includes(destination) != true && lines.glenWaverly.includes(destination) != true && lines.sandringham.includes(destination) != true) {
  destination = prompt("Sorry, that station doesn't exist. Where are you getting off?");
}
    
var whichLine = function(track) {
  if (track.includes(origin) === true && track.includes(destination) === true) {
    var start = track.indexOf(origin);
    var end = track.indexOf(destination);
    if (start < end) {
      var journey = track.slice(start, end);
      stationsTravelled = stationsTravelled.concat(journey);
      stationsTravelled.push(destination);
      console.log('origin: ' + origin);
      console.log('destination: ' + destination);
      console.log(stationsTravelled.join(' ----> '));
      console.log(stationsTravelled.length - 1 + ' stops in total');
    } else {
      track.reverse();
      var start = track.indexOf(origin);
      var end = track.indexOf(destination);
      journey = track.slice(start, end);
      stationsTravelled = stationsTravelled.concat(journey);
      stationsTravelled.push(destination);
      console.log('origin: ' + origin);
      console.log('destination: ' + destination);
      console.log(stationsTravelled.join(' ----> '));
      console.log(stationsTravelled.length - 1 + ' stops in total');
    }
  }
}

whichLine(lines.alamein);
whichLine(lines.glenWaverly);
whichLine(lines.sandringham);
