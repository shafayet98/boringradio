document.querySelector(".itzy_freaky").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = itzy_freaky;
    song.play();
})

document.querySelector(".ive_baddie").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ive_baddie;
    song.play();
    
})

document.querySelector(".ls_smart").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ls_smart;
    song.play();
})

document.querySelector(".ls_impurities").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ls_impurities;
    song.play();
})

document.querySelector(".ls_easy").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ls_easy;
    song.play();
})

document.querySelector(".ive_off_the_record").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ive_off_the_record;
    song.play();
})

document.querySelector(".bol4_some").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = bol4_some;
    song.play();
})

document.querySelector(".kep1er_another_dream").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = kep1er_another_dream;
    song.play();
})