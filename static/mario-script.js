audio = new Audio('media-mario-game/main-audio.mp3')
goaudio = new Audio('media-mario-game/gameover.mp3')
setTimeout(() => {
    audio.play()
}, 1000);
obstacle = document.querySelector('.obstacle')
score = 0;
cross = true;
scorecont = document.querySelector('.scorecont')
document.onkeydown = function (e) {
    // console.log("keycode is :", e.keyCode)
    if (e.keyCode == 38) {
        mario = document.querySelector('.mario')
        mario.classList.add('marioAni')
        setTimeout(() => {
            mario.classList.remove('marioAni')

        }, 500);
    }
    if (e.keyCode == 37) {
        mario = document.querySelector('.mario')
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'))
        mario.style.left = (mariox - 100) + "px"
    }
    if (e.keyCode == 39) {
        mario = document.querySelector('.mario')
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'))
        mario.style.left = (mariox + 100) + "px"

    }
    if (e.keyCode == 32) {
        mario = document.querySelector('.mario')
        mario.classList.add('marioss')
        setTimeout(() => {
            mario.classList.remove('marioss')

        }, 1000);
        // mario.style.left = (mariox + 100) + "px"

    }


}
setInterval(() => {


    gameover = document.querySelector('.gameover')
    mario = document.querySelector('.mario')
    obstacle = document.querySelector('.obstacle')
    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'))
    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'))
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))
    offsetx = Math.abs(mx - ox)
    offsety = Math.abs(my - oy)
    // console.log(offsetx, offsety);
    if (offsetx < 90 && offsety < 90) {
        // scorecont.style.visibility='hidden'
        gameover.innerHTML = "GAME OVER LOSER : Reload to play again LOSER"
        // gameover.style.visibility='visible';
        audio.pause();
        goaudio.play();
        setTimeout(() => {
            goaudio.pause();
        }, 1000);
        // gameover.classList.add('gameover1')
        obstacle.classList.remove('obstacleAni')
    }
    else if (offsetx < 50 && cross) {
        score += 1;
        updateScore(score);
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            newDur = aniDur - 0.1
            if (newDur >= 2)
                obstacle.style.animationDuration = newDur + 's';
            else
                obstacle.style.animatonDuration = 2 + 's';
            console.log(newDur)
        }, 500);
    }

}, 10);
function updateScore(score) {
    container = document.querySelector('.container')
    scorecont = document.querySelector('.scorecont')
    scorecont.innerHTML = "Your Score : " + score
    console.log(score)
    if (score == 5) {
        container.classList.toggle('container2');
        mario.classList.toggle('mario2');

    }
    else if (score == 10) {
        container.classList.toggle('container3');
        mario.classList.toggle('mario3');

    }
}