// Math.random() goes from 0 to .9)
function changeText()
  {
    var sayings = ["CORRECT", "true, dogs are awesome", "there's only one right answer", "you're wrong sorry bud", "not today mista", "think again..", "try again...", "yes yes yes", "wohoo!! 10 points to you :D", "yes!!!"];
    var rand = (Math.random() * 10);
    rand = Math.round(rand);
    $('.response').html(sayings[rand]+ "");
  }

$('button').on('click', changeText());
