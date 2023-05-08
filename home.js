function playPause(){
    var music = new Audio('Songs/Old RuneScape Soundtrack_ Sea Shanty2.mp3');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}