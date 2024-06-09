document.querySelector(".itzy_freaky").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = itzy_freaky;
    song.play();

    document.querySelector(".artist_details img").src = '/posters/itzy.jpeg';
    document.querySelector('.songname').innerHTML = "freaky";
    document.querySelector('.artistname').innerHTML = "itzy";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "have you slept 8 hours last night?"}';
    document.querySelector(".details p").innerHTML = '"Itzy is a South Korean girl group formed by JYP Entertainment and consisting of members Yeji, Lia, Ryujin, Chaeryeong, and Yuna. They debuted on February 12, 2019, with the release of their single album Itz Different."'
})

document.querySelector(".ive_baddie").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ive_baddie;
    song.play();
    document.querySelector(".artist_details img").src = '/posters/ive_02.png';
    document.querySelector('.songname').innerHTML = "baddie";
    document.querySelector('.artistname').innerHTML = "ive";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "you still haven\'t taken your coffee?"}';
    document.querySelector(".details p").innerHTML = '"Ive is a South Korean girl group formed by Starship Entertainment. The group is composed of six members: Yujin, Gaeul, Rei, Wonyoung, Liz, and Leeseo. Ive is acknowledged for their catchy songs and exploration of themes of self-love in their music."'
    
})

document.querySelector(".ls_smart").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ls_smart;
    song.play();
    document.querySelector(".artist_details img").src = '/posters/ls.jpeg';
    document.querySelector('.songname').innerHTML = "smart";
    document.querySelector('.artistname').innerHTML = "le sserafim";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "it\'s sunday. just do your laundry, pls ;_;"}';
    document.querySelector(".details p").innerHTML = '"Le Sserafim is a South Korean girl group formed by Source Music. The group consists of five members: Sakura, Kim Chae-won, Huh Yun-jin, Kazuha, and Hong Eun-chae. Originally a six-member group, Kim Ga-ram left on July 20, 2022, after the termination of her exclusive contract."'
})

document.querySelector(".ls_impurities").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ls_impurities;
    song.play();
    document.querySelector(".artist_details img").src = '/posters/ls.jpeg';
    document.querySelector('.songname').innerHTML = "impurities";
    document.querySelector('.artistname').innerHTML = "le sserafim";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "github commits over impurities :\") "}';
    document.querySelector(".details p").innerHTML = '"Le Sserafim is a South Korean girl group formed by Source Music. The group consists of five members: Sakura, Kim Chae-won, Huh Yun-jin, Kazuha, and Hong Eun-chae. Originally a six-member group, Kim Ga-ram left on July 20, 2022, after the termination of her exclusive contract."'
})

document.querySelector(".ls_easy").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ls_easy;
    song.play();
    document.querySelector(".artist_details img").src = '/posters/ls.jpeg';
    document.querySelector('.songname').innerHTML = "easy";
    document.querySelector('.artistname').innerHTML = "le sserafim";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "trust me, coding, is !easy"}';
    document.querySelector(".details p").innerHTML = '"Le Sserafim is a South Korean girl group formed by Source Music. The group consists of five members: Sakura, Kim Chae-won, Huh Yun-jin, Kazuha, and Hong Eun-chae. Originally a six-member group, Kim Ga-ram left on July 20, 2022, after the termination of her exclusive contract."'
})

document.querySelector(".ive_off_the_record").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = ive_off_the_record;
    song.play();
    document.querySelector(".artist_details img").src = '/posters/ive_02.png';
    document.querySelector('.songname').innerHTML = "off the record";
    document.querySelector('.artistname').innerHTML = "ive";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "off the record, do you suck at coding? ;_; "}';
    document.querySelector(".details p").innerHTML = '"Ive is a South Korean girl group formed by Starship Entertainment. The group is composed of six members: Yujin, Gaeul, Rei, Wonyoung, Liz, and Leeseo. Ive is acknowledged for their catchy songs and exploration of themes of self-love in their music. "'
})

document.querySelector(".bol4_some").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = bol4_some;
    song.play();
    document.querySelector(".artist_details img").src = '/posters/bol4.png';
    document.querySelector('.songname').innerHTML = "some";
    document.querySelector('.artistname').innerHTML = "bol4";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "Make sure to drink enough water today...^^ "}';
    document.querySelector(".details p").innerHTML = '"Bolbbalgan4, also known as BOL4 or Blushing Youth, is a South Korean musical act formed by Shofar Music in 2016. They appeared on Superstar K6 in 2014 before signing a contract with their current agency. BOL4 was originally a duo consisting of Ahn Ji-young and Woo Ji-yoon."'
})

document.querySelector(".kep1er_another_dream").addEventListener('click', function(e){
    e.preventDefault();
    if(song.isPlaying()){
        song.stop();
    }
    song = kep1er_another_dream;
    song.play();
    document.querySelector(".artist_details img").src = '/posters/kep1er.jpeg';
    document.querySelector('.songname').innerHTML = "another dream";
    document.querySelector('.artistname').innerHTML = "kep1er";
    document.querySelector(".targetMsg").innerHTML = 'function importantMsg(){return "dreams are good, keep working on it :\") "}';
    document.querySelector(".details p").innerHTML = '"Kep1er is a South Korean girl group formed through the Mnet reality competition show Girls Planet 999 in 2021 and managed by Swing Entertainment and WakeOne."'
})