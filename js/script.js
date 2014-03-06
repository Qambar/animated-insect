/**
 * Methods for Animation
 */

function yellowFlower() {
    flyOnFlower("200px", "632px");
}

function whiteFlower() {
    flyOnFlower("350px", "132px");
}

function pinkFlower() {
    flyOnFlower("600px", "732px");
}

function flyOnFlower(x, y) {
    try {
        insectSound.currentTime = 0;
        insectSound.play();
    } catch (e) {

    }
    TweenLite.to(insect, 2, {
        top: x,
        left: y,
        delay: 1,
        scale: 2
    });


    // setTimeout(function() {
    // 	TweenLite.to(insect, 2, {top: "-830px", delay:1, scale:0.2});
    // }, 3000);

    setTimeout(function() {
        insectSound.pause();

    }, 2000);
}