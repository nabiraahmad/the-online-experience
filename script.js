function openScreen(screenId) {
    document.querySelectorAll('.app_screen').forEach(function(screen) {
        screen.style.display = 'none';
    });
    if (screenId !== 'home_screen') {
        document.querySelectorAll('#home_screen').forEach(function(icon) {
            icon.style.display = 'none';
        });

    }

    var selectedScreen = document.getElementById(screenId);
    selectedScreen.style.display = 'flex';
    makeSubtitleBlink();

   
    var screenText = getScreenText(screenId);
    displayTextOnScreen(screenText, selectedScreen);
}

document.getElementById('insta_screen').addEventListener('click', function () {
    openScreen('insta_screen');
});

document.getElementById('twitter_screen').addEventListener('click', function () {
    openScreen('twitter_screen');
});
document.getElementById('safari_screen').addEventListener('click', function () {
    openScreen('safari_screen');
});


document.addEventListener('click', function () {
    if (currentIndex < texts.length) {
        introText.innerHTML = "<p>" + texts[currentIndex] + "</p>";
        currentIndex++;
        makeSubtitleBlink();
    }
});

function goBack() {
    document.querySelectorAll('.app_screen').forEach(function(screen) {
        screen.style.display = 'none';
    });
    document.querySelector('#home_screen').style.display = 'flex';
}



document.addEventListener('DOMContentLoaded', function () {
    var introText = document.getElementById('introText');

    var script = [
        "welcome to the online experience",
        "you're looking at Zara, a 15-year-old Muslim girl living on Long Island.",
        "join her for a restless night as she struggles with her online experience.",
        "zara begins her long night on instagram. click on it to continue.",
        "im scared. who are these people commenting on my stuff??",
        "why can't I ever get any positive comments",
        "i can't do this anymore. i'm sick of instagram",
        "click the home button to exit",
        "wanna go on twitter and end the night on a funny note?",
        "what.. why am I getting all this fucked up shit on my feed?!",
        "i should go to sleep.",
        "but i can't. i feel so alone.",
        "i don't wanna do anything anymore.",
        "i need to search something up. click on safari",
        "oh my god my brain is fucked right now",
        "i need to shut my phone off",
    ];
    var currentIndex = 0;
    introText.innerHTML = "<p>" + script[currentIndex] + "</p>";

    introText.addEventListener('click', function () {
        currentIndex++;

         if (currentIndex < script.length) {
            introText.innerHTML = "<p>" + script[currentIndex] + "</p>";
            setTimeout(makeSubtitleBlink, 2000);
        }
        else {
            setTimeout(shutDownPhone, 3000);
        }})});

function makeSubtitleBlink() {
    var subtitle = document.querySelector('.subtitle');
    subtitle.classList.add('blinking-text');
  
    setTimeout(function () {
      subtitle.classList.remove('blinking-text');
    }, 2000); 
  }


// time
const timerRef = document.querySelector(".timer-display");

const appendZero = (value) => (value < 10 ? "0" + value : value);

let storyTime = new Date();
storyTime.setHours(1, 0, 0); // set initial time to 1:00 AM

// display Time
function displayTimer() {
    storyTime.setSeconds(storyTime.getSeconds() + 1);

    let hours = storyTime.getHours();
    let minutes = appendZero(storyTime.getMinutes());
    let seconds = appendZero(storyTime.getSeconds());

    // display time with AM/PM
    timerRef.innerHTML = `${hours}:${minutes}:${seconds} AM`;
}

window.onload = () => {
    // display initial time
    displayTimer();

    // set interval to update the clock every second
    setInterval(displayTimer, 1000);
};

function shutDownPhone() {
    document.querySelectorAll('.app_screen').forEach(function (screen) {
        screen.style.display = 'none';
    });

    var shutdownScreen = document.getElementById('shut_screen');
    shutdownScreen.style.display = 'flex';
}
