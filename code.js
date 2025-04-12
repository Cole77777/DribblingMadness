var score = 0;
var rebirth = 0;
var playing = true;
var B13Click = false;
var B11Click = false;
var image20Clicked = false;
var button13Clicked = false;
var button17Clicked = false;
var button22Clicked = false;
var button23Clicked = false;
function R2 () {
if (rebirth>=2) {
  showElement("button35");
}
}
function R3 () {
if (rebirth>=3) {
  showElement("button36");
}
}
function R4 () {
if (rebirth>=4) {
  showElement("button37");
}
}
function R5 () {
if (rebirth>=5) {
  showElement("button38");
}
}
onEvent("button25", "click", function( ) {
  showElement("basketball");
  hideElement("silver");
  hideElement("red");
  hideElement("blue");
  hideElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
});
onEvent("button37", "click", function( ) {
  if (score>=50000) {
  showElement("button29");
  hideElement("basketball");
  hideElement("button37");
  showElement("silver");
  hideElement("red");
  hideElement("blue");
  hideElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  score =score-50000;
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button38", "click", function( ) {
  if (score>=75000) {
  showElement("button30");
  hideElement("basketball");
  hideElement("button38");
  hideElement("silver");
  hideElement("red");
  hideElement("blue");
  hideElement("gold");
  showElement("green");
  setScreen("playingScreen");
  score =score-75000;
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button36", "click", function( ) {
  if (score>=10000) {
  showElement("button27");
  hideElement("basketball");
  hideElement("button36");
  hideElement("silver");
  showElement("red");
  hideElement("blue");
  hideElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  score =score-10000;
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button34", "click", function( ) {
  if (score>=5000) {
  showElement("button26");
  hideElement("basketball");
  hideElement("button34");
  hideElement("silver");
  hideElement("red");
  showElement("blue");
  hideElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  score =score-5000;
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button35", "click", function() {
    if (score>=10000) {
  showElement("button28");
  hideElement("basketball");
  hideElement("button35");
  hideElement("silver");
  hideElement("red");
  hideElement("blue");
  showElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  score =score-10000;
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button26", "click", function( ) {
  hideElement("basketball");
  hideElement("silver");
  hideElement("red");
  showElement("blue");
  hideElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
});
onEvent("button28", "click", function( ) {
  hideElement("basketball");
  hideElement("silver");
  hideElement("red");
  hideElement("blue");
  showElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
});
onEvent("button27", "click", function( ) {
  hideElement("basketball");
  hideElement("silver");
  showElement("red");
  hideElement("blue");
  hideElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
});
onEvent("button29", "click", function( ) {
  hideElement("basketball");
  showElement("silver");
  hideElement("red");
  hideElement("blue");
  hideElement("gold");
  hideElement("green");
  setScreen("playingScreen");
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
});
onEvent("button30", "click", function( ) {
  hideElement("basketball");
  hideElement("silver");
  hideElement("red");
  hideElement("blue");
  hideElement("gold");
  showElement("green");
  setScreen("playingScreen");
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
});
onEvent("button32", "click", function( ) {
  setScreen("colorScreen");
});
onEvent("button31", "click", function( ) {
  setScreen("playingScreen");
});
function Lab(){
setProperty("label9", "text", rebirth);
}
function checkB11() {
  if (score>=25000) {
  B11Click=true;
}
}
function checkB13() {
  if (score>=75000) {
  B13Click= true;
}
}
function checkWin() {
  if (score >= 100000) {
    setScreen("winScreen");
    playSound("assets/category_sports/Crowd_Cheer_SFX.mp3", true);
  }
}
  function checkImage20() {
  if (score >= 50000) {
    showElement("image20");
  }
}
  function hideImage20() {
    if(image20Clicked == true)
    hideElement("image20");
  }
  onEvent("image20", "click", function( ) {
    image20Clicked = true;
  });
function checkUnlockCondition() {
  if (button13Clicked && button17Clicked) {
    hideElement("image9");
    showElement("image16");
  }
}
setProperty("button16", "background-color", "green");
setProperty("button16", "text", "Music On");
playSound("assets/audiomass-output.mp3", true);
checkWin();
checkImage20();
hideImage20();
onEvent("button16", "click", function() {
  playing = !playing;
  if (!playing) {
    stopSound("assets/audiomass-output.mp3");
    setProperty("button16", "background-color", "red");
    setProperty("button16", "text", "Music Off");
  } else {
    setProperty("button16", "background-color", "green");
    setProperty("button16", "text", "Music On");
    playSound("assets/audiomass-output.mp3", true);
  }
});
checkWin();
onEvent("image9", "click", function() {
  setScreen("storeScreen");
});
var hideTimeout;
var x = randomNumber(10, 250);
var y = randomNumber(10, 250);
function moveImage10() {
  setProperty("image10", "x", x);
  setProperty("image10", "y", y);
  showElement("image10");
  hideTimeout = setTimeout(function() {
    hideElement("image10");
  }, 3000);
}
function moveImage21() {
  setProperty("image21", "x", x);
  setProperty("image21", "y", y);
  showElement("image21");
  hideTimeout = setTimeout(function() {
    hideElement("image21");
  }, 3000);
}

setInterval(moveImage10, randomNumber(40000, 41000));
setInterval(moveImage21, randomNumber(10000, 11000));
onEvent("image10", "click", function() {
  playSound("assets/category_collect/energy_bar_recharge_4.mp3", false);
  if (B13Click == true) {
    score = score+250;
  } else if (B11Click == true){
    score = score+100;
  } else {
    score =score+50;
  }
  checkB11();
  checkB13();
  setProperty("label3", "text", score);
  clearTimeout(hideTimeout);
  hideElement("image10");
  hideElement("image21");
  checkB11();
  checkB13();
checkWin();
});
onEvent("image21", "click", function() {
  playSound("assets/category_collect/energy_bar_recharge_4.mp3", false);
  if (B13Click == true) {
    score = score+125;
  } else if (B11Click == true){
    score = score+50;
  } else {
    score =score+25;
  }
  checkB11();
  checkB13();
  setProperty("label3", "text", score);
  clearTimeout(hideTimeout);
  hideElement("image21");
  checkB11();
  checkB13();
checkWin();
});
function bounceEffect(bounce) {
  var startSize = getProperty(bounce, "width");
  setProperty(bounce, "width", startSize - 5);
  setProperty(bounce, "height", startSize - 5);
  setTimeout(function() {
    setProperty(bounce, "width", startSize);
    setProperty(bounce, "height", startSize);
  }, 75);
}
var time; 
var time2;
var time3;
var time4;
var time5;
onEvent("button11", "click", function() {
setProperty("label3", "text", score);
checkWin();
  if (!time && score >= 100) {
    checkImage20();
    hideImage20();
    hideElement("button11");
    setScreen("playingScreen");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
    if (time2) {
      clearInterval(time2);
      time2 = null;
    }
    if (time3) {
      clearInterval(time3);
      time3 = null;
    }
    if (time4) {
      clearInterval(time4);
      time4 = null;
    }
    if (time5) {
      clearInterval(time5);
      time5 = null;
    }
    time = setInterval(function() {
      score = score+1;
      setProperty("label3", "text", score);
    }, 1000);
    score = score-100;
    setProperty("label3", "text", score);
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button15", "click", function() {
  checkWin();
  if (!time2 && score >= 2000) {
    checkImage20();
    hideImage20();
    hideElement("button15");
    hideElement("button11");
    setScreen("playingScreen");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
    if (time) {
      clearInterval(time);
      time = null;
    }
    if (time4) {
      clearInterval(time4);
      time4 = null;
    }
    if (time5) {
      clearInterval(time5);
      time5 = null;
    }
    if (time3) {
      clearInterval(time3);
      time3 = null;
    }
    time2 = setInterval(function() {
      score = score+2;
      setProperty("label3", "text", score);
    }, 1000);
    score = score-2000;
    setProperty("label3", "text", score);
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button17", "click", function() {
  checkWin();
  if (score >= 3000) {
    button17Clicked = true;
    setScreen("playingScreen");
    hideElement("button17");
    hideElement("button15");
    hideElement("button11");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
    if (time2) {
      clearInterval(time2);
      time2 = null;
    }
    if (time) {
      clearInterval(time);
      time = null;
    }
    if (time4) {
      clearInterval(time4);
      time4 = null;
    }
    if (time5) {
      clearInterval(time5);
      time5 = null;
    }
    time3 = setInterval(function() {
      score = score + 3;
      setProperty("label3", "text", score);
    }, 1000);
    score = score - 3000;
    setProperty("label3", "text", score);
    checkUnlockCondition();
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button22", "click", function() {
  checkWin();
  if (score >= 25000) {
    button22Clicked = true;
    setScreen("playingScreen");
    hideElement("button17");
    hideElement("button15");
    hideElement("button11");
    hideElement("button22");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
    if (time2) {
      clearInterval(time2);
      time2 = null;
    }
    if (time) {
      clearInterval(time);
      time = null;
    }
    if (time3) {
      clearInterval(time3);
      time3 = null;
    }
    if (time5) {
      clearInterval(time5);
      time5 = null;
    }
    time4 = setInterval(function() {
      score = score + 10;
      setProperty("label3", "text", score);
    }, 1000);
    score = score - 25000;
    setProperty("label3", "text", score);
    checkUnlockCondition();
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button23", "click", function() {
  checkWin();
  if (score >= 75000) {
    button23Clicked = true;
    setScreen("playingScreen");
    hideElement("button17");
    hideElement("button15");
    hideElement("button11");
    hideElement("button22");
    hideElement("button23");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
    if (time2) {
      clearInterval(time2);
      time2 = null;
    }
    if (time) {
      clearInterval(time);
      time = null;
    }
    if (time3) {
      clearInterval(time3);
      time3 = null;
    }
        if (time4) {
      clearInterval(time4);
      time4 = null;
    }
    time5 = setInterval(function() {
      score = score + 100;
      setProperty("label3", "text", score);
    }, 1000);
    score = score - 75000;
    setProperty("label3", "text", score);
    checkUnlockCondition();
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button1", "click", function() {
  color();
  Lab();
  checkWin();
  R2();
  R3();
  R4();
  R5();
  setScreen("playingScreen");
  setProperty("label3", "text", score);
});
var double = false;
var triple = false;
var quad = false;
var quint = false;
var dec = false;
var fif = false;
var hundo = false;
var tundo = false;
onEvent("button7", "click", function( ) {
  if (score>=300) {
    hideElement("button7");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
  double = true;
  triple = false;
  quad = false;
  quint = false;
  dec = false;
  fif = false;
  score=score-300;
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button8", "click", function( ) {
  checkWin();
  if (score>=500) {
    hideElement("button7");
    hideElement("button8");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
  double = false;
  triple = true;
  quad = false;
  quint = false;
  dec = false;
  fif = false;
  score=score-500;
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button9", "click", function( ) {
  checkWin();
  if (score>=1000) {
    hideElement("button7");
    hideElement("button8");
    hideElement("button9");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
      double = false;
  triple = false;
  quad = true;
  quint = false;
  dec = false;
  fif = false;
  score=score-1000;
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button10", "click", function( ) {
  checkWin();
  if (score>=2500) {
    hideElement("button7");
    hideElement("button8");
    hideElement("button9");
    hideElement("button10");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
  double = false;
  triple = false;
  quad = false;
  quint = true;
  dec = false;
  fif = false;
  score=score-2500;
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});

onEvent("button14", "click", function( ) {
  checkWin();
  if (score>=5000) {
    hideElement("button7");
    hideElement("button8");
    hideElement("button9");
    hideElement("button10");
    hideElement("button14");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
  double = false;
  triple = false;
  quad = false;
  quint = false;
  dec = true;
  fif = false;
  score=score-5000;
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button13", "click", function() {
  checkWin();
  if (score >= 7500) {
    checkUnlockCondition();
    B13Click = true;
    button13Clicked = true;
    hideElement("button7");
    hideElement("button8");
    hideElement("button9");
    hideElement("button10");
    hideElement("button14");
    hideElement("button13");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
    double = false;
    triple = false;
    quad = false;
    quint = false;
    dec = false;
    fif = true;
    score = score - 7500;
    setProperty("label3", "text", score);
    setScreen("playingScreen");
    checkUnlockCondition();
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("blue", "click", function() {
  setProperty("blue", "width", 95);
  setProperty("blue", "height", 95);
  if (triple) {
    score = score+3;
  }
  else if (double) {
    score= score+2;
    } else if (quint) {
    score= score+5;
    } else if (quad) {
    score= score+4;
    } else if (dec) {
      score= score +10;
    } else if (fif) {
      score= score+50;
    } else if (hundo) {
      score= score+100;
    } else if (tundo) {
      score= score+200;
    } else {
    score= score+1;
  }
  setProperty("label3", "text", score);
  setPosition("blue", 115, 270);
  playSound("assets/category_sports/Hitting_Soccer_Ball_SFX.mp3", false);
  bounceEffect("blue");
  checkImage20();
  hideImage20();
  checkWin();
  checkB11();
  checkB13();
});
onEvent("basketball", "click", function() {
  setProperty("basketball", "width", 90);
  setProperty("basketball", "height", 95);
  if (triple) {
    score = score+3;
  }
  else if (double) {
    score= score+2;
    } else if (quint) {
    score= score+5;
    } else if (quad) {
    score= score+4;
    } else if (dec) {
      score= score +10;
    } else if (fif) {
      score= score+50;
    } else if (hundo) {
      score= score+100;
    } else if (tundo) {
      score= score+200;
    } else {
    score= score+1;
  }
  setProperty("label3", "text", score);
  setPosition("basketball", 115, 270);
  playSound("assets/category_sports/Hitting_Soccer_Ball_SFX.mp3", false);
  bounceEffect("basketball");
  checkImage20();
  hideImage20();
  checkWin();
  checkB11();
  checkB13();
});
onEvent("red", "click", function() {
  setProperty("red", "width", 95);
  setProperty("red", "height", 95);
  if (triple) {
    score = score+3;
  }
  else if (double) {
    score= score+2;
    } else if (quint) {
    score= score+5;
    } else if (quad) {
    score= score+4;
    } else if (dec) {
      score= score +10;
    } else if (fif) {
      score= score+50;
    } else if (hundo) {
      score= score+100;
    } else if (tundo) {
      score= score+200;
    } else {
    score= score+1;
  }
  setProperty("label3", "text", score);
  setPosition("gold", 115, 270);
  playSound("assets/category_sports/Hitting_Soccer_Ball_SFX.mp3", false);
  bounceEffect("gold");
  checkImage20();
  hideImage20();
  checkWin();
  checkB11();
  checkB13();
  });
onEvent("gold", "click", function() {
  setProperty("gold", "width", 95);
  setProperty("gold", "height", 95);
  if (triple) {
    score = score+3;
  }
  else if (double) {
    score= score+2;
    } else if (quint) {
    score= score+5;
    } else if (quad) {
    score= score+4;
    } else if (dec) {
      score= score +10;
    } else if (fif) {
      score= score+50;
    } else if (hundo) {
      score= score+100;
    } else if (tundo) {
      score= score+200;
    } else {
    score= score+1;
  }
  setProperty("label3", "text", score);
  setPosition("gold", 115, 270);
  playSound("assets/category_sports/Hitting_Soccer_Ball_SFX.mp3", false);
  bounceEffect("gold");
  checkImage20();
  hideImage20();
  checkWin();
  checkB11();
  checkB13();
});
onEvent("silver", "click", function() {
  setProperty("silver", "width", 95);
  setProperty("silver", "height", 95);
  if (triple) {
    score = score+3;
  }
  else if (double) {
    score= score+2;
    } else if (quint) {
    score= score+5;
    } else if (quad) {
    score= score+4;
    } else if (dec) {
      score= score +10;
    } else if (fif) {
      score= score+50;
    } else if (hundo) {
      score= score+100;
    } else if (tundo) {
      score= score+200;
    } else {
    score= score+1;
  }
  setProperty("label3", "text", score);
  setPosition("silver", 115, 270);
  playSound("assets/category_sports/Hitting_Soccer_Ball_SFX.mp3", false);
  bounceEffect("silver");
  checkImage20();
  hideImage20();
  checkWin();
  checkB11();
  checkB13();
});
onEvent("green", "click", function() {
  setProperty("green", "width", 95);
  setProperty("green", "height", 95);
  if (triple) {
    score = score+3;
  }
  else if (double) {
    score= score+2;
    } else if (quint) {
    score= score+5;
    } else if (quad) {
    score= score+4;
    } else if (dec) {
      score= score +10;
    } else if (fif) {
      score= score+50;
    } else if (hundo) {
      score= score+100;
    } else if (tundo) {
      score= score+200;
    } else {
    score= score+1;
  }
  setProperty("label3", "text", score);
  setPosition("green", 115, 270);
  playSound("assets/category_sports/Hitting_Soccer_Ball_SFX.mp3", false);
  bounceEffect("green");
  checkImage20();
  hideImage20();
  checkWin();
  checkB11();
  checkB13();
});
onEvent("image4", "click", function() {
  hideElement("label10");
  showElement("label7");
  hideElement("image4");
  setScreen("triviaScreen");
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3", false);
});
onEvent("button2", "click", function() {
  playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
  score = score + 100;
  setProperty("label3", "text", score);
  setScreen("correctScreen");
  checkImage20();
  hideImage20();
  checkWin();
});
onEvent("button3", "click", function() {
  setProperty("label3", "text", score);
  playSound("assets/yyyyy.mp3", false);
  setScreen("incorrectScreen");
});
onEvent("button19", "click", function() {
  playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
  score = score + 5000;
  setProperty("label3", "text", score);
  setScreen("correctScreen");
  checkImage20();
  hideImage20();
  checkWin();
});
onEvent("button18", "click", function() {
  setProperty("label3", "text", score);
  setScreen("incorrectScreen");
  playSound("assets/yyyyy.mp3", false);
});
onEvent("button5", "click", function() {
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  setProperty("label3", "text", score);
  checkWin();
  checkImage20();
  hideImage20();
  checkB11();
  checkB13();
});
onEvent("button6", "click", function() {
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  setProperty("label3", "text", score);
      checkWin();
});
function color() {
  if (rebirth>=1) {
  showElement("button32");
}
}
onEvent("button4", "click", function() {
  color();
  double=false;
  triple=false;
  quad=false;
  quint=false;
  dec=false;
  fif=false;
  hundo=false;
  tundo=false;
  rebirth = rebirth+1;
  B13Click = false;
  B11Click=false;
  button13Clicked = false;
  button17Clicked = false;
  button22Clicked = false;
  button23Clicked = false;
  image20Clicked= false;
  hideElement("image20");
  hideElement("label10");
  score = 0;
  Lab();
  showElement("button32");
  showElement("label7");
  showElement("button20");
  showElement("button21");
  showElement("button22");
  showElement("button23");
  showElement("image9");
  hideElement("button35");
  hideElement("button36");
  hideElement("button37");
  hideElement("button38");
  hideElement("image16");
  hideElement("button28");
  hideElement("button27");
  hideElement("button29");
  hideElement("button30");
  showElement("button7");
  showElement("button8");
  showElement("button9");
  showElement("button10");
  showElement("button11");
  showElement("button13");
  showElement("button14");
  showElement("button15");
  showElement("button17");
  setProperty("label3", "text", score);
  stopSound("assets/category_sports/Crowd_Cheer_SFX.mp3");
  setScreen("welcomeScreen");
  showElement("image4");
  R2();
  R3();
  R4();
  R5();
  if (time) {
    clearInterval(time);
    time = null;
  }
      if (time2) {
    clearInterval(time2);
    time2 = null;
      }
      if (time3) {
    clearInterval(time3);
    time3 = null;
  }
  if (time4) {
    clearInterval(time4);
    time4 = null;
  }
  if (time5) {
    clearInterval(time5);
    time5 = null;
  }
   checkWin();
});
onEvent("button33", "click", function() {
  double=false;
  triple=false;
  quad=false;
  quint=false;
  dec=false;
  fif=false;
  hundo=false;
  tundo=false;
  rebirth = 0;
  B13Click = false;
  B11Click=false;
  button13Clicked = false;
  button17Clicked = false;
  button22Clicked = false;
  button23Clicked = false;
  image20Clicked= false;
  hideElement("image20");
  hideElement("label10");
  score = 0;
  Lab();
  hideElement("button32");
  showElement("label7");
  showElement("button20");
  showElement("button21");
  showElement("button22");
  showElement("button23");
  showElement("image9");
  hideElement("button35");
  hideElement("button36");
  hideElement("button37");
  hideElement("button38");
  hideElement("image16");
  hideElement("button28");
  hideElement("button27");
  hideElement("button29");
  hideElement("button30");
  showElement("button7");
  showElement("button8");
  showElement("button9");
  showElement("button10");
  showElement("button11");
  showElement("button13");
  showElement("button14");
  showElement("button15");
  showElement("button17");
  setProperty("label3", "text", score);
  stopSound("assets/category_sports/Crowd_Cheer_SFX.mp3");
  setScreen("welcomeScreen");
  showElement("image4");
  R2();
  R3();
  R4();
  R5();
  if (time) {
    clearInterval(time);
    time = null;
  }
      if (time2) {
    clearInterval(time2);
    time2 = null;
      }
      if (time3) {
    clearInterval(time3);
    time3 = null;
  }
  if (time4) {
    clearInterval(time4);
    time4 = null;
  }
  if (time5) {
    clearInterval(time5);
    time5 = null;
  }
   checkWin();
});
onEvent("button12", "click", function( ) {
  setScreen("playingScreen");
});
onEvent("image20", "click", function( ) {
  setScreen("triviasScreen");
  hideImage20();
  showElement("label10");
  hideElement("label7");
});
onEvent("image16", "click", function( ) {
  setScreen("advancedStoreScreen");
});
onEvent("button24", "click", function( ) {
  setScreen("playingScreen");
});
onEvent("button20", "click", function( ) {
  checkWin();
  if (score>=15000) {
    hideElement("button20");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
  double = false;
  triple = false;
  quad = false;
  quint = false;
  dec = false;
  fif = false;
  hundo =true;
  score=score-15000;
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
onEvent("button21", "click", function( ) {
  checkWin();
  if (score>=50000) {
    hideElement("button20");
    hideElement("button21");
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3", false);
  triple = false;
  quad = false;
  quint = false;
  dec = false;
  fif = false;
  hundo =false;
  tundo =true;
  score=score-50000;
  setProperty("label3", "text", score);
  setScreen("playingScreen");
  } else {
    playSound("assets/yyyyy.mp3", false);
  }
});
timedLoop(1000, function() {
  color();
  checkWin();
  checkImage20();
  checkUnlockCondition();
  setProperty("label3", "text", score);
});