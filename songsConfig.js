document.querySelector(".pauseSong").addEventListener('click', function(e){
    e.preventDefault();
    // console.log("Here");
    // pauseSongtoggle();
})


document.querySelector(".ls_impurities").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ls_impurities;
    song.play();

    document.querySelector('.songname').innerHTML = "impurities";
    document.querySelector('.artistname').innerHTML = "le sserafim";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "github commits over impurities :\") "}';
})

document.querySelector(".ls_easy").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ls_easy;
    song.play();
    
    document.querySelector('.songname').innerHTML = "easy";
    document.querySelector('.artistname').innerHTML = "le sserafim";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "trust me, coding, is !easy"}';
})

document.querySelector(".ive_off_the_record").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ive_off_the_record;
    song.play();

    document.querySelector('.songname').innerHTML = "off the record";
    document.querySelector('.artistname').innerHTML = "ive";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "off the record, do you suck at coding? ;_; "}';
})

document.querySelector(".bol4_some").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = bol4_some;
    song.play();

    document.querySelector('.songname').innerHTML = "some";
    document.querySelector('.artistname').innerHTML = "bol4";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "Make sure to drink enough water today...^^ "}';
})

document.querySelector(".kep1er_another_dream").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = kep1er_another_dream;
    song.play();

    document.querySelector('.songname').innerHTML = "another dream";
    document.querySelector('.artistname').innerHTML = "kep1er";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "dreams are good, keep working on it :\") "}';
})